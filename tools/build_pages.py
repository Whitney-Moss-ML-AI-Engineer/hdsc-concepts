"""Build the shared Services, Government Contracting and Careers pages for all 13 concept sites
from data/hdsc-catalog.json (generated from the HDSC Service Catalog and the IT Service Labor
Category Descriptions workbooks). Output is WordPress block markup, one file per page per concept."""
import json, re, html, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
cat = json.loads((ROOT / "data/hdsc-catalog.json").read_text())
CONCEPTS = ["signal","blueprint","onyourside","commandline","thefix","frontier","nopatience",
            "builtby","anyonesengineer","levelup","plainlyput","standard","enterprisegrid"]
e = lambda s: html.escape(s, quote=False)
def h(level, text): return f'<!-- wp:heading {{"level":{level}}} -->\n<h{level} class="wp-block-heading">{e(text)}</h{level}>\n<!-- /wp:heading -->\n\n'
def p(text): return f'<!-- wp:paragraph -->\n<p>{text}</p>\n<!-- /wp:paragraph -->\n\n'
def ul(items): 
    li = "".join(f'<!-- wp:list-item -->\n<li>{i}</li>\n<!-- /wp:list-item -->' for i in items)
    return f'<!-- wp:list -->\n<ul class="wp-block-list">{li}</ul>\n<!-- /wp:list -->\n\n'
SEP = '<!-- wp:separator -->\n<hr class="wp-block-separator has-alpha-channel-opacity"/>\n<!-- /wp:separator -->\n\n'
def details(summary, inner):
    return (f'<!-- wp:details -->\n<details class="wp-block-details"><summary>{e(summary)}</summary>'
            f'{inner}</details>\n<!-- /wp:details -->\n\n')
def table(head, rows):
    th = "".join(f"<th>{e(x)}</th>" for x in head)
    tr = "".join("<tr>" + "".join(f"<td>{e(c)}</td>" for c in r) + "</tr>" for r in rows)
    return (f'<!-- wp:table -->\n<figure class="wp-block-table"><table><thead><tr>{th}</tr></thead>'
            f'<tbody>{tr}</tbody></table></figure>\n<!-- /wp:table -->\n\n')
N, P = cat["naics"], cat["psc"]
code = lambda c: f"{c} {N[c]}" if c in N else f"{c} {P[c]}"
FOOT = p("Heavy Duty Security Co., LLC · 3723 Minnesota Avenue, St. Louis, MO 63118 · UEI Z6DLQLN43GD7 · CAGE/NCAGE 6D7N5 · www.HeavyDutySecurityCo.com")

def services():
    out = h(1, "Services and Pricing")
    out += p("HDSC diagnoses, repairs and replaces the hardware and software behind your security, network, "
             "endpoint, server, cloud and database systems. Every service call starts with the "
             f"<strong>{cat['diagnosticFee']} standard diagnostic fee</strong>.")
    out += SEP
    cats = []
    for s in cat["services"]:
        if s["category"] not in cats: cats.append(s["category"])
    for c in cats:
        out += h(2, c)
        for s in [s for s in cat["services"] if s["category"] == c]:
            d = re.sub(r"\s*\(\$150 Standard Diagnostic Fee\)\.?", "", s["description"]).strip()
            out += h(3, s["name"])
            out += p(f"<em>{e(s['technology'])} · {e(s['scope'])} · {e(cat['diagnosticFee'])} diagnostic fee</em>")
            out += p(e(d))
            out += p("NAICS " + " · ".join(s["naics"]) + " &nbsp;|&nbsp; PSC " + " · ".join(s["psc"]))
        out += SEP
    out += p('For federal task orders, see <a href="/government-contracting/">Government Contracting</a> for our NAICS/PSC map and full capabilities.')
    return out + FOOT

def govcon():
    c = cat["company"]
    out = h(1, "Government Contracting")
    out += p(f"{e(c['legalName'])} is a small business in St. Louis, Missouri that supports federal, state and local "
             "agencies directly and as a subcontractor or teaming partner to prime contractors. Each service below is "
             "mapped to the NAICS and PSC codes contracting officers use to find and evaluate vendors.")
    out += ul([f"UEI: {c['uei']}", f"CAGE / NCAGE: {c['cage']}", "Address: 3723 Minnesota Avenue, St. Louis, MO 63118",
               "Business size: Small Business", f"Website: {c['website']}"])
    out += SEP + h(2, "Service-to-Code Map")
    out += p("Every priced service in our catalog with its NAICS (2022) and PSC codes.")
    out += table(["Service", "Scope", "NAICS", "PSC"],
                 [[s["name"], s["scope"], ", ".join(s["naics"]), ", ".join(s["psc"])] for s in cat["services"]])
    out += h(2, "Capability-to-Code Map")
    rows = [[a["title"], ", ".join(a["naics"]), ", ".join(a["psc"])] for a in cat["federal"]["functionalAreas"]]
    for k in ("categoryA", "categoryB", "categoryC"):
        g = cat["federal"][k]
        rows += [[f"{g['title']}: {a['title']}", ", ".join(a["naics"]), ", ".join(a["psc"])] for a in g["areas"]]
    out += table(["Capability", "NAICS", "PSC"], rows)
    out += SEP + h(2, "Full Capabilities Outline")
    out += h(3, "Technical Functional Areas")
    for a in cat["federal"]["functionalAreas"]:
        inner = p(e(a["summary"]))
        items = []
        for s_ in a["subareas"]:
            items.append(s_["name"])
            d = s_["description"]
            if d and len(d) < 70 and not d.endswith((".", ":")):  # second column of a two-column list
                items.append(d)
        items = list(dict.fromkeys(i for i in items if not i.endswith(":")))
        if items: inner += ul([e(i) for i in items])
        inner += p("NAICS " + ", ".join(a["naics"]) + " · PSC " + ", ".join(a["psc"]))
        out += details(a["title"], inner)
    first = lambda t: re.split(r"(?<=\.)\s", t.strip(), maxsplit=1)[0]
    for k in ("categoryA", "categoryB", "categoryC"):
        g = cat["federal"][k]
        out += h(3, f"{g['title']} (NAICS {g['naics']})")
        for a in g["areas"]:
            inner = p(e(first(a["description"])))
            if a.get("subareas"): inner += ul([e(s_["name"]) for s_ in a["subareas"]])
            inner += p("PSC " + ", ".join(a["psc"]))
            out += details(a["title"], inner)
    out += SEP + h(2, "Code Reference")
    out += table(["NAICS (2022)", "Title"], [[k, v] for k, v in N.items()])
    out += table(["PSC", "Title"], [[k, v] for k, v in P.items()])
    out += p(e(cat["codeNotes"]))
    return out + FOOT

def careers():
    out = h(1, "Careers")
    out += p("Join the HDSC network of technicians, engineers and analysts. Each opening below uses HDSC's labor "
             "category description, education level, degree field, years of experience and substitutions exactly as published.")
    out += p('<a href="/apply/">Apply now</a> — upload your résumé from any phone, or apply through the HDSC app.')
    out += SEP + h(2, f"Labor Categories ({len(cat['laborCategories'])})")
    for l in cat["laborCategories"]:
        inner = p(e(l["description"]))
        req = [f"<strong>Education:</strong> {e(l['education'])}"]
        if l["degree"]: req.append(f"<strong>Degree:</strong> {e(l['degree'])}")
        if l["experience"]: req.append(f"<strong>Experience:</strong> {e(l['experience'])}")
        if l["substitutions"]: req.append(f"<strong>Substitutions:</strong> {e(l['substitutions'])}")
        inner += ul(req)
        out += details(f"{l['id']} · {l['title']}", inner)
    return out + FOOT

pages = {"services.html": services(), "government-contracting.html": govcon(), "careers.html": careers()}
for cid in CONCEPTS:
    d = ROOT / "concepts" / cid
    for name, body in pages.items():
        (d / name).write_text(body)
    hp = (d / "home.html").read_text()
    hp = re.sub(r'<!-- wp:heading \{"level":2\} -->\n<h2 class="wp-block-heading">CompTIA-Grounded Capabilities</h2>.*?<!-- /wp:list -->',
        h(2, "Services").rstrip() + "\n\n" + p("Diagnosis, repair and replacement for security, network, endpoint, server, cloud and database hardware and software. Every service call starts with the $150 standard diagnostic fee.").rstrip() + "\n\n" +
        ul([f"{e(c)} — {n} services" for c, n in [(c, sum(1 for s in cat['services'] if s['category']==c)) for c in dict.fromkeys(s['category'] for s in cat['services'])]]).rstrip(),
        hp, flags=re.S)
    hp = hp.replace(" · WOSB</p>", "</p>")
    (d / "home.html").write_text(hp)
print("built", len(CONCEPTS), "concepts")

# ---- Chunked output for publishing through the WordPress block API ----
def split_blocks(markup):
    """Split serialized markup into top-level blocks."""
    out, depth, cur = [], 0, []
    for line in re.split(r'(?=<!-- /?wp:)', markup):
        if not line.strip(): continue
        m = re.match(r'<!-- (/?)wp:([a-z0-9/-]+)[^>]*?(/?)-->', line)
        if m:
            closing, selfclose = m.group(1) == '/', m.group(3) == '/'
            if not closing and not selfclose: depth += 1
            if closing: depth -= 1
        cur.append(line)
        if depth == 0:
            out.append(''.join(cur)); cur = []
    return out
def chunk(markup, limit=18000):
    blocks = split_blocks(markup); groups, cur = [], ''
    for b in blocks:
        if len(cur) + len(b) > limit and cur:
            groups.append(cur); cur = ''
        cur += b
    if cur: groups.append(cur)
    wrap = lambda s: '<!-- wp:group {"layout":{"type":"constrained"}} -->\n<div class="wp-block-group">' + s + '</div>\n<!-- /wp:group -->'
    return [wrap(g) for g in groups]
outdir = ROOT / "build"; outdir.mkdir(exist_ok=True)
for name, body in pages.items():
    parts = chunk(body)
    for i, part in enumerate(parts):
        (outdir / f"{name[:-5]}.{i:02d}.html").write_text(part)
    print(name, len(parts), "chunks")

# ---- Compact publish format: plain HTML in core/html blocks (smaller payloads for the API) ----
def compact(markup):
    s = re.sub(r'<!-- /?wp:[^>]*-->', '', markup)
    s = re.sub(r' class="wp-block-[^"]*"', '', s)
    s = re.sub(r'<figure><table>', '<table>', s).replace('</table></figure>', '</table>')
    s = re.sub(r'\n\s*\n+', '\n', s).strip()
    return s
def html_chunks(markup, limit=22000):
    s = compact(markup)
    pieces = re.split(r'(?=<h[123]>|<details>)', s)
    out, cur = [], ''
    for pc in pieces:
        if len(cur) + len(pc) > limit and cur:
            out.append(cur); cur = ''
        cur += pc
    if cur: out.append(cur)
    return ['<!-- wp:html -->\n' + c.strip() + '\n<!-- /wp:html -->' for c in out]
pub = ROOT / "build" / "html"; pub.mkdir(parents=True, exist_ok=True)
for name, body in pages.items():
    parts = html_chunks(body)
    for i, part in enumerate(parts):
        (pub / f"{name[:-5]}.{i:02d}.html").write_text(part)
    print("html", name, len(parts), [len(x) for x in parts])

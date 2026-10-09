// Government contracting reference data shared across all 13 HDSC brand-concept sites.
// Source: client-provided NAICS/PSC/SIC/UNSPSC code-mapping reference (IT, cybersecurity,
// aerospace/defense R&D) cross-referenced against the company registration details already
// on file for Heavy Duty Security Co., LLC.
//
// ENTITY_2 is a placeholder for a second, separate aerospace/defense R&D entity the client
// has indicated exists but has not yet supplied a name/UEI/CAGE for. Replace the TBD fields
// once that information is provided — no other structural changes are needed.

const ENTITIES = [
  {
    id: "hdsc",
    legalName: "Heavy Duty Security Co., LLC",
    uei: "Z6DLQLN43GD7",
    cage: "6D7N5",
    ncage: "6D7N5",
    address: "3723 Minnesota Avenue, St. Louis, MO 63118",
    designations: ["WOSB — Woman-Owned Small Business", "Small Business (SB)"],
    focus: "IT services, cybersecurity, systems/cloud engineering, and program management",
    naics: {
      primary: ["541512 — Computer Systems Design Services", "541611 — Administrative Management & General Consulting"],
      secondary: ["541330 — Engineering Services", "541519 — Other Computer Related Services", "518210 — Data Processing, Hosting & Related Services", "541618 — Other Management Consulting", "611420 — Computer Training"],
    },
    psc: {
      primary: ["D302 — IT Systems Development Services", "D307 — IT Strategy & Architecture", "R408 — Program Management / Support", "R425 — Engineering & Technical Support", "D310 — Cybersecurity Services"],
      secondary: ["D308 — Programming Services", "D311 — Data Conversion Services", "D316 — IT Network Management", "D317 — IT Web-Based Services", "D318 — IT Systems Analysis", "D319 — IT Automation", "D399 — IT Services, NEC", "D301 — IT Facility Operation & Maintenance", "D304 — Telecom & Network Management", "R410 — Management Studies", "R499 — Other Professional Services", "U012 — IT Training"],
    },
    sic: ["7379 — Computer Related Services, NEC", "8711 — Engineering Services", "7371 — Computer Programming Services", "8741 — Management Services"],
    unspsc: ["81111500 — Software or hardware engineering", "81112200 — Internet support services", "43232300 — Computer modeling software", "80101500 — Business and corporate management consulting"],
    certificationsClaimed: ["NIST RMF / CSF alignment", "ITIL service-management practices", "PMI program/project management", "Agile / Scrum delivery", "ISO 27001-aligned practices", "NIST SP 800-53-aligned security practices (not FedRAMP authorized)", "CompTIA-certified technical staff (A+, Network+, Security+, Server+, Cloud+, CySA+, Project+, Data+/AI, DataSys+)"],
    tradeOrgAlignment: ["IEEE", "ISACA", "CompTIA", "ITIL / AXELOS", "PMI"],
  },
  {
    id: "entity2",
    legalName: "TBD — Aerospace/Defense R&D Entity (name pending)",
    uei: "TBD — pending SAM.gov registration",
    cage: "TBD — pending SAM.gov registration",
    ncage: "TBD — pending SAM.gov registration",
    address: "TBD",
    designations: ["TBD — confirm small-business/SDB/8(a)/HUBZone eligibility once entity is registered"],
    focus: "Aerospace & defense R&D: RCS/stealth engineering, missile systems, modeling & simulation, systems engineering",
    naics: {
      primary: ["541715 — Research & Development in the Physical, Engineering, and Life Sciences (Aerospace & Defense)", "541712 — R&D in Physical, Engineering & Life Sciences (except Biotechnology)"],
      secondary: ["541330 — Engineering Services", "336415 — Guided Missile & Space Vehicle Propulsion Unit & Parts Manufacturing", "334511 — Search, Detection, Navigation, Guidance, Aeronautical & Nautical System Instrument Manufacturing"],
    },
    psc: {
      primary: ["AJ01 — R&D — Engineering (Aerospace/Defense)", "R425 — Engineering & Technical Support", "D302 — IT Systems Development (M&S software)", "D307 — IT Strategy & Architecture"],
      secondary: ["AC01 — R&D Aircraft Systems", "F142 — Missile Guidance & Control Equipment", "AJ99 — R&D — Other"],
    },
    sic: ["8711 — Engineering Services", "3812 — Search, Detection, Navigation, Guidance, Aeronautical Systems"],
    unspsc: ["81101500 — Engineering and research and development services", "81101700 — Aerospace engineering services", "43233000 — Simulation software", "46171600 — Surveillance and detection systems"],
    certificationsClaimed: ["TBD — confirm once registered (typical: INCOSE systems-engineering alignment, ISO 9001, CMMI, DoDAF)"],
    tradeOrgAlignment: ["AIA — Aerospace Industries Association", "NDIA — National Defense Industrial Association", "AFCEA", "INCOSE", "IEEE"],
  },
];

const NOTES = [
  "NAICS codes describe what a firm does and are the primary classification used in SAM.gov and for SBA size standards.",
  "PSC (Product & Service Codes) describe what a buying agency is purchasing and are used heavily by DoD, VA, and GSA in task orders and solicitations — an incorrect or missing PSC can cause automatic filtering out of an opportunity.",
  "SIC codes are legacy classifications still referenced by some commercial registries (Dun & Bradstreet, Manta) and occasionally by state-level vehicles.",
  "UNSPSC codes are used in some federal and commercial e-procurement systems (e.g., certain GSA and DoD catalogs) at a finer grain than PSC.",
  "CAGE identifies a US-based contractor; NCAGE is the equivalent for international/NATO-context contractors — Heavy Duty Security Co.'s CAGE and NCAGE are the same code.",
];

module.exports = { ENTITIES, NOTES };

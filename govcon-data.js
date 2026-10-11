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
    focus: "IT facilities management (primary service line), infrastructure monitoring, cybersecurity, systems/cloud engineering, network operations, and program management",
    activity: "Provides IT facilities management, infrastructure monitoring, cybersecurity, systems integration, network operations, and technical support services for commercial and government clients.",
    naics: {
      primary: ["561210 — Facilities Support Services (IT facilities management: infrastructure, security systems, communications, maintenance, and operational support)", "541513 — Computer Facilities Management Services † legacy code, see notes", "541512 — Computer Systems Design Services", "541611 — Administrative Management & General Consulting"],
      secondary: ["541519 — Other Computer Related Services", "541511 — Custom Computer Programming Services", "541330 — Engineering Services", "518210 — Data Processing, Hosting & Related Services", "517919 — All Other Telecommunications", "541618 — Other Management Consulting", "541690 — Other Scientific & Technical Consulting", "541715 — R&D in the Physical, Engineering & Life Sciences", "611420 — Computer Training"],
    },
    psc: {
      primary: ["D399 — IT & Telecom, Other", "D301 — IT & Telecom, Facility Operation & Maintenance", "D302 — IT Systems Development Services", "D307 — IT Strategy & Architecture", "D310 — Cybersecurity Services", "R408 — Program Management / Support", "R425 — Engineering & Technical Support"],
      secondary: ["D308 — Programming Services", "D311 — Data Conversion Services", "D316 — Telecommunications Network Management", "D317 — IT Web-Based Services", "D318 — IT Systems Analysis", "D319 — IT Automation", "D304 — Telecommunications & Transmission", "R410 — Management Studies", "R499 — Other Professional Services", "U012 — IT Training"],
    },
    sic: ["7376 — Computer Facilities Management Services (primary)", "7373 — Computer Integrated Systems Design", "7379 — Computer Related Services, NEC", "7371 — Computer Programming Services", "7374 — Computer Processing & Data Preparation and Hosting", "7389 — Business Services, NEC", "8711 — Engineering Services", "8741 — Management Services", "8742 — Management Consulting Services", "5045 — Computers & Peripheral Equipment & Software (wholesale)"],
    unspsc: ["81111800 — System and system component administration services", "81112000 — Data services", "81112200 — Software maintenance and support", "81112300 — Computer hardware maintenance and support", "81111500 — Software or hardware engineering", "80101500 — Business and corporate management consulting", "43211500 — Computers", "81111811 / 81111812 / 81111813 / 81111814 — IT infrastructure, data center, NOC and facilities-monitoring services †", "46171600 / 46171500 — Security monitoring and access control systems †", "43222500 / 43222600 / 43222800 — Network, data communication and IT peripheral equipment †"],
    nigp: ["92045 — Software maintenance and support †", "92050 — IT systems development services †", "92051 — IT systems analysis & design †", "92536 — Facilities management services †"],
    priorityOrder: ["NAICS 561210 — Facilities Support Services", "NAICS 541513 — Computer Facilities Management (use 541519 where only 2022 NAICS is accepted)", "SIC 7376 — Computer Facilities Management Services", "UNSPSC 81111811 — IT infrastructure management †", "PSC D399 — IT & Telecom, Other"],
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
  "† Verify before filing: these codes (or their titles) were supplied from a working reference list and have not been checked against the current official code books. NAICS 541513 was merged into 541519 in NAICS 2022, which SAM.gov and SBA size standards use, so list 541519 there and keep 541513 only for legacy bureau and registry profiles.",
  "Code priority order: when a portal or credit bureau limits the number of entries, use the order listed under 'Code Priority Order'.",
  "CAGE identifies a US-based contractor; NCAGE is the equivalent for international/NATO-context contractors — Heavy Duty Security Co.'s CAGE and NCAGE are the same code.",
];

// Service line -> code crosswalk (order: SIC, NAICS, UNSPSC, PSC). UNSPSC/PSC titles as supplied; verify before filing.
const SERVICE_CODES = [
  ["IT Consulting & Strategy", "8742", "541611, 541618, 541512", "81101500", "D307"],
  ["Systems Engineering & Architecture", "8711", "541330", "81101700", "R425"],
  ["Software Development & Application Engineering", "7371", "541511", "81111500", "D302"],
  ["Data Engineering, Analytics & AI", "7379", "541512, 541519", "81112000", "D307"],
  ["Cloud Computing Services", "7374", "518210, 541512", "81112100", "D301"],
  ["Cybersecurity & Information Assurance", "7379", "541512, 541519", "81111800", "D310"],
  ["Network Engineering & Telecommunications", "7373", "541512, 517919", "81101506", "D316"],
  ["IT Infrastructure & Data Center Services", "7376", "561210, 541519", "81111802", "D301"],
  ["Managed IT Services (MSP)", "7376", "561210, 541519", "81111801", "D301"],
  ["IT Help Desk & End-User Support", "7379", "541519", "81111805", "D302"],
  ["IT Asset Management", "7379", "541519", "81111807", "D307"],
  ["ERP / CRM / Enterprise Platforms", "7371", "541511", "81111600", "D308"],
  ["DevOps & MLOps", "7379", "541512", "81111504", "D302"],
  ["Digital Engineering & Modeling", "8711", "541330", "81101702", "R425"],
  ["IT Training & Technical Education", "8299", "611420", "86101600", "U012"],
  ["IT Procurement & Value-Added Reseller", "5045", "541519", "43211500", "7A20"],
  ["IT Governance, Risk & Compliance", "8748", "541690", "81111803", "R408"],
  ["Emerging Technologies", "8731", "541715", "81112006", "R499"],
  ["IT Project & Program Management", "8741", "541611", "80101509", "R408"],
  ["Government IT & Mission Systems", "7379", "541512, 541519", "81101508", "D399"],
];

module.exports = { ENTITIES, NOTES, SERVICE_CODES };

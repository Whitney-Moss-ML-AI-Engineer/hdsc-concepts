// HDSC Shared Service Catalog
//
// This is the single, authoritative source of service-line content for all 13 HDSC
// brand concepts. Per the client's explicit requirement, every service description
// names the specific, named technologies/tools/concepts drawn verbatim from the
// relevant CompTIA certification exam objectives (see ./comptia-data/ for the full
// extracted terminology inventories this catalog cites). Each of the 13 concept
// repos imports this module and renders it through its own theme, voice, and tone —
// the underlying technology citations never change between concepts; only the
// presentation (headline language, archetype framing, visual skin) does.
//
// Structure: SERVICES is an ordered array of service-line objects:
//   id              - stable slug, used for routing/anchors across all 13 sites
//   name            - the service line's formal name
//   certsCited      - CompTIA certifications whose objectives this service cites
//   tagline         - one-line summary for cards/nav
//   summary         - 2-3 sentence overview for a services-grid card
//   description     - full paragraph-form service description for a services page;
//                     every sentence that claims a capability names the specific
//                     exam-objective technology/tool/concept that backs it
//   technologies    - the cited terms, grouped by certification, for a reference
//                     table/appendix (e.g., in an SSD or proposal document)

const SERVICES = [
  {
    id: "help-desk-support",
    name: "Help Desk & End-User Support",
    certsCited: ["A+ Core 1 (220-1101)", "A+ Core 2 (220-1102)"],
    tagline: "Hardware, OS, and end-user issues resolved at the source.",
    summary:
      "Tier 1-2 help desk coverage for desktops, laptops, mobile devices, and the operating systems that run on them, backed by the same diagnostic toolset and methodology CompTIA A+ certifies technicians on.",
    description:
      "HDSC's help desk technicians diagnose and resolve end-user hardware and software issues using the CompTIA A+ Core 1 and Core 2 troubleshooting methodology: identify the problem, establish a theory of probable cause, test the theory, implement a plan of action, verify full system functionality, and document findings. On the hardware side, this covers RAM, motherboard, CPU, and power-supply diagnostics (POST beep codes, BSOD analysis, S.M.A.R.T. failure detection), storage and RAID 0/1/5/10 array troubleshooting, and printer servicing across laser, inkjet, thermal, and impact technology (imaging drum and fuser-assembly replacement, print-head calibration, maintenance-kit application). On the software side, technicians work directly in Windows 10 (Home/Pro/Pro for Workstations/Enterprise) using Task Manager, the Microsoft Management Console snap-ins (Event Viewer, Disk Management, Task Scheduler, Device Manager, Local Users and Groups, Performance Monitor, Group Policy Editor), and the built-in diagnostic utilities msinfo32, resmon, msconfig, cleanmgr, dfrgui, and regedit, alongside command-line tools including ipconfig, netstat, nslookup, chkdsk, sfc, and diskpart. Support extends to macOS (Disk Utility, FileVault, Terminal, Time Machine) and Linux desktops (ls, chmod, chown, apt-get/yum, grep, top), and to mobile device connectivity troubleshooting (Bluetooth, WiFi, NFC, AirDrop pairing and sync issues). Every ticket is logged through a documented SOP and asset-management workflow consistent with A+ Core 2's operational-procedures objectives, including asset tagging, change-management rollback planning, and the 3-2-1 backup rule for any data recovered in the process.",
    technologies: {
      "A+ Core 1 (220-1101)": [
        "RAM/motherboard/CPU/power-supply diagnostics",
        "POST beep codes, BSOD analysis",
        "RAID 0/1/5/10 array troubleshooting",
        "S.M.A.R.T. failure detection",
        "Laser/inkjet/thermal/impact printer servicing",
        "Mobile device connectivity (Bluetooth, WiFi, NFC)",
      ],
      "A+ Core 2 (220-1102)": [
        "Task Manager, Event Viewer, Disk Management, Device Manager",
        "msinfo32, resmon, msconfig, cleanmgr, dfrgui, regedit",
        "ipconfig, netstat, nslookup, chkdsk, sfc, diskpart",
        "macOS: Disk Utility, FileVault, Terminal",
        "Linux: ls, chmod, chown, apt-get/yum, grep, top",
        "Asset tagging, change-management rollback planning, 3-2-1 backup rule",
      ],
    },
  },
  {
    id: "network-infrastructure",
    name: "Network Infrastructure & Engineering",
    certsCited: ["Network+ (N10-009)", "A+ Core 1 (220-1101)"],
    tagline: "Design, deployment, and operation of wired and wireless networks.",
    summary:
      "End-to-end network engineering — from cable plant to routing and switching to wireless deployment — grounded in the same protocol and hardware knowledge CompTIA Network+ certifies.",
    description:
      "HDSC designs, deploys, and operates client network infrastructure using the protocol stack and hardware categories defined in the CompTIA Network+ objectives. This includes routing (OSPF, BGP, RIP, EIGRP) and switching (VLAN segmentation, Spanning Tree Protocol, trunking) configuration; structured cabling to Cat5e/Cat6/Cat6a copper and single-mode/multi-mode fiber standards with SFP/SFP+ optics; wireless deployment across 802.11a/b/g/n/ac/ax standards with site-survey-driven access-point placement; and core services administration for DNS, DHCP, and NAT/PAT. Network hardening follows Network+'s security domain: ACL enforcement, VPN/IPSec tunnel configuration, AAA with RADIUS/TACACS+, DMZ architecture, and zero-trust segmentation. Troubleshooting is performed with the standard toolset — ping, tracert, nslookup/dig, netstat, ipconfig/ifconfig, arp, route, and tcpdump — following the identify/theorize/test/plan/verify/document methodology. For mixed environments, HDSC also applies A+ Core 1's SOHO and client-networking objectives (static vs. dynamic IP addressing, APIPA, gateway configuration, PoE deployment) to bridge enterprise network engineering with desktop-level connectivity support.",
    technologies: {
      "Network+ (N10-009)": [
        "OSPF, BGP, RIP, EIGRP routing",
        "VLAN, STP, trunking",
        "Cat5e/6/6a, single/multi-mode fiber, SFP/SFP+",
        "802.11a/b/g/n/ac/ax wireless",
        "ACLs, VPN/IPSec, RADIUS/TACACS+, DMZ, zero trust",
        "ping, tracert, nslookup, netstat, tcpdump",
      ],
      "A+ Core 1 (220-1101)": [
        "Static/dynamic IP, APIPA, gateway configuration",
        "PoE injectors/switches",
        "SOHO router and switch deployment",
      ],
    },
  },
  {
    id: "info-security-compliance",
    name: "Cybersecurity & Information Assurance",
    certsCited: ["Security+ (SY0-601)"],
    tagline: "Architecture, controls, and governance mapped to CompTIA Security+.",
    summary:
      "Security architecture, identity and access management, and compliance programs built on the control families and governance frameworks CompTIA Security+ certifies.",
    description:
      "HDSC's cybersecurity practice implements the control architecture defined in the CompTIA Security+ SY0-601 objectives. Data protection covers encryption at rest, in transit, and in processing, Data Loss Prevention (DLP), tokenization, and Hardware Security Module (HSM)-backed key management. Identity and access management is built on multifactor authentication (TOTP/HOTP, biometrics, smart cards), Single Sign-On, federation, and role-based/attribute-based/mandatory access control (RBAC/ABAC/MAC). Public Key Infrastructure services include Certificate Authority and Registration Authority operation, certificate lifecycle management (CSR, OCSP, CRL), and wildcard/SAN certificate issuance. Network-layer controls include Next-Generation Firewalls (NGFW), Web Application Firewalls (WAF), Network Access Control (NAC), VPN (IPSec, SSL/TLS, L2TP) configuration, and zero-trust network segmentation. Incident response follows the Security+ lifecycle — preparation, identification, containment, eradication, recovery, and lessons learned — referencing the MITRE ATT&CK framework and Cyber Kill Chain for threat classification. Governance, risk, and compliance engagements map client environments to NIST Risk Management Framework / Cybersecurity Framework, ISO 27001/27002, PCI DSS, and CIS Benchmarks, with documented risk registers quantifying Single Loss Expectancy (SLE), Annualized Loss Expectancy (ALE), and Business Impact Analysis metrics (RTO, RPO, MTTR, MTBF).",
    technologies: {
      "Security+ (SY0-601)": [
        "Encryption (at rest/in transit/in processing), DLP, HSM",
        "MFA (TOTP/HOTP, biometrics), SSO, federation, RBAC/ABAC/MAC",
        "PKI: CA/RA operation, CSR, OCSP, CRL, SAN/wildcard certs",
        "NGFW, WAF, NAC, VPN (IPSec/SSL-TLS/L2TP), zero trust",
        "Incident response lifecycle, MITRE ATT&CK, Cyber Kill Chain",
        "NIST RMF/CSF, ISO 27001/27002, PCI DSS, CIS Benchmarks",
        "SLE/ALE risk quantification, BIA (RTO/RPO/MTTR/MTBF)",
      ],
    },
  },
  {
    id: "threat-detection-secops",
    name: "Threat Detection & Security Operations",
    certsCited: ["CySA+ (CS0-002)", "Security+ (SY0-601)"],
    tagline: "Continuous monitoring, threat hunting, and SOC operations.",
    summary:
      "SIEM-driven security monitoring, vulnerability management, and incident response operated to the analytical standard CompTIA CySA+ certifies.",
    description:
      "HDSC operates continuous security monitoring and threat-detection services built on the CompTIA CySA+ objectives. Vulnerability management runs credentialed and non-credentialed scans with tools in the Nessus, OpenVAS, and Qualys class, enumerates findings against CVE/CVSS scoring, and tracks remediation through to verification. Security Operations Center monitoring is built around Security Information and Event Management (SIEM) log aggregation and correlation, User and Entity Behavior Analytics (UEBA), and DNS/flow/packet analysis, with automated response orchestrated through Security Orchestration, Automation, and Response (SOAR) runbooks and playbooks. Threat intelligence is consumed and structured using STIX/TAXII feeds and mapped to MITRE ATT&CK tactics, techniques, and procedures. Digital forensics support includes network forensics (Wireshark, tcpdump), endpoint forensics (disk and memory analysis), and a documented chain-of-custody process for evidentiary integrity. Software and systems security reviews apply secure-coding analysis (static and dynamic analysis, input validation, parameterized queries) and hardware-assurance verification (TPM/HSM root-of-trust, UEFI measured boot) to reduce the attack surface before incidents occur. Compliance and assessment work quantifies risk in PII/PHI/SPI terms and documents findings against applicable regulatory frameworks.",
    technologies: {
      "CySA+ (CS0-002)": [
        "Credentialed/non-credentialed vulnerability scanning, CVE/CVSS",
        "SIEM log correlation, UEBA, DNS/flow/packet analysis",
        "SOAR runbooks/playbooks",
        "STIX/TAXII threat intel, MITRE ATT&CK TTPs",
        "Network/endpoint digital forensics, chain of custody",
        "Static/dynamic code analysis, TPM/HSM/UEFI hardware assurance",
      ],
      "Security+ (SY0-601)": [
        "Incident response lifecycle integration",
        "PKI and encryption controls supporting detection tooling",
      ],
    },
  },
  {
    id: "systems-server-admin",
    name: "Systems & Server Administration",
    certsCited: ["Server+ (SK0-005)"],
    tagline: "Server hardware, virtualization, and high-availability operations.",
    summary:
      "Installation, administration, and hardening of physical and virtual server infrastructure to the standard CompTIA Server+ certifies.",
    description:
      "HDSC's systems administration team installs, configures, and maintains server infrastructure per the CompTIA Server+ SK0-005 objectives. Hardware management covers rack-mount and blade chassis deployment, RAID 0/1/5/6/10 array configuration (hardware and software RAID), SAS/SATA/NVMe storage interfaces, and hot-swappable component servicing (drives, power supplies, fans) via out-of-band IP KVM management. Operating system administration spans GUI, Core, and virtualized Windows and Linux server installations, filesystem configuration (NTFS, ext4, VMFS, ReFS, ZFS), and scripted deployment via Bash, PowerShell, and VBS. High-availability architecture is built on active-active/active-passive clustering, failover/failback with heartbeat monitoring, NIC teaming and link aggregation, and hardware/software load balancing. Virtualization services cover host/guest resource allocation, virtual switch and vNIC configuration, and P2V migration. Security and disaster recovery follow Server+'s hardening model — disabling unused services and ports, HIDS/HIPS deployment, UEFI/BIOS password protection — paired with a documented backup strategy spanning full, synthetic full, incremental, and differential backups across tape, disk, and cloud targets, and disaster-recovery site planning (hot, warm, cold) with synchronous/asynchronous replication.",
    technologies: {
      "Server+ (SK0-005)": [
        "RAID 0/1/5/6/10 (hardware & software), SAS/SATA/NVMe",
        "Hot-swappable servicing via out-of-band IP KVM",
        "NTFS, ext4, VMFS, ReFS, ZFS filesystems",
        "Bash, PowerShell, VBS scripted deployment",
        "Active-active/active-passive clustering, NIC teaming, link aggregation",
        "P2V migration, vNIC/virtual switch configuration",
        "HIDS/HIPS hardening, UEFI/BIOS password protection",
        "Full/synthetic full/incremental/differential backup, hot/warm/cold DR sites",
      ],
    },
  },
  {
    id: "cloud-architecture-migration",
    name: "Cloud Architecture & Migration Services",
    certsCited: ["Cloud+ (CV0-002)", "Server+ (SK0-005)"],
    tagline: "Hybrid and multi-cloud deployment, migration, and optimization.",
    summary:
      "Cloud deployment planning, workload migration, and ongoing cloud operations built on the CompTIA Cloud+ service and deployment model taxonomy.",
    description:
      "HDSC plans and executes cloud deployments using the CompTIA Cloud+ CV0-002 service-model and deployment-model framework: public, private, hybrid, and community cloud across IaaS, PaaS, and SaaS. Network design for cloud workloads includes VPN tunneling, VXLAN overlay networking, and DMZ segmentation with IDS/IPS inline inspection. Storage architecture covers IOPS-driven sizing, NAS/DAS/SAN selection, thick/thin provisioning, deduplication/compression, and storage tiering. Migration engagements classify and execute P2V, V2V, V2P, and P2P workload moves with documented downtime-impact and bandwidth-constraint planning. Security implementation follows Cloud+'s model: IPSec/SSL/TLS encryption, PKI-based key management, role-based and mandatory access control, and multifactor authentication layered onto cloud-native identity services. Ongoing management includes auto-scaling (vertical scale up/down, horizontal scale in/out), Configuration Management Database (CMDB)-tracked change control, and SLA-metric reporting (uptime/downtime, chargeback/showback). Maintenance automation covers hypervisor and VM patching via rolling updates and blue-green deployment, snapshot/clone-based backup, and RPO/RTO-driven disaster recovery with site mirroring and synchronous/asynchronous replication — extending the same Server+ virtualization and high-availability disciplines into the cloud control plane.",
    technologies: {
      "Cloud+ (CV0-002)": [
        "IaaS/PaaS/SaaS across public/private/hybrid/community models",
        "VPN, VXLAN, DMZ, IDS/IPS",
        "IOPS sizing, NAS/DAS/SAN, thick/thin provisioning",
        "P2V/V2V/V2P/P2P migration",
        "Auto-scaling (vertical/horizontal), CMDB change control",
        "Rolling update/blue-green patch deployment",
        "RPO/RTO disaster recovery, site mirroring, sync/async replication",
      ],
      "Server+ (SK0-005)": [
        "Virtualization host/guest resource allocation carried into cloud operations",
      ],
    },
  },
  {
    id: "disaster-recovery-continuity",
    name: "Disaster Recovery & Business Continuity",
    certsCited: ["Server+ (SK0-005)", "Cloud+ (CV0-002)", "Project+ (PK0-005)"],
    tagline: "Documented, tested recovery plans with measurable RPO/RTO targets.",
    summary:
      "Business continuity and disaster recovery planning that sets and tests RPO/RTO targets across on-premises and cloud infrastructure.",
    description:
      "HDSC builds and tests disaster recovery and business continuity plans against measurable Recovery Point Objective (RPO) and Recovery Time Objective (RTO) targets, drawing on Server+ and Cloud+ backup and replication methodology and Project+ continuity-planning structure. Backup strategy spans full, synthetic full, incremental, and differential methods across tape, disk, and cloud storage targets, governed by a 3-2-1 backup rule and grandfather-father-son (GFS) rotation schedule. Site-recovery architecture is planned across hot, warm, and cold sites with synchronous or asynchronous replication and site mirroring, and validated through tabletop exercises and live or simulated failover tests. Business Impact Analysis quantifies Mean Time Between Failure (MTBF), Mean Time to Recovery (MTTR), and criticality of mission-essential functions, feeding directly into the Project+ Continuity of Operations Plan (COOP) and Disaster Recovery Plan (DRP) documentation set. For cloud-resident workloads, continuity planning additionally accounts for Cloud+'s bandwidth/ISP limitation and follow-the-sun constraint considerations, ensuring recovery plans remain executable regardless of where a client's infrastructure runs.",
    technologies: {
      "Server+ (SK0-005)": [
        "Full/synthetic full/incremental/differential backup",
        "3-2-1 backup rule, GFS rotation",
        "Hot/warm/cold site replication",
      ],
      "Cloud+ (CV0-002)": [
        "RPO/RTO-driven cloud DR, synchronous/asynchronous replication",
        "Bandwidth/ISP limitation and follow-the-sun planning",
      ],
      "Project+ (PK0-005)": [
        "Business Impact Analysis, MTBF/MTTR",
        "Continuity of Operations Plan (COOP), Disaster Recovery Plan (DRP)",
      ],
    },
  },
  {
    id: "data-systems-dba",
    name: "Data Systems & Database Administration",
    certsCited: ["DataSys+ (DS0-001)"],
    tagline: "Relational and NoSQL database deployment, tuning, and security.",
    summary:
      "Database planning, deployment, and administration across relational and NoSQL platforms to the standard CompTIA DataSys+ certifies.",
    description:
      "HDSC designs, deploys, and administers database systems per the CompTIA DataSys+ DS0-001 objectives, spanning relational databases and NoSQL platforms including document stores, key-value stores, column-oriented databases, and graph databases (with product-level experience across engines in the MongoDB, Cassandra, DynamoDB, and Neo4j families). Database planning covers requirements gathering, logical/physical schema design, data dictionaries, and entity-relationship diagramming. Implementation includes DDL/DML scripting, ACID-compliant transaction design, stored procedures, triggers, and views, with connectivity configured for client/server architecture, DNS resolution, and firewall/port security. Ongoing management covers query and index optimization, patch management, load balancing, and capacity planning, monitored through resource-utilization alerts (CPU, memory, disk) and deadlock detection. Security follows DataSys+'s model directly: encryption in transit and at rest, data masking, least-privilege access control, service-account management, and compliance mapping to PII/PHI data classification, PCI DSS, and GDPR. Business continuity for data systems includes replication, log shipping, mirroring, and RPO/RTO-targeted backup and restore testing, ensuring the data layer meets the same recovery standards as the infrastructure it runs on.",
    technologies: {
      "DataSys+ (DS0-001)": [
        "Relational & NoSQL (document, key-value, column, graph) databases",
        "DDL/DML, ACID transactions, stored procedures, triggers, views",
        "Query/index optimization, capacity planning, deadlock monitoring",
        "Encryption in transit/at rest, data masking, least privilege",
        "PII/PHI classification, PCI DSS, GDPR compliance mapping",
        "Replication, log shipping, mirroring, RPO/RTO backup testing",
      ],
    },
  },
  {
    id: "data-analytics-ai",
    name: "Data Analytics & AI/ML Engineering",
    certsCited: ["Data+/AI (DY0-001)"],
    tagline: "Statistical analysis, machine learning, and AI model deployment.",
    summary:
      "Data science and machine learning engineering — from exploratory analysis through model deployment — built on the CompTIA Data+/AI objective set.",
    description:
      "HDSC's data science and AI engineering services follow the CompTIA Data+/AI DY0-001 objectives from exploratory analysis through production deployment. Statistical foundations include hypothesis testing (t-tests, ANOVA), regression diagnostics (R-squared, RMSE), and classifier evaluation via confusion matrices, precision/recall/F1 score, and ROC/AUC analysis. Exploratory data analysis uses univariate and multivariate visualization (scatter plots, box plots, heat maps) and addresses common data issues including multicollinearity, seasonality, and class imbalance (mitigated via SMOTE oversampling). Model development spans statistical supervised learning (OLS/ridge/LASSO regression, logistic regression, Naive Bayes), tree-based methods (random forest, gradient boosting/XGBoost), deep learning architectures (CNNs, RNNs, LSTMs, Transformers) implemented in PyTorch and TensorFlow/Keras, and unsupervised techniques (k-means, DBSCAN, PCA). Natural language processing capabilities include tokenization, TF-IDF, word embeddings, sentiment analysis, and named-entity recognition; computer vision work covers OCR, object detection, and segmentation. Operationally, HDSC manages the full MLOps lifecycle — CRISP-DM-aligned workflow, version control for code/data/models, CI/CD pipelines for model deployment, and ongoing model-drift and performance monitoring — so client AI investments stay accurate and auditable in production, not just in the lab.",
    technologies: {
      "Data+/AI (DY0-001)": [
        "Hypothesis testing, regression diagnostics (R2, RMSE)",
        "Confusion matrix, precision/recall/F1, ROC/AUC",
        "SMOTE class-imbalance mitigation",
        "OLS/ridge/LASSO, random forest, gradient boosting/XGBoost",
        "CNN/RNN/LSTM/Transformer architectures (PyTorch, TensorFlow/Keras)",
        "k-means, DBSCAN, PCA unsupervised learning",
        "NLP: tokenization, TF-IDF, sentiment analysis, NER",
        "Computer vision: OCR, object detection, segmentation",
        "CRISP-DM workflow, MLOps CI/CD, model-drift monitoring",
      ],
    },
  },
  {
    id: "program-project-management",
    name: "IT Program & Project Management",
    certsCited: ["Project+ (PK0-005)"],
    tagline: "Agile and Waterfall delivery governed by CompTIA Project+ discipline.",
    summary:
      "IT program and project delivery — planning, execution, and closeout — run to the methodology and documentation standard CompTIA Project+ certifies.",
    description:
      "HDSC manages client IT initiatives using the methodologies and governance artifacts defined in the CompTIA Project+ PK0-005 objectives, selecting Agile (Scrum, Kanban, SAFe), Waterfall, or hybrid delivery based on each engagement's tolerance for changing requirements, budget, and schedule. Initiation produces a formal project charter with defined success criteria and a Responsibility Assignment Matrix (RACI); planning develops a Work Breakdown Structure (WBS), resource-loaded schedule with critical-path analysis, and a documented risk register scored by qualitative and quantitative methods (probability, impact, Single Loss Expectancy-style analysis). Execution is tracked through sprint planning and backlog management for Agile workstreams, or Gantt-chart and PERT-chart milestone tracking for Waterfall workstreams, with change requests routed through a formal Change Control Board (CCB) process. Quality management incorporates defined Key Performance Indicators (KPIs) and Objectives and Key Results (OKRs), User Acceptance Testing (UAT), and retrospective/lessons-learned sessions. Procurement and vendor management follow the RFP/RFQ/RFI/RFB process with Statement of Work (SOW) and Non-Disclosure Agreement (NDA) documentation. Every engagement closes with a formal project closeout report, resource release, and archived documentation — ensuring every HDSC-delivered project, from a single server refresh to a multi-site network build-out, is governed with the same auditable project-management rigor regardless of which technical service line it draws on.",
    technologies: {
      "Project+ (PK0-005)": [
        "Agile (Scrum/Kanban/SAFe), Waterfall, hybrid methodology selection",
        "Project charter, RACI matrix, WBS, critical path analysis",
        "Qualitative/quantitative risk register",
        "Change Control Board (CCB) process",
        "KPI/OKR quality tracking, UAT, retrospectives",
        "RFP/RFQ/RFI/RFB procurement, SOW, NDA",
        "Project closeout reporting and documentation archiving",
      ],
    },
  },
];

module.exports = { SERVICES };

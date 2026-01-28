
import { Job, CompetencyCategory, ContactInfo, SkillMetric, Education, Certification, Project } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "217.986.0863",
  email: "r.ikemire@outlook.com",
  portfolio: "https://www.linkedin.com/in/reneeikem",
  location: "United States"
};

export const SUMMARY = "Senior technology leader specializing in enterprise modernization, data-driven architecture, and full lifecycle program delivery across government and public-sector environments. Combines deep technical expertise in systems integration, SQL engineering, automation, and cloud platforms with strong leadership in project delivery, stakeholder alignment, governance, and change management. Proven ability to architect scalable solutions, streamline data ecosystems, coordinate cross-functional teams, and drive high-impact transformation initiatives from planning through execution. Adept at bridging strategy, technology, and operations to deliver measurable organizational results.";

export const COMPETENCIES: CompetencyCategory[] = [
  {
    title: "Architecture & Systems Design",
    skills: [
      { name: "Enterprise Solution Architecture", details: "Designing scalable, resilient systems using microservices and cloud-native patterns." },
      { name: "Solution Design & Tech Architecture", details: "Translating complex business needs into robust technical specifications." },
      { name: "Systems Modernization & Integration", details: "Refactoring legacy monolithic applications into modern distributed architectures." },
      { name: "Technical Requirements Analysis", details: "Bridging the gap between stakeholder vision and engineering execution." },
      { name: "Scalability & Performance Optimization", details: "Optimizing high-load systems for latency, throughput, and reliability." },
      { name: "DevOps & CI/CD Pipeline Implementation", details: "Implementing automated pipelines for mission-critical deployments." }
    ]
  },
  {
    title: "Data Architecture & Engineering",
    skills: [
      { name: "Data Architecture & Governance", details: "Establishing policy frameworks for data accuracy, privacy, and compliance." },
      { name: "Data Modeling & Warehousing", details: "Designing normalized schemas and star/snowflake schemas for analytics." },
      { name: "SQL / T-SQL / PL-SQL", details: "Advanced stored procedures, recursive queries, and performance tuning." },
      { name: "ETL / SSIS / Data Pipeline", details: "Building resilient data ingestion and transformation workflows." },
      { name: "Data Migration & Integration Strategy", details: "Executing high-integrity migrations for large-scale datasets." }
    ]
  },
  {
    title: "Automation & Scripting",
    skills: [
      { name: "PowerShell & VBA Scripting", details: "Automating infrastructure management and legacy administrative tasks." },
      { name: "Python Automation", details: "Developing scripts for data scraping, processing, and API interaction." },
      { name: "Data Processing", details: "Streamlining large-scale batch processing and complex reporting." }
    ]
  },
  {
    title: "Project & Delivery Management",
    skills: [
      { name: "Agile / Scrum Methodologies", details: "Facilitating sprint planning, stand-ups, and retrospectives for velocity." },
      { name: "PMO Governance & Reporting", details: "Establishing standards, reporting structures, and resource allocation." },
      { name: "System Deployment & Cutover Planning", details: "Leading high-stakes implementation and transition phases." },
      { name: "Change Management & Training", details: "Guiding organizations through digital transformation and adoption." },
      { name: "Technical Writing", details: "Authoring migration playbooks, SOPs, and system documentation." }
    ]
  },
  {
    title: "Leadership & Strategy",
    skills: [
      { name: "Cross-Functional Team Leadership", details: "Mentoring engineering teams and fostering collaborative growth." },
      { name: "Stakeholder & Executive Communication", details: "Aligning technical output with executive business goals." },
      { name: "Strategic Roadmapping", details: "Planning long-term technology evolution and digital transformation." }
    ]
  }
];

export const EXPERIENCE: Job[] = [
  {
    id: "savvy-it",
    company: "Savvy IT (Intelligent Systems)",
    role: "Solutions Architect",
    period: "Feb 2024 – Present",
    description: [
      "Designed and deployed a standalone SMS notification platform that automatically identified tenants 60+ days past due and executed bulk outreach—eliminating all third-party messaging costs.",
      "Led the full digital launch of a startup taxi service, overseeing brand development, website design, advertising copy, and visual asset creation.",
      "Defined the technical architecture and multi-phase feature roadmap for an internal transportation operations system, including modules for ride dispatch and operational reporting.",
      "Advised small business owners on digital strategy and modernization, identifying automation opportunities and reducing operational costs."
    ],
    icon: "Server"
  },
  {
    id: "ahava-pm",
    company: "Ahava Services",
    role: "Technical Project Manager",
    period: "Sep 2023 – Feb 2024",
    description: [
      "Directed a 20+ member cross-functional transformation team to deliver phased modernization, data conversion, and statewide rollout activities.",
      "Managed all project documentation deliverables, including technical procedures, user transition guides, and compliance-ready audit artifacts.",
      "Ensured full change-management compliance via transition readiness assessments, stakeholder outreach, and adoption support.",
      "Defined and monitored project success metrics, designing dashboards to track conversion progress and post-migration stability."
    ],
    icon: "ClipboardCheck"
  },
  {
    id: "ahava-data",
    company: "Ahava Services",
    role: "Data Integration & Modernization Lead",
    period: "Sep 2022 – Sep 2023",
    description: [
      "Evaluated legacy data ecosystems to identify performance, compliance, and consolidation gaps, informing modernization strategy.",
      "Oversaw ETL and migration activities, governing staged conversions from legacy Access systems to modern platforms with full integrity verification.",
      "Led structured testing and validation cycles, implementing repeatable quality gates that improved defect prevention.",
      "Directed optimization of SQL processes and stored procedures, enabling modernization of high-visibility applications."
    ],
    icon: "Database"
  },
  {
    id: "tpd",
    company: "TPD (Safe Passage Program)",
    role: "Technical Project Manager – Systems Design",
    period: "Jan 2022 – Jun 2022",
    description: [
      "Led modernization of program operations by architecting a centralized data infrastructure and consolidating fragmented legacy sources.",
      "Managed development of a custom application platform, including workflow design, role-based interfaces, and performance tracking tools.",
      "Delivered a sustainable digital presence, implementing a maintainable website framework enabling non-technical staff to manage updates.",
      "Developed UX/UI standards and SOPs, improving accessibility and onboarding efficiency."
    ],
    icon: "Map"
  },
  {
    id: "hope",
    company: "HOPE Homeless Outreach",
    role: "Program Founder, Director of Operations",
    period: "Jun 2020 – Sep 2021",
    description: [
      "Designed and launched Colorado’s first Safe Parking Program, establishing a statewide framework now referenced by peer organizations.",
      "Authored all operational infrastructure, including eligibility criteria, intake workflows, and compliance documentation.",
      "Led full-spectrum program operations, overseeing budget planning, staffing, and funding acquisition.",
      "Achieved direct impact by transitioning 27 chronically homeless individuals into permanent housing."
    ],
    icon: "Home"
  }
];

export const EARLIER_ROLES: Job[] = [
  {
    id: "earlier-1",
    company: "Conscious Action",
    role: "Full Stack Developer / Business Analyst",
    period: "2015 – 2020",
    description: ["Designed and delivered end-to-end data and application infrastructure enabling small businesses to capture consistent operational data."],
    icon: "Code"
  },
  {
    id: "earlier-2",
    company: "Colorado State University",
    role: "Director of Engagement",
    period: "2011 – 2015",
    description: ["Architected and managed CSU Summer Session systems and workflows, delivering data-driven insights and enabling strategic planning."],
    icon: "BookOpen"
  },
  {
    id: "earlier-3",
    company: "Colorado Dept of Education",
    role: "Solutions Architect / Analyst",
    period: "2009 – 2011",
    description: ["Architected and delivered Colorado’s statewide Special Education and ADE systems, leading data architecture and validation frameworks."],
    icon: "Landmark"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-migration",
    title: "Legacy Data Synthesizer",
    subtitle: "Automated ETL Pipeline",
    sector: "Government",
    description: "A high-throughput ETL engine designed to ingest fragmented legacy records, validate integrity against 40+ distinct rulesets, and normalize data into a centralized warehouse. Reduced processing time from days to minutes.",
    tech: ["Python", "SQL Server", "SSIS", "Azure Data Factory"]
  },
  {
    id: "proj-notify",
    title: "Tenant Signal Network",
    subtitle: "Intelligent Notification Platform",
    sector: "PropTech",
    description: "A logic-driven communication hub that monitors tenant account status in real-time. It triggers automated, multi-channel alerts (SMS/Email) based on complex temporal criteria, reducing administrative overhead by 90%.",
    tech: ["Node.js", "Twilio API", "React", "AWS Lambda"]
  },
  {
    id: "proj-safe",
    title: "Safe Harbor Initiative",
    subtitle: "Resource Allocation System",
    sector: "Non-Profit",
    description: "A geospatial resource management tool for tracking safe parking zones. Features dynamic capacity planning, intake workflow digitization, and real-time availability heatmaps for outreach coordinators.",
    tech: ["React Native", "Firebase", "Google Maps API", "TypeScript"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science",
    institution: "Colorado State University",
    year: "2008"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    year: "2023"
  },
  {
    name: "Certified ScrumMaster® (CSM)",
    issuer: "Scrum Alliance",
    year: "2022"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024"
  }
];

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'Architecture', A: 98, fullMark: 100 },
  { subject: 'Data Eng', A: 95, fullMark: 100 },
  { subject: 'Leadership', A: 92, fullMark: 100 },
  { subject: 'Automation', A: 88, fullMark: 100 },
  { subject: 'PMO/Agile', A: 94, fullMark: 100 },
  { subject: 'DevOps', A: 80, fullMark: 100 },
];

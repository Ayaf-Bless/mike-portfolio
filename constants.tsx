import React from "react";
import {
  Briefcase,
  Calculator,
  Globe,
  Book,
  Trophy,
  Dumbbell,
  Waves,
  Target,
  ShieldCheck,
  Zap,
  LayoutGrid,
  MessageSquare,
  Landmark,
  Clock,
  Languages,
} from "lucide-react";
import {
  ExperienceItem,
  EducationItem,
  TechItem,
  LanguageItem,
  CaseStudyItem,
} from "./types";

export const CORE_VALUES = [
  {
    title: "Financial Governance",
    description:
      "Ensuring fiscal transparency through meticulous bookkeeping and rigorous expense validation. I transform complex financial data into audit-ready assets for your business.",
    icon: <Landmark className="w-8 h-8 text-emerald" />,
    outcome: "Fiscal Integrity",
  },
  {
    title: "Operational Logistics",
    description:
      "Optimizing project lifecycles through strategic scheduling and resource allocation. I implement robust workflows that maintain momentum and eliminate bottlenecks.",
    icon: <Clock className="w-8 h-8 text-emerald" />,
    outcome: "Operational Velocity",
  },
  {
    title: "Global Synchronization",
    description:
      "Bridging international communication gaps with high-level linguistic support in French, English, and Swahili. I facilitate seamless cross-border partnerships and negotiations.",
    icon: <Languages className="w-8 h-8 text-emerald" />,
    outcome: "Global Connectivity",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Operations & Grant Support Specialist",
    company: "Friendliware Technologies ICT Services (Kampala)",
    period: "2023 - Present",
    description: [
      "Synchronize project and program coordination initiatives, including calendar scheduling, milestones tracking, and rigorous stakeholder follow-ups.",
      "Manage complex data entries, dataset validations, and cloud-based file directories for donor, grant, and operational records using Excel and secure servers.",
      "Maintain diligent project monitor matrices, tracker logs, and activity indicators to support multi-faceted ongoing programs.",
      "Execute key compliance and bookkeeping tasks, supporting direct expense tracking, invoice verification, and budget updates.",
      "Track donor pledges, coordinate reporting deadlines, and compile comprehensive evidence packets for audit preparations.",
      "Establish version-controlled digital filing architectures, ensuring file accuracy, retrieval velocity, and strict document lifecycle governance.",
      "Produce strategic operational reports, visual dashboards, and performance summaries to empower data-driven leadership decisions.",
    ],
  },
  {
    role: "Project Operations Supervisor",
    company: "AK Beamflex International Construction Company (Kampala)",
    period: "2018 - 2022",
    description: [
      "Supervised safe, compliant, and highly productive site operations, coordinating field labor and safety protocols.",
      "Enforced project timelines and rigorous quality assurance standards to guarantee consistent execution excellence.",
      "Maintained precise daily administrative logs, field documentations, and milestone status reports.",
      "Assisted project leaders with budget formations and meticulous actual-vs-forecast expense tracking.",
      "Verified construction regulatory compliance documents and handled subcontractor and vendor agreements.",
      "Preempted financial risks by performing careful audits of invoice parameters and delivery manifests.",
      "Liaised across Finance, Procurement, and vendors to resolve complex billing inquiries and clear aged accounts.",
      "Kept vendor profiles organized with reconciled ledger statements and structured tracking trackers.",
      "Provided collaborative assistance to logistics and material distribution units to guarantee operational continuity.",
    ],
  },
  {
    role: "Academic Intern – Finance & Operations",
    company: "LES 7 AS Entreprise Multisectorielle (Bunia, DRC)",
    period: "2016 - 2017",
    description: [
      "Administered financial ledger entries and digital transactional logging to back monthly operational overviews.",
      "Supported fiscal audits, general ledger reconciliations, and the surveillance of corporate payment pipelines.",
      "Maintained precise physical and digital filing systems, standardizing document pathways for corporate accountability.",
      "Formulated clear operational reports and executive status presentations utilizing Microsoft Excel, Word, and PowerPoint.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Commerce (BCom)",
    institution: "ISBAT University",
    location: "Kampala, Uganda",
    period: "2020 - 2022",
    details:
      "Corporate commerce curriculum focusing on commercial systems, financial administration, and enterprise management.",
  },
  {
    degree: "Higher Education Certificate (HEC)",
    institution: "ISBAT University",
    location: "Kampala, Uganda",
    period: "2019 - 2020",
    details:
      "Intensive bridging certificate prioritizing business mathematics, quantitative analysis, and economic foundations.",
  },
  {
    degree: "Baccalaureate in Commercial & Administrative Studies",
    institution: "Umoja International French School",
    location: "Mukono, Uganda",
    period: "2017 - 2018",
    details:
      "French-medium curriculum covering administrative practices, secretarial organization, and business communication.",
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    title: "NGO Grant Reconciliation",
    category: "Financial Governance",
    problem:
      "An international partner experienced discrepancies in donor reporting cycles, causing accounting gaps and delayed audits.",
    solution:
      "Engineered clean tracking sheets, standardized budget-vs-actual trackers, and established a structured grant registry in Excel.",
    result:
      "Achieved impeccable audit readiness, resolved all reconciliation queries, and improved overall reporting timeline efficiency.",
    metrics: [
      { value: "100%", label: "Audit Ready" },
      { value: "Zero", label: "Discrepancies" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Operations Flow Synchronization",
    category: "Operational Logistics",
    problem:
      "Information lag between field managers and corporate offices led to invoice backlogs and vendor relationship strain.",
    solution:
      "Designed robust weekly invoice registries, coordinated immediate cross-department inquiries, and streamlined approvals.",
    result:
      "Dramatically reduced unpaid invoice cycles and secured highly continuous logistics and materials workflow.",
    metrics: [{ value: "98%", label: "On-Time Reconciliation" }],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
];

export const TECH_STACK: TechItem[] = [
  {
    category: "Financial Administration",
    items: [
      "QuickBooks, Xero & Sage",
      "Power BI & Excel Reporting",
      "Ledger Reconciliation",
      "Expense Tracking & Audits",
    ],
    advantage:
      "I ensure every metric is audit-ready and validated. I convert transactional records into clean, structured sheets that secure budgetary compliance.",
  },
  {
    category: "Project Coordination",
    items: [
      "Google Workspace & MS 365",
      "Procurement & Inventory tracking",
      "CRM (Salesforce, HubSpot, Zoho)",
      "Stakeholder liaison",
    ],
    advantage:
      "I organize programs, align internal and external stakeholders, and track outstanding deliverables, ensuring project momentum is consistently maintained.",
  },
  {
    category: "Digital Administration",
    items: [
      "SharePoint, OneDrive & Dropbox",
      "Systematic Digital Archive",
      "Calendar & Inbox (Outlook, Teams)",
      "Office Suites (Word, PowerPoint)",
    ],
    advantage:
      "I build clean computer database directory patterns with exact file version control, safeguarding administrative knowledge and facilitating lightning-fast document retrieval.",
  },
  {
    category: "Global Partnerships",
    items: [
      "Strategic Correspondence",
      "Mailchimp & Canva",
      "Trilingual Translations",
      "DeepL & Google Translate",
    ],
    advantage:
      "I bridge language boundaries, delivering smooth, culturally competent professional correspondence in native French, fluent English, and fluent Swahili.",
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    name: "French",
    level: "Native",
    description: "Strategic Negotiation & Formal Correspondence",
    geographicReach: "European & Francophone African Markets",
  },
  {
    name: "English",
    level: "Fluent",
    description: "Technical Writing & Executive Presentation",
    geographicReach: "Global Corporate Standards",
  },
  {
    name: "Swahili",
    level: "Fluent",
    description: "Regional Liaison & Market Coordination",
    geographicReach: "East African Regional Trade",
  },
];

export const INTERESTS = [
  { label: "Insight", icon: <Book className="w-6 h-6" /> },
  { label: "Strategy", icon: <Target className="w-6 h-6" /> },
  { label: "Excellence", icon: <Trophy className="w-6 h-6" /> },
  { label: "Endurance", icon: <Waves className="w-6 h-6" /> },
  { label: "Focus", icon: <Dumbbell className="w-6 h-6" /> },
];

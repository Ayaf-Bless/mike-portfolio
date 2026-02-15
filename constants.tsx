
import React from 'react';
import { Briefcase, Calculator, Globe, Book, Trophy, Dumbbell, Waves, Target, ShieldCheck, Zap, LayoutGrid, MessageSquare, Landmark, Clock, Languages } from 'lucide-react';
import { ExperienceItem, TechItem, LanguageItem, CaseStudyItem } from './types';

export const CORE_VALUES = [
  {
    title: 'Financial Governance',
    description: 'Ensuring fiscal transparency through meticulous bookkeeping and rigorous expense validation. I transform complex financial data into audit-ready assets for your business.',
    icon: <Landmark className="w-8 h-8 text-emerald" />,
    outcome: 'Fiscal Integrity'
  },
  {
    title: 'Operational Logistics',
    description: 'Optimizing project lifecycles through strategic scheduling and resource allocation. I implement robust workflows that maintain momentum and eliminate bottlenecks.',
    icon: <Clock className="w-8 h-8 text-emerald" />,
    outcome: 'Operational Velocity'
  },
  {
    title: 'Global Synchronization',
    description: 'Bridging international communication gaps with high-level linguistic support in French, English, and Swahili. I facilitate seamless cross-border partnerships and negotiations.',
    icon: <Languages className="w-8 h-8 text-emerald" />,
    outcome: 'Global Connectivity'
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Operations & Grant Support Specialist',
    company: 'Friendliware Technologies',
    period: '2023 - Present',
    description: [
      'Orchestrated multi-currency financial reconciliations and donor grant validation with 100% precision.',
      'Synchronized international project workflows across diverse time zones and operational frameworks.',
      'Architected digital filing systems using SharePoint to ensure institutional knowledge security.',
      'Facilitated high-stakes communication between global stakeholders and internal technical teams.',
    ],
  },
  {
    role: 'Project Operations Supervisor',
    company: 'AK Beamflex',
    period: '2021 - 2023',
    description: [
      'Managed complex on-site logistics for large-scale ICT and infrastructure deployments.',
      'Optimized procurement lifecycles by streamlining the interface between finance and vendors.',
      'Conducted high-frequency asset audits to maintain lean operational expenditure.',
      'Served as a linguistic bridge for technical specifications in multi-national project environments.',
    ],
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    title: 'NGO Grant Reconciliation',
    category: 'Financial Governance',
    problem: 'A multi-national NGO faced critical transparency challenges across regional offices, hindering audit completion.',
    solution: 'Engineered a centralized QuickBooks ecosystem and standardized digital archival protocols on SharePoint.',
    result: 'Achieved impeccable audit outcomes and realized a 15% reduction in operational leakage through rigorous oversight.',
    metrics: [
      { value: '100%', label: 'Audit Ready' },
      { value: '15%', label: 'Budget Saved' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    title: 'ICT Infrastructure Rollout',
    category: 'Project Logistics',
    problem: 'Communication latencies between technical field teams and headquarters delayed critical procurement by 14 days.',
    solution: 'Deployed agile task management frameworks and served as a strategic liaison for cross-departmental coordination.',
    result: 'Reduced procurement lead times by 85% and successfully finalized the deployment 21 days ahead of schedule.',
    metrics: [
      { value: '85%', label: 'Faster Procurement' }
  ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  }
];

export const TECH_STACK: TechItem[] = [
  {
    category: 'Financial Administration',
    items: ['QuickBooks', 'Excel Analytics', 'Cost Modeling'],
    advantage: 'I ensure every financial metric is transparent. I convert raw transaction data into strategic insights that drive budgetary precision.',
  },
  {
    category: 'Project Coordination',
    items: ['Asana & Trello', 'Salesforce CRM & Ops', 'Agile Scheduling'],
    advantage: 'I engineer the operational frameworks that keep growth sustainable. I eliminate friction and ensure every milestone is met with quality.',
  },
  {
    category: 'Information Security',
    items: ['SharePoint Administration', 'Microsoft 365', 'Data Governance'],
    advantage: 'I protect the integrity of your corporate assets. I implement secure access protocols ensuring the right data reaches the right hands.',
  },
  {
    category: 'Global Partnerships',
    items: ['Strategic Correspondence', 'Stakeholder Liaison', 'Trilingual Support'],
    advantage: 'I expand your global footprint through professional trilingual engagement, ensuring clarity in high-value international interactions.',
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    name: 'French',
    level: 'Native',
    description: 'Strategic Negotiation & Formal Correspondence',
    geographicReach: 'European & West African Markets'
  },
  {
    name: 'English',
    level: 'Fluent',
    description: 'Technical Writing & Executive Presentation',
    geographicReach: 'Global Corporate Standards'
  },
  {
    name: 'Swahili',
    level: 'Fluent',
    description: 'Regional Liaison & Market Coordination',
    geographicReach: 'East African Regional Trade'
  },
];

export const INTERESTS = [
  { label: 'Insight', icon: <Book className="w-6 h-6" /> },
  { label: 'Strategy', icon: <Target className="w-6 h-6" /> },
  { label: 'Excellence', icon: <Trophy className="w-6 h-6" /> },
  { label: 'Endurance', icon: <Waves className="w-6 h-6" /> },
  { label: 'Focus', icon: <Dumbbell className="w-6 h-6" /> },
];

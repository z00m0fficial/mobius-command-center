import type {
  AiRoutingDecision,
  ApprovalItem,
  DepartmentOperation,
  DecisionTransparencyRecord,
  DigitalTwinData,
  ExecutiveAssistantData,
  ExecutiveBriefData,
  FounderWorkspaceData,
  MemoryRecord,
  OrganizationHealthData,
  PredictiveRecommendation,
  RepositoryHealthRecord,
  SonicIntelligenceData,
  TimelineEvent,
  VoiceModePanelData
} from "./types";

export const executiveBrief: ExecutiveBriefData = {
  greeting: "Good Morning, Michael",
  summary:
    "Mobius Command Center is operating as the proactive Executive Operating System for the Mobius Organizational Intelligence Platform.",
  metrics: [
    {
      label: "Organization Health",
      value: "98%",
      detail: "Atlas Core, Mobius Router, Sonic, MCMS, and Forge are aligned on Version 5 execution.",
      tone: "online"
    },
    {
      label: "Departments Online",
      value: "8/8",
      detail: "All Mobius operating departments are visible with live recommendations.",
      tone: "verified"
    },
    {
      label: "Repositories Verified",
      value: "7",
      detail: "Repository Health confirms canon, architecture, governance, and memory sync status.",
      tone: "verified"
    },
    {
      label: "Open Decisions",
      value: "3",
      detail: "Executive approvals are queued with architecture impact and risk analysis.",
      tone: "pending"
    },
    {
      label: "Estimated Time Saved Today",
      value: "18.4h",
      detail: "Savings projected from routed decisions, memory reuse, and automated governance review.",
      tone: "online"
    }
  ],
  lastOrganizationalLearning:
    "The Command Center must operate as mission control for organizational intelligence, not as a passive analytics dashboard.",
  nextRecommendedAction:
    "Approve PCP-025 after build verification, then promote Version 5 UI patterns into Organizational Memory."
};

export const voiceModePanels: VoiceModePanelData = {
  silent: {
    title: "Text-only mode",
    body: "Mobius is presenting every signal visually with no synthesized voice layer active."
  },
  executive: {
    title: "Executive Voice Brief",
    brief: [
      "Organization health is stable at 98 percent with no critical governance drift.",
      "MCMS is waiting for approval on Command Center Version 5.",
      "Sonic preserved the raw transcript and generated a clean executive summary.",
      "Forge should push the verified implementation branch after build completion."
    ]
  },
  conversational: {
    title: "Ask Mobius",
    prompts: [
      "What changed across the organization today?",
      "Which decision has the highest architecture impact?",
      "What should Michael approve before the next platform evolution cycle?"
    ]
  }
};

export const organizationHealth: OrganizationHealthData = {
  score: "98%",
  status: "Operational intelligence synchronized",
  signals: [
    {
      label: "OIES",
      value: "96.4",
      detail: "Organizational Intelligence Efficiency Score from routed work, verified memory, and delivery throughput.",
      tone: "online"
    },
    {
      label: "VCI",
      value: "97%",
      detail: "Voice Confidence Index from Sonic captures, speaker verification, and meeting intelligence.",
      tone: "verified"
    },
    {
      label: "MIS",
      value: "94.8",
      detail: "Mobius Intelligence Score across memory reuse, recommendation quality, and operational precision.",
      tone: "online"
    },
    {
      label: "Decision Latency",
      value: "9m",
      detail: "Median time from signal intake to confidence-scored executive recommendation.",
      tone: "online"
    }
  ],
  operatingNotes: [
    "Organizational Digital Twin has every required department and dependency represented.",
    "Decision Transparency is attached to predictive recommendations before executive approval.",
    "Founder Workspace remains the global authority surface for platform evolution."
  ]
};

export const liveTimeline: TimelineEvent[] = [
  {
    time: "08:04",
    source: "Sonic",
    title: "Sonic captured meeting",
    detail: "Raw transcript preserved, clean transcript generated, VCI updated to 97 percent.",
    confidence: 0.97,
    tone: "verified"
  },
  {
    time: "08:11",
    source: "Atlas Core",
    title: "Atlas verified speakers",
    detail: "Michael Bell, Forge, Sonic, and MCMS speaker contexts matched to Organizational Memory.",
    confidence: 0.96,
    tone: "verified"
  },
  {
    time: "08:19",
    source: "Mobius Router",
    title: "Router detected engineering request",
    detail: "Command Center Version 5 routed to Forge and Codex with architecture constraints attached.",
    confidence: 0.98,
    tone: "online"
  },
  {
    time: "08:33",
    source: "Codex",
    title: "Codex opened PR",
    detail: "Implementation branch prepared for Version 5 review after build verification.",
    confidence: 0.91,
    tone: "syncing"
  },
  {
    time: "08:42",
    source: "MCMS",
    title: "MCMS recorded PCP",
    detail: "PCP-025 created for Executive Operating System transformation and governance review.",
    confidence: 0.94,
    tone: "pending"
  },
  {
    time: "08:57",
    source: "Organizational Memory",
    title: "Memory updated",
    detail: "Version 5 terminology, repository health, and decision evidence linked to the Command Center record.",
    confidence: 0.95,
    tone: "online"
  }
];

export const digitalTwin: DigitalTwinData = {
  nodes: [
    { name: "Atlas Core", role: "Intelligence engine", health: 98, tone: "online" },
    { name: "Router", role: "Routing authority", health: 97, tone: "online" },
    { name: "Sonic", role: "Voice intelligence", health: 96, tone: "verified" },
    { name: "Codex", role: "Implementation agent", health: 93, tone: "syncing" },
    { name: "Forge", role: "Developer platform", health: 94, tone: "online" },
    { name: "Memory", role: "Organizational Memory", health: 95, tone: "online" },
    { name: "MCMS", role: "Platform Change Proposal governance", health: 91, tone: "pending" },
    { name: "Sentinel", role: "Risk and governance", health: 90, tone: "watch" },
    { name: "Pulse", role: "Metrics and patterns", health: 92, tone: "online" },
    { name: "Command Center", role: "Founder Workspace and executive surface", health: 98, tone: "verified" }
  ],
  dependencies: [
    { from: "Atlas Core", to: "Router", relationship: "classifies intent and decision priority", strength: "critical" },
    { from: "Router", to: "Codex", relationship: "routes engineering execution", strength: "critical" },
    { from: "Sonic", to: "Memory", relationship: "preserves raw and clean transcript intelligence", strength: "high" },
    { from: "Forge", to: "Command Center", relationship: "ships reusable UI and platform contracts", strength: "high" },
    { from: "MCMS", to: "Sentinel", relationship: "validates PCP governance and architecture risk", strength: "high" },
    { from: "Pulse", to: "Atlas Core", relationship: "feeds OIES, MIS, and latency patterns", strength: "medium" }
  ]
};

export const departments: DepartmentOperation[] = [
  {
    name: "Atlas Core",
    status: "online",
    health: 98,
    activeWork: "Synthesizing Executive Brief, decision evidence, and next recommended action.",
    nextRecommendation: "Promote Version 5 operating-system pattern into the Atlas memory model."
  },
  {
    name: "Mobius Router",
    status: "verified",
    health: 97,
    activeWork: "Routing implementation, voice, governance, and repository health signals to the correct departments.",
    nextRecommendation: "Keep provider decisions attached to required repositories and confidence scores."
  },
  {
    name: "Sonic",
    status: "online",
    health: 96,
    activeWork: "Tracking listening state, speakers, dialect, VCI, transcripts, and meeting action items.",
    nextRecommendation: "Attach clean transcript outputs to Organizational Memory after executive approval."
  },
  {
    name: "MCMS",
    status: "pending",
    health: 91,
    activeWork: "Recording PCP-025 and verifying architecture, repository, memory, and governance impact.",
    nextRecommendation: "Approve only after build verification and Decision Transparency review."
  },
  {
    name: "Forge",
    status: "online",
    health: 94,
    activeWork: "Turning Mobius Command Center into a reusable TypeScript/Vite operating surface.",
    nextRecommendation: "Keep components modular and mock data isolated for future platform APIs."
  },
  {
    name: "Pulse",
    status: "online",
    health: 92,
    activeWork: "Measuring OIES, MIS, VCI movement, memory reuse, and time saved today.",
    nextRecommendation: "Flag any metric that moves without evidence from Organizational Memory."
  },
  {
    name: "Sentinel",
    status: "watch",
    health: 90,
    activeWork: "Watching architecture drift, governance status, risk analysis, and verification state.",
    nextRecommendation: "Require architecture references before any executive approval is marked verified."
  },
  {
    name: "Nexus",
    status: "syncing",
    health: 88,
    activeWork: "Mapping dependencies inside the Organizational Digital Twin.",
    nextRecommendation: "Connect Command Center dependencies to Mobius Network once live APIs exist."
  }
];

export const aiRoutingDecisions: AiRoutingDecision[] = [
  {
    id: "route-v5-001",
    route: "Command Center Version 5 implementation",
    providerSelected: "Codex",
    status: "online",
    confidence: 0.98,
    requiredRepositories: ["mobius-command-center", "atlas-core", "mobius-enterprise-starter-kit"],
    reason: "Request requires TypeScript/Vite implementation, UI architecture, build verification, and GitHub delivery."
  },
  {
    id: "route-v5-002",
    route: "Executive Brief synthesis",
    providerSelected: "Atlas Core",
    status: "verified",
    confidence: 0.96,
    requiredRepositories: ["atlas-core", "mobius-docs"],
    reason: "Executive context must preserve Mobius terminology and platform mission."
  },
  {
    id: "route-v5-003",
    route: "Sonic Intelligence Center",
    providerSelected: "Sonic",
    status: "verified",
    confidence: 0.97,
    requiredRepositories: ["mobius-command-center", "sonic", "atlas-core"],
    reason: "Voice mode, VCI, speaker verification, transcript preservation, and meeting output belong to Sonic."
  }
];

export const approvalItems: ApprovalItem[] = [
  {
    id: "PCP-025",
    title: "Command Center Version 5 Executive Operating System",
    status: "pending",
    architectureImpact: "Elevates Command Center from dashboard to proactive executive OS surface.",
    repositoryImpact: "Updates Vite UI components, typed mock data, strict TypeScript contracts, and responsive styling.",
    memoryImpact: "Creates reusable records for Executive Brief, Digital Twin, approvals, and decision transparency.",
    riskAnalysis: "Low backend risk because Version 5 is UI-only; medium governance risk if PCP evidence is not preserved.",
    confidence: 0.96,
    testsPassed: "Build verification pending",
    governanceVerified: true
  },
  {
    id: "PCP-026",
    title: "Sonic Mode Expansion",
    status: "watch",
    architectureImpact: "Introduces visible Silent, Executive, and Conversational voice states without synthesis.",
    repositoryImpact: "No backend dependency; state is local UI only.",
    memoryImpact: "Records voice-mode expectations for future Sonic implementation.",
    riskAnalysis: "Low implementation risk; must avoid implying live voice synthesis is active.",
    confidence: 0.92,
    testsPassed: "UI interaction smoke ready",
    governanceVerified: true
  }
];

export const sonicIntelligence: SonicIntelligenceData = {
  listeningStatus: "Listening standby",
  activeCaptures: 6,
  currentSpeakers: ["Michael Bell", "Atlas Core", "Forge", "Sonic"],
  language: "English",
  dialect: "US executive / studio operations",
  voiceConfidenceIndex: "97%",
  speakerVerificationStatus: "Verified against Organizational Memory voice context",
  meetingSummary:
    "Version 5 requires Mobius Command Center to become a proactive Executive Operating System with voice mode, approvals, Digital Twin, decision transparency, and Founder Workspace.",
  actionItems: [
    "Run build verification after implementation.",
    "Push Version 5 to GitHub or open a pull request.",
    "Promote PCP-025 and key terminology into Organizational Memory."
  ],
  rawTranscriptPreserved: true,
  cleanTranscriptGenerated: true
};

export const memoryRecords: MemoryRecord[] = [
  {
    id: "MEM-1048",
    type: "Executive Brief",
    title: "Version 5 operating posture",
    summary: "Command Center should proactively surface decisions, approvals, risk, and next actions.",
    source: "Atlas Core",
    confidence: 0.98
  },
  {
    id: "MEM-1049",
    type: "Sonic Capture",
    title: "Voice mode expectations",
    summary: "Silent, Executive, and Conversational modes are visible UI states only until Sonic synthesis is integrated.",
    source: "Sonic",
    confidence: 0.97
  },
  {
    id: "MEM-1050",
    type: "Platform Change Proposal",
    title: "PCP-025 governance record",
    summary: "Version 5 impacts UI architecture, typed data boundaries, and organizational memory surfaces.",
    source: "MCMS",
    confidence: 0.94
  },
  {
    id: "MEM-1051",
    type: "Repository Update",
    title: "mobius-command-center main synced",
    summary: "Latest GitHub main pulled before implementation and CODEX_UI_COMPLETION_BRIEF.md confirmed.",
    source: "Forge",
    confidence: 0.96
  }
];

export const predictiveRecommendations: PredictiveRecommendation[] = [
  {
    title: "Approve Version 5 after build verification",
    whatNeedsAttention: "PCP-025 is pending executive decision.",
    whatChanged: "The Command Center now contains approval, voice, Digital Twin, and transparency surfaces.",
    whatMobiusRecommendsNext: "Approve only after build output and repository status are attached to the PCP.",
    owner: "MCMS",
    confidence: 0.96,
    tone: "pending"
  },
  {
    title: "Promote voice-mode contracts",
    whatNeedsAttention: "Sonic UI states must remain clear before real synthesis exists.",
    whatChanged: "Silent, Executive, and Conversational states are now visible in the Founder Workspace.",
    whatMobiusRecommendsNext: "Store the UI contract in Organizational Memory before backend planning begins.",
    owner: "Sonic",
    confidence: 0.93,
    tone: "verified"
  },
  {
    title: "Watch architecture drift",
    whatNeedsAttention: "Version 5 expands the Command Center surface area quickly.",
    whatChanged: "Decision Transparency and Repository Health now expose governance state together.",
    whatMobiusRecommendsNext: "Let Sentinel require architecture references for every future executive approval.",
    owner: "Sentinel",
    confidence: 0.91,
    tone: "watch"
  }
];

export const executiveAssistant: ExecutiveAssistantData = {
  currentFocus: "Command Center Version 5 approval and GitHub delivery",
  draftedBrief:
    "Michael, Version 5 is ready for build verification. The main decision is whether to approve PCP-025 and promote this operating model into Organizational Memory.",
  suggestedActions: [
    "Review Decision Transparency for PCP-025.",
    "Confirm repository health after build.",
    "Approve, request changes, or reject from the Executive Approval Center."
  ],
  waitingOn: ["Build verification", "GitHub branch push", "PCP-025 final status"]
};

export const repositoryHealth: RepositoryHealthRecord[] = [
  {
    repository: "mobius-command-center",
    health: "98%",
    branch: "main / version-5",
    latestCommit: "97c7ca5",
    architectureVersion: "5.0",
    canonVersion: "5.0",
    documentationStatus: "Brief confirmed",
    verificationStatus: "Build pending",
    pendingPrs: 1,
    memorySync: "Ready",
    governanceStatus: "PCP-025 pending",
    tone: "pending"
  },
  {
    repository: "atlas-core",
    health: "96%",
    branch: "main",
    latestCommit: "source-of-truth",
    architectureVersion: "1.0",
    canonVersion: "1.0",
    documentationStatus: "Aligned",
    verificationStatus: "Verified",
    pendingPrs: 0,
    memorySync: "Synced",
    governanceStatus: "Verified",
    tone: "verified"
  },
  {
    repository: "mobius-enterprise-starter-kit",
    health: "94%",
    branch: "main",
    latestCommit: "source-of-truth",
    architectureVersion: "2.0",
    canonVersion: "2.0",
    documentationStatus: "Aligned",
    verificationStatus: "Verified",
    pendingPrs: 0,
    memorySync: "Synced",
    governanceStatus: "Verified",
    tone: "verified"
  },
  {
    repository: "mobius-docs",
    health: "92%",
    branch: "main",
    latestCommit: "canon-active",
    architectureVersion: "3.0",
    canonVersion: "3.0",
    documentationStatus: "Aligned",
    verificationStatus: "Watch",
    pendingPrs: 2,
    memorySync: "Partial",
    governanceStatus: "Sentinel watch",
    tone: "watch"
  }
];

export const decisionTransparency: DecisionTransparencyRecord[] = [
  {
    recommendation: "Approve Command Center Version 5 after build verification.",
    confidence: 0.96,
    evidence: [
      "User required Version 5 Executive Operating System transformation.",
      "Latest GitHub main pulled before implementation.",
      "All required UI sections are represented as dedicated components."
    ],
    memoryReferences: ["MEM-1048", "MEM-1050", "Organizational Memory: Version 5 operating posture"],
    architectureReferences: ["architecture.yaml", "CODEX_UI_COMPLETION_BRIEF.md", "PCP-025"],
    dependencies: ["Atlas Core", "Mobius Router", "MCMS", "Forge", "Sentinel"],
    alternativeOptions: [
      "Ship as dashboard-only update with lower governance surface.",
      "Defer approvals and Decision Transparency until backend integration."
    ],
    risk: "Main risk is treating mock intelligence as live data before platform APIs are connected.",
    estimatedImpact: "High: creates the executive surface for proactive organizational intelligence."
  },
  {
    recommendation: "Keep voice features UI-only until Sonic synthesis is implemented.",
    confidence: 0.94,
    evidence: [
      "Request explicitly says do not implement real voice synthesis yet.",
      "Sonic Intelligence Center separates listening status from synthesis behavior."
    ],
    memoryReferences: ["MEM-1049", "Sonic voice-mode contract"],
    architectureReferences: ["Sonic Intelligence Center", "Voice Mode Toggle"],
    dependencies: ["Sonic", "Atlas Core", "Organizational Memory"],
    alternativeOptions: ["Hide voice states until backend work begins.", "Add simulated audio playback."],
    risk: "Low: visible state could be mistaken for live synthesis without clear UI copy.",
    estimatedImpact: "Medium: prepares the interface for future voice intelligence without backend risk."
  }
];

export const founderWorkspace: FounderWorkspaceData = {
  founder: "Michael Bell",
  role: "Chief Architect",
  authority: "Global",
  currentInitiative: "Command Center Version 5",
  pendingApprovals: 3,
  repositoriesChangedToday: 1,
  architectureDrift: "Low / Sentinel watch",
  canonUpdates: "Version 5 UI terminology queued",
  roadmap: [
    "Version 5 Executive Operating System UI",
    "Live Atlas Platform API integration",
    "Sonic voice synthesis and transcript routing",
    "MCMS governance automation",
    "Organizational Digital Twin live dependency graph"
  ],
  platformEvolutionTimeline: [
    {
      time: "Now",
      source: "Founder Workspace",
      title: "Version 5 execution",
      detail: "Command Center becomes the executive OS surface.",
      confidence: 0.98,
      tone: "online"
    },
    {
      time: "Next",
      source: "Forge",
      title: "API readiness",
      detail: "Replace typed mock intelligence with Atlas Platform APIs.",
      confidence: 0.88,
      tone: "syncing"
    },
    {
      time: "Later",
      source: "Nexus",
      title: "Organization mesh",
      detail: "Connect Organizational Digital Twin to Mobius Network dependency mapping.",
      confidence: 0.82,
      tone: "watch"
    }
  ]
};

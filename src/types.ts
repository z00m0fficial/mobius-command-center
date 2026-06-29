import type { LucideIcon } from "lucide-react";

export type VoiceMode = "silent" | "executive" | "conversational";

export type StatusTone =
  | "online"
  | "verified"
  | "syncing"
  | "watch"
  | "pending"
  | "approved"
  | "risk"
  | "neutral";

export interface MetricCardData {
  label: string;
  value: string;
  detail: string;
  tone: StatusTone;
}

export interface ExecutiveBriefData {
  greeting: string;
  summary: string;
  metrics: MetricCardData[];
  lastOrganizationalLearning: string;
  nextRecommendedAction: string;
}

export interface VoiceModePanelData {
  silent: {
    title: string;
    body: string;
  };
  executive: {
    title: string;
    brief: string[];
  };
  conversational: {
    title: string;
    prompts: string[];
  };
}

export interface OrganizationHealthData {
  score: string;
  status: string;
  signals: MetricCardData[];
  operatingNotes: string[];
}

export interface TimelineEvent {
  time: string;
  source: string;
  title: string;
  detail: string;
  confidence: number;
  tone: StatusTone;
}

export interface DigitalTwinNode {
  name: string;
  role: string;
  health: number;
  tone: StatusTone;
}

export interface DigitalTwinDependency {
  from: string;
  to: string;
  relationship: string;
  strength: string;
}

export interface DigitalTwinData {
  nodes: DigitalTwinNode[];
  dependencies: DigitalTwinDependency[];
}

export interface DepartmentOperation {
  name:
    | "Atlas Core"
    | "Mobius Router"
    | "Sonic"
    | "MCMS"
    | "Forge"
    | "Pulse"
    | "Sentinel"
    | "Nexus";
  status: StatusTone;
  health: number;
  activeWork: string;
  nextRecommendation: string;
}

export interface AiRoutingDecision {
  id: string;
  route: string;
  providerSelected: string;
  status: StatusTone;
  confidence: number;
  requiredRepositories: string[];
  reason: string;
}

export interface ApprovalItem {
  id: string;
  title: string;
  status: StatusTone;
  architectureImpact: string;
  repositoryImpact: string;
  memoryImpact: string;
  riskAnalysis: string;
  confidence: number;
  testsPassed: string;
  governanceVerified: boolean;
}

export interface SonicIntelligenceData {
  listeningStatus: string;
  activeCaptures: number;
  currentSpeakers: string[];
  language: string;
  dialect: string;
  voiceConfidenceIndex: string;
  speakerVerificationStatus: string;
  meetingSummary: string;
  actionItems: string[];
  rawTranscriptPreserved: boolean;
  cleanTranscriptGenerated: boolean;
}

export interface MemoryRecord {
  id: string;
  type: string;
  title: string;
  summary: string;
  source: string;
  confidence: number;
}

export interface PredictiveRecommendation {
  title: string;
  whatNeedsAttention: string;
  whatChanged: string;
  whatMobiusRecommendsNext: string;
  owner: string;
  confidence: number;
  tone: StatusTone;
}

export interface ExecutiveAssistantData {
  currentFocus: string;
  draftedBrief: string;
  suggestedActions: string[];
  waitingOn: string[];
}

export interface RepositoryHealthRecord {
  repository: string;
  health: string;
  branch: string;
  latestCommit: string;
  architectureVersion: string;
  canonVersion: string;
  documentationStatus: string;
  verificationStatus: string;
  pendingPrs: number;
  memorySync: string;
  governanceStatus: string;
  tone: StatusTone;
}

export interface DecisionTransparencyRecord {
  recommendation: string;
  confidence: number;
  evidence: string[];
  memoryReferences: string[];
  architectureReferences: string[];
  dependencies: string[];
  alternativeOptions: string[];
  risk: string;
  estimatedImpact: string;
}

export interface FounderWorkspaceData {
  founder: string;
  role: string;
  authority: string;
  currentInitiative: string;
  pendingApprovals: number;
  repositoriesChangedToday: number;
  architectureDrift: string;
  canonUpdates: string;
  roadmap: string[];
  platformEvolutionTimeline: TimelineEvent[];
}

export interface PanelAction {
  label: string;
  icon?: LucideIcon;
}

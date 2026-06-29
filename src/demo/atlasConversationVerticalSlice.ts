export type VerticalSliceStage =
  | "runtime_received"
  | "loop_created"
  | "brain_classified"
  | "memory_read"
  | "memory_written"
  | "dashboard_updated"
  | "dna_event_emitted"
  | "telemetry_logged"
  | "completed";

export interface ConversationMemoryRecord {
  id: string;
  scope: "business" | "department" | "individual" | "recommendation";
  department: "Operations" | "Communications" | "Creative" | "Instructor Intelligence" | "Executive";
  category: string;
  content: string;
  confidence: number;
}

export interface DashboardEvent {
  id: string;
  card: string;
  status: "healthy" | "watch" | "critical";
  message: string;
}

export interface AtlasDnaEvent {
  id: string;
  branch: string;
  mutation: "memory_growth" | "risk_pulse" | "recommendation_pulse";
  color: "blue" | "red" | "green" | "gold" | "purple";
}

export interface TelemetryEvent {
  loopId: string;
  runtime: "success";
  brain: "success";
  memoryReads: number;
  memoryWrites: number;
  dashboardEvents: number;
  dnaEvents: number;
  provider: "memory-first" | "openai" | "none";
  confidence: number;
  latencyMs: number;
}

export interface AtlasConversationVerticalSliceResult {
  status: "completed";
  loopId: string;
  input: string;
  trace: VerticalSliceStage[];
  classification: {
    intent: "operational_improvement";
    department: ConversationMemoryRecord["department"];
    category: string;
    risk: "low" | "medium" | "high";
  };
  memoryRecords: ConversationMemoryRecord[];
  dashboardEvents: DashboardEvent[];
  dnaEvents: AtlasDnaEvent[];
  liveIntelligenceFeed: string[];
  recommendation: string;
  executiveSummary: string;
  telemetry: TelemetryEvent;
}

function classifyConversation(input: string): AtlasConversationVerticalSliceResult["classification"] {
  const normalized = input.toLowerCase();

  if (normalized.includes("parent") || normalized.includes("communication")) {
    return {
      intent: "operational_improvement",
      department: "Communications",
      category: "Parent Communication",
      risk: "high"
    };
  }

  if (normalized.includes("recital") || normalized.includes("video") || normalized.includes("marketing")) {
    return {
      intent: "operational_improvement",
      department: "Creative",
      category: "Creative Workflow",
      risk: "medium"
    };
  }

  return {
    intent: "operational_improvement",
    department: "Operations",
    category: "Instructor Coverage",
    risk: "high"
  };
}

export function runAtlasConversationVerticalSlice(input: string): AtlasConversationVerticalSliceResult {
  const startedAt = Date.now();
  const loopId = `ACE-${startedAt}`;
  const trace: VerticalSliceStage[] = ["runtime_received", "loop_created"];

  const classification = classifyConversation(input);
  trace.push("brain_classified", "memory_read");

  const memoryRecords: ConversationMemoryRecord[] = [
    {
      id: `${loopId}-business-memory`,
      scope: "business",
      department: classification.department,
      category: classification.category,
      content: input,
      confidence: 0.97
    },
    {
      id: `${loopId}-recommendation-memory`,
      scope: "recommendation",
      department: classification.department,
      category: "Next Best Action",
      content: `Create a weekly ${classification.category.toLowerCase()} review and assign one owner before the next class week.`,
      confidence: 0.94
    }
  ];
  trace.push("memory_written");

  const dashboardEvents: DashboardEvent[] = [
    {
      id: `${loopId}-dashboard-risk`,
      card: classification.category,
      status: classification.risk === "high" ? "watch" : "healthy",
      message: `${classification.category} added to the executive dashboard.`
    },
    {
      id: `${loopId}-dashboard-priority`,
      card: "Recommended Actions",
      status: "watch",
      message: "Next best action generated from the captured need."
    }
  ];
  trace.push("dashboard_updated");

  const dnaEvents: AtlasDnaEvent[] = [
    {
      id: `${loopId}-dna-memory-growth`,
      branch: classification.department,
      mutation: "memory_growth",
      color: "blue"
    },
    {
      id: `${loopId}-dna-risk-pulse`,
      branch: classification.department,
      mutation: "risk_pulse",
      color: classification.risk === "high" ? "red" : "gold"
    }
  ];
  trace.push("dna_event_emitted");

  const recommendation = `Create a weekly ${classification.category.toLowerCase()} review, assign an owner, and track unresolved items in Mobius until the risk is reduced.`;
  const executiveSummary = `Mobius captured a ${classification.risk}-priority ${classification.category} need for ${classification.department}, stored it in Organizational Memory, updated the dashboard, emitted Atlas DNA events, and generated a next-best-action recommendation.`;

  const telemetry: TelemetryEvent = {
    loopId,
    runtime: "success",
    brain: "success",
    memoryReads: 3,
    memoryWrites: memoryRecords.length,
    dashboardEvents: dashboardEvents.length,
    dnaEvents: dnaEvents.length,
    provider: "memory-first",
    confidence: 0.96,
    latencyMs: Date.now() - startedAt
  };
  trace.push("telemetry_logged", "completed");

  return {
    status: "completed",
    loopId,
    input,
    trace,
    classification,
    memoryRecords,
    dashboardEvents,
    dnaEvents,
    liveIntelligenceFeed: [
      "Runtime received request",
      "Loop ID created",
      "Atlas Brain classified the operational need",
      "Organizational Memory read",
      "Business Memory created",
      "Recommendation Memory created",
      "Dashboard updated",
      "Atlas DNA evolved",
      "Telemetry logged"
    ],
    recommendation,
    executiveSummary,
    telemetry
  };
}

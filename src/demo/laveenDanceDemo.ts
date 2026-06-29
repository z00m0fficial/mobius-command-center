export type DemoLoopStatus = "created" | "planning" | "memory_search" | "reasoning" | "dashboard_update" | "completed";

export interface DemoMemoryRecord {
  title: string;
  summary: string;
  tags: string[];
}

export interface DemoTelemetryCard {
  label: string;
  value: string;
  status: "healthy" | "watch" | "critical";
}

export interface LaveenDanceDemoResult {
  loopId: string;
  organization: "Laveen Dance";
  status: "completed";
  prompt: string;
  trace: DemoLoopStatus[];
  memoryHits: number;
  memoryWrites: number;
  providerCalls: number;
  recommendation: string;
  dashboardCards: DemoTelemetryCard[];
}

const LAVEEN_MEMORY: DemoMemoryRecord[] = [
  {
    title: "Instructor Reliability Framework",
    summary:
      "Instructors begin with a score of 100. No-shows, late cancellations, and negative studio feedback reduce the score. Recovery is possible through reliability, positive feedback, and consistent attendance.",
    tags: ["instructors", "mis", "reliability", "recovery"]
  },
  {
    title: "Studio Operations Priorities",
    summary:
      "Studios need reliable instructor coverage, parent communication, substitute coordination, class scheduling, and visibility into operational risks.",
    tags: ["studio", "operations", "scheduling", "risk"]
  },
  {
    title: "Laveen Demo Focus",
    summary:
      "The demo should show how Mobius helps Laveen Dance reduce missed classes, improve staffing visibility, and create an executive dashboard for studio decisions.",
    tags: ["laveen", "demo", "dashboard", "staffing"]
  }
];

export function runLaveenDanceDemo(prompt: string): LaveenDanceDemoResult {
  const loopId = "LVN-" + Date.now();
  const trace: DemoLoopStatus[] = ["created", "planning", "memory_search"];

  const memoryHits = LAVEEN_MEMORY.filter((record) => {
    const text = `${record.title} ${record.summary} ${record.tags.join(" ")}`.toLowerCase();
    return ["staffing", "instructor", "studio", "risk", "operations", "dance"].some((term) => text.includes(term));
  }).length;

  trace.push("reasoning");

  const recommendation =
    "Create a weekly instructor coverage review, flag classes without reliable backup coverage, and use MIS recovery rules to coach instructors before problems become missed classes.";

  trace.push("dashboard_update", "completed");

  return {
    loopId,
    organization: "Laveen Dance",
    status: "completed",
    prompt,
    trace,
    memoryHits,
    memoryWrites: 1,
    providerCalls: 0,
    recommendation,
    dashboardCards: [
      { label: "Runtime Loop", value: "Completed", status: "healthy" },
      { label: "Brain", value: "Memory-first reasoning", status: "healthy" },
      { label: "Memory Hits", value: String(memoryHits), status: "healthy" },
      { label: "Provider Calls", value: "0", status: "healthy" },
      { label: "Class Coverage Risk", value: "Review needed", status: "watch" },
      { label: "Instructor Reliability", value: "MIS active", status: "healthy" },
      { label: "Recommended Action", value: "Coverage review", status: "watch" },
      { label: "Memory Writes", value: "1", status: "healthy" }
    ]
  };
}

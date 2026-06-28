export type LoopStepStatus = "pending" | "active" | "complete" | "failed";

export interface IntelligenceLoopStep {
  key: string;
  label: string;
  eventName: string;
  status: LoopStepStatus;
  timestamp?: string;
}

export interface IntelligenceLoopState {
  correlationId: string;
  organizationId: string;
  overallStatus: LoopStepStatus;
  steps: IntelligenceLoopStep[];
}

const defaultSteps: IntelligenceLoopStep[] = [
  { key: "request", label: "Request Received", eventName: "RequestReceived", status: "pending" },
  { key: "intent", label: "Intent Classified", eventName: "IntentClassified", status: "pending" },
  { key: "route", label: "Route Selected", eventName: "RouteSelected", status: "pending" },
  { key: "provider", label: "Provider Executed", eventName: "ProviderExecuted", status: "pending" },
  { key: "pulse", label: "Pulse Metric Recorded", eventName: "PulseMetricRecorded", status: "pending" },
  { key: "memory", label: "Memory Event Created", eventName: "MemoryEventCreated", status: "pending" },
  { key: "mcms", label: "MCMS Audit Recorded", eventName: "McmsAuditRecorded", status: "pending" },
  { key: "dashboard", label: "Dashboard Refresh Requested", eventName: "DashboardRefreshRequested", status: "pending" }
];

export function createInitialLoopState(input: { correlationId: string; organizationId: string }): IntelligenceLoopState {
  return {
    correlationId: input.correlationId,
    organizationId: input.organizationId,
    overallStatus: "pending",
    steps: defaultSteps.map((step) => ({ ...step }))
  };
}

export function applyEventToLoop(state: IntelligenceLoopState, eventName: string, timestamp = new Date().toISOString()): IntelligenceLoopState {
  const steps = state.steps.map((step) => {
    if (step.eventName === eventName) {
      return { ...step, status: "complete" as const, timestamp };
    }
    return step;
  });

  const allComplete = steps.every((step) => step.status === "complete");
  const anyComplete = steps.some((step) => step.status === "complete");

  return {
    ...state,
    overallStatus: allComplete ? "complete" : anyComplete ? "active" : "pending",
    steps
  };
}

export function createDashboardRefreshEvent(state: IntelligenceLoopState) {
  return {
    id: "evt-dashboard-" + Date.now(),
    name: "DashboardRefreshRequested" as const,
    version: "1.0" as const,
    timestamp: new Date().toISOString(),
    source: "mobius-command-center" as const,
    organizationId: state.organizationId,
    correlationId: state.correlationId,
    payload: {
      overallStatus: state.overallStatus,
      completedSteps: state.steps.filter((step) => step.status === "complete").length,
      totalSteps: state.steps.length
    }
  };
}

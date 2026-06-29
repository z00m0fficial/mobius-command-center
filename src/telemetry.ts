export interface LoopTelemetryInput {
  loopId: string;
  organizationId: string;
  status: "running" | "completed" | "failed";
  memoryHits: number;
  memoryWrites: number;
  providerCalls: number;
  policyStatus: "passed" | "failed";
  summary: string;
}

export interface DashboardTelemetry {
  id: string;
  timestamp: string;
  loopId: string;
  organizationId: string;
  status: "running" | "completed" | "failed";
  cards: {
    loopStatus: string;
    memoryHits: number;
    memoryWrites: number;
    providerCalls: number;
    policyStatus: string;
  };
  summary: string;
}

export function createDashboardTelemetry(input: LoopTelemetryInput): DashboardTelemetry {
  return {
    id: "dash-" + Date.now(),
    timestamp: new Date().toISOString(),
    loopId: input.loopId,
    organizationId: input.organizationId,
    status: input.status,
    cards: {
      loopStatus: input.status,
      memoryHits: input.memoryHits,
      memoryWrites: input.memoryWrites,
      providerCalls: input.providerCalls,
      policyStatus: input.policyStatus
    },
    summary: input.summary
  };
}

import { expect, test } from "vitest";
import { createDashboardTelemetry } from "../src/telemetry";

test("captures Phase 2 loop state", () => {
  const result = createDashboardTelemetry({
    loopId: "ML-TEST-001",
    organizationId: "mobius-technologies",
    status: "completed",
    memoryHits: 2,
    memoryWrites: 1,
    providerCalls: 0,
    policyStatus: "passed",
    summary: "Brain completed memory-first engineering summary."
  });

  expect(result.status).toBe("completed");
  expect(result.cards.providerCalls).toBe(0);
  expect(result.cards.memoryHits).toBe(2);
});

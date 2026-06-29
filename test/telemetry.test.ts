import assert from "node:assert/strict";
import test from "node:test";
import { createDashboardTelemetry } from "../src/telemetry.js";

test("dashboard telemetry captures Phase 2 loop state", () => {
  const telemetry = createDashboardTelemetry({
    loopId: "ML-TEST-001",
    organizationId: "mobius-technologies",
    status: "completed",
    memoryHits: 2,
    memoryWrites: 1,
    providerCalls: 0,
    policyStatus: "passed",
    summary: "Brain completed memory-first engineering summary."
  });

  assert.equal(telemetry.status, "completed");
  assert.equal(telemetry.cards.providerCalls, 0);
  assert.equal(telemetry.cards.memoryHits, 2);
});

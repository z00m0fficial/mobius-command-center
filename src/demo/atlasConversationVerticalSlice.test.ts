import { expect, test } from "vitest";
import { runAtlasConversationVerticalSlice } from "./atlasConversationVerticalSlice";

test("Atlas Conversation Engine completes Runtime to Brain to Memory to Dashboard to DNA to Telemetry loop", () => {
  const result = runAtlasConversationVerticalSlice("We're having trouble finding substitute instructors.");

  expect(result.status).toBe("completed");
  expect(result.loopId).toMatch(/^ACE-/);
  expect(result.trace).toEqual([
    "runtime_received",
    "loop_created",
    "brain_classified",
    "memory_read",
    "memory_written",
    "dashboard_updated",
    "dna_event_emitted",
    "telemetry_logged",
    "completed"
  ]);

  expect(result.classification.intent).toBe("operational_improvement");
  expect(result.classification.department).toBe("Operations");
  expect(result.classification.category).toBe("Instructor Coverage");
  expect(result.memoryRecords).toHaveLength(2);
  expect(result.memoryRecords.some((record) => record.scope === "business")).toBe(true);
  expect(result.memoryRecords.some((record) => record.scope === "recommendation")).toBe(true);
  expect(result.dashboardEvents.length).toBeGreaterThanOrEqual(2);
  expect(result.dnaEvents.length).toBeGreaterThanOrEqual(2);
  expect(result.liveIntelligenceFeed).toContain("Atlas DNA evolved");
  expect(result.recommendation).toContain("weekly instructor coverage review");

  expect(result.telemetry.runtime).toBe("success");
  expect(result.telemetry.brain).toBe("success");
  expect(result.telemetry.memoryReads).toBeGreaterThanOrEqual(1);
  expect(result.telemetry.memoryWrites).toBe(2);
  expect(result.telemetry.dashboardEvents).toBe(2);
  expect(result.telemetry.dnaEvents).toBe(2);
  expect(result.telemetry.provider).toBe("memory-first");
  expect(result.telemetry.confidence).toBeGreaterThanOrEqual(0.9);
});

test("Atlas Conversation Engine routes parent communication needs to Communications", () => {
  const result = runAtlasConversationVerticalSlice("Parents do not always know what is happening each week.");

  expect(result.classification.department).toBe("Communications");
  expect(result.classification.category).toBe("Parent Communication");
  expect(result.dashboardEvents[0].card).toBe("Parent Communication");
  expect(result.dnaEvents[0].branch).toBe("Communications");
});

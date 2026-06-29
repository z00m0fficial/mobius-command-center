import { expect, test } from "vitest";
import { runLaveenDanceDemo } from "./laveenDanceDemo";

test("Laveen Dance demo completes Runtime to Brain to Memory to Dashboard slice", () => {
  const result = runLaveenDanceDemo(
    "Summarize Laveen Dance operations this week, identify staffing risks, and recommend the next best action."
  );

  expect(result.status).toBe("completed");
  expect(result.organization).toBe("Laveen Dance");
  expect(result.trace).toEqual([
    "created",
    "planning",
    "memory_search",
    "reasoning",
    "dashboard_update",
    "completed"
  ]);
  expect(result.memoryHits).toBeGreaterThanOrEqual(1);
  expect(result.memoryWrites).toBe(1);
  expect(result.providerCalls).toBe(0);
  expect(result.dashboardCards.length).toBeGreaterThanOrEqual(6);
  expect(result.recommendation).toContain("instructor coverage review");
});

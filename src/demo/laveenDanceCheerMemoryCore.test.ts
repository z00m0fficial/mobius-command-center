import { expect, test } from "vitest";
import { LaveenDanceCheerMemoryCore, runLaveenRealtimeNeedsDemo } from "./laveenDanceCheerMemoryCore";

test("stores business and individual memory core records", () => {
  const memory = new LaveenDanceCheerMemoryCore();

  memory.remember({
    scope: "business",
    subjectId: "laveen-dance-cheer",
    subjectName: "Laveen Dance & Cheer",
    category: "need",
    content: "Needs reliable instructor scheduling and class coverage visibility.",
    tags: ["scheduling", "coverage"]
  });

  memory.remember({
    scope: "individual",
    subjectId: "owner",
    subjectName: "Owner",
    category: "preference",
    content: "Wants executive summaries before weekly schedule reviews.",
    tags: ["owner", "summary"]
  });

  expect(memory.list()).toHaveLength(2);
  expect(memory.search({ query: "coverage", scope: "business" })).toHaveLength(1);
  expect(memory.search({ query: "summaries", scope: "individual" })).toHaveLength(1);
});

test("runs realtime needs demo for Laveen Dance and Cheer", () => {
  const result = runLaveenRealtimeNeedsDemo();

  expect(result.status).toBe("completed");
  expect(result.organization).toBe("Laveen Dance & Cheer");
  expect(result.memoryWrites).toBe(2);
  expect(result.memoryHits).toBeGreaterThanOrEqual(1);
  expect(result.recommendation).toContain("dashboard becomes smarter");
});

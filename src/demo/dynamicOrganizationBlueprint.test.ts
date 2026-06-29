import { expect, test } from "vitest";
import { generateDynamicOrganizationBlueprint } from "./dynamicOrganizationBlueprint";

test("generates a Dance & Cheer blueprint from studio conversation inputs", () => {
  const blueprint = generateDynamicOrganizationBlueprint("Laveen Dance & Cheer", [
    "We're having trouble finding substitute instructors for dance classes.",
    "Parents do not always know what is happening each week.",
    "Recital marketing videos take too long to organize."
  ]);

  expect(blueprint.organization).toBe("Laveen Dance & Cheer");
  expect(blueprint.industryGenome).toBe("Dance & Cheer");
  expect(blueprint.departments.map((department) => department.name)).toContain("Operations");
  expect(blueprint.departments.map((department) => department.name)).toContain("Communications");
  expect(blueprint.departments.map((department) => department.name)).toContain("Creative");
  expect(blueprint.challenges.length).toBe(3);
  expect(blueprint.verifiedMemories.length).toBeGreaterThanOrEqual(6);
  expect(blueprint.recommendations.length).toBe(3);
  expect(blueprint.dnaSnapshot.state).toBe("Growing");
  expect(blueprint.constructionFeed).toContain("Organization Blueprint complete");
});

test("different conversation inputs generate a different industry blueprint", () => {
  const danceBlueprint = generateDynamicOrganizationBlueprint("Laveen Dance & Cheer", [
    "We're having trouble finding substitute instructors for dance classes."
  ]);

  const legalBlueprint = generateDynamicOrganizationBlueprint("Bell Legal Group", [
    "We need to track client cases, court deadlines, filings, and legal documents."
  ]);

  expect(danceBlueprint.industryGenome).toBe("Dance & Cheer");
  expect(legalBlueprint.industryGenome).toBe("Legal");
  expect(legalBlueprint.departments.map((department) => department.name)).toContain("Case Intelligence");
  expect(legalBlueprint.departments.map((department) => department.name)).not.toContain("Instructor Intelligence");
  expect(danceBlueprint.executiveSummary).not.toBe(legalBlueprint.executiveSummary);
});

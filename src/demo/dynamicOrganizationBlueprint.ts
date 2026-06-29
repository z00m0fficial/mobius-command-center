import { runAtlasConversationVerticalSlice } from "./atlasConversationVerticalSlice";

export type IndustryGenome = "Dance & Cheer" | "Legal" | "Audio Production" | "General Organization";

export interface BlueprintDepartment {
  name: string;
  reason: string;
  priority: "primary" | "supporting";
}

export interface BlueprintItem {
  title: string;
  source: string;
  department: string;
}

export interface OrganizationBlueprint {
  id: string;
  organization: string;
  industryGenome: IndustryGenome;
  mission: string;
  departments: BlueprintDepartment[];
  challenges: BlueprintItem[];
  risks: BlueprintItem[];
  opportunities: BlueprintItem[];
  verifiedMemories: BlueprintItem[];
  recommendations: BlueprintItem[];
  projects: BlueprintItem[];
  organizationPulse: "Healthy" | "Learning" | "Needs Attention";
  learningVelocity: number;
  dnaSnapshot: {
    state: "Growing" | "Stable" | "Needs Input";
    activeBranches: string[];
    memoryNodes: number;
  };
  constructionFeed: string[];
  executiveSummary: string;
  generatedAt: string;
}

const GENOME_DEFAULTS: Record<IndustryGenome, { departments: BlueprintDepartment[]; mission: string }> = {
  "Dance & Cheer": {
    mission: "Create an organized, reliable, and memorable dance and cheer experience for students, families, instructors, and leadership.",
    departments: [
      { name: "Executive", reason: "Leadership needs a clear daily view of priorities, risks, and decisions.", priority: "primary" },
      { name: "Operations", reason: "Class scheduling, coverage, attendance, and studio execution require structured memory.", priority: "primary" },
      { name: "Communications", reason: "Parents, staff, and instructors need consistent updates and follow-up visibility.", priority: "primary" },
      { name: "Instructor Intelligence", reason: "Instructor reliability, availability, feedback, and recovery need a dedicated intelligence model.", priority: "primary" },
      { name: "Creative", reason: "Recitals, campaigns, video, graphics, and deliverables need a repeatable creative workflow.", priority: "supporting" }
    ]
  },
  Legal: {
    mission: "Preserve case knowledge, improve client service, protect deadlines, and strengthen legal operations through verified organizational memory.",
    departments: [
      { name: "Executive", reason: "Firm leadership needs visibility into operational health and strategic risk.", priority: "primary" },
      { name: "Case Intelligence", reason: "Matters, filings, deadlines, documents, and research require structured memory.", priority: "primary" },
      { name: "Client Communications", reason: "Client updates and follow-ups need reliable tracking.", priority: "primary" },
      { name: "Compliance", reason: "Legal work requires auditability, permissions, and procedural discipline.", priority: "primary" }
    ]
  },
  "Audio Production": {
    mission: "Preserve creative and technical production knowledge while improving project delivery, quality control, and client experience.",
    departments: [
      { name: "Executive", reason: "Leadership needs visibility into projects, revenue, and delivery status.", priority: "primary" },
      { name: "Creative", reason: "Recording, editing, mixing, mastering, and deliverables need structured workflow intelligence.", priority: "primary" },
      { name: "Client Communications", reason: "Client preferences, revisions, approvals, and delivery expectations need memory.", priority: "primary" },
      { name: "Operations", reason: "Scheduling, sessions, files, equipment, and delivery logistics need coordination.", priority: "supporting" }
    ]
  },
  "General Organization": {
    mission: "Help the organization remember, coordinate, and improve its most important work.",
    departments: [
      { name: "Executive", reason: "Leadership requires priorities, decisions, and risks.", priority: "primary" },
      { name: "Operations", reason: "Operational work needs reliable coordination.", priority: "primary" },
      { name: "Communications", reason: "People need consistent updates and follow-up visibility.", priority: "supporting" }
    ]
  }
};

function detectGenome(conversation: string): IndustryGenome {
  const text = conversation.toLowerCase();
  if (["dance", "cheer", "studio", "recital", "instructor", "parents"].some((term) => text.includes(term))) return "Dance & Cheer";
  if (["case", "court", "legal", "attorney", "client", "filing"].some((term) => text.includes(term))) return "Legal";
  if (["recording", "mix", "master", "audio", "studio session", "deliverable"].some((term) => text.includes(term))) return "Audio Production";
  return "General Organization";
}

function item(title: string, source: string, department: string): BlueprintItem {
  return { title, source, department };
}

function dedupeDepartments(departments: BlueprintDepartment[]): BlueprintDepartment[] {
  const seen = new Set<string>();
  return departments.filter((department) => {
    if (seen.has(department.name)) return false;
    seen.add(department.name);
    return true;
  });
}

export function generateDynamicOrganizationBlueprint(organization: string, conversationInputs: string[]): OrganizationBlueprint {
  const fullConversation = conversationInputs.join(" ");
  const industryGenome = detectGenome(fullConversation);
  const defaults = GENOME_DEFAULTS[industryGenome];
  const loopResults = conversationInputs.map((input) => runAtlasConversationVerticalSlice(input));

  const challenges: BlueprintItem[] = [];
  const risks: BlueprintItem[] = [];
  const opportunities: BlueprintItem[] = [];
  const recommendations: BlueprintItem[] = [];
  const projects: BlueprintItem[] = [];
  const verifiedMemories: BlueprintItem[] = [];

  for (const result of loopResults) {
    const department = result.classification.department;
    challenges.push(item(result.classification.category, result.input, department));
    risks.push(item(`${result.classification.risk.toUpperCase()} priority: ${result.classification.category}`, result.input, department));
    recommendations.push(item(result.recommendation, result.executiveSummary, department));
    verifiedMemories.push(...result.memoryRecords.map((record) => item(record.category, record.content, record.department)));

    if (department === "Creative") {
      projects.push(item("Creative Campaign Workflow", "Creative need discovered from conversation.", department));
      opportunities.push(item("Standardize creative approvals", "Repeated creative work can become a reusable workflow.", department));
    }

    if (department === "Communications") {
      projects.push(item("Weekly Communication Rhythm", "Communication need discovered from conversation.", department));
      opportunities.push(item("Create predictable parent/staff updates", "Consistent communication can reduce inbound confusion.", department));
    }

    if (department === "Operations") {
      projects.push(item("Coverage Review Workflow", "Operational coverage need discovered from conversation.", department));
      opportunities.push(item("Reduce missed classes through proactive coverage planning", "Operational risk can become a weekly workflow.", department));
    }
  }

  const discoveredDepartments = loopResults.map((result) => ({
    name: result.classification.department,
    reason: `${result.classification.category} was discovered from live conversation input.`,
    priority: "primary" as const
  }));

  const departments = dedupeDepartments([...discoveredDepartments, ...defaults.departments]);
  const activeBranches = departments.slice(0, 6).map((department) => department.name);
  const memoryNodes = verifiedMemories.length;
  const learningVelocity = Math.min(99, 70 + memoryNodes * 4 + departments.length);
  const organizationPulse = risks.some((risk) => risk.title.includes("HIGH")) ? "Learning" : "Healthy";

  return {
    id: `BLUEPRINT-${organization.toUpperCase().replace(/[^A-Z0-9]+/g, "-")}-${Date.now()}`,
    organization,
    industryGenome,
    mission: defaults.mission,
    departments,
    challenges,
    risks,
    opportunities,
    verifiedMemories,
    recommendations,
    projects,
    organizationPulse,
    learningVelocity,
    dnaSnapshot: {
      state: memoryNodes > 0 ? "Growing" : "Needs Input",
      activeBranches,
      memoryNodes
    },
    constructionFeed: [
      "Conversation inputs analyzed",
      `${industryGenome} genome selected`,
      "Departments generated",
      "Verified memories assembled",
      "Risks classified",
      "Recommendations generated",
      "Atlas DNA snapshot prepared",
      "Organization Blueprint complete"
    ],
    executiveSummary: `${organization} has been mapped as a ${industryGenome} organization with ${departments.length} active departments, ${challenges.length} discovered challenges, ${risks.length} risk signals, and ${recommendations.length} recommended next actions.`,
    generatedAt: new Date().toISOString()
  };
}

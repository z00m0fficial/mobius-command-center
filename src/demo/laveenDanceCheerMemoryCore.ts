export type MemoryCoreScope = "business" | "individual";

export interface LaveenMemoryEntry {
  id: string;
  scope: MemoryCoreScope;
  subjectId: string;
  subjectName: string;
  category: "need" | "preference" | "risk" | "follow_up" | "decision";
  content: string;
  tags: string[];
  createdAt: string;
}

export interface LaveenNeedRequest {
  scope: MemoryCoreScope;
  subjectId: string;
  subjectName: string;
  category: LaveenMemoryEntry["category"];
  content: string;
  tags: string[];
}

export class LaveenDanceCheerMemoryCore {
  private readonly entries: LaveenMemoryEntry[] = [];

  remember(input: LaveenNeedRequest): LaveenMemoryEntry {
    const entry: LaveenMemoryEntry = {
      id: `laveen-mem-${Date.now()}-${this.entries.length}`,
      createdAt: new Date().toISOString(),
      ...input
    };

    this.entries.push(entry);
    return entry;
  }

  search(input: { query: string; scope?: MemoryCoreScope; subjectId?: string }): LaveenMemoryEntry[] {
    const query = input.query.toLowerCase();

    return this.entries.filter((entry) => {
      const scopeMatch = !input.scope || entry.scope === input.scope;
      const subjectMatch = !input.subjectId || entry.subjectId === input.subjectId;
      const text = `${entry.subjectName} ${entry.category} ${entry.content} ${entry.tags.join(" ")}`.toLowerCase();
      return scopeMatch && subjectMatch && text.includes(query);
    });
  }

  list(): LaveenMemoryEntry[] {
    return [...this.entries];
  }
}

export function runLaveenRealtimeNeedsDemo() {
  const memory = new LaveenDanceCheerMemoryCore();

  const businessNeed = memory.remember({
    scope: "business",
    subjectId: "laveen-dance-cheer",
    subjectName: "Laveen Dance & Cheer",
    category: "need",
    content: "Needs weekly visibility into instructor coverage, substitute gaps, class risk, and parent follow-ups.",
    tags: ["business", "operations", "coverage", "dashboard"]
  });

  const individualNeed = memory.remember({
    scope: "individual",
    subjectId: "studio-director",
    subjectName: "Studio Director",
    category: "preference",
    content: "Prefers a quick executive summary with the top three risks and the next best action before each class week.",
    tags: ["individual", "director", "summary", "decision-support"]
  });

  const searchResults = memory.search({ query: "coverage", scope: "business" });

  return {
    organization: "Laveen Dance & Cheer",
    status: "completed" as const,
    memoryWrites: 2,
    memoryHits: searchResults.length,
    businessNeed,
    individualNeed,
    recommendation:
      "Use Mobius to capture weekly studio needs, individual leader preferences, and recurring instructor risks so the dashboard becomes smarter after every class week."
  };
}

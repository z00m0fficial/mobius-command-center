export const departments = [
  { name: "Atlas Core", role: "Intelligence", status: "online", health: 98 },
  { name: "Mobius Router", role: "Orchestration", status: "online", health: 96 },
  { name: "Sonic", role: "Audio Intelligence", status: "online", health: 94 },
  { name: "MCMS", role: "Change Management", status: "syncing", health: 89 },
  { name: "Forge", role: "Engineering", status: "planned", health: 72 },
  { name: "Pulse", role: "Analytics", status: "planned", health: 70 }
];

export const metrics = [
  { label: "OIES", value: "96.4", detail: "Verified work efficiency" },
  { label: "VCI", value: "97%", detail: "Voice confidence" },
  { label: "MIS", value: "94.8", detail: "Org intelligence score" },
  { label: "Latency", value: "142ms", detail: "Decision latency" }
];

export const repositoryHealth = [
  { repo: "atlas-core", status: "synchronized" },
  { repo: "mobius-router", status: "synchronized" },
  { repo: "mobius-voice", status: "synchronized" },
  { repo: "mobius-os", status: "update-required" },
  { repo: "mobius-docs", status: "synchronized" },
  { repo: "mobius-enterprise-starter-kit", status: "update-required" }
];

export const recentDecisions = [
  { time: "09:42", source: "Router", target: "Codex", summary: "Engineering request routed to implementation", confidence: "98%" },
  { time: "09:51", source: "Sonic", target: "Router", summary: "Voice meeting summary prepared", confidence: "96%" },
  { time: "10:04", source: "MCMS", target: "Canon", summary: "Repository sync plan generated", confidence: "94%" }
];

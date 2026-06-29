import { Activity, Brain, Building2, CalendarDays, ClipboardCheck, Clapperboard, MessageSquareText, Sparkles, Users } from "lucide-react";
import { AtlasDNA } from "./components/AtlasDNA";
import { runAtlasConversationVerticalSlice } from "./demo/atlasConversationVerticalSlice";
import { generateDynamicOrganizationBlueprint } from "./demo/dynamicOrganizationBlueprint";

const demoConversationInputs = [
  "We're having trouble finding substitute instructors for dance classes.",
  "Parents do not always know what is happening each week.",
  "Recital marketing videos take too long to organize."
];
const demoConversation = demoConversationInputs[0];
const verticalSlice = runAtlasConversationVerticalSlice(demoConversation);
const blueprint = generateDynamicOrganizationBlueprint("Laveen Dance & Cheer", demoConversationInputs);

const modules = [
  { icon: Activity, title: "Organization Pulse", value: blueprint.organizationPulse, detail: `${blueprint.industryGenome} genome active.` },
  { icon: Brain, title: "Learning Velocity", value: `${blueprint.learningVelocity}%`, detail: `${blueprint.verifiedMemories.length} verified memory nodes.` },
  { icon: Users, title: "Departments", value: String(blueprint.departments.length), detail: blueprint.departments.slice(0, 3).map((department) => department.name).join(" · ") },
  { icon: Clapperboard, title: "Projects", value: String(blueprint.projects.length), detail: "Generated from discovered needs." },
  { icon: MessageSquareText, title: "Risks", value: String(blueprint.risks.length), detail: "Classified from live conversation." },
  { icon: CalendarDays, title: "Recommendations", value: String(blueprint.recommendations.length), detail: "Next actions ready for review." }
];

export function App() {
  return (
    <main className="app-shell genesis-rc">
      <section className="genesis-hero panel cinematic-panel">
        <div className="hero-copy">
          <p className="eyebrow">MOBIUS GENESIS RC-1</p>
          <h1>{blueprint.organization} is becoming a living organization.</h1>
          <p className="subhead">
            Atlas Brain listens. Organizational Memory remembers. Atlas DNA evolves as the studio teaches Mobius what matters.
          </p>
          <div className="command-bar">
            <Sparkles size={18} /> Demo prompt: “{demoConversation}”
          </div>
          <div className="founding-badge">Founding Organization #001 · {blueprint.industryGenome} Genome · Loop {verticalSlice.loopId}</div>
        </div>
        <AtlasDNA organization={blueprint.organization} industryGenome={blueprint.industryGenome} learningVelocity={blueprint.learningVelocity} memoryNodes={48 + blueprint.dnaSnapshot.memoryNodes} activeDepartment={verticalSlice.classification.department} />
      </section>

      <section className="metric-grid dynamic-modules">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <article className="panel metric living-card" key={module.title}>
              <Icon size={22} />
              <span>{module.title}</span>
              <strong>{module.value}</strong>
              <p>{module.detail}</p>
            </article>
          );
        })}
      </section>

      <section className="grid two genesis-grid">
        <article className="panel live-feed-panel">
          <div className="section-title"><Sparkles size={18} /> Live Intelligence Feed</div>
          <div className="stack">
            {[...verticalSlice.liveIntelligenceFeed, ...blueprint.constructionFeed].map((event, index) => (
              <div className="decision pulse-row" key={`${event}-${index}`}>
                <span>✓</span>
                <div>
                  <strong>{event}</strong>
                  <p>{index === 0 ? verticalSlice.input : "Verified event from Atlas Conversation Engine / Blueprint Builder"}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel blueprint-panel">
          <div className="section-title"><Building2 size={18} /> Dynamic Organization Blueprint</div>
          <div className="stack blueprint-stack">
            <p><strong>Industry Genome:</strong> {blueprint.industryGenome}</p>
            <p><strong>Mission:</strong> {blueprint.mission}</p>
            <p><strong>Departments:</strong> {blueprint.departments.map((department) => department.name).join(" · ")}</p>
            <p><strong>Primary Risks:</strong> {blueprint.risks.map((risk) => risk.title).join(" · ")}</p>
            <p><strong>30-Day Recommendation:</strong> {blueprint.recommendations[0]?.title}</p>
          </div>
        </article>
      </section>

      <section className="grid three reflection-grid">
        <article className="panel signal"><ClipboardCheck /><strong>Atlas Reflection</strong><p>{blueprint.executiveSummary}</p></article>
        <article className="panel signal"><Brain /><strong>Founder Mode Telemetry</strong><p>{verticalSlice.telemetry.memoryWrites} memory writes · {verticalSlice.telemetry.dashboardEvents} dashboard events · {verticalSlice.telemetry.dnaEvents} DNA events.</p></article>
        <article className="panel signal"><Clapperboard /><strong>Recommended Projects</strong><p>{blueprint.projects.map((project) => project.title).join(" · ")}</p></article>
      </section>
    </main>
  );
}

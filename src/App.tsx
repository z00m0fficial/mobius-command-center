import { Activity, Brain, Building2, CalendarDays, ClipboardCheck, Clapperboard, MessageSquareText, Sparkles, Users } from "lucide-react";
import { AtlasDNA } from "./components/AtlasDNA";

const liveFeed = [
  ["Business Memory Updated", "Instructor coverage risk stored under Operations."],
  ["Individual Memory Created", "Kiva prefers quick executive summaries and clear next actions."],
  ["Creative Intelligence Activated", "Recital marketing workflow and tool stack prepared."],
  ["Dashboard Built", "Modules generated from Laveen's stated needs."],
  ["Atlas Reflection Ready", "Top 30-day priorities prepared for review."]
];

const modules = [
  { icon: Activity, title: "Organization Pulse", value: "98%", detail: "Healthy, learning, and ready for Genesis." },
  { icon: Brain, title: "Learning Velocity", value: "+12", detail: "Verified knowledge nodes created in demo mode." },
  { icon: Users, title: "Instructor Intelligence", value: "MIS", detail: "Reliability and recovery model active." },
  { icon: Clapperboard, title: "Creative Intelligence", value: "Ready", detail: "Recital campaign workflow prepared." },
  { icon: MessageSquareText, title: "Parent Communication", value: "Watch", detail: "Weekly digest recommendation queued." },
  { icon: CalendarDays, title: "Class Coverage", value: "Review", detail: "Substitute pool risk identified." }
];

export function App() {
  return (
    <main className="app-shell genesis-rc">
      <section className="genesis-hero panel cinematic-panel">
        <div className="hero-copy">
          <p className="eyebrow">MOBIUS GENESIS RC-1</p>
          <h1>Laveen Dance & Cheer is becoming a living organization.</h1>
          <p className="subhead">
            Atlas Brain listens. Organizational Memory remembers. Atlas DNA evolves as the studio teaches Mobius what matters.
          </p>
          <div className="command-bar">
            <Sparkles size={18} /> Ask Kiva: “Tell Mobius everything slowing the studio down.”
          </div>
          <div className="founding-badge">Founding Organization #001 · Dance & Cheer Genome</div>
        </div>
        <AtlasDNA organization="Laveen Dance & Cheer" industryGenome="Dance & Cheer" learningVelocity={94} memoryNodes={48} activeDepartment="Operations" />
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
            {liveFeed.map(([title, detail]) => (
              <div className="decision pulse-row" key={title}>
                <span>✓</span>
                <div>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel blueprint-panel">
          <div className="section-title"><Building2 size={18} /> Organization Blueprint</div>
          <div className="stack blueprint-stack">
            <p><strong>Industry Genome:</strong> Dance & Cheer</p>
            <p><strong>Departments Born:</strong> Executive, Operations, Creative, Communications, Instructor Intelligence</p>
            <p><strong>Primary Risks:</strong> instructor coverage, parent communication, recital marketing workflow</p>
            <p><strong>30-Day Recommendation:</strong> launch weekly instructor coverage review and parent update rhythm.</p>
          </div>
        </article>
      </section>

      <section className="grid three reflection-grid">
        <article className="panel signal"><ClipboardCheck /><strong>Atlas Reflection</strong><p>Today the organization taught Mobius five operational truths and three recommended improvements.</p></article>
        <article className="panel signal"><Brain /><strong>Atlas Daily Intelligence</strong><p>Tomorrow morning, Kiva receives the top three studio priorities before the day starts.</p></article>
        <article className="panel signal"><Clapperboard /><strong>Creative Intelligence</strong><p>Recital campaign intake, tool recommendations, QC workflow, and brand memory are ready.</p></article>
      </section>
    </main>
  );
}

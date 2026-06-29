import { Sparkles } from "lucide-react";
import { AtlasDNA } from "./components/AtlasDNA";

export function App() {
  return (
    <main className="app-shell genesis-shell">
      <section className="genesis-hero panel">
        <div className="hero-copy">
          <p className="eyebrow">MOBIUS GENESIS RC-1</p>
          <h1>Your organization is becoming a living intelligence system.</h1>
          <p className="subhead">Atlas Brain listens. Organizational Memory remembers. Atlas DNA evolves.</p>
          <div className="command-bar"><Sparkles size={18} /> Tell Mobius what is slowing the studio down...</div>
        </div>
        <AtlasDNA organization="Laveen Studio" industryGenome="Dance Studio" learningVelocity={94} memoryNodes={42} activeDepartment="Operations" />
      </section>

      <section className="metric-grid dynamic-modules">
        <article className="panel metric living-card"><span>Organization Pulse</span><strong>98%</strong><p>Healthy and learning.</p></article>
        <article className="panel metric living-card"><span>Learning Velocity</span><strong>+12</strong><p>New knowledge created.</p></article>
        <article className="panel metric living-card"><span>Instructor Coverage</span><strong>Review</strong><p>Operational need detected.</p></article>
        <article className="panel metric living-card"><span>Memory Growth</span><strong>42</strong><p>Business memory nodes.</p></article>
      </section>

      <section className="grid two genesis-grid">
        <article className="panel"><div className="section-title">Live Intelligence Feed</div><div className="stack"><div className="decision"><span>✓</span><strong>Business Memory Updated</strong><p>Instructor coverage need stored.</p></div><div className="decision"><span>✓</span><strong>Dashboard Updated</strong><p>Operations and Creative modules activated.</p></div><div className="decision"><span>✓</span><strong>Organization Learned</strong><p>Top priorities generated.</p></div></div></article>
        <article className="panel"><div className="section-title">Organization Blueprint</div><div className="stack"><p><strong>Industry Genome:</strong> Dance Studio</p><p><strong>Departments:</strong> Executive, Operations, Creative, Communications, Instructor Intelligence</p><p><strong>Recommendation:</strong> Launch a weekly instructor coverage review.</p></div></article>
      </section>
    </main>
  );
}

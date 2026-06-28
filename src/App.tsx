import { Activity, Brain, GitBranch, Mic, ShieldCheck, Sparkles } from "lucide-react";
import { departments, metrics, recentDecisions, repositoryHealth } from "./data";

const statusClass: Record<string, string> = {
  online: "good",
  synchronized: "good",
  syncing: "warn",
  "update-required": "warn",
  planned: "muted"
};

export function App() {
  return (
    <main className="app-shell">
      <section className="hero panel">
        <div>
          <p className="eyebrow">MOBIUS COMMAND CENTER</p>
          <h1>One Organization. Infinite Intelligence. Limitless Impact.</h1>
          <p className="subhead">Executive operating environment for live organizational intelligence.</p>
        </div>
        <div className="hero-status">
          <span>Organization Health</span>
          <strong>98%</strong>
          <div className="bar"><div style={{ width: "98%" }} /></div>
        </div>
      </section>

      <section className="metric-grid">
        {metrics.map((metric) => (
          <article className="panel metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid two">
        <article className="panel">
          <div className="section-title"><Brain size={18} /> Department Operations</div>
          <div className="stack">
            {departments.map((department) => (
              <div className="row" key={department.name}>
                <div>
                  <strong>{department.name}</strong>
                  <p>{department.role}</p>
                </div>
                <div className="row-status">
                  <span className={`pill ${statusClass[department.status]}`}>{department.status}</span>
                  <span>{department.health}%</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="section-title"><GitBranch size={18} /> Repository Health</div>
          <div className="stack">
            {repositoryHealth.map((repo) => (
              <div className="row" key={repo.repo}>
                <strong>{repo.repo}</strong>
                <span className={`pill ${statusClass[repo.status]}`}>{repo.status}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid three">
        <article className="panel signal"><Mic /><strong>Sonic</strong><p>Voice intelligence ready.</p></article>
        <article className="panel signal"><Activity /><strong>Router</strong><p>Routing decisions active.</p></article>
        <article className="panel signal"><ShieldCheck /><strong>MCMS</strong><p>Change governance online.</p></article>
      </section>

      <section className="panel">
        <div className="section-title"><Sparkles size={18} /> Recent Decisions</div>
        <div className="stack">
          {recentDecisions.map((decision) => (
            <div className="decision" key={`${decision.time}-${decision.summary}`}>
              <span>{decision.time}</span>
              <strong>{decision.source} → {decision.target}</strong>
              <p>{decision.summary}</p>
              <em>{decision.confidence}</em>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

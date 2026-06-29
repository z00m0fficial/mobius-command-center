import { Crown } from "lucide-react";
import type { FounderWorkspaceData } from "../types";
import { Panel } from "./Panel";

export function FounderWorkspace({ workspace }: { workspace: FounderWorkspaceData }) {
  return (
    <Panel title="Founder Workspace" eyebrow="Global Authority" icon={Crown}>
      <div className="founder-grid">
        <article className="founder-profile">
          <span>Founder</span>
          <strong>{workspace.founder}</strong>
          <p>{workspace.role}</p>
          <em>{workspace.authority}</em>
        </article>
        <div className="data-grid">
          <span>Current Initiative</span>
          <p>{workspace.currentInitiative}</p>
          <span>Pending Approvals</span>
          <p>{workspace.pendingApprovals}</p>
          <span>Repositories Changed Today</span>
          <p>{workspace.repositoriesChangedToday}</p>
          <span>Architecture Drift</span>
          <p>{workspace.architectureDrift}</p>
          <span>Canon Updates</span>
          <p>{workspace.canonUpdates}</p>
        </div>
      </div>
      <div className="founder-columns">
        <article>
          <span>Roadmap</span>
          {workspace.roadmap.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
        <article>
          <span>Platform Evolution Timeline</span>
          {workspace.platformEvolutionTimeline.map((event) => (
            <div className="mini-event" key={`${event.time}-${event.title}`}>
              <strong>
                {event.time} · {event.title}
              </strong>
              <p>{event.detail}</p>
            </div>
          ))}
        </article>
      </div>
    </Panel>
  );
}

import { Activity } from "lucide-react";
import type { OrganizationHealthData } from "../types";
import { MetricCard } from "./MetricCard";
import { Panel } from "./Panel";

export function OrganizationHealth({ health }: { health: OrganizationHealthData }) {
  return (
    <Panel title="Organization Health" eyebrow="Pulse" icon={Activity}>
      <div className="health-summary">
        <div>
          <span>Organization Health</span>
          <strong>{health.score}</strong>
          <p>{health.status}</p>
        </div>
        <div className="health-ring" aria-hidden="true">
          <span>{health.score}</span>
        </div>
      </div>
      <div className="metric-grid">
        {health.signals.map((metric) => (
          <MetricCard metric={metric} compact key={metric.label} />
        ))}
      </div>
      <div className="note-list">
        {health.operatingNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </Panel>
  );
}

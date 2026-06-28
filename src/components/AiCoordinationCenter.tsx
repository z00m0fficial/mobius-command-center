import { RadioTower } from "lucide-react";
import type { AiRoutingDecision } from "../types";
import { Panel } from "./Panel";

export function AiCoordinationCenter({ decisions }: { decisions: AiRoutingDecision[] }) {
  return (
    <Panel title="AI Coordination Center" eyebrow="Mobius Router" icon={RadioTower}>
      <div className="routing-list">
        {decisions.map((decision) => (
          <article className={`routing-card tone-${decision.status}`} key={decision.id}>
            <div className="card-topline">
              <strong>{decision.route}</strong>
              <span className={`status-pill tone-${decision.status}`}>{decision.status}</span>
            </div>
            <div className="data-grid compact-grid">
              <span>Provider Selected</span>
              <p>{decision.providerSelected}</p>
              <span>Confidence</span>
              <p>{Math.round(decision.confidence * 100)}%</p>
              <span>Required Repositories</span>
              <p>{decision.requiredRepositories.join(", ")}</p>
              <span>Route Reason</span>
              <p>{decision.reason}</p>
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}

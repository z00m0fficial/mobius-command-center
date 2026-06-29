import { Network } from "lucide-react";
import type { DigitalTwinData } from "../types";
import { Panel } from "./Panel";

export function DigitalTwin({ twin }: { twin: DigitalTwinData }) {
  return (
    <Panel title="Organizational Digital Twin" eyebrow="Nexus" icon={Network}>
      <div className="twin-grid">
        {twin.nodes.map((node) => (
          <article className={`twin-node tone-${node.tone}`} key={node.name}>
            <span>{node.name}</span>
            <strong>{node.health}%</strong>
            <p>{node.role}</p>
          </article>
        ))}
      </div>
      <div className="dependency-list">
        {twin.dependencies.map((dependency) => (
          <article key={`${dependency.from}-${dependency.to}`}>
            <strong>
              {dependency.from} → {dependency.to}
            </strong>
            <p>{dependency.relationship}</p>
            <span>{dependency.strength}</span>
          </article>
        ))}
      </div>
    </Panel>
  );
}

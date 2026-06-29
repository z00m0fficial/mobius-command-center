import { ShieldCheck } from "lucide-react";
import type { DecisionTransparencyRecord } from "../types";
import { Panel } from "./Panel";

export function DecisionTransparency({ decisions }: { decisions: DecisionTransparencyRecord[] }) {
  return (
    <Panel title="Decision Transparency" eyebrow="Sentinel" icon={ShieldCheck}>
      <div className="decision-grid">
        {decisions.map((decision) => (
          <article className="decision-card" key={decision.recommendation}>
            <div className="card-topline">
              <strong>{decision.recommendation}</strong>
              <span>{Math.round(decision.confidence * 100)}% confidence</span>
            </div>
            <div className="transparency-grid">
              <DecisionList title="Evidence" values={decision.evidence} />
              <DecisionList title="Memory References" values={decision.memoryReferences} />
              <DecisionList title="Architecture References" values={decision.architectureReferences} />
              <DecisionList title="Dependencies" values={decision.dependencies} />
              <DecisionList title="Alternative Options" values={decision.alternativeOptions} />
              <div>
                <span>Risk</span>
                <p>{decision.risk}</p>
              </div>
              <div>
                <span>Estimated Impact</span>
                <p>{decision.estimatedImpact}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}

function DecisionList({ title, values }: { title: string; values: string[] }) {
  return (
    <div>
      <span>{title}</span>
      <ul>
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

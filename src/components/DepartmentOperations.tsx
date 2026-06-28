import { Layers3 } from "lucide-react";
import type { DepartmentOperation } from "../types";
import { Panel } from "./Panel";

export function DepartmentOperations({ departments }: { departments: DepartmentOperation[] }) {
  return (
    <Panel title="Department Operations" eyebrow="Mobius Operating Departments" icon={Layers3}>
      <div className="department-grid">
        {departments.map((department) => (
          <article className={`department-card tone-${department.status}`} key={department.name}>
            <div className="card-topline">
              <strong>{department.name}</strong>
              <span className={`status-pill tone-${department.status}`}>{department.status}</span>
            </div>
            <div className="health-bar" aria-label={`${department.name} health ${department.health}%`}>
              <span style={{ width: `${department.health}%` }} />
            </div>
            <dl>
              <div>
                <dt>Active Work</dt>
                <dd>{department.activeWork}</dd>
              </div>
              <div>
                <dt>Next Recommendation</dt>
                <dd>{department.nextRecommendation}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Panel>
  );
}

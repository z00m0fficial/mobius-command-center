import { ArrowRight, Lightbulb } from "lucide-react";
import type { ExecutiveBriefData } from "../types";
import { MetricCard } from "./MetricCard";
import { Panel } from "./Panel";

export function ExecutiveBrief({ brief }: { brief: ExecutiveBriefData }) {
  return (
    <Panel title="Executive Brief" eyebrow="Atlas Core" icon={Lightbulb} className="executive-brief-panel">
      <div className="brief-layout">
        <div className="brief-copy">
          <p className="brief-greeting">{brief.greeting}</p>
          <p>{brief.summary}</p>
        </div>
        <div className="brief-metrics">
          {brief.metrics.map((metric) => (
            <MetricCard metric={metric} compact key={metric.label} />
          ))}
        </div>
      </div>
      <div className="brief-actions">
        <article>
          <span>Last Organizational Learning</span>
          <p>{brief.lastOrganizationalLearning}</p>
        </article>
        <article>
          <span>Next Recommended Action</span>
          <p>{brief.nextRecommendedAction}</p>
          <ArrowRight size={18} aria-hidden="true" />
        </article>
      </div>
    </Panel>
  );
}

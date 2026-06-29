import { Sparkles } from "lucide-react";
import type { PredictiveRecommendation } from "../types";
import { Panel } from "./Panel";

export function PredictiveIntelligence({ recommendations }: { recommendations: PredictiveRecommendation[] }) {
  return (
    <Panel title="Predictive Intelligence" eyebrow="Pulse + Atlas Core" icon={Sparkles}>
      <div className="prediction-grid">
        {recommendations.map((recommendation) => (
          <article className={`prediction-card tone-${recommendation.tone}`} key={recommendation.title}>
            <div className="card-topline">
              <strong>{recommendation.title}</strong>
              <span>{Math.round(recommendation.confidence * 100)}%</span>
            </div>
            <dl>
              <div>
                <dt>What Needs Attention</dt>
                <dd>{recommendation.whatNeedsAttention}</dd>
              </div>
              <div>
                <dt>What Changed</dt>
                <dd>{recommendation.whatChanged}</dd>
              </div>
              <div>
                <dt>What Mobius Recommends Next</dt>
                <dd>{recommendation.whatMobiusRecommendsNext}</dd>
              </div>
            </dl>
            <em>{recommendation.owner}</em>
          </article>
        ))}
      </div>
    </Panel>
  );
}

import type { MetricCardData } from "../types";

interface MetricCardProps {
  metric: MetricCardData;
  compact?: boolean;
}

export function MetricCard({ metric, compact = false }: MetricCardProps) {
  return (
    <article className={`metric-card tone-${metric.tone} ${compact ? "compact" : ""}`}>
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <p>{metric.detail}</p>
    </article>
  );
}

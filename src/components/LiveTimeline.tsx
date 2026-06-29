import { Clock3 } from "lucide-react";
import type { TimelineEvent } from "../types";
import { Panel } from "./Panel";

export function LiveTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <Panel title="Live Organizational Timeline" eyebrow="Organizational Memory" icon={Clock3}>
      <div className="timeline-list">
        {events.map((event) => (
          <article className={`timeline-event tone-${event.tone}`} key={`${event.time}-${event.title}`}>
            <div className="timeline-time">{event.time}</div>
            <div>
              <div className="timeline-meta">
                <span>{event.source}</span>
                <span>{Math.round(event.confidence * 100)}% confidence</span>
              </div>
              <strong>{event.title}</strong>
              <p>{event.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}

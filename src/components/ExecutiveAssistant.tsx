import { Bot, Send } from "lucide-react";
import type { ExecutiveAssistantData } from "../types";
import { Panel } from "./Panel";

export function ExecutiveAssistant({ assistant }: { assistant: ExecutiveAssistantData }) {
  return (
    <Panel title="Executive Assistant" eyebrow="Mobius Command Center" icon={Bot}>
      <div className="assistant-layout">
        <article>
          <span>Current Focus</span>
          <strong>{assistant.currentFocus}</strong>
          <p>{assistant.draftedBrief}</p>
        </article>
        <label className="assistant-prompt">
          <input placeholder="Ask Mobius about the current operating state" type="text" />
          <button type="button" aria-label="Send assistant prompt">
            <Send size={16} />
          </button>
        </label>
      </div>
      <div className="assistant-columns">
        <div>
          <span>Suggested Actions</span>
          {assistant.suggestedActions.map((action) => (
            <p key={action}>{action}</p>
          ))}
        </div>
        <div>
          <span>Waiting On</span>
          {assistant.waitingOn.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </Panel>
  );
}

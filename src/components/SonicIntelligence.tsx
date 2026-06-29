import { FileAudio, Mic2 } from "lucide-react";
import type { SonicIntelligenceData } from "../types";
import { Panel } from "./Panel";

export function SonicIntelligence({ sonic }: { sonic: SonicIntelligenceData }) {
  return (
    <Panel title="Sonic Intelligence Center" eyebrow="Sonic" icon={Mic2}>
      <div className="sonic-layout">
        <article className="sonic-vci">
          <span>Voice Confidence Index</span>
          <strong>{sonic.voiceConfidenceIndex}</strong>
          <p>{sonic.speakerVerificationStatus}</p>
        </article>
        <div className="data-grid sonic-details">
          <span>Listening Status</span>
          <p>{sonic.listeningStatus}</p>
          <span>Active Captures</span>
          <p>{sonic.activeCaptures}</p>
          <span>Current Speakers</span>
          <p>{sonic.currentSpeakers.join(", ")}</p>
          <span>Language</span>
          <p>{sonic.language}</p>
          <span>Dialect</span>
          <p>{sonic.dialect}</p>
        </div>
      </div>
      <article className="transcript-state">
        <FileAudio size={18} aria-hidden="true" />
        <div>
          <strong>Meeting Summary</strong>
          <p>{sonic.meetingSummary}</p>
        </div>
      </article>
      <div className="sonic-flags">
        <span>{sonic.rawTranscriptPreserved ? "Raw transcript preserved" : "Raw transcript pending"}</span>
        <span>{sonic.cleanTranscriptGenerated ? "Clean transcript generated" : "Clean transcript pending"}</span>
      </div>
      <div className="action-list">
        {sonic.actionItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </Panel>
  );
}

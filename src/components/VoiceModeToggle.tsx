import { MessageCircle, Mic2, VolumeX } from "lucide-react";
import type { VoiceMode, VoiceModePanelData } from "../types";
import { Panel } from "./Panel";

const voiceModes: Array<{ mode: VoiceMode; label: string }> = [
  { mode: "silent", label: "Silent" },
  { mode: "executive", label: "Executive" },
  { mode: "conversational", label: "Conversational" }
];

interface VoiceModeToggleProps {
  mode: VoiceMode;
  onModeChange: (mode: VoiceMode) => void;
  panels: VoiceModePanelData;
}

export function VoiceModeToggle({ mode, onModeChange, panels }: VoiceModeToggleProps) {
  return (
    <Panel title="Voice Mode Toggle" eyebrow="Sonic" icon={Mic2}>
      <div className="segmented-control" role="group" aria-label="Voice mode">
        {voiceModes.map((voiceMode) => (
          <button
            className={mode === voiceMode.mode ? "active" : ""}
            key={voiceMode.mode}
            onClick={() => onModeChange(voiceMode.mode)}
            type="button"
          >
            {voiceMode.label}
          </button>
        ))}
      </div>

      {mode === "silent" ? (
        <article className="voice-panel">
          <VolumeX size={20} aria-hidden="true" />
          <div>
            <strong>{panels.silent.title}</strong>
            <p>{panels.silent.body}</p>
          </div>
        </article>
      ) : null}

      {mode === "executive" ? (
        <article className="voice-panel">
          <Mic2 size={20} aria-hidden="true" />
          <div>
            <strong>{panels.executive.title}</strong>
            <ul>
              {panels.executive.brief.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ) : null}

      {mode === "conversational" ? (
        <article className="voice-panel">
          <MessageCircle size={20} aria-hidden="true" />
          <div>
            <strong>{panels.conversational.title}</strong>
            <div className="prompt-stack">
              {panels.conversational.prompts.map((prompt) => (
                <button type="button" key={prompt}>
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </article>
      ) : null}
    </Panel>
  );
}

import { useState } from "react";
import { AiCoordinationCenter } from "./components/AiCoordinationCenter";
import { ApprovalCenter } from "./components/ApprovalCenter";
import { DecisionTransparency } from "./components/DecisionTransparency";
import { DepartmentOperations } from "./components/DepartmentOperations";
import { DigitalTwin } from "./components/DigitalTwin";
import { ExecutiveAssistant } from "./components/ExecutiveAssistant";
import { ExecutiveBrief } from "./components/ExecutiveBrief";
import { FounderWorkspace } from "./components/FounderWorkspace";
import { Header } from "./components/Header";
import { LiveTimeline } from "./components/LiveTimeline";
import { MemorySearch } from "./components/MemorySearch";
import { OrganizationHealth } from "./components/OrganizationHealth";
import { PredictiveIntelligence } from "./components/PredictiveIntelligence";
import { RepositoryHealth } from "./components/RepositoryHealth";
import { SonicIntelligence } from "./components/SonicIntelligence";
import { VoiceModeToggle } from "./components/VoiceModeToggle";
import {
  aiRoutingDecisions,
  approvalItems,
  decisionTransparency,
  departments,
  digitalTwin,
  executiveAssistant,
  executiveBrief,
  founderWorkspace,
  liveTimeline,
  memoryRecords,
  organizationHealth,
  predictiveRecommendations,
  repositoryHealth,
  sonicIntelligence,
  voiceModePanels
} from "./data";
import type { VoiceMode } from "./types";

export function App() {
  const [voiceMode, setVoiceMode] = useState<VoiceMode>("executive");

  return (
    <main className="command-center-shell">
      <Header currentInitiative={founderWorkspace.currentInitiative} />
      <ExecutiveBrief brief={executiveBrief} />

      <section className="layout-grid two-column">
        <VoiceModeToggle mode={voiceMode} onModeChange={setVoiceMode} panels={voiceModePanels} />
        <OrganizationHealth health={organizationHealth} />
      </section>

      <section className="layout-grid timeline-grid">
        <LiveTimeline events={liveTimeline} />
        <DigitalTwin twin={digitalTwin} />
      </section>

      <DepartmentOperations departments={departments} />

      <section className="layout-grid two-column">
        <AiCoordinationCenter decisions={aiRoutingDecisions} />
        <ApprovalCenter approvals={approvalItems} />
      </section>

      <section className="layout-grid two-column">
        <SonicIntelligence sonic={sonicIntelligence} />
        <MemorySearch records={memoryRecords} />
      </section>

      <PredictiveIntelligence recommendations={predictiveRecommendations} />
      <ExecutiveAssistant assistant={executiveAssistant} />
      <RepositoryHealth repositories={repositoryHealth} />
      <DecisionTransparency decisions={decisionTransparency} />
      <FounderWorkspace workspace={founderWorkspace} />
    </main>
  );
}

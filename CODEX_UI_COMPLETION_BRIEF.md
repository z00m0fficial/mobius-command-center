# Codex UI Completion Brief: Mobius Command Center v5

## Mission

Complete the Mobius Command Center as a working executive operating UI for the Mobius Organizational Intelligence Platform.

The Command Center must feel like mission control for an intelligent organization, not a generic SaaS dashboard.

## Required First-Entry Experience

Before the main dashboard appears, show a Mobius Canon intro screen.

Required elements:

- Animated Mobius logo mark.
- Title: MOBIUS CANON.
- Subtitle: Founding Letter.
- Scrollable letter panel.
- Checkbox acknowledgement.
- Enter Mobius button disabled until acknowledgement is checked.
- Store acknowledgement locally for now.
- Provide a development reset option.

The intro is required for first entry into the system.

## Founding Letter Content

Use the Founding Letter provided in the product conversation as the source text. Preserve its tone, spacing, and meaning.

Core message: Mobius exists because organizations forget. Mobius gives organizations living memory. Builders must protect trust, document before implementing, and leave the platform wiser than they inherited it.

## Animated Logo Requirement

Create the animated logo in code using CSS or inline SVG.

Visual direction:

- Dark executive background.
- Purple and gold glow.
- Orbital motion.
- Infinity-inspired mark.
- Subtle pulse.
- Premium command-center feel.

No video files. No external paid assets.

## Brand System

Use the Mobius identity:

- Motto: One Organization. Infinite Intelligence. Limitless Impact.
- Tone: executive, futuristic, precise, operational.
- Visual direction: dark enterprise command center, purple/gold accents, high contrast, clean typography.
- Avoid playful consumer app styling.

## Required UI Sections

Complete the UI with these production-ready sections:

1. Executive Overview
   - Organization Health
   - Active Thinking Mode
   - OIES
   - VCI
   - MIS
   - Decision Latency
   - Memory Reuse Rate

2. Department Operations
   - Atlas Core
   - Mobius Router
   - Sonic
   - MCMS
   - Forge
   - Pulse
   - Sentinel
   - Nexus
   - Each department must show status, health, active work, and next recommendation.

3. AI Coordination Center
   - Active routing decisions
   - Provider selected
   - Confidence
   - Required repositories
   - Status

4. Repository Health and MCMS Sync
   - Repository name
   - Sync status
   - Canon version
   - Architecture version
   - Last sync
   - Next action

5. Organizational Memory Timeline
   - Memory events
   - Decisions
   - Voice captures
   - Repository updates
   - PCP records

6. Sonic Voice Intelligence
   - Voice Confidence Index
   - Active captures
   - Speaker verification status
   - Language / dialect support
   - Meeting intelligence output

7. Platform Change Proposal Center
   - PCP number
   - Title
   - Status
   - Repositories impacted
   - Verification state

8. Predictive Recommendations
   - What needs attention
   - What changed
   - What Mobius recommends next

9. Founder Workspace
   - Founder: Michael Bell
   - Role: Chief Architect
   - Current initiative
   - Pending approvals
   - Repositories changed today
   - Architecture drift
   - Canon updates

10. Executive Voice Response Feature
   - Voice mode toggle: Silent, Executive, Conversational.
   - Silent shows text only.
   - Executive shows concise brief text.
   - Conversational shows Ask Mobius text prompt.
   - Do not implement real speech synthesis yet unless simple browser speech synthesis is cleanly isolated and optional.

## Engineering Requirements

- React.
- TypeScript.
- Vite.
- Strict typing.
- Componentized architecture.
- Mock data isolated in src/data.ts.
- Shared types in src/types.ts.
- No backend dependency yet.
- No secrets.
- No auth yet.
- npm run build must pass.

## Recommended Components

- src/components/CanonIntro.tsx
- src/components/AnimatedMobiusLogo.tsx
- src/components/MetricCard.tsx
- src/components/Panel.tsx
- src/components/Header.tsx
- src/components/ExecutiveBrief.tsx
- src/components/VoiceModeToggle.tsx
- src/components/OrganizationHealth.tsx
- src/components/LiveTimeline.tsx
- src/components/DigitalTwin.tsx
- src/components/DepartmentOperations.tsx
- src/components/AiCoordinationCenter.tsx
- src/components/ApprovalCenter.tsx
- src/components/SonicIntelligence.tsx
- src/components/MemorySearch.tsx
- src/components/PredictiveIntelligence.tsx
- src/components/ExecutiveAssistant.tsx
- src/components/RepositoryHealth.tsx
- src/components/DecisionTransparency.tsx
- src/components/FounderWorkspace.tsx

## Acceptance Criteria

1. npm install succeeds.
2. npm run build succeeds.
3. First-entry Canon intro appears before dashboard.
4. User must acknowledge the Founding Letter before entering.
5. Animated logo is visible on intro screen.
6. All Version 5 sections are visible.
7. The design reads as Mobius Command Center, not a generic analytics dashboard.
8. Mock data is typed and separated.
9. No Mobius terminology is renamed.
10. Code is clean enough for future live data integration.

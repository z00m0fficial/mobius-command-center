# Codex UI Completion Brief: Mobius Command Center v1.0

## Mission

Complete the Mobius Command Center as a working executive operating UI for the Mobius Organizational Intelligence Platform.

The Command Center must feel like mission control for an intelligent organization, not a generic SaaS dashboard.

## Brand System

Use the Mobius identity:

- Motto: One Organization. Infinite Intelligence. Limitless Impact.
- Tone: executive, futuristic, precise, operational.
- Visual direction: dark enterprise command center, purple/gold accents, high contrast, clean typography.
- Avoid playful consumer app styling.

## Current Foundation

The repo already contains a React + Vite foundation:

- `src/App.tsx`
- `src/data.ts`
- `src/styles.css`
- `package.json`
- `vite.config.ts`
- `architecture.yaml`
- `mobius.yaml`

Build from this foundation. Do not replace Mobius terminology with generic dashboard language.

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

## Data Model

For now, use clean typed mock data in `src/data.ts`. Structure it so it can later be replaced by live APIs.

Recommended files:

- `src/types.ts`
- `src/data.ts`
- `src/components/MetricCard.tsx`
- `src/components/Panel.tsx`
- `src/components/DepartmentCard.tsx`
- `src/components/RepositoryTable.tsx`
- `src/components/Timeline.tsx`
- `src/components/DecisionFeed.tsx`
- `src/components/SonicPanel.tsx`
- `src/components/PcpCenter.tsx`
- `src/components/Recommendations.tsx`

## UX Requirements

- Responsive layout
- Strong information hierarchy
- Clear status colors
- No horizontal overflow on laptop screens
- Executive-readable labels
- Each panel should answer a specific operational question
- Empty states should be professional and useful

## Engineering Requirements

- Keep React strict mode working
- Keep TypeScript strict
- `npm run build` must pass
- Do not introduce backend requirements yet
- Do not add authentication yet
- Do not hard-code secrets
- Keep mock data separated from components
- Preserve all Mobius terminology

## Acceptance Criteria

The UI is complete when:

1. `npm install` succeeds.
2. `npm run build` succeeds.
3. The app renders without runtime errors.
4. All required UI sections are visible.
5. The design reads as Mobius Command Center, not a generic analytics dashboard.
6. The UI clearly shows Atlas, Router, Sonic, MCMS, repositories, metrics, and recommendations.
7. The code is clean enough for future live data integration.

## Do Not Do

- Do not remove Mobius brand language.
- Do not rename Sonic to generic audio service.
- Do not rename MCMS to generic change management.
- Do not flatten Atlas / Router / Sonic boundaries.
- Do not add paid UI libraries.
- Do not add backend dependencies.

## Final Output Expected

Open a pull request or commit completing the working UI foundation with componentized React code, typed mock data, responsive styling, and successful build.

import { applyEventToLoop, createDashboardRefreshEvent, createInitialLoopState } from "./intelligence-loop.js";

const events = [
  "RequestReceived",
  "IntentClassified",
  "RouteSelected",
  "ProviderExecuted",
  "PulseMetricRecorded",
  "MemoryEventCreated",
  "McmsAuditRecorded"
];

let state = createInitialLoopState({
  correlationId: "corr-demo",
  organizationId: "mobius-technologies"
});

for (const eventName of events) {
  state = applyEventToLoop(state, eventName);
}

const refresh = createDashboardRefreshEvent(state);

console.log(JSON.stringify({ state, refresh }, null, 2));

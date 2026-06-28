# EWP-000009: Command Center Live View

## Mission

Show the Enterprise Alpha Intelligence Loop status in Command Center.

## Loop Steps

- RequestReceived
- IntentClassified
- RouteSelected
- ProviderExecuted
- PulseMetricRecorded
- MemoryEventCreated
- McmsAuditRecorded
- DashboardRefreshRequested

## Output

DashboardRefreshRequested

## Acceptance

- Command Center can create an initial loop state.
- Command Center can mark steps complete from events.
- Command Center can report overall loop status.
- Command Center can request dashboard refresh.

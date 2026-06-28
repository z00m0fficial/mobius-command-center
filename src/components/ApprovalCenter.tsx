import { Check, GitPullRequestArrow, TriangleAlert, X } from "lucide-react";
import type { ApprovalItem } from "../types";
import { Panel } from "./Panel";

export function ApprovalCenter({ approvals }: { approvals: ApprovalItem[] }) {
  return (
    <Panel title="Executive Approval Center" eyebrow="MCMS" icon={GitPullRequestArrow}>
      <div className="approval-list">
        {approvals.map((approval) => (
          <article className={`approval-card tone-${approval.status}`} key={approval.id}>
            <div className="card-topline">
              <div>
                <span>{approval.id}</span>
                <strong>{approval.title}</strong>
              </div>
              <span className={`status-pill tone-${approval.status}`}>{approval.status}</span>
            </div>
            <div className="data-grid">
              <span>Architecture Impact</span>
              <p>{approval.architectureImpact}</p>
              <span>Repository Impact</span>
              <p>{approval.repositoryImpact}</p>
              <span>Memory Impact</span>
              <p>{approval.memoryImpact}</p>
              <span>Risk Analysis</span>
              <p>{approval.riskAnalysis}</p>
              <span>Confidence</span>
              <p>{Math.round(approval.confidence * 100)}%</p>
              <span>Tests Passed</span>
              <p>{approval.testsPassed}</p>
              <span>Governance Verified</span>
              <p>{approval.governanceVerified ? "Verified" : "Pending verification"}</p>
            </div>
            <div className="approval-actions">
              <button type="button">
                <Check size={16} />
                Approve
              </button>
              <button type="button">
                <TriangleAlert size={16} />
                Request Changes
              </button>
              <button type="button">
                <X size={16} />
                Reject
              </button>
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}

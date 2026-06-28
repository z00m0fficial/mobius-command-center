import { GitBranch } from "lucide-react";
import type { RepositoryHealthRecord } from "../types";
import { Panel } from "./Panel";

export function RepositoryHealth({ repositories }: { repositories: RepositoryHealthRecord[] }) {
  return (
    <Panel title="Repository Health" eyebrow="MCMS Sync" icon={GitBranch}>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Repository</th>
              <th>Health</th>
              <th>Branch</th>
              <th>Latest Commit</th>
              <th>Architecture Version</th>
              <th>Canon Version</th>
              <th>Documentation Status</th>
              <th>Verification Status</th>
              <th>Pending PRs</th>
              <th>Memory Sync</th>
              <th>Governance Status</th>
            </tr>
          </thead>
          <tbody>
            {repositories.map((repository) => (
              <tr key={repository.repository}>
                <td>
                  <strong>{repository.repository}</strong>
                </td>
                <td>{repository.health}</td>
                <td>{repository.branch}</td>
                <td>{repository.latestCommit}</td>
                <td>{repository.architectureVersion}</td>
                <td>{repository.canonVersion}</td>
                <td>{repository.documentationStatus}</td>
                <td>
                  <span className={`status-pill tone-${repository.tone}`}>{repository.verificationStatus}</span>
                </td>
                <td>{repository.pendingPrs}</td>
                <td>{repository.memorySync}</td>
                <td>{repository.governanceStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

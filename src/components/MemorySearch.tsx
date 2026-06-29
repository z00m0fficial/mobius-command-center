import { useState } from "react";
import { Search } from "lucide-react";
import type { MemoryRecord } from "../types";
import { Panel } from "./Panel";

export function MemorySearch({ records }: { records: MemoryRecord[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredRecords = normalizedQuery
    ? records.filter((record) =>
        [record.id, record.type, record.title, record.summary, record.source]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      )
    : records;

  return (
    <Panel title="Organization Memory Search" eyebrow="Organizational Memory" icon={Search}>
      <label className="memory-search-box">
        <Search size={18} aria-hidden="true" />
        <input
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Organizational Memory"
          type="search"
          value={query}
        />
      </label>
      <div className="memory-results">
        {filteredRecords.map((record) => (
          <article key={record.id}>
            <div className="card-topline">
              <div>
                <span>{record.id}</span>
                <strong>{record.title}</strong>
              </div>
              <span>{record.type}</span>
            </div>
            <p>{record.summary}</p>
            <em>
              {record.source} · {Math.round(record.confidence * 100)}% confidence
            </em>
          </article>
        ))}
      </div>
    </Panel>
  );
}

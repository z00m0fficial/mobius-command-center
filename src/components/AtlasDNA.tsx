export interface AtlasDNAProps {
  organization: string;
  industryGenome: string;
  learningVelocity: number;
  memoryNodes: number;
  activeDepartment: string;
}

const strandNodes = Array.from({ length: 18 }, (_, index) => index);

export function AtlasDNA(props: AtlasDNAProps) {
  return (
    <section className="atlas-dna-panel panel" aria-label="Atlas DNA visualization">
      <div className="dna-aura" />
      <div className="dna-header">
        <p className="eyebrow">ATLAS DNA</p>
        <h2>{props.organization}</h2>
        <span>{props.industryGenome} Genome Active</span>
      </div>

      <div className="dna-stage">
        <div className="dna-helix" aria-hidden="true">
          {strandNodes.map((node) => (
            <span className={`dna-node node-${node}`} key={node} />
          ))}
        </div>
        <div className="dna-core-copy">
          <strong>{props.learningVelocity}%</strong>
          <span>Learning Velocity</span>
        </div>
      </div>

      <div className="dna-stats">
        <div>
          <strong>{props.memoryNodes}</strong>
          <span>Memory Nodes</span>
        </div>
        <div>
          <strong>{props.activeDepartment}</strong>
          <span>Active Branch</span>
        </div>
        <div>
          <strong>Growing</strong>
          <span>DNA State</span>
        </div>
      </div>
    </section>
  );
}

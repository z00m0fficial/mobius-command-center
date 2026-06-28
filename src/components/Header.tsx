import { BrainCircuit, RadioTower } from "lucide-react";

interface HeaderProps {
  currentInitiative: string;
}

export function Header({ currentInitiative }: HeaderProps) {
  return (
    <header className="command-header">
      <div className="brand-system">
        <div className="brand-mark" aria-hidden="true">
          <BrainCircuit size={24} />
        </div>
        <div>
          <p className="eyebrow">Mobius Command Center</p>
          <h1>Executive Operating System</h1>
          <p className="motto">One Organization. Infinite Intelligence. Limitless Impact.</p>
        </div>
      </div>
      <div className="header-status">
        <RadioTower size={18} />
        <div>
          <span>Founder Workspace</span>
          <strong>{currentInitiative}</strong>
        </div>
      </div>
    </header>
  );
}

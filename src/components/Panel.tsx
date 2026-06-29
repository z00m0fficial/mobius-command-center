import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface PanelProps {
  title: string;
  eyebrow?: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function Panel({ title, eyebrow, icon: Icon, children, className = "", action }: PanelProps) {
  return (
    <section className={`panel ${className}`}>
      <header className="panel-header">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        <div className="panel-header-actions">
          {action}
          {Icon ? (
            <span className="panel-icon" aria-hidden="true">
              <Icon size={18} />
            </span>
          ) : null}
        </div>
      </header>
      <div className="panel-body">{children}</div>
    </section>
  );
}

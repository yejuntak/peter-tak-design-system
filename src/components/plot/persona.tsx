import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { InitialsAvatar } from "./atoms.js";
export interface PersonaCardProps {
  name: string;
  role: string;
  initials: string;
  job: string;
  goals: string[];
  frustrations: string[];
  defaultOpen?: boolean;
}
export function PersonaCard({
  name,
  role,
  initials,
  job,
  goals,
  frustrations,
  defaultOpen = false,
}: PersonaCardProps) {
  const [open, setOpen] = useState(defaultOpen),
    id = useId();
  return (
    <article className="o-persona-card" data-expanded={open}>
      <div className="o-persona-card-summary">
        <div className="o-persona-card-head">
          <InitialsAvatar
            className={`m-avatar--lg ${defaultOpen ? "m-avatar--accent" : "m-avatar--ink"}`}
            aria-hidden="true"
          >
            {initials}
          </InitialsAvatar>
          <div>
            <h3 className="o-persona-card-name">{name}</h3>
            <span className="o-persona-card-role">{role}</span>
          </div>
        </div>
        <p className="o-persona-card-jtbd">{job}</p>
        <button
          type="button"
          className="o-persona-card-toggle"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
        >
          <span className="o-persona-card-link">
            {open ? "Hide" : "See"} goals &amp; frustrations
          </span>
          <ChevronDown className="o-persona-card-chevron" size={12} />
        </button>
      </div>
      <div
        className="o-persona-card-details"
        id={id}
        role="region"
        aria-label={`Goals and frustrations for ${name}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="o-persona-card-details-inner">
          {[
            ["Goals", goals],
            ["Frustrations", frustrations],
          ].map(([heading, items]) => (
            <div className="o-persona-card-section" key={heading as string}>
              <strong>{heading}</strong>
              <ul>
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

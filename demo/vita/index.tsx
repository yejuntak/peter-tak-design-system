import { CarePlanFrame } from "./shared";
export const pageTitle = "Vita UI — Example journey & interface";
export default function IndexScreen() {
  return (
    <>
      {" "}
      <header className="v-topnav">
        {" "}
        <a className="v-topnav-brand" href="index.html">
          {" "}
          <span className="v-topnav-brand-mark">{"V"}</span>{" "}
          <span>{"Vita UI"}</span>{" "}
        </a>{" "}
        <nav className="v-topnav-links" aria-label="Case-study navigation">
          {" "}
          <a href="index.html" aria-current="page">
            {"Overview"}
          </a>{" "}
          <a href="dashboard.html">{"Dashboard"}</a>{" "}
          <a href="labs.html">{"Measures"}</a>{" "}
          <a href="care-plan.html">{"sample plan"}</a>{" "}
          <a href="progress-framing.html">{"Progress"}</a>{" "}
          <a href="recommendation.html">{"examples"}</a>{" "}
          <a href="messages.html">{"Messages"}</a>{" "}
          <a href="journey.html">{"Journey"}</a>{" "}
        </nav>{" "}
        <div className="v-topnav-end">
          {" "}
          <a
            className="v-btn-mini v-btn-mini--primary"
            href="dashboard.html"
            style={{ padding: "8px 14px" }}
          >
            {"Try prototype →"}
          </a>{" "}
        </div>{" "}
      </header>{" "}
      <main className="v-main">
        {" "}
        <div className="v-content">
          {" "}
          <span className="v-screen-eyebrow">
            {"Component reference · Fictional interface interface"}
          </span>{" "}
          <h1 className="v-screen-title">
            {"Vita UI."}
            <br />
            {"Example journey for interface."}
          </h1>{" "}
          <p className="v-screen-lede">
            {
              "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
            }
          </p>{" "}
          <figure className="v-hero-svg">
            {" "}
            <img
              src="assets/hero-health-snapshot.svg"
              alt="This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
            />{" "}
            <figcaption
              style={{
                padding: "var(--s-3) var(--s-4)",
                fontSize: "var(--t-micro)",
                color: "var(--muted)",
                borderTop: "1px solid var(--hairline)",
              }}
            >
              {
                "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
              }
            </figcaption>{" "}
          </figure>{" "}
          <section className="v-screen-section">
            {" "}
            <h2 className="v-screen-section-title">
              {"The composition pattern"}
            </h2>{" "}
            <p
              style={{
                fontSize: "var(--t-body-l)",
                lineHeight: "var(--lh-relaxed)",
                color: "var(--ink-soft)",
                maxWidth: "64ch",
              }}
            >
              {"These examples explore two interface transitions: "}
              <strong>{"data → understanding"}</strong>
              {", and "}
              <strong>{"understanding → action"}</strong>
              {
                "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
              }
            </p>{" "}
          </section>{" "}
          <section className="v-screen-section">
            {" "}
            <h2 className="v-screen-section-title">
              {"Screens in the prototype"}
            </h2>{" "}
            <p
              style={{
                color: "var(--ink-soft)",
                maxWidth: "64ch",
                marginBottom: "var(--s-4)",
              }}
            >
              {
                "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
              }
            </p>{" "}
            <div className="v-quick-actions">
              {" "}
              <a className="v-quick-tile" href="dashboard.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"Dashboard"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
              <a className="v-quick-tile" href="onboarding.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v8M4.93 10.93l5.66 5.66M2 18h8M21.07 10.93l-5.66 5.66M22 18h-8M12 22v-4"></path>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"First session"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
              <a className="v-quick-tile" href="labs.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3h18v18H3z"></path>
                    <path d="M3 9h18M9 21V9"></path>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"Full sample values"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
              <a className="v-quick-tile" href="lab-interpretation.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"Sample detail"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
              <a className="v-quick-tile" href="care-plan.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"sample plan"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
              <a className="v-quick-tile" href="progress-framing.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"Progress"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
              <a className="v-quick-tile" href="recommendation.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"ML examples"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
              <a className="v-quick-tile" href="messages.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"Advisor thread"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
              <a className="v-quick-tile" href="journey.html">
                {" "}
                <span className="v-quick-tile-icon">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>{" "}
                </span>{" "}
                <h3 className="v-quick-tile-title">{"Example journey map"}</h3>{" "}
                <p className="v-quick-tile-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <span className="v-quick-tile-arrow">{"Open →"}</span>{" "}
              </a>{" "}
            </div>{" "}
          </section>{" "}
          <section className="v-screen-section">
            {" "}
            <h2 className="v-screen-section-title">
              {"Reusable React patterns in this reference"}
            </h2>{" "}
            <p
              style={{
                color: "var(--ink-soft)",
                maxWidth: "64ch",
                marginBottom: "var(--s-4)",
              }}
            >
              {
                "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
              }
            </p>{" "}
            <div className="v-tile-grid">
              {" "}
              <a
                href="https://github.com/yejuntak/peter-tak-design-system/blob/main/components/molecules/lab-result.md"
                style={{
                  padding: "var(--s-4)",
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--r-2)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <code className="v-tile-code">{".m-lab-result"}</code>{" "}
                <span className="v-tile-desc">
                  {"sample value with range + trend + explanation"}
                </span>{" "}
              </a>{" "}
              <span className="v-tile">
                {" "}
                <code className="v-tile-code">{".m-range-indicator"}</code>{" "}
                <span className="v-tile-desc">
                  {"Visual position on a value spectrum"}
                </span>{" "}
              </span>{" "}
              <span className="v-tile">
                {" "}
                <code className="v-tile-code">{".m-trend-arrow"}</code>{" "}
                <span className="v-tile-desc">
                  {"Direction vs. previous reading"}
                </span>{" "}
              </span>{" "}
              <a
                href="https://github.com/yejuntak/peter-tak-design-system/blob/main/components/molecules/progress-bar.md"
                style={{
                  padding: "var(--s-4)",
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--r-2)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <code className="v-tile-code">{".m-progress-bar"}</code>{" "}
                <span className="v-tile-desc">
                  {"Progress framing, never compliance"}
                </span>{" "}
              </a>{" "}
              <a
                href="https://github.com/yejuntak/peter-tak-design-system/blob/main/components/molecules/confidence-tier.md"
                style={{
                  padding: "var(--s-4)",
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--r-2)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <code className="v-tile-code">{".m-confidence-tier"}</code>{" "}
                <span className="v-tile-desc">
                  {"3 example phrases · quantitative context when needed"}
                </span>{" "}
              </a>{" "}
              <a
                href="https://github.com/yejuntak/peter-tak-design-system/blob/main/components/molecules/action-trio.md"
                style={{
                  padding: "var(--s-4)",
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--r-2)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <code className="v-tile-code">{".m-action-trio"}</code>{" "}
                <span className="v-tile-desc">
                  {"Accept · Adjust · Set aside (right-aligned)"}
                </span>{" "}
              </a>{" "}
              <a
                href="https://github.com/yejuntak/peter-tak-design-system/blob/main/components/organisms/recommendation-card.md"
                style={{
                  padding: "var(--s-4)",
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--r-2)",
                  textDecoration: "none",
                }}
              >
                {" "}
                <code className="v-tile-code">
                  {".o-recommendation-card"}
                </code>{" "}
                <span className="v-tile-desc">
                  {"Tier + trigger + rationale + action-trio"}
                </span>{" "}
              </a>{" "}
              <span className="v-tile">
                {" "}
                <code className="v-tile-code">{".o-care-plan"}</code>{" "}
                <span className="v-tile-desc">
                  {"Direction → user-authored plan"}
                </span>{" "}
              </span>{" "}
              <span className="v-tile">
                {" "}
                <code className="v-tile-code">{"Sample reference"}</code>{" "}
                <span className="v-tile-desc">
                  {"Curated multi-result grid"}
                </span>{" "}
              </span>{" "}
            </div>{" "}
          </section>{" "}
          <section className="v-screen-section">
            {" "}
            <CarePlanFrame
              className="o-care-plan"
              style={{
                background: "var(--bg-tinted)",
                borderColor: "var(--hairline-faint)",
              }}
              as="article"
            >
              {" "}
              <header className="o-care-plan-head">
                {" "}
                <span className="o-care-plan-direction">
                  {"Sample reference"}
                </span>{" "}
                <h2
                  className="o-care-plan-goal"
                  style={{ fontSize: "var(--t-title-m)" }}
                >
                  {"Visual prototype · no domain guidance."}
                </h2>{" "}
                <p className="o-care-plan-goal-source">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </header>{" "}
            </CarePlanFrame>{" "}
          </section>{" "}
          <footer className="v-shell-foot">
            {" "}
            <span>
              {
                "Vita UI · Hi-fi prototype · Built on the Peter Tak Design System"
              }
            </span>{" "}
            <span>
              <a href="https://github.com/yejuntak/peter-tak-design-system/blob/main/README.md">
                {"README"}
              </a>
              {" · "}
              <a href="https://github.com/yejuntak/peter-tak-design-system/blob/main/CLAUDE.md">
                {"CLAUDE.md"}
              </a>
              {" · "}
              <a
                href="https://github.com/yejuntak/peter-tak-design-system"
                target="_blank"
                rel="noopener"
              >
                {"GitHub ↗"}
              </a>
            </span>{" "}
          </footer>{" "}
        </div>{" "}
      </main>{" "}
    </>
  );
}

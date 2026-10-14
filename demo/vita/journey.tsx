import { DemoSearch, DemoButton } from "./shared";
export const pageTitle = "Vita UI · Example journey";
export default function JourneyScreen() {
  return (
    <>
      <style>
        {
          '\n    .v-journey {\n      display: flex;\n      flex-direction: column;\n      gap: var(--s-3);\n    }\n    .v-journey-step {\n      display: grid;\n      grid-template-columns: 80px 1fr;\n      gap: var(--s-5);\n      padding: var(--s-5) var(--s-6);\n      background: var(--surface);\n      border: 1px solid var(--hairline);\n      border-radius: var(--r-4);\n      position: relative;\n    }\n    .v-journey-step--active { border-color: var(--accent); }\n    .v-journey-step::before {\n      content: "";\n      position: absolute;\n      left: 64px;\n      top: 100%;\n      width: 2px;\n      height: var(--s-3);\n      background: var(--hairline-strong);\n    }\n    .v-journey-step:last-child::before { display: none; }\n    .v-journey-step-num {\n      width: 48px;\n      height: 48px;\n      border-radius: var(--r-full);\n      background: var(--accent-soft);\n      color: var(--accent-text);\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      font-family: var(--font-display);\n      font-size: 18px;\n      font-weight: var(--w-bold);\n    }\n    .v-journey-step--active .v-journey-step-num {\n      background: var(--accent);\n      color: var(--accent-fg);\n    }\n    .v-journey-step-content {\n      display: flex;\n      flex-direction: column;\n      gap: var(--s-2);\n    }\n    .v-journey-step-eyebrow {\n      font-family: var(--font-mono);\n      font-size: var(--t-micro);\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n      color: var(--muted);\n    }\n    .v-journey-step-title {\n      font-family: var(--font-display);\n      font-size: var(--t-title-l);\n      font-weight: var(--w-medium);\n      color: var(--ink);\n      letter-spacing: -0.01em;\n      margin: 0;\n      line-height: 1.2;\n    }\n    .v-journey-step-body {\n      font-family: var(--font-text);\n      font-size: var(--t-body-m);\n      line-height: var(--lh-relaxed);\n      color: var(--ink-soft);\n      max-width: 64ch;\n      margin: 0;\n    }\n    .v-journey-step-meta {\n      display: flex;\n      flex-wrap: wrap;\n      gap: var(--s-2);\n      margin-top: var(--s-3);\n    }\n    .v-journey-pill {\n      padding: 4px 10px;\n      background: var(--bg-tinted);\n      border: 1px solid var(--hairline);\n      border-radius: var(--r-1);\n      font-family: var(--font-mono);\n      font-size: var(--t-micro);\n      color: var(--ink-soft);\n    }\n    .v-principle-strip {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n      gap: var(--s-3);\n      margin-top: var(--s-6);\n    }\n    .v-principle {\n      display: flex;\n      flex-direction: column;\n      gap: var(--s-2);\n      padding: var(--s-5);\n      background: var(--accent-soft);\n      border: 1px solid hsl(142 30% 80%);\n      border-radius: var(--r-4);\n    }\n    .v-principle-eyebrow {\n      font-family: var(--font-mono);\n      font-size: var(--t-micro);\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n      color: var(--accent-text);\n    }\n    .v-principle-statement {\n      font-family: var(--font-display);\n      font-size: var(--t-title-m);\n      font-weight: var(--w-medium);\n      color: var(--ink);\n      letter-spacing: -0.01em;\n      line-height: 1.2;\n      margin: 0;\n    }\n    .v-principle-body {\n      font-family: var(--font-text);\n      font-size: var(--t-body-s);\n      line-height: var(--lh-relaxed);\n      color: var(--ink-soft);\n      margin: 0;\n    }\n  '
        }
      </style>{" "}
      <header className="v-topnav">
        {" "}
        <a className="v-topnav-brand" href="dashboard.html">
          {" "}
          <span className="v-topnav-brand-mark">{"V"}</span>{" "}
          <span>{"Vita UI"}</span>{" "}
        </a>{" "}
        <nav className="v-topnav-links" aria-label="Main navigation">
          {" "}
          <a href="dashboard.html">{"Today"}</a>{" "}
          <a href="labs.html">
            {"Measures "}
            <span className="v-topnav-badge">{"3"}</span>
          </a>{" "}
          <a href="care-plan.html">{"sample plan"}</a>{" "}
          <a href="progress-framing.html">{"Progress"}</a>{" "}
          <a href="recommendation.html">{"Examples"}</a>{" "}
          <a href="messages.html">
            {"Messages "}
            <span className="v-topnav-badge">{"2"}</span>
          </a>{" "}
          <a href="journey.html" aria-current="page">
            {"Journey"}
          </a>{" "}
        </nav>{" "}
        <div className="v-topnav-end">
          {" "}
          <div className="v-topnav-search">
            {" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>{" "}
            <DemoSearch
              type="search"
              placeholder="Search…"
              aria-label="Search"
            />{" "}
          </div>{" "}
          <DemoButton
            className="v-topnav-icon"
            data-notif=""
            aria-label="Notifications"
          >
            {" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>{" "}
          </DemoButton>{" "}
          <span className="v-topnav-avatar" aria-hidden="true">
            {"DM"}
          </span>{" "}
        </div>{" "}
      </header>{" "}
      <main className="v-main">
        {" "}
        <div className="v-page-head">
          {" "}
          <span className="v-eyebrow">{"Vita UI"}</span>{" "}
          <h1 className="v-page-title">{"Example journey"}</h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <span className="v-screen-eyebrow">
            {"Example journey · Vita interface"}
          </span>{" "}
          <h2 className="v-screen-title">
            {"From data to understanding to action."}
          </h2>{" "}
          <p className="v-screen-lede">
            {
              "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
            }
          </p>{" "}
          <section className="v-screen-section">
            {" "}
            <div className="v-journey">
              {" "}
              <article className="v-journey-step v-journey-step--active">
                {" "}
                <span className="v-journey-step-num" aria-hidden="true">
                  {"01"}
                </span>{" "}
                <div className="v-journey-step-content">
                  {" "}
                  <span className="v-journey-step-eyebrow">
                    {"First session · Onboarding"}
                  </span>{" "}
                  <h2 className="v-journey-step-title">
                    {"Curated sample snapshot."}
                  </h2>{" "}
                  <p className="v-journey-step-body">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                  <div className="v-journey-step-meta">
                    {" "}
                    <span className="v-journey-pill">
                      {"Progressive disclosure"}
                    </span>{" "}
                    <span className="v-journey-pill">
                      {"No value without interpretation"}
                    </span>{" "}
                    <span className="v-journey-pill">
                      {"3–5 metrics · curated"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="m-cta-pair"
                    style={{
                      justifyContent: "flex-start",
                      marginTop: "var(--s-3)",
                    }}
                  >
                    {" "}
                    <a className="button button-primary" href="onboarding.html">
                      {"View first-session screen →"}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
              <article className="v-journey-step">
                {" "}
                <span className="v-journey-step-num" aria-hidden="true">
                  {"02"}
                </span>{" "}
                <div className="v-journey-step-content">
                  {" "}
                  <span className="v-journey-step-eyebrow">
                    {"Understanding · Sample interpretation"}
                  </span>{" "}
                  <h2 className="v-journey-step-title">
                    {"Every value, in context."}
                  </h2>{" "}
                  <p className="v-journey-step-body">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                  <div className="v-journey-step-meta">
                    {" "}
                    <span className="v-journey-pill">
                      {"Range indicator"}
                    </span>{" "}
                    <span className="v-journey-pill">{"Trend arrow"}</span>{" "}
                    <span className="v-journey-pill">
                      {"Plain-language sentence"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="m-cta-pair"
                    style={{
                      justifyContent: "flex-start",
                      marginTop: "var(--s-3)",
                    }}
                  >
                    {" "}
                    <a
                      className="button button-primary"
                      href="lab-interpretation.html"
                    >
                      {"View lab detail →"}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
              <article className="v-journey-step">
                {" "}
                <span className="v-journey-step-num" aria-hidden="true">
                  {"03"}
                </span>{" "}
                <div className="v-journey-step-content">
                  {" "}
                  <span className="v-journey-step-eyebrow">
                    {"Action · sample plan"}
                  </span>{" "}
                  <h2 className="v-journey-step-title">
                    {"domain direction → user-authored plan."}
                  </h2>{" "}
                  <p className="v-journey-step-body">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                  <div className="v-journey-step-meta">
                    {" "}
                    <span className="v-journey-pill">
                      {"User-defined goals"}
                    </span>{" "}
                    <span className="v-journey-pill">
                      {"Direction vs. mandate"}
                    </span>{" "}
                    <span className="v-journey-pill">
                      {"Editable plan"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="m-cta-pair"
                    style={{
                      justifyContent: "flex-start",
                      marginTop: "var(--s-3)",
                    }}
                  >
                    {" "}
                    <a className="button button-primary" href="care-plan.html">
                      {"View care-plan screen →"}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
              <article className="v-journey-step">
                {" "}
                <span className="v-journey-step-num" aria-hidden="true">
                  {"04"}
                </span>{" "}
                <div className="v-journey-step-content">
                  {" "}
                  <span className="v-journey-step-eyebrow">
                    {"Sustaining · Adherence"}
                  </span>{" "}
                  <h2 className="v-journey-step-title">
                    {"Progress framing, never compliance."}
                  </h2>{" "}
                  <p className="v-journey-step-body">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                  <div className="v-journey-step-meta">
                    {" "}
                    <span className="v-journey-pill">
                      {"Progress over compliance"}
                    </span>{" "}
                    <span className="v-journey-pill">{"Streak preserved"}</span>{" "}
                    <span className="v-journey-pill">
                      {"Forward-looking copy"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="m-cta-pair"
                    style={{
                      justifyContent: "flex-start",
                      marginTop: "var(--s-3)",
                    }}
                  >
                    {" "}
                    <a
                      className="button button-primary"
                      href="progress-framing.html"
                    >
                      {"View progress screen →"}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
              <article className="v-journey-step">
                {" "}
                <span className="v-journey-step-num" aria-hidden="true">
                  {"05"}
                </span>{" "}
                <div className="v-journey-step-content">
                  {" "}
                  <span className="v-journey-step-eyebrow">
                    {"Deepening · ML-powered examples"}
                  </span>{" "}
                  <h2 className="v-journey-step-title">
                    {"Recommendations with transparent confidence."}
                  </h2>{" "}
                  <p className="v-journey-step-body">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                  <div className="v-journey-step-meta">
                    {" "}
                    <span className="v-journey-pill">
                      {"3 confidence tiers"}
                    </span>{" "}
                    <span className="v-journey-pill">
                      {"Accept · Adjust · Set aside"}
                    </span>{" "}
                    <span className="v-journey-pill">
                      {"Sources visible"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="m-cta-pair"
                    style={{
                      justifyContent: "flex-start",
                      marginTop: "var(--s-3)",
                    }}
                  >
                    {" "}
                    <a
                      className="button button-primary"
                      href="recommendation.html"
                    >
                      {"View examples screen →"}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
              <article className="v-journey-step">
                {" "}
                <span className="v-journey-step-num" aria-hidden="true">
                  {"06"}
                </span>{" "}
                <div className="v-journey-step-content">
                  {" "}
                  <span className="v-journey-step-eyebrow">
                    {"Continuity · demo advisor"}
                  </span>{" "}
                  <h2 className="v-journey-step-title">
                    {"A repeatable thread with your care team."}
                  </h2>{" "}
                  <p className="v-journey-step-body">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                  <div className="v-journey-step-meta">
                    {" "}
                    <span className="v-journey-pill">
                      {"example review embedded"}
                    </span>{" "}
                    <span className="v-journey-pill">
                      {"Follow-up scheduling"}
                    </span>{" "}
                    <span className="v-journey-pill">
                      {"Attachable trend summaries"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="m-cta-pair"
                    style={{
                      justifyContent: "flex-start",
                      marginTop: "var(--s-3)",
                    }}
                  >
                    {" "}
                    <a className="button button-primary" href="messages.html">
                      {"View advisor thread →"}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
            </div>{" "}
          </section>{" "}
          <section className="v-screen-section">
            {" "}
            <h2 className="v-screen-section-title">
              {"Principles that shaped this journey."}
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
            <div className="v-principle-strip">
              {" "}
              <article className="v-principle">
                {" "}
                <span className="v-principle-eyebrow">
                  {"Principle 1"}
                </span>{" "}
                <h3 className="v-principle-statement">
                  {"No sample value without interpretation."}
                </h3>{" "}
                <p className="v-principle-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </article>{" "}
              <article className="v-principle">
                {" "}
                <span className="v-principle-eyebrow">
                  {"Principle 2"}
                </span>{" "}
                <h3 className="v-principle-statement">
                  {"Progress framing, always."}
                </h3>{" "}
                <p className="v-principle-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </article>{" "}
              <article className="v-principle">
                {" "}
                <span className="v-principle-eyebrow">
                  {"Principle 3"}
                </span>{" "}
                <h3 className="v-principle-statement">
                  {"User authors the plan."}
                </h3>{" "}
                <p className="v-principle-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </article>{" "}
              <article className="v-principle">
                {" "}
                <span className="v-principle-eyebrow">
                  {"Principle 4"}
                </span>{" "}
                <h3 className="v-principle-statement">
                  {"Confidence as language, not a score."}
                </h3>{" "}
                <p className="v-principle-body">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </article>{" "}
            </div>{" "}
          </section>{" "}
          <footer className="v-shell-foot">
            {" "}
            <span>
              {
                "Vita UI · Hi-fi prototype · Built on the Peter Tak Design System"
              }
            </span>{" "}
            <span>
              <a href="index.html">{"Case overview"}</a>
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

import { DemoSearch, DemoButton } from "./shared";
export const pageTitle = "Vita UI · examples";
export default function RecommendationScreen() {
  return (
    <>
      {" "}
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
          <a href="recommendation.html" aria-current="page">
            {"examples"}
          </a>{" "}
          <a href="messages.html">
            {"Messages "}
            <span className="v-topnav-badge">{"2"}</span>
          </a>{" "}
          <a href="journey.html">{"Journey"}</a>{" "}
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
          <span className="v-eyebrow">
            {"Personalized examples · 3 active"}
          </span>{" "}
          <h1 className="v-page-title">{"examples"}</h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <section className="v-bento">
            {" "}
            <article className="v-big v-big--dark">
              {" "}
              <span className="v-eyebrow v-eyebrow--on-dark">
                {"How we frame ML examples"}
              </span>{" "}
              <h2 className="v-big-num" style={{ fontSize: "32px" }}>
                {"3 tiers"}
              </h2>{" "}
              <p className="v-big-meta">
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginTop: "auto",
                }}
              >
                {" "}
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "hsl(155 55% 50%)",
                    color: "hsl(0 0% 5%)",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                  }}
                >
                  {"Based on supplied context"}
                </span>{" "}
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "hsl(48 95% 55%)",
                    color: "hsl(0 0% 5%)",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                  }}
                >
                  {"Consider"}
                </span>{" "}
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "hsl(0 0% 30%)",
                    color: "white",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                  }}
                >
                  {"Review with a person"}
                </span>{" "}
              </div>{" "}
            </article>{" "}
            <article className="v-big v-big--gradient">
              {" "}
              <span className="v-eyebrow v-eyebrow--on-grad">
                {"Three-action response"}
              </span>{" "}
              <h2 className="v-big-title" style={{ fontSize: "20px" }}>
                {"Accept. Adjust. Set aside."}
              </h2>{" "}
              <p className="v-big-meta">
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "auto",
                  position: "relative",
                  zIndex: "1",
                }}
              >
                {" "}
                <span
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    background: "white",
                    color: "var(--ink)",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {"Add to plan"}
                </span>{" "}
                <span
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    background: "hsl(155 60% 35% / 0.3)",
                    border: "1px solid hsl(155 60% 80%)",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {"Adjust"}
                </span>{" "}
                <span
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    color: "hsl(155 25% 88%)",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {"Not for me"}
                </span>{" "}
              </div>{" "}
            </article>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              <h3 className="v-section-title">{"Active examples"}</h3>
              <span className="v-section-sub">{"3 recommendations"}</span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--vs-3)",
              }}
            >
              {" "}
              <article className="v-card">
                {" "}
                <div className="v-card-head">
                  {" "}
                  <span className="v-status v-status--ok">
                    {"Based on supplied context"}
                  </span>{" "}
                  <span className="v-card-meta">
                    {"Reviewed by Demo advisor · 2 days ago"}
                  </span>{" "}
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "var(--vs-3)",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                    borderBottom: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <div style={{ flex: "1" }}>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "var(--vt-body-s)",
                        color: "var(--ink)",
                        fontWeight: "500",
                      }}
                    >
                      {"Sample measure B"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"116 → 128 units · over 4 months"}
                    </div>{" "}
                  </div>{" "}
                  <div style={{ textAlign: "right" }}>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "22px",
                        color: "var(--ink)",
                        fontWeight: "500",
                        letterSpacing: "-0.012em",
                        lineHeight: "1",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {"128"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"units"}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--vt-title-s)",
                    lineHeight: "var(--vlh-title-s)",
                    fontWeight: "500",
                    color: "var(--ink)",
                    margin: "0",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {
                    "Review this synthetic example item and its supplied context. No real-world action is performed."
                  }
                </h3>{" "}
                <p
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize: "var(--vt-body-s)",
                    lineHeight: "var(--vlh-body-s)",
                    color: "var(--ink-soft)",
                    margin: "0",
                  }}
                >
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--vs-2)",
                    paddingTop: "var(--vs-2)",
                    borderTop: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--muted)",
                    }}
                  >
                    {"Lab trend · Activity · CAP guidance"}
                  </span>{" "}
                  <div
                    style={{ marginLeft: "auto", display: "flex", gap: "6px" }}
                  >
                    {" "}
                    <DemoButton className="v-btn-mini v-btn-mini--ghost">
                      {"Not for me"}
                    </DemoButton>{" "}
                    <DemoButton className="v-btn-mini">{"Adjust"}</DemoButton>{" "}
                    <DemoButton className="v-btn-mini v-btn-mini--primary">
                      {"Add to plan"}
                    </DemoButton>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
              <article className="v-card">
                {" "}
                <div className="v-card-head">
                  {" "}
                  <span className="v-status v-status--watch">
                    {"Consider"}
                  </span>{" "}
                  <span className="v-card-meta">
                    {"Generated today · awaiting review"}
                  </span>{" "}
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "var(--vs-3)",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                    borderBottom: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <div style={{ flex: "1" }}>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "var(--vt-body-s)",
                        color: "var(--ink)",
                        fontWeight: "500",
                      }}
                    >
                      {"Sample measure D"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"7-day average vs. baseline"}
                    </div>{" "}
                  </div>{" "}
                  <div style={{ textAlign: "right" }}>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "22px",
                        color: "var(--ink)",
                        fontWeight: "500",
                        letterSpacing: "-0.012em",
                        lineHeight: "1",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {"132/86"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"units"}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--vt-title-s)",
                    lineHeight: "var(--vlh-title-s)",
                    fontWeight: "500",
                    color: "var(--ink)",
                    margin: "0",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {"Example routine for review."}
                </h3>{" "}
                <p
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize: "var(--vt-body-s)",
                    lineHeight: "var(--vlh-body-s)",
                    color: "var(--ink-soft)",
                    margin: "0",
                  }}
                >
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--vs-2)",
                    paddingTop: "var(--vs-2)",
                    borderTop: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--muted)",
                    }}
                  >
                    {"Sample reference"}
                  </span>{" "}
                  <div
                    style={{ marginLeft: "auto", display: "flex", gap: "6px" }}
                  >
                    {" "}
                    <DemoButton className="v-btn-mini v-btn-mini--ghost">
                      {"Not for me"}
                    </DemoButton>{" "}
                    <DemoButton className="v-btn-mini">{"Adjust"}</DemoButton>{" "}
                    <DemoButton className="v-btn-mini v-btn-mini--primary">
                      {"Add to plan"}
                    </DemoButton>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
              <article className="v-card">
                {" "}
                <div className="v-card-head">
                  {" "}
                  <span className="v-status v-status--attention">
                    {"Review with a person"}
                  </span>{" "}
                  <span className="v-card-meta">
                    {"Generated today · low-confidence path"}
                  </span>{" "}
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "var(--vs-3)",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                    borderBottom: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <div style={{ flex: "1" }}>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "var(--vt-body-s)",
                        color: "var(--ink)",
                        fontWeight: "500",
                      }}
                    >
                      {"Sample measure E"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"22 units · below reference (30+)"}
                    </div>{" "}
                  </div>{" "}
                  <div style={{ textAlign: "right" }}>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "22px",
                        color: "var(--ink)",
                        fontWeight: "500",
                        letterSpacing: "-0.012em",
                        lineHeight: "1",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {"22"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"units"}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--vt-title-s)",
                    lineHeight: "var(--vlh-title-s)",
                    fontWeight: "500",
                    color: "var(--ink)",
                    margin: "0",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {"A sample item needs contextual review."}
                </h3>{" "}
                <p
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize: "var(--vt-body-s)",
                    lineHeight: "var(--vlh-body-s)",
                    color: "var(--ink-soft)",
                    margin: "0",
                  }}
                >
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--vs-2)",
                    paddingTop: "var(--vs-2)",
                    borderTop: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--muted)",
                    }}
                  >
                    {"Sample measure E · Latitude"}
                  </span>{" "}
                  <div
                    style={{ marginLeft: "auto", display: "flex", gap: "6px" }}
                  >
                    {" "}
                    <DemoButton className="v-btn-mini v-btn-mini--ghost">
                      {"Not for me"}
                    </DemoButton>{" "}
                    <DemoButton className="v-btn-mini">
                      {"Save for later"}
                    </DemoButton>{" "}
                    <DemoButton className="v-btn-mini v-btn-mini--primary">
                      {"Schedule example review"}
                    </DemoButton>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </main>{" "}
    </>
  );
}

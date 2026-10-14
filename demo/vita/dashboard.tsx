import { DemoSearch, DemoButton, ProgressBarFrame } from "./shared";
export const pageTitle = "Vita UI · Today";
export default function DashboardScreen() {
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
          <a href="dashboard.html" aria-current="page">
            {"Today"}
          </a>{" "}
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
          <span className="v-eyebrow">{"Friday · March 18, 2022"}</span>{" "}
          <h1 className="v-page-title">{"Today"}</h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <section className="v-bento">
            {" "}
            <article className="v-big v-big--dark">
              {" "}
              <span className="v-eyebrow v-eyebrow--on-dark">
                {"Sample measures · Example date"}
              </span>{" "}
              <h2 className="v-big-num">{"12 sample measures"}</h2>{" "}
              <p className="v-big-meta">
                {
                  "9 in range · 2 watch · 1 low. Tap the strip to drill into any value."
                }
              </p>{" "}
              <div
                className="v-biomarker-strip"
                role="img"
                aria-label="Distribution of sample states"
              >
                {" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "3" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "4" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok2"
                  style={{ flexGrow: "2" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "5" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok2"
                  style={{ flexGrow: "3" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "4" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "3" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok2"
                  style={{ flexGrow: "2" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "4" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--watch"
                  style={{ flexGrow: "2" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--watch2"
                  style={{ flexGrow: "2" }}
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--low"
                  style={{ flexGrow: "1.5" }}
                ></span>{" "}
              </div>{" "}
              <div className="v-biomarker-legend">
                {" "}
                <span
                  className="v-biomarker-legend-item"
                  style={{ color: "hsl(155 30% 80%)" }}
                >
                  <span
                    className="v-biomarker-legend-dot"
                    style={{ background: "hsl(155 55% 50%)" }}
                  ></span>
                  {" In range · 9"}
                </span>{" "}
                <span
                  className="v-biomarker-legend-item"
                  style={{ color: "hsl(48 30% 80%)" }}
                >
                  <span
                    className="v-biomarker-legend-dot"
                    style={{ background: "hsl(48 95% 55%)" }}
                  ></span>
                  {" Watch · 2"}
                </span>{" "}
                <span
                  className="v-biomarker-legend-item"
                  style={{ color: "hsl(280 30% 80%)" }}
                >
                  <span
                    className="v-biomarker-legend-dot"
                    style={{ background: "hsl(280 60% 65%)" }}
                  ></span>
                  {" Low · 1"}
                </span>{" "}
                <span
                  className="v-biomarker-legend-item"
                  style={{ color: "hsl(340 30% 80%)" }}
                >
                  <span
                    className="v-biomarker-legend-dot"
                    style={{ background: "hsl(340 80% 65%)" }}
                  ></span>
                  {" Out of range · 0"}
                </span>{" "}
              </div>{" "}
            </article>{" "}
            <article className="v-big v-big--gradient">
              {" "}
              <span className="v-eyebrow v-eyebrow--on-grad">
                {"Vita Score"}
              </span>{" "}
              <h2 className="v-big-num">{"82"}</h2>{" "}
              <p className="v-big-meta">
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
              <svg
                className="v-silhouette"
                viewBox="0 0 200 240"
                aria-hidden="true"
              >
                {" "}
                <defs>
                  {" "}
                  <radialGradient id="figGrad" cx="0.5" cy="0.4" r="0.7">
                    {" "}
                    <stop
                      offset="0"
                      stopColor="white"
                      stopOpacity="0.5"
                    ></stop>{" "}
                    <stop
                      offset="1"
                      stopColor="white"
                      stopOpacity="0"
                    ></stop>{" "}
                  </radialGradient>{" "}
                </defs>{" "}
                <circle cx="100" cy="50" r="36" fill="url(#figGrad)"></circle>{" "}
                <path
                  d="M 50 230 C 50 150, 70 110, 100 110 C 130 110, 150 150, 150 230 Z"
                  fill="url(#figGrad)"
                ></path>{" "}
              </svg>{" "}
            </article>{" "}
          </section>{" "}
          <section className="v-row v-row--8-4">
            {" "}
            <article className="v-card">
              {" "}
              <div className="v-card-head">
                {" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--vs-2)",
                  }}
                >
                  {" "}
                  <span className="v-doctor-attr-avatar" aria-hidden="true">
                    {"DA"}
                  </span>{" "}
                  <div>
                    {" "}
                    <h3 className="v-card-title">
                      {"sample plan from Demo advisor"}
                    </h3>{" "}
                    <span
                      className="v-eyebrow"
                      style={{ textTransform: "none", letterSpacing: "0" }}
                    >
                      {"Sample reference"}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <a className="v-card-link" href="care-plan.html">
                  {"Open →"}
                </a>{" "}
              </div>{" "}
              <p
                style={{
                  margin: "0",
                  fontFamily: "var(--font-text)",
                  fontSize: "var(--vt-body-s)",
                  lineHeight: "var(--vlh-body-s)",
                  color: "var(--ink-soft)",
                }}
              >
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {" "}
                <li
                  style={{
                    display: "grid",
                    gridTemplateColumns: "20px 1fr auto",
                    gap: "var(--vs-3)",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                    alignItems: "baseline",
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
                    {"01"}
                  </span>{" "}
                  <div>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "var(--vt-body-s)",
                        color: "var(--ink)",
                        fontWeight: "500",
                      }}
                    >
                      {"Review sample item · 3 times"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "12px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"For Sample measure B trend"}
                    </div>{" "}
                  </div>{" "}
                  <span className="v-status v-status--ok">{"Active"}</span>{" "}
                </li>{" "}
                <li
                  style={{
                    display: "grid",
                    gridTemplateColumns: "20px 1fr auto",
                    gap: "var(--vs-3)",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                    alignItems: "baseline",
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
                    {"02"}
                  </span>{" "}
                  <div>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "var(--vt-body-s)",
                        color: "var(--ink)",
                        fontWeight: "500",
                      }}
                    >
                      {"Review sample items"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "12px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"For this example"}
                    </div>{" "}
                  </div>{" "}
                  <span className="v-status v-status--ok">{"Active"}</span>{" "}
                </li>{" "}
                <li
                  style={{
                    display: "grid",
                    gridTemplateColumns: "20px 1fr auto",
                    gap: "var(--vs-3)",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                    alignItems: "baseline",
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
                    {"03"}
                  </span>{" "}
                  <div>
                    {" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "var(--vt-body-s)",
                        color: "var(--ink)",
                        fontWeight: "500",
                      }}
                    >
                      {"Sample measure E · example routine"}
                    </div>{" "}
                    <div
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "12px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {"Re-check at June measures"}
                    </div>{" "}
                  </div>{" "}
                  <span className="v-status v-status--ok">{"Active"}</span>{" "}
                </li>{" "}
              </ul>{" "}
            </article>{" "}
            <article className="v-card">
              {" "}
              <div className="v-card-head">
                {" "}
                <h3 className="v-card-title">{"Range overview"}</h3>{" "}
                <span className="v-card-meta">{"12 tested"}</span>{" "}
              </div>{" "}
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {" "}
                <li
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "var(--vs-2)",
                      fontFamily: "var(--font-text)",
                      fontSize: "var(--vt-body-s)",
                      color: "var(--ink)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "999px",
                        background: "hsl(155 55% 45%)",
                      }}
                    ></span>
                    {"In range"}
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--ink)",
                      fontVariantNumeric: "tabular-nums",
                      fontWeight: "500",
                    }}
                  >
                    {"9"}
                  </span>{" "}
                </li>{" "}
                <li
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "var(--vs-2)",
                      fontFamily: "var(--font-text)",
                      fontSize: "var(--vt-body-s)",
                      color: "var(--ink)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "999px",
                        background: "hsl(38 88% 56%)",
                      }}
                    ></span>
                    {"Watch"}
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--ink)",
                      fontVariantNumeric: "tabular-nums",
                      fontWeight: "500",
                    }}
                  >
                    {"2"}
                  </span>{" "}
                </li>{" "}
                <li
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "var(--vs-3) 0",
                    borderTop: "1px solid var(--hairline-faint)",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "var(--vs-2)",
                      fontFamily: "var(--font-text)",
                      fontSize: "var(--vt-body-s)",
                      color: "var(--ink)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "999px",
                        background: "hsl(0 65% 58%)",
                      }}
                    ></span>
                    {"Attention"}
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--ink)",
                      fontVariantNumeric: "tabular-nums",
                      fontWeight: "500",
                    }}
                  >
                    {"1"}
                  </span>{" "}
                </li>{" "}
              </ul>{" "}
              <a
                className="v-card-link"
                href="labs.html"
                style={{ marginTop: "auto" }}
              >
                {"View sample measures →"}
              </a>{" "}
            </article>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              {" "}
              <h3 className="v-section-title">{"Vitals · last 7 days"}</h3>{" "}
              <span className="v-section-sub">{"Sample reference"}</span>{" "}
            </div>{" "}
            <div className="v-row-4">
              {" "}
              <article className="v-vital">
                {" "}
                <div className="v-vital-head">
                  {" "}
                  <span>
                    <span className="v-vital-head-icon v-vital-head-icon--heart">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </span>
                    {" Resting HR"}
                  </span>{" "}
                  <span>{"−1 units"}</span>{" "}
                </div>{" "}
                <div className="v-vital-value">
                  <span className="v-vital-num">{"68"}</span>
                  <span className="v-vital-unit">{"units"}</span>
                </div>{" "}
                <div className="v-vital-trend v-vital-trend--down">
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>{" "}
                  <span>{"Lower vs. last week"}</span>{" "}
                </div>{" "}
                <svg
                  className="v-spark"
                  viewBox="0 0 100 32"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {" "}
                  <polyline
                    points="0,18 14,16 28,20 42,15 56,17 70,14 84,15 100,12"
                    fill="none"
                    stroke="hsl(8 78% 56%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polyline>{" "}
                  <polyline
                    points="0,18 14,16 28,20 42,15 56,17 70,14 84,15 100,12 100,32 0,32"
                    fill="hsl(8 78% 56% / 0.12)"
                  ></polyline>{" "}
                  <circle
                    cx="100"
                    cy="12"
                    r="2.5"
                    fill="hsl(8 78% 56%)"
                  ></circle>{" "}
                </svg>{" "}
              </article>{" "}
              <article className="v-vital">
                {" "}
                <div className="v-vital-head">
                  {" "}
                  <span>
                    <span className="v-vital-head-icon v-vital-head-icon--bp">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </span>
                    {" Sample measure D"}
                  </span>{" "}
                  <span>{"WATCH"}</span>{" "}
                </div>{" "}
                <div className="v-vital-value">
                  <span className="v-vital-num">{"132/86"}</span>
                  <span className="v-vital-unit">{"units"}</span>
                </div>{" "}
                <div className="v-vital-trend v-vital-trend--up">
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 15 12 9 18 15"></polyline>
                  </svg>{" "}
                  <span>{"+8/+6 vs. last week"}</span>{" "}
                </div>{" "}
                <svg
                  className="v-spark"
                  viewBox="0 0 100 32"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {" "}
                  <polyline
                    points="0,22 14,20 28,18 42,16 56,14 70,12 84,11 100,8"
                    fill="none"
                    stroke="hsl(210 80% 50%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polyline>{" "}
                  <polyline
                    points="0,22 14,20 28,18 42,16 56,14 70,12 84,11 100,8 100,32 0,32"
                    fill="hsl(210 80% 50% / 0.12)"
                  ></polyline>{" "}
                  <circle
                    cx="100"
                    cy="8"
                    r="2.5"
                    fill="hsl(210 80% 50%)"
                  ></circle>{" "}
                </svg>{" "}
              </article>{" "}
              <article className="v-vital">
                {" "}
                <div className="v-vital-head">
                  {" "}
                  <span>
                    <span className="v-vital-head-icon v-vital-head-icon--steps">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M13 4v8.5M5 12v8M19 8v12M9 16v4"></path>
                      </svg>
                    </span>
                    {" Steps avg"}
                  </span>{" "}
                  <span>{"+812"}</span>{" "}
                </div>{" "}
                <div className="v-vital-value">
                  <span className="v-vital-num">{"7,240"}</span>
                  <span className="v-vital-unit">{"/day"}</span>
                </div>{" "}
                <div
                  className="v-vital-trend"
                  style={{ color: "var(--accent-text)" }}
                >
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 15 12 9 18 15"></polyline>
                  </svg>{" "}
                  <span>{"Above 7-day target"}</span>{" "}
                </div>{" "}
                <svg
                  className="v-spark"
                  viewBox="0 0 100 32"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {" "}
                  <polyline
                    points="0,20 14,22 28,18 42,16 56,14 70,12 84,10 100,8"
                    fill="none"
                    stroke="hsl(155 45% 32%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polyline>{" "}
                  <polyline
                    points="0,20 14,22 28,18 42,16 56,14 70,12 84,10 100,8 100,32 0,32"
                    fill="hsl(155 45% 32% / 0.12)"
                  ></polyline>{" "}
                  <circle
                    cx="100"
                    cy="8"
                    r="2.5"
                    fill="hsl(155 45% 32%)"
                  ></circle>{" "}
                </svg>{" "}
              </article>{" "}
              <article className="v-vital">
                {" "}
                <div className="v-vital-head">
                  {" "}
                  <span>
                    <span className="v-vital-head-icon v-vital-head-icon--sleep">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    </span>
                    {"Sample reference"}
                  </span>{" "}
                  <span>{"−12 min"}</span>{" "}
                </div>{" "}
                <div className="v-vital-value">
                  <span className="v-vital-num">{"7.2"}</span>
                  <span className="v-vital-unit">{"hrs"}</span>
                </div>{" "}
                <div className="v-vital-trend">
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>{" "}
                  <span>{"Steady — close to goal"}</span>{" "}
                </div>{" "}
                <svg
                  className="v-spark"
                  viewBox="0 0 100 32"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {" "}
                  <polyline
                    points="0,14 14,12 28,15 42,11 56,13 70,10 84,12 100,10"
                    fill="none"
                    stroke="hsl(280 50% 55%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polyline>{" "}
                  <polyline
                    points="0,14 14,12 28,15 42,11 56,13 70,10 84,12 100,10 100,32 0,32"
                    fill="hsl(280 50% 55% / 0.12)"
                  ></polyline>{" "}
                  <circle
                    cx="100"
                    cy="10"
                    r="2.5"
                    fill="hsl(280 50% 55%)"
                  ></circle>{" "}
                </svg>{" "}
              </article>{" "}
            </div>{" "}
          </section>{" "}
          <section className="v-row-2">
            {" "}
            <article className="v-card">
              {" "}
              <div className="v-card-head">
                {" "}
                <h3 className="v-card-title">{"Today's sample plan"}</h3>{" "}
                <a className="v-card-link" href="care-plan.html">
                  {"Open plan →"}
                </a>{" "}
              </div>{" "}
              <ProgressBarFrame
                className="m-progress-bar"
                data-completed="4"
                data-target="7"
                as="div"
              >
                {" "}
                <header className="m-progress-bar-head">
                  {" "}
                  <span className="m-progress-bar-count">
                    <strong>{"4 of 7"}</strong>
                    {" this week"}
                  </span>{" "}
                  <span className="m-progress-bar-streak">
                    {"3-day streak"}
                  </span>{" "}
                </header>{" "}
                <div
                  className="m-progress-bar-track"
                  role="progressbar"
                  aria-valuenow={4}
                  aria-valuemin={0}
                  aria-valuemax={7}
                  aria-label="4 of 7 activities completed"
                >
                  {" "}
                  <div
                    className="m-progress-bar-fill"
                    style={{ width: "calc(4 / 7 * 100%)" }}
                  ></div>{" "}
                </div>{" "}
                <p className="m-progress-bar-encouragement">
                  {"Two more activities will finish the week strong."}
                </p>{" "}
              </ProgressBarFrame>{" "}
              <div className="v-today-list">
                {" "}
                <div className="v-today-item v-today-item--done">
                  {" "}
                  <span className="v-today-check" aria-label="Done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{" "}
                  <div className="v-today-body">
                    {" "}
                    <div className="v-today-title">
                      {"20-min walk after lunch"}
                    </div>{" "}
                    <div className="v-today-sub">
                      {"For Sample measure B trend · self-set goal"}
                    </div>{" "}
                  </div>{" "}
                  <span className="v-today-time">{"1:30 PM"}</span>{" "}
                </div>{" "}
                <div className="v-today-item v-today-item--done">
                  {" "}
                  <span className="v-today-check" aria-label="Done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{" "}
                  <div className="v-today-body">
                    {" "}
                    <div className="v-today-title">
                      {"Sample measure E Follow-up"}
                    </div>{" "}
                    <div className="v-today-sub">
                      {"Example routine · morning"}
                    </div>{" "}
                  </div>{" "}
                  <span className="v-today-time">{"8:00 AM"}</span>{" "}
                </div>{" "}
                <div className="v-today-item">
                  {" "}
                  <span
                    className="v-today-check"
                    aria-label="Mark done"
                  ></span>{" "}
                  <div className="v-today-body">
                    {" "}
                    <div className="v-today-title">
                      {"Evening reflection log"}
                    </div>{" "}
                    <div className="v-today-sub">
                      {"1 prompt · 60 seconds"}
                    </div>{" "}
                  </div>{" "}
                  <span className="v-today-time">{"9:00 PM"}</span>{" "}
                </div>{" "}
                <div className="v-today-item">
                  {" "}
                  <span
                    className="v-today-check"
                    aria-label="Mark done"
                  ></span>{" "}
                  <div className="v-today-body">
                    {" "}
                    <div className="v-today-title">
                      {"Plan tomorrow's plate"}
                    </div>{" "}
                    <div className="v-today-sub">
                      {"Review sample items"}
                    </div>{" "}
                  </div>{" "}
                  <span className="v-today-time">{"Tonight"}</span>{" "}
                </div>{" "}
              </div>{" "}
            </article>{" "}
            <article className="v-card">
              {" "}
              <div className="v-card-head">
                {" "}
                <h3 className="v-card-title">{"Upcoming"}</h3>{" "}
                <a className="v-card-link" href="messages.html#schedule">
                  {"All →"}
                </a>{" "}
              </div>{" "}
              <div className="v-timeline">
                {" "}
                <div className="v-timeline-item">
                  {" "}
                  <div className="v-timeline-date">
                    <span className="v-timeline-date-day">{"Mar"}</span>
                    <span className="v-timeline-date-num">{"22"}</span>
                  </div>{" "}
                  <div className="v-timeline-content">
                    {" "}
                    <div className="v-timeline-title">
                      {"Sample reference"}
                    </div>{" "}
                    <div className="v-timeline-sub">
                      {"Sample reference"}
                    </div>{" "}
                  </div>{" "}
                  <div className="v-timeline-time">
                    {"10:30 AM"}
                    <br />
                    <span style={{ color: "var(--muted)" }}>{"30 min"}</span>
                  </div>{" "}
                </div>{" "}
                <div className="v-timeline-item">
                  {" "}
                  <div className="v-timeline-date">
                    <span className="v-timeline-date-day">{"Apr"}</span>
                    <span className="v-timeline-date-num">{"04"}</span>
                  </div>{" "}
                  <div className="v-timeline-content">
                    {" "}
                    <div className="v-timeline-title">
                      {"Sample measure D self-check window"}
                    </div>{" "}
                    <div className="v-timeline-sub">
                      {"3 morning readings · home cuff"}
                    </div>{" "}
                  </div>{" "}
                  <div className="v-timeline-time">
                    {"Week"}
                    <br />
                    <span style={{ color: "var(--muted)" }}>
                      {"Reminder set"}
                    </span>
                  </div>{" "}
                </div>{" "}
                <div className="v-timeline-item">
                  {" "}
                  <div className="v-timeline-date">
                    <span className="v-timeline-date-day">{"Jun"}</span>
                    <span className="v-timeline-date-num">{"15"}</span>
                  </div>{" "}
                  <div className="v-timeline-content">
                    {" "}
                    <div className="v-timeline-title">
                      {"3-month follow-up measures"}
                    </div>{" "}
                    <div className="v-timeline-sub">
                      {"Sample reference"}
                    </div>{" "}
                  </div>{" "}
                  <div className="v-timeline-time">
                    {"8:00 AM"}
                    <br />
                    <span style={{ color: "var(--muted)" }}>{"Confirmed"}</span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </article>{" "}
          </section>{" "}
        </div>{" "}
      </main>{" "}
    </>
  );
}

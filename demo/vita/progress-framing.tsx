import { DemoSearch, DemoButton, ProgressBarFrame } from "./shared";
export const pageTitle = "Vita UI · Progress";
export default function ProgressFramingScreen() {
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
          <a href="progress-framing.html" aria-current="page">
            {"Progress"}
          </a>{" "}
          <a href="recommendation.html">{"examples"}</a>{" "}
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
          <span className="v-eyebrow">{"Progress · this week"}</span>{" "}
          <h1 className="v-page-title">{"Your progress"}</h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <section className="v-bento">
            {" "}
            <article className="v-big v-big--dark">
              {" "}
              <span className="v-eyebrow v-eyebrow--on-dark">
                {"Progress framing · always"}
              </span>{" "}
              <h2 className="v-big-num">{"4 of 7"}</h2>{" "}
              <p className="v-big-meta">
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
              <ProgressBarFrame
                className="m-progress-bar"
                data-completed="4"
                data-target="7"
                style={{ marginTop: "auto" }}
                as="div"
              >
                {" "}
                <div className="m-progress-bar-track">
                  <div
                    className="m-progress-bar-fill"
                    style={{
                      width: "calc(4 / 7 * 100%)",
                      background: "hsl(155 55% 50%)",
                    }}
                  ></div>
                </div>{" "}
                <p className="m-progress-bar-encouragement">
                  {"Two more activities will finish strong."}
                </p>{" "}
              </ProgressBarFrame>{" "}
            </article>{" "}
            <article className="v-big v-big--gradient">
              {" "}
              <span className="v-eyebrow v-eyebrow--on-grad">
                {"Streak"}
              </span>{" "}
              <h2 className="v-big-num">{"21 days"}</h2>{" "}
              <p className="v-big-meta">
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
            </article>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              <h3 className="v-section-title">{"Same data, two ways"}</h3>
              <span className="v-section-sub">
                {"Why we shipped only one of these"}
              </span>
            </div>{" "}
            <div className="v-row-2">
              {" "}
              <article
                className="v-card"
                style={{
                  borderColor: "hsl(0 30% 90%)",
                  background: "hsl(0 50% 99%)",
                }}
              >
                {" "}
                <div className="v-card-head">
                  {" "}
                  <h3
                    className="v-card-title"
                    style={{ color: "hsl(0 70% 40%)" }}
                  >
                    {"Not in this system · Compliance"}
                  </h3>{" "}
                  <span className="v-card-meta">{"Rejected"}</span>{" "}
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontSize: "32px",
                      fontWeight: "500",
                      color: "hsl(0 70% 40%)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {"3"}
                  </span>{" "}
                  <span style={{ color: "var(--ink-soft)" }}>
                    {"of 7 days missed"}
                  </span>{" "}
                </div>{" "}
                <div
                  style={{
                    height: "6px",
                    borderRadius: "999px",
                    background: "hsl(0 20% 92%)",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "100%",
                      width: "43%",
                      background: "hsl(0 70% 55%)",
                    }}
                  ></div>{" "}
                </div>{" "}
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    lineHeight: "1.55",
                    color: "hsl(0 40% 30%)",
                  }}
                >
                  {"You're behind schedule. 3 days missed this week."}
                </p>{" "}
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    color: "var(--muted)",
                    lineHeight: "1.55",
                  }}
                >
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </article>{" "}
              <article
                className="v-card"
                style={{
                  borderColor: "var(--accent)",
                  background: "var(--accent-soft)",
                }}
              >
                {" "}
                <div className="v-card-head">
                  {" "}
                  <h3
                    className="v-card-title"
                    style={{ color: "var(--accent-text)" }}
                  >
                    {"In this system · Progress"}
                  </h3>{" "}
                  <span
                    className="v-card-meta"
                    style={{ color: "var(--accent-text)" }}
                  >
                    {"Shipped"}
                  </span>{" "}
                </div>{" "}
                <ProgressBarFrame
                  className="m-progress-bar"
                  data-completed="4"
                  data-target="7"
                  as="div"
                >
                  {" "}
                  <header className="m-progress-bar-head">
                    <span className="m-progress-bar-count">
                      <strong>{"4 of 7"}</strong>
                      {" completed"}
                    </span>
                  </header>{" "}
                  <div className="m-progress-bar-track">
                    <div
                      className="m-progress-bar-fill"
                      style={{ width: "calc(4 / 7 * 100%)" }}
                    ></div>
                  </div>{" "}
                  <p className="m-progress-bar-encouragement">
                    {"More than halfway. Two more to finish strong."}
                  </p>{" "}
                </ProgressBarFrame>{" "}
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    color: "var(--ink-soft)",
                    lineHeight: "1.55",
                  }}
                >
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </article>{" "}
            </div>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              <h3 className="v-section-title">
                {"Activity heatmap · last 4 weeks"}
              </h3>
              <span className="v-section-sub">{"Darker = more completed"}</span>
            </div>{" "}
            <article className="v-card">
              {" "}
              <div className="v-heatmap">
                {" "}
                <span className="v-heatmap-day"></span>{" "}
                <span className="v-heatmap-day">{"Mon"}</span>
                <span className="v-heatmap-day">{"Tue"}</span>
                <span className="v-heatmap-day">{"Wed"}</span>{" "}
                <span className="v-heatmap-day">{"Thu"}</span>
                <span className="v-heatmap-day">{"Fri"}</span>
                <span className="v-heatmap-day">{"Sat"}</span>
                <span className="v-heatmap-day">{"Sun"}</span>{" "}
                <span className="v-heatmap-label">{"Wk 1"}</span>{" "}
                <span className="v-heatmap-cell" data-level="2"></span>
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="1"></span>{" "}
                <span className="v-heatmap-cell" data-level="2"></span>
                <span className="v-heatmap-cell v-heatmap-cell--miss"></span>
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="2"></span>{" "}
                <span className="v-heatmap-label">{"Wk 2"}</span>{" "}
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="4"></span>
                <span className="v-heatmap-cell" data-level="2"></span>{" "}
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="4"></span>
                <span className="v-heatmap-cell" data-level="1"></span>{" "}
                <span className="v-heatmap-label">{"Wk 3"}</span>{" "}
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="2"></span>{" "}
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="4"></span>
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="2"></span>{" "}
                <span className="v-heatmap-label">{"This wk"}</span>{" "}
                <span className="v-heatmap-cell" data-level="4"></span>
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell" data-level="4"></span>{" "}
                <span className="v-heatmap-cell" data-level="2"></span>
                <span className="v-heatmap-cell" data-level="3"></span>
                <span className="v-heatmap-cell"></span>
                <span className="v-heatmap-cell"></span>{" "}
              </div>{" "}
            </article>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              <h3 className="v-section-title">
                {"Progress framing · everywhere"}
              </h3>
              <span className="v-section-sub">{"Sample reference"}</span>
            </div>{" "}
            <div className="v-row-3">
              {" "}
              <article className="v-card">
                {" "}
                <span className="v-eyebrow">{"Activity goal"}</span>{" "}
                <ProgressBarFrame
                  className="m-progress-bar"
                  data-completed="4"
                  data-target="7"
                  style={{ marginTop: "8px" }}
                  as="div"
                >
                  {" "}
                  <header className="m-progress-bar-head">
                    <span className="m-progress-bar-count">
                      <strong>{"4 of 7"}</strong>
                      {" reviews this week"}
                    </span>
                  </header>{" "}
                  <div className="m-progress-bar-track">
                    <div
                      className="m-progress-bar-fill"
                      style={{ width: "calc(4 / 7 * 100%)" }}
                    ></div>
                  </div>{" "}
                </ProgressBarFrame>{" "}
              </article>{" "}
              <article className="v-card">
                {" "}
                <span className="v-eyebrow">
                  {"Sample measure E · fortnight"}
                </span>{" "}
                <ProgressBarFrame
                  className="m-progress-bar"
                  data-completed="12"
                  data-target="14"
                  style={{ marginTop: "8px" }}
                  as="div"
                >
                  {" "}
                  <header className="m-progress-bar-head">
                    <span className="m-progress-bar-count">
                      <strong>{"12 of 14"}</strong>
                      {" days"}
                    </span>
                  </header>{" "}
                  <div className="m-progress-bar-track">
                    <div
                      className="m-progress-bar-fill"
                      style={{ width: "calc(12 / 14 * 100%)" }}
                    ></div>
                  </div>{" "}
                </ProgressBarFrame>{" "}
              </article>{" "}
              <article className="v-card">
                {" "}
                <span className="v-eyebrow">{"Sample reference"}</span>{" "}
                <ProgressBarFrame
                  className="m-progress-bar"
                  data-completed="2"
                  data-target="4"
                  style={{ marginTop: "8px" }}
                  as="div"
                >
                  {" "}
                  <header className="m-progress-bar-head">
                    <span className="m-progress-bar-count">
                      <strong>{"2 of 4"}</strong>
                      {" this month"}
                    </span>
                  </header>{" "}
                  <div className="m-progress-bar-track">
                    <div
                      className="m-progress-bar-fill"
                      style={{ width: "50%" }}
                    ></div>
                  </div>{" "}
                </ProgressBarFrame>{" "}
              </article>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </main>{" "}
    </>
  );
}

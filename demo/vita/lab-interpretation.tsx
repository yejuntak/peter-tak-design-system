import {
  DemoSearch,
  DemoButton,
  LabResultFrame,
  RangeIndicatorFrame,
  TrendArrowFrame,
} from "./shared";
export const pageTitle = "Sample interpretation · Sample measure A — Vita UI";
export default function LabInterpretationScreen() {
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
          <a href="labs.html" aria-current="page">
            {"Measures "}
            <span className="v-topnav-badge">{"3"}</span>
          </a>{" "}
          <a href="care-plan.html">{"sample plan"}</a>{" "}
          <a href="progress-framing.html">{"Progress"}</a>{" "}
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
          <span className="v-eyebrow">
            {"Screen 02 · Sample interpretation"}
          </span>{" "}
          <h1 className="v-page-title">
            {"Sample measure A, with context."}
          </h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <div>
            {" "}
            <p className="v-screen-lede">
              {
                "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
              }
            </p>{" "}
            <p className="v-screen-note">
              <strong>{"Design rule:"}</strong>
              {
                "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
              }
            </p>{" "}
            <div style={{ height: "var(--s-7)" }}></div>{" "}
            <section className="v-screen-section">
              {" "}
              <LabResultFrame
                className="m-lab-result"
                style={{ maxWidth: "720px" }}
                as="article"
              >
                {" "}
                <header className="m-lab-result-head">
                  {" "}
                  <h3 className="m-lab-result-name">
                    {"Sample measure A"}
                  </h3>{" "}
                  <span className="m-lab-result-status m-lab-result-status--watch">
                    {"review state"}
                  </span>{" "}
                </header>{" "}
                <div className="m-lab-result-value">
                  {" "}
                  <span className="m-lab-result-number">{"128"}</span>{" "}
                  <span className="m-lab-result-unit">{"units"}</span>{" "}
                </div>{" "}
                <RangeIndicatorFrame
                  className="m-range-indicator"
                  aria-label="128 units, just above reference range"
                  as="div"
                >
                  {" "}
                  <div className="m-range-indicator-bar"></div>{" "}
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "44%" }}
                  ></div>{" "}
                  <div className="m-range-indicator-labels">
                    {" "}
                    <span>{"70"}</span> <span>{"125 (reference)"}</span>{" "}
                    <span>{"200"}</span>{" "}
                  </div>{" "}
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--up"
                  aria-label="Up 6 from previous test 4 months ago"
                  as="div"
                >
                  {" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {" "}
                    <polyline points="6 15 12 9 18 15"></polyline>{" "}
                  </svg>{" "}
                  <span>{"+6 units vs. last test (4 months ago)"}</span>{" "}
                </TrendArrowFrame>{" "}
                <p className="m-lab-result-explanation">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                  <em>{"before"}</em>
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </LabResultFrame>{" "}
            </section>{" "}
            <section className="v-screen-section">
              {" "}
              <h2 className="v-screen-section-title">
                {"What this means in plain language"}
              </h2>{" "}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "var(--s-4)",
                }}
              >
                {" "}
                <div
                  style={{
                    padding: "var(--s-5)",
                    background: "var(--surface)",
                    border: "1px solid var(--hairline)",
                    borderRadius: "var(--r-3)",
                  }}
                >
                  {" "}
                  <span
                    className="t-eyebrow"
                    style={{ color: "var(--color-good-text)" }}
                  >
                    {"Below 100"}
                  </span>{" "}
                  <h3
                    style={{
                      margin: "6px 0 8px",
                      fontSize: "var(--t-title-m)",
                    }}
                  >
                    {"reference"}
                  </h3>{" "}
                  <p
                    style={{
                      margin: "0",
                      color: "var(--ink-soft)",
                      fontSize: "var(--t-body-m)",
                      lineHeight: "var(--lh-relaxed)",
                    }}
                  >
                    {
                      "Review this synthetic example item and its supplied context. No real-world action is performed."
                    }
                  </p>{" "}
                </div>{" "}
                <div
                  style={{
                    padding: "var(--s-5)",
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent)",
                    borderRadius: "var(--r-3)",
                  }}
                >
                  {" "}
                  <span
                    className="t-eyebrow"
                    style={{ color: "var(--accent-text)" }}
                  >
                    {"100–125 · You are here"}
                  </span>{" "}
                  <h3
                    style={{
                      margin: "6px 0 8px",
                      fontSize: "var(--t-title-m)",
                    }}
                  >
                    {"Example band B"}
                  </h3>{" "}
                  <p
                    style={{
                      margin: "0",
                      color: "var(--ink-soft)",
                      fontSize: "var(--t-body-m)",
                      lineHeight: "var(--lh-relaxed)",
                    }}
                  >
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                </div>{" "}
                <div
                  style={{
                    padding: "var(--s-5)",
                    background: "var(--surface)",
                    border: "1px solid var(--hairline)",
                    borderRadius: "var(--r-3)",
                  }}
                >
                  {" "}
                  <span
                    className="t-eyebrow"
                    style={{ color: "hsl(0 70% 40%)" }}
                  >
                    {"126+"}
                  </span>{" "}
                  <h3
                    style={{
                      margin: "6px 0 8px",
                      fontSize: "var(--t-title-m)",
                    }}
                  >
                    {"Example band C"}
                  </h3>{" "}
                  <p
                    style={{
                      margin: "0",
                      color: "var(--ink-soft)",
                      fontSize: "var(--t-body-m)",
                      lineHeight: "var(--lh-relaxed)",
                    }}
                  >
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </section>{" "}
            <section className="v-screen-section">
              {" "}
              <h2 className="v-screen-section-title">{"Your trend"}</h2>{" "}
              <div
                style={{
                  padding: "var(--s-5)",
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--r-3)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--s-3)",
                }}
              >
                {" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "var(--s-5)",
                  }}
                >
                  {" "}
                  <div>
                    {" "}
                    <span
                      className="t-mono-s"
                      style={{ color: "var(--muted)" }}
                    >
                      {"12 mo ago"}
                    </span>{" "}
                    <div
                      style={{
                        fontSize: "var(--t-title-l)",
                        fontWeight: "var(--w-medium)",
                        color: "var(--ink)",
                      }}
                    >
                      {"116 "}
                      <span
                        style={{
                          fontSize: "var(--t-body-s)",
                          color: "var(--muted)",
                        }}
                      >
                        {"units"}
                      </span>
                    </div>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span
                      className="t-mono-s"
                      style={{ color: "var(--muted)" }}
                    >
                      {"8 mo ago"}
                    </span>{" "}
                    <div
                      style={{
                        fontSize: "var(--t-title-l)",
                        fontWeight: "var(--w-medium)",
                        color: "var(--ink)",
                      }}
                    >
                      {"119"}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span
                      className="t-mono-s"
                      style={{ color: "var(--muted)" }}
                    >
                      {"4 mo ago"}
                    </span>{" "}
                    <div
                      style={{
                        fontSize: "var(--t-title-l)",
                        fontWeight: "var(--w-medium)",
                        color: "var(--ink)",
                      }}
                    >
                      {"122"}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span
                      className="t-mono-s"
                      style={{ color: "var(--accent-text)" }}
                    >
                      {"Today"}
                    </span>{" "}
                    <div
                      style={{
                        fontSize: "var(--t-title-l)",
                        fontWeight: "var(--w-medium)",
                        color: "var(--accent-text)",
                      }}
                    >
                      {"128"}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <p
                  style={{
                    margin: "0",
                    fontSize: "var(--t-body-m)",
                    color: "var(--ink-soft)",
                    lineHeight: "var(--lh-relaxed)",
                    paddingTop: "var(--s-3)",
                    borderTop: "1px solid var(--hairline-faint)",
                  }}
                >
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
              </div>{" "}
            </section>{" "}
            <section className="v-screen-section">
              {" "}
              <h2 className="v-screen-section-title">
                {"Your next steps"}
              </h2>{" "}
              <div
                className="m-cta-pair"
                style={{ justifyContent: "flex-start" }}
              >
                {" "}
                <a className="button button-primary" href="care-plan.html">
                  {"Build a sample plan →"}
                </a>{" "}
                <a
                  className="button button-secondary"
                  href="recommendation.html"
                >
                  {"See related recommendations"}
                </a>{" "}
              </div>{" "}
            </section>{" "}
          </div>
        </div>{" "}
      </main>{" "}
    </>
  );
}

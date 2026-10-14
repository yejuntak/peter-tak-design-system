import {
  DemoSearch,
  DemoButton,
  HealthSnapshotFrame,
  LabResultFrame,
  RangeIndicatorFrame,
} from "./shared";
export const pageTitle = "Onboarding · sample snapshot — Vita UI";
export default function OnboardingScreen() {
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
          <span className="v-eyebrow">{"Screen 01 · First session"}</span>{" "}
          <h1 className="v-page-title">{"Your sample snapshot."}</h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <div>
            {" "}
            <p className="v-screen-lede">
              {
                "A curated view of the 3–5 most relevant metrics from your last test. Each value is shown "
              }
              <em>{"in context"}</em>
              {
                " — a range, a trend, and what it means. Full sample values available on demand."
              }
            </p>{" "}
            <p className="v-screen-note">
              <strong>{"Design rule: "}</strong>
              {
                "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
              }
            </p>{" "}
            <div style={{ height: "var(--s-7)" }}></div>{" "}
            <HealthSnapshotFrame className="o-health-snapshot" as="section">
              {" "}
              <header className="o-health-snapshot-head">
                {" "}
                <h2 className="o-health-snapshot-title">
                  {"Snapshot · 5 values to know"}
                </h2>{" "}
                <span className="o-health-snapshot-meta">
                  {"Last test · 4 days ago"}
                </span>{" "}
              </header>{" "}
              <div className="o-health-snapshot-grid">
                {" "}
                <LabResultFrame className="m-lab-result" as="article">
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
                      <span>{"70"}</span>
                      <span>{"125 reference"}</span>
                      <span>{"200"}</span>{" "}
                    </div>{" "}
                  </RangeIndicatorFrame>{" "}
                  <p className="m-lab-result-explanation">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                </LabResultFrame>{" "}
                <LabResultFrame className="m-lab-result" as="article">
                  {" "}
                  <header className="m-lab-result-head">
                    {" "}
                    <h3 className="m-lab-result-name">
                      {"Sample measure C"}
                    </h3>{" "}
                    <span className="m-lab-result-status m-lab-result-status--ok">
                      {"In range"}
                    </span>{" "}
                  </header>{" "}
                  <div className="m-lab-result-value">
                    {" "}
                    <span className="m-lab-result-number">{"58"}</span>{" "}
                    <span className="m-lab-result-unit">{"units"}</span>{" "}
                  </div>{" "}
                  <RangeIndicatorFrame
                    className="m-range-indicator"
                    aria-label="58 units, in the example state range"
                    as="div"
                  >
                    {" "}
                    <div className="m-range-indicator-bar"></div>{" "}
                    <div
                      className="m-range-indicator-marker"
                      style={{ left: "56%" }}
                    ></div>{" "}
                    <div className="m-range-indicator-labels">
                      {" "}
                      <span>{"40"}</span>
                      <span>{"60+ reference"}</span>
                      <span>{"100"}</span>{" "}
                    </div>{" "}
                  </RangeIndicatorFrame>{" "}
                  <p className="m-lab-result-explanation">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                </LabResultFrame>{" "}
                <LabResultFrame className="m-lab-result" as="article">
                  {" "}
                  <header className="m-lab-result-head">
                    {" "}
                    <h3 className="m-lab-result-name">
                      {"Sample measure D"}
                    </h3>{" "}
                    <span className="m-lab-result-status m-lab-result-status--watch">
                      {"Watch"}
                    </span>{" "}
                  </header>{" "}
                  <div className="m-lab-result-value">
                    {" "}
                    <span className="m-lab-result-number">{"132/86"}</span>{" "}
                    <span className="m-lab-result-unit">{"units"}</span>{" "}
                  </div>{" "}
                  <RangeIndicatorFrame
                    className="m-range-indicator"
                    aria-label="132 over 86, slightly elevated"
                    as="div"
                  >
                    {" "}
                    <div className="m-range-indicator-bar"></div>{" "}
                    <div
                      className="m-range-indicator-marker"
                      style={{ left: "52%" }}
                    ></div>{" "}
                    <div className="m-range-indicator-labels">
                      {" "}
                      <span>{"110/70"}</span>
                      <span>{"120/80"}</span>
                      <span>{"140/90"}</span>{" "}
                    </div>{" "}
                  </RangeIndicatorFrame>{" "}
                  <p className="m-lab-result-explanation">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                </LabResultFrame>{" "}
                <LabResultFrame className="m-lab-result" as="article">
                  {" "}
                  <header className="m-lab-result-head">
                    {" "}
                    <h3 className="m-lab-result-name">
                      {"Sample reference"}
                    </h3>{" "}
                    <span className="m-lab-result-status m-lab-result-status--ok">
                      {"In range"}
                    </span>{" "}
                  </header>{" "}
                  <div className="m-lab-result-value">
                    {" "}
                    <span className="m-lab-result-number">{"68"}</span>{" "}
                    <span className="m-lab-result-unit">{"units"}</span>{" "}
                  </div>{" "}
                  <RangeIndicatorFrame
                    className="m-range-indicator"
                    aria-label="68 units, in the example state"
                    as="div"
                  >
                    {" "}
                    <div className="m-range-indicator-bar"></div>{" "}
                    <div
                      className="m-range-indicator-marker"
                      style={{ left: "38%" }}
                    ></div>{" "}
                    <div className="m-range-indicator-labels">
                      {" "}
                      <span>{"50"}</span>
                      <span>{"60–80 typical"}</span>
                      <span>{"100"}</span>{" "}
                    </div>{" "}
                  </RangeIndicatorFrame>{" "}
                  <p className="m-lab-result-explanation">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                </LabResultFrame>{" "}
                <LabResultFrame className="m-lab-result" as="article">
                  {" "}
                  <header className="m-lab-result-head">
                    {" "}
                    <h3 className="m-lab-result-name">
                      {"Sample measure E"}
                    </h3>{" "}
                    <span className="m-lab-result-status m-lab-result-status--attention">
                      {"Low"}
                    </span>{" "}
                  </header>{" "}
                  <div className="m-lab-result-value">
                    {" "}
                    <span className="m-lab-result-number">{"22"}</span>{" "}
                    <span className="m-lab-result-unit">{"units"}</span>{" "}
                  </div>{" "}
                  <RangeIndicatorFrame
                    className="m-range-indicator"
                    aria-label="22 units, below reference range"
                    as="div"
                  >
                    {" "}
                    <div className="m-range-indicator-bar"></div>{" "}
                    <div
                      className="m-range-indicator-marker"
                      style={{ left: "18%" }}
                    ></div>{" "}
                    <div className="m-range-indicator-labels">
                      {" "}
                      <span>{"10"}</span>
                      <span>{"30+ reference"}</span>
                      <span>{"100"}</span>{" "}
                    </div>{" "}
                  </RangeIndicatorFrame>{" "}
                  <p className="m-lab-result-explanation">
                    {
                      "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                    }
                  </p>{" "}
                </LabResultFrame>{" "}
              </div>{" "}
              <footer className="o-health-snapshot-footer">
                {" "}
                <p className="o-health-snapshot-footer-note">
                  {
                    "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                  }
                </p>{" "}
                <a
                  className="button button-secondary"
                  href="lab-interpretation.html"
                >
                  {"View full sample values →"}
                </a>{" "}
              </footer>{" "}
            </HealthSnapshotFrame>{" "}
          </div>
        </div>{" "}
      </main>{" "}
    </>
  );
}

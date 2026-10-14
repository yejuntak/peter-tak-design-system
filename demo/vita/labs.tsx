import {
  DemoSearch,
  DemoButton,
  LabResultFrame,
  RangeIndicatorFrame,
  TrendArrowFrame,
} from "./shared";
export const pageTitle = "Vita UI · Sample measures";
export default function LabsScreen() {
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
            {"sample values · Mar 18, 2022"}
          </span>{" "}
          <h1 className="v-page-title">{"Sample measures"}</h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <section className="v-bento">
            {" "}
            <article className="v-big v-big--dark">
              {" "}
              <span className="v-eyebrow v-eyebrow--on-dark">
                {"All values · Mar 18, 2022"}
              </span>{" "}
              <h2 className="v-big-num">{"12 sample measures"}</h2>{" "}
              <p className="v-big-meta">
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
              <div className="v-biomarker-strip">
                {" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "3" }}
                  title="Sample measure A"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "4" }}
                  title="Sample measure C"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok2"
                  style={{ flexGrow: "2" }}
                  title="Sample measure F"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "5" }}
                  title="Sample measure G"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok2"
                  style={{ flexGrow: "3" }}
                  title="Sample reference"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "4" }}
                  title="Sample measure H"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "3" }}
                  title="WBC"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok2"
                  style={{ flexGrow: "2" }}
                  title="Hematocrit"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--ok"
                  style={{ flexGrow: "4" }}
                  title="Platelets"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--watch"
                  style={{ flexGrow: "2" }}
                  title="Sample measure B"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--watch2"
                  style={{ flexGrow: "2" }}
                  title="Sample measure D"
                ></span>{" "}
                <span
                  className="v-biomarker-seg v-biomarker-seg--low"
                  style={{ flexGrow: "1.5" }}
                  title="Sample measure E"
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
                {"Distribution"}
              </span>{" "}
              <div className="v-dial">
                {" "}
                <svg
                  className="v-dial-svg"
                  viewBox="0 0 100 100"
                  aria-label="Distribution of sample states"
                >
                  {" "}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="hsl(155 30% 35%)"
                    strokeWidth="3"
                  ></circle>{" "}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="hsl(155 70% 70%)"
                    strokeWidth="10"
                    strokeDasharray="197.9 263.9"
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  ></circle>{" "}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="hsl(48 95% 65%)"
                    strokeWidth="10"
                    strokeDasharray="44 263.9"
                    strokeDashoffset="-197.9"
                    transform="rotate(-90 50 50)"
                  ></circle>{" "}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="hsl(280 65% 75%)"
                    strokeWidth="10"
                    strokeDasharray="22 263.9"
                    strokeDashoffset="-241.9"
                    transform="rotate(-90 50 50)"
                  ></circle>{" "}
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    fontFamily="Aeonik"
                    fontSize="18"
                    fontWeight="500"
                    fill="var(--ink)"
                    letterSpacing="-0.5"
                  >
                    {"75%"}
                  </text>{" "}
                  <text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    fontFamily="Geist Mono"
                    fontSize="6"
                    fill="var(--ink-soft)"
                    letterSpacing="0.5"
                  >
                    {"IN RANGE"}
                  </text>{" "}
                </svg>{" "}
                <div className="v-dial-legend">
                  {" "}
                  <div className="v-dial-legend-row">
                    <span
                      className="v-dial-legend-dot"
                      style={{ background: "hsl(155 70% 70%)" }}
                    ></span>
                    <span className="v-dial-legend-label">{"In range"}</span>
                    <span className="v-dial-legend-count">{"9"}</span>
                  </div>{" "}
                  <div className="v-dial-legend-row">
                    <span
                      className="v-dial-legend-dot"
                      style={{ background: "hsl(48 95% 65%)" }}
                    ></span>
                    <span className="v-dial-legend-label">{"Watch"}</span>
                    <span className="v-dial-legend-count">{"2"}</span>
                  </div>{" "}
                  <div className="v-dial-legend-row">
                    <span
                      className="v-dial-legend-dot"
                      style={{ background: "hsl(280 65% 75%)" }}
                    ></span>
                    <span className="v-dial-legend-label">{"Low"}</span>
                    <span className="v-dial-legend-count">{"1"}</span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </article>{" "}
          </section>{" "}
          <section>
            {" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                alignItems: "center",
              }}
            >
              {" "}
              <span className="m-chip" data-active="true">
                {"All"}
              </span>{" "}
              <span className="m-chip">{"Out of range"}</span>{" "}
              <span className="m-chip">{"Watch"}</span>{" "}
              <span className="m-chip">{"Trending up"}</span>{" "}
              <span className="m-chip">{"Trending down"}</span>{" "}
              <span className="m-chip">{"Category A"}</span>{" "}
              <span className="m-chip">{"Sample reference"}</span>{" "}
              <span style={{ flex: "1" }}></span>{" "}
              <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                {"Sort · status"}
              </span>{" "}
            </div>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              <h3 className="v-section-title">{"Worth a look"}</h3>
              <span className="v-section-sub">{"3 sample measures"}</span>
            </div>{" "}
            <div className="v-row-3">
              {" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
                {" "}
                <header className="m-lab-result-head">
                  {" "}
                  <h3 className="m-lab-result-name">
                    {"Sample measure B"}
                  </h3>{" "}
                  <span className="m-lab-result-status m-lab-result-status--watch">
                    {"Watch"}
                  </span>{" "}
                </header>{" "}
                <div className="m-lab-result-value">
                  <span className="m-lab-result-number">{"128"}</span>
                  <span className="m-lab-result-unit">{"units"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  {" "}
                  <div className="m-range-indicator-bar"></div>{" "}
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "64%" }}
                  ></div>{" "}
                  <div className="m-range-indicator-labels">
                    <span>{"0"}</span>
                    <span>{"<100 reference"}</span>
                    <span>{"200"}</span>
                  </div>{" "}
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--up"
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
                  >
                    <polyline points="6 15 12 9 18 15"></polyline>
                  </svg>{" "}
                  <span>{"+9 vs. last test (119)."}</span>{" "}
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
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
                  <span className="m-lab-result-number">{"132/86"}</span>
                  <span className="m-lab-result-unit">{"units"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  {" "}
                  <div className="m-range-indicator-bar"></div>{" "}
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "52%" }}
                  ></div>{" "}
                  <div className="m-range-indicator-labels">
                    <span>{"110/70"}</span>
                    <span>{"120/80 target"}</span>
                    <span>{"140/90"}</span>
                  </div>{" "}
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--up"
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
                  >
                    <polyline points="6 15 12 9 18 15"></polyline>
                  </svg>{" "}
                  <span>{"+8/+6 vs. last test (124/80)."}</span>{" "}
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
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
                  <span className="m-lab-result-number">{"22"}</span>
                  <span className="m-lab-result-unit">{"units"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  {" "}
                  <div className="m-range-indicator-bar"></div>{" "}
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "16%" }}
                  ></div>{" "}
                  <div className="m-range-indicator-labels">
                    <span>{"10"}</span>
                    <span>{"30+ reference"}</span>
                    <span>{"100"}</span>
                  </div>{" "}
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--down"
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
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>{" "}
                  <span>{"−4 vs. last test (26)."}</span>{" "}
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
            </div>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              <h3 className="v-section-title">{"In range"}</h3>
              <span className="v-section-sub">{"9 sample measures"}</span>
            </div>{" "}
            <div className="v-row-3">
              {" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
                {" "}
                <header className="m-lab-result-head">
                  <h3 className="m-lab-result-name">{"Sample measure A"}</h3>
                  <span className="m-lab-result-status m-lab-result-status--ok">
                    {"In range"}
                  </span>
                </header>{" "}
                <div className="m-lab-result-value">
                  <span className="m-lab-result-number">{"94"}</span>
                  <span className="m-lab-result-unit">{"units"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  <div className="m-range-indicator-bar"></div>
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "24%" }}
                  ></div>
                  <div className="m-range-indicator-labels">
                    <span>{"70"}</span>
                    <span>{"100 reference"}</span>
                    <span>{"140"}</span>
                  </div>
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--flat"
                  as="div"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>{"−3 vs. last test (97)."}</span>
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
                {" "}
                <header className="m-lab-result-head">
                  <h3 className="m-lab-result-name">{"Sample measure C"}</h3>
                  <span className="m-lab-result-status m-lab-result-status--ok">
                    {"In range"}
                  </span>
                </header>{" "}
                <div className="m-lab-result-value">
                  <span className="m-lab-result-number">{"58"}</span>
                  <span className="m-lab-result-unit">{"units"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  <div className="m-range-indicator-bar"></div>
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "58%" }}
                  ></div>
                  <div className="m-range-indicator-labels">
                    <span>{"40"}</span>
                    <span>{"60+ reference"}</span>
                    <span>{"100"}</span>
                  </div>
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--flat"
                  as="div"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>{"+1 vs. last test (57)."}</span>
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
                {" "}
                <header className="m-lab-result-head">
                  <h3 className="m-lab-result-name">{"Sample measure F"}</h3>
                  <span className="m-lab-result-status m-lab-result-status--ok">
                    {"In range"}
                  </span>
                </header>{" "}
                <div className="m-lab-result-value">
                  <span className="m-lab-result-number">{"5.4"}</span>
                  <span className="m-lab-result-unit">{"%"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  <div className="m-range-indicator-bar"></div>
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "30%" }}
                  ></div>
                  <div className="m-range-indicator-labels">
                    <span>{"4.0"}</span>
                    <span>{"<5.7 reference"}</span>
                    <span>{"6.5"}</span>
                  </div>
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--down"
                  as="div"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  <span>{"−0.2 vs. last test (5.6)."}</span>
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
                {" "}
                <header className="m-lab-result-head">
                  <h3 className="m-lab-result-name">{"Sample measure G"}</h3>
                  <span className="m-lab-result-status m-lab-result-status--ok">
                    {"In range"}
                  </span>
                </header>{" "}
                <div className="m-lab-result-value">
                  <span className="m-lab-result-number">{"108"}</span>
                  <span className="m-lab-result-unit">{"units"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  <div className="m-range-indicator-bar"></div>
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "36%" }}
                  ></div>
                  <div className="m-range-indicator-labels">
                    <span>{"0"}</span>
                    <span>{"<150 reference"}</span>
                    <span>{"500"}</span>
                  </div>
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--down"
                  as="div"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  <span>{"−14 vs. last test (122)."}</span>
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
                {" "}
                <header className="m-lab-result-head">
                  <h3 className="m-lab-result-name">{"Resting HR"}</h3>
                  <span className="m-lab-result-status m-lab-result-status--ok">
                    {"In range"}
                  </span>
                </header>{" "}
                <div className="m-lab-result-value">
                  <span className="m-lab-result-number">{"68"}</span>
                  <span className="m-lab-result-unit">{"units"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  <div className="m-range-indicator-bar"></div>
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "38%" }}
                  ></div>
                  <div className="m-range-indicator-labels">
                    <span>{"50"}</span>
                    <span>{"60–80 typical"}</span>
                    <span>{"100"}</span>
                  </div>
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--flat"
                  as="div"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>{"−1 vs. last test (69)."}</span>
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
              <LabResultFrame
                className="m-lab-result"
                href="lab-interpretation.html"
                as="a"
              >
                {" "}
                <header className="m-lab-result-head">
                  <h3 className="m-lab-result-name">{"Sample reference"}</h3>
                  <span className="m-lab-result-status m-lab-result-status--ok">
                    {"In range"}
                  </span>
                </header>{" "}
                <div className="m-lab-result-value">
                  <span className="m-lab-result-number">{"2.1"}</span>
                  <span className="m-lab-result-unit">{"units"}</span>
                </div>{" "}
                <RangeIndicatorFrame className="m-range-indicator" as="div">
                  <div className="m-range-indicator-bar"></div>
                  <div
                    className="m-range-indicator-marker"
                    style={{ left: "42%" }}
                  ></div>
                  <div className="m-range-indicator-labels">
                    <span>{"0.4"}</span>
                    <span>{"0.4–4.0 reference"}</span>
                    <span>{"5.0"}</span>
                  </div>
                </RangeIndicatorFrame>{" "}
                <TrendArrowFrame
                  className="m-trend-arrow m-trend-arrow--flat"
                  as="div"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>{"+0.1 vs. last test (2.0)."}</span>
                </TrendArrowFrame>{" "}
              </LabResultFrame>{" "}
            </div>{" "}
          </section>{" "}
          <section>
            {" "}
            <article className="v-card">
              {" "}
              <div className="v-card-head">
                {" "}
                <h3 className="v-card-title">
                  {"3 CBC values hidden by default"}
                </h3>{" "}
                <a className="v-card-link" href="#">
                  {"Show all 12 values"}
                </a>{" "}
              </div>{" "}
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                  margin: "0",
                }}
              >
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
            </article>{" "}
          </section>{" "}
        </div>{" "}
      </main>{" "}
    </>
  );
}

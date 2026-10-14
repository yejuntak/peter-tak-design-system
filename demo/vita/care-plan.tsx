import { DemoSearch, DemoButton, ProgressBarFrame } from "./shared";
export const pageTitle = "Vita UI · sample plan";
export default function CarePlanScreen() {
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
          <a href="care-plan.html" aria-current="page">
            {"sample plan"}
          </a>{" "}
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
          <span className="v-eyebrow">
            {"sample plan · v3 · this quarter"}
          </span>{" "}
          <h1 className="v-page-title">{"Your plan"}</h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <section className="v-bento">
            {" "}
            <article className="v-big v-big--surface">
              {" "}
              <div className="v-doctor-attr">
                {" "}
                <span className="v-doctor-attr-avatar" aria-hidden="true">
                  {"DA"}
                </span>{" "}
                <div>
                  <h3 className="v-doctor-attr-name">{"Demo advisor"}</h3>
                  <p className="v-doctor-attr-role">{"Demo advisor profile"}</p>
                </div>{" "}
              </div>{" "}
              <span className="v-eyebrow">{"March 14, 2022"}</span>{" "}
              <h2 className="v-big-title" style={{ fontSize: "20px" }}>
                {"Sample goals selected by Demo advisor for you"}
              </h2>{" "}
              <p className="v-big-meta">
                {
                  "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                }
              </p>{" "}
              <div className="v-protocol">
                {" "}
                <div className="v-protocol-item">
                  <span className="v-protocol-item-num">{"01"}</span>
                  <div>
                    <h4 className="v-protocol-item-title">
                      {"Review sample item · 3 times"}
                    </h4>
                    <p className="v-protocol-item-meta">
                      {"Example context · linked to a sample item"}
                    </p>
                  </div>
                </div>{" "}
                <div className="v-protocol-item">
                  <span className="v-protocol-item-num">{"02"}</span>
                  <div>
                    <h4 className="v-protocol-item-title">
                      {"Review sample items"}
                    </h4>
                    <p className="v-protocol-item-meta">
                      {"Complete two example sessions"}
                    </p>
                  </div>
                </div>{" "}
                <div className="v-protocol-item">
                  <span className="v-protocol-item-num">{"03"}</span>
                  <div>
                    <h4 className="v-protocol-item-title">
                      {"Sample measure E · example routine"}
                    </h4>
                    <p className="v-protocol-item-meta">
                      {"Review at the next example checkpoint"}
                    </p>
                  </div>
                </div>{" "}
              </div>{" "}
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                {" "}
                <DemoButton className="v-btn-mini v-btn-mini--primary">
                  {"Accept plan"}
                </DemoButton>{" "}
                <DemoButton className="v-btn-mini">
                  {"Adjust frequency"}
                </DemoButton>{" "}
                <DemoButton className="v-btn-mini v-btn-mini--ghost">
                  {"Discuss with Demo advisor"}
                </DemoButton>{" "}
              </div>{" "}
            </article>{" "}
            <article className="v-card">
              {" "}
              <div className="v-card-head">
                {" "}
                <h3 className="v-card-title">{"Adherence"}</h3>{" "}
                <span className="v-card-meta">{"last 28 days"}</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "var(--vs-2)",
                    marginBottom: "var(--vs-1)",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "28px",
                      fontWeight: "500",
                      color: "var(--ink)",
                      letterSpacing: "-0.015em",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {"21"}
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "var(--font-text)",
                      fontSize: "var(--vt-body-s)",
                      color: "var(--ink-soft)",
                    }}
                  >
                    {"of 28 planned activities completed"}
                  </span>{" "}
                </div>{" "}
                <div
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize: "12px",
                    color: "var(--muted)",
                  }}
                >
                  {"Up from 18 of 28 last cycle."}
                </div>{" "}
              </div>{" "}
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--vs-3)",
                }}
              >
                {" "}
                <li>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-text)",
                      fontSize: "var(--vt-body-s)",
                      color: "var(--ink)",
                      marginBottom: "4px",
                    }}
                  >
                    {" "}
                    <span>{"Reviews"}</span>{" "}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--ink-soft)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {"11 / 12"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    style={{
                      height: "3px",
                      borderRadius: "999px",
                      background: "hsl(142 12% 94%)",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        height: "100%",
                        width: "92%",
                        background: "var(--accent)",
                      }}
                    ></div>{" "}
                  </div>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-text)",
                      fontSize: "var(--vt-body-s)",
                      color: "var(--ink)",
                      marginBottom: "4px",
                    }}
                  >
                    {" "}
                    <span>{"Preparation"}</span>{" "}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--ink-soft)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {"8 / 16"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    style={{
                      height: "3px",
                      borderRadius: "999px",
                      background: "hsl(142 12% 94%)",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        height: "100%",
                        width: "50%",
                        background: "var(--accent)",
                      }}
                    ></div>{" "}
                  </div>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-text)",
                      fontSize: "var(--vt-body-s)",
                      color: "var(--ink)",
                      marginBottom: "4px",
                    }}
                  >
                    {" "}
                    <span>{"Sample measure E"}</span>{" "}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--ink-soft)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {"14 / 14"}
                    </span>{" "}
                  </div>{" "}
                  <div
                    style={{
                      height: "3px",
                      borderRadius: "999px",
                      background: "hsl(142 12% 94%)",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        background: "var(--accent)",
                      }}
                    ></div>{" "}
                  </div>{" "}
                </li>{" "}
              </ul>{" "}
            </article>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              <h3 className="v-section-title">{"Your plan, your edits"}</h3>
              <span className="v-section-sub">{"User-defined · editable"}</span>
            </div>{" "}
            <div className="v-row-3">
              {" "}
              <article className="v-card">
                {" "}
                <div className="v-card-head">
                  <h3 className="v-card-title">{"Goal 1 · Reviews"}</h3>
                  <span className="v-card-meta">{"Review"}</span>
                </div>{" "}
                <div>
                  {" "}
                  <span className="v-eyebrow">{"Direction"}</span>{" "}
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--ink-soft)",
                      margin: "4px 0 12px",
                      lineHeight: "1.5",
                    }}
                  >
                    {"Review the next sample item."}
                  </p>{" "}
                  <span className="v-eyebrow">{"Your commitment"}</span>{" "}
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "var(--w-medium)",
                      color: "var(--ink)",
                      margin: "4px 0 0",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {"Review sample item · 3 times"}
                  </p>{" "}
                </div>{" "}
                <ProgressBarFrame
                  className="m-progress-bar"
                  data-completed="11"
                  data-target="12"
                  as="div"
                >
                  {" "}
                  <header className="m-progress-bar-head">
                    <span className="m-progress-bar-count">
                      <strong>{"11 of 12"}</strong>
                      {" this month"}
                    </span>
                  </header>{" "}
                  <div className="m-progress-bar-track">
                    <div
                      className="m-progress-bar-fill"
                      style={{ width: "calc(11 / 12 * 100%)" }}
                    ></div>
                  </div>{" "}
                </ProgressBarFrame>{" "}
                <div style={{ display: "flex", gap: "6px" }}>
                  <DemoButton className="v-btn-mini">{"Edit"}</DemoButton>
                  <DemoButton className="v-btn-mini v-btn-mini--ghost">
                    {"Pause"}
                  </DemoButton>
                </div>{" "}
              </article>{" "}
              <article className="v-card">
                {" "}
                <div className="v-card-head">
                  <h3 className="v-card-title">{"Goal 2 · Preparation"}</h3>
                  <span className="v-card-meta">{"Preparation"}</span>
                </div>{" "}
                <div>
                  {" "}
                  <span className="v-eyebrow">{"Direction"}</span>{" "}
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--ink-soft)",
                      margin: "4px 0 12px",
                      lineHeight: "1.5",
                    }}
                  >
                    {"Review sample items"}
                  </p>{" "}
                  <span className="v-eyebrow">{"Your commitment"}</span>{" "}
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "var(--w-medium)",
                      color: "var(--ink)",
                      margin: "4px 0 0",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {"Prepare five example items"}
                  </p>{" "}
                </div>{" "}
                <ProgressBarFrame
                  className="m-progress-bar"
                  data-completed="8"
                  data-target="16"
                  as="div"
                >
                  {" "}
                  <header className="m-progress-bar-head">
                    <span className="m-progress-bar-count">
                      <strong>{"8 of 16"}</strong>
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
                <div style={{ display: "flex", gap: "6px" }}>
                  <DemoButton className="v-btn-mini">{"Edit"}</DemoButton>
                  <DemoButton className="v-btn-mini v-btn-mini--ghost">
                    {"Pause"}
                  </DemoButton>
                </div>{" "}
              </article>{" "}
              <article className="v-card">
                {" "}
                <div className="v-card-head">
                  <h3 className="v-card-title">{"Goal 3 · Follow-up"}</h3>
                  <span className="v-card-meta">{"Example routine"}</span>
                </div>{" "}
                <div>
                  {" "}
                  <span className="v-eyebrow">{"Direction"}</span>{" "}
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--ink-soft)",
                      margin: "4px 0 12px",
                      lineHeight: "1.5",
                    }}
                  >
                    {"Review the example routine."}
                  </p>{" "}
                  <span className="v-eyebrow">{"Your commitment"}</span>{" "}
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "var(--w-medium)",
                      color: "var(--ink)",
                      margin: "4px 0 0",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {"Sample measure E · example routine"}
                  </p>{" "}
                </div>{" "}
                <ProgressBarFrame
                  className="m-progress-bar"
                  data-completed="14"
                  data-target="14"
                  as="div"
                >
                  {" "}
                  <header className="m-progress-bar-head">
                    <span className="m-progress-bar-count">
                      <strong>{"14 of 14"}</strong>
                      {" this fortnight"}
                    </span>
                  </header>{" "}
                  <div className="m-progress-bar-track">
                    <div
                      className="m-progress-bar-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>{" "}
                </ProgressBarFrame>{" "}
                <div style={{ display: "flex", gap: "6px" }}>
                  <DemoButton className="v-btn-mini">{"Edit"}</DemoButton>
                  <DemoButton className="v-btn-mini v-btn-mini--ghost">
                    {"Pause"}
                  </DemoButton>
                </div>{" "}
              </article>{" "}
            </div>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="v-section-head">
              <h3 className="v-section-title">
                {"Plan activity · last 4 weeks"}
              </h3>
              <span className="v-section-sub">
                {"Each cell = one day · darker = more completed"}
              </span>
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
        </div>{" "}
      </main>{" "}
    </>
  );
}

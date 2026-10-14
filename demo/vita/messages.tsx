import {
  DemoSearch,
  DemoButton,
  DemoTextarea,
  CarePlanFrame,
  DemoSchedule,
} from "./shared";
export const pageTitle = "Vita UI · Messages";
export default function MessagesScreen() {
  return (
    <>
      <style>
        {
          '\n    /* Chat thread layout — scoped to this screen only */\n    .v-thread {\n      display: flex;\n      flex-direction: column;\n      gap: var(--s-3);\n      padding: var(--s-5);\n      background: var(--surface);\n      border: 1px solid var(--hairline);\n      border-radius: var(--r-4);\n      min-height: 420px;\n    }\n    .v-msg {\n      display: flex;\n      gap: var(--s-3);\n      max-width: 70%;\n    }\n    .v-msg--mine { align-self: flex-end; flex-direction: row-reverse; }\n    .v-msg-avatar {\n      width: 32px;\n      height: 32px;\n      border-radius: var(--r-full);\n      background: hsl(210 80% 40%);\n      color: white;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      font-family: var(--font-display);\n      font-size: 11px;\n      font-weight: var(--w-bold);\n      flex-shrink: 0;\n    }\n    .v-msg--mine .v-msg-avatar { background: var(--accent); }\n    .v-msg-bubble {\n      padding: var(--s-3) var(--s-4);\n      background: var(--bg-tinted);\n      border-radius: var(--r-4);\n      border-top-left-radius: 4px;\n      font-family: var(--font-text);\n      font-size: var(--t-body-m);\n      line-height: var(--lh-relaxed);\n      color: var(--ink);\n    }\n    .v-msg--mine .v-msg-bubble {\n      background: var(--accent-soft);\n      color: var(--ink);\n      border-top-left-radius: var(--r-4);\n      border-top-right-radius: 4px;\n    }\n    .v-msg-time {\n      font-family: var(--font-mono);\n      font-size: var(--t-micro);\n      color: var(--muted);\n      margin-top: 4px;\n      letter-spacing: -0.003em;\n    }\n    .v-msg-attachment {\n      margin-top: var(--s-2);\n      padding: var(--s-3);\n      background: var(--surface);\n      border: 1px solid var(--hairline);\n      border-radius: var(--r-2);\n    }\n    .v-msg-attachment-label {\n      font-family: var(--font-mono);\n      font-size: var(--t-micro);\n      color: var(--muted);\n      text-transform: uppercase;\n      letter-spacing: 0.06em;\n      display: block;\n      margin-bottom: 4px;\n    }\n    .v-composer-row {\n      display: flex;\n      gap: var(--s-2);\n      margin-top: var(--s-3);\n      padding: var(--s-3);\n      background: var(--surface);\n      border: 1px solid var(--hairline);\n      border-radius: var(--r-4);\n    }\n    .v-composer-row textarea {\n      flex: 1;\n      resize: none;\n      border: 0;\n      background: transparent;\n      font-family: var(--font-text);\n      font-size: var(--t-body-m);\n      color: var(--ink);\n      padding: 6px;\n    }\n    .v-composer-row textarea:focus { outline: none; }\n    .v-schedule {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n      gap: var(--s-2);\n      margin-top: var(--s-4);\n    }\n    .v-schedule-slot {\n      padding: var(--s-3);\n      background: var(--surface);\n      border: 1px solid var(--hairline);\n      border-radius: var(--r-2);\n      text-align: center;\n      cursor: pointer;\n      transition: border-color 120ms, transform 120ms;\n    }\n    .v-schedule-slot:hover { border-color: var(--accent); }\n    .v-schedule-slot[data-selected="true"] {\n      border-color: var(--accent);\n      background: var(--accent-soft);\n    }\n    .v-schedule-slot-day {\n      font-family: var(--font-mono);\n      font-size: var(--t-micro);\n      text-transform: uppercase;\n      letter-spacing: 0.06em;\n      color: var(--muted);\n      display: block;\n      margin-bottom: 4px;\n    }\n    .v-schedule-slot-time {\n      font-family: var(--font-display);\n      font-size: var(--t-body-l);\n      font-weight: var(--w-medium);\n      color: var(--ink);\n    }\n  '
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
          <a href="messages.html" aria-current="page">
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
          <span className="v-eyebrow">{"Vita UI"}</span>{" "}
          <h1 className="v-page-title">{"Messages"}</h1>{" "}
        </div>{" "}
        <div className="v-content">
          {" "}
          <span className="v-screen-eyebrow">
            {"Messages · demo advisor"}
          </span>{" "}
          <h2 className="v-screen-title">{"Sample reference"}</h2>{" "}
          <p className="v-screen-lede">
            {
              "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
            }
          </p>{" "}
          <div className="v-split">
            {" "}
            <section>
              {" "}
              <div
                className="v-thread"
                aria-label="Conversation with Demo advisor"
              >
                {" "}
                <div className="v-msg">
                  {" "}
                  <span className="v-msg-avatar" aria-hidden="true">
                    {"DA"}
                  </span>{" "}
                  <div>
                    {" "}
                    <div className="v-msg-bubble">
                      {
                        "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                      }
                    </div>{" "}
                    <div className="v-msg-time">{"Today · 9:14 AM"}</div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="v-msg">
                  {" "}
                  <span className="v-msg-avatar" aria-hidden="true">
                    {"DA"}
                  </span>{" "}
                  <div>
                    {" "}
                    <div className="v-msg-bubble">
                      {
                        "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                      }
                      <div className="v-msg-attachment">
                        {" "}
                        <span className="v-msg-attachment-label">
                          {"Attached"}
                        </span>{" "}
                        <span style={{ color: "var(--ink)", display: "block" }}>
                          {
                            "Trend summary · Sample measure B + Sample measure D, 6 months"
                          }
                        </span>{" "}
                        <span
                          className="t-mono-s"
                          style={{ color: "var(--muted)" }}
                        >
                          {"3-page PDF · view in user portal"}
                        </span>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="v-msg-time">{"Today · 9:17 AM"}</div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="v-msg v-msg--mine">
                  {" "}
                  <span className="v-msg-avatar" aria-hidden="true">
                    {"DM"}
                  </span>{" "}
                  <div>
                    {" "}
                    <div className="v-msg-bubble">
                      {
                        "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                      }
                    </div>{" "}
                    <div className="v-msg-time">{"Today · 9:42 AM"}</div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="v-msg">
                  {" "}
                  <span className="v-msg-avatar" aria-hidden="true">
                    {"DA"}
                  </span>{" "}
                  <div>
                    {" "}
                    <div className="v-msg-bubble">
                      {
                        "This fictional reference pairs sample values with context, review states and local actions. It demonstrates reusable components without predicting an outcome."
                      }
                    </div>{" "}
                    <div className="v-msg-time">{"Today · 9:48 AM"}</div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="v-composer-row">
                {" "}
                <DemoTextarea
                  rows={2}
                  placeholder="Reply to Demo advisor…"
                  aria-label="Reply"
                ></DemoTextarea>{" "}
                <DemoButton
                  type="button"
                  className="button button-ghost button-sm"
                  aria-label="Attach"
                >
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 1 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                  </svg>{" "}
                </DemoButton>{" "}
                <DemoButton
                  type="button"
                  className="button button-primary button-sm"
                >
                  {"Send"}
                </DemoButton>{" "}
              </div>{" "}
            </section>{" "}
            <aside
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-3)",
              }}
            >
              {" "}
              <article className="v-advisor">
                {" "}
                <header className="v-advisor-head">
                  {" "}
                  <span className="v-advisor-eyebrow">
                    {"Care advisor"}
                  </span>{" "}
                  <span className="v-advisor-availability">
                    {"Available"}
                  </span>{" "}
                </header>{" "}
                <div className="v-advisor-body">
                  {" "}
                  <div className="v-advisor-who">
                    {" "}
                    <span className="v-advisor-avatar" aria-hidden="true">
                      {"DA"}
                    </span>{" "}
                    <div>
                      {" "}
                      <h3 className="v-advisor-name">{"Demo advisor"}</h3>{" "}
                      <p className="v-advisor-role">
                        {"Example advisor profile"}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--s-2)",
                      fontSize: "var(--t-body-s)",
                      color: "var(--ink-soft)",
                    }}
                  >
                    {" "}
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "var(--muted)" }}>
                        {"Languages"}
                      </span>
                      <span>{"English, 한국어"}</span>
                    </li>{" "}
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "var(--muted)" }}>
                        {"Member since"}
                      </span>
                      <span>{"2019"}</span>
                    </li>{" "}
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "var(--muted)" }}>
                        {"Avg response"}
                      </span>
                      <span>{"2.4 hours"}</span>
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </article>{" "}
              <CarePlanFrame className="o-care-plan" id="schedule" as="article">
                {" "}
                <header className="o-care-plan-head">
                  {" "}
                  <span className="o-care-plan-direction">
                    {"Schedule"}
                  </span>{" "}
                  <h2
                    className="o-care-plan-goal"
                    style={{ fontSize: "var(--t-title-m)" }}
                  >
                    {"3-month follow-up measures"}
                  </h2>{" "}
                  <p className="o-care-plan-goal-source">
                    {"Original date: June 18. Pick a morning slot that works."}
                  </p>{" "}
                </header>{" "}
                <DemoSchedule />{" "}
                <div
                  className="m-cta-pair"
                  style={{ justifyContent: "flex-end" }}
                >
                  {" "}
                </div>{" "}
              </CarePlanFrame>{" "}
            </aside>{" "}
          </div>{" "}
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

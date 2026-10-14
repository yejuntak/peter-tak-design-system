import { describe, it, expect } from "vitest";
import { createElement, type ComponentType } from "react";
import { render } from "@testing-library/react";
import { readFileSync, readdirSync } from "node:fs";
import * as Plot from "../index.js";
import map from "../../docs/component-map.json";
import originalClasses from "../../docs/original-css-families.json";
const all = Plot as unknown as Record<
  string,
  ComponentType<{ children?: string; className?: string }>
>;
const css = readdirSync("css")
  .filter((name) => name.endsWith(".css"))
  .map((name) => readFileSync(`css/${name}`, "utf8"))
  .join("\n");
describe("Complete public migration inventory", () => {
  it.each(map.families)("exports every $originalFamily replacement", (row) => {
    for (const name of row.exports)
      expect(all[name], `${row.originalFamily} → ${name}`).toBeDefined();
  });
  it.each(
    Object.entries({
      CTAPair: "m-cta-pair",
      TagCluster: "m-tag-cluster",
      CalloutArticle: "m-callout",
      Field: "m-field",
      EyebrowTitle: "m-eyebrow-title",
      HeroLedeDiv: "m-hero-lede",
      Breadcrumb: "m-breadcrumb",
      Quote: "m-quote",
      Stat: "m-stat",
      CardHeader: "m-card-header",
      Timeline: "m-timeline",
      FilterRow: "m-filter-row",
      LinkCard: "m-link-card",
      StatusPill: "o-status-pill",
      Hero: "o-hero",
      CaseHero: "o-hero-case",
      ArchetypeCard: "o-card-archetype",
      ProcessSection: "o-process",
      Outcome: "o-outcome",
      ContactGrid: "o-contact-grid",
      TLDR: "o-tldr",
      PlatformTag: "o-platform-tag",
      FeatureGrid: "o-feature-grid",
      FeatureCard: "o-feature-card",
      ArtifactGrid: "o-artifact-grid",
      ArtifactTile: "o-artifact-tile",
      MediaShowcase: "o-media-showcase",
      CompetitorTable: "o-competitor-table",
      PrincipleList: "o-principle-list",
      PersonaGrid: "o-persona-grid",
      SectionDivider: "m-section-divider",
      EmptyState: "m-empty-state",
      Section: "o-section",
      SectionInner: "o-section-inner",
      WorkGroupHeader: "o-work-group-header",
      ClosingCTA: "o-cta",
      MetricGrid: "o-metric-grid",
      MediaRow: "o-media-row",
      MediaReal: "o-media-real",
      MediaPlaceholder: "o-media-placeholder",
      Principle: "o-principle",
      SectionRefs: "o-section-refs",
      CleanList: "o-clean-list",
      ContactCard: "o-contact-card",
      KeyboardHint: "m-keyboard-hint",
      IdentityTemplate: "plot-template--identity",
      CaseStudyTemplate: "plot-template--case-study",
      UtilityTemplate: "plot-template--utility",
      ShowcaseTemplate: "plot-template--showcase",
      FilteredIndexTemplate: "plot-template--filtered-index",
    }),
  )("%s renders its original composition root", (name, className) => {
    const { container } = render(
      createElement(all[name], null, "Example children"),
    );
    expect(container.firstChild).toHaveClass(className);
  });
  it("preserves every original reusable CSS family", () => {
    const classes = new Set(
      css.match(/\.[a-zA-Z_][\w-]*/g)?.map((name) => name.slice(1)),
    );
    expect(originalClasses.filter((name) => !classes.has(name))).toEqual([]);
  });
  it("resolves every existing token JSON handle to a defined CSS property", () => {
    const defined = new Set(
      [...css.matchAll(/(--[\w-]+)\s*:/g)].map((match) => match[1]),
    );
    const handles: string[] = [];
    function walk(value: unknown) {
      if (!value || typeof value !== "object") return;
      for (const [key, child] of Object.entries(value)) {
        if (key === "css" && typeof child === "string") handles.push(child);
        else walk(child);
      }
    }
    for (const file of readdirSync("tokens"))
      walk(JSON.parse(readFileSync(`tokens/${file}`, "utf8")));
    expect(handles.filter((handle) => !defined.has(handle))).toEqual([]);
  });
  it("all ten old entry URLs now mount React instead of a parallel HTML implementation", () => {
    expect(map.routes).toHaveLength(10);
    for (const route of map.routes) {
      const html = readFileSync(route, "utf8");
      expect(html).toContain('id="root"');
      expect(html).toContain("demo/main.tsx");
      expect(html).not.toMatch(/<main|<article|<button/);
      expect(
        readFileSync(
          `demo/vita/${route.split("/").pop()!.replace(".html", ".tsx")}`,
          "utf8",
        ),
      ).not.toContain("dangerouslySetInnerHTML");
    }
  });
  it("keeps screen examples free of inherited engagement and outcome claims", () => {
    const demo = readdirSync("demo/vita")
      .filter((name) => name.endsWith(".tsx"))
      .map((name) => readFileSync(`demo/vita/${name}`, "utf8"))
      .join("\n");
    for (const marker of [
      "engagement constraints",
      "UX Lead engagement",
      "A/B testing",
      "IU/day",
      "typically restores",
      "raw scores never exposed",
      "measurably different patient response",
      "30-day retention",
    ])
      expect(demo).not.toContain(marker);
    expect(demo).toContain("Fictional task-planning reference");
  });
});

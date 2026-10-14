import { readdirSync, readFileSync, existsSync } from "node:fs";
if (!existsSync("evidence/screens")) process.exit(0);
const chosen = readdirSync("evidence/screens").filter(
  (name) =>
    /^chromium-mobile-corrected-(dashboard|labs|messages|care-plan|onboarding|lab-interpretation)\.jpg$/.test(
      name,
    ) ||
    /^chromium-(desktop|mobile)-(catalog-light|catalog-dark|health|recommendation-actions|schedule|filter-wrapped)\.jpg$/.test(
      name,
    ) ||
    /^webkit-mobile-(catalog-dark|health|corrected-dashboard|recommendation-actions|schedule|filter-wrapped)\.jpg$/.test(
      name,
    ),
);
for (const name of chosen) {
  console.log(`PLOT_COMPONENT_IMAGE_BEGIN ${name}`);
  const encoded = readFileSync(`evidence/screens/${name}`).toString("base64");
  for (let i = 0; i < encoded.length; i += 12000)
    console.log(encoded.slice(i, i + 12000));
  console.log(`PLOT_COMPONENT_IMAGE_END ${name}`);
}
console.log(`Recovered ${chosen.length} bounded review images`);

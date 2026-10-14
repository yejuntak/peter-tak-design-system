export interface SearchRecord {
  id: string;
  name: string;
  tier: string;
  summary: string;
  aliases: string;
  body: string;
}
export const normalize = (value: string) =>
  value.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim();
export function search(records: SearchRecord[], query: string): SearchRecord[] {
  const q = normalize(query);
  if (!q) return records.slice();
  const terms = q.split(" ");
  return records
    .map((record, order) => {
      const name = normalize(record.name),
        aliases = normalize(record.aliases),
        summary = normalize(record.summary),
        haystack = normalize(
          [name, aliases, summary, record.body, record.tier].join(" "),
        );
      if (!terms.every((term) => haystack.includes(term))) return null;
      const score =
        (name === q ? 64 : 0) +
        (name.includes(q) ? 32 : 0) +
        terms.reduce(
          (sum, term) =>
            sum +
            (name.includes(term)
              ? 8
              : aliases.includes(term)
                ? 4
                : summary.includes(term)
                  ? 2
                  : 1),
          0,
        );
      return { record, score, order };
    })
    .filter(
      (hit): hit is { record: SearchRecord; score: number; order: number } =>
        hit !== null,
    )
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .map((hit) => hit.record);
}

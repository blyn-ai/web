import React from "react";

/** Mono key/value rows — the registry voice. Values are facts, never sentences. */
export function DefinitionList({ items = [], tone = "paper", style, ...rest }) {
  const onInk = tone === "ink";
  return (
    <dl style={{
      display: "grid", gridTemplateColumns: "auto 1fr", gap: "13px var(--space-8)", margin: 0,
      font: "var(--fs-meta) var(--font-mono)", ...style
    }} {...rest}>
      {items.map(it => [
        <dt key={it.term + "-t"} style={{ color: onInk ? "var(--text-meta-on-ink)" : "var(--text-meta)" }}>{it.term}</dt>,
        <dd key={it.term + "-d"} style={{ margin: 0, color: onInk ? "var(--text-on-ink)" : "var(--text-heading)" }}>
          {it.href ? <a href={it.href} style={{ color: onInk ? "var(--link-on-ink)" : "var(--link)", textDecoration: "none" }}>{it.value}</a> : it.value}
        </dd>
      ])}
    </dl>
  );
}

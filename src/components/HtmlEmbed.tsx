import { useMemo } from "react";

// Zeffy's embed script can't be run reliably when injected from React (it hung the page),
// so Zeffy markup is rendered through its own iframe fallback and all scripts are dropped.
function prepare(html: string): string {
  if (!html.includes("data-zeffy-embed")) return html;
  const doc = new DOMParser().parseFromString(html, "text/html");
  doc.querySelectorAll("script, [data-zeffy-embed]:not([data-zeffy-embed-fallback])").forEach((el) => el.remove());
  doc.querySelectorAll<HTMLElement>("[data-zeffy-embed-fallback]").forEach((el) => {
    el.style.display = "block";
  });
  doc.querySelectorAll<HTMLIFrameElement>("iframe[data-zeffy-embed-src]").forEach((frame) => {
    frame.setAttribute("src", frame.getAttribute("data-zeffy-embed-src") ?? "");
  });
  return doc.body.innerHTML;
}

function HtmlEmbed({ html, className }: { html: string; className?: string }) {
  const content = useMemo(() => prepare(html), [html]);
  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}

export default HtmlEmbed;

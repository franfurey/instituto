import { useEffect } from "react";

export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
    for (const [attribute, key, content] of [
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["name", "twitter:title", title],
      ["name", "twitter:description", description],
    ]) {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.content = content;
    }
  }, [title, description]);
}

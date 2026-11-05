import { useEffect } from "react";
import { useLocation } from "wouter";

const HOME_TITLE = "Instituto NoFront – Novos futuros econômicos";
const HOME_DESCRIPTION = "O Instituto NoFront atua para ampliar a presença e a influência de perspectivas feministas negras e antirracistas nas agendas econômicas no Brasil e no Sul Global.";

export function useSeo(title: string, description: string) {
  const [location] = useLocation();
  useEffect(() => {
    const pageTitle = location === "/" ? HOME_TITLE : title;
    const pageDescription = location === "/" ? HOME_DESCRIPTION : description;
    document.title = pageTitle;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = pageDescription;
    for (const [attribute, key, content] of [
      ["property", "og:title", pageTitle],
      ["property", "og:description", pageDescription],
      ["name", "twitter:title", pageTitle],
      ["name", "twitter:description", pageDescription],
    ]) {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.content = content;
    }
  }, [title, description, location]);
}

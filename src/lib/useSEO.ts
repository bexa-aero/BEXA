import { useEffect } from "react";
import { SITE_URL } from "./constants";

interface SEOOptions {
  title: string;
  description: string;
  /** Route path, e.g. "/teams". Used to build the canonical URL. */
  path: string;
}

/** Create or update <meta name="..."> */
function setNamedMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Create or update <meta property="..."> (Open Graph) */
function setPropertyMeta(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Create or update <link rel="canonical"> */
function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Per-route document title, description, canonical URL, and social share
 * tags. This is a client-rendered SPA, so crawlers that do not execute JS
 * fall back to the static tags in index.html.
 */
export function useSEO({ title, description, path }: SEOOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const image = `${SITE_URL}/og-image.jpg`;

    document.title = title;
    setNamedMeta("description", description);
    setCanonical(url);

    setPropertyMeta("og:title", title);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:url", url);
    setPropertyMeta("og:image", image);

    setNamedMeta("twitter:card", "summary_large_image");
    setNamedMeta("twitter:title", title);
    setNamedMeta("twitter:description", description);
    setNamedMeta("twitter:image", image);
  }, [title, description, path]);
}

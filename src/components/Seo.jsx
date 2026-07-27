import { useEffect } from 'react';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  OG_IMAGE,
  PERSON_SCHEMA,
  SITE_NAME,
  SITE_URL,
  WEBSITE_SCHEMA,
} from '../config/seo.js';

function setMeta(name, content, property = false) {
  if (!content) return;
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = OG_IMAGE,
  type = 'website',
  noindex = false,
  schema,
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('keywords', DEFAULT_KEYWORDS);
    setMeta('author', SITE_NAME);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    setMeta('googlebot', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('geo.region', 'NG');
    setMeta('geo.placename', 'Nigeria');

    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:url', url, true);
    setMeta('og:image', image, true);
    setMeta('og:image:alt', `${SITE_NAME} logo`, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'en_NG', true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
    setMeta('twitter:image:alt', `${SITE_NAME} logo`);

    setCanonical(url);
    setJsonLd('schema-person', PERSON_SCHEMA);
    setJsonLd('schema-website', WEBSITE_SCHEMA);
    if (schema) setJsonLd('schema-page', schema);
    else {
      const pageSchema = document.getElementById('schema-page');
      pageSchema?.remove();
    }
  }, [fullTitle, description, url, image, type, noindex, schema]);

  return null;
}

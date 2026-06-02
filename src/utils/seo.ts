export const SITE_URL = 'https://bibekghimire.com';

export const DEFAULT_TITLE = 'Bibek Ghimire | Product, Growth & Analytics in Technical Spaces';

export const DEFAULT_DESCRIPTION =
  'Product/operator across technical spaces: product, analytics, marketing, CRM/reporting, campaigns, and program work. Best where messy systems need signal, structure, and shipped work.';

export const DEFAULT_IMAGE = '/images/bibek-linkedin.png';

export const PERSON_ID = `${SITE_URL}/#person`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function absoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return new URL(path, SITE_URL).toString();
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Bibek Ghimire',
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_IMAGE),
    jobTitle: 'Product/operator in technical spaces',
    description: DEFAULT_DESCRIPTION,
    email: 'mailto:bibekgh@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colorado Springs',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Oklahoma State University',
    },
    sameAs: [
      'https://www.linkedin.com/in/bibek-ghimire/',
      'https://github.com/ghimbib',
    ],
    worksFor: { '@id': ORGANIZATION_ID },
    knowsAbout: [
      'Product strategy',
      'Growth',
      'Business analytics',
      'CRM reporting',
      'Program management',
      'Workflow systems',
      'AI systems',
      'Industrial systems',
      'Climate tech',
      'Energy technology',
    ],
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Bibek Ghimire',
    url: SITE_URL,
    logo: absoluteUrl('/favicon.svg'),
    image: absoluteUrl(DEFAULT_IMAGE),
    founder: { '@id': PERSON_ID },
    sameAs: [
      'https://www.linkedin.com/in/bibek-ghimire/',
      'https://github.com/ghimbib',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'Bibek Ghimire',
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function webPageSchema({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(DEFAULT_IMAGE),
    },
    inLanguage: 'en-US',
  };
}

export function homepageJsonLd() {
  return [
    personSchema(),
    organizationSchema(),
    websiteSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      mainEntity: { '@id': PERSON_ID },
      isPartOf: { '@id': WEBSITE_ID },
      inLanguage: 'en-US',
    },
  ];
}

export function itemListSchema({
  name,
  path,
  items,
}: {
  name: string;
  path: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: absoluteUrl(path),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(item.url),
      name: item.name,
      description: item.description,
    })),
  };
}

export function articleSchema({
  path,
  title,
  description,
  image,
  datePublished,
  keywords,
  section,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  keywords?: string[];
  section?: string;
}) {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    image: absoluteUrl(image ?? DEFAULT_IMAGE),
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: `${url}#webpage`,
    datePublished,
    dateModified: datePublished,
    articleSection: section,
    keywords,
    inLanguage: 'en-US',
  };
}

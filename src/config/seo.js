export const SITE_URL = 'https://godspowerufot.com';

export const SITE_NAME = 'Godspower Ufot';

export const DEFAULT_TITLE = 'Godspower Ufot | Frontend Engineer & Blockchain Developer';

export const DEFAULT_DESCRIPTION =
  'Godspower Ufot is a Frontend Engineer and EVM Blockchain Developer based in Nigeria. Portfolio of Web2 and Web3 products: React, TypeScript, Solidity, smart contracts, and shipped applications for global teams.';

export const DEFAULT_KEYWORDS = [
  'Godspower Ufot',
  'frontend engineer',
  'blockchain developer',
  'EVM developer',
  'Solidity developer',
  'React developer',
  'TypeScript',
  'Web3 developer',
  'smart contract developer',
  'portfolio',
  'Nigeria developer',
  'remote frontend engineer',
  'DeFi developer',
  'product engineer',
].join(', ');

export const OG_IMAGE = `${SITE_URL}/logo.png`;

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Godspower Ufot',
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: 'Frontend Engineer & Blockchain Developer',
  description: DEFAULT_DESCRIPTION,
  email: 'ufotgodspower8@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
  },
  sameAs: [
    'https://x.com/ufotgodspower8',
    'https://medium.com/@ufotgodspower8',
    'https://github.com/godspowerufot',
  ],
  knowsAbout: [
    'Frontend Development',
    'React',
    'TypeScript',
    'Solidity',
    'EVM',
    'Smart Contracts',
    'Web3',
    'DeFi',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  author: {
    '@type': 'Person',
    name: 'Godspower Ufot',
  },
  inLanguage: 'en',
};

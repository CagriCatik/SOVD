// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Service Oriented Vehicle Diagnostics',
  tagline: 'Bring your Knowledge to another level',
  favicon: 'img/favicon.ico',

  url: 'https://CagriCatik.github.io',
  baseUrl: '/SOVD/',

  organizationName: 'CagriCatik',
  projectName: 'SOVD',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/CagriCatik/SOVD/edit/main/',
          remarkPlugins: [require('remark-math')], // Add remark-math plugin
          rehypePlugins: [require('rehype-katex')], // Add rehype-katex plugin
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/CagriCatik/SOVD/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/sovd.svg',
      navbar: {
        title: '',
        logo: {
          alt: 'SOVD Logo',
          src: 'img/sovd.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'simulationSidebar',
            position: 'left',
            label: 'Simulation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'Diagnostic API',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/CagriCatik/SOVD',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Knowledge Base',
                to: '/docs/category/introduction-to-sovd',
              },
            ],
          },

          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CagriCatik/SOVD',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SOVD`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
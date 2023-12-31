// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hitchhiker's Guide to d00bai",
  tagline: 'a simple guide to moving & living in the uae from d00bai.com',
  favicon: 'img/d00bai.svg',

  // Set the production url of your site here
  url: 'https://guide.d00bai.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'd00bai', // Usually your GitHub org/user name.
  projectName: 'd00bai-guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/reachjason/d00bai-guide/tree/main',
        },
        blog: false, // added to disable blog 
//        {
//          showReadingTime: true,
//          // Please change this to your repo.
//          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/reachjason/d00bai-guidetree/main',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'NKOPONOYYP',
        apiKey: '123c5d484eb583564e43c5479a373fd3',
        indexName: 'guide-d00bai',      
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'd00bai Guide',
        logo: {
          alt: 'd00bai',
          src: 'img/d00bai.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide to Dubai',
          },
          {to: 'https://d00bai.com', label: 'Apply to d00bai', position: 'left'},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/reachjason/d00bai-guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guide',
            items: [
              {
                label: 'Welcome',
                to: '/introduction',
              },
            ],
          },
          {
            title: 'd00bai Community',
            items: [
              {
                label: 'Join d00bai',
                href: 'https://d00bai.com',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/d00bai_',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/d00bai',
              },
            ],
          },
          {
            title: 'More',
            items: [
 //             {
 //               label: 'Blog',
 //               to: '/blog',
 //             },
              {
                label: 'GitHub',
                href: 'https://github.com/reachjason/d00bai-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} d00bai`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JAVA面试',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'java 面试',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: '文档列表',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'javaBaseSidebar',
                label: 'JAVA基础',
              },
              {
                type: 'docSidebar',
                sidebarId: 'netWorkSidebar',
                label: '网络',
              },
              {
                type: 'docSidebar',
                sidebarId: 'algorithmSidebar',
                label: '算法',
              },
              {
                type: 'docSidebar',
                sidebarId: 'operationSystemSidebar',
                label: '操作系统',
              },
              {
                type: 'docSidebar',
                sidebarId: 'mysqlSidebar',
                label: 'mysql',
              },
              {
                type: 'docSidebar',
                sidebarId: 'redisSidebar',
                label: 'redis',
              },
              {
                type: 'docSidebar',
                sidebarId: 'springSidebar',
                label: 'spring',
              },
              {
                type: 'docSidebar',
                sidebarId: 'springBootSidebar',
                label: 'springBoot',
              },
              {
                type: 'docSidebar',
                sidebarId: 'springMvcSidebar',
                label: 'springMvc',
              },
              {
                type: 'docSidebar',
                sidebarId: 'myBatisSidebar',
                label: 'MyBatis',
              },
              {
                type: 'docSidebar',
                sidebarId: 'distributedSidebar',
                label: '分布式',
              },
              {
                type: 'docSidebar',
                sidebarId: 'RPCSidebar',
                label: 'RPC',
              },
              {
                type: 'docSidebar',
                sidebarId: 'zooKeeperSidebar',
                label: 'zooKeeper',
              },
              {
                type: 'docSidebar',
                sidebarId: 'highPerformanceSidebar',
                label: '高性能',
              },
              {
                type: 'docSidebar',
                sidebarId: 'highPerformanceSidebar',
                label: '高可用',
              },
              {
                type: 'docSidebar',
                sidebarId: 'projectSidebar',
                label: '项目',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sceneDesignSidebar',
                label: '场景设计',
              },
              {
                type: 'docSidebar',
                sidebarId: 'kafkaSidebar',
                label: 'kafka',
              },
              {
                type: 'docSidebar',
                sidebarId: 'nettySidebar',
                label: 'netty',
              },
              {
                type: 'docSidebar',
                sidebarId: 'linuxSidebar',
                label: 'linux',
              }
            ]
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

import { themes as prismThemes } from 'prism-react-renderer';

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

const config: Config = {
    title: 'Qupine Documentation',
    tagline: 'Your go-to guide for getting the most out of Qupine ✨.',
    favicon: 'img/favicon.ico',

    // Deployment Configurations
    url: 'https://your-docusaurus-site.example.com',
    baseUrl: '/',
    organizationName: 'qupine',
    projectName: 'docs',
    deploymentBranch: 'main',
    trailingSlash: false,

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/logo.png',
        navbar: {
            title: 'Qupine Docs',
            logo: {
                alt: 'Qupine Logo',
                src: 'img/logo.png',
            },
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Medium',
                            href: '#',
                        },
                        {
                            label: 'Reddit',
                            href: '#',
                        },
                        {
                            label: 'X',
                            href: '#',
                        },
                        {
                            label: 'Instagram',
                            href: '#',
                        },
                        {
                            label: 'LinkedIn',
                            href: '#',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '#',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Qupine/docs',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Qupine Docs`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;

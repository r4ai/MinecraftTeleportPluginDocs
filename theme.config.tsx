import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://minecraft-teleport-plugin-docs.vercel.app' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return {
      title: frontMatter.title || 'MinecraftTeleportPlugin',
      description: frontMatter.description || 'A Minecraft plugin',
      url,
      openGraph: {
        url,
        title: frontMatter.title || 'MinecraftTeleportPlugin',
        description: frontMatter.description || 'A Minecraft plugin',
      },
    };
  },
  head: () => {
    return (
      <>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </>
    );
  },
  logo: <span>Minecraft Teleport Plugin</span>,
  project: {
    link: 'https://github.com/r4ai/MinecraftTeleportPlugin',
  },
  docsRepositoryBase: 'https://github.com/r4ai/MinecraftTeleportPluginDocs',
  footer: {
    text: (
      <span>
        MIT License &copy; 2023 by <a href="https://github.com/r4ai/MinecraftTeleportPluginDocs">rai</a>
      </span>
    ),
  },
};

export default config;

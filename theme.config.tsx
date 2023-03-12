import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
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

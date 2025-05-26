import type { StorybookConfig } from '@storybook/angular';
import * as path from 'node:path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                require('@tailwindcss/postcss')
              ]
            }
          }
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;

import type { StorybookConfig } from '@storybook/nextjs'

const path = require('path')

const config: StorybookConfig = {
  // "staticDirs": ['../public'],
  stories: ['../components/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: async (config) => {
    if (config?.resolve) {
      config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../')
      }
    }
    return config
  }
}
export default config

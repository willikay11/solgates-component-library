module.exports = {
  framework: '@storybook/react-vite',
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  }, '@chromatic-com/storybook'],

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  docs: {
    autodocs: 'tag',
  }
};

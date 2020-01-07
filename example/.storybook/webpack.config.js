module.exports = function({ config }) {
   config.module.rules.push({
      test: /\.stories\.(js|jsx|mdx)?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre'
   })

   return config
}

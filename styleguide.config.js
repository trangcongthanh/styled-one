module.exports = {
  components: 'src/[A-Z]*.js',
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-1'],
              plugins: ['styled-components'],
            },
          },
        },
      ],
    },
  },
}

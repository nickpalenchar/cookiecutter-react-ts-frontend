const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { EnvironmentPlugin } = require('webpack');

module.exports = merge([common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      CI: false
    }, )
  ]
}]);
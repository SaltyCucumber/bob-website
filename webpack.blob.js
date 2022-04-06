const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/blob',
  output: {
    path: path.resolve(__dirname, 'blob'),
    filename: 'polkadon.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: undefined,
});

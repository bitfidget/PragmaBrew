const HtmlWebPackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: [
    '@babel/polyfill', // enables async-await
    './client/src/index.js',
  ],
  mode: 'development',
  output: {
    path: __dirname + '/client/dist/',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: { contentBase: './client/' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/src/index.html',
      filename: './index.html',
    }),
    new LiveReloadPlugin(),
  ],
};

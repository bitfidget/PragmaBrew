'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const open = require('open');
const port_number = 4001;

let target_entry = 'http://localhost:' + port_number + '/';
config.entry.unshift('webpack-dev-server/client?' + target_entry);

new WebpackDevServer(webpack(config), {
  contentBase: 'src',
  hot: true,
  stats: { colors: true },
  publicPath: '/assets/',
}).listen(port_number, 'localhost', err => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + port_number);
  console.log('Opening your system browser...');
  open(target_entry);
});

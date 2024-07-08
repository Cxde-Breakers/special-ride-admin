const webpack = require('webpack');

module.exports = function override(config, env) {
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]);

  return config;
};

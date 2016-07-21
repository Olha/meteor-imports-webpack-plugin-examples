var MeteorImportsPlugin = require('meteor-imports-webpack-plugin');

module.exports = {
  entry: './client/entry.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: /client\//
      }
    ]
  },
  plugins: [
    new MeteorImportsPlugin({
      ROOT_URL: 'http://localhost:3000/',
      DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000/',
      PUBLIC_SETTINGS: {},
      meteorFolder: 'server',
      meteorEnv: {}
    })
  ]
};

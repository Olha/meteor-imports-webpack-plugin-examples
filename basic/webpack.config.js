var MeteorImportsPlugin = require('meteor-imports-webpack-plugin');

module.exports = {
    entry: {
      app: './client/entry.js',
    },
    output: {
      path: './build',
      filename: 'bundle.js'
    },
    plugins: [
      new MeteorImportsPlugin({
        ROOT_URL: 'http://localhost:3000/',
        DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000/',
        PUBLIC_SETTINGS: {},
        METEOR_FOLDER: 'server'
      })
    ]
};

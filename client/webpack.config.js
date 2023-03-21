const nodeExternals = require('webpack-node-externals');

module.exports = {
    // ...
    externals: [nodeExternals()],
    resolve: {
        fallback: {
          path: false,
          util: false,
        },
      },
    // ...
  };
  
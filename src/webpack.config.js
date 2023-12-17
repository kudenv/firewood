const alias = require('./config/alias');

/**
 * @function
 * @param {string} path
 * @returns {string}
 * @private
 */
function _resolve(path) {
  return require('path').resolve(__dirname, path);
}

module.exports = {
    module: {
        rules: [
          {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          }        
        ]
      },
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@@': _resolve('src/.umi'),
      'worker': _resolve('public/worker'),
      'assets': _resolve('public/assets'),
      '__tests__': _resolve('__tests__'),
      ...alias
    }
  }
};

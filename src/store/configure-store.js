if (process.env.NODE_ENV === 'production') {
  // Use commonjs modules because ES6 doesn't support conditional imports.
  module.exports = require('./configure-store.prod');
} else {
  module.exports = require('./configure-store.dev');
}

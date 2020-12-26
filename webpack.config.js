const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './scripts/main.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
  },
}

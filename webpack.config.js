const path = require('path');

module.exports = {
  entry: './dist/app.module.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'add.bundle.js',
  },
};

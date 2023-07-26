const path = require('path');
const { default: EmojiRating } = require('./src/components/EmojiRating');

module.exports = {
  entry: './src/index.js', // Replace 'index.js' with the entry point of your React app
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace 'dist' with the output directory for your bundled code
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Add '.jsx' to the extensions array to support JSX files
  },
};

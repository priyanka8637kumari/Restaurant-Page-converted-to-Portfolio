const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Already added

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    filename: 'bundle.js', // Output JS bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Cleans the output directory before each build
  },
  mode: 'development', // Use 'development' for now
  devServer: {
    static: './dist', // Serve files from 'dist' directory
    open: true, // Automatically open the browser
    hot: true, // Enable hot module reloading
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Match all .css files
        use: ['style-loader', 'css-loader'], // Process CSS files with these loaders
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Match image files
        type: 'asset/resource', // Use Webpack's built-in asset handling
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use the HTML template
      filename: 'index.html', // Output HTML file
    }),
  ],
};

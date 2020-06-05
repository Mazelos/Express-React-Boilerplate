const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?/,   // everything ending with .js or .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'client', 'templates', 'index.html')
    })
  ]
}
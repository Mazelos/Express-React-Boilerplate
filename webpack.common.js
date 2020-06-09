const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client'),
  
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
    new htmlWebpackPlugin({  // will create an html file and take care of linking the proper files
      template: path.resolve(__dirname, 'src', 'client', 'templates', 'index.html')
    })
  ]
}
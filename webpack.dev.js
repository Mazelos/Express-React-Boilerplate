const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: "development",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",  // will inject the css code into the js file
          "css-loader"  
        ]
      }
    ]
  }
});
const merge = require('webpack-merge');
const common = require('./webpack.common');

// Plugins
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: "production",

  optimization: {
    minimizer: [ 
      new optimizeCssAssetsPlugin(), // this is for minimize css
      new terserPlugin()   // minimize the production build of bundle.js
    ]
  },

  plugins: [  
    new miniCssExtractPlugin({ filename: "style.css" })  // will create a file named style.css that will receive all the css extracted from the loader
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader, // will create inject the css code in the css file created.
          "css-loader" 
        ]
      }
    ]
  }
});
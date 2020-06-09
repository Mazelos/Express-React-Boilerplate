const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common');

// Plugins
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contentHash].js'
  },

  optimization: {
    minimizer: [ 
      new optimizeCssAssetsPlugin(), // this is for minimize css
      new terserPlugin()   // minimize the production build of bundle.js
    ]
  },

  plugins: [  
    new miniCssExtractPlugin({ filename: "style.[contentHash].css" }),  // will create a file named style.css that will receive all the css extracted from the loader
    new CleanWebpackPlugin()
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
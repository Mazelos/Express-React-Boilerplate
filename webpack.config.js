const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']   //this will first tranform css in js code and then inject into the DOM
      },
      {
      test: /\.jsx?/,   //this will look for any file ending with 'js' or 'jsx'
      loader: 'babel-loader',
      exclude: /node_modules/,  // i'm not really sure on this ...
      }
    ]
  }
}
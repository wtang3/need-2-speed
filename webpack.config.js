const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const dist = path.join(__dirname, 'dist');

let loaders = [
  {
    test: /\.html$/,
    loader: 'raw-loader',
  },
  {
    test: /\.js?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2017']
    }
  },
  {
    test: /\.s?css$/,
    loader: 'style-loader!css-loader!sass-loader',
  }
];

module.exports = {
  entry: './app/app.js',
  output: {
    path: dist,
    filename: 'main.js',
    publicPath: ''
  },
  devtool: 'source-maps',
  module: {
    rules: loaders
  },
  plugins: [new htmlwebpackplugin({ template: 'app/index.html' })]
};

const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),

  entry: './conllu.js',

  output: {
    publicPath: './',
    filename: 'index.js',
    path: path.resolve(__dirname, '../')
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}

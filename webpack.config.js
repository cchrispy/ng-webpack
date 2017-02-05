module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
}
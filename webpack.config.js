module.exports = {
  entry: {
    index: './src/index/index.js',
    about: './src/about/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};

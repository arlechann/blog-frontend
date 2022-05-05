module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'app.js',
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/.*/, to: 'index.html' }
      ]
    }
  },
};
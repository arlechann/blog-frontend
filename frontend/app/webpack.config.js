module.exports = {
  mode: 'development',
  entry: './src/app.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
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
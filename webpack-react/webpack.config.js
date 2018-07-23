const path = require('path')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve('dist')
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          MinCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../images/[name].[hash:8].[ext]'
            }
          }
        ]
        
      }
    ]
  },
  plugins: [
    new MinCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css[id].css'
    }),
    new HtmlWebpackPlugin({
      file: 'index.html',
      template: 'public/index.html'
    })
  ],
  devServer: {
    port: 3002,
    open: true
  },
  devtool: 'inline-source-map'
}
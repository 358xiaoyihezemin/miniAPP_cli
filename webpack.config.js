const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MinaWebpackPlugin = require('./plugin/MinaWebpackPlugin');
const MinaRuntimePlugin = require('./plugin/MinaRuntimePlugin');
const webpack = require('webpack');
const debuggable = process.env.BUILD_TYPE !== 'release'
module.exports = {
  context: resolve('src'),
  entry: './app.js',
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    globalObject: "wx"
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: "all",
      name: 'common',
      minChunks:2,
      minSize:0
    }
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use:'babel-loader'
      },
             {
               test: /\.(scss)$/,
           include: /src/,
           use: [
             {
               loader: 'file-loader',
               options: {
                 useRelativePath: true,
                   name: '[path][name].wxss',
                   context: resolve('src'),
                 },
          },
           {
             loader: 'sass-loader',
               options: {
                 includePaths: [resolve('src', 'styles'), resolve('src')],
                 },
           },
        ],
       }

    ]
  },
  plugins: [
    new MinaWebpackPlugin(
      {
       scriptExtensions: ['.js'],
       assetExtensions: ['.scss'],
      }
      ),
    new MinaRuntimePlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV:JSON.stringify(process.env.NODE_ENV) || 'develop',
      BUILD_TYPE: JSON.stringify(process.env.BUILD_TYPE) || 'debug'
    }),
    new CopyWebpackPlugin([
      {
        from: '**/*',
        to: './',
        ignore: ['**/*.js', '**/*.scss'],
      },
    ]),
  ],
  mode: debuggable ? 'none':'production',
  devtool: debuggable ? 'inline-source-map' : 'source-map',
}

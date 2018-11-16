const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = (env, argv) => {
    const dev = argv.mode === 'development';
    return ({
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
            limit: 10000,
            name: 'images/[name].[hash:7].[ext]'
        }
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 1000,
            name: 'fonts/[name].[hash:7].[ext]'
        }
    },
    {
        test: /\.(webm|mp4)$/,
        loader: 'file-loader',
        options: {
            name: 'videos/[name].[hash:7].[ext]'
        }
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'JS WEBPACK TUTORIAL',
        template: path.resolve(__dirname, 'src/html/index.ejs'),
    }),
    new MiniCssExtractPlugin({
        filename: dev ? '[name].css' : '[name].[hash].css',
        chunkFilename: dev ? '[id].css' : '[id].[hash].css',
      }),
      new CleanWebpackPlugin(['dist'], {}),
      new ProgressBarPlugin({
        format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        clear: false
      })
    ],
})};
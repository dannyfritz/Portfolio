const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {from: "./src/assets/images/", to: "./assets/images/"},
    ]),
    new HtmlWebpackPlugin({
      title: 'Danny Fritz'
    }),
    new VueLoaderPlugin(),
  ],
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          extensions: ["*.ts", "*.vue"],
          fix: true,
          failOnWarning: true,
          failOnError: true,
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[hash]-[name].[ext]',
              outputPath: 'images/',
            },
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

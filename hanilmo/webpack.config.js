const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env) => {
  return {
    mode: env === 'development' ? 'development' : 'production',
    entry: {
      main: './src/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve('./build'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        favicon: './public/icon.png',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'file-loader',
          options: {
            publicPath: './build/',
            name: '[name].[ext]?[hash]',
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.svg$/,
          use: {
            loader: 'url-loader',
            options: {
              publicPath: './build/',
              name: '[name].[ext]?[hash]',
              limit: 5000, // 5kb 미만 파일만 data url로 처리
            },
          },
        },
      ],
    },
    devServer: {
      host: 'localhost',
      port: 8080,
      overlay: true,
      stats: 'errors-only',
      open: true,
      historyApiFallback: true,
    },
  };
};

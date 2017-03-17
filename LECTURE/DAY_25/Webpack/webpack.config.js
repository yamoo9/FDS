const webpack = require('webpack');
const path    = require('path');

module.exports = {
  // 진입파일 설정
  entry: './app/app.js',
  // 출력파일 설정
  output: {
    // 절대 경로 설정
    path: path.resolve(__dirname, 'dist'),
    // 출력 파일 이름 설정
    filename: 'app.js'
  },
  // 모듈 로더 설정
  module: {
    rules: [
      // babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      // style-loader < css-loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // style-loader < css-loader < sass-loader
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ] // rule
  }, // module

};

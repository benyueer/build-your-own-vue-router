const path = require('path')

module.exports = {
  // 生产模式
  mode: 'development',
  // koa在node环境下运行
  target: 'node',
  entry: path.resolve(__dirname, './src/index.js'),
  // 输出迷路
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    // library: 'MyRouter',
    // libraryTarget: 'var'
  },
  module: {
    // js和ts loader
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, './src')
      },
    ]
  },
}
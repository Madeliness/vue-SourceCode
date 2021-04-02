const path = require('path');

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // publicPath是虚拟打包路径，文件夹不会真正生成，而是在8088端口虚拟生成
      publicPath: 'xuni',
      // 打包出来的文件名,不会真正的物理生成
      filename: 'bundle.js',
    },
    devServer: {
        port: 8080,
        // 静态资源文件夹
        contentBase: 'www'
    }
  };
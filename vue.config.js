const target = {
  dev: {
    hosturl: 'http://192.168.100.37/jiafuyun_api/examh5'
  }
};


module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  runtimeCompiler: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => { },
  configureWebpack: () => { },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 配置自动启动浏览器
    port: 8103, // 端口号
    https: false,
    hotOnly: false, // https:{type:Boolean}
    proxy: { // 配置多个代理
      '/examh5': {
        target: target.dev.hosturl,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/examh5': ''
        }
      }

    }

  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}

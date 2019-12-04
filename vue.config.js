const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    host: 'localhost',
    port: 8200,
    proxy: {
      '/api': {
        target: 'http://localhost:8124',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/musicApi': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/musicApi': '/'
        }
      }
    }
  },

  lintOnSave: false,
  productionSourceMap: true,
  // 别名(alias)配置
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  // svg-loader

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  }
}

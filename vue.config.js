const path = require('path')
const fs = require('fs')
const resolve = dir => path.join(__dirname, dir)

/**
 * 生成注册页面对象
 */
const registerPages = () => {
  let registerObjects = {}
  fs.readdirSync(resolve('src/pages')).forEach(pageName => {
    registerObjects[pageName] = {
      entry: [`src/pages/${pageName}/index.js`],
      filename: `src/pages/${pageName}/index.html`,
      template: 'src/index.html',
      // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '广西机电职业技术学院',
      inject: 'body'
    }
  })
  return registerObjects
}

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.optimization.splitChunks = {
      chunks: 'async',
      name: "common",
      minChunks: Infinity,
        // (随着 entry chunk 越来越多，
        // 这个配置保证没其它的模块会打包进 vendor chunk)
    }
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/lib/common.scss";`
      },
    }
  },
  pages: registerPages()
}
module.exports = {
  /**
   * 如果需要转发请求，可配置`proxy`项，否则可忽略
   */
  proxyConfig: {
    '/path/api': {
      target: 'http://111.22.333.4',
      changeOrigin: true
    }
  },
  /**
   * renderData里的数据是用来渲染ejs模板文件用的
   */
  renderData: {
    seo: {
      title: '滕运锋的前端简历',
      description: '滕运锋的前端开发工程师简历',
      keywords: ['简历', '前端', '滕运锋']
    }
  }
}

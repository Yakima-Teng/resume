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
      title: '页面标题',
      description: '网站描述',
      keywords: ['关键词1', '关键词2']
    }
  }
}

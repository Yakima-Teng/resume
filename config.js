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
    },
    sections: {
      // 求职意向
      intention: '3年开发经验，期望薪资20-25k*13，外包项目勿扰，希望可以带3~10人团队',
      // 基本信息
      profile: [
        { text: '户籍：浙江永嘉', widthPercentage: 'three' },
        { text: '出生：1991年8月', widthPercentage: 'three' },
        { text: '民族：汉族', widthPercentage: 'three' },
        { text: `手机：${[9856, 5801, 184].reverse().join('-')}`, widthPercentage: 'three' },
        { text: '微信：OrzZone', widthPercentage: 'three' },
        { text: `邮箱：<a href="mailto:${['veryplans', 'gmail.com'].join('@')}">${['veryplans', 'gmail.com'].join('@')}</a>`, widthPercentage: 'three' },
        { text: 'GitHub：<a href="https://github.com/Yakima-Teng" target="_blank">https://github.com/Yakima-Teng</a>', widthPercentage: 'two' },
        { text: 'Blog：<a href="http://www.orzzone.com" target="_blank">http://www.orzzone.com</a>', widthPercentage: 'two' },
        { text: 'Readings：<a href="https://book.douban.com/people/cleveryun/" target="_blank">https://book.douban.com/people/cleveryun/</a>', widthPercentage: 'one' },
        { text: '2009 - 2013: 毕业于沈阳药科大学药学（食品药学方向）专业；一本，有过跳级、保送经历，持有CET-6证书', widthPercentage: 'one' }
      ],
      // 技能描述
      skills: [
        [
          '熟悉React和Vue，注重组件和函数的封装，以减少代码冗余，提高后续开发效率和代码的可维护性。'
        ],
        [
          '喜欢用node + gulp/webpack等第三方npm包做一些利于提高代码质量/效率、简化开发流程的事情，',
          '或者写些小工具，例如：转发请求、不同环境场景下区别化打包、自动全刷/局刷页面、数据模拟、SFTP协议上传文件、自动SSH登入服务端运行命令启动服务端node服务、sass/less编译、ES6+/flow/typescript转译、利用phantomJS批量对需要用第三方插件渲染公式的页面进行网页截图等。',
        ],
        [
          '熟练手写CSS样式，熟悉flex布局、响应式设计（媒体查询、rem单位），能较好地对设计稿进行还原。',
          '熟悉ES常用新特性。',
          '能独立在服务器上安装部署Nginx/Apache、Node、MySQL服务，Node+MySQL写过简单的博客前台，曾有两个月参与过公司的java项目开发（并非全栈，接触过一些后端的东西的话，接口联调会比较顺）。'
        ]
      ],
      // 项目经验
      projects: [
        {
          title: '掌上基金APP、储蓄罐APP',
          tags: ['hybrid app'],
          skills: ['react', 'react-router', 'redux'],
          description: [
            '技术栈：React全家桶。',
            '非独立开发，参与时间半年左右，期间将一个React项目的build编译时间由原先的两三分钟缩减到20秒内，非首次编译可以到10s以内，全量包大小（压缩后）由4.3M缩减为1.3M，常规增量包大小由动不动就全量包大小到基本不超过200K。'
          ]
        },
        {
          title: '车保赢公众号',
          tags: ['微信公众号'],
          skills: ['vue', 'vue-router', 'vuex'],
          description: [
            '技术栈：script标签引入Vue =>webpack+Vue1 全家桶=> webpack+Vue2全家桶。',
            '独立开发维护了两年左右的一个车险投保报价微信公众号项目，对应有个PC管理系统。'
          ]
        },
        {
          title: '太保寿险APP',
          tags: ['原生app'],
          skills: ['flow', 'react-native', 'redux'],
          description: [
            '技术栈：React Native。',
            '外包项目，非独立开发，参与时间较短（3个月），使用flow进行类型检查。'
          ]
        },
        {
          title: '寻单王APP',
          tags: ['hybrid app'],
          skills: ['typescript', 'vue', 'vue-router', 'vuex'],
          description: [
            '技术栈：Vue2全家桶+typescript。',
            '之前是传统jquery项目，用两周时间独立重构的项目，使用HBuilder打包APP。'
          ]
        },
        {
          title: 'GitHub项目',
          tags: ['Mock工具', '项目脚手架', 'SSR', 'JS工具方法库', '单元测试'],
          skills: ['node'],
          description: [
            'jmock（一个命令行工具，可以方便地在已有项目中集成数据mock服务）。',
            'utils-daily（工作中常用函数的封装，用jasmine做了单元测试,，借助tree-shaking尽可能地减小了库文件的大小）。',
            'djax-cli（参考了vue-cli v2版本的实现，可以快速的创建多页面静态站点，如一些简单的企业站）。',
            '本地服务端渲染，PM2部署'
          ]
        }
      ],
      // 工作经验
      jobs: [
        '高级H5开发工程师@好买财富管理股份有限公司（上市公司，腾讯系基金销售公司）| 2018年9月至今',
        '前端开发工程师 @ 北京无线天利有限公司上海分公司（上市公司）| 2015.12 – 2018.08',
        '国际药品注册专员 @ 浙江普洛康裕制药有限公司（上市公司）| 2013.10 – 2015.07',
        '符合以下条件的公司未列入：与前端无关且任职时间小于3个月的、或与前端有关但任职时间小于1个月的'
      ]
    }
  }
}

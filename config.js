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
          '或者写些小工具，例如：转发请求、不同环境场景下区别化打包、自动全刷/局刷页面、数据模拟、SFTP协议上传文件、自动SSH登入服务端运行命令启动服务端node服务、sass/less编译、ES6+/flow/typescript转译、利用phantomJS批量对需要用第三方插件渲染公式的页面进行网页截图等、pm2部署node项目。',
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
          title: '微信公众号',
          tags: ['微信JSSDK'],
          description: [
            '微信公众号名为“车保赢”，<strong class="highlight">独立开发维护</strong>了两年的一个项目，最开始接手前该项目使用angular1，接手后由最初的使用“script标签引入Vue”=>“webpack+Vue1全家桶”=>“webpack+Vue2全家桶”，这些重构过程都是主动自发进行的。',
            '该项目为一个车险投保报价项目，微信端用户输入车牌号后可查询上年度车险投保情况，然后可在线更改险种进行报价下单，对应有个PC端管理系统去管理订单的状态、excel报表的导出。'
          ]
        },
        {
          title: '混合APP（hybrid APP）',
          tags: ['react全家桶', 'vue全家桶', 'typescript'],
          description: [
            '掌上基金APP、储蓄罐APP：各大应用市场可下载，原生部分由iOS、android开发负责，H5部分由我们团队负责，非独立开发，参与时间半年左右，期间将一个React项目的build编译时间由原先的两三分钟缩减到20秒内，非首次编译可以到10s以内，全量包大小（压缩后）由4.6M缩减为1M，常规增量包大小由动不动就全量包大小到基本不超过200K。',
            '寻单王APP：可进腾讯应用宝或在http://www.xundanwang.com官网扫二维码下载，APP为使用HBuilder云打包构建而成，该项目之前为传统jquery项目，入职该司后用两周时间<strong class="highlight">独立</strong>对该项目进行了重构，使用了typescript、vue、vue-router、vuex，并与PHP开发一起完成了支付宝、微信支付功能。'
          ]
        },
        {
          title: '原生APP',
          tags: ['flow', 'react-native', 'redux'],
          description: [
            '此为外包项目，APP名为“人寿保险”，离职那会太平洋保险正在弄超级APP（将多个独立APP并为一个APP），现在搜了下要搜“太平洋保险”这个APP了，进入主屏后有个“人寿保险”的图标，点进去即为以前的“人寿保险”APP。',
            '此项目非独立开发，参与时间较短（3个月），使用flow进行类型检查，使用react-native开发，与iOS、android开发人员进行配合。'
          ]
        },
        {
          title: 'GitHub项目、NPM包',
          tags: ['Mock', '脚手架', 'SSR', '方法库', '单元测试'],
          description: [
            'jmock：命令行工具，全局安装后可以方便地在已有项目中集成数据mock服务，目前正在写第二版——打算用typescript重写并集成mockjs包的功能，因为作者好像不太维护那个包了。',
            'utils-daily：常用函数的封装，用jasmine做单元测试，用flow做类型判断，借助rollup的tree-shaking减小库文件体积，借助JSDoc根据函数注释自动生成API文档。',
            'djax-cli：命令行工具，参考了vue-cli v2版本的实现，可以快速的创建多页面静态站点，如一些简单的企业站。',
            'lookjavascript：一本前端电子书，使用gitbook根据markdown文章生成，写这本书的过程中出于定制的需要写了gitbook-plugin-theme-code、gitbook-plugin-folding-chapters两个gitbook插件。'
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

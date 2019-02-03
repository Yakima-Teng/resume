# resume

> 这是我的个人简历，但是设计项目代码的时候完全是对标日常专题活动页来设计的，所以完全可以fork过去做日常小活动项目的开发用。

## 设计原则

- 支持日常一些简单的专题活动页开发。
- 支持一些效果比较好的H5广告营销页开发。
- 尽可能地对搜索引擎友好。
- 页面加载速度较快（在兼顾开发效率的情况下）。
- 方便各公司、个人在此基础上进行定制。
- 针对简历demo：页面清新朴素，A4纸打印效果友好，兼容IE8，适配移动端。

具体的涉及思路可以参考这里：[设计原则](./docs/设计原则.md)。

## 使用方法

```bash
# 将`<project-name>`替换成具体的项目名
git clone https://github.com/Yakima-Teng/resume.git <project-name>
```

- 本地开发：`npm run start`。
- 编译供生产环境使用的静态文件：`npm run build`。
- 将编译产物部署到服务器上：`npm run deploy`。
- 检查项目代码（仅提供空脚本，具体由各位决定是否需要实现，以及具体如何实现）：`npm run lint`。

## src目录约定

注：下文中的“配置文件”指的是项目根目录下的`config.js`文件，`config`对象指的是配置文件所导出的对象。

- `*.ejs`：脚本会依据`config.renderData`里的数据来渲染这些ejs模板文件到`dist`目录中，并将文件后缀名更换为`.html`。
- `js`：[js目录说明](./src/js/README.md)。
- `css`：[css目录说明](./src/css/README.md)。
- `static`：[static目录说明](./src/static/README.md)。

## lib收藏库

项目根目录下的`lib`目录里存放的是一些平时页面开发中经常用到的一些JS库，如果你需要用到其中的某些库，把对应的具体文件拷贝到`src/static`目录下即可。

## License

[MIT License](./LICENSE)

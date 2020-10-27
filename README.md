<h1 align="center"><a href="https://nicelinks.site?utm_source=github-nicelinks"><img src="https://image.nicelinks.site/nice-links-logo.png" alt="倾城之链 | NICE LINKS"></a></h1>

<div align="center">
  <strong>
    🌌 基于 Web Component 编写、Rollup 构建的微组件，用以方便在其他网页插入，从而推广个人产品：<a href="https://nicelinks.site?utm_source=github-nicelinks">倾城之链</a>
  </strong>
</div>

<br>

<div align="center">
  <a href="https://github.com/nicejade/nicelinks-vue-client">
    <img src="https://img.shields.io/github/license/nicejade/micro-web-component.svg" alt="LICENSE">
  </a>
  <a href="https://about.me/nicejade"><img src="https://img.shields.io/badge/Author-nicejade-%23a696c8.svg" alt="Author nicejade"></a>
</div>

## 目标与哲学

Web Component 是一种创建**封装的**、**可复用的**、可扩展的、能组合的网页UI (user interface) 组件的标准化方式。Web 开发者们，通过插件或者模块的形式，在网上分享自己的代码，便于其他开发者们复用这些优秀的代码。相对于 [Vue](https://nicelinks.site/post/5b1a221c0526c920d6dfaada)、[React](https://nicelinks.site/post/5b1294b5e93ed2618cfac134)，具有更简单的 API，以及更小的构建尺寸。因此，有开发一个简单微组件（Web Component 编写、Rollup 构建、jsDelivr 承载），用以方便在其他网页中插入，从而推广个人产品：<a href="https://nicelinks.site?utm_source=github-nicelinks">倾城之链</a>。

## 如何使用

引入 js 资源：
```js
<script src="https://cdn.jsdelivr.net/gh/nicejade/micro-web-component@2.0/dist/miniapp-code-entry-min.js"></script>
```

在合适的位置添加组件：
```html
<miniapp-code-entry 
  alt="倾城之链"
  src="https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg\?imageView2/1/w/250/h/250/interlace/1/ignore-error/1">
</miniapp-code-entry>
```

在线示例效果，请参见[静轩之别苑](https://quickapp.lovejade.cn/)。

## 如何访问[「倾城之链」](https://nicelinks.site?utm_source=github.com)

* **WEB 浏览器**：为便捷用户访问，有为[「倾城之链」](https://nicelinks.site?utm_source=github.com)注入 [Pwa](https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/pwa-tutorial.md) 部分功能，您可通过现代浏览器访问 [https://nicelinks.site](https://nicelinks.site?utm_source=github.com) （推荐使用 `Chrome`），可将其“**添加至主屏幕**”，它将为您创建与原生应用类似的桌面图标，以供您下次可便捷且快速打开。

> **备注**：当您在移动设备浏览器点击“**添加到主屏幕**”后，如未得到预期结果，需要您主动进行设置；可在设备`设置`项，找到`权限管理`，进而开启“**桌面快捷方式**”权限即可；这在不同供应商的手机设备间，步骤会有所差别。

* **快应用**：目前[倾城之链(快应用版)](https://github.com/nicejade/nicelinks-quick-app)已在 `OPPO`、`vivo`、`小米`、`魅族`等平台上线；如果您使用 `Android` 手机，可以在*应用商店*、_负一屏_、*浏览器*等场景搜索`倾城之链`，便可**秒开**使用，亦可保存在桌面；也可以在手机[倾城之链(网页版)](https://nicelinks.site?utm_source=github.com)，点击**快应用中打开**即可(仅限于已上线平台)；未上线平台机型，可参见[倾城之链 - 快应用版](https://github.com/nicejade/nicelinks-quick-app#倾城之链快应用版)，下载[快应用调试器](https://github.com/nicejade/awesome-quickapp#调试器下载)扫码体验。

* **小程序**：在初步完成 Web、「快应用」等版本蛮久以后，最近（2019.10）有基于 `mpvue` 构建了[微信「小程序」版本](https://github.com/nicejade/nicelinks-miniprogram)，通过微信扫码、或者在微信搜索「倾城之链」即可访问。

<div align="center">
  <img src="https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg" width="300px" alt="倾城之链小程序码"></img>
</div>

* **桌面应用**：如果您想在 `MacOS`, `Windows` 或 `Linux` 中，获得更快捷的访问体验，您可以通过 [Nativefier](https://github.com/jiahaog/nativefier)（使任何网页成为桌面应用程序的一个命令行工具），轻松创建桌面版[「倾城之链」](https://nicelinks.site?utm_source=github.com)应用，只需运行以下命令即可：

```bash
npm install nativefier -g
nativefier --name "倾城之链" "https://nicelinks.site/"
```

**备注**：如果您使用最新版本的 Chrome，用其访问 [https://nicelinks.site](https://nicelinks.site?utm_source=github.com) ，在地址栏的末尾，点击 `⊕` 符号，即可快速生成桌面版本「倾城之链」；而且，这这个独立应用中，浏览器插件扩展都在；除此外，浏览器上涉及的[倾城之链](https://nicelinks.site?utm_source=github.com)的外链，也可以右键选择在这个桌面应用中打开，NICE。

## 加入[倾城之链](https://nicelinks.site/?utm_source=github.com)群聊

经过近两年的设计，[倾城之链](https://nicelinks.site/?utm_source=github.com)目前已趋于稳定；后面将持续迭代，使其拥有[更丰富的功能](https://github.com/nicejade/nicelinks-vue-client/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Afunction)、以及更棒的体验。现创建[倾城之链](https://nicelinks.site/?utm_source=github.com)微信、QQ 群（`984154031`），将会不定期分享最新收录的优质网站；如果您感兴趣，不妨考虑加入；另外，您对`倾城之链`有任何意见或建议，也可以通过该群向我反馈。加群具体方式，请参见[加入倾城之链群聊](https://nice.lovejade.cn/zh/application/#加入倾城之链群聊)。

## 相关链接

* [**倾城之链**](https://nicelinks.site?utm_source=github-nicelinks)
* [About Me](https://about.me/nicejade?utm_source=github-nicelinks)
* [个人博客](https://jeffjade.com/nicelinks?utm_source=github-nicelinks)
* [静轩之别苑](https://quickapp.lovejade.cn/?utm_source=github-nicelinks)
* [静晴轩别苑](https://nice.lovejade.cn/?utm_source=github-nicelinks)
* [吾意静晴轩](https://docz.lovejade.cn/?utm_source=github-nicelinks)
* [天意人间舫](https://blog.lovejade.cn/?utm_source=github-nicelinks)
* [新浪微博](https://weibo.com/jeffjade?utm_source=github-nicelinks)
* [知乎主页](https://www.zhihu.com/people/yang-qiong-pu/)
* [简书主页](https://www.jianshu.com/u/9aae3d8f4c3d)
* [SegmentFault](https://segmentfault.com/u/jeffjade)
* [Twitter](https://twitter.com/nicejadeyang)
* [Facebook](https://www.facebook.com/nice.jade.yang)

| 微信公众号 | 前端微信群 | 推荐 Web 应用 |
| --- | --- | --- |
| 😉 静晴轩 | ✨ 大前端联盟 | 🎉 倾城之链 |
| ![静晴轩](https://image.nicelinks.site/qrcode_jqx.jpg) | ![倾城之链](https://image.nicelinks.site/wqycx-weixin.png?ver=1) |<img src="https://image.nicelinks.site/nice-links.png" width="300px" alt="倾城之链"></img>|

## 许可执照

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [nicejade](https://aboutme.lovejade.cn/)

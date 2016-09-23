## wecanstudio-site
纯 JavaScript 实现的 Web App，使用 ES2015。
主页内容需要修改，未正式上线，现在提供一个测试地址。
所有的文章（包括“关于”、“招新”）都可以在浏览器直接编辑。（具体怎么做，看代码吧～）

[Test URL](wecanstudio.xhinliang.com)

### 简介

#### 前端
前端路由，一个单页应用（SPA）。
响应式界面，用户友好。
`Vue` + `Vuex` + `Vue-router` 主框架，状态管理，前端路由

`Express` + `Babel` + `Webpack` 代码即时刷新，即写即见，连 F5 都不需要了～

#### 后端
`Express` 主框架
其实这个算不上框架层面的东西，因为 `Express` `Koa` 之流的怎么写都是很随意的，这里沿用了我写 `PHP` 的习惯。
`MongoDB` 数据库
整个的数据都是 JSON ，所以用 `MongoDB` 肯定是最佳选择（这里没有考虑并发等因素）。
`Express-mailer` 邮件
因为需要做招新，所以邮件通知很有必要，这个库非常棒，谁用谁知道。

### 构建
#### 核心
首先你需要安装 `Node.js` `NPM` `MongoDB`，具体安装过程找官网吧！
- [Node.js & NPM](https://nodejs.org)
- [MongoDB](https://www.mongodb.com/)

#### 下载项目，更新依赖
```
git clone git@github.com:WecanStudio/wecanstudio-site.git
cd wecanstudio-site/fontend && npm install && cd ../backend && npm install
```

#### 后端
- 运行 `npm start`
- 备份 `npm run backup`
- 恢复 `npm restore`

#### 前端
- 开发 `npm run dev`
- 构建 `npm run build`

### 更多
- XhinLiang => xhinliang@gmail.com

### 感谢
- [Qiutc](https://github.com/TongchengQiu)

### License
```
MIT License

Copyright (c) 2016 微客工作室

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## wecanstudio-site
[中文](https://github.com/WecanStudio/wecanstudio-site/blob/master/README-CN.md)

Pure JavaScript Web App.

Using ES2015 and Babel.

All of the posts can be edit in browser.

[Test URL](wecanstudio.xhinliang.com)

### Intro

#### FontEnd
`Vue` + `Vuex` + `Vue-router` for main framework.
`Express` + `Babel` + `Webpack` for hot middleware in develop.

#### BackEnd
`Express` for main framework.
`MongoDB` for database.
`Express-mailer` for Email.

### Build
#### Core
[Node.js & NPM](https://nodejs.org)
[MongoDB](https://www.mongodb.com/)

#### Clone and install dependencies
```
git clone git@github.com:WecanStudio/wecanstudio-site.git
cd wecanstudio-site/fontend && npm install && cd ../backend && npm install
```

#### BackEnd
- Run `npm start`
- Backup MongoDB to file `npm run backup`
- Restore MongoDB from file `npm run restore`

#### Fontend
- Hot dev `npm run dev`
- Build `npm run build`

### More
- XhinLiang => xhinliang@gmail.com

### Thanks
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

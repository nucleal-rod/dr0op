(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{29:function(i,t,a){"use strict";var s=a(4),n=a.n(s);t.a=function(i,t){n()("."+i).attr("active","no"),n()("."+i+"."+t).attr("active","yes")}},30:function(i,t,a){"use strict";var s=a(4),n=a.n(s);t.a=function(i,t){t=t||0,i=i||document.documentElement;var a=function(){var i=window.location.href.split("?")[1]||"";if(""==i)return{};var t=i.split("&"),a={};return t.forEach((function(i){var t=i.split("=");a[t[0]]=t[1]})),a}().fixed;if(a){var s=n()("#fixed-"+a);if(s.length>0){var r=s[0].offsetTop-t,e=i.scrollTop||0;n.a.animation((function(t){i.scrollTop=(r-e)*t+e}),500,(function(){i.scrollTop=r}))}}else i.scrollTop=0}},31:function(i){i.exports=JSON.parse('{"name":"image2d","version":"1.8.9","description":"🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.","main":"build/image2D.min.js","scripts":{"start":"npm install && npm run build","build":"npm run build:init && npm run build:bundle && npm run build:babel && npm run build:uglifyjs && npm run build:end","build:init":"cuf --config ./cuf.config.js init","build:end":"cuf --config ./cuf.config.js end","build:bundle":"cuf --config ./cuf.config.js bundle","build:babel":"cuf --config ./cuf.config.js babel","build:uglifyjs":"cuf --config ./cuf.config.js uglifyjs","server":"cuf --server 30000"},"keywords":["image","algorithm","svg","canvas","tree","js"],"repository":{"type":"git","url":"git+https://github.com/yelloxing/image2D.git"},"author":"心叶(yelloxing@gmail.com)","license":"MIT","bugs":{"url":"https://github.com/yelloxing/image2D/issues"},"homepage":"https://yelloxing.github.io/image2D/index.html","devDependencies":{"@yelloxing/core.js":"^0.3.7","babel-core":"^6.26.0","babel-plugin-transform-class-properties":"^6.24.1","babel-preset-es2015":"^6.24.1","cuf":"^1.2.0","rollup":"^1.17.0","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-node-resolve":"^5.2.0","uglify-js":"^3.5.6"}}')},54:function(i,t,a){var s=a(55);"string"==typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);(0,a(2).default)("data-icrush-47126b6d",s,!0)},55:function(i,t,a){(i.exports=a(1)(!1)).push([i.i,"",""])},72:function(i,t,a){"use strict";a.r(t);var s=a(29),n=a(30),r=a(31),e={data:function(){return{version:r.version,CDN:{noVersion:'<script src="https://cdn.jsdelivr.net/npm/image2d"><\/script>',version:'<script src="https://cdn.jsdelivr.net/npm/image2d@'+r.version+'"><\/script>'}}},created:function(){Object(s.a)("menu-2","install")},mounted:function(){prettyPrint(),Object(n.a)(document.getElementById("course-id"),44)}};a(54);e.render=function(i){return i("div",{class:"course-view","data-icrush-47126b6d":""},[i("header",{id:"fixed-top","data-icrush-47126b6d":""},["安装"]),i("h2",{id:"fixed-compatibility","data-icrush-47126b6d":""},["兼容性"]),i("p",{"data-icrush-47126b6d":""},["image2D 不支持 IE9 以下版本（IE9支持），因为 IE9 以下对",i("a",{href:"https://caniuse.com/#search=canvas",target:"_blank","data-icrush-47126b6d":""},["Canvans"]),"和",i("a",{href:"https://caniuse.com/#search=svg",target:"_blank","data-icrush-47126b6d":""},["SVG"]),"本身就没有很好的支持，而且使用的人越来越少，没有太多兼容的意义。"]),i("h2",{id:"fixed-log","data-icrush-47126b6d":""},["更新日志"]),i("p",{"data-icrush-47126b6d":""},["最新稳定版本：",i("span",{class:"important","data-icrush-47126b6d":""},["{{version}}"])]),i("p",{"data-icrush-47126b6d":""},["每个版本的更新日志见",i("a",{href:"https://github.com/yelloxing/image2D/blob/master/CHANGELOG",target:"_blank","data-icrush-47126b6d":""},["GitHub"]),"。"]),i("h1",{id:"fixed-script","data-icrush-47126b6d":""},["直接用",i("span",{class:"important","data-icrush-47126b6d":""},["script"]),"引入"]),i("p",{class:"warn","data-icrush-47126b6d":""},["直接下载并用",i("span",{class:"important","data-icrush-47126b6d":""},["script"]),"标签引入，",i("span",{class:"important","data-icrush-47126b6d":""},["image2D"]),"和",i("span",{class:"important","data-icrush-47126b6d":""},["$$"]),"会被注册为一个全局变量。"]),i("h2",{id:"fixed-cdn","data-icrush-47126b6d":""},["CDN"]),i("p",{"data-icrush-47126b6d":""},["对于制作原型或学习，你可以这样使用最新版本："]),i("div",{"ui-copy":"","data-icrush-47126b6d":""},[i("pre",{class:"prettyprint","data-icrush-47126b6d":""},["{{CDN.noVersion}}"])]),i("p",{"data-icrush-47126b6d":""},["对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏："]),i("div",{"ui-copy":"","data-icrush-47126b6d":""},[i("pre",{class:"prettyprint","data-icrush-47126b6d":""},["{{CDN.version}}"])]),i("p",{"data-icrush-47126b6d":""},["你可以在",i("a",{href:"https://cdn.jsdelivr.net/npm/image2d/",target:"_blank","data-icrush-47126b6d":""},["cdn.jsdelivr.net/npm/image2D"]),"浏览 NPM 包的源代码。"]),i("h1",{id:"fixed-npm","data-icrush-47126b6d":""},["通过",i("span",{class:"important","data-icrush-47126b6d":""},["NPM"]),"方式管理"]),i("p",{"data-icrush-47126b6d":""},["同样的，你可以使用 NPM 安装。"]),i("div",{"ui-copy":"","data-icrush-47126b6d":""},[i("pre",{class:"prettyprint","data-icrush-47126b6d":""},["npm install image2d"])]),i("p",{"data-icrush-47126b6d":""},["安装好了以后，在需要的地方引入即可："]),i("div",{"ui-copy":"","data-icrush-47126b6d":""},[i("pre",{class:"prettyprint","data-icrush-47126b6d":""},['import $$ from "image2d";'])])])};t.default=e}}]);
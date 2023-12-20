(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{30:function(a,i,t){"use strict";var e=t(4),c=t.n(e);i.a=function(a,i){c()("."+a).attr("active","no"),c()("."+a+"."+i).attr("active","yes")}},31:function(a,i,t){"use strict";var e=t(4),c=t.n(e);i.a=function(a,i){i=i||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var i=a.split("&"),t={};return i.forEach((function(a){var i=a.split("=");t[i[0]]=i[1]})),t}().fixed;if(t){var e=c()("#fixed-"+t);if(e.length>0){var r=e[0].offsetTop-i,s=a.scrollTop||0;c.a.animation((function(i){a.scrollTop=(r-s)*i+s}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0}},32:function(a){a.exports=JSON.parse('{"name":"image2d","version":"1.9.2","description":"🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.","main":"build/image2D.min.js","typings":"types/index.d.ts","sideEffects":false,"scripts":{"start":"npm install && npm run build","build":"npm run build:init && npm run build:bundle && npm run build:babel && npm run build:uglifyjs && npm run build:end","build:init":"cuf --config ./cuf.config.js init","build:end":"cuf --config ./cuf.config.js end","build:bundle":"cuf --config ./cuf.config.js bundle","build:babel":"cuf --config ./cuf.config.js babel","build:uglifyjs":"cuf --config ./cuf.config.js uglifyjs","server":"cuf --server 30000"},"keywords":["image","algorithm","svg","canvas","tree","js"],"repository":{"type":"git","url":"git+https://github.com/yelloxing/image2D.git"},"author":{"name":"yelloxing","url":"http://yelloxing.gitee.io/homepage/"},"license":"MIT","bugs":{"url":"https://github.com/yelloxing/image2D/issues"},"homepage":"https://yelloxing.gitee.io/image2d/index.html","devDependencies":{"babel-core":"^6.26.0","babel-plugin-transform-class-properties":"^6.24.1","babel-preset-es2015":"^6.24.1","cuf":"^1.2.0","rollup":"^1.32.1","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-node-resolve":"^5.2.0","uglify-js":"^3.5.6"},"dependencies":{"@yelloxing/core.js":"^0.3.7"}}')},38:function(a,i,t){var e=t(39);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,t(2).default)("data-icrush-a2a25c74",e,!0)},39:function(a,i,t){i=a.exports=t(1)(!1);var e=t(6)(t(40));i.push([a.i,".guider-demo1{background-image:url("+e+");height:1.6rem;background-repeat:no-repeat;background-position:left center;background-size:auto 100%}\n",""])},40:function(a,i,t){a.exports=t.p+"dist/guider-demo1.png"},68:function(a,i,t){"use strict";t.r(i);var e=t(30),c=t(31),r=t(32),s={data:function(){return{CDN:'<script src="https://cdn.jsdelivr.net/npm/image2d@'+r.version+'"><\/script>'}},created:function(){Object(e.a)("menu-2","how-to-use")},mounted:function(){prettyPrint(),Object(c.a)()}};t(38);s.render=function(a){return a("div",{class:"api-view","data-icrush-a2a25c74":""},[a("p",{"data-icrush-a2a25c74":""},["首先，让我们来了解一个这个库主要解决的问题是什么，如何使用以及问题反馈等基本信息。"]),a("h2",{id:"fixed-purpose","data-icrush-a2a25c74":""},["关注的问题"]),a("p",{"data-icrush-a2a25c74":""},["本库致力于提供更简单的Web端二维绘图接口，主要包括这些方面：画笔、辅助计算、结点操作和一些零碎的小工具方法。我们希望绘图是简单而有趣的、高效而愉悦的！"]),a("p",{"data-icrush-a2a25c74":""},["主要是在svg和canvas2D上绘图，虽然有提供比如Maritx4坐标变换等三维相关方法，这是考虑到一些潜在的需求。"]),a("h2",{id:"fixed-import","data-icrush-a2a25c74":""},["如何引入?"]),a("p",{"data-icrush-a2a25c74":""},["如果你开发的是一个web项目，直接在页面引入打包后的文件后即可（在代码中通过image2D或$$调用）："]),a("div",{"ui-copy":"","data-icrush-a2a25c74":""},[a("pre",{class:"prettyprint","data-icrush-a2a25c74":""},["{{CDN}}"])]),a("p",{"data-icrush-a2a25c74":""},["如果你想通过npm方式管理，首先你需要通过命令行安装image2D，就像这样："]),a("div",{"ui-copy":"","data-icrush-a2a25c74":""},[a("pre",{class:"prettyprint","data-icrush-a2a25c74":""},["npm install --save image2d"])]),a("p",{"data-icrush-a2a25c74":""},["安装好了以后，在需要的地方引入即可："]),a("div",{"ui-copy":"","data-icrush-a2a25c74":""},[a("pre",{class:"prettyprint","data-icrush-a2a25c74":""},['import $$ from "image2d";'])]),a("h2",{id:"fixed-example","data-icrush-a2a25c74":""},["一个简单的用例"]),a("p",{"data-icrush-a2a25c74":""},["作为入门，我们这里只是简单的说明一下如何绘图，具体的辅助方法和一些细节在文档有进行说明，或者你可以提issue进行交流，为了简化，这里不再赘述。"]),a("h6",{"data-icrush-a2a25c74":""},["获取画笔"]),a("p",{"data-icrush-a2a25c74":""},["绘图的第一步当然是获取画笔了，画笔分为两种：Canvas2D和SVG，我们来看看具体的代码："]),a("div",{"ui-copy":"","data-icrush-a2a25c74":""},[a("pre",{class:"prettyprint","data-icrush-a2a25c74":""},['var painter=$$("#painter").painter();'])]),a("p",{"data-icrush-a2a25c74":""},['上面的$$("#painter")返回一个image2D对象，通过ID选择器查找结点，然后调用对象上的painter方法就可以获取画笔了。']),a("p",{"data-icrush-a2a25c74":""},["如何判断画笔的类型？如果结点是canvas获取的就是Canvas2D画笔，如果结点是svg获取的就是SVG画笔。"]),a("h6",{"data-icrush-a2a25c74":""},["配置"]),a("p",{"data-icrush-a2a25c74":""},["不管是什么画笔，都一样可以进行配置（当然有缺省值），比如画笔的粗细，颜色等，下面列出部分选项："]),a("div",{"ui-copy":"","data-icrush-a2a25c74":""},[a("pre",{class:"prettyprint","data-icrush-a2a25c74":""},['painter.config({↵    "font-size":文字大小,↵    "lineWidth":线条宽度,↵    ......↵});'])]),a("p",{"data-icrush-a2a25c74":""},["具体的配置选项请查看画笔一节。"]),a("h6",{"data-icrush-a2a25c74":""},["绘图方法"]),a("p",{"data-icrush-a2a25c74":""},["画笔获取并配置好了以后，直接调用画笔上的方法即可绘图，我们拿canvas举例子。"]),a("div",{"ui-copy":"","data-icrush-a2a25c74":""},[a("pre",{class:"prettyprint","data-icrush-a2a25c74":""},['$$("canvas")↵.attr({↵    "with":200,↵    "height":100↵})↵.painter()↵.config({↵    "lineWidth":10,↵    "fillStyle":"red",↵    "strokeStyle":"green"↵})↵.fillArc(100, 0, 50, 100, 0, Math.PI)↵.strokeArc(100, 0, 50, 95, 0, Math.PI);'])]),a("p",{"data-icrush-a2a25c74":""},["具体的绘图方法也请查看文档。绘制的结果如下："]),a("div",{class:"guider-demo1","data-icrush-a2a25c74":""},[]),a("p",{"data-icrush-a2a25c74":""},["怎么样？是不是很简单，虽然直接使用canvas或svg也可以实现，不过借助这个库绘图会更简单，你可以把更多的精力放在绘制出更有趣的作品上。"]),a("h2",{id:"fixed-help","data-icrush-a2a25c74":""},["获取帮助"]),a("p",{"data-icrush-a2a25c74":""},["在使用image2D的时候，如果遇到任何疑惑或问题，包括建议或对未来版本的想法，请先在",a("a",{target:"_blank",href:"https://github.com/yelloxing/image2D/issues","data-icrush-a2a25c74":""},["Github issue"]),"上查找是否存在相似内容，然后进行补充或追问，当然也可以增加新的话题进行交流，除非特殊情况，你会在48小时内获得",a("a",{href:"mailto:yelloxing@gmail.com","data-icrush-a2a25c74":""},["作者"]),"回复。"])])};i.default=s}}]);
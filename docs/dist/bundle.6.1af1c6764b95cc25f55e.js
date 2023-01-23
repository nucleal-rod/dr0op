(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{34:function(t,e,a){"use strict";a.r(e);var n=a(72),i=a(47);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var r=a(8),l=Object(r.a)(i.default,n.a,n.b,!1,null,null,null);l.options.__file="src/pages/api/how-to-use.vue",e.default=l.exports},40:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){prettyPrint(),1==arguments.length?((0,i.default)("li",document.getElementById("topHeader")).attr("active","no"),(0,i.default)("#"+t).attr("active","yes")):2==arguments.length&&"api"==t&&((0,i.default)("li.apimenu-item",document.getElementById("api-nav")).attr("active","no"),(0,i.default)("#"+e).attr("active","yes"))};var n,i=(n=a(12))&&n.__esModule?n:{default:n}},47:function(t,e,a){"use strict";a.r(e);var n=a(48),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e.default=i.a},48:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=a(40))&&n.__esModule?n:{default:n};e.default={mounted:function(){(0,i.default)("api","how-to-use")}}},72:function(t,e,a){"use strict";function n(){var t=this;return t.$createElement,t._self._c,t._m(0)}var i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",[t._v("首先，让我们来了解一个这个库主要解决的问题是什么，如何使用以及问题反馈等基本信息。")]),t._v(" "),a("h4",{staticClass:"title small"},[t._v("关注的问题")]),t._v(" "),a("p",[t._v("本库致力于提供更简单的Web端二维绘图接口，主要包括这些方面：画笔、辅助计算、结点操作和一些零碎的小工具方法。我们希望绘图是简单而有趣的、高效而愉悦的！")]),t._v(" "),a("p",[t._v("主要是在svg和canvas2D上绘图，虽然有提供比如Maritx4坐标变换等三维相关方法，这是考虑到一些潜在的需求。")]),t._v(" "),a("h4",{staticClass:"title small"},[t._v("使用")]),t._v(" "),a("p",[t._v("如果你开发的是一个web项目，直接在页面引入打包后的文件后即可（在代码中通过image2D或$$调用）：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-html"},[t._v('<script src="https://cdn.jsdelivr.net/npm/image2d@1.5.4/build/image2D.min.js"><\/script>')]),t._v(" "),a("p",[t._v("如果你想通过npm方式管理，首先你需要通过命令行安装image2D，就像这样：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("npm install --save image2d")]),t._v(" "),a("p",[t._v("安装好了以后，在需要的地方引入即可：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("// ESMAScript6+规范引入\nimport $$ from 'image2d';")]),t._v(" "),a("p",[t._v("或者")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v('// CommonJS / AMD规范引入\nconst $$ = require("image2d");')]),t._v(" "),a("h4",{staticClass:"title small"},[t._v("获取帮助")]),t._v(" "),a("p",[t._v("\n      在使用image2D的时候，如果遇到任何疑惑或问题，包括建议或对未来版本的想法，请先在\n      "),a("a",{attrs:{target:"_blank",href:"https://github.com/yelloxing/image2D/issues"}},[t._v("Github issue")]),t._v("\n      上查找是否存在相似内容，然后进行补充或追问，当然也可以增加新的话题进行交流，除非特殊情况，你会在48小时内获得\n      "),a("a",{attrs:{href:"mailto:yelloxing@gmail.com"}},[t._v("作者")]),t._v("\n      回复。\n    ")]),t._v(" "),a("p",{staticClass:"nav-footer"},[a("a",{staticClass:"next",attrs:{href:"#/api/xhtml",onclick:"document.documentElement.scrollTop = 0;"}},[t._v("结点操作")])])])}];n._withStripped=!0,a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}))}}]);
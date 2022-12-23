(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{35:function(t,e,a){"use strict";a.r(e);var n=a(76),v=a(49);for(var s in v)"default"!==s&&function(t){a.d(e,t,(function(){return v[t]}))}(s);var _=a(8),i=Object(_.a)(v.default,n.a,n.b,!1,null,null,null);i.options.__file="src/pages/api/xhtml.vue",e.default=i.exports},40:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){prettyPrint(),1==arguments.length?((0,v.default)("li",document.getElementById("topHeader")).attr("active","no"),(0,v.default)("#"+t).attr("active","yes")):2==arguments.length&&"api"==t&&((0,v.default)("li.apimenu-item",document.getElementById("api-nav")).attr("active","no"),(0,v.default)("#"+e).attr("active","yes"))};var n,v=(n=a(12))&&n.__esModule?n:{default:n}},49:function(t,e,a){"use strict";a.r(e);var n=a(50),v=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e.default=v.a},50:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,v=(n=a(40))&&n.__esModule?n:{default:n};e.default={mounted:function(){(0,v.default)("api","xhtml")}}},66:function(t,e,a){t.exports=a.p+"dist/enter_exit.png"},76:function(t,e,a){"use strict";function n(){var t=this;return t.$createElement,t._self._c,t._m(0)}var v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",[t._v("\n            为了绘图的方便，我们提供了最基本的结点相关操作。因为这些操作是为了绘图而开发的，可能和纯粹的结点操作方法在设计上有所不同，请知悉。\n        ")]),t._v(" "),n("h4",{staticClass:"title small"},[t._v("结点对象")]),t._v(" "),n("p",[t._v("\n            所有的结点操作都是由结点对象提供的，因此，我们首先来看看如何创建一个结点对象：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("var imageObject=$$(selector[, context]);")]),t._v(" "),n("p",[t._v("\n            如上所示，通过执行$$或image2D方法即可获取一个结点对象，我们可以传递二个参数来确定当前结点对象维护的结点是哪些。\n        ")]),t._v(" "),n("p",{staticClass:"warn"},[t._v("\n            结点对象维护了一些结点，调用结点对象上的方法，就是对维护的这些结点进行操作。\n        ")]),t._v(" "),n("p",[t._v("\n            第一个参数selector（称为选择器）是必须的，用以确定当前维护的结点是哪些。\n        ")]),t._v(" "),n("p",[t._v("\n            第二个参数context是可选的，默认选择器在全局查找，你也可以通过传递一个dom结点指定查找上下文（id选择器会忽略此参数直接在全局查找）。\n        ")]),t._v(" "),n("h6",{staticClass:"title little"},[t._v("选择器")]),t._v(" "),n("p",[t._v("\n            任何合法的选择器都应该是下列中的某一种：\n        ")]),t._v(" "),n("ul",[n("li",[t._v("模板字符串（除canvas外，生成的默认都是svg标签），比如'<g>'、'<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>'等。")]),t._v(" "),n("li",[t._v("ID选择器，比如'#demo'会选中id是'demo'的第一个标签。")]),t._v(" "),n("li",[t._v("class和标签选择器，比如'.cls'、'div'、'div.cls'和'g.info.warn'等。")]),t._v(" "),n("li",[t._v("全部选择器，也就是字符串'*'，会选中全部结点。")]),t._v(" "),n("li",[t._v("非查询选择器，包括：结点，结点数组和结点对象。这类选择器不会进行查找，直接把传递的结点作为维护结点，因此也会忽略查找上下文。")]),t._v(" "),n("li",[t._v("筛选函数，传递一个函数，函数形参是当前面对的结点，通过返回true或false来判断是否把当前面对的结点加入结点对象中。")])]),t._v(" "),n("p",[t._v("\n            创建好了结点对象以后，后续依旧可以对维护的结点进行筛选后获取新的结点对象：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("var new_imageObject=imageObject.filter(filterback);")]),t._v(" "),n("p",[t._v("\n            返回新的结点对象，不会修改原来的结点对象。其中filterback叫做筛选函数，有二个形参，分别是当前面对结点序号和维护了当前面对结点的结点对象，通过返回true或false来判断是否把当前面对的结点加入新创建的结点对象中。\n        ")]),t._v(" "),n("p",{staticClass:"warn"},[t._v('\n            特别注意：第二个参数context除了可以是dom结点外，还有二个特殊的字符串可以作为参数"html"（或"HTML"）和"svg"（或"SVG"），如果传递这二个字符串中的某个，表示把第一个参数selector作为模板字符串生成新的结点（前者生成html结点，后者生成svg结点）。\n        ')]),t._v(" "),n("h4",{staticClass:"title small"},[t._v("编辑")]),t._v(" "),n("p",[t._v("\n            把当前维护的结点加到目标结点内部的结尾：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.appendTo(target[, context]);")]),t._v(" "),n("p",{staticClass:"warn"},[t._v('\n            target是一个合法的选择器即可，context是一个结点（当然，额外有二个字符串"html"和"svg"可以作为参数，和上面一样），表示目标结点查找上下文，可选，默认全局查找，下同。\n        ')]),t._v(" "),n("p",[t._v("\n            把当前维护的结点加到目标结点内部的开头：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.prependTo(target[, context]);")]),t._v(" "),n("p",[t._v("\n            把当前维护的结点加到目标结点之后：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.afterTo(target[, context]);")]),t._v(" "),n("p",[t._v("\n            把当前维护的结点加到目标结点之前：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.beforeTo(target[, context]);")]),t._v(" "),n("p",[t._v("\n            从页面中删除当前维护的结点：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.remove();")]),t._v(" "),n("p",[t._v("\n            设置或获取结点中的文本：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.text([content]);")]),t._v(" "),n("h4",{staticClass:"title small"},[t._v("样式和属性")]),t._v(" "),n("p",[t._v("\n            修改或获取结点样式：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.css();")]),t._v(" "),n("p",[t._v("\n            通过不同的参数来确定是获取样式还是设置样式，具体有下列参数选项可选：\n        ")]),t._v(" "),n("ul",[n("li",[t._v("(key):获取指定样式。")]),t._v(" "),n("li",[t._v("(key,value):设置指定样式。")]),t._v(" "),n("li",[t._v("():获取全部样式。")]),t._v(" "),n("li",[t._v("(json):设置大量样式。")])]),t._v(" "),n("p",[t._v("\n            设置或获取结点属性：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.attr();")]),t._v(" "),n("p",[t._v("\n            和样式css方法类似，也是通过具体参数来确定是获取还是设置样式：\n        ")]),t._v(" "),n("ul",[n("li",[t._v("(attr):获取属性。")]),t._v(" "),n("li",[t._v("(attr,value):设置指定属性值。")]),t._v(" "),n("li",[t._v("(json):设置大量属性。")])]),t._v(" "),n("h4",{staticClass:"title small"},[t._v("事件相关")]),t._v(" "),n("p",[t._v("\n            给维护的结点绑定事件：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.bind(eventType, callback);")]),t._v(" "),n("p",[t._v("\n            获取鼠标相对当前维护的元素左上角位置：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.position(event);")]),t._v(" "),n("h4",{staticClass:"title small"},[t._v("数据绑定")]),t._v(" "),n("p",[t._v("\n            绘图就离不开数据，把数据和结点关联起来，会简化结点管理和数据保存问题，这里涉及四个核心方法：data、datum、enter和exit，还有一些相关方法（因为结点对象的各个方法之间不完全是独立的）。\n        ")]),t._v(" "),n("p",[t._v("\n            把数据绑定到一组结点或返回第一个结点数据：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.datum();")]),t._v(" "),n("p",[t._v("\n            通过具体的参数来判断是获取还是绑定，有下列参数选项可选：\n        ")]),t._v(" "),n("ul",[n("li",[t._v("():不带任何参数表示获取数据。")]),t._v(" "),n("li",[t._v("(data):带一个参数表示设置结点对象维护的全部结点数据为data。")]),t._v(" "),n("li",[t._v("(data, calcback):和带一个参数类似，只不过绑定的数据是经过calcback函数重新计算后返回的值，该函数有二个形参：data和index。")])]),t._v(" "),n("p",[t._v("\n            把一组数据绑定到一组结点或返回一组结点数据：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("var update=imageObject.data();")]),t._v(" "),n("p",[t._v("\n            和上面的datum方法类似，只不过这是对一组数据进行操作，也就是data变成了数组datas，不再赘述了。\n        ")]),t._v(" "),n("img",{staticStyle:{float:"'right', backgroundColor: '#fff'"},attrs:{src:a(66),width:"400"}}),t._v(" "),n("p",[t._v("\n            不过，你可能已经注意到了，data方法因为操作的是数组，数组个数和维护的结点个数不一定一样多，这样就存在平衡问题。\n        ")]),t._v(" "),n("p",[t._v("\n            如右图所示，我们把数据和结点匹配的部分称为update（刚刚好平衡，已经更新好了的意思），数据多于结点的部分称为enter（因为绘图是根据数据来的，数据多了，应该添加结点来维持平衡），结点多于数据的部分称为exit（多余的结点删除即可）。\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("var enter=update.enter(template[, type]);")]),t._v(" "),n("p",[t._v("\n            如果数据多于结点，调用enter方法，传递一个参数template（模板字符串，类似'<path>'、'text'等）来把多余的数据绑定到新建立的结点上去，后续通过之前的常规结点操作追加到页面的合适位置去即可。\n        ")]),t._v(" "),n("p",[t._v("\n            第二个参数type可选，表示第一个参数生成的结点类型，默认'svg'，表示生成svg结点，或者传递字符串'html'表示生成html结点。\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("var exit=update.exit();")]),t._v(" "),n("p",[t._v("\n            如果结点多于数据，调用exit方法获取多余的结点，然后再调用remove方法删除即可。\n        ")]),t._v(" "),n("p",[t._v("\n            通过上面的四个主要方法，可以把数据和结点绑定起来，接下来需要思考的是如何把数据的绘图方法作用到具体的结点上去：\n        ")]),t._v(" "),n("pre",{staticClass:"prettyprint lang-js"},[t._v("imageObject.loop(function(data,index,target){\n    // 绘制图像\n    // data是当前结点对象target维护的数据，index是当前结点对象序号\n});")]),t._v(" "),n("p",[t._v("\n            loop方法会把传递的绘图方法在当前结点对象维护的每一个结点上应用一次，具体的绘图方法可以根据当前面对的结点绑定的数据来绘制。\n        ")]),t._v(" "),n("p",{staticClass:"nav-footer"},[n("a",{staticClass:"pre",attrs:{href:"#/api/how-to-use"}},[t._v("如何使用")]),t._v(" "),n("a",{staticClass:"next",attrs:{href:"#/api/painter"}},[t._v("画笔")])])])}];n._withStripped=!0,a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return v}))}}]);
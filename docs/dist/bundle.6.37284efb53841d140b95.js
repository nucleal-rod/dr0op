(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{35:function(e,t,a){"use strict";a.r(t);var i=a(66),c=a.n(i);a(67),c.a.render=function(e){return e("div",{class:"api-view","data-icrush-70fe1ec0":""},[e("p",{"data-icrush-70fe1ec0":""},["↵↵            因为绘制的时候，比如canvas2D没有图层，某个数据改变可能就意味着需要全部重新绘制等，基于这些考虑，在这一章，对前面进行必要的补充。↵↵        "]),e("h2",{id:"fixed-layer","data-icrush-70fe1ec0":""},["↵↵            位图图层↵↵        "]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            首先需要明确，图层服务的对象是canvas2D，svg某种意义上天生具有图层，不需要额外设计。让我们首先看看如何获取一个图层对象：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵var layer=imageObject.layer();↵↵            "])]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            这里的图层可以类比photoshop的图层去理解，我们提供了几个类似的方法来帮助使用图层对象。↵↵        "]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            图层对象管理着图层，通过传递id可以获取对应图层的画笔，如果该图层不存在会自动创建（这里的画笔就是canvas2D画笔）：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵var painter=layer.painter(id);↵↵            "])]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            删除指定图层：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵layer.delete(id);↵↵            "])]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            图层中的内容不会显示在画布上，为了显示在画布上，需要手动更新：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵layer.update();↵↵            "])]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            隐藏图层：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵layer.hidden(id);↵↵            "])]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            显示图层：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵layer.show(id);↵↵            "])]),e("h2",{id:"fixed-animation","data-icrush-70fe1ec0":""},["↵↵            动画或定时轮询↵↵        "]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            绘图的时候，为了实现动画效果，你除了可以使用画布或css天然的动画相关属性，还可以使用ES绘制每一帧的方式实现。为了方便你绘制我们提供了下面方法：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵var stop=$$.animation(function(deep){↵↵    // deep取值0-1，表示动画进度↵↵}, speeds, function(deep){↵↵    // deep和上面一样，提供的原因是有时候结束回调是stop方法触发而不是动画结束了↵↵},timing);↵↵            "])]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            该方法有四个参数：分别表示画帧方法、动画时长、动画结束回调和进度控制参数（动画时长单位毫秒，最后三个均可选）。↵↵        "]),e("p",{"data-icrush-70fe1ec0":""},['↵↵            其中timing可以为字符串或数组，字符串可选参数有："ease"、"ease-in"、"ease-in-out"、"ease-out"和"linear"（默认值），值的意义和css中的属性↵↵            transition-timing-function 基本一致，数组的话也是和这个属性保持一致，长度为4。↵↵        ']),e("p",{"data-icrush-70fe1ec0":""},["↵↵            如果你希望动画立刻结束，可以调用下面的方法强行提前停止：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵stop();↵↵            "])]),e("h2",{id:"fixed-colors","data-icrush-70fe1ec0":""},["↵↵            颜色计算相关方法↵↵        "]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            给定任意一个合法的css颜色字符串，把颜色统一转变成rgba格式，返回一个数组[r,g,b,a]：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵var rgbaArray=$$.formatColor(colorString);↵↵            "])]),e("p",{"data-icrush-70fe1ec0":""},["↵↵            传递需要的颜色个数，返回一组随机色彩：↵↵        "]),e("div",{"ui-copy":"","data-icrush-70fe1ec0":""},[e("pre",{class:"prettyprint","data-icrush-70fe1ec0":""},["↵↵var colors=$$.getRandomColors(number);↵↵            "])])])},t.default=c.a},38:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,c.default)("."+e).attr("active","no"),(0,c.default)("."+e+"."+t).attr("active","yes")};var i,c=(i=a(8))&&i.__esModule?i:{default:i}},39:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(0,c.default)().fixed;if(e){var t=(0,i.default)("#fixed-"+e);0<t.length&&i.default.animation((function(e){document.documentElement.scrollTop=t[0].offsetTop*e}),500,(function(){document.documentElement.scrollTop=t[0].offsetTop}))}};var i=r(a(8)),c=r(a(40));function r(e){return e&&e.__esModule?e:{default:e}}},40:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var t=e.split("&"),a={};return t.forEach((function(e){var t=e.split("=");a[t[0]]=t[1]})),a}},66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(a(38)),c=r(a(39));function r(e){return e&&e.__esModule?e:{default:e}}t.default={created:function(){(0,i.default)("menu-2","tool")},mounted:function(){prettyPrint(),(0,c.default)()}}},67:function(e,t,a){var i=a(1),c=a(68);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var r=(i(c,{insert:"head",singleton:!1}),c.locals?c.locals:{});e.exports=r},68:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,"",""])}}]);
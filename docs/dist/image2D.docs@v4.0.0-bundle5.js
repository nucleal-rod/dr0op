(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{29:function(a,t,c){"use strict";var i=c(4),e=c.n(i);t.a=function(a,t){e()("."+a).attr("active","no"),e()("."+a+"."+t).attr("active","yes")}},30:function(a,t,c){"use strict";var i=c(4),e=c.n(i);t.a=function(a,t){t=t||0,a=a||document.documentElement;var c=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),c={};return t.forEach((function(a){var t=a.split("=");c[t[0]]=t[1]})),c}().fixed;if(c){var i=e()("#fixed-"+c);if(i.length>0){var r=i[0].offsetTop-t,n=a.scrollTop||0;e.a.animation((function(t){a.scrollTop=(r-n)*t+n}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0}},60:function(a,t,c){var i=c(61);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,c(2).default)("data-icrush-3a221cec",i,!0)},61:function(a,t,c){(a.exports=c(1)(!1)).push([a.i,".title{border-bottom:1px solid gray;margin-top:.2rem}\n",""])},77:function(a,t,c){"use strict";c.r(t);var i=c(29),e=c(30),r={created:function(){Object(i.a)("menu-1","QA")},mounted:function(){prettyPrint(),Object(e.a)()}};c(60);r.render=function(a){return a("div",{class:"api-view","data-icrush-3a221cec":""},[a("p",{"data-icrush-3a221cec":""},["这里汇总开发中常见问题，如果这里没有包含你的疑惑，可以去",a("a",{href:"https://github.com/hai2007/image2D/issues","data-icrush-3a221cec":""},["issue"]),"中提，有价值的最终会被整理回这里！"]),a("h2",{id:"fixed-issue11",class:"title","data-icrush-3a221cec":""},["[1] 为什么选择canvas作为画布绘图的时候会出现线条模糊？"]),a("p",{"data-icrush-3a221cec":""},["首先，线条很虚的原因是绘制方式导致的，具体原因可能有下列情况（还可能有别的原因）："]),a("h4",{"data-icrush-3a221cec":""},["情况一：绘制方法问题导致了线条重叠"]),a("p",{"data-icrush-3a221cec":""},["例子代码位于本项目的laboratory文件夹中：",a("a",{href:"https://github.com/hai2007/image2D/blob/master/laboratory/draw-method-0.5Px.html",target:"_blank","data-icrush-3a221cec":""},["draw-method-0.5Px.html"])]),a("p",{"data-icrush-3a221cec":""},["你可以通过选择使用【绘制方法一】和【绘制方法二】的代码来查看效果，明细前者是糟糕的，因为重叠绘制了。"]),a("h4",{"data-icrush-3a221cec":""},["情况二：canvas本身是位图，存在0.5px问题"]),a("p",{"data-icrush-3a221cec":""},["canvas画布本身由于0.5Px问题，存在天然的模糊问题，需要通过一定方法实现，比如看看这里实验用例：",a("a",{href:"https://github.com/hai2007/image2D/blob/master/laboratory/canvas-0.5Px.html",target:"_blank","data-icrush-3a221cec":""},["canvas-0.5Px.html"]),",image2D本身已经进行了一些优化，解决了一部分问题。"])])};t.default=r}}]);
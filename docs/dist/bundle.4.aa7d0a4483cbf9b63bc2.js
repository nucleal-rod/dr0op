(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{27:function(a,t,c){"use strict";var e=c(4),i=c.n(e);t.a=function(a,t){i()("."+a).attr("active","no"),i()("."+a+"."+t).attr("active","yes")}},28:function(a,t,c){"use strict";var e=c(4),i=c.n(e);t.a=function(){var a=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),c={};return t.forEach((function(a){var t=a.split("=");c[t[0]]=t[1]})),c}().fixed;if(a){var t=i()("#fixed-"+a);t.length>0&&i.a.animation((function(a){document.documentElement.scrollTop=t[0].offsetTop*a}),500,(function(){document.documentElement.scrollTop=t[0].offsetTop}))}else document.documentElement.scrollTop=0}},48:function(a,t,c){var e=c(49);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,c(2).default)("data-icrush-3a221cec",e,!0)},49:function(a,t,c){(a.exports=c(1)(!1)).push([a.i,".title{border-bottom:1px solid gray;margin-top:.2rem}\n",""])},60:function(a,t,c){"use strict";c.r(t);var e=c(27),i=c(28),n={created:function(){Object(e.a)("menu-1","QA")},mounted:function(){prettyPrint(),Object(i.a)()}};c(48);n.render=function(a){return a("div",{class:"api-view","data-icrush-3a221cec":""},[a("p",{"data-icrush-3a221cec":""},["↵↵            这里汇总开发中常见问题，如果这里没有包含你的疑惑，可以去↵↵            ",a("a",{href:"https://github.com/yelloxing/image2D/issues","data-icrush-3a221cec":""},["issue"]),"↵↵            中提，有价值的最终会被整理回这里！↵↵        "]),a("h2",{id:"fixed-issue11",class:"title","data-icrush-3a221cec":""},["↵↵            [1] 为什么选择canvas作为画布绘图的时候会出现线条模糊？↵↵        "]),a("p",{"data-icrush-3a221cec":""},["↵↵            首先，线条很虚的原因是绘制方式导致的，具体原因可能有下列情况（还可能有别的原因）：↵↵        "]),a("h4",{"data-icrush-3a221cec":""},["↵↵            情况一：绘制方法问题导致了线条重叠↵↵        "]),a("p",{"data-icrush-3a221cec":""},["↵↵            例子代码位于本项目的laboratory文件夹中：↵↵            ",a("a",{href:"https://github.com/yelloxing/image2D/blob/master/laboratory/draw-method-0.5Px.html",target:"_blank","data-icrush-3a221cec":""},["draw-method-0.5Px.html"])]),a("p",{"data-icrush-3a221cec":""},["↵↵            你可以通过选择使用【绘制方法一】和【绘制方法二】的代码来查看效果，明细前者是糟糕的，因为重叠绘制了。↵↵        "]),a("h4",{"data-icrush-3a221cec":""},["↵↵            情况二：canvas本身是位图，存在0.5px问题↵↵        "]),a("p",{"data-icrush-3a221cec":""},["↵↵            canvas画布本身由于0.5Px问题，存在天然的模糊问题，需要通过一定方法实现，比如看看这里实验用例：↵↵            ",a("a",{href:"https://github.com/yelloxing/image2D/blob/master/laboratory/canvas-0.5Px.html",target:"_blank","data-icrush-3a221cec":""},["canvas-0.5Px.html"]),"↵↵            ,image2D本身已经进行了一些优化，解决了一部分问题。↵↵        "])])};t.default=n}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{23:function(a,t,e){"use strict";var p=e(24),r=e.n(p);t.a=function(a,t){r()("."+a).attr("active","no"),r()("."+a+"."+t).attr("active","yes")}},25:function(a,t,e){"use strict";var p=e(24),r=e.n(p);t.a=function(a,t){t=t||0,a=a||document.documentElement;var e=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),e={};return t.forEach((function(a){var t=a.split("=");e[t[0]]=t[1]})),e}().fixed;if(e){var p=r()("#fixed-"+e);if(p.length>0){var i=p[0].offsetTop-t,c=a.scrollTop||0;r.a.animation((function(t){a.scrollTop=(i-c)*t+c}),500,(function(){a.scrollTop=i}))}}else a.scrollTop=0}},53:function(a,t,e){var p=e(54);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,e(1).default)("data-quickpaper-89b16250",p,!0)},54:function(a,t,e){(a.exports=e(0)(!1)).push([a.i,"",""])},68:function(a,t,e){"use strict";e.r(t);var p=e(23),r=e(25),i={created:function(){Object(p.a)("menu-2","svg-painter")},mounted:function(){Object(r.a)(document.getElementById("course-id"),44)}};e(53);i.render=function(a){return a("div",{quickpaper:"","data-quickpaper-89b16250":""},[a("div",{class:"course-view","data-quickpaper-89b16250":""},[a("header",{id:"fixed-top","data-quickpaper-89b16250":""},["矢图画笔"]),a("p",{"data-quickpaper-89b16250":""},["和前面一样，我们还是演示如何绘制了圆弧。"]),a("p",{"data-quickpaper-89b16250":""},["因为位图的画布是基于",a("span",{class:"important","data-quickpaper-89b16250":""},["Canvas"]),"，而矢图基于",a("span",{class:"important","data-quickpaper-89b16250":""},["SVG"]),"，因此我们需要先假设页面有一个SVG标签。"]),a("h2",{id:"fixed-painter","data-quickpaper-89b16250":""},["获取画笔"]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},['var painter=$$(\'svg\').attr({↵    "width":300,↵    "height":300↵}).painter();']),a("p",{"data-quickpaper-89b16250":""},["可以看到，除了传递的结点变成了SVG外没有区别，我们同样设置了画布大小。"]),a("h2",{id:"fixed-config","data-quickpaper-89b16250":""},["配置画笔"]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["painter.config({↵    'strokeStyle':'red',↵    'lineWidth':3,↵    'lineDash':[5]↵});"]),a("h2",{id:"fixed-chart","data-quickpaper-89b16250":""},["绘制简单图形"]),a("p",{"data-quickpaper-89b16250":""},["画笔获取并配置好了以后，同样的，我们直接调用",a("a",{href:"#/api/painter?fixed=method",target:"_blank","data-quickpaper-89b16250":""},["画笔上的方法"]),"试试："]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["painter.strokeArc(150, 150, 100, 130, Math.PI/2, Math.PI/2*3);"]),a("p",{"data-quickpaper-89b16250":""},["很可惜，报错了（打开浏览器",a("span",{class:"important","data-quickpaper-89b16250":""},["控制台"]),"查看）："]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["Uncaught Error: Need a <path> !↵    at t (image2d:17)↵    at Object.t [as strokeArc] (image2d:17)↵    at example-2.html:40"]),a("p",{"data-quickpaper-89b16250":""},["通过打印的错误提示可以看到，我们缺乏一个",a("span",{class:"important","data-quickpaper-89b16250":""},["path"]),"结点，为什么会这样，不是已经有画布了吗？"]),a("h1",{id:"fixed-diff","data-quickpaper-89b16250":""},["SVG和Canvas画布的区别"]),a("p",{"data-quickpaper-89b16250":""},["由于Canvas是位图，绘制类似在一块画布上不停的涂鸦，而SVG有点类似普通的HTML类型标签（比如输入框是input），SVG绘制的各种图形其实也需要对应页面中一个SVG类型标签，上面就是对应一个path标签。"]),a("p",{"data-quickpaper-89b16250":""},["因此，我们把最后一行绘制的方法稍微改造一下（下面涉及的",a("span",{class:"important","data-quickpaper-89b16250":""},["bind"]),"和",a("span",{class:"important","data-quickpaper-89b16250":""},["appendTo"]),"方法请查看",a("a",{href:"#/api/painter?fixed=svg",target:"_blank","data-quickpaper-89b16250":""},["矢图画笔"]),"一节中的说明）："]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["painter↵    .bind('<path>')↵    .appendTo()↵    .strokeArc(150, 150, 100, 130, Math.PI/2, Math.PI/2*3);"]),a("p",{"data-quickpaper-89b16250":""},["再次运行，一个圆弧就绘制好了，可以",a("a",{href:"./inline/example-2.html",target:"_blank","data-quickpaper-89b16250":""},["点击此处"]),"查看运行效果。"]),a("h2",{id:"fixed-data","data-quickpaper-89b16250":""},["数据绑定"]),a("p",{"data-quickpaper-89b16250":""},["接下来我们要演示如何使用",a("span",{class:"important","data-quickpaper-89b16250":""},["SVG"]),"画布快速的绘图，相关的API请",a("a",{href:"#/api/xhtml?fixed=data",target:"_blank","data-quickpaper-89b16250":""},["点击此处"]),"查阅。"]),a("h1",{id:"fixed-gradient","data-quickpaper-89b16250":""},["如何快速绘制柱状图"]),a("p",{"data-quickpaper-89b16250":""},["假设现在我们有一堆数据："]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["// 准备好数据↵var datas = [220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220];"]),a("p",{"data-quickpaper-89b16250":""},["通过前面我们已经知道了，因为柱状图其实就是一个个小矩形（也就是",a("span",{class:"important","data-quickpaper-89b16250":""},["rect"]),"），因此我们首先需要让页面中",a("span",{class:"important","data-quickpaper-89b16250":""},["rect"]),"的个数和数组中元素的个数一样："]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["// 首先查找页面中的rect↵var imageObject = $$('rect');↵↵// 然后把数据绑定到rect结点上，返回的是更新对象↵var update = imageObject.data(datas);↵↵// 因为页面中rect结点可能不够，不足的进行补充↵var enter = update.enter('<rect>').appendTo('svg');"]),a("p",{"data-quickpaper-89b16250":""},["这个时候你通过浏览器调试工具的",a("span",{class:"important","data-quickpaper-89b16250":""},["Elements"]),"来查看rect结点个数，发现已经和数据对应起来了。"]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["// 一切准备好了，进行绘制↵$$([imageObject, enter]).loop(function (data, index, target) {↵↵    // 绘制图像↵    // data是当前结点对象target维护的数据，index是当前结点对象序号↵    painter.bind(target).fillRect(index * 30 + 5, 500 - data, 20, data);↵↵});"]),a("p",{"data-quickpaper-89b16250":""},["至此，柱状图就绘制完成了，可以",a("a",{href:"./inline/example-3.html",target:"_blank","data-quickpaper-89b16250":""},["点击此处"]),"查看运行效果。"]),a("p",{"data-quickpaper-89b16250":""},["看到这里，你可能直接使用",a("span",{class:"important","data-quickpaper-89b16250":""},["for循环"]),"等也可以很轻松的实现，可是，如果我们的数据是随机生成的，而且每隔一段时间就改变一下滴？接着看。"]),a("h1",{id:"fixed-gradient-auto","data-quickpaper-89b16250":""},["数据个数动态改变如何绘制"]),a("p",{"data-quickpaper-89b16250":""},["比如我们通过下面的方法随机生成datas，数据的个数和内容都随机改变的："]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["// 先确定条目个数↵var num = (Math.random() * 30).toFixed(0) - -5;↵↵var datas = [];↵for (let i = 0; i < num; i++) {↵    datas.push(Math.random() * 500);↵}"]),a("p",{"data-quickpaper-89b16250":""},["每隔一段实现重新根据datas绘制，可是数据的个数不定，因此，现在的情况变了，",a("span",{class:"important","data-quickpaper-89b16250":""},["rect"]),"除了不足需要补充外，也可能需要把多余的删除了，我们把调整元素的那段代码改造一下："]),a("pre",{"q-code":"","data-quickpaper-89b16250":""},["// 首先查找页面中的rect↵var imageObject = $$('rect');↵↵// 然后把数据绑定到rect结点上，返回的是更新对象↵var update = imageObject.data(datas);↵↵// 多余的删除↵update.exit().remove();↵↵// 因为页面中rect结点可能不够，不足的进行补充↵var enter = update.enter('<rect>').appendTo('svg');"]),a("p",{"data-quickpaper-89b16250":""},["对比一下可以看出来，其实就是多了第三行代码（多余的删除）。余下绘制的方法和上面的几乎一样，就不再赘述了。"]),a("p",{"data-quickpaper-89b16250":""},["你可以",a("a",{href:"./inline/example-4.html",target:"_blank","data-quickpaper-89b16250":""},["点击此处"]),"查看运行效果。怎么样，是不是挺简单的，",a("span",{class:"important","data-quickpaper-89b16250":""},["数据绑定"]),"就是专门对齐结点和数据个数的一系列方法的集合。"])])])};t.default=i}}]);
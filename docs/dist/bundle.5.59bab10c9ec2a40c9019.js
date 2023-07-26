(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{27:function(a,t,i){"use strict";var r=i(4),c=i.n(r);t.a=function(a,t){c()("."+a).attr("active","no"),c()("."+a+"."+t).attr("active","yes")}},28:function(a,t,i){"use strict";var r=i(4),c=i.n(r);t.a=function(){var a=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),i={};return t.forEach((function(a){var t=a.split("=");i[t[0]]=t[1]})),i}().fixed;if(a){var t=c()("#fixed-"+a);t.length>0&&c.a.animation((function(a){document.documentElement.scrollTop=t[0].offsetTop*a}),500,(function(){document.documentElement.scrollTop=t[0].offsetTop}))}else document.documentElement.scrollTop=0}},41:function(a,t,i){var r=i(42);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);(0,i(2).default)("data-icrush-915b0994",r,!0)},42:function(a,t,i){(a.exports=i(1)(!1)).push([a.i,"",""])},56:function(a,t,i){"use strict";i.r(t);var r=i(27),c=i(28),s={created:function(){Object(r.a)("menu-2","painter")},mounted:function(){prettyPrint(),Object(c.a)()}};i(41);s.render=function(a){return a("div",{class:"api-view","data-icrush-915b0994":""},[a("p",{"data-icrush-915b0994":""},["↵            画笔是image2D的主体部分，根据当前绑定的结点不同，获取的是不同类型的画笔，目前支持svg和canvas2D画笔：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵var painter=imageObject.painter();↵            "])]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            canvas2D画布如果大小为0或者被隐藏（比如设置display:none）会获取失败并抛错。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            如果维护的第一个结点是canvas，返回的就是专门在canvas上绘图的位图画笔，svg等别的类似。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            获取画笔后就可以调用painter上的方法进行绘图了，不过在这之前，你还可以对画笔进行属性（文字大小，颜色等）配置：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.config();↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            考虑到属性设置可能有多个或单个，为了方便，提供二种参数类型：↵        "]),a("ul",{"data-icrush-915b0994":""},[a("li",{"data-icrush-915b0994":""},["(json):一次配置多个属性，键值对的方式。"]),a("li",{"data-icrush-915b0994":""},["(key, value):对属性key设置为value。"])]),a("p",{"data-icrush-915b0994":""},["↵            不同画笔的使用大体和上面的类似，差异的部分会在具体的绘图工具下说明，下面我们来看看画笔可配置属性有哪些：↵        "]),a("ul",{"data-icrush-915b0994":""},[a("li",{"data-icrush-915b0994":""},['"fillStyle":填充色或图案，默认"#000"。']),a("li",{"data-icrush-915b0994":""},['"strokeStyle":轮廓色或图案，默认"#000"。']),a("li",{"data-icrush-915b0994":""},['"lineWidth":线条宽度，默认1(单位px，下同)。']),a("li",{"data-icrush-915b0994":""},['"textAlign":文字水平对齐方式，默认"left"左对齐（还有"center"居中和"right"右对齐）。']),a("li",{"data-icrush-915b0994":""},['"textBaseline":文字垂直对齐方式，默认"middle"垂直居中（还有"top"上对齐和"bottom"下对齐）。']),a("li",{"data-icrush-915b0994":""},['"font-size":文字大小，默认16。']),a("li",{"data-icrush-915b0994":""},['"font-family":字体，默认"sans-serif"。']),a("li",{"data-icrush-915b0994":""},['"arc-start-cap":圆弧开始端闭合方式，默认"butt"直线闭合（还有"round"圆帽闭合）。']),a("li",{"data-icrush-915b0994":""},['"arc-end-cap":圆弧结束端闭合方式，和上一个类似。']),a("li",{"data-icrush-915b0994":""},['"lineDash":设置线条虚线，默认为[]表示使用实线绘制。'])]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            上面的配置项lineDash值应该是一个数组，格式：[实线长，虚线长，实线长 ...]，数组长度任意，会自动循环！↵        "]),a("h2",{id:"fixed-canvas2d","data-icrush-915b0994":""},["↵            位图画笔↵        "]),a("p",{"data-icrush-915b0994":""},["↵            除了上面列出的可配置项，因为canvas2D的配置是直接连原始画笔的（不是全部），因此其自身的2d画笔原来可配置的属性依旧可以配置，请知悉。这种绘图方法相对比较简单，下面我们来看看其特有的一些简单的绘图方法↵        "]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            原始画笔的意思是2d上下文，不是我们抽象的painter，因此不同的painter如果管理的是同一个canvas，属性配置不是完全独立的（后面要说明的svg就是独立的）。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            把当前绘制的图形变成base64返回：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵var base64=painter.toDataURL();↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            擦除画布上正方形大小是width*height的区域(正方形左上角坐标(x, y))，x和y默认0，width和height默认就是画布的尺寸，都是可选的：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.clearRect(x, y, width, height);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            把图像、画布或视频绘制到画布的指定位置上：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.drawImage();↵            "])]),a("ul",{"data-icrush-915b0994":""},[a("li",{"data-icrush-915b0994":""},["(img, x, y):在画布上定位图像。"]),a("li",{"data-icrush-915b0994":""},["(img, x, y, width, height):在画布上定位图像，并规定图像的宽度和高度。"]),a("li",{"data-icrush-915b0994":""},["(img, sx, sy, swidth, sheight, x, y, width, height):剪切图像，并在画布上定位被剪切的部分。"])]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            drawImage接口在v1.5.0版本由于一个设计上的错误，做了参数调整，此版本前升级后请进行相应修改。↵        "]),a("h2",{id:"fixed-svg","data-icrush-915b0994":""},["↵            矢图画笔↵        "]),a("p",{"data-icrush-915b0994":""},["↵            这种画笔比较特殊，画笔是绑定在维护了svg结点的结点对象上的，不过具体的绘制（比如文字是text标签）却需要对应更具体的标签，因此获取painter方法的时候可以传递一个选择器selector来绑定本次绘制目标（可选）：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵var painter=imageObject.painter(selector);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            因为绘制文字、圆形和圆弧等对应的目标标签不一样，并且一个结点只可以绘制一个图形，因此在每次绘制前都需要明确目标结点：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.bind(selector);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            大部分情况下，selector应该都是模板字符串，绘制结束需要追加到svg中去，我们提供了四种追加方法：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.appendTo|prependTo|afterTo|beforeTo(selector);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            因为限制了查找上下文是获取画笔的svg，只需要传递一个参数，具体方法和前面常规的结点操作一样。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            鉴于svg绘图的特殊性，下面以绘制文字举一个例子来看看绘制整体代码：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},['↵// 获取画笔↵var painter=$$("svg").painter("<text>");↵↵// 配置画笔↵painter.config({↵    "fillStyle":"red",↵    "font-size":30↵});↵↵// 绘制文字并追加到画布↵painter.fillText("Step By Step", 100, 100).appendTo("g.text");↵            '])]),a("h2",{id:"fixed-method","data-icrush-915b0994":""},["↵            画笔上的绘图方法↵        "]),a("p",{"data-icrush-915b0994":""},["↵            上面说明的绘图方法都是具体画笔特有的（因为不同的画笔存在差异），除此之外，大部分方法是通用的。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            在点(x, y)处绘制填充的文字text；deg表示文字旋转角度，可选：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.fillText(text, x, y[, deg]);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            在点(x, y)处绘制轮廓的文字text；deg表示文字旋转角度，可选：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.strokeText(text, x, y[, deg]);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            以(cx, cy)为圆心，内外半径分别是r1和r2，从弧度beginDeg开始，跨越弧度deg，绘制填充圆弧：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.fillArc(cx, cy, r1, r2, beginDeg, deg);↵            "])]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            除非特别说明，角度全部采用弧度值，这是为了方便记忆，别的地方一样。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            和fillArc方法类似，只不过绘制的是轮廓圆弧：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.strokeArc(cx, cy, r1, r2, beginDeg, deg);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            以(cx, cy)为圆心，半径r绘制填充圆形：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.fillCircle(cx, cy, r);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            以(cx, cy)为圆心，半径r绘制轮廓圆形：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.strokeCircle(cx, cy, r);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            以(x, y)为左上角，宽width，高height绘制填充矩形：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.fillRect(x, y, width, height);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            以(x, y)为左上角，宽width，高height绘制轮廓矩形：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.strokeRect(x, y, width, height);↵            "])]),a("h4",{"data-icrush-915b0994":""},["↵            路径↵        "]),a("p",{"data-icrush-915b0994":""},["↵            基于路径可以绘制几乎大部分图形，这里独立一小段来说明。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            开始一段独立的路径：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.beginPath();↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            闭合当前路径，也就是路径首尾闭合：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.closePath();↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            画笔移动到点(x, y)，此时笔离开了画布：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.moveTo(x, y);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            画笔移动到点(x, y)，此时笔没有离开画布：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.lineTo(x, y);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            以(cx, cy)为圆心，半径r，从弧度beginDeg开始，跨越弧度deg画弧，此时笔没有离开画布：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.arc(cx, cy, r, beginDeg, deg);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            二次贝塞尔曲线到↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.quadraticCurveTo(cpx, cpy, x, y);↵            "])]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            只有一个控制点p(cpx, cpy),画笔当前的位置和p(x, y)分别的起点和终点。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            三次贝塞尔曲线到：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);↵            "])]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            有二个控制点p(cp1x, cp1y)和p(cp2x, cp2y),画笔当前的位置和p(x, y)分别的起点和终点。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            把当前路径包裹的区域填充颜色：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.fill();↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            把当前路径上色（轮廓线）：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.stroke();↵            "])]),a("h2",{id:"fixed-gradient","data-icrush-915b0994":""},["↵            渐变色↵        "]),a("p",{"data-icrush-915b0994":""},["↵            除了使用纯色填充，还可以使用渐变色作为画笔的颜色，你把它看成普通的颜色使用就可以了。↵        "]),a("h4",{id:"fixed-linearGradient","data-icrush-915b0994":""},["↵            线性渐变↵        "]),a("p",{"data-icrush-915b0994":""},["↵            首先你需要使用画笔的createLinearGradient创建线性渐变对象，四个参数分别表示渐变的起点P(x1, y1)和终点P(x2, y2)：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵var linearGradient = painter.createLinearGradient(x1, y1, x2, y2);↵            "])]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            温馨提示：canvas画笔上述参数的单位是px，svg画笔上述参数是%，请一定要注意区分（下同）。↵        "]),a("h4",{id:"fixed-radialGradient","data-icrush-915b0994":""},["↵            环形渐变↵        "]),a("p",{"data-icrush-915b0994":""},["↵            同样的，你需要使用画笔的createRadialGradient创建环形渐变对象，三个参数分别表示渐变的圆心P(cx, cy)和半径r：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵var radialGradient = painter.createRadialGradient(cx, cy, r);↵            "])]),a("p",{class:"warn","data-icrush-915b0994":""},["↵            温馨提示：渐变的起点是圆心。↵        "]),a("h4",{"data-icrush-915b0994":""},["↵            设置与使用↵        "]),a("p",{"data-icrush-915b0994":""},["↵            设置渐变范围以后，你需要在渐变范围中添加渐变色，可以添加任意多个：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵XXXGradient.addColorStop(deep, color);↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            上述deep取值为闭区间[0, 1]，color可以是任意合法的颜色值。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            渐变如何使用，直接调用渐变的value方法即可：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},['↵painter.config({↵    "fillStyle": XXXGradient.value()↵});↵            '])]),a("p",{"data-icrush-915b0994":""},["↵            比如上面，我们给画笔设置填充色就是使用了我们刚刚获取的渐变色。↵        "]),a("h2",{id:"fixed-translate","data-icrush-915b0994":""},["↵            变换↵        "]),a("p",{"data-icrush-915b0994":""},["↵            这里的变换指的是画笔相对画布的变换，和坐标变换不一样，前者改变的是画笔特性，或者是求解点坐标的方法。↵        "]),a("p",{"data-icrush-915b0994":""},["↵            在说明具体的变换方法前，我们先来看二个与之相关的基本方法。↵        "]),a("h4",{"data-icrush-915b0994":""},["保存"]),a("p",{"data-icrush-915b0994":""},["↵            保存当前的绘图状态：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.save();↵            "])]),a("h4",{"data-icrush-915b0994":""},["↵            恢复↵        "]),a("p",{"data-icrush-915b0994":""},["↵            恢复之前保存的绘图状态：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.restore();↵            "])]),a("p",{"data-icrush-915b0994":""},["↵            接着，我们说明几个具体的变换方法。↵        "]),a("h4",{"data-icrush-915b0994":""},["↵            移动↵        "]),a("p",{"data-icrush-915b0994":""},["↵            把绘图的原点x坐标增加dx，y增加dy：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.translate(dx, dy);↵            "])]),a("h4",{"data-icrush-915b0994":""},["↵            旋转↵        "]),a("p",{"data-icrush-915b0994":""},["↵            围绕原点旋转deg：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.rotate(deg);↵            "])]),a("h4",{"data-icrush-915b0994":""},["↵            缩放↵        "]),a("p",{"data-icrush-915b0994":""},["↵            x坐标和y坐标分别缩放sx和sy倍（sy缺省取sx）：↵        "]),a("div",{"ui-copy":"","data-icrush-915b0994":""},[a("pre",{class:"prettyprint","data-icrush-915b0994":""},["↵painter.scale(sx[, sy]);↵            "])])])};t.default=s}}]);
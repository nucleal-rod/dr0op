(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{42:function(t,e,n){"use strict";(function(t){
/*!
    * image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
    * git+https://github.com/yelloxing/image2D.git
    *
    * author 心叶
    *
    * version 1.4.0
    *
    * build Thu Apr 11 2019
    *
    * Copyright yelloxing
    * Released under the MIT license
    *
    * Date:Fri Sep 06 2019 23:09:28 GMT+0800 (中国标准时间)
    */
var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){var n=Object.prototype.toString;function r(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":n.call(t)}function i(t){if(null===t||"object"!==(void 0===t?"undefined":e(t))||"[object Object]"!=r(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}function o(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&(1===t.nodeType||9===t.nodeType||11===t.nodeType)&&!i(t)}function a(t){var n=void 0===t?"undefined":e(t);return null!=t&&("object"===n||"function"===n)}function u(t){if(!a(t))return!1;var e=r(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}var l=function(t,e){for(var n in e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}return t},c="http://www.w3.org/2000/svg",f="http://www.w3.org/1999/xlink",s={whitespace:"[\\x20\\t\\r\\n\\f]",blank:"[\\n\\f\\r]",identifier:"(?:\\\\.|[\\w-]|[^\0-\\xa0])+"},d=["href","title","show","type","role","actuate"];function h(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&3===t.nodeType&&!i(t)}var p=function(t,e){var n,r=void 0;if("html"===e||"HTML"===e){if((r=document.createElement("div")).innerHTML=t,!/</.test(r.innerHTML))throw new Error("This template cannot be generated using div as a container:"+t)}else!function(t,e){if("innerHTML"in SVGElement.prototype==0||"innerHTML"in SVGSVGElement.prototype==0){var n=document.createElement("div");n.innerHTML=e;var r=function(t){var e=document.createElementNS(c,t.tagName.toLowerCase()),n=t.attributes,r=void 0;for(r=0;n&&r<n.length;r++)d.indexOf(n[r].nodeName)>=0?e.setAttributeNS(f,"xlink:"+n[r].nodeName,t.getAttribute(n[r].nodeName)):e.setAttribute(n[r].nodeName,t.getAttribute(n[r].nodeName));return e},i=r(n.firstChild);!function t(e,n){var i=e.firstChild;if(h(i))n.textContent=e.innerText;else for(;i;){var o=r(i);n.appendChild(o),i.firstChild&&t(i,o),i=i.nextSibling}}(n.firstChild,i),t.appendChild(i)}else t.innerHTML=e}(r=document.createElementNS(c,"svg"),t);n=r.childNodes;for(var i=0;i<n.length;i++)if(o(n[i]))return n[i]};function v(t,e){return new RegExp("^"+s.identifier+"$").test(t)&&(t="<"+t+"></"+t+">"),"canvas"===/<([^>]+)>.*/.exec(t)[1].toLowerCase()&&(e="HTML"),p(t,e)}function g(t,e){if("string"==typeof e||"string"==typeof t){if(t=t.trim().replace(new RegExp(s.blank,"g"),""),"string"==typeof e||/^</.test(t)){var n=v(t,e);return o(n)?[n]:[]}if("*"===t)return e.getElementsByTagName("*");var r=t.match(new RegExp("#"+s.identifier,"g"));if(r){var i=document.getElementById(r[0].replace("#",""));return o(i)?[i]:[]}var a=t.match(new RegExp("\\."+s.identifier,"g")),l=t.match(new RegExp("^"+s.identifier));if(l||a){for(var c=e.getElementsByTagName(l?l[0]:"*"),f=[],d=0;d<c.length;d++){for(var h=" "+c[d].getAttribute("class")+" ",p=!0,g=0;a&&g<a.length;g++)if(!h.match(" "+a[g].replace(".","")+" ")){p=!1;break}p&&f.push(c[d])}return f}throw new Error("Unsupported selector:"+t)}if(o(t))return[t];if(!t||t.constructor!==Array&&t.constructor!==HTMLCollection&&t.constructor!==NodeList){if(t&&t.constructor===m)return t;if(u(t)){for(var w=e.getElementsByTagName("*"),y=[],b=0;b<w.length;b++)t(w[b])&&y.push(w[b]);return y}throw new Error("Unknown selector:"+t)}for(var x=[],E=0;E<t.length;E++)o(t[E])&&x.push(t[E]);return x}var m=function t(e,n){return new t.prototype.init(e,n)};function w(){var t={},e=void 0,n=void 0,r=function(r){var i=function(e){var n,r={},i=t.root(e),o=void 0;return o=n=t.id(i),r[o]={data:i,pid:null,id:o,children:[]},function n(i,a){var u=t.child(i,e),l=void 0;for(l=0;u&&l<u.length;l++)o=t.id(u[l]),r[a].children.push(o),r[o]={data:u[l],pid:a,id:o,children:[]},n(u[l],o)}(i,o),[n,r]}(r);return e=i[1],n=i[0],function(){var t=[],r=0,i=0;return function n(o,a){a>i&&(i=a);var u=void 0;for(u=0;u<o.children.length;u++)n(e[o.children[u]],a+1);if(e[o.id].left=a+.5,0==u?(null==t[a]&&(t[a]=-.5),null==t[a-1]&&(t[a-1]=-.5),e[o.id].top=t[a]+1,t[a]+1+.5*(e[o.pid].children.length-1)-1<t[a-1]&&(e[o.id].top=t[a-1]+1-.5*(e[o.pid].children.length-1))):e[o.id].top=.5*(e[o.children[0]].top+e[o.children[u-1]].top),e[o.id].top<=t[a]){var l=t[a]+1-e[o.id].top;!function n(r,i){e[r].top+=l,t[i]<e[r].top&&(t[i]=e[r].top);var o=void 0;for(o=0;o<e[r].children.length;o++)n(e[r].children[o],i+1)}(o.id,a)}t[a]=e[o.id].top,e[o.id].top+.5>r&&(r=e[o.id].top+.5)}(e[n],0),{node:e,root:n,size:r,deep:i+1}}()};return r.root=function(e){return t.root=e,r},r.child=function(e){return t.child=e,r},r.id=function(e){return t.id=e,r},r}m.prototype.init=function(t,e){this.context=e=e||document;var n=g(t,e),r=void 0;for(r=0;r<n.length;r++)this[r]=n[r];return this.length=n.length,this},m.prototype.extend=m.extend=function(){var t=arguments[0]||{},e=arguments[1]||{},n=arguments.length;for(var r in 1===n&&(e=t,t=this),a(t)||(t={}),e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t},m.prototype.init.prototype=m.prototype;var y=function(t,e,n,r,i){var o=Math.cos(n),a=Math.sin(n);return[+((r-t)*o-(i-e)*a+t).toFixed(7),+((r-t)*a+(i-e)*o+e).toFixed(7)]},b=function(t,e,n,r,i){var o=Math.sqrt(t*t+e*e);return[+(t*n/o+r).toFixed(7),+(e*n/o+i).toFixed(7)]},x=function(t,e,n,r,i){return[+(n*(r-t)+t).toFixed(7),+(n*(i-e)+e).toFixed(7)]};function E(t){return"number"==typeof t||null!==t&&"object"===(void 0===t?"undefined":e(t))&&"[object Number]"===r(t)}var _=function(t,e){for(var n=[],r=0;r<4;r++)for(var i=0;i<e.length/4;i++)n[4*i+r]=t[r]*e[4*i]+t[r+4]*e[4*i+1]+t[r+8]*e[4*i+2]+t[r+12]*e[4*i+3];return n};var T=[],k=13,C=400,N=null;function M(t){t=function(t,e){for(var n in e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}return t}({u:.5},t);var e=void 0,n=void 0,r=void 0,i=function(t){if(e){var i=(t-n)/(r-n),o=i*i;return(i*o*e[0]+o*e[1]+i*e[2]+e[3])*(r-n)}throw new Error("You shoud first set the position!")};return i.setP=function(o,a,u,l,c,f){if(!(o<u))throw new Error("The point x-position should be increamented!");n=o,r=u;var s=t.u*c,d=t.u*f;return e=[2*(a/=u-o)-2*(l/=u-o)+s+d,3*l-3*a-2*s-d,s,a],i},i}var P=function(t,e,n){/[a-z]/.test(t.tagName)&&d.indexOf(e)>=0?t.setAttributeNS(f,"xlink:"+e,n):t.setAttribute(e,n)};function S(t,e,n,r,i,o,a){e>2*Math.PI&&(e=2*Math.PI),e<2*-Math.PI&&(e=2*-Math.PI),e<0&&(t+=e,e*=-1);var u=[],l=void 0;l=y(0,0,t,i,0),u[0]=l[0],u[1]=l[1],l=y(0,0,e,l[0],l[1]),u[2]=l[0],u[3]=l[1],l=y(0,0,t,o,0),u[4]=l[0],u[5]=l[1],l=y(0,0,e,l[0],l[1]),u[6]=l[0],u[7]=l[1],a(t,t+e,u[0]+n,u[1]+r,u[4]+n,u[5]+r,u[2]+n,u[3]+r,u[6]+n,u[7]+r,.5*(o-i))}var A=function(t,e,n,r,i){return t.beginPath(),t.translate(n,r),t.rotate(i),t.font=e["font-size"]+"px "+e["font-family"],t},L=function(t,e,n,r,i,o,a,u){return S(a,u,n,r,i,o,function(a,u,l,c,f,s,d,h,p,v,g){g<0&&(g=-g),t.beginPath(),t.moveTo(l,c),t.arc(n,r,i,a,u,!1),"round"!=e["arc-end-cap"]?t.lineTo(p,v):t.arc(.5*(d+p),.5*(h+v),g,u-Math.PI,u,!0),t.arc(n,r,o,u,a,!0),"round"!=e["arc-start-cap"]?t.lineTo(l,c):t.arc(.5*(l+f),.5*(c+s),g,a,a-Math.PI,!0)}),t},j=function(t,e,n,r){return t.beginPath(),t.moveTo(e+r,n),t.arc(e,n,r,0,2*Math.PI),t},I=function(t,e,n,r,i){return t.beginPath(),t.rect(e,n,r,i),t},D=function(t,e,n,r,i){var o=t.createLinearGradient(e,n,r,i),a={value:function(){return o},addColorStop:function(t,e){return o.addColorStop(t,e),a}};return a};function R(t,e){return"textAlign"===t&&{left:"start",right:"end",center:"middle"}[e]||e}var F=function(t,e,n,r,i){if(!o(t[0]))throw new Error("Target empty!");if("text"!==t[0].nodeName.toLowerCase())throw new Error("Need a <text> !");return t.attr("dy",{top:.5*e["font-size"],middle:0,bottom:.5*-e["font-size"]}[e.textBaseline]).css({"text-anchor":e.textAlign,"dominant-baseline":"central","font-size":e["font-size"]+"px","font-family":e["font-family"]}).attr({x:n,y:r}),{transform:"rotate("+180*i/Math.PI+","+n+","+r+")"}},B=function(t,e,n,r,i,o,a,u){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return S(a,u,n,r,i,o,function(n,r,a,u,l,c,f,s,d,h,p){var v=r-n>Math.PI?1:0,g="M"+a+" "+u;p<0&&(p=-p),g+="A"+i+" "+i+" 0 "+v+" 1 "+f+" "+s,"round"!=e["arc-end-cap"]?g+="L"+d+" "+h:g+="A"+p+" "+p+"  0 1 0 "+d+" "+h,g+="A"+o+" "+o+" 0 "+v+" 0 "+l+" "+c,"round"!=e["arc-start-cap"]?g+="L"+a+" "+u:g+="A"+p+" "+p+"  0 1 0 "+a+" "+u,t.attr("d",g)}),t},O=function(t,e,n,r){if("circle"!==t[0].nodeName.toLowerCase())throw new Error("Need a <circle> !");return t.attr({cx:e,cy:n,r:r}),t},z=function(t,e){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return t.attr("d",e),t},$=function(t,e,n,r,i){if("rect"!==t[0].nodeName.toLowerCase())throw new Error("Need a <rect> !");return t.attr({x:e,y:n,width:r,height:i}),t},G=function(t,e,n,r,i,o){!function(t){var e=t.getElementsByTagName("defs");e.length<=0&&(e=[v("<defs>","SVG")],t.appendChild(e[0])),e[0]}(e);var a="image2D-lg-"+(new Date).valueOf()+"-"+Math.random(),u=v('<linearGradient id="'+a+'" x1="'+n+'%" y1="'+r+'%" x2="'+i+'%" y2="'+o+'%"></linearGradient>');e.appendChild(u);var l={value:function(){return"url(#"+a+")"},addColorStop:function(t,e){return u.appendChild(v('<stop offset="'+100*t+'%" style="stop-color:'+e+';" />')),l}};return l};var H=function(t){return t&&t.constructor===CanvasRenderingContext2D};if(m.extend({treeLayout:function(t){t=l({"begin-deg":0,deg:2*Math.PI},t);var e=w().root(t.root).child(t.child).id(t.id),n=function n(r){var i=e(r);if("LR"===t.type||"RL"===t.type){var o=t.width/i.deep;"RL"===t.type&&(o*=-1);var a=t.height/(i.size- -.5);for(var u in i.node){var l=i.node[u];i.node[u].left=+(("RL"==t.type?t.width:0)- -l.left*o).toFixed(7),i.node[u].top=+(l.top*a).toFixed(7)}}else if("TB"===t.type||"BT"===t.type){var c=t.height/i.deep;"BT"==t.type&&(c*=-1);var f=t.width/(i.size- -.5),s=void 0,d=void 0;for(var h in i.node){var p=i.node[h];s=p.left,d=p.top,i.node[h].top=+(("BT"==t.type?t.height:0)- -s*c).toFixed(7),i.node[h].left=+(d*f).toFixed(7)}}else if("circle"===t.type){var v=t.radius/(i.deep-1),g=t.deg/(i.size- -.5);for(var m in i.node){var w=i.node[m];i.node[m].deg=(t["begin-deg"]- -g*w.top)%(2*Math.PI);var b=y(t.cx,t.cy,i.node[m].deg,t.cx- -v*(w.left-.5),t.cy);i.node[m].left=+b[0],i.node[m].top=+b[1]}}return t.drawer(i),n};return n.config=function(e){return t=l(t,e),n},n.drawer=function(e){return t.drawer=e,n},n},pieLayout:function(t){if(!u((t=l({"begin-deg":-Math.PI/2,deg:2*Math.PI,radius:[]},t)).value))throw new Error("config.value must be a function!");var e=function(e){var n=0,r=[],i=0;for(var o in e)r.push({value:t.value(e[o],o,n),data:e[o],key:o,index:n,dots:[]}),i+=r[n].value,n+=1;for(n=0;n<r.length;n++){r[n].beginDeg=0===n?t["begin-deg"]:r[n-1].beginDeg+r[n-1].deg;var a=r[n].value/i;r[n].deg=a*t.deg,r[n].percent=new Number(100*a).toFixed(2)}if(E(t.cx)&&E(t.cy))for(n=0;n<t.radius.length;n++)for(var l=0;l<r.length;l++)r[l].dots.push(y(t.cx,t.cy,r[l].beginDeg+.5*r[l].deg,t.cx+t.radius[n],t.cy));u(t.drawer)&&t.drawer(r)};return e.config=function(n){return t=l(t,n),e},e.drawer=function(n){return t.drawer=n,e},e},Matrix4:function(t){var e=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n={move:function(t,r,i,o){return e=_(function(t,e,n,r){r=r||0;var i=Math.sqrt(e*e+n*n+r*r);return[1,0,0,0,0,1,0,0,0,0,1,0,e*t/i,n*t/i,r*t/i,1]}(t,r,i,o),e),n},rotate:function(t,r,i,o,a,u,l){var c=function(t,e,n,r,i,o){if("number"==typeof t&&"number"==typeof e){if("number"!=typeof n?(n=0,r=t,i=e,o=1):"number"==typeof r&&"number"==typeof i&&"number"==typeof o||(r=t,i=e,o=n,t=0,e=0,n=0),t==r&&e==i&&n==o)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((r-t)*(r-t)+(i-e)*(i-e)),u=0!=a?(i-e)/a:1,l=0!=a?(r-t)/a:0,c=(r-t)*l+(i-e)*u,f=o-n,s=Math.sqrt(c*c+f*f),d=0!=s?f/s:1,h=0!=s?c/s:0;return[[u,d*l,l*h,0,-l,u*d,u*h,0,0,-h,d,0,e*l-t*u,n*h-t*l*d-e*u*d,-t*l*h-e*u*h-n*d,1],[u,-l,0,0,d*l,d*u,-h,0,l*h,u*h,d,0,t,e,n,1]]}throw new Error("a1 and b1 is required!")}(r,i,o,a,u,l);return e=_(_(_(c[1],function(t){var e=Math.sin(t),n=Math.cos(t);return[n,e,0,0,-e,n,0,0,0,0,1,0,0,0,0,1]}(t)),c[0]),e),n},scale:function(t,r,i,o,a,u){return e=_(function(t,e,n,r,i,o){return[t,0,0,0,0,e,0,0,0,0,n,0,(r=r||0)-r*t,(i=i||0)-i*e,(o=o||0)-o*n,1]}(t,r,i,o,a,u),e),n},multiply:function(t,r){return e=r?_(e,t):_(t,e),n},use:function(t,n,r,i){var o=_(e,[t,n,r=r||0,i=i||1]);return o[0]=+o[0].toFixed(7),o[1]=+o[1].toFixed(7),o[2]=+o[2].toFixed(7),o[3]=+o[3].toFixed(7),o},value:function(){return e}};return n},rotate:y,move:b,scale:x,dot:function(t){t=l({d:[1,1],c:[0,0],p:[0,0]},t);var e={rotate:function(n){var r=t.d[0]+t.p[0],i=t.d[1]+t.p[1],o=y(t.p[0],t.p[1],n,r,i);return t.d=[o[0]-t.p[0],o[1]-t.p[1]],e},move:function(n){return t.p=b(t.d[0],t.d[1],n,t.p[0],t.p[1]),e},scale:function(n){return t.p=x(t.c[0],t.c[1],n,t.p[0],t.p[1]),e},value:function(){return t.p}};return e},animation:function(t,e,n){var r={timer:function(t,e,n){if(!t)throw new Error("Tick is required!");e=e||C;var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return T.push({id:i,createTime:new Date,tick:t,duration:e,callback:n}),r.start(),i},start:function(){N||(N=window.setInterval(r.tick,k))},tick:function(){var t=void 0,e=void 0,n=void 0,i=void 0,o=void 0,a=void 0,u=void 0,l=T;for((T=[]).length=0,e=0;e<l.length;e++)t=(o=l[e]).createTime,n=o.tick,a=o.duration,i=o.callback,n(u=(u=(+new Date-t)/a)>1?1:u),u<1&&o.id?T.push(o):i&&i(u);T.length<=0&&r.stop()},stop:function(){N&&(window.clearInterval(N),N=null)}},i=r.timer(function(e){t(e)},e,n);return function(){var t=void 0;for(t in T)if(T[t].id==i)return void(T[t].id=void 0)}},cardinal:function(t){t=l({t:0},t);var e=void 0,n=void 0,r=function(t){if(e){for(n=-1;n+1<e.x.length&&(t>e.x[n+1]||-1==n&&t>=e.x[n+1]);)n+=1;if(-1==n||n>=e.h.length)throw new Error("Coordinate crossing!");return e.h[n](t)}throw new Error("You shoud first set the position!")};return r.setT=function(e){if("number"!=typeof e)throw new Error("Expecting a figure!");return t.t=e,r},r.setP=function(n){e={x:[],h:[]};var i=void 0,o=(n[1][1]-n[0][1])/(n[1][0]-n[0][0]),a=void 0;for(e.x[0]=n[0][0],i=1;i<n.length;i++){if(n[i][0]<=n[i-1][0])throw new Error("The point position should be increamented!");e.x[i]=n[i][0],a=i<n.length-1?(n[i+1][1]-n[i-1][1])/(n[i+1][0]-n[i-1][0]):(n[i][1]-n[i-1][1])/(n[i][0]-n[i-1][0]),e.h[i-1]=M({u:.5*(1-t.t)}).setP(n[i-1][0],n[i-1][1],n[i][0],n[i][1],o,a),o=a}return r},r}}),m.prototype.extend({appendTo:function(t,e){var n=g(t,e||document);if(!(n.length>0))throw new Error("Target empty!");for(var r=0;r<this.length;r++)n[0].appendChild(this[r]);return this},prependTo:function(t,e){var n=g(t,e||document);if(!(n.length>0))throw new Error("Target empty!");for(var r=0;r<this.length;r++)n[0].insertBefore(this[r],n[0].childNodes[0]);return this},afterTo:function(t,e){var n=g(t,e||document);if(!(n.length>0))throw new Error("Target empty!");for(var r=0;r<this.length;r++)n[0].parentNode.insertBefore(this[r],n[0].nextSibling);return this},beforeTo:function(t,e){var n=g(t,e||document);if(!(n.length>0))throw new Error("Target empty!");for(var r=0;r<this.length;r++)n[0].parentNode.insertBefore(this[r],n[0]);return this},remove:function(){for(var t=0;t<this.length;t++)this[t].parentNode.removeChild(this[t]);return this},filter:function(t){for(var e=[],n=0;n<this.length;n++)t(n,m(this[n]))&&e.push(this[n]);return m(e)},text:function(t){if(t){for(var e=0;e<this.length;e++)this[e].textContent=t;return this}if(this.length<=0)throw new Error("Target empty!");return this[0].textContent},css:function(){if(arguments.length<=1&&(arguments.length<=0||"object"!==e(arguments[0]))){if(this.length<=0)throw new Error("Target empty!");return function(t,e){var n=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return"string"==typeof e?n.getPropertyValue(e):n}(this[0],arguments[0])}for(var t=0;t<this.length;t++)if(1===arguments.length)for(var n in arguments[0])this[t].style[n]=arguments[0][n];else this[t].style[arguments[0]]=arguments[1];return this},attr:function(){if(1===arguments.length&&"object"!==e(arguments[0])){if(this.length<=0)throw new Error("Target empty!");return this[0].getAttribute(arguments[0])}if(arguments.length>0)for(var t=0;t<this.length;t++)if(1===arguments.length)for(var n in arguments[0])P(this[t],n,arguments[0][n]);else P(this[t],arguments[0],arguments[1]);return this},datum:function(t,e){if(arguments.length<=0){if(this.length<=0)throw new Error("Target empty!");return this[0].__data__}for(var n=0;n<this.length;n++)this[n].__data__="function"==typeof e?e(t,n):t;return this},data:function(t,e){if(arguments.length<=0){for(var n=[],r=0;r<this.length;r++)n[r]=this[r].__data__;return n}var i=[],o=void 0;for(o=0;o<this.length&&o<t.length;o++)this[o].__data__="function"==typeof e?e(t[o],o):t[o],i.push(this[o]);var a=m(i);for(a.__enter__=[];o<t.length;o++)a.__enter__.push("function"==typeof e?e(t[o],o):t[o]);for(a.__exit__=[];o<this.length;o++)a.__exit__.push(this[o]);return a},enter:function(t,e){if(!this.__enter__||this.__enter__.constructor!==Array)throw new Error("Not a data node object to be balanced!");for(var n=[],r=0;r<this.__enter__.length;r++)n[r]=v(t,e),n[r].__data__=this.__enter__[r];return delete this.__enter__,m(n)},exit:function(){if(!this.__exit__||this.__exit__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var t=m(this.__exit__);return delete this.__exit__,t},loop:function(t){for(var e=0;e<this.length;e++)t(this[e].__data__,e,m(this[e]));return this},bind:function(t,e){if(window.attachEvent)for(var n=0;n<this.length;n++)this[n].attachEvent("on"+t,e);else for(var r=0;r<this.length;r++)this[r].addEventListener(t,e,!1);return this},position:function(t){var e=this[0].getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-e.left,y:t.clientY-e.top}},painter:function(){if(!o(this[0]))throw new Error("Target empty!");var t=this[0],n=t.nodeName.toLowerCase();if("canvas"===n)return function(t){var n=t.getContext("2d");if("YES"!==t.__had_scale2_canvas__){t.__had_scale2_canvas__="YES";var r=t.clientWidth||t.getAttribute("width"),i=t.clientHeight||t.getAttribute("height");t.style.width=r+"px",t.style.height=i+"px",t.setAttribute("width",2*r),t.setAttribute("height",2*i),n.scale(2,2)}n.textBaseline="middle",n.textAlign="left";var o={"font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},a={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return n[arguments[0]];for(var t in arguments[0])o[t]?o[t]=arguments[0][t]:n[t]=arguments[0][t]}else 2===arguments.length&&(o[arguments[0]]?o[arguments[0]]=arguments[1]:n[arguments[0]]=arguments[1]);return a},fillText:function(t,e,r,i){return n.save(),A(n,o,e,r,i||0).fillText(t,0,0),n.restore(),a},strokeText:function(t,e,r,i){return n.save(),A(n,o,e,r,i||0).strokeText(t,0,0),n.restore(),a},beginPath:function(){return n.beginPath(),a},closePath:function(){return n.closePath(),a},moveTo:function(t,e){return n.moveTo(t,e),a},lineTo:function(t,e){return n.lineTo(t,e),a},arc:function(t,e,r,i,o){return n.arc(t,e,r,i,i+o),a},fill:function(){return n.fill(),a},stroke:function(){return n.stroke(),a},save:function(){return n.save(),a},restore:function(){return n.restore(),a},quadraticCurveTo:function(t,e,r,i){return n.quadraticCurveTo(t,e,r,i),a},bezierCurveTo:function(t,e,r,i,o,u){return n.bezierCurveTo(t,e,r,i,o,u),a},clearRect:function(e,r,i,o){return n.clearRect(e||0,r||0,i||t.getAttribute("width")/2,o||t.getAttribute("height")/2),a},toDataURL:function(){return t.toDataURL()},drawImage:function(e,r,i,o,u,l,c,f,s){return n.drawImage(e,r||0,i||0,o?2*o:t.getAttribute("width"),u?2*u:t.getAttribute("height"),l||0,c||0,f||t.getAttribute("width")/2,s||t.getAttribute("height")/2),a},fillArc:function(t,e,r,i,u,l){return L(n,o,t,e,r,i,u,l).fill(),a},strokeArc:function(t,e,r,i,u,l){return L(n,o,t,e,r,i,u,l).stroke(),a},fillCircle:function(t,e,r){return j(n,t,e,r).fill(),a},strokeCircle:function(t,e,r){return j(n,t,e,r).stroke(),a},fillRect:function(t,e,r,i){return I(n,t,e,r,i).fill(),a},strokeRect:function(t,e,r,i){return I(n,t,e,r,i).stroke(),a},createLinearGradient:function(t,e,r,i){return D(n,t,e,r,i)},translate:function(t,e){return n.translate(t,e),a},rotate:function(t){return n.rotate(t),a},scale:function(t,e){return e=e||t,n.scale(t,e),a}};return a}(t);if("svg"===n)return function(t,n){var r=void 0;n&&(r=m(n,t));var i={fillStyle:"#000",strokeStyle:"#000",lineWidth:1,textAlign:"start",textBaseline:"middle","font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},o="",a=[],u=[],l="",c={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return i[arguments[0]];for(var t in arguments[0])i[t]=R(t,arguments[0][t])}else 2===arguments.length&&(i[arguments[0]]=R(arguments[0],arguments[1]));return c},bind:function(e){return r=m(e,t),c},appendTo:function(e){return r.appendTo(e||t,t),c},prependTo:function(e){return r.prependTo(e||t,t),c},afterTo:function(e){return r.afterTo(e||t,t),c},beforeTo:function(e){return r.beforeTo(e||t,t),c},beginPath:function(){return o="",a=[],c},closePath:function(){return o+="Z",c},moveTo:function(t,e){return o+="M"+t+" "+e,a=[t,e],c},lineTo:function(t,e){return o+=(""==o?"M":"L")+t+" "+e,a=[t,e],c},arc:function(t,e,n,r,i){var u=y(t,e,r,t+n,e),l=y(t,e,r+i,t+n,e);return r=r/Math.PI*180,i=i/Math.PI*180,""==o?o+="M"+u[0]+","+u[1]:u[0]==a[0]&&u[1]==a[1]||(o+="L"+u[0]+","+u[1]),o+="A"+n+","+n+" 0 "+(i>180||i<-180?1:0)+","+(i>0?1:0)+" "+l[0]+","+l[1],c},fill:function(){return z(r,o).attr("transform",l).attr("fill",i.fillStyle),c},stroke:function(){return z(r,o).attr("transform",l).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),c},save:function(){return u.push(l),c},restore:function(){return u.length>0&&(l=u.pop()),c},quadraticCurveTo:function(t,e,n,r){return o+="Q"+t+" "+e+","+n+" "+r,c},bezierCurveTo:function(t,e,n,r,i,a){return o+="C"+t+" "+e+","+n+" "+r+","+i+" "+a,c},fillText:function(t,e,n,o){var a=F(r,i,e,n,o||0);return r.attr("transform",l+a.transform).attr("fill",i.fillStyle)[0].textContent=t,c},strokeText:function(t,e,n,o){var a=F(r,i,e,n,o||0);return r.attr("transform",l+a.transform).attr({stroke:i.strokeStyle,fill:"none"})[0].textContent=t,c},fillArc:function(t,e,n,o,a,u){return B(r,i,t,e,n,o,a,u).attr("transform",l).attr("fill",i.fillStyle),c},strokeArc:function(t,e,n,o,a,u){return B(r,i,t,e,n,o,a,u).attr("transform",l).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),c},fillCircle:function(t,e,n){return O(r,t,e,n).attr("transform",l).attr("fill",i.fillStyle),c},strokeCircle:function(t,e,n){return O(r,t,e,n).attr("transform",l).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),c},fillRect:function(t,e,n,o){return $(r,t,e,n,o).attr("transform",l).attr("fill",i.fillStyle),c},strokeRect:function(t,e,n,o){return $(r,t,e,n,o).attr("transform",l).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),c},createLinearGradient:function(e,n,i,o){return G(r,t,e,n,i,o)},translate:function(t,e){return l+=" translate("+t+","+e+")",c},rotate:function(t){return l+=" rotate("+t/Math.PI*180+")",c},scale:function(t,e){return l+=" scale("+t+","+(e=e||t)+")",c}};return c}(t,arguments[0]);throw new Error("Painter is not a function!")},layer:function(){if(!o(this[0]))throw new Error("Target empty!");if("canvas"!==this[0].nodeName.toLowerCase())throw new Error("Layer is not a function!");var t=this.painter(),e={},n=[],r=this[0].clientWidth,i=this[0].clientHeight,a={painter:function(t){return e[t]&&H(e[t].painter)||(e[t]={visible:!0},e[t].canvas=document.createElement("canvas"),e[t].canvas.setAttribute("width",r),e[t].canvas.setAttribute("height",i),e[t].painter=m(e[t].canvas).painter(),n.push(t)),e[t].painter},delete:function(t){for(var r=0;r<n.length;r++)if(n[r]===t){n.splice(r,1);break}return delete e[t],a},update:function(){t.clearRect(0,0,r,i),t.save();for(var o=0;o<n.length;o++)e[n[o]].visible&&t.drawImage(e[n[o]].canvas,0,0,r,i,0,0,r,i);return t.restore(),a},hidden:function(t){return e[t].visible=!1,a},show:function(t){return e[t].visible=!0,a}};return a}}),m.fn=m.prototype,"object"===e(t)&&"object"===e(t.exports))t.exports=m;else{var V=window.image2D,q=window.$$;m.noConflict=function(t){return window.$$===m&&(window.$$=q),t&&window.image2D===m&&(window.image2D=V),m},window.image2D=window.$$=m}}()}).call(this,n(43)(t))},43:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},46:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return u});var r=n(1),i=n.n(r),o=n(42),a=n.n(o);class u extends i.a.Component{componentDidMount(){prettyPrint(),a()(".topmenu-item").attr("active","no"),a()("#guide").attr("active","yes")}render(){return i.a.createElement("div",{className:"guider"},i.a.createElement("div",{className:"banner"},"基于svg和canvas2D提供更友好的二维绘图接口，包括常规的辅助方法！"),i.a.createElement("h2",null,"概要"),i.a.createElement("p",null,"开发这个库的初衷是希望越来越多的人可以更自由的发挥自己的创意，感受绘图的乐趣，并把积累的经验分享出来，推动库本身的发展，从而不断优化！因此，这个库永远都是自由、开源、讨论和进步的。"),i.a.createElement("p",null,"我们欢迎任何人的加入，具体的内容你可以通过访问",i.a.createElement("a",{href:"https://github.com/yelloxing/image2D/blob/master/CONTRIBUTING.md"},"贡献指南"),"来找到你可以参与的部分。任何时候，特别是遇到疑惑，联系",i.a.createElement("a",{href:"mailto:yelloxing@gmail.com"},"作者"),"都会是一个好主意。当然，提",i.a.createElement("a",{href:"https://github.com/yelloxing/image2D/issues"},"issue"),"也是不错的，因为这样更方便大家交流！"),i.a.createElement("h2",null,"起步"),i.a.createElement("p",null,"具体的使用说明请查看",i.a.createElement("a",{href:"#/api/"},"文档"),"一节，这里为了方便介绍，你需要搭建一个基本的开发环境来跟着我们学习，很简单，你只需要下载最新的",i.a.createElement("a",{download:"image2D.min.js",href:"./image2D.min.guider.js"},"image2D.min.js"),"并通过script标签引入即可。"),i.a.createElement("p",null,"作为入门，我们这里只是简单的说明一下如何绘图，具体的辅助方法和一些细节在",i.a.createElement("a",{href:"#/api/"},"文档"),"有进行说明，或者你可以提",i.a.createElement("a",{href:"https://github.com/yelloxing/image2D/issues"},"issue"),"进行交流，为了简化，这里不再赘述。"),i.a.createElement("h4",null,"获取画笔"),i.a.createElement("p",null,"绘图的第一步当然是获取画笔了，画笔分为两种：Canvas2D和SVG，我们来看看具体的代码："),i.a.createElement("pre",{className:"prettyprint lang-js"},"var painter=$$('#painter').painter();"),i.a.createElement("p",null,"上面的$$('#painter')返回一个image2D对象，通过ID选择器查找结点，然后调用对象上的painter方法就可以获取画笔了。"),i.a.createElement("p",null,"如何判断画笔的类型？如果结点是canvas获取的就是Canvas2D画笔，如果结点是svg获取的就是SVG画笔。"),i.a.createElement("h4",null,"配置"),i.a.createElement("p",null,"不管是什么画笔，都一样可以进行配置（当然有缺省值），比如画笔的粗细，颜色等，下面列出部分选项："),i.a.createElement("pre",{className:"prettyprint lang-js"},'painter.config({\n\n    "font-size":文字大小,\n\n    "lineWidth":线条宽度,\n\n    ......\n});'),i.a.createElement("p",null,"具体的配置选项请查看",i.a.createElement("a",{href:"#/api/painter"},"画笔"),"一节。"),i.a.createElement("h4",null,"绘图方法"),i.a.createElement("p",null,"画笔获取并配置好了以后，直接调用画笔上的方法即可绘图，我们拿canvas举例子。"),i.a.createElement("pre",{className:"prettyprint lang-js special-class-demo1"},'$$(\'canvas\')\n.attr({\n    "with":200,\n    "height":100\n})\n.painter()\n.config({\n    "lineWidth":10,\n    "fillStyle":"red",\n    "strokeStyle":"green"\n})\n.fillArc(100, 0, 50, 100, 0, Math.PI)\n.strokeArc(100, 0, 50, 95, 0, Math.PI);'),i.a.createElement("p",null,"具体的绘图方法也请查看",i.a.createElement("a",{href:"#/api/"},"文档"),"一节中关于画笔的部分。"),i.a.createElement("p",null,"怎么样？是不是很简单，虽然直接使用canvas或svg也可以实现，不过借助这个库绘图会更简单，你可以把更多的精力放在绘制出更有趣的作品上（如果借助本库开发了有趣的作品，可以联系我们，和大家一起分享）。"),i.a.createElement("p",null,"最后，祝你好运！"),i.a.createElement("h2",null,"下一步"),i.a.createElement("p",null,"请务必查看",i.a.createElement("a",{href:"#/api/"},"这个文档"),"。在这里，你将找到所有的接口文档，包括一些必要的说明和重要的使用用例。这里还有一个方便的",i.a.createElement("a",{href:"https://github.com/yelloxing/image2D/issues"},"问题交流"),"的部分，你可以把你使用的后的改进意见反馈给我们，或者在这里提出使用疑惑。"))}}}}]);
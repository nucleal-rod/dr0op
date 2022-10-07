(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{42:function(t,e,r){"use strict";(function(t){
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
var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){var r=Object.prototype.toString;function n(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r.call(t)}function i(t){if(null===t||"object"!==(void 0===t?"undefined":e(t))||"[object Object]"!=n(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function o(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&(1===t.nodeType||9===t.nodeType||11===t.nodeType)&&!i(t)}function a(t){var r=void 0===t?"undefined":e(t);return null!=t&&("object"===r||"function"===r)}function u(t){if(!a(t))return!1;var e=n(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}var c=function(t,e){for(var r in e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t},f="http://www.w3.org/2000/svg",l="http://www.w3.org/1999/xlink",d={whitespace:"[\\x20\\t\\r\\n\\f]",blank:"[\\n\\f\\r]",identifier:"(?:\\\\.|[\\w-]|[^\0-\\xa0])+"},s=["href","title","show","type","role","actuate"];function h(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&3===t.nodeType&&!i(t)}var p=function(t,e){var r,n=void 0;if("html"===e||"HTML"===e){if((n=document.createElement("div")).innerHTML=t,!/</.test(n.innerHTML))throw new Error("This template cannot be generated using div as a container:"+t)}else!function(t,e){if("innerHTML"in SVGElement.prototype==0||"innerHTML"in SVGSVGElement.prototype==0){var r=document.createElement("div");r.innerHTML=e;var n=function(t){var e=document.createElementNS(f,t.tagName.toLowerCase()),r=t.attributes,n=void 0;for(n=0;r&&n<r.length;n++)s.indexOf(r[n].nodeName)>=0?e.setAttributeNS(l,"xlink:"+r[n].nodeName,t.getAttribute(r[n].nodeName)):e.setAttribute(r[n].nodeName,t.getAttribute(r[n].nodeName));return e},i=n(r.firstChild);!function t(e,r){var i=e.firstChild;if(h(i))r.textContent=e.innerText;else for(;i;){var o=n(i);r.appendChild(o),i.firstChild&&t(i,o),i=i.nextSibling}}(r.firstChild,i),t.appendChild(i)}else t.innerHTML=e}(n=document.createElementNS(f,"svg"),t);r=n.childNodes;for(var i=0;i<r.length;i++)if(o(r[i]))return r[i]};function v(t,e){return new RegExp("^"+d.identifier+"$").test(t)&&(t="<"+t+"></"+t+">"),"canvas"===/<([^>]+)>.*/.exec(t)[1].toLowerCase()&&(e="HTML"),p(t,e)}function g(t,e){if("string"==typeof e||"string"==typeof t){if(t=t.trim().replace(new RegExp(d.blank,"g"),""),"string"==typeof e||/^</.test(t)){var r=v(t,e);return o(r)?[r]:[]}if("*"===t)return e.getElementsByTagName("*");var n=t.match(new RegExp("#"+d.identifier,"g"));if(n){var i=document.getElementById(n[0].replace("#",""));return o(i)?[i]:[]}var a=t.match(new RegExp("\\."+d.identifier,"g")),c=t.match(new RegExp("^"+d.identifier));if(c||a){for(var f=e.getElementsByTagName(c?c[0]:"*"),l=[],s=0;s<f.length;s++){for(var h=" "+f[s].getAttribute("class")+" ",p=!0,g=0;a&&g<a.length;g++)if(!h.match(" "+a[g].replace(".","")+" ")){p=!1;break}p&&l.push(f[s])}return l}throw new Error("Unsupported selector:"+t)}if(o(t))return[t];if(!t||t.constructor!==Array&&t.constructor!==HTMLCollection&&t.constructor!==NodeList){if(t&&t.constructor===m)return t;if(u(t)){for(var w=e.getElementsByTagName("*"),y=[],b=0;b<w.length;b++)t(w[b])&&y.push(w[b]);return y}throw new Error("Unknown selector:"+t)}for(var x=[],_=0;_<t.length;_++)o(t[_])&&x.push(t[_]);return x}var m=function t(e,r){return new t.prototype.init(e,r)};function w(){var t={},e=void 0,r=void 0,n=function(n){var i=function(e){var r,n={},i=t.root(e),o=void 0;return o=r=t.id(i),n[o]={data:i,pid:null,id:o,children:[]},function r(i,a){var u=t.child(i,e),c=void 0;for(c=0;u&&c<u.length;c++)o=t.id(u[c]),n[a].children.push(o),n[o]={data:u[c],pid:a,id:o,children:[]},r(u[c],o)}(i,o),[r,n]}(n);return e=i[1],r=i[0],function(){var t=[],n=0,i=0;return function r(o,a){a>i&&(i=a);var u=void 0;for(u=0;u<o.children.length;u++)r(e[o.children[u]],a+1);if(e[o.id].left=a+.5,0==u?(null==t[a]&&(t[a]=-.5),null==t[a-1]&&(t[a-1]=-.5),e[o.id].top=t[a]+1,t[a]+1+.5*(e[o.pid].children.length-1)-1<t[a-1]&&(e[o.id].top=t[a-1]+1-.5*(e[o.pid].children.length-1))):e[o.id].top=.5*(e[o.children[0]].top+e[o.children[u-1]].top),e[o.id].top<=t[a]){var c=t[a]+1-e[o.id].top;!function r(n,i){e[n].top+=c,t[i]<e[n].top&&(t[i]=e[n].top);var o=void 0;for(o=0;o<e[n].children.length;o++)r(e[n].children[o],i+1)}(o.id,a)}t[a]=e[o.id].top,e[o.id].top+.5>n&&(n=e[o.id].top+.5)}(e[r],0),{node:e,root:r,size:n,deep:i+1}}()};return n.root=function(e){return t.root=e,n},n.child=function(e){return t.child=e,n},n.id=function(e){return t.id=e,n},n}m.prototype.init=function(t,e){this.context=e=e||document;var r=g(t,e),n=void 0;for(n=0;n<r.length;n++)this[n]=r[n];return this.length=r.length,this},m.prototype.extend=m.extend=function(){var t=arguments[0]||{},e=arguments[1]||{},r=arguments.length;for(var n in 1===r&&(e=t,t=this),a(t)||(t={}),e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}return t},m.prototype.init.prototype=m.prototype;var y=function(t,e,r,n,i){var o=Math.cos(r),a=Math.sin(r);return[+((n-t)*o-(i-e)*a+t).toFixed(7),+((n-t)*a+(i-e)*o+e).toFixed(7)]},b=function(t,e,r,n,i){var o=Math.sqrt(t*t+e*e);return[+(t*r/o+n).toFixed(7),+(e*r/o+i).toFixed(7)]},x=function(t,e,r,n,i){return[+(r*(n-t)+t).toFixed(7),+(r*(i-e)+e).toFixed(7)]};function _(t){return"number"==typeof t||null!==t&&"object"===(void 0===t?"undefined":e(t))&&"[object Number]"===n(t)}var E=function(t,e){for(var r=[],n=0;n<4;n++)for(var i=0;i<e.length/4;i++)r[4*i+n]=t[n]*e[4*i]+t[n+4]*e[4*i+1]+t[n+8]*e[4*i+2]+t[n+12]*e[4*i+3];return r};var T=[],k=13,C=400,M=null;function P(t){t=function(t,e){for(var r in e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t}({u:.5},t);var e=void 0,r=void 0,n=void 0,i=function(t){if(e){var i=(t-r)/(n-r),o=i*i;return(i*o*e[0]+o*e[1]+i*e[2]+e[3])*(n-r)}throw new Error("You shoud first set the position!")};return i.setP=function(o,a,u,c,f,l){if(!(o<u))throw new Error("The point x-position should be increamented!");r=o,n=u;var d=t.u*f,s=t.u*l;return e=[2*(a/=u-o)-2*(c/=u-o)+d+s,3*c-3*a-2*d-s,d,a],i},i}var N=function(t,e,r){/[a-z]/.test(t.tagName)&&s.indexOf(e)>=0?t.setAttributeNS(l,"xlink:"+e,r):t.setAttribute(e,r)};function A(t,e,r,n,i,o,a){e>2*Math.PI&&(e=2*Math.PI),e<2*-Math.PI&&(e=2*-Math.PI),e<0&&(t+=e,e*=-1);var u=[],c=void 0;c=y(0,0,t,i,0),u[0]=c[0],u[1]=c[1],c=y(0,0,e,c[0],c[1]),u[2]=c[0],u[3]=c[1],c=y(0,0,t,o,0),u[4]=c[0],u[5]=c[1],c=y(0,0,e,c[0],c[1]),u[6]=c[0],u[7]=c[1],a(t,t+e,u[0]+r,u[1]+n,u[4]+r,u[5]+n,u[2]+r,u[3]+n,u[6]+r,u[7]+n,.5*(o-i))}var L=function(t,e,r,n,i){return t.beginPath(),t.translate(r,n),t.rotate(i),t.font=e["font-size"]+"px "+e["font-family"],t},S=function(t,e,r,n,i,o,a,u){return A(a,u,r,n,i,o,function(a,u,c,f,l,d,s,h,p,v,g){g<0&&(g=-g),t.beginPath(),t.moveTo(c,f),t.arc(r,n,i,a,u,!1),"round"!=e["arc-end-cap"]?t.lineTo(p,v):t.arc(.5*(s+p),.5*(h+v),g,u-Math.PI,u,!0),t.arc(r,n,o,u,a,!0),"round"!=e["arc-start-cap"]?t.lineTo(c,f):t.arc(.5*(c+l),.5*(f+d),g,a,a-Math.PI,!0)}),t},j=function(t,e,r,n){return t.beginPath(),t.moveTo(e+n,r),t.arc(e,r,n,0,2*Math.PI),t},I=function(t,e,r,n,i){return t.beginPath(),t.rect(e,r,n,i),t},R=function(t,e,r,n,i){var o=t.createLinearGradient(e,r,n,i),a={value:function(){return o},addColorStop:function(t,e){return o.addColorStop(t,e),a}};return a};function F(t,e){return"textAlign"===t&&{left:"start",right:"end",center:"middle"}[e]||e}var B=function(t,e,r,n,i){if(!o(t[0]))throw new Error("Target empty!");if("text"!==t[0].nodeName.toLowerCase())throw new Error("Need a <text> !");return t.attr("dy",{top:.5*e["font-size"],middle:0,bottom:.5*-e["font-size"]}[e.textBaseline]).css({"text-anchor":e.textAlign,"dominant-baseline":"central","font-size":e["font-size"]+"px","font-family":e["font-family"]}).attr({x:r,y:n}),{transform:"rotate("+180*i/Math.PI+","+r+","+n+")"}},D=function(t,e,r,n,i,o,a,u){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return A(a,u,r,n,i,o,function(r,n,a,u,c,f,l,d,s,h,p){var v=n-r>Math.PI?1:0,g="M"+a+" "+u;p<0&&(p=-p),g+="A"+i+" "+i+" 0 "+v+" 1 "+l+" "+d,"round"!=e["arc-end-cap"]?g+="L"+s+" "+h:g+="A"+p+" "+p+"  0 1 0 "+s+" "+h,g+="A"+o+" "+o+" 0 "+v+" 0 "+c+" "+f,"round"!=e["arc-start-cap"]?g+="L"+a+" "+u:g+="A"+p+" "+p+"  0 1 0 "+a+" "+u,t.attr("d",g)}),t},O=function(t,e,r,n){if("circle"!==t[0].nodeName.toLowerCase())throw new Error("Need a <circle> !");return t.attr({cx:e,cy:r,r:n}),t},z=function(t,e){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return t.attr("d",e),t},H=function(t,e,r,n,i){if("rect"!==t[0].nodeName.toLowerCase())throw new Error("Need a <rect> !");return t.attr({x:e,y:r,width:n,height:i}),t},G=function(t,e,r,n,i,o){!function(t){var e=t.getElementsByTagName("defs");e.length<=0&&(e=[v("<defs>","SVG")],t.appendChild(e[0])),e[0]}(e);var a="image2D-lg-"+(new Date).valueOf()+"-"+Math.random(),u=v('<linearGradient id="'+a+'" x1="'+r+'%" y1="'+n+'%" x2="'+i+'%" y2="'+o+'%"></linearGradient>');e.appendChild(u);var c={value:function(){return"url(#"+a+")"},addColorStop:function(t,e){return u.appendChild(v('<stop offset="'+100*t+'%" style="stop-color:'+e+';" />')),c}};return c};var q=function(t){return t&&t.constructor===CanvasRenderingContext2D};if(m.extend({treeLayout:function(t){t=c({"begin-deg":0,deg:2*Math.PI},t);var e=w().root(t.root).child(t.child).id(t.id),r=function r(n){var i=e(n);if("LR"===t.type||"RL"===t.type){var o=t.width/i.deep;"RL"===t.type&&(o*=-1);var a=t.height/(i.size- -.5);for(var u in i.node){var c=i.node[u];i.node[u].left=+(("RL"==t.type?t.width:0)- -c.left*o).toFixed(7),i.node[u].top=+(c.top*a).toFixed(7)}}else if("TB"===t.type||"BT"===t.type){var f=t.height/i.deep;"BT"==t.type&&(f*=-1);var l=t.width/(i.size- -.5),d=void 0,s=void 0;for(var h in i.node){var p=i.node[h];d=p.left,s=p.top,i.node[h].top=+(("BT"==t.type?t.height:0)- -d*f).toFixed(7),i.node[h].left=+(s*l).toFixed(7)}}else if("circle"===t.type){var v=t.radius/(i.deep-1),g=t.deg/(i.size- -.5);for(var m in i.node){var w=i.node[m];i.node[m].deg=(t["begin-deg"]- -g*w.top)%(2*Math.PI);var b=y(t.cx,t.cy,i.node[m].deg,t.cx- -v*(w.left-.5),t.cy);i.node[m].left=+b[0],i.node[m].top=+b[1]}}return t.drawer(i),r};return r.config=function(e){return t=c(t,e),r},r.drawer=function(e){return t.drawer=e,r},r},pieLayout:function(t){if(!u((t=c({"begin-deg":-Math.PI/2,deg:2*Math.PI,radius:[]},t)).value))throw new Error("config.value must be a function!");var e=function(e){var r=0,n=[],i=0;for(var o in e)n.push({value:t.value(e[o],o,r),data:e[o],key:o,index:r,dots:[]}),i+=n[r].value,r+=1;for(r=0;r<n.length;r++){n[r].beginDeg=0===r?t["begin-deg"]:n[r-1].beginDeg+n[r-1].deg;var a=n[r].value/i;n[r].deg=a*t.deg,n[r].percent=new Number(100*a).toFixed(2)}if(_(t.cx)&&_(t.cy))for(r=0;r<t.radius.length;r++)for(var c=0;c<n.length;c++)n[c].dots.push(y(t.cx,t.cy,n[c].beginDeg+.5*n[c].deg,t.cx+t.radius[r],t.cy));u(t.drawer)&&t.drawer(n)};return e.config=function(r){return t=c(t,r),e},e.drawer=function(r){return t.drawer=r,e},e},Matrix4:function(t){var e=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r={move:function(t,n,i,o){return e=E(function(t,e,r,n){n=n||0;var i=Math.sqrt(e*e+r*r+n*n);return[1,0,0,0,0,1,0,0,0,0,1,0,e*t/i,r*t/i,n*t/i,1]}(t,n,i,o),e),r},rotate:function(t,n,i,o,a,u,c){var f=function(t,e,r,n,i,o){if("number"==typeof t&&"number"==typeof e){if("number"!=typeof r?(r=0,n=t,i=e,o=1):"number"==typeof n&&"number"==typeof i&&"number"==typeof o||(n=t,i=e,o=r,t=0,e=0,r=0),t==n&&e==i&&r==o)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((n-t)*(n-t)+(i-e)*(i-e)),u=0!=a?(i-e)/a:1,c=0!=a?(n-t)/a:0,f=(n-t)*c+(i-e)*u,l=o-r,d=Math.sqrt(f*f+l*l),s=0!=d?l/d:1,h=0!=d?f/d:0;return[[u,s*c,c*h,0,-c,u*s,u*h,0,0,-h,s,0,e*c-t*u,r*h-t*c*s-e*u*s,-t*c*h-e*u*h-r*s,1],[u,-c,0,0,s*c,s*u,-h,0,c*h,u*h,s,0,t,e,r,1]]}throw new Error("a1 and b1 is required!")}(n,i,o,a,u,c);return e=E(E(E(f[1],function(t){var e=Math.sin(t),r=Math.cos(t);return[r,e,0,0,-e,r,0,0,0,0,1,0,0,0,0,1]}(t)),f[0]),e),r},scale:function(t,n,i,o,a,u){return e=E(function(t,e,r,n,i,o){return[t,0,0,0,0,e,0,0,0,0,r,0,(n=n||0)-n*t,(i=i||0)-i*e,(o=o||0)-o*r,1]}(t,n,i,o,a,u),e),r},multiply:function(t,n){return e=n?E(e,t):E(t,e),r},use:function(t,r,n,i){var o=E(e,[t,r,n=n||0,i=i||1]);return o[0]=+o[0].toFixed(7),o[1]=+o[1].toFixed(7),o[2]=+o[2].toFixed(7),o[3]=+o[3].toFixed(7),o},value:function(){return e}};return r},rotate:y,move:b,scale:x,dot:function(t){t=c({d:[1,1],c:[0,0],p:[0,0]},t);var e={rotate:function(r){var n=t.d[0]+t.p[0],i=t.d[1]+t.p[1],o=y(t.p[0],t.p[1],r,n,i);return t.d=[o[0]-t.p[0],o[1]-t.p[1]],e},move:function(r){return t.p=b(t.d[0],t.d[1],r,t.p[0],t.p[1]),e},scale:function(r){return t.p=x(t.c[0],t.c[1],r,t.p[0],t.p[1]),e},value:function(){return t.p}};return e},animation:function(t,e,r){var n={timer:function(t,e,r){if(!t)throw new Error("Tick is required!");e=e||C;var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return T.push({id:i,createTime:new Date,tick:t,duration:e,callback:r}),n.start(),i},start:function(){M||(M=window.setInterval(n.tick,k))},tick:function(){var t=void 0,e=void 0,r=void 0,i=void 0,o=void 0,a=void 0,u=void 0,c=T;for((T=[]).length=0,e=0;e<c.length;e++)t=(o=c[e]).createTime,r=o.tick,a=o.duration,i=o.callback,r(u=(u=(+new Date-t)/a)>1?1:u),u<1&&o.id?T.push(o):i&&i(u);T.length<=0&&n.stop()},stop:function(){M&&(window.clearInterval(M),M=null)}},i=n.timer(function(e){t(e)},e,r);return function(){var t=void 0;for(t in T)if(T[t].id==i)return void(T[t].id=void 0)}},cardinal:function(t){t=c({t:0},t);var e=void 0,r=void 0,n=function(t){if(e){for(r=-1;r+1<e.x.length&&(t>e.x[r+1]||-1==r&&t>=e.x[r+1]);)r+=1;if(-1==r||r>=e.h.length)throw new Error("Coordinate crossing!");return e.h[r](t)}throw new Error("You shoud first set the position!")};return n.setT=function(e){if("number"!=typeof e)throw new Error("Expecting a figure!");return t.t=e,n},n.setP=function(r){e={x:[],h:[]};var i=void 0,o=(r[1][1]-r[0][1])/(r[1][0]-r[0][0]),a=void 0;for(e.x[0]=r[0][0],i=1;i<r.length;i++){if(r[i][0]<=r[i-1][0])throw new Error("The point position should be increamented!");e.x[i]=r[i][0],a=i<r.length-1?(r[i+1][1]-r[i-1][1])/(r[i+1][0]-r[i-1][0]):(r[i][1]-r[i-1][1])/(r[i][0]-r[i-1][0]),e.h[i-1]=P({u:.5*(1-t.t)}).setP(r[i-1][0],r[i-1][1],r[i][0],r[i][1],o,a),o=a}return n},n}}),m.prototype.extend({appendTo:function(t,e){var r=g(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].appendChild(this[n]);return this},prependTo:function(t,e){var r=g(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].insertBefore(this[n],r[0].childNodes[0]);return this},afterTo:function(t,e){var r=g(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].parentNode.insertBefore(this[n],r[0].nextSibling);return this},beforeTo:function(t,e){var r=g(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].parentNode.insertBefore(this[n],r[0]);return this},remove:function(){for(var t=0;t<this.length;t++)this[t].parentNode.removeChild(this[t]);return this},filter:function(t){for(var e=[],r=0;r<this.length;r++)t(r,m(this[r]))&&e.push(this[r]);return m(e)},text:function(t){if(t){for(var e=0;e<this.length;e++)this[e].textContent=t;return this}if(this.length<=0)throw new Error("Target empty!");return this[0].textContent},css:function(){if(arguments.length<=1&&(arguments.length<=0||"object"!==e(arguments[0]))){if(this.length<=0)throw new Error("Target empty!");return function(t,e){var r=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return"string"==typeof e?r.getPropertyValue(e):r}(this[0],arguments[0])}for(var t=0;t<this.length;t++)if(1===arguments.length)for(var r in arguments[0])this[t].style[r]=arguments[0][r];else this[t].style[arguments[0]]=arguments[1];return this},attr:function(){if(1===arguments.length&&"object"!==e(arguments[0])){if(this.length<=0)throw new Error("Target empty!");return this[0].getAttribute(arguments[0])}if(arguments.length>0)for(var t=0;t<this.length;t++)if(1===arguments.length)for(var r in arguments[0])N(this[t],r,arguments[0][r]);else N(this[t],arguments[0],arguments[1]);return this},datum:function(t,e){if(arguments.length<=0){if(this.length<=0)throw new Error("Target empty!");return this[0].__data__}for(var r=0;r<this.length;r++)this[r].__data__="function"==typeof e?e(t,r):t;return this},data:function(t,e){if(arguments.length<=0){for(var r=[],n=0;n<this.length;n++)r[n]=this[n].__data__;return r}var i=[],o=void 0;for(o=0;o<this.length&&o<t.length;o++)this[o].__data__="function"==typeof e?e(t[o],o):t[o],i.push(this[o]);var a=m(i);for(a.__enter__=[];o<t.length;o++)a.__enter__.push("function"==typeof e?e(t[o],o):t[o]);for(a.__exit__=[];o<this.length;o++)a.__exit__.push(this[o]);return a},enter:function(t,e){if(!this.__enter__||this.__enter__.constructor!==Array)throw new Error("Not a data node object to be balanced!");for(var r=[],n=0;n<this.__enter__.length;n++)r[n]=v(t,e),r[n].__data__=this.__enter__[n];return delete this.__enter__,m(r)},exit:function(){if(!this.__exit__||this.__exit__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var t=m(this.__exit__);return delete this.__exit__,t},loop:function(t){for(var e=0;e<this.length;e++)t(this[e].__data__,e,m(this[e]));return this},bind:function(t,e){if(window.attachEvent)for(var r=0;r<this.length;r++)this[r].attachEvent("on"+t,e);else for(var n=0;n<this.length;n++)this[n].addEventListener(t,e,!1);return this},position:function(t){var e=this[0].getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-e.left,y:t.clientY-e.top}},painter:function(){if(!o(this[0]))throw new Error("Target empty!");var t=this[0],r=t.nodeName.toLowerCase();if("canvas"===r)return function(t){var r=t.getContext("2d");if("YES"!==t.__had_scale2_canvas__){t.__had_scale2_canvas__="YES";var n=t.clientWidth||t.getAttribute("width"),i=t.clientHeight||t.getAttribute("height");t.style.width=n+"px",t.style.height=i+"px",t.setAttribute("width",2*n),t.setAttribute("height",2*i),r.scale(2,2)}r.textBaseline="middle",r.textAlign="left";var o={"font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},a={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return r[arguments[0]];for(var t in arguments[0])o[t]?o[t]=arguments[0][t]:r[t]=arguments[0][t]}else 2===arguments.length&&(o[arguments[0]]?o[arguments[0]]=arguments[1]:r[arguments[0]]=arguments[1]);return a},fillText:function(t,e,n,i){return r.save(),L(r,o,e,n,i||0).fillText(t,0,0),r.restore(),a},strokeText:function(t,e,n,i){return r.save(),L(r,o,e,n,i||0).strokeText(t,0,0),r.restore(),a},beginPath:function(){return r.beginPath(),a},closePath:function(){return r.closePath(),a},moveTo:function(t,e){return r.moveTo(t,e),a},lineTo:function(t,e){return r.lineTo(t,e),a},arc:function(t,e,n,i,o){return r.arc(t,e,n,i,i+o),a},fill:function(){return r.fill(),a},stroke:function(){return r.stroke(),a},save:function(){return r.save(),a},restore:function(){return r.restore(),a},quadraticCurveTo:function(t,e,n,i){return r.quadraticCurveTo(t,e,n,i),a},bezierCurveTo:function(t,e,n,i,o,u){return r.bezierCurveTo(t,e,n,i,o,u),a},clearRect:function(e,n,i,o){return r.clearRect(e||0,n||0,i||t.getAttribute("width")/2,o||t.getAttribute("height")/2),a},toDataURL:function(){return t.toDataURL()},drawImage:function(e,n,i,o,u,c,f,l,d){return r.drawImage(e,n||0,i||0,o?2*o:t.getAttribute("width"),u?2*u:t.getAttribute("height"),c||0,f||0,l||t.getAttribute("width")/2,d||t.getAttribute("height")/2),a},fillArc:function(t,e,n,i,u,c){return S(r,o,t,e,n,i,u,c).fill(),a},strokeArc:function(t,e,n,i,u,c){return S(r,o,t,e,n,i,u,c).stroke(),a},fillCircle:function(t,e,n){return j(r,t,e,n).fill(),a},strokeCircle:function(t,e,n){return j(r,t,e,n).stroke(),a},fillRect:function(t,e,n,i){return I(r,t,e,n,i).fill(),a},strokeRect:function(t,e,n,i){return I(r,t,e,n,i).stroke(),a},createLinearGradient:function(t,e,n,i){return R(r,t,e,n,i)},translate:function(t,e){return r.translate(t,e),a},rotate:function(t){return r.rotate(t),a},scale:function(t,e){return e=e||t,r.scale(t,e),a}};return a}(t);if("svg"===r)return function(t,r){var n=void 0;r&&(n=m(r,t));var i={fillStyle:"#000",strokeStyle:"#000",lineWidth:1,textAlign:"start",textBaseline:"middle","font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},o="",a=[],u=[],c="",f={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return i[arguments[0]];for(var t in arguments[0])i[t]=F(t,arguments[0][t])}else 2===arguments.length&&(i[arguments[0]]=F(arguments[0],arguments[1]));return f},bind:function(e){return n=m(e,t),f},appendTo:function(e){return n.appendTo(e||t,t),f},prependTo:function(e){return n.prependTo(e||t,t),f},afterTo:function(e){return n.afterTo(e||t,t),f},beforeTo:function(e){return n.beforeTo(e||t,t),f},beginPath:function(){return o="",a=[],f},closePath:function(){return o+="Z",f},moveTo:function(t,e){return o+="M"+t+" "+e,a=[t,e],f},lineTo:function(t,e){return o+=(""==o?"M":"L")+t+" "+e,a=[t,e],f},arc:function(t,e,r,n,i){var u=y(t,e,n,t+r,e),c=y(t,e,n+i,t+r,e);return n=n/Math.PI*180,i=i/Math.PI*180,""==o?o+="M"+u[0]+","+u[1]:u[0]==a[0]&&u[1]==a[1]||(o+="L"+u[0]+","+u[1]),o+="A"+r+","+r+" 0 "+(i>180||i<-180?1:0)+","+(i>0?1:0)+" "+c[0]+","+c[1],f},fill:function(){return z(n,o).attr("transform",c).attr("fill",i.fillStyle),f},stroke:function(){return z(n,o).attr("transform",c).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),f},save:function(){return u.push(c),f},restore:function(){return u.length>0&&(c=u.pop()),f},quadraticCurveTo:function(t,e,r,n){return o+="Q"+t+" "+e+","+r+" "+n,f},bezierCurveTo:function(t,e,r,n,i,a){return o+="C"+t+" "+e+","+r+" "+n+","+i+" "+a,f},fillText:function(t,e,r,o){var a=B(n,i,e,r,o||0);return n.attr("transform",c+a.transform).attr("fill",i.fillStyle)[0].textContent=t,f},strokeText:function(t,e,r,o){var a=B(n,i,e,r,o||0);return n.attr("transform",c+a.transform).attr({stroke:i.strokeStyle,fill:"none"})[0].textContent=t,f},fillArc:function(t,e,r,o,a,u){return D(n,i,t,e,r,o,a,u).attr("transform",c).attr("fill",i.fillStyle),f},strokeArc:function(t,e,r,o,a,u){return D(n,i,t,e,r,o,a,u).attr("transform",c).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),f},fillCircle:function(t,e,r){return O(n,t,e,r).attr("transform",c).attr("fill",i.fillStyle),f},strokeCircle:function(t,e,r){return O(n,t,e,r).attr("transform",c).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),f},fillRect:function(t,e,r,o){return H(n,t,e,r,o).attr("transform",c).attr("fill",i.fillStyle),f},strokeRect:function(t,e,r,o){return H(n,t,e,r,o).attr("transform",c).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),f},createLinearGradient:function(e,r,i,o){return G(n,t,e,r,i,o)},translate:function(t,e){return c+=" translate("+t+","+e+")",f},rotate:function(t){return c+=" rotate("+t/Math.PI*180+")",f},scale:function(t,e){return c+=" scale("+t+","+(e=e||t)+")",f}};return f}(t,arguments[0]);throw new Error("Painter is not a function!")},layer:function(){if(!o(this[0]))throw new Error("Target empty!");if("canvas"!==this[0].nodeName.toLowerCase())throw new Error("Layer is not a function!");var t=this.painter(),e={},r=[],n=this[0].clientWidth,i=this[0].clientHeight,a={painter:function(t){return e[t]&&q(e[t].painter)||(e[t]={visible:!0},e[t].canvas=document.createElement("canvas"),e[t].canvas.setAttribute("width",n),e[t].canvas.setAttribute("height",i),e[t].painter=m(e[t].canvas).painter(),r.push(t)),e[t].painter},delete:function(t){for(var n=0;n<r.length;n++)if(r[n]===t){r.splice(n,1);break}return delete e[t],a},update:function(){t.clearRect(0,0,n,i),t.save();for(var o=0;o<r.length;o++)e[r[o]].visible&&t.drawImage(e[r[o]].canvas,0,0,n,i,0,0,n,i);return t.restore(),a},hidden:function(t){return e[t].visible=!1,a},show:function(t){return e[t].visible=!0,a}};return a}}),m.fn=m.prototype,"object"===e(t)&&"object"===e(t.exports))t.exports=m;else{var $=window.image2D,V=window.$$;m.noConflict=function(t){return window.$$===m&&(window.$$=V),t&&window.image2D===m&&(window.image2D=$),m},window.image2D=window.$$=m}}()}).call(this,r(43)(t))},43:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},49:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return u});var n=r(1),i=r.n(n),o=r(42),a=r.n(o);class u extends i.a.Component{componentDidMount(){a()(".topmenu-item").attr("active","no"),a()("#about").attr("active","yes")}render(){return i.a.createElement("div",{className:"about"},i.a.createElement("h2",null,"项目状态"),i.a.createElement("p",null,"目前项目已经稳定，短期内的任务是优化或丰富接口、修改错误和开发作品。我们期待你的加入！"),i.a.createElement("p",null,"如果希望加入，请联系",i.a.createElement("a",{href:"mailto:yelloxing@gmail.com"},"作者"),"说明希望加入的部分。"),i.a.createElement("h2",null,"参与进来"),i.a.createElement("p",null,"参与的方式有很多，并不是贡献代码才算参与了，只要是利于项目成长的就都是有价值的，包括批评的声音。大致描述的话，目前有如下参与方式："),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("em",null,"建议或参与讨论"),"使用等过程中发现的问题或需要改进的部分，包括好的建议和疑惑，都可以提issue进行讨论。"),i.a.createElement("li",null,i.a.createElement("em",null,"代码维护"),"认领issue中确定需要修改的部分，进行代码修改（请推送到dev分支）。"),i.a.createElement("li",null,i.a.createElement("em",null,"文档维护"),"位于docs下的接口API的维护工作，针对描述不准确或需要补充等地方，进行文案修改。"),i.a.createElement("li",null,i.a.createElement("em",null,"用例或作品"),"你可以在项目的demos下添加一些简单的用例，或者建立新的项目开发一个有趣的作品并告知我们。")))}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{39:function(t,e,n){"use strict";(function(t){
/*!
    * image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
    * git+https://github.com/yelloxing/image2D.git
    *
    * author 心叶
    *
    * version 1.1.3
    *
    * build Thu Apr 11 2019
    *
    * Copyright yelloxing
    * Released under the MIT license
    *
    * Date:Thu Jul 11 2019 10:54:05 GMT+0800 (GMT+08:00)
    */
var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){var n=function(t){return t&&(1===t.nodeType||9===t.nodeType||11===t.nodeType)},r=function(t){return t&&t.constructor===CanvasRenderingContext2D},i=function(t,e){for(var n in e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}return t},o="http://www.w3.org/2000/svg",a="http://www.w3.org/1999/xlink",u={whitespace:"[\\x20\\t\\r\\n\\f]",blank:"[\\n\\f\\r]",identifier:"(?:\\\\.|[\\w-]|[^\0-\\xa0])+"},f=["href","title","show","type","role","actuate"],c=function(t,e){var r,i=void 0;if("html"===e||"HTML"===e){if((i=document.createElement("div")).innerHTML=t,!/</.test(i.innerHTML))throw new Error("This template cannot be generated using div as a container:"+t)}else!function(t,e){if("innerHTML"in SVGElement.prototype==0||"innerHTML"in SVGSVGElement.prototype==0){var n=document.createElement("div");n.innerHTML=e;var r=function(t){var e=document.createElementNS(o,t.tagName.toLowerCase()),n=t.attributes,r=void 0;for(r=0;n&&r<n.length;r++)f.indexOf(n[r].nodeName)>=0?e.setAttributeNS(a,"xlink:"+n[r].nodeName,t.getAttribute(n[r].nodeName)):e.setAttribute(n[r].nodeName,t.getAttribute(n[r].nodeName));return e},i=r(n.firstChild);!function t(e,n){var i=e.firstChild;if(function(t){return t&&3===t.nodeType}(i))n.textContent=e.innerText;else for(;i;){var o=r(i);n.appendChild(o),i.firstChild&&t(i,o),i=i.nextSibling}}(n.firstChild,i),t.appendChild(i)}else t.innerHTML=e}(i=document.createElementNS(o,"svg"),t);r=i.childNodes;for(var u=0;u<r.length;u++)if(n(r[u]))return r[u]};function l(t,e){return new RegExp("^"+u.identifier+"$").test(t)&&(t="<"+t+"></"+t+">"),"canvas"===/<([^>]+)>.*/.exec(t)[1].toLowerCase()&&(e="HTML"),c(t,e)}function d(t,e){if("string"==typeof e||"string"==typeof t){if(t=t.trim().replace(new RegExp(u.blank,"g"),""),"string"==typeof e||/^</.test(t)){var r=l(t,e);return n(r)?[r]:[]}if("*"===t)return e.getElementsByTagName("*");var i=t.match(new RegExp("#"+u.identifier,"g"));if(i){var o=document.getElementById(i[0].replace("#",""));return n(o)?[o]:[]}var a=t.match(new RegExp("\\."+u.identifier,"g")),f=t.match(new RegExp("^"+u.identifier));if(f||a){for(var c=e.getElementsByTagName(f?f[0]:"*"),d=[],s=0;s<c.length;s++){for(var p=" "+c[s].getAttribute("class")+" ",v=!0,g=0;a&&g<a.length;g++)if(!p.match(" "+a[g].replace(".","")+" ")){v=!1;break}v&&d.push(c[s])}return d}throw new Error("Unsupported selector:"+t)}if(n(t))return[t];if(!t||t.constructor!==Array&&t.constructor!==HTMLCollection&&t.constructor!==NodeList){if(t&&t.constructor===h)return t;if("function"==typeof t){for(var w=e.getElementsByTagName("*"),y=[],m=0;m<w.length;m++)t(w[m])&&y.push(w[m]);return y}throw new Error("Unknown selector:"+t)}for(var _=[],x=0;x<t.length;x++)n(t[x])&&_.push(t[x]);return _}var h=function t(e,n){return new t.prototype.init(e,n)};function s(){var t={},e=void 0,n=void 0,r=function(r){var i=function(e){var n,r={},i=t.root(e),o=void 0;return o=n=t.id(i),r[o]={data:i,pid:null,id:o,children:[]},function n(i,a){var u=t.child(i,e),f=void 0;for(f=0;u&&f<u.length;f++)o=t.id(u[f]),r[a].children.push(o),r[o]={data:u[f],pid:a,id:o,children:[]},n(u[f],o)}(i,o),[n,r]}(r);return e=i[1],n=i[0],function(){var t=[],r=0,i=0;return function n(o,a){a>i&&(i=a);var u=void 0;for(u=0;u<o.children.length;u++)n(e[o.children[u]],a+1);if(e[o.id].left=a+.5,0==u?(null==t[a]&&(t[a]=-.5),null==t[a-1]&&(t[a-1]=-.5),e[o.id].top=t[a]+1,t[a]+1+.5*(e[o.pid].children.length-1)-1<t[a-1]&&(e[o.id].top=t[a-1]+1-.5*(e[o.pid].children.length-1))):e[o.id].top=.5*(e[o.children[0]].top+e[o.children[u-1]].top),e[o.id].top<=t[a]){var f=t[a]+1-e[o.id].top;!function n(r,i){e[r].top+=f,t[i]<e[r].top&&(t[i]=e[r].top);var o=void 0;for(o=0;o<e[r].children.length;o++)n(e[r].children[o],i+1)}(o.id,a)}t[a]=e[o.id].top,e[o.id].top+.5>r&&(r=e[o.id].top+.5)}(e[n],0),{node:e,root:n,size:r,deep:i+1}}()};return r.root=function(e){return t.root=e,r},r.child=function(e){return t.child=e,r},r.id=function(e){return t.id=e,r},r}h.prototype.init=function(t,e){this.context=e=e||document;var n=d(t,e),r=void 0;for(r=0;r<n.length;r++)this[r]=n[r];return this.length=n.length,this},h.prototype.extend=h.extend=function(){var t=arguments[0]||{},n=arguments[1]||{},r=arguments.length;for(var i in 1===r&&(n=t,t=this),"object"!==(void 0===t?"undefined":e(t))&&"function"!=typeof t&&(t={}),n)try{t[i]=n[i]}catch(t){throw new Error("Illegal property value！")}return t},h.prototype.init.prototype=h.prototype;var p=function(t,e,n,r,i){var o=Math.cos(n),a=Math.sin(n);return[+((r-t)*o-(i-e)*a+t).toFixed(7),+((r-t)*a+(i-e)*o+e).toFixed(7)]},v=function(t,e,n,r,i){var o=Math.sqrt(t*t+e*e);return[+(t*n/o+r).toFixed(7),+(e*n/o+i).toFixed(7)]},g=function(t,e,n,r,i){return[+(n*(r-t)+t).toFixed(7),+(n*(i-e)+e).toFixed(7)]};var w=function(t,e){for(var n=[],r=0;r<4;r++)for(var i=0;i<e.length/4;i++)n[4*i+r]=t[r]*e[4*i]+t[r+4]*e[4*i+1]+t[r+8]*e[4*i+2]+t[r+12]*e[4*i+3];return n};var y=[],m=13,_=400,x=null;function b(t){t=i({u:.5},t);var e=void 0,n=void 0,r=void 0,o=function(t){if(e){var i=(t-n)/(r-n),o=i*i;return(i*o*e[0]+o*e[1]+i*e[2]+e[3])*(r-n)}throw new Error("You shoud first set the position!")};return o.setP=function(i,a,u,f,c,l){if(!(i<u))throw new Error("The point x-position should be increamented!");n=i,r=u;var d=t.u*c,h=t.u*l;return e=[2*(a/=u-i)-2*(f/=u-i)+d+h,3*f-3*a-2*d-h,d,a],o},o}var T=function(t,e,n){/[a-z]/.test(t.tagName)&&f.indexOf(e)>=0?t.setAttributeNS(a,"xlink:"+e,n):t.setAttribute(e,n)};function E(t,e,n,r,i,o,a){e>2*Math.PI&&(e=2*Math.PI),e<2*-Math.PI&&(e=2*-Math.PI),e<0&&(t+=e,e*=-1);var u=[],f=void 0;f=p(0,0,t,i,0),u[0]=f[0],u[1]=f[1],f=p(0,0,e,f[0],f[1]),u[2]=f[0],u[3]=f[1],f=p(0,0,t,o,0),u[4]=f[0],u[5]=f[1],f=p(0,0,e,f[0],f[1]),u[6]=f[0],u[7]=f[1],a(t,t+e,u[0]+n,u[1]+r,u[4]+n,u[5]+r,u[2]+n,u[3]+r,u[6]+n,u[7]+r,.5*(o-i))}var k=function(t,e,n,r,i){return t.beginPath(),t.translate(n,r),t.rotate(i),t.font=e["font-size"]+"px "+e["font-family"],t},C=function(t,e,n,r,i,o,a,u){return E(a,u,n,r,i,o,function(a,u,f,c,l,d,h,s,p,v,g){g<0&&(g=-g),t.beginPath(),t.moveTo(f,c),t.arc(n,r,i,a,u,!1),"round"!=e["arc-end-cap"]?t.lineTo(p,v):t.arc(.5*(h+p),.5*(s+v),g,u-Math.PI,u,!0),t.arc(n,r,o,u,a,!0),"round"!=e["arc-start-cap"]?t.lineTo(f,c):t.arc(.5*(f+l),.5*(c+d),g,a,a-Math.PI,!0)}),t},M=function(t,e,n,r){return t.beginPath(),t.moveTo(e+r,n),t.arc(e,n,r,0,2*Math.PI),t};function N(t,e){return"textAlign"===t&&{left:"start",right:"end",center:"middle"}[e]||e}var L=function(t,e,r,i,o){if(!n(t[0]))throw new Error("Target empty!");if("text"!==t[0].nodeName.toLowerCase())throw new Error("Need a <text> !");return t.attr("dy",{top:.5*e["font-size"],middle:0,bottom:.5*-e["font-size"]}[e.textBaseline]).attr("transform","rotate("+180*o/Math.PI+","+r+","+i+")"),t.css({"text-anchor":e.textAlign,"dominant-baseline":"central","font-size":e["font-size"]+"px","font-family":e["font-family"]}).attr({x:r,y:i})},P=function(t,e,n,r,i,o,a,u){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return E(a,u,n,r,i,o,function(n,r,a,u,f,c,l,d,h,s,p){var v=r-n>Math.PI?1:0,g="M"+a+" "+u;p<0&&(p=-p),g+="A"+i+" "+i+" 0 "+v+" 1 "+l+" "+d,"round"!=e["arc-end-cap"]?g+="L"+h+" "+s:g+="A"+p+" "+p+"  0 1 0 "+h+" "+s,g+="A"+o+" "+o+" 0 "+v+" 0 "+f+" "+c,"round"!=e["arc-start-cap"]?g+="L"+a+" "+u:g+="A"+p+" "+p+"  0 1 0 "+a+" "+u,t.attr("d",g)}),t},S=function(t,e,n,r){if("circle"!==t[0].nodeName.toLowerCase())throw new Error("Need a <circle> !");return t.attr({cx:e,cy:n,r:r}),t},A=function(t,e){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return t.attr("d",e),t};if(h.extend({treeLayout:function(t){t=i({"begin-deg":0,deg:2*Math.PI},t);var e=s().root(t.root).child(t.child).id(t.id),n=function n(r){var i=e(r);if("LR"===t.type||"RL"===t.type){var o=t.width/i.deep;"RL"===t.type&&(o*=-1);var a=t.height/(i.size- -.5);for(var u in i.node){var f=i.node[u];i.node[u].left=+(("RL"==t.type?t.width:0)- -f.left*o).toFixed(7),i.node[u].top=+(f.top*a).toFixed(7)}}else if("TB"===t.type||"BT"===t.type){var c=t.height/i.deep;"BT"==t.type&&(c*=-1);var l=t.width/(i.size- -.5),d=void 0,h=void 0;for(var s in i.node){var v=i.node[s];d=v.left,h=v.top,i.node[s].top=+(("BT"==t.type?t.height:0)- -d*c).toFixed(7),i.node[s].left=+(h*l).toFixed(7)}}else if("circle"===t.type){var g=t.radius/(i.deep-1),w=t.deg/(i.size- -.5);for(var y in i.node){var m=i.node[y];i.node[y].deg=(t["begin-deg"]- -w*m.top)%(2*Math.PI);var _=p(t.cx,t.cy,i.node[y].deg,t.cx- -g*(m.left-.5),t.cy);i.node[y].left=+_[0],i.node[y].top=+_[1]}}return t.drawer(i),n};return n.config=function(e){return t=i(t,e),n},n.drawer=function(e){return t.drawer=e,n},n},Matrix4:function(t){var e=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n={move:function(t,r,i,o){return e=w(function(t,e,n,r){r=r||0;var i=Math.sqrt(e*e+n*n+r*r);return[1,0,0,0,0,1,0,0,0,0,1,0,e*t/i,n*t/i,r*t/i,1]}(t,r,i,o),e),n},rotate:function(t,r,i,o,a,u,f){var c=function(t,e,n,r,i,o){if("number"==typeof t&&"number"==typeof e){if("number"!=typeof n?(n=0,r=t,i=e,o=1):"number"==typeof r&&"number"==typeof i&&"number"==typeof o||(r=t,i=e,o=n,t=0,e=0,n=0),t==r&&e==i&&n==o)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((r-t)*(r-t)+(i-e)*(i-e)),u=0!=a?(i-e)/a:1,f=0!=a?(r-t)/a:0,c=(r-t)*f+(i-e)*u,l=o-n,d=Math.sqrt(c*c+l*l),h=0!=d?l/d:1,s=0!=d?c/d:0;return[[u,h*f,f*s,0,-f,u*h,u*s,0,0,-s,h,0,e*f-t*u,n*s-t*f*h-e*u*h,-t*f*s-e*u*s-n*h,1],[u,-f,0,0,h*f,h*u,-s,0,f*s,u*s,h,0,t,e,n,1]]}throw new Error("a1 and b1 is required!")}(r,i,o,a,u,f);return e=w(w(w(c[1],function(t){var e=Math.sin(t),n=Math.cos(t);return[n,e,0,0,-e,n,0,0,0,0,1,0,0,0,0,1]}(t)),c[0]),e),n},scale:function(t,r,i,o,a,u){return e=w(function(t,e,n,r,i,o){return[t,0,0,0,0,e,0,0,0,0,n,0,(r=r||0)-r*t,(i=i||0)-i*e,(o=o||0)-o*n,1]}(t,r,i,o,a,u),e),n},multiply:function(t,r){return e=r?w(e,t):w(t,e),n},use:function(t,n,r,i){var o=w(e,[t,n,r=r||0,i=i||1]);return o[0]=+o[0].toFixed(7),o[1]=+o[1].toFixed(7),o[2]=+o[2].toFixed(7),o[3]=+o[3].toFixed(7),o},value:function(){return e}};return n},rotate:p,move:v,scale:g,dot:function(t){t=i({d:[1,1],c:[0,0],p:[0,0]},t);var e={rotate:function(n){var r=t.d[0]+t.p[0],i=t.d[1]+t.p[1],o=p(t.p[0],t.p[1],n,r,i);return t.d=[o[0]-t.p[0],o[1]-t.p[1]],e},move:function(n){return t.p=v(t.d[0],t.d[1],n,t.p[0],t.p[1]),e},scale:function(n){return t.p=g(t.c[0],t.c[1],n,t.p[0],t.p[1]),e},value:function(){return t.p}};return e},animation:function(t,e,n){var r={timer:function(t,e,n){if(!t)throw new Error("Tick is required!");e=e||_;var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return y.push({id:i,createTime:new Date,tick:t,duration:e,callback:n}),r.start(),i},start:function(){x||(x=window.setInterval(r.tick,m))},tick:function(){var t=void 0,e=void 0,n=void 0,i=void 0,o=void 0,a=void 0,u=void 0,f=y;for((y=[]).length=0,e=0;e<f.length;e++)t=(o=f[e]).createTime,n=o.tick,a=o.duration,i=o.callback,n(u=(u=(+new Date-t)/a)>1?1:u),u<1&&o.id?y.push(o):i&&i(u);y.length<=0&&r.stop()},stop:function(){x&&(window.clearInterval(x),x=null)}},i=r.timer(function(e){t(e)},e,n);return function(){var t=void 0;for(t in y)if(y[t].id==i)return void(y[t].id=void 0)}},cardinal:function(t){t=i({t:0},t);var e=void 0,n=void 0,r=function(t){if(e){for(n=-1;n+1<e.x.length&&(t>e.x[n+1]||-1==n&&t>=e.x[n+1]);)n+=1;if(-1==n||n>=e.h.length)throw new Error("Coordinate crossing!");return e.h[n](t)}throw new Error("You shoud first set the position!")};return r.setT=function(e){if("number"!=typeof e)throw new Error("Expecting a figure!");return t.t=e,r},r.setP=function(n){e={x:[],h:[]};var i=void 0,o=(n[1][1]-n[0][1])/(n[1][0]-n[0][0]),a=void 0;for(e.x[0]=n[0][0],i=1;i<n.length;i++){if(n[i][0]<=n[i-1][0])throw new Error("The point position should be increamented!");e.x[i]=n[i][0],a=i<n.length-1?(n[i+1][1]-n[i-1][1])/(n[i+1][0]-n[i-1][0]):(n[i][1]-n[i-1][1])/(n[i][0]-n[i-1][0]),e.h[i-1]=b({u:.5*(1-t.t)}).setP(n[i-1][0],n[i-1][1],n[i][0],n[i][1],o,a),o=a}return r},r}}),h.prototype.extend({appendTo:function(t,e){var n=d(t,e||document);if(!(n.length>0))throw new Error("Target empty!");for(var r=0;r<this.length;r++)n[0].appendChild(this[r]);return this},prependTo:function(t,e){var n=d(t,e||document);if(!(n.length>0))throw new Error("Target empty!");for(var r=0;r<this.length;r++)n[0].insertBefore(this[r],n[0].childNodes[0]);return this},afterTo:function(t,e){var n=d(t,e||document);if(!(n.length>0))throw new Error("Target empty!");for(var r=0;r<this.length;r++)n[0].parentNode.insertBefore(this[r],n[0].nextSibling);return this},beforeTo:function(t,e){var n=d(t,e||document);if(!(n.length>0))throw new Error("Target empty!");for(var r=0;r<this.length;r++)n[0].parentNode.insertBefore(this[r],n[0]);return this},remove:function(){for(var t=0;t<this.length;t++)this[t].parentNode.removeChild(this[t]);return this},filter:function(t){for(var e=[],n=0;n<this.length;n++)t(n,h(this[n]))&&e.push(this[n]);return h(e)},text:function(t){if(t){for(var e=0;e<this.length;e++)this[e].textContent=t;return this}if(this.length<=0)throw new Error("Target empty!");return this[0].textContent},css:function(){if(arguments.length<=1&&(arguments.length<=0||"object"!==e(arguments[0]))){if(this.length<=0)throw new Error("Target empty!");return function(t,e){var n=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return"string"==typeof e?n.getPropertyValue(e):n}(this[0],arguments[0])}for(var t=0;t<this.length;t++)if(1===arguments.length)for(var n in arguments[0])this[t].style[n]=arguments[0][n];else this[t].style[arguments[0]]=arguments[1];return this},attr:function(){if(1===arguments.length&&"object"!==e(arguments[0])){if(this.length<=0)throw new Error("Target empty!");return this[0].getAttribute(arguments[0])}if(arguments.length>0)for(var t=0;t<this.length;t++)if(1===arguments.length)for(var n in arguments[0])T(this[t],n,arguments[0][n]);else T(this[t],arguments[0],arguments[1]);return this},datum:function(t,e){if(arguments.length<=0){if(this.length<=0)throw new Error("Target empty!");return this[0].__data__}for(var n=0;n<this.length;n++)this[n].__data__="function"==typeof e?e(t,n):t;return this},data:function(t,e){if(arguments.length<=0){for(var n=[],r=0;r<this.length;r++)n[r]=this[r].__data__;return n}var i=[],o=void 0;for(o=0;o<this.length&&o<t.length;o++)this[o].__data__="function"==typeof e?e(t[o],o):t[o],i.push(this[o]);var a=h(i);for(a.__enter__=[];o<t.length;o++)a.__enter__.push("function"==typeof e?e(t[o],o):t[o]);for(a.__exit__=[];o<this.length;o++)a.__exit__.push(this[o]);return a},enter:function(t,e){if(!this.__enter__||this.__enter__.constructor!==Array)throw new Error("Not a data node object to be balanced!");for(var n=[],r=0;r<this.__enter__.length;r++)n[r]=l(t,e),n[r].__data__=this.__enter__[r];return delete this.__enter__,h(n)},exit:function(){if(!this.__exit__||this.__exit__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var t=h(this.__exit__);return delete this.__exit__,t},loop:function(t){for(var e=0;e<this.length;e++)t(this[e].__data__,e,h(this[e]));return this},bind:function(t,e){if(window.attachEvent)for(var n=0;n<this.length;n++)this[n].attachEvent("on"+t,e);else for(var r=0;r<this.length;r++)this[r].addEventListener(t,e,!1);return this},position:function(t){var e=this[0].getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-e.left,y:t.clientY-e.top}},painter:function(){if(!n(this[0]))throw new Error("Target empty!");var t=this[0],r=t.nodeName.toLowerCase();if("canvas"===r)return function(t){var n=t.getContext("2d");if("YES"!==t.__had_scale2_canvas__){t.__had_scale2_canvas__="YES";var r=t.clientWidth,i=t.clientHeight;t.style.width=r+"px",t.style.height=i+"px",t.setAttribute("width",2*r),t.setAttribute("height",2*i),n.scale(2,2)}var o={"font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},a={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return n[arguments[0]];for(var t in arguments[0])o[t]?o[t]=arguments[0][t]:n[t]=arguments[0][t]}else 2===arguments.length&&(o[arguments[0]]?o[arguments[0]]=arguments[1]:n[arguments[0]]=arguments[1]);return a},fillText:function(t,e,r,i){return n.save(),k(n,o,e,r,i||0).fillText(t,0,0),n.restore(),a},strokeText:function(t,e,r,i){return n.save(),k(n,o,e,r,i||0).strokeText(t,0,0),n.restore(),a},beginPath:function(){return n.beginPath(),a},closePath:function(){return n.closePath(),a},moveTo:function(t,e){return n.moveTo(t,e),a},lineTo:function(t,e){return n.lineTo(t,e),a},fill:function(){return n.fill(),a},stroke:function(){return n.stroke(),a},clearn:function(e,r,i,o){return n.clearRect(e||0,r||0,i||t.clientWidth,o||t.clientHeight),a},toDataURL:function(){return t.toDataURL()},drawImage:function(t,e,r,i,o,u,f,c,l){return n.drawImage(t,e,r,i,o,u,f,c,l),a},fillArc:function(t,e,r,i,u,f){return C(n,o,t,e,r,i,u,f).fill(),a},strokeArc:function(t,e,r,i,u,f){return C(n,o,t,e,r,i,u,f).stroke(),a},fillCircle:function(t,e,r){return M(n,t,e,r).fill(),a},strokeCircle:function(t,e,r){return M(n,t,e,r).stroke(),a}};return a}(t);if("svg"===r)return function(t,n){var r=void 0;n&&(r=h(n,t));var i={fillStyle:"#000",strokeStyle:"#000",lineWidth:1,textAlign:"start",textBaseline:"middle","font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},o="",a={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return i[arguments[0]];for(var t in arguments[0])i[t]=N(t,arguments[0][t])}else 2===arguments.length&&(i[arguments[0]]=N(arguments[0],arguments[1]));return a},bind:function(e){return r=h(e,t),a},appendTo:function(e){return r.appendTo(e,t),a},prependTo:function(e){return r.prependTo(e,t),a},afterTo:function(e){return r.afterTo(e,t),a},beforeTo:function(e){return r.beforeTo(e,t),a},beginPath:function(){return o="",a},closePath:function(){return o+="Z",a},moveTo:function(t,e){return o+="M"+t+" "+e,a},lineTo:function(t,e){return o+="L"+t+" "+e,a},fill:function(){return A(r,o).attr("fill",i.fillStyle),a},stroke:function(){return A(r,o).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),a},fillText:function(t,e,n,o){return L(r,i,e,n,o||0).attr("fill",i.fillStyle)[0].textContent=t,a},strokeText:function(t,e,n,o){return L(r,i,e,n,o||0).attr({stroke:i.strokeStyle,fill:"none"})[0].textContent=t,a},fillArc:function(t,e,n,o,u,f){return P(r,i,t,e,n,o,u,f).attr("fill",i.fillStyle),a},strokeArc:function(t,e,n,o,u,f){return P(r,i,t,e,n,o,u,f).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),a},fillCircle:function(t,e,n){return S(r,t,e,n).attr("fill",i.fillStyle),a},strokeCircle:function(t,e,n){return S(r,t,e,n).attr({"stroke-width":i.lineWidth,stroke:i.strokeStyle,fill:"none"}),a}};return a}(t,arguments[0]);throw new Error("Painter is not a function!")},layer:function(){if(!n(this[0]))throw new Error("Target empty!");if("canvas"!==this[0].nodeName.toLowerCase())throw new Error("Layer is not a function!");var t=this[0].getContext("2d"),e={};layer_index=[];var i=this[0].clientWidth,o=this[0].clientHeight,a={painter:function(t){return e[t]&&r(e[t].painter)||(e[t]={visible:!0},e[t].canvas=document.createElement("canvas"),e[t].canvas.setAttribute("width",i),e[t].canvas.setAttribute("height",o),e[t].painter=h(e[t].canvas).painter(),layer_index.push(t)),e[t].painter},delete:function(t){for(var n=0;n<layer_index.length;n++)if(layer_index[n]===t){layer_index.splice(n,1);break}return delete e[t],a},update:function(){t.clearRect(0,0,i,o),t.save();for(var n=0;n<layer_index.length;n++)e[layer_index[n]].visible&&t.drawImage(e[layer_index[n]].canvas,0,0,i,o,0,0,i,o);return t.restore(),a},hidden:function(t){return e[t].visible=!1,a},show:function(t){return e[t].visible=!0,a}};return a}}),"object"===e(t)&&"object"===e(t.exports))t.exports=h;else{var I=window.image2D,F=window.$$;h.noConflict=function(t){return window.$$===h&&(window.$$=F),t&&window.image2D===h&&(window.image2D=I),h},window.image2D=window.$$=h}}()}).call(this,n(40)(t))},40:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},45:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return u});var r=n(1),i=n.n(r),o=n(39),a=n.n(o);class u extends i.a.Component{componentDidMount(){a()(".topmenu-item").attr("active","no"),a()("#about").attr("active","yes")}render(){return i.a.createElement("div",null,"关于：设计中，敬请期待！")}}}}]);
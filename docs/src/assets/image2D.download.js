/*!
* image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
* git+https://github.com/yelloxing/image2D.git
*
* author 心叶
*
* version 1.4.8
*
* build Thu Apr 11 2019
*
* Copyright yelloxing
* Released under the MIT license
*
* Date:Fri Nov 22 2019 23:29:27 GMT+0800 (GMT+08:00)
*/

"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};(function(){"use strict";var e=Object.prototype.toString;function r(t){if(t==null){return t===undefined?"[object Undefined]":"[object Null]"}return e.call(t)}function n(t){if(t===null||(typeof t==="undefined"?"undefined":_typeof(t))!=="object"||r(t)!="[object Object]"){return false}if(Object.getPrototypeOf(t)===null){return true}var e=t;while(Object.getPrototypeOf(e)!==null){e=Object.getPrototypeOf(e)}return Object.getPrototypeOf(t)===e}function m(t){return t!==null&&(typeof t==="undefined"?"undefined":_typeof(t))==="object"&&(t.nodeType===1||t.nodeType===9||t.nodeType===11)&&!n(t)}function i(t){var e=typeof t==="undefined"?"undefined":_typeof(t);return t!=null&&(e==="object"||e==="function")}function y(t){if(!i(t)){return false}var e=r(t);return e==="[object Function]"||e==="[object AsyncFunction]"||e==="[object GeneratorFunction]"||e==="[object Proxy]"}function b(t){var e=typeof t==="undefined"?"undefined":_typeof(t);return e==="string"||e==="object"&&t!=null&&!Array.isArray(t)&&r(t)==="[object String]"}var u=function t(e,r){for(var n in r){try{e[n]=r[n]}catch(t){throw new Error("Illegal property value！")}}return e};var a={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};var x={whitespace:"[\\x20\\t\\r\\n\\f]",blank:"[\\n\\f\\r]",identifier:"(?:\\\\.|[\\w-]|[^\0-\\xa0])+"};var f=["href","title","show","type","role","actuate"];function l(t){return t!==null&&(typeof t==="undefined"?"undefined":_typeof(t))==="object"&&t.nodeType===3&&!n(t)}var c=function t(e,r){if("innerHTML"in SVGElement.prototype===false||"innerHTML"in SVGSVGElement.prototype===false){var n=document.createElement("div");n.innerHTML=r;var o=function t(e){var r=document.createElementNS(a.svg,e.tagName.toLowerCase());var n=e.attributes;for(var i=0;n&&i<n.length;i++){if(f.indexOf(n[i].nodeName)>=0){r.setAttributeNS(a.xlink,"xlink:"+n[i].nodeName,e.getAttribute(n[i].nodeName))}else{r.setAttribute(n[i].nodeName,e.getAttribute(n[i].nodeName))}}return r};var i=o(n.firstChild);(function t(e,r){var n=e.firstChild;if(l(n)){r.textContent=e.innerText;return}while(n){var i=o(n);r.appendChild(i);if(n.firstChild)t(n,i);n=n.nextSibling}})(n.firstChild,i);e.appendChild(i)}else{e.innerHTML=r}};var o=function t(e,r){var n=void 0,i=void 0;if(r==="html"||r==="HTML"){n=document.createElement("div");n.innerHTML=e;if(!/</.test(n.innerHTML)){throw new Error("This template cannot be generated using div as a container:"+e)}}else{n=document.createElementNS(a.svg,"svg");c(n,e)}i=n.childNodes;for(var o=0;o<i.length;o++){if(m(i[o]))return i[o]}};function _(t,e){if(new RegExp("^"+x.identifier+"$").test(t))t="<"+t+"></"+t+">";var r=/<([^>]+)>.*/.exec(t)[1];if("canvas"===r.toLowerCase())e="HTML";if(!b(e)&&["div","span","p","em","i","table","ul","ol","dl","form","input","button","textarea","header","footer","article","section","h1","h2","h3","h4","h5","h6","image","video","iframe","object","style","script","link"].indexOf(r.toLowerCase())>=0)e="HTML";return o(t,e)}function d(t,e){if(b(e)||b(t)){t=t.trim().replace(new RegExp(x.blank,"g"),"");if(typeof e=="string"||/^</.test(t)){var r=_(t,e);if(m(r))return[r];else return[]}else if(t==="*"){return e.getElementsByTagName("*")}var n=t.match(new RegExp("#"+x.identifier,"g"));if(n){var i=document.getElementById(n[0].replace("#",""));if(m(i))return[i];else return[]}var o=t.match(new RegExp("\\."+x.identifier,"g")),a=t.match(new RegExp("^"+x.identifier));if(a||o){var u=e.getElementsByTagName(a?a[0]:"*"),f=[];for(var l=0;l<u.length;l++){var c=" "+u[l].getAttribute("class")+" ",d=true;for(var s=0;o&&s<o.length;s++){if(!c.match(" "+o[s].replace(".","")+" ")){d=false;break}}if(d)f.push(u[l])}return f}else{throw new Error("Unsupported selector:"+t)}}else if(m(t)){return[t]}else if(t&&(t.constructor===Array||t.constructor===HTMLCollection||t.constructor===NodeList)){var h=[];for(var v=0;v<t.length;v++){if(m(t[v]))h.push(t[v])}return h}else if(t&&t.constructor===T){return t}else if(y(t)){var p=e.getElementsByTagName("*"),g=[];for(var w=0;w<p.length;w++){if(t(p[w]))g.push(p[w])}return g}else{throw new Error("Unknown selector:"+t)}}var T=function t(e,r){return new t.prototype.init(e,r)};T.prototype.init=function(t,e){this.context=e=e||document;var r=d(t,e),n=void 0;for(n=0;n<r.length;n++){this[n]=r[n]}this.length=r.length;return this};T.prototype.extend=T.extend=function(){var t=arguments[0]||{};var e=arguments[1]||{};var r=arguments.length;if(r===1){e=t;t=this}if(!i(t)){t={}}for(var n in e){try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}}return t};T.prototype.init.prototype=T.prototype;function t(t){var f=t||{},l=void 0,n=void 0;var i=function t(){var a=[],u=0,f=0;(function t(e,r){if(r>f)f=r;var n=void 0;for(n=0;n<e.children.length;n++){t(l[e.children[n]],r+1)}l[e.id].left=r+.5;if(n==0){if(a[r]==undefined)a[r]=-.5;if(a[r-1]==undefined)a[r-1]=-.5;l[e.id].top=a[r]+1;var i=a[r]+1+(l[e.pid].children.length-1)*.5;if(i-1<a[r-1])l[e.id].top=a[r-1]+1-(l[e.pid].children.length-1)*.5}else{l[e.id].top=(l[e.children[0]].top+l[e.children[n-1]].top)*.5}if(l[e.id].top<=a[r]){var o=a[r]+1-l[e.id].top;(function t(e,r){l[e].top+=o;if(a[r]<l[e].top)a[r]=l[e].top;var n=void 0;for(n=0;n<l[e].children.length;n++){t(l[e].children[n],r+1)}})(e.id,r)}a[r]=l[e.id].top;if(l[e.id].top+.5>u)u=l[e.id].top+.5})(l[n],0);return{node:l,root:n,size:u,deep:f+1}};var o=function t(o){var a={};var e=f.root(o),u=void 0,r=void 0;u=r=f.id(e);a[u]={data:e,pid:null,id:u,children:[]};(function t(e,r){var n=f.child(e,o),i=void 0;for(i=0;n&&i<n.length;i++){u=f.id(n[i]);a[r].children.push(u);a[u]={data:n[i],pid:r,id:u,children:[]};t(n[i],u)}})(e,u);return[r,a]};var e=function t(e){var r=o(e);l=r[1];n=r[0];return i()};e.root=function(t){f.root=t;return e};e.child=function(t){f.child=t;return e};e.id=function(t){f.id=t;return e};return e}var E=function t(e,r,n,i,o){var a=Math.cos(n),u=Math.sin(n);return[+((i-e)*a-(o-r)*u+e).toFixed(7),+((i-e)*u+(o-r)*a+r).toFixed(7)]};var s=function t(e,r,n,i,o){var a=Math.sqrt(e*e+r*r);return[+(e*n/a+i).toFixed(7),+(r*n/a+o).toFixed(7)]};var h=function t(e,r,n,i,o){return[+(n*(i-e)+e).toFixed(7),+(n*(o-r)+r).toFixed(7)]};var v=function t(o){o=u({d:[1,1],c:[0,0],p:[0,0]},o);var a={rotate:function t(e){var r=o.d[0]+o.p[0],n=o.d[1]+o.p[1];var i=E(o.p[0],o.p[1],e,r,n);o.d=[i[0]-o.p[0],i[1]-o.p[1]];return a},move:function t(e){o.p=s(o.d[0],o.d[1],e,o.p[0],o.p[1]);return a},scale:function t(e){o.p=h(o.c[0],o.c[1],e,o.p[0],o.p[1]);return a},value:function t(){return o.p}};return a};function p(y){y=u({"begin-deg":0,deg:Math.PI*2},y);var b=t().root(y.root).child(y.child).id(y.id);var e=function t(e){var r=b(e);for(var n in r.node){r.node[n].deep=r.node[n].left-.5}if(y.type==="LR"||y.type==="RL"){var i=y.width/r.deep;if("RL"===y.type)i*=-1;var o=y.height/(r.size- -.5);for(var a in r.node){var u=r.node[a];r.node[a].left=+(("RL"==y.type?y.width:0)- -u.left*i).toFixed(7);r.node[a].top=+(u.top*o).toFixed(7)}}else if(y.type==="TB"||y.type==="BT"){var f=y.height/r.deep;if("BT"==y.type)f*=-1;var l=y.width/(r.size- -.5);var c=void 0,d=void 0;for(var s in r.node){var h=r.node[s];c=h.left;d=h.top;r.node[s].top=+(("BT"==y.type?y.height:0)- -c*f).toFixed(7);r.node[s].left=+(d*l).toFixed(7)}}else if(y.type==="circle"){var v=y.radius/(r.deep-1);var p=y.deg/(r.size- -.5);for(var g in r.node){var w=r.node[g];r.node[g].deg=(y["begin-deg"]- -p*w.top)%(Math.PI*2);var m=E(y.cx,y.cy,r.node[g].deg,y.cx- -v*(w.left-.5),y.cy);r.node[g].left=+m[0];r.node[g].top=+m[1]}}y.drawer(r);return t};e.config=function(t){y=u(y,t);return e};e.drawer=function(t){y.drawer=t;return e};return e}function g(t){return typeof t==="number"||t!==null&&(typeof t==="undefined"?"undefined":_typeof(t))==="object"&&r(t)==="[object Number]"}function w(f){f=u({"begin-deg":-Math.PI/2,deg:Math.PI*2,radius:[]},f);if(!y(f.value)){throw new Error("config.value must be a function!")}var e=function t(e){var r=0,n=[],i=0;for(var o in e){n.push({value:f.value(e[o],o,r),data:e[o],key:o,index:r,dots:[]});i+=n[r].value;r+=1}for(r=0;r<n.length;r++){n[r].beginDeg=r===0?f["begin-deg"]:n[r-1].beginDeg+n[r-1].deg;var a=n[r].value/i;n[r].deg=a*f.deg;n[r].percent=new Number(a*100).toFixed(2)}if(g(f.cx)&&g(f.cy)){for(r=0;r<f.radius.length;r++){for(var u=0;u<n.length;u++){n[u].dots.push(E(f.cx,f.cy,n[u].beginDeg+n[u].deg*.5,f.cx+f.radius[r],f.cy))}}}if(y(f.drawer)){f.drawer(n)}};e.config=function(t){f=u(f,t);return e};e.drawer=function(t){f.drawer=t;return e};return e}function C(t,e,r,n){n=n||0;var i=Math.sqrt(e*e+r*r+n*n);return[1,0,0,0,0,1,0,0,0,0,1,0,e*t/i,r*t/i,n*t/i,1]}function k(t){var e=Math.sin(t),r=Math.cos(t);return[r,e,0,0,-e,r,0,0,0,0,1,0,0,0,0,1]}function M(t,e,r,n,i,o){n=n||0;i=i||0;o=o||0;return[t,0,0,0,0,e,0,0,0,0,r,0,n-n*t,i-i*e,o-o*r,1]}function A(t,e,r,n,i,o){if(typeof t==="number"&&typeof e==="number"){if(typeof r!=="number"){r=0;n=t;i=e;o=1}else if(typeof n!=="number"||typeof i!=="number"||typeof o!=="number"){n=t;i=e;o=r;t=0;e=0;r=0}if(t==n&&e==i&&r==o)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((n-t)*(n-t)+(i-e)*(i-e)),u=a!=0?(i-e)/a:1,f=a!=0?(n-t)/a:0,l=(n-t)*f+(i-e)*u,c=o-r,d=Math.sqrt(l*l+c*c),s=d!=0?c/d:1,h=d!=0?l/d:0;return[[u,s*f,f*h,0,-f,u*s,u*h,0,0,-h,s,0,e*f-t*u,r*h-t*f*s-e*u*s,-t*f*h-e*u*h-r*s,1],[u,-f,0,0,s*f,s*u,-h,0,f*h,u*h,s,0,t,e,r,1]]}else{throw new Error("a1 and b1 is required!")}}var L=function t(e,r){var n=[];for(var i=0;i<4;i++){for(var o=0;o<r.length/4;o++){n[o*4+i]=e[i]*r[o*4]+e[i+4]*r[o*4+1]+e[i+8]*r[o*4+2]+e[i+12]*r[o*4+3]}}return n};function N(t){var l=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var c={move:function t(e,r,n,i){l=L(C(e,r,n,i),l);return c},rotate:function t(e,r,n,i,o,a,u){var f=A(r,n,i,o,a,u);l=L(L(L(f[1],k(e)),f[0]),l);return c},scale:function t(e,r,n,i,o,a){l=L(M(e,r,n,i,o,a),l);return c},multiply:function t(e,r){l=r?L(l,e):L(e,l);return c},use:function t(e,r,n,i){n=n||0;i=i||1;var o=L(l,[e,r,n,i]);o[0]=+o[0].toFixed(7);o[1]=+o[1].toFixed(7);o[2]=+o[2].toFixed(7);o[3]=+o[3].toFixed(7);return o},value:function t(){return l}};return c}var S=[];var P=13;var j=400;var I=null;function R(e,t,r){var f={timer:function t(e,r,n){if(!e){throw new Error("Tick is required!")}r=r||j;var i=(new Date).valueOf()+"_"+(Math.random()*1e3).toFixed(0);S.push({id:i,createTime:new Date,tick:e,duration:r,callback:n});f.start();return i},start:function t(){if(!I){I=window.setInterval(f.tick,P)}},tick:function t(){var e=void 0,r=void 0,t=void 0,n=void 0,i=void 0,o=void 0,a=void 0,u=S;S=[];S.length=0;for(r=0;r<u.length;r++){i=u[r];e=i.createTime;t=i.tick;o=i.duration;n=i.callback;a=(+new Date-e)/o;a=a>1?1:a;t(a);if(a<1&&i.id){S.push(i)}else if(n){n(a)}}if(S.length<=0){f.stop()}},stop:function t(){if(I){window.clearInterval(I);I=null}}};var n=f.timer(function(t){e(t)},t,r);return function(){var t=void 0;for(t in S){if(S[t].id==n){S[t].id=undefined;return}}}}function F(t,e){for(var r in e){try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}}return t}function D(f){f=F({u:.5},f);var l=void 0,c=void 0,d=void 0;var s=function t(e){if(l){var r=(e-c)/(d-c),n=r*r,i=r*n;var o=i*l[0]+n*l[1]+r*l[2]+l[3];return o*(d-c)}else throw new Error("You shoud first set the position!")};s.setP=function(t,e,r,n,i,o){if(t<r){c=t;d=r;var a=f.u*i,u=f.u*o;e/=r-t;n/=r-t;l=[2*e-2*n+a+u,3*n-3*e-2*a-u,a,e]}else throw new Error("The point x-position should be increamented!");return s};return s}function B(i){i=u({t:0},i);var o=void 0,r=void 0;var a=function t(e){if(o){r=-1;while(r+1<o.x.length&&(e>o.x[r+1]||r==-1&&e>=o.x[r+1])){r+=1}if(r==-1||r>=o.h.length)throw new Error("Coordinate crossing!");return o.h[r](e)}else{throw new Error("You shoud first set the position!")}};a.setT=function(t){if(typeof t==="number"){i.t=t}else{throw new Error("Expecting a figure!")}return a};a.setP=function(t){o={x:[],h:[]};var e=void 0,r=(t[1][1]-t[0][1])/(t[1][0]-t[0][0]),n=void 0;o.x[0]=t[0][0];for(e=1;e<t.length;e++){if(t[e][0]<=t[e-1][0])throw new Error("The point position should be increamented!");o.x[e]=t[e][0];n=e<t.length-1?(t[e+1][1]-t[e-1][1])/(t[e+1][0]-t[e-1][0]):(t[e][1]-t[e-1][1])/(t[e][0]-t[e-1][0]);o.h[e-1]=D({u:(1-i.t)*.5}).setP(t[e-1][0],t[e-1][1],t[e][0],t[e][1],r,n);r=n}return a};return a}var O=function t(e,r){var n=d(e,r||document);if(n.length>0){for(var i=0;i<this.length;i++){n[0].appendChild(this[i])}}else{throw new Error("Target empty!")}return this};var z=function t(e,r){var n=d(e,r||document);if(n.length>0){for(var i=0;i<this.length;i++){n[0].insertBefore(this[i],n[0].childNodes[0])}}else{throw new Error("Target empty!")}return this};var G=function t(e,r){var n=d(e,r||document);if(n.length>0){for(var i=0;i<this.length;i++){n[0].parentNode.insertBefore(this[i],n[0].nextSibling)}}else{throw new Error("Target empty!")}return this};var H=function t(e,r){var n=d(e,r||document);if(n.length>0){for(var i=0;i<this.length;i++){n[0].parentNode.insertBefore(this[i],n[0])}}else{throw new Error("Target empty!")}return this};var q=function t(){for(var e=0;e<this.length;e++){this[e].parentNode.removeChild(this[e])}return this};var $=function t(e){var r=[];for(var n=0;n<this.length;n++){if(e(n,T(this[n])))r.push(this[n])}return T(r)};var V=function t(e){if(e){for(var r=0;r<this.length;r++){this[r].textContent=e}return this}if(this.length<=0)throw new Error("Target empty!");return this[0].textContent};function W(t,e){var r=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return b(e)?r.getPropertyValue(e):r}function U(){if(arguments.length<=1&&(arguments.length<=0||_typeof(arguments[0])!=="object")){if(this.length<=0)throw new Error("Target empty!");return W(this[0],arguments[0])}for(var t=0;t<this.length;t++){if(arguments.length===1){for(var e in arguments[0]){this[t].style[e]=arguments[0][e]}}else this[t].style[arguments[0]]=arguments[1]}return this}var X=function t(e,r,n){if(/[a-z]/.test(e.tagName)&&f.indexOf(r)>=0){e.setAttributeNS(a.xlink,"xlink:"+r,n)}else e.setAttribute(r,n)};function Y(){if(arguments.length===1&&_typeof(arguments[0])!=="object"){if(this.length<=0)throw new Error("Target empty!");return this[0].getAttribute(arguments[0])}else if(arguments.length>0){for(var t=0;t<this.length;t++){if(arguments.length===1){for(var e in arguments[0]){X(this[t],e,arguments[0][e])}}else X(this[t],arguments[0],arguments[1])}}return this}var Q=function t(e,r){if(arguments.length<=0){if(this.length<=0)throw new Error("Target empty!");return this[0].__data__}for(var n=0;n<this.length;n++){this[n].__data__=typeof r==="function"?r(e,n):e}return this};var Z=function t(e,r){if(arguments.length<=0){var n=[];for(var i=0;i<this.length;i++){n[i]=this[i].__data__}return n}var o=[],a=void 0;for(a=0;a<this.length&&a<e.length;a++){this[a].__data__=typeof r==="function"?r(e[a],a):e[a];o.push(this[a])}var u=T(o);u.__enter__=[];for(;a<e.length;a++){u.__enter__.push(typeof r==="function"?r(e[a],a):e[a])}u.__exit__=[];for(;a<this.length;a++){u.__exit__.push(this[a])}return u};var J=function t(e,r){if(!this.__enter__||this.__enter__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var n=[];for(var i=0;i<this.__enter__.length;i++){n[i]=_(e,r);n[i].__data__=this.__enter__[i]}delete this.__enter__;return T(n)};var K=function t(){if(!this.__exit__||this.__exit__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var e=T(this.__exit__);delete this.__exit__;return e};var tt=function t(e){for(var r=0;r<this.length;r++){e(this[r].__data__,r,T(this[r]))}return this};var et=function t(e,r){if(window.attachEvent){for(var n=0;n<this.length;n++){this[n].attachEvent("on"+e,r)}}else{for(var i=0;i<this.length;i++){this[i].addEventListener(e,r,false)}}return this};var rt=function t(e){var r=this[0].getBoundingClientRect();if(!e||!e.clientX)throw new Error("Event is necessary!");return{x:e.clientX-r.left,y:e.clientY-r.top}};function nt(t,e,r,n,i,o,a){if(e>Math.PI*2)e=Math.PI*2;if(e<-Math.PI*2)e=-Math.PI*2;if(e<0){t+=e;e*=-1}var u=[],f=void 0;f=E(0,0,t,i,0);u[0]=f[0];u[1]=f[1];f=E(0,0,e,f[0],f[1]);u[2]=f[0];u[3]=f[1];f=E(0,0,t,o,0);u[4]=f[0];u[5]=f[1];f=E(0,0,e,f[0],f[1]);u[6]=f[0];u[7]=f[1];a(t,t+e,u[0]+r,u[1]+n,u[4]+r,u[5]+n,u[2]+r,u[3]+n,u[6]+r,u[7]+n,(o-i)*.5)}var it=function t(e,r,n,i,o){e.beginPath();e.translate(n,i);e.rotate(o);e.font=r["font-size"]+"px "+r["font-family"];return e};var ot=function t(d,s,h,v,p,g,e,r){nt(e,r,h,v,p,g,function(t,e,r,n,i,o,a,u,f,l,c){if(c<0)c=-c;d.beginPath();d.moveTo(r,n);d.arc(h,v,p,t,e,false);if(s["arc-end-cap"]!="round")d.lineTo(f,l);else d.arc((a+f)*.5,(u+l)*.5,c,e-Math.PI,e,true);d.arc(h,v,g,e,t,true);if(s["arc-start-cap"]!="round")d.lineTo(r,n);else d.arc((r+i)*.5,(n+o)*.5,c,t,t-Math.PI,true)});return d};var at=function t(e,r,n,i){e.beginPath();e.moveTo(r+i,n);e.arc(r,n,i,0,Math.PI*2);return e};var ut=function t(e,r,n,i,o){e.beginPath();e.rect(r,n,i,o);return e};var ft=function t(e,r,n,i,o){var a=e.createLinearGradient(r,n,i,o);var u={value:function t(){return a},addColorStop:function t(e,r){a.addColorStop(e,r);return u}};return u};var lt=function t(e,r,n,i){var o=e.createRadialGradient(r,n,0,r,n,i);var a={value:function t(){return o},addColorStop:function t(e,r){o.addColorStop(e,r);return a}};return a};function ct(c){var d=c.getContext("2d");var t=c.clientWidth||c.getAttribute("width"),e=c.clientHeight||c.getAttribute("height");c.style.width=t+"px";c.style.height=e+"px";c.setAttribute("width",t*2);c.setAttribute("height",e*2);d.scale(2,2);d.textBaseline="middle";d.textAlign="left";var u={"font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"};var s={config:function t(){if(arguments.length===1){if(_typeof(arguments[0])!=="object")return d[arguments[0]];for(var e in arguments[0]){if(u[e])u[e]=arguments[0][e];else d[e]=arguments[0][e]}}else if(arguments.length===2){if(u[arguments[0]])u[arguments[0]]=arguments[1];else d[arguments[0]]=arguments[1]}return s},fillText:function t(e,r,n,i){d.save();it(d,u,r,n,i||0).fillText(e,0,0);d.restore();return s},strokeText:function t(e,r,n,i){d.save();it(d,u,r,n,i||0).strokeText(e,0,0);d.restore();return s},beginPath:function t(){d.beginPath();return s},closePath:function t(){d.closePath();return s},moveTo:function t(e,r){d.moveTo(e,r);return s},lineTo:function t(e,r){d.lineTo(e,r);return s},arc:function t(e,r,n,i,o){d.arc(e,r,n,i,i+o);return s},fill:function t(){d.fill();return s},stroke:function t(){d.stroke();return s},save:function t(){d.save();return s},restore:function t(){d.restore();return s},quadraticCurveTo:function t(e,r,n,i){d.quadraticCurveTo(e,r,n,i);return s},bezierCurveTo:function t(e,r,n,i,o,a){d.bezierCurveTo(e,r,n,i,o,a);return s},clearRect:function t(e,r,n,i){d.clearRect(e||0,r||0,n||c.getAttribute("width")/2,i||c.getAttribute("height")/2);return s},toDataURL:function t(){return c.toDataURL()},drawImage:function t(e,r,n,i,o,a,u,f,l){d.drawImage(e,r||0,n||0,i?i*2:c.getAttribute("width"),o?o*2:c.getAttribute("height"),a||0,u||0,f||c.getAttribute("width")/2,l||c.getAttribute("height")/2);return s},fillArc:function t(e,r,n,i,o,a){ot(d,u,e,r,n,i,o,a).fill();return s},strokeArc:function t(e,r,n,i,o,a){ot(d,u,e,r,n,i,o,a).stroke();return s},fillCircle:function t(e,r,n){at(d,e,r,n).fill();return s},strokeCircle:function t(e,r,n){at(d,e,r,n).stroke();return s},fillRect:function t(e,r,n,i){ut(d,e,r,n,i).fill();return s},strokeRect:function t(e,r,n,i){ut(d,e,r,n,i).stroke();return s},createLinearGradient:function t(e,r,n,i){return ft(d,e,r,n,i)},createRadialGradient:function t(e,r,n){return lt(d,e,r,n)},translate:function t(e,r){d.translate(e,r);return s},rotate:function t(e){d.rotate(e);return s},scale:function t(e,r){r=r||e;d.scale(e,r);return s}};return s}function dt(t,e){if(t==="textAlign"){return{left:"start",right:"end",center:"middle"}[e]||e}return e}var st=function t(e,r,n,i,o){if(!m(e[0]))throw new Error("Target empty!");if(e[0].nodeName.toLowerCase()!=="text")throw new Error("Need a <text> !");e.attr("dy",{top:r["font-size"]*.5,middle:0,bottom:-r["font-size"]*.5}[r.textBaseline]).css({"text-anchor":r.textAlign,"dominant-baseline":"central","font-size":r["font-size"]+"px","font-family":r["font-family"]}).attr({x:n,y:i});return{transform:"rotate("+o*180/Math.PI+","+n+","+i+")"}};var ht=function t(h,v,e,r,p,g,n,i){if(h[0].nodeName.toLowerCase()!=="path")throw new Error("Need a <path> !");nt(n,i,e,r,p,g,function(t,e,r,n,i,o,a,u,f,l,c){var d=e-t>Math.PI?1:0,s="M"+r+" "+n;if(c<0)c=-c;s+="A"+p+" "+p+" 0 "+d+" 1 "+a+" "+u;if(v["arc-end-cap"]!="round")s+="L"+f+" "+l;else s+="A"+c+" "+c+" "+" 0 1 0 "+f+" "+l;s+="A"+g+" "+g+" 0 "+d+" 0 "+i+" "+o;if(v["arc-start-cap"]!="round")s+="L"+r+" "+n;else s+="A"+c+" "+c+" "+" 0 1 0 "+r+" "+n;h.attr("d",s)});return h};var vt=function t(e,r,n,i){if(e[0].nodeName.toLowerCase()!=="circle")throw new Error("Need a <circle> !");e.attr({cx:r,cy:n,r:i});return e};var pt=function t(e,r){if(e[0].nodeName.toLowerCase()!=="path")throw new Error("Need a <path> !");e.attr("d",r);return e};var gt=function t(e,r,n,i,o){if(e[0].nodeName.toLowerCase()!=="rect")throw new Error("Need a <rect> !");e.attr({x:r,y:n,width:i,height:o});return e};var wt=function t(e){var r=e.getElementsByTagName("defs");if(r.length<=0){r=[_("<defs>","SVG")];e.appendChild(r[0])}return r[0]};var mt=function t(e,r,n,i,o,a){var u=wt(r);var f="image2D-lg-"+(new Date).valueOf()+"-"+Math.random();var l=_('<linearGradient id="'+f+'" x1="'+n+'%" y1="'+i+'%" x2="'+o+'%" y2="'+a+'%"></linearGradient>');r.appendChild(l);var c={value:function t(){return"url(#"+f+")"},addColorStop:function t(e,r){l.appendChild(_('<stop offset="'+e*100+'%" style="stop-color:'+r+';" />'));return c}};return c};var yt=function t(e,r,n,i,o){var a=wt(r);var u="image2D-rg-"+(new Date).valueOf()+"-"+Math.random();var f=_('<radialGradient id="'+u+'" cx="'+n+'%" cy="'+i+'%" r="'+o+'%"></radialGradient>');r.appendChild(f);var l={value:function t(){return"url(#"+u+")"},addColorStop:function t(e,r){f.appendChild(_('<stop offset="'+e*100+'%" style="stop-color:'+r+';" />'));return l}};return l};function bt(o,t){var u=void 0;if(t)u=T(t,o);var f={fillStyle:"#000",strokeStyle:"#000",lineWidth:1,textAlign:"start",textBaseline:"middle","font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"};var l="",c=[];var e=[],d="";var s={config:function t(){if(arguments.length===1){if(_typeof(arguments[0])!=="object")return f[arguments[0]];for(var e in arguments[0]){f[e]=dt(e,arguments[0][e])}}else if(arguments.length===2)f[arguments[0]]=dt(arguments[0],arguments[1]);return s},bind:function t(e){u=T(e,o);return s},appendTo:function t(e){u.appendTo(e||o,o);return s},prependTo:function t(e){u.prependTo(e||o,o);return s},afterTo:function t(e){u.afterTo(e||o,o);return s},beforeTo:function t(e){u.beforeTo(e||o,o);return s},beginPath:function t(){l="";c=[];return s},closePath:function t(){l+="Z";return s},moveTo:function t(e,r){l+="M"+e+" "+r;c=[e,r];return s},lineTo:function t(e,r){l+=(l==""?"M":"L")+e+" "+r;c=[e,r];return s},arc:function t(e,r,n,i,o){var a=E(e,r,i,e+n,r);var u=E(e,r,i+o,e+n,r);i=i/Math.PI*180;o=o/Math.PI*180;if(l==""){l+="M"+a[0]+","+a[1]}else if(a[0]!=c[0]||a[1]!=c[1]){l+="L"+a[0]+","+a[1]}l+="A"+n+","+n+" 0 "+(o>180||o<-180?1:0)+","+(o>0?1:0)+" "+u[0]+","+u[1];return s},fill:function t(){pt(u,l).attr("transform",d).attr("fill",f.fillStyle);return s},stroke:function t(){pt(u,l).attr("transform",d).attr({"stroke-width":f.lineWidth,stroke:f.strokeStyle,fill:"none"});return s},save:function t(){e.push(d);return s},restore:function t(){if(e.length>0)d=e.pop();return s},quadraticCurveTo:function t(e,r,n,i){l+="Q"+e+" "+r+","+n+" "+i;return s},bezierCurveTo:function t(e,r,n,i,o,a){l+="C"+e+" "+r+","+n+" "+i+","+o+" "+a;return s},fillText:function t(e,r,n,i){var o=st(u,f,r,n,i||0);u.attr("transform",d+o.transform).attr("fill",f.fillStyle)[0].textContent=e;return s},strokeText:function t(e,r,n,i){var o=st(u,f,r,n,i||0);u.attr("transform",d+o.transform).attr({stroke:f.strokeStyle,fill:"none"})[0].textContent=e;return s},fillArc:function t(e,r,n,i,o,a){ht(u,f,e,r,n,i,o,a).attr("transform",d).attr("fill",f.fillStyle);return s},strokeArc:function t(e,r,n,i,o,a){ht(u,f,e,r,n,i,o,a).attr("transform",d).attr({"stroke-width":f.lineWidth,stroke:f.strokeStyle,fill:"none"});return s},fillCircle:function t(e,r,n){vt(u,e,r,n).attr("transform",d).attr("fill",f.fillStyle);return s},strokeCircle:function t(e,r,n){vt(u,e,r,n).attr("transform",d).attr({"stroke-width":f.lineWidth,stroke:f.strokeStyle,fill:"none"});return s},fillRect:function t(e,r,n,i){gt(u,e,r,n,i).attr("transform",d).attr("fill",f.fillStyle);return s},strokeRect:function t(e,r,n,i){gt(u,e,r,n,i).attr("transform",d).attr({"stroke-width":f.lineWidth,stroke:f.strokeStyle,fill:"none"});return s},createLinearGradient:function t(e,r,n,i){return mt(u,o,e,r,n,i)},createRadialGradient:function t(e,r,n){return yt(u,o,e,r,n)},translate:function t(e,r){d+=" translate("+e+","+r+")";return s},rotate:function t(e){d+=" rotate("+e/Math.PI*180+")";return s},scale:function t(e,r){r=r||e;d+=" scale("+e+","+r+")";return s}};return s}function xt(){if(!m(this[0]))throw new Error("Target empty!");var t=this[0],e=t.nodeName.toLowerCase();if(e==="canvas")return ct(t);if(e==="svg")return bt(t,arguments[0]);throw new Error("Painter is not a function!")}var _t=function t(e){return e&&e.constructor===CanvasRenderingContext2D};function Tt(){if(!m(this[0]))throw new Error("Target empty!");if(this[0].nodeName.toLowerCase()!=="canvas")throw new Error("Layer is not a function!");var r=this.painter(),n={},i=[];var o=this[0].clientWidth,a=this[0].clientHeight;var u={painter:function t(e){if(!n[e]||!_t(n[e].painter)){n[e]={visible:true};n[e].canvas=document.createElement("canvas");n[e].canvas.setAttribute("width",o);n[e].canvas.setAttribute("height",a);n[e].painter=T(n[e].canvas).painter();i.push(e)}return n[e].painter},delete:function t(e){for(var r=0;r<i.length;r++){if(i[r]===e){i.splice(r,1);break}}delete n[e];return u},update:function t(){r.clearRect(0,0,o,a);r.save();for(var e=0;e<i.length;e++){if(n[i[e]].visible)r.drawImage(n[i[e]].canvas,0,0,o,a,0,0,o,a)}r.restore();return u},hidden:function t(e){n[e].visible=false;return u},show:function t(e){n[e].visible=true;return u}};return u}T.extend({treeLayout:p,pieLayout:w,Matrix4:N,rotate:E,move:s,scale:h,dot:v,animation:R,cardinal:B});T.prototype.extend({appendTo:O,prependTo:z,afterTo:G,beforeTo:H,remove:q,filter:$,text:V,css:U,attr:Y,datum:Q,data:Z,enter:J,exit:K,loop:tt,bind:et,position:rt,painter:xt,layer:Tt});T.fn=T.prototype;if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=T}else{var Et=window.image2D,Ct=window.$$;T.noConflict=function(t){if(window.$$===T){window.$$=Ct}if(t&&window.image2D===T){window.image2D=Et}return T};window.image2D=window.$$=T}})();
/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/entry.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var QuickPaper =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('2');
 // 引入启动界面

__etcpack__scope_args__=window.__etcpack__getBundle('15');
var App =__etcpack__scope_args__.default;
 // 引入基础样式

__etcpack__scope_args__=window.__etcpack__getBundle('18');
 // 引入公共样式

__etcpack__scope_args__=window.__etcpack__getBundle('19');

__etcpack__scope_args__=window.__etcpack__getBundle('20');

__etcpack__scope_args__=window.__etcpack__getBundle('21');

document.getElementById('root').innerHTML = ""; // 安装路由

__etcpack__scope_args__=window.__etcpack__getBundle('22');
var loadRouter=__etcpack__scope_args__.loadRouter;
var goRouter=__etcpack__scope_args__.goRouter;

QuickPaper.prototype.loadRouter = loadRouter;
QuickPaper.prototype.goRouter = goRouter; // 监听浏览器点击了回退按钮

if (window.addEventListener) window.addEventListener("popstate", function (e) {
  setTimeout(function () {
    // 主动跳转的时候可以控制是否需要刷新
    if (window.image2d_noRefresh) {
      window.image2d_noRefresh = false;
    } else {
      window.location.reload();
    }
  }, 10);
}, false); //根对象

window.quickPaper = new QuickPaper({
  //挂载点
  el: document.getElementById('root'),
  // 启动QuickPaper
  render: function render(createElement) {
    return createElement(App);
  }
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/quick-paper/dist/quick-paper.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        "use strict";function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach((function(e){_defineProperty2(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _defineProperty2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
* quick-paper v0.4.1
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/!function(){var t=Object.prototype.toString;function e(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":t.call(e)}var n=function(t,n){return null!==n&&"object"===_typeof2(n)&&t.indexOf(n.nodeType)>-1&&!function(t){if(null===t||"object"!==_typeof2(t)||"[object Object]"!=e(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}(n)},r=function(t){var n=_typeof2(t);return"string"===n||"object"===n&&null!=t&&!Array.isArray(t)&&"[object String]"===e(t)},o=function(t){if(!function(t){var e=_typeof2(t);return null!=t&&("object"===e||"function"===e)}(t))return!1;var n=e(t);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n},i=function(t){return Array.isArray(t)};function s(t){/^[_$]/.test(t)&&console.error("The beginning of _ or $ is not allowed："+t)}var l=1;function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={},i=[];if(!r(t))return{type:"component",options:t,attrs:{},children:[]};for(var s in e)/^@/.test(s)?o[s.replace(/^@/,"q-on:")]=e[s]:/^:/.test(s)?o["q-bind"+s]=e[s]:o[s]=e[s];for(var l,a=0;a<n.length;a++)l=n[a],r(l)?/\{\{[^}]+\}\}/.test(l)?i.push({type:"bindText",content:('" '+l+' "').replace(/\{\{([^}]+)\}\}/g,'"+$1+"')}):i.push({type:"text",content:l}):i.push(l);return{type:"none",tagName:t,attrs:o,children:i}}function c(t){for(var e=(t+"").toLowerCase(),n=(t+"").toUpperCase(),r="",o=!1,i=0;i<t.length;i++)"-"!=t[i]?o?(r+=n[i],o=!1):r+=e[i]:o=!0;return r}var u={blankReg:new RegExp("[\\x20\\t\\r\\n\\f]"),blanksReg:/^[\x20\t\r\n\f]{0,}$/,identifier:/^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/},f=["+","-","*","/","%","&","|","!","?",":","[","]","(",")",">","<","="],_=["+","-","*","/","%","&","|","!","?",":",">","<","=","<=",">=","==","===","!=","!=="];function h(t,e,n){e=e.trim();var o=-1,i=null,s=function(){return i=o++<e.length-1?e[o]:null},l=function(t){return e.substring(o,t+o>e.length?e.length:t+o)};s();for(var a=[];!(o>=e.length);)if(f.indexOf(i)>-1)if(["&","|","="].indexOf(i)>-1)if(["==="].indexOf(l(3))>-1)a.push(l(3)),o+=2,s();else{if(!(["&&","||","=="].indexOf(l(2))>-1))throw new Error("Illegal expression : "+e+"\nstep='analyseExpress',index="+o);a.push(l(2)),o+=1,s()}else["!=="].indexOf(l(3))>-1?(a.push(l(3)),o+=2,s()):[">=","<=","!="].indexOf(l(2))>-1?(a.push(l(2)),o+=1,s()):(a.push(i),s());else if(['"',"'"].indexOf(i)>-1){var c="",h=i;for(s();i!=h;){if(o>=e.length)throw new Error("String unclosed error : "+e+"\nstep='analyseExpress',index="+o);c+=i,s()}a.push(c+"@string"),s()}else if(/\d/.test(i)){var p="no";c=i;for(s();o<e.length;){if(/\d/.test(i))c+=i,"error"==p&&(p="yes");else{if("."!=i||"no"!=p)break;c+=i,p="error"}s()}"error"==p&&(c+="0"),a.push(+c)}else if(["null","true"].indexOf(l(4))>-1)a.push({null:null,true:!0}[l(4)]),o+=3,s();else if(["false"].indexOf(l(5))>-1)a.push({false:!1}[l(5)]),o+=4,s();else if(["undefined"].indexOf(l(9))>-1)a.push({undefined:void 0}[l(9)]),o+=8,s();else if(u.blankReg.test(i))do{s()}while(u.blankReg.test(i)&&o<e.length);else{var d=!1;if("."==i&&(d=!0,s()),!u.identifier.test(i))throw new Error("Illegal express : "+e+"\nstep='analyseExpress',index="+o);for(var m=1;o+m<=e.length&&u.identifier.test(l(m));)m+=1;if(d)a.push("["),a.push(l(m-1)+"@string"),a.push("]");else{var g=l(m-1),v=g in n?n[g]:t[g];a.push(r(v)?v+"@string":v)}o+=m-2,s()}for(var y=0,b=0;b<a.length;b++)["+","-"].indexOf(a[b])>-1&&(0==b||_.indexOf(a[y-1])>-1)?(a[y++]=+(a[b]+a[b+1]),b+=1):a[y++]=a[b];return a.length=y,a}var p=function(t){return"string"==typeof t?t.replace(/@string$/,""):t};function d(t){for(var e,n=0,r=0;r<t.length;r++)"!"==t[r]?t[n]=!t[++r]:t[n]=t[r],n+=1;if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"*"==t[r]?t[n-1]=p(t[n-1])*p(t[++r]):"/"==t[r]?t[n-1]=p(t[n-1])/p(t[++r]):"%"==t[r]?t[n-1]=p(t[n-1])%p(t[++r]):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"+"==t[r]?t[n-1]="string"==typeof(e=p(t[n-1])+p(t[++r]))?e+"@string":e:"-"==t[r]?t[n-1]=p(t[n-1])-p(t[++r]):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)">"==t[r]?t[n-1]=p(t[n-1])>p(t[++r]):"<"==t[r]?t[n-1]=p(t[n-1])<p(t[++r]):"<="==t[r]?t[n-1]=p(t[n-1])<=p(t[++r]):">="==t[r]?t[n-1]=p(t[n-1])>=p(t[++r]):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"=="==t[r]?t[n-1]=p(t[n-1])==p(t[++r]):"==="==t[r]?t[n-1]=p(t[n-1])===p(t[++r]):"!="==t[r]?t[n-1]=p(t[n-1])!=p(t[++r]):"!=="==t[r]?t[n-1]=p(t[n-1])!==p(t[++r]):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"&&"==t[r]?(t[n-1]=p(t[n-1])&&p(t[1+r]),r+=1):"||"==t[r]?(t[n-1]=p(t[n-1])||p(t[1+r]),r+=1):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"?"==t[r]?(t[n-1]=p(t[n-1])?p(t[r+1]):p(t[r+3]),r+=3):t[n++]=t[r];if(1==n)return p(t[0]);throw t.length=n,new Error("Unrecognized expression : ["+t.toString()+"]")}var m=function(t){for(var e=!0;e;){e=!1;for(var n=[],o=[],i=!1,s=0;s<t.length;s++)if("["==t[s]&&0!=s&&"]"!=t[s-1]){if(i){n.push("[");for(var l=0;l<o.length;l++)n.push(o[l])}else i=!0;o=[]}else if("]"==t[s]&&i){e=!0;var a=d(o),c=n[n.length-1][a];n[n.length-1]=r(c)?c+"@string":c,i=!1}else i?o.push(t[s]):n.push(t[s]);t=n}return t},g=function(t){for(var e=[],n=[],r=0;r<t.length;r++)"["==t[r]?n=[]:"]"==t[r]?e.push(d(n)):n.push(t[r]);return e};function v(t,e,n){var o,i=function t(e,n,o){if(n.indexOf("(")>-1){for(var i=[],s=[],l=0,a=0;a<n.length;a++)if("("==n[a])l>0&&s.push("("),l+=1;else if(")"==n[a]){if(l>1&&s.push(")"),0==(l-=1)){var c=d(t(e,s));i.push(r(c)?c+"@string":c),s=[]}}else l>0?s.push(n[a]):i.push(n[a]);n=i}return m(n)}(t,e);if("["!=i[0])o=[d(i)];else if("]"==i[i.length-1])o=g(i);else{var s=i.lastIndexOf("]"),l=g(i.slice(0,s+1)),a=i.slice(s+1);a.unshift(function(t,e,n){for(var r=(e[0]in n?n[e[0]]:t[e[0]]),o=1;o<e.length;o++)try{r=r[e[o]]}catch(r){throw console.error({target:t,scope:n,expressArray:e,index:o}),r}return r}(t,l,n)),o=[d(a)]}return o}
/*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */var y=function(t,e,n){arguments.length<3&&(n={});var r=h(t,e,n),o=v(t,r,n);if(o.length>1)throw new Error("Illegal expression : "+e+"\nstep='evalExpress',path="+o+",expressArray="+r);return o[0]};function b(t,e,n){window.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function N(t){if(!(this instanceof N))throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");var e;this._name=t.name||"noname",this.$$lifecycle(t.beforeCreate),this.$$init(t),this.$$lifecycle("created"),e=this._el,n([1,9,11],e)&&this.$$mount()}!function(t){t.prototype.$$init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in this._options=t,this._uid=l++,this._data=o(t.data)?t.data():t.data,this._el=t.el,this.__isMounted=!1,this.__isDestroyed=!1,t.methods)s(e),this[e]=t.methods[e];for(var n in this._data)this[n]=this._data[n];for(var r in this.__componentLib_scope={},t.component)this.__componentLib_scope[r]=t.component[r];for(var i in this.__directiveLib_scope={},t.directive)this.__directiveLib_scope[i]=t.directive[i]}}(N),function(t){t.prototype.$$lifecycle=function(t){o(t)?t():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(t)>-1&&o(this._options[t])&&this._options[t].call(this)}}(N),function(t){t.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(a),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],function t(e,n,r,o){var i,s=y(e,n);if(s){if("none"==s.type){var l=c(s.tagName);e.__componentLib[l]||e.__componentLib_scope[l]?(s.options=e.__componentLib[l]||e.__componentLib_scope[l],s.type="component"):s.type="tag"}if("component"==s.type){i=document.createElement("quick-paper-component"),r.appendChild(i),s.options.el=i,"render"in s.options||(s.options.render=function(t){return t("quick-paper-component",{},[])}),s.instance=new o(s.options),s.instance.__parent=e;var a={};for(var u in s.attrs)/^data-quickpaper-/.test(u)||(/^:/.test(u)?a[u.replace("q-bind"+u)]=s.attrs[u]:/^@/.test(u)?a[u.replace(u.replace(/^@/,"q-on:"))]=s.attrs[u]:a[u]=s.attrs[u]);var f={attrs:a,instance:s.instance};if("component"==f.instance._name){var _=f.attrs["q-bind:is"];f.instance.lister(o,e[_])}e.__componentTask.push(f)}else if("tag"==s.type){for(var h in i=document.createElement(s.tagName),"Quick-Paper-COMPONENT"==r.nodeName||"Quick-Paper-COMPONENT"==r._nodeName?(b=i,(v=r).parentNode.replaceChild(b,v),e._el=i):r.appendChild(i),s.attrs){var p=s.attrs[h],d=(h+":").split(":"),m=e.__directiveLib[c(d[0])]||e.__directiveLib_scope[c(d[0])];m?e.__directiveTask.push(_objectSpread(_objectSpread({el:i},m),{},{value:p,type:d[1]})):i.setAttribute(h,p)}for(var g=0;g<s.children.length;g++)t(e,n+".children["+g+"]",i,o)}else"text"==s.type?((i=document.createTextNode("")).textContent=s.content.replace(/↵/g,"\n"),r.appendChild(i)):"bindText"==s.type?((i=document.createTextNode("")).textContent=y(e,s.content).replace(/↵/g,"\n"),r.appendChild(i),e.__bindTextTask.push({el:i,content:s.content})):console.error("Type not expected："+s.type);var v,b}else console.error("vnode is undefined!")}(this,"_vnode",this._el,t);for(var e=0;e<this.__directiveTask.length;e++){var n=this.__directiveTask[e];if(o(n.inserted)){var r=void 0;try{r=y(this,n.value)}catch(t){}n.inserted(n.el,{target:this,exp:n.value,value:r,type:n.type})}}!function(t){var e=function(e){s(e),o(t[e])&&console.error('Data property "'+e+'" has already been defined as a Method.');var n=t._data[e];t[e]=n,Object.defineProperty(t,e,{get:function(){return n},set:function(e){n=e,t.$$updateComponent()}})};for(var n in t._data)e(n)}(this),this.__isMounted=!0,this.$$lifecycle("mounted")},t.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var e=0;e<this.__directiveTask.length;e++){var n=this.__directiveTask[e];if(o(n.update)){var r=void 0;try{r=y(this,n.value)}catch(t){}n.update(n.el,{target:this,exp:n.value,value:r,type:n.type})}}for(var i=0;i<this.__bindTextTask.length;i++){var s=this.__bindTextTask[i],l=y(this,s.content).replace(/↵/g,"\n");s.el.textContent!=l&&(s.el.textContent=l)}for(var a=0;a<this.__componentTask.length;a++){var c=this.__componentTask[a];if("component"==c.instance._name){var u=c.attrs["q-bind:is"];c.instance.lister(t,this[u])}}this.$$lifecycle("updated")},t.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var t=0;t<this.__directiveTask.length;t++){var e=this.__directiveTask[t];o(e.delete)&&e.delete(e.el,{target:this,exp:e.value,value:y(this,e.value),type:e.type})}this.$$lifecycle("destroyed")}}(N);var $=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var n;var i=Object.prototype.toString;function s(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i.call(t)}var l=function(t,e){return null!==e&&"object"===o(e)&&t.indexOf(e.nodeType)>-1&&!function(t){if(null===t||"object"!==o(t)||"[object Object]"!=s(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(e)},a=function(t){var e=o(t);return"string"===e||"object"===e&&null!=t&&!Array.isArray(t)&&"[object String]"===s(t)},c=function(t){if(!function(t){var e=o(t);return null!=t&&("object"===e||"function"===e)}(t))return!1;var e=s(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e},u=function(t){return l([1,9,11],t)},f={stopPropagation:function(t){(t=t||window.event).stopPropagation?t.stopPropagation():t.cancelBubble=!0},preventDefault:function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1},bind:function(t,e,n){window.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)},trigger:function(t,e){var n;document.createEventObject?(n=document.createEventObject(),t.fireEvent("on"+e,n)):((n=document.createEvent("HTMLEvents")).initEvent(e,!0,!1),t.dispatchEvent(n))},toNode:function(t){var e=document.createElement("div");e.innerHTML=t;for(var n=e.childNodes,r=0;r<n.length;r++)if(u(n[r]))return n[r];return null},appendTo:function(t,e){var n=u(e)?e:this.toNode(e);return t.appendChild(n),n},prependTo:function(t,e){var n=u(e)?e:this.toNode(e);return t.insertBefore(n,t.childNodes[0]),n},remove:function(t){t.parentNode.removeChild(t)},after:function(t,e){var n=u(e)?e:this.toNode(e);return t.parentNode.insertBefore(n,t.nextSibling),n},css:function(t,e){for(var n in e)t.style[n]=e[n]},attr:function(t,e){for(var n in e)t.setAttribute(n,e[n])},position:function(t,e){e=e||window.event;var n=t.getBoundingClientRect();if(!e||!e.clientX)throw new Error("Event is necessary!");return{x:e.clientX-n.left+t.scrollLeft,y:e.clientY-n.top+t.scrollTop}},copy:function t(e,n,r){var o=this.appendTo(document.body,"<textarea>"+e+"</textarea>");o.select();try{window.document.execCommand("copy",!1,null)?c(n)&&n():c(r)&&r()}catch(t){c(r)&&r(t)}document.body.removeChild(o)}};function _(t){return{leftNum:t.__leftNum,lineNum:t.__lineNum,x:t.__cursorLeft,y:t.__cursorTop,lineHeight:21}}var h=(r(n={48:[0,")"],49:[1,"!"],50:[2,"@"],51:[3,"#"],52:[4,"$"],53:[5,"%"],54:[6,"^"],55:[7,"&"],56:[8,"*"],57:[9,"("],96:[0,0],97:1,98:2,99:3,100:4,101:5,102:6,103:7,104:8,105:9,106:"*",107:"+",109:"-",110:".",111:"/",65:["a","A"],66:["b","B"],67:["c","C"],68:["d","D"],69:["e","E"],70:["f","F"],71:["g","G"],72:["h","H"],73:["i","I"],74:["j","J"],75:["k","K"],76:["l","L"],77:["m","M"],78:["n","N"],79:["o","O"],80:["p","P"],81:["q","Q"],82:["r","R"],83:["s","S"],84:["t","T"],85:["u","U"],86:["v","V"],87:["w","W"],88:["x","X"],89:["y","Y"],90:["z","Z"],37:"left",38:"up",39:"right",40:"down",33:"page up",34:"page down",35:"end",36:"home",16:"shift",17:"ctrl",18:"alt",91:"command",92:"command",93:"command",9:"tab",20:"caps lock",32:"spacebar",8:"backspace",13:"enter",27:"esc",46:"delete",45:"insert",144:"number lock",145:"scroll lock",12:"clear"},"45","insert"),r(n,19,"pause"),r(n,112,"f1"),r(n,113,"f2"),r(n,114,"f3"),r(n,115,"f4"),r(n,116,"f5"),r(n,117,"f6"),r(n,118,"f7"),r(n,119,"f8"),r(n,120,"f9"),r(n,121,"f10"),r(n,122,"f11"),r(n,123,"f12"),r(n,189,["-","_"]),r(n,187,["=","+"]),r(n,219,["[","{"]),r(n,221,["]","}"]),r(n,220,["\\","|"]),r(n,186,[";",":"]),r(n,222,["'",'"']),r(n,188,[",","<"]),r(n,190,[".",">"]),r(n,191,["/","?"]),r(n,192,["`","~"]),n),p=["shift","ctrl","alt"];function d(t){var e=(t=t||window.event).keyCode||t.which,n=h[e]||e;if(n){n.constructor!==Array&&(n=[n,n]);var r=t.shiftKey?"shift+":"",o=t.altKey?"alt+":"",i="",s=(t.ctrlKey?"ctrl+":"")+r+o;p.indexOf(n[0])>=0&&(n[0]=n[1]="");var l=t.code=="Key"+t.key&&!r;return i=s+(""==s&&l?n[1]:n[0]),""==n[0]&&(i=i.replace(/\+$/,"")),i}}var m=function(t,e){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n].content!=e[n].content||t[n].color!=e[n].color)return!1;return!0};function g(t,e){for(var n=[],r=0,o=function(e){return t.substring(r,e+r>t.length?t.length:e+r)},i="",s="tag",l=function(){""!=i&&n.push({color:{tag:e.selector,attr:e.attrKey,string:e.attrValue}[s],content:i}),i=""};;)if("/*"==o(2)){for(l();"*/"!==o(2)&&r<t.length;)i+=t[r++];n.push({color:e.annotation,content:i+o(2)}),r+=2,i=""}else if(["'",'"'].indexOf(o(1))>-1){var a=o(1);l();do{i+=t[r++]}while(o(1)!=a&&r<t.length);o(1)!=a?a="":r+=1,n.push({color:e.attrValue,content:i+a}),i=""}else if([":","{","}",";"].indexOf(o(1))>-1)l(),n.push({color:e.insign,content:o(1)}),i="",s="{"==o(1)||";"==o(1)?"attr":"}"==o(1)?"tag":"string",r+=1;else{if(r>=t.length){l();break}i+=t[r++]}return n}var v=["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"];function y(t,e){for(var n=[],r=0,o=function(e){return t.substring(r,e+r>t.length?t.length:e+r)},i="",s=function(){""!=i&&("("==i[0]&&(n.push({color:e.insign,content:"("}),i=i.substr(1)),n.push({color:e.text,content:i})),i=""};;)if("/*"==o(2)){for(s();"*/"!==o(2)&&r<t.length;)i+=t[r++];n.push({color:e.annotation,content:i+o(2)}),r+=2,i=""}else if("//"==o(2)){for(s();"\n"!==o(1)&&r<t.length;)i+=t[r++];n.push({color:e.annotation,content:i}),i=""}else if(["'",'"',"`"].indexOf(o(1))>-1){var l=o(1);s();do{i+=t[r++]}while(o(1)!=l&&r<t.length);o(1)!=l?l="":r+=1,n.push({color:e.string,content:i+l}),i=""}else if("("==o(1)&&(" "==i[0]||r-i.length-1>=0&&" "==t[r-i.length-1]))n.push({color:e.funName,content:i}),r+=1,i="(";else if("("==o(1))n.push({color:e.execName,content:i}),r+=1,i="(";else if([";","{","}","(",")",".","\n","=","+",">","<","[","]","-","*","/","^","*","!"].indexOf(o(1))>-1)s(),n.push({color:e.insign,content:o(1)}),i="",r+=1;else if(" "==o(1)&&v.indexOf(i.trim())>-1)n.push({color:e.key,content:i+" "}),i="",r+=1;else{if(r>=t.length){s();break}i+=t[r++]}return n}function b(t,e){for(var n=[],r=0,o=function(e){return t.substring(r,e+r>t.length?t.length:e+r)},i="",s=function(){""!=i&&n.push({color:e.text,content:i}),i=""},l=function(){var s=" ";'"'==o(1)&&(s='"'),"'"==o(1)&&(s="'");do{i+=t[r++]}while(o(1)!=s&&r<t.length);" "!=s&&r<t.length&&(i+=s,r+=1),n.push({color:e.attrValue,content:i}),i=""};;)if("\x3c!--"==o(4)){for(s();"--\x3e"!==o(3)&&r<t.length;)i+=t[r++];n.push({color:e.annotation,content:i+o(3)}),r+=3,i=""}else if("</"==o(2)){for(s(),n.push({color:e.insign,content:"</"}),r+=2;">"!==o(1)&&r<t.length;)i+=t[r++];""!=i&&(n.push({color:e.node,content:i}),i="",r<t.length&&(n.push({color:e.insign,content:">"}),r+=1))}else if("<"==o(1)&&"< "!=o(2)){var a="";for(s(),n.push({color:e.insign,content:"<"}),r+=1;">"!=o(1)&&" "!=o(1)&&r<t.length;)i+=t[r++];if(""!=i&&("style"!=i&&"script"!=i||(a="</"+i+">"),n.push({color:e.node,content:i}),i="",r<t.length))for(;r<t.length;){if(">"==o(1)){s(),n.push({color:e.insign,content:">"}),r+=1;break}if(" "!=o(1))if(s(),'"'!=o(1)&&"'"!=o(1)){for(;"="!=o(1)&&">"!=o(1)&&r<t.length&&" "!=o(1);)i+=t[r++];""!=i?(n.push({color:e.attrKey,content:i}),i="","="==o(1)&&(n.push({color:e.insign,content:"="}),(r+=1)<t.length&&" "!=o(1)&&">"!=o(1)&&l())):i+=t[r++]}else"="==o(1)?(n.push({color:e.insign,content:"="}),r+=1):r<t.length&&" "!=o(1)&&">"!=o(1)&&l();else i+=t[r++]}if(""!=a){for(var c=r,u=i;o(a.length)!=a&&r<t.length;)i+=t[r++];if(r<t.length){var f=a.replace(/<\//,"");({"style>":g,"script>":y})[f](i,{"style>":e._css,"script>":e._javascript}[f]).forEach((function(t){n.push(t)})),i=""}else i=u,r=c}}else{if(r>=t.length){s();break}i+=t[r++]}return n}var N=function(t){var e=[[]],n=0;return t.forEach((function(t){var r=t.content.split(/\n/);e[n].push({color:t.color,content:r[0]});for(var o=1;o<r.length;o++)n+=1,e.push([]),e[n].push({color:t.color,content:r[o]})})),e},$=function(t,e){for(var n in e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}return t},x={text:"#000000",annotation:"#6a9955",insign:"#ffffff",node:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e"},w={annotation:"#6a9955",insign:"#ffffff",selector:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e"},O={text:"#000000",annotation:"#6a9955",insign:"#ffffff",key:"#ff0000",string:"#ac4c1e",funName:"#1e50b3",execName:"#1e83b1"};function A(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("html"==t)r._css=$(w,r.css),r._javascript=$(O,r.javascript),n=$(x,r),e=b;else if("css"==t)n=$(w,r),e=g;else{if("javascript"!=t)throw new Error("Language not supported:"+t+",The languages available include: html、css、javascript!");n=$(O,r),e=y}return function(t){return N(e(t,n))}}var j=function t(n){var r=this;if(!(this instanceof t))throw new Error("Open-Web-Editor is a constructor and should be called with the `new` keyword");if(!u(n.el))throw new Error("options.el is not a element!");this._el=n.el,this._el.owe_terminal="none",n.color=n.color||{},this._colorBackground=n.color.background||"#d6d6e4",this._colorText=n.color.text||"#000000",this._colorNumber=n.color.number||"#888484",this._colorEdit=n.color.edit||"#eaeaf1",this._colorCursor=n.color.cursor||"#ff0000",this._colorSelect=n.color.select||"#6c6cf1",this._fontFamily=n["font-family"]||"新宋体",this._fontWeight=n["font-weight"]||600,this._tabSpace=n.tabSpace||4,this._readonly=n.readonly||!1,this._noLineNumber=n.noLineNumber||!1,this._contentArray=a(n.content)?(this.$$filterText(n.content)+"").split("\n"):[""],this.$shader=c(n.shader)?n.shader:function(t){return Array.isArray(t)}(n.shader)?A.apply(void 0,e(n.shader)):function(){var t=[];return r._contentArray.forEach((function(e){t.push([{content:e,color:r._colorText}])})),t},this.$format=c(n.format)?n.format:function(t){return t},this.$input=c(n.input)?n.input:null,this.$$initDom(),this.__needUpdate=!0,this.__lineNum=this._contentArray.length-1,this.__leftNum=this._contentArray[this.__lineNum].length,this.__cursor1=this.__cursor2={leftNum:0,lineNum:0},this.__formatData=this.$$diff(this.$shader(this._contentArray.join("\n"))),this.$$initView(),this.$$updateView(),this.$$bindEvent(),this.__updated__=function(){},this.updated=function(t){r.__updated__=t},this.valueOf=function(){return r._contentArray.join("\n")},this.input=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;0!=e&&(0!=n&&(r._contentArray[r.__lineNum]=r._contentArray[r.__lineNum].substring(0,r.__leftNum+e)+r._contentArray[r.__lineNum].substring(r.__leftNum+e+n)),r.__leftNum+=e),r.__focusDOM.value=t,f.trigger(r.__focusDOM,"input"),r.__focusDOM.focus()},this.format=function(){r._contentArray=r.$format(r._contentArray.join("\n"),r._tabSpace).split("\n"),r.__lineNum=r._contentArray.length-1,r.__leftNum=r._contentArray[r.__lineNum].length,r.__formatData=r.$$diff(r.$shader(r._contentArray.join("\n"))),r.$$updateView(),r.$$initView()},this.copy=function(t,e){f.copy(r.valueOf(),t,e)}};j.prototype.$$textWidth=function(t){return this.__helpCalcDOM.innerText=t,this.__helpCalcDOM.offsetWidth},j.prototype.$$bestLeftNum=function(t,e){arguments.length<2&&(e=e||this.__lineNum);var n=this._contentArray[e];if(t<=40)return 0;if(t-40>=this.$$textWidth(n))return n.length;for(var r=t-40,o=1;o<n.length;o++){var i=Math.abs(t-40-this.$$textWidth(n.substr(0,o)));if(i>r)break;r=i}return o-1},j.prototype.$$calcCanvasXY=function(t,e){return{x:this.$$textWidth(this._contentArray[e].substr(0,t)),y:21*e}},j.prototype.$$selectIsNotBlank=function(){return this.__cursor1.lineNum!=this.__cursor2.lineNum||this.__cursor1.leftNum!=this.__cursor2.leftNum},j.prototype.$$filterText=function(t){for(var e="",n=0;n<this._tabSpace;n++)e+=" ";return t.replace(/\t/g,e)},j.prototype.$$toTemplate=function(t,e,n){var r=this,o="";return o+="<div style='min-width: fit-content;white-space: nowrap;line-height:21px;height:21px;'>",o+="<em style='"+(n?"font-size:0;":"")+"color:"+this._colorNumber+";user-select: none;display:inline-block;font-style:normal;width:35px;text-align:right;margin-right:5px;'>"+(e+1)+"</em>",t.forEach((function(t){var e=t.content;e=(e=(e=e.replace(/\&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),o+="<span style='user-select: none;font-weight:"+r._fontWeight+";white-space: pre;color:"+t.color+"'>"+e+"</span>"})),o+"</div>"},j.prototype.$$initDom=function(){var t=this;this._el.innerHTML="",f.css(this._el,{"font-size":"12px",position:"relative",cursor:"text","font-family":this._fontFamily,background:this._colorBackground,overflow:"auto"}),f.bind(this._el,"click",(function(){setTimeout((function(){t.__focusDOM.focus()}))})),this.__helpCalcDOM=f.appendTo(this._el,"<span></span>"),f.css(this.__helpCalcDOM,{position:"absolute","z-index":"-1","white-space":"pre",top:0,left:0,color:"rgba(0,0,0,0)","font-weight":this._fontWeight}),this.__helpInputDOM=f.appendTo(this._el,"<div></div>"),f.css(this.__helpInputDOM,{position:"absolute","z-index":1}),f.bind(this.__helpInputDOM,"click",(function(e){f.stopPropagation(e),f.preventDefault(e),t.__focusDOM.focus()})),this.__focusDOM=f.appendTo(this._el,"<textarea></textarea>"),f.css(this.__focusDOM,{position:"absolute",width:"6px","margin-top":"3px",height:"15px","line-height":"15px",resize:"none",overflow:"hidden",padding:"0",outline:"none",border:"none",background:"rgba(0,0,0,0)",color:this._colorCursor}),f.attr(this.__focusDOM,{wrap:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"}),this._readonly&&f.attr(this.__focusDOM,{readonly:!0}),this.__showDOM=f.appendTo(this._el,"<div></div>"),f.css(this.__showDOM,{padding:"10px 0"}),this.__selectCanvas=f.appendTo(this._el,"<canvas></canvas>"),f.css(this.__selectCanvas,{position:"absolute",left:"40px",top:"10px",opacity:"0.5"}),this.$$updateCanvasSize(1,1)},j.prototype.$$initView=function(){f.css(this.__focusDOM,{left:40+this.$$textWidth(this._contentArray[this.__lineNum])+"px",top:10+21*this.__lineNum+"px"})},j.prototype.$$updateView=function(){var t=this;if(this.__diff&&this.__diff.beginNum+this.__diff.endNum>10){for(var e=this.__showDOM.childNodes,n=e.length-this.__diff.endNum-1;n>=this.__diff.beginNum;n--)f.remove(e[n]);if(this.__diff.beginNum>0)for(var r=this.__formatData.length-1-this.__diff.endNum;r>=this.__diff.beginNum;r--)f.after(e[this.__diff.beginNum-1],this.$$toTemplate(this.__formatData[r],r,this._noLineNumber));else for(var o=this.__formatData.length-this.__diff.endNum-1;o>=0;o--)f.prependTo(this.__showDOM,this.$$toTemplate(this.__formatData[o],o,this._noLineNumber));e=this.__showDOM.childNodes;for(var i=this.__diff.beginNum;i<this.__formatData.length;i++)e[i].getElementsByTagName("em")[0].innerText=i+1}else if("not update"!=this.__diff){var s="";this.__formatData.forEach((function(e,n){s+=t.$$toTemplate(e,n,t._noLineNumber)})),this.__showDOM.innerHTML=s}this.__diff="not update";var l=this.__showDOM.childNodes[this.__lineNum];!this._readonly&&this.__lineDom&&(this.__lineDom.style.backgroundColor="rgba(0, 0, 0, 0)",l.style.backgroundColor=this._colorEdit),this.__lineDom=l},j.prototype.$$updateSelectView=function(){var t=this,e=this.__selectCanvas.getContext("2d");e.fillStyle=this._colorSelect,e.clearRect(0,0,this.__selectCanvas.scrollWidth,this.__selectCanvas.scrollHeight);var n=function(n,r,o){var i=t.$$calcCanvasXY(n,o),s=t.$$calcCanvasXY(r,o);n==r&&0==n?e.fillRect(i.x,i.y,5,21):e.fillRect(i.x,i.y,s.x-i.x,21)};if(this.__cursor1.lineNum!=this.__cursor2.lineNum||this.__cursor1.leftNum!=this.__cursor2.leftNum)if(e.beginPath(),this.__cursor1.lineNum==this.__cursor2.lineNum)n(this.__cursor1.leftNum,this.__cursor2.leftNum,this.__cursor1.lineNum);else{var r,o;this.__cursor1.lineNum<this.__cursor2.lineNum?(r=this.__cursor1,o=this.__cursor2):(r=this.__cursor2,o=this.__cursor1),n(r.leftNum,this._contentArray[r.lineNum].length,r.lineNum),n(0,o.leftNum,o.lineNum);for(var i=r.lineNum+1;i<o.lineNum;i++)n(0,this._contentArray[i].length,i)}},j.prototype.$$updateCursorPosition=function(){this.__cursorTop=21*this.__lineNum+10,this.__cursorLeft=40+this.$$textWidth(this._contentArray[this.__lineNum].substring(0,this.__leftNum)),f.css(this.__focusDOM,{top:this.__cursorTop+"px",left:this.__cursorLeft+"px"})},j.prototype.$$updateCanvasSize=function(t,e){arguments.length<2&&(t=this._el.scrollWidth-40,e=this._el.scrollHeight-10),f.css(this.__selectCanvas,{width:t+"px",height:e+"px"}),f.attr(this.__selectCanvas,{width:t,height:e})},j.prototype.$$cancelSelect=function(){this.$$updateCanvasSize(1,1),this.__cursor1={leftNum:0,lineNum:0},this.__cursor2={leftNum:0,lineNum:0}},j.prototype.$$deleteSelect=function(){var t=this.__cursor2,e=this.__cursor1;(this.__cursor1.lineNum<this.__cursor2.lineNum||this.__cursor1.lineNum==this.__cursor2.lineNum&&this.__cursor1.leftNum<this.__cursor2.leftNum)&&(t=this.__cursor1,e=this.__cursor2);var n=this._contentArray[t.lineNum].substr(0,t.leftNum)+this._contentArray[e.lineNum].substr(e.leftNum);this._contentArray.splice(t.lineNum,e.lineNum-t.lineNum+1,n),this.__leftNum=this.__cursor1.leftNum=this.__cursor2.leftNum=t.leftNum,this.__lineNum=this.__cursor1.lineNum=this.__cursor2.lineNum=t.lineNum,this.$$cancelSelect()},j.prototype.$$bindEvent=function(){var t=this,n=!1,r=function(e){var n=f.position(t._el,e),r=Math.round((n.y-20.5)/21);return r<0&&(r=0),r>=t._contentArray.length&&(r=t._contentArray.length-1),{leftNum:t.$$bestLeftNum(n.x,r),lineNum:r}},o=function(){var e=t.__cursor2,n=t.__cursor1;if(t.__cursor1.lineNum<t.__cursor2.lineNum)e=t.__cursor1,n=t.__cursor2;else if(t.__cursor1.lineNum==t.__cursor2.lineNum)return t.__cursor1.leftNum<t.__cursor2.leftNum&&(e=t.__cursor1,n=t.__cursor2),t._contentArray[e.lineNum].substring(e.leftNum,n.leftNum);var r="";r+=t._contentArray[e.lineNum].substr(e.leftNum)+"\n";for(var o=e.lineNum+1;o<n.lineNum;o++)r+=t._contentArray[o]+"\n";return r+=t._contentArray[n.lineNum].substr(0,n.leftNum)};f.bind(this._el,"mousedown",(function(e){n=!0,t.__cursor2=t.__cursor1=r(e),t.$$updateCanvasSize(),t.$$updateSelectView()})),f.bind(this._el,"mousemove",(function(e){n&&(t.__cursor2=r(e),t.$$updateSelectView())})),f.bind(this._el,"mouseup",(function(){return n=!1})),f.bind(this._el,"mouseout",(function(){return n=!1})),f.bind(this._el,"click",(function(e){t.__helpInputDOM.innerHTML="";var n=f.position(t._el,e),r=Math.round((n.y-20.5)/21);r<0||r>=t._contentArray.length||(t.__lineNum=r,t.__leftNum=t.$$bestLeftNum(n.x),t.$$updateCursorPosition(),t.$$updateView())}));var i=function(n){if(n=n||t.__focusDOM.value,n=t.$$filterText(n),t.__focusDOM.value="",t.$$selectIsNotBlank()&&t.$$deleteSelect(),/^\n$/.test(n))t.__leftNum>=t._contentArray[t.__lineNum].length?t._contentArray.splice(t.__lineNum+1,0,""):(t._contentArray.splice(t.__lineNum+1,0,t._contentArray[t.__lineNum].substring(t.__leftNum)),t._contentArray[t.__lineNum]=t._contentArray[t.__lineNum].substring(0,t.__leftNum)),t.__lineNum+=1,t.__leftNum=0;else{var r=n.split(/\n/);if(r.length<=1)t._contentArray[t.__lineNum]=t._contentArray[t.__lineNum].substring(0,t.__leftNum)+n+t._contentArray[t.__lineNum].substring(t.__leftNum),t.__leftNum+=n.length;else{var o,i=t._contentArray[t.__lineNum].substring(0,t.__leftNum),s=t._contentArray[t.__lineNum].substring(t.__leftNum);r[0]=i+r[0],r[r.length-1]+=s,(o=t._contentArray).splice.apply(o,[t.__lineNum,1].concat(e(r))),t.__lineNum+=r.length-1,t.__leftNum=r[r.length-1].length-s.length}}t.__formatData=t.$$diff(t.$shader(t._contentArray.join("\n"))),t.$$updateCursorPosition(),t.$$updateView(),t.__updated__()};f.bind(this.__focusDOM,"compositionstart",(function(){t.__needUpdate=!1,t.__focusDOM.style.color="rgba(0,0,0,0)",t.__focusDOM.style.borderLeft="1px solid "+t._colorCursor})),f.bind(this.__focusDOM,"compositionend",(function(){t.__needUpdate=!0,t.__focusDOM.style.color=t._colorCursor,t.__focusDOM.style.borderLeft="none",i(),null!=t.$input&&(t.__helpInputEvent=t.$input(t.__helpInputDOM,_(t),t._contentArray)||{})})),f.bind(this.__focusDOM,"input",(function(){t.__needUpdate&&(i(),null!=t.$input&&(t.__helpInputEvent=t.$input(t.__helpInputDOM,_(t),t._contentArray)||{}))}));var s=!1;f.bind(this._el,"keyup",(function(t){"command"==d(t)&&(s=!1)})),f.bind(this._el,"keydown",(function(e){var n=d(e);if("command"==n&&(s=!0),s&&["a","c","x"].indexOf(n)>-1&&(n="ctrl+"+n),""!=t.__helpInputDOM.innerHTML){var r=t.__helpInputEvent[n];if(c(r)){if(!r())return}else t.__helpInputDOM.innerHTML=""}if(!(t._readonly&&["ctrl+a","ctrl+c"].indexOf(n)<0))switch(n){case"ctrl+a":t.__cursor1={leftNum:0,lineNum:0},t.__cursor2={lineNum:t._contentArray.length-1,leftNum:t._contentArray[t._contentArray.length-1].length},t.$$updateSelectView();break;case"ctrl+c":t.$$selectIsNotBlank()&&(f.copy(o()),t.__focusDOM.focus());break;case"ctrl+x":t.$$selectIsNotBlank()&&(f.copy(o()),t.__focusDOM.focus(),t.$$deleteSelect(),t.__formatData=t.$$diff(t.$shader(t._contentArray.join("\n"))),t.$$updateCursorPosition(),t.$$updateView(),t.$$cancelSelect(),t.__updated__());break;case"tab":f.stopPropagation(e),f.preventDefault(e);for(var l="",a=0;a<t._tabSpace;a++)l+=" ";if(t.$$selectIsNotBlank()){var u=t.__cursor1.lineNum,_=t.__cursor2.lineNum;u>_&&(u=t.__cursor2.lineNum,_=t.__cursor1.lineNum);for(var h=u;h<=_;h++)t._contentArray[h]=l+t._contentArray[h];t.__cursor1.leftNum+=t._tabSpace,t.__cursor2.leftNum+=t._tabSpace,t.__leftNum+=t._tabSpace,t.__formatData=t.$$diff(t.$shader(t._contentArray.join("\n"))),t.$$updateCursorPosition(),t.$$updateView(),t.$$updateCanvasSize(),t.$$updateSelectView(),t.__updated__()}else i(l);break;case"up":if(t.__lineNum<=0)return;t.__lineNum-=1,t.__leftNum=t.$$bestLeftNum(t.$$textWidth(t._contentArray[t.__lineNum+1].substr(0,t.__leftNum))+40),t.$$updateCursorPosition(),t.$$updateView(),t.$$cancelSelect(),t._el.scrollTop-=21;break;case"down":if(t.__lineNum>=t._contentArray.length-1)return;t.__lineNum+=1,t.__leftNum=t.$$bestLeftNum(t.$$textWidth(t._contentArray[t.__lineNum-1].substr(0,t.__leftNum))+40),t.$$updateCursorPosition(),t.$$updateView(),t.$$cancelSelect(),t._el.scrollTop+=21;break;case"left":if(t.__leftNum<=0){if(t.__lineNum<=0)return;t.__lineNum-=1,t.__leftNum=t._contentArray[t.__lineNum].length}else t.__leftNum-=1;t.$$updateCursorPosition(),t.$$cancelSelect();break;case"right":if(t.__leftNum>=t._contentArray[t.__lineNum].length){if(t.__lineNum>=t._contentArray.length-1)return;t.__lineNum+=1,t.__leftNum=0}else t.__leftNum+=1;t.$$updateCursorPosition(),t.$$cancelSelect();break;case"backspace":if(t.$$selectIsNotBlank())t.$$deleteSelect();else if(t.__leftNum<=0){if(t.__lineNum<=0)return;t.__lineNum-=1,t.__leftNum=t._contentArray[t.__lineNum].length,t._contentArray[t.__lineNum]+=t._contentArray[t.__lineNum+1],t._contentArray.splice(t.__lineNum+1,1)}else t.__leftNum-=1,t._contentArray[t.__lineNum]=t._contentArray[t.__lineNum].substring(0,t.__leftNum)+t._contentArray[t.__lineNum].substring(t.__leftNum+1);t.__formatData=t.$$diff(t.$shader(t._contentArray.join("\n"))),t.$$updateCursorPosition(),t.$$updateView(),t.$$cancelSelect(),t.__updated__()}}))},j.prototype.$$diff=function(t){var e=this.__formatData;if(e){for(var n=0,r=0;r<e.length&&r<t.length&&m(e[r],t[r]);r++)n+=1;for(var o=0,i=1;i<=e.length&&i<=t.length&&m(e[e.length-i],t[t.length-i]);i++)o+=1;var s=Math.min(e.length,t.length);n+o>=s&&(o=s-n-1)<0&&(o=0),this.__diff={beginNum:n,endNum:o}}return t},"object"===o(t)&&"object"===o(t.exports)?t.exports=j:window.OpenWebEditor=j}()}));var x=function(t,e){r(e.type)&&e.type.length>0?t.getAttribute(e.type)!=e.value&&t.setAttribute(e.type,e.value):t.value==e.value&&t.textContent==e.value||(t.value=t.textContent=e.value)},w={inserted:x,update:x},O={inserted:function(t,e){for(var n=e.type.split("."),r={prevent:!1,stop:!1,once:!1},o=1;o<n.length;o++)r[n[o]]=!0;b(t,n[0],(function o(i){r.stop&&function(t){(t=t||window.event).stopPropagation?t.stopPropagation():t.cancelBubble=!0}(i),r.prevent&&function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1}(i);var s,l,a,c=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(e.exp),u=[],f=[];if(c[2]){var _=c[2].replace(/^\(/,"").replace(/\)$/,"").trim();_.length>0&&(f=_.split(","))}for(var h=0;h<f.length;h++){var p=f[h];p=y(e.target,p),u.push(p)}u.push(i),e.target[c[1]].apply(e.target,u),r.once&&(s=t,l=n[0],a=o,window.detachEvent?s.detachEvent("on"+l,a):s.removeEventListener(l,a,!1))}))}},A={inserted:function(t,e){t.value=e.value,b(t,"input",(function(){!function(t,e,n,r){arguments.length<3&&(r={});for(var o=h(t,e,r),s=v(t,o,r),l=t,a=0;a<s.length-1;a++)s[a]in l||(l[s[a]]=i(l)?[]:{}),l=l[s[a]];l[s[s.length-1]]=n}(e.target,"."+e.exp,t.value)}))},update:function(t,e){t.value=e.value}},j="http://www.w3.org/2000/svg",k={stopPropagation:function(t){(t=t||window.event).stopPropagation?t.stopPropagation():t.cancelBubble=!0},preventDefault:function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1},isNode:function(t){return t&&(1===t.nodeType||9===t.nodeType||11===t.nodeType)},bind:function(t,e,n){if(t.constructor!==Array&&t.constructor!==NodeList)window.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1);else for(var r=0;r<t.length;r++)this.bind(t[r],e,n)},unbind:function(t,e,n){if(t.constructor!==Array&&t.constructor!==NodeList)window.detachEvent?t.detachEvent("on"+e,n):t.removeEventListener(e,n,!1);else for(var r=0;r<t.length;r++)this.unbind(t[r],e,n)},find:function(t,e,n){if(!this.isNode(t))return[];for(var r=t.getElementsByTagName(n||"*"),o=[],i=0;i<r.length;i++)this.isNode(r[i])&&("function"!=typeof e||e(r[i]))&&o.push(r[i]);return o},children:function(t,e){for(var n=t.childNodes,r=[],o=0;o<n.length;o++)this.isNode(n[o])&&("function"!=typeof e||e(n[o]))&&r.push(n[o]);return r},hasClass:function(t,e,n){e.constructor!==Array&&(e=[e]);for(var r=" "+(t.getAttribute("class")||"")+" ",o=0;o<e.length;o++)if(r.indexOf(" "+e[o]+" ")>=0){if(n)return!0}else if(!n)return!1;return!0},removeClass:function(t,e){var n=(" "+(t.getAttribute("class")||"")+" ").replace(" "+e.trim()+" "," ");t.setAttribute("class",n.trim())},addClass:function(t,e){if(!this.hasClass(t,e)){var n=t.getAttribute("class")||"";t.setAttribute("class",n+" "+e)}},toNode:function(t,e){var n;(n=e?document.createElementNS(j,"svg"):document.createElement("div")).innerHTML=t;for(var r=n.childNodes,o=0;o<r.length;o++)if(this.isNode(r[o]))return r[o]},trigger:function(t,e){if(document.createEventObject)t.fireEvent("on"+e,document.createEventObject());else{var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!1),t.dispatchEvent(n)}},getStyle:function(t,e){var n=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return"string"==typeof e?n.getPropertyValue(e):n},offsetPosition:function(t){var e=0,n=0;for(n=t.offsetTop,e=t.offsetLeft,t=t.offsetParent;t;)n+=t.offsetTop,e+=t.offsetLeft,t=t.offsetParent;return{left:e,top:n}},mousePosition:function(t,e){var n=t.getBoundingClientRect();if(!e||!e.clientX)throw new Error("Event is necessary!");return{x:e.clientX-n.left,y:e.clientY-n.top}},remove:function(t){t.parentNode.removeChild(t)},setStyles:function(t,e){for(var n in e)t.style[n]=e[n]},size:function(t,e){var n,r;return"content"==e?(r=t.clientWidth-(this.getStyle(t,"padding-left")+"").replace("px","")-(this.getStyle(t,"padding-right")+"").replace("px",""),n=t.clientHeight-(this.getStyle(t,"padding-top")+"").replace("px","")-(this.getStyle(t,"padding-bottom")+"").replace("px","")):"padding"==e?(r=t.clientWidth,n=t.clientHeight):"border"==e?(r=t.offsetWidth,n=t.offsetHeight):"scroll"==e?(r=t.scrollWidth,n=t.scrollHeight):(r=t.offsetWidth,n=t.offsetHeight),{width:r,height:n}},append:function(t,e){var n=this.isNode(e)?e:this.toNode(e);return t.appendChild(n),n},prepend:function(t,e){var n=this.isNode(e)?e:this.toNode(e);return t.insertBefore(n,t.childNodes[0]),n},after:function(t,e){var n=this.isNode(e)?e:this.toNode(e);return t.parentNode.insertBefore(n,t.nextSibling),n},before:function(t,e){var n=this.isNode(e)?e:this.toNode(e);return t.parentNode.insertBefore(n,t),n}},E={inserted:function(t,e){var n=t.innerHTML.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),r=new $({el:t,content:n,readonly:"editor"!=e.type,shader:[e.exp||"javascript",{insign:"#000000",css:{insign:"#000000"},javascript:{insign:"#000000"}}],color:{background:"rgb(239, 235, 234)",text:"#000000",number:"#888484",edit:"#eaeaf1",cursor:"#ff0000",select:"gray"},noLineNumber:!/\n/.test(n)}),o=k.prepend(t,'<span class="copy-btn" title="复制到剪切板">复制<span></span></span>');k.bind(o,"click",(function(){r.copy((function(){alert("复制成功")}),(function(t){console.log(t),alert("复制失败")}))})),k.setStyles(o,_defineProperty2({position:"absolute",right:"10px",top:"6px",border:"none",outline:0,padding:"4p 10p",transition:"0.2s","font-size":"12px",cursor:"pointer","z-index":1,"line-height":"20px","background-color":"#f8f8f8"},"padding","5px 10px")),t.__owe__=r}};!function(t){t.prototype.__directiveLib={},t.prototype.__componentLib={},t.prototype.__OpenWebEditor=$,t.__OpenWebEditor=$,function(t){t.directive=function(e,n){t.prototype.__directiveLib[e]=n},t.component=function(e,n){t.prototype.__componentLib[e]=n}}(t),function(t){t.use=function(e){e.install.call(e,t)}}(t)}(N),N.directive("qBind",w),N.directive("qOn",O),N.directive("qModel",A),N.directive("qCode",E),N.component("component",{name:"component",data:function(){return{is:null}},methods:{lister:function(t,e){if(e!=this.is&&null!=e){var n=this._oldComponent;n&&n.$$lifecycle("beforeDestroy"),this.is=e;var r=e;r.el=this._el,r.el._nodeName="Quick-Paper-COMPONENT",this._oldComponent=new t(r),this._el=this._oldComponent._el,n&&(n.$$lifecycle("destroyed"),n=null)}}}}),N.urlFormat=function(t){var e,n,r=t.split("?"),o=(r[0]+"#").split("#")[1].replace(/^\//,"").replace(/\/$/,"").split("/"),i=r[1]||"";return""==i?e={}:(n=i.split("&"),e={},n.forEach((function(t){var n=t.split("=");e[n[0]]=n[1]}))),{router:""==o[0]?[]:o,params:e}},N.prototype.$$mount=function(){if(!o(this._options.render))throw new Error("options.render needs to be a function");this.$$render=this._options.render,this.$$mountComponent()},"object"===("undefined"==typeof module?"undefined":_typeof2(module))&&"object"===_typeof2(module.exports)?module.exports=N:window.QuickPaper=N}();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('3');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('14');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('5');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('6');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('8');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('9');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('13');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('4');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('16');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('17');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-347ecaca":""},[createElement('article',{"data-quickpaper-347ecaca":""},[createElement('nav',{"data-quickpaper-347ecaca":""},[createElement('span',{"title":"一个帮助你快速绘制二维图形的ES库","data-quickpaper-347ecaca":""},["image2D"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"title":"首页","@click":"openRouter(\"guide\")","class":"menu-1 guide","data-quickpaper-347ecaca":""},["首页"]),createElement('li',{"title":"接口文档","@click":"openRouter(\"api\")","class":"menu-1 api","data-quickpaper-347ecaca":""},["接口文档"]),createElement('li',{"title":"使用教程","@click":"openRouter(\"course\")","class":"menu-1 course","data-quickpaper-347ecaca":""},["教程"]),createElement('li',{"title":"一些绘图的例子","onclick":"window.location.href='./examples/index.html'","class":"new-open","data-quickpaper-347ecaca":""},["演示用例"]),createElement('li',{"class":"select","data-quickpaper-347ecaca":""},[createElement('i',{"data-quickpaper-347ecaca":""},["更多内容"]),createElement('div',{"data-quickpaper-347ecaca":""},[createElement('h2',{"data-quickpaper-347ecaca":""},["交流"]),createElement('a',{"href":"https://github.com/hai2007/image2D/issues","title":"任何疑惑都可以在这里提问","target":"_blank","data-quickpaper-347ecaca":""},["参与讨论"]),createElement('a',{"href":"https://clunch-contrib.github.io/community/","title":"你可以获得更多关于绘图的相关信息","target":"_blank","data-quickpaper-347ecaca":""},["开发者社区"]),createElement('h2',{"data-quickpaper-347ecaca":""},["相关项目"]),createElement('a',{"href":"https://hai2007.gitee.io/clunch/","title":"🎨 渐进的前端交互式图形框架","target":"_blank","data-quickpaper-347ecaca":""},["clunch.js"]),createElement('a',{"href":"https://hai2007.gitee.io/image3d/","title":"🍊 使用webGL绘制三维图片。📊📈🎉Drawing three-dimensional images using webGL.","target":"_blank","data-quickpaper-347ecaca":""},["image3D.js"]),createElement('a',{"href":"https://hai2007.github.io/cross-end-canvas/","title":"🦎 🎨 提供跨端的canvas画笔，保持一致的绘图方法和效果，包括普通的web端、uniapp框架、微信小程序等小程序等。","target":"_blank","data-quickpaper-347ecaca":""},["Cross End Canvas"]),createElement('h2',{"data-quickpaper-347ecaca":""},["底层依赖"]),createElement('a',{"href":"https://hai2007.github.io/algorithm.js/","title":"🔪 一些前端常用的算法实现合集。","target":"_blank","data-quickpaper-347ecaca":""},["@hai2007/algorithm"]),createElement('a',{"href":"https://hai2007.github.io/tool.js/","title":"💡 前端常用的工具类方法汇总。","target":"_blank","data-quickpaper-347ecaca":""},["@hai2007/tool"])])]),createElement('li',{"title":"汇集的一些常用答疑","@click":"openRouter(\"QA\")","class":"menu-1 QA","data-quickpaper-347ecaca":""},["常见问题"]),createElement('li',{"onclick":"window.location.href='https://github.com/hai2007/image2D'","class":"icon git-url","title":"image2D 源码","data-quickpaper-347ecaca":""},["Fork-me-on-Github"]),createElement('li',{"class":"editor","@click":"openEdit()","title":"发现错误？想参与编辑？ 在 GitHub 上编辑此页！","data-quickpaper-347ecaca":""},["编辑"]),createElement('li',{"class":"new-open menu-1","onclick":"window.location.href='https://hai2007.gitee.io/sweethome/#/Sponsors'","title":"完全开源的项目，捐款支持我们！","data-quickpaper-347ecaca":""},["支持我们"])])]),createElement('div',{"data-quickpaper-347ecaca":""},[createElement('component',{":is":"page","data-quickpaper-347ecaca":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=script&lang=js&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null
            };
        },
        mounted() {
            this.loadRouter(page => this.page = page, 1);
        },
        methods: {
            openRouter(pagename) {
                this.goRouter(page => this.page = page, [pagename]);
            },
            openEdit() {

                let fileurl;

                try {
                    fileurl = window.location.href.split("#")[1].replace(/\/$/, "").replace(/\?.{0,}$/, '').replace(/^\//, "");
                    if (fileurl == 'api') {
                        fileurl = "api/how-to-use";
                    } else if (fileurl == 'course') {
                        fileurl = 'course/install';
                    }
                } catch (e) {
                    fileurl = 'guide';
                }

                window.location.href =
                    "https://github.com/hai2007/image2D/edit/dev/docs/src/Pages/" +
                    fileurl +
                    ".paper";
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=style&lang=css&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n article>nav[data-quickpaper-347ecaca]{\n\nline-height: .44rem;\n\nheight: .44rem;\n\nbackground-color: rgba(255, 255, 255, 1.0);\n\nbox-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;\n\nfont-size: 0.2rem;\n\nbackground-image: url('./image/image2D.png');\n\nbackground-position: .2rem center;\n\nbackground-size: 0.3rem auto;\n\nbackground-repeat: no-repeat;\n\ncolor: #711e32;\n\npadding-left: .5rem;\n\nposition: fixed;\n\nmin-width: 100vw;\n\ntop: 0;\n\nz-index: 2;\n\n}\n\n article>nav>ul[data-quickpaper-347ecaca]{\n\ndisplay: inline-block;\n\nposition: absolute;\n\nright: .3rem;\n\ntop: 0;\n\n}\n\n article>nav>ul>li[data-quickpaper-347ecaca]{\n\nvertical-align: top;\n\ndisplay: inline-block;\n\ncolor: #030303;\n\npadding: 0 0.05rem;\n\nfont-size: 0.12rem;\n\ncursor: pointer;\n\nfont-weight: bold;\n\nheight: 100%;\n\nposition: relative;\n\nmargin-right: 20px;\n\n}\n\n article>nav>ul>li.select[data-quickpaper-347ecaca]{\n\nmargin-right: 20px;\n\nwhite-space: nowrap;\n\n}\n\n article>nav>ul>li.select>i[data-quickpaper-347ecaca]::after{\n\ndisplay: inline-block;\n\nvertical-align: middle;\n\nmargin-top: -1px;\n\nmargin-left: 6px;\n\nmargin-right: -14px;\n\nwidth: 0;\n\nheight: 0;\n\nborder-left: 4px solid transparent;\n\nborder-right: 4px solid transparent;\n\nborder-top: 5px solid #4f5959;\n\ncontent: \" \";\n\n}\n\n article>nav>ul>li.select>i[data-quickpaper-347ecaca]{\n\nfont-style:normal;\n\n}\n\n article>nav>ul>li.select[data-quickpaper-347ecaca]:hover>div{\n\ndisplay: block;\n\n}\n\n article>nav>ul>li.select[data-quickpaper-347ecaca]{\n\nposition: relative;\n\n}\n\n article>nav>ul>li.select>div[data-quickpaper-347ecaca]{\n\ndisplay: none;\n\nposition: absolute;\n\nbox-shadow: 1px 1px 6px 0px #858889;\n\npadding: 10px 20px;\n\ntop: 40px;\n\nright: 0px;\n\nbackground-color: white;\n\nline-height: 2em;\n\ncursor: default;\n\n}\n\n article>nav>ul>li.select>div>a[data-quickpaper-347ecaca]{\n\ndisplay: block;\n\ncolor: black;\n\nfont-weight: 200;\n\n}\n\n article>nav>ul>li.select>div>a[data-quickpaper-347ecaca]:hover{\n\ntext-decoration: underline;\n\n}\n\n article>nav>ul>li.select>div>h2[data-quickpaper-347ecaca]{\n\nfont-size: 14px;\n\nmargin-top: 10px;\n\n}\n\n article>nav>ul>li.new-open[data-quickpaper-347ecaca]::after{\n\nposition: absolute;\n\nbackground-image: url('./image/link.png');\n\nbackground-repeat: no-repeat;\n\ncontent: \" \";\n\ndisplay: inline-block;\n\nwidth: 11px;\n\nheight: 11px;\n\ntop: 15px;\n\nright: -10px;\n\n}\n\n article>nav>ul>li.icon[data-quickpaper-347ecaca]{\n\nfont-size: 0;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center center;\n\n}\n\n article>nav>ul>li.icon.git-url[data-quickpaper-347ecaca]{\n\nbackground-image: url('./image/github.png');\n\nwidth: 1rem;\n\nbackground-size: 90% auto;\n\n}\n\n article>nav>ul>li.editor[data-quickpaper-347ecaca]{\n\nwidth: 0.44rem;\n\nheight: 0.44rem;\n\nbackground-image: url(\"./image/edit.png\");\n\nbackground-size: 100% auto;\n\nfont-size: 0;\n\n}\n\n article>nav>ul>li[active='yes'][data-quickpaper-347ecaca]{\n\ncolor: #f55d48;\n\nborder-bottom: 3px solid #f55d48;\n\n}\n\n article>div[data-quickpaper-347ecaca]{\n\npadding-top: .44rem;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "/*!\r\n * 👁️ - 统一不同浏览器的基础样式\r\n * https://github.com/hai2007/style.css/blob/master/normalize.css\r\n *\r\n * author hai2007 < https://hai2007.gitee.io/sweethome >\r\n *\r\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\r\n * Released under the MIT license\r\n */\r\n\r\nhtml {\r\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\r\n    -ms-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 统一行高 */\r\n    line-height: 1.15;\r\n}\r\n\r\nbutton,\r\ninput {\r\n    /* 兼容部分手机下border不显示问题 */\r\n    border: 1px solid #b2b2bd;\r\n}\r\n\r\narticle,\r\nfooter,\r\nheader,\r\nnav,\r\nsection {\r\n    /* 修正旧浏览器未定义的块级元素 */\r\n    display: block;\r\n}\r\n\r\ncanvas,\r\nsvg {\r\n    /* 修正旧浏览器未定义的行内块元素 */\r\n    display: inline-block;\r\n}\r\n\r\n* {\r\n    /* 统一不同浏览器盒子尺寸计算方法 */\r\n    box-sizing: border-box;\r\n}\r\n\r\n::-ms-clear,\r\n::-ms-reveal {\r\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\r\n    display: none;\r\n}\r\n\r\nimg {\r\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\r\n    display: inline-block;\r\n}\r\n\r\nhtml {\r\n    /* 设置默认字体为统一的安全字体 */\r\n    font-family: sans-serif;\r\n}\r\n\r\na {\r\n    /* 默认去掉下划线 */\r\n    text-decoration: none;\r\n}\r\n\r\nli {\r\n    /* 去掉前置索引 */\r\n    list-style-type: none;\r\n}\r\n\r\nul,\r\nol,\r\nli,\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    /* 去掉不喜欢的间距 */\r\n    -webkit-margin-before: 0;\r\n    -webkit-margin-after: 0;\r\n    -webkit-padding-start: 0;\r\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\r\n    margin-block-end: 0;\r\n    margin-block-start: 0;\r\n    padding-inline-start: 0;\r\n    /* 修改IE和其它浏览器不一致问题 */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    /* 去掉默认的8px */\r\n    margin: 0;\r\n}\r\n\r\ntable {\r\n    /* 设置默认表格边框合并为一个单一的边框 */\r\n    border-collapse: collapse;\r\n}\r\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Styles/style.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n html{\n\nfont-size: 100px;\n\n}\n\n body{\n\nfont-size: .16rem;\n\n}\n\n/* // 接口查询页面菜单UI */\n\n .api-nav{\n\nwidth: 280px;\n\nheight: calc(100vh - 139px);\n\nposition: fixed;\n\noverflow: auto;\n\npadding-bottom: .3rem;\n\n}\n\n .api-nav h2:hover, .api-nav h4:hover, .api-nav h6:hover{\n\ntext-decoration: underline;\n\n}\n\n .api-nav h4, .api-nav h6{\n\nfont-weight: 400;\n\nfont-size: .14rem;\n\ncursor: pointer;\n\nmargin: .07rem 0;\n\nheight: 1.2em;\n\ncolor: #304455;\n\n}\n\n .api-nav h2{\n\npadding: 10px 0;\n\nfont-size: .16rem;\n\ncursor: pointer;\n\n}\n\n .api-nav h4{\n\nmargin-left: .1rem;\n\n}\n\n .api-nav h6{\n\nmargin-left: .2rem;\n\n}\n\n .api-content-view{\n\nmargin-left: 300px;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Styles/api.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n .api-view{\n\npadding: .2rem .3rem;\n\n}\n\n .api-view>h2{\n\nfont-size: 0.16rem;\n\ncolor: #cb538b;\n\nfont-weight: 800;\n\nline-height: 2em;\n\npadding: 0.4rem 0 0.2rem;\n\nmargin-top: -0.3rem;\n\n}\n\n .api-view>h4{\n\nfont-weight: 800;\n\nline-height: 2em;\n\npadding: 0.4rem 0 0.2rem;\n\nmargin-top: -0.3rem;\n\nfont-size: 0.14rem;\n\ncolor: #85a646;\n\n}\n\n .api-view>h6{\n\nfont-weight: 800;\n\nline-height: 2em;\n\npadding: 0.4rem 0 0.2rem;\n\nmargin-top: -0.3rem;\n\nfont-size: 0.12rem;\n\ncolor: #f00;\n\n}\n\n .api-view>ul{\n\nmargin-left: 5em;\n\nfont-size: 0.13rem;\n\nline-height: 2.4em;\n\n}\n\n .api-view>ul>li{\n\nlist-style-type: decimal;\n\n}\n\n .api-view>p{\n\ntext-indent: 2em;\n\nfont-size: 0.14rem;\n\nfont-weight: 600;\n\nline-height: 2em;\n\n}\n\n .api-view>p>a{\n\ntext-indent: 0;\n\ncolor: #ac2c23;\n\ntext-decoration: underline;\n\npadding:0 10px;\n\n}\n\n .api-view>p.warn{\n\nbackground-image: url('./image/warn.png');\n\nbackground-repeat: no-repeat;\n\nbackground-size: auto 0.21rem;\n\nfont-size: 0.12rem;\n\ncolor: #dac305;\n\nfont-weight: 400;\n\n}\n\n .api-view>div{\n\nposition: relative;\n\n}\n\n .api-view>div>.copy-btn{\n\nposition: absolute;\n\nright: .1rem;\n\ntop: .1rem;\n\nbackground-color: #f8f8f8;\n\nborder: none;\n\noutline: 0;\n\npadding: .05rem .1rem;\n\ntransition: 0.2s;\n\nfont-size: .12rem;\n\ncursor: pointer;\n\n}\n\n .api-view>div>.copy-btn:hover{\n\nbackground-color: rgb(10, 10, 10);\n\ncolor: white;\n\n}\n\n .api-view>div>pre{\n\nfont-family: cursive;\n\nfont-weight: 400;\n\nfont-size: 0.14rem;\n\npadding: .15rem .2rem;\n\nline-height: 1.6em;\n\n}\n\n @media (min-width: 1300px) .api-view{\n\npadding: .2rem calc(50vw - 6rem);\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Styles/course.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n .course-view{\n\nwidth: 7rem;\n\nmargin: auto;\n\npadding: .3rem 0;\n\n}\n\n .course-view>header{\n\nfont-size: .3rem;\n\npadding: .3rem 0 .2rem 0;\n\n}\n\n .course-view>h2{\n\nfont-size: .15rem;\n\nline-height: 2em;\n\nmargin-top: .2rem;\n\n}\n\n .course-view>h2::before{\n\ncontent: \"#\";\n\ncolor: #711e32;\n\n}\n\n .course-view>h1{\n\nfont-size: .16rem;\n\nborder-bottom: 1px solid gray;\n\npadding: .1rem 0;\n\nmargin-top: .3rem;\n\n}\n\n .course-view>p{\n\nline-height: 1.6em;\n\ntext-indent: 2em;\n\ncolor: rgb(60, 57, 57);\n\nfont-weight: 400;\n\nfont-size: .14rem;\n\nmargin: .1rem 0;\n\n}\n\n .course-view .important{\n\ncolor: red;\n\nfont-weight: 800;\n\npadding: 0 10px;\n\n}\n\n .course-view a{\n\ncolor: #711e32;\n\nfont-weight: 800;\n\ntext-decoration: underline;\n\npadding: 0 10px;\n\n}\n\n .course-view>div{\n\nposition: relative;\n\n}\n\n .course-view>div>.copy-btn{\n\nposition: absolute;\n\nright: .1rem;\n\ntop: .1rem;\n\nbackground-color: #f8f8f8;\n\nborder: none;\n\noutline: 0;\n\npadding: .05rem .1rem;\n\ntransition: 0.2s;\n\nfont-size: .12rem;\n\ncursor: pointer;\n\n}\n\n .course-view>div>.copy-btn:hover{\n\nbackground-color: rgb(10, 10, 10);\n\ncolor: white;\n\n}\n\n .course-view>div>pre{\n\nfont-family: cursive;\n\nfont-weight: 400;\n\nfont-size: 0.14rem;\n\npadding: .15rem .2rem;\n\nline-height: 1.6em;\n\n}\n\n .course-view>ul{\n\nmargin-left: .5rem;\n\n}\n\n .course-view>ul li{\n\nlist-style-type: disc;\n\nline-height: 2em;\n\nfont-size: .13rem;\n\ncolor: #000000;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Service/router.config.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var pages = {
  "guide": {
    "content": function content() {
      return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle1.js','23');
    }
  },
  "api": {
    "content": function content() {
      return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle2.js','24');
    },
    "how-to-use": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle3.js','25');
      }
    },
    "xhtml": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle4.js','26');
      }
    },
    "painter": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle5.js','27');
      }
    },
    "calculate": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle6.js','28');
      }
    },
    "tool": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle7.js','29');
      }
    },
    "_default_": "how-to-use"
  },
  "course": {
    "content": function content() {
      return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle8.js','30');
    },
    "author": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle9.js','31');
      }
    },
    "install": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle10.js','32');
      }
    },
    "introduce": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle11.js','33');
      }
    },
    "svg-painter": {
      "content": function content() {
        return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle12.js','34');
      }
    },
    "_default_": "install"
  },
  "QA": {
    "content": function content() {
      return window.__etcpack__getLazyBundle('./build/main@v7.3.0-bundle13.js','35');
    }
  },
  "_default_": "guide"
};
__etcpack__scope_bundle__.loadRouter=function(doback, deep) {
  var routers = (window.location.href + "#").split("#")[1].replace(/\?.{0,}$/, '').replace(/^\//, '').replace(/\/$/, '').split('/'),
      page = pages;

  for (var i = 0; i < deep; i++) {
    page = page[routers[i]] || page[page['_default_']];
  }

  page.content().then(function (data) {
    doback(data["default"]);
  });
}
;
__etcpack__scope_bundle__.goRouter=function(doback, keyArray) {
  var page = pages,
      router = "#";

  for (var i = 0; i < keyArray.length; i++) {
    page = page[keyArray[i]] || page[page['_default_']];
    router += "/" + keyArray[i];
  }

  page.content().then(function (data) {
    doback(data["default"]);
  });
  window.location.href = router;
}
;
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();
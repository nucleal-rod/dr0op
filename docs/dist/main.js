!function(e){function t(t){for(var n,i,r=t[0],c=t[1],a=0,s=[];a<r.length;a++)i=r[a],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);s.length;)s.shift()()}var n={},o={0:0};function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t,n=[],r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));n.push(r[2]=c);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=i.p+"dist/bundle."+({}[t=e]||t)+"."+{1:"c8755d75e6121b9f57cd",2:"f501a678fd6607a83ae8",3:"3696c30c11d47163f49c",4:"167a6e5635aee69277db",5:"761243fb47fe5ca8b00a",6:"1862b7e6c7898a94cbc7",7:"cc2046c596447b591f72",8:"41a623781306b80b14d0",9:"3b97895dc59bf5f9a627"}[t]+".js";var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw e};var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var u=c;i(i.s=8)}([function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){"use strict";var o,i,r=(i={},function(e){if(void 0===i[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}i[e]=t}return i[e]}),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],u=t.base?r[0]+t.base:r[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=a(l),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(c[f].references++,c[f].updater(d)):c.push({identifier:l,updater:m(d,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var r=document.createTextNode(i),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}var p=null,h=0;function m(e,t){var n,o,i;if(t.singleton){var r=h++;n=p=p||s(t),o=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=s(t),o=function(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),i=function(){var e;null!==(e=n).parentNode&&e.parentNode.removeChild(e)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);c[i].references--}for(var r=u(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=r}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),r=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(r).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(i=0;i<e.length;i++){var c=e[i];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{page:null}},mounted:function(){var e=this;this.loadRouter((function(t){return e.page=t}),1)},methods:{openRouter:function(e){var t=this;this.goRouter((function(e){return t.page=e}),[e])},openEdit:function(){window.location.href="https://github.com/yelloxing/image2D/edit/dev/docs/src/Pages/"+window.location.href.split("#")[1].replace(/\/$/,"").replace(/\?.{0,}$/,"")+".iCrush"}}}},function(e,t,n){"use strict";(function(e){var o=n(0),i=setTimeout;function r(e){return Boolean(e&&void 0!==e.length)}function c(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(n){return void l(t.promise,n)}s(t.promise,o)}else(1===e._state?s:l)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void p((o=n,i=t,function(){o.apply(i,arguments)}),e)}e._state=1,e._value=t,f(e)}catch(t){l(e,t)}var o,i}function l(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1;try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(e){if(n)return;n=!0,l(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(c);return u(this,new d(e,t,n)),n},a.prototype.finally=o.a,a.all=function(e){return new a((function(t,n){if(!r(e))return n(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var i=o.length;function c(e,r){try{if(r&&("object"==typeof r||"function"==typeof r)){var a=r.then;if("function"==typeof a)return void a.call(r,(function(t){c(e,t)}),n)}o[e]=r,0==--i&&t(o)}catch(r){n(r)}}for(var a=0;a<o.length;a++)c(a,o[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){if(!r(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,i=e.length;o<i;o++)a.resolve(e[o]).then(t,n)}))},a._immediateFn="function"==typeof e?function(t){e(t)}:function(e){i(e,0)},a._unhandledRejectionFn=function(){},t.a=a}).call(this,n(12).setImmediate)},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";var o=c(n(10));n(11);var i=c(n(15));n(21),n(23);var r=n(25);function c(e){return e&&e.__esModule?e:{default:e}}document.getElementById("root").innerHTML="",o.default.prototype.loadRouter=r.loadRouter,o.default.prototype.goRouter=r.goRouter,window.icrush=new o.default({el:document.getElementById("root"),render:function(e){return e(i.default)}})},function(module,exports,__webpack_require__){"use strict";(function(module){function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
* iCrush v1.6.0
* (c) 2007-2020 心叶 git+https://github.com/yelloxing/iCrush.git
* License: MIT
*/!function(){function mount(e){e.directive=function(t,n){e.prototype.__directiveLib[t]=n},e.component=function(t,n){e.prototype.__componentLib[t]=n}}function use(e){e.use=function(t){t.install.call(t,e)}}function initGlobalAPI(e){e.prototype.__directiveLib={},e.prototype.__componentLib={},mount(e),use(e)}var toString=Object.prototype.toString;function getType(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":toString.call(e)}function isObject(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}function isFunction(e){if(isObject(e)){var t=getType(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}}function isString(e){var t=_typeof(e);return"string"===t||"object"===t&&null!=e&&!Array.isArray(e)&&"[object String]"===getType(e)}function isPlainObject(e){if(null!==e&&"object"===_typeof(e)&&"[object Object]"==getType(e)){if(null===Object.getPrototypeOf(e))return 1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}}function isElement(e){return null!==e&&"object"===_typeof(e)&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)&&!isPlainObject(e)}function outHTML(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function toNode(e){if(isElement(e))return e;var t=document.createElement("div");return t.innerHTML=e.replace(/[\n\f\r]/g,"").trim(),t.firstElementChild}function isValidKey(e){/^[_$]/.test(e)}function compilerText(target,text){var getText=function getText(str){return eval(str)};return getText.call(target,text)}function templateToName(e){for(var t=(e+"").toLowerCase(),n=(e+"").toUpperCase(),o="",i=!1,r=0;r<e.length;r++)"-"!=e[r]?i?(o+=n[r],i=!1):o+=t[r]:i=!0;return o}function replaceDom(e,t){e.parentNode.replaceChild(t,e)}function bindEvent(e,t,n){window.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function unbindEvent(e,t,n){window.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n,!1)}function stopPropagation(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}function preventDefault(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1}var uid=1;function initMixin(e){e.prototype.$$init=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};for(var t in this._options=e,this._uid=uid++,this._data=isFunction(e.data)?e.data():e.data,this._el=isString(e.el)?document.querySelector(e.el):e.el,this.__isMounted=!1,this.__isDestroyed=!1,e.methods)isValidKey(t),this[t]=e.methods[t];for(var n in this._data)this[n]=this._data[n];for(var o in this.__componentLib_scope={},e.component)this.__componentLib_scope[o]=e.component[o];for(var i in this.__directiveLib_scope={},e.directive)this.__directiveLib_scope[i]=e.directive[i]}}function lifecycleMixin(e){e.prototype.$$lifecycle=function(e){isFunction(e)?e():-1<["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(e)&&isFunction(this._options[e])&&this._options[e].call(this)}}function createElement(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],o={},i=[];if(!isString(e))return{type:"component",options:e,attrs:{},children:[]};for(var r in t)/^@/.test(r)?o[r.replace(/^@/,"i-on:")]=t[r]:/^:/.test(r)?o["i-bind"+r]=t[r]:o[r]=t[r];for(var c,a=0;a<n.length;a++)isString(c=n[a])?/\{\{[^}]+\}\}/.test(c)?i.push({type:"bindText",content:('" '+c+' "').replace(/\{\{([^}]+)\}\}/g,'"+this.$1+"')}):i.push({type:"text",content:c}):i.push(c);return{type:"none",tagName:e,attrs:o,children:i}}function isSymbol(e){var t=_typeof(e);return"symbol"===t||"object"===t&&null!==e&&"[object Symbol]"===getType(e)}function isKey(e,t){if(!Array.isArray(e)){var n=_typeof(e);return"number"==n||"boolean"==n||null==e||isSymbol(e)||null!==t&&e in Object(t)||/^\w*$/.test(e)}}function stringToPath(e){return e.replace(/\[/g,".").replace(/\]/g,"").replace(/"/g,"").replace(/'/g,"").split(".")}function castPath(e,t){return Array.isArray(e)?e:isKey(e,t)?[e]:stringToPath(e)}var INFINITY=1/0;function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t="".concat(e);return"0"===t&&1/e==-INFINITY?"-0":t}function baseGet(e,t){t=castPath(t,e);for(var n=0;n<t.length&&null!==e;n++)e=e[toKey(t[n])];return n&&n===t.length?e:void 0}function get(e,t,n){var o=null==e?void 0:baseGet(e,t);return void 0===o?n:o}function mountDom(e,t,n,o){var i,r=get(e,t);if(r){if("none"==r.type){var c=templateToName(r.tagName);e.__componentLib[c]||e.__componentLib_scope[c]?(r.options=e.__componentLib[c]||e.__componentLib_scope[c],r.type="component"):r.type="tag"}if("component"==r.type){i=document.createElement("i-crush-component"),n.appendChild(i),r.options.el=i,r.instance=new o(r.options),r.instance.__parent=e;var a={};for(var u in r.attrs)/^data-icrush-/.test(u)||(/^:/.test(u)?a[u.replace("i-bind"+u)]=r.attrs[u]:/^@/.test(u)?a[u.replace(u.replace(/^@/,"i-on:"))]=r.attrs[u]:a[u]=r.attrs[u]);var s={attrs:a,instance:r.instance};if("component"==s.instance._name){var l=s.attrs["i-bind:is"];s.instance.lister(o,e[l])}e.__componentTask.push(s)}else if("tag"==r.type){for(var f in i=document.createElement(r.tagName),"I-CRUSH-COMPONENT"==n.nodeName||"I-CRUSH-COMPONENT"==n._nodeName?(replaceDom(n,i),e._el=i):n.appendChild(i),r.attrs){var d=r.attrs[f],p=(f+":").split(":"),h=e.__directiveLib[templateToName(p[0])]||e.__directiveLib_scope[templateToName(p[0])];h?e.__directiveTask.push(_objectSpread({el:i},h,{value:d,type:p[1]})):i.setAttribute(f,d)}for(var m=0;m<r.children.length;m++)mountDom(e,t+".children["+m+"]",i,o)}else"text"==r.type?((i=document.createTextNode("")).textContent=r.content.replace(/↵/g,"\n"),n.appendChild(i)):"bindText"==r.type&&((i=document.createTextNode("")).textContent=compilerText(e,r.content).replace(/↵/g,"\n"),n.appendChild(i),e.__bindTextTask.push({el:i,content:r.content}))}}function watcher(e){function t(t){isValidKey(t),isFunction(e[t]);var n=e._data[t];e[t]=n,Object.defineProperty(e,t,{get:function(){return n},set:function(t){n=t,e.$$updateComponent()}})}for(var n in e._data)t(n)}function isText(e){return null!==e&&"object"===_typeof(e)&&3===e.nodeType&&!isPlainObject(e)}function renderMixin(e){e.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(createElement),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],mountDom(this,"_vnode",this._el,e);for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];isFunction(n.inserted)&&n.inserted(n.el,{target:this,exp:n.value,value:get(this,n.value),type:n.type})}watcher(this),this.__isMounted=!0,this.$$lifecycle("mounted")},e.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];isFunction(n.update)&&n.update(n.el,{target:this,exp:n.value,value:get(this,n.value),type:n.type})}for(var o=0;o<this.__bindTextTask.length;o++){var i=this.__bindTextTask[o],r=compilerText(this,i.content).replace(/↵/g,"\n");i.el.textContent!=r&&(i.el.textContent=r)}for(var c=0;c<this.__componentTask.length;c++){var a=this.__componentTask[c];if("component"==a.instance._name){var u=a.attrs["i-bind:is"];a.instance.lister(e,this[u])}}this.$$lifecycle("updated")},e.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var e=0;e<this.__directiveTask.length;e++){var t=this.__directiveTask[e];isFunction(t.delete)&&t.delete(t.el,{target:this,exp:t.value,value:get(this,t.value),type:t.type})}this.$$lifecycle("destroyed")}}function createRenderFactroy(e){return function(t){return function e(t,n){for(var o=t.childNodes,i=[],r=0;r<o.length;r++)isText(o[r])?/^[\x20\t]+$/.test(o[r].textContent)||i.push(o[r].textContent):isElement(o[r])&&i.push(e(o[r],n));for(var c={},a=0;a<t.attributes.length;a++)c[t.attributes[a].nodeName]=t.attributes[a].nodeValue;return n(t.tagName,c,i)}(toNode(e),t)}}function iCrush(e){var t=e.name||"noname";this._name=t,this.$$lifecycle(e.beforeCreate),this.$$init(e),this.$$lifecycle("created"),isElement(this._el)&&this.$$mount()}initMixin(iCrush),lifecycleMixin(iCrush),renderMixin(iCrush);var update=function(e,t){isString(t.type)&&0<t.type.length?e.getAttribute(t.type)!=t.value&&e.setAttribute(t.type,t.value):e.value==t.value&&e.textContent==t.value||(e.value=e.textContent=t.value)},iBind={inserted:update,update:update},iOn={inserted:function(e,t){for(var n=t.type.split("."),o={prevent:!1,stop:!1,once:!1},i=1;i<n.length;i++)o[n[i]]=!0;bindEvent(e,n[0],(function i(r){o.stop&&stopPropagation(r),o.prevent&&preventDefault(r);var c=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(t.exp),a=[],u=[];if(c[2]){var s=c[2].replace(/^\(/,"").replace(/\)$/,"").trim();0<s.length&&(u=s.split(","))}for(var l=0;l<u.length;l++){var f=u[l];f=/^\d/.test(f)||"true"==f||"false"==f||"NAN"==f||/["']/.test(f)?compilerText(t.target,f):compilerText(t.target,"this."+f),a.push(f)}t.target[c[1]].apply(t.target,a),o.once&&unbindEvent(e,n[0],i)}))}};function baseAssignValue(e,t,n){"__proto__"==t?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function assignValue(e,t,n){baseAssignValue(e,t,n)}function baseSet(e,t,n,o){if(!isObject(e))return e;t=castPath(t,e);for(var i=e,r=0;r<t.length;r++){var c=toKey(t[r]),a=n;if(r+1!=t.length){var u=i[c];isObject(u)?a=u:void 0===(a=o?o(u,c,i):void 0)&&(a={})}assignValue(i,c,a),i=i[c]}return e}function set(e,t,n,o){return o="function"==typeof o?o:void 0,null==e?e:baseSet(e,t,n,o)}var iModel={inserted:function(e,t){e.value=t.value,bindEvent(e,"input",(function(){set(t.target,t.exp,e.value)}))},update:function(e,t){e.value=t.value}},component={name:"component",data:function(){return{is:null}},methods:{lister:function(e,t){if(t!=this.is&&null!=t){var n=this._oldComponent;n&&n.$$lifecycle("beforeDestroy");var o=this.is=t;o.el=this._el,o.el._nodeName="I-CRUSH-COMPONENT",this._oldComponent=new e(o),this._el=this._oldComponent._el,n&&(n.$$lifecycle("destroyed"),n=null)}}}};initGlobalAPI(iCrush),iCrush.directive("iBind",iBind),iCrush.directive("iOn",iOn),iCrush.directive("iModel",iModel),iCrush.component("component",component),iCrush.prototype.$$mount=function(){if(isFunction(this._options.render))this.$$render=this._options.render;else{var e=this._options.template;e&&isString(e)||(e=outHTML(this._el),this._el._nodeName="I-CRUSH-COMPONENT"),this.$$render=createRenderFactroy(e)}this.$$mountComponent()},"object"===_typeof(module)&&"object"===_typeof(module.exports)?module.exports=iCrush:window.iCrush=iCrush}()}).call(this,__webpack_require__(6)(module))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(5),o=n(0),i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();"Promise"in i?i.Promise.prototype.finally||(i.Promise.prototype.finally=o.a):i.Promise=t.a}.call(this,n(3))},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(13),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(3))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,i,r,c,a=1,u={},s=!1,l=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,o="[object process]"==={}.toString.call(e.process)?function(e){t.nextTick((function(){p(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(c="setImmediate$"+Math.random()+"$",e.addEventListener?e.addEventListener("message",h,!1):e.attachEvent("onmessage",h),function(t){e.postMessage(c+t,"*")}):e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){p(e.data)},function(e){r.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(i=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):function(e){setTimeout(p,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return u[a]=i,o(a),a++},f.clearImmediate=d}function d(e){delete u[e]}function p(e){if(s)setTimeout(p,0,e);else{var t=u[e];if(t){s=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{d(e),s=!1}}}}function h(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(c)&&p(+t.data.slice(c.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(3),n(14))},function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(e){o=c}}();var u,s=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var o=n(4),i=n.n(o);n(16),i.a.render=function(e){return e("article",{"data-icrush-d5cf9266":""},[e("nav",{"data-icrush-d5cf9266":""},[e("span",{title:"一个帮助你快速绘制二维图形的ES库","data-icrush-d5cf9266":""},["image2D"]),e("ul",{"data-icrush-d5cf9266":""},[e("li",{"@click":'openRouter("guide")',class:"menu-1 guide","data-icrush-d5cf9266":""},["↵↵                    首页↵↵                "]),e("li",{"@click":'openRouter("api")',class:"menu-1 api","data-icrush-d5cf9266":""},["↵↵                    文档↵↵                "]),e("li",{"@click":'openRouter("about")',class:"menu-1 about","data-icrush-d5cf9266":""},["↵↵                    关于我们↵↵                "]),e("li",{"@click":'openRouter("QA")',class:"menu-1 QA","data-icrush-d5cf9266":""},["↵↵                    答疑Q&A↵↵                "]),e("li",{class:"menu-1",onclick:"window.location.href='https://github.com/yelloxing/image2D/issues'","data-icrush-d5cf9266":""},["↵↵                    提问↵↵                "]),e("li",{onclick:"window.location.href='https://github.com/yelloxing/image2D'",class:"git-url",title:"image2D 源码","data-icrush-d5cf9266":""},["↵↵                    Fork-me-on-Github↵↵                "]),e("li",{class:"editor","@click":"openEdit()",title:"修复文档中的错误","data-icrush-d5cf9266":""},["编辑"]),e("li",{onclick:"window.location.href='https://github.com/image2D'",title:"Github Organization","data-icrush-d5cf9266":""},[e("span",{"data-icrush-d5cf9266":""},["↵↵                        访问组织↵↵                    "])])])]),e("div",{"data-icrush-d5cf9266":""},[e("component",{":is":"page","data-icrush-d5cf9266":""},[])])])},t.default=i.a},function(e,t,n){var o=n(1),i=n(17);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r=(o(i,{insert:"head",singleton:!1}),i.locals?i.locals:{});e.exports=r},function(e,t,n){t=e.exports=n(2)(!1);var o=n(7),i=o(n(18)),r=o(n(19)),c=o(n(20));t.push([e.i,"article>nav[data-icrush-d5cf9266]{line-height:.44rem;height:.44rem;background-color:rgba(255,255,255,0.4);-webkit-box-shadow:rgba(0,0,0,0.1) 0 1px 2px;box-shadow:rgba(0,0,0,0.1) 0 1px 2px;font-size:0.2rem;background-image:url("+i+");background-position:.2rem center;background-size:0.3rem auto;background-repeat:no-repeat;color:#711e32;padding-left:.5rem;position:fixed;min-width:100vw;top:0}article>nav>ul[data-icrush-d5cf9266]{display:inline-block;position:absolute;right:.3rem;top:0}article>nav>ul>li[data-icrush-d5cf9266]{vertical-align:top;display:inline-block;color:#030303;padding:0 0.05rem;font-size:0.12rem;cursor:pointer;font-weight:bold;height:100%}article>nav>ul>li[active='yes'][data-icrush-d5cf9266]{color:red}article>nav>ul>li.git-url[data-icrush-d5cf9266]{background-image:url("+r+");font-size:0;width:1rem;background-size:90% auto;background-repeat:no-repeat;background-position:center center}article>nav>ul>li.editor[data-icrush-d5cf9266]{width:0.44rem;height:0.44rem;background-image:url("+c+");background-size:100% auto;font-size:0}article>nav>ul>li>span[data-icrush-d5cf9266]{padding:.04rem;border-radius:.03rem;background-color:#711e32;color:white}article>div[data-icrush-d5cf9266]{padding-top:.44rem}\n",""])},function(e,t,n){e.exports=n.p+"dist/image2D.png"},function(e,t,n){e.exports=n.p+"dist/github.png"},function(e,t,n){e.exports=n.p+"dist/edit.png"},function(e,t,n){var o=n(1),i=n(22);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r=(o(i,{insert:"head",singleton:!1}),i.locals?i.locals:{});e.exports=r},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"/*!\r\n* 统一不同浏览器的基础样式\r\n* git+https://github.com/yelloxing/normalize.css.git\r\n*\r\n* @since v0.1.0 \r\n* @public\r\n* \r\n* 引入方式：\r\n* import '@yelloxing/normalize.css';\r\n*/html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.15}button,input{border:1px solid #b2b2bd}article,footer,header,nav,section{display:block}canvas,svg{display:inline-block}*{-webkit-box-sizing:border-box;box-sizing:border-box}::-ms-clear,::-ms-reveal{display:none}img{display:inline-block}html{font-family:sans-serif}a{text-decoration:none}li{list-style-type:none}ul,ol,li,p,h1,h2,h3,h4,h5,h6{-webkit-margin-before:0;-webkit-margin-after:0;-webkit-padding-start:0;margin-block-end:0;margin-block-start:0;padding-inline-start:0;padding:0;margin:0}body{margin:0}table{border-collapse:collapse}\n",""])},function(e,t,n){var o=n(1),i=n(24);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r=(o(i,{insert:"head",singleton:!1}),i.locals?i.locals:{});e.exports=r},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"html{font-size:100px}body{font-size:.16rem}::-webkit-scrollbar{width:.07rem;height:.07rem;background-color:#eee}::-webkit-scrollbar-thumb{height:.3rem;background-color:#711e32;border-radius:.05rem}*{scrollbar-arrow-color:#711e32;scrollbar-face-color:#eeeeee;scrollbar-highlight-color:#fff;scrollbar-shadow-color:#ccc;scrollbar-track-color:#fff}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadRouter=function(e,t){for(var n=(window.location.href+"#").split("#")[1].replace(/\?.{0,}$/,"").replace(/^\//,"").replace(/\/$/,"").split("/"),i=o,r=0;r<t;r++)i=i[n[r]]||i[i._default_];i.content().then((function(t){e(t.default)}))},t.goRouter=function(e,t){for(var n=o,i="#",r=0;r<t.length;r++)n=n[t[r]]||n[n._default_],i+="/"+t[r];n.content().then((function(t){e(t.default)})),window.location.href=i};var o={guide:{content:function(){return new Promise((function(e){n.e(9).then(function(t){e(n(26))}.bind(null,n)).catch(n.oe)}))}},api:{content:function(){return new Promise((function(e){n.e(1).then(function(t){e(n(27))}.bind(null,n)).catch(n.oe)}))},"how-to-use":{content:function(){return new Promise((function(e){n.e(5).then(function(t){e(n(28))}.bind(null,n)).catch(n.oe)}))}},xhtml:{content:function(){return new Promise((function(e){n.e(8).then(function(t){e(n(29))}.bind(null,n)).catch(n.oe)}))}},painter:{content:function(){return new Promise((function(e){n.e(6).then(function(t){e(n(30))}.bind(null,n)).catch(n.oe)}))}},calculate:{content:function(){return new Promise((function(e){n.e(4).then(function(t){e(n(31))}.bind(null,n)).catch(n.oe)}))}},tool:{content:function(){return new Promise((function(e){n.e(7).then(function(t){e(n(32))}.bind(null,n)).catch(n.oe)}))}},_default_:"how-to-use"},about:{content:function(){return new Promise((function(e){n.e(3).then(function(t){e(n(33))}.bind(null,n)).catch(n.oe)}))}},QA:{content:function(){return new Promise((function(e){n.e(2).then(function(t){e(n(34))}.bind(null,n)).catch(n.oe)}))}},_default_:"guide"}}]);
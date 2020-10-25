/*!
 * miniprogram-entry.js v1.0.0
 * (c) 2020-2020  nicelinks.site
 */
"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t):e}function e(n){var t="function"==typeof Map?new Map:void 0;return(e=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,i)}function i(){return o(n,arguments,c(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),r(i,n)})(n)}function o(n,t,e){return(o=i()?Reflect.construct:function(n,t,e){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(n,o));return e&&r(i,e.prototype),i}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function r(n,t){return(r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function c(n){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var a=document.createElement("template");a.innerHTML='\n  <style>\n    .container {\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      padding: 0px;\n      cursor: pointer;\n    }\n    .content {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .text {\n      color: #454545;\n      opacity: 0.8;\n    }\n    .icon {\n      fill: #454545;\n    }\n    .tooltip .tooltip-content {\n      position: relative;\n      width: 200px;\n      height: 0;\n      margin-top: 20px;\n      padding: 20px;\n      z-index: 1;\n      background-color: #fefefe;\n      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);\n      visibility: hidden;\n      transition: .8s height;\n    }\n    .tooltip:hover .tooltip-content {\n      height: 200px;\n      visibility: visible;\n    }\n    .triangle {\n      position: absolute;\n      top: -20px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 0;\n      height: 0;\n      margin: auto;\n      border: 10px solid transparent;\n      border-bottom: 10px solid #fefefe;\n    }\n    .tooltip-content img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      margin: auto;\n      padding: 0;\n    }\n  </style>\n \n  <div class="tooltip container">\n    <div class="content">\n      <svg t="1603470327132" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474" width="30" height="30"><path d="M932.78 512c0 232.39-188.39 420.78-420.78 420.78S91.22 744.39 91.22 512 279.61 91.22 512 91.22 932.78 279.61 932.78 512" fill="#25AF41" p-id="2475"></path><path d="M259.54 609.85A142.51 142.51 0 0 1 401.85 467.4a32.53 32.53 0 0 1 0 65.05A77.56 77.56 0 1 0 479.39 610V403.48h0.44A142.51 142.51 0 1 1 622 556.3a32.52 32.52 0 0 1 0-65 77.5 77.5 0 1 0-77.6-77.56v207h-0.4a142.44 142.44 0 0 1-284.5-10.8" fill="#FFFFFF" p-id="2476"></path></svg>\n      <span class="text">微信小程序</span>\n      <svg t="1603469872017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1743" width="30" height="30"><path d="M674.133333 384l-166.4 166.4L341.333333 384a41.258667 41.258667 0 0 0-59.733333 0 41.258667 41.258667 0 0 0 0 59.733333l196.266667 196.266667a41.258667 41.258667 0 0 0 59.733333 0l196.266667-196.266667A42.24 42.24 0 1 0 674.133333 384z" opacity=".8" p-id="1744"></path></svg>\n    </div>\n    <div class="tooltip-content">\n      <div class="triangle"></div>\n      <img\n        src="https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1"\n        alt="倾城之链"\n      />\n    </div>\n  </div>\n';var l=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}(s,e(HTMLElement));var o,l,p=(o=s,l=i(),function(){var n,e=c(o);if(l){var i=c(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return t(this,n)});function s(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=p.call(this))._shadowRoot=n.attachShadow({mode:"closed"}),n._shadowRoot.appendChild(a.content.cloneNode(!0)),n}return s}();window.customElements.define("miniprogram-entry",l);

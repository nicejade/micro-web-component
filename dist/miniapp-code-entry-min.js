/*!
 * miniapp-code-entry-min.js v2.0.0
 * (c) 2020-2020  nicelinks.site
 */
"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?r(t):e}function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function o(n){var t="function"==typeof Map?new Map:void 0;return(o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,n)})(n)}function i(n,t,e){return(i=a()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&c(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function c(n,t){return(c=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var l=document.createElement("template"),p=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&c(n,t)}(y,o(HTMLElement));var i,p,u,f,d,h=(i=y,p=a(),function(){var n,t=s(i);if(p){var r=s(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return e(this,n)});function y(){var n,t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),n=h.call(this),l.innerHTML=(t=r(n),'\n  <style>\n    .container {\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      padding: 0px;\n      cursor: pointer;\n    }\n    .content {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .text {\n      color: #454545;\n      opacity: 0.8;\n    }\n    .icon {\n      fill: #454545;\n    }\n    .tooltip .tooltip-content {\n      position: relative;\n      width: 200px;\n      height: 0;\n      margin-top: 20px;\n      z-index: 1;\n      background-color: #fefefe;\n      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);\n      visibility: hidden;\n      transition: .8s height;\n    }\n    .tooltip:hover .tooltip-content {\n      height: 200px;\n      padding: 20px;\n      visibility: visible;\n    }\n    .triangle {\n      position: absolute;\n      top: -20px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 0;\n      height: 0;\n      margin: auto;\n      border: 10px solid transparent;\n      border-bottom: 10px solid #fefefe;\n    }\n    @keyframes wrapper-gradient {\n      0% {\n        transform: translateY(-100%);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n    @keyframes img-gradient {\n      0% {\n        transform: translateY(100%);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n    .gradient-wrapper {\n      height: 100%;\n      display: block;\n      overflow: hidden;\n      animation: wrapper-gradient .8s linear;\n    }\n    .gradient-wrapper > img {\n      animation: img-gradient .8s linear;\n    }\n  </style>\n \n  <div class="tooltip container">\n    <div class="content">\n      <svg t="1603470327132" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474" width="30" height="30"><path d="M932.78 512c0 232.39-188.39 420.78-420.78 420.78S91.22 744.39 91.22 512 279.61 91.22 512 91.22 932.78 279.61 932.78 512" fill="#25AF41" p-id="2475"></path><path d="M259.54 609.85A142.51 142.51 0 0 1 401.85 467.4a32.53 32.53 0 0 1 0 65.05A77.56 77.56 0 1 0 479.39 610V403.48h0.44A142.51 142.51 0 1 1 622 556.3a32.52 32.52 0 0 1 0-65 77.5 77.5 0 1 0-77.6-77.56v207h-0.4a142.44 142.44 0 0 1-284.5-10.8" fill="#FFFFFF" p-id="2476"></path></svg>\n      <span class="text">微信小程序</span>\n      <svg t="1603469872017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1743" width="30" height="30"><path d="M674.133333 384l-166.4 166.4L341.333333 384a41.258667 41.258667 0 0 0-59.733333 0 41.258667 41.258667 0 0 0 0 59.733333l196.266667 196.266667a41.258667 41.258667 0 0 0 59.733333 0l196.266667-196.266667A42.24 42.24 0 1 0 674.133333 384z" opacity=".8" p-id="1744"></path></svg>\n    </div>\n    <div class="tooltip-content">\n      <div class="triangle"></div>\n      <div class="gradient-wrapper">\n        <img\n          src="'.concat(t.src,'"\n          alt="').concat(t.alt,'"\n        />\n      </div>\n    </div>\n  </div>\n')),n._shadowRoot=n.attachShadow({mode:"closed"}),n._shadowRoot.appendChild(l.content.cloneNode(!0)),n}return u=y,(f=[{key:"src",get:function(){return this.getAttribute("src")||"https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1"},set:function(n){this.setAttribute("src")}},{key:"alt",get:function(){return this.getAttribute("alt")||"倾城之链"},set:function(n){this.setAttribute("alt")}}])&&t(u.prototype,f),d&&t(u,d),y}();window.customElements.define("miniapp-code-entry",p);

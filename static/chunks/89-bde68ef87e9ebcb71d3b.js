(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{6071:function(e,t,r){"use strict";var n=r(3848),o=r(9448);t.default=void 0;var i=o(r(7294)),a=r(1689),u=r(2441),s=r(5749),l={};function c(e,t,r,n){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,u.useRouter)(),o=r&&r.pathname||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),r=n(t,2),i=r[0],u=r[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):u||i}}),[o,e.href,e.as]),d=f.href,p=f.as,y=e.children,h=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var g=i.Children.only(y),w=g&&"object"===typeof g&&g.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),_=n(O,2),P=_[0],T=_[1],j=i.default.useCallback((function(e){P(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,P]);(0,i.useEffect)((function(){var e=T&&t&&(0,a.isLocalURL)(d),n="undefined"!==typeof m?m:r&&r.locale,o=l[d+"%"+p+(n?"%"+n:"")];e&&!o&&c(r,d,p,{locale:n})}),[p,d,T,m,t,r]);var M={ref:j,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,u,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==u&&(u=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:u}))}(e,r,d,p,h,v,b,m)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),c(r,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof m?m:r&&r.locale,x=r&&r.isLocaleDomain&&(0,a.getDomainLocale)(p,L,r&&r.locales,r&&r.domainLocales);M.href=x||(0,a.addBasePath)((0,a.addLocale)(p,L,r&&r.defaultLocale))}return i.default.cloneElement(g,M)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,s=(0,o.useRef)(),l=(0,o.useState)(!1),c=n(l,2),f=c[0],d=c[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),i=r(8391),a="undefined"!==typeof IntersectionObserver;var u=new Map},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},i=r(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery,a=void 0!==i&&i;return r||o&&a}},7947:function(e,t,r){"use strict";r(1682);t.__esModule=!0,t.defaultHead=c,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),i=(n=r(617))&&n.__esModule?n:{default:n},a=r(3367),u=r(4287),s=r(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,l=d.length;s<l;s++){var c=d[s];if(o.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?i=!1:r.add(c);else{var f=o.props[c],p=n[c]||new Set;"name"===c&&a||!p.has(f)?(p.add(f),n[c]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function y(e){var t=e.children,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)}y.rewind=function(){};var h=y;t.default=h},617:function(e,t,r){"use strict";var n=r(3115),o=r(2553),i=r(2012),a=(r(450),r(9807)),u=r(7690),s=r(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var c=r(7294),f=function(e){a(r,e);var t=l(r);function r(e){var i;return o(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(c.Component);t.default=f},9008:function(e,t,r){e.exports=r(7947)},1664:function(e,t,r){e.exports=r(6071)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),o=r(7381),i=r(3585),a=r(5725);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},1163:function(e,t,r){e.exports=r(2441)},6421:function(e,t,r){"use strict";var n,o=r(6425),i=(n=o)&&n.__esModule?n:{default:n};var a={tags:function(e){var t=e.id,r=e.events,n=e.dataLayer,o=e.dataLayerName,a=e.preview,u="&gtm_auth="+e.auth,s="&gtm_preview="+a;return t||(0,i.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+u+s+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(r).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+u+s+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+o+"','"+t+"');",dataLayerVar:this.dataLayer(n,o)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=a},8676:function(e,t,r){"use strict";var n,o=r(6421),i=(n=o)&&n.__esModule?n:{default:n};var a={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=i.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,r=e.events,n=void 0===r?{}:r,o=e.dataLayer,i=e.dataLayerName,a=void 0===i?"dataLayer":i,u=e.auth,s=void 0===u?"":u,l=e.preview,c=void 0===l?"":l,f=this.gtm({id:t,events:n,dataLayer:o||void 0,dataLayerName:a,auth:s,preview:c});o&&document.head.appendChild(f.dataScript),document.head.insertBefore(f.script(),document.head.childNodes[0]),document.body.insertBefore(f.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,r=e.dataLayerName,n=void 0===r?"dataLayer":r;if(window[n])return window[n].push(t);var o=i.default.dataLayer(t,n),a=this.dataScript(o);document.head.insertBefore(a,document.head.childNodes[0])}};e.exports=a},1785:function(e,t,r){"use strict";var n,o=r(8676),i=(n=o)&&n.__esModule?n:{default:n};e.exports=i.default},6425:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}},2679:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=r(7294)},function(e,t,r){e.exports=r(10)()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=l(r(0)),i=r(1),a=l(r(4)),u=l(r(12)),s=l(r(2));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.afterLoad,o=e.beforeLoad,i=e.scrollPosition,a=e.visibleByDefault;return r.state={visible:a},a&&(o(),n()),r.onVisible=r.onVisible.bind(r),r.isScrollTracked=Boolean(i&&Number.isFinite(i.x)&&i.x>=0&&Number.isFinite(i.y)&&i.y>=0),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,t=e.className,r=e.delayMethod,n=e.delayTime,i=e.height,l=e.placeholder,c=e.scrollPosition,f=e.style,d=e.threshold,p=e.useIntersectionObserver,y=e.width;return this.isScrollTracked||p&&(0,s.default)()?o.default.createElement(a.default,{className:t,height:i,onVisible:this.onVisible,placeholder:l,scrollPosition:c,style:f,threshold:d,useIntersectionObserver:p,width:y}):o.default.createElement(u.default,{className:t,delayMethod:r,delayTime:n,height:i,onVisible:this.onVisible,placeholder:l,style:f,threshold:d,width:y})}}]),t}(o.default.Component);c.propTypes={afterLoad:i.PropTypes.func,beforeLoad:i.PropTypes.func,useIntersectionObserver:i.PropTypes.bool,visibleByDefault:i.PropTypes.bool},c.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1},t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=l(r(0)),a=l(r(5)),u=r(1),s=l(r(2));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},f={},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(r.supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&(0,s.default)(),r.supportsObserver){var n=e.threshold;r.observer=function(e){return f[e]=f[e]||new IntersectionObserver(c,{rootMargin:e+"px"}),f[e]}(n)}return r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),r=a.default.findDOMNode(this.placeholder).style,n={left:parseInt(r.getPropertyValue("margin-left"),10)||0,top:parseInt(r.getPropertyValue("margin-top"),10)||0};return{bottom:e.y+t.bottom+n.top,left:e.x+t.left+n.left,right:e.x+t.right+n.left,top:e.y+t.top+n.top}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,r=e.threshold,n=this.getPlaceholderBoundingBox(t),o=t.y+window.innerHeight,i=t.x,a=t.x+window.innerWidth,u=t.y;return Boolean(u-r<=n.bottom&&o+r>=n.top&&i-r<=n.right&&a+r>=n.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,o=t.height,a=t.placeholder,u=t.style,s=t.width;if(a&&"function"!=typeof a.type)return i.default.cloneElement(a,{ref:function(t){return e.placeholder=t}});var l=n({display:"inline-block"},u);return void 0!==s&&(l.width=s),void 0!==o&&(l.height=o),i.default.createElement("span",{className:r,ref:function(t){return e.placeholder=t},style:l},a)}}]),t}(i.default.Component);d.propTypes={onVisible:u.PropTypes.func.isRequired,className:u.PropTypes.string,height:u.PropTypes.oneOfType([u.PropTypes.number,u.PropTypes.string]),placeholder:u.PropTypes.element,threshold:u.PropTypes.number,useIntersectionObserver:u.PropTypes.bool,scrollPosition:u.PropTypes.shape({x:u.PropTypes.number.isRequired,y:u.PropTypes.number.isRequired}),width:u.PropTypes.oneOfType([u.PropTypes.number,u.PropTypes.string])},d.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0},t.default=d},function(e,t){e.exports=r(3935)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r(0)),a=d(r(5)),u=r(1),s=d(r(13)),l=d(r(14)),c=d(r(2)),f=d(r(15));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},h=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};t.default=function(e){var t=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));if(t.useIntersectionObserver=e.useIntersectionObserver&&(0,c.default)(),t.useIntersectionObserver)return p(t);var n=t.onChangeScroll.bind(t);return"debounce"===e.delayMethod?t.delayedScroll=(0,s.default)(n,e.delayTime):"throttle"===e.delayMethod&&(t.delayedScroll=(0,l.default)(n,e.delayTime)),t.state={scrollPosition:{x:y(),y:h()}},t.baseComponentRef=i.default.createRef(),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),o(r,[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(0,f.default)(a.default.findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=(0,f.default)(a.default.findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:y(),y:h()}})}},{key:"render",value:function(){var t=this.props,r=(t.delayMethod,t.delayTime,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["delayMethod","delayTime"])),o=this.useIntersectionObserver?null:this.state.scrollPosition;return i.default.createElement(e,n({ref:this.baseComponentRef,scrollPosition:o},r))}}]),r}(i.default.Component);return t.propTypes={delayMethod:u.PropTypes.oneOf(["debounce","throttle"]),delayTime:u.PropTypes.number,useIntersectionObserver:u.PropTypes.bool},t.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},t}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trackWindowScroll=t.LazyLoadComponent=t.LazyLoadImage=void 0;var n=a(r(9)),o=a(r(3)),i=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}t.LazyLoadImage=n.default,t.LazyLoadComponent=o.default,t.trackWindowScroll=i.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=s(r(0)),a=r(1),u=s(r(3));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={loaded:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(){e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,t=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"]));return i.default.createElement("img",n({onLoad:this.onImageLoad()},t))}},{key:"getLazyLoadImage",value:function(){var e=this.props,t=e.beforeLoad,r=e.className,n=e.delayMethod,o=e.delayTime,a=e.height,s=e.placeholder,l=e.scrollPosition,c=e.style,f=e.threshold,d=e.useIntersectionObserver,p=e.visibleByDefault,y=e.width;return i.default.createElement(u.default,{beforeLoad:t,className:r,delayMethod:n,delayTime:o,height:a,placeholder:s,scrollPosition:l,style:c,threshold:f,useIntersectionObserver:d,visibleByDefault:p,width:y},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var t=this.props,r=t.effect,o=t.height,a=t.placeholderSrc,u=t.width,s=t.wrapperClassName,l=t.wrapperProps,c=this.state.loaded,f=c?" lazy-load-image-loaded":"";return i.default.createElement("span",n({className:s+" lazy-load-image-background "+r+f,style:{backgroundImage:c||!a?"":"url("+a+")",backgroundSize:c||!a?"":"100% 100%",display:"inline-block",height:o,width:u}},l),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,r=e.placeholderSrc,n=e.visibleByDefault,o=e.wrapperClassName,i=e.wrapperProps,a=this.getLazyLoadImage();return(t||r)&&!n||o||i?this.getWrappedLazyLoadImage(a):a}}]),t}(i.default.Component);l.propTypes={afterLoad:a.PropTypes.func,beforeLoad:a.PropTypes.func,delayMethod:a.PropTypes.string,delayTime:a.PropTypes.number,effect:a.PropTypes.string,placeholderSrc:a.PropTypes.string,threshold:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool,visibleByDefault:a.PropTypes.bool,wrapperClassName:a.PropTypes.string,wrapperProps:a.PropTypes.object},l.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""},t.default=l},function(e,t,r){"use strict";var n=r(11);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=u(r(0)),i=u(r(4)),a=u(r(6));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return o.default.createElement(i.default,this.props)}}]),t}(o.default.Component);t.default=(0,a.default)(s)},function(e,t,r){(function(t){var r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,l=u||s||Function("return this")(),c=Object.prototype.toString,f=Math.max,d=Math.min,p=function(){return l.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var u=o.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var n,o,i,a,u,s,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function g(e){var r=e-s;return void 0===s||r>=t||r<0||v&&e-l>=i}function w(){var e=p();if(g(e))return O(e);u=setTimeout(w,function(e){var r=t-(e-s);return v?d(r,i-(e-l)):r}(e))}function O(e){return u=void 0,b&&n?m(e):(n=o=void 0,a)}function _(){var e=p(),r=g(e);if(n=arguments,o=this,s=e,r){if(void 0===u)return function(e){return l=e,u=setTimeout(w,t),c?m(e):a}(s);if(v)return u=setTimeout(w,t),m(s)}return void 0===u&&(u=setTimeout(w,t)),a}return t=h(t)||0,y(r)&&(c=!!r.leading,i=(v="maxWait"in r)?f(h(r.maxWait)||0,t):i,b="trailing"in r?!!r.trailing:b),_.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=s=o=u=void 0},_.flush=function(){return void 0===u?a:O(p())},_}}).call(this,r(7))},function(e,t,r){(function(t){var r="Expected a function",n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),f=Object.prototype.toString,d=Math.max,p=Math.min,y=function(){return c.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||a.test(e)?u(e.slice(2),r?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return h(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),function(e,t,n){var o,i,a,u,s,l,c=0,f=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var r=o,n=i;return o=i=void 0,c=t,u=e.apply(n,r)}function w(e){var r=e-l;return void 0===l||r>=t||r<0||b&&e-c>=a}function O(){var e=y();if(w(e))return _(e);s=setTimeout(O,function(e){var r=t-(e-l);return b?p(r,a-(e-c)):r}(e))}function _(e){return s=void 0,m&&o?g(e):(o=i=void 0,u)}function P(){var e=y(),r=w(e);if(o=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(O,t),f?g(e):u}(l);if(b)return s=setTimeout(O,t),g(l)}return void 0===s&&(s=setTimeout(O,t)),u}return t=v(t)||0,h(n)&&(f=!!n.leading,a=(b="maxWait"in n)?d(v(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),P.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=l=i=s=void 0},P.flush=function(){return void 0===s?u:_(y())},P}(e,t,{leading:o,maxWait:t,trailing:i})}}).call(this,r(7))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return"undefined"==typeof getComputedStyle?e.style[t]:getComputedStyle(e,null).getPropertyValue(t)},o=function(e){return n(e,"overflow")+n(e,"overflow-y")+n(e,"overflow-x")};t.default=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(o(t)))return t;t=t.parentNode}return window}}])}}]);
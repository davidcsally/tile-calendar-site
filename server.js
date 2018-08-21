!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";var n=l(r(2)),a=l(r(3)),o=l(r(0)),u=r(4),c=l(r(5)),s=l(r(6)),i=r(7);function l(e){return e&&e.__esModule?e:{default:e}}var d=(0,n.default)();d.use((0,a.default)()),d.use(n.default.static("./src/build")),d.get("/",function(e,t,r){(0,i.fetchCachedData)().then(function(e){var r=(0,u.renderToString)(o.default.createElement(s.default,{data:e}));t.send('\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <title>SSR with RR</title>\n            <script src="/bundle.js" defer><\/script>\n            <script>window.__INITIAL_DATA__ = '+(0,c.default)(e)+'<\/script>\n          </head>\n    \n          <body>\n            <div id="root">'+r+"</div>\n    \n          </body>\n        </html>\n      ")})}),d.listen(3e3,function(){console.log("Server is listening on port: 3000")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={cachedData:null,actMap:[],actTileUi:{},searchText:"",redirectHome:!1,datesTable:{},actKeysReordered:[],endIndex:10},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"componentDidMount",value:function(){console.log("mountdata",this.props.data),this.setState(this.props.data)}},{key:"render",value:function(){return console.log(this.state),o.default.createElement("div",null,"Hello world")}}]),t}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchCachedData=function(){return n.default.get("http://localhost:8080/").then(function(e){var t=[],r=Object.keys(e.data.acts),n={},u={};return r.forEach(function(r){var o={};n=Object.assign(n,s({},e.data.acts[r].id,{active:!1,display:!0})),t.push([e.data.acts[r].id,""+r]),e.data.acts[r].dates.sort(function(e,t){return new Date(e.date)-new Date(t.date)});for(var c=new Date("January 1, 1970, 00:00:00"),i=0;i<e.data.acts[r].dates.length;i++){var l=new Date(e.data.acts[r].dates[i].date);0===i&&(c=new Date(a.default[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()+", 04:00:00"),o[a.default[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()]=[]),l.getTime()/1e3/60/60-c.getTime()/1e3/60/60>=24?(c=new Date(a.default[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()+", 04:00:00"),o[a.default[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()]=[],o[a.default[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()]=o[a.default[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()].concat(e.data.acts[r].dates[i])):l.getTime()/1e3/60/60-c.getTime()/1e3/60/60>=20?o[a.default[l.getMonth()]+" "+(l.getDate()-1)+", "+l.getFullYear()]=o[a.default[l.getMonth()]+" "+(l.getDate()-1)+", "+l.getFullYear()].concat(e.data.acts[r].dates[i]):o[a.default[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()]=o[a.default[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()].concat(e.data.acts[r].dates[i])}u=Object.assign(u,s({},e.data.acts[r].id,o))}),{cachedData:e.data,actMap:t,actTileUi:n,actKeysReordered:(0,o.default)(Object.keys(e.data.acts)),datesTable:u}}).catch(u.default)};c(r(8));var n=c(r(9)),a=c(r(10)),o=(c(r(11)),c(r(12))),u=c(r(13));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";e.exports=["January","February","March","April","May","June","July","August","September","October","November","December"]},function(e,t,r){"use strict";e.exports=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},function(e,t,r){"use strict";e.exports=function(e){for(var t=e.length,r=void 0,n=void 0;0!==t;)n=Math.floor(Math.random()*t),r=e[t-=1],e[t]=e[n],e[n]=r;return e}},function(e,t,r){"use strict";e.exports=function(e){if("Cancel"!==e.constructor.name){if(e.response){var t=e.response,r=t.data,n=t.status,a=t.headers;console.error("Response Data --",r),console.error("Response Status --",n),console.error("Response Headers --",a)}else e.request?console.error("Request failed to get a response --",e.request):console.error("Error",e.message);console.error(e)}}}]);
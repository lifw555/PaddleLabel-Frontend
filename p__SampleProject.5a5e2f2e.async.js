(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[124],{91220:function(i,u,n){"use strict";n.d(u,{Z:function(){return c}});var O=n(64254);function c(r,P){var _;if(typeof Symbol=="undefined"||r[Symbol.iterator]==null){if(Array.isArray(r)||(_=(0,O.Z)(r))||P&&r&&typeof r.length=="number"){_&&(r=_);var a=0,l=function(){};return{s:l,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(o){throw o},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,E=!1,t;return{s:function(){_=r[Symbol.iterator]()},n:function(){var o=_.next();return s=o.done,o},e:function(o){E=!0,t=o},f:function(){try{!s&&_.return!=null&&_.return()}finally{if(E)throw t}}}}},41435:function(i,u,n){"use strict";n.d(u,{Z:function(){return a}});var O=n(94663),c=n(80112);function r(l){return Function.toString.call(l).indexOf("[native code]")!==-1}var P=n(18597);function _(l,s,E){return(0,P.Z)()?_=Reflect.construct:_=function(e,o,d){var f=[null];f.push.apply(f,o);var M=Function.bind.apply(e,f),m=new M;return d&&(0,c.Z)(m,d.prototype),m},_.apply(null,arguments)}function a(l){var s=typeof Map=="function"?new Map:void 0;return a=function(t){if(t===null||!r(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof s!="undefined"){if(s.has(t))return s.get(t);s.set(t,e)}function e(){return _(t,arguments,(0,O.Z)(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),(0,c.Z)(e,t)},a(l)}},41180:function(i){i.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},70362:function(i){i.exports={card:"card___CFZWU",thumbnail:"thumbnail___1gIPM",button:"button___g0lkO"}},48627:function(i){i.exports={container:"container___2RXc3"}},17969:function(i){i.exports={col:"col___yKN-b"}},31982:function(i,u,n){"use strict";var O=n(89032),c=n(15746),r=n(11849),P=n(13062),_=n(71230),a=n(11700),l=n(67294),s=n(41180),E=n.n(s),t=n(85893),e=function(d){return(0,t.jsxs)("div",{className:E().ppcard,style:d.style,hidden:d.hidden,children:[(0,t.jsx)(_.Z,{className:E().titleRow,style:{display:d.title?void 0:"none"},children:(0,t.jsx)(a.Z,{className:E().title,children:d.title})}),(0,t.jsx)(_.Z,{style:{marginTop:26},children:(0,t.jsx)(c.Z,{span:24,style:(0,r.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},d.innerStyle),children:d.children})})]})};u.Z=e},40318:function(i,u,n){"use strict";var O=n(57663),c=n(71577),r=n(48971),P=n(67294),_=n(70362),a=n.n(_),l=n(85893),s=function(t){return(0,l.jsxs)("div",{className:a().card,style:{height:t.height,width:t.width},onClick:t.onClick?t.onClick:function(){return r.m8.push(t.href?t.href:"")},children:[(0,l.jsx)("img",{className:a().thumbnail,alt:t.wording||a().thumbnail,src:t.imgSrc,style:{height:t.height,width:t.width}}),(0,l.jsx)(c.Z,{className:a().button,style:{width:t.width},children:t.children})]})};u.Z=s},11428:function(i,u,n){"use strict";var O=n(67294),c=n(48627),r=n.n(c),P=n(85893),_=function(l){return(0,P.jsx)("div",{className:"".concat(r().container),style:{backgroundImage:"url(./pics/background.png)"},children:l.children})};u.Z=_},52940:function(i,u,n){"use strict";var O=n(11849),c=n(89032),r=n(15746),P=n(2824),_=n(67294),a=n(17969),l=n.n(a),s=n(85893),E=function(e){var o=(0,_.useState)(!1),d=(0,P.Z)(o,2),f=d[0],M=d[1];return(0,s.jsx)(r.Z,(0,O.Z)((0,O.Z)({},e),{},{className:"".concat(l().col," ").concat(e.className),style:{zIndex:f?11:10,width:"100%"},onMouseOver:function(){M(!0)},onMouseLeave:function(){M(!1)},children:e.children}))};u.Z=E},64873:function(i,u,n){"use strict";n.r(u);var O=n(89032),c=n(15746),r=n(13062),P=n(71230),_=n(67294),a=n(48971),l=n(40318),s=n(31982),E=n(11428),t=n(52940),e=n(98731),o=n(85893),d=function(){return(0,o.jsxs)(E.Z,{children:["Sample Projects",(0,o.jsx)(P.Z,{style:{marginTop:20},children:(0,o.jsx)(c.Z,{span:24,children:(0,o.jsx)(s.Z,{style:{height:500},children:(0,o.jsx)(P.Z,{children:Object.entries(e.ux).map(function(M){var m=M[0],v=M[1];return console.log(m,v),(0,o.jsx)(t.Z,{span:4,children:(0,o.jsx)(l.Z,{height:360,width:310,imgSrc:v.avatar,onClick:function(){e.dG.loadSample({taskCategoryId:v.id}).then(function(D){a.m8.push("/project_overview?projectId=".concat(D.projectId))})},children:v.name})},m)})})})})})]})};u.default=d}}]);

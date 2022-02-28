(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[112],{49101:function(P,l,t){"use strict";t.d(l,{Z:function(){return f}});var n=t(28991),a=t(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},c=o,r=t(27029),i=function(h,_){return a.createElement(r.Z,(0,n.Z)((0,n.Z)({},h),{},{ref:_,icon:c}))};i.displayName="PlusOutlined";var f=a.forwardRef(i)},88769:function(P){P.exports={createBtn:"createBtn___L_oKa"}},41180:function(P){P.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},70362:function(P){P.exports={card:"card___CFZWU",thumbnail:"thumbnail___1gIPM",button:"button___g0lkO"}},48627:function(P){P.exports={container:"container___2RXc3"}},80638:function(){},23304:function(P,l,t){"use strict";var n=t(57663),a=t(71577),o=t(49101),c=t(67294),r=t(88769),i=t.n(r),f=t(85893),O=function(_){return(0,f.jsx)(a.Z,{icon:(0,f.jsx)(o.Z,{}),size:"large",id:"".concat(i().createBtn),children:_.children})};l.Z=O},31982:function(P,l,t){"use strict";var n=t(89032),a=t(15746),o=t(11849),c=t(13062),r=t(71230),i=t(11700),f=t(67294),O=t(41180),h=t.n(O),_=t(85893),R=function(e){return(0,_.jsxs)("div",{className:h().ppcard,style:e.style,children:[(0,_.jsx)(r.Z,{className:h().titleRow,style:{display:e.title?void 0:"none"},children:(0,_.jsx)(i.Z,{className:h().title,children:e.title})}),(0,_.jsx)(r.Z,{style:{marginTop:26},children:(0,_.jsx)(a.Z,{span:24,style:(0,o.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},e.innerStyle),children:e.children})})]})};l.Z=R},40318:function(P,l,t){"use strict";var n=t(57663),a=t(71577),o=t(48971),c=t(67294),r=t(70362),i=t.n(r),f=t(85893),O=function(_){return(0,f.jsxs)("div",{className:i().card,style:{height:_.height,width:_.width},onClick:function(){return o.m8.push(_.href?_.href:"")},children:[(0,f.jsx)("img",{className:i().thumbnail,alt:_.wording||i().thumbnail,src:_.imgSrc,style:{height:_.height,width:_.width}}),(0,f.jsx)(a.Z,{className:i().button,style:{width:_.width},children:_.children})]})};l.Z=O},11428:function(P,l,t){"use strict";var n=t(67294),a=t(48627),o=t.n(a),c=t(85893),r=function(f){return(0,c.jsx)("div",{className:"".concat(o().container),style:{backgroundImage:"url(./pics/background.png)"},children:f.children})};l.Z=r},12405:function(P,l,t){"use strict";t.r(l);var n=t(49111),a=t(19650),o=t(13062),c=t(71230),r=t(89032),i=t(15746),f=t(67294),O=t(40318),h=t(31982),_=t(23304),R=t(11428),d=t(85893),e=function(){return(0,d.jsxs)(R.Z,{children:[(0,d.jsx)(c.Z,{gutter:[20,20],style:{marginTop:101},children:(0,d.jsx)(i.Z,{span:24,children:(0,d.jsx)(_.Z,{children:"Create Label"})})}),(0,d.jsx)(c.Z,{style:{marginTop:20},children:(0,d.jsx)(i.Z,{span:24,children:(0,d.jsx)(h.Z,{style:{height:500},children:(0,d.jsxs)(a.Z,{size:30,children:[(0,d.jsx)(O.Z,{height:360,width:310,imgSrc:"./pics/classification.jpg",children:"Image Classification"}),(0,d.jsx)(O.Z,{height:360,width:310,imgSrc:"./pics/object_detection.jpg",children:"Object Detection"}),(0,d.jsx)(O.Z,{height:360,width:310,imgSrc:"./pics/instance_segmentation.jpg",children:"Instance Segmentation"}),(0,d.jsx)(O.Z,{height:360,width:310,imgSrc:"./pics/semantic_segmentation.jpg",children:"Semantic Segmentation"}),(0,d.jsx)(O.Z,{height:360,width:310,imgSrc:"./pics/keypoint_detection.jpg",children:"Keypoint detection"})]})})})})]})};l.default=e},99134:function(P,l,t){"use strict";var n=t(67294),a=(0,n.createContext)({});l.Z=a},21584:function(P,l,t){"use strict";var n=t(96156),a=t(22122),o=t(90484),c=t(67294),r=t(94184),i=t.n(r),f=t(99134),O=t(65632),h=function(e,L){var g={};for(var v in e)Object.prototype.hasOwnProperty.call(e,v)&&L.indexOf(v)<0&&(g[v]=e[v]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,v=Object.getOwnPropertySymbols(e);s<v.length;s++)L.indexOf(v[s])<0&&Object.prototype.propertyIsEnumerable.call(e,v[s])&&(g[v[s]]=e[v[s]]);return g};function _(e){return typeof e=="number"?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}var R=["xs","sm","md","lg","xl","xxl"],d=c.forwardRef(function(e,L){var g,v=c.useContext(O.E_),s=v.getPrefixCls,T=v.direction,D=c.useContext(f.Z),E=D.gutter,y=D.wrap,j=D.supportFlexGap,H=e.prefixCls,p=e.span,b=e.order,W=e.offset,A=e.push,Z=e.pull,V=e.className,S=e.children,N=e.flex,J=e.style,G=h(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),M=s("col",H),K={};R.forEach(function(C){var m,u={},B=e[C];typeof B=="number"?u.span=B:(0,o.Z)(B)==="object"&&(u=B||{}),delete G[C],K=(0,a.Z)((0,a.Z)({},K),(m={},(0,n.Z)(m,"".concat(M,"-").concat(C,"-").concat(u.span),u.span!==void 0),(0,n.Z)(m,"".concat(M,"-").concat(C,"-order-").concat(u.order),u.order||u.order===0),(0,n.Z)(m,"".concat(M,"-").concat(C,"-offset-").concat(u.offset),u.offset||u.offset===0),(0,n.Z)(m,"".concat(M,"-").concat(C,"-push-").concat(u.push),u.push||u.push===0),(0,n.Z)(m,"".concat(M,"-").concat(C,"-pull-").concat(u.pull),u.pull||u.pull===0),(0,n.Z)(m,"".concat(M,"-rtl"),T==="rtl"),m))});var X=i()(M,(g={},(0,n.Z)(g,"".concat(M,"-").concat(p),p!==void 0),(0,n.Z)(g,"".concat(M,"-order-").concat(b),b),(0,n.Z)(g,"".concat(M,"-offset-").concat(W),W),(0,n.Z)(g,"".concat(M,"-push-").concat(A),A),(0,n.Z)(g,"".concat(M,"-pull-").concat(Z),Z),g),V,K),x={};if(E&&E[0]>0){var F=E[0]/2;x.paddingLeft=F,x.paddingRight=F}if(E&&E[1]>0&&!j){var $=E[1]/2;x.paddingTop=$,x.paddingBottom=$}return N&&(x.flex=_(N),y===!1&&!x.minWidth&&(x.minWidth=0)),c.createElement("div",(0,a.Z)({},G,{style:(0,a.Z)((0,a.Z)({},x),J),className:X,ref:L}),S)});d.displayName="Col",l.Z=d},92820:function(P,l,t){"use strict";var n=t(22122),a=t(96156),o=t(90484),c=t(28481),r=t(67294),i=t(94184),f=t.n(i),O=t(65632),h=t(99134),_=t(93355),R=t(24308),d=t(98082),e=function(s,T){var D={};for(var E in s)Object.prototype.hasOwnProperty.call(s,E)&&T.indexOf(E)<0&&(D[E]=s[E]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,E=Object.getOwnPropertySymbols(s);y<E.length;y++)T.indexOf(E[y])<0&&Object.prototype.propertyIsEnumerable.call(s,E[y])&&(D[E[y]]=s[E[y]]);return D},L=(0,_.b)("top","middle","bottom","stretch"),g=(0,_.b)("start","end","center","space-around","space-between"),v=r.forwardRef(function(s,T){var D,E=s.prefixCls,y=s.justify,j=s.align,H=s.className,p=s.style,b=s.children,W=s.gutter,A=W===void 0?0:W,Z=s.wrap,V=e(s,["prefixCls","justify","align","className","style","children","gutter","wrap"]),S=r.useContext(O.E_),N=S.getPrefixCls,J=S.direction,G=r.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),M=(0,c.Z)(G,2),K=M[0],X=M[1],x=(0,d.Z)(),F=r.useRef(A);r.useEffect(function(){var nt=R.ZP.subscribe(function(U){var I=F.current||0;(!Array.isArray(I)&&(0,o.Z)(I)==="object"||Array.isArray(I)&&((0,o.Z)(I[0])==="object"||(0,o.Z)(I[1])==="object"))&&X(U)});return function(){return R.ZP.unsubscribe(nt)}},[]);var $=function(){var U=[0,0],I=Array.isArray(A)?A:[A,0];return I.forEach(function(z,_t){if((0,o.Z)(z)==="object")for(var Y=0;Y<R.c4.length;Y++){var k=R.c4[Y];if(K[k]&&z[k]!==void 0){U[_t]=z[k];break}}else U[_t]=z||0}),U},C=N("row",E),m=$(),u=f()(C,(D={},(0,a.Z)(D,"".concat(C,"-no-wrap"),Z===!1),(0,a.Z)(D,"".concat(C,"-").concat(y),y),(0,a.Z)(D,"".concat(C,"-").concat(j),j),(0,a.Z)(D,"".concat(C,"-rtl"),J==="rtl"),D),H),B={},w=m[0]>0?m[0]/-2:void 0,Q=m[1]>0?m[1]/-2:void 0;if(w&&(B.marginLeft=w,B.marginRight=w),x){var at=(0,c.Z)(m,2);B.rowGap=at[1]}else Q&&(B.marginTop=Q,B.marginBottom=Q);var q=(0,c.Z)(m,2),tt=q[0],et=q[1],st=r.useMemo(function(){return{gutter:[tt,et],wrap:Z,supportFlexGap:x}},[tt,et,Z,x]);return r.createElement(h.Z.Provider,{value:st},r.createElement("div",(0,n.Z)({},V,{className:u,style:(0,n.Z)((0,n.Z)({},B),p),ref:T}),b))});v.displayName="Row",l.Z=v},6999:function(P,l,t){"use strict";var n=t(38663),a=t.n(n),o=t(80638),c=t.n(o)}}]);

(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[185],{88769:function(l){l.exports={createBtn:"createBtn___L_oKa"}},41180:function(l){l.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},9238:function(l){l.exports={button:"button___3gM4r"}},70362:function(l){l.exports={card:"card___CFZWU",thumbnail:"thumbnail___1gIPM",button:"button___g0lkO"}},48627:function(l){l.exports={container:"container___2RXc3"}},17969:function(){},24141:function(l){l.exports={pagination:"pagination___1KJhU",pageSizeSelector:"pageSizeSelector___2XZ11"}},75534:function(l){l.exports={table:"table___BHQO2"}},23304:function(l,h,e){"use strict";var T=e(57663),i=e(71577),_=e(49101),u=e(67294),g=e(88769),s=e.n(g),P=e(85893),o=function(a){return(0,P.jsx)(i.Z,{icon:(0,P.jsx)(_.Z,{}),size:"large",id:"".concat(s().createBtn),children:a.children})};h.Z=o},31982:function(l,h,e){"use strict";var T=e(89032),i=e(15746),_=e(11849),u=e(13062),g=e(71230),s=e(11700),P=e(67294),o=e(41180),c=e.n(o),a=e(85893),y=function(r){return(0,a.jsxs)("div",{className:c().ppcard,style:r.style,children:[(0,a.jsx)(g.Z,{className:c().titleRow,style:{display:r.title?void 0:"none"},children:(0,a.jsx)(s.Z,{className:c().title,children:r.title})}),(0,a.jsx)(g.Z,{style:{marginTop:26},children:(0,a.jsx)(i.Z,{span:24,style:(0,_.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},r.innerStyle),children:r.children})})]})};h.Z=y},40318:function(l,h,e){"use strict";var T=e(57663),i=e(71577),_=e(48971),u=e(67294),g=e(70362),s=e.n(g),P=e(85893),o=function(a){return(0,P.jsxs)("div",{className:s().card,style:{height:a.height,width:a.width},onClick:function(){return _.m8.push(a.href?a.href:"")},children:[(0,P.jsx)("img",{className:s().thumbnail,alt:a.wording||s().thumbnail,src:a.imgSrc,style:{height:a.height,width:a.width}}),(0,P.jsx)(i.Z,{className:s().button,style:{width:a.width},children:a.children})]})};h.Z=o},11428:function(l,h,e){"use strict";var T=e(67294),i=e(48627),_=e.n(i),u=e(85893),g=function(P){return(0,u.jsx)("div",{className:"".concat(_().container),style:{backgroundImage:"url(./pics/background.png)"},children:P.children})};h.Z=g},34543:function(l,h,e){"use strict";e.r(h),e.d(h,{default:function(){return oe}});var T=e(57663),i=e(71577),_=e(13062),u=e(71230),g=e(89032),s=e(15746),P=e(49111),o=e(19650),c=e(67294),a=e(11428),y=e(40318),A=e(31982),r=e(11849),ce=e(8963),Y=e(34441),B=e(2824),J=e(75534),Q=e.n(J),ve=e(14781),V=e(40308),he=e(43358),G=e(34041),I=e(48971),b=e(24141),F=e.n(b),n=e(85893),Z=G.Z.Option;function $(x){var t=x.formatMessage({id:"component.PPTable.prev",defaultMessage:"Previous"}),d=x.formatMessage({id:"component.PPTable.next",defaultMessage:"Next"});return function(v,m,E){return m==="prev"?(0,n.jsx)(i.Z,{children:t}):m==="next"?(0,n.jsx)(i.Z,{children:d}):E}}var p=function(t){var d=t.totalNum,v=(0,c.useState)(t.pageSize||10),m=(0,B.Z)(v,2),E=m[0],C=m[1],U=(0,c.useState)(t.currentPage||1),S=(0,B.Z)(U,2),O=S[0],R=S[1];return(0,n.jsx)("div",{className:"".concat(F().pagination),children:(0,n.jsxs)(o.Z,{align:"center",children:[(0,I.YB)().formatMessage({id:"component.PPTable.pageTotal"},{total:d,show:(0,n.jsxs)(G.Z,{value:E+"",className:F().pageSizeSelector,onChange:function(j){C(parseInt(j)),t.onChange&&t.onChange(O,parseInt(j))},children:[(0,n.jsx)(Z,{value:"10",children:"10"}),(0,n.jsx)(Z,{value:"20",children:"20"}),(0,n.jsx)(Z,{value:"30",children:"30"}),(0,n.jsx)(Z,{value:"40",children:"40"}),(0,n.jsx)(Z,{value:"50",children:"50"})]})}),(0,n.jsx)(V.Z,{className:F().pagination,current:O,pageSize:E,total:d,itemRender:$((0,I.YB)()),onChange:function(j,D){console.log("Pagination: ".concat(D,"/").concat(j)),R(j),t.onChange&&t.onChange(j,D)}})]})})},w=p,k=function(t){var d,v=((d=t.dataSource)===null||d===void 0?void 0:d.length)||0,m=(0,c.useState)(10),E=(0,B.Z)(m,2),C=E[0],U=E[1],S=(0,c.useState)(1),O=(0,B.Z)(S,2),R=O[0],L=O[1],j=t.dataSource,D=[];if(t.dataSource){var N,z,f=C*(R-1),W=C;f+C>v&&(W=v-f+1),j=(N=t.dataSource)===null||N===void 0?void 0:N.slice(f,f+W/2),D=(z=t.dataSource)===null||z===void 0?void 0:z.slice(f+W/2,f+W)}return(0,n.jsxs)("div",{className:"".concat(Q().table),children:[(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(s.Z,{span:12,style:{borderRight:"0.063rem solid rgba(151,151,151,0.27)"},children:(0,n.jsx)(Y.Z,(0,r.Z)((0,r.Z)({},t),{},{dataSource:j,pagination:!1,rowSelection:void 0}))}),(0,n.jsx)(s.Z,{span:12,children:(0,n.jsx)(Y.Z,(0,r.Z)((0,r.Z)({},t),{},{dataSource:D,pagination:!1,rowSelection:void 0}))})]}),(0,n.jsx)(u.Z,{style:{marginTop:"1.75rem"},children:(0,n.jsx)(s.Z,{span:24,children:(0,n.jsx)(o.Z,{align:"center",children:(0,n.jsx)(w,{totalNum:v,pageSize:C,currentPage:R,onChange:function(H,X){U(X),(H-1)*X>v?L(1):L(H),t.onChange&&t.onChange(H,X)}})})})})]})},q=k,ee=e(9238),ne=e.n(ee),te=function(t){return(0,n.jsx)(i.Z,(0,r.Z)((0,r.Z)({},t),{},{style:{color:t.color,width:t.width,height:t.height,borderColor:t.color},className:"".concat(ne().button),children:t.children}))},K=te,ae=e(23304),le=e(17969),se=e.n(le),ie=function(t){var d=(0,c.useState)(!1),v=(0,B.Z)(d,2),m=v[0],E=v[1];return(0,n.jsx)(s.Z,(0,r.Z)((0,r.Z)({},t),{},{className:"".concat(se().col," ").concat(t.className),style:{zIndex:m?11:10,width:m?"100%":"80%"},onMouseOver:function(){E(!0)},onMouseLeave:function(){E(!1)},children:t.children}))},M=ie,re=[{title:"ID",dataIndex:"id",key:"id",width:"4.5rem",align:"center",render:function(t){return(0,n.jsx)(n.Fragment,{children:t})}},{title:"Name",dataIndex:"name",key:"name"},{title:"Actions",key:"id",width:"15rem",align:"center",render:function(t,d){return(0,n.jsxs)(o.Z,{size:"middle",children:[(0,n.jsx)(K,{width:"4.375rem",height:"1.875rem",color:"rgba(241,162,0,1)",children:"\u4FEE\u6539\u4FE1\u606F"}),(0,n.jsx)(K,{width:"4.375rem",height:"1.875rem",color:"rgba(0,100,248,1)",onClick:function(){I.m8.push("/label/"+d.id)},children:"\u53BB\u6807\u6CE8"}),(0,n.jsx)(K,{width:"4.375rem",height:"1.875rem",color:"rgba(207,63,0,1)",children:"\u5220\u9664"})]})}}],de=[{id:1,name:"\u9879\u76EE1"},{id:2,name:"\u9879\u76EE2"},{id:3,name:"\u9879\u76EE3"},{id:4,name:"\u9879\u76EE4"},{id:5,name:"\u9879\u76EE5"},{id:6,name:"\u9879\u76EE6"},{id:7,name:"\u9879\u76EE7"},{id:8,name:"\u9879\u76EE8"},{id:9,name:"\u9879\u76EE9"},{id:10,name:"\u9879\u76EE10"},{id:11,name:"\u57FA\u4E8Exxx\u7684\u76EE\u6807\u68C0\u6D4B"},{id:12,name:"\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u957F\u7684\u540D\u5B57"},{id:13,name:"Sample Project for xxx"},{id:13,name:"Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long name"}],ue=function(){return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(u.Z,{gutter:[20,20],children:(0,n.jsx)(s.Z,{span:24,children:(0,n.jsx)(ae.Z,{children:"\u521B\u5EFA\u9879\u76EE"})})}),(0,n.jsxs)(u.Z,{gutter:[20,20],style:{marginTop:20},children:[(0,n.jsx)(s.Z,{span:17,children:(0,n.jsx)(A.Z,{title:"\u793A\u4F8B\u9879\u76EE",style:{height:430},children:(0,n.jsx)(o.Z,{size:20,children:(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(M,{span:4,children:(0,n.jsx)(y.Z,{imgSrc:"./pics/classification.jpg",children:"\u56FE\u50CF\u5206\u7C7B\u6807\u6CE8\u793A\u4F8B"})}),(0,n.jsx)(M,{span:4,children:(0,n.jsx)(y.Z,{imgSrc:"./pics/object_detection.jpg",children:"\u76EE\u6807\u68C0\u6D4B\u6807\u6CE8\u793A\u4F8B"})}),(0,n.jsx)(M,{span:4,children:(0,n.jsx)(y.Z,{imgSrc:"./pics/instance_segmentation.jpg",children:"\u5B9E\u4F8B\u5206\u5272\u6807\u6CE8\u793A\u4F8B"})}),(0,n.jsx)(M,{span:4,children:(0,n.jsx)(y.Z,{imgSrc:"./pics/semantic_segmentation.jpg",children:"\u8BED\u4E49\u5206\u5272\u6807\u6CE8\u793A\u4F8B"})}),(0,n.jsx)(M,{span:4,children:(0,n.jsx)(y.Z,{imgSrc:"./pics/keypoint_detection.jpg",children:"\u5173\u952E\u70B9\u68C0\u6D4B\u6807\u6CE8\u793A\u4F8B"})})]})})})}),(0,n.jsx)(s.Z,{span:7,children:(0,n.jsx)(A.Z,{title:"\u6A21\u578B\u8BAD\u7EC3\u77E5\u8BC6",style:{height:430},children:(0,n.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},size:10,children:[(0,n.jsx)(i.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:"\u5982\u4F55\u4F7F\u7528 paddleclas \u8BAD\u7EC3"}),(0,n.jsx)(i.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:"\u5982\u4F55\u4F7F\u7528 paddledet \u8BAD\u7EC3"}),(0,n.jsx)(i.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:"\u5982\u4F55\u4F7F\u7528 paddleseg \u8BAD\u7EC3"}),(0,n.jsx)(i.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:"\u5982\u4F55\u4F7F\u7528 paddlex \u8BAD\u7EC3"})]})})})]}),(0,n.jsx)(u.Z,{style:{marginTop:20},children:(0,n.jsx)(s.Z,{span:24,children:(0,n.jsx)(A.Z,{title:"\u6211\u7684\u9879\u76EE",children:(0,n.jsx)(q,{columns:re,dataSource:de,showHeader:!1})})})})]})},oe=ue}}]);

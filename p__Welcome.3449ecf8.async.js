(self.webpackChunkPaddleLabel_Frontend=self.webpackChunkPaddleLabel_Frontend||[]).push([[185],{41180:function(a){a.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},9238:function(a){a.exports={button:"button___3gM4r"}},70362:function(a){a.exports={card:"card___CFZWU",thumbnail:"thumbnail___1gIPM",button:"button___g0lkO"}},48627:function(a){a.exports={container:"container___2RXc3"}},17969:function(a){a.exports={col:"col___yKN-b"}},24141:function(a){a.exports={pagination:"pagination___1KJhU",pageSizeSelector:"pageSizeSelector___2XZ11"}},81013:function(a){a.exports={createBtn:"createBtn___UiGiR"}},75534:function(a){a.exports={table:"table___BHQO2"}},31982:function(a,E,e){"use strict";var I=e(89032),M=e(15746),D=e(11849),i=e(13062),C=e(71230),f=e(11700),s=e(67294),L=e(41180),P=e.n(L),l=e(85893),h=function(c){return(0,l.jsxs)("div",{className:P().ppcard,style:c.style,hidden:c.hidden,children:[(0,l.jsx)(C.Z,{className:P().titleRow,style:{display:c.title?void 0:"none"},children:(0,l.jsx)(f.Z,{className:P().title,children:c.title})}),(0,l.jsx)(C.Z,{style:{marginTop:26},children:(0,l.jsx)(M.Z,{span:24,style:(0,D.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},c.innerStyle),children:c.children})})]})};E.Z=h},40318:function(a,E,e){"use strict";var I=e(57663),M=e(71577),D=e(48971),i=e(67294),C=e(70362),f=e.n(C),s=e(85893),L=function(l){return(0,s.jsxs)("div",{className:f().card,style:{height:l.height,width:l.width},onClick:l.onClick?l.onClick:function(){return D.m8.push(l.href?l.href:"")},children:[(0,s.jsx)("img",{className:f().thumbnail,alt:l.wording||f().thumbnail,src:l.imgSrc,style:{height:l.height,width:l.width}}),(0,s.jsx)(M.Z,{className:f().button,style:{width:l.width},children:l.children})]})};E.Z=L},11428:function(a,E,e){"use strict";var I=e(67294),M=e(48627),D=e.n(M),i=e(85893),C=function(s){return(0,i.jsx)("div",{className:"".concat(D().container),style:{backgroundImage:"url(./pics/background.png)"},children:s.children})};E.Z=C},52940:function(a,E,e){"use strict";var I=e(11849),M=e(89032),D=e(15746),i=e(2824),C=e(67294),f=e(17969),s=e.n(f),L=e(85893),P=function(h){var U=(0,C.useState)(!1),c=(0,i.Z)(U,2),x=c[0],O=c[1];return(0,L.jsx)(D.Z,(0,I.Z)((0,I.Z)({},h),{},{className:"".concat(s().col," ").concat(h.className),style:{zIndex:x?11:10,width:"100%"},onMouseOver:function(){O(!0)},onMouseLeave:function(){O(!1)},children:h.children}))};E.Z=P},5011:function(a,E,e){"use strict";e.r(E),e.d(E,{default:function(){return ve}});var I=e(20228),M=e(11382),D=e(57663),i=e(71577),C=e(34792),f=e(48086),s=e(2824),L=e(13062),P=e(71230),l=e(89032),h=e(15746),U=e(49111),c=e(19650),x=e(67294),O=e(48971),N=e(11428),$=e(40318),b=e(31982),T=e(11849),ge=e(66456),Y=e(4421),k=e(75534),p=e.n(k),fe=e(14781),w=e(40308),_e=e(43358),J=e(34041),q=e(24141),F=e.n(q),t=e(85893),A=J.Z.Option;function ee(Z){var n=Z.formatMessage({id:"component.PPTable.prev",defaultMessage:"Previous"}),u=Z.formatMessage({id:"component.PPTable.next",defaultMessage:"Next"});return function(r,d,_){return d==="prev"?(0,t.jsx)(i.Z,{children:n}):d==="next"?(0,t.jsx)(i.Z,{children:u}):_}}var te=function(n){var u=n.totalNum,r=(0,x.useState)(n.pageSize||10),d=(0,s.Z)(r,2),_=d[0],m=d[1],v=(0,x.useState)(n.currentPage||1),o=(0,s.Z)(v,2),j=o[0],R=o[1];return(0,t.jsx)("div",{className:"".concat(F().pagination),children:(0,t.jsxs)(c.Z,{align:"center",children:[(0,O.YB)().formatMessage({id:"component.PPTable.pageTotal"},{total:u,show:(0,t.jsxs)(J.Z,{value:_+"",className:F().pageSizeSelector,onChange:function(g){m(parseInt(g)),n.onChange&&n.onChange(j,parseInt(g))},children:[(0,t.jsx)(A,{value:"10",children:"10"}),(0,t.jsx)(A,{value:"20",children:"20"}),(0,t.jsx)(A,{value:"30",children:"30"}),(0,t.jsx)(A,{value:"40",children:"40"}),(0,t.jsx)(A,{value:"50",children:"50"})]})}),(0,t.jsx)(w.Z,{className:F().pagination,current:j,pageSize:_,total:u,itemRender:ee((0,O.YB)()),onChange:function(g,S){console.log("Pagination: ".concat(S,"/").concat(g)),R(g),n.onChange&&n.onChange(g,S)}})]})})},ne=te,ae=function(n){var u,r=((u=n.dataSource)===null||u===void 0?void 0:u.length)||0,d=(0,x.useState)(10),_=(0,s.Z)(d,2),m=_[0],v=_[1],o=(0,x.useState)(1),j=(0,s.Z)(o,2),R=j[0],B=j[1],g=n.dataSource,S=[];if(n.dataSource){var G,H,W=m*(R-1),K=m;W+m>r&&(K=r-W+1),g=(G=n.dataSource)===null||G===void 0?void 0:G.slice(W,W+K/2),S=(H=n.dataSource)===null||H===void 0?void 0:H.slice(W+K/2,W+K)}return(0,t.jsxs)("div",{className:"".concat(p().table),children:[(0,t.jsxs)(P.Z,{children:[(0,t.jsx)(h.Z,{span:12,style:{borderRight:"0.063rem solid rgba(151,151,151,0.27)"},children:(0,t.jsx)(Y.Z,(0,T.Z)((0,T.Z)({},n),{},{dataSource:g,pagination:!1,rowSelection:void 0}))}),(0,t.jsx)(h.Z,{span:12,children:(0,t.jsx)(Y.Z,(0,T.Z)((0,T.Z)({},n),{},{dataSource:S,pagination:!1,rowSelection:void 0}))})]}),(0,t.jsx)(P.Z,{style:{marginTop:"1.75rem"},children:(0,t.jsx)(h.Z,{span:24,children:(0,t.jsx)(c.Z,{align:"center",children:(0,t.jsx)(ne,{totalNum:r,pageSize:m,currentPage:R,onChange:function(V,X){v(X),(V-1)*X>r?B(1):B(V),n.onChange&&n.onChange(V,X)}})})})})]})},le=ae,oe=e(9238),se=e.n(oe),re=function(n){return(0,t.jsx)(i.Z,(0,T.Z)((0,T.Z)({},n),{},{style:{color:n.color,width:n.width,height:n.height,borderColor:n.color},className:"".concat(se().button),children:n.children}))},z=re,de=e(81013),ie=e.n(de),ce=function(n){return(0,t.jsx)(i.Z,{onClick:n.onClick,size:"large",id:"".concat(ie().createBtn),children:n.children})},ue=ce,Pe=e(52940),y=e(15156),Q=e(36505),he=function(n){var u,r=(0,Q.I)("pages.welcome");console.log("render projects");var d=(0,y.Gd)(x.useState);(0,x.useEffect)(function(){(0,y.bo)().then(function(m){m!=!1&&d.getAll()})},[]);var _=[{title:"ID",dataIndex:"projectId",key:"projectId",width:"4.5rem",align:"center",render:function(v){return(0,t.jsx)(t.Fragment,{children:v})}},{title:"Name",dataIndex:"name",key:"projectId"},{title:"Project Category",key:"projectId",render:function(v){console.log("pj",v);var o=(0,y.os)(v.taskCategory.name);return console.log("categoryName",o),y.ux[o].name}},{title:"Actions",key:"projectId",width:"15rem",align:"center",render:function(v,o){return(0,t.jsxs)(c.Z,{size:"middle",children:[(0,t.jsx)(z,{width:"4.375rem",height:"1.875rem",color:"rgba(241,162,0,1)",onClick:function(){O.m8.push("/project_overview?projectId=".concat(o.projectId))},children:r("overview")}),(0,t.jsx)(z,{width:"4.375rem",height:"1.875rem",color:"rgba(0,100,248,1)",onClick:function(){O.m8.push("/".concat(o.taskCategory.name,"?projectId=").concat(o.projectId))},children:r("label")}),(0,t.jsx)(z,{width:"4.375rem",height:"1.875rem",color:"rgba(207,63,0,1)",onClick:function(){n.setDeleting(!0),d.remove(o).then(function(){return n.setDeleting(!1)})},children:r("remove")})]})}}];return(u=d.all)!==null&&u!==void 0&&u.length?(console.log("all pjs",(0,y.gu)(d.all)),(0,t.jsx)(P.Z,{style:{marginTop:20},children:(0,t.jsx)(h.Z,{span:24,children:(0,t.jsx)(b.Z,{title:r("myProjects"),children:(0,t.jsx)(le,{columns:_,dataSource:(0,y.gu)(d.all),showHeader:!1})})})})):""},me=function(){var n=(0,Q.I)("pages.welcome"),u=(0,x.useState)(!1),r=(0,s.Z)(u,2),d=r[0],_=r[1];function m(){for(var v=[],o=0,j=Object.entries(y.ux);o<j.length;o++){var R=j[o],B=(0,s.Z)(R,2),g=B[0],S=B[1];v.push((0,t.jsx)(Pe.Z,{span:4,children:(0,t.jsx)($.Z,{imgSrc:S.avatar,href:"/project_detail?taskCategory="+g,onClick:g!="keypointDetection"?void 0:function(){f.default.info(n("underDevelopment","global"))},children:n(g,"global")})}))}return v}return(0,t.jsxs)(N.Z,{children:[(0,t.jsx)(P.Z,{gutter:[20,20],children:(0,t.jsx)(h.Z,{span:24,children:(0,t.jsx)(ue,{onClick:function(){O.m8.push("/sample_project")},children:n("sampleProject")})})}),(0,t.jsxs)(P.Z,{gutter:[20,20],style:{marginTop:20},children:[(0,t.jsx)(h.Z,{span:17,children:(0,t.jsx)(b.Z,{title:n("createProject"),style:{height:430},children:(0,t.jsx)(P.Z,{children:m()})})}),(0,t.jsx)(h.Z,{span:7,children:(0,t.jsx)(b.Z,{title:n("trainingKnowledge"),style:{height:430},children:(0,t.jsxs)(c.Z,{direction:"vertical",style:{width:"100%"},size:10,children:[(0,t.jsx)(i.Z,{type:"primary",style:{height:"3.125rem",lineHeight:"3.125rem"},href:"https://github.com/PaddleCV-SIG/PaddleLabel/blob/docs/doc/CN/training/PdLabel_PdClas.md",block:!0,children:n("paddleClas")}),(0,t.jsx)(i.Z,{type:"primary",style:{height:"3.125rem",lineHeight:"3.125rem"},href:"https://github.com/PaddleCV-SIG/PaddleLabel/blob/docs/doc/CN/training/PdLabel_PdDet.md",block:!0,children:n("paddleDet")}),(0,t.jsx)(i.Z,{type:"primary",style:{height:"3.125rem",lineHeight:"3.125rem"},href:"https://github.com/PaddleCV-SIG/PaddleLabel/blob/docs/doc/CN/training/PdLabel_PdSeg.md",block:!0,children:n("paddleSeg")}),(0,t.jsx)(i.Z,{type:"primary",style:{height:"3.125rem",lineHeight:"3.125rem"},href:"https://github.com/PaddleCV-SIG/PaddleLabel/blob/docs/doc/CN/training/PdLabel_PdX.md",block:!0,children:n("paddleX")})]})})})]}),(0,t.jsx)(M.Z,{tip:"Deleting",spinning:d,children:he({setDeleting:_})})]})},ve=me}}]);

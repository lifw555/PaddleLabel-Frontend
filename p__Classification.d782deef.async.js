(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[672],{52822:function(s){s.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(s){s.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",listItemActive:"listItemActive___3FRb7"}},56131:function(s){s.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(s){s.exports={container:"container___G0FNe"}},83930:function(s){s.exports={stage:"stage___3H5QL"}},80961:function(s){s.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(s){s.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},73199:function(s){s.exports={classes:"classes___3trCU",mainStage:"mainStage___3ajeT",draw:"draw___3nlFC",pblock:"pblock___2fZaD",progress:"progress___K3vmc",rightSideBar:"rightSideBar___aFTer"}},63097:function(s,v,e){"use strict";var N=e(20136),P=e(55241),M=e(2824),d=e(67294),r=e(52822),a=e.n(r),E=e(63144),c=e(85893),l=function(u){var $=(0,d.useState)(u.color||"#FFF"),n=(0,M.Z)($,2),D=n[0],t=n[1];return(0,d.useEffect)(function(){t(u.color||"#FFF")},[u]),u.changeable?(0,c.jsx)(P.Z,{getPopupContainer:function(F){return F.parentElement||document.body},overlayClassName:a().popover,openClassName:a().popoverOpenClassName,placement:"bottom",content:(0,c.jsx)(E.xS,{disableAlpha:!0,color:D,onChange:function(F){t(F.hex)},onChangeComplete:u.onChange}),trigger:"click",children:(0,c.jsx)("div",{className:a().roundBall,style:{backgroundColor:D}})}):(0,c.jsx)("div",{className:a().roundBall,style:{backgroundColor:D}})};v.Z=l},5041:function(s,v,e){"use strict";e.d(v,{Z:function(){return G}});var N=e(54421),P=e(38272),M=e(57663),d=e(71577),r=e(2824),a=e(67294),E=e(56131),c=e.n(E),l=e(49111),p=e(19650),u=e(11849),$=e(5882),n=e.n($),D=e(63097),t=e(85893),f=function(o){var i=(0,u.Z)({},o.label),S=(0,a.useState)(i.invisible),U=(0,r.Z)(S,2),j=U[0],W=U[1],I=(0,t.jsx)(P.ZP.Item,{className:"".concat(n().listItem," ").concat(o.active?n().listItemActive:""),unselectable:"on",onClick:function(){o.onClick(i)},children:(0,t.jsxs)(p.Z,{align:"center",size:5,children:[(0,t.jsx)("a",{className:n().eye,style:{backgroundImage:j?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){W(!j),o.onLabelModify(i)}})," ",i.name,(0,t.jsx)(D.Z,{color:i.color,changeable:!0,onChange:function(x){i.color=x.hex,o.onLabelModify(i)}}),(0,t.jsx)("a",{className:n().eye,style:{backgroundImage:"url(./pics/delete.png)"},onClick:function(){o.onLabelDelete(i)}})]})});return I},F=f,X=e(71194),H=e(50146),Z=e(47673),_=e(24044),B=e(9715),O=e(93766),A=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],z=function(o){var i,S,U=(0,a.useState)(((i=o.defaultLabel)===null||i===void 0?void 0:i.color)||A[o.order||0]),j=(0,r.Z)(U,2),W=j[0],I=j[1];(0,a.useEffect)(function(){var T;I(((T=o.defaultLabel)===null||T===void 0?void 0:T.color)||A[o.order||0])},[o]);var L=O.Z.useForm(),x=(0,r.Z)(L,1),J=x[0];return(0,t.jsx)(H.Z,{title:"Add Label",visible:o.visible,onCancel:o.onCancel,footer:null,children:(0,t.jsxs)(O.Z,{form:J,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(S=o.defaultLabel)===null||S===void 0?void 0:S.name},onFinish:function(R){var k={name:R.labelname,color:W};o.onLabelAdd(k),J.resetFields()},autoComplete:"off",children:[(0,t.jsx)(O.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,t.jsx)(_.Z,{})}),(0,t.jsx)(O.Z.Item,{label:"Select Color",name:"color",children:(0,t.jsx)(D.Z,{color:W,onChange:function(R){I(R.hex)}})}),(0,t.jsx)(O.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(d.Z,{onClick:function(){var R;(R=o.onCancel)===null||R===void 0||R.call(0),J.resetFields()},children:"\u53D6\u6D88"}),(0,t.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},K=z,C=function(o){var i,S=(0,a.useState)(!1),U=(0,r.Z)(S,2),j=U[0],W=U[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.ZP,{className:c().labelList,size:"large",header:(0,t.jsx)("div",{className:c().listHeader,children:"Label List"}),footer:(0,t.jsx)("div",{children:(0,t.jsx)(d.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){W(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:o.labels,renderItem:function(L){var x;return(0,t.jsx)(F,{onClick:o.onLabelSelect,label:L,active:L.name==((x=o.selectedLabel)===null||x===void 0?void 0:x.name),onLabelDelete:o.onLabelDelete,onLabelModify:o.onLabelModify})}}),(0,t.jsx)(K,{order:(i=o.labels)===null||i===void 0?void 0:i.length,visible:j,onLabelAdd:function(L){o.onLabelAdd(L),W(!1)},onCancel:function(){W(!1)}})]})},G=C},8088:function(s,v,e){"use strict";var N=e(67294),P=e(78677),M=e.n(P),d=e(85893),r=function(E){return(0,d.jsx)("div",{className:"".concat(M().container," ").concat(E.className),children:E.children})};v.Z=r},57436:function(s,v,e){"use strict";var N=e(91220),P=e(2824),M=e(67294),d=e(65031),r=e(84420),a=e.n(r),E=e(83930),c=e.n(E),l=e(85893),p="./pics/basketball.jpg",u=function(n){var D=a()(n.imgSrc),t=(0,P.Z)(D,1),f=t[0],F=(f==null?void 0:f.width)||0,X=(f==null?void 0:f.height)||0,H=n.width||F,Z=n.height||X;Z=Z<708?708:Z;var _=[];if(n.annotations){var B=(0,N.Z)(n.annotations),O;try{for(B.s();!(O=B.n()).done;){var A=O.value;if(!!A){var z=A.tool=="polygon"?n.createPolygonFunc:n.createBrushFunc;z&&_.push(z(A,n.onAnnotationModify,n.onAnnotationModifyComplete,n.scale,n.currentTool,n.setCurrentAnnotation,n.currentAnnotation))}}}catch(K){B.e(K)}finally{B.f()}}return(0,l.jsxs)(d.Hf,{width:H,height:Z,className:c().stage,children:[(0,l.jsx)(d.mh,{scaleX:n.scale,scaleY:n.scale,draggable:!1,children:(0,l.jsx)(d.Ee,{image:f,draggable:!1})}),(0,l.jsxs)(d.mh,{scaleX:n.scale,scaleY:n.scale,onMouseDown:function(C){n.onMouseDown&&n.onMouseDown(C,n.scale)},onMouseMove:function(C){n.onMouseMove&&n.onMouseMove(C,n.scale)},onMouseUp:function(C){n.onMouseUp&&n.onMouseUp(C,n.scale)},onContextMenu:function(C){C.evt.preventDefault()},draggable:!1,children:[(0,l.jsx)(d.Ee,{draggable:!1,image:f}),_]})]})};v.Z=u},44434:function(s,v,e){"use strict";var N=e(67294),P=e(80961),M=e.n(P),d=e(85893),r=function(E){var c=M().leftToolbar;return E.disLoc=="right"&&(c=M().rightToolbar),(0,d.jsx)("div",{className:c,children:E.children})};v.Z=r},61541:function(s,v,e){"use strict";var N=e(49111),P=e(19650),M=e(67294),d=e(82499),r=e.n(d),a=e(85893),E=function(l){return(0,a.jsx)("div",{unselectable:"on",className:"".concat(r().toolBarButtonContainerWrapper," ").concat(l.active&&r().toolBarButtonContainerWrapperActive),onClick:l.onClick,children:(0,a.jsx)(P.Z,{align:"center",className:r().toolBarButtonContainer,size:0,children:(0,a.jsxs)(P.Z,{align:"center",direction:"vertical",className:r().toolBarButton,size:0,children:[(0,a.jsx)("img",{src:l.imgSrc}),(0,a.jsx)("div",{className:r().buttonText,children:l.children})]})})})};v.Z=E},29214:function(s,v,e){"use strict";e.r(v),e.d(v,{projectApi:function(){return A}});var N=e(34669),P=e(54458),M=e(3182),d=e(34792),r=e(48086),a=e(2824),E=e(94043),c=e.n(E),l=e(67294),p=e(73199),u=e.n(p),$=e(8088),n=e(61541),D=e(44434),t=e(5041),f=e(57436),F=e(3275),X=e(91156),H=e(78583),Z=e(37071),_=e(85893),B=localStorage.getItem("basePath"),O=new H.VK(B?{basePath:B}:void 0),A=new H.U(O),z=function(){var C,G,Q=(0,l.useState)(),o=(0,a.Z)(Q,2),i=o[0],S=o[1],U=(0,l.useState)(),j=(0,a.Z)(U,2),W=j[0],I=j[1],L=(0,l.useState)(),x=(0,a.Z)(L,2),J=x[0],T=x[1],R=(0,l.useState)({color:"",name:""}),k=(0,a.Z)(R,2),_e=k[0],ie=k[1],de=(0,l.useState)(1),te=(0,a.Z)(de,2),w=te[0],ce=te[1],ue=(0,l.useState)(0),ae=(0,a.Z)(ue,2),me=ae[0],ve=ae[1],Pe=(0,l.useState)(""),oe=(0,a.Z)(Pe,2),Ee=oe[0],fe=oe[1],Ce=(0,l.useState)(1),le=(0,a.Z)(Ce,2),se=le[0],Le=le[1],re=function(b){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.1,3],g=b;g==null&&(g=1),g<y[0]&&(g=y[0],r.default.error("Smallest scale is "+y[0])),g>y[1]&&(g=y[1],r.default.error("Largest scale is "+y[1])),ce(g)};return(0,l.useEffect)(function(){function h(){return b.apply(this,arguments)}function b(){return b=(0,M.Z)(c().mark(function y(){var g,Y,q,V,ee;return c().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,m.next=3,(0,F.refreshProject)();case 3:return g=m.sent,console.log(g),S(g),m.next=8,A.getTasks(g.projectId);case 8:return Y=m.sent,I(Y),q=Y.filter(function(ge){var ne;return((ne=ge.annotations)===null||ne===void 0?void 0:ne.length)!=0}).length,V=Math.ceil(q/Y.length*100),V=V<=0?0:V,console.log("res",q,Y.length,V),ve(V),m.next=17,A.getLabels(g.projectId);case 17:ee=m.sent,console.log("got labels ",ee),T(Z.Z.toDict(ee)),console.log("img src: ".concat(B,"/data/").concat(se,"/image")),fe("".concat(B,"/datas/").concat(se,"/image")),m.next=28;break;case 24:m.prev=24,m.t0=m.catch(0),console.log(m.t0),Z.Z.parseError(m.t0,r.default);case 28:case"end":return m.stop()}},y,null,[[0,24]])})),b.apply(this,arguments)}h()},[]),(0,_.jsxs)($.Z,{className:u().classes,children:[(0,_.jsxs)(D.Z,{children:[(0,_.jsx)(n.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){re(w+.1)},children:"Zoom in"}),(0,_.jsx)(n.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){re(w-.1)},children:"Zoom out"}),(0,_.jsx)(n.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,_.jsx)(n.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"})]}),(0,_.jsxs)("div",{id:"dr",className:u().mainStage,children:[(0,_.jsx)("div",{className:u().draw,children:(0,_.jsx)(f.Z,{width:(C=document.getElementById("dr"))===null||C===void 0?void 0:C.clientWidth,height:(G=document.getElementById("dr"))===null||G===void 0?void 0:G.clientHeight,scale:w,currentTool:void 0,setCurrentAnnotation:function(){},onAnnotationModify:function(){},onAnnotationModifyComplete:function(){},imgSrc:Ee})}),(0,_.jsx)("div",{className:u().pblock,children:(0,_.jsx)("div",{className:u().progress,children:(0,_.jsx)(P.Z,{percent:me,status:"active"})})})]}),(0,_.jsxs)(D.Z,{disLoc:"right",children:[(0,_.jsx)(n.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,_.jsx)(n.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Split Dataset"})]}),(0,_.jsx)("div",{className:u().rightSideBar,children:(0,_.jsx)(t.Z,{labels:J,selectedLabel:_e,onLabelSelect:function(b){ie(b)},onLabelAdd:function(b){i!=null&&i.projectId&&(0,X.jc)(i.projectId,b,T)},onLabelDelete:function(b){(0,X.SP)(b,T)},onLabelModify:function(){}})})]})};v.default=z}}]);

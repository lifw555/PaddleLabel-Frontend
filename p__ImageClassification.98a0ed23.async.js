(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[845],{52822:function(a){a.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(a){a.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",listItemActive:"listItemActive___3FRb7"}},56131:function(a){a.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(a){a.exports={container:"container___G0FNe"}},83930:function(a){a.exports={stage:"stage___3H5QL"}},80961:function(a){a.exports={toolbar:"toolbar___3vxli"}},82499:function(a){a.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},8881:function(a){a.exports={classes:"classes___GWIJ0",mainStage:"mainStage___3H7Up",rightSideBar:"rightSideBar___2sEdt"}},63097:function(a,d,e){"use strict";var D=e(20136),r=e(55241),u=e(2824),i=e(67294),l=e(52822),t=e.n(l),c=e(63144),_=e(85893),P=function(x){var v=(0,i.useState)(x.color||"#FFF"),B=(0,u.Z)(v,2),E=B[0],n=B[1];return(0,i.useEffect)(function(){n(x.color||"#FFF")},[x]),x.changeable?(0,_.jsx)(r.Z,{getPopupContainer:function(b){return b.parentElement||document.body},overlayClassName:t().popover,openClassName:t().popoverOpenClassName,placement:"bottom",content:(0,_.jsx)(c.xS,{disableAlpha:!0,color:E,onChange:function(b){n(b.hex)},onChangeComplete:x.onChange}),trigger:"click",children:(0,_.jsx)("div",{className:t().roundBall,style:{backgroundColor:E}})}):(0,_.jsx)("div",{className:t().roundBall,style:{backgroundColor:E}})};d.Z=P},5041:function(a,d,e){"use strict";e.d(d,{Z:function(){return $}});var D=e(54421),r=e(38272),u=e(57663),i=e(71577),l=e(2824),t=e(67294),c=e(56131),_=e.n(c),P=e(49111),s=e(19650),x=e(11849),v=e(5882),B=e.n(v),E=e(63097),n=e(85893),A=function(o){var m=(0,x.Z)({},o.label),j=(0,t.useState)(m.invisible),L=(0,l.Z)(j,2),I=L[0],W=L[1],S=(0,n.jsx)(r.ZP.Item,{className:"".concat(B().listItem," ").concat(o.active?B().listItemActive:""),unselectable:"on",onClick:function(){o.onClick(m)},children:(0,n.jsxs)(s.Z,{align:"center",size:5,children:[(0,n.jsx)("a",{className:B().eye,style:{backgroundImage:I?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){W(!I),o.onLabelModify(m)}})," ",m.name,(0,n.jsx)(E.Z,{color:m.color,changeable:!0,onChange:function(U){m.color=U.hex,o.onLabelModify(m)}})]})});return S},b=A,h=e(71194),C=e(50146),T=e(47673),K=e(24044),y=e(9715),F=e(93766),p=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],N=function(o){var m,j,L=(0,t.useState)(((m=o.defaultLabel)===null||m===void 0?void 0:m.color)||p[o.order||0]),I=(0,l.Z)(L,2),W=I[0],S=I[1];(0,t.useEffect)(function(){var M;S(((M=o.defaultLabel)===null||M===void 0?void 0:M.color)||p[o.order||0])},[o]);var R=F.Z.useForm(),U=(0,l.Z)(R,1),Z=U[0];return(0,n.jsx)(C.Z,{title:"Add Label",visible:o.visible,onCancel:o.onCancel,footer:null,children:(0,n.jsxs)(F.Z,{form:Z,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(j=o.defaultLabel)===null||j===void 0?void 0:j.name},onFinish:function(f){var J={name:f.labelname,color:W};o.onLabelAdd(J),Z.resetFields()},autoComplete:"off",children:[(0,n.jsx)(F.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,n.jsx)(K.Z,{})}),(0,n.jsx)(F.Z.Item,{label:"Select Color",name:"color",children:(0,n.jsx)(E.Z,{color:W,onChange:function(f){S(f.hex)}})}),(0,n.jsx)(F.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{onClick:function(){var f;(f=o.onCancel)===null||f===void 0||f.call(0),Z.resetFields()},children:"\u53D6\u6D88"}),(0,n.jsx)(i.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},g=N,O=[{color:"#FF0000",name:"Label 1"},{color:"#008000",name:"Label 2"}],H=function(o){var m=(0,t.useState)(O),j=(0,l.Z)(m,2),L=j[0],I=j[1],W=(0,t.useState)(!1),S=(0,l.Z)(W,2),R=S[0],U=S[1];return(0,t.useEffect)(function(){o.selectedLabel||o.onLabelSelect(L[0])},[L,o]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.ZP,{className:_().labelList,size:"large",header:(0,n.jsx)("div",{className:_().listHeader,children:"Label List"}),footer:(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){U(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:L,renderItem:function(M){var f;return(0,n.jsx)(b,{onClick:o.onLabelSelect,label:M,active:M.name==((f=o.selectedLabel)===null||f===void 0?void 0:f.name),onLabelDelete:o.onLabelDelete,onLabelModify:o.onLabelModify})}}),(0,n.jsx)(g,{order:L.length,visible:R,onLabelAdd:function(M){L.push(M),I(L),U(!1)},onCancel:function(){U(!1)}})]})},$=H},8088:function(a,d,e){"use strict";var D=e(67294),r=e(78677),u=e.n(r),i=e(85893),l=function(c){return(0,i.jsx)("div",{className:"".concat(u().container," ").concat(c.className),children:c.children})};d.Z=l},57436:function(a,d,e){"use strict";var D=e(2824),r=e(67294),u=e(65031),i=e(84420),l=e.n(i),t=e(83930),c=e.n(t),_=e(85893),P="./pics/basketball.jpg",s=function(v){var B=l()(P),E=(0,D.Z)(B,1),n=E[0],A=(n==null?void 0:n.width)||0,b=(n==null?void 0:n.height)||0;return(0,_.jsxs)(u.Hf,{width:A,height:b,className:c().stage,children:[(0,_.jsx)(u.mh,{children:(0,_.jsx)(u.Ee,{image:n})}),(0,_.jsxs)(u.mh,{onMouseDown:function(C){v.onMouseDown&&v.onMouseDown(C)},onMouseMove:function(C){v.onMouseMove&&v.onMouseMove(C)},onMouseUp:function(C){v.onMouseUp&&v.onMouseUp(C)},onContextMenu:function(C){C.evt.preventDefault()},children:[(0,_.jsx)(u.Ee,{image:n}),v.annotations.map(function(h,C){var T;return(T=h.lines)===null||T===void 0?void 0:T.map(function(K,y){return K.element})})]})]})};d.Z=s},44434:function(a,d,e){"use strict";var D=e(67294),r=e(80961),u=e.n(r),i=e(85893),l=function(c){return(0,i.jsx)("div",{className:u().toolbar,children:c.children})};d.Z=l},61541:function(a,d,e){"use strict";var D=e(49111),r=e(19650),u=e(67294),i=e(82499),l=e.n(i),t=e(85893),c=function(P){return(0,t.jsx)("div",{unselectable:"on",className:"".concat(l().toolBarButtonContainerWrapper," ").concat(P.active&&l().toolBarButtonContainerWrapperActive),onClick:P.onClick,children:(0,t.jsx)(r.Z,{align:"center",className:l().toolBarButtonContainer,size:0,children:(0,t.jsxs)(r.Z,{align:"center",direction:"vertical",className:l().toolBarButton,size:0,children:[(0,t.jsx)("img",{src:P.imgSrc}),(0,t.jsx)("div",{className:l().buttonText,children:P.children})]})})})};d.Z=c},27682:function(a,d,e){"use strict";e.r(d);var D=e(2824),r=e(67294),u=e(8881),i=e.n(u),l=e(8088),t=e(61541),c=e(44434),_=e(5041),P=e(57436),s=e(85893),x=function(){var B=(0,r.useState)({color:"",name:""}),E=(0,D.Z)(B,2),n=E[0],A=E[1],b=(0,r.useState)(),h=(0,D.Z)(b,2),C=h[0],T=h[1],K=(0,r.useState)([]),y=(0,D.Z)(K,2),F=y[0],p=y[1],N=function(O){T(O),O!=null&&O.label&&A(O.label)};return(0,s.jsxs)(l.Z,{className:i().classes,children:[(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_in.png",children:"Zoom in"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_out.png",children:"Zoom out"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,s.jsx)("div",{className:i().mainStage,children:(0,s.jsx)(P.Z,{annotations:F,onMouseDown:function(){},onMouseMove:function(){},onMouseUp:function(){}})}),(0,s.jsx)("div",{className:i().rightSideBar,children:(0,s.jsx)(_.Z,{selectedLabel:n,onLabelSelect:function(O){A(O),N(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}})})]})};d.default=x}}]);

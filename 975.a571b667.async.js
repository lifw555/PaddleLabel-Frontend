(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[975],{85024:function(o){o.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",roundBall:"roundBall___23A7l",popover:"popover___1BNET",listItemActive:"listItemActive___2QnA3"}},56159:function(o){o.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},57560:function(o){o.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___147XP",toolBarButtonContainer:"toolBarButtonContainer___ZEvhK",toolBarButton:"toolBarButton___1s2Rh",buttonText:"buttonText___3NTCv",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___2Utx8",popover:"popover___3PRoi"}},52822:function(o){o.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(o){o.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",listItemActive:"listItemActive___3FRb7"}},56131:function(o){o.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(o){o.exports={container:"container___G0FNe"}},80961:function(o){o.exports={toolbar:"toolbar___3vxli"}},82499:function(o){o.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},14836:function(o,m,n){"use strict";n.d(m,{Z:function(){return P}});var K=n(54421),r=n(38272),I=n(57663),d=n(71577),l=n(2824),t=n(67294),u=n(56159),_=n.n(u),M=n(49111),y=n(19650),x=n(11849),C=n(85024),v=n.n(C),B=n(63097),e=n(85893),b=function(s){var L=(0,x.Z)({},s.annotation),E=(0,t.useState)(L.invisible),O=(0,l.Z)(E,2),c=O[0],i=O[1];(0,t.useEffect)(function(){i(s.annotation.invisible)},[s.annotation.invisible]);var Z=(0,e.jsx)(r.ZP.Item,{className:"".concat(v().listItem," ").concat(s.active?v().listItemActive:""),unselectable:"on",onClick:function(){s.onClick(L)},children:(0,e.jsxs)(y.Z,{align:"center",size:5,children:[(0,e.jsx)("a",{className:v().eye,style:{backgroundImage:c?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){i(!c),s.onAnnotationModify(L)}})," ",L.label.name,(0,e.jsx)(B.Z,{color:L.label.name})]})});return Z},F=b,j=function(s){var L=(0,t.useState)([]),E=(0,l.Z)(L,1),O=E[0];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.ZP,{className:_().labelList,size:"large",header:(0,e.jsx)("div",{className:_().listHeader,children:"Annotation List"}),bordered:!0,dataSource:O,renderItem:function(i){var Z;return(0,e.jsx)(F,{onClick:s.onAnnotationSelect,annotation:i,active:i.annotationId==((Z=s.selectedAnnotation)===null||Z===void 0?void 0:Z.annotationId),onAnnotationDelete:s.onAnnotationDelete,onAnnotationModify:s.onAnnotationModify})},footer:(0,e.jsx)("div",{children:(0,e.jsx)(d.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){s.onAnnotationSelect(void 0)},block:!0,children:"Add Annotation"})})})})},P=j},58967:function(o,m,n){"use strict";var K=n(20136),r=n(19181),I=n(77883),d=n(70507),l=n(57663),t=n(71577),u=n(2824),_=n(67294),M=n(61541),y=n(57560),x=n.n(y),C=n(85893),v=1,B=50,e=10;function b(j){return j?j<=v?v:j>=B?B:j:e}var F=function(P){var z=(0,_.useState)(b(P.size)),s=(0,u.Z)(z,2),L=s[0],E=s[1];return(0,_.useEffect)(function(){E(b(P.size))},[P.size]),(0,C.jsxs)(r.Z,{overlayClassName:x().popover,placement:"right",content:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(t.Z,{type:"text",onClick:function(){var c,i=b(L-1);E(i),(c=P.onChange)===null||c===void 0||c.call(0,i)},children:"-"}),(0,C.jsx)(d.Z,{min:v,max:B,value:L,onChange:function(c){var i;(i=P.onChange)===null||i===void 0||i.call(0,c)},controls:!1,style:{textAlign:"center"}}),(0,C.jsx)(t.Z,{type:"text",onClick:function(){var c,i=b(L+1);E(i),(c=P.onChange)===null||c===void 0||c.call(0,i)},children:"+"})]}),trigger:P.active?"hover":"click",children:[" ",(0,C.jsx)(M.Z,{active:P.active,imgSrc:"./pics/buttons/brush.png",onClick:P.onClick,children:"Brush"})]})};m.Z=F},63097:function(o,m,n){"use strict";var K=n(20136),r=n(19181),I=n(2824),d=n(67294),l=n(52822),t=n.n(l),u=n(63144),_=n(85893),M=function(x){var C=(0,d.useState)(x.color||"#FFF"),v=(0,I.Z)(C,2),B=v[0],e=v[1];return(0,d.useEffect)(function(){e(x.color||"#FFF")},[x]),x.changeable?(0,_.jsx)(r.Z,{getPopupContainer:function(F){return F.parentElement||document.body},overlayClassName:t().popover,openClassName:t().popoverOpenClassName,placement:"bottom",content:(0,_.jsx)(u.xS,{disableAlpha:!0,color:B,onChange:function(F){e(F.hex)},onChangeComplete:x.onChange}),trigger:"click",children:(0,_.jsx)("div",{className:t().roundBall,style:{backgroundColor:B}})}):(0,_.jsx)("div",{className:t().roundBall,style:{backgroundColor:B}})};m.Z=M},5041:function(o,m,n){"use strict";n.d(m,{Z:function(){return H}});var K=n(54421),r=n(38272),I=n(57663),d=n(71577),l=n(2824),t=n(67294),u=n(56131),_=n.n(u),M=n(49111),y=n(19650),x=n(11849),C=n(5882),v=n.n(C),B=n(63097),e=n(85893),b=function(a){var f=(0,x.Z)({},a.label),g=(0,t.useState)(f.invisible),A=(0,l.Z)(g,2),S=A[0],U=A[1],T=(0,e.jsx)(r.ZP.Item,{className:"".concat(v().listItem," ").concat(a.active?v().listItemActive:""),unselectable:"on",onClick:function(){a.onClick(f)},children:(0,e.jsxs)(y.Z,{align:"center",size:5,children:[(0,e.jsx)("a",{className:v().eye,style:{backgroundImage:S?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){U(!S),a.onLabelModify(f)}})," ",f.name,(0,e.jsx)(B.Z,{color:f.color,changeable:!0,onChange:function(W){f.color=W.hex,a.onLabelModify(f)}})]})});return T},F=b,j=n(71194),P=n(48889),z=n(47673),s=n(24044),L=n(9715),E=n(93766),O=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],c=function(a){var f,g,A=(0,t.useState)(((f=a.defaultLabel)===null||f===void 0?void 0:f.color)||O[a.order||0]),S=(0,l.Z)(A,2),U=S[0],T=S[1];(0,t.useEffect)(function(){var h;T(((h=a.defaultLabel)===null||h===void 0?void 0:h.color)||O[a.order||0])},[a]);var N=E.Z.useForm(),W=(0,l.Z)(N,1),R=W[0];return(0,e.jsx)(P.Z,{title:"Add Label",visible:a.visible,onCancel:a.onCancel,footer:null,children:(0,e.jsxs)(E.Z,{form:R,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(g=a.defaultLabel)===null||g===void 0?void 0:g.name},onFinish:function(D){var V={name:D.labelname,color:U};a.onLabelAdd(V),R.resetFields()},autoComplete:"off",children:[(0,e.jsx)(E.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,e.jsx)(s.Z,{})}),(0,e.jsx)(E.Z.Item,{label:"Select Color",name:"color",children:(0,e.jsx)(B.Z,{color:U,onChange:function(D){T(D.hex)}})}),(0,e.jsx)(E.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsxs)(y.Z,{children:[(0,e.jsx)(d.Z,{onClick:function(){var D;(D=a.onCancel)===null||D===void 0||D.call(0),R.resetFields()},children:"\u53D6\u6D88"}),(0,e.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},i=c,Z=[{color:"#FF0000",name:"Label 1"},{color:"#008000",name:"Label 2"}],p=function(a){var f=(0,t.useState)(Z),g=(0,l.Z)(f,2),A=g[0],S=g[1],U=(0,t.useState)(!1),T=(0,l.Z)(U,2),N=T[0],W=T[1];return(0,t.useEffect)(function(){a.selectedLabel||a.onLabelSelect(A[0])},[A,a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.ZP,{className:_().labelList,size:"large",header:(0,e.jsx)("div",{className:_().listHeader,children:"Label List"}),footer:(0,e.jsx)("div",{children:(0,e.jsx)(d.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){W(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:A,renderItem:function(h){var D;return(0,e.jsx)(F,{onClick:a.onLabelSelect,label:h,active:h.name==((D=a.selectedLabel)===null||D===void 0?void 0:D.name),onLabelDelete:a.onLabelDelete,onLabelModify:a.onLabelModify})}}),(0,e.jsx)(i,{order:A.length,visible:N,onLabelAdd:function(h){A.push(h),S(A),W(!1)},onCancel:function(){W(!1)}})]})},H=p},8088:function(o,m,n){"use strict";var K=n(67294),r=n(78677),I=n.n(r),d=n(85893),l=function(u){return(0,d.jsx)("div",{className:"".concat(I().container," ").concat(u.className),children:u.children})};m.Z=l},44434:function(o,m,n){"use strict";var K=n(67294),r=n(80961),I=n.n(r),d=n(85893),l=function(u){return(0,d.jsx)("div",{className:I().toolbar,children:u.children})};m.Z=l},61541:function(o,m,n){"use strict";var K=n(49111),r=n(19650),I=n(67294),d=n(82499),l=n.n(d),t=n(85893),u=function(M){return(0,t.jsx)("div",{unselectable:"on",className:"".concat(l().toolBarButtonContainerWrapper," ").concat(M.active&&l().toolBarButtonContainerWrapperActive),onClick:M.onClick,children:(0,t.jsx)(r.Z,{align:"center",className:l().toolBarButtonContainer,size:0,children:(0,t.jsxs)(r.Z,{align:"center",direction:"vertical",className:l().toolBarButton,size:0,children:[(0,t.jsx)("img",{src:M.imgSrc}),(0,t.jsx)("div",{className:l().buttonText,children:M.children})]})})})};m.Z=u}}]);

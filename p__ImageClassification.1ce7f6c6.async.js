(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[845],{52822:function(s){s.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(s){s.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",listItemActive:"listItemActive___3FRb7"}},56131:function(s){s.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(s){s.exports={container:"container___G0FNe"}},83930:function(s){s.exports={stage:"stage___3H5QL"}},80961:function(s){s.exports={toolbar:"toolbar___3vxli"}},82499:function(s){s.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},8881:function(s){s.exports={classes:"classes___GWIJ0",mainStage:"mainStage___3H7Up",rightSideBar:"rightSideBar___2sEdt",determinOutline:"determinOutline___3GjrR"}},31154:function(s,P,e){"use strict";e.d(P,{Z:function(){return I}});var O=e(11849),E=e(2824),c=e(91220),i=e(67294),r=e(65031),o=e(85893);function m(n,a,_,u){if(!(!n||!a||!_||!u))return{width:n,color:a,points:_,tool:u,element:(0,o.jsx)(r.x1,{stroke:a,strokeWidth:n,globalCompositeOperation:u==="brush"?"source-over":"destination-out",lineCap:"round",points:_,tension:.01})}}function d(n,a){return n=="rubber"||a==2?"rubber":"brush"}function L(n){var a=0,_=(0,c.Z)(n),u;try{for(_.s();!(u=_.n()).done;){var t=u.value;!t||t.annotationId>a&&(a=t.annotationId)}}catch(D){_.e(D)}finally{_.f()}return a}function I(n){var a=(0,i.useState)(),_=(0,E.Z)(a,2),u=_[0],t=_[1],D=function(M){var h,F=d(n.currentTool,M.evt.button),f=m(n.brushSize||10,(h=n.currentLabel)===null||h===void 0?void 0:h.color,[M.evt.offsetX,M.evt.offsetY,M.evt.offsetX,M.evt.offsetY],F);if(!!f)if(t(F),!n.currentAnnotation)n.onAnnotationAdd({annotationId:L(n.annotations)+1,label:n.currentLabel,lines:[f]});else{var j,y={annotationId:n.currentAnnotation.annotationId,label:n.currentAnnotation.label,lines:(j=n.currentAnnotation.lines)===null||j===void 0?void 0:j.concat([f])};n.onAnnotationModify(y),console.log(y)}},B=function(M){var h;if(!(!u||!n.currentAnnotation)){var F=[M.evt.offsetX,M.evt.offsetY],f=[];(h=n.currentAnnotation)!==null&&h!==void 0&&h.lines&&(F=n.currentAnnotation.lines[n.currentAnnotation.lines.length-1].points.concat(F),f=n.currentAnnotation.lines);var j=m(n.brushSize||10,n.currentLabel.color,F,u);!j||(f.pop(),f.push(j),n.onAnnotationModify((0,O.Z)((0,O.Z)({},n.currentAnnotation),{},{lines:f})))}},C=function(){t(void 0)};return{onMouseDown:D,onMouseMove:B,onMouseUp:C}}},63097:function(s,P,e){"use strict";var O=e(20136),E=e(55241),c=e(2824),i=e(67294),r=e(52822),o=e.n(r),m=e(63144),d=e(85893),L=function(n){var a=(0,i.useState)(n.color||"#FFF"),_=(0,c.Z)(a,2),u=_[0],t=_[1];return(0,i.useEffect)(function(){t(n.color||"#FFF")},[n]),n.changeable?(0,d.jsx)(E.Z,{getPopupContainer:function(B){return B.parentElement||document.body},overlayClassName:o().popover,openClassName:o().popoverOpenClassName,placement:"bottom",content:(0,d.jsx)(m.xS,{disableAlpha:!0,color:u,onChange:function(B){t(B.hex)},onChangeComplete:n.onChange}),trigger:"click",children:(0,d.jsx)("div",{className:o().roundBall,style:{backgroundColor:u}})}):(0,d.jsx)("div",{className:o().roundBall,style:{backgroundColor:u}})};P.Z=L},5041:function(s,P,e){"use strict";e.d(P,{Z:function(){return $}});var O=e(54421),E=e(38272),c=e(57663),i=e(71577),r=e(2824),o=e(67294),m=e(56131),d=e.n(m),L=e(49111),I=e(19650),n=e(11849),a=e(5882),_=e.n(a),u=e(63097),t=e(85893),D=function(l){var b=(0,n.Z)({},l.label),T=(0,o.useState)(b.invisible),x=(0,r.Z)(T,2),U=x[0],S=x[1],W=(0,t.jsx)(E.ZP.Item,{className:"".concat(_().listItem," ").concat(l.active?_().listItemActive:""),unselectable:"on",onClick:function(){l.onClick(b)},children:(0,t.jsxs)(I.Z,{align:"center",size:5,children:[(0,t.jsx)("a",{className:_().eye,style:{backgroundImage:U?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){S(!U),l.onLabelModify(b)}})," ",b.name,(0,t.jsx)(u.Z,{color:b.color,changeable:!0,onChange:function(Z){b.color=Z.hex,l.onLabelModify(b)}})]})});return W},B=D,C=e(71194),v=e(50146),M=e(47673),h=e(24044),F=e(9715),f=e(93766),j=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],y=function(l){var b,T,x=(0,o.useState)(((b=l.defaultLabel)===null||b===void 0?void 0:b.color)||j[l.order||0]),U=(0,r.Z)(x,2),S=U[0],W=U[1];(0,o.useEffect)(function(){var A;W(((A=l.defaultLabel)===null||A===void 0?void 0:A.color)||j[l.order||0])},[l]);var K=f.Z.useForm(),Z=(0,r.Z)(K,1),R=Z[0];return(0,t.jsx)(v.Z,{title:"Add Label",visible:l.visible,onCancel:l.onCancel,footer:null,children:(0,t.jsxs)(f.Z,{form:R,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(T=l.defaultLabel)===null||T===void 0?void 0:T.name},onFinish:function(g){var X={name:g.labelname,color:S};l.onLabelAdd(X),R.resetFields()},autoComplete:"off",children:[(0,t.jsx)(f.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,t.jsx)(h.Z,{})}),(0,t.jsx)(f.Z.Item,{label:"Select Color",name:"color",children:(0,t.jsx)(u.Z,{color:S,onChange:function(g){W(g.hex)}})}),(0,t.jsx)(f.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,t.jsxs)(I.Z,{children:[(0,t.jsx)(i.Z,{onClick:function(){var g;(g=l.onCancel)===null||g===void 0||g.call(0),R.resetFields()},children:"\u53D6\u6D88"}),(0,t.jsx)(i.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},z=y,p=[{color:"#FF0000",name:"Label 1"},{color:"#008000",name:"Label 2"}],H=function(l){var b=(0,o.useState)(p),T=(0,r.Z)(b,2),x=T[0],U=T[1],S=(0,o.useState)(!1),W=(0,r.Z)(S,2),K=W[0],Z=W[1];return(0,o.useEffect)(function(){l.selectedLabel||l.onLabelSelect(x[0])},[x,l]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E.ZP,{className:d().labelList,size:"large",header:(0,t.jsx)("div",{className:d().listHeader,children:"Label List"}),footer:(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){Z(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:x,renderItem:function(A){var g;return(0,t.jsx)(B,{onClick:l.onLabelSelect,label:A,active:A.name==((g=l.selectedLabel)===null||g===void 0?void 0:g.name),onLabelDelete:l.onLabelDelete,onLabelModify:l.onLabelModify})}}),(0,t.jsx)(z,{order:x.length,visible:K,onLabelAdd:function(A){x.push(A),U(x),Z(!1)},onCancel:function(){Z(!1)}})]})},$=H},8088:function(s,P,e){"use strict";var O=e(67294),E=e(78677),c=e.n(E),i=e(85893),r=function(m){return(0,i.jsx)("div",{className:"".concat(c().container," ").concat(m.className),children:m.children})};P.Z=r},57436:function(s,P,e){"use strict";var O=e(2824),E=e(67294),c=e(65031),i=e(84420),r=e.n(i),o=e(83930),m=e.n(o),d=e(85893),L="./pics/basketball.jpg",I=function(a){var _=r()(L),u=(0,O.Z)(_,1),t=u[0],D=(t==null?void 0:t.width)||0,B=(t==null?void 0:t.height)||0;return(0,d.jsxs)(c.Hf,{width:D,height:B,className:m().stage,children:[(0,d.jsx)(c.mh,{children:(0,d.jsx)(c.Ee,{image:t})}),(0,d.jsxs)(c.mh,{onMouseDown:function(v){a.onMouseDown&&a.onMouseDown(v)},onMouseMove:function(v){a.onMouseMove&&a.onMouseMove(v)},onMouseUp:function(v){a.onMouseUp&&a.onMouseUp(v)},onContextMenu:function(v){v.evt.preventDefault()},children:[(0,d.jsx)(c.Ee,{image:t}),a.annotations.map(function(C,v){var M;return(M=C.lines)===null||M===void 0?void 0:M.map(function(h,F){return h.element})})]})]})};P.Z=I},44434:function(s,P,e){"use strict";var O=e(67294),E=e(80961),c=e.n(E),i=e(85893),r=function(m){return(0,i.jsx)("div",{className:c().toolbar,children:m.children})};P.Z=r},61541:function(s,P,e){"use strict";var O=e(49111),E=e(19650),c=e(67294),i=e(82499),r=e.n(i),o=e(85893),m=function(L){return(0,o.jsx)("div",{unselectable:"on",className:"".concat(r().toolBarButtonContainerWrapper," ").concat(L.active&&r().toolBarButtonContainerWrapperActive),onClick:L.onClick,children:(0,o.jsx)(E.Z,{align:"center",className:r().toolBarButtonContainer,size:0,children:(0,o.jsxs)(E.Z,{align:"center",direction:"vertical",className:r().toolBarButton,size:0,children:[(0,o.jsx)("img",{src:L.imgSrc}),(0,o.jsx)("div",{className:r().buttonText,children:L.children})]})})})};P.Z=m},27682:function(s,P,e){"use strict";e.r(P);var O=e(2824),E=e(67294),c=e(8881),i=e.n(c),r=e(8088),o=e(61541),m=e(44434),d=e(5041),L=e(57436),I=e(31154),n=e(85893),a=function(){var u=(0,E.useState)(),t=(0,O.Z)(u,2),D=t[0],B=t[1],C=(0,I.Z)({currentLabel:D});return(0,n.jsxs)(r.Z,{className:i().classes,children:[(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/zoom_in.png",children:"Zoom in"}),(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/zoom_out.png",children:"Zoom out"}),(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,n.jsx)(o.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,n.jsx)("div",{className:i().mainStage,children:(0,n.jsx)(L.Z,{elements:C.elements,onMouseDown:C.onMouseDown,onMouseMove:C.onMouseMove,onMouseUp:C.onMouseUp})}),(0,n.jsx)("div",{className:i().rightSideBar,children:(0,n.jsx)(d.Z,{selectedLabel:D,onLabelSelect:function(M){B(M)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}})})]})};P.default=a}}]);

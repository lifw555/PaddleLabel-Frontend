(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[672],{41435:function(d,M,e){"use strict";e.d(M,{Z:function(){return i}});var T=e(94663),m=e(80112);function C(c){return Function.toString.call(c).indexOf("[native code]")!==-1}var v=e(18597);function l(c,u,L){return(0,v.Z)()?l=Reflect.construct:l=function(P,W,t){var b=[null];b.push.apply(b,W);var n=Function.bind.apply(P,b),g=new n;return t&&(0,m.Z)(g,t.prototype),g},l.apply(null,arguments)}function i(c){var u=typeof Map=="function"?new Map:void 0;return i=function(E){if(E===null||!C(E))return E;if(typeof E!="function")throw new TypeError("Super expression must either be null or a function");if(typeof u!="undefined"){if(u.has(E))return u.get(E);u.set(E,P)}function P(){return l(E,arguments,(0,T.Z)(this).constructor)}return P.prototype=Object.create(E.prototype,{constructor:{value:P,enumerable:!1,writable:!0,configurable:!0}}),(0,m.Z)(P,E)},i(c)}},52822:function(d){d.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(d){d.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",delete:"delete___WHPf2",listItemActive:"listItemActive___3FRb7"}},56131:function(d){d.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(d){d.exports={container:"container___G0FNe"}},83930:function(d){d.exports={stage:"stage___3H5QL"}},80961:function(d){d.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(d){d.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},73199:function(){},63097:function(d,M,e){"use strict";var T=e(20136),m=e(55241),C=e(2824),v=e(67294),l=e(52822),i=e.n(l),c=e(63144),u=e(85893),L=function(P){var W=(0,v.useState)(P.color||"#FFF"),t=(0,C.Z)(W,2),b=t[0],n=t[1];return(0,v.useEffect)(function(){n(P.color||"#FFF")},[P]),P.changeable?(0,u.jsx)(m.Z,{getPopupContainer:function(y){return y.parentElement||document.body},overlayClassName:i().popover,openClassName:i().popoverOpenClassName,placement:"bottom",content:(0,u.jsx)(c.xS,{disableAlpha:!0,color:b,onChange:function(y){n(y.hex)},onChangeComplete:P.onChange}),trigger:"click",children:(0,u.jsx)("div",{className:i().roundBall,style:{backgroundColor:b}})}):(0,u.jsx)("div",{className:i().roundBall,style:{backgroundColor:b}})};M.Z=L},5041:function(d,M,e){"use strict";e.d(M,{Z:function(){return K}});var T=e(54421),m=e(38272),C=e(57663),v=e(71577),l=e(2824),i=e(67294),c=e(56131),u=e.n(c),L=e(49111),E=e(19650),P=e(11849),W=e(5882),t=e.n(W),b=e(63097),n=e(85893),g=function(o){var _=(0,P.Z)({},o.label),x=(0,i.useState)(_.invisible),h=(0,l.Z)(x,2),f=h[0],D=h[1],I=o.hideEye?" ":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:t().eye,style:{backgroundImage:f?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){D(!f),o.onLabelModify(_)}})," "]}),a=o.hideColorPicker?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(b.Z,{color:_.color,changeable:!0,onChange:function(r){_.color=r.hex,o.onLabelModify(_)}}),B=(0,n.jsxs)(m.ZP.Item,{className:"".concat(t().listItem," ").concat(_.active?t().listItemActive:""),unselectable:"on",onClick:function(){o.onClick(_)},children:[(0,n.jsxs)(E.Z,{align:"center",size:5,children:[I,_.name,a]}),(0,n.jsx)("a",{className:t().delete,style:{backgroundImage:"url(./pics/delete.png)"},onClick:function(r){r.stopPropagation(),o.onLabelDelete(_)}})]});return B},y=g,z=e(71194),p=e(50146),s=e(47673),N=e(24044),$=e(9715),F=e(93766),Z=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],U=function(o){var _,x,h=(0,i.useState)(((_=o.defaultLabel)===null||_===void 0?void 0:_.color)||Z[o.order||0]),f=(0,l.Z)(h,2),D=f[0],I=f[1];(0,i.useEffect)(function(){var j;I(((j=o.defaultLabel)===null||j===void 0?void 0:j.color)||Z[o.order||0])},[o]);var a=o.hideColorPicker?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(F.Z.Item,{label:"Select Color",name:"color",children:(0,n.jsx)(b.Z,{color:D,onChange:function(A){I(A.hex)}})}),B=F.Z.useForm(),R=(0,l.Z)(B,1),r=R[0];return(0,n.jsx)(p.Z,{title:"Add Label",visible:o.visible,onCancel:o.onCancel,footer:null,children:(0,n.jsxs)(F.Z,{form:r,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(x=o.defaultLabel)===null||x===void 0?void 0:x.name},onFinish:function(A){var Y={name:A.labelname,color:D};o.onLabelAdd(Y),r.resetFields()},autoComplete:"off",children:[(0,n.jsx)(F.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,n.jsx)(N.Z,{})}),a,(0,n.jsx)(F.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,n.jsxs)(E.Z,{children:[(0,n.jsx)(v.Z,{onClick:function(){var A;(A=o.onCancel)===null||A===void 0||A.call(0),r.resetFields()},children:"\u53D6\u6D88"}),(0,n.jsx)(v.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},S=U,H=function(o){var _;console.log("render pplabellist");var x=(0,i.useState)(!1),h=(0,l.Z)(x,2),f=h[0],D=h[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.ZP,{className:u().labelList,size:"large",header:(0,n.jsx)("div",{className:u().listHeader,children:"Label List"}),footer:(0,n.jsx)("div",{children:(0,n.jsx)(v.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){D(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:o.labels,renderItem:function(a){return(0,n.jsx)(y,{hideColorPicker:o.hideColorPicker,hideEye:o.hideEye,onClick:o.onLabelSelect,label:a,onLabelDelete:o.onLabelDelete,onLabelModify:o.onLabelModify})}}),(0,n.jsx)(S,{hideColorPicker:o.hideColorPicker,order:(_=o.labels)===null||_===void 0?void 0:_.length,visible:f,onLabelAdd:function(a){o.onLabelAdd(a),D(!1)},onCancel:function(){D(!1)}})]})},K=H},8088:function(d,M,e){"use strict";var T=e(67294),m=e(78677),C=e.n(m),v=e(85893),l=function(c){return(0,v.jsx)("div",{className:"".concat(C().container," ").concat(c.className),children:c.children})};M.Z=l},57436:function(d,M,e){"use strict";var T=e(91220),m=e(2824),C=e(67294),v=e(65031),l=e(84420),i=e.n(l),c=e(83930),u=e.n(c),L=e(85893),E="./pics/basketball.jpg",P=function(t){var b=i()(t.imgSrc||""),n=(0,m.Z)(b,1),g=n[0],y=(g==null?void 0:g.width)||0,z=(g==null?void 0:g.height)||0,p=(0,C.useState)(),s=(0,m.Z)(p,2),N=s[0],$=s[1],F=(0,C.useState)(),Z=(0,m.Z)(F,2),U=Z[0],S=Z[1],H=(0,C.useState)({x:0,y:0}),K=(0,m.Z)(H,2),O=K[0],o=K[1];function _(){var a=document.getElementById("dr");a&&($(a.clientWidth),S(a.clientHeight))}(0,C.useEffect)(function(){window.removeEventListener("resize",_),window.addEventListener("resize",_);var a=document.getElementById("dr");a&&($(a.clientWidth),S(a.clientHeight),o({x:a.clientWidth/2,y:a.clientHeight/2}))},[]);var x=[];if(t.annotations){var h=(0,T.Z)(t.annotations),f;try{for(h.s();!(f=h.n()).done;){var D=f.value;if(!!D){var I=D.tool=="polygon"?t.createPolygonFunc:t.createBrushFunc;I&&x.push(I(D,t.onAnnotationModify,t.onAnnotationModifyComplete,t.scale,t.currentTool,t.setCurrentAnnotation,t.currentAnnotation))}}}catch(a){h.e(a)}finally{h.f()}}return(0,L.jsx)(v.Hf,{width:N,height:U,className:u().stage,children:(0,L.jsx)(v.mh,{onMouseDown:function(B){t.onMouseDown&&t.onMouseDown(B,t.scale)},onMouseMove:function(B){t.onMouseMove&&t.onMouseMove(B,t.scale)},onMouseUp:function(B){t.onMouseUp&&t.onMouseUp(B,t.scale)},onContextMenu:function(B){B.evt.preventDefault()},draggable:!1,children:(0,L.jsxs)(v.ZA,{draggable:t.currentTool=="mover",onDragEnd:function(B){},children:[(0,L.jsx)(v.Ee,{draggable:!1,image:g,x:O.x,y:O.y,offsetX:y/2,offsetY:z/2,scaleX:t.scale,scaleY:t.scale}),x]})})})};M.Z=P},44434:function(d,M,e){"use strict";var T=e(67294),m=e(80961),C=e.n(m),v=e(85893),l=function(c){var u=C().leftToolbar;return c.disLoc=="right"&&(u=C().rightToolbar),(0,v.jsx)("div",{className:u,children:c.children})};M.Z=l},61541:function(d,M,e){"use strict";var T=e(49111),m=e(19650),C=e(67294),v=e(82499),l=e.n(v),i=e(85893),c=function(L){return(0,i.jsx)("div",{unselectable:"on",className:"".concat(l().toolBarButtonContainerWrapper," ").concat(L.active&&l().toolBarButtonContainerWrapperActive),onClick:L.onClick,children:(0,i.jsx)(m.Z,{align:"center",className:l().toolBarButtonContainer,size:0,children:(0,i.jsxs)(m.Z,{align:"center",direction:"vertical",className:l().toolBarButton,size:0,children:[(0,i.jsx)("img",{src:L.imgSrc}),(0,i.jsx)("div",{className:l().buttonText,children:L.children})]})})})};M.Z=c},29214:function(d,M,e){"use strict";e.r(M);var T=e(11849),m=e(20228),C=e(11382),v=e(34669),l=e(54458),i=e(34792),c=e(48086),u=e(86582),L=e(91220),E=e(2824),P=e(67294),W=e(73199),t=e.n(W),b=e(8088),n=e(61541),g=e(44434),y=e(5041),z=e(57436),p=e(64322),s=e(85893),N=function(){var F,Z=(0,P.useState)("mover"),U=(0,E.Z)(Z,2),S=U[0],H=U[1],K=(0,p.$L)(P.useState,P.useEffect,{label:{oneHot:!1,postSetCurr:B},effectTrigger:{postTaskChange:R}}),O=(0,E.Z)(K,8),o=O[0],_=O[1],x=O[2],h=O[3],f=O[4],D=O[5],I=O[6],a=O[7];function B(r){if(console.log("selectLabel",f.curr,D.curr,h.all),r.active)h.create({taskId:f.curr.taskId,labelId:r.labelId,dataId:D.curr.dataId});else{var j=h.all.filter(function(A){return A.labelId==r.labelId})[0];console.log("filter ann ",j),h.remove(j.annotationId)}console.log("selectlabel",r)}function R(r,j){if(_(!0),!!r){var A=(0,L.Z)(r),Y;try{var k=function(){var X=Y.value,J=j.filter(function(G){return G.label.labelId==X.labelId});J.length!=0&&(X.active=!0)};for(A.s();!(Y=A.n()).done;)k()}catch(V){A.e(V)}finally{A.f()}console.log("label.all toggled",a.all),a.setAll((0,u.Z)(r)),_(!1)}}return(0,s.jsxs)(b.Z,{className:t().classes,children:[(0,s.jsxs)(g.Z,{children:[(0,s.jsx)(n.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){x.change(.1)},children:"Zoom in"}),(0,s.jsx)(n.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){x.change(-.1)},children:"Zoom out"}),(0,s.jsx)(n.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){c.default.info("Annotations are saved automatically. You don't need to click save.")},children:"Save"}),(0,s.jsx)(n.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){H("mover"),c.default.info("You can move the image now.")},children:"Move"})]}),(0,s.jsx)("div",{id:"dr",className:"mainStage",children:(0,s.jsxs)(C.Z,{tip:"loading",spinning:o,children:[(0,s.jsx)("div",{className:"draw",children:(0,s.jsx)(z.Z,{scale:x.curr,currentTool:S,setCurrentAnnotation:function(){},onAnnotationModify:function(){},onAnnotationModifyComplete:function(){},imgSrc:D.imgSrc})}),(0,s.jsx)("div",{className:"pblock",children:(0,s.jsxs)("div",{className:"progress",children:[(0,s.jsx)(l.Z,{className:"progressBar",percent:f.progress,status:"active",showInfo:!1})," ",(0,s.jsxs)("span",{className:"progressDesc",children:["Current labeling ",f.currIdx?f.currIdx+1:1," of ",(F=f.all)===null||F===void 0?void 0:F.length,". Already labeled ",f.finished||0,"."]})]})}),(0,s.jsx)("div",{className:"prevTask",onClick:f.prevTask}),(0,s.jsx)("div",{className:"nextTask",onClick:f.nextTask})]})}),(0,s.jsxs)(g.Z,{disLoc:"right",children:[(0,s.jsx)(n.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,s.jsx)(n.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Split Dataset"})]}),(0,s.jsx)("div",{className:"rightSideBar",children:(0,s.jsx)(y.Z,{labels:a.all,onLabelSelect:a.setCurr,onLabelAdd:function(j){return a.create((0,T.Z)((0,T.Z)({},j),{},{projectId:I.curr.projectId}))},onLabelDelete:a.remove,onLabelModify:function(){},hideColorPicker:!0,hideEye:!0})})]})};M.default=N}}]);

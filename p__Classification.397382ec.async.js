(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[672],{41435:function(i,M,e){"use strict";e.d(M,{Z:function(){return r}});var T=e(94663),u=e(80112);function E(d){return Function.toString.call(d).indexOf("[native code]")!==-1}var m=e(18597);function l(d,c,L){return(0,m.Z)()?l=Reflect.construct:l=function(v,Z,n){var D=[null];D.push.apply(D,Z);var t=Function.bind.apply(v,D),C=new t;return n&&(0,u.Z)(C,n.prototype),C},l.apply(null,arguments)}function r(d){var c=typeof Map=="function"?new Map:void 0;return r=function(P){if(P===null||!E(P))return P;if(typeof P!="function")throw new TypeError("Super expression must either be null or a function");if(typeof c!="undefined"){if(c.has(P))return c.get(P);c.set(P,v)}function v(){return l(P,arguments,(0,T.Z)(this).constructor)}return v.prototype=Object.create(P.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),(0,u.Z)(v,P)},r(d)}},52822:function(i){i.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(i){i.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",delete:"delete___WHPf2",listItemActive:"listItemActive___3FRb7"}},56131:function(i){i.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(i){i.exports={container:"container___G0FNe"}},83930:function(i){i.exports={stage:"stage___3H5QL"}},80961:function(i){i.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(i){i.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},73199:function(i){i.exports={classes:"classes___3trCU",mainStage:"mainStage___3ajeT",prevTask:"prevTask___1O-ND",nextTask:"nextTask___2SQX8",draw:"draw___3nlFC",pblock:"pblock___2fZaD",progress:"progress___K3vmc",rightSideBar:"rightSideBar___aFTer"}},63097:function(i,M,e){"use strict";var T=e(20136),u=e(55241),E=e(2824),m=e(67294),l=e(52822),r=e.n(l),d=e(63144),c=e(85893),L=function(v){var Z=(0,m.useState)(v.color||"#FFF"),n=(0,E.Z)(Z,2),D=n[0],t=n[1];return(0,m.useEffect)(function(){t(v.color||"#FFF")},[v]),v.changeable?(0,c.jsx)(u.Z,{getPopupContainer:function(F){return F.parentElement||document.body},overlayClassName:r().popover,openClassName:r().popoverOpenClassName,placement:"bottom",content:(0,c.jsx)(d.xS,{disableAlpha:!0,color:D,onChange:function(F){t(F.hex)},onChangeComplete:v.onChange}),trigger:"click",children:(0,c.jsx)("div",{className:r().roundBall,style:{backgroundColor:D}})}):(0,c.jsx)("div",{className:r().roundBall,style:{backgroundColor:D}})};M.Z=L},5041:function(i,M,e){"use strict";e.d(M,{Z:function(){return p}});var T=e(54421),u=e(38272),E=e(57663),m=e(71577),l=e(2824),r=e(67294),d=e(56131),c=e.n(d),L=e(49111),P=e(19650),v=e(11849),Z=e(5882),n=e.n(Z),D=e(63097),t=e(85893),C=function(o){var _=(0,v.Z)({},o.label),I=(0,r.useState)(_.invisible),O=(0,l.Z)(I,2),f=O[0],x=O[1],A=o.hideEye?" ":(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{className:n().eye,style:{backgroundImage:f?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){x(!f),o.onLabelModify(_)}})," "]}),a=o.hideColorPicker?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(D.Z,{color:_.color,changeable:!0,onChange:function(j){_.color=j.hex,o.onLabelModify(_)}}),g=(0,t.jsx)(u.ZP.Item,{className:"".concat(n().listItem," ").concat(_.active?n().listItemActive:""),unselectable:"on",onClick:function(){o.onClick(_)},children:(0,t.jsxs)(P.Z,{align:"center",size:5,children:[A,_.name,a,(0,t.jsx)("a",{className:n().delete,style:{backgroundImage:"url(./pics/delete.png)"},onClick:function(j){j.stopPropagation(),o.onLabelDelete(_)}})]})});return g},F=C,Y=e(71194),z=e(50146),s=e(47673),$=e(24044),k=e(9715),S=e(93766),y=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],K=function(o){var _,I,O=(0,r.useState)(((_=o.defaultLabel)===null||_===void 0?void 0:_.color)||y[o.order||0]),f=(0,l.Z)(O,2),x=f[0],A=f[1];(0,r.useEffect)(function(){var R;A(((R=o.defaultLabel)===null||R===void 0?void 0:R.color)||y[o.order||0])},[o]);var a=o.hideColorPicker?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(S.Z.Item,{label:"Select Color",name:"color",children:(0,t.jsx)(D.Z,{color:x,onChange:function(b){A(b.hex)}})}),g=S.Z.useForm(),h=(0,l.Z)(g,1),j=h[0];return(0,t.jsx)(z.Z,{title:"Add Label",visible:o.visible,onCancel:o.onCancel,footer:null,children:(0,t.jsxs)(S.Z,{form:j,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(I=o.defaultLabel)===null||I===void 0?void 0:I.name},onFinish:function(b){var B={name:b.labelname,color:x};o.onLabelAdd(B),j.resetFields()},autoComplete:"off",children:[(0,t.jsx)(S.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,t.jsx)($.Z,{})}),a,(0,t.jsx)(S.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,t.jsxs)(P.Z,{children:[(0,t.jsx)(m.Z,{onClick:function(){var b;(b=o.onCancel)===null||b===void 0||b.call(0),j.resetFields()},children:"\u53D6\u6D88"}),(0,t.jsx)(m.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},U=K,X=function(o){var _;console.log("render pplabellist");var I=(0,r.useState)(!1),O=(0,l.Z)(I,2),f=O[0],x=O[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.ZP,{className:c().labelList,size:"large",header:(0,t.jsx)("div",{className:c().listHeader,children:"Label List"}),footer:(0,t.jsx)("div",{children:(0,t.jsx)(m.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){x(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:o.labels,renderItem:function(a){return(0,t.jsx)(F,{hideColorPicker:o.hideColorPicker,hideEye:o.hideEye,onClick:o.onLabelSelect,label:a,onLabelDelete:o.onLabelDelete,onLabelModify:o.onLabelModify})}}),(0,t.jsx)(U,{hideColorPicker:o.hideColorPicker,order:(_=o.labels)===null||_===void 0?void 0:_.length,visible:f,onLabelAdd:function(a){o.onLabelAdd(a),x(!1)},onCancel:function(){x(!1)}})]})},p=X},8088:function(i,M,e){"use strict";var T=e(67294),u=e(78677),E=e.n(u),m=e(85893),l=function(d){return(0,m.jsx)("div",{className:"".concat(E().container," ").concat(d.className),children:d.children})};M.Z=l},57436:function(i,M,e){"use strict";var T=e(91220),u=e(2824),E=e(67294),m=e(65031),l=e(84420),r=e.n(l),d=e(83930),c=e.n(d),L=e(85893),P="./pics/basketball.jpg",v=function(n){var D=r()(n.imgSrc||""),t=(0,u.Z)(D,1),C=t[0],F=(C==null?void 0:C.width)||0,Y=(C==null?void 0:C.height)||0,z=(0,E.useState)(),s=(0,u.Z)(z,2),$=s[0],k=s[1],S=(0,E.useState)(),y=(0,u.Z)(S,2),K=y[0],U=y[1],X=(0,E.useState)({x:0,y:0}),p=(0,u.Z)(X,2),N=p[0],o=p[1];function _(){var a=document.getElementById("dr");a&&(k(a.clientWidth),U(a.clientHeight))}(0,E.useEffect)(function(){window.removeEventListener("resize",_),window.addEventListener("resize",_);var a=document.getElementById("dr");a&&(k(a.clientWidth),U(a.clientHeight),o({x:a.clientWidth/2,y:a.clientHeight/2}))},[]);var I=[];if(n.annotations){var O=(0,T.Z)(n.annotations),f;try{for(O.s();!(f=O.n()).done;){var x=f.value;if(!!x){var A=x.tool=="polygon"?n.createPolygonFunc:n.createBrushFunc;A&&I.push(A(x,n.onAnnotationModify,n.onAnnotationModifyComplete,n.scale,n.currentTool,n.setCurrentAnnotation,n.currentAnnotation))}}}catch(a){O.e(a)}finally{O.f()}}return(0,L.jsx)(m.Hf,{width:$,height:K,className:c().stage,children:(0,L.jsx)(m.mh,{onMouseDown:function(g){n.onMouseDown&&n.onMouseDown(g,n.scale)},onMouseMove:function(g){n.onMouseMove&&n.onMouseMove(g,n.scale)},onMouseUp:function(g){n.onMouseUp&&n.onMouseUp(g,n.scale)},onContextMenu:function(g){g.evt.preventDefault()},draggable:!1,children:(0,L.jsxs)(m.ZA,{draggable:n.currentTool=="mover",onDragEnd:function(g){},children:[(0,L.jsx)(m.Ee,{draggable:!1,image:C,x:N.x,y:N.y,offsetX:F/2,offsetY:Y/2,scaleX:n.scale,scaleY:n.scale}),I]})})})};M.Z=v},44434:function(i,M,e){"use strict";var T=e(67294),u=e(80961),E=e.n(u),m=e(85893),l=function(d){var c=E().leftToolbar;return d.disLoc=="right"&&(c=E().rightToolbar),(0,m.jsx)("div",{className:c,children:d.children})};M.Z=l},61541:function(i,M,e){"use strict";var T=e(49111),u=e(19650),E=e(67294),m=e(82499),l=e.n(m),r=e(85893),d=function(L){return(0,r.jsx)("div",{unselectable:"on",className:"".concat(l().toolBarButtonContainerWrapper," ").concat(L.active&&l().toolBarButtonContainerWrapperActive),onClick:L.onClick,children:(0,r.jsx)(u.Z,{align:"center",className:l().toolBarButtonContainer,size:0,children:(0,r.jsxs)(u.Z,{align:"center",direction:"vertical",className:l().toolBarButton,size:0,children:[(0,r.jsx)("img",{src:L.imgSrc}),(0,r.jsx)("div",{className:l().buttonText,children:L.children})]})})})};M.Z=d},29214:function(i,M,e){"use strict";e.r(M);var T=e(11849),u=e(20228),E=e(11382),m=e(34669),l=e(54458),r=e(34792),d=e(48086),c=e(86582),L=e(91220),P=e(2824),v=e(67294),Z=e(73199),n=e.n(Z),D=e(8088),t=e(61541),C=e(44434),F=e(5041),Y=e(57436),z=e(64322),s=e(85893),$=localStorage.getItem("basePath"),k=function(){var y,K,U,X=(0,v.useState)("mover"),p=(0,P.Z)(X,2),N=p[0],o=p[1],_=function(W){if(console.log("selectLabel",h.curr,j.curr,g.all),W.active)g.create({taskId:h.curr.taskId,labelId:W.labelId,dataId:j.curr.dataId});else{var V=g.all.filter(function(H){return H.labelId==W.labelId})[0];console.log("filter ann ",V),g.remove(V.annotationId)}console.log("selectlabel",W)},I=function(W,V){var H=(0,L.Z)(W),J;try{var w=function(){var G=J.value,q=V.filter(function(ee){return ee.label.labelId==G.labelId});q.length!=0&&(G.active=!0)};for(H.s();!(J=H.n()).done;)w()}catch(Q){H.e(Q)}finally{H.f()}console.log("label.all toggled",b.all),b.setAll((0,c.Z)(W))},O=(0,z.$L)(v.useState,v.useEffect,{label:{oneHot:!1,postOnSelect:_},effectTrigger:{postTaskChange:I}}),f=(0,P.Z)(O,8),x=f[0],A=f[1],a=f[2],g=f[3],h=f[4],j=f[5],R=f[6],b=f[7];return(0,s.jsxs)(D.Z,{className:n().classes,children:[(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){a.change(.1)},children:"Zoom in"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){a.change(-.1)},children:"Zoom out"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){d.default.info("Annotations are saved automatically. You don't need to click save.")},children:"Save"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){o("mover"),d.default.info("You can move the image now.")},children:"Move"})]}),(0,s.jsx)("div",{id:"dr",className:n().mainStage,children:(0,s.jsxs)(E.Z,{tip:"loading",spinning:x,children:[(0,s.jsx)("div",{className:n().draw,children:(0,s.jsx)(Y.Z,{scale:a.curr,currentTool:N,setCurrentAnnotation:function(){},onAnnotationModify:function(){},onAnnotationModifyComplete:function(){},imgSrc:"".concat($,"/datas/").concat((y=j.curr)===null||y===void 0?void 0:y.dataId,"/image")})}),(0,s.jsx)("div",{className:n().pblock,children:(0,s.jsxs)("div",{className:n().progress,children:[(0,s.jsx)(l.Z,{percent:h.progress,status:"active"})," ",h.currIdx," ",(K=h.all)===null||K===void 0?void 0:K.length," ",Math.floor(((U=h.all)===null||U===void 0?void 0:U.length)*h.progress/100)]})}),(0,s.jsx)("div",{className:n().prevTask,onClick:function(){return h.turnTo(h.currIdx-1)}}),(0,s.jsx)("div",{className:n().nextTask,onClick:function(){return h.turnTo(h.currIdx+1)}})]})}),(0,s.jsxs)(C.Z,{disLoc:"right",children:[(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,s.jsx)(t.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Split Dataset"})]}),(0,s.jsx)("div",{className:n().rightSideBar,children:(0,s.jsx)(F.Z,{labels:b.all,selectedLabel:b.curr,onLabelSelect:b.onSelect,onLabelAdd:function(W){return b.create((0,T.Z)((0,T.Z)({},W),{},{projectId:R.curr.projectId}))},onLabelDelete:b.remove,onLabelModify:function(){},hideColorPicker:!0,hideEye:!0})})]})};M.default=k}}]);

(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[454],{57560:function(x){x.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___147XP",toolBarButtonContainer:"toolBarButtonContainer___ZEvhK",toolBarButton:"toolBarButton___1s2Rh",buttonText:"buttonText___3NTCv",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___2Utx8",popover:"popover___3PRoi"}},26647:function(x){x.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",popoverLeft:"popoverLeft___15lGe"}},8982:function(x){x.exports={RSPop1:"RSPop1___ei_bv",RSPop2:"RSPop2___9d5gM"}},75721:function(x){x.exports={segment:"segment___1EX9A",mainStage:"mainStage___nDwOp",draw:"draw___1Aue1",pblock:"pblock___19sdD",progress:"progress___1595f",rightSideBar:"rightSideBar___1JzJc",determinOutline:"determinOutline___2vG7S"}},43801:function(x,L,n){"use strict";n.d(L,{Z:function(){return O}});var W=n(11849),Z=n(2824),R=n(91220),T=n(67294),z=n(65031),A=n(85893);function C(t,s,l,c){if(!(!t||!s||!l||!c))return{width:t,color:s,points:l,tool:c}}function f(t){if(!t)return[(0,A.jsx)(A.Fragment,{})];var s=[],l=(0,R.Z)(t),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;if(!(!u||!u.lines)){var m=(0,R.Z)(u.lines),v;try{for(m.s();!(v=m.n()).done;){var o=v.value;!o.width||!o.color||!o.points||!o.tool||s.push((0,A.jsx)(z.x1,{stroke:o.color,strokeWidth:o.width,globalCompositeOperation:o.tool==="brush"?"source-over":"destination-out",lineCap:"round",points:o.points,tension:.01}))}}catch(S){m.e(S)}finally{m.f()}}}}catch(S){l.e(S)}finally{l.f()}return s}function y(t,s){return t=="rubber"||s==2?"rubber":"brush"}function M(t){var s=0,l=(0,R.Z)(t),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;!u||u.annotationId>s&&(s=u.annotationId)}}catch(m){l.e(m)}finally{l.f()}return s}function O(t){var s=(0,T.useState)(),l=(0,Z.Z)(s,2),c=l[0],u=l[1],m=function(h,P){var g;if(console.log(t.currentTool),!(t.currentTool!="brush"&&t.currentTool!="rubber")){var E=h.evt.offsetX/P,_=h.evt.offsetY/P,a=y(t.currentTool,h.evt.button),r=C(t.brushSize||10,(g=t.currentLabel)===null||g===void 0?void 0:g.color,[E,_,E,_],a);if(!!r)if(u(a),t.currentAnnotation){var j,I={annotationId:t.currentAnnotation.annotationId,label:t.currentAnnotation.label,lines:(j=t.currentAnnotation.lines)===null||j===void 0?void 0:j.concat([r])};t.onAnnotationModify(I)}else{if(a=="rubber")return;t.onAnnotationAdd({annotationId:M(t.annotations)+1,label:t.currentLabel,lines:[r]})}}},v=function(h,P){var g;if(!(!c||!t.currentAnnotation)){var E=h.evt.offsetX/P,_=h.evt.offsetY/P,a=[E,_],r=[];(g=t.currentAnnotation)!==null&&g!==void 0&&g.lines&&(a=t.currentAnnotation.lines[t.currentAnnotation.lines.length-1].points.concat(a),r=t.currentAnnotation.lines);var j=C(t.brushSize||10,t.currentLabel.color,a,c);!j||(r.pop(),r.push(j),t.onAnnotationModify((0,W.Z)((0,W.Z)({},t.currentAnnotation),{},{lines:r})))}},o=function(){t.currentTool!="brush"&&t.currentTool!="rubber"||u(void 0)};return{onMouseDown:m,onMouseMove:v,onMouseUp:o,createElementsFunc:f}}},58967:function(x,L,n){"use strict";var W=n(20136),Z=n(55241),R=n(77883),T=n(70507),z=n(57663),A=n(71577),C=n(2824),f=n(67294),y=n(61541),M=n(57560),O=n.n(M),t=n(85893),s=1,l=50,c=10;function u(v){return v?v<=s?s:v>=l?l:v:c}var m=function(o){var S=(0,f.useState)(u(o.size)),h=(0,C.Z)(S,2),P=h[0],g=h[1],E=function(a){g(u(a))};return(0,f.useEffect)(function(){E(o.size)},[o.size]),(0,t.jsxs)(Z.Z,{overlayClassName:O().popover,placement:"right",content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.Z,{type:"text",onClick:function(){var a,r=u(P-1);E(r),(a=o.onChange)===null||a===void 0||a.call(0,r)},children:"-"}),(0,t.jsx)(T.Z,{min:s,max:l,value:P,onChange:function(a){var r;(r=o.onChange)===null||r===void 0||r.call(0,a)},controls:!1,style:{textAlign:"center"}}),(0,t.jsx)(A.Z,{type:"text",onClick:function(){var a,r=u(P+1);E(r),(a=o.onChange)===null||a===void 0||a.call(0,r)},children:"+"})]}),trigger:o.active?"hover":"click",children:[" ",(0,t.jsx)(y.Z,{active:o.active,imgSrc:o.imgSrc||"./pics/buttons/brush.png",onClick:o.onClick,children:o.children||"Brush"})]})};L.Z=m},27992:function(x,L,n){"use strict";var W=n(20136),Z=n(55241),R=n(77883),T=n(70507),z=n(57663),A=n(71577),C=n(2824),f=n(67294),y=n(61541),M=n(26647),O=n.n(M),t=n(85893),s=1,l=100,c=10;function u(v){return v?v<=s?s:v>=l?l:v:c}var m=function(o){var S=(0,f.useState)(u(o.size)),h=(0,C.Z)(S,2),P=h[0],g=h[1],E=function(a){g(u(a))};return(0,f.useEffect)(function(){E(o.size)},[o.size]),(0,t.jsxs)(Z.Z,{overlayClassName:"".concat(O().popover," ").concat(o.disLoc=="left"?O().popoverLeft:""),placement:o.disLoc||"right",content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.Z,{type:"text",onClick:function(){var a,r=u(P-1);E(r),(a=o.onChange)===null||a===void 0||a.call(0,r)},children:"-"}),(0,t.jsx)(T.Z,{min:s,max:l,value:P,onChange:function(a){var r;(r=o.onChange)===null||r===void 0||r.call(0,a)},controls:!1,style:{textAlign:"center"}}),(0,t.jsx)(A.Z,{type:"text",onClick:function(){var a,r=u(P+1);E(r),(a=o.onChange)===null||a===void 0||a.call(0,r)},children:"+"})]}),trigger:"hover",children:[" ",(0,t.jsx)(y.Z,{imgSrc:o.imgSrc,onClick:o.onClick,children:o.children})]})};L.Z=m},21028:function(x,L,n){"use strict";n.r(L),n.d(L,{default:function(){return sn}});var W=n(57663),Z=n(71577),R=n(20136),T=n(55241),z=n(34669),A=n(54458),C=n(2824),f=n(67294),y=n(75721),M=n.n(y),O=n(8088),t=n(61541),s=n(44434),l=n(58967),c=n(27992),u=n(5041),m=n(57436),v=n(14836),o=n(29919),S=n(43801),h=n(13931),P=n(13062),g=n(71230),E=n(66126),_=n(75454),a=n(89032),r=n(15746),j=n(8982),I=n.n(j),e=n(85893),rn=function(K){return(0,e.jsxs)("div",{children:[(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(r.Z,{span:6,className:I().Pop1,children:(0,e.jsx)("span",{children:"Ww"})}),(0,e.jsx)(r.Z,{span:18,className:I().Pop2,children:(0,e.jsx)(_.Z,{min:1,max:K.wwValue||100,defaultValue:37})})]}),(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(r.Z,{span:6,className:I().Pop1,children:(0,e.jsx)("span",{children:"Wl"})}),(0,e.jsx)(r.Z,{span:18,className:I().Pop2,children:(0,e.jsx)(_.Z,{min:1,max:K.wlValue||100,defaultValue:37})})]})]})},an=rn,ln=function(){var K=(0,f.useState)(void 0),H=(0,C.Z)(K,2),b=H[0],V=H[1],cn=(0,f.useState)({color:"",name:""}),J=(0,C.Z)(cn,2),$=J[0],Q=J[1],dn=(0,f.useState)(),k=(0,C.Z)(dn,2),p=k[0],vn=k[1],_n=(0,f.useState)([]),w=(0,C.Z)(_n,2),B=w[0],F=w[1],fn=(0,f.useState)(10),q=(0,C.Z)(fn,2),N=q[0],nn=q[1],mn=(0,f.useState)(1),tn=(0,C.Z)(mn,2),Y=tn[0],en=tn[1],D=function(i){vn(i),i!=null&&i.label&&Q(i.label)},on=function(i){for(var U=[],X=0;X<B.length;X++)B[X].annotationId==i.annotationId?U.push(i):U.push(B[X]);D(i),F(U)},hn=(0,S.Z)({currentLabel:$,brushSize:N,currentTool:b,annotations:B,currentAnnotation:p,onAnnotationAdd:function(i){F(B.concat([i])),p||D(i)},onAnnotationModify:on}),Pn=(0,h.Z)({currentLabel:$,brushSize:N,currentTool:b,annotations:B,currentAnnotation:p,onAnnotationAdd:function(i){F(B.concat([i])),p||D(i)},onAnnotationModify:on}),G=b=="polygon"?Pn:hn;return(0,e.jsxs)(O.Z,{className:M().segment,children:[(0,e.jsxs)(s.Z,{children:[(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,e.jsx)(o.Z,{active:b=="polygon",onClick:function(){V("polygon"),D(void 0)},children:"Polygon"}),(0,e.jsx)(l.Z,{size:N,active:b=="brush",onClick:function(){b!="rubber"&&b!="brush"&&D(void 0),V("brush")},onChange:function(i){nn(i)},children:"Brush"}),(0,e.jsx)(l.Z,{size:N,active:b=="rubber",onClick:function(){b!="rubber"&&b!="brush"&&D(void 0),V("rubber")},onChange:function(i){nn(i)},imgSrc:"./pics/buttons/rubber.png",children:"Rubber"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){en(Y+.1)},children:"Zoom in"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){en(Y-.1)},children:"Zoom out"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,e.jsxs)("div",{className:M().mainStage,children:[(0,e.jsx)("div",{className:M().draw,children:(0,e.jsx)(m.Z,{scale:Y,annotations:B,onMouseDown:G.onMouseDown,onMouseMove:G.onMouseMove,onMouseUp:G.onMouseUp})}),(0,e.jsx)("div",{className:M().pblock,children:(0,e.jsx)("div",{className:M().progress,children:(0,e.jsx)(A.Z,{percent:50,status:"active"})})})]}),(0,e.jsxs)(s.Z,{disLoc:"right",children:[(0,e.jsx)(c.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:"Segment Threshold"}),(0,e.jsx)(c.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:"Diaphaneity"}),(0,e.jsx)(c.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:"Visual Radius"}),(0,e.jsxs)(T.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of medical",content:(0,e.jsx)(an,{}),trigger:"hover",children:[" ",(0,e.jsx)(t.Z,{imgSrc:"./pics/buttons/medical_setting.png",children:"Medical Setting"})]})]}),(0,e.jsxs)("div",{className:M().rightSideBar,children:[(0,e.jsx)("div",{className:M().determinOutline,children:(0,e.jsx)(Z.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){D(void 0)},children:"Determine Outline"})}),(0,e.jsx)(u.Z,{selectedLabel:$,onLabelSelect:function(i){Q(i),D(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,e.jsx)(v.Z,{selectedAnnotation:p,annotations:B,onAnnotationSelect:function(i){i!=null&&i.delete||D(i)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(i){F(B.filter(function(U){return U.annotationId!=i.annotationId})),D(void 0)}})]})]})},sn=ln}}]);

(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[454],{57560:function(A){A.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___147XP",toolBarButtonContainer:"toolBarButtonContainer___ZEvhK",toolBarButton:"toolBarButton___1s2Rh",buttonText:"buttonText___3NTCv",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___2Utx8",popover:"popover___3PRoi"}},26647:function(A){A.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",popoverLeft:"popoverLeft___15lGe"}},8982:function(A){A.exports={RSPop1:"RSPop1___ei_bv",RSPop2:"RSPop2___9d5gM"}},75721:function(A){A.exports={segment:"segment___1EX9A",mainStage:"mainStage___nDwOp",draw:"draw___1Aue1",pblock:"pblock___19sdD",progress:"progress___1595f",rightSideBar:"rightSideBar___1JzJc",determinOutline:"determinOutline___2vG7S"}},43801:function(A,L,n){"use strict";n.d(L,{Z:function(){return j}});var W=n(11849),T=n(2824),U=n(91220),I=n(67294),z=n(65031),b=n(85893);function C(t,d,u,m){if(!(!t||!d||!u||!m))return{width:t,color:d,points:u,tool:m}}function P(t,d,u,m,_,y,g){if(!t||!t.lines)return[(0,b.jsx)(b.Fragment,{})];var s=[],M=(0,U.Z)(t.lines),h;try{for(M.s();!(h=M.n()).done;){var c=h.value;!c.width||!c.color||!c.points||!c.tool||s.push((0,b.jsx)(z.x1,{stroke:c.color,strokeWidth:c.width,globalCompositeOperation:c.tool==="brush"?"source-over":"destination-out",lineCap:"round",points:c.points,tension:.01,onDragMove:function(){},onDragEnd:function(){u()}}))}}catch(f){M.e(f)}finally{M.f()}return s}function p(t,d){return t=="rubber"||d==2?"rubber":"brush"}function x(t){var d=0,u=(0,U.Z)(t),m;try{for(u.s();!(m=u.n()).done;){var _=m.value;!_||_.annotationId>d&&(d=_.annotationId)}}catch(y){u.e(y)}finally{u.f()}return d}function j(t){var d=(0,I.useState)(),u=(0,T.Z)(d,2),m=u[0],_=u[1],y=function(h,c){var f;if(!(t.currentTool!="brush"&&t.currentTool!="rubber")){var E=h.evt.offsetX/c,S=h.evt.offsetY/c,a=p(t.currentTool,h.evt.button),i=C(t.brushSize||10,(f=t.currentLabel)===null||f===void 0?void 0:f.color,[E,S,E,S],a);if(!!i)if(_(a),t.currentAnnotation){var Z,R={tool:"brush",annotationId:t.currentAnnotation.annotationId,label:t.currentAnnotation.label,lines:(Z=t.currentAnnotation.lines)===null||Z===void 0?void 0:Z.concat([i])};t.onAnnotationModify(R)}else{if(a=="rubber")return;t.onAnnotationAdd({tool:"brush",annotationId:x(t.annotations)+1,label:t.currentLabel,lines:[i]})}}},g=function(h,c){var f;if(!(!m||!t.currentAnnotation)){var E=h.evt.offsetX/c,S=h.evt.offsetY/c,a=[E,S],i=[];(f=t.currentAnnotation)!==null&&f!==void 0&&f.lines&&(a=t.currentAnnotation.lines[t.currentAnnotation.lines.length-1].points.concat(a),i=t.currentAnnotation.lines);var Z=C(t.brushSize||10,t.currentLabel.color,a,m);!Z||(i.pop(),i.push(Z),t.onAnnotationModify((0,W.Z)((0,W.Z)({},t.currentAnnotation),{},{lines:i})))}},s=function(){t.currentTool!="brush"&&t.currentTool!="rubber"||(_(void 0),t.onMouseUp())};return{onMouseDown:y,onMouseMove:g,onMouseUp:s,createElementsFunc:P}}},58967:function(A,L,n){"use strict";var W=n(20136),T=n(55241),U=n(77883),I=n(70507),z=n(57663),b=n(71577),C=n(2824),P=n(67294),p=n(61541),x=n(57560),j=n.n(x),t=n(85893),d=1,u=50,m=10;function _(g){return g?g<=d?d:g>=u?u:g:m}var y=function(s){var M=(0,P.useState)(_(s.size)),h=(0,C.Z)(M,2),c=h[0],f=h[1],E=function(a){f(_(a))};return(0,P.useEffect)(function(){E(s.size)},[s.size]),(0,t.jsxs)(T.Z,{overlayClassName:j().popover,placement:"right",content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.Z,{type:"text",onClick:function(){var a,i=_(c-1);E(i),(a=s.onChange)===null||a===void 0||a.call(0,i)},children:"-"}),(0,t.jsx)(I.Z,{min:d,max:u,value:c,onChange:function(a){var i;(i=s.onChange)===null||i===void 0||i.call(0,a)},controls:!1,style:{textAlign:"center"}}),(0,t.jsx)(b.Z,{type:"text",onClick:function(){var a,i=_(c+1);E(i),(a=s.onChange)===null||a===void 0||a.call(0,i)},children:"+"})]}),trigger:s.active?"hover":"click",children:[" ",(0,t.jsx)(p.Z,{active:s.active,imgSrc:s.imgSrc||"./pics/buttons/brush.png",onClick:s.onClick,children:s.children||"Brush"})]})};L.Z=y},27992:function(A,L,n){"use strict";var W=n(20136),T=n(55241),U=n(77883),I=n(70507),z=n(57663),b=n(71577),C=n(2824),P=n(67294),p=n(61541),x=n(26647),j=n.n(x),t=n(85893),d=1,u=100,m=10;function _(g){return g?g<=d?d:g>=u?u:g:m}var y=function(s){var M=(0,P.useState)(_(s.size)),h=(0,C.Z)(M,2),c=h[0],f=h[1],E=function(a){f(_(a))};return(0,P.useEffect)(function(){E(s.size)},[s.size]),(0,t.jsxs)(T.Z,{overlayClassName:"".concat(j().popover," ").concat(s.disLoc=="left"?j().popoverLeft:""),placement:s.disLoc||"right",content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.Z,{type:"text",onClick:function(){var a,i=_(c-1);E(i),(a=s.onChange)===null||a===void 0||a.call(0,i)},children:"-"}),(0,t.jsx)(I.Z,{min:d,max:u,value:c,onChange:function(a){var i;(i=s.onChange)===null||i===void 0||i.call(0,a)},controls:!1,style:{textAlign:"center"}}),(0,t.jsx)(b.Z,{type:"text",onClick:function(){var a,i=_(c+1);E(i),(a=s.onChange)===null||a===void 0||a.call(0,i)},children:"+"})]}),trigger:"hover",children:[" ",(0,t.jsx)(p.Z,{imgSrc:s.imgSrc,onClick:s.onClick,children:s.children})]})};L.Z=y},21028:function(A,L,n){"use strict";n.r(L),n.d(L,{default:function(){return fn}});var W=n(57663),T=n(71577),U=n(20136),I=n(55241),z=n(34669),b=n(54458),C=n(2824),P=n(67294),p=n(75721),x=n.n(p),j=n(8088),t=n(61541),d=n(44434),u=n(58967),m=n(27992),_=n(5041),y=n(57436),g=n(14836),s=n(29919),M=n(43801),h=n(13931),c=n(13062),f=n(71230),E=n(66126),S=n(75454),a=n(89032),i=n(15746),Z=n(8982),R=n.n(Z),o=n(85893),dn=function(N){return(0,o.jsxs)("div",{children:[(0,o.jsxs)(f.Z,{children:[(0,o.jsx)(i.Z,{span:6,className:R().Pop1,children:(0,o.jsx)("span",{children:"Ww"})}),(0,o.jsx)(i.Z,{span:18,className:R().Pop2,children:(0,o.jsx)(S.Z,{min:1,max:N.wwValue||100,defaultValue:37})})]}),(0,o.jsxs)(f.Z,{children:[(0,o.jsx)(i.Z,{span:6,className:R().Pop1,children:(0,o.jsx)("span",{children:"Wl"})}),(0,o.jsx)(i.Z,{span:18,className:R().Pop2,children:(0,o.jsx)(S.Z,{min:1,max:N.wlValue||100,defaultValue:37})})]})]})},vn=dn,_n=function(){var N=(0,P.useState)(void 0),q=(0,C.Z)(N,2),O=q[0],X=q[1],hn=(0,P.useState)({color:"",name:""}),nn=(0,C.Z)(hn,2),V=nn[0],tn=nn[1],gn=(0,P.useState)(),en=(0,C.Z)(gn,2),K=en[0],$=en[1],Pn=(0,P.useState)([]),on=(0,C.Z)(Pn,2),D=on[0],Y=on[1],Sn=(0,P.useState)(10),rn=(0,C.Z)(Sn,2),F=rn[0],an=rn[1],Cn=(0,P.useState)(1),sn=(0,C.Z)(Cn,2),G=sn[0],Q=sn[1],ln=function(e){e||Q(1),e<.1||e>3?Q(1):Q(e)},B=function(e){$(e),e!=null&&e.label&&tn(e.label)},J=function(e){Y(e)};(0,P.useEffect)(function(){localStorage.removeItem("history")},[]);function k(l,e){var r=localStorage.getItem("history"),v=r?JSON.parse(r):{index:-1,items:[]};console.log("history before set: ");var bn=JSON.stringify(v);console.log(bn);var w={currentAnnotation:e,annotations:l};if(JSON.stringify(v.items[v.index])==JSON.stringify(w)){console.log("equal with latest, do not add to history");return}var cn=v.items.splice(0,v.index==0?1:v.index+1);console.log("itemsToKeep: ".concat(JSON.stringify(cn))),console.log("itemsToAdd: ".concat(JSON.stringify(w))),v.items=cn.concat([w]),v.index++,localStorage.setItem("history",JSON.stringify(v)),console.log("history after set: "),console.log(JSON.stringify(v))}var xn=function(){var e=localStorage.getItem("history");if(!e){console.log("no historyStr, skip.");return}var r=JSON.parse(e);if(!!r){if(r.index>=r.items.length-1){console.log("already latest, skip. history.index:".concat(r.index," history.items.length:").concat(r.items.length));return}r.index++,localStorage.setItem("history",JSON.stringify(r)),console.log("After forward. history:".concat(JSON.stringify(r)));var v=r.items[r.index];$(v.currentAnnotation),Y(v.annotations)}},Mn=function(){var e=localStorage.getItem("history");if(!!e){var r=JSON.parse(e);if(!(!r||!r.index)&&!(r.index<=0)){r.index--,localStorage.setItem("history",JSON.stringify(r));var v=r.items[r.index];console.log("after backward: ".concat(JSON.stringify(r))),$(v.currentAnnotation),Y(v.annotations)}}},un=function(e){for(var r=[],v=0;v<D.length;v++)D[v].annotationId==e.annotationId?r.push(e):r.push(D[v]);B(e),J(r),k(r,e)},En=(0,M.Z)({currentLabel:V,brushSize:F,currentTool:O,annotations:D,currentAnnotation:K,onAnnotationAdd:function(e){var r=D.concat([e]);J(r),K||B(e),k(r,e)},onAnnotationModify:un}),An=(0,h.Z)({currentLabel:V,brushSize:F,currentTool:O,annotations:D,currentAnnotation:K,onAnnotationAdd:function(e){var r=D.concat([e]);J(r),K||B(e),k(r,e)},onAnnotationModify:un}),H=O=="polygon"?An:En;return(0,o.jsxs)(j.Z,{className:x().segment,children:[(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,o.jsx)(s.Z,{active:O=="polygon",onClick:function(){X("polygon"),B(void 0)},children:"Polygon"}),(0,o.jsx)(u.Z,{size:F,active:O=="brush",onClick:function(){O!="rubber"&&O!="brush"&&B(void 0),X("brush")},onChange:function(e){an(e)},children:"Brush"}),(0,o.jsx)(u.Z,{size:F,active:O=="rubber",onClick:function(){O!="rubber"&&O!="brush"&&B(void 0),X("rubber")},onChange:function(e){an(e)},imgSrc:"./pics/buttons/rubber.png",children:"Rubber"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){ln(G+.1)},children:"Zoom in"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){ln(G-.1)},children:"Zoom out"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){Mn()},children:"Undo"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){xn()},children:"Redo"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,o.jsxs)("div",{className:x().mainStage,children:[(0,o.jsx)("div",{className:x().draw,children:(0,o.jsx)(y.Z,{scale:G,annotations:D,onMouseDown:H.onMouseDown,onMouseMove:H.onMouseMove,onMouseUp:H.onMouseUp,createElementsFunc:H.createElementsFunc})}),(0,o.jsx)("div",{className:x().pblock,children:(0,o.jsx)("div",{className:x().progress,children:(0,o.jsx)(b.Z,{percent:50,status:"active"})})})]}),(0,o.jsxs)(d.Z,{disLoc:"right",children:[(0,o.jsx)(m.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:"Segment Threshold"}),(0,o.jsx)(m.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:"Diaphaneity"}),(0,o.jsx)(m.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:"Visual Radius"}),(0,o.jsxs)(I.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of medical",content:(0,o.jsx)(vn,{}),trigger:"hover",children:[" ",(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/medical_setting.png",children:"Medical Setting"})]})]}),(0,o.jsxs)("div",{className:x().rightSideBar,children:[(0,o.jsx)("div",{className:x().determinOutline,children:(0,o.jsx)(T.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){B(void 0)},children:"Determine Outline"})}),(0,o.jsx)(_.Z,{selectedLabel:V,onLabelSelect:function(e){tn(e),B(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,o.jsx)(g.Z,{selectedAnnotation:K,annotations:D,onAnnotationSelect:function(e){e!=null&&e.delete||B(e)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(e){J(D.filter(function(r){return r.annotationId!=e.annotationId})),B(void 0)}})]})]})},fn=_n}}]);

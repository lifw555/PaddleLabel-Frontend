(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[18],{41435:function(Y,w,o){"use strict";o.d(w,{Z:function(){return U}});var O=o(94663),$=o(80112);function X(L){return Function.toString.call(L).indexOf("[native code]")!==-1}var _=o(18597);function P(L,D,z){return(0,_.Z)()?P=Reflect.construct:P=function(v,W,S){var T=[null];T.push.apply(T,W);var f=Function.bind.apply(v,T),k=new f;return S&&(0,$.Z)(k,S.prototype),k},P.apply(null,arguments)}function U(L){var D=typeof Map=="function"?new Map:void 0;return U=function(u){if(u===null||!X(u))return u;if(typeof u!="function")throw new TypeError("Super expression must either be null or a function");if(typeof D!="undefined"){if(D.has(u))return D.get(u);D.set(u,v)}function v(){return P(u,arguments,(0,O.Z)(this).constructor)}return v.prototype=Object.create(u.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),(0,$.Z)(v,u)},U(L)}},72285:function(Y){Y.exports={det:"det___3GOn8",mainStage:"mainStage___36l4G",draw:"draw___1EIyT",pblock:"pblock___107zJ",progress:"progress___vIcpV",rightSideBar:"rightSideBar___3n2bi",determinOutline:"determinOutline___1p2xS"}},80212:function(Y,w,o){"use strict";o.r(w),o.d(w,{default:function(){return Sn}});var O=o(11849),$=o(57663),X=o(71577),_=o(20228),P=o(11382),U=o(34669),L=o(54458),D=o(34792),z=o(48086),u=o(2824),v=o(67294),W=o(72285),S=o.n(W),T=o(8088),f=o(61541),k=o(44434),sn=o(5041),cn=o(57436),ln=o(14836),n=o(85893),un=function(a){return(0,n.jsx)(f.Z,{active:a.active,imgSrc:a.imgSrc||"./pics/buttons/rectangle.png",onClick:a.onClick,children:a.children})},dn=un,fn=o(91220),G=o(65031);function vn(t){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function nn(t,a){if(!(!t||!a))return{color:t,points:a}}function gn(t,a,p,M,l,y,m){if(!t||!t.lines||!t.lines[0])return[(0,n.jsx)(n.Fragment,{})];var r=t.lines[0].points,g=t.lines[0].color,d=vn(g);if(!d)return[(0,n.jsx)(n.Fragment,{})];var I=(m==null?void 0:m.annotationId)==t.annotationId,b=I?.5:.1,h=void 0,C=[];return r.forEach(function(x,j){if(!h){h=x;return}C.push((0,n.jsx)(G.Cd,{onMouseDown:function(){l=="mover"&&y(t)},draggable:l=="mover",onDragMove:function(J){console.log("Circle onDrageMove");var B=J.evt.offsetX/M,K=J.evt.offsetY/M;r[j-1]=B,r[j]=K;var H=(0,O.Z)((0,O.Z)({},t),{},{lines:[{color:g,points:r}]});a(H)},onMouseOver:function(){console.log("Circle onMouseOver"),l=="mover"&&(document.body.style.cursor="pointer")},onMouseOut:function(){console.log("Circle onMouseOut"),document.body.style.cursor="default"},x:h,y:x,radius:5,fill:g})),console.log(j,r),r.length>4&&r.splice(j+1,2),h=void 0}),[(0,n.jsxs)(G.ZA,{children:[(0,n.jsx)(G.UL,{onMouseOver:function(){l=="mover"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){l=="mover"&&y(t)},stroke:g,strokeWidth:2,globalCompositeOperation:"source-over",lineCap:"round",x:r[0],y:r[1],width:r[2]-r[0],height:r[3]-r[1],closed:!0,fill:"rgba(".concat(d.r,", ").concat(d.g,", ").concat(d.b,", ").concat(b,")")}),C]},t.annotationId)]}function mn(t){var a=0,p=(0,fn.Z)(t),M;try{for(p.s();!(M=p.n()).done;){var l=M.value;!l||l.annotationId>a&&(a=l.annotationId)}}catch(y){p.e(y)}finally{p.f()}return a}function pn(t){var a=function(m,r){var g,d=m.evt.offsetX/r,I=m.evt.offsetY/r,b=nn((g=t.currentLabel)===null||g===void 0?void 0:g.color,[d,I]);!b||t.onAnnotationAdd({tool:"polygon",annotationId:mn(t.annotations)+1,label:t.currentLabel,lines:[b]})},p=function(m,r){var g,d;if(!!t.currentAnnotation){var I=m.evt.offsetX/r,b=m.evt.offsetY/r,h=t.currentAnnotation.lines||[],C=nn((g=t.currentLabel)===null||g===void 0?void 0:g.color,(d=h[0])===null||d===void 0?void 0:d.points.concat([I,b]));if(!!C){var x={tool:"polygon",annotationId:t.currentAnnotation.annotationId,label:t.currentAnnotation.label,lines:[C]};t.onAnnotationModify(x)}}},M=function(m,r){t.currentTool=="polygon"&&(t.currentAnnotation?p(m,r):a(m,r))},l=function(){t.currentTool=="polygon"&&t.onMouseUp()};return{onMouseDown:M,onMouseMove:function(){},onMouseUp:l,createElementsFunc:gn}}var yn=o(64322),F=40,hn=function(){var a,p,M=(0,yn.$L)(v.useState,v.useEffect,{label:{oneHot:!0},effectTrigger:{}}),l=(0,u.Z)(M,8),y=l[0],m=l[1],r=l[2],g=l[3],d=l[4],I=l[5],b=l[6],h=l[7],C=(0,v.useState)(void 0),x=(0,u.Z)(C,2),j=x[0],N=x[1],J=(0,v.useState)({color:"",name:""}),B=(0,u.Z)(J,2),K=B[0],H=B[1],xn=(0,v.useState)(),tn=(0,u.Z)(xn,2),R=tn[0],V=tn[1],Mn=(0,v.useState)([]),en=(0,u.Z)(Mn,2),A=en[0],E=en[1],Z=function(e){V(e),e!=null&&e.label&&H(e.label)};(0,v.useEffect)(function(){localStorage.removeItem("history"),Q([])},[]);function Q(s,e){var i=localStorage.getItem("history"),c=i?JSON.parse(i):{index:-1,items:[]},an={currentAnnotation:e,annotations:s};if(JSON.stringify(c.items[c.index])!=JSON.stringify(an)){var jn=c.index>F?c.index-F:0,Zn=c.items.splice(jn,c.index==0?1:c.index+1);c.items=Zn.concat([an]),c.index<=F?c.index++:c.index=F+1,localStorage.setItem("history",JSON.stringify(c))}}var An=function(){var e=localStorage.getItem("history");if(!!e){var i=JSON.parse(e);if(!!i&&!(i.index>=i.items.length-1)){i.index++,localStorage.setItem("history",JSON.stringify(i));var c=i.items[i.index];V(c.currentAnnotation),E(c.annotations)}}},bn=function(){var e=localStorage.getItem("history");if(!!e){var i=JSON.parse(e);if(!(!i||!i.index)&&!(i.index<=0)){i.index--,localStorage.setItem("history",JSON.stringify(i));var c=i.items[i.index];V(c.currentAnnotation),E(c.annotations)}}},on=function(e){for(var i=[],c=0;c<A.length;c++)A[c].annotationId==e.annotationId?i.push(e):i.push(A[c]);Z(e),E(i)},rn=pn({currentLabel:K,currentTool:j,annotations:A,currentAnnotation:R,onAnnotationAdd:function(e){var i=A.concat([e]);E(i),R||Z(e)},onAnnotationModify:on,onMouseUp:function(){Q(A,R)}}),q=rn;return(0,n.jsxs)(T.Z,{className:S().det,children:[(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(dn,{active:j=="polygon",onClick:function(){N("polygon"),Z(void 0)},children:"Rectangle"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/edit.png",children:"Edit"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){r.change(.1)},children:"Zoom in"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){r.change(-.1)},children:"Zoom out"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){z.default.info("Annotations are saved automatically. You don't need to click save.")},children:"Save"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){N("mover")},children:"Move"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){bn()},children:"Undo"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){An()},children:"Redo"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,n.jsx)("div",{id:"dr",className:S().mainStage,children:(0,n.jsxs)(P.Z,{tip:"loading",spinning:y,children:[(0,n.jsx)("div",{className:S().draw,children:(0,n.jsx)(cn.Z,{width:(a=document.getElementById("dr"))===null||a===void 0?void 0:a.clientWidth,scale:r.curr,annotations:A,currentTool:j,currentAnnotation:R,setCurrentAnnotation:Z,onAnnotationModify:on,onAnnotationModifyComplete:function(){Q(A,R)},onMouseDown:q.onMouseDown,onMouseMove:q.onMouseMove,onMouseUp:q.onMouseUp,createPolygonFunc:rn.createElementsFunc,imgSrc:I.imgSrc})}),(0,n.jsx)("div",{className:S().pblock,children:(0,n.jsxs)("div",{className:S().progress,children:[(0,n.jsx)(L.Z,{percent:d.progress,status:"active"}),d.currIdx," ",(p=d.all)===null||p===void 0?void 0:p.length," ",d.finished]})})]})}),(0,n.jsxs)(k.Z,{disLoc:"right",children:[(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/next.png",onClick:d.nextTask,children:"Next"}),(0,n.jsx)(f.Z,{imgSrc:"./pics/buttons/prev.png",onClick:d.prevTask,children:"Prev"})]}),(0,n.jsxs)("div",{className:S().rightSideBar,children:[(0,n.jsx)("div",{className:S().determinOutline,children:(0,n.jsx)(X.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){Z(void 0)},children:"Determine Outline"})}),(0,n.jsx)(sn.Z,{labels:h.all,onLabelSelect:function(e){h.onSelect(e),H(e),Z(void 0)},onLabelModify:function(){},onLabelDelete:h.remove,onLabelAdd:function(e){return h.create((0,O.Z)((0,O.Z)({},e),{},{projectId:b.curr.projectId}))}}),(0,n.jsx)(ln.Z,{selectedAnnotation:R,annotations:g.all,onAnnotationSelect:function(e){e!=null&&e.delete||Z(e)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(e){E(A.filter(function(i){return i.annotationId!=e.annotationId})),Z(void 0)}})]})]})},Sn=hn}}]);

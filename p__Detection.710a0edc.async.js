(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[18],{41435:function(H,R,o){"use strict";o.d(R,{Z:function(){return T}});var Z=o(94663),Y=o(80112);function w(P){return Function.toString.call(P).indexOf("[native code]")!==-1}var W=o(18597);function O(P,N,$){return(0,W.Z)()?O=Reflect.construct:O=function(p,X,E){var k=[null];k.push.apply(k,X);var h=Function.bind.apply(p,k),L=new h;return E&&(0,Y.Z)(L,E.prototype),L},O.apply(null,arguments)}function T(P){var N=typeof Map=="function"?new Map:void 0;return T=function(g){if(g===null||!w(g))return g;if(typeof g!="function")throw new TypeError("Super expression must either be null or a function");if(typeof N!="undefined"){if(N.has(g))return N.get(g);N.set(g,p)}function p(){return O(g,arguments,(0,Z.Z)(this).constructor)}return p.prototype=Object.create(g.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),(0,Y.Z)(p,g)},T(P)}},72285:function(H){H.exports={det:"det___3GOn8",mainStage:"mainStage___36l4G",draw:"draw___1EIyT",pblock:"pblock___107zJ",progress:"progress___vIcpV",rightSideBar:"rightSideBar___3n2bi",determinOutline:"determinOutline___1p2xS"}},33549:function(H,R,o){"use strict";o.r(R),o.d(R,{default:function(){return vn}});var Z=o(11849),Y=o(57663),w=o(71577),W=o(20228),O=o(11382),T=o(34669),P=o(54458),N=o(34792),$=o(48086),g=o(2824),p=o(67294),X=o(72285),E=o.n(X),k=o(8088),h=o(61541),L=o(44434),q=o(5041),_=o(57436),nn=o(14836),e=o(85893),tn=function(t){return(0,e.jsx)(h.Z,{active:t.active,imgSrc:t.imgSrc||"./pics/buttons/rectangle.png",onClick:t.onClick,children:t.children})},en=tn,on=o(91220),z=o(65031);function rn(n){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function V(n,t){if(!(!n||!t))return{tool:"rectangle",color:n,points:t}}function an(n,t,s,d,f,x,i,a){if(!n||!n.lines||!n.lines[0])return[(0,e.jsx)(e.Fragment,{})];var c=n.lines[0].points,v=n.lines[0].color,l=rn(v);if(!l)return[(0,e.jsx)(e.Fragment,{})];var M=(i==null?void 0:i.annotationId)==n.annotationId,A=M?.5:.1,m=void 0,b=[];return c.forEach(function(S,j){if(!m){m=S;return}b.push((0,e.jsx)(z.Cd,{onMouseDown:function(){(f=="editor"||f=="mover")&&x(n)},draggable:f=="editor",onDragMove:function(C){if(f=="editor"){var I=(C.evt.offsetX+((a==null?void 0:a.x)||0))/d,F=(C.evt.offsetY+((a==null?void 0:a.y)||0))/d;c[j-1]=I,c[j]=F;var J=(0,Z.Z)((0,Z.Z)({},n),{},{lines:[{tool:"rectangle",color:v,points:c}]});t(J)}},onMouseOver:function(){f=="editor"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},x:m,y:S,radius:5,fill:v})),c.length>4&&c.splice(j+1,2),m=void 0}),[(0,e.jsxs)(z.ZA,{children:[(0,e.jsx)(z.UL,{onMouseOver:function(){f=="mover"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){f=="mover"&&x(n)},stroke:v,strokeWidth:2,globalCompositeOperation:"source-over",lineCap:"round",x:c[0],y:c[1],width:c[2]-c[0],height:c[3]-c[1],closed:!0,fill:"rgba(".concat(l.r,", ").concat(l.g,", ").concat(l.b,", ").concat(A,")")}),b]},n.annotationId)]}function sn(n){var t=0,s=(0,on.Z)(n),d;try{for(s.s();!(d=s.n()).done;){var f=d.value;!f||f.annotationId>t&&(t=f.annotationId)}}catch(x){s.e(x)}finally{s.f()}return t}function cn(n){console.log("currentAnnotation",n.currentAnnotation);var t=function(i,a,c,v){var l,M=i.evt.offsetX+a/v,A=i.evt.offsetY+c/v,m=V((l=n.currentLabel)===null||l===void 0?void 0:l.color,[M,A]);!m||n.onAnnotationAdd({tool:"rectangle",annotationId:sn(n.annotations)+1,label:n.currentLabel,lines:[m]})},s=function(i,a,c,v){var l,M;if(!!n.currentAnnotation){var A=(i.evt.offsetX+a)/v,m=(i.evt.offsetY+c)/v,b=n.currentAnnotation.lines||[],S=V((l=n.currentLabel)===null||l===void 0?void 0:l.color,(M=b[0])===null||M===void 0?void 0:M.points.concat([A,m]));if(!!S){var j={tool:"rectangle",annotationId:n.currentAnnotation.annotationId,label:n.currentAnnotation.label,lines:[S]};n.onAnnotationModify(j)}}},d=function(i,a,c,v){n.currentTool=="rectangle"&&(n.currentAnnotation?s(i,a,c,v):t(i,a,c,v))},f=function(){n.currentTool=="rectangle"&&n.onMouseUp()};return{onMouseDown:d,onMouseMove:function(){},onMouseUp:f,createElementsFunc:an}}var ln=o(64322),U=40;function Q(){localStorage.removeItem("history"),G([])}function G(n){var t=localStorage.getItem("history"),s=t?JSON.parse(t):{index:-1,items:[]};if(JSON.stringify(s.items[s.index])!=JSON.stringify(n)){var d=s.index>U?s.index-U:0,f=s.items.splice(d,s.index==0?1:s.index+1);s.items=f.concat([n]),s.index<=U?s.index++:s.index=U+1,localStorage.setItem("history",JSON.stringify(s))}}function un(){var n=localStorage.getItem("history");if(!!n){var t=JSON.parse(n);if(!!t&&!(t.index>=t.items.length-1))return t.index++,localStorage.setItem("history",JSON.stringify(t)),t.items[t.index]}}function dn(){var n=localStorage.getItem("history");if(!!n){var t=JSON.parse(n);if(!(!t||!t.index)&&!(t.index<=0))return t.index--,localStorage.setItem("history",JSON.stringify(t)),t.items[t.index]}}var fn=function(){var t,s=(0,ln.$L)(p.useState,p.useEffect,{label:{oneHot:!0},effectTrigger:{postTaskChange:Q}}),d=(0,g.Z)(s,7),f=d[0],x=d[1],i=d[2],a=d[3],c=d[4],v=d[5],l=d[6],M=(0,p.useState)(void 0),A=(0,g.Z)(M,2),m=A[0],b=A[1],S=(0,p.useState)([]),j=(0,g.Z)(S,2),y=j[0],C=j[1],I=function(r){console.log("setCurrentAnnotation",r,"anno.label:",r==null?void 0:r.label),i.setCurr(r),r!=null&&r.label&&l.setCurr(r.label)};(0,p.useEffect)(function(){Q()},[]);var F=function(r){r.taskId=a.currIdx;for(var D=[],B=0;B<y.length;B++)y[B].annotationId==r.annotationId?D.push(r):D.push(y[B]);I(r),C(D)},J=cn({currentLabel:l.curr,currentTool:m,annotations:y,currentAnnotation:i.curr,onAnnotationAdd:function(r){r.taskId=a.currIdx;var D=y.concat([r]);C(D),i.curr||I(r)},onAnnotationModify:F,onMouseUp:function(){G({annos:y,currAnno:i.curr})}}),K=J;return(0,e.jsxs)(k.Z,{className:E().det,children:[(0,e.jsxs)(L.Z,{children:[(0,e.jsx)(en,{active:m=="rectangle",onClick:function(){b("rectangle"),I(void 0)},children:"Rectangle"}),(0,e.jsx)(h.Z,{active:m=="editor",imgSrc:"./pics/buttons/edit.png",onClick:function(){b("editor")},children:"Edit"}),(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){x.change(.1)},children:"Zoom in"}),(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){x.change(-.1)},children:"Zoom out"}),(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){$.default.info("Annotations are saved automatically. You don't need to click save.")},children:"Save"}),(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){b("mover")},children:"Move"}),(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){var r=dn();!r||(C(r.annos),I(r.currAnno))},children:"Undo"}),(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){var r=un();!r||(C(r.annos),I(r.currAnno))},children:"Redo"}),(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,e.jsx)("div",{id:"dr",className:"mainStage",children:(0,e.jsxs)(O.Z,{tip:"loading",spinning:!!f.curr,children:[(0,e.jsx)("div",{className:"draw",children:(0,e.jsx)(_.Z,{scale:x.curr,annotations:y,currentTool:m,currentAnnotation:i.curr,setCurrentAnnotation:I,onAnnotationModify:F,onAnnotationModifyComplete:function(){G({annos:y,currAnno:i.curr})},onMouseDown:K.onMouseDown,onMouseMove:K.onMouseMove,onMouseUp:K.onMouseUp,createRectangleFunc:J.createElementsFunc,imgSrc:c.imgSrc})}),(0,e.jsx)("div",{className:"pblock",children:(0,e.jsxs)("div",{className:"progress",children:[(0,e.jsx)(P.Z,{className:"progressBar",percent:a.progress,status:"active",showInfo:!1})," ",(0,e.jsxs)("span",{className:"progressDesc",children:["Current labeling ",a.currIdx==null?1:a.currIdx+1," of"," ",(t=a.all)===null||t===void 0?void 0:t.length,". Already labeled ",a.finished(v.progress)||0,"."]})]})}),(0,e.jsx)("div",{className:"prevTask",onClick:a.prevTask}),(0,e.jsx)("div",{className:"nextTask",onClick:a.nextTask})]})}),(0,e.jsxs)(L.Z,{disLoc:"right",children:[(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,e.jsx)(h.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"})]}),(0,e.jsxs)("div",{className:"rightSideBar",children:[(0,e.jsx)("div",{className:"determinOutline",children:(0,e.jsx)(w.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){i.setCurr(void 0)},children:"Determine Outline"})}),(0,e.jsx)(q.Z,{labels:l.all,activeIds:l.activeIds,onLabelSelect:function(r){l.onSelect(r)},onLabelModify:function(){},onLabelDelete:l.remove,onLabelAdd:function(r){return l.create((0,Z.Z)((0,Z.Z)({},r),{},{projectId:v.curr.projectId}))}}),(0,e.jsx)(nn.Z,{annotations:i.all,activeIds:i.activeIds,onAnnotationSelect:i.setCurr,onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:i.remove})]})]})},vn=fn}}]);

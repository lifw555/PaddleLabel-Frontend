(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[18],{41435:function(X,w,r){"use strict";r.d(w,{Z:function(){return E}});var B=r(94663),$=r(80112);function G(O){return Function.toString.call(O).indexOf("[native code]")!==-1}var _=r(18597);function D(O,M,P){return(0,_.Z)()?D=Reflect.construct:D=function(C,K,J){var f=[null];f.push.apply(f,K);var F=Function.bind.apply(C,f),U=new F;return J&&(0,$.Z)(U,J.prototype),U},D.apply(null,arguments)}function E(O){var M=typeof Map=="function"?new Map:void 0;return E=function(u){if(u===null||!G(u))return u;if(typeof u!="function")throw new TypeError("Super expression must either be null or a function");if(typeof M!="undefined"){if(M.has(u))return M.get(u);M.set(u,C)}function C(){return D(u,arguments,(0,B.Z)(this).constructor)}return C.prototype=Object.create(u.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),(0,$.Z)(C,u)},E(O)}},72285:function(X){X.exports={det:"det___3GOn8",mainStage:"mainStage___36l4G",draw:"draw___1EIyT",pblock:"pblock___107zJ",progress:"progress___vIcpV",rightSideBar:"rightSideBar___3n2bi",determinOutline:"determinOutline___1p2xS"}},33549:function(X,w,r){"use strict";r.r(w),r.d(w,{default:function(){return pn}});var B=r(11849),$=r(20228),G=r(11382),_=r(34669),D=r(54458),E=r(34792),O=r(48086),M=r(91220),P=r(2824),u=r(67294),C=r(72285),K=r.n(C),J=r(8088),f=r(61541),F=r(44434),U=r(5041),en=r(57436),on=r(14836),e=r(85893),rn=function(t){return(0,e.jsx)(f.Z,{active:t.active,imgSrc:t.imgSrc||"./pics/buttons/rectangle.png",onClick:t.onClick,children:t.children})},an=rn,W=r(65031);function sn(n){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function cn(n){if(!(!n||n.length<2))return{xmin:n[0],ymin:n[1],xmax:n[2]||void 0,ymax:n[3]||void 0}}function dn(n,t,c,d,i,y,v){if(!n||!n.points||!n.label||!n.label.color)return[(0,e.jsx)(e.Fragment,{})];var a=n.points,l=n.label.color,g=sn(l);if(!g)return[(0,e.jsx)(e.Fragment,{})];var h=(v==null?void 0:v.annotationId)==n.annotationId,x=h?.5:.1,S=a.xmax!=null&&a.ymax!=null?(0,e.jsx)(W.UL,{onMouseOver:function(){i=="mover"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){i=="mover"&&y(n)},stroke:l,strokeWidth:2,globalCompositeOperation:"source-over",lineCap:"round",x:a.xmin,y:a.ymin,width:a.xmax-a.xmin,height:a.ymax-a.ymin,closed:!0,fill:"rgba(".concat(g.r,", ").concat(g.g,", ").concat(g.b,", ").concat(x,")")}):(0,e.jsx)(e.Fragment,{});function k(I){if(!I&&(a.xmax==null||a.ymax==null))return(0,e.jsx)(e.Fragment,{});var N=function(m){if(i=="editor"){var H=m.target.x(),Y=m.target.y();I?(a.xmin=H,a.ymin=Y):(a.xmax=H,a.ymax=Y);var A=(0,B.Z)((0,B.Z)({},n),{},{points:a});t(A)}};return(0,e.jsx)(W.Cd,{onMouseDown:function(){(i=="editor"||i=="mover")&&y(n)},draggable:i=="editor",onDragMove:N,onDragEnd:N,onMouseOver:function(){i=="editor"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},x:I?a.xmin:a.xmax,y:I?a.ymin:a.ymax,radius:5,fill:l})}return[(0,e.jsxs)(W.ZA,{children:[S,k(!0),k(!1)]},n.annotationId)]}function ln(n){var t=1;if(!n||n.length==0)return t;var c=(0,M.Z)(n),d;try{for(c.s();!(d=c.n()).done;){var i=d.value;i.frontendId&&t<=i.frontendId&&(t=i.frontendId+1)}}catch(y){c.e(y)}finally{c.f()}return t}function un(n){var t=function(v,a,l,g){var h=(v.evt.offsetX+a)/g,x=(v.evt.offsetY+l)/g,S=cn([h,x]);!S||n.onAnnotationAdd({frontendId:ln(n.annotations),type:"rectangle",label:n.currentLabel,points:S})},c=function(v,a,l,g){if(!(!n.currentAnnotation||!n.currentAnnotation.points)){var h=(v.evt.offsetX+a)/g,x=(v.evt.offsetY+l)/g,S=n.currentAnnotation.points;if(!!S){S.xmax=h,S.ymax=x;var k={type:"rectangle",frontendId:n.currentAnnotation.frontendId,label:n.currentAnnotation.label,points:S};n.onAnnotationModify(k)}}},d=function(v,a,l,g){n.currentTool=="rectangle"&&(n.currentAnnotation?c(v,a,l,g):t(v,a,l,g))},i=function(){n.currentTool=="rectangle"&&n.onMouseUp()};return{onMouseDown:d,onMouseMove:function(){},onMouseUp:i,createElementsFunc:dn}}var fn=r(64322),z=40;function vn(){localStorage.removeItem("history"),V([])}function V(n){var t=localStorage.getItem("history"),c=t?JSON.parse(t):{index:-1,items:[]};if(JSON.stringify(c.items[c.index])!=JSON.stringify(n)){var d=c.index>z?c.index-z:0,i=c.items.splice(d,c.index==0?1:c.index+1);c.items=i.concat([n]),c.index<=z?c.index++:c.index=z+1,localStorage.setItem("history",JSON.stringify(c))}}function gn(){var n=localStorage.getItem("history");if(!!n){var t=JSON.parse(n);if(!!t&&!(t.index>=t.items.length-1))return t.index++,localStorage.setItem("history",JSON.stringify(t)),t.items[t.index]}}function mn(){var n=localStorage.getItem("history");if(!!n){var t=JSON.parse(n);if(!(!t||!t.index)&&!(t.index<=0))return t.index--,localStorage.setItem("history",JSON.stringify(t)),t.items[t.index]}}var p=r(48971),xn=function(){var t,c=(0,fn.$L)(u.useState,u.useEffect,{label:{oneHot:!0},effectTrigger:{postTaskChange:vn}}),d=(0,P.Z)(c,10),i=d[0],y=d[1],v=d[2],a=d[3],l=d[4],g=d[5],h=d[6],x=d[7],S=d[8],k=d[9],I=(0,u.useState)(),N=(0,P.Z)(I,2),j=N[0],m=N[1],H=(0,u.useState)([]),Y=(0,P.Z)(H,2),A=Y[0],R=Y[1],yn=function(o){if(!o.frontendId)throw new Error("addAnnotation, Annotation frontendId not generated: "+JSON.stringify(o));A.push(o),R(A),m(o)},hn=function(o){if(!o.frontendId)throw new Error("addAnnotation, Annotation frontendId not generated: "+JSON.stringify(o));var Z=[],b=(0,M.Z)(A),L;try{for(b.s();!(L=b.n()).done;){var T=L.value;T.frontendId==o.frontendId?Z.push(o):Z.push(T)}}catch(q){b.e(q)}finally{b.f()}console.log("modifyAnnotation, newAnnos:",Z,"anno:",o),R(Z),m(o)},Sn=function(o){if(!o.frontendId)throw new Error("addAnnotation, Annotation frontendId not generated: "+JSON.stringify(o));var Z=[],b=(0,M.Z)(A),L;try{for(b.s();!(L=b.n()).done;){var T=L.value;T.frontendId!=o.frontendId&&Z.push(T)}}catch(q){b.e(q)}finally{b.f()}R(Z),m(void 0)},Nn=function(o){!o||(console.log("modifyAnnotation",o,"anno.label:",o==null?void 0:o.label),o.taskId=l.curr.taskId,o.dataId=g.curr.dataId,a.modify(o))},nn=function(o){console.log("onAnnotationModify"),hn(o)},tn=un({currentLabel:x.curr,currentTool:i.curr,annotations:A,currentAnnotation:j,onAnnotationAdd:yn,onAnnotationModify:nn,onMouseUp:function(){V({annos:A,currAnno:j})}}),Q=tn,An=(0,p.YB)().formatMessage({id:"pages.toolBar.rectangle"}),Mn=(0,p.YB)().formatMessage({id:"pages.toolBar.zoomIn"}),In=(0,p.YB)().formatMessage({id:"pages.toolBar.zoomOut"}),jn=(0,p.YB)().formatMessage({id:"pages.toolBar.move"}),bn=(0,p.YB)().formatMessage({id:"pages.toolBar.unDo"}),Cn=(0,p.YB)().formatMessage({id:"pages.toolBar.reDo"}),On=(0,p.YB)().formatMessage({id:"pages.toolBar.save"}),Zn=(0,p.YB)().formatMessage({id:"pages.toolBar.edit"}),Bn=(0,p.YB)().formatMessage({id:"pages.toolBar.clearMark"}),Dn=(0,p.YB)().formatMessage({id:"pages.toolBar.undef"}),kn=(0,p.YB)().formatMessage({id:"pages.toolBar.divideData"}),Pn=(0,p.YB)().formatMessage({id:"pages.toolBar.export"});return(0,e.jsxs)(J.Z,{className:K().det,children:[(0,e.jsxs)(F.Z,{children:[(0,e.jsx)(an,{active:i.curr=="rectangle",onClick:function(){if(!x.curr){O.default.error("Please choose a label category first!");return}i.setCurr("rectangle"),m(void 0)},children:An}),(0,e.jsx)(f.Z,{active:i.curr=="editor",imgSrc:"./pics/buttons/edit.png",onClick:function(){i.setCurr("editor")},children:Zn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){v.change(.1)},children:Mn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){v.change(-.1)},children:In}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){O.default.info("Annotations are saved automatically. You don't need to click save.")},children:On}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/move.png",active:i.curr=="mover",onClick:function(){i.setCurr("mover")},children:jn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){var o=mn();!o||(m(o.currAnno),R(o.annos))},children:bn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){var o=gn();!o||(m(o.currAnno),R(o.annos))},children:Cn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/clear_mark.png",onClick:function(){return console.log("clear")},children:Bn})]}),(0,e.jsx)("div",{id:"dr",className:"mainStage",children:(0,e.jsxs)(G.Z,{tip:"loading",spinning:!!y.curr,children:[(0,e.jsx)("div",{className:"draw",children:(0,e.jsx)(en.Z,{scale:v.curr,annotations:A,currentTool:i.curr,currentAnnotation:j,setCurrentAnnotation:m,onAnnotationModify:nn,onAnnotationModifyComplete:function(){V({annos:A,currAnno:j})},onMouseDown:Q.onMouseDown,onMouseMove:Q.onMouseMove,onMouseUp:Q.onMouseUp,createRectangleFunc:tn.createElementsFunc,imgSrc:g.imgSrc})}),(0,e.jsx)("div",{className:"pblock",children:(0,e.jsxs)("div",{className:"progress",children:[(0,e.jsx)(D.Z,{className:"progressBar",percent:h.progress,status:"active",showInfo:!1})," ",(0,e.jsxs)("span",{className:"progressDesc",children:["Current labeling ",l.currIdx==null?1:l.currIdx+1," of"," ",(t=l.all)===null||t===void 0?void 0:t.length,". Already labeled ",l.finished(h.progress)||0,"."]})]})}),(0,e.jsx)("div",{className:"prevTask",onClick:l.prevTask}),(0,e.jsx)("div",{className:"nextTask",onClick:l.nextTask})]})}),(0,e.jsxs)(F.Z,{disLoc:"right",children:[(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){S(h.curr.projectId,{train:.5,validation:.3,test:.2})},children:kn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/export.png",onClick:function(){k(h.curr.projectId,"/home/lin/Desktop/data/pplabel/export/")},children:Pn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){m(void 0)},children:Dn})]}),(0,e.jsxs)("div",{className:"rightSideBar",children:[(0,e.jsx)(U.Z,{labels:x.all,activeIds:x.activeIds,onLabelSelect:function(o){x.onSelect(o),m(void 0)},onLabelModify:function(){},onLabelDelete:x.remove,onLabelAdd:function(o){return x.create((0,B.Z)((0,B.Z)({},o),{},{projectId:h.curr.projectId}))}}),(0,e.jsx)(on.Z,{annotations:A,currAnnotation:j,onAnnotationSelect:m,onAnnotationAdd:function(){m(void 0)},onAnnotationModify:function(){},onAnnotationDelete:function(o){Sn(o)}})]})]})},pn=xn}}]);

(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[18],{41435:function(k,Z,n){"use strict";n.d(Z,{Z:function(){return g}});var O=n(94663),T=n(80112);function D(a){return Function.toString.call(a).indexOf("[native code]")!==-1}var p=n(18597);function S(a,i,c){return(0,p.Z)()?S=Reflect.construct:S=function(C,K,j){var L=[null];L.push.apply(L,K);var w=Function.bind.apply(C,L),x=new w;return j&&(0,T.Z)(x,j.prototype),x},S.apply(null,arguments)}function g(a){var i=typeof Map=="function"?new Map:void 0;return g=function(l){if(l===null||!D(l))return l;if(typeof l!="function")throw new TypeError("Super expression must either be null or a function");if(typeof i!="undefined"){if(i.has(l))return i.get(l);i.set(l,C)}function C(){return S(l,arguments,(0,O.Z)(this).constructor)}return C.prototype=Object.create(l.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),(0,T.Z)(C,l)},g(a)}},85024:function(k){k.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function(k){k.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},72285:function(k){k.exports={det:"det___3GOn8",mainStage:"mainStage___36l4G",draw:"draw___1EIyT",pblock:"pblock___107zJ",progress:"progress___vIcpV",rightSideBar:"rightSideBar___3n2bi",determinOutline:"determinOutline___1p2xS"}},57406:function(k,Z,n){"use strict";n.d(Z,{pL:function(){return T},oo:function(){return D}});var O=n(91220);function T(g){var a=0;if(!g)return a;var i=(0,O.Z)(g),c;try{for(i.s();!(c=i.n()).done;){var l=c.value;!l||!l.frontendId||l.frontendId>a&&(a=l.frontendId)}}catch(C){i.e(C)}finally{i.f()}return a}function D(g){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function p(g){var a=g.toString(16);return a.length==1?"0"+a:a}function S(g,a,i){return"#"+p(g)+p(a)+p(i)}},14836:function(k,Z,n){"use strict";n.d(Z,{Z:function(){return q}});var O=n(54421),T=n(38272),D=n(57663),p=n(71577),S=n(91220),g=n(67294),a=n(56159),i=n.n(a),c=n(49111),l=n(19650),C=n(2824),K=n(11849),j=n(85024),L=n.n(j),w=n(63097),x=n(85893),tn=function(y){var B=(0,K.Z)({},y.annotation),Q=(0,g.useState)(B.invisible),V=(0,C.Z)(Q,2),J=V[0],W=V[1],t=(0,g.useState)(0),M=(0,C.Z)(t,2),m=M[0],A=M[1];(0,g.useEffect)(function(){W(y.annotation.invisible)},[y.annotation.invisible]);var s=(0,x.jsxs)(T.ZP.Item,{className:"".concat(L().listItem," ").concat(y.active?L().listItemActive:""),unselectable:"on",onClick:function(){y.onClick(B)},children:[(0,x.jsxs)(l.Z,{align:"center",size:5,children:[(0,x.jsx)("a",{className:L().eye,style:{backgroundImage:J?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(d){d.stopPropagation(),W(!J),y.onAnnotationModify(B)}})," ",(0,x.jsx)("span",{className:L().annotationId,children:B.frontendId}),(0,x.jsx)("span",{className:L().labelName,children:B.label.name}),(0,x.jsx)(w.Z,{color:B.label.color})]}),(0,x.jsx)("a",{className:L().delete,onClick:function(d){d.stopPropagation();var f=new Date().getTime();f-m<300||(A(f),y.onAnnotationDelete(B))}})]});return s},en=tn,F=n(48971),G=function(y){var B=(0,F.YB)(),Q=B.formatMessage({id:"component.PPAnnotationList.annotationList"}),V=B.formatMessage({id:"component.PPAnnotationList.addAnnotation"}),J=new Set,W=[],t=(0,S.Z)(y.annotations),M;try{for(t.s();!(M=t.n()).done;){var m=M.value;J.has(m.frontendId)||(W.push(m),J.add(m.frontendId))}}catch(A){t.e(A)}finally{t.f()}return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(T.ZP,{className:i().labelList,size:"large",header:(0,x.jsx)("div",{className:i().listHeader,children:Q}),bordered:!0,dataSource:W,renderItem:function(s){var v;return(0,x.jsx)(en,{onClick:y.onAnnotationSelect,annotation:s,active:s.frontendId==((v=y.currAnnotation)===null||v===void 0?void 0:v.frontendId),onAnnotationDelete:y.onAnnotationDelete,onAnnotationModify:y.onAnnotationModify})},footer:function(){return y.onAnnotationAdd?(0,x.jsx)("div",{children:(0,x.jsx)(p.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){y.onAnnotationAdd()},block:!0,children:V})}):(0,x.jsx)("div",{})}})})},q=G},10137:function(k,Z,n){"use strict";var O=n(34669),T=n(54458),D=n(67294),p=n(85893),S=function(a){var i,c;return(0,p.jsxs)("div",{className:"progress",children:[(0,p.jsx)(T.Z,{className:"progressBar",percent:Math.ceil(a.project.finished/((i=a.task.all)===null||i===void 0?void 0:i.length)*100),status:"active",showInfo:!1})," ",(0,p.jsxs)("span",{className:"progressDesc",children:["Current labeling ",a.task.currIdx==null?1:a.task.currIdx+1," of"," ",(c=a.task.all)===null||c===void 0?void 0:c.length,". Already labeled ",a.project.finished||0,"."]})]})};Z.Z=S},91861:function(k,Z,n){"use strict";n.d(Z,{Ad:function(){return p},k3:function(){return S},Vd:function(){return g},td:function(){return a}});var O=n(34792),T=n(48086),D=40;function p(){localStorage.removeItem("history"),S([])}function S(i){var c=localStorage.getItem("history"),l=c?JSON.parse(c):{index:-1,items:[]};if(JSON.stringify(l.items[l.index])!=JSON.stringify(i)){var C=l.index>D?l.index-D:0,K=l.items.splice(C,l.index==0?1:l.index+1);l.items=K.concat([i]),l.index<=D?l.index++:l.index=D+1,localStorage.setItem("history",JSON.stringify(l))}}function g(){var i=localStorage.getItem("history");if(!!i){var c=JSON.parse(i);if(!!c){if(c.index>=c.items.length-1){T.default.error("No next history!");return}return c.index++,localStorage.setItem("history",JSON.stringify(c)),c.items[c.index]}}}function a(){var i=localStorage.getItem("history");if(!!i){var c=JSON.parse(i);if(console.log("history",c),!c||!c.index||c.index<=1){T.default.error("No previous history!");return}return c.index--,localStorage.setItem("history",JSON.stringify(c)),c.items[c.index]}}},58857:function(k,Z,n){"use strict";n.r(Z),n.d(Z,{default:function(){return W}});var O=n(11849),T=n(20228),D=n(11382),p=n(34792),S=n(48086),g=n(91220),a=n(2824),i=n(67294),c=n(48971),l=n(72285),C=n.n(l),K=n(8088),j=n(61541),L=n(44434),w=n(5041),x=n(57436),tn=n(14836),en=n(45194),F=n(91861),G=n(65031),q=n(57406),r=n(85893);function y(t){if(!(!t||t.length<2))return t.join(",")}function B(t){var M,m=t.annotation;if(!m||!m.result||!m.label||!m.label.color)return(0,r.jsx)(r.Fragment,{});var A=m.result.split(","),s={xmin:parseInt(A[0]),ymin:parseInt(A[1]),xmax:A.length>=3?parseInt(A[2]):void 0,ymax:A.length>=4?parseInt(A[3]):void 0},v=m.label.color,d=(0,q.oo)(v);if(!d)return(0,r.jsx)(r.Fragment,{});var f=((M=t.currentAnnotation)===null||M===void 0?void 0:M.frontendId)==m.frontendId,b=f?.5:.1,N=s.xmax!=null&&s.ymax!=null?(0,r.jsx)(G.UL,{onMouseOver:function(){t.currentTool=="editor"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){t.currentTool=="editor"&&t.onSelect(m)},stroke:v,strokeWidth:2/t.scale,globalCompositeOperation:"source-over",lineCap:"round",x:s.xmin,y:s.ymin,width:s.xmax-s.xmin,height:s.ymax-s.ymin,closed:!0,fill:"rgba(".concat(d.r,", ").concat(d.g,", ").concat(d.b,", ").concat(b,")")}):(0,r.jsx)(r.Fragment,{});function e(R){if(!R&&(s.xmax==null||s.ymax==null))return(0,r.jsx)(r.Fragment,{});var z=function(h){var _;if(t.currentTool=="editor"){var P=(_=t.stageRef)===null||_===void 0?void 0:_.current,E=P.findOne(".baseImage"),X=!1,U=h.target.x();U>E.width()/2&&(U=E.width()/2,X=!0),U<-E.width()/2&&(U=-E.width()/2,X=!0);var H=h.target.y();H>E.height()/2&&(H=E.height()/2,X=!0),H<-E.height()/2&&(H=-E.height()/2,X=!0),X&&h.target.setPosition({x:U,y:H}),R?(s.xmin=U,s.ymin=H):(s.xmax=U,s.ymax=H);var on=(0,O.Z)((0,O.Z)({},m),{},{result:"".concat(s.xmin,",").concat(s.ymin,",").concat(s.xmax,",").concat(s.ymax)});t.onDrag(on)}};return(0,r.jsx)(G.Cd,{onMouseDown:function(){t.currentTool=="editor"&&t.onSelect(m)},draggable:t.currentTool=="editor",onDragMove:z,onDragEnd:z,onMouseOver:function(){var h;t.currentTool=="editor"&&(h=t.stageRef)!==null&&h!==void 0&&h.current&&(t.stageRef.current.container().style.cursor="cell")},onMouseOut:function(){var h;(h=t.stageRef)!==null&&h!==void 0&&h.current&&(t.stageRef.current.container().style.cursor="default")},x:R?s.xmin:s.xmax,y:R?s.ymin:s.ymax,radius:5/t.scale,fill:v})}return(0,r.jsxs)(G.ZA,{children:[N,e(!0),e(!1)]},m.annotationId)}function Q(t){var M=function(d,f){var b,N=y([d,f]);!N||!t.dataId||(console.log(N),t.onAnnotationAdd({dataId:t.dataId,type:"rectangle",frontendId:(0,q.pL)(t.annotations)+1,label:t.currentLabel,labelId:(b=t.currentLabel)===null||b===void 0?void 0:b.labelId,result:N}))},m=function(d,f){var b;if(!(!t.currentAnnotation||!t.currentAnnotation.result||!((b=t.currentLabel)!==null&&b!==void 0&&b.color))){var N=t.currentAnnotation.result+",".concat(d,",").concat(f),e=(0,O.Z)((0,O.Z)({},t.currentAnnotation),{},{result:N});t.modifyAnnoByFrontendId(e)}},A=function(d){if(t.currentTool=="rectangle"){var f=d.mouseX+d.offsetX,b=d.mouseY+d.offsetY;console.log("currentAnnotation:",t.currentAnnotation),t.currentAnnotation?m(f,b):M(f,b)}},s=function(){t.currentTool!="rectangle"&&t.currentTool!="editor"||t.onMouseUp&&t.onMouseUp()};return{onMouseDown:A,onMouseMove:function(){},onMouseUp:s,drawAnnotation:B}}var V=n(10137),J=function(){var M,m=(0,i.useState)(0),A=(0,a.Z)(m,2),s=A[0],v=A[1],d=(0,en.$L)(i.useState,i.useEffect,{effectTrigger:{postTaskChange:function(o,I){(0,F.Ad)(),(0,F.k3)({annos:I})}},label:{oneHot:!0,postSelect:function(){e.setCurr(void 0),v(0)},preUnsetCurr:_},tool:{defaultTool:"mover"}}),f=d.tool,b=d.loading,N=d.scale,e=d.annotation,R=d.task,z=d.data,Y=d.project,h=d.label;function _(){e.setCurr(void 0),v(0),console.log("preCurrLabelUnset"),f.setCurr("mover")}var P=function(o){console.log("setCurrentAnnotation"),e.setCurr(o),o!=null&&o.frontendId?v(o.frontendId):v(0)},E=function(o){var I=[],nn=(0,g.Z)(e.all),rn;try{for(nn.s();!(rn=nn.n()).done;){var an=rn.value;an.frontendId==o.frontendId?I.push(o):I.push(an)}}catch(xn){nn.e(xn)}finally{nn.f()}P(o),e.setAll(I)};(0,i.useEffect)(function(){(0,F.Ad)()},[]);function X(){var u;(0,F.k3)({annos:e.all,currAnno:e.curr}),console.log("finish before",e.curr),!!e.curr&&(!e.curr.result||e.curr.result.split(",").length!=4||((e==null||(u=e.curr)===null||u===void 0?void 0:u.annotationId)==null?(console.log("finish",z.curr,e.curr),e.create(e==null?void 0:e.curr)):e.update(e==null?void 0:e.curr),console.log("finish after",e.curr),S.default.success("Save Success!"),console.log("tool",f.curr),f.curr=="rectangle"&&P(void 0)))}var U={dataId:(M=z.curr)===null||M===void 0?void 0:M.dataId,currentLabel:h.curr,scale:N.curr,currentTool:f.curr,annotations:e.all,currentAnnotation:e.curr,onAnnotationAdd:function(o){var I=e.all.concat([o]);e.setAll(I),P(o)},onAnnotationModify:E,modifyAnnoByFrontendId:E,onMouseUp:X,frontendIdOps:{frontendId:s,setFrontendId:v}},H=Q(U),on={polygon:H,brush:void 0},$=(0,c.YB)(),ln=$.formatMessage({id:"pages.toolBar.rectangle"}),sn=$.formatMessage({id:"pages.toolBar.zoomIn"}),cn=$.formatMessage({id:"pages.toolBar.zoomOut"}),un=$.formatMessage({id:"pages.toolBar.move"}),dn=$.formatMessage({id:"pages.toolBar.unDo"}),fn=$.formatMessage({id:"pages.toolBar.reDo"}),vn=$.formatMessage({id:"pages.toolBar.save"}),gn=$.formatMessage({id:"pages.toolBar.edit"}),mn=$.formatMessage({id:"pages.toolBar.clearMark"});return(0,r.jsxs)(K.Z,{className:C().det,children:[(0,r.jsxs)(L.Z,{children:[(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/rectangle.png",active:f.curr=="rectangle",onClick:function(){if(!h.curr){S.default.error("Please choose a label category first!");return}f.setCurr("rectangle"),P(void 0)},children:ln}),(0,r.jsx)(j.Z,{active:f.curr=="editor",imgSrc:"./pics/buttons/edit.png",onClick:function(){f.setCurr("editor")},children:gn}),(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){N.change(.1)},children:sn}),(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){N.change(-.1)},children:cn}),(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){var o;e.pushToBackend((o=z.curr)===null||o===void 0?void 0:o.dataId)},children:vn}),(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/move.png",active:f.curr=="mover",onClick:function(){f.setCurr("mover")},children:un}),(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){var o=(0,F.td)();if(o){var I;e.setAll(o.annos),P(o.currAnno),e.pushToBackend((I=z.curr)===null||I===void 0?void 0:I.dataId,o.annos)}},children:dn}),(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){var o=(0,F.Vd)();o&&(e.setAll(o.annos),P(o.currAnno))},children:fn}),(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/clear_mark.png",onClick:function(){e.clear(),(0,F.k3)({annos:[]})},children:mn})]}),(0,r.jsx)("div",{id:"dr",className:"mainStage",children:(0,r.jsxs)(D.Z,{tip:"loading",spinning:!!b.curr,children:[(0,r.jsx)("div",{className:"draw",children:(0,r.jsx)(x.Z,{scale:N.curr,annotations:e.all,currentTool:f.curr,currentAnnotation:e.curr,setCurrentAnnotation:P,onAnnotationModify:E,onAnnotationModifyComplete:function(){},frontendIdOps:{frontendId:s,setFrontendId:v},imgSrc:z.imgSrc,transparency:100,onAnnotationAdd:function(o){var I=e.all.concat([o]);e.setAll(I),e.curr||P(o)},drawTool:on})}),(0,r.jsx)("div",{className:"pblock",children:(0,r.jsx)(V.Z,{task:R,project:Y})}),(0,r.jsx)("div",{className:"prevTask",onClick:function(){!R.prevTask()||P(void 0)}}),(0,r.jsx)("div",{className:"nextTask",onClick:function(){!R.nextTask()||P(void 0)}})]})}),(0,r.jsx)(L.Z,{disLoc:"right",children:(0,r.jsx)(j.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){c.m8.push("/project_overview?projectId=".concat(Y.curr.projectId))},children:"Project Overview"})}),(0,r.jsxs)("div",{className:"rightSideBar",children:[(0,r.jsx)(w.Z,{labels:h.all,activeIds:h.activeIds,onLabelSelect:h.onSelect,onLabelModify:function(){},onLabelDelete:h.remove,onLabelAdd:function(o){h.create((0,O.Z)((0,O.Z)({},o),{},{projectId:Y.curr.projectId})).then(function(I){P(void 0),h.setCurr(I)})}}),(0,r.jsx)(tn.Z,{currAnnotation:e.curr,annotations:e.all,onAnnotationSelect:function(o){o!=null&&o.delete||P(o),console.log(o)},onAnnotationAdd:function(){console.log("onAnnotationAdd"),P(void 0)},onAnnotationModify:function(){},onAnnotationDelete:function(o){e.setAll(e.all.filter(function(I){return I.frontendId!=o.frontendId})),P(void 0),e.remove(o)}})]})]})},W=J}}]);

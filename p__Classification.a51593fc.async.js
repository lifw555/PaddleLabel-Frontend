(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[672],{41435:function(A,P,e){"use strict";e.d(P,{Z:function(){return m}});var v=e(94663),D=e(80112);function h(u){return Function.toString.call(u).indexOf("[native code]")!==-1}var T=e(18597);function d(u,l,p){return(0,T.Z)()?d=Reflect.construct:d=function(s,L,g){var a=[null];a.push.apply(a,L);var E=Function.bind.apply(s,a),M=new E;return g&&(0,D.Z)(M,g.prototype),M},d.apply(null,arguments)}function m(u){var l=typeof Map=="function"?new Map:void 0;return m=function(o){if(o===null||!h(o))return o;if(typeof o!="function")throw new TypeError("Super expression must either be null or a function");if(typeof l!="undefined"){if(l.has(o))return l.get(o);l.set(o,s)}function s(){return d(o,arguments,(0,v.Z)(this).constructor)}return s.prototype=Object.create(o.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),(0,D.Z)(s,o)},m(u)}},73199:function(){},29214:function(A,P,e){"use strict";e.r(P);var v=e(8870),D=e(20228),h=e(11382),T=e(34669),d=e(54458),m=e(34792),u=e(48086),l=e(2824),p=e(67294),o=e(48971),s=e(73199),L=e.n(s),g=e(8088),a=e(61541),E=e(44434),M=e(5041),y=e(57436),S=e(50501),n=e(85893),R=function(){var I,Z=(0,S.$L)(p.useState,p.useEffect,{label:{oneHot:!1,postSetCurr:V},tool:{defaultTool:"mover"},effectTrigger:{postTaskChange:$,postProjectChanged:H}}),i=(0,l.Z)(Z,8),b=i[0],x=i[1],B=i[2],O=i[3],c=i[4],j=i[5],C=i[6],r=i[7],_=(0,o.YB)(),W=_.formatMessage({id:"pages.toolBar.zoomIn"}),K=_.formatMessage({id:"pages.toolBar.zoomOut"}),U=_.formatMessage({id:"pages.toolBar.move"}),N=_.formatMessage({id:"pages.toolBar.save"}),k=_.formatMessage({id:"pages.toolBar.autoSave"}),F=_.formatMessage({id:"pages.toolBar.divideData"}),z=_.formatMessage({id:"pages.toolBar.export"});function H(){C.curr.labelFormat=="single_class"&&r.setOneHot(!0)}function V(t){if(r.isActive(t))r.isOneHot&&O.clear(),O.create({taskId:c.curr.taskId,labelId:t.labelId,dataId:j.curr.dataId});else{var f=O.all.filter(function(Y){return Y.labelId==t.labelId})[0];O.remove(f.annotationId)}}function $(t,f){x.setCurr(!0),!(!t||!f)&&(r.initActive(f),x.setCurr(!1))}return(0,n.jsxs)(g.Z,{className:L().classes,children:[(0,n.jsxs)(E.Z,{children:[(0,n.jsx)(a.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){B.change(.1)},children:W}),(0,n.jsx)(a.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){B.change(-.1)},children:K}),(0,n.jsx)(a.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){u.default.success(k)},children:N}),(0,n.jsx)(a.Z,{imgSrc:"./pics/buttons/move.png",active:b.curr=="mover",onClick:function(){b.setCurr("mover")},children:U})]}),(0,n.jsx)("div",{id:"dr",className:"mainStage",children:(0,n.jsxs)(h.Z,{tip:"loading",spinning:x.curr,children:[(0,n.jsx)("div",{className:"draw",children:(0,n.jsx)(y.Z,{scale:B.curr,currentTool:b.curr,setCurrentAnnotation:function(){},onAnnotationModify:function(){},onAnnotationModifyComplete:function(){},imgSrc:j.imgSrc})}),(0,n.jsx)("div",{className:"pblock",children:(0,n.jsxs)("div",{className:"progress",children:[(0,n.jsx)(d.Z,{className:"progressBar",percent:C.progress,status:"active",showInfo:!1})," ",(0,n.jsxs)("span",{className:"progressDesc",children:["Current labeling ",c.currIdx==null?1:c.currIdx+1," of"," ",(I=c.all)===null||I===void 0?void 0:I.length,". Already labeled ",c.finished(C.progress)||0,"."]})]})}),(0,n.jsx)("div",{className:"prevTask",onClick:c.prevTask}),(0,n.jsx)("div",{className:"nextTask",onClick:c.nextTask})]})}),(0,n.jsxs)(E.Z,{disLoc:"right",children:[(0,n.jsx)(a.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){setDivideModalVisible(!0)},children:F}),(0,n.jsx)(a.Z,{imgSrc:"./pics/buttons/export.png",onClick:function(){setExportModalVisible(!0)},children:z})]}),(0,n.jsx)("div",{className:"rightSideBar",children:(0,n.jsx)(M.Z,{labels:r.all,activeIds:r.activeIds,onLabelSelect:r.onSelect,onLabelAdd:function(f){return r.create((0,v.Z)((0,v.Z)({},f),{},{projectId:C.curr.projectId}))},onLabelDelete:r.remove,onLabelModify:function(){},hideColorPicker:!0,hideEye:!0})})]})};P.default=R}}]);

(self.webpackChunkPaddleLabel_Frontend=self.webpackChunkPaddleLabel_Frontend||[]).push([[672],{41435:function(j,d,n){"use strict";n.d(d,{Z:function(){return i}});var P=n(94663),v=n(80112);function E(s){return Function.toString.call(s).indexOf("[native code]")!==-1}var p=n(18597);function r(s,o,c){return(0,p.Z)()?r=Reflect.construct:r=function(l,f,M){var O=[null];O.push.apply(O,f);var T=Function.bind.apply(l,O),D=new T;return M&&(0,v.Z)(D,M.prototype),D},r.apply(null,arguments)}function i(s){var o=typeof Map=="function"?new Map:void 0;return i=function(a){if(a===null||!E(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(typeof o!="undefined"){if(o.has(a))return o.get(a);o.set(a,l)}function l(){return r(a,arguments,(0,P.Z)(this).constructor)}return l.prototype=Object.create(a.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),(0,v.Z)(l,a)},i(s)}},73199:function(){},36505:function(j,d,n){"use strict";n.d(d,{I:function(){return E}});var P=n(48971),v=n(85893),E=function(r){var i=(0,P.YB)();return function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r,c=s==null||s==""?o:o+"."+s;return(0,v.jsx)("p",{"data-test-id":c,style:{display:"inline"},children:i.formatMessage({id:c})})}}},10137:function(j,d,n){"use strict";var P=n(34669),v=n(54458),E=n(67294),p=n(15156),r=n(85893),i=function(o){var c,a,l=(0,p.Ad)("pages.toolBar.progress");return(0,r.jsxs)("div",{className:"progress",children:[(0,r.jsx)(v.Z,{className:"progressBar",percent:Math.ceil(o.project.finished/((c=o.task.all)===null||c===void 0?void 0:c.length)*100),status:"active",showInfo:!1})," ",(0,r.jsx)("span",{className:"progressDesc",children:"".concat(l(""),": ").concat(o.project.finished||0,"/").concat((a=o.task.all)===null||a===void 0?void 0:a.length,`
        `).concat(l("currentId"),": ").concat(o.task.currIdx==null?1:o.task.currIdx+1," ")})]})};d.Z=i},29214:function(j,d,n){"use strict";n.r(d);var P=n(11849),v=n(20228),E=n(11382),p=n(34792),r=n(48086),i=n(91220),s=n(67294),o=n(48971),c=n(73199),a=n.n(c),l=n(8088),f=n(61541),M=n(44434),O=n(5041),T=n(57436),D=n(10137),y=n(15156),K=n(36505),t=n(85893),U=function(){var _=(0,y.$L)(s.useState,s.useEffect,{label:{oneHot:!1,postSelect:k},tool:{defaultTool:"mover"},effectTrigger:{postTaskChange:N,postProjectChanged:S}}),A=_.tool,x=_.loading,B=_.scale,I=_.annotation,h=_.task,R=_.data,L=_.project,u=_.label,Z=_.refreshVar,m=(0,K.I)("pages.toolBar");function S(){var e;((e=L.curr)===null||e===void 0?void 0:e.labelFormat)=="single_class"&&u.setOneHot(!0)}function k(e,g){if(console.log("selectLabel",e),g.has(e.labelId))u.isOneHot&&I.clear(),I.create({taskId:h.curr.taskId,labelId:e.labelId,dataId:R.curr.dataId});else{var F=I.all.filter(function(b){return b.labelId==e.labelId}),C=(0,i.Z)(F),W;try{for(C.s();!(W=C.n()).done;){var $=W.value;I.remove($.annotationId)}}catch(b){C.e(b)}finally{C.f()}}}function N(e,g){x.setCurr(!0),!(!e||!g)&&(u.initActive(g),x.setCurr(!1))}return(0,t.jsxs)(l.Z,{className:a().classes,children:[(0,t.jsxs)(M.Z,{children:[(0,t.jsx)(f.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){B.change(.1)},children:m("zoomIn")}),(0,t.jsx)(f.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){B.change(-.1)},children:m("zoomOut")}),(0,t.jsx)(f.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){r.default.success(m("autoSave"))},children:m("save")}),(0,t.jsx)(f.Z,{imgSrc:"./pics/buttons/move.png",active:A.curr=="mover",onClick:function(){A.setCurr("mover")},children:m("move")})]}),(0,t.jsx)("div",{id:"dr",className:"mainStage",children:(0,t.jsxs)(E.Z,{tip:"loading",spinning:x.curr,children:[(0,t.jsx)("div",{className:"draw",children:(0,t.jsx)(T.Z,{scale:B.curr,currentTool:A.curr,setCurrentAnnotation:function(){},onAnnotationModify:function(){},onAnnotationModifyComplete:function(){},imgSrc:R.imgSrc,annotations:I.all})}),(0,t.jsx)("div",{className:"pblock",children:(0,t.jsx)(D.Z,{task:h,project:L})}),(0,t.jsx)("div",{className:"prevTask",onClick:h.prevTask,"data-test-id":"prevTask"}),(0,t.jsx)("div",{className:"nextTask",onClick:h.nextTask,"data-test-id":"nextTask"})]})}),(0,t.jsx)(M.Z,{disLoc:"right",children:(0,t.jsx)(f.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){o.m8.push("/project_overview?projectId=".concat(L.curr.projectId))},children:m("projectOverview")})}),(0,t.jsx)("div",{className:"rightSideBar",children:(0,t.jsx)(O.Z,{labels:u.all,activeIds:u.activeIds,onLabelSelect:u.onSelect,onLabelAdd:function(g){return u.create((0,P.Z)((0,P.Z)({},g),{},{projectId:L.curr.projectId}))},onLabelDelete:u.remove,onLabelModify:function(){},hideColorPicker:!0,hideEye:!0,refresh:Z})})]})};d.default=U}}]);

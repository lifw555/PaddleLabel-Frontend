(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[89],{6277:function(b){b.exports={modal:"modal___26yNn"}},45092:function(b){b.exports={modal:"modal___1H_FQ"}},85871:function(b,h,n){"use strict";var x=n(71194),R=n(50146),U=n(49111),K=n(19650),z=n(57663),r=n(71577),a=n(13062),_=n(71230),c=n(89032),E=n(15746),w=n(77883),m=n(70507),V=n(34792),W=n(48086),F=n(9715),O=n(93766),p=n(2824),u=n(67294),s=n(48971),B=n(6277),C=n.n(B),i=n(85893),t=function(M){var J=(0,s.YB)(),$=(0,u.useState)(60),j=(0,p.Z)($,2),D=j[0],Z=j[1],Q=(0,u.useState)(20),f=(0,p.Z)(Q,2),A=f[0],S=f[1],an=(0,u.useState)(20),G=(0,p.Z)(an,2),Y=G[0],X=G[1],sn=(0,u.useState)(!1),k=(0,p.Z)(sn,2),P=k[0],I=k[1],rn=(0,s.YB)().formatMessage({id:"pages.toolBar.divideData"}),q=(0,s.YB)().formatMessage({id:"component.PPDivideDataModal.train"}),T=(0,s.YB)().formatMessage({id:"component.PPDivideDataModal.validation"}),N=(0,s.YB)().formatMessage({id:"component.PPDivideDataModal.test"}),ln=(0,s.YB)().formatMessage({id:"component.PPCreater.cancel"}),nn=(0,s.YB)().formatMessage({id:"component.PPSegMode.ok"}),g=O.Z.useForm(),_n=(0,p.Z)(g,1),en=_n[0];return(0,i.jsx)(R.Z,{className:C().modal,title:rn,visible:M.visible,onCancel:M.onCancel,footer:null,children:(0,i.jsxs)(O.Z,{form:en,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1},onFinish:function(){if(D+A+Y!=100){W.default.error("Train, Validation and Test total percent should equal 100!");return}console.log("x trainData: ".concat(D,", validationData: ").concat(A,", testData: ").concat(Y,", props.project.curr.projectId: ").concat(M.project.curr.projectId)),I(!0),M.splitDataset(M.project.curr.projectId,{train:D*.01,validation:A*.01,test:Y*.01}).then(function(){var l;console.log("success"),W.default.success(J.formatMessage({id:"component.PPDivideDataModal.success"})),(l=M.onFinish)===null||l===void 0||l.call(0)}).finally(function(){I(!1)})},autoComplete:"off",layout:"vertical",children:[(0,i.jsxs)(_.Z,{children:[(0,i.jsx)(E.Z,{span:8,children:(0,i.jsx)(O.Z.Item,{label:q,name:"train",children:(0,i.jsx)(m.Z,{addonAfter:"%",defaultValue:60,precision:0,min:0,max:100,value:D,onChange:Z})})}),(0,i.jsx)(E.Z,{span:8,children:(0,i.jsx)(O.Z.Item,{label:T,name:"validation",children:(0,i.jsx)(m.Z,{addonAfter:"%",defaultValue:20,precision:0,min:0,max:100,value:A,onChange:S})})}),(0,i.jsx)(E.Z,{span:8,children:(0,i.jsx)(O.Z.Item,{label:N,name:"test",children:(0,i.jsx)(m.Z,{addonAfter:"%",defaultValue:20,precision:0,min:0,max:100,value:Y,onChange:X})})})]}),(0,i.jsx)(O.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,i.jsxs)(K.Z,{children:[(0,i.jsx)(r.Z,{onClick:function(){var l;(l=M.onCancel)===null||l===void 0||l.call(0),en.resetFields()},children:ln}),(0,i.jsx)(r.Z,{type:"primary",htmlType:"submit",loading:P,children:nn})]})})]})})};h.Z=t},62850:function(b,h,n){"use strict";var x=n(71194),R=n(50146),U=n(49111),K=n(19650),z=n(57663),r=n(71577),a=n(47673),_=n(24044),c=n(34792),E=n(48086),w=n(9715),m=n(93766),V=n(2824),W=n(67294),F=n(48971),O=n(45092),p=n.n(O),u=n(85893),s=function(C){var i=(0,F.YB)(),t=(0,W.useState)(!1),H=(0,V.Z)(t,2),M=H[0],J=H[1],$=(0,F.YB)().formatMessage({id:"component.PPCreater.cancel"}),j=m.Z.useForm(),D=(0,V.Z)(j,1),Z=D[0];return(0,u.jsx)(R.Z,{className:p().modal,title:(0,F.YB)().formatMessage({id:"component.PPExportModal.title"}),visible:C.visible,onCancel:C.onCancel,footer:null,children:(0,u.jsxs)(m.Z,{form:Z,name:"basic",labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!1},onFinish:function(f){console.log(f);var A=f.path;if(!A){E.default.error(i.formatMessage({id:"component.PPExportModal.pathNotNull"}));return}J(!0),C.exportDataset(C.project.curr.projectId,A).then(function(){var S;E.default.success(i.formatMessage({id:"component.PPExportModal.exportSuccess"})),(S=C.onFinish)===null||S===void 0||S.call(0)}).finally(function(){J(!1)})},autoComplete:"off",children:[(0,u.jsx)(m.Z.Item,{label:i.formatMessage({id:"component.PPExportModal.path"}),name:"path",children:(0,u.jsx)(_.Z,{})}),(0,u.jsx)(m.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,u.jsxs)(K.Z,{children:[(0,u.jsx)(r.Z,{onClick:function(){var f;(f=C.onCancel)===null||f===void 0||f.call(0),Z.resetFields()},children:$}),(0,u.jsx)(r.Z,{type:"primary",htmlType:"submit",loading:M,children:i.formatMessage({id:"component.PPExportModal.export"})})]})})]})})};h.Z=s},91861:function(b,h,n){"use strict";n.d(h,{Ad:function(){return R},k3:function(){return U},Vd:function(){return K},td:function(){return z}});var x=40;function R(){localStorage.removeItem("history"),U([])}function U(r){var a=localStorage.getItem("history"),_=a?JSON.parse(a):{index:-1,items:[]};if(JSON.stringify(_.items[_.index])!=JSON.stringify(r)){var c=_.index>x?_.index-x:0,E=_.items.splice(c,_.index==0?1:_.index+1);_.items=E.concat([r]),_.index<=x?_.index++:_.index=x+1,localStorage.setItem("history",JSON.stringify(_))}}function K(){var r=localStorage.getItem("history");if(!!r){var a=JSON.parse(r);if(!!a&&!(a.index>=a.items.length-1))return a.index++,localStorage.setItem("history",JSON.stringify(a)),a.items[a.index]}}function z(){var r=localStorage.getItem("history");if(!!r){var a=JSON.parse(r);if(!(!a||!a.index)&&!(a.index<=0))return a.index--,localStorage.setItem("history",JSON.stringify(a)),a.items[a.index]}}},86089:function(b,h,n){"use strict";n.r(h),n.d(h,{MOST_HISTORY_STEPS:function(){return H}});var x=n(91220),R=n(57663),U=n(71577),K=n(34669),z=n(54458),r=n(2824),a=n(67294),_=n(8088),c=n(61541),E=n(44434),w=n(58967),m=n(27992),V=n(5041),W=n(57436),F=n(14836),O=n(29919),p=n(43801),u=n(13931),s=n(48971),B=n(91861),C=n(85871),i=n(62850),t=n(85893),H=40,M=function(){var $=(0,a.useState)([]),j=(0,r.Z)($,2),D=j[0],Z=j[1],Q=(0,a.useState)(!1),f=(0,r.Z)(Q,2),A=f[0],S=f[1],an=(0,a.useState)(!1),G=(0,r.Z)(an,2),Y=G[0],X=G[1],sn=(0,a.useState)(void 0),k=(0,r.Z)(sn,2),P=k[0],I=k[1],rn=(0,a.useState)(),q=(0,r.Z)(rn,2),T=q[0],N=q[1],ln=(0,a.useState)(),nn=(0,r.Z)(ln,2),g=nn[0],_n=nn[1],en=(0,a.useState)([]),tn=(0,r.Z)(en,2),l=tn[0],y=tn[1],pn=(0,a.useState)(10),mn=(0,r.Z)(pn,2),on=mn[0],fn=mn[1],Bn=(0,a.useState)(60),vn=(0,r.Z)(Bn,2),En=vn[0],An=vn[1],Sn=(0,a.useState)(1),Mn=(0,r.Z)(Sn,2),dn=Mn[0],cn=Mn[1],Dn=function(e){e||cn(1),e<.1||e>3?cn(1):cn(e)},d=function(e){_n(e),e!=null&&e.label&&N(e.label)};(0,a.useEffect)(function(){(0,B.Ad)()},[]);var un=function(e){for(var v=[],L=0;L<l.length;L++)l[L].frontendId==e.frontendId?v.push(e):v.push(l[L]);d(e),y(v)},gn=(0,p.Z)({currentLabel:T,brushSize:on,currentTool:P,annotations:l,currentAnnotation:g,onAnnotationAdd:function(e){var v=l.concat([e]);y(v),g||d(e)},onAnnotationModify:un,onMouseUp:function(){(0,B.k3)({annos:l,currAnno:g})}}),On=(0,u.Z)({currentLabel:T,brushSize:on,currentTool:P,annotations:l,currentAnnotation:g,onAnnotationAdd:function(e){var v=l.concat([e]);y(v),g||d(e)},onAnnotationModify:un,onMouseUp:function(){(0,B.k3)({annos:l,currAnno:g})}}),Pn=P=="polygon"?On:gn,Ln=(0,s.YB)().formatMessage({id:"pages.toolBar.polygon"}),xn=(0,s.YB)().formatMessage({id:"pages.toolBar.brush"}),In=(0,s.YB)().formatMessage({id:"pages.toolBar.rubber"}),Tn=(0,s.YB)().formatMessage({id:"pages.toolBar.zoomIn"}),yn=(0,s.YB)().formatMessage({id:"pages.toolBar.zoomOut"}),bn=(0,s.YB)().formatMessage({id:"pages.toolBar.move"}),jn=(0,s.YB)().formatMessage({id:"pages.toolBar.unDo"}),Zn=(0,s.YB)().formatMessage({id:"pages.toolBar.reDo"}),Rn=(0,s.YB)().formatMessage({id:"pages.toolBar.save"}),Un=(0,s.YB)().formatMessage({id:"pages.toolBar.edit"}),Kn=(0,s.YB)().formatMessage({id:"pages.toolBar.clearMark"}),Wn=(0,s.YB)().formatMessage({id:"pages.toolBar.interactor"}),Fn=(0,s.YB)().formatMessage({id:"pages.toolBar.segmentThreshold"}),Yn=(0,s.YB)().formatMessage({id:"pages.toolBar.visualRadius"}),Nn=(0,s.YB)().formatMessage({id:"pages.toolBar.determineOutline"}),zn=(0,s.YB)().formatMessage({id:"pages.toolBar.divideData"}),Vn=(0,s.YB)().formatMessage({id:"pages.toolBar.export"});return(0,t.jsxs)(_.Z,{className:"segment",children:[(0,t.jsxs)(E.Z,{children:[(0,t.jsx)(O.Z,{active:P=="polygon",onClick:function(){I("polygon"),d(void 0)},children:Ln}),(0,t.jsx)(c.Z,{active:P=="editor",imgSrc:"./pics/buttons/edit.png",onClick:function(){I("editor"),d(void 0)},children:Un}),(0,t.jsx)(w.Z,{size:on,active:P=="brush",onClick:function(){P!="rubber"&&P!="brush"&&d(void 0),I("brush")},onChange:function(e){fn(e)},children:xn}),(0,t.jsx)(w.Z,{size:on,active:P=="rubber",onClick:function(){P!="rubber"&&P!="brush"&&d(void 0),I("rubber")},onChange:function(e){fn(e)},imgSrc:"./pics/buttons/rubber.png",children:In}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){Dn(dn+.1)},children:Tn}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){Dn(dn-.1)},children:yn}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/save.png",children:Rn}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){I("mover")},children:bn}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){var e=(0,B.td)();e&&(y(e.annos),d(e.currAnno))},children:jn}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){var e=(0,B.Vd)();e&&(y(e.annos),d(e.currAnno))},children:Zn}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:Kn})]}),(0,t.jsxs)("div",{id:"dr",className:"mainStage",children:[(0,t.jsx)("div",{className:"draw",children:(0,t.jsx)(W.Z,{scale:dn,annotations:l,currentTool:P,currentAnnotation:g,setCurrentAnnotation:d,onAnnotationModify:un,onAnnotationModifyComplete:function(){(0,B.k3)({annos:l,currAnno:g})},onMouseDown:Pn.onMouseDown,onMouseMove:Pn.onMouseMove,onMouseUp:Pn.onMouseUp,createPolygonFunc:On.createElementsFunc,createBrushFunc:gn.createElementsFunc,imgSrc:void 0,transparency:En})}),(0,t.jsx)("div",{className:"pblock",children:(0,t.jsxs)("div",{className:"progress",children:[(0,t.jsx)(z.Z,{className:"progressBar",percent:10,status:"active",showInfo:!1})," ",(0,t.jsx)("span",{className:"progressDesc",children:"Current labeling 1 of 300. Already labeled 20."})]})}),(0,t.jsx)("div",{className:"prevTask",onClick:function(){!task.prevTask()||(d(void 0),y([]))}}),(0,t.jsx)("div",{className:"nextTask",onClick:function(){!task.nextTask()||(d(void 0),y([]))}})]}),(0,t.jsxs)(E.Z,{disLoc:"right",children:[(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:Wn}),(0,t.jsx)(m.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:Fn}),(0,t.jsx)(m.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",size:En,maxSize:100,minSize:0,onChange:function(e){An(e)},children:(0,s.YB)().formatMessage({id:"pages.toolBar.transparency"})}),(0,t.jsx)(m.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:Yn}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){S(!0)},children:zn}),(0,t.jsx)(c.Z,{imgSrc:"./pics/buttons/export.png",onClick:function(){X(!0)},children:Vn})]}),(0,t.jsxs)("div",{className:"rightSideBar",children:[(0,t.jsx)("div",{className:"determinOutline",children:(0,t.jsx)(U.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){d(void 0)},children:Nn})}),(0,t.jsx)(V.Z,{labels:D,activeIds:new Set([T]),onLabelSelect:function(e){N(e),d(void 0)},onLabelModify:function(){},onLabelDelete:function(e){var v=[],L=(0,x.Z)(D),Cn;try{for(L.s();!(Cn=L.n()).done;){var hn=Cn.value;hn.labelId!=e.labelId&&v.push(hn)}}catch(Hn){L.e(Hn)}finally{L.f()}Z(v),(T==null?void 0:T.labelId)==e.labelId&&N(void 0)},onLabelAdd:function(e){D.push(e),Z(D),N(e)}}),(0,t.jsx)(F.Z,{currAnnotation:g,annotations:l,onAnnotationSelect:function(e){e!=null&&e.delete||d(e)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(e){y(l.filter(function(v){return v.frontendId!=e.frontendId})),d(void 0)}})]}),(0,t.jsx)(C.Z,{visible:A,onCancel:function(){S(!1)},onFinish:function(){S(!1)}}),(0,t.jsx)(i.Z,{visible:Y,onCancel:function(){X(!1)},onFinish:function(){X(!1)}})]})};h.default=M}}]);

(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[583],{85024:function(N){N.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function(N){N.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},26647:function(N){N.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",slider:"slider___ALra-",popoverLeft:"popoverLeft___15lGe"}},6277:function(N){N.exports={modal:"modal___26yNn"}},45092:function(N){N.exports={modal:"modal___1H_FQ"}},8978:function(N,$,n){"use strict";n.d($,{Z:function(){return p}});var H=n(8870),X=n(2824),en=n(91220),w=n(67294),Z=n(85893);function v(t){if(!t||!t.width||!t.color||!t.points||t.points.length<2||t.frontendId==null)return"";var s=t.type=="brush"?0:t.frontendId;return"".concat(t.width,",").concat(s,",").concat(t.points.join(","))}function d(t){var s,r=t.canvasRef,c=t.annotation,l=c.result;if(!l)return(0,Z.jsx)(Z.Fragment,{});var h=(s=r.current)===null||s===void 0?void 0:s.getContext("2d");if(!h)return(0,Z.jsx)(Z.Fragment,{});for(var P=[],E=0,e=0;e<l.length;e++)l.at(e)==","?(P.push(parseFloat(l.slice(E,e))),E=e+1):l.at(e)=="|"?(P.push(parseFloat(l.slice(E,e))),_(P,h,c),P=[],E=e+1):e==l.length-1&&(P.push(parseFloat(l.slice(E,l.length))),_(P,h,c));return(0,Z.jsx)(Z.Fragment,{})}function _(t,s,r){var c;if(t.length<4){console.log("found incorrect points:",t);return}var l=t[0],h=t[1];if(l==0){var P;T(s,t.slice(2),r==null||(P=r.label)===null||P===void 0?void 0:P.color);return}if(h==0){C(s,l,t.slice(2),void 0);return}C(s,l,t.slice(2),r==null||(c=r.label)===null||c===void 0?void 0:c.color)}function C(t,s,r,c){t.beginPath(),t.moveTo(r[0],r[1]);for(var l=0;l<=r.length/2-1;l++){var h=r[2*l],P=r[2*l+1];t.lineTo(h,P)}t.lineCap="round",t.lineJoin="round",t.lineWidth=s,c&&(t.strokeStyle=c),t.globalCompositeOperation=c?"source-over":"destination-out",t.stroke()}function T(t,s,r){t.globalCompositeOperation=r?"source-over":"destination-out",r&&(t.fillStyle=r);for(var c=0;c<=s.length/2-1;c++){var l=s[2*c],h=s[2*c+1];t.fillRect(l,h,1,1)}}function Q(t){if(!t||t.length==0)return 0;var s=0,r=(0,en.Z)(t),c;try{for(r.s();!(c=r.n()).done;){var l=c.value;l.frontendId>s&&(s=l.frontendId)}}catch(h){r.e(h)}finally{r.f()}return s}function R(t,s){return t=="rubber"||s==2?"rubber":"brush"}function p(t){var s=(0,w.useState)(),r=(0,X.Z)(s,2),c=r[0],l=r[1],h=function(m){var D,g;if(!(t.currentTool!="brush"&&t.currentTool!="rubber"||!((D=t.currentLabel)!==null&&D!==void 0&&D.color)||!t.brushSize)){var a=m.mouseX,y=m.mouseY,x=R(t.currentTool,m.e.evt.button),A=t.frontendIdOps.frontendId>0?t.frontendIdOps.frontendId:Q(t.annotations);A!=t.frontendIdOps.frontendId&&t.frontendIdOps.setFrontendId(A);var Y=v({width:t.brushSize||10,color:(g=t.currentLabel)===null||g===void 0?void 0:g.color,points:[a,y,a,y],type:x,frontendId:A});if(!!Y){l(x);var b={dataId:t.dataId,label:t.currentLabel,frontendId:A,lines:Y};t.onAnnotationAdd(b)}}},P=function(m){var D;if(!(!c||!t.currentAnnotation||!t.currentAnnotation.result||t.currentAnnotation.result.length<2||!((D=t.currentLabel)!==null&&D!==void 0&&D.color))){var g=m.mouseX,a=m.mouseY,y=t.currentAnnotation.result+",".concat(g,",").concat(a);t.onAnnotationModify((0,H.Z)((0,H.Z)({},t.currentAnnotation),{},{result:y}))}},E=function(){t.currentTool!="brush"&&t.currentTool!="rubber"||(l(void 0),t.onMouseUp())};return{onMouseDown:h,onMouseMove:P,onMouseUp:E,drawAnnotation:d}}},14836:function(N,$,n){"use strict";n.d($,{Z:function(){return P}});var H=n(54421),X=n(38272),en=n(57663),w=n(71577),Z=n(67294),v=n(56159),d=n.n(v),_=n(49111),C=n(19650),T=n(2824),Q=n(8870),R=n(85024),p=n.n(R),t=n(63097),s=n(85893),r=function(e){var m=(0,Q.Z)({},e.annotation),D=(0,Z.useState)(m.invisible),g=(0,T.Z)(D,2),a=g[0],y=g[1],x=(0,Z.useState)(0),A=(0,T.Z)(x,2),Y=A[0],b=A[1];(0,Z.useEffect)(function(){y(e.annotation.invisible)},[e.annotation.invisible]);var U=(0,s.jsxs)(X.ZP.Item,{className:"".concat(p().listItem," ").concat(e.active?p().listItemActive:""),unselectable:"on",onClick:function(){e.onClick(m)},children:[(0,s.jsxs)(C.Z,{align:"center",size:5,children:[(0,s.jsx)("a",{className:p().eye,style:{backgroundImage:a?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(o){o.stopPropagation(),y(!a),e.onAnnotationModify(m)}})," ",(0,s.jsx)("span",{className:p().annotationId,children:m.frontendId}),(0,s.jsx)("span",{className:p().labelName,children:m.label.name}),(0,s.jsx)(t.Z,{color:m.label.color})]}),(0,s.jsx)("a",{className:p().delete,onClick:function(o){o.stopPropagation();var u=new Date().getTime();u-Y<300||(b(u),e.onAnnotationDelete(m))}})]});return U},c=r,l=n(48971),h=function(e){var m=(0,l.YB)(),D=m.formatMessage({id:"component.PPAnnotationList.annotationList"}),g=m.formatMessage({id:"component.PPAnnotationList.addAnnotation"});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(X.ZP,{className:d().labelList,size:"large",header:(0,s.jsx)("div",{className:d().listHeader,children:D}),bordered:!0,dataSource:e.annotations,renderItem:function(y){var x;return(0,s.jsx)(c,{onClick:e.onAnnotationSelect,annotation:y,active:y.frontendId==((x=e.currAnnotation)===null||x===void 0?void 0:x.frontendId),onAnnotationDelete:e.onAnnotationDelete,onAnnotationModify:e.onAnnotationModify})},footer:(0,s.jsx)("div",{children:(0,s.jsx)(w.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){e.onAnnotationAdd()},block:!0,children:g})})})})},P=h},27992:function(N,$,n){"use strict";var H=n(20136),X=n(55241),en=n(13062),w=n(71230),Z=n(77883),v=n(70507),d=n(89032),_=n(15746),C=n(66126),T=n(75454),Q=n(2824),R=n(67294),p=n(61541),t=n(26647),s=n.n(t),r=n(85893),c=0,l=100,h=10,P=function(e){var m=(0,R.useState)(Y(e.size)),D=(0,Q.Z)(m,2),g=D[0],a=D[1];function y(b){a(Y(b))}var x=e.minSize==null?c:e.minSize,A=e.maxSize==null?l:e.maxSize;function Y(b){return b==null?h:b<=x?x:b>=A?A:b}return(0,R.useEffect)(function(){y(e.size)},[e.size]),(0,r.jsxs)(X.Z,{overlayClassName:"".concat(s().popover," ").concat(e.disLoc=="left"?s().popoverLeft:""),placement:e.disLoc||"right",content:(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(_.Z,{span:16,children:(0,r.jsx)(T.Z,{className:s().slider,value:g,max:A,min:x,onChange:function(U){var S;(S=e.onChange)===null||S===void 0||S.call(0,U)},tooltipVisible:!1})}),(0,r.jsx)(_.Z,{span:8,children:(0,r.jsx)(v.Z,{min:x,max:A,value:g,onChange:function(U){var S;(S=e.onChange)===null||S===void 0||S.call(0,U)},step:10})})]}),trigger:"hover",children:[" ",(0,r.jsx)(p.Z,{imgSrc:e.imgSrc||"",onClick:e.onClick,active:e.active,children:e.children})]})};$.Z=P},85871:function(N,$,n){"use strict";var H=n(71194),X=n(50146),en=n(49111),w=n(19650),Z=n(57663),v=n(71577),d=n(13062),_=n(71230),C=n(89032),T=n(15746),Q=n(77883),R=n(70507),p=n(34792),t=n(48086),s=n(9715),r=n(93766),c=n(2824),l=n(67294),h=n(48971),P=n(6277),E=n.n(P),e=n(85893),m=function(g){var a=(0,h.YB)(),y=(0,l.useState)(60),x=(0,c.Z)(y,2),A=x[0],Y=x[1],b=(0,l.useState)(20),U=(0,c.Z)(b,2),S=U[0],o=U[1],u=(0,l.useState)(20),M=(0,c.Z)(u,2),O=M[0],B=M[1],W=(0,l.useState)(!1),K=(0,c.Z)(W,2),G=K[0],F=K[1],V=a.formatMessage({id:"pages.toolBar.divideData"}),L=a.formatMessage({id:"component.PPDivideDataModal.train"}),on=a.formatMessage({id:"component.PPDivideDataModal.validation"}),rn=a.formatMessage({id:"component.PPDivideDataModal.test"}),q=a.formatMessage({id:"component.PPCreater.cancel"}),an=a.formatMessage({id:"component.PPSegMode.ok"}),I=r.Z.useForm(),J=(0,c.Z)(I,1),un=J[0];return(0,e.jsx)(X.Z,{className:E().modal,title:V,visible:g.visible,onCancel:g.onCancel,footer:null,children:(0,e.jsxs)(r.Z,{form:un,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1},onFinish:function(){if(A+S+O!=100){t.default.error("Train, Validation and Test total percent should equal 100!");return}console.log("x trainData: ".concat(A,", validationData: ").concat(S,", testData: ").concat(O,", props.project.curr.projectId: ").concat(g.project.curr.projectId)),F(!0),g.splitDataset(g.project.curr.projectId,{train:A*.01,val:S*.01,test:O*.01}).then(function(){var k;console.log("success"),t.default.success(a.formatMessage({id:"component.PPDivideDataModal.success"})),(k=g.onFinish)===null||k===void 0||k.call(0)}).finally(function(){F(!1)})},autoComplete:"off",layout:"vertical",children:[(0,e.jsxs)(_.Z,{children:[(0,e.jsx)(T.Z,{span:8,children:(0,e.jsx)(r.Z.Item,{label:L,name:"train",children:(0,e.jsx)(R.Z,{addonAfter:"%",defaultValue:60,precision:0,min:0,max:100,value:A,onChange:Y})})}),(0,e.jsx)(T.Z,{span:8,children:(0,e.jsx)(r.Z.Item,{label:on,name:"validation",children:(0,e.jsx)(R.Z,{addonAfter:"%",defaultValue:20,precision:0,min:0,max:100,value:S,onChange:o})})}),(0,e.jsx)(T.Z,{span:8,children:(0,e.jsx)(r.Z.Item,{label:rn,name:"test",children:(0,e.jsx)(R.Z,{addonAfter:"%",defaultValue:20,precision:0,min:0,max:100,value:O,onChange:B})})})]}),(0,e.jsx)(r.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(v.Z,{onClick:function(){var k;(k=g.onCancel)===null||k===void 0||k.call(0),un.resetFields()},children:q}),(0,e.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:G,children:an})]})})]})})};$.Z=m},62850:function(N,$,n){"use strict";var H=n(71194),X=n(50146),en=n(49111),w=n(19650),Z=n(57663),v=n(71577),d=n(47673),_=n(24044),C=n(34792),T=n(48086),Q=n(9715),R=n(93766),p=n(2824),t=n(67294),s=n(48971),r=n(45092),c=n.n(r),l=n(85893),h=function(E){var e=(0,s.YB)(),m=(0,t.useState)(!1),D=(0,p.Z)(m,2),g=D[0],a=D[1],y=e.formatMessage({id:"component.PPCreater.cancel"}),x=R.Z.useForm(),A=(0,p.Z)(x,1),Y=A[0];return(0,l.jsx)(X.Z,{className:c().modal,title:e.formatMessage({id:"component.PPExportModal.title"}),visible:E.visible,onCancel:E.onCancel,footer:null,children:(0,l.jsxs)(R.Z,{form:Y,name:"basic",labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!1},onFinish:function(U){console.log(U);var S=U.path;if(!S){T.default.error(e.formatMessage({id:"component.PPExportModal.pathNotNull"}));return}a(!0),E.exportDataset(E.project.curr.projectId,S).then(function(){var o;T.default.success(e.formatMessage({id:"component.PPExportModal.exportSuccess"})),(o=E.onFinish)===null||o===void 0||o.call(0)}).finally(function(){a(!1)})},autoComplete:"off",children:[(0,l.jsx)(R.Z.Item,{label:e.formatMessage({id:"component.PPExportModal.path"}),name:"path",children:(0,l.jsx)(_.Z,{})}),(0,l.jsx)(R.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,l.jsxs)(w.Z,{children:[(0,l.jsx)(v.Z,{onClick:function(){var U;(U=E.onCancel)===null||U===void 0||U.call(0),Y.resetFields()},children:y}),(0,l.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:g,children:e.formatMessage({id:"component.PPExportModal.export"})})]})})]})})};$.Z=h},91861:function(N,$,n){"use strict";n.d($,{Ad:function(){return X},k3:function(){return en},Vd:function(){return w},td:function(){return Z}});var H=40;function X(){localStorage.removeItem("history"),en([])}function en(v){var d=localStorage.getItem("history"),_=d?JSON.parse(d):{index:-1,items:[]};if(JSON.stringify(_.items[_.index])!=JSON.stringify(v)){var C=_.index>H?_.index-H:0,T=_.items.splice(C,_.index==0?1:_.index+1);_.items=T.concat([v]),_.index<=H?_.index++:_.index=H+1,localStorage.setItem("history",JSON.stringify(_))}}function w(){var v=localStorage.getItem("history");if(!!v){var d=JSON.parse(v);if(!!d&&!(d.index>=d.items.length-1))return d.index++,localStorage.setItem("history",JSON.stringify(d)),d.items[d.index]}}function Z(){var v=localStorage.getItem("history");if(!!v){var d=JSON.parse(v);if(!(!d||!d.index)&&!(d.index<=0))return d.index--,localStorage.setItem("history",JSON.stringify(d)),d.items[d.index]}}},44583:function(N,$,n){"use strict";n.r($),n.d($,{MOST_HISTORY_STEPS:function(){return b},default:function(){return S}});var H=n(91220),X=n(57663),en=n(71577),w=n(34669),Z=n(54458),v=n(2824),d=n(67294),_=n(8088),C=n(61541),T=n(44434),Q=n(27992),R=n(5041),p=n(57436),t=n(14836),s=n(48971),r=n(91861),c=n(85871),l=n(62850),h=n(8978),P=n(8870),E=n(65031);function e(o){var u=0;if(!o)return u;var M=_createForOfIteratorHelper(o),O;try{for(M.s();!(O=M.n()).done;){var B=O.value;!B||!B.frontendId||B.frontendId>u&&(u=B.frontendId)}}catch(W){M.e(W)}finally{M.f()}return u}function m(o){var u=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return u?{r:parseInt(u[1],16),g:parseInt(u[2],16),b:parseInt(u[3],16)}:null}function D(o){var u=o.toString(16);return u.length==1?"0"+u:u}function g(o,u,M){return"#"+D(o)+D(u)+D(M)}var a=n(85893);function y(o,u){if(!(!o||!u))return{color:o,points:u}}function x(o){if(!o.annotation||!o.annotation.lines||!o.annotation.lines[0])return(0,a.jsx)(a.Fragment,{});var u=o.annotation.lines[0].points,M=o.annotation.lines[0].color,O=m(M);if(!O)return(0,a.jsx)(a.Fragment,{});var B=.3,W=void 0,K=[];return u.forEach(function(G,F){if(!W){W=G;return}K.push((0,a.jsx)(E.Cd,{onMouseDown:function(){o.currentTool=="editor"&&o.onSelect(o.annotation)},draggable:o.currentTool=="editor",onDragMove:function(L){var on;L.cancelBubble=!0;var rn=(on=o.stageRef)===null||on===void 0?void 0:on.current,q=rn.findOne(".baseImage"),an=!1,I=L.target.x();I>q.width()/2&&(I=q.width()/2,an=!0),I<-q.width()/2&&(I=-q.width()/2,an=!0);var J=L.target.y();J>q.height()/2&&(J=q.height()/2,an=!0),J<-q.height()/2&&(J=-q.height()/2,an=!0),an&&L.target.setPosition({x:I,y:J}),u[F-1]=I,u[F]=J;var un=(0,P.Z)((0,P.Z)({},o.annotation),{},{points:[{color:M,points:u}]});o.onDrag(un)},onMouseOver:function(){var L;o.currentTool=="editor"&&(L=o.stageRef)!==null&&L!==void 0&&L.current&&(o.stageRef.current.container().style.cursor="cell")},onMouseOut:function(){var L;o.currentTool=="editor"&&(L=o.stageRef)!==null&&L!==void 0&&L.current&&(o.stageRef.current.container().style.cursor="default")},x:W,y:G,radius:5/o.scale,fill:M})),W=void 0}),(0,a.jsxs)(E.ZA,{children:[(0,a.jsx)(E.x1,{onMouseOver:function(){o.currentTool=="editor"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){o.currentTool=="editor"&&o.onSelect(o.annotation)},stroke:M,strokeWidth:2/o.scale,globalCompositeOperation:"source-over",lineCap:"round",points:u,tension:0,closed:!0,fill:"rgba(".concat(O.r,", ").concat(O.g,", ").concat(O.b,", ").concat(B,")")}),K]},o.annotation.frontendId)}function A(o){var u=0;if(!o)return u;var M=(0,H.Z)(o),O;try{for(M.s();!(O=M.n()).done;){var B=O.value;!B||!B.frontendId||B.frontendId>u&&(u=B.frontendId)}}catch(W){M.e(W)}finally{M.f()}return u}function Y(o){var u=function(K,G){var F,V=y((F=o.currentLabel)===null||F===void 0?void 0:F.color,[K,G]);!V||o.onAnnotationAdd({dataId:o.dataId,type:"polygon",frontendId:A(o.annotations)+1,label:o.currentLabel,lines:[V]})},M=function(K,G){var F,V;if(!!o.currentAnnotation){var L=o.currentAnnotation.lines||[],on=y((F=o.currentLabel)===null||F===void 0?void 0:F.color,(V=L[0])===null||V===void 0?void 0:V.points.concat([K,G]));if(!!on){var rn={dataId:o.dataId,type:"polygon",frontendId:o.currentAnnotation.frontendId,label:o.currentAnnotation.label,points:[on]};o.onAnnotationModify(rn)}}},O=function(K){o.currentTool=="polygon"&&(o.currentAnnotation?M(K.mouseX,K.mouseY):u(K.mouseX,K.mouseY))},B=function(){o.currentTool=="polygon"&&o.onMouseUp()};return{onMouseDown:O,onMouseMove:function(){},onMouseUp:B,drawAnnotation:x,drawLineInData}}var b=40,U=function(){var u=(0,d.useState)([]),M=(0,v.Z)(u,2),O=M[0],B=M[1],W=(0,d.useState)(!1),K=(0,v.Z)(W,2),G=K[0],F=K[1],V=(0,d.useState)(!1),L=(0,v.Z)(V,2),on=L[0],rn=L[1],q=(0,d.useState)(void 0),an=(0,v.Z)(q,2),I=an[0],J=an[1],un=(0,d.useState)(),cn=(0,v.Z)(un,2),k=cn[0],fn=cn[1],Ln=(0,d.useState)(),Pn=(0,v.Z)(Ln,2),dn=Pn[0],Tn=Pn[1],bn=(0,d.useState)([]),gn=(0,v.Z)(bn,2),tn=gn[0],ln=gn[1],Bn=(0,d.useState)(0),Mn=(0,v.Z)(Bn,2),jn=Mn[0],Zn=Mn[1],Rn=(0,d.useState)(1),hn=(0,v.Z)(Rn,2),_n=hn[0],En=hn[1],Un=(0,d.useState)(60),Cn=(0,v.Z)(Un,2),Dn=Cn[0],Wn=Cn[1],Kn=(0,d.useState)(10),On=(0,v.Z)(Kn,2),vn=On[0],mn=On[1],An=function(i){i||mn(1),i<.1||i>20?mn(1):mn(i)},z=function(i){Tn(i),i!=null&&i.label&&fn(i.label)};(0,d.useEffect)(function(){(0,r.Ad)()},[]);var In=function(i){for(var nn=[],sn=0;sn<tn.length;sn++)tn[sn].frontendId==i.frontendId?nn.push(i):nn.push(tn[sn]);z(i),ln(nn)},xn={dataId:0,currentLabel:k,brushSize:_n,scale:vn,currentTool:I,annotations:tn,currentAnnotation:dn,onAnnotationAdd:function(i){var nn=tn.concat([i]);ln(nn),dn||z(i)},onAnnotationModify:In,onMouseUp:function(){(0,r.k3)({annos:tn,currAnno:dn})}},j=(0,s.YB)(),Fn=(0,h.Z)(xn),Nn=Y(xn),pn=I=="polygon"?Nn:Fn;return(0,a.jsxs)(_.Z,{className:"segment",children:[(0,a.jsxs)(T.Z,{children:[(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/polygon.png",active:I=="polygon",onClick:function(){J("polygon"),z(void 0)},children:j.formatMessage({id:"pages.toolBar.polygon"})}),(0,a.jsx)(C.Z,{active:I=="editor",imgSrc:"./pics/buttons/edit.png",onClick:function(){J("editor"),z(void 0)},children:j.formatMessage({id:"pages.toolBar.edit"})}),(0,a.jsx)(Q.Z,{imgSrc:"./pics/buttons/brush.png",size:_n,active:I=="brush",onClick:function(){I!="rubber"&&I!="brush"&&z(void 0),J("brush")},onChange:function(i){En(i)},children:j.formatMessage({id:"pages.toolBar.brush"})}),(0,a.jsx)(Q.Z,{size:_n,active:I=="rubber",onClick:function(){I!="rubber"&&I!="brush"&&z(void 0),J("rubber")},onChange:function(i){En(i)},imgSrc:"./pics/buttons/rubber.png",children:j.formatMessage({id:"pages.toolBar.rubber"})}),(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){An(vn+.1)},children:j.formatMessage({id:"pages.toolBar.zoomIn"})}),(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){An(vn-.1)},children:j.formatMessage({id:"pages.toolBar.zoomOut"})}),(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/save.png",children:j.formatMessage({id:"pages.toolBar.save"})}),(0,a.jsx)(C.Z,{active:I=="mover",imgSrc:"./pics/buttons/move.png",onClick:function(){J("mover")},children:j.formatMessage({id:"pages.toolBar.move"})}),(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){var i=(0,r.td)();i&&(ln(i.annos),z(i.currAnno))},children:j.formatMessage({id:"pages.toolBar.unDo"})}),(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){var i=(0,r.Vd)();i&&(ln(i.annos),z(i.currAnno))},children:j.formatMessage({id:"pages.toolBar.reDo"})}),(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:j.formatMessage({id:"pages.toolBar.clearMark"})})]}),(0,a.jsxs)("div",{id:"dr",className:"mainStage",children:[(0,a.jsx)("div",{className:"draw",children:(0,a.jsx)(p.Z,{scale:vn,annotations:tn,currentTool:I,currentAnnotation:dn,setCurrentAnnotation:z,onAnnotationModify:In,onAnnotationModifyComplete:function(){(0,r.k3)({annos:tn,currAnno:dn})},frontendIdOps:{frontendId:jn,setFrontendId:Zn},imgSrc:void 0,transparency:Dn,onAnnotationAdd:function(i){var nn=tn.concat([i]);ln(nn),dn||z(i)},drawTool:pn})}),(0,a.jsx)("div",{className:"pblock",children:(0,a.jsxs)("div",{className:"progress",children:[(0,a.jsx)(Z.Z,{className:"progressBar",percent:10,status:"active",showInfo:!1})," ",(0,a.jsx)("span",{className:"progressDesc",children:"Current labeling 1 of 300. Already labeled 20."})]})}),(0,a.jsx)("div",{className:"prevTask",onClick:function(){!task.prevTask()||(z(void 0),ln([]))}}),(0,a.jsx)("div",{className:"nextTask",onClick:function(){!task.nextTask()||(z(void 0),ln([]))}})]}),(0,a.jsxs)(T.Z,{disLoc:"right",children:[(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:j.formatMessage({id:"pages.toolBar.interactor"})}),(0,a.jsx)(Q.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:j.formatMessage({id:"pages.toolBar.segmentThreshold"})}),(0,a.jsx)(Q.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",size:Dn,maxSize:100,minSize:0,onChange:function(i){Wn(i)},children:j.formatMessage({id:"pages.toolBar.transparency"})}),(0,a.jsx)(Q.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:j.formatMessage({id:"pages.toolBar.visualRadius"})}),(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){F(!0)},children:j.formatMessage({id:"pages.toolBar.divideData"})}),(0,a.jsx)(C.Z,{imgSrc:"./pics/buttons/export.png",onClick:function(){rn(!0)},children:j.formatMessage({id:"pages.toolBar.export"})})]}),(0,a.jsxs)("div",{className:"rightSideBar",children:[(0,a.jsx)("div",{className:"determinOutline",children:(0,a.jsx)(en.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){z(void 0)},children:j.formatMessage({id:"pages.toolBar.determineOutline"})})}),(0,a.jsx)(R.Z,{labels:O,activeIds:new Set([k]),onLabelSelect:function(i){fn(i),z(void 0)},onLabelModify:function(){},onLabelDelete:function(i){var nn=[],sn=(0,H.Z)(O),Sn;try{for(sn.s();!(Sn=sn.n()).done;){var yn=Sn.value;yn.labelId!=i.labelId&&nn.push(yn)}}catch(zn){sn.e(zn)}finally{sn.f()}B(nn),(k==null?void 0:k.labelId)==i.labelId&&fn(void 0)},onLabelAdd:function(i){O.push(i),B(O),fn(i)}}),(0,a.jsx)(t.Z,{currAnnotation:dn,annotations:tn,onAnnotationSelect:function(i){i!=null&&i.delete||z(i)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(i){ln(tn.filter(function(nn){return nn.frontendId!=i.frontendId})),z(void 0)}})]}),(0,a.jsx)(c.Z,{visible:G,onCancel:function(){F(!1)},onFinish:function(){F(!1)}}),(0,a.jsx)(l.Z,{visible:on,onCancel:function(){rn(!1)},onFinish:function(){rn(!1)}})]})},S=U}}]);

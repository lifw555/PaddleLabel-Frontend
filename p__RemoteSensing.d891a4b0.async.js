(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[333],{41435:function(f,p,e){"use strict";e.d(p,{Z:function(){return a}});var R=e(94663),g=e(80112);function L(r){return Function.toString.call(r).indexOf("[native code]")!==-1}var P=e(18597);function M(r,o,Z){return(0,P.Z)()?M=Reflect.construct:M=function(i,u,y){var c=[null];c.push.apply(c,u);var l=Function.bind.apply(i,c),h=new l;return y&&(0,g.Z)(h,y.prototype),h},M.apply(null,arguments)}function a(r){var o=typeof Map=="function"?new Map:void 0;return a=function(d){if(d===null||!L(d))return d;if(typeof d!="function")throw new TypeError("Super expression must either be null or a function");if(typeof o!="undefined"){if(o.has(d))return o.get(d);o.set(d,i)}function i(){return M(d,arguments,(0,R.Z)(this).constructor)}return i.prototype=Object.create(d.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,g.Z)(i,d)},a(r)}},26647:function(f){f.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",popoverLeft:"popoverLeft___15lGe"}},52822:function(f){f.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},32495:function(f){f.exports={listItem:"listItem___1MXXF",eye:"eye___3nddM",delete:"delete___y9u-D",roundBall:"roundBall___DMczd",popover:"popover___E0HLD",annotationId:"annotationId___1ks8N",labelName:"labelName___130ie",listItemActive:"listItemActive___1rNB-"}},38670:function(f){f.exports={labelList:"labelList___3uLRO",listHeader:"listHeader___1ZPcO",eye:"eye___2yUvw",roundBall:"roundBall___1xKCU"}},5882:function(f){f.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",delete:"delete___WHPf2",listItemActive:"listItemActive___3FRb7"}},56131:function(f){f.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(f){f.exports={container:"container___G0FNe"}},80961:function(f){f.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(f){f.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},72869:function(f){f.exports={map:"map___92VPN",customControlIcon:"customControlIcon___3Ki2y"}},20474:function(f){f.exports={RSPop1:"RSPop1___vz5Me",RSPop2:"RSPop2___34pQA"}},87610:function(f){f.exports={RSPop1:"RSPop1___1iBEf",RSPop2:"RSPop2___1W841",RSPop3:"RSPop3___1Whcp"}},55252:function(f){f.exports={RSPop1:"RSPop1___17x8k",RSPop2:"RSPop2___27kK5"}},75513:function(f){f.exports={segment:"segment___3WmPw",mainStage:"mainStage___2kT1s",draw:"draw___Ff0QW",pblock:"pblock___3sGxC",progress:"progress___KQyBx",rightSideBar:"rightSideBar___11FX3",determinOutline:"determinOutline___1g1YI"}},27992:function(f,p,e){"use strict";var R=e(20136),g=e(55241),L=e(77883),P=e(70507),M=e(57663),a=e(71577),r=e(2824),o=e(67294),Z=e(61541),d=e(26647),i=e.n(d),u=e(85893),y=0,c=100,l=10,h=function(m){var G=(0,o.useState)(N(m.size)),W=(0,r.Z)(G,2),n=W[0],b=W[1];function E(S){b(N(S))}var B=m.minSize==null?y:m.minSize,D=m.maxSize==null?c:m.maxSize;function N(S){return S==null?l:S<=B?B:S>=D?D:S}return(0,o.useEffect)(function(){E(m.size),console.log("props.size changed to:".concat(m.size))},[m.size]),(0,u.jsxs)(g.Z,{overlayClassName:"".concat(i().popover," ").concat(m.disLoc=="left"?i().popoverLeft:""),placement:m.disLoc||"right",content:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{type:"text",onClick:function(){var K,I=N(n-1);E(I),(K=m.onChange)===null||K===void 0||K.call(0,I)},children:"-"}),(0,u.jsx)(P.Z,{min:B,max:D,value:n,onChange:function(K){var I;(I=m.onChange)===null||I===void 0||I.call(0,K)},controls:!1,style:{textAlign:"center"}}),(0,u.jsx)(a.Z,{type:"text",onClick:function(){var K,I=N(n+1);E(I),(K=m.onChange)===null||K===void 0||K.call(0,I)},children:"+"})]}),trigger:"hover",children:[" ",(0,u.jsx)(Z.Z,{imgSrc:m.imgSrc||"",onClick:m.onClick,children:m.children})]})};p.Z=h},63097:function(f,p,e){"use strict";var R=e(20136),g=e(55241),L=e(2824),P=e(67294),M=e(52822),a=e.n(M),r=e(63144),o=e(85893),Z=function(i){var u=(0,P.useState)(i.color||"#FFF"),y=(0,L.Z)(u,2),c=y[0],l=y[1];return(0,P.useEffect)(function(){l(i.color||"#FFF")},[i]),i.changeable?(0,o.jsx)(g.Z,{getPopupContainer:function(T){return T.parentElement||document.body},overlayClassName:a().popover,openClassName:a().popoverOpenClassName,placement:"bottom",content:(0,o.jsx)(r.xS,{disableAlpha:!0,color:c,onChange:function(T){l(T.hex)},onChangeComplete:i.onChange}),trigger:"click",children:(0,o.jsx)("div",{className:a().roundBall,style:{backgroundColor:c}})}):(0,o.jsx)("div",{className:a().roundBall,style:{backgroundColor:c}})};p.Z=Z},51327:function(f,p,e){"use strict";e.d(p,{Z:function(){return G}});var R=e(54421),g=e(38272),L=e(57663),P=e(71577),M=e(67294),a=e(38670),r=e.n(a),o=e(49111),Z=e(19650),d=e(11849),i=e(32495),u=e.n(i),y=e(63097),c=e(85893),l=function(n){var b=(0,d.Z)({},n.annotation),E=!1,B=(0,c.jsxs)(g.ZP.Item,{className:"".concat(u().listItem," ").concat(n.active?u().listItemActive:""),unselectable:"on",onClick:function(){console.log("click List.Item"),n.onClick(b)},children:[(0,c.jsxs)(Z.Z,{align:"center",size:5,children:[(0,c.jsx)("a",{className:u().eye,style:{backgroundImage:E?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(N){N.stopPropagation(),n.onAnnotationModify(b)}})," ",(0,c.jsx)("span",{className:u().annotationId,children:b.properties.annotationId}),(0,c.jsx)("span",{className:u().labelName,children:b.properties.labelName}),(0,c.jsx)(y.Z,{color:b.properties.stroke})]}),(0,c.jsx)("a",{className:u().delete,onClick:function(N){console.log("click List.Item.delete"),N.stopPropagation(),n.onAnnotationDelete(b)}})]});return B},h=l,T=e(48971),m=function(n){var b=(0,T.YB)().formatMessage({id:"component.PPAnnotationList.annotationList"}),E=(0,T.YB)().formatMessage({id:"component.PPAnnotationList.addAnnotation"});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(g.ZP,{className:r().labelList,size:"large",header:(0,c.jsx)("div",{className:r().listHeader,children:b}),bordered:!0,dataSource:n.annotations.features,renderItem:function(D){return(0,c.jsx)(h,{onClick:n.onAnnotationSelect,annotation:D,active:!1,onAnnotationDelete:n.onAnnotationDelete,onAnnotationModify:n.onAnnotationModify})},footer:(0,c.jsx)("div",{children:(0,c.jsx)(P.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){n.onAnnotationSelect(void 0)},block:!0,children:E})})})})},G=m},5041:function(f,p,e){"use strict";e.d(p,{Z:function(){return I}});var R=e(54421),g=e(38272),L=e(57663),P=e(71577),M=e(2824),a=e(67294),r=e(56131),o=e.n(r),Z=e(49111),d=e(19650),i=e(11849),u=e(5882),y=e.n(u),c=e(63097),l=e(85893),h=function(x){var O=(0,i.Z)({},x.label),$=(0,a.useState)(O.invisible),ne=(0,M.Z)($,2),Y=ne[0],v=ne[1],t=(0,a.useState)(0),w=(0,M.Z)(t,2),Q=w[0],k=w[1],q=x.hideEye?" ":(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{className:y().eye,style:{backgroundImage:Y?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(ee){ee.stopPropagation(),v(!Y),x.onLabelModify(O)}})," "]}),re=x.hideColorPicker?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(c.Z,{color:O.color,changeable:!0,onChange:function(ee){O.color=ee.hex,x.onLabelModify(O)}}),de=(0,l.jsxs)(g.ZP.Item,{className:"".concat(y().listItem," ").concat(x.active?y().listItemActive:""),unselectable:"on",onClick:function(){x.onClick(O)},children:[(0,l.jsxs)(d.Z,{align:"center",size:5,children:[q,O.name,re]}),(0,l.jsx)("a",{className:y().delete,onClick:function(ee){ee.stopPropagation();var oe=new Date().getTime();oe-Q<300||(k(oe),x.onLabelDelete(O))}})]});return de},T=h,m=e(71194),G=e(50146),W=e(47673),n=e(24044),b=e(9715),E=e(93766),B=e(48971),D=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],N=function(x){var O,$,ne=(0,B.YB)().formatMessage({id:"component.PPAddLabelModal.selectColor"}),Y=(0,B.YB)().formatMessage({id:"component.PPAddLabelModal.addLabel"}),v=(0,B.YB)().formatMessage({id:"component.PPAddLabelModal.labelName"}),t=(0,B.YB)().formatMessage({id:"component.PPCreater.cancel"}),w=(0,B.YB)().formatMessage({id:"component.PPSegMode.ok"}),Q=(0,a.useState)(((O=x.defaultLabel)===null||O===void 0?void 0:O.color)||D[x.order||0]),k=(0,M.Z)(Q,2),q=k[0],re=k[1];(0,a.useEffect)(function(){var te;re(((te=x.defaultLabel)===null||te===void 0?void 0:te.color)||D[x.order||0])},[x]);var de=x.hideColorPicker?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(E.Z.Item,{label:ne,name:"color",children:(0,l.jsx)(c.Z,{color:q,onChange:function(J){re(J.hex)}})}),se=E.Z.useForm(),ee=(0,M.Z)(se,1),oe=ee[0];return(0,l.jsx)(G.Z,{title:Y,visible:x.visible,onCancel:x.onCancel,footer:null,children:(0,l.jsxs)(E.Z,{form:oe,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:($=x.defaultLabel)===null||$===void 0?void 0:$.name},onFinish:function(J){var Ee={name:J.labelname,color:q};x.onLabelAdd(Ee),oe.resetFields()},autoComplete:"off",children:[(0,l.jsx)(E.Z.Item,{label:v,name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,l.jsx)(n.Z,{})}),de,(0,l.jsx)(E.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(P.Z,{onClick:function(){var J;(J=x.onCancel)===null||J===void 0||J.call(0),oe.resetFields()},children:t}),(0,l.jsx)(P.Z,{type:"primary",htmlType:"submit",children:w})]})})]})})},S=N,K=function(x){var O,$=(0,B.YB)().formatMessage({id:"component.PPLabelList.addLabel"}),ne=(0,B.YB)().formatMessage({id:"component.PPLabelList.labelList"}),Y=(0,a.useState)(!1),v=(0,M.Z)(Y,2),t=v[0],w=v[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.ZP,{className:o().labelList,size:"large",header:(0,l.jsx)("div",{className:o().listHeader,children:ne}),footer:(0,l.jsx)("div",{children:(0,l.jsx)(P.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){w(!0)},block:!0,children:$})}),bordered:!0,dataSource:x.labels,renderItem:function(k){var q;return(0,l.jsx)(T,{hideColorPicker:x.hideColorPicker,hideEye:x.hideEye,onClick:x.onLabelSelect,label:k,active:(q=x.activeIds)===null||q===void 0?void 0:q.has(k.labelId),onLabelDelete:x.onLabelDelete,onLabelModify:x.onLabelModify})}}),(0,l.jsx)(S,{hideColorPicker:x.hideColorPicker,order:(O=x.labels)===null||O===void 0?void 0:O.length,visible:t,onLabelAdd:function(k){x.onLabelAdd(k),w(!1)},onCancel:function(){w(!1)}})]})},I=K},8088:function(f,p,e){"use strict";var R=e(67294),g=e(78677),L=e.n(g),P=e(85893),M=function(r){return(0,P.jsx)("div",{className:"".concat(L().container," ").concat(r.className),children:r.children})};p.Z=M},44434:function(f,p,e){"use strict";var R=e(67294),g=e(80961),L=e.n(g),P=e(85893),M=function(r){var o=L().leftToolbar;return r.disLoc=="right"&&(o=L().rightToolbar),(0,P.jsx)("div",{className:o,children:r.children})};p.Z=M},61541:function(f,p,e){"use strict";var R=e(49111),g=e(19650),L=e(67294),P=e(82499),M=e.n(P),a=e(85893),r=function(Z){return(0,a.jsx)("div",{unselectable:"on",className:"".concat(M().toolBarButtonContainerWrapper," ").concat(Z.active&&M().toolBarButtonContainerWrapperActive),onClick:Z.onClick,children:(0,a.jsx)(g.Z,{align:"center",className:M().toolBarButtonContainer,size:0,children:(0,a.jsxs)(g.Z,{align:"center",direction:"vertical",className:M().toolBarButton,size:0,children:[(0,a.jsx)("img",{src:Z.imgSrc}),(0,a.jsx)("div",{className:M().buttonText,children:Z.children})]})})})};p.Z=r},37233:function(f,p,e){"use strict";e.d(p,{Z:function(){return h}});var R=e(67294),g=e(11849),L=e(93224),P=e(41004),M=e(72869),a=e.n(M),r=e(74607),o=e(85893),Z=function(m){var G=m.children,W=m.leafletMapRef,n=m.displayTools,b=(0,L.Z)(m,["children","leafletMapRef","displayTools"]);return R.useEffect(function(){if(W.current){var E=W.current.leafletElement;E.pm.addControls({drawMarker:!1,drawCircle:!1,drawCircleMarker:!1,drawPolyline:!1,drawRectangle:!1,drawPolygon:!1,editMode:!1,dragMode:!1,cutPolygon:!0,rotateMode:!1,removalMode:!1}),E.pm.setGlobalOptions({pmIgnore:!1}),m.displayTools&&E.pm.Toolbar.createCustomControl({name:"StoreShapes",title:"Store all shapes",block:"custom",className:a().customControlIcon,toggle:!1,afterClick:function(){var D=JSON.stringify(E.pm.getGeomanDrawLayers(!0).toGeoJSON()),N="data.geojson",S=document.createElement("a");S.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(D)),S.setAttribute("download",N),S.style.display="none",document.body.appendChild(S),S.click(),console.log(D)}}),E.on("pm:create",function(B){m.onShapeCreate(B)}),E.on("pm:edit",function(B){m.onShapeEdit(B)})}},[]),(0,o.jsx)(P.Z,(0,g.Z)((0,g.Z)({ref:W},b),{},{children:G}))},d=Z,i=e(88014),u=e(16072),y=e(18836),c={lat:0,lng:0,zoom:2},l=function(m){var G=[c.lat,c.lng];return(0,o.jsx)(d,{leafletMapRef:m.leafletMapRef,displayTools:m.displayTools,className:a().map,center:G,zoom:c.zoom,onShapeCreate:m.onShapeCreate,onShapeEdit:m.onShapeEdit,zoomControl:!1,children:(0,o.jsxs)(i.Z,{position:"topright",children:[(0,o.jsx)(i.Z.BaseLayer,{checked:!0,name:"TianDiTu.Vector",children:(0,o.jsxs)(u.Z,{attribution:'\xA9 <a href="https://www.tianditu.gov.cn/">TianDiTu</a> GS(2021)3715',children:[(0,o.jsx)(y.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=8e879a4cad078fd3ce7456f2737fc4cc"}),(0,o.jsx)(y.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=8e879a4cad078fd3ce7456f2737fc4cc"})]})}),(0,o.jsx)(i.Z.Overlay,{name:"Esri.WorldImagery",children:(0,o.jsx)(y.Z,{attribution:"Tiles \xA9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})})]})})},h=l},49813:function(f,p,e){"use strict";var R=e(47673),g=e(24044),L=e(13062),P=e(71230),M=e(59250),a=e(13013),r=e(57663),o=e(71577),Z=e(89032),d=e(15746),i=e(30887),u=e(54689),y=e(34792),c=e(48086),l=e(89366),h=e(57254),T=e(20474),m=e.n(T),G=e(67294),W=e(48971),n=e(85893);function b(D){c.default.info("Click on menu item."),console.log("click",D)}var E=(0,n.jsxs)(u.Z,{onClick:b,children:[(0,n.jsx)(u.Z.Item,{icon:(0,n.jsx)(l.Z,{}),children:"1st menu item"},"1"),(0,n.jsx)(u.Z.Item,{icon:(0,n.jsx)(l.Z,{}),children:"2nd menu item"},"2"),(0,n.jsx)(u.Z.Item,{icon:(0,n.jsx)(l.Z,{}),children:"3rd menu item"},"3")]}),B=function(){var N=(0,W.YB)().formatMessage({id:"component.PPRS.pdParameter"}),S=(0,W.YB)().formatMessage({id:"component.PPRS.simplifiedDistance"}),K=(0,W.YB)().formatMessage({id:"component.PPRS.simplifiedAngle"}),I=(0,W.YB)().formatMessage({id:"component.PPRS.threshold"});return(0,n.jsxs)("div",{children:[(0,n.jsxs)(P.Z,{children:[(0,n.jsx)(d.Z,{span:12,className:m().RSPop1,children:(0,n.jsx)("span",{children:N})}),(0,n.jsx)(d.Z,{span:12,className:m().RSPop2,children:(0,n.jsx)(a.Z,{overlay:E,children:(0,n.jsxs)(o.Z,{style:{width:"100%"},children:["Dropdown ",(0,n.jsx)(h.Z,{})]})})})]}),(0,n.jsxs)(P.Z,{children:[(0,n.jsx)(d.Z,{span:12,className:m().RSPop1,children:(0,n.jsx)("span",{children:S})}),(0,n.jsx)(d.Z,{span:12,className:m().RSPop2,children:(0,n.jsx)(g.Z,{placeholder:"Basic usage"})})]}),(0,n.jsxs)(P.Z,{children:[(0,n.jsx)(d.Z,{span:12,className:m().RSPop1,children:(0,n.jsx)("span",{children:K})}),(0,n.jsx)(d.Z,{span:12,className:m().RSPop2,children:(0,n.jsx)(g.Z,{placeholder:"Basic usage"})})]}),(0,n.jsxs)(P.Z,{children:[(0,n.jsx)(d.Z,{span:12,className:m().RSPop1,children:(0,n.jsx)("span",{children:I})}),(0,n.jsx)(d.Z,{span:12,className:m().RSPop2,children:(0,n.jsx)(g.Z,{placeholder:"Basic usage"})})]})]})};p.Z=B},97927:function(f,p,e){"use strict";var R=e(13062),g=e(71230),L=e(47673),P=e(24044),M=e(89032),a=e(15746),r=e(87610),o=e.n(r),Z=e(67294),d=e(48971),i=e(85893),u=function(){var c=(0,d.YB)().formatMessage({id:"component.PPRS.gridSize"}),l=(0,d.YB)().formatMessage({id:"component.PPRS.overlap"}),h=(0,d.YB)().formatMessage({id:"component.PPRS.completed"},{show:1,total:16});return(0,i.jsxs)("div",{children:[(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(a.Z,{span:12,className:o().RSPop1,children:(0,i.jsx)("span",{children:c})}),(0,i.jsx)(a.Z,{span:12,className:o().RSPop2,children:(0,i.jsx)(P.Z,{placeholder:"Basic usage"})})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(a.Z,{span:12,className:o().RSPop1,children:(0,i.jsx)("span",{children:l})}),(0,i.jsx)(a.Z,{span:12,className:o().RSPop2,children:(0,i.jsx)(P.Z,{placeholder:"Basic usage"})})]}),(0,i.jsx)(g.Z,{children:(0,i.jsx)("span",{className:o().RSPop3,children:h})})]})};p.Z=u},91861:function(f,p,e){"use strict";e.d(p,{Ad:function(){return g},k3:function(){return L},Vd:function(){return P},td:function(){return M}});var R=40;function g(){localStorage.removeItem("history"),L([])}function L(a){var r=localStorage.getItem("history"),o=r?JSON.parse(r):{index:-1,items:[]};if(JSON.stringify(o.items[o.index])!=JSON.stringify(a)){var Z=o.index>R?o.index-R:0,d=o.items.splice(Z,o.index==0?1:o.index+1);o.items=d.concat([a]),o.index<=R?o.index++:o.index=R+1,localStorage.setItem("history",JSON.stringify(o))}}function P(){var a=localStorage.getItem("history");if(!!a){var r=JSON.parse(a);if(!!r&&!(r.index>=r.items.length-1))return r.index++,localStorage.setItem("history",JSON.stringify(r)),r.items[r.index]}}function M(){var a=localStorage.getItem("history");if(!!a){var r=JSON.parse(a);if(!(!r||!r.index)&&!(r.index<=0))return r.index--,localStorage.setItem("history",JSON.stringify(r)),r.items[r.index]}}},47712:function(f,p,e){"use strict";e.r(p),e.d(p,{default:function(){return Re}});var R=e(34669),g=e(54458),L=e(20136),P=e(55241),M=e(49111),a=e(19650),r=e(62350),o=e(75443),Z=e(57663),d=e(71577),i=e(2824),u=e(67294),y=e(75513),c=e.n(y),l=e(8088),h=e(61541),T=e(44434),m=e(5041),G=e(49813),W=e(98858),n=e(4914),b=e(13062),E=e(71230),B=e(59250),D=e(13013),N=e(89032),S=e(15746),K=e(30887),I=e(54689),Ce=e(34792),x=e(48086),O=e(89366),$=e(57254),ne=e(55252),Y=e.n(ne),v=e(48971),t=e(85893);function w(j){x.default.info("Click on menu item."),console.log("click",j)}var Q=(0,t.jsxs)(I.Z,{onClick:w,children:[(0,t.jsx)(I.Z.Item,{icon:(0,t.jsx)(O.Z,{}),children:"band_1"},"1"),(0,t.jsx)(I.Z.Item,{icon:(0,t.jsx)(O.Z,{}),children:"band_2"},"2"),(0,t.jsx)(I.Z.Item,{icon:(0,t.jsx)(O.Z,{}),children:"band_3"},"3")]}),k=function(){var ce=(0,v.YB)().formatMessage({id:"component.PPRS.r"}),U=(0,v.YB)().formatMessage({id:"component.PPRS.g"}),F=(0,v.YB)().formatMessage({id:"component.PPRS.b"}),ve=(0,v.YB)().formatMessage({id:"component.PPRS.dataInformation"}),fe=(0,v.YB)().formatMessage({id:"component.PPRS.fileName"}),me=(0,v.YB)().formatMessage({id:"component.PPRS.row"}),Pe=(0,v.YB)().formatMessage({id:"component.PPRS.column"}),V=(0,v.YB)().formatMessage({id:"component.PPRS.bands"}),z=(0,v.YB)().formatMessage({id:"component.PPRS.dataType"}),ae=(0,v.YB)().formatMessage({id:"component.PPRS.EPSG"}),ge=(0,v.YB)().formatMessage({id:"component.PPRS.unit"});return(0,t.jsxs)("div",{children:[(0,t.jsxs)(E.Z,{children:[(0,t.jsx)(S.Z,{className:Y().RSPop1,children:(0,t.jsx)("span",{children:ce})}),(0,t.jsx)(S.Z,{className:Y().RSPop2,children:(0,t.jsx)(D.Z,{overlay:Q,children:(0,t.jsxs)(d.Z,{style:{width:"100%"},children:["Band ",(0,t.jsx)($.Z,{})]})})}),(0,t.jsx)(S.Z,{className:Y().RSPop1,children:(0,t.jsx)("span",{children:U})}),(0,t.jsx)(S.Z,{className:Y().RSPop2,children:(0,t.jsx)(D.Z,{overlay:Q,children:(0,t.jsxs)(d.Z,{style:{width:"100%"},children:["Band ",(0,t.jsx)($.Z,{})]})})}),(0,t.jsx)(S.Z,{className:Y().RSPop1,children:(0,t.jsx)("span",{children:F})}),(0,t.jsx)(S.Z,{className:Y().RSPop2,children:(0,t.jsx)(D.Z,{overlay:Q,children:(0,t.jsxs)(d.Z,{style:{width:"100%"},children:["Band ",(0,t.jsx)($.Z,{})]})})})]}),(0,t.jsxs)(n.Z,{title:ve,column:1,bordered:!0,children:[(0,t.jsx)(n.Z.Item,{label:fe,children:"A/XXX.tif"}),(0,t.jsx)(n.Z.Item,{label:me,children:"1234"}),(0,t.jsx)(n.Z.Item,{label:Pe,children:"897"}),(0,t.jsx)(n.Z.Item,{label:V,children:"7"}),(0,t.jsx)(n.Z.Item,{label:z,children:"UInt16"}),(0,t.jsx)(n.Z.Item,{label:ae,children:"7030"}),(0,t.jsx)(n.Z.Item,{label:ge,children:"m"})]})]})},q=k,re=e(97927),de=e(37233),se=e(51327),ee=e(11849);function oe(j){var ce=(0,u.useState)(0),U=(0,i.Z)(ce,2),F=U[0],ve=U[1],fe=(0,u.useState)(!1),me=(0,i.Z)(fe,2),Pe=me[0],V=me[1];(0,u.useEffect)(function(){localStorage.setItem("currentLabel",JSON.stringify(j.currentLabel||{}))},[j.currentLabel]),(0,u.useEffect)(function(){localStorage.setItem("annotations",JSON.stringify(j.annotations||{}))},[j.annotations]);var z=function(){var s,C=(s=j.leafletMapRef.current)===null||s===void 0?void 0:s.leafletElement.pm.globalDrawModeEnabled();console.log(C)},ae=function(s){var C=localStorage.getItem("currentLabel");if(C!="{}"){var H,le;V(!0);var X=JSON.parse(C||"{}");(H=j.leafletMapRef.current)===null||H===void 0||H.leafletElement.pm.enableDraw(s),(le=j.leafletMapRef.current)===null||le===void 0||le.leafletElement.pm.setPathOptions({color:X==null?void 0:X.color,fillColor:X==null?void 0:X.color,fillOpacity:.4})}else{var ue;alert("Test"),(ue=j.leafletMapRef.current)===null||ue===void 0||ue.leafletElement.pm.disableDraw(s),V(!1)}},ge=function(s){var C;(C=j.leafletMapRef.current)===null||C===void 0||C.leafletElement.pm.disableDraw(s),V(!1),z()},he=function(){var s;return(s=j.leafletMapRef.current)===null||s===void 0?void 0:s.leafletElement.pm.Draw.getActiveShape()},Be=function(){if(he()=="Polygon"){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.Draw.Polygon._removeLastVertex(),z()}else z(),V(!1)},xe=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.toggleGlobalDragMode(),z()},De=function(){if(he()=="Polygon"){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.Draw.Polygon._finishShape(),z(),V(!1)}else z(),V(!1)},Le=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.enableGlobalRemovalMode(),z()},je=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.toggleGlobalEditMode(),z(),V(!1)},Me=function(){V(!1)},ye=function(s){var C=s.toGeoJSON(),H=JSON.parse(localStorage.getItem("currentLabel")||"{}");ve(F+1),C.properties={labelName:H==null?void 0:H.name,stroke:H==null?void 0:H.color,annotationId:F+1};var le=JSON.parse(localStorage.getItem("annotations")||"{}"),X=(0,ee.Z)((0,ee.Z)({},le),{},{features:le.features.concat(C)});console.log(X),j.setAnnotations(X),j.recordHistory(X)};function Ze(A){V(!1),ye(A.layer)}var _e=function(s){console.log(s)},pe=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.zoomIn(),z()},Se=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.zoomOut(),z()};return{polyVisable:Pe,RSDraw:ae,RSDrawDisable:ge,removeLastVertex:Be,moveShape:xe,finishShape:De,removeShape:Le,editMode:je,saveGeoJson:Me,storeOnDb:ye,onShapeCreate:Ze,onShapeEdit:_e,toolZoomIn:pe,toolZoomOut:Se,currentShape:he}}var te=e(27992),J=e(91861),Ee=e(64322),Oe=function(){var ce=(0,Ee.$L)(u.useState,u.useEffect,{label:{oneHot:!1},tool:{defaultTool:"mover"},effectTrigger:{}}),U=(0,i.Z)(ce,10),F=U[0],ve=U[1],fe=U[2],me=U[3],Pe=U[4],V=U[5],z=U[6],ae=U[7],ge=U[8],he=U[9],Be=(0,u.useState)(!1),xe=(0,i.Z)(Be,2),De=xe[0],Le=xe[1],je=(0,u.useState)(!1),Me=(0,i.Z)(je,2),ye=Me[0],Ze=Me[1],_e=(0,u.useState)({type:"FeatureCollection",features:[]}),pe=(0,i.Z)(_e,2),Se=pe[0],A=pe[1];(0,u.useEffect)(function(){(0,J.Ad)()},[]),console.log("rs is re-rendering! label.curr: ".concat(JSON.stringify(ae.curr)));var s=u.useRef(null),C=oe({leafletMapRef:s,currentLabel:ae.curr,setAnnotations:A,annotations:Se,recordHistory:J.k3}),H=(0,v.YB)().formatMessage({id:"pages.Maps.finished"}),le=(0,v.YB)().formatMessage({id:"pages.Maps.removeLastVertex"}),X=(0,v.YB)().formatMessage({id:"pages.Maps.cancel"}),ue=(0,v.YB)().formatMessage({id:"pages.Maps.boundary"}),Ie=(0,v.YB)().formatMessage({id:"pages.Maps.remoteSensing"}),Ae=(0,v.YB)().formatMessage({id:"pages.Maps.grids"}),Te=(0,v.YB)().formatMessage({id:"pages.toolBar.polygon"}),be=(0,v.YB)().formatMessage({id:"pages.toolBar.rubber"}),We=(0,v.YB)().formatMessage({id:"pages.toolBar.zoomIn"}),Ne=(0,v.YB)().formatMessage({id:"pages.toolBar.zoomOut"}),Ue=(0,v.YB)().formatMessage({id:"pages.toolBar.move"}),Fe=(0,v.YB)().formatMessage({id:"pages.toolBar.unDo"}),Ke=(0,v.YB)().formatMessage({id:"pages.toolBar.reDo"}),Ye=(0,v.YB)().formatMessage({id:"pages.toolBar.save"}),ze=(0,v.YB)().formatMessage({id:"pages.toolBar.edit"}),Ge=(0,v.YB)().formatMessage({id:"pages.toolBar.clearMark"}),Je=(0,v.YB)().formatMessage({id:"pages.toolBar.interactor"}),Ve=(0,v.YB)().formatMessage({id:"pages.toolBar.segmentThreshold"}),He=(0,v.YB)().formatMessage({id:"pages.toolBar.transparency"}),Xe=(0,v.YB)().formatMessage({id:"pages.toolBar.visualRadius"}),$e=(0,v.YB)().formatMessage({id:"pages.toolBar.determineOutline"}),Qe=(0,v.YB)().formatMessage({id:"pages.toolBar.divideData"}),ke=(0,v.YB)().formatMessage({id:"pages.toolBar.export"});return(0,t.jsxs)(l.Z,{className:c().segment,children:[(0,t.jsxs)(T.Z,{children:[(0,t.jsx)(P.Z,{placement:"rightTop",visible:C.polyVisable,content:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(d.Z,{type:"primary",onClick:function(){C.finishShape()},children:H}),(0,t.jsx)(d.Z,{type:"primary",onClick:function(){C.removeLastVertex()},children:le}),(0,t.jsx)(o.Z,{title:"Are you sure cancel this task?",okText:"Yes",cancelText:"No",children:(0,t.jsx)(d.Z,{type:"primary",onClick:function(){C.RSDrawDisable(C.currentShape())},children:X})})]})}),trigger:F.curr=="Polygon"?"hover":"click",children:(0,t.jsx)(h.Z,{active:F.curr=="Polygon",imgSrc:"./pics/buttons/polygon.png",onClick:function(){F.setCurr("Polygon"),C.RSDraw("Polygon")},children:Te})}),(0,t.jsx)(h.Z,{onClick:function(){C.editMode()},imgSrc:"./pics/buttons/edit.png",children:ze}),(0,t.jsxs)(P.Z,{placement:"rightTop",title:"title",content:"content",trigger:F.curr=="rubber"?"hover":"click",children:[" ",(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/rubber.png",onClick:function(){C.removeShape()},children:be})]}),(0,t.jsx)(h.Z,{onClick:function(){C.toolZoomIn()},imgSrc:"./pics/buttons/zoom_in.png",children:We}),(0,t.jsx)(h.Z,{onClick:function(){C.toolZoomOut()},imgSrc:"./pics/buttons/zoom_out.png",children:Ne}),(0,t.jsx)(h.Z,{onClick:function(){C.saveGeoJson()},imgSrc:"./pics/buttons/save.png",children:Ye}),(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){return C.moveShape()},children:Ue}),(0,t.jsx)(h.Z,{onClick:function(){var ie=(0,J.td)()},imgSrc:"./pics/buttons/prev.png",children:Fe}),(0,t.jsx)(h.Z,{onClick:function(){var ie=(0,J.Vd)()},imgSrc:"./pics/buttons/next.png",children:Ke}),(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:Ge})]}),(0,t.jsxs)("div",{className:c().mainStage,children:[(0,t.jsx)("div",{className:c().draw,children:(0,t.jsx)(de.Z,{leafletMapRef:s,onShapeCreate:C.onShapeCreate,onShapeEdit:C.onShapeEdit})}),(0,t.jsx)("div",{className:c().pblock,children:(0,t.jsx)("div",{className:c().progress,children:(0,t.jsx)(g.Z,{percent:50,status:"active"})})})]}),(0,t.jsxs)(T.Z,{disLoc:"right",children:[(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:Je}),(0,t.jsx)(te.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:Ve}),(0,t.jsx)(te.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:He}),(0,t.jsx)(te.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:Xe}),(0,t.jsxs)(P.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of boundary simplification",content:(0,t.jsx)(G.Z,{}),trigger:F.curr=="boundry"?"click":"hover",children:[" ",(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/border_simplify.png",onClick:function(){F.setCurr("boundry")},children:ue})]}),(0,t.jsxs)(P.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of remote sensing",content:(0,t.jsx)(q,{}),trigger:F.curr=="colorgun"?"click":"hover",children:[" ",(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/remote_sensing_setting.png",onClick:function(){F.setCurr("colorgun")},children:Ie})]}),(0,t.jsxs)(P.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Switch grids",content:(0,t.jsx)(re.Z,{}),trigger:F.curr=="grid"?"click":"hover",children:[" ",(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/switch_grid.png",onClick:function(){F.setCurr("grid")},children:Ae})]}),(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/data_division.png",children:Qe}),(0,t.jsx)(h.Z,{imgSrc:"./pics/buttons/export.png",children:ke})]}),(0,t.jsxs)("div",{className:c().rightSideBar,children:[(0,t.jsx)("div",{className:c().determinOutline,children:(0,t.jsx)(d.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,children:$e})}),(0,t.jsx)(m.Z,{selectedLabel:ae.curr,onLabelSelect:function(ie){ae.setCurr(ie),console.log(ie)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,t.jsx)(se.Z,{annotations:Se,onAnnotationSelect:function(){},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(){}})]})]})},Re=Oe}}]);

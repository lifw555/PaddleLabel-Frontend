(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[661],{53469:function(){},62462:function(ot,Ge,s){"use strict";s.d(Ge,{Z:function(){return Vt}});var P=s(22122),le=s(90484),t=s(67294),Ve=s(95357),p=s(28991),$=s(96156),g=s(28481),we=s(81253),at=s(94184),H=s.n(at),ke=s(27678),je=s(21770),it=s(83230),ce=s(64019),st=s(80334),Ae=s(75164);function lt(a){var e=t.useRef(null),n=t.useState(a),r=(0,g.Z)(n,2),i=r[0],u=r[1],c=t.useRef([]),v=function(f){e.current===null&&(c.current=[],e.current=(0,Ae.Z)(function(){u(function(d){var y=d;return c.current.forEach(function(Z){y=(0,p.Z)((0,p.Z)({},y),Z)}),e.current=null,y})})),c.current.push(f)};return t.useEffect(function(){return function(){return e.current&&Ae.Z.cancel(e.current)}},[]),[i,v]}function Te(a,e,n,r){var i=e+n,u=(n-r)/2;if(n>r){if(e>0)return(0,$.Z)({},a,u);if(e<0&&i<r)return(0,$.Z)({},a,-u)}else if(e<0||i>r)return(0,$.Z)({},a,e<0?u:-u);return{}}function ct(a,e,n,r){var i=(0,ke.g1)(),u=i.width,c=i.height,v=null;return a<=u&&e<=c?v={x:0,y:0}:(a>u||e>c)&&(v=(0,p.Z)((0,p.Z)({},Te("x",n,a,u)),Te("y",r,e,c))),v}var ut=["visible","onVisibleChange","getContainer","current"],be=t.createContext({previewUrls:new Map,setPreviewUrls:function(){return null},current:null,setCurrent:function(){return null},setShowPreview:function(){return null},setMousePosition:function(){return null},registerImage:function(){return function(){return null}}}),vt=be.Provider,ft=function(e){var n=e.previewPrefixCls,r=n===void 0?"rc-image-preview":n,i=e.children,u=e.icons,c=u===void 0?{}:u,v=e.preview,m=(0,le.Z)(v)==="object"?v:{},f=m.visible,d=f===void 0?void 0:f,y=m.onVisibleChange,Z=y===void 0?void 0:y,k=m.getContainer,N=k===void 0?void 0:k,j=m.current,ue=j===void 0?0:j,B=(0,we.Z)(m,ut),re=(0,t.useState)(new Map),K=(0,g.Z)(re,2),I=K[0],D=K[1],ve=(0,t.useState)(),Y=(0,g.Z)(ve,2),F=Y[0],U=Y[1],fe=(0,je.Z)(!!d,{value:d,onChange:Z}),X=(0,g.Z)(fe,2),S=X[0],b=X[1],w=(0,t.useState)(null),x=(0,g.Z)(w,2),ne=x[0],G=x[1],L=d!==void 0,oe=Array.from(I.keys()),E=oe[ue],A=new Map(Array.from(I).filter(function(z){var C=(0,g.Z)(z,2),h=C[1].canPreview;return!!h}).map(function(z){var C=(0,g.Z)(z,2),h=C[0],O=C[1].url;return[h,O]})),J=function(C,h){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,de=function(){D(function(Q){var W=new Map(Q),ie=W.delete(C);return ie?W:Q})};return D(function(T){return new Map(T).set(C,{url:h,canPreview:O})}),de},ae=function(C){C.stopPropagation(),b(!1),G(null)};return t.useEffect(function(){U(E)},[E]),t.useEffect(function(){!S&&L&&U(E)},[E,L,S]),t.createElement(vt,{value:{isPreviewGroup:!0,previewUrls:A,setPreviewUrls:D,current:F,setCurrent:U,setShowPreview:b,setMousePosition:G,registerImage:J}},i,t.createElement(Be,(0,P.Z)({"aria-hidden":!S,visible:S,prefixCls:r,onClose:ae,mousePosition:ne,src:A.get(F),icons:c,getContainer:N},B)))},dt=ft,mt=["prefixCls","src","alt","onClose","afterClose","visible","icons"],We=t.useState,He=t.useEffect,Ce={x:0,y:0},gt=function(e){var n=e.prefixCls,r=e.src,i=e.alt,u=e.onClose,c=e.afterClose,v=e.visible,m=e.icons,f=m===void 0?{}:m,d=(0,we.Z)(e,mt),y=f.rotateLeft,Z=f.rotateRight,k=f.zoomIn,N=f.zoomOut,j=f.close,ue=f.left,B=f.right,re=We(1),K=(0,g.Z)(re,2),I=K[0],D=K[1],ve=We(0),Y=(0,g.Z)(ve,2),F=Y[0],U=Y[1],fe=lt(Ce),X=(0,g.Z)(fe,2),S=X[0],b=X[1],w=t.useRef(),x=t.useRef({originX:0,originY:0,deltaX:0,deltaY:0}),ne=t.useState(!1),G=(0,g.Z)(ne,2),L=G[0],oe=G[1],E=t.useContext(be),A=E.previewUrls,J=E.current,ae=E.isPreviewGroup,z=E.setCurrent,C=A.size,h=Array.from(A.keys()),O=h.indexOf(J),de=ae?A.get(J):r,T=ae&&C>1,Q=t.useState({wheelDirection:0}),W=(0,g.Z)(Q,2),ie=W[0],Ze=W[1],me=function(){D(1),U(0),b(Ce)},_=function(){D(function(o){return o+1}),b(Ce)},Se=function(){I>1&&D(function(o){return o-1}),b(Ce)},xe=function(){U(function(o){return o+90})},ze=function(){U(function(o){return o-90})},Oe=function(o){o.preventDefault(),o.stopPropagation(),O>0&&z(h[O-1])},q=function(o){o.preventDefault(),o.stopPropagation(),O<C-1&&z(h[O+1])},ee=H()((0,$.Z)({},"".concat(n,"-moving"),L)),ge="".concat(n,"-operations-operation"),$e="".concat(n,"-operations-icon"),De=[{icon:j,onClick:u,type:"close"},{icon:k,onClick:_,type:"zoomIn"},{icon:N,onClick:Se,type:"zoomOut",disabled:I===1},{icon:Z,onClick:xe,type:"rotateRight"},{icon:y,onClick:ze,type:"rotateLeft"}],ye=function(){if(v&&L){var o=w.current.offsetWidth*I,R=w.current.offsetHeight*I,V=w.current.getBoundingClientRect(),te=V.left,pe=V.top,Me=F%180!=0;oe(!1);var Ie=ct(Me?R:o,Me?o:R,te,pe);Ie&&b((0,p.Z)({},Ie))}},Ee=function(o){o.button===0&&(o.preventDefault(),o.stopPropagation(),x.current.deltaX=o.pageX-S.x,x.current.deltaY=o.pageY-S.y,x.current.originX=S.x,x.current.originY=S.y,oe(!0))},Re=function(o){v&&L&&b({x:o.pageX-x.current.deltaX,y:o.pageY-x.current.deltaY})},Ue=function(o){if(!!v){o.preventDefault();var R=o.deltaY;Ze({wheelDirection:R})}};return He(function(){var l=ie.wheelDirection;l>0?Se():l<0&&_()},[ie]),He(function(){var l,o,R=(0,ce.Z)(window,"mouseup",ye,!1),V=(0,ce.Z)(window,"mousemove",Re,!1),te=(0,ce.Z)(window,"wheel",Ue,{passive:!1});try{window.top!==window.self&&(l=(0,ce.Z)(window.top,"mouseup",ye,!1),o=(0,ce.Z)(window.top,"mousemove",Re,!1))}catch(pe){(0,st.Kp)(!1,"[rc-image] ".concat(pe))}return function(){R.remove(),V.remove(),te.remove(),l&&l.remove(),o&&o.remove()}},[v,L]),t.createElement(it.Z,(0,P.Z)({transitionName:"zoom",maskTransitionName:"fade",closable:!1,keyboard:!0,prefixCls:n,onClose:u,afterClose:me,visible:v,wrapClassName:ee},d),t.createElement("ul",{className:"".concat(n,"-operations")},De.map(function(l){var o=l.icon,R=l.onClick,V=l.type,te=l.disabled;return t.createElement("li",{className:H()(ge,(0,$.Z)({},"".concat(n,"-operations-operation-disabled"),!!te)),onClick:R,key:V},t.isValidElement(o)?t.cloneElement(o,{className:$e}):o)})),t.createElement("div",{className:"".concat(n,"-img-wrapper"),style:{transform:"translate3d(".concat(S.x,"px, ").concat(S.y,"px, 0)")}},t.createElement("img",{onMouseDown:Ee,ref:w,className:"".concat(n,"-img"),src:de,alt:i,style:{transform:"scale3d(".concat(I,", ").concat(I,", 1) rotate(").concat(F,"deg)")}})),T&&t.createElement("div",{className:H()("".concat(n,"-switch-left"),(0,$.Z)({},"".concat(n,"-switch-left-disabled"),O===0)),onClick:Oe},ue),T&&t.createElement("div",{className:H()("".concat(n,"-switch-right"),(0,$.Z)({},"".concat(n,"-switch-right-disabled"),O===C-1)),onClick:q},B))},Be=gt,pt=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","crossOrigin","decoding","loading","referrerPolicy","sizes","srcSet","useMap"],wt=["src","visible","onVisibleChange","getContainer","mask","maskClassName","icons"],Ke=0,Ne=function(e){var n=e.src,r=e.alt,i=e.onPreviewClose,u=e.prefixCls,c=u===void 0?"rc-image":u,v=e.previewPrefixCls,m=v===void 0?"".concat(c,"-preview"):v,f=e.placeholder,d=e.fallback,y=e.width,Z=e.height,k=e.style,N=e.preview,j=N===void 0?!0:N,ue=e.className,B=e.onClick,re=e.onError,K=e.wrapperClassName,I=e.wrapperStyle,D=e.crossOrigin,ve=e.decoding,Y=e.loading,F=e.referrerPolicy,U=e.sizes,fe=e.srcSet,X=e.useMap,S=(0,we.Z)(e,pt),b=f&&f!==!0,w=(0,le.Z)(j)==="object"?j:{},x=w.src,ne=w.visible,G=ne===void 0?void 0:ne,L=w.onVisibleChange,oe=L===void 0?i:L,E=w.getContainer,A=E===void 0?void 0:E,J=w.mask,ae=w.maskClassName,z=w.icons,C=(0,we.Z)(w,wt),h=x!=null?x:n,O=G!==void 0,de=(0,je.Z)(!!G,{value:G,onChange:oe}),T=(0,g.Z)(de,2),Q=T[0],W=T[1],ie=(0,t.useState)(b?"loading":"normal"),Ze=(0,g.Z)(ie,2),me=Ze[0],_=Ze[1],Se=(0,t.useState)(null),xe=(0,g.Z)(Se,2),ze=xe[0],Oe=xe[1],q=me==="error",ee=t.useContext(be),ge=ee.isPreviewGroup,$e=ee.setCurrent,De=ee.setShowPreview,ye=ee.setMousePosition,Ee=ee.registerImage,Re=t.useState(function(){return Ke+=1,Ke}),Ue=(0,g.Z)(Re,1),l=Ue[0],o=j&&!q,R=t.useRef(!1),V=function(){_("normal")},te=function(M){re&&re(M),_("error")},pe=function(M){if(!O){var tt=(0,ke.os)(M.target),rt=tt.left,nt=tt.top;ge?($e(l),ye({x:rt,y:nt})):Oe({x:rt,y:nt})}ge?De(!0):W(!0),B&&B(M)},Me=function(M){M.stopPropagation(),W(!1),O||Oe(null)},Ie=function(M){R.current=!1,me==="loading"&&(M==null?void 0:M.complete)&&(M.naturalWidth||M.naturalHeight)&&(R.current=!0,V())};t.useEffect(function(){var se=Ee(l,h);return se},[]),t.useEffect(function(){Ee(l,h,o)},[h,o]),t.useEffect(function(){q&&_("normal"),b&&!R.current&&_("loading")},[n]);var kt=H()(c,K,(0,$.Z)({},"".concat(c,"-error"),q)),jt=q&&d?d:h,At={crossOrigin:D,decoding:ve,loading:Y,referrerPolicy:F,sizes:U,srcSet:fe,useMap:X,alt:r,className:H()("".concat(c,"-img"),(0,$.Z)({},"".concat(c,"-img-placeholder"),f===!0),ue),style:(0,p.Z)({height:Z},k)};return t.createElement(t.Fragment,null,t.createElement("div",(0,P.Z)({},S,{className:kt,onClick:o?pe:B,style:(0,p.Z)({width:y,height:Z},I)}),t.createElement("img",(0,P.Z)({},At,{ref:Ie},q&&d?{src:d}:{onLoad:V,onError:te,src:n})),me==="loading"&&t.createElement("div",{"aria-hidden":"true",className:"".concat(c,"-placeholder")},f),J&&o&&t.createElement("div",{className:H()("".concat(c,"-mask"),ae)},J)),!ge&&o&&t.createElement(Be,(0,P.Z)({"aria-hidden":!Q,visible:Q,prefixCls:m,onClose:Me,mousePosition:ze,src:jt,alt:r,getContainer:A,icons:z},C)))};Ne.PreviewGroup=dt,Ne.displayName="Image";var Ct=Ne,Ye=Ct,Fe=s(40378),ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"},Pt=ht,he=s(27029),Xe=function(e,n){return t.createElement(he.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:n,icon:Pt}))};Xe.displayName="RotateLeftOutlined";var Zt=t.forwardRef(Xe),St={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"},xt=St,Je=function(e,n){return t.createElement(he.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:n,icon:xt}))};Je.displayName="RotateRightOutlined";var Ot=t.forwardRef(Je),yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},Et=yt,Qe=function(e,n){return t.createElement(he.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:n,icon:Et}))};Qe.displayName="ZoomInOutlined";var Rt=t.forwardRef(Qe),Mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},It=Mt,_e=function(e,n){return t.createElement(he.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:n,icon:It}))};_e.displayName="ZoomOutOutlined";var bt=t.forwardRef(_e),Nt=s(54549),Lt=s(67724),zt=s(8812),Le=s(65632),Pe=s(33603),$t=function(a,e){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(a);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(a,r[i])&&(n[r[i]]=a[r[i]]);return n},qe={rotateLeft:t.createElement(Zt,null),rotateRight:t.createElement(Ot,null),zoomIn:t.createElement(Rt,null),zoomOut:t.createElement(bt,null),close:t.createElement(Nt.Z,null),left:t.createElement(Lt.Z,null),right:t.createElement(zt.Z,null)},Dt=function(e){var n=e.previewPrefixCls,r=e.preview,i=$t(e,["previewPrefixCls","preview"]),u=t.useContext(Le.E_),c=u.getPrefixCls,v=c("image-preview",n),m=c(),f=t.useMemo(function(){if(r===!1)return r;var d=(0,le.Z)(r)==="object"?r:{};return(0,P.Z)((0,P.Z)({},d),{transitionName:(0,Pe.m)(m,"zoom",d.transitionName),maskTransitionName:(0,Pe.m)(m,"fade",d.maskTransitionName)})},[r]);return t.createElement(Ye.PreviewGroup,(0,P.Z)({preview:f,previewPrefixCls:v,icons:qe},i))},Ut=Dt,Gt=function(a,e){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(a);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(a,r[i])&&(n[r[i]]=a[r[i]]);return n},et=function(e){var n=e.prefixCls,r=e.preview,i=Gt(e,["prefixCls","preview"]),u=(0,t.useContext)(Le.E_),c=u.getPrefixCls,v=c("image",n),m=c(),f=(0,t.useContext)(Le.E_),d=f.locale,y=d===void 0?Fe.Z:d,Z=y.Image||Fe.Z.Image,k=t.useMemo(function(){if(r===!1)return r;var N=(0,le.Z)(r)==="object"?r:{};return(0,P.Z)((0,P.Z)({mask:t.createElement("div",{className:"".concat(v,"-mask-info")},t.createElement(Ve.Z,null),Z==null?void 0:Z.preview),icons:qe},N),{transitionName:(0,Pe.m)(m,"zoom",N.transitionName),maskTransitionName:(0,Pe.m)(m,"fade",N.maskTransitionName)})},[r,Z]);return t.createElement(Ye,(0,P.Z)({prefixCls:v,preview:k},i))};et.PreviewGroup=Ut;var Vt=et},12968:function(ot,Ge,s){"use strict";var P=s(38663),le=s.n(P),t=s(53469),Ve=s.n(t)}}]);

(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[408],{32774:function(E){E.exports={det:"det___2iG9x",mainStage:"mainStage___Qp8In",draw:"draw___2IpRn",pblock:"pblock___wJLzi",progress:"progress___2SU43",rightSideBar:"rightSideBar___1NCKK"}},10063:function(E,p,i){"use strict";i.r(p);var nn=i(34669),Z=i(54458),d=i(2824),l=i(67294),j=i(32774),_=i.n(j),B=i(8088),s=i(61541),U=i(44434),R=i(5041),K=i(57436),N=i(14836),W=i(29919),J=i(13931),e=i(85893),P=40,k=function(){var H=(0,l.useState)(void 0),x=(0,d.Z)(H,2),g=x[0],w=x[1],F=(0,l.useState)({color:"",name:""}),A=(0,d.Z)(F,2),h=A[0],L=A[1],G=(0,l.useState)(),y=(0,d.Z)(G,2),f=y[0],m=y[1],Q=(0,l.useState)([]),O=(0,d.Z)(Q,2),r=O[0],u=O[1],Y=(0,l.useState)(1),D=(0,d.Z)(Y,2),v=D[0],S=D[1],C=function(n){n||S(1),n<.1||n>3?S(1):S(n)},c=function(n){m(n),n!=null&&n.label&&L(n.label)};(0,l.useEffect)(function(){localStorage.removeItem("history"),b([])},[]);function b(a,n){var t=localStorage.getItem("history"),o=t?JSON.parse(t):{index:-1,items:[]},T={currentAnnotation:n,annotations:a};if(JSON.stringify(o.items[o.index])!=JSON.stringify(T)){var $=o.index>P?o.index-P:0,q=o.items.splice($,o.index==0?1:o.index+1);o.items=q.concat([T]),o.index<=P?o.index++:o.index=P+1,localStorage.setItem("history",JSON.stringify(o))}}var z=function(){var n=localStorage.getItem("history");if(!!n){var t=JSON.parse(n);if(!!t&&!(t.index>=t.items.length-1)){t.index++,localStorage.setItem("history",JSON.stringify(t));var o=t.items[t.index];m(o.currentAnnotation),u(o.annotations)}}},V=function(){var n=localStorage.getItem("history");if(!!n){var t=JSON.parse(n);if(!(!t||!t.index)&&!(t.index<=0)){t.index--,localStorage.setItem("history",JSON.stringify(t));var o=t.items[t.index];m(o.currentAnnotation),u(o.annotations)}}},X=function(n){for(var t=[],o=0;o<r.length;o++)r[o].annotationId==n.annotationId?t.push(n):t.push(r[o]);c(n),u(t)},I=(0,J.Z)({currentLabel:h,currentTool:g,annotations:r,currentAnnotation:f,onAnnotationAdd:function(n){var t=r.concat([n]);u(t),f||c(n)},onAnnotationModify:X,onMouseUp:function(){b(r,f)}}),M=I;return(0,e.jsxs)(B.Z,{className:_().det,children:[(0,e.jsxs)(U.Z,{children:[(0,e.jsx)(W.Z,{active:g=="polygon",onClick:function(){w("polygon"),c(void 0)},children:"Polygon"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){C(v+.1)},children:"Zoom in"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){C(v-.1)},children:"Zoom out"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){V()},children:"Undo"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){z()},children:"Redo"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,e.jsxs)("div",{className:_().mainStage,children:[(0,e.jsx)("div",{className:_().draw,children:(0,e.jsx)(K.Z,{scale:v,annotations:r,currentTool:g,onMouseDown:M.onMouseDown,onMouseMove:M.onMouseMove,onMouseUp:M.onMouseUp,createPolygonFunc:I.createElementsFunc})}),(0,e.jsx)("div",{className:_().pblock,children:(0,e.jsx)("div",{className:_().progress,children:(0,e.jsx)(Z.Z,{percent:50,status:"active"})})})]}),(0,e.jsxs)("div",{className:_().rightSideBar,children:[(0,e.jsx)(R.Z,{selectedLabel:h,onLabelSelect:function(n){L(n),c(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,e.jsx)(N.Z,{selectedAnnotation:f,annotations:r,onAnnotationSelect:function(n){n!=null&&n.delete||c(n)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(n){u(r.filter(function(t){return t.annotationId!=n.annotationId})),c(void 0)}})]})]})};p.default=k}}]);

(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[322],{64322:function(ve,re,W){"use strict";W.d(re,{gu:function(){return ue},os:function(){return le},Gd:function(){return ee},$L:function(){return oe}});var X=W(11849),Y=W(91220),P=W(3182),ge=W(34792),S=W(48086),U=W(2824),ae=W(94043),u=W.n(ae),q=W(48971),M=W(37071),G=W(81139),z=localStorage.getItem("basePath"),J=new G.VK(z?{basePath:z}:void 0),N=new G.U(J),ne=new G.sD(J),te=new G.W6(J),Q=new G.Cl(J),x=new G.vb(J),ue=function(f){return JSON.parse(JSON.stringify(f))};function le(T){return T&&(T.toLowerCase().replace(/([-_][a-z])/g,function(f){return f.toUpperCase().replace("-","").replace("_","")}),T)}var V=function(f,m,b){if(!!b){for(var i=typeof f=="number"?f:f[b],w=0;w<m.length;w++)if(i==m[w][b])return w}},se=function(f){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.1,20],b=f(1),i=(0,U.Z)(b,2),w=i[0],_=i[1];function A(k){var I=k;I<m[0]&&(I=m[0],S.default.error("Smallest scale is "+m[0])),I>m[1]&&(I=m[1],S.default.error("Largest scale is "+m[1])),_(I)}function n(k){A(w+k)}return{curr:w,change:n,setScale:A}};function ie(T){var f=T(!1),m=(0,U.Z)(f,2),b=m[0],i=m[1];return{curr:b,setCurr:i}}var ee=function(f){var m=f(),b=(0,U.Z)(m,2),i=b[0],w=b[1],_=f(),A=(0,U.Z)(_,2),n=A[0],k=A[1],I=f(),j=(0,U.Z)(I,2),O=j[0],y=j[1];function L(){return g.apply(this,arguments)}function g(){return g=(0,P.Z)(u().mark(function c(){var r;return u().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,p.next=3,N.getAll();case 3:return r=p.sent,w(r),p.abrupt("return",r);case 8:return p.prev=8,p.t0=p.catch(0),console.log("project getAll err",p.t0),M.Z.parseError(p.t0,S.default),p.abrupt("return");case 13:case"end":return p.stop()}},c,null,[[0,8]])})),g.apply(this,arguments)}function t(c){return $.apply(this,arguments)}function $(){return $=(0,P.Z)(u().mark(function c(r){var a;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r!=null){e.next=2;break}return e.abrupt("return",void 0);case 2:if(!(i&&i.length>1)){e.next=5;break}return S.default.error("Currently have multiple projects stored, use turnTo instead"),e.abrupt("return");case 5:return e.next=7,N.get(r);case 7:return a=e.sent,w([a]),k(0),e.abrupt("return",a);case 11:case"end":return e.stop()}},c)})),$.apply(this,arguments)}function s(c){return D.apply(this,arguments)}function D(){return D=(0,P.Z)(u().mark(function c(r){return u().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return k(r),p.abrupt("return",i[r]);case 2:case"end":return p.stop()}},c)})),D.apply(this,arguments)}function B(c){return o.apply(this,arguments)}function o(){return o=(0,P.Z)(u().mark(function c(r){var a;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("remove project",r),a=typeof r=="number"?r:r.projectId,e.next=4,N.remove(a);case 4:L();case 5:case"end":return e.stop()}},c)})),o.apply(this,arguments)}function H(c){return F.apply(this,arguments)}function F(){return F=(0,P.Z)(u().mark(function c(r){var a;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.create(r);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.log("project create err",e.t0),e.abrupt("return",M.Z.parseError(e.t0,S.default));case 11:case"end":return e.stop()}},c,null,[[0,7]])})),F.apply(this,arguments)}function R(c,r){return h.apply(this,arguments)}function h(){return h=(0,P.Z)(u().mark(function c(r,a){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N.update(r,a).then(function(l){console.log("project update res",l)}).catch(function(l){console.log("project update err ",l),M.Z.parseError(l,S.default)});case 1:case"end":return e.stop()}},c)})),h.apply(this,arguments)}function d(){return E.apply(this,arguments)}function E(){return E=(0,P.Z)(u().mark(function c(){var r,a,p,e,l=arguments;return u().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return r=l.length>0&&l[0]!==void 0?l[0]:void 0,Z.prev=1,a=r==null?i[n].projectId:r,Z.next=5,N.getProgress(a);case 5:if(p=Z.sent,!(!p||p.finished==null||p.total==null)){Z.next=8;break}throw Error("empty progress");case 8:return e=Math.ceil(p.finished/p.total*100),y(e),Z.abrupt("return",e);case 13:return Z.prev=13,Z.t0=Z.catch(1),console.log("get progress err",Z.t0),M.Z.parseError(Z.t0,S.default),Z.abrupt("return",0);case 18:case"end":return Z.stop()}},c,null,[[1,13]])})),E.apply(this,arguments)}return{all:i,getAll:L,getCurr:t,turnTo:s,remove:B,create:H,update:R,progress:O,getProgress:d,get curr(){if(!!i)return i[n]}}},fe=function(f,m){var b=m.oneHot,i=b===void 0?!0:b,w=m.postSetCurr,_=f(),A=(0,U.Z)(_,2),n=A[0],k=A[1],I=f(),j=(0,U.Z)(I,2),O=j[0],y=j[1],L=f(new Set),g=(0,U.Z)(L,2),t=g[0],$=g[1],s=f(i),D=(0,U.Z)(s,2),B=D[0],o=D[1];function H(e){return F.apply(this,arguments)}function F(){return F=(0,P.Z)(u().mark(function e(l){var C;return u().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(l!=null){v.next=2;break}return v.abrupt("return");case 2:return v.prev=2,v.next=5,N.getLabels(l);case 5:return C=v.sent,k(C),v.abrupt("return",C);case 10:return v.prev=10,v.t0=v.catch(2),console.log("label getall err ",v.t0),v.abrupt("return",M.Z.parseError(v.t0,S.default));case 14:case"end":return v.stop()}},e,null,[[2,10]])})),F.apply(this,arguments)}function R(e){var l=V(e,n,"labelId");if(l==null)throw Error("label.onSelect label not found");y(l);var C=n[l].labelId;B?t.has(C)?t.clear():(t.clear(),t.add(C)):t.has(C)?t.delete(C):t.add(C),console.log("activeIds",t),$(new Set(t)),w&&w(n[l])}function h(e){if(console.log("setCurr",e),!i)throw Error("multi select task doesn't have current label");if(!!e){var l=typeof e=="number"?e:e.labelId;l=V(l,n,"labelId"),l&&(console.log("setCurr index:",l),y(l),$(new Set([l])))}}function d(e){t.clear();var l=(0,Y.Z)(e),C;try{for(l.s();!(C=l.n()).done;){var Z=C.value;t.add(Z.labelId)}}catch(v){l.e(v)}finally{l.f()}}var E=function(){var e=(0,P.Z)(u().mark(function l(C){var Z;return u().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.prev=0,K.next=3,x.create(C);case 3:return Z=K.sent,H(C.projectId),K.abrupt("return",Z);case 8:return K.prev=8,K.t0=K.catch(0),console.log("label create err",K.t0),K.abrupt("return",M.Z.parseError(K.t0,S.default));case 12:case"end":return K.stop()}},l,null,[[0,8]])}));return function(C){return e.apply(this,arguments)}}();function c(e){return r.apply(this,arguments)}function r(){return r=(0,P.Z)(u().mark(function e(l){var C;return u().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return C=typeof l=="number"?l:l.labelId,v.prev=1,v.next=4,x.remove(C);case 4:n&&n.length&&H(n[0].projectId),v.next=11;break;case 7:v.prev=7,v.t0=v.catch(1),console.log("label remove err",v.t0),M.Z.parseError(v.t0,S.default);case 11:case"end":return v.stop()}},e,null,[[1,7]])})),r.apply(this,arguments)}function a(e){var l=typeof e=="number"?e:e.labelId;return t.has(l)}var p=function(l){l!=null?o(l):o(!B)};return{all:n,getAll:H,activeIds:t,initActive:d,onSelect:R,setCurr:h,isActive:a,create:E,remove:c,toggleOneHot:p,get curr(){if(n!=null)return n[O]}}},de=function(f){var m=f(),b=(0,U.Z)(m,2),i=b[0],w=b[1],_=f(),A=(0,U.Z)(_,2),n=A[0],k=A[1],I=function(t){if(!!i){if(t<0){S.default.error("This is the first image. No previous image.");return}if(t==i.length){S.default.error("This is the final image. No next image.");return}k(t)}},j=function(){var g=(0,P.Z)(u().mark(function t($,s){var D;return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,N.getTasks($);case 3:if(D=o.sent,w(D),s==null){o.next=9;break}return console.log("getall turnto"),I(s),o.abrupt("return",[D,D[s]]);case 9:return o.abrupt("return",D);case 12:return o.prev=12,o.t0=o.catch(0),console.log("task getall err ",o.t0),o.abrupt("return",M.Z.parseError(o.t0,S.default));case 16:case"end":return o.stop()}},t,null,[[0,12]])}));return function($,s){return g.apply(this,arguments)}}();function O(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return g==null||!i?0:Math.round(i.length*g/100)}var y=function(){var g=(0,P.Z)(u().mark(function t(){return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:I(n+1),console.log("all tasks",i);case 2:case"end":return s.stop()}},t)}));return function(){return g.apply(this,arguments)}}(),L=function(){var g=(0,P.Z)(u().mark(function t(){return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:I(n-1);case 1:case"end":return s.stop()}},t)}));return function(){return g.apply(this,arguments)}}();return{currIdx:n,all:i,turnTo:I,getAll:j,nextTask:y,prevTask:L,finished:O,get curr(){if(!(n==null||i==null))return i[n]}}};function ce(T,f){var m=f.label,b=m===void 0?void 0:m,i=f.project,w=i===void 0?void 0:i,_=T(),A=(0,U.Z)(_,2),n=A[0],k=A[1],I=T(),j=(0,U.Z)(I,2),O=j[0],y=j[1],L=T(new Set),g=(0,U.Z)(L,2),t=g[0],$=g[1],s=function(){var R=(0,P.Z)(u().mark(function h(d){var E;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(d!=null){r.next=2;break}return r.abrupt("return",[]);case 2:return r.prev=2,r.next=5,te.getAnnotations(d);case 5:return E=r.sent,k(E),r.abrupt("return",E);case 10:return r.prev=10,r.t0=r.catch(2),console.log("ann getAll err",r.t0),M.Z.parseError(r.t0,S.default),r.abrupt("return",[]);case 15:case"end":return r.stop()}},h,null,[[2,10]])}));return function(d){return R.apply(this,arguments)}}(),D=function(){var R=(0,P.Z)(u().mark(function h(d){var E,c;return u().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,d.label&&(d.labelId=d.label.id),a.next=4,Q.create(d);case 4:if(E=a.sent,c=[],!d.dataId){a.next=10;break}return a.next=9,s(d.dataId);case 9:c=a.sent;case 10:return w&&c.length==1&&w.getProgress(),a.abrupt("return",E);case 14:return a.prev=14,a.t0=a.catch(0),console.log("annotation create err",a.t0),a.abrupt("return",M.Z.parseError(a.t0,S.default));case 18:case"end":return a.stop()}},h,null,[[0,14]])}));return function(d){return R.apply(this,arguments)}}(),B=function(){var R=(0,P.Z)(u().mark(function h(d){var E,c;return u().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(E=typeof d=="number"?d:d.annotationId,E!=null){a.next=3;break}return a.abrupt("return");case 3:return a.prev=3,a.next=6,Q.remove(E);case 6:if(!(n&&n.length&&n[0].dataId)){a.next=11;break}return a.next=9,s(n[0].dataId);case 9:c=a.sent,c.length==0&&w.getProgress();case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(3),console.log("annotation remove err",a.t0),a.abrupt("return",M.Z.parseError(a.t0,S.default));case 17:case"end":return a.stop()}},h,null,[[3,13]])}));return function(d){return R.apply(this,arguments)}}(),o=function(){var R=(0,P.Z)(u().mark(function h(d){var E;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log("setCurr",d),d!=null){r.next=4;break}return y(void 0),r.abrupt("return");case 4:if(E=V(d,n,"annotationId"),E){r.next=8;break}return r.next=8,D(d);case 8:y(V(d,n,"annotationId")),$(new Set([d.annotationId])),b.setCurr(d.labelId),console.log(V(d,n,"annotationId"),new Set([d.annotationId]),d.labelId);case 12:case"end":return r.stop()}},h)}));return function(d){return R.apply(this,arguments)}}();function H(R,h){return F.apply(this,arguments)}function F(){return F=(0,P.Z)(u().mark(function R(h,d){return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:Q.update(h,d).then(function(r){console.log("annotation update res",r),s(d.projectId)}).catch(function(r){console.log("annotation update err ",r),M.Z.parseError(r,S.default)});case 1:case"end":return c.stop()}},R)})),F.apply(this,arguments)}return{all:n,getAll:s,create:D,remove:B,setCurr:o,update:H,activeIds:t,get curr(){if(!(!n||!O))return n[O]}}}var pe=function(f){var m=f(),b=(0,U.Z)(m,2),i=b[0],w=b[1],_=f([]),A=(0,U.Z)(_,2),n=A[0],k=A[1],I=function(){var O=(0,P.Z)(u().mark(function y(L){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:w(L);case 1:case"end":return t.stop()}},y)}));return function(L){return O.apply(this,arguments)}}(),j=function(){var O=(0,P.Z)(u().mark(function y(L,g){var t;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,ne.getDatas(L);case 3:if(t=s.sent,k(t),g==null){s.next=8;break}return I(g),s.abrupt("return",[t,t[g]]);case 8:return s.abrupt("return",t);case 11:return s.prev=11,s.t0=s.catch(0),console.log("data getall err ",s.t0),s.abrupt("return",M.Z.parseError(s.t0,S.default));case 15:case"end":return s.stop()}},y,null,[[0,11]])}));return function(L,g){return O.apply(this,arguments)}}();return{all:n,getAll:j,turnTo:I,get curr(){if(!(i==null||n==null))return n[i]},get imgSrc(){return n&&n[i]?"".concat(z,"/datas/").concat(n[i].dataId,"/image?sault=").concat(n[i].sault):""}}},oe=function(f,m,b){b.effectTrigger||(b.effectTrigger={});var i=ie(f),w=se(f),_=de(f),A=pe(f),n=ee(f),k=fe(f,b.label),I=ce(f,(0,X.Z)((0,X.Z)({},b.annotation),{},{label:k,project:n}));return m(function(){var j=M.Z.getQueryVariable("projectId");if(j==null){q.m8.push("/");return}var O=parseInt(j);n.getCurr(j).catch(function(y){M.Z.parseError(y,S.default),q.m8.push("/")}),k.getAll(O),_.getAll(O),n.getProgress(O)},[]),m(function(){_.all&&_.all.length!=0&&_.turnTo(0)},[_.all]),m(function(){if(_.currIdx!=null){var j=function(){var O=(0,P.Z)(u().mark(function y(){var L,g,t,$,s,D,B,o,H,F;return u().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if((L=_.curr)!==null&&L!==void 0&&L.projectId&&n.getProgress(_.curr.projectId),!((g=_.curr)!==null&&g!==void 0&&g.taskId)){h.next=13;break}return h.next=4,A.getAll(_.curr.taskId,0);case 4:return t=h.sent,$=(0,U.Z)(t,2),s=$[0],D=$[1],h.next=10,I.getAll(D.dataId);case 10:if(B=h.sent,k.all){o=(0,Y.Z)(k.all);try{for(o.s();!(H=o.n()).done;)F=H.value,F.active=!1}catch(d){o.e(d)}finally{o.f()}}b.effectTrigger.postTaskChange&&b.effectTrigger.postTaskChange(k.all,B);case 13:i.setCurr(!1);case 14:case"end":return h.stop()}},y)}));return function(){return O.apply(this,arguments)}}();j()}},[_.currIdx]),[i,w,I,_,A,n,k]}}}]);

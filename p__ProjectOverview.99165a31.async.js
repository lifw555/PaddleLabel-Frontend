(self.webpackChunkPaddleLabel_Frontend=self.webpackChunkPaddleLabel_Frontend||[]).push([[991],{41180:function(A){A.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},48627:function(A){A.exports={container:"container___2RXc3"}},26389:function(A){A.exports={modal:"modal___2gJ6d"}},21331:function(A){A.exports={modal:"modal___3tkEl"}},1041:function(A){A.exports={modal:"modal___2cw4O"}},31982:function(A,P,t){"use strict";var W=t(89032),C=t(15746),D=t(11849),F=t(13062),m=t(71230),p=t(11700),r=t(67294),y=t(41180),Q=t.n(y),l=t(85893),c=function(g){return(0,l.jsxs)("div",{className:Q().ppcard,style:g.style,hidden:g.hidden,children:[(0,l.jsx)(m.Z,{className:Q().titleRow,style:{display:g.title?void 0:"none"},children:(0,l.jsx)(p.Z,{className:Q().title,children:g.title})}),(0,l.jsx)(m.Z,{style:{marginTop:26},children:(0,l.jsx)(C.Z,{span:24,style:(0,D.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},g.innerStyle),children:g.children})})]})};P.Z=c},11428:function(A,P,t){"use strict";var W=t(67294),C=t(48627),D=t.n(C),F=t(85893),m=function(r){return(0,F.jsx)("div",{className:"".concat(D().container),style:{backgroundImage:"url(./pics/background.png)"},children:r.children})};P.Z=m},36505:function(A,P,t){"use strict";t.d(P,{I:function(){return D}});var W=t(48971),C=t(85893),D=function(m){var p=(0,W.YB)();return function(r){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:m,Q=r==null||r==""?y:y+"."+r;return(0,C.jsx)("p",{"data-test-id":Q,style:{display:"inline"},children:p.formatMessage({id:Q})})}}},35261:function(A,P,t){"use strict";var W=t(71194),C=t(50146),D=t(49111),F=t(19650),m=t(47673),p=t(24044),r=t(34792),y=t(48086),Q=t(57663),l=t(71577),c=t(9715),I=t(93766),g=t(2824),Y=t(67294),$=t(26389),st=t.n($),k=t(15156),rt=t(36505),E=t(85893),it=function(w){var v=(0,k.Ad)("component.PPExportModal"),Z=(0,rt.I)("component.PPExportModal"),q=(0,Y.useState)(!1),h=(0,g.Z)(q,2),n=h[0],V=h[1],X=(0,Y.useState)(!1),tt=(0,g.Z)(X,2),nt=tt[0],b=tt[1],z=I.Z.useForm(),At=(0,g.Z)(z,1),N=At[0];return(0,E.jsxs)("span",{hidden:w.visible==!1,children:[(0,E.jsx)(l.Z,{type:"primary",onClick:function(){return b(!0)},children:Z("title")}),(0,E.jsx)(C.Z,{className:st().modal,title:Z("title"),visible:nt,onCancel:function(){return b(!1)},footer:null,children:(0,E.jsxs)(I.Z,{form:N,name:"basic",labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!1},onFinish:function(et){var G=et.path;if(!G){y.default.error(Z("pathNotNull"));return}V(!0),(0,k.Tr)(w.project.projectId,G).then(function(){y.default.success(Z("exportSuccess")),b(!1)}).catch(function(at){console.log(at)}).finally(function(){V(!1)})},autoComplete:"off",children:[(0,E.jsx)(I.Z.Item,{label:v("path"),name:"path",children:(0,E.jsx)(p.Z,{autoComplete:"off"})}),(0,E.jsx)(I.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,E.jsxs)(F.Z,{children:[(0,E.jsx)(l.Z,{onClick:function(){b(!1),N.resetFields()},children:Z("cancel","global")}),(0,E.jsx)(l.Z,{type:"primary",htmlType:"submit",loading:n,children:Z("export")})]})})]})})]})};P.Z=it},50542:function(A,P,t){"use strict";t.r(P),t.d(P,{default:function(){return ht}});var W=t(66456),C=t(4421),D=t(86582),F=t(34792),m=t(48086),p=t(57663),r=t(71577),y=t(12968),Q=t(62462),l=t(2824),c=t(67294),I=t(48971),g=t(11428),Y=t(31982),$=t(35261),st=t(71194),k=t(50146),rt=t(49111),E=t(19650),it=t(47673),dt=t(24044),w=t(9715),v=t(93766),Z=t(21331),q=t.n(Z),h=t(15156),n=t(85893),V=function(u){var s=(0,h.Ad)("component.PPImportModal"),O=(0,c.useState)(!1),j=(0,l.Z)(O,2),_=j[0],i=j[1],d=(0,c.useState)(!1),e=(0,l.Z)(d,2),S=e[0],B=e[1],K=v.Z.useForm(),R=(0,l.Z)(K,1),M=R[0];return(0,n.jsxs)("span",{hidden:u.visible==!1,children:[(0,n.jsx)(r.Z,{type:"primary",onClick:function(){return B(!0)},children:s("title")}),(0,n.jsx)(k.Z,{className:q().modal,title:s("title"),visible:S,footer:null,onCancel:function(){return B(!1)},children:(0,n.jsxs)(v.Z,{form:M,name:"basic",labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!1},onFinish:function(L){var T=L.path;if(!T){m.default.error(s("nullPath"));return}i(!0),(0,h.Nu)(u.project.projectId,T).then(function(){B(!1),u.onFinish()}).finally(function(){i(!1)})},autoComplete:"off",children:[(0,n.jsx)(v.Z.Item,{label:s("path"),name:"path",children:(0,n.jsx)(dt.Z,{autoComplete:"off"})}),(0,n.jsx)(v.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,n.jsxs)(E.Z,{children:[(0,n.jsx)(r.Z,{onClick:function(){B(!1),M.resetFields()},children:s("cancel","global")}),(0,n.jsx)(r.Z,{type:"primary",htmlType:"submit",loading:_,children:s("import")})]})})]})})]})},X=V,tt=t(13062),nt=t(71230),b=t(89032),z=t(15746),At=t(77883),N=t(70507),H=t(1041),et=t.n(H),G=t(36505),at=function(u){var s=(0,G.I)("component.PPSplitDataset"),O=(0,c.useState)(!1),j=(0,l.Z)(O,2),_=j[0],i=j[1],d=(0,c.useState)(60),e=(0,l.Z)(d,2),S=e[0],B=e[1],K=(0,c.useState)(20),R=(0,l.Z)(K,2),M=R[0],x=R[1],L=(0,c.useState)(20),T=(0,l.Z)(L,2),J=T[0],o=T[1],a=(0,c.useState)(!1),f=(0,l.Z)(a,2),U=f[0],lt=f[1],ft=v.Z.useForm(),Pt=(0,l.Z)(ft,1),Et=Pt[0];return(0,n.jsxs)("span",{hidden:u.visible==!1,children:[(0,n.jsx)(r.Z,{type:"primary",onClick:function(){return i(!0)},children:s("title")}),(0,n.jsx)(k.Z,{className:et().modal,visible:_,onCancel:function(){return i(!1)},footer:null,width:"50rem",children:(0,n.jsxs)(v.Z,{form:Et,name:"basic",labelCol:{span:8},wrapperCol:{span:24},initialValues:{remember:!1},onFinish:function(){if(S+M+J!=100){m.default.error(s("fail"));return}console.log("x trainData: ".concat(S,", validationData: ").concat(M,", testData: ").concat(J,", props.project.curr.projectId: ").concat(u.project.projectId)),lt(!0),(0,h.FX)(u.project.projectId,{train:S*.01,val:M*.01,test:J*.01}).then(function(){m.default.success(s("success")),i(!1)}).finally(function(){u.onFinish&&u.onFinish(),lt(!1)})},autoComplete:"off",layout:"vertical",children:[(0,n.jsxs)(nt.Z,{children:[(0,n.jsx)(z.Z,{span:8,children:(0,n.jsx)(v.Z.Item,{label:s("train"),name:"train",children:(0,n.jsx)(N.Z,{addonAfter:"%",defaultValue:60,precision:0,min:0,max:100,value:S,onChange:B})})}),(0,n.jsx)(z.Z,{span:8,children:(0,n.jsx)(v.Z.Item,{label:s("validation"),name:"validation",children:(0,n.jsx)(N.Z,{addonAfter:"%",defaultValue:20,precision:0,min:0,max:100,value:M,onChange:x})})}),(0,n.jsx)(z.Z,{span:8,children:(0,n.jsx)(v.Z.Item,{label:s("test"),name:"test",children:(0,n.jsx)(N.Z,{addonAfter:"%",defaultValue:20,precision:0,min:0,max:100,value:J,onChange:o})})})]}),(0,n.jsx)(v.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,n.jsxs)(E.Z,{children:[(0,n.jsx)(r.Z,{onClick:function(){i(!1),Et.resetFields()},children:s("cancel","global")}),(0,n.jsx)(r.Z,{type:"primary",htmlType:"submit",loading:U,children:s("ok","global")})]})})]})})]})},ut=at,mt=t(37071),gt="data:image/png;base64,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",vt=function(){var u,s,O,j,_,i=(0,G.I)("pages.projectOverview"),d=(0,h.iA)(c.useState),e=(0,h.Gd)(c.useState),S=(0,c.useState)(0),B=(0,l.Z)(S,2),K=B[0],R=B[1],M={"0":"train","1":"validation","2":"test"},x=localStorage.getItem("basePath"),L=mt.Z.getQueryVariable("projectId"),T=function(a,f,U,lt){localStorage.setItem("orderBy",U.field+" "+U.order)},J=[{title:"ID",dataIndex:"taskId",key:"taskId",width:"25%",align:"center",render:function(a){return(0,n.jsx)(n.Fragment,{children:a})},sorter:function(a,f){return a.taskId-f.taskId}},{title:i("annotationCount"),dataIndex:"annotations",key:"taskId",width:"25%",align:"center",render:function(a){return(0,n.jsx)(n.Fragment,{children:a.length})},sorter:function(a,f){return a.annotations.length-f.annotations.length}},{title:i("split"),dataIndex:"set",key:"taskId",width:"25%",align:"center",render:function(a){return(0,n.jsx)(n.Fragment,{children:M[a]})},sorter:function(a,f){return a.set-f.set}},{title:i("image"),dataIndex:"dataPaths",key:"taskId",width:"25%",align:"center",render:function(a){return(0,n.jsx)(Q.Z,{src:"".concat(x).concat(a[0]),height:40,onError:function(U){U.target.src=gt,setTimeout(function(){U.target.src="".concat(x).concat(a[0],"reload"),console.log("".concat(x).concat(a[0]," reload"))},1e3)}})}},{dataIndex:"taskId",key:"taskId",align:"center",render:function(a){return(0,n.jsx)(r.Z,{type:"primary",onClick:function(){localStorage.setItem("currTaskId",a),I.m8.push("/".concat((0,h.LV)(e.curr.taskCategory.name),"?projectId=").concat(e.curr.projectId))},children:i("label")})}}];return(0,c.useEffect)(function(){e.getCurr(L),d.getAll(L).then(function(o){console.log("tasks",o)})},[]),L||(m.default.error("No valid project id"),I.m8.push("/")),(0,n.jsxs)(g.Z,{children:[(0,n.jsxs)(Y.Z,{children:[(0,n.jsx)(r.Z,{type:"primary",onClick:function(){I.m8.push("/".concat((0,h.LV)(e.curr.taskCategory.name),"?projectId=").concat(e.curr.projectId))},hidden:((u=d.all)===null||u===void 0?void 0:u.length)==0,children:i("label")}),(0,n.jsx)(r.Z,{type:"primary",onClick:function(){console.log("project",e.curr),I.m8.push("/project_detail?taskCategory=".concat((0,h.os)(e.curr.taskCategory.name),"&projectId=").concat(e.curr.projectId))},children:i("projectSettings")}),(0,n.jsx)(ut,{project:e.curr,visible:((s=d.all)===null||s===void 0?void 0:s.length)!=0,onFinish:function(){return d.getAll(e.curr.projectId)}}),(0,n.jsx)($.Z,{project:e.curr,visible:((O=d.all)===null||O===void 0?void 0:O.length)!=0}),(0,n.jsx)(X,{project:e.curr,onFinish:function(){d.getAll(e.curr.projectId),R(K+1)},visible:((j=d.all)===null||j===void 0?void 0:j.length)!=0})]}),(0,n.jsxs)(Y.Z,{title:i("tasks"),children:[i("taskCount"),": "+((_=d.all)===null||_===void 0?void 0:_.length),function(){var o;return((o=d.all)===null||o===void 0?void 0:o.length)==0?(0,n.jsx)(X,{project:e.curr,onFinish:function(){d.getAll(e.curr.projectId),R(K+1)}}):(0,n.jsxs)("span",{id:K,children:[(0,n.jsx)(C.Z,{columns:J,dataSource:(0,D.Z)((0,h.gu)(d.all)),onChange:T})," "]})}()]})]})},ht=vt}}]);

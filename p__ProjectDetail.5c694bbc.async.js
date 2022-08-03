(self.webpackChunkPaddleLabel_Frontend=self.webpackChunkPaddleLabel_Frontend||[]).push([[498],{91220:function(v,y,e){"use strict";e.d(y,{Z:function(){return d}});var S=e(64254);function d(l,u){var c;if(typeof Symbol=="undefined"||l[Symbol.iterator]==null){if(Array.isArray(l)||(c=(0,S.Z)(l))||u&&l&&typeof l.length=="number"){c&&(l=c);var p=0,P=function(){};return{s:P,n:function(){return p>=l.length?{done:!0}:{done:!1,value:l[p++]}},e:function(i){throw i},f:P}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b=!0,I=!1,j;return{s:function(){c=l[Symbol.iterator]()},n:function(){var i=c.next();return b=i.done,i},e:function(i){I=!0,j=i},f:function(){try{!b&&c.return!=null&&c.return()}finally{if(I)throw j}}}}},48627:function(v){v.exports={container:"container___2RXc3"}},18398:function(v){v.exports={_ppcard:"_ppcard___1sR0b",title:"title___2fjZe",shadow:"shadow___3SaOl",main:"main___IOVJu",block_l:"block_l___1ywNh",block_r:"block_r___Sg4L7",goup:"goup___1vznA"}},11428:function(v,y,e){"use strict";var S=e(67294),d=e(48627),l=e.n(d),u=e(85893),c=function(P){return(0,u.jsx)("div",{className:"".concat(l().container),style:{backgroundImage:"url(./pics/background.png)"},children:P.children})};y.Z=c},68370:function(v,y,e){"use strict";e.r(y),e.d(y,{default:function(){return $}});var S=e(34792),d=e(48086),l=e(67294),u=e(48971),c=e(20228),p=e(11382),P=e(57663),b=e(71577),I=e(88983),j=e(47933),g=e(47673),i=e(24044),re=e(32157),R=e(82363),oe=e(9715),h=e(93766),F=e(2824),se=e(89032),B=e(15746),Z=e(11849),ie=e(13062),E=e(71230),T=e(1870),V=e(11700),U=e(18398),C=e.n(U),D=e(37071),s=e(15156),t=e(85893),L=function(a){return(0,t.jsxs)("div",{className:C()._ppcard,style:a.style,children:[(0,t.jsx)(E.Z,{className:C().titleRow,style:{display:a.title?void 0:"none"},children:(0,t.jsx)(V.Z,{className:C().title,children:a.title})}),(0,t.jsx)(E.Z,{style:{marginTop:26},children:(0,t.jsx)(B.Z,{span:24,style:(0,Z.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},a.innerStyle),children:a.children})})]})},K=function(a){var m=(0,s.Gd)(l.useState),x=D.Z.getQueryVariable("projectId"),H=(0,l.useState)(!1),A=(0,F.Z)(H,2),J=A[0],O=A[1],X=(0,l.useState)([]),N=(0,F.Z)(X,2),M=N[0],Y=N[1],r=(0,s.Ad)("component.PPCreater"),w=function(o){O(!0),x?m.update(x,(0,Z.Z)({},o)).then(function(){u.m8.push("/project_overview?projectId=".concat(x))}):m.create((0,Z.Z)((0,Z.Z)({},o),{},{taskCategoryId:s.ux[a.taskCategory].id})).catch(function(f){d.default.error(r("creationFail")),D.Z.parseError(f,d.default),O(!1)}).then(function(f){f&&u.m8.push("/".concat((0,s.LV)(a.taskCategory),"?projectId=").concat(f.projectId))})},q=h.Z.useForm(),_=(0,F.Z)(q,1),k=_[0];(0,l.useEffect)(function(){m.getCurr(x).then(function(n){var o={name:n==null?void 0:n.name,description:n==null?void 0:n.description,dataDir:n==null?void 0:n.dataDir,labelDir:n==null?void 0:n.labelDir,labelFormat:n==null?void 0:n.labelFormat};console.log("values",o),k.setFieldsValue(o)})},[]);var ee={classification:{single_class:"clas/single/",multi_class:"clas/multi/"},detection:{coco:"det/coco/",voc:"det/voc/"},semanticSegmentation:{mask:"semantic_seg/mask/",polygon:"semantic_seg/polygon/"},instanceSegmentation:{mask:"instance_seg/mask/",polygon:"instance_seg/polygon/"}},te=R.Z.DirectoryTree,ne=function(o,f){console.log("Trigger Select",o,f,f.node.isLeaf!=null);var le=f.node.isLeaf!=null;le&&window.open("/api/samples/file?path="+f.node.key)};function ae(){return M.length==0?(0,t.jsx)("img",{src:a.imgSrc,style:{width:"40rem"}}):(0,t.jsx)("div",{children:(0,t.jsx)(te,{onSelect:ne,treeData:M,blockNode:!1})})}return(0,t.jsx)("div",{className:C().shadow,style:a.style,children:(0,t.jsxs)(p.Z,{tip:"Import in progress",spinning:J,children:[(0,t.jsx)("div",{id:"left",className:C().block_l,children:(0,t.jsx)(L,{title:r(a.taskCategory,"global")+r("project"),style:{height:760,padding:"1.25rem 0"},children:(0,t.jsxs)(h.Z,{form:k,layout:"horizontal",size:"large",style:{marginTop:"5.69rem"},onFinish:function(o){console.log(o),w(o)},children:[(0,t.jsx)(h.Z.Item,{name:"name",label:r("projectName"),labelCol:{span:6},wrapperCol:{span:16},rules:[{required:!0,message:"Please input project name!"}],style:{fontSize:"1.5rem"},children:(0,t.jsx)(i.Z,{size:"large",placeholder:r("anyString","global"),style:{height:"3.13rem"}})}),(0,t.jsx)(h.Z.Item,{name:"dataDir",label:(0,t.jsxs)("div",{children:[r("datasePath")," ",(0,t.jsx)(T.Z,{style:{fontSize:"12px"},onClick:function(){return d.default.info({content:"The root directory of the dataset, where all images and labels are. Click here for more detail.",onClick:function(){return window.open("https://github.com/PaddleCV-SIG/PP-Label/blob/develop/doc/dataset_file_structure.md#".concat(a.taskCategory))}})}})]}),labelCol:{span:6},wrapperCol:{span:16},rules:[{required:!0,message:"Please input dataset path!"}],style:{fontSize:"1.5rem"},children:(0,t.jsx)(i.Z,{size:"large",placeholder:r("absolutePath","global"),style:{height:"3.13rem"},disabled:x!=null})}),(0,t.jsx)(h.Z.Item,{name:"description",label:r("description"),labelCol:{span:6},wrapperCol:{span:16},rules:[{required:!1}],style:{fontSize:"1.5rem"},children:(0,t.jsx)(i.Z,{size:"large",placeholder:r("anyString","global"),style:{height:"3.13rem"}})}),(0,t.jsx)(h.Z.Item,{name:"labelFormat",label:(0,t.jsxs)("div",{children:[r("labelFormat"),(0,t.jsx)(T.Z,{style:{fontSize:"12px"},onClick:function(){return d.default.info({content:"Choose the format to import/export dataset. Click here to see details.",onClick:function(){window.open("https://github.com/PaddleCV-SIG/PP-Label/blob/develop/doc/dataset_file_structure.md#".concat(a.taskCategory))}})}})]}),labelCol:{span:6},wrapperCol:{span:16},rules:[{required:s.ux[a.taskCategory].labelFormats!=null,message:"Please choose a label import/export format"}],style:{fontSize:"1.5rem",display:s.ux[a.taskCategory].labelFormats!=null?void 0:"none"},children:(0,t.jsx)(j.ZP.Group,{size:"large",style:{height:"3.13rem"},onChange:function(){s.bY.getStructure(ee[a.taskCategory][k.getFieldValue("labelFormat")]).then(function(o){console.log("sample file structure",o),Y(o)})},children:Object.keys(s.ux[a.taskCategory].labelFormats).map(function(n){return(0,t.jsx)(j.ZP,{value:n,children:r((0,s.os)(n),"global.labelFormat")},n)})})}),(0,t.jsx)(h.Z.Item,{name:"maxPoints",label:r("maxPoints"),labelCol:{span:6},wrapperCol:{span:16},rules:[{required:a.taskCategory=="keypointDetection",message:"Please input max points!"}],style:{fontSize:"1.5rem",display:a.taskCategory=="keypointDetection"?void 0:"none"},children:(0,t.jsx)(i.Z,{size:"large",placeholder:"Numbers (Int)",style:{height:"3.13rem"}})}),(0,t.jsxs)(h.Z.Item,{wrapperCol:{span:16,offset:6},children:[(0,t.jsx)(b.Z,{htmlType:"submit",type:"primary",style:{height:"2.5rem",width:"48%"},block:!0,children:r(x?"update":"create")}),"\xA0\xA0",(0,t.jsx)(b.Z,{htmlType:"button",style:{height:"2.5rem",width:"48%"},block:!0,onClick:function(){u.m8.goBack()},children:r("cancel")})]})]})})}),(0,t.jsx)("div",{id:"right",className:C().block_r,children:(0,t.jsx)(L,{style:{height:"43.63rem",padding:"0.5rem 0"},children:ae()})})]})})},W=K,G=e(11428),Q=function(){(0,s.bo)();var a=(0,s.Ad)("pages.projectDetail"),m=D.Z.getQueryVariable("taskCategory");return console.log(m),m?m in s.ux?(0,t.jsx)(G.Z,{children:(0,t.jsx)(W,{imgSrc:"./pics/illustration.jpg",taskCategory:m})}):(d.default.error(a("invalidTaskCategory")+" "+m),u.m8.push("/"),null):(d.default.error(a("noTaskCategory")),u.m8.push("/"),null)},$=Q}}]);

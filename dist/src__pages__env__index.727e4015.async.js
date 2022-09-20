(self.webpackChunk=self.webpackChunk||[]).push([[8247,222],{2679:function(le,j,e){"use strict";e.d(j,{Z:function(){return I}});var w=e(79105),P=e(63313),U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},O=U,K=e(17980),b=function(n,o){return P.createElement(K.Z,(0,w.Z)((0,w.Z)({},n),{},{ref:o,icon:O}))};b.displayName="StopOutlined";var I=P.forwardRef(b)},4074:function(le,j,e){"use strict";e.r(j);var w=e(35290),P=e.n(w),U=e(411),O=e.n(U),K=e(46686),b=e.n(K),I=e(63313),c=e.n(I),n=e(78455),o=e(80743),s=e(97325),m=e(2991),D=e(51970),v=e(98505),l=e(11527),E=function(u){var x=u.ids,F=u.handleCancel,g=u.visible,i=n.Z.useForm(),C=b()(i,1),d=C[0],h=(0,I.useState)(!1),G=b()(h,2),N=G[0],Z=G[1],X=function(){var T=O()(P()().mark(function A(V){var S,a,B;return P()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return Z(!0),R.prev=1,R.next=4,D.W.put("".concat(v.Z.apiPrefix,"envs/name"),{data:{ids:x,name:V.name}});case 4:S=R.sent,a=S.code,B=S.data,a===200?(o.ZP.success("\u66F4\u65B0\u73AF\u5883\u53D8\u91CF\u540D\u79F0\u6210\u529F"),F()):o.ZP.error(B),Z(!1),R.next=14;break;case 11:R.prev=11,R.t0=R.catch(1),Z(!1);case 14:case"end":return R.stop()}},A,null,[[1,11]])}));return function(V){return T.apply(this,arguments)}}();return(0,I.useEffect)(function(){d.resetFields()},[x,g]),(0,l.jsx)(s.Z,{title:"\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u540D\u79F0",open:g,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){d.validateFields().then(function(A){X(A)}).catch(function(A){console.log("Validate Failed:",A)})},onCancel:function(){return F()},confirmLoading:N,children:(0,l.jsx)(n.Z,{form:d,layout:"vertical",name:"edit_name_modal",children:(0,l.jsx)(n.Z.Item,{name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u540D\u79F0"}],children:(0,l.jsx)(m.Z,{placeholder:"\u8BF7\u8F93\u5165\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u540D\u79F0"})})})})};j.default=E},27636:function(le,j,e){"use strict";e.r(j),e.d(j,{default:function(){return Y}});var w=e(94434),P=e.n(w),U=e(30279),O=e.n(U),K=e(46686),b=e.n(K),I=e(44463),c=e.n(I),n=e(63313),o=e(6946),s=e(2991),m=e(74318),D=e(26591),v=e(34541),l=e(97325),E=e(80743),_=e(74309),u=e(46669),x=e(26099),F=e(96320),g=e(2679),i=e(39449),C=e(98505),d=e(94645),h=e(51970),G=e(60234),N=e(4074),Z=e(12456),X=e(90527),T=e(40744),A=e(66255),V=e(53686),S=e(78722),a=e(11527),B=["index","moveRow","className","style"],H=o.Z.Text,R=o.Z.Paragraph,se=s.Z.Search,k;(function(f){f[f.\u5DF2\u542F\u7528=0]="\u5DF2\u542F\u7528",f[f.\u5DF2\u7981\u7528=1]="\u5DF2\u7981\u7528"})(k||(k={}));var J;(function(f){f[f.success=0]="success",f[f.error=1]="error"})(J||(J={}));var z;(function(f){f[f.\u542F\u7528=0]="\u542F\u7528",f[f.\u7981\u7528=1]="\u7981\u7528"})(z||(z={}));var ee;(function(f){f[f.enable=0]="enable",f[f.disable=1]="disable"})(ee||(ee={}));var ne="DragableBodyRow",ie=function(W){var ae=W.index,ce=W.moveRow,_e=W.className,ue=W.style,me=c()(W,B),re=(0,n.useRef)(),L=(0,Z.L)({accept:ne,collect:function(oe){var Ee=oe.getItem()||{},be=Ee.index;return be===ae?{}:{isOver:oe.isOver(),dropClassName:be<ae?" drop-over-downward":" drop-over-upward"}},drop:function(oe){ce(oe.index,ae)}}),$=b()(L,2),ge=$[0],fe=ge.isOver,ve=ge.dropClassName,pe=$[1],Pe=(0,X.c)({type:ne,item:{index:ae},collect:function(oe){return{isDragging:oe.isDragging()}}}),he=b()(Pe,2),ye=he[1];return pe(ye(re)),(0,a.jsx)("tr",O()({ref:re,className:"".concat(_e).concat(fe?ve:""),style:O()({cursor:"move"},ue)},me))},te=function(){var W=(0,S.bx)(),ae=W.headerStyle,ce=W.isPhone,_e=W.theme,ue=[{title:"\u5E8F\u53F7",align:"center",width:60,render:function(t,r,y){return(0,a.jsxs)("span",{style:{cursor:"text"},children:[y+1," "]})}},{title:"\u540D\u79F0",dataIndex:"name",key:"name",align:"center",sorter:function(t,r){return t.name.localeCompare(r.name)}},{title:"\u503C",dataIndex:"value",key:"value",align:"center",width:"35%",render:function(t,r){return(0,a.jsx)(R,{style:{wordBreak:"break-all",marginBottom:0,textAlign:"left"},ellipsis:{tooltip:t,rows:2},children:t})}},{title:"\u5907\u6CE8",dataIndex:"remarks",key:"remarks",align:"center"},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"timestamp",key:"timestamp",align:"center",width:165,ellipsis:{showTitle:!1},sorter:{compare:function(t,r){var y=new Date(t.updatedAt||t.timestamp).getTime(),M=new Date(r.updatedAt||r.timestamp).getTime();return y-M}},render:function(t,r){var y=navigator.language||navigator.languages[0],M=r.updatedAt||r.timestamp,q=new Date(M).toLocaleString(y,{hour12:!1}).replace(" 24:"," 00:");return(0,a.jsx)(m.Z,{placement:"topLeft",title:q,trigger:["hover","click"],children:(0,a.jsx)("span",{children:q})})}},{title:"\u72B6\u6001",key:"status",dataIndex:"status",align:"center",width:70,filters:[{text:"\u5DF2\u542F\u7528",value:0},{text:"\u5DF2\u7981\u7528",value:1}],onFilter:function(t,r){return r.status===t},render:function(t,r,y){return(0,a.jsx)(D.Z,{size:"middle",style:{cursor:"text"},children:(0,a.jsx)(v.Z,{color:J[r.status],style:{marginRight:0},children:k[r.status]})})}},{title:"\u64CD\u4F5C",key:"action",width:120,align:"center",render:function(t,r,y){var M=!ce;return(0,a.jsxs)(D.Z,{size:"middle",children:[(0,a.jsx)(m.Z,{title:M?"\u7F16\u8F91":"",children:(0,a.jsx)("a",{onClick:function(){return Ve(r,y)},children:(0,a.jsx)(x.Z,{})})}),(0,a.jsx)(m.Z,{title:M?r.status===k.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528":"",children:(0,a.jsx)("a",{onClick:function(){return Ke(r,y)},children:r.status===k.\u5DF2\u7981\u7528?(0,a.jsx)(F.Z,{}):(0,a.jsx)(g.Z,{})})}),(0,a.jsx)(m.Z,{title:M?"\u5220\u9664":"",children:(0,a.jsx)("a",{onClick:function(){return He(r,y)},children:(0,a.jsx)(i.Z,{})})})]})}}],me=(0,n.useState)([]),re=b()(me,2),L=re[0],$=re[1],ge=(0,n.useState)(!0),fe=b()(ge,2),ve=fe[0],pe=fe[1],Pe=(0,n.useState)(!1),he=b()(Pe,2),ye=he[0],de=he[1],oe=(0,n.useState)(!1),Ee=b()(oe,2),be=Ee[0],xe=Ee[1],Fe=(0,n.useState)(),Oe=b()(Fe,2),Ze=Oe[0],De=Oe[1],Se=(0,n.useState)([]),we=b()(Se,2),Q=we[0],Be=we[1],Ie=(0,n.useState)(""),Me=b()(Ie,2),je=Me[0],We=Me[1],Le=(0,n.useState)(),Ae=b()(Le,2),Ue=Ae[0],ke=Ae[1],Ce=function(){pe(!0),h.W.get("".concat(C.Z.apiPrefix,"envs?searchValue=").concat(je)).then(function(t){$(t.data)}).finally(function(){return pe(!1)})},Ke=function(t,r){l.Z.confirm({title:"\u786E\u8BA4".concat(t.status===k.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528"),content:(0,a.jsxs)(a.Fragment,{children:["\u786E\u8BA4",t.status===k.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528","Env"," ",(0,a.jsx)(H,{style:{wordBreak:"break-all"},type:"warning",children:t.value})," ","\u5417"]}),onOk:function(){h.W.put("".concat(C.Z.apiPrefix,"envs/").concat(t.status===k.\u5DF2\u7981\u7528?"enable":"disable"),{data:[t.id]}).then(function(M){if(M.code===200){E.ZP.success("".concat(t.status===k.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528","\u6210\u529F"));var q=t.status===k.\u5DF2\u7981\u7528?k.\u5DF2\u542F\u7528:k.\u5DF2\u7981\u7528,Re=P()(L);Re.splice(r,1,O()(O()({},t),{},{status:q})),$(Re)}else E.ZP.error(M)})},onCancel:function(){console.log("Cancel")}})},Ne=function(){De(null),de(!0)},Ve=function(t,r){De(t),de(!0)},He=function(t,r){l.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:(0,a.jsxs)(a.Fragment,{children:["\u786E\u8BA4\u5220\u9664\u53D8\u91CF"," ",(0,a.jsxs)(H,{style:{wordBreak:"break-all"},type:"warning",children:[t.name,": ",t.value]})," ","\u5417"]}),onOk:function(){h.W.delete("".concat(C.Z.apiPrefix,"envs"),{data:[t.id]}).then(function(M){if(M.code===200){E.ZP.success("\u5220\u9664\u6210\u529F");var q=P()(L);q.splice(r,1),$(q)}else E.ZP.error(M)})},onCancel:function(){console.log("Cancel")}})},$e=function(t){de(!1),t&&ze(t)},Ge=function(t){xe(!1),Ce()},ze=function(t){var r=P()(L),y=L.findIndex(function(M){return M.id===t.id});y===-1?(t=Array.isArray(t)?t:[t],r.push.apply(r,P()(t))):r.splice(y,1,O()({},t)),$(r)},Xe={body:{row:ie}},Ye=(0,n.useCallback)(function(p,t){if(p!==t){var r=L[p];h.W.put("".concat(C.Z.apiPrefix,"envs/").concat(r.id,"/move"),{data:{fromIndex:p,toIndex:t}}).then(function(y){if(y.code===200){var M=P()(L);M.splice(p,1),M.splice(t,0,O()(O()({},r),y.data)),$(P()(M))}else E.ZP.error(y)})}},[L]),Qe=function(t){Be(t),setTimeout(function(){(Q.length===0||t.length===0)&&ke((0,V.W9)({extraHeight:87}))})},qe={selectedRowIds:Q,onChange:Qe},Je=function(){l.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:(0,a.jsx)(a.Fragment,{children:"\u786E\u8BA4\u5220\u9664\u9009\u4E2D\u7684\u53D8\u91CF\u5417"}),onOk:function(){h.W.delete("".concat(C.Z.apiPrefix,"envs"),{data:Q}).then(function(r){r.code===200?(E.ZP.success("\u6279\u91CF\u5220\u9664\u6210\u529F"),Be([]),Ce()):E.ZP.error(r)})},onCancel:function(){console.log("Cancel")}})},Te=function(t){l.Z.confirm({title:"\u786E\u8BA4".concat(z[t]),content:(0,a.jsxs)(a.Fragment,{children:["\u786E\u8BA4",z[t],"\u9009\u4E2D\u7684\u53D8\u91CF\u5417"]}),onOk:function(){h.W.put("".concat(C.Z.apiPrefix,"envs/").concat(ee[t]),{data:Q}).then(function(y){y.code===200?Ce():E.ZP.error(y)})},onCancel:function(){console.log("Cancel")}})},en=function(){var t=L.filter(function(r){return Q.includes(r.id)}).map(function(r){return{value:r.value,name:r.name,remarks:r.remarks}});(0,V.w7)("env.json",JSON.stringify(t))},nn=function(){xe(!0)},tn=function(t){We(t.trim())};return(0,n.useEffect)(function(){Ce()},[je]),(0,n.useEffect)(function(){setTimeout(function(){ke((0,V.W9)({extraHeight:87}))})},[]),(0,a.jsxs)(d.ZP,{className:"ql-container-wrapper env-wrapper",title:"\u73AF\u5883\u53D8\u91CF",extra:[(0,a.jsx)(se,{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u503C/\u5907\u6CE8",style:{width:"auto"},enterButton:!0,loading:ve,onSearch:tn}),(0,a.jsx)(_.Z,{type:"primary",onClick:function(){return Ne()},children:"\u65B0\u5EFA\u53D8\u91CF"},"2")],header:{style:ae},children:[Q.length>0&&(0,a.jsxs)("div",{style:{marginBottom:16},children:[(0,a.jsx)(_.Z,{type:"primary",style:{marginBottom:5},onClick:nn,children:"\u6279\u91CF\u4FEE\u6539\u53D8\u91CF\u540D\u79F0"}),(0,a.jsx)(_.Z,{type:"primary",style:{marginBottom:5,marginLeft:8},onClick:Je,children:"\u6279\u91CF\u5220\u9664"}),(0,a.jsx)(_.Z,{type:"primary",onClick:function(){return en()},style:{marginLeft:8,marginRight:8},children:"\u6279\u91CF\u5BFC\u51FA"}),(0,a.jsx)(_.Z,{type:"primary",onClick:function(){return Te(0)},style:{marginLeft:8,marginBottom:5},children:"\u6279\u91CF\u542F\u7528"}),(0,a.jsx)(_.Z,{type:"primary",onClick:function(){return Te(1)},style:{marginLeft:8,marginRight:8},children:"\u6279\u91CF\u7981\u7528"}),(0,a.jsxs)("span",{style:{marginLeft:8},children:["\u5DF2\u9009\u62E9",(0,a.jsx)("a",{children:Q==null?void 0:Q.length}),"\u9879"]})]}),(0,a.jsx)(T.W,{backend:A.PD,children:(0,a.jsx)(u.Z,{columns:ue,rowSelection:qe,pagination:!1,dataSource:L,rowKey:"id",size:"middle",scroll:{x:1e3,y:Ue},components:Xe,loading:ve,onRow:function(t,r){return{index:r,moveRow:Ye}}})}),(0,a.jsx)(G.default,{visible:ye,handleCancel:$e,env:Ze}),(0,a.jsx)(N.default,{visible:be,handleCancel:Ge,ids:Q})]})},Y=te},60234:function(le,j,e){"use strict";e.r(j);var w=e(35290),P=e.n(w),U=e(30279),O=e.n(U),K=e(411),b=e.n(K),I=e(46686),c=e.n(I),n=e(63313),o=e.n(n),s=e(78455),m=e(80743),D=e(97325),v=e(2991),l=e(39958),E=e(51970),_=e(98505),u=e(11527),x=function(g){var i=g.env,C=g.handleCancel,d=g.visible,h=s.Z.useForm(),G=c()(h,1),N=G[0],Z=(0,n.useState)(!1),X=c()(Z,2),T=X[0],A=X[1],V=function(){var S=b()(P()().mark(function a(B){var H,R,se,k,J,z,ee,ne,ie,te;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return A(!0),H=B.value,R=B.split,se=B.name,k=B.remarks,J=i?"put":"post",i?z=O()(O()({},B),{},{id:i.id}):R==="1"?(ee=H.includes("&")?"&":`
`,z=H.split(ee).map(function(W){return{name:se,value:W,remarks:k}})):z=[{value:H,name:se,remarks:k}],f.prev=4,f.next=7,E.W[J]("".concat(_.Z.apiPrefix,"envs"),{data:z});case 7:ne=f.sent,ie=ne.code,te=ne.data,ie===200?(m.ZP.success(i?"\u66F4\u65B0\u53D8\u91CF\u6210\u529F":"\u65B0\u5EFA\u53D8\u91CF\u6210\u529F"),C(te)):m.ZP.error(te),A(!1),f.next=17;break;case 14:f.prev=14,f.t0=f.catch(4),A(!1);case 17:case"end":return f.stop()}},a,null,[[4,14]])}));return function(B){return S.apply(this,arguments)}}();return(0,n.useEffect)(function(){N.resetFields()},[i,d]),(0,u.jsx)(D.Z,{title:i?"\u7F16\u8F91\u53D8\u91CF":"\u65B0\u5EFA\u53D8\u91CF",open:d,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){N.validateFields().then(function(a){V(a)}).catch(function(a){console.log("Validate Failed:",a)})},onCancel:function(){return C()},confirmLoading:T,children:(0,u.jsxs)(s.Z,{form:N,layout:"vertical",name:"env_modal",initialValues:i,children:[(0,u.jsx)(s.Z.Item,{name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u540D\u79F0",whitespace:!0},{pattern:/^[a-zA-Z_][0-9a-zA-Z_]*$/,message:"\u53EA\u80FD\u8F93\u5165\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\uFF0C\u4E14\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934"}],children:(0,u.jsx)(v.Z,{placeholder:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u540D\u79F0"})}),!i&&(0,u.jsx)(s.Z.Item,{name:"split",label:"\u81EA\u52A8\u62C6\u5206",initialValue:"0",tooltip:"\u591A\u4E2A\u4F9D\u8D56\u662F\u5426\u6362\u884C\u5206\u5272",children:(0,u.jsxs)(l.ZP.Group,{children:[(0,u.jsx)(l.ZP,{value:"1",children:"\u662F"}),(0,u.jsx)(l.ZP,{value:"0",children:"\u5426"})]})}),(0,u.jsx)(s.Z.Item,{name:"value",label:"\u503C",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u503C",whitespace:!0}],children:(0,u.jsx)(v.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u503C"})}),(0,u.jsx)(s.Z.Item,{name:"remarks",label:"\u5907\u6CE8",children:(0,u.jsx)(v.Z,{placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})})]})})};j.default=x},98505:function(le,j){"use strict";j.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},51970:function(le,j,e){"use strict";e.d(j,{W:function(){return l}});var w=e(35290),P=e.n(w),U=e(411),O=e.n(U),K=e(30279),b=e.n(K),I=e(50659),c=e(80743),n=e(98505),o=e(78722);c.ZP.config({duration:1.5});var s=Date.now(),m=function(_){if(_.response){var u=_.data?_.data.message||_.message||_.data:_.response.statusText,x=_.response.status;[502,504].includes(x)?o.m8.push("/error"):x===401?o.m8.location.pathname!=="/login"&&(c.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(n.Z.authKey),o.m8.push("/login")):c.ZP.error(u)}else console.log(_.message);throw _},D=(0,I.l7)({timeout:6e4,params:{t:s},errorHandler:m}),v=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];D.interceptors.request.use(function(E,_){var u=localStorage.getItem(n.Z.authKey);if(u&&!v.includes(E)){var x={Authorization:"Bearer ".concat(u)};return{url:E,options:b()(b()({},_),{},{headers:x})}}return{url:E,options:_}}),D.interceptors.response.use(function(){var E=O()(P()().mark(function _(u){var x;return P()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,u.clone();case 2:return x=g.sent,g.abrupt("return",u);case 4:case"end":return g.stop()}},_)}));return function(_){return E.apply(this,arguments)}}());var l=D},53686:function(le,j,e){"use strict";e.d(j,{I1:function(){return I},W9:function(){return O},ZP:function(){return U},w7:function(){return b}});var w=e(94434),P=e.n(w);function U(){var c=navigator.userAgent.toLowerCase(),n=function(i){return i.test(c)},o=function(i){return(c.match(i)||[]).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},s="unknow";n(/windows|win32|win64|wow32|wow64/g)?s="windows":n(/macintosh|macintel/g)?s="macos":n(/x11/g)?s="linux":n(/android|adr/g)?s="android":n(/ios|iphone|ipad|ipod|iwatch/g)&&(s="ios");var m="unknow";s==="windows"?n(/windows nt 5.0|windows 2000/g)?m="2000":n(/windows nt 5.1|windows xp/g)?m="xp":n(/windows nt 5.2|windows 2003/g)?m="2003":n(/windows nt 6.0|windows vista/g)?m="vista":n(/windows nt 6.1|windows 7/g)?m="7":n(/windows nt 6.2|windows 8/g)?m="8":n(/windows nt 6.3|windows 8.1/g)?m="8.1":n(/windows nt 10.0|windows 10/g)&&(m="10"):s==="macos"?m=o(/os x [\d._]+/g):s==="android"?m=o(/android [\d._]+/g):s==="ios"&&(m=o(/os [\d._]+/g));var D="unknow";s==="windows"||s==="macos"||s==="linux"?D="desktop":(s==="android"||s==="ios"||n(/mobile/g))&&(D="mobile");var v="unknow",l="unknow";n(/applewebkit/g)?(v="webkit",n(/edge/g)?l="edge":n(/opr/g)?l="opera":n(/chrome/g)?l="chrome":n(/safari/g)&&(l="safari")):n(/gecko/g)&&n(/firefox/g)?(v="gecko",l="firefox"):n(/presto/g)?(v="presto",l="opera"):n(/trident|compatible|msie/g)&&(v="trident",l="iexplore");var E="unknow";v==="webkit"?E=o(/applewebkit\/[\d._]+/g):v==="gecko"?E=o(/gecko\/[\d._]+/g):v==="presto"?E=o(/presto\/[\d._]+/g):v==="trident"&&(E=o(/trident\/[\d._]+/g));var _="unknow";l==="chrome"?_=o(/chrome\/[\d._]+/g):l==="safari"?_=o(/version\/[\d._]+/g):l==="firefox"?_=o(/firefox\/[\d._]+/g):l==="opera"?_=o(/opr\/[\d._]+/g):l==="iexplore"?_=o(/(msie [\d._]+)|(rv:[\d._]+)/g):l==="edge"&&(_=o(/edge\/[\d._]+/g));var u="none",x="unknow";n(/micromessenger/g)?(u="wechat",x=o(/micromessenger\/[\d._]+/g)):n(/qqbrowser/g)?(u="qq",x=o(/qqbrowser\/[\d._]+/g)):n(/ucbrowser/g)?(u="uc",x=o(/ucbrowser\/[\d._]+/g)):n(/qihu 360se/g)?u="360":n(/2345explorer/g)?(u="2345",x=o(/2345explorer\/[\d._]+/g)):n(/metasr/g)?u="sougou":n(/lbbrowser/g)?u="liebao":n(/maxthon/g)&&(u="maxthon",x=o(/maxthon\/[\d._]+/g));var F=Object.assign({engine:v,engineVs:E,platform:D,supporter:l,supporterVs:_,system:s,systemVs:m},u==="none"?{}:{shell:u,shellVs:x});return console.log(`%c
 .d88b.  d888888b d8b   db  d888b  db       .d88b.  d8b   db  d888b  
.8P  Y8.   \`88'   888o  88 88' Y8b 88      .8P  Y8. 888o  88 88' Y8b 
88    88    88    88V8o 88 88      88      88    88 88V8o 88 88      
88    88    88    88 V8o88 88  ooo 88      88    88 88 V8o88 88  ooo 
\`8P  d8'   .88.   88  V888 88. ~8~ 88booo. \`8b  d8' 88  V888 88. ~8~ 
 \`Y88'Y8 Y888888P VP   V8P  Y888P  Y88888P  \`Y88P'  VP   V8P  Y888P  
                                                                     
                                                                     
`,"color: blue;font-size: 14px;"),console.log(`%c\u5FD8\u5F62\u96E8\u7B20\u70DF\u84D1\uFF0C\u77E5\u5FC3\u7267\u5531\u6A35\u6B4C\u3002\u660E\u6708\u6E05\u98CE\u5171\u6211\uFF0C\u95F2\u4EBA\u4E09\u4E2A\uFF0C\u4ECE\u4ED6\u4ECA\u53E4\u6D88\u78E8\u3002
`,"color: yellow;font-size: 18px;"),console.log(`%c\u9752\u9F99\u8FD0\u884C\u73AF\u5883:

\u7CFB\u7EDF\uFF1A`.concat(F.system,"/").concat(F.systemVs,`
\u6D4F\u89C8\u5668\uFF1A`).concat(F.supporter,"/").concat(F.supporterVs,`
\u5185\u6838\uFF1A`).concat(F.engine,"/").concat(F.engineVs),"color: green;font-size: 14px;font-weight: bold;"),F}function O(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=c.extraHeight,o=c.id;typeof n>"u"&&(n=99);var s=null;o?s=document.getElementById(o)?document.getElementById(o).getElementsByClassName("ant-table-thead")[0]:null:s=document.querySelector(".ant-table-wrapper");var m=0;s&&(m=s.getBoundingClientRect().top);var D=document.body.clientHeight-m-n;return D}function K(c){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(n)}function b(c,n){var o=window.URL||window.webkitURL||window,s=new Blob([n]),m=document.createElementNS("http://www.w3.org/1999/xhtml","a");m.href=o.createObjectURL(s),m.download=c,K(m)}function I(c,n,o){var s=P()(c),m=[];return function D(v){if(!!v)for(var l=0;l<(v==null?void 0:v.length);l++){if(n(v[l])){v[l].children?v[l].children.unshift(o):v[l].children=[o];return}v[l].children&&(m.push(v[l].key),D(v[l].children))}}(s),s}},34541:function(le,j,e){"use strict";e.d(j,{Z:function(){return F}});var w=e(47220),P=e(96600),U=e(35931),O=e(60382),K=e(84875),b=e.n(K),I=e(1334),c=e(63313),n=e(71010),o=e(64065),s=e(84144),m=function(g,i){var C={};for(var d in g)Object.prototype.hasOwnProperty.call(g,d)&&i.indexOf(d)<0&&(C[d]=g[d]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,d=Object.getOwnPropertySymbols(g);h<d.length;h++)i.indexOf(d[h])<0&&Object.prototype.propertyIsEnumerable.call(g,d[h])&&(C[d[h]]=g[d[h]]);return C},D=function(i){var C,d=i.prefixCls,h=i.className,G=i.checked,N=i.onChange,Z=i.onClick,X=m(i,["prefixCls","className","checked","onChange","onClick"]),T=c.useContext(n.E_),A=T.getPrefixCls,V=function(H){N==null||N(!G),Z==null||Z(H)},S=A("tag",d),a=b()(S,(C={},(0,w.Z)(C,"".concat(S,"-checkable"),!0),(0,w.Z)(C,"".concat(S,"-checkable-checked"),G),C),h);return c.createElement("span",(0,P.Z)({},X,{className:a,onClick:V}))},v=D,l=function(g,i){var C={};for(var d in g)Object.prototype.hasOwnProperty.call(g,d)&&i.indexOf(d)<0&&(C[d]=g[d]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,d=Object.getOwnPropertySymbols(g);h<d.length;h++)i.indexOf(d[h])<0&&Object.prototype.propertyIsEnumerable.call(g,d[h])&&(C[d[h]]=g[d[h]]);return C},E=new RegExp("^(".concat(o.Y.join("|"),")(-inverse)?$")),_=new RegExp("^(".concat(o.E.join("|"),")$")),u=function(i,C){var d,h=i.prefixCls,G=i.className,N=i.style,Z=i.children,X=i.icon,T=i.color,A=i.onClose,V=i.closeIcon,S=i.closable,a=S===void 0?!1:S,B=l(i,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),H=c.useContext(n.E_),R=H.getPrefixCls,se=H.direction,k=c.useState(!0),J=(0,U.Z)(k,2),z=J[0],ee=J[1];c.useEffect(function(){"visible"in B&&ee(B.visible)},[B.visible]);var ne=function(){return T?E.test(T)||_.test(T):!1},ie=(0,P.Z)({backgroundColor:T&&!ne()?T:void 0},N),te=ne(),Y=R("tag",h),f=b()(Y,(d={},(0,w.Z)(d,"".concat(Y,"-").concat(T),te),(0,w.Z)(d,"".concat(Y,"-has-color"),T&&!te),(0,w.Z)(d,"".concat(Y,"-hidden"),!z),(0,w.Z)(d,"".concat(Y,"-rtl"),se==="rtl"),d),G),W=function($){$.stopPropagation(),A==null||A($),!$.defaultPrevented&&("visible"in B||ee(!1))},ae=function(){return a?V?c.createElement("span",{className:"".concat(Y,"-close-icon"),onClick:W},V):c.createElement(O.Z,{className:"".concat(Y,"-close-icon"),onClick:W}):null},ce="onClick"in B||Z&&Z.type==="a",_e=(0,I.Z)(B,["visible"]),ue=X||null,me=ue?c.createElement(c.Fragment,null,ue,c.createElement("span",null,Z)):Z,re=c.createElement("span",(0,P.Z)({},_e,{ref:C,className:f,style:ie}),me,ae());return ce?c.createElement(s.Z,null,re):re},x=c.forwardRef(u);x.CheckableTag=v;var F=x},71129:function(){}}]);

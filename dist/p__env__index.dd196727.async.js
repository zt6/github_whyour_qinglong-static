(self.webpackChunk=self.webpackChunk||[]).push([[4896],{83063:function(Y,h,e){"use strict";e.d(h,{m:function(){return w.m}});var w=e(35925),W=e(15150)},61066:function(Y,h,e){"use strict";e.r(h);var w=e(49373),W=e(93208),V=e(58862),O=e(63991),P=e(57113),a=e(72132),s=e(35281),o=e(82005),d=e(7773),D=e(26106),p=e(42273),E=e(12924),g=e.n(E),m=e(31604),_=e(95309),r=i=>{var A=i.ids,y=i.handleCancel,x=i.visible,b=D.Z.useForm(),j=(0,p.Z)(b,1),v=j[0],n=(0,E.useState)(!1),Q=(0,p.Z)(n,2),H=Q[0],J=Q[1],q=function(){var C=(0,o.Z)((0,P.Z)().mark(function S(T){var R,N,Z;return(0,P.Z)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return J(!0),L.next=3,m.W.put("".concat(_.Z.apiPrefix,"envs/name"),{data:{ids:A,name:T.name}});case 3:R=L.sent,N=R.code,Z=R.data,N===200?s.ZP.success("\u66F4\u65B0\u73AF\u5883\u53D8\u91CF\u540D\u79F0\u6210\u529F"):s.ZP.error(Z),J(!1),y();case 9:case"end":return L.stop()}},S)}));return function(T){return C.apply(this,arguments)}}();return(0,E.useEffect)(()=>{v.resetFields()},[A,x]),g().createElement(W.Z,{title:"\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u540D\u79F0",visible:x,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{v.validateFields().then(C=>{q(C)}).catch(C=>{console.log("Validate Failed:",C)})},onCancel:()=>y(),confirmLoading:H},g().createElement(D.Z,{form:v,layout:"vertical",name:"edit_name_modal"},g().createElement(D.Z.Item,{name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u540D\u79F0"}]},g().createElement(O.Z,{placeholder:"\u8BF7\u8F93\u5165\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u540D\u79F0"}))))};h.default=r},13004:function(Y,h,e){"use strict";e.r(h);var w=e(32967),W=e(47006),V=e(55273),O=e(84761),P=e(72132),a=e(35281),s=e(49373),o=e(93208),d=e(20528),D=e(66800),p=e(82376),E=e(46860),g=e(17733),m=e(38658),_=e(63796),r=e(72912),i=e(42273),A=e(4945),y=e(58862),x=e(63991),b=e(21399),j=e(77407),v=e(12924),n=e.n(v),Q=e(36531),H=e(69731),J=e(50333),q=e(27478),C=e(95309),S=e(87781),T=e(31604),R=e(67205),N=e(61066),Z=e(98482),X=e(43292),L=e(58163),te=e(56022),G=e(85408),se=["index","moveRow","className","style"],z=j.Z.Text,oe=j.Z.Paragraph,ae=x.Z.Search,M;(function(u){u[u.\u5DF2\u542F\u7528=0]="\u5DF2\u542F\u7528",u[u.\u5DF2\u7981\u7528=1]="\u5DF2\u7981\u7528"})(M||(M={}));var $;(function(u){u[u.success=0]="success",u[u.error=1]="error"})($||($={}));var ne;(function(u){u[u.\u542F\u7528=0]="\u542F\u7528",u[u.\u7981\u7528=1]="\u7981\u7528"})(ne||(ne={}));var B;(function(u){u[u.enable=0]="enable",u[u.disable=1]="disable"})(B||(B={}));var _e="DragableBodyRow",Ie=u=>{var ee=u.index,ge=u.moveRow,he=u.className,ve=u.style,pe=(0,A.Z)(u,se),le=(0,v.useRef)(),I=(0,Z.L)({accept:_e,collect:K=>{var De=K.getItem()||{},re=De.index;return re===ee?{}:{isOver:K.isOver(),dropClassName:re<ee?" drop-over-downward":" drop-over-upward"}},drop:K=>{ge(K.index,ee)}}),k=(0,i.Z)(I,2),ie=k[0],ue=ie.isOver,de=ie.dropClassName,me=k[1],Pe=(0,X.c)({type:_e,item:{index:ee},collect:K=>({isDragging:K.isDragging()})}),Ee=(0,i.Z)(Pe,2),fe=Ee[1];return me(fe(le)),n().createElement("tr",(0,_.Z)({ref:le,className:"".concat(he).concat(ue?de:""),style:(0,r.Z)({cursor:"move"},ve)},pe))},We=u=>{var ee=u.headerStyle,ge=u.isPhone,he=u.theme,ve=[{title:"\u5E8F\u53F7",align:"center",width:60,render:(t,l,c)=>n().createElement("span",{style:{cursor:"text"}},c+1," ")},{title:"\u540D\u79F0",dataIndex:"name",key:"name",align:"center",sorter:(t,l)=>t.name.localeCompare(l.name)},{title:"\u503C",dataIndex:"value",key:"value",align:"center",width:"35%",render:(t,l)=>n().createElement(oe,{style:{wordBreak:"break-all",marginBottom:0,textAlign:"left"},ellipsis:{tooltip:t,rows:2}},t)},{title:"\u5907\u6CE8",dataIndex:"remarks",key:"remarks",align:"center"},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"timestamp",key:"timestamp",align:"center",width:165,ellipsis:{showTitle:!1},sorter:{compare:(t,l)=>{var c=new Date(t.updatedAt||t.timestamp).getTime(),f=new Date(l.updatedAt||l.timestamp).getTime();return c-f}},render:(t,l)=>{var c=navigator.language||navigator.languages[0],f=l.updatedAt||l.timestamp,F=new Date(f).toLocaleString(c,{hour12:!1}).replace(" 24:"," 00:");return n().createElement(m.Z,{placement:"topLeft",title:F,trigger:["hover","click"]},n().createElement("span",null,F))}},{title:"\u72B6\u6001",key:"status",dataIndex:"status",align:"center",width:70,filters:[{text:"\u5DF2\u542F\u7528",value:0},{text:"\u5DF2\u7981\u7528",value:1}],onFilter:(t,l)=>l.status===t,render:(t,l,c)=>n().createElement(D.Z,{size:"middle",style:{cursor:"text"}},n().createElement(E.Z,{color:$[l.status],style:{marginRight:0}},M[l.status]))},{title:"\u64CD\u4F5C",key:"action",width:120,align:"center",render:(t,l,c)=>{var f=!ge;return n().createElement(D.Z,{size:"middle"},n().createElement(m.Z,{title:f?"\u7F16\u8F91":""},n().createElement("a",{onClick:()=>He(l,c)},n().createElement(Q.Z,null))),n().createElement(m.Z,{title:f?l.status===M.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528":""},n().createElement("a",{onClick:()=>Ve(l,c)},l.status===M.\u5DF2\u7981\u7528?n().createElement(H.Z,null):n().createElement(J.Z,null))),n().createElement(m.Z,{title:f?"\u5220\u9664":""},n().createElement("a",{onClick:()=>Ne(l,c)},n().createElement(q.Z,null))))}}],pe=(0,v.useState)([]),le=(0,i.Z)(pe,2),I=le[0],k=le[1],ie=(0,v.useState)(!0),ue=(0,i.Z)(ie,2),de=ue[0],me=ue[1],Pe=(0,v.useState)(!1),Ee=(0,i.Z)(Pe,2),fe=Ee[0],K=Ee[1],De=(0,v.useState)(!1),re=(0,i.Z)(De,2),Le=re[0],Oe=re[1],Ke=(0,v.useState)(),Me=(0,i.Z)(Ke,2),Ue=Me[0],Ce=Me[1],we=(0,v.useState)([]),Be=(0,i.Z)(we,2),U=Be[0],ye=Be[1],Fe=(0,v.useState)(""),Ae=(0,i.Z)(Fe,2),be=Ae[0],xe=Ae[1],Se=(0,v.useState)(),Te=(0,i.Z)(Se,2),ke=Te[0],Re=Te[1],ce=()=>{me(!0),T.W.get("".concat(C.Z.apiPrefix,"envs?searchValue=").concat(be)).then(t=>{k(t.data)}).finally(()=>me(!1))},Ve=(t,l)=>{o.Z.confirm({title:"\u786E\u8BA4".concat(t.status===M.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528"),content:n().createElement(n().Fragment,null,"\u786E\u8BA4",t.status===M.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528","Env"," ",n().createElement(z,{style:{wordBreak:"break-all"},type:"warning"},t.value)," ","\u5417"),onOk(){T.W.put("".concat(C.Z.apiPrefix,"envs/").concat(t.status===M.\u5DF2\u7981\u7528?"enable":"disable"),{data:[t.id]}).then(c=>{if(c.code===200){a.ZP.success("".concat(t.status===M.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528","\u6210\u529F"));var f=t.status===M.\u5DF2\u7981\u7528?M.\u5DF2\u542F\u7528:M.\u5DF2\u7981\u7528,F=[...I];F.splice(l,1,(0,r.Z)((0,r.Z)({},t),{},{status:f})),k(F)}else a.ZP.error(c)})},onCancel(){console.log("Cancel")}})},je=()=>{Ce(null),K(!0)},He=(t,l)=>{Ce(t),K(!0)},Ne=(t,l)=>{o.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:n().createElement(n().Fragment,null,"\u786E\u8BA4\u5220\u9664\u53D8\u91CF"," ",n().createElement(z,{style:{wordBreak:"break-all"},type:"warning"},t.name,": ",t.value)," ","\u5417"),onOk(){T.W.delete("".concat(C.Z.apiPrefix,"envs"),{data:[t.id]}).then(c=>{if(c.code===200){a.ZP.success("\u5220\u9664\u6210\u529F");var f=[...I];f.splice(l,1),k(f)}else a.ZP.error(c)})},onCancel(){console.log("Cancel")}})},Xe=t=>{K(!1),t&&ze(t)},Ge=t=>{Oe(!1),ce()},ze=t=>{var l=[...I],c=I.findIndex(f=>f.id===t.id);c===-1?(t=Array.isArray(t)?t:[t],l.push(...t)):l.splice(c,1,(0,r.Z)({},t)),k(l)},$e={body:{row:Ie}},Ye=(0,v.useCallback)((t,l)=>{if(t!==l){var c=I[t];T.W.put("".concat(C.Z.apiPrefix,"envs/").concat(c.id,"/move"),{data:{fromIndex:t,toIndex:l}}).then(f=>{if(f.code===200){var F=[...I];F.splice(t,1),F.splice(l,0,(0,r.Z)((0,r.Z)({},c),f.data)),k([...F])}else a.ZP.error(f)})}},[I]),Qe=t=>{ye(t),setTimeout(()=>{(U.length===0||t.length===0)&&Re((0,G.W9)({extraHeight:87}))})},Je={selectedRowIds:U,onChange:Qe},qe=()=>{o.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:n().createElement(n().Fragment,null,"\u786E\u8BA4\u5220\u9664\u9009\u4E2D\u7684\u53D8\u91CF\u5417"),onOk(){T.W.delete("".concat(C.Z.apiPrefix,"envs"),{data:U}).then(t=>{t.code===200?(a.ZP.success("\u6279\u91CF\u5220\u9664\u6210\u529F"),ye([]),ce()):a.ZP.error(t)})},onCancel(){console.log("Cancel")}})},Ze=t=>{o.Z.confirm({title:"\u786E\u8BA4".concat(ne[t]),content:n().createElement(n().Fragment,null,"\u786E\u8BA4",ne[t],"\u9009\u4E2D\u7684\u53D8\u91CF\u5417"),onOk(){T.W.put("".concat(C.Z.apiPrefix,"envs/").concat(B[t]),{data:U}).then(l=>{l.code===200?ce():a.ZP.error(l)})},onCancel(){console.log("Cancel")}})},et=()=>{var t=I.filter(l=>U.includes(l.id)).map(l=>({value:l.value,name:l.name,remarks:l.remarks}));(0,G.w7)("env.json",JSON.stringify(t))},tt=()=>{Oe(!0)},at=t=>{xe(t.trim())};return(0,v.useEffect)(()=>{ce()},[be]),(0,v.useEffect)(()=>{setTimeout(()=>{Re((0,G.W9)({extraHeight:87}))})},[]),n().createElement(S.ZP,{className:"ql-container-wrapper env-wrapper",title:"\u73AF\u5883\u53D8\u91CF",extra:[n().createElement(ae,{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u503C/\u5907\u6CE8",style:{width:"auto"},enterButton:!0,loading:de,onSearch:at}),n().createElement(O.Z,{key:"2",type:"primary",onClick:()=>je()},"\u65B0\u5EFA\u53D8\u91CF")],header:{style:ee}},U.length>0&&n().createElement("div",{style:{marginBottom:16}},n().createElement(O.Z,{type:"primary",style:{marginBottom:5},onClick:tt},"\u6279\u91CF\u4FEE\u6539\u53D8\u91CF\u540D\u79F0"),n().createElement(O.Z,{type:"primary",style:{marginBottom:5,marginLeft:8},onClick:qe},"\u6279\u91CF\u5220\u9664"),n().createElement(O.Z,{type:"primary",onClick:()=>et(),style:{marginLeft:8,marginRight:8}},"\u6279\u91CF\u5BFC\u51FA"),n().createElement(O.Z,{type:"primary",onClick:()=>Ze(0),style:{marginLeft:8,marginBottom:5}},"\u6279\u91CF\u542F\u7528"),n().createElement(O.Z,{type:"primary",onClick:()=>Ze(1),style:{marginLeft:8,marginRight:8}},"\u6279\u91CF\u7981\u7528"),n().createElement("span",{style:{marginLeft:8}},"\u5DF2\u9009\u62E9",n().createElement("a",null,U==null?void 0:U.length),"\u9879")),n().createElement(L.W,{backend:te.PD},n().createElement(W.Z,{columns:ve,rowSelection:Je,pagination:!1,dataSource:I,rowKey:"id",size:"middle",scroll:{x:1e3,y:ke},components:$e,loading:de,onRow:(t,l)=>({index:l,moveRow:Ye})})),n().createElement(R.default,{visible:fe,handleCancel:Xe,env:Ue}),n().createElement(N.default,{visible:Le,handleCancel:Ge,ids:U}))};h.default=We},67205:function(Y,h,e){"use strict";e.r(h);var w=e(49373),W=e(93208),V=e(73156),O=e(31150),P=e(58862),a=e(63991),s=e(57113),o=e(72132),d=e(35281),D=e(72912),p=e(82005),E=e(7773),g=e(26106),m=e(42273),_=e(12924),r=e.n(_),i=e(31604),A=e(95309),y=x=>{var b=x.env,j=x.handleCancel,v=x.visible,n=g.Z.useForm(),Q=(0,m.Z)(n,1),H=Q[0],J=(0,_.useState)(!1),q=(0,m.Z)(J,2),C=q[0],S=q[1],T=function(){var R=(0,p.Z)((0,s.Z)().mark(function N(Z){var X,L,te,G,se,z,oe,ae,M,$;return(0,s.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return S(!0),X=Z.value,L=Z.split,te=Z.name,G=Z.remarks,se=b?"put":"post",b?z=(0,D.Z)((0,D.Z)({},Z),{},{id:b.id}):L==="1"?(oe=X.includes("&")?"&":`
`,z=X.split(oe).map(_e=>({name:te,value:_e,remarks:G}))):z=[{value:X,name:te,remarks:G}],B.prev=4,B.next=7,i.W[se]("".concat(A.Z.apiPrefix,"envs"),{data:z});case 7:ae=B.sent,M=ae.code,$=ae.data,M===200?d.ZP.success(b?"\u66F4\u65B0\u53D8\u91CF\u6210\u529F":"\u65B0\u5EFA\u53D8\u91CF\u6210\u529F"):d.ZP.error($),S(!1),j($),B.next=18;break;case 15:B.prev=15,B.t0=B.catch(4),S(!1);case 18:case"end":return B.stop()}},N,null,[[4,15]])}));return function(Z){return R.apply(this,arguments)}}();return(0,_.useEffect)(()=>{H.resetFields()},[b,v]),r().createElement(W.Z,{title:b?"\u7F16\u8F91\u53D8\u91CF":"\u65B0\u5EFA\u53D8\u91CF",visible:v,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{H.validateFields().then(R=>{T(R)}).catch(R=>{console.log("Validate Failed:",R)})},onCancel:()=>j(),confirmLoading:C},r().createElement(g.Z,{form:H,layout:"vertical",name:"env_modal",initialValues:b},r().createElement(g.Z.Item,{name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u540D\u79F0",whitespace:!0},{pattern:/^[a-zA-Z_][0-9a-zA-Z_]*$/,message:"\u53EA\u80FD\u8F93\u5165\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\uFF0C\u4E14\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934"}]},r().createElement(a.Z,{placeholder:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u540D\u79F0"})),!b&&r().createElement(g.Z.Item,{name:"split",label:"\u81EA\u52A8\u62C6\u5206",initialValue:"0",tooltip:"\u591A\u4E2A\u4F9D\u8D56\u662F\u5426\u6362\u884C\u5206\u5272"},r().createElement(O.ZP.Group,null,r().createElement(O.ZP,{value:"1"},"\u662F"),r().createElement(O.ZP,{value:"0"},"\u5426"))),r().createElement(g.Z.Item,{name:"value",label:"\u503C",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u503C",whitespace:!0}]},r().createElement(a.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u503C"})),r().createElement(g.Z.Item,{name:"remarks",label:"\u5907\u6CE8"},r().createElement(a.Z,{placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"}))))};h.default=y},95309:function(Y,h){"use strict";h.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},31604:function(Y,h,e){"use strict";e.d(h,{W:function(){return g}});var w=e(57113),W=e(82005),V=e(72912),O=e(72132),P=e(35281),a=e(50659),s=e(95309),o=e(83063);P.ZP.config({duration:1.5});var d=Date.now(),D=function(_){if(_.response){var r=_.data?_.data.message||_.message||_.data:_.response.statusText,i=_.response.status;[502,504].includes(i)?o.m.push("/error"):i===401?o.m.location.pathname!=="/login"&&(P.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(s.Z.authKey),o.m.push("/login")):P.ZP.error(r)}else console.log(_.message);throw _},p=(0,a.l7)({timeout:6e4,params:{t:d},errorHandler:D}),E=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];p.interceptors.request.use((m,_)=>{var r=localStorage.getItem(s.Z.authKey);if(r&&!E.includes(m)){var i={Authorization:"Bearer ".concat(r)};return{url:m,options:(0,V.Z)((0,V.Z)({},_),{},{headers:i})}}return{url:m,options:_}}),p.interceptors.response.use(function(){var m=(0,W.Z)((0,w.Z)().mark(function _(r){var i;return(0,w.Z)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,r.clone();case 2:return i=y.sent,y.abrupt("return",r);case 4:case"end":return y.stop()}},_)}));return function(_){return m.apply(this,arguments)}}());var g=p},85408:function(Y,h,e){"use strict";e.d(h,{ZP:function(){return w},W9:function(){return W},w7:function(){return O}});function w(){var P=navigator.userAgent.toLowerCase(),a=A=>A.test(P),s=A=>(P.match(A)||[]).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."),o="unknow";a(/windows|win32|win64|wow32|wow64/g)?o="windows":a(/macintosh|macintel/g)?o="macos":a(/x11/g)?o="linux":a(/android|adr/g)?o="android":a(/ios|iphone|ipad|ipod|iwatch/g)&&(o="ios");var d="unknow";o==="windows"?a(/windows nt 5.0|windows 2000/g)?d="2000":a(/windows nt 5.1|windows xp/g)?d="xp":a(/windows nt 5.2|windows 2003/g)?d="2003":a(/windows nt 6.0|windows vista/g)?d="vista":a(/windows nt 6.1|windows 7/g)?d="7":a(/windows nt 6.2|windows 8/g)?d="8":a(/windows nt 6.3|windows 8.1/g)?d="8.1":a(/windows nt 10.0|windows 10/g)&&(d="10"):o==="macos"?d=s(/os x [\d._]+/g):o==="android"?d=s(/android [\d._]+/g):o==="ios"&&(d=s(/os [\d._]+/g));var D="unknow";o==="windows"||o==="macos"||o==="linux"?D="desktop":(o==="android"||o==="ios"||a(/mobile/g))&&(D="mobile");var p="unknow",E="unknow";a(/applewebkit/g)?(p="webkit",a(/edge/g)?E="edge":a(/opr/g)?E="opera":a(/chrome/g)?E="chrome":a(/safari/g)&&(E="safari")):a(/gecko/g)&&a(/firefox/g)?(p="gecko",E="firefox"):a(/presto/g)?(p="presto",E="opera"):a(/trident|compatible|msie/g)&&(p="trident",E="iexplore");var g="unknow";p==="webkit"?g=s(/applewebkit\/[\d._]+/g):p==="gecko"?g=s(/gecko\/[\d._]+/g):p==="presto"?g=s(/presto\/[\d._]+/g):p==="trident"&&(g=s(/trident\/[\d._]+/g));var m="unknow";E==="chrome"?m=s(/chrome\/[\d._]+/g):E==="safari"?m=s(/version\/[\d._]+/g):E==="firefox"?m=s(/firefox\/[\d._]+/g):E==="opera"?m=s(/opr\/[\d._]+/g):E==="iexplore"?m=s(/(msie [\d._]+)|(rv:[\d._]+)/g):E==="edge"&&(m=s(/edge\/[\d._]+/g));var _="none",r="unknow";a(/micromessenger/g)?(_="wechat",r=s(/micromessenger\/[\d._]+/g)):a(/qqbrowser/g)?(_="qq",r=s(/qqbrowser\/[\d._]+/g)):a(/ucbrowser/g)?(_="uc",r=s(/ucbrowser\/[\d._]+/g)):a(/qihu 360se/g)?_="360":a(/2345explorer/g)?(_="2345",r=s(/2345explorer\/[\d._]+/g)):a(/metasr/g)?_="sougou":a(/lbbrowser/g)?_="liebao":a(/maxthon/g)&&(_="maxthon",r=s(/maxthon\/[\d._]+/g));var i=Object.assign({engine:p,engineVs:g,platform:D,supporter:E,supporterVs:m,system:o,systemVs:d},_==="none"?{}:{shell:_,shellVs:r});return console.log(`%c
 .d88b.  d888888b d8b   db  d888b  db       .d88b.  d8b   db  d888b  
.8P  Y8.   \`88'   888o  88 88' Y8b 88      .8P  Y8. 888o  88 88' Y8b 
88    88    88    88V8o 88 88      88      88    88 88V8o 88 88      
88    88    88    88 V8o88 88  ooo 88      88    88 88 V8o88 88  ooo 
\`8P  d8'   .88.   88  V888 88. ~8~ 88booo. \`8b  d8' 88  V888 88. ~8~ 
 \`Y88'Y8 Y888888P VP   V8P  Y888P  Y88888P  \`Y88P'  VP   V8P  Y888P  
                                                                     
                                                                     
`,"color: blue;font-size: 14px;"),console.log(`%c\u5FD8\u5F62\u96E8\u7B20\u70DF\u84D1\uFF0C\u77E5\u5FC3\u7267\u5531\u6A35\u6B4C\u3002\u660E\u6708\u6E05\u98CE\u5171\u6211\uFF0C\u95F2\u4EBA\u4E09\u4E2A\uFF0C\u4ECE\u4ED6\u4ECA\u53E4\u6D88\u78E8\u3002
`,"color: yellow;font-size: 18px;"),console.log(`%c\u9752\u9F99\u8FD0\u884C\u73AF\u5883:

\u7CFB\u7EDF\uFF1A`.concat(i.system,"/").concat(i.systemVs,`
\u6D4F\u89C8\u5668\uFF1A`).concat(i.supporter,"/").concat(i.supporterVs,`
\u5185\u6838\uFF1A`).concat(i.engine,"/").concat(i.engineVs),"color: green;font-size: 14px;font-weight: bold;"),i}function W(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=P.extraHeight,s=P.id;typeof a=="undefined"&&(a=121);var o=null;s?o=document.getElementById(s)?document.getElementById(s).getElementsByClassName("ant-table-thead")[0]:null:o=document.querySelector(".ant-table-wrapper");var d=0;o&&(d=o.getBoundingClientRect().top);var D=document.body.clientHeight-d-a;return D}function V(P){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),P.dispatchEvent(a)}function O(P,a){var s=window.URL||window.webkitURL||window,o=new Blob([a]),d=document.createElementNS("http://www.w3.org/1999/xhtml","a");d.href=s.createObjectURL(o),d.download=P,V(d)}},71129:function(){}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[2937],{19250:function($,v,e){"use strict";e.d(v,{m:function(){return W.m}});var W=e(17444),K=e(90080)},82104:function($,v,e){"use strict";e.r(v);var W=e(65709),K=e(81615),z=e(56457),V=e(40971),p=e(63796),O=e(4945),q=e(94068),M=e(42061),le=e(69944),m=e(42857),T=e(57113),Y=e(73742),N=e(84263),u=e(72912),_=e(82005),P=e(68476),s=e(69583),L=e(42273),o=e(12924),t=e.n(o),X=e(6098),G=e(27077),J=e(92555),ee=e(48487),re=["key","name"],_e=["key","name"],te=[{name:"\u547D\u4EE4",value:"command"},{name:"\u540D\u79F0",value:"name"},{name:"\u5B9A\u65F6\u89C4\u5219",value:"schedule"},{name:"\u72B6\u6001",value:"status"}],se=[{name:"\u5305\u542B",value:"Reg"},{name:"\u4E0D\u5305\u542B",value:"NotReg"},{name:"\u5C5E\u4E8E",value:"In"},{name:"\u4E0D\u5C5E\u4E8E",value:"Nin"}],oe=[{name:"\u987A\u5E8F",value:"ASC"},{name:"\u5012\u5E8F",value:"DESC"}],ie=[{name:"\u8FD0\u884C\u4E2D",value:0},{name:"\u7A7A\u95F2\u4E2D",value:1},{name:"\u5DF2\u7981\u7528",value:2}],ue=U=>{var h=U.view,ae=U.handleCancel,d=U.visible,C=s.Z.useForm(),H=(0,L.Z)(C,1),B=H[0],b=(0,o.useState)(!1),S=(0,L.Z)(b,2),F=S[0],R=S[1],c=(0,o.useState)(),y=(0,L.Z)(c,2),ne=y[0],k=y[1],Q=function(){var n=(0,_.Z)((0,T.Z)().mark(function i(f){var Z,E,g,l;return(0,T.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return R(!0),Z=h?"put":"post",a.prev=2,a.next=5,X.W[Z]("".concat(G.Z.apiPrefix,"crons/views"),{data:h?(0,u.Z)((0,u.Z)({},f),{},{id:h.id}):f});case 5:E=a.sent,g=E.code,l=E.data,g!==200&&N.ZP.error(l),R(!1),ae(l),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(2),R(!1);case 16:case"end":return a.stop()}},i,null,[[2,13]])}));return function(f){return n.apply(this,arguments)}}();(0,o.useEffect)(()=>{h||B.resetFields(),B.setFieldsValue(h||{filters:[{property:"command",operation:"Reg"}]})},[h,d]);var A=t().createElement(m.Z,{style:{width:100},onChange:()=>{k({})}},se.map(n=>t().createElement(m.Z.Option,{key:n.name,value:n.value},n.name))),w=n=>t().createElement(m.Z,{style:{width:120}},n.map(i=>t().createElement(m.Z.Option,{key:i.name,value:i.value},i.name))),x=t().createElement(m.Z,{style:{width:120}},oe.map(n=>t().createElement(m.Z.Option,{key:n.name,value:n.value},n.name))),D=t().createElement(m.Z,{mode:"multiple",allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},ie.map(n=>t().createElement(m.Z.Option,{key:n.name,value:n.value},n.name)));return t().createElement(K.Z,{title:h?"\u7F16\u8F91\u89C6\u56FE":"\u65B0\u5EFA\u89C6\u56FE",visible:d,forceRender:!0,width:580,centered:!0,maskClosable:!1,onOk:()=>{B.validateFields().then(n=>{Q(n)}).catch(n=>{console.log("Validate Failed:",n)})},onCancel:()=>ae(),confirmLoading:F},t().createElement(s.Z,{form:B,layout:"vertical",name:"env_modal"},t().createElement(s.Z.Item,{name:"name",label:"\u89C6\u56FE\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C6\u56FE\u540D\u79F0"}]},t().createElement(M.Z,{placeholder:"\u8BF7\u8F93\u5165\u89C6\u56FE\u540D\u79F0"})),t().createElement(s.Z.List,{name:"filters"},(n,i)=>{var f=i.add,Z=i.remove;return t().createElement(t().Fragment,null,n.map((E,g)=>{var l=E.key,r=E.name,a=(0,O.Z)(E,re);return t().createElement(s.Z.Item,{label:g===0?"\u7B5B\u9009\u6761\u4EF6":"",key:l,style:{marginBottom:0}},t().createElement(V.Z,{className:"view-create-modal-filters",align:"baseline"},t().createElement(s.Z.Item,(0,p.Z)({},a,{name:[r,"property"],rules:[{required:!0}]}),w(te)),t().createElement(s.Z.Item,(0,p.Z)({},a,{name:[r,"operation"],rules:[{required:!0}]}),A),t().createElement(s.Z.Item,(0,p.Z)({},a,{name:[r,"value"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}),["In","Nin"].includes(B.getFieldValue(["filters",g,"operation"]))?D:t().createElement(M.Z,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"})),g!==0&&t().createElement(J.Z,{onClick:()=>Z(r)})))}),t().createElement(s.Z.Item,null,t().createElement("a",{onClick:()=>f({property:"command",operation:"Reg"})},t().createElement(ee.Z,null),"\u65B0\u589E\u7B5B\u9009\u6761\u4EF6")))}),t().createElement(s.Z.List,{name:"sorts"},(n,i)=>{var f=i.add,Z=i.remove;return t().createElement(t().Fragment,null,n.map((E,g)=>{var l=E.key,r=E.name,a=(0,O.Z)(E,_e);return t().createElement(s.Z.Item,{label:g===0?"\u6392\u5E8F\u65B9\u5F0F":"",key:l,style:{marginBottom:0}},t().createElement(V.Z,{className:"view-create-modal-filters",align:"baseline"},t().createElement(s.Z.Item,(0,p.Z)({},a,{name:[r,"property"],rules:[{required:!0}]}),w(te)),t().createElement(s.Z.Item,(0,p.Z)({},a,{name:[r,"type"],rules:[{required:!0}]}),x),g!==0&&t().createElement(J.Z,{onClick:()=>Z(r)})))}),t().createElement(s.Z.Item,null,t().createElement("a",{onClick:()=>f({property:"command",type:"ASC"})},t().createElement(ee.Z,null),"\u65B0\u589E\u6392\u5E8F\u65B9\u5F0F")))})))};v.default=ue},25472:function($,v,e){"use strict";e.r(v);var W=e(36600),K=e(81051),z=e(54598),V=e(189),p=e(73742),O=e(84263),q=e(65709),M=e(81615),le=e(56457),m=e(40971),T=e(1377),Y=e(87388),N=e(63796),u=e(72912),_=e(42273),P=e(4945),s=e(53086),L=e(85141),o=e(12924),t=e.n(o),X=e(6098),G=e(27077),J=e(36531),ee=e(27478),re=e(66568),_e=e(83629),te=e(56752),se=e(56022),oe=e(82104),ie=["index","moveRow","className","style"],ue=L.Z.Text,U="DragableBodyRow",h=d=>{var C=d.index,H=d.moveRow,B=d.className,b=d.style,S=(0,P.Z)(d,ie),F=(0,o.useRef)(),R=(0,re.L)({accept:U,collect:D=>{var n=D.getItem()||{},i=n.index;return i===C?{}:{isOver:D.isOver(),dropClassName:i<C?" drop-over-downward":" drop-over-upward"}},drop:D=>{H(D.index,C)}}),c=(0,_.Z)(R,2),y=c[0],ne=y.isOver,k=y.dropClassName,Q=c[1],A=(0,_e.c)({type:U,item:{index:C},collect:D=>({isDragging:D.isDragging()})}),w=(0,_.Z)(A,2),x=w[1];return Q(x(F)),t().createElement("tr",(0,N.Z)({ref:F,className:"".concat(B).concat(ne?k:""),style:(0,u.Z)({cursor:"move"},b)},S))},ae=d=>{var C=d.cronViews,H=d.handleCancel,B=d.visible,b=d.cronViewChange,S=[{title:"\u540D\u79F0",dataIndex:"name",key:"name",align:"center"},{title:"\u663E\u793A",key:"isDisabled",dataIndex:"isDisabled",align:"center",width:100,render:(l,r,a)=>t().createElement(Y.Z,{checked:!r.isDisabled,onChange:I=>Z(I,r,a)})},{title:"\u64CD\u4F5C",key:"action",width:140,align:"center",render:(l,r,a)=>t().createElement(m.Z,{size:"middle"},t().createElement("a",{onClick:()=>i(r,a)},t().createElement(J.Z,null)),t().createElement("a",{onClick:()=>f(r,a)},t().createElement(ee.Z,null)))}],F=(0,o.useState)([]),R=(0,_.Z)(F,2),c=R[0],y=R[1],ne=(0,o.useState)(!1),k=(0,_.Z)(ne,2),Q=k[0],A=k[1],w=(0,o.useState)(null),x=(0,_.Z)(w,2),D=x[0],n=x[1],i=(l,r)=>{n(l),A(!0)},f=(l,r)=>{M.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:t().createElement(t().Fragment,null,"\u786E\u8BA4\u5220\u9664\u89C6\u56FE"," ",t().createElement(ue,{style:{wordBreak:"break-all"},type:"warning"},l.name)," ","\u5417"),onOk(){X.W.delete("".concat(G.Z.apiPrefix,"crons/views"),{data:[l.id]}).then(a=>{a.code===200?(O.ZP.success("\u5220\u9664\u6210\u529F"),b()):O.ZP.error(a)})},onCancel(){console.log("Cancel")}})},Z=(l,r,a)=>{console.log(l),X.W.put("".concat(G.Z.apiPrefix,"crons/views/").concat(l?"enable":"disable"),{data:[r.id]}).then(I=>{if(I.code===200){var j=[...c];j.splice(a,1,(0,u.Z)((0,u.Z)({},c[a]),{},{isDisabled:!l})),y(j),b()}else O.ZP.error(I)})},E={body:{row:h}},g=(0,o.useCallback)((l,r)=>{if(l!==r){var a=c[l];X.W.put("".concat(G.Z.apiPrefix,"crons/views/move"),{data:{fromIndex:l,toIndex:r,id:a.id}}).then(I=>{if(I.code===200){var j=[...c];j.splice(l,1),j.splice(r,0,(0,u.Z)((0,u.Z)({},a),I.data)),y(j),b()}else O.ZP.error(I)})}},[c]);return(0,o.useEffect)(()=>{y(C)},[C]),t().createElement(M.Z,{title:"\u89C6\u56FE\u7BA1\u7406",visible:B,centered:!0,width:620,onCancel:()=>H(),className:"view-manage-modal",forceRender:!0,footer:!1,maskClosable:!1},t().createElement(m.Z,{style:{display:"flex",justifyContent:"flex-end",marginBottom:10}},t().createElement(V.Z,{key:"2",type:"primary",onClick:()=>A(!0)},"\u65B0\u5EFA\u89C6\u56FE")),t().createElement(te.W,{backend:se.PD},t().createElement(K.Z,{bordered:!0,columns:S,pagination:!1,dataSource:c,rowKey:"id",size:"middle",style:{marginBottom:20},components:E,onRow:(l,r)=>({index:r,moveRow:g})})),t().createElement(oe.default,{view:D,visible:Q,handleCancel:l=>{b(l),A(!1)}}))};v.default=ae},27077:function($,v){"use strict";v.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},6098:function($,v,e){"use strict";e.d(v,{W:function(){return N}});var W=e(57113),K=e(82005),z=e(72912),V=e(73742),p=e(84263),O=e(50659),q=e(27077),M=e(19250);p.ZP.config({duration:1.5});var le=Date.now(),m=function(_){if(_.response){var P=_.data?_.data.message||_.message||_.data:_.response.statusText,s=_.response.status;[502,504].includes(s)?M.m.push("/error"):s===401?M.m.location.pathname!=="/login"&&(p.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(q.Z.authKey),M.m.push("/login")):p.ZP.error(P)}else console.log(_.message);throw _},T=(0,O.l7)({timeout:6e4,params:{t:le},errorHandler:m}),Y=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];T.interceptors.request.use((u,_)=>{var P=localStorage.getItem(q.Z.authKey);if(P&&!Y.includes(u)){var s={Authorization:"Bearer ".concat(P)};return{url:u,options:(0,z.Z)((0,z.Z)({},_),{},{headers:s})}}return{url:u,options:_}}),T.interceptors.response.use(function(){var u=(0,K.Z)((0,W.Z)().mark(function _(P){var s;return(0,W.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,P.clone();case 2:return s=o.sent,o.abrupt("return",P);case 4:case"end":return o.stop()}},_)}));return function(_){return u.apply(this,arguments)}}());var N=T},71129:function(){}}]);

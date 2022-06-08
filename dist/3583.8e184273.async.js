(self.webpackChunk=self.webpackChunk||[]).push([[3583],{80377:function(X,y,e){"use strict";e.d(y,{m:function(){return W.m}});var W=e(72612),F=e(59609)},12731:function(X,y,e){"use strict";e.r(y),e.d(y,{CronLabelModal:function(){return ae},default:function(){return te}});var W=e(87025),F=e(8019),j=e(85500),O=e(44602),$=e(91443),M=e(69915),H=e(21300),S=e(21355),K=e(18158),R=e(30606),Q=e(88938),n=e(15658),c=e(2468),G=e(22205),s=e.n(G),a=e(12924),t=e.n(a),v=e(42237),w=e(27131),P=e(93892),N=e.n(P),le=e(18763),q=e(530),Y=e(72820),J=e(48487),ee=d=>{var r=d.value,u=d.onChange,_=(0,a.useState)(""),I=(0,c.Z)(_,2),g=I[0],m=I[1],x=(0,a.useState)(!1),C=(0,c.Z)(x,2),B=C[0],f=C[1],T=(0,a.useState)([]),i=(0,c.Z)(T,2),o=i[0],h=i[1],p=(0,a.useRef)(),k=l=>{var D=o.filter(A=>A!==l);h(D),u==null||u(D)},E=()=>{f(!0)},Z=l=>{m(l.target.value)},b=()=>{g&&!o.includes(g)&&(h([...o,g]),u==null||u([...o,g])),f(!1),m("")},U=o.map(l=>{var D=t().createElement(q.Z,{closable:!0,onClose:A=>{A.preventDefault(),k(l)}},l);return t().createElement("span",{key:l,style:{display:"inline-block",marginBottom:8}},D)});return(0,a.useEffect)(()=>{B&&p&&p.current.focus()},[B]),(0,a.useEffect)(()=>{r&&h(r)},[r]),t().createElement(t().Fragment,null,t().createElement(Y.Z,{enter:{scale:.8,opacity:0,type:"from",duration:100},leave:{opacity:0,width:0,scale:0,duration:200},appear:!1},U),B&&t().createElement(M.Z,{ref:p,type:"text",size:"small",style:{width:78},value:g,onChange:Z,onBlur:b,onPressEnter:b}),!B&&t().createElement(q.Z,{onClick:E,style:{borderStyle:"dashed",cursor:"pointer"}},t().createElement(J.Z,null)," \u65B0\u5EFA"))},V=ee,te=d=>{var r=d.cron,u=d.handleCancel,_=d.visible,I=n.Z.useForm(),g=(0,c.Z)(I,1),m=g[0],x=(0,a.useState)(!1),C=(0,c.Z)(x,2),B=C[0],f=C[1],T=function(){var i=(0,R.Z)(s().mark(function o(h){var p,k,E,Z,b;return s().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f(!0),p=r?"put":"post",k=(0,K.Z)({},h),r&&(k.id=r.id),l.prev=4,l.next=7,v.W[p]("".concat(w.Z.apiPrefix,"crons"),{data:k});case 7:E=l.sent,Z=E.code,b=E.data,Z===200?S.ZP.success(r?"\u66F4\u65B0Cron\u6210\u529F":"\u65B0\u5EFACron\u6210\u529F"):S.ZP.error(b),f(!1),u(b),l.next=18;break;case 15:l.prev=15,l.t0=l.catch(4),f(!1);case 18:case"end":return l.stop()}},o,null,[[4,15]])}));return function(h){return i.apply(this,arguments)}}();return(0,a.useEffect)(()=>{m.resetFields()},[r,_]),t().createElement(O.Z,{title:r?"\u7F16\u8F91\u4EFB\u52A1":"\u65B0\u5EFA\u4EFB\u52A1",visible:_,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{m.validateFields().then(i=>{T(i)}).catch(i=>{console.log("Validate Failed:",i)})},onCancel:()=>u(),confirmLoading:B},t().createElement(n.Z,{form:m,layout:"vertical",name:"form_in_modal",initialValues:r},t().createElement(n.Z.Item,{name:"name",label:"\u540D\u79F0"},t().createElement(M.Z,{placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"})),t().createElement(n.Z.Item,{name:"command",label:"\u547D\u4EE4",rules:[{required:!0,whitespace:!0}]},t().createElement(M.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u8981\u6267\u884C\u7684\u547D\u4EE4"})),t().createElement(n.Z.Item,{name:"schedule",label:"\u5B9A\u65F6\u89C4\u5219",rules:[{required:!0},{validator:(i,o)=>!o||N().parseExpression(o).hasNext()?Promise.resolve():Promise.reject("Cron\u8868\u8FBE\u5F0F\u683C\u5F0F\u6709\u8BEF")}]},t().createElement(M.Z,{placeholder:"\u79D2(\u53EF\u9009) \u5206 \u65F6 \u5929 \u6708 \u5468"})),t().createElement(n.Z.Item,{name:"labels",label:"\u6807\u7B7E"},t().createElement(V,null))))},ae=d=>{var r=d.ids,u=d.handleCancel,_=d.visible,I=n.Z.useForm(),g=(0,c.Z)(I,1),m=g[0],x=(0,a.useState)(!1),C=(0,c.Z)(x,2),B=C[0],f=C[1],T=function(){var o=(0,R.Z)(s().mark(function h(p){return s().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:m.validateFields().then(function(){var Z=(0,R.Z)(s().mark(function b(U){var l,D,A,z;return s().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return f(!0),l={ids:r,labels:U.labels},L.next=4,v.W[p]("".concat(w.Z.apiPrefix,"crons/labels"),{data:l});case 4:D=L.sent,A=D.code,z=D.data,A===200?S.ZP.success(p==="post"?"\u6DFB\u52A0Labels\u6210\u529F":"\u5220\u9664Labels\u6210\u529F"):S.ZP.error(z),f(!1),u(!0);case 10:case"end":return L.stop()}},b)}));return function(b){return Z.apply(this,arguments)}}()).catch(Z=>{console.log("Validate Failed:",Z)});case 1:case"end":return E.stop()}},h)}));return function(p){return o.apply(this,arguments)}}();(0,a.useEffect)(()=>{m.resetFields()},[r,_]);var i=[t().createElement(F.Z,{onClick:()=>u(!1)},"\u53D6\u6D88"),t().createElement(F.Z,{type:"primary",danger:!0,onClick:()=>T("delete")},"\u5220\u9664"),t().createElement(F.Z,{type:"primary",onClick:()=>T("post")},"\u6DFB\u52A0")];return t().createElement(O.Z,{title:"\u6279\u91CF\u4FEE\u6539\u6807\u7B7E",visible:_,footer:i,centered:!0,maskClosable:!1,forceRender:!0,onCancel:()=>u(!1),confirmLoading:B},t().createElement(n.Z,{form:m,layout:"vertical",name:"form_in_label_modal"},t().createElement(n.Z.Item,{name:"labels",label:"\u6807\u7B7E"},t().createElement(V,null))))}},27131:function(X,y){"use strict";y.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},42237:function(X,y,e){"use strict";e.d(y,{W:function(){return G}});var W=e(30606),F=e(18158),j=e(21300),O=e(21355),$=e(22205),M=e.n($),H=e(50659),S=e(27131),K=e(80377);O.ZP.config({duration:1.5});var R=Date.now(),Q=function(a){if(a.response){var t=a.data?a.data.message||a.message||a.data:a.response.statusText,v=a.response.status;[502,504].includes(v)?K.m.push("/error"):v===401?K.m.location.pathname!=="/login"&&(O.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(S.Z.authKey),K.m.push("/login")):O.ZP.error(t)}else console.log(a.message);throw a},n=(0,H.l7)({timeout:6e4,params:{t:R},errorHandler:Q}),c=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];n.interceptors.request.use((s,a)=>{var t=localStorage.getItem(S.Z.authKey);if(t&&!c.includes(s)){var v={Authorization:"Bearer ".concat(t)};return{url:s,options:(0,F.Z)((0,F.Z)({},a),{},{headers:v})}}return{url:s,options:a}}),n.interceptors.response.use(function(){var s=(0,W.Z)(M().mark(function a(t){var v;return M().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,t.clone();case 2:return v=P.sent,P.abrupt("return",t);case 4:case"end":return P.stop()}},a)}));return function(a){return s.apply(this,arguments)}}());var G=n},60896:function(){},71129:function(){}}]);
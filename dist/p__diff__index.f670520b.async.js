(self.webpackChunk=self.webpackChunk||[]).push([[6702],{59953:function(v,s,e){"use strict";e.d(s,{m:function(){return u.m}});var u=e(504),m=e(94029)},10696:function(v,s,e){"use strict";e.r(s);var u=e(12445),m=e(56902),f=e(84177),P=e(96416),p=e(54032),E=e(46758),h=e(13156),_=e(60296),b=e(46931),D=e(24339),r=e(42273),C=e(80472),d=e(6919),l=e(12924),t=e.n(l),n=e(78159),o=e(55727),g=e(99899),i=e(1858),k=e(83165),X=e.n(k),W=d.Z.Option,w=M=>{var q=M.headerStyle,T=M.isPhone,G=M.theme,F=(0,l.useState)("config.sample.sh"),A=(0,r.Z)(F,2),O=A[0],H=A[1],Q=(0,l.useState)("config.sh"),K=(0,r.Z)(Q,2),c=K[0],V=K[1],j=(0,l.useState)(""),R=(0,r.Z)(j,2),I=R[0],z=R[1],N=(0,l.useState)(""),U=(0,r.Z)(N,2),B=U[0],Y=U[1],$=(0,l.useState)(!0),S=(0,r.Z)($,2),J=S[0],L=S[1],ee=(0,l.useState)([]),Z=(0,r.Z)(ee,2),x=Z[0],te=Z[1],y=(0,l.useRef)(null),ae=()=>{g.W.get("".concat(n.Z.apiPrefix,"configs/").concat(c)).then(a=>{Y(a.data)})},le=()=>{g.W.get("".concat(n.Z.apiPrefix,"configs/").concat(O)).then(a=>{z(a.data)})},ne=()=>{var a=y.current?y.current.getModel().modified.getValue().replace(/\r\n/g,`
`):B;g.W.post("".concat(n.Z.apiPrefix,"configs/save"),{data:{content:a,name:c}}).then(ie=>{D.ZP.success(ie.message)})},re=()=>{L(!0),g.W.get("".concat(n.Z.apiPrefix,"configs/files")).then(a=>{te(a.data)}).finally(()=>L(!1))},se=a=>{H(a)},oe=a=>{V(a)};return(0,l.useEffect)(()=>{re()},[]),(0,l.useEffect)(()=>{le()},[O]),(0,l.useEffect)(()=>{ae()},[c]),t().createElement(o.ZP,{className:"ql-container-wrapper",title:"\u5BF9\u6BD4\u5DE5\u5177",loading:J,header:{style:q},extra:!T&&[t().createElement(_.Z,{key:"1",type:"primary",onClick:ne},"\u4FDD\u5B58")]},t().createElement(m.Z,{gutter:24,className:"diff-switch-file"},t().createElement(P.Z,{span:12},t().createElement(E.Z.Item,{label:"\u6E90\u6587\u4EF6"},t().createElement(d.Z,{value:O,onChange:se},x.map(a=>t().createElement(W,{value:a.value},a.title))))),t().createElement(P.Z,{span:12},t().createElement(E.Z.Item,{label:"\u5F53\u524D\u6587\u4EF6"},t().createElement(d.Z,{value:c,onChange:oe},x.map(a=>t().createElement(W,{value:a.value},a.title)))))),T?t().createElement(X(),{styles:{diffContainer:{overflowX:"auto",minWidth:768},diffRemoved:{overflowX:"auto",maxWidth:300},diffAdded:{overflowX:"auto",maxWidth:300},line:{wordBreak:"break-word"}},oldValue:I,newValue:B,splitView:!0,leftTitle:"config.sh",rightTitle:"config.sample.sh",disableWordDiff:!0}):t().createElement(i.SV,{language:"shell",original:I,modified:B,options:{fontSize:12,lineNumbersMinChars:3,folding:!1,glyphMargin:!1,wordWrap:"on"},theme:G,onMount:a=>{y.current=a}}))};s.default=w},78159:function(v,s){"use strict";s.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},99899:function(v,s,e){"use strict";e.d(s,{W:function(){return d}});var u=e(57113),m=e(82005),f=e(72912),P=e(46931),p=e(24339),E=e(50659),h=e(78159),_=e(59953);p.ZP.config({duration:1.5});var b=Date.now(),D=function(t){if(t.response){var n=t.data?t.data.message||t.message||t.data:t.response.statusText,o=t.response.status;[502,504].includes(o)?_.m.push("/error"):o===401?_.m.location.pathname!=="/login"&&(p.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(h.Z.authKey),_.m.push("/login")):p.ZP.error(n)}else console.log(t.message);throw t},r=(0,E.l7)({timeout:6e4,params:{t:b},errorHandler:D}),C=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];r.interceptors.request.use((l,t)=>{var n=localStorage.getItem(h.Z.authKey);if(n&&!C.includes(l)){var o={Authorization:"Bearer ".concat(n)};return{url:l,options:(0,f.Z)((0,f.Z)({},t),{},{headers:o})}}return{url:l,options:t}}),r.interceptors.response.use(function(){var l=(0,m.Z)((0,u.Z)().mark(function t(n){var o;return(0,u.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.clone();case 2:return o=i.sent,i.abrupt("return",n);case 4:case"end":return i.stop()}},t)}));return function(t){return l.apply(this,arguments)}}());var d=r},71129:function(){}}]);
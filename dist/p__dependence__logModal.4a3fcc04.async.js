(self.webpackChunk=self.webpackChunk||[]).push([[245],{11223:function(v,s,e){"use strict";e.d(s,{Z:function(){return l}});var i=e(42479),u=e(12924),E={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"}}]},name:"loading-3-quarters",theme:"outlined"},d=E,o=e(1719),n=function(c,f){return u.createElement(o.Z,(0,i.Z)((0,i.Z)({},c),{},{ref:f,icon:d}))};n.displayName="Loading3QuartersOutlined";var l=u.forwardRef(n)},93494:function(){},42954:function(v,s,e){"use strict";e.d(s,{m:function(){return i.m}});var i=e(55888),u=e(74927)},79280:function(v,s,e){"use strict";e.r(s);var i=e(21959),u=e(90486),E=e(10913),d=e(66650),o=e(70307),n=e(12924),l=e.n(n),p=e(76225),c=e(6429),f=e(11223),O=e(69731),P=e(31877),M=e(55183),b=e.n(M),g=t=>{var a=t.dependence,m=t.handleCancel,B=t.visible,r=t.socketMessage,X=(0,n.useState)(""),y=(0,o.Z)(X,2),C=y[0],L=y[1],q=(0,n.useState)(!0),R=(0,o.Z)(q,2),A=R[0],T=R[1],H=(0,n.useState)(!1),I=(0,o.Z)(H,2),G=I[0],w=I[1],F=(0,n.useState)(!0),K=(0,o.Z)(F,2),z=K[0],W=K[1],j=(0,n.useState)(!1),U=(0,o.Z)(j,2),S=U[0],x=U[1],N=(0,n.useState)(!1),k=(0,o.Z)(N,2),Y=k[0],Z=k[1],D=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;localStorage.removeItem("logDependence"),m(_)},V=()=>l().createElement(l().Fragment,null,A&&l().createElement(f.Z,{spin:!0}),!A&&l().createElement(O.Z,null),l().createElement("span",{style:{marginLeft:5}},"\u65E5\u5FD7 - ",a&&a.name)," "),$=()=>{W(!0),p.W.get("".concat(c.Z.apiPrefix,"dependencies/").concat(a.id)).then(h=>{if(localStorage.getItem("logDependence")===String(a.id)){var _=(h.data.log||[]).join("");L(_),T(!_.includes("\u7ED3\u675F\u65F6\u95F4")),x(_.includes("\u5220\u9664\u5931\u8D25"))}}).finally(()=>{W(!1)})},J=()=>{Z(!0),p.W.delete("".concat(c.Z.apiPrefix,"dependencies/force"),{data:[a.id]}).then(h=>{D(!0)}).finally(()=>{Z(!1)})},ee=()=>{S?J():D()};return(0,n.useEffect)(()=>{a&&$()},[a]),(0,n.useEffect)(()=>{if(!(!r||!a)){var h=r.type,_=r.message,Q=r.references;h==="installDependence"&&Q.length>0&&Q.includes(a.id)&&(_.includes("\u7ED3\u675F\u65F6\u95F4")&&(T(!1),x(_.includes("\u5220\u9664\u5931\u8D25"))),L("".concat(C).concat(_)))}},[r]),(0,n.useEffect)(()=>{w(document.body.clientWidth<768)},[]),l().createElement(u.Z,{title:V(),visible:B,centered:!0,className:"log-modal",bodyStyle:{overflowY:"auto",maxHeight:"calc(70vh - var(--vh-offset, 0px))",minHeight:"300px"},forceRender:!0,onOk:()=>D(),onCancel:()=>D(),footer:[l().createElement(d.Z,{type:"primary",onClick:ee,loading:Y},S?"\u5F3A\u5236\u5220\u9664":"\u77E5\u9053\u4E86")]},z?l().createElement(P.Z,null):l().createElement("pre",{style:G?{fontFamily:"Source Code Pro",width:375,zoom:.83}:{}},l().createElement(b(),null,C)))};s.default=g},6429:function(v,s){"use strict";s.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},76225:function(v,s,e){"use strict";e.d(s,{W:function(){return b}});var i=e(30606),u=e(18158),E=e(15961),d=e(89744),o=e(22205),n=e.n(o),l=e(50659),p=e(6429),c=e(42954);d.ZP.config({duration:1.5});var f=Date.now(),O=function(t){if(t.response){var a=t.data?t.data.message||t.message||t.data:t.response.statusText,m=t.response.status;[502,504].includes(m)?c.m.push("/error"):m===401?c.m.location.pathname!=="/login"&&(d.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(p.Z.authKey),c.m.push("/login")):d.ZP.error(a)}else console.log(t.message);throw t},P=(0,l.l7)({timeout:6e4,params:{t:f},errorHandler:O}),M=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];P.interceptors.request.use((g,t)=>{var a=localStorage.getItem(p.Z.authKey);if(a&&!M.includes(g)){var m={Authorization:"Bearer ".concat(a)};return{url:g,options:(0,u.Z)((0,u.Z)({},t),{},{headers:m})}}return{url:g,options:t}}),P.interceptors.response.use(function(){var g=(0,i.Z)(n().mark(function t(a){var m;return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.clone();case 2:return m=r.sent,r.abrupt("return",a);case 4:case"end":return r.stop()}},t)}));return function(t){return g.apply(this,arguments)}}());var b=P},21959:function(v,s,e){"use strict";var i=e(12020),u=e.n(i),E=e(93494),d=e.n(E),o=e(10913)},71129:function(){}}]);

(self.webpackChunk=self.webpackChunk||[]).push([[4439],{65345:function(){},19250:function(d,l,e){"use strict";e.d(l,{m:function(){return u.m}});var u=e(17444),s=e(90080)},81692:function(d,l,e){"use strict";e.r(l);var u=e(54598),s=e(189),o=e(65709),m=e(81615),g=e(73742),n=e(84263),P=e(42273),M=e(71786),b=e(30301),E=e(12924),t=e.n(E),D=e(6098),B=e(27077),i=e(32672),a=b.Z.Countdown,_=c=>{var v=c.socketMessage,p=(0,E.useState)(!1),O=(0,P.Z)(p,2),W=O[0],A=O[1],K=(0,E.useState)(""),T=(0,P.Z)(K,2),k=T[0],I=T[1],C=(0,E.useRef)(),L=()=>{W||(A(!0),n.ZP.loading("\u68C0\u67E5\u66F4\u65B0\u4E2D...",0),D.W.put("".concat(B.Z.apiPrefix,"system/update-check")).then(r=>{n.ZP.destroy();var f=r.code,h=r.data;f===200?h.hasNewVersion?x(h):R():n.ZP.error(h)}).catch(r=>{n.ZP.destroy(),console.log(r)}).finally(()=>{A(!1)}))},R=()=>{m.Z.confirm({width:500,title:"\u66F4\u65B0",content:t().createElement(t().Fragment,null,t().createElement("div",null,"\u5DF2\u7ECF\u662F\u6700\u65B0\u7248\u4E86\uFF01"),t().createElement("div",{style:{fontSize:12,fontWeight:400,marginTop:5}},"\u9752\u9F99 ",i.i8," \u662F\u76EE\u524D\u68C0\u6D4B\u5230\u7684\u6700\u65B0\u53EF\u7528\u7248\u672C\u4E86\u3002")),okText:"\u786E\u8BA4",cancelText:"\u5F3A\u5236\u66F4\u65B0",onCancel(){U(),D.W.put("".concat(B.Z.apiPrefix,"system/update")).then(r=>{}).catch(r=>{console.log(r)})}})},x=r=>{var f=r.lastVersion,h=r.lastLog;m.Z.confirm({width:500,title:t().createElement(t().Fragment,null,t().createElement("div",null,"\u66F4\u65B0\u53EF\u7528"),t().createElement("div",{style:{fontSize:12,fontWeight:400,marginTop:5}},"\u65B0\u7248\u672C",f,"\u53EF\u7528\u3002\u4F60\u4F7F\u7528\u7684\u7248\u672C\u4E3A",i.i8,"\u3002")),content:t().createElement("pre",{style:{wordBreak:"break-all",whiteSpace:"pre-wrap",paddingTop:15,fontSize:12,fontWeight:400}},h),okText:"\u66F4\u65B0",cancelText:"\u4EE5\u540E\u518D\u8BF4",onOk(){U(),D.W.put("".concat(B.Z.apiPrefix,"system/update")).then(y=>{}).catch(y=>{console.log(y)})}})},U=()=>{C.current=m.Z.info({width:600,maskClosable:!1,closable:!1,okButtonProps:{disabled:!0},title:"\u66F4\u65B0\u65E5\u5FD7",centered:!0,content:t().createElement("div",{style:{height:"60vh",overflowY:"auto"}},t().createElement("pre",{style:{wordBreak:"break-all",whiteSpace:"pre-wrap",fontSize:12,fontWeight:400}},k))})};return(0,E.useEffect)(()=>{if(!(!C.current||!v)){var r=v.type,f=v.message,h=v.references;if(r==="updateSystemVersion"){var y="".concat(k).concat(f);C.current.update({content:t().createElement("div",{style:{height:"60vh",overflowY:"auto"}},t().createElement("pre",{style:{wordBreak:"break-all",whiteSpace:"pre-wrap",fontSize:12,fontWeight:400}},y),t().createElement("div",{id:"log-identifier",style:{paddingBottom:5}}))}),I(y),document.getElementById("log-identifier")&&document.getElementById("log-identifier").scrollIntoView({behavior:"smooth",block:"nearest"}),f.includes("\u91CD\u542F\u9762\u677F")&&(n.ZP.warning({content:t().createElement("span",null,"\u7CFB\u7EDF\u5C06\u5728",t().createElement(a,{className:"inline-countdown",format:"ss",value:Date.now()+1e3*30}),"\u79D2\u540E\u81EA\u52A8\u5237\u65B0"),duration:30}),setTimeout(()=>{window.location.reload()},3e4))}}},[v]),t().createElement(t().Fragment,null,t().createElement(s.Z,{type:"primary",onClick:L},"\u68C0\u67E5\u66F4\u65B0"))};l.default=_},27077:function(d,l){"use strict";l.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},6098:function(d,l,e){"use strict";e.d(l,{W:function(){return B}});var u=e(57113),s=e(82005),o=e(72912),m=e(73742),g=e(84263),n=e(50659),P=e(27077),M=e(19250);g.ZP.config({duration:1.5});var b=Date.now(),E=function(a){if(a.response){var _=a.data?a.data.message||a.message||a.data:a.response.statusText,c=a.response.status;[502,504].includes(c)?M.m.push("/error"):c===401?M.m.location.pathname!=="/login"&&(g.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(P.Z.authKey),M.m.push("/login")):g.ZP.error(_)}else console.log(a.message);throw a},t=(0,n.l7)({timeout:6e4,params:{t:b},errorHandler:E}),D=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];t.interceptors.request.use((i,a)=>{var _=localStorage.getItem(P.Z.authKey);if(_&&!D.includes(i)){var c={Authorization:"Bearer ".concat(_)};return{url:i,options:(0,o.Z)((0,o.Z)({},a),{},{headers:c})}}return{url:i,options:a}}),t.interceptors.response.use(function(){var i=(0,s.Z)((0,u.Z)().mark(function a(_){var c;return(0,u.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,_.clone();case 2:return c=p.sent,p.abrupt("return",_);case 4:case"end":return p.stop()}},a)}));return function(a){return i.apply(this,arguments)}}());var B=t},32672:function(d,l,e){"use strict";e.d(l,{i8:function(){return u},N$:function(){return s}});var u="2.14.1",s="https://t.me/jiao_long/326",o=`2.14.1 \u7248\u672C\u8BF4\u660E
1. \u4FEE\u590D\u5B9A\u65F6\u4EFB\u52A1\u641C\u7D22
2. \u4FEE\u590D\u89C6\u56FE\u5207\u6362\u9ED8\u8BA4\u9875\u7801
3. \u589E\u52A0\u7FA4\u8F89chat\u901A\u77E5\u65B9\u5F0F\uFF0C\u611F\u8C22 https://github.com/Appoip
`},10208:function(d,l,e){"use strict";e.d(l,{jD:function(){return s},fk:function(){return m}});var u=e(33400),s=function(){return(0,u.Z)()&&window.document.documentElement},o,m=function(){if(!s())return!1;if(o!==void 0)return o;var n=document.createElement("div");return n.style.display="flex",n.style.flexDirection="column",n.style.rowGap="1px",n.appendChild(document.createElement("div")),n.appendChild(document.createElement("div")),document.body.appendChild(n),o=n.scrollHeight===1,document.body.removeChild(n),o}},65709:function(d,l,e){"use strict";var u=e(27928),s=e.n(u),o=e(65345),m=e.n(o),g=e(54598)},24669:function(d){var l=Array.isArray;d.exports=l},71129:function(){}}]);

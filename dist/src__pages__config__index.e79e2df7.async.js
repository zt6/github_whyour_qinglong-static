(self.webpackChunk=self.webpackChunk||[]).push([[5825],{15258:function(M,_,e){"use strict";e.d(_,{Z:function(){return E}});var i=e(79105),t=e(63313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},p=o,d=e(17980),l=function(s,a){return t.createElement(d.Z,(0,i.Z)((0,i.Z)({},s),{},{ref:a,icon:p}))};l.displayName="SearchOutlined";var E=t.forwardRef(l)},71867:function(M,_,e){"use strict";e.r(_);var i=e(46686),t=e.n(i),o=e(63313),p=e.n(o),d=e(80743),l=e(7691),E=e(74309),r=e(98505),s=e(94645),a=e(51970),n=e(30555),m=e(53883),u=e(78722),h=e(11527),C=function(){var c=(0,u.bx)(),f=c.headerStyle,v=c.isPhone,D=c.theme,O=(0,o.useState)(""),U=t()(O,2),y=U[0],A=U[1],H=(0,o.useState)(!0),I=t()(H,2),Z=I[0],R=I[1],F=(0,o.useState)("config.sh"),L=t()(F,2),G=L[0],j=L[1],Q=(0,o.useState)("config.sh"),K=t()(Q,2),B=K[0],X=K[1],q=(0,o.useState)([]),N=t()(q,2),V=N[0],z=N[1],T=(0,o.useRef)(null),$=(0,o.useState)(!1),x=t()($,2),Y=x[0],W=x[1],w=function(P){a.W.get("".concat(r.Z.apiPrefix,"configs/").concat(P)).then(function(b){A(b.data)})},J=function(){R(!0),a.W.get("".concat(r.Z.apiPrefix,"configs/files")).then(function(P){z(P.data)}).finally(function(){return R(!1)})},ee=function(){W(!0);var P=T.current?T.current.getValue().replace(/\r\n/g,`
`):y;a.W.post("".concat(r.Z.apiPrefix,"configs/save"),{data:{content:P,name:B}}).then(function(b){d.ZP.success(b.message),W(!1)})},te=function(P,b){X(P),j(b.value),w(b.value)};return(0,o.useEffect)(function(){J(),w("config.sh")},[]),(0,h.jsx)(s.ZP,{className:"ql-container-wrapper config-wrapper",title:G,loading:Z,extra:[(0,h.jsx)(l.Z,{className:"config-select",value:B,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:V,defaultValue:"config.sh",onSelect:te},"value"),(0,h.jsx)(E.Z,{loading:Y,type:"primary",onClick:ee,children:"\u4FDD\u5B58"},"1")],header:{style:f},children:v?(0,h.jsx)(m.fk,{value:y,options:{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:"shell"},onBeforeChange:function(P,b,k){A(k)},onChange:function(P,b,k){}}):(0,h.jsx)(n.ZP,{defaultLanguage:"shell",value:y,theme:D,options:{fontSize:12,lineNumbersMinChars:3,folding:!1,glyphMargin:!1},onMount:function(P){T.current=P}})})};_.default=C},98505:function(M,_){"use strict";_.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},51970:function(M,_,e){"use strict";e.d(_,{W:function(){return C}});var i=e(35290),t=e.n(i),o=e(411),p=e.n(o),d=e(30279),l=e.n(d),E=e(50659),r=e(80743),s=e(98505),a=e(78722);r.ZP.config({duration:1.5});var n=Date.now(),m=function(c){if(c.response){var f=c.data?c.data.message||c.message||c.data:c.response.statusText,v=c.response.status;[502,504].includes(v)?a.m8.push("/error"):v===401?a.m8.location.pathname!=="/login"&&(r.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(s.Z.authKey),a.m8.push("/login")):r.ZP.error(f)}else console.log(c.message);throw c},u=(0,E.l7)({timeout:6e4,params:{t:n},errorHandler:m}),h=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];u.interceptors.request.use(function(g,c){var f=localStorage.getItem(s.Z.authKey);if(f&&!h.includes(g)){var v={Authorization:"Bearer ".concat(f)};return{url:g,options:l()(l()({},c),{},{headers:v})}}return{url:g,options:c}}),u.interceptors.response.use(function(){var g=p()(t()().mark(function c(f){var v;return t()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,f.clone();case 2:return v=O.sent,O.abrupt("return",f);case 4:case"end":return O.stop()}},c)}));return function(c){return g.apply(this,arguments)}}());var C=u},3337:function(M,_,e){"use strict";var i=e(35931),t=e(63313),o=e.n(t),p=e(33552);_.Z=function(){var d=t.useState(!1),l=(0,i.Z)(d,2),E=l[0],r=l[1];return t.useEffect(function(){r((0,p.fk)())},[]),E}},67318:function(M,_,e){"use strict";e.d(_,{c4:function(){return o}});var i=e(47220),t=e(96600),o=["xxl","xl","lg","md","sm","xs"],p={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},d=new Map,l=-1,E={},r={matchHandlers:{},dispatch:function(a){return E=a,d.forEach(function(n){return n(E)}),d.size>=1},subscribe:function(a){return d.size||this.register(),l+=1,d.set(l,a),a(E),l},unsubscribe:function(a){d.delete(a),d.size||this.unregister()},unregister:function(){var a=this;Object.keys(p).forEach(function(n){var m=p[n],u=a.matchHandlers[m];u==null||u.mql.removeListener(u==null?void 0:u.listener)}),d.clear()},register:function(){var a=this;Object.keys(p).forEach(function(n){var m=p[n],u=function(g){var c=g.matches;a.dispatch((0,t.Z)((0,t.Z)({},E),(0,i.Z)({},n,c)))},h=window.matchMedia(m);h.addListener(u),a.matchHandlers[m]={mql:h,listener:u},u(h)})}};_.ZP=r},51591:function(M,_,e){"use strict";e.d(_,{F:function(){return E},Z:function(){return l}});var i=e(47220),t=e(84875),o=e.n(t),p=e(15011),d=(0,p.b)("warning","error","");function l(r,s,a){var n;return o()((n={},(0,i.Z)(n,"".concat(r,"-status-success"),s==="success"),(0,i.Z)(n,"".concat(r,"-status-warning"),s==="warning"),(0,i.Z)(n,"".concat(r,"-status-error"),s==="error"),(0,i.Z)(n,"".concat(r,"-status-validating"),s==="validating"),(0,i.Z)(n,"".concat(r,"-has-feedback"),a),n))}var E=function(s,a){return a||s}},33552:function(M,_,e){"use strict";e.d(_,{fk:function(){return p},jD:function(){return t}});var i=e(45235),t=function(){return(0,i.Z)()&&window.document.documentElement},o,p=function(){if(!t())return!1;if(o!==void 0)return o;var l=document.createElement("div");return l.style.display="flex",l.style.flexDirection="column",l.style.rowGap="1px",l.appendChild(document.createElement("div")),l.appendChild(document.createElement("div")),document.body.appendChild(l),o=l.scrollHeight===1,document.body.removeChild(l),o}},15578:function(M,_,e){"use strict";var i=e(96600),t=e(22899),o=e(63313),p=e.n(o),d=function(r,s){var a={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&s.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,n=Object.getOwnPropertySymbols(r);m<n.length;m++)s.indexOf(n[m])<0&&Object.prototype.propertyIsEnumerable.call(r,n[m])&&(a[n[m]]=r[n[m]]);return a},l={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},E=o.forwardRef(function(r,s){var a=function(f){var v=f.keyCode;v===t.Z.ENTER&&f.preventDefault()},n=function(f){var v=f.keyCode,D=r.onClick;v===t.Z.ENTER&&D&&D()},m=r.style,u=r.noStyle,h=r.disabled,C=d(r,["style","noStyle","disabled"]),g={};return u||(g=(0,i.Z)({},l)),h&&(g.pointerEvents="none"),g=(0,i.Z)((0,i.Z)({},g),m),o.createElement("div",(0,i.Z)({role:"button",tabIndex:0,ref:s},C,{onKeyDown:a,onKeyUp:n,style:g}))});_.Z=E},22899:function(M,_){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var o=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||o>=e.F1&&o<=e.F12)return!1;switch(o){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=e.ZERO&&t<=e.NINE||t>=e.NUM_ZERO&&t<=e.NUM_MULTIPLY||t>=e.A&&t<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};_.Z=e},44549:function(M,_,e){"use strict";e.d(_,{Z:function(){return r}});var i=e(79105),t=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,o=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,p="".concat(t," ").concat(o).split(/[\s\n]+/),d="aria-",l="data-";function E(s,a){return s.indexOf(a)===0}function r(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;a===!1?n={aria:!0,data:!0,attr:!0}:a===!0?n={aria:!0}:n=(0,i.Z)({},a);var m={};return Object.keys(s).forEach(function(u){(n.aria&&(u==="role"||E(u,d))||n.data&&E(u,l)||n.attr&&p.includes(u))&&(m[u]=s[u])}),m}},71129:function(){}}]);

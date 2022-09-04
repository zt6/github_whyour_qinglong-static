(self.webpackChunk=self.webpackChunk||[]).push([[5121],{74532:function(P,i,e){"use strict";e.d(i,{Z:function(){return _}});var s=e(81602),n=e(12924),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},g=u,c=e(1719),l=function(o,r){return n.createElement(c.Z,(0,s.Z)((0,s.Z)({},o),{},{ref:r,icon:g}))};l.displayName="SearchOutlined";var _=n.forwardRef(l)},19250:function(P,i,e){"use strict";e.d(i,{m:function(){return s.m}});var s=e(17444),n=e(90080)},80697:function(P,i,e){"use strict";e.r(i);var s=e(54598),n=e(189),u=e(8647),g=e(21609),c=e(73742),l=e(84263),_=e(42273),t=e(12924),o=e.n(t),r=e(27077),a=e(6582),E=e(6098),d=e(1858),f=e(68176),m=p=>{var v=p.headerStyle,S=p.isPhone,h=p.theme,D=(0,t.useState)(""),T=(0,_.Z)(D,2),C=T[0],b=T[1],Z=(0,t.useState)(!0),U=(0,_.Z)(Z,2),w=U[0],A=U[1],k=(0,t.useState)("config.sh"),I=(0,_.Z)(k,2),F=I[0],H=I[1],G=(0,t.useState)("config.sh"),R=(0,_.Z)(G,2),L=R[0],Q=R[1],X=(0,t.useState)([]),K=(0,_.Z)(X,2),j=K[0],V=K[1],y=(0,t.useRef)(null),z=(0,t.useState)(!1),N=(0,_.Z)(z,2),q=N[0],B=N[1],W=M=>{E.W.get("".concat(r.Z.apiPrefix,"configs/").concat(M)).then(O=>{b(O.data)})},Y=()=>{A(!0),E.W.get("".concat(r.Z.apiPrefix,"configs/files")).then(M=>{V(M.data)}).finally(()=>A(!1))},$=()=>{B(!0);var M=y.current?y.current.getValue().replace(/\r\n/g,`
`):C;E.W.post("".concat(r.Z.apiPrefix,"configs/save"),{data:{content:M,name:L}}).then(O=>{l.ZP.success(O.message),B(!1)})},J=(M,O)=>{Q(M),H(O.value),W(O.value)};return(0,t.useEffect)(()=>{Y(),W("config.sh")},[]),o().createElement(a.ZP,{className:"ql-container-wrapper config-wrapper",title:F,loading:w,extra:[o().createElement(g.Z,{className:"config-select",value:L,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:j,key:"value",defaultValue:"config.sh",onSelect:J}),o().createElement(n.Z,{key:"1",loading:q,type:"primary",onClick:$},"\u4FDD\u5B58")],header:{style:v}},S?o().createElement(f.fk,{value:C,options:{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:"shell"},onBeforeChange:(M,O,x)=>{b(x)},onChange:(M,O,x)=>{}}):o().createElement(d.ZP,{defaultLanguage:"shell",value:C,theme:h,options:{fontSize:12,lineNumbersMinChars:3,folding:!1,glyphMargin:!1},onMount:M=>{y.current=M}}))};i.default=m},27077:function(P,i){"use strict";i.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},6098:function(P,i,e){"use strict";e.d(i,{W:function(){return d}});var s=e(57113),n=e(82005),u=e(72912),g=e(73742),c=e(84263),l=e(50659),_=e(27077),t=e(19250);c.ZP.config({duration:1.5});var o=Date.now(),r=function(m){if(m.response){var p=m.data?m.data.message||m.message||m.data:m.response.statusText,v=m.response.status;[502,504].includes(v)?t.m.push("/error"):v===401?t.m.location.pathname!=="/login"&&(c.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(_.Z.authKey),t.m.push("/login")):c.ZP.error(p)}else console.log(m.message);throw m},a=(0,l.l7)({timeout:6e4,params:{t:o},errorHandler:r}),E=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];a.interceptors.request.use((f,m)=>{var p=localStorage.getItem(_.Z.authKey);if(p&&!E.includes(f)){var v={Authorization:"Bearer ".concat(p)};return{url:f,options:(0,u.Z)((0,u.Z)({},m),{},{headers:v})}}return{url:f,options:m}}),a.interceptors.response.use(function(){var f=(0,n.Z)((0,s.Z)().mark(function m(p){var v;return(0,s.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,p.clone();case 2:return v=h.sent,h.abrupt("return",p);case 4:case"end":return h.stop()}},m)}));return function(m){return f.apply(this,arguments)}}());var d=a},23488:function(P,i,e){"use strict";var s=e(73080),n=e(12924),u=e.n(n),g=e(10208);i.Z=function(){var c=n.useState(!1),l=(0,s.Z)(c,2),_=l[0],t=l[1];return n.useEffect(function(){t((0,g.fk)())},[]),_}},57532:function(P,i,e){"use strict";e.d(i,{c4:function(){return u}});var s=e(86545),n=e(74286),u=["xxl","xl","lg","md","sm","xs"],g={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,l=-1,_={},t={matchHandlers:{},dispatch:function(r){return _=r,c.forEach(function(a){return a(_)}),c.size>=1},subscribe:function(r){return c.size||this.register(),l+=1,c.set(l,r),r(_),l},unsubscribe:function(r){c.delete(r),c.size||this.unregister()},unregister:function(){var r=this;Object.keys(g).forEach(function(a){var E=g[a],d=r.matchHandlers[E];d==null||d.mql.removeListener(d==null?void 0:d.listener)}),c.clear()},register:function(){var r=this;Object.keys(g).forEach(function(a){var E=g[a],d=function(p){var v=p.matches;r.dispatch((0,n.Z)((0,n.Z)({},_),(0,s.Z)({},a,v)))},f=window.matchMedia(E);f.addListener(d),r.matchHandlers[E]={mql:f,listener:d},d(f)})}};i.ZP=t},23229:function(P,i,e){"use strict";e.d(i,{Z:function(){return l},F:function(){return _}});var s=e(86545),n=e(19803),u=e.n(n),g=e(17243),c=(0,g.b)("warning","error","");function l(t,o,r){var a;return u()((a={},(0,s.Z)(a,"".concat(t,"-status-success"),o==="success"),(0,s.Z)(a,"".concat(t,"-status-warning"),o==="warning"),(0,s.Z)(a,"".concat(t,"-status-error"),o==="error"),(0,s.Z)(a,"".concat(t,"-status-validating"),o==="validating"),(0,s.Z)(a,"".concat(t,"-has-feedback"),r),a))}var _=function(o,r){return r||o}},10208:function(P,i,e){"use strict";e.d(i,{jD:function(){return n},fk:function(){return g}});var s=e(33400),n=function(){return(0,s.Z)()&&window.document.documentElement},u,g=function(){if(!n())return!1;if(u!==void 0)return u;var l=document.createElement("div");return l.style.display="flex",l.style.flexDirection="column",l.style.rowGap="1px",l.appendChild(document.createElement("div")),l.appendChild(document.createElement("div")),document.body.appendChild(l),u=l.scrollHeight===1,document.body.removeChild(l),u}},25886:function(P,i,e){"use strict";var s=e(74286),n=e(98593),u=e(12924),g=e.n(u),c=function(t,o){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&o.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,a=Object.getOwnPropertySymbols(t);E<a.length;E++)o.indexOf(a[E])<0&&Object.prototype.propertyIsEnumerable.call(t,a[E])&&(r[a[E]]=t[a[E]]);return r},l={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},_=u.forwardRef(function(t,o){var r=function(S){var h=S.keyCode;h===n.Z.ENTER&&S.preventDefault()},a=function(S){var h=S.keyCode,D=t.onClick;h===n.Z.ENTER&&D&&D()},E=t.style,d=t.noStyle,f=t.disabled,m=c(t,["style","noStyle","disabled"]),p={};return d||(p=(0,s.Z)({},l)),f&&(p.pointerEvents="none"),p=(0,s.Z)((0,s.Z)({},p),E),u.createElement("div",(0,s.Z)({role:"button",tabIndex:0,ref:o},m,{onKeyDown:r,onKeyUp:a,style:p}))});i.Z=_},98593:function(P,i){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var u=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||u>=e.F1&&u<=e.F12)return!1;switch(u){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=e.ZERO&&n<=e.NINE||n>=e.NUM_ZERO&&n<=e.NUM_MULTIPLY||n>=e.A&&n<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};i.Z=e},73835:function(P,i,e){"use strict";e.d(i,{Z:function(){return t}});var s=e(81602),n=`accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`,u=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,g="".concat(n," ").concat(u).split(/[\s\n]+/),c="aria-",l="data-";function _(o,r){return o.indexOf(r)===0}function t(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a;r===!1?a={aria:!0,data:!0,attr:!0}:r===!0?a={aria:!0}:a=(0,s.Z)({},r);var E={};return Object.keys(o).forEach(function(d){(a.aria&&(d==="role"||_(d,c))||a.data&&_(d,l)||a.attr&&g.includes(d))&&(E[d]=o[d])}),E}},71129:function(){}}]);

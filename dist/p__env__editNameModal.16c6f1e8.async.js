(self.webpackChunk=self.webpackChunk||[]).push([[3182],{64795:function(G,m,e){"use strict";e.d(m,{Z:function(){return R}});var p=e(19377),o=e(12924),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},C=l,D=e(18932),_=function(u,B){return o.createElement(D.Z,(0,p.Z)((0,p.Z)({},u),{},{ref:B,icon:C}))};_.displayName="EyeOutlined";var R=o.forwardRef(_)},89416:function(G,m,e){"use strict";e.d(m,{m:function(){return p.m}});var p=e(88910),o=e(52579)},54129:function(G,m,e){"use strict";e.r(m);var p=e(50968),o=e(99503),l=e(76489),C=e(54864),D=e(12058),_=e(57438),R=e(30606),W=e(89062),u=e(5097),B=e(70307),X=e(22205),A=e.n(X),L=e(12924),b=e.n(L),h=e(37513),s=e(24388),E=v=>{var Q=v.ids,P=v.handleCancel,ne=v.visible,ae=u.Z.useForm(),ie=(0,B.Z)(ae,1),j=ie[0],se=(0,L.useState)(!1),H=(0,B.Z)(se,2),ue=H[0],re=H[1],de=function(){var O=(0,R.Z)(A().mark(function le(I){var $,t,a;return A().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return re(!0),n.next=3,h.W.put("".concat(s.Z.apiPrefix,"envs/name"),{data:{ids:Q,name:I.name}});case 3:$=n.sent,t=$.code,a=$.data,t===200?_.ZP.success("\u66F4\u65B0\u73AF\u5883\u53D8\u91CF\u540D\u79F0\u6210\u529F"):_.ZP.error(a),re(!1),P();case 9:case"end":return n.stop()}},le)}));return function(I){return O.apply(this,arguments)}}();return(0,L.useEffect)(()=>{j.resetFields()},[Q,ne]),b().createElement(o.Z,{title:"\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u540D\u79F0",visible:ne,forceRender:!0,onOk:()=>{j.validateFields().then(O=>{de(O)}).catch(O=>{console.log("Validate Failed:",O)})},onCancel:()=>P(),confirmLoading:ue},b().createElement(u.Z,{form:j,layout:"vertical",name:"edit_name_modal"},b().createElement(u.Z.Item,{name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u540D\u79F0"}]},b().createElement(C.Z,{placeholder:"\u8BF7\u8F93\u5165\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u540D\u79F0"}))))};m.default=E},24388:function(G,m){"use strict";m.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},37513:function(G,m,e){"use strict";e.d(m,{W:function(){return b}});var p=e(30606),o=e(18158),l=e(12058),C=e(57438),D=e(22205),_=e.n(D),R=e(50659),W=e(24388),u=e(89416);C.ZP.config({duration:1.5});var B=Date.now(),X=function(s){if(s.response){var E=s.data?s.data.message||s.data:s.response.statusText,v=s.response.status;[502,504].includes(v)?u.m.push("/error"):v===401?u.m.location.pathname!=="/login"&&(C.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(W.Z.authKey),u.m.push("/login")):C.ZP.error(E)}else console.log(s.message);throw s},A=(0,R.l7)({timeout:6e4,params:{t:B},errorHandler:X}),L=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];A.interceptors.request.use((h,s)=>{var E=localStorage.getItem(W.Z.authKey);if(E&&!L.includes(h)){var v={Authorization:"Bearer ".concat(E)};return{url:h,options:(0,o.Z)((0,o.Z)({},s),{},{headers:v})}}return{url:h,options:s}}),A.interceptors.response.use(function(){var h=(0,p.Z)(_().mark(function s(E){var v;return _().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,E.clone();case 2:return v=P.sent,P.abrupt("return",E);case 4:case"end":return P.stop()}},s)}));return function(s){return h.apply(this,arguments)}}());var b=A},54864:function(G,m,e){"use strict";e.d(m,{Z:function(){return $}});var p=e(87274),o=e(11617),l=e(12924),C=e(19803),D=e.n(C),_=e(63683),R=function(a){var r,n=(0,l.useContext)(_.E_),i=n.getPrefixCls,q=n.direction,V=a.prefixCls,z=a.className,N=z===void 0?"":z,d=i("input-group",V),y=D()(d,(r={},(0,o.Z)(r,"".concat(d,"-lg"),a.size==="large"),(0,o.Z)(r,"".concat(d,"-sm"),a.size==="small"),(0,o.Z)(r,"".concat(d,"-compact"),a.compact),(0,o.Z)(r,"".concat(d,"-rtl"),q==="rtl"),r),N);return l.createElement("span",{className:y,style:a.style,onMouseEnter:a.onMouseEnter,onMouseLeave:a.onMouseLeave,onFocus:a.onFocus,onBlur:a.onBlur},a.children)},W=R,u=e(26718),B=e(67915),X=e(28734),A=e(82189),L=e(84616),b=e(52731),h=function(t,a){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&a.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r},s=l.forwardRef(function(t,a){var r,n=t.prefixCls,i=t.inputPrefixCls,q=t.className,V=t.size,z=t.suffix,N=t.enterButton,d=N===void 0?!1:N,y=t.addonAfter,f=t.loading,w=t.disabled,M=t.onSearch,k=t.onChange,Z=h(t,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange"]),T=l.useContext(_.E_),F=T.getPrefixCls,Y=T.direction,x=l.useContext(L.Z),K=V||x,J=l.useRef(null),oe=function(c){c&&c.target&&c.type==="click"&&M&&M(c.target.value,c),k&&k(c)},_e=function(c){var g;document.activeElement===((g=J.current)===null||g===void 0?void 0:g.input)&&c.preventDefault()},ce=function(c){var g,U;M&&M((U=(g=J.current)===null||g===void 0?void 0:g.input)===null||U===void 0?void 0:U.value,c)},ee=F("input-search",n),ge=F("input",i),pe=typeof d=="boolean"?l.createElement(X.Z,null):null,ve="".concat(ee,"-button"),te,S=d||{},fe=S.type&&S.type.__ANT_BUTTON===!0;fe||S.type==="button"?te=(0,b.Tm)(S,(0,u.Z)({onMouseDown:_e,onClick:function(c){var g,U;(U=(g=S==null?void 0:S.props)===null||g===void 0?void 0:g.onClick)===null||U===void 0||U.call(g,c),ce(c)},key:"enterButton"},fe?{className:ve,size:K}:{})):te=l.createElement(A.Z,{className:ve,type:d?"primary":void 0,size:K,disabled:w,key:"enterButton",onMouseDown:_e,onClick:ce,loading:f,icon:pe},d),y&&(te=[te,(0,b.Tm)(y,{key:"addonAfter"})]);var Ee=D()(ee,(r={},(0,o.Z)(r,"".concat(ee,"-rtl"),Y==="rtl"),(0,o.Z)(r,"".concat(ee,"-").concat(K),!!K),(0,o.Z)(r,"".concat(ee,"-with-button"),!!d),r),q);return l.createElement(p.ZP,(0,u.Z)({ref:(0,B.sQ)(J,a),onPressEnter:ce},Z,{size:K,prefixCls:ge,addonAfter:te,suffix:z,onChange:oe,className:Ee,disabled:w}))});s.displayName="Search";var E=s,v=e(86983),Q=e(87564),P=e(65215),ne=e(64795),ae=e(19377),ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},j=ie,se=e(18932),H=function(a,r){return l.createElement(se.Z,(0,ae.Z)((0,ae.Z)({},a),{},{ref:r,icon:j}))};H.displayName="EyeInvisibleOutlined";var ue=l.forwardRef(H),re=function(t,a){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&a.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r},de={click:"onClick",hover:"onMouseOver"},O=l.forwardRef(function(t,a){var r=(0,l.useState)(!1),n=(0,Q.Z)(r,2),i=n[0],q=n[1],V=function(){var y=t.disabled;y||q(!i)},z=function(y){var f,w=t.action,M=t.iconRender,k=M===void 0?function(){return null}:M,Z=de[w]||"",T=k(i),F=(f={},(0,o.Z)(f,Z,V),(0,o.Z)(f,"className","".concat(y,"-icon")),(0,o.Z)(f,"key","passwordIcon"),(0,o.Z)(f,"onMouseDown",function(x){x.preventDefault()}),(0,o.Z)(f,"onMouseUp",function(x){x.preventDefault()}),f);return l.cloneElement(l.isValidElement(T)?T:l.createElement("span",null,T),F)},N=function(y){var f=y.getPrefixCls,w=t.className,M=t.prefixCls,k=t.inputPrefixCls,Z=t.size,T=t.visibilityToggle,F=re(t,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),Y=f("input",k),x=f("input-password",M),K=T&&z(x),J=D()(x,w,(0,o.Z)({},"".concat(x,"-").concat(Z),!!Z)),oe=(0,u.Z)((0,u.Z)({},(0,P.Z)(F,["suffix","iconRender"])),{type:i?"text":"password",className:J,prefixCls:Y,suffix:K});return Z&&(oe.size=Z),l.createElement(p.ZP,(0,u.Z)({ref:a},oe))};return l.createElement(_.C,null,N)});O.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(a){return a?l.createElement(ne.Z,null):l.createElement(ue,null)}},O.displayName="Password";var le=O,I=p.ZP;I.Group=W,I.Search=E,I.TextArea=v.Z,I.Password=le;var $=I},64121:function(){}}]);

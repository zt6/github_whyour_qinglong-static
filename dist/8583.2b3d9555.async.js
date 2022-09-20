(self.webpackChunk=self.webpackChunk||[]).push([[8583],{37615:function(Q,B,u){"use strict";u.r(B);var S=u(35290),x=u.n(S),R=u(30279),U=u.n(R),w=u(411),j=u.n(w),q=u(46686),h=u.n(q),_=u(63313),T=u.n(_),O=u(77073),n=u(78455),D=u(80743),o=u(2991),K=u(69436),v=u(97325),l=u(39958),g=u(51970),E=u(98505),V=u(38041),b=u.n(V),e=u(11527),M=O.Z.Option,z=/[^\/\:]+\/[^\/]+(?=\.git)/,N=/[^\/\:]+\/[^\/]+$/,oe=function(W){var s=W.subscription,$=W.handleCancel,I=W.visible,ie=n.Z.useForm(),se=h()(ie,1),d=se[0],_e=(0,_.useState)(!1),Y=h()(_e,2),de=Y[0],L=Y[1],pe=(0,_.useState)("public-repo"),J=h()(pe,2),A=J[0],G=J[1],ce=(0,_.useState)("crontab"),ee=h()(ce,2),H=ee[0],ue=ee[1],me=(0,_.useState)("ssh-key"),ae=h()(me,2),he=ae[0],le=ae[1],ge=function(){var p=j()(x()().mark(function a(r){var t,c,m,C,F;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return L(!0),t=s?"put":"post",c=U()({},r),s&&(c.id=s.id),i.prev=4,i.next=7,g.W[t]("".concat(E.Z.apiPrefix,"subscriptions"),{data:c});case 7:m=i.sent,C=m.code,F=m.data,C===200?(D.ZP.success(s?"\u66F4\u65B0\u8BA2\u9605\u6210\u529F":"\u65B0\u5EFA\u8BA2\u9605\u6210\u529F"),$(F)):D.ZP.error(F),L(!1),i.next=17;break;case 14:i.prev=14,i.t0=i.catch(4),L(!1);case 17:case"end":return i.stop()}},a,null,[[4,14]])}));return function(r){return p.apply(this,arguments)}}(),ve=function(a){G(a.target.value);var r=d.getFieldValue("url"),t=d.getFieldValue("branch");d.setFieldsValue({alias:k(r,t,a.target.value)}),r&&d.validateFields(["url"])},Ee=function(a){ue(a.target.value),d.setFieldsValue({schedule:""})},be=function(a){le(a.target.value)},te=function(a){var r=d.getFieldValue("branch");d.setFieldsValue({alias:k(a.target.value,r)})},re=function(a){var r=d.getFieldValue("url");d.setFieldsValue({alias:k(r,a.target.value)})},k=function(a,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:A,c="",m=t==="file"?N:z;return m.test(a)&&(c=a.match(m)[0].replaceAll("/","_").replaceAll(".","_")),r&&(c=c+"_"+r),c},Fe=function(a){var r=a.value,t=a.onChange,c=(0,_.useState)("days"),m=h()(c,2),C=m[0],F=m[1],Z=(0,_.useState)(),i=h()(Z,2),f=i[0],y=i[1],X=function(P){F(P),f&&f>0&&(t==null||t({type:P,value:f}))},Pe=function(P){y(P),P?t==null||t({type:C,value:P}):t==null||t(null)};return(0,_.useEffect)(function(){r&&(F(r.type),y(r.value))},[r]),(0,e.jsxs)(o.Z.Group,{compact:!0,children:[(0,e.jsx)(K.Z,{addonBefore:"\u6BCF",precision:0,min:1,value:f,style:{width:"calc(100% - 58px)"},onChange:Pe}),(0,e.jsxs)(O.Z,{value:C,onChange:X,children:[(0,e.jsx)(M,{value:"days",children:"\u5929"}),(0,e.jsx)(M,{value:"hours",children:"\u65F6"}),(0,e.jsx)(M,{value:"minutes",children:"\u5206"}),(0,e.jsx)(M,{value:"seconds",children:"\u79D2"})]})]})},Ce=function(a){var r=a.value,t=a.onChange,c=a.type;return c==="ssh-key"?(0,e.jsx)(n.Z.Item,{name:["pull_option","private_key"],label:"\u79C1\u94A5",rules:[{required:!0}],children:(0,e.jsx)(o.Z.TextArea,{rows:4,autoSize:{minRows:1,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u79C1\u94A5"})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.Z.Item,{name:["pull_option","username"],label:"\u7528\u6237\u540D",rules:[{required:!0}],children:(0,e.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165\u8BA4\u8BC1\u7528\u6237\u540D"})}),(0,e.jsx)(n.Z.Item,{name:["pull_option","password"],tooltip:"Github\u5DF2\u4E0D\u652F\u6301\u5BC6\u7801\u8BA4\u8BC1\uFF0C\u8BF7\u4F7F\u7528Token\u65B9\u5F0F",label:"\u5BC6\u7801/Token",rules:[{required:!0}],children:(0,e.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801\u6216\u8005Token"})})]})},ne=(0,_.useCallback)(function(p){var a=p.clipboardData.getData("text");if(!s&&a.includes("ql ")){var r=a.split(" ").map(function(X){return X.trim().replace(/\"/g,"").replace(/\'/,"")}),t=h()(r,8),c=t[1],m=t[2],C=t[3],F=t[4],Z=t[5],i=t[6],f=t[7],y=c==="raw"?"file":m.startsWith("http")?"public-repo":"private-repo";d.setFieldsValue({type:y,url:m,whitelist:C,blacklist:F,dependences:Z,branch:i,extensions:f,alias:k(m,i)}),G(y)}},[]);(0,_.useEffect)(function(){I?window.addEventListener("paste",ne):window.removeEventListener("paste",ne)},[I]),(0,_.useEffect)(function(){d.setFieldsValue(s||{}),G(s&&s.type||"public-repo"),ue(s&&s.schedule_type||"crontab"),le(s&&s.pull_type||"ssh-key"),s||d.resetFields()},[s,I]);var Be=navigator.userAgent.includes("Firefox"),De=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),fe=navigator.userAgent.includes("QQBrowser");return(0,e.jsx)(v.Z,{title:s?"\u7F16\u8F91\u8BA2\u9605":(0,e.jsxs)("span",{children:["\u65B0\u5EFA\u8BA2\u9605",(0,e.jsx)("small",{style:{color:"#999",fontWeight:400,fontSize:Be?9:12,marginLeft:2,zoom:De?.66:.8,letterSpacing:fe?-2:0},children:"\u652F\u6301repo/raw\u547D\u4EE4\uFF0C\u7C98\u8D34\u5BFC\u5165"})]}),open:I,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){d.validateFields().then(function(a){ge(a)}).catch(function(a){console.log("Validate Failed:",a)})},onCancel:function(){return $()},confirmLoading:de,children:(0,e.jsxs)(n.Z,{form:d,name:"form_in_modal",layout:"vertical",children:[(0,e.jsx)(n.Z.Item,{name:"name",label:"\u540D\u79F0",children:(0,e.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165\u8BA2\u9605\u540D"})}),(0,e.jsx)(n.Z.Item,{name:"type",label:"\u7C7B\u578B",rules:[{required:!0}],initialValue:"public-repo",children:(0,e.jsxs)(l.ZP.Group,{onChange:ve,children:[(0,e.jsx)(l.ZP,{value:"public-repo",children:"\u516C\u5F00\u4ED3\u5E93"}),(0,e.jsx)(l.ZP,{value:"private-repo",children:"\u79C1\u6709\u4ED3\u5E93"}),(0,e.jsx)(l.ZP,{value:"file",children:"\u5355\u6587\u4EF6"})]})}),(0,e.jsx)(n.Z.Item,{name:"url",label:"\u94FE\u63A5",rules:[{required:!0},{pattern:A==="file"?N:z}],children:(0,e.jsx)(o.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u8BA2\u9605\u94FE\u63A5",onPaste:te,onChange:te})}),A!=="file"&&(0,e.jsx)(n.Z.Item,{name:"branch",label:"\u5206\u652F",children:(0,e.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165\u5206\u652F",onPaste:re,onChange:re})}),(0,e.jsx)(n.Z.Item,{name:"alias",label:"\u552F\u4E00\u503C",rules:[{required:!0,message:""}],tooltip:"\u552F\u4E00\u503C\u7528\u4E8E\u65E5\u5FD7\u76EE\u5F55\u548C\u79C1\u94A5\u522B\u540D",children:(0,e.jsx)(o.Z,{placeholder:"\u81EA\u52A8\u751F\u6210",disabled:!0})}),A==="private-repo"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.Z.Item,{name:"pull_type",label:"\u62C9\u53D6\u65B9\u5F0F",initialValue:"ssh-key",rules:[{required:!0}],children:(0,e.jsxs)(l.ZP.Group,{onChange:be,children:[(0,e.jsx)(l.ZP,{value:"ssh-key",children:"\u79C1\u94A5"}),(0,e.jsx)(l.ZP,{value:"user-pwd",children:"\u7528\u6237\u540D\u5BC6\u7801/Token"})]})}),(0,e.jsx)(Ce,{type:he})]}),(0,e.jsx)(n.Z.Item,{name:"schedule_type",label:"\u5B9A\u65F6\u7C7B\u578B",initialValue:"crontab",rules:[{required:!0}],children:(0,e.jsxs)(l.ZP.Group,{onChange:Ee,children:[(0,e.jsx)(l.ZP,{value:"crontab",children:"crontab"}),(0,e.jsx)(l.ZP,{value:"interval",children:"interval"})]})}),(0,e.jsx)(n.Z.Item,{name:H==="crontab"?"schedule":"interval_schedule",label:"\u5B9A\u65F6\u89C4\u5219",rules:[{required:!0},{validator:function(a,r){return H==="interval"||!r||b().parseExpression(r).hasNext()?Promise.resolve():Promise.reject("Subscription\u8868\u8FBE\u5F0F\u683C\u5F0F\u6709\u8BEF")}}],children:H==="interval"?(0,e.jsx)(Fe,{}):(0,e.jsx)(o.Z,{placeholder:"\u79D2(\u53EF\u9009) \u5206 \u65F6 \u5929 \u6708 \u5468"})}),A!=="file"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.Z.Item,{name:"whitelist",label:"\u767D\u540D\u5355",tooltip:"\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F",children:(0,e.jsx)(o.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u811A\u672C\u7B5B\u9009\u767D\u540D\u5355\u5173\u952E\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272"})}),(0,e.jsx)(n.Z.Item,{name:"blacklist",label:"\u9ED1\u540D\u5355",tooltip:"\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F",children:(0,e.jsx)(o.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u811A\u672C\u7B5B\u9009\u9ED1\u540D\u5355\u5173\u952E\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272"})}),(0,e.jsx)(n.Z.Item,{name:"dependences",label:"\u4F9D\u8D56\u6587\u4EF6",tooltip:"\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F",children:(0,e.jsx)(o.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u811A\u672C\u4F9D\u8D56\u6587\u4EF6\u5173\u952E\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272"})}),(0,e.jsx)(n.Z.Item,{name:"extensions",label:"\u6587\u4EF6\u540E\u7F00",tooltip:"\u4ED3\u5E93\u9700\u8981\u62C9\u53D6\u7684\u6587\u4EF6\u540E\u7F00\uFF0C\u591A\u4E2A\u540E\u7F00\u7A7A\u683C\u5206\u9694\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684RepoFileExtensions",children:(0,e.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540E\u7F00"})}),(0,e.jsx)(n.Z.Item,{name:"sub_before",label:"\u6267\u884C\u524D",tooltip:"\u8FD0\u884C\u8BA2\u9605\u524D\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u6BD4\u5982 cp/mv/python3 xxx.py/node xxx.js",children:(0,e.jsx)(o.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u8FD0\u884C\u8BA2\u9605\u524D\u8981\u6267\u884C\u7684\u547D\u4EE4"})}),(0,e.jsx)(n.Z.Item,{name:"sub_after",label:"\u6267\u884C\u540E",tooltip:"\u8FD0\u884C\u8BA2\u9605\u540E\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u6BD4\u5982 cp/mv/python3 xxx.py/node xxx.js",children:(0,e.jsx)(o.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u8FD0\u884C\u8BA2\u9605\u540E\u8981\u6267\u884C\u7684\u547D\u4EE4"})})]})]})})};B.default=oe},98505:function(Q,B){"use strict";B.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},51970:function(Q,B,u){"use strict";u.d(B,{W:function(){return K}});var S=u(35290),x=u.n(S),R=u(411),U=u.n(R),w=u(30279),j=u.n(w),q=u(50659),h=u(80743),_=u(98505),T=u(78722);h.ZP.config({duration:1.5});var O=Date.now(),n=function(l){if(l.response){var g=l.data?l.data.message||l.message||l.data:l.response.statusText,E=l.response.status;[502,504].includes(E)?T.m8.push("/error"):E===401?T.m8.location.pathname!=="/login"&&(h.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(_.Z.authKey),T.m8.push("/login")):h.ZP.error(g)}else console.log(l.message);throw l},D=(0,q.l7)({timeout:6e4,params:{t:O},errorHandler:n}),o=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];D.interceptors.request.use(function(v,l){var g=localStorage.getItem(_.Z.authKey);if(g&&!o.includes(v)){var E={Authorization:"Bearer ".concat(g)};return{url:v,options:j()(j()({},l),{},{headers:E})}}return{url:v,options:l}}),D.interceptors.response.use(function(){var v=U()(x()().mark(function l(g){var E;return x()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,g.clone();case 2:return E=b.sent,b.abrupt("return",g);case 4:case"end":return b.stop()}},l)}));return function(l){return v.apply(this,arguments)}}());var K=D},91394:function(){},71129:function(){}}]);

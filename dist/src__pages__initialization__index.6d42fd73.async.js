(self.webpackChunk=self.webpackChunk||[]).push([[1554,73,5586],{82166:function(fe,L,e){"use strict";e.d(L,{Z:function(){return x}});var v=e(79105),i=e(63313),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},Z=W,t=e(17980),A=function(z,R){return i.createElement(t.Z,(0,v.Z)((0,v.Z)({},z),{},{ref:R,icon:Z}))};A.displayName="EyeOutlined";var x=i.forwardRef(A)},77489:function(fe,L,e){"use strict";e.r(L),e.d(L,{default:function(){return se}});var v=e(30279),i=e.n(v),W=e(46686),Z=e.n(W),t=e(63313),A=e.n(t),x=e(96600),P=e(47220),z=e(21041),R=e(60382),q=e(84875),ee=e.n(q),H=e(79105),ve=e(99377),he=e(61584),te=e(16568),M=e(54509),X=e(14430),le=e(84525),Ee=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function j(b){return typeof b=="string"}var S=function(b){(0,M.Z)(u,b);var E=(0,X.Z)(u);function u(){var d;return(0,he.Z)(this,u),d=E.apply(this,arguments),d.onClick=function(){var a=d.props,n=a.onClick,l=a.onStepClick,s=a.stepIndex;n&&n.apply(void 0,arguments),l(s)},d}return(0,te.Z)(u,[{key:"renderIconNode",value:function(){var a,n=this.props,l=n.prefixCls,s=n.progressDot,B=n.stepIcon,T=n.stepNumber,O=n.status,Y=n.title,$=n.description,g=n.icon,k=n.iconPrefix,f=n.icons,N,J=ee()("".concat(l,"-icon"),"".concat(k,"icon"),(a={},(0,P.Z)(a,"".concat(k,"icon-").concat(g),g&&j(g)),(0,P.Z)(a,"".concat(k,"icon-check"),!g&&O==="finish"&&(f&&!f.finish||!f)),(0,P.Z)(a,"".concat(k,"icon-cross"),!g&&O==="error"&&(f&&!f.error||!f)),a)),K=t.createElement("span",{className:"".concat(l,"-icon-dot")});return s?typeof s=="function"?N=t.createElement("span",{className:"".concat(l,"-icon")},s(K,{index:T-1,status:O,title:Y,description:$})):N=t.createElement("span",{className:"".concat(l,"-icon")},K):g&&!j(g)?N=t.createElement("span",{className:"".concat(l,"-icon")},g):f&&f.finish&&O==="finish"?N=t.createElement("span",{className:"".concat(l,"-icon")},f.finish):f&&f.error&&O==="error"?N=t.createElement("span",{className:"".concat(l,"-icon")},f.error):g||O==="finish"||O==="error"?N=t.createElement("span",{className:J}):N=t.createElement("span",{className:"".concat(l,"-icon")},T),B&&(N=B({index:T-1,status:O,title:Y,description:$,node:N})),N}},{key:"render",value:function(){var a,n=this.props,l=n.className,s=n.prefixCls,B=n.style,T=n.active,O=n.status,Y=O===void 0?"wait":O,$=n.iconPrefix,g=n.icon,k=n.wrapperStyle,f=n.stepNumber,N=n.disabled,J=n.description,K=n.title,c=n.subTitle,D=n.progressDot,U=n.stepIcon,ue=n.tailContent,de=n.icons,Ce=n.stepIndex,ae=n.onStepClick,C=n.onClick,Q=(0,ve.Z)(n,Ee),ie=ee()("".concat(s,"-item"),"".concat(s,"-item-").concat(Y),l,(a={},(0,P.Z)(a,"".concat(s,"-item-custom"),g),(0,P.Z)(a,"".concat(s,"-item-active"),T),(0,P.Z)(a,"".concat(s,"-item-disabled"),N===!0),a)),Ie=(0,H.Z)({},B),me={};return ae&&!N&&(me.role="button",me.tabIndex=0,me.onClick=this.onClick),t.createElement("div",Object.assign({},Q,{className:ie,style:Ie}),t.createElement("div",Object.assign({onClick:C},me,{className:"".concat(s,"-item-container")}),t.createElement("div",{className:"".concat(s,"-item-tail")},ue),t.createElement("div",{className:"".concat(s,"-item-icon")},this.renderIconNode()),t.createElement("div",{className:"".concat(s,"-item-content")},t.createElement("div",{className:"".concat(s,"-item-title")},K,c&&t.createElement("div",{title:typeof c=="string"?c:void 0,className:"".concat(s,"-item-subtitle")},c)),J&&t.createElement("div",{className:"".concat(s,"-item-description")},J))))}}]),u}(t.Component),ge=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange"],y=function(b){(0,M.Z)(u,b);var E=(0,X.Z)(u);function u(){var d;return(0,he.Z)(this,u),d=E.apply(this,arguments),d.onStepClick=function(a){var n=d.props,l=n.onChange,s=n.current;l&&s!==a&&l(a)},d}return(0,te.Z)(u,[{key:"render",value:function(){var a,n=this,l=this.props,s=l.prefixCls,B=l.style,T=B===void 0?{}:B,O=l.className,Y=l.children,$=l.direction,g=l.type,k=l.labelPlacement,f=l.iconPrefix,N=l.status,J=l.size,K=l.current,c=l.progressDot,D=l.stepIcon,U=l.initial,ue=l.icons,de=l.onChange,Ce=(0,ve.Z)(l,ge),ae=g==="navigation",C=c?"vertical":k,Q=ee()(s,"".concat(s,"-").concat($),O,(a={},(0,P.Z)(a,"".concat(s,"-").concat(J),J),(0,P.Z)(a,"".concat(s,"-label-").concat(C),$==="horizontal"),(0,P.Z)(a,"".concat(s,"-dot"),!!c),(0,P.Z)(a,"".concat(s,"-navigation"),ae),a));return A().createElement("div",Object.assign({className:Q,style:T},Ce),(0,le.Z)(Y).map(function(ie,Ie){var me=U+Ie,be=(0,H.Z)({stepNumber:"".concat(me+1),stepIndex:me,key:me,prefixCls:s,iconPrefix:f,wrapperStyle:T,progressDot:c,stepIcon:D,icons:ue,onStepClick:de&&n.onStepClick},ie.props);return N==="error"&&Ie===K-1&&(be.className="".concat(s,"-next-error")),ie.props.status||(me===K?be.status=N:me<K?be.status="finish":be.status="wait"),be.active=me===K,(0,t.cloneElement)(ie,be)}))}}]),u}(A().Component);y.Step=S,y.defaultProps={type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1};var re=y,xe=e(71010),Ne=e(63452),Oe=e(88158),Se=function(b,E){var u={};for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&E.indexOf(d)<0&&(u[d]=b[d]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,d=Object.getOwnPropertySymbols(b);a<d.length;a++)E.indexOf(d[a])<0&&Object.prototype.propertyIsEnumerable.call(b,d[a])&&(u[d[a]]=b[d[a]]);return u},Pe=function(E){var u,d=E.percent,a=E.size,n=E.className,l=E.direction,s=E.responsive,B=Se(E,["percent","size","className","direction","responsive"]),T=(0,Ne.Z)(s),O=T.xs,Y=t.useContext(xe.E_),$=Y.getPrefixCls,g=Y.direction,k=t.useCallback(function(){return s&&O?"vertical":l},[O,l]),f=$("steps",E.prefixCls),N=$("",E.iconPrefix),J=ee()((u={},(0,P.Z)(u,"".concat(f,"-rtl"),g==="rtl"),(0,P.Z)(u,"".concat(f,"-with-progress"),d!==void 0),u),n),K={finish:t.createElement(z.Z,{className:"".concat(f,"-finish-icon")}),error:t.createElement(R.Z,{className:"".concat(f,"-error-icon")})},c=function(U){var ue=U.node,de=U.status;if(de==="process"&&d!==void 0){var Ce=a==="small"?32:40,ae=t.createElement("div",{className:"".concat(f,"-progress-icon")},t.createElement(Oe.Z,{type:"circle",percent:d,width:Ce,strokeWidth:4,format:function(){return null}}),ue);return ae}return ue};return t.createElement(re,(0,x.Z)({icons:K},B,{size:a,direction:k(),stepIcon:c,prefixCls:f,iconPrefix:N,className:J}))};Pe.Step=re.Step,Pe.defaultProps={current:0,responsive:!0};var ye=Pe,oe=e(78455),pe=e(77073),_e=e(6946),o=e(80743),p=e(74309),h=e(2991),m=e(98505),_=e(78722),I={container:"container___p6QCp",top:"top___Juq26",header:"header___tqj_6",logo:"logo___YomRq",title:"title___0O1DN",desc:"desc___J3UaF",main:"main___II0mY","ant-steps":"ant-steps___T0WmF","steps-container":"steps-container___Zhjdk",extra:"extra___c8tGm"},ce=e(51970),r=e(11527),ne=oe.Z.Item,w=ye.Step,V=pe.Z.Option,F=_e.Z.Link,G=function(){var E=(0,t.useState)(!1),u=Z()(E,2),d=u[0],a=u[1],n=A().useState(0),l=Z()(n,2),s=l[0],B=l[1],T=(0,t.useState)([]),O=Z()(T,2),Y=O[0],$=O[1],g=function(){B(s+1)},k=function(){B(s-1)},f=function(D){a(!0),ce.W.put("".concat(m.Z.apiPrefix,"user/init"),{data:{username:D.username,password:D.password}}).then(function(U){U.code===200?g():o.ZP.error(U.message)}).finally(function(){return a(!1)})},N=function(D){a(!0),ce.W.put("".concat(m.Z.apiPrefix,"user/notification/init"),{data:i()({},D)}).then(function(U){U&&U.code===200?g():o.ZP.error(U.message)}).finally(function(){return a(!1)})},J=function(D){var U=m.Z.notificationModeMap[D];$(U||[])};(0,t.useEffect)(function(){localStorage.removeItem(m.Z.authKey)},[]);var K=[{title:"\u6B22\u8FCE\u4F7F\u7528",content:(0,r.jsxs)("div",{className:I.top,style:{marginTop:100},children:[(0,r.jsx)("div",{className:I.header,children:(0,r.jsx)("span",{className:I.title,children:"\u6B22\u8FCE\u4F7F\u7528\u9752\u9F99\u63A7\u5236\u9762\u677F"})}),(0,r.jsx)("div",{className:I.action,children:(0,r.jsx)(p.Z,{type:"primary",onClick:function(){g()},children:"\u5F00\u59CB\u5B89\u88C5"})})]})},{title:"\u901A\u77E5\u8BBE\u7F6E",content:(0,r.jsxs)(oe.Z,{onFinish:N,layout:"vertical",children:[(0,r.jsx)(oe.Z.Item,{label:"\u901A\u77E5\u65B9\u5F0F",name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u901A\u77E5\u65B9\u5F0F"}],style:{maxWidth:350},children:(0,r.jsx)(pe.Z,{onChange:J,placeholder:"\u8BF7\u9009\u62E9\u901A\u77E5\u65B9\u5F0F",children:m.Z.notificationModes.filter(function(c){return c.value!=="closed"}).map(function(c){return(0,r.jsx)(V,{value:c.value,children:c.label},c.value)})})}),Y.map(function(c){return(0,r.jsx)(oe.Z.Item,{label:c.label,name:c.label,extra:c.tip,rules:[{required:c.required}],style:{maxWidth:400},children:(0,r.jsx)(h.Z.TextArea,{autoSize:!0,placeholder:"\u8BF7\u8F93\u5165".concat(c.label)})},c.label)}),(0,r.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:d,children:"\u4FDD\u5B58"}),(0,r.jsx)(p.Z,{type:"link",htmlType:"button",onClick:function(){return g()},children:"\u8DF3\u8FC7"})]})},{title:"\u8D26\u6237\u8BBE\u7F6E",content:(0,r.jsxs)(oe.Z,{onFinish:f,layout:"vertical",children:[(0,r.jsx)(oe.Z.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0}],style:{maxWidth:350},children:(0,r.jsx)(h.Z,{placeholder:"\u7528\u6237\u540D"})}),(0,r.jsx)(oe.Z.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0},{pattern:/^(?!admin$).*$/,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3Aadmin"}],hasFeedback:!0,style:{maxWidth:350},children:(0,r.jsx)(h.Z,{type:"password",placeholder:"\u5BC6\u7801"})}),(0,r.jsx)(oe.Z.Item,{name:"confirm",label:"\u786E\u8BA4\u5BC6\u7801",dependencies:["password"],hasFeedback:!0,style:{maxWidth:350},rules:[{required:!0},function(c){var D=c.getFieldValue;return{validator:function(ue,de){return!de||D("password")===de?Promise.resolve():Promise.reject(new Error("\u60A8\u8F93\u5165\u7684\u4E24\u4E2A\u5BC6\u7801\u4E0D\u5339\u914D\uFF01"))}}}],children:(0,r.jsx)(h.Z.Password,{placeholder:"\u786E\u8BA4\u5BC6\u7801"})}),(0,r.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:d,children:"\u63D0\u4EA4"})]})},{title:"\u5B8C\u6210\u5B89\u88C5",content:(0,r.jsxs)("div",{className:I.top,style:{marginTop:80},children:[(0,r.jsxs)("div",{className:I.header,children:[(0,r.jsx)("span",{className:I.title,children:"\u606D\u559C\u5B89\u88C5\u5B8C\u6210\uFF01"}),(0,r.jsx)(F,{href:"https://github.com/whyour/qinglong",target:"_blank",children:"Github"}),(0,r.jsx)(F,{href:"https://t.me/jiao_long",target:"_blank",children:"Telegram\u9891\u9053"})]}),(0,r.jsx)("div",{style:{marginTop:16},children:(0,r.jsx)(p.Z,{type:"primary",onClick:function(){_.m8.push("/login")},children:"\u53BB\u767B\u5F55"})})]})}];return(0,r.jsxs)("div",{className:I.container,children:[(0,r.jsx)("div",{className:I.top,children:(0,r.jsxs)("div",{className:I.header,children:[(0,r.jsx)("img",{alt:"logo",className:I.logo,src:"http://qn.whyour.cn/logo.png"}),(0,r.jsx)("span",{className:I.title,children:"\u521D\u59CB\u5316\u914D\u7F6E"})]})}),(0,r.jsxs)("div",{className:I.main,children:[(0,r.jsx)(ye,{current:s,direction:"vertical",size:"small",className:I["ant-steps"],children:K.map(function(c){return(0,r.jsx)(w,{title:c.title},c.title)})}),(0,r.jsx)("div",{className:I["steps-container"],children:K[s].content})]})]})},se=G},98505:function(fe,L){"use strict";L.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},51970:function(fe,L,e){"use strict";e.d(L,{W:function(){return he}});var v=e(35290),i=e.n(v),W=e(411),Z=e.n(W),t=e(30279),A=e.n(t),x=e(50659),P=e(80743),z=e(98505),R=e(78722);P.ZP.config({duration:1.5});var q=Date.now(),ee=function(M){if(M.response){var X=M.data?M.data.message||M.message||M.data:M.response.statusText,le=M.response.status;[502,504].includes(le)?R.m8.push("/error"):le===401?R.m8.location.pathname!=="/login"&&(P.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(z.Z.authKey),R.m8.push("/login")):P.ZP.error(X)}else console.log(M.message);throw M},H=(0,x.l7)({timeout:6e4,params:{t:q},errorHandler:ee}),ve=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];H.interceptors.request.use(function(te,M){var X=localStorage.getItem(z.Z.authKey);if(X&&!ve.includes(te)){var le={Authorization:"Bearer ".concat(X)};return{url:te,options:A()(A()({},M),{},{headers:le})}}return{url:te,options:M}}),H.interceptors.response.use(function(){var te=Z()(i()().mark(function M(X){var le;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,X.clone();case 2:return le=j.sent,j.abrupt("return",X);case 4:case"end":return j.stop()}},M)}));return function(M){return te.apply(this,arguments)}}());var he=H},58280:function(fe,L,e){"use strict";e.d(L,{Z:function(){return Z}});var v=e(35931),i=e(63313),W=e.n(i);function Z(){var t=i.useReducer(function(P){return P+1},0),A=(0,v.Z)(t,2),x=A[1];return x}},63452:function(fe,L,e){"use strict";var v=e(63313),i=e.n(v),W=e(58280),Z=e(67318);function t(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,x=(0,v.useRef)({}),P=(0,W.Z)();return(0,v.useEffect)(function(){var z=Z.ZP.subscribe(function(R){x.current=R,A&&P()});return function(){return Z.ZP.unsubscribe(z)}},[]),x.current}L.Z=t},2991:function(fe,L,e){"use strict";e.d(L,{Z:function(){return _e}});var v=e(96600),i=e(47220),W=e(84875),Z=e.n(W),t=e(63313),A=e(71010),x=e(19092),P=function(p){var h,m=(0,t.useContext)(A.E_),_=m.getPrefixCls,I=m.direction,ce=p.prefixCls,r=p.className,ne=r===void 0?"":r,w=_("input-group",ce),V=Z()(w,(h={},(0,i.Z)(h,"".concat(w,"-lg"),p.size==="large"),(0,i.Z)(h,"".concat(w,"-sm"),p.size==="small"),(0,i.Z)(h,"".concat(w,"-compact"),p.compact),(0,i.Z)(h,"".concat(w,"-rtl"),I==="rtl"),h),ne),F=(0,t.useContext)(x.aM),G=(0,t.useMemo)(function(){return(0,v.Z)((0,v.Z)({},F),{isFormItemInput:!1})},[F]);return t.createElement("span",{className:V,style:p.style,onMouseEnter:p.onMouseEnter,onMouseLeave:p.onMouseLeave,onFocus:p.onFocus,onBlur:p.onBlur},t.createElement(x.aM.Provider,{value:G},p.children))},z=P,R=e(65918),q=e(35931),ee=e(79105),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},ve=H,he=e(17980),te=function(p,h){return t.createElement(he.Z,(0,ee.Z)((0,ee.Z)({},p),{},{ref:h,icon:ve}))};te.displayName="EyeInvisibleOutlined";var M=t.forwardRef(te),X=e(82166),le=e(1334),Ee=function(o,p){var h={};for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&p.indexOf(m)<0&&(h[m]=o[m]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,m=Object.getOwnPropertySymbols(o);_<m.length;_++)p.indexOf(m[_])<0&&Object.prototype.propertyIsEnumerable.call(o,m[_])&&(h[m[_]]=o[m[_]]);return h},j={click:"onClick",hover:"onMouseOver"},S=t.forwardRef(function(o,p){var h=(0,t.useState)(!1),m=(0,q.Z)(h,2),_=m[0],I=m[1],ce=function(){var V=o.disabled;V||I(!_)},r=function(V){var F,G=o.action,se=o.iconRender,b=se===void 0?function(){return null}:se,E=j[G]||"",u=b(_),d=(F={},(0,i.Z)(F,E,ce),(0,i.Z)(F,"className","".concat(V,"-icon")),(0,i.Z)(F,"key","passwordIcon"),(0,i.Z)(F,"onMouseDown",function(n){n.preventDefault()}),(0,i.Z)(F,"onMouseUp",function(n){n.preventDefault()}),F);return t.cloneElement(t.isValidElement(u)?u:t.createElement("span",null,u),d)},ne=function(V){var F=V.getPrefixCls,G=o.className,se=o.prefixCls,b=o.inputPrefixCls,E=o.size,u=o.visibilityToggle,d=Ee(o,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),a=F("input",b),n=F("input-password",se),l=u&&r(n),s=Z()(n,G,(0,i.Z)({},"".concat(n,"-").concat(E),!!E)),B=(0,v.Z)((0,v.Z)({},(0,le.Z)(d,["suffix","iconRender"])),{type:_?"text":"password",className:s,prefixCls:a,suffix:l});return E&&(B.size=E),t.createElement(R.ZP,(0,v.Z)({ref:p},B))};return t.createElement(A.C,null,ne)});S.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(p){return p?t.createElement(X.Z,null):t.createElement(M,null)}};var ge=S,y=e(15258),re=e(4385),xe=e(74309),Ne=e(59418),Oe=e(51472),Se=function(o,p){var h={};for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&p.indexOf(m)<0&&(h[m]=o[m]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,m=Object.getOwnPropertySymbols(o);_<m.length;_++)p.indexOf(m[_])<0&&Object.prototype.propertyIsEnumerable.call(o,m[_])&&(h[m[_]]=o[m[_]]);return h},Pe=t.forwardRef(function(o,p){var h,m=o.prefixCls,_=o.inputPrefixCls,I=o.className,ce=o.size,r=o.suffix,ne=o.enterButton,w=ne===void 0?!1:ne,V=o.addonAfter,F=o.loading,G=o.disabled,se=o.onSearch,b=o.onChange,E=o.onCompositionStart,u=o.onCompositionEnd,d=Se(o,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),a=t.useContext(A.E_),n=a.getPrefixCls,l=a.direction,s=t.useContext(Ne.Z),B=t.useRef(!1),T=ce||s,O=t.useRef(null),Y=function(C){C&&C.target&&C.type==="click"&&se&&se(C.target.value,C),b&&b(C)},$=function(C){var Q;document.activeElement===((Q=O.current)===null||Q===void 0?void 0:Q.input)&&C.preventDefault()},g=function(C){var Q,ie;se&&se((ie=(Q=O.current)===null||Q===void 0?void 0:Q.input)===null||ie===void 0?void 0:ie.value,C)},k=function(C){B.current||g(C)},f=n("input-search",m),N=n("input",_),J=typeof w=="boolean"?t.createElement(y.Z,null):null,K="".concat(f,"-button"),c,D=w||{},U=D.type&&D.type.__ANT_BUTTON===!0;U||D.type==="button"?c=(0,Oe.Tm)(D,(0,v.Z)({onMouseDown:$,onClick:function(C){var Q,ie;(ie=(Q=D==null?void 0:D.props)===null||Q===void 0?void 0:Q.onClick)===null||ie===void 0||ie.call(Q,C),g(C)},key:"enterButton"},U?{className:K,size:T}:{})):c=t.createElement(xe.Z,{className:K,type:w?"primary":void 0,size:T,disabled:G,key:"enterButton",onMouseDown:$,onClick:g,loading:F,icon:J},w),V&&(c=[c,(0,Oe.Tm)(V,{key:"addonAfter"})]);var ue=Z()(f,(h={},(0,i.Z)(h,"".concat(f,"-rtl"),l==="rtl"),(0,i.Z)(h,"".concat(f,"-").concat(T),!!T),(0,i.Z)(h,"".concat(f,"-with-button"),!!w),h),I),de=function(C){B.current=!0,E==null||E(C)},Ce=function(C){B.current=!1,u==null||u(C)};return t.createElement(R.ZP,(0,v.Z)({ref:(0,re.sQ)(O,p),onPressEnter:k},d,{size:T,onCompositionStart:de,onCompositionEnd:Ce,prefixCls:N,addonAfter:c,suffix:r,onChange:Y,className:ue,disabled:G}))}),ye=Pe,oe=e(13516),pe=R.ZP;pe.Group=z,pe.Search=ye,pe.TextArea=oe.Z,pe.Password=ge;var _e=pe},77073:function(fe,L,e){"use strict";var v=e(47220),i=e(96600),W=e(84875),Z=e.n(W),t=e(37900),A=e(1334),x=e(63313),P=e.n(x),z=e(71010),R=e(77621),q=e(4874),ee=e(59418),H=e(19092),ve=e(93600),he=e(51591),te=e(62330),M=function(j,S){var ge={};for(var y in j)Object.prototype.hasOwnProperty.call(j,y)&&S.indexOf(y)<0&&(ge[y]=j[y]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var re=0,y=Object.getOwnPropertySymbols(j);re<y.length;re++)S.indexOf(y[re])<0&&Object.prototype.propertyIsEnumerable.call(j,y[re])&&(ge[y[re]]=j[y[re]]);return ge},X="SECRET_COMBOBOX_MODE_DO_NOT_USE",le=function(S,ge){var y,re=S.prefixCls,xe=S.bordered,Ne=xe===void 0?!0:xe,Oe=S.className,Se=S.getPopupContainer,Pe=S.dropdownClassName,ye=S.popupClassName,oe=S.listHeight,pe=oe===void 0?256:oe,_e=S.placement,o=S.listItemHeight,p=o===void 0?24:o,h=S.size,m=S.disabled,_=S.notFoundContent,I=S.status,ce=S.showArrow,r=M(S,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),ne=x.useContext(z.E_),w=ne.getPopupContainer,V=ne.getPrefixCls,F=ne.renderEmpty,G=ne.direction,se=ne.virtual,b=ne.dropdownMatchSelectWidth,E=x.useContext(ee.Z),u=V("select",re),d=V(),a=x.useMemo(function(){var C=r.mode;if(C!=="combobox")return C===X?"combobox":C},[r.mode]),n=a==="multiple"||a==="tags",l=ce!==void 0?ce:r.loading||!(n||a==="combobox"),s=(0,x.useContext)(H.aM),B=s.status,T=s.hasFeedback,O=s.isFormItemInput,Y=s.feedbackIcon,$=(0,he.F)(B,I),g;_!==void 0?g=_:a==="combobox"?g=null:g=(F||R.Z)("Select");var k=(0,te.Z)((0,i.Z)((0,i.Z)({},r),{multiple:n,hasFeedback:T,feedbackIcon:Y,showArrow:l,prefixCls:u})),f=k.suffixIcon,N=k.itemIcon,J=k.removeIcon,K=k.clearIcon,c=(0,A.Z)(r,["suffixIcon","itemIcon"]),D=Z()(ye||Pe,(0,v.Z)({},"".concat(u,"-dropdown-").concat(G),G==="rtl")),U=h||E,ue=x.useContext(q.Z),de=m||ue,Ce=Z()((y={},(0,v.Z)(y,"".concat(u,"-lg"),U==="large"),(0,v.Z)(y,"".concat(u,"-sm"),U==="small"),(0,v.Z)(y,"".concat(u,"-rtl"),G==="rtl"),(0,v.Z)(y,"".concat(u,"-borderless"),!Ne),(0,v.Z)(y,"".concat(u,"-in-form-item"),O),y),(0,he.Z)(u,$,T),Oe),ae=function(){return _e!==void 0?_e:G==="rtl"?"bottomRight":"bottomLeft"};return x.createElement(t.ZP,(0,i.Z)({ref:ge,virtual:se,dropdownMatchSelectWidth:b},c,{transitionName:(0,ve.mL)(d,(0,ve.q0)(_e),r.transitionName),listHeight:pe,listItemHeight:p,mode:a,prefixCls:u,placement:ae(),direction:G,inputIcon:f,menuItemSelectedIcon:N,removeIcon:J,clearIcon:K,notFoundContent:g,className:Ce,getPopupContainer:Se||w,dropdownClassName:D,showArrow:T||ce,disabled:de}))},Ee=x.forwardRef(le);Ee.SECRET_COMBOBOX_MODE_DO_NOT_USE=X,Ee.Option=t.Wx,Ee.OptGroup=t.Xo,L.Z=Ee},22899:function(fe,L){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(i){var W=i.keyCode;if(i.altKey&&!i.ctrlKey||i.metaKey||W>=e.F1&&W<=e.F12)return!1;switch(W){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(i){if(i>=e.ZERO&&i<=e.NINE||i>=e.NUM_ZERO&&i<=e.NUM_MULTIPLY||i>=e.A&&i<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&i===0)return!0;switch(i){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};L.Z=e},44549:function(fe,L,e){"use strict";e.d(L,{Z:function(){return P}});var v=e(79105),i=`accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`,W=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Z="".concat(i," ").concat(W).split(/[\s\n]+/),t="aria-",A="data-";function x(z,R){return z.indexOf(R)===0}function P(z){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,q;R===!1?q={aria:!0,data:!0,attr:!0}:R===!0?q={aria:!0}:q=(0,v.Z)({},R);var ee={};return Object.keys(z).forEach(function(H){(q.aria&&(H==="role"||x(H,t))||q.data&&x(H,A)||q.attr&&Z.includes(H))&&(ee[H]=z[H])}),ee}},71129:function(){}}]);

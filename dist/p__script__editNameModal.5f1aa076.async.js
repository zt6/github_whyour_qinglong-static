(self.webpackChunk=self.webpackChunk||[]).push([[8260],{91053:function(U,m,e){"use strict";e.d(m,{Z:function(){return c}});var i=e(46871);function c(_,D){var a=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!a){if(Array.isArray(_)||(a=(0,i.Z)(_))||D&&_&&typeof _.length=="number"){a&&(_=a);var h=0,u=function(){};return{s:u,n:function(){return h>=_.length?{done:!0}:{done:!1,value:_[h++]}},e:function(f){throw f},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var v=!0,W=!1,M;return{s:function(){a=a.call(_)},n:function(){var f=a.next();return v=f.done,f},e:function(f){W=!0,M=f},f:function(){try{!v&&a.return!=null&&a.return()}finally{if(W)throw M}}}}},17114:function(){},19250:function(U,m,e){"use strict";e.d(m,{m:function(){return i.m}});var i=e(17444),c=e(90080)},33826:function(U,m,e){"use strict";e.r(m);var i=e(27626),c=e(5658),_=e(82975),D=e(80340),a=e(6001),h=e(32150),u=e(94072),v=e(25293),W=e(3322),M=e(16475),d=e(72912),f=e(91053),x=e(57113),C=e(95023),n=e(41396),g=e(82005),y=e(31629),b=e(81950),E=e(42273),k=e(41080),I=e(61279),t=e(12924),r=e.n(t),l=e(6098),B=e(27077),$=e(23311),pe=I.Z.Option,le=X=>{var V=X.handleCancel,Y=X.treeData,j=X.visible,oe=b.Z.useForm(),w=(0,E.Z)(oe,1),S=w[0],_e=(0,t.useState)(!1),J=(0,E.Z)(_e,2),se=J[0],F=J[1],ie=(0,t.useState)([]),N=(0,E.Z)(ie,2),A=N[0],T=N[1],ue=(0,t.useState)(),G=(0,E.Z)(ue,2),z=G[0],K=G[1],de=(0,t.useState)("blank"),q=(0,E.Z)(de,2),ee=q[0],P=q[1],me=function(){var s=(0,g.Z)((0,x.Z)().mark(function O(o){var p;return(0,x.Z)().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:F(!0),o.path=o.path||"",p=new FormData,p.append("file",z),p.append("filename",o.filename),p.append("path",o.path),p.append("content",""),l.W.post("".concat(B.Z.apiPrefix,"scripts"),{data:p}).then(Z=>{var H=Z.code,ce=Z.data;if(H===200){n.ZP.success("\u65B0\u5EFA\u6587\u4EF6\u6210\u529F");var Ee=o.path?"".concat(o.path,"/"):"",ne=z?z.name:o.filename;V({filename:ne,path:o.path,key:"".concat(Ee).concat(ne)})}else n.ZP.error(ce);F(!1)}).finally(()=>F(!1));case 8:case"end":return Q.stop()}},O)}));return function(o){return s.apply(this,arguments)}}(),L=s=>(K(s),!1),te=s=>{P(s.target.value)},ae=s=>{var O=(0,f.Z)(s),o;try{for(O.s();!(o=O.n()).done;){var p=o.value;p.children&&p.children.length>0&&(p.children=p.children.filter(R=>R.type==="directory").map(R=>(0,d.Z)((0,d.Z)({},R),{},{disabled:!1})),ae(p.children))}}catch(R){O.e(R)}finally{O.f()}return s};return(0,t.useEffect)(()=>{var s=Y.filter(o=>o.type==="directory").map(o=>(0,d.Z)((0,d.Z)({},o),{},{disabled:!1})),O=ae(s);T(O)},[Y]),(0,t.useEffect)(()=>{S.resetFields()},[j]),r().createElement(c.Z,{title:"\u65B0\u5EFA\u811A\u672C",visible:j,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{S.validateFields().then(s=>{me(s)}).catch(s=>{console.log("Validate Failed:",s)})},onCancel:()=>V(),confirmLoading:se},r().createElement(b.Z,{form:S,layout:"vertical",name:"edit_name_modal"},r().createElement(b.Z.Item,{name:"type",label:"\u7C7B\u578B",rules:[{required:!0}],initialValue:"blank"},r().createElement(M.ZP.Group,{onChange:te},r().createElement(M.ZP,{value:"blank"},"\u7A7A\u6587\u4EF6"),r().createElement(M.ZP,{value:"upload"},"\u672C\u5730\u4E0A\u4F20"))),ee==="blank"&&r().createElement(b.Z.Item,{name:"filename",label:"\u6587\u4EF6\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"}]},r().createElement(v.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"})),r().createElement(b.Z.Item,{label:"\u7236\u76EE\u5F55",name:"path"},r().createElement(h.Z,{allowClear:!0,treeData:A,fieldNames:{value:"key",label:"title"},placeholder:"\u8BF7\u9009\u62E9\u7236\u76EE\u5F55",treeDefaultExpandAll:!0})),ee==="upload"&&r().createElement(b.Z.Item,{label:"\u6587\u4EF6",name:"file"},r().createElement(D.Z.Dragger,{beforeUpload:L,maxCount:1},r().createElement("p",{className:"ant-upload-drag-icon"},r().createElement($.Z,null)),r().createElement("p",{className:"ant-upload-text"},"\u70B9\u51FB\u6216\u8005\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u4E0A\u4F20")))))};m.default=le},27077:function(U,m){"use strict";m.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},6098:function(U,m,e){"use strict";e.d(m,{W:function(){return x}});var i=e(57113),c=e(82005),_=e(72912),D=e(95023),a=e(41396),h=e(50659),u=e(27077),v=e(19250);a.ZP.config({duration:1.5});var W=Date.now(),M=function(n){if(n.response){var g=n.data?n.data.message||n.message||n.data:n.response.statusText,y=n.response.status;[502,504].includes(y)?v.m.push("/error"):y===401?v.m.location.pathname!=="/login"&&(a.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(u.Z.authKey),v.m.push("/login")):a.ZP.error(g)}else console.log(n.message);throw n},d=(0,h.l7)({timeout:6e4,params:{t:W},errorHandler:M}),f=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];d.interceptors.request.use((C,n)=>{var g=localStorage.getItem(u.Z.authKey);if(g&&!f.includes(C)){var y={Authorization:"Bearer ".concat(g)};return{url:C,options:(0,_.Z)((0,_.Z)({},n),{},{headers:y})}}return{url:C,options:n}}),d.interceptors.response.use(function(){var C=(0,c.Z)((0,i.Z)().mark(function n(g){var y;return(0,i.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,g.clone();case 2:return y=E.sent,E.abrupt("return",g);case 4:case"end":return E.stop()}},n)}));return function(n){return C.apply(this,arguments)}}());var x=d},65717:function(U,m,e){"use strict";e.d(m,{Z:function(){return D}});var i=e(45166),c=e(12924),_=e.n(c);function D(){var a=c.useReducer(function(v){return v+1},0),h=(0,i.Z)(a,2),u=h[1];return u}},27626:function(U,m,e){"use strict";var i=e(60199),c=e.n(i),_=e(17114),D=e.n(_),a=e(96258)},61279:function(U,m,e){"use strict";var i=e(74183),c=e(83788),_=e(19803),D=e.n(_),a=e(50549),h=e(90867),u=e(12924),v=e.n(u),W=e(85839),M=e(24056),d=e(31232),f=e(62695),x=e(56051),C=e(16566),n=e(94581),g=e(37754),y=function(I,t){var r={};for(var l in I)Object.prototype.hasOwnProperty.call(I,l)&&t.indexOf(l)<0&&(r[l]=I[l]);if(I!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,l=Object.getOwnPropertySymbols(I);B<l.length;B++)t.indexOf(l[B])<0&&Object.prototype.propertyIsEnumerable.call(I,l[B])&&(r[l[B]]=I[l[B]]);return r},b="SECRET_COMBOBOX_MODE_DO_NOT_USE",E=function(t,r){var l,B=t.prefixCls,$=t.bordered,pe=$===void 0?!0:$,le=t.className,X=t.getPopupContainer,V=t.dropdownClassName,Y=t.popupClassName,j=t.listHeight,oe=j===void 0?256:j,w=t.placement,S=t.listItemHeight,_e=S===void 0?24:S,J=t.size,se=t.disabled,F=t.notFoundContent,ie=t.status,N=t.showArrow,A=y(t,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),T=u.useContext(W.E_),ue=T.getPopupContainer,G=T.getPrefixCls,z=T.renderEmpty,K=T.direction,de=T.virtual,q=T.dropdownMatchSelectWidth,ee=u.useContext(f.Z),P=G("select",B),me=G(),L=u.useMemo(function(){var re=A.mode;if(re!=="combobox")return re===b?"combobox":re},[A.mode]),te=L==="multiple"||L==="tags",ae=N!==void 0?N:A.loading||!(te||L==="combobox"),s=(0,u.useContext)(x.aM),O=s.status,o=s.hasFeedback,p=s.isFormItemInput,R=s.feedbackIcon,Q=(0,n.F)(O,ie),Z;F!==void 0?Z=F:L==="combobox"?Z=null:Z=(z||M.Z)("Select");var H=(0,g.Z)((0,c.Z)((0,c.Z)({},A),{multiple:te,hasFeedback:o,feedbackIcon:R,showArrow:ae,prefixCls:P})),ce=H.suffixIcon,Ee=H.itemIcon,ne=H.removeIcon,ve=H.clearIcon,ge=(0,h.Z)(A,["suffixIcon","itemIcon"]),Pe=D()(Y||V,(0,i.Z)({},"".concat(P,"-dropdown-").concat(K),K==="rtl")),fe=J||ee,Oe=u.useContext(d.Z),De=se||Oe,he=D()((l={},(0,i.Z)(l,"".concat(P,"-lg"),fe==="large"),(0,i.Z)(l,"".concat(P,"-sm"),fe==="small"),(0,i.Z)(l,"".concat(P,"-rtl"),K==="rtl"),(0,i.Z)(l,"".concat(P,"-borderless"),!pe),(0,i.Z)(l,"".concat(P,"-in-form-item"),p),l),(0,n.Z)(P,Q,o),le),Me=function(){return w!==void 0?w:K==="rtl"?"bottomRight":"bottomLeft"};return u.createElement(a.ZP,(0,c.Z)({ref:r,virtual:de,dropdownMatchSelectWidth:q},ge,{transitionName:(0,C.mL)(me,(0,C.q0)(w),A.transitionName),listHeight:oe,listItemHeight:_e,mode:L,prefixCls:P,placement:Me(),direction:K,inputIcon:ce,menuItemSelectedIcon:Ee,removeIcon:ne,clearIcon:ve,notFoundContent:Z,className:he,getPopupContainer:X||ue,dropdownClassName:Pe,showArrow:o||N,disabled:De}))},k=u.forwardRef(E);k.SECRET_COMBOBOX_MODE_DO_NOT_USE=b,k.Option=a.Wx,k.OptGroup=a.Xo,m.Z=k},71129:function(){}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[1717],{73445:function(z,c,e){"use strict";var m=e(68181),h=(0,m.Z)({scriptUrl:["//at.alicdn.com/t/font_3354854_ds8pa06q1qa.js"]});c.Z=h},58910:function(z,c,e){"use strict";e.r(c),e.d(c,{default:function(){return me}});var m=e(63796),h=e(64690),F=e(62786),De=e(39485),I=e(20571),Ne=e(67252),H=e(36469),Pe=e(53178),X=e(40441),p=e(72912),Re=e(73742),L=e(84263),g=e(42273),s=e(12924),t=e.n(s),Y=e(17844),k=e(59060),D=e(71571),w=e(52902),i=e(73445),b={route:{routes:[{name:"\u767B\u5F55",path:"/login",hideInMenu:!0,component:"@/pages/login/index"},{name:"\u521D\u59CB\u5316",path:"/initialization",hideInMenu:!0,component:"@/pages/initialization/index"},{name:"\u9519\u8BEF",path:"/error",hideInMenu:!0,component:"@/pages/error/index"},{path:"/crontab",name:"\u5B9A\u65F6\u4EFB\u52A1",icon:t().createElement(i.Z,{type:"ql-icon-crontab"}),component:"@/pages/crontab/index"},{path:"/subscription",name:"\u8BA2\u9605\u7BA1\u7406",icon:t().createElement(i.Z,{type:"ql-icon-subs"}),component:"@/pages/subscription/index"},{path:"/env",name:"\u73AF\u5883\u53D8\u91CF",icon:t().createElement(i.Z,{type:"ql-icon-env"}),component:"@/pages/env/index"},{path:"/config",name:"\u914D\u7F6E\u6587\u4EF6",icon:t().createElement(i.Z,{type:"ql-icon-config"}),component:"@/pages/config/index"},{path:"/script",name:"\u811A\u672C\u7BA1\u7406",icon:t().createElement(i.Z,{type:"ql-icon-script"}),component:"@/pages/script/index"},{path:"/dependence",name:"\u4F9D\u8D56\u7BA1\u7406",icon:t().createElement(i.Z,{type:"ql-icon-dependence"}),component:"@/pages/dependence/index"},{path:"/diff",name:"\u5BF9\u6BD4\u5DE5\u5177",icon:t().createElement(i.Z,{type:"ql-icon-diff"}),component:"@/pages/diff/index"},{path:"/log",name:"\u4EFB\u52A1\u65E5\u5FD7",icon:t().createElement(i.Z,{type:"ql-icon-log"}),component:"@/pages/log/index"},{path:"/setting",name:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:t().createElement(w.Z,null),component:"@/pages/password/index"}]},navTheme:"light",fixSiderbar:!0,contentWidth:"Fixed",splitMenus:!1,siderWidth:180},E=e(19250),q=e(43430),_=e(56668),N=e(96249),ee=e(67390),te=e(14196),d=e(27077),C=e(6098),ne=e(86563),ae=e.n(ne),x=e(32672),P=e(80278),oe=e(78078),re=e.n(oe),se=e(52916),le=e(39893),ie=e(59447),ue=e(78383),ce=e(1858);function de(){ie.S({dsn:"https://3406424fb1dc4813a62d39e844a9d0ac@o1098464.ingest.sentry.io/6122818",integrations:[new ue.jK.gE({shouldCreateSpanForRequest(a){return!a.includes("/api/ws")&&!a.includes("/api/static")}})],release:x.i8,tracesSampleRate:.1,beforeBreadcrumb(a,v){if(a.data&&a.data.url){var S=a.data.url.replace(/token=.*/,"");a.data.url=S}return a}}),ce._m.config({paths:{vs:"https://cdn.staticfile.org/monaco-editor/0.33.0/min/vs"},"vs/nls":{availableLanguages:{"*":"zh-cn"}}})}function me(a){var v=(0,P.e)(),S=(0,P.F)(),y=S.theme,R=S.reloadTheme,ge=(0,s.useState)({}),U=(0,g.Z)(ge,2),l=U[0],ve=U[1],fe=(0,s.useState)(!0),O=(0,g.Z)(fe,2),T=O[0],A=O[1],he=(0,s.useState)(),W=(0,g.Z)(he,2),u=W[0],pe=W[1],Z=(0,s.useRef)(null),Ee=(0,s.useState)(),K=(0,g.Z)(Ee,2),Se=K[0],ye=K[1],Ze=(0,s.useState)(!1),j=(0,g.Z)(Ze,2),Fe=j[0],Q=j[1],f=D||{},Ce=f.enable,$=f.disable,Ue=f.exportGeneratedCSS,xe=f.setFetchMethod,Ae=f.auto,Me=()=>{C.W.post("".concat(d.Z.apiPrefix,"user/logout")).then(()=>{localStorage.removeItem(d.Z.authKey),E.m.push("/login")})},Be=()=>{C.W.get("".concat(d.Z.apiPrefix,"system")).then(n=>{var o=n.code,r=n.data;o===200?(pe(r),r.isInitialized?M():(E.m.push("/initialization"),A(!1))):L.ZP.error(r)}).catch(n=>{console.log(n)})},M=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;o&&A(!0),C.W.get("".concat(d.Z.apiPrefix,"user")).then(r=>{var V=r.code,B=r.data;V===200&&B.username?(ve(B),a.location.pathname==="/"&&E.m.push("/crontab")):L.ZP.error(B),o&&A(!1)}).catch(r=>{console.log(r)})},G=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;M(o)};if((0,s.useEffect)(()=>{u&&u.isInitialized&&!l&&M()},[a.location.pathname]),(0,s.useEffect)(()=>{u||Be()},[u]),(0,s.useEffect)(()=>{y==="vs-dark"?document.body.setAttribute("data-dark","true"):document.body.setAttribute("data-dark","false")},[y]),(0,s.useEffect)(()=>{ae()(),de();var n=localStorage.getItem("qinglong_dark_theme")||"auto";if(typeof window!="undefined"&&typeof window.matchMedia!="undefined")return D?(xe(fetch),n==="dark"?Ce({}):n==="light"?$():Ae({}),()=>{$()}):()=>null},[]),(0,s.useEffect)(()=>{if(!!l){Z.current=new(re())("".concat(location.origin,"/api/ws?token=").concat(localStorage.getItem(d.Z.authKey))),Z.current.onmessage=o=>{try{var r=JSON.parse(o.data);r.type==="ping"&&(r&&r.message==="hanhh"?console.log("websocket\u8FDE\u63A5\u6210\u529F",o):console.log("websocket\u8FDE\u63A5\u5931\u8D25",o)),ye(r)}catch(V){console.log("websocket\u8FDE\u63A5\u5931\u8D25",o)}};var n=Z.current;return()=>{n.close()}}},[l]),(0,s.useEffect)(()=>{window.onload=()=>{var n=performance.timing;console.log("\u767D\u5C4F\u65F6\u95F4: ".concat(n.responseStart-n.navigationStart)),console.log("\u8BF7\u6C42\u5B8C\u6BD5\u81F3DOM\u52A0\u8F7D: ".concat(n.domInteractive-n.responseEnd)),console.log("\u89E3\u91CAdom\u6811\u8017\u65F6: ".concat(n.domComplete-n.domInteractive)),console.log("\u4ECE\u5F00\u59CB\u81F3load\u603B\u8017\u65F6: ".concat(n.loadEventEnd-n.navigationStart)),se.uT("\u767D\u5C4F\u65F6\u95F4 ".concat(n.responseStart-n.navigationStart))}},[]),["/login","/initialization","/error"].includes(a.location.pathname)&&(document.title="".concat(d.Z.documentTitleMap[a.location.pathname]," - \u63A7\u5236\u9762\u677F"),u!=null&&u.isInitialized&&a.location.pathname==="/initialization"&&E.m.push("/crontab"),u||a.location.pathname==="/error"))return t().Children.map(a.children,n=>t().cloneElement(n,(0,p.Z)((0,p.Z)({},v),{},{theme:y,user:l,reloadUser:G,reloadTheme:R,ws:Z.current})));var ze=navigator.userAgent.includes("Firefox"),Ie=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),Le=navigator.userAgent.includes("QQBrowser"),J=t().createElement(X.Z,{className:"side-menu-user-drop-menu",items:[{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:t().createElement(_.Z,null)}],onClick:Me});return T?t().createElement(k.Z,null):t().createElement(Y.ZP,(0,m.Z)({selectedKeys:[a.location.pathname],loading:T,ErrorBoundary:le.SV,logo:t().createElement(H.Z,{preview:!1,src:"http://qn.whyour.cn/logo.png"}),title:t().createElement(t().Fragment,null,t().createElement("span",{style:{fontSize:16}},"\u63A7\u5236\u9762\u677F"),t().createElement("a",{href:x.N$,target:"_blank",rel:"noopener noreferrer",onClick:n=>{n.stopPropagation()}},t().createElement("span",{style:{fontSize:ze?9:12,color:"#666",marginLeft:2,zoom:Ie?.66:.8,letterSpacing:Le?-2:0}},"v",x.i8))),menuItemRender:(n,o)=>n.isUrl||!n.path||location.pathname===n.path?o:t().createElement(q.rU,{to:n.path},o),pageTitleRender:(n,o,r)=>r&&typeof r.pageName=="string"?"".concat(r.pageName," - \u63A7\u5236\u9762\u677F"):"\u63A7\u5236\u9762\u677F",onCollapse:Q,collapsed:Fe,rightContentRender:()=>v.isPhone&&t().createElement(F.Z,{overlay:J,placement:"bottomRight",trigger:["click"]},t().createElement("span",{className:"side-menu-user-wrapper"},t().createElement(I.C,{shape:"square",size:"small",icon:t().createElement(N.Z,null),src:l.avatar?"/api/static/".concat(l.avatar):""}),t().createElement("span",{style:{marginLeft:5}},l.username))),collapsedButtonRender:n=>t().createElement("span",{className:"side-menu-container",onClick:o=>{o.preventDefault(),o.stopPropagation()}},!n&&!v.isPhone&&t().createElement(F.Z,{overlay:J,placement:"topLeft",trigger:["hover"]},t().createElement("span",{className:"side-menu-user-wrapper"},t().createElement(I.C,{shape:"square",size:"small",icon:t().createElement(N.Z,null),src:l.avatar?"/api/static/".concat(l.avatar):""}),t().createElement("span",{style:{marginLeft:5}},l.username))),t().createElement("span",{className:"side-menu-collapse-button",onClick:()=>Q(!n)},n?t().createElement(ee.Z,null):t().createElement(te.Z,null)))},b),t().Children.map(a.children,n=>t().cloneElement(n,(0,p.Z)((0,p.Z)({},v),{},{theme:y,user:l,reloadUser:G,reloadTheme:R,socketMessage:Se}))))}},32672:function(z,c,e){"use strict";e.d(c,{i8:function(){return m},N$:function(){return h}});var m="2.14.1",h="https://t.me/jiao_long/326",F=`2.14.1 \u7248\u672C\u8BF4\u660E
1. \u4FEE\u590D\u5B9A\u65F6\u4EFB\u52A1\u641C\u7D22
2. \u4FEE\u590D\u89C6\u56FE\u5207\u6362\u9ED8\u8BA4\u9875\u7801
3. \u589E\u52A0\u7FA4\u8F89chat\u901A\u77E5\u65B9\u5F0F\uFF0C\u611F\u8C22 https://github.com/Appoip
`}}]);
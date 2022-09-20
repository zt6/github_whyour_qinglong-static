"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[349],{35382:function(re,W,e){e.d(W,{Z:function(){return i}});var E=e(79105),v=e(63313),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},P=V,K=e(17980),p=function(O,F){return v.createElement(K.Z,(0,E.Z)((0,E.Z)({},O),{},{ref:F,icon:P}))};p.displayName="MinusCircleOutlined";var i=v.forwardRef(p)},54064:function(re,W,e){e.d(W,{Z:function(){return i}});var E=e(79105),v=e(63313),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},P=V,K=e(17980),p=function(O,F){return v.createElement(K.Z,(0,E.Z)((0,E.Z)({},O),{},{ref:F,icon:P}))};p.displayName="PlusOutlined";var i=v.forwardRef(p)},72945:function(re,W,e){e.r(W);var E=e(94434),v=e.n(E),V=e(30279),P=e.n(V),K=e(46686),p=e.n(K),i=e(44463),m=e.n(i),O=e(63313),F=e.n(O),ee=e(6946),Q=e(18254),ne=e(26591),te=e(97325),H=e(80743),oe=e(74309),l=e(46669),r=e(51970),_=e(98505),n=e(26099),c=e(39449),o=e(12456),t=e(90527),s=e(40744),g=e(66255),Z=e(18253),a=e(11527),I=["index","moveRow","className","style"],L=ee.Z.Text,C="DragableBodyRow",X=function(u){var D=u.index,M=u.moveRow,S=u.className,h=u.style,k=m()(u,I),A=(0,O.useRef)(),B=(0,o.L)({accept:C,collect:function(x){var T=x.getItem()||{},J=T.index;return J===D?{}:{isOver:x.isOver(),dropClassName:J<D?" drop-over-downward":" drop-over-upward"}},drop:function(x){M(x.index,D)}}),y=p()(B,2),N=y[0],d=N.isOver,U=N.dropClassName,z=y[1],Y=(0,t.c)({type:C,item:{index:D},collect:function(x){return{isDragging:x.isDragging()}}}),q=p()(Y,2),ae=q[1];return z(ae(A)),(0,a.jsx)("tr",P()({ref:A,className:"".concat(S).concat(d?U:""),style:P()({cursor:"move"},h)},k))},$=function(u){var D=u.cronViews,M=u.handleCancel,S=u.visible,h=u.cronViewChange,k=[{title:"\u540D\u79F0",dataIndex:"name",key:"name",align:"center"},{title:"\u663E\u793A",key:"isDisabled",dataIndex:"isDisabled",align:"center",width:100,render:function(f,R,b){return(0,a.jsx)(Q.Z,{checked:!R.isDisabled,onChange:function(ie){return se(ie,R,b)}})}},{title:"\u64CD\u4F5C",key:"action",width:140,align:"center",render:function(f,R,b){return(0,a.jsxs)(ne.Z,{size:"middle",children:[(0,a.jsx)("a",{onClick:function(){return T(R,b)},children:(0,a.jsx)(n.Z,{})}),(0,a.jsx)("a",{onClick:function(){return J(R,b)},children:(0,a.jsx)(c.Z,{})})]})}}],A=(0,O.useState)([]),B=p()(A,2),y=B[0],N=B[1],d=(0,O.useState)(!1),U=p()(d,2),z=U[0],Y=U[1],q=(0,O.useState)(null),ae=p()(q,2),le=ae[0],x=ae[1],T=function(f,R){x(f),Y(!0)},J=function(f,R){te.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:(0,a.jsxs)(a.Fragment,{children:["\u786E\u8BA4\u5220\u9664\u89C6\u56FE"," ",(0,a.jsx)(L,{style:{wordBreak:"break-all"},type:"warning",children:f.name})," ","\u5417"]}),onOk:function(){r.W.delete("".concat(_.Z.apiPrefix,"crons/views"),{data:[f.id]}).then(function(j){j.code===200?(H.ZP.success("\u5220\u9664\u6210\u529F"),h()):H.ZP.error(j)})},onCancel:function(){console.log("Cancel")}})},se=function(f,R,b){console.log(f),r.W.put("".concat(_.Z.apiPrefix,"crons/views/").concat(f?"enable":"disable"),{data:[R.id]}).then(function(j){if(j.code===200){var ie=v()(y);ie.splice(b,1,P()(P()({},y[b]),{},{isDisabled:!f})),N(ie),h()}else H.ZP.error(j)})},de={body:{row:X}},ce=(0,O.useCallback)(function(w,f){if(w!==f){var R=y[w];r.W.put("".concat(_.Z.apiPrefix,"crons/views/move"),{data:{fromIndex:w,toIndex:f,id:R.id}}).then(function(b){if(b.code===200){var j=v()(y);j.splice(w,1),j.splice(f,0,P()(P()({},R),b.data)),N(j),h()}else H.ZP.error(b)})}},[y]);return(0,O.useEffect)(function(){N(D)},[D]),(0,a.jsxs)(te.Z,{title:"\u89C6\u56FE\u7BA1\u7406",open:S,centered:!0,width:620,onCancel:function(){return M()},className:"view-manage-modal",forceRender:!0,footer:!1,maskClosable:!1,children:[(0,a.jsx)(ne.Z,{style:{display:"flex",justifyContent:"flex-end",marginBottom:10},children:(0,a.jsx)(oe.Z,{type:"primary",onClick:function(){x(null),Y(!0)},children:"\u65B0\u5EFA\u89C6\u56FE"},"2")}),(0,a.jsx)(s.W,{backend:g.PD,children:(0,a.jsx)(l.Z,{bordered:!0,columns:k,pagination:!1,dataSource:y,rowKey:"id",size:"middle",style:{marginBottom:20},components:de,onRow:function(f,R){return{index:R,moveRow:ce}}})}),(0,a.jsx)(Z.default,{view:le,visible:z,handleCancel:function(f){Y(!1),h(f)}})]})};W.default=$},26591:function(re,W,e){e.d(W,{u:function(){return Q},Z:function(){return oe}});var E=e(96600),v=e(47220),V=e(35931),P=e(84875),K=e.n(P),p=e(84525),i=e(63313),m=e(71010),O=e(3337);function F(l){var r=l.className,_=l.direction,n=l.index,c=l.marginDirection,o=l.children,t=l.split,s=l.wrap,g=i.useContext(Q),Z=g.horizontalSize,a=g.verticalSize,I=g.latestIndex,L=g.supportFlexGap,C={};return L||(_==="vertical"?n<I&&(C={marginBottom:Z/(t?2:1)}):C=(0,E.Z)((0,E.Z)({},n<I&&(0,v.Z)({},c,Z/(t?2:1))),s&&{paddingBottom:a})),o==null?null:i.createElement(i.Fragment,null,i.createElement("div",{className:r,style:C},o),n<I&&t&&i.createElement("span",{className:"".concat(r,"-split"),style:C},t))}var ee=function(l,r){var _={};for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&r.indexOf(n)<0&&(_[n]=l[n]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(l);c<n.length;c++)r.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(l,n[c])&&(_[n[c]]=l[n[c]]);return _},Q=i.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),ne={small:8,middle:16,large:24};function te(l){return typeof l=="string"?ne[l]:l||0}var H=function(r){var _,n=i.useContext(m.E_),c=n.getPrefixCls,o=n.space,t=n.direction,s=r.size,g=s===void 0?(o==null?void 0:o.size)||"small":s,Z=r.align,a=r.className,I=r.children,L=r.direction,C=L===void 0?"horizontal":L,X=r.prefixCls,$=r.split,G=r.style,u=r.wrap,D=u===void 0?!1:u,M=ee(r,["size","align","className","children","direction","prefixCls","split","style","wrap"]),S=(0,O.Z)(),h=i.useMemo(function(){return(Array.isArray(g)?g:[g,g]).map(function(T){return te(T)})},[g]),k=(0,V.Z)(h,2),A=k[0],B=k[1],y=(0,p.Z)(I,{keepEmpty:!0}),N=Z===void 0&&C==="horizontal"?"center":Z,d=c("space",X),U=K()(d,"".concat(d,"-").concat(C),(_={},(0,v.Z)(_,"".concat(d,"-rtl"),t==="rtl"),(0,v.Z)(_,"".concat(d,"-align-").concat(N),N),_),a),z="".concat(d,"-item"),Y=t==="rtl"?"marginLeft":"marginRight",q=0,ae=y.map(function(T,J){T!=null&&(q=J);var se=T&&T.key||"".concat(z,"-").concat(J);return i.createElement(F,{className:z,key:se,direction:C,index:J,marginDirection:Y,split:$,wrap:D},T)}),le=i.useMemo(function(){return{horizontalSize:A,verticalSize:B,latestIndex:q,supportFlexGap:S}},[A,B,q,S]);if(y.length===0)return null;var x={};return D&&(x.flexWrap="wrap",S||(x.marginBottom=-B)),S&&(x.columnGap=A,x.rowGap=B),i.createElement("div",(0,E.Z)({className:U,style:(0,E.Z)((0,E.Z)({},x),G)},M),i.createElement(Q.Provider,{value:le},ae))},oe=H},18254:function(re,W,e){e.d(W,{Z:function(){return _}});var E=e(96600),v=e(47220),V=e(81690),P=e(84875),K=e.n(P),p=e(35931),i=e(99377),m=e(63313),O=e(13336),F=e(22899),ee=m.forwardRef(function(n,c){var o,t=n.prefixCls,s=t===void 0?"rc-switch":t,g=n.className,Z=n.checked,a=n.defaultChecked,I=n.disabled,L=n.loadingIcon,C=n.checkedChildren,X=n.unCheckedChildren,$=n.onClick,G=n.onChange,u=n.onKeyDown,D=(0,i.Z)(n,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),M=(0,O.Z)(!1,{value:Z,defaultValue:a}),S=(0,p.Z)(M,2),h=S[0],k=S[1];function A(d,U){var z=h;return I||(z=d,k(z),G==null||G(z,U)),z}function B(d){d.which===F.Z.LEFT?A(!1,d):d.which===F.Z.RIGHT&&A(!0,d),u==null||u(d)}function y(d){var U=A(!h,d);$==null||$(U,d)}var N=K()(s,g,(o={},(0,v.Z)(o,"".concat(s,"-checked"),h),(0,v.Z)(o,"".concat(s,"-disabled"),I),o));return m.createElement("button",Object.assign({},D,{type:"button",role:"switch","aria-checked":h,disabled:I,className:N,ref:c,onKeyDown:B,onClick:y}),L,m.createElement("span",{className:"".concat(s,"-inner")},h?C:X))});ee.displayName="Switch";var Q=ee,ne=e(71010),te=e(4874),H=e(59418),oe=e(84144),l=function(n,c){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&c.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)c.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(o[t[s]]=n[t[s]]);return o},r=m.forwardRef(function(n,c){var o,t=n.prefixCls,s=n.size,g=n.disabled,Z=n.loading,a=n.className,I=a===void 0?"":a,L=l(n,["prefixCls","size","disabled","loading","className"]),C=m.useContext(ne.E_),X=C.getPrefixCls,$=C.direction,G=m.useContext(H.Z),u=m.useContext(te.Z),D=g||u||Z,M=X("switch",t),S=m.createElement("div",{className:"".concat(M,"-handle")},Z&&m.createElement(V.Z,{className:"".concat(M,"-loading-icon")})),h=K()((o={},(0,v.Z)(o,"".concat(M,"-small"),(s||G)==="small"),(0,v.Z)(o,"".concat(M,"-loading"),Z),(0,v.Z)(o,"".concat(M,"-rtl"),$==="rtl"),o),I);return m.createElement(oe.Z,{insertExtraNode:!0},m.createElement(Q,(0,E.Z)({},L,{prefixCls:M,className:h,disabled:D,ref:c,loadingIcon:S})))});r.__ANT_SWITCH=!0;var _=r}}]);

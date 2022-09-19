"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61774],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),p=n(7094),u=n(12466),c="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,k=e.values,f=e.groupId,h=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:N[0].props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,p.U)(),P=y.tabGroupChoices,T=y.setTabGroupChoices,C=(0,r.useState)(g),I=C[0],A=C[1],R=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=P[f];null!=O&&O!==I&&v.some((function(e){return e.value===O}))&&A(O)}var w=function(e){var t=e.currentTarget,n=R.indexOf(t),a=v[n].value;a!==I&&(E(t),A(a),null!=f&&T(f,String(a)))},U=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=R.indexOf(e.currentTarget)+1;n=null!=(a=R[r])?a:R[0];break;case"ArrowLeft":var l,i=R.indexOf(e.currentTarget)-1;n=null!=(l=R[i])?l:R[R.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return R.push(e)},onKeyDown:U,onFocus:w,onClick:w},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(N.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},91620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),p=["components"],u={title:"API",weight:24},c=void 0,s={unversionedId:"pages-for-subheaders/about-the-api",id:"pages-for-subheaders/about-the-api",title:"API",description:"\u5982\u4f55\u4f7f\u7528 API",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/about-the-api.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/about-the-api",permalink:"/zh/pages-for-subheaders/about-the-api",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/about-the-api.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"API",weight:24},sidebar:"tutorialSidebar",previous:{title:"kubectl \u5b9e\u7528\u7a0b\u5e8f",permalink:"/zh/reference-guides/cli-with-rancher/kubectl-utility"},next:{title:"API \u4ee4\u724c",permalink:"/zh/reference-guides/about-the-api/api-tokens"}},m={},d=[{value:"\u5982\u4f55\u4f7f\u7528 API",id:"\u5982\u4f55\u4f7f\u7528-api",level:2},{value:"\u8eab\u4efd\u9a8c\u8bc1",id:"\u8eab\u4efd\u9a8c\u8bc1",level:2},{value:"\u53d1\u51fa\u8bf7\u6c42",id:"\u53d1\u51fa\u8bf7\u6c42",level:2},{value:"\u8fc7\u6ee4",id:"\u8fc7\u6ee4",level:2},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:2},{value:"\u5206\u9875",id:"\u5206\u9875",level:2},{value:"\u6355\u83b7 Rancher API \u8c03\u7528",id:"\u6355\u83b7-rancher-api-\u8c03\u7528",level:2}],k={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-api"},"\u5982\u4f55\u4f7f\u7528 API"),(0,l.kt)("p",null,"API \u6709\u81ea\u5df1\u7684\u7528\u6237\u754c\u9762\uff0c\u4f60\u53ef\u4ee5\u4ece Web \u6d4f\u89c8\u5668\u8bbf\u95ee\u5b83\u3002\u8fd9\u662f\u67e5\u770b\u8d44\u6e90\u3001\u6267\u884c\u64cd\u4f5c\u4ee5\u53ca\u67e5\u770b\u7b49\u6548 cURL \u6216 HTTP \u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u6cd5\u3002\u8981\u8bbf\u95ee\u5b83\uff1a"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Rancher v2.6.4+",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684\u7528\u6237\u5934\u50cf\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u8d26\u53f7 & API \u5bc6\u94a5"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"API \u5bc6\u94a5"),"\u4e0b\uff0c\u627e\u5230 ",(0,l.kt)("strong",{parentName:"li"},"API \u7aef\u70b9"),"\u5b57\u6bb5\u5e76\u5355\u51fb\u94fe\u63a5\u3002\u8be5\u94fe\u63a5\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_FQDN>/v3"),"\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"<RANCHER_FQDN>")," \u662f Rancher deployment \u7684\u5b8c\u5168\u9650\u5b9a\u57df\u540d\u3002"))),(0,l.kt)(o.Z,{value:"Rancher v2.6.4 \u4e4b\u524d\u7684\u7248\u672c",mdxType:"TabItem"},(0,l.kt)("p",null,"\u8f6c\u5230\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"https://<RANCHER_FQDN>/v3")," \u7684 URL \u7aef\u70b9\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"<RANCHER_FQDN>")," \u662f\u4f60\u7684 Rancher deployment \u7684\u5b8c\u5168\u9650\u5b9a\u57df\u540d\u3002"))),(0,l.kt)("h2",{id:"\u8eab\u4efd\u9a8c\u8bc1"},"\u8eab\u4efd\u9a8c\u8bc1"),(0,l.kt)("p",null,"API \u8bf7\u6c42\u5fc5\u987b\u5305\u542b\u8eab\u4efd\u9a8c\u8bc1\u4fe1\u606f\u3002\u8eab\u4efd\u9a8c\u8bc1\u662f\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/user-settings/api-keys"},"API \u5bc6\u94a5"),"\u4f7f\u7528 HTTP \u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u5b8c\u6210\u7684\u3002API \u5bc6\u94a5\u53ef\u4ee5\u521b\u5efa\u65b0\u96c6\u7fa4\u5e76\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"/v3/clusters/")," \u8bbf\u95ee\u591a\u4e2a\u96c6\u7fa4\u3002",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272"),"\u4f1a\u5e94\u7528\u4e8e\u8fd9\u4e9b\u952e\uff0c\u5e76\u9650\u5236\u8d26\u53f7\u53ef\u4ee5\u67e5\u770b\u7684\u96c6\u7fa4\u548c\u9879\u76ee\u4ee5\u53ca\u53ef\u4ee5\u6267\u884c\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u67d0\u4e9b\u96c6\u7fa4\u7ea7\u522b\u7684 API \u4ee4\u724c\u662f\u4f7f\u7528\u65e0\u9650\u671f TTL\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"ttl=0"),"\uff09\u751f\u6210\u7684\u3002\u6362\u8a00\u4e4b\uff0c\u9664\u975e\u4f60\u8ba9\u4ee4\u724c\u5931\u6548\uff0c\u5426\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"},"ttl=0")," \u7684 API \u4ee4\u724c\u6c38\u8fdc\u4e0d\u4f1a\u8fc7\u671f\u3002\u6709\u5173\u5982\u4f55\u4f7f API \u4ee4\u724c\u5931\u6548\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/about-the-api/api-tokens"},"API \u4ee4\u724c"),"\u3002"),(0,l.kt)("h2",{id:"\u53d1\u51fa\u8bf7\u6c42"},"\u53d1\u51fa\u8bf7\u6c42"),(0,l.kt)("p",null,"\u8be5 API \u901a\u5e38\u662f RESTful \u7684\uff0c\u4f46\u662f\u8fd8\u5177\u6709\u591a\u79cd\u529f\u80fd\u3002\u8fd9\u4e9b\u529f\u80fd\u53ef\u4ee5\u4f7f\u5ba2\u6237\u7aef\u53d1\u73b0\u6240\u6709\u5185\u5bb9\uff0c\u56e0\u6b64\u53ef\u4ee5\u7f16\u5199\u901a\u7528\u5ba2\u6237\u7aef\uff0c\u800c\u4e0d\u5fc5\u4e3a\u6bcf\u79cd\u8d44\u6e90\u7f16\u5199\u7279\u5b9a\u4ee3\u7801\u3002\u6709\u5173\u901a\u7528 API \u89c4\u8303\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md"},"\u6b64\u5904"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u79cd\u7c7b\u578b\u90fd\u6709\u4e00\u4e2a Schema\uff0c\u8fd9\u4e2a Schema \u63cf\u8ff0\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u6b64\u7c7b\u8d44\u6e90\u96c6\u5408\u7684 URL"),(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u53ef\u4ee5\u5177\u6709\u7684\u6bcf\u4e2a\u5b57\u6bb5\u53ca\u5176\u7c7b\u578b\u3001\u57fa\u672c\u9a8c\u8bc1\u89c4\u5219\u3001\u662f\u5fc5\u586b\u8fd8\u662f\u53ef\u9009\u5b57\u6bb5\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6b64\u7c7b\u8d44\u6e90\u4e0a\u53ef\u4ee5\u6267\u884c\u7684\u6bcf\u4e2a\u64cd\u4f5c\uff0c\u4ee5\u53ca\u5b83\u4eec\u7684\u8f93\u5165\u548c\u8f93\u51fa\uff08\u4e5f\u4f5c\u4e3a schema\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u8fc7\u6ee4\u7684\u6bcf\u4e2a\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u5408\u672c\u8eab\u6216\u96c6\u5408\u4e2d\u7684\u5355\u4e2a\u8d44\u6e90\u53ef\u4ee5\u4f7f\u7528\u7684 HTTP \u64cd\u4f5c\u65b9\u6cd5")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u53ea\u52a0\u8f7d schema \u5217\u8868\u5e76\u4e86\u89e3 API \u7684\u6240\u6709\u4fe1\u606f\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u662f API \u7684 UI \u5de5\u4f5c\u65b9\u5f0f\uff0c\u5b83\u4e0d\u5305\u542b\u7279\u5b9a\u4e8e Rancher \u672c\u8eab\u7684\u4ee3\u7801\u3002\u6bcf\u4e2a HTTP \u54cd\u5e94\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Api-Schemas")," \u6807\u5934\u90fd\u4f1a\u53d1\u9001\u83b7\u53d6 Schemas \u7684 URL\u3002\u4f60\u53ef\u4ee5\u6309\u7167\u6bcf\u4e2a schema \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"collection")," \u94fe\u63a5\u4e86\u89e3\u8981\u5728\u54ea\u91cc\u5217\u51fa\u8d44\u6e90\uff0c\u5e76\u5728\u8fd4\u56de\u8d44\u6e90\u4e2d\u7684\u5176\u4ed6 ",(0,l.kt)("inlineCode",{parentName:"p"},"links")," \u4e2d\u83b7\u53d6\u5176\u4ed6\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5b9e\u8df5\u4e2d\uff0c\u4f60\u53ef\u80fd\u53ea\u60f3\u6784\u9020 URL \u5b57\u7b26\u4e32\u3002\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u5c06\u6b64\u9650\u5236\u4e3a\u5728\u9876\u5c42\u5217\u51fa\u7684\u96c6\u5408 (",(0,l.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),")\uff0c\u6216\u83b7\u53d6\u7279\u5b9a\u8d44\u6e90 (",(0,l.kt)("inlineCode",{parentName:"p"},"/v3/<type>/<id>"),")\u3002\u9664\u6b64\u4e4b\u5916\u7684\u4efb\u4f55\u5185\u5bb9\u90fd\u53ef\u80fd\u5728\u5c06\u6765\u7684\u7248\u672c\u4e2d\u53d1\u751f\u66f4\u6539\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8d44\u6e90\u4e4b\u95f4\u76f8\u4e92\u4e4b\u95f4\u6709\u8054\u7cfb\uff0c\u79f0\u4e3a\u94fe\u63a5\uff08links\uff09\u3002\u6bcf\u4e2a\u8d44\u6e90\u90fd\u5305\u542b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"links")," \u6620\u5c04\uff0c\u5176\u4e2d\u5305\u542b\u94fe\u63a5\u540d\u79f0\u548c\u7528\u4e8e\u68c0\u7d22\u8be5\u4fe1\u606f\u7684 URL\u3002\u540c\u6837\uff0c\u4f60\u5e94\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," \u8d44\u6e90\u5e76\u9075\u5faa ",(0,l.kt)("inlineCode",{parentName:"p"},"links")," \u6620\u5c04\u4e2d\u7684 URL\uff0c\u800c\u4e0d\u662f\u81ea\u5df1\u6784\u9020\u8fd9\u4e9b\u5b57\u7b26\u4e32\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5927\u591a\u6570\u8d44\u6e90\u90fd\u6709\u64cd\u4f5c\uff08action\uff09\uff0c\u8868\u793a\u53ef\u4ee5\u6267\u884c\u67d0\u4e2a\u64cd\u4f5c\u6216\u6539\u53d8\u8d44\u6e90\u7684\u72b6\u6001\u3002\u8981\u4f7f\u7528\u64cd\u4f5c\uff0c\u8bf7\u5c06 HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," \u8bf7\u6c42\u53d1\u9001\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"actions")," \u6620\u5c04\u4e2d\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\u7684 URL\u3002\u67d0\u4e9b\u64cd\u4f5c\u9700\u8981\u8f93\u5165\u6216\u751f\u6210\u8f93\u51fa\uff0c\u8bf7\u53c2\u9605\u6bcf\u79cd\u7c7b\u578b\u7684\u72ec\u7acb\u6587\u6863\u6216 schema \u4ee5\u83b7\u53d6\u5177\u4f53\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8981\u7f16\u8f91\u8d44\u6e90\uff0c\u8bf7\u5c06 HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," \u8bf7\u6c42\u53d1\u9001\u5230\u8d44\u6e90\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"links.update")," \u94fe\u63a5\uff0c\u5176\u4e2d\u5305\u542b\u8981\u66f4\u6539\u7684\u5b57\u6bb5\u3002\u5982\u679c\u94fe\u63a5\u4e22\u5931\uff0c\u5219\u4f60\u65e0\u6743\u66f4\u65b0\u8d44\u6e90\u3002\u672a\u77e5\u5b57\u6bb5\u548c\u4e0d\u53ef\u7f16\u8f91\u7684\u5b57\u6bb5\u5c06\u88ab\u5ffd\u7565\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8981\u5220\u9664\u8d44\u6e90\uff0c\u8bf7\u5c06 HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE")," \u8bf7\u6c42\u53d1\u9001\u5230\u8d44\u6e90\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"links.remove")," \u94fe\u63a5\u3002\u5982\u679c\u94fe\u63a5\u4e22\u5931\uff0c\u5219\u4f60\u65e0\u6743\u66f4\u65b0\u8d44\u6e90\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8981\u521b\u5efa\u65b0\u8d44\u6e90\uff0cHTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," \u5230 schema\uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),"\uff09\u4e2d\u7684\u96c6\u5408 URL\u3002"))),(0,l.kt)("h2",{id:"\u8fc7\u6ee4"},"\u8fc7\u6ee4"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 HTTP \u67e5\u8be2\u53c2\u6570\u7684\u516c\u5171\u5b57\u6bb5\u5728\u670d\u52a1\u5668\u7aef\u8fc7\u6ee4\u5927\u591a\u6570\u96c6\u5408\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"filters"),' \u6620\u5c04\u663e\u793a\u4e86\u53ef\u4ee5\u8fc7\u6ee4\u7684\u5b57\u6bb5\uff0c\u4ee5\u53ca\u8fc7\u6ee4\u540e\u7684\u503c\u5728\u4f60\u53d1\u8d77\u7684\u8bf7\u6c42\u4e2d\u662f\u4ec0\u4e48\u3002API UI \u5177\u6709\u8bbe\u7f6e\u8fc7\u6ee4\u548c\u663e\u793a\u9002\u5f53\u8bf7\u6c42\u7684\u63a7\u4ef6\u3002\u5bf9\u4e8e\u7b80\u5355\u7684 "equals" \u5339\u914d\uff0c\u5b83\u53ea\u662f ',(0,l.kt)("inlineCode",{parentName:"p"},"field=value"),"\u3002\u4f60\u53ef\u4ee5\u5c06\u4fee\u9970\u7b26\u6dfb\u52a0\u5230\u5b57\u6bb5\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"field_gt=42")," \u8868\u793a\u201c\u5b57\u6bb5\u5927\u4e8e 42\u201d\u3002\u8be6\u60c5\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md#filtering"},"API \u89c4\u8303"),"\u3002"),(0,l.kt)("h2",{id:"\u6392\u5e8f"},"\u6392\u5e8f"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 HTTP \u67e5\u8be2\u53c2\u6570\u7684\u516c\u5171\u5b57\u6bb5\u5728\u670d\u52a1\u5668\u7aef\u6392\u5e8f\u5927\u591a\u6570\u96c6\u5408\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"sortLinks")," \u6620\u5c04\u663e\u793a\u4e86\u53ef\u7528\u7684\u6392\u5e8f\uff0c\u4ee5\u53ca\u7528\u4e8e\u83b7\u53d6\u9075\u5faa\u8be5\u6392\u5e8f\u7684\u96c6\u5408\u7684 URL\u3002\u5b83\u8fd8\u5305\u62ec\u5f53\u524d\u54cd\u6392\u5e8f\u4f9d\u636e\u7684\u4fe1\u606f\uff08\u5982\u679c\u6307\u5b9a\uff09\u3002"),(0,l.kt)("h2",{id:"\u5206\u9875"},"\u5206\u9875"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cAPI \u54cd\u5e94\u4ee5\u6bcf\u9875 100 \u4e2a\u8d44\u6e90\u7684\u9650\u5236\u8fdb\u884c\u5206\u9875\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit")," \u67e5\u8be2\u53c2\u6570\u8fdb\u884c\u66f4\u6539\uff0c\u6700\u5927\u4e3a 1000\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"/v3/pods?limit=1000"),"\u3002\u96c6\u5408\u54cd\u5e94\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"pagination")," \u6620\u5c04\u80fd\u8ba9\u4f60\u77e5\u9053\u4f60\u662f\u5426\u62e5\u6709\u5b8c\u6574\u7684\u7ed3\u679c\u96c6\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5219\u4f1a\u6307\u5411\u4e0b\u4e00\u9875\u7684\u94fe\u63a5\u3002"),(0,l.kt)("h2",{id:"\u6355\u83b7-rancher-api-\u8c03\u7528"},"\u6355\u83b7 Rancher API \u8c03\u7528"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u5f00\u53d1\u4eba\u5458\u5de5\u5177\u6765\u6355\u83b7 Rancher API \u7684\u8c03\u7528\u65b9\u5f0f\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4f7f\u7528 Chrome \u5f00\u53d1\u4eba\u5458\u5de5\u5177\u6765\u83b7\u53d6\u7528\u4e8e\u914d\u7f6e RKE \u96c6\u7fa4\u7684 API \u8c03\u7528\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 Rancher UI \u4e2d\uff0c\u8f6c\u5230",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u7ba1\u7406"),"\u5e76\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u67d0\u4e2a\u96c6\u7fa4\u7c7b\u578b\u3002\u6b64\u793a\u4f8b\u4f7f\u7528 Digital Ocean\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u96c6\u7fa4\u540d\u79f0\u548c\u8282\u70b9\u6a21\u677f\u586b\u5199\u8868\u5355\uff0c\u4f46\u4e0d\u8981\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u521b\u5efa\u96c6\u7fa4\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u6253\u5f00\u5f00\u53d1\u4eba\u5458\u5de5\u5177\u624d\u80fd\u770b\u5230\u6b63\u5728\u8bb0\u5f55\u7684 API \u8c03\u7528\u3002\u8981\u6253\u5f00\u5de5\u5177\uff0c\u53f3\u952e\u5355\u51fb Rancher UI\uff0c\u7136\u540e\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u68c0\u67e5"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Network")," \u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"Network")," \u9009\u9879\u5361\u4e0a\uff0c\u786e\u4fdd\u9009\u62e9\u4e86 ",(0,l.kt)("strong",{parentName:"li"},"Fetch/XHR"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 Rancher UI \u4e2d\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"cluster?_replace=true")," \u7684\u65b0\u7f51\u7edc\u8bf7\u6c42\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53f3\u952e\u5355\u51fb ",(0,l.kt)("inlineCode",{parentName:"li"},"cluster?_replace=true")," \u5e76\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u590d\u5236 > \u590d\u5236\u4e3a cURL"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u7ed3\u679c\u7c98\u8d34\u5230\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u3002\u4f60\u5c06\u80fd\u591f\u770b\u5230 POST \u8bf7\u6c42\uff0c\u5305\u62ec\u88ab\u53d1\u9001\u5230\u7684 URL\u3001\u6240\u6709\u6807\u5934\u4ee5\u53ca\u8bf7\u6c42\u7684\u5b8c\u6574\u6b63\u6587\u3002\u6b64\u547d\u4ee4\u53ef\u7528\u4e8e\u4ece\u547d\u4ee4\u884c\u521b\u5efa\u96c6\u7fa4\u3002\u8bf7\u6ce8\u610f\uff0c\u8bf7\u6c42\u5305\u542b\u51ed\u8bc1\uff0c\u56e0\u6b64\u8bf7\u5c06\u8bf7\u6c42\u5b58\u50a8\u5728\u5b89\u5168\u7684\u5730\u65b9\u3002")))}f.isMDXComponent=!0}}]);
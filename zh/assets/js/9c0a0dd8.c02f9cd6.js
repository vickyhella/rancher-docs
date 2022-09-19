"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[13161],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"\u4e3b\u673a\u9a71\u52a8",weight:2},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",title:"\u4e3b\u673a\u9a71\u52a8",description:"\u4e3b\u673a\u9a71\u52a8\u7528\u4e8e\u914d\u7f6e\u4e3b\u673a\uff0cRancher \u4f7f\u7528\u8fd9\u4e9b\u4e3b\u673a\u542f\u52a8\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002\u4e3b\u673a\u9a71\u52a8\u4e0e Docker Machine \u9a71\u52a8\u76f8\u540c\u3002\u521b\u5efa\u4e3b\u673a\u6a21\u677f\u65f6\u53ef\u4ee5\u663e\u793a\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u662f\u7531\u4e3b\u673a\u9a71\u52a8\u7684\u72b6\u6001\u5b9a\u4e49\u7684\u3002\u53ea\u6709 active \u4e3b\u673a\u9a71\u52a8\u5c06\u663e\u793a\u4e3a\u521b\u5efa\u8282\u70b9\u6a21\u677f\u7684\u9009\u9879\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4e0e\u8bb8\u591a\u73b0\u6709\u7684 Docker Machine \u9a71\u52a8\u6253\u5305\u5728\u4e00\u8d77\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8\u5e76\u6dfb\u52a0\u5230 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u4e3b\u673a\u9a71\u52a8",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u9a71\u52a8",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},next:{title:"RKE \u6a21\u677f",permalink:"/zh/pages-for-subheaders/about-rke1-templates"}},u={},d=[{value:"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8",id:"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8",level:4},{value:"\u6fc0\u6d3b/\u505c\u7528\u4e3b\u673a\u9a71\u52a8",id:"\u6fc0\u6d3b\u505c\u7528\u4e3b\u673a\u9a71\u52a8",level:2},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8",level:2},{value:"\u5f00\u53d1\u81ea\u5df1\u7684\u4e3b\u673a\u9a71\u52a8",id:"\u5f00\u53d1\u81ea\u5df1\u7684\u4e3b\u673a\u9a71\u52a8",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e3b\u673a\u9a71\u52a8\u7528\u4e8e\u914d\u7f6e\u4e3b\u673a\uff0cRancher \u4f7f\u7528\u8fd9\u4e9b\u4e3b\u673a\u542f\u52a8\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002\u4e3b\u673a\u9a71\u52a8\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/drivers/"},"Docker Machine \u9a71\u52a8"),"\u76f8\u540c\u3002\u521b\u5efa\u4e3b\u673a\u6a21\u677f\u65f6\u53ef\u4ee5\u663e\u793a\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u662f\u7531\u4e3b\u673a\u9a71\u52a8\u7684\u72b6\u6001\u5b9a\u4e49\u7684\u3002\u53ea\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," \u4e3b\u673a\u9a71\u52a8\u5c06\u663e\u793a\u4e3a\u521b\u5efa\u8282\u70b9\u6a21\u677f\u7684\u9009\u9879\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4e0e\u8bb8\u591a\u73b0\u6709\u7684 Docker Machine \u9a71\u52a8\u6253\u5305\u5728\u4e00\u8d77\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8\u5e76\u6dfb\u52a0\u5230 Rancher\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u5411\u7528\u6237\u663e\u793a\u7279\u5b9a\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u5219\u9700\u8981\u505c\u7528\u8fd9\u4e9b\u4e3b\u673a\u9a71\u52a8\u3002"),(0,i.kt)("h4",{id:"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8"},"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8981\u521b\u5efa\u3001\u7f16\u8f91\u6216\u5220\u9664\u9a71\u52a8\uff0c\u4f60\u9700\u8981\u4ee5\u4e0b\u6743\u9650\u4e2d\u7684",(0,i.kt)("em",{parentName:"p"},"\u4e00\u4e2a"),"\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u5458\u5168\u5c40\u6743\u9650")),(0,i.kt)("li",{parentName:"ul"},"\u5206\u914d\u4e86",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8\u89d2\u8272"),"\u7684",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%A8%E5%B1%80%E6%9D%83%E9%99%90"},"\u81ea\u5b9a\u4e49\u5168\u5c40\u6743\u9650"),"\u3002")))),(0,i.kt)("h2",{id:"\u6fc0\u6d3b\u505c\u7528\u4e3b\u673a\u9a71\u52a8"},"\u6fc0\u6d3b/\u505c\u7528\u4e3b\u673a\u9a71\u52a8"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4ec5\u6fc0\u6d3b\u4e3b\u6d41\u4e91\u63d0\u4f9b\u5546 Amazon EC2\u3001Azure\u3001DigitalOcean \u548c vSphere \u7684\u9a71\u52a8\u3002\u5982\u679c\u8981\u663e\u793a\u6216\u9690\u85cf\u9a71\u52a8\uff0c\u4f60\u53ef\u4ee5\u66f4\u6539\u9a71\u52a8\u7684\u72b6\u6001\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u9a71\u52a8"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u4e3b\u673a\u9a71\u52a8"),"\u9009\u9879\u5361\u4e0a\uff0c\u9009\u62e9\u8981\u6fc0\u6d3b\u6216\u505c\u7528\u7684\u9a71\u52a8\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > \u6fc0\u6d3b")," \u6216 ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > \u505c\u7528"),"\u3002"))),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 Rancher \u4e0d\u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u63d0\u4f9b\u5546\u7684\u9a71\u52a8\uff0c\u4ece\u800c\u4f7f\u7528\u8be5\u9a71\u52a8\u4e3a\u4f60\u7684 Kubernetes \u96c6\u7fa4\u521b\u5efa\u8282\u70b9\u6a21\u677f\u5e76\u6700\u7ec8\u521b\u5efa\u8282\u70b9\u6c60\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u9a71\u52a8"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u673a\u9a71\u52a8"),"\u9009\u9879\u5361\u4e0a\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u4e3b\u673a\u9a71\u52a8"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u586b\u5199",(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u4e3b\u673a\u9a71\u52a8"),"\u8868\u5355\u3002\u7136\u540e\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("h3",{id:"\u5f00\u53d1\u81ea\u5df1\u7684\u4e3b\u673a\u9a71\u52a8"},"\u5f00\u53d1\u81ea\u5df1\u7684\u4e3b\u673a\u9a71\u52a8"),(0,i.kt)("p",null,"\u4e3b\u673a\u9a71\u52a8\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine")," \u6765\u5b9e\u73b0\u3002"))}m.isMDXComponent=!0}}]);
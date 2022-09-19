"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[94654],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6296:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"\u793a\u4f8b\u573a\u666f",weight:5},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",title:"\u793a\u4f8b\u573a\u666f",description:"\u4ee5\u4e0b\u793a\u4f8b\u573a\u666f\u63cf\u8ff0\u4e86\u7ec4\u7ec7\u5982\u4f55\u4f7f\u7528\u6a21\u677f\u6765\u6807\u51c6\u5316\u96c6\u7fa4\u521b\u5efa\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u793a\u4f8b\u573a\u666f",weight:5},sidebar:"tutorialSidebar",previous:{title:"RKE \u6a21\u677f\u548c\u57fa\u7840\u8bbe\u65bd",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure"},next:{title:"\u96c6\u7fa4\u6a21\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates"}},p={},c=[{value:"\u5f3a\u5236\u6267\u884c\u6a21\u677f\u8bbe\u7f6e",id:"\u5f3a\u5236\u6267\u884c\u6a21\u677f\u8bbe\u7f6e",level:2},{value:"\u666e\u901a\u7528\u6237\u548c\u9ad8\u7ea7\u7528\u6237\u6a21\u677f",id:"\u666e\u901a\u7528\u6237\u548c\u9ad8\u7ea7\u7528\u6237\u6a21\u677f",level:2},{value:"\u66f4\u65b0\u6a21\u677f\u548c\u96c6\u7fa4",id:"\u66f4\u65b0\u6a21\u677f\u548c\u96c6\u7fa4",level:2},{value:"\u5141\u8bb8\u5176\u4ed6\u7528\u6237\u63a7\u5236\u548c\u5171\u4eab\u6a21\u677f",id:"\u5141\u8bb8\u5176\u4ed6\u7528\u6237\u63a7\u5236\u548c\u5171\u4eab\u6a21\u677f",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u573a\u666f\u63cf\u8ff0\u4e86\u7ec4\u7ec7\u5982\u4f55\u4f7f\u7528\u6a21\u677f\u6765\u6807\u51c6\u5316\u96c6\u7fa4\u521b\u5efa\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5f3a\u5236\u6267\u884c\u6a21\u677f"),"\uff1a\u5982\u679c\u5e0c\u671b\u6240\u6709 Rancher \u914d\u7f6e\u7684\u65b0\u96c6\u7fa4\u90fd\u5177\u6709\u67d0\u4e9b\u8bbe\u7f6e\uff0c\u7ba1\u7406\u5458\u53ef\u80fd\u60f3\u8981",(0,i.kt)("a",{parentName:"li",href:"#%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%A8%A1%E6%9D%BF%E8%AE%BE%E7%BD%AE"},"\u4e3a\u6bcf\u4e2a\u7528\u6237\u5f3a\u5236\u6267\u884c\u4e00\u9879\u6216\u591a\u9879\u6a21\u677f\u8bbe\u7f6e"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e0e\u4e0d\u540c\u7684\u7528\u6237\u5171\u4eab\u4e0d\u540c\u7684\u6a21\u677f"),"\uff1a\u7ba1\u7406\u5458\u53ef\u4ee5\u4e3a",(0,i.kt)("a",{parentName:"li",href:"#%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%92%8C%E9%AB%98%E7%BA%A7%E7%94%A8%E6%88%B7%E6%A8%A1%E6%9D%BF"},"\u666e\u901a\u7528\u6237\u548c\u9ad8\u7ea7\u7528\u6237\u63d0\u4f9b\u4e0d\u540c\u7684\u6a21\u677f"),"\u3002\u8fd9\u6837\uff0c\u666e\u901a\u7528\u6237\u4f1a\u6709\u66f4\u591a\u9650\u5236\u9009\u9879\uff0c\u800c\u9ad8\u7ea7\u7528\u6237\u5728\u521b\u5efa\u96c6\u7fa4\u65f6\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u9009\u9879\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u66f4\u65b0\u6a21\u677f\u8bbe\u7f6e"),"\uff1a\u5982\u679c\u7ec4\u7ec7\u7684\u5b89\u5168\u548c DevOps \u56e2\u961f\u51b3\u5b9a\u5c06\u6700\u4f73\u5b9e\u8df5\u5d4c\u5165\u5230\u65b0\u96c6\u7fa4\u6240\u9700\u7684\u8bbe\u7f6e\u4e2d\uff0c\u8fd9\u4e9b\u6700\u4f73\u5b9e\u8df5\u53ef\u80fd\u4f1a\u968f\u7740\u65f6\u95f4\u800c\u6539\u53d8\u3002\u5982\u679c\u6700\u4f73\u5b9e\u8df5\u53d1\u751f\u53d8\u5316\uff0c",(0,i.kt)("a",{parentName:"li",href:"#%E6%9B%B4%E6%96%B0%E6%A8%A1%E6%9D%BF%E5%92%8C%E9%9B%86%E7%BE%A4"},"\u53ef\u4ee5\u5c06\u6a21\u677f\u66f4\u65b0\u4e3a\u65b0\u7248\u672c"),"\u3002\u8fd9\u6837\uff0c\u4f7f\u7528\u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4\u53ef\u4ee5\u5347\u7ea7\u5230\u6a21\u677f\u7684\u65b0\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5171\u4eab\u6a21\u677f\u7684\u6240\u6709\u6743"),"\uff1a\u5f53\u6a21\u677f\u6240\u6709\u8005\u4e0d\u518d\u60f3\u8981\u7ef4\u62a4\u6a21\u677f\u6216\u60f3\u8981\u5171\u4eab\u6a21\u677f\u7684\u6240\u6709\u6743\u65f6\uff0c\u6b64\u65b9\u6848\u63cf\u8ff0\u4e86\u5982\u4f55",(0,i.kt)("a",{parentName:"li",href:"#%E5%85%81%E8%AE%B8%E5%85%B6%E4%BB%96%E7%94%A8%E6%88%B7%E6%8E%A7%E5%88%B6%E5%92%8C%E5%85%B1%E4%BA%AB%E6%A8%A1%E6%9D%BF"},"\u6388\u6743\u6a21\u677f\u6240\u6709\u6743"),"\u3002")),(0,i.kt)("h2",{id:"\u5f3a\u5236\u6267\u884c\u6a21\u677f\u8bbe\u7f6e"},"\u5f3a\u5236\u6267\u884c\u6a21\u677f\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u7ec4\u7ec7\u7684\u7ba1\u7406\u5458\u51b3\u5b9a\u7528 Kubernetes \u7248\u672c 1.14 \u521b\u5efa\u6240\u6709\u65b0\u96c6\u7fa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0c\u7ba1\u7406\u5458\u521b\u5efa\u4e00\u4e2a\u6a21\u677f\uff0c\u5c06 Kubernetes \u7248\u672c\u6307\u5b9a\u4e3a 1.14\uff0c\u5e76\u5c06\u6240\u6709\u5176\u4ed6\u8bbe\u7f6e\u6807\u8bb0\u4e3a",(0,i.kt)("strong",{parentName:"li"},"\u5141\u8bb8\u7528\u6237\u8986\u76d6"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458\u5c06\u6a21\u677f\u516c\u5f00\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458\u6253\u5f00\u6a21\u677f\u5f3a\u5236\u529f\u80fd\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u4e2d\u7684\u6240\u6709 Rancher \u7528\u6237\u90fd\u53ef\u4ee5\u8bbf\u95ee\u8be5\u6a21\u677f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u666e\u901a\u7528\u6237"),"\u4f7f\u7528\u6b64\u6a21\u677f\u521b\u5efa\u7684\u6240\u6709\u65b0\u96c6\u7fa4\u90fd\u5c06\u4f7f\u7528 Kubernetes 1.14\uff0c\u5b83\u4eec\u65e0\u6cd5\u4f7f\u7528\u5176\u5b83 Kubernetes \u7248\u672c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u666e\u901a\u7528\u6237\u6ca1\u6709\u521b\u5efa\u6a21\u677f\u7684\u6743\u9650\u3002\u56e0\u6b64\uff0c\u9664\u975e\u4e0e\u4ed6\u4eec\u5171\u4eab\u66f4\u591a\u6a21\u677f\uff0c\u5426\u5219\u6b64\u6a21\u677f\u5c06\u662f\u666e\u901a\u7528\u6237\u552f\u4e00\u53ef\u4ee5\u4f7f\u7528\u7684\u6a21\u677f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u666e\u901a\u7528\u6237\u90fd\u5fc5\u987b\u4f7f\u7528\u96c6\u7fa4\u6a21\u677f\u6765\u521b\u5efa\u65b0\u96c6\u7fa4\u3002\u4ed6\u4eec\u65e0\u6cd5\u5728\u4e0d\u4f7f\u7528\u6a21\u677f\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u96c6\u7fa4\u3002")),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u7ba1\u7406\u5458\u5728\u6574\u4e2a\u7ec4\u7ec7\u4e2d\u5f3a\u5236\u6267\u884c Kubernetes \u7248\u672c\uff0c\u540c\u65f6\u4ecd\u7136\u5141\u8bb8\u6700\u7ec8\u7528\u6237\u914d\u7f6e\u5176\u4ed6\u6240\u6709\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u666e\u901a\u7528\u6237\u548c\u9ad8\u7ea7\u7528\u6237\u6a21\u677f"},"\u666e\u901a\u7528\u6237\u548c\u9ad8\u7ea7\u7528\u6237\u6a21\u677f"),(0,i.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u7ec4\u7ec7\u6709\u666e\u901a\u7528\u6237\u548c\u9ad8\u7ea7\u7528\u6237\u3002\u7ba1\u7406\u5458\u5e0c\u671b\u666e\u901a\u7528\u6237\u5fc5\u987b\u4f7f\u7528\u6a21\u677f\uff0c\u800c\u9ad8\u7ea7\u7528\u6237\u548c\u7ba1\u7406\u5458\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u521b\u5efa\u96c6\u7fa4\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0c\u7ba1\u7406\u5458\u5f00\u542f ",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates#%E5%BC%BA%E5%88%B6%E6%96%B0%E9%9B%86%E7%BE%A4%E4%BD%BF%E7%94%A8-rke-%E6%A8%A1%E6%9D%BF"},"RKE \u6a21\u677f\u5f3a\u5236\u6267\u884c"),"\u3002\u8fd9\u610f\u5473\u7740 Rancher \u4e2d\u7684\u6bcf\u4e2a",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u666e\u901a\u7528\u6237"),"\u5728\u521b\u5efa\u96c6\u7fa4\u65f6\u90fd\u9700\u8981\u4f7f\u7528 RKE \u6a21\u677f\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7136\u540e\u7ba1\u7406\u5458\u521b\u5efa\u4e24\u4e2a\u6a21\u677f\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u666e\u901a\u7528\u6237\u6a21\u677f\uff0c\u8be5\u6a21\u677f\u9664\u4e86\u8bbf\u95ee\u5bc6\u94a5\u5916\uff0c\u51e0\u4e4e\u6307\u5b9a\u4e86\u6240\u6709\u9009\u9879"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u9ad8\u7ea7\u7528\u6237\u6a21\u677f\uff0c\u8be5\u6a21\u677f\u5177\u6709\u5927\u90e8\u5206\u6216\u6240\u6709\u5df2\u542f\u7528",(0,i.kt)("strong",{parentName:"li"},"\u5141\u8bb8\u7528\u6237\u8986\u76d6"),"\u7684\u9009\u9879")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458\u4ec5\u4e0e\u9ad8\u7ea7\u7528\u6237\u5171\u4eab\u9ad8\u7ea7\u6a21\u677f\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458\u5c06\u666e\u901a\u7528\u6237\u7684\u6a21\u677f\u516c\u5f00\uff0c\u56e0\u6b64\u5728 Rancher \u4e2d\u521b\u5efa\u7684 RKE \u96c6\u7fa4\u7684\u6bcf\u4e2a\u4eba\u90fd\u80fd\u9009\u62e9\u9650\u5236\u6027\u66f4\u5f3a\u7684\u6a21\u677f\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u9664\u7ba1\u7406\u5458\u5916\uff0c\u6240\u6709 Rancher \u7528\u6237\u5728\u521b\u5efa\u96c6\u7fa4\u65f6\u90fd\u9700\u8981\u4f7f\u7528\u6a21\u677f\u3002\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u8bbf\u95ee\u9650\u5236\u6a21\u677f\uff0c\u4f46\u53ea\u6709\u9ad8\u7ea7\u7528\u6237\u6709\u6743\u4f7f\u7528\u66f4\u5bbd\u677e\u7684\u6a21\u677f\u3002\u666e\u901a\u7528\u6237\u4f1a\u53d7\u5230\u66f4\u591a\u9650\u5236\uff0c\u800c\u9ad8\u7ea7\u7528\u6237\u5728\u914d\u7f6e Kubernetes \u96c6\u7fa4\u65f6\u6709\u66f4\u591a\u9009\u62e9\u3002"),(0,i.kt)("h2",{id:"\u66f4\u65b0\u6a21\u677f\u548c\u96c6\u7fa4"},"\u66f4\u65b0\u6a21\u677f\u548c\u96c6\u7fa4"),(0,i.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u7ec4\u7ec7\u6709\u4e00\u4e2a\u6a21\u677f\uff0c\u8be5\u6a21\u677f\u8981\u6c42\u96c6\u7fa4\u4f7f\u7528 Kubernetes v1.14\u3002\u7136\u800c\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u7ba1\u7406\u5458\u6539\u53d8\u4e86\u4e3b\u610f\u3002\u7ba1\u7406\u5458\u73b0\u5728\u5e0c\u671b\u7528\u6237\u80fd\u591f\u5347\u7ea7\u96c6\u7fa4\uff0c\u4ee5\u4f7f\u7528\u66f4\u65b0\u7248\u672c\u7684 Kubernetes\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u7ec4\u7ec7\u4e2d\uff0c\u8bb8\u591a\u96c6\u7fa4\u662f\u7528\u4e00\u4e2a\u9700\u8981 Kubernetes v1.14 \u7684\u6a21\u677f\u521b\u5efa\u7684\u3002\u7531\u4e8e\u6a21\u677f\u4e0d\u5141\u8bb8\u91cd\u5199\u8be5\u8bbe\u7f6e\uff0c\u56e0\u6b64\u521b\u5efa\u96c6\u7fa4\u7684\u7528\u6237\u65e0\u6cd5\u76f4\u63a5\u7f16\u8f91\u8be5\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,"\u6a21\u677f\u6240\u6709\u8005\u53ef\u4ee5\u6709\u4ee5\u4e0b\u51e0\u4e2a\u9009\u9879\uff0c\u6765\u5141\u8bb8\u96c6\u7fa4\u521b\u5efa\u8005\u5728\u96c6\u7fa4\u4e0a\u5347\u7ea7 Kubernetes\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5728\u6a21\u677f\u4e0a\u6307\u5b9a Kubernetes v1.15"),"\uff1a\u6a21\u677f\u6240\u6709\u8005\u53ef\u4ee5\u521b\u5efa\u6307\u5b9a Kubernetes v1.15 \u7684\u65b0\u6a21\u677f\u4fee\u8ba2\u7248\u3002\u7136\u540e\u4f7f\u7528\u8be5\u6a21\u677f\u7684\u6bcf\u4e2a\u96c6\u7fa4\u7684\u6240\u6709\u8005\u53ef\u4ee5\u5c06\u96c6\u7fa4\u5347\u7ea7\u5230\u6a21\u677f\u7684\u65b0\u7248\u672c\u3002\u6b64\u6a21\u677f\u5347\u7ea7\u5141\u8bb8\u96c6\u7fa4\u521b\u5efa\u8005\u5728\u96c6\u7fa4\u4e0a\u5c06 Kubernetes \u5347\u7ea7\u5230 v1.15\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5141\u8bb8\u5728\u6a21\u677f\u4e0a\u4f7f\u7528\u4efb\u4f55 Kubernetes \u7248\u672c"),"\uff1a\u521b\u5efa\u6a21\u677f\u4fee\u8ba2\u65f6\uff0c\u6a21\u677f\u6240\u6709\u8005\u8fd8\u53ef\u4ee5\u4f7f\u7528 Rancher UI \u4e0a\u8be5\u8bbe\u7f6e\u9644\u8fd1\u7684\u5f00\u5173\uff0c\u5c06 Kubernetes \u7248\u672c\u6807\u8bb0\u4e3a",(0,i.kt)("strong",{parentName:"li"},"\u5141\u8bb8\u7528\u6237\u8986\u76d6"),"\u3002\u8be5\u8bbe\u7f6e\u5141\u8bb8\u5347\u7ea7\u5230\u6b64\u6a21\u677f\u7248\u672c\u7684\u96c6\u7fa4\u4f7f\u7528\u4efb\u610f Kubernetes \u7684\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5141\u8bb8\u5728\u6a21\u677f\u4e0a\u4f7f\u7528\u6700\u65b0\u7684 Kubernetes \u6b21\u8981\u7248\u672c"),"\uff1a\u6a21\u677f\u6240\u6709\u8005\u8fd8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u6a21\u677f\u4fee\u8ba2\u7248\uff0c\u5176\u4e2d Kubernetes \u7248\u672c\u88ab\u5b9a\u4e49\u4e3a ",(0,i.kt)("strong",{parentName:"li"},"Latest v1.14\uff08\u5141\u8bb8\u8865\u4e01\u7248\u672c\u5347\u7ea7\uff09"),"\u3002\u8fd9\u610f\u5473\u7740\u4f7f\u7528\u8be5\u7248\u672c\u7684\u96c6\u7fa4\u5c06\u80fd\u591f\u8fdb\u884c\u8865\u4e01\u7248\u672c\u5347\u7ea7\uff0c\u4f46\u4e0d\u652f\u6301\u4e3b\u8981\u7248\u672c\u5347\u7ea7\u3002")),(0,i.kt)("h2",{id:"\u5141\u8bb8\u5176\u4ed6\u7528\u6237\u63a7\u5236\u548c\u5171\u4eab\u6a21\u677f"},"\u5141\u8bb8\u5176\u4ed6\u7528\u6237\u63a7\u5236\u548c\u5171\u4eab\u6a21\u677f"),(0,i.kt)("p",null,"\u5047\u8bbe Alice \u662f Rancher \u7ba1\u7406\u5458\u3002\u5979\u62e5\u6709\u4e00\u4e2a RKE \u6a21\u677f\uff0c\u8be5\u6a21\u677f\u53cd\u6620\u4e86\u5979\u7684\u7ec4\u7ec7\u4e3a\u521b\u5efa\u96c6\u7fa4\u800c\u5546\u5b9a\u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,i.kt)("p",null,"Bob \u662f\u4e00\u4f4d\u9ad8\u7ea7\u7528\u6237\uff0c\u53ef\u4ee5\u5c31\u96c6\u7fa4\u914d\u7f6e\u505a\u51fa\u660e\u667a\u7684\u51b3\u7b56\u3002\u968f\u7740\u6700\u4f73\u5b9e\u8df5\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u4e0d\u65ad\u66f4\u65b0\uff0cAlice \u76f8\u4fe1 Bob \u4f1a\u4e3a\u5979\u7684\u6a21\u677f\u521b\u5efa\u65b0\u7684\u4fee\u8ba2\u3002\u56e0\u6b64\uff0c\u5979\u51b3\u5b9a\u8ba9 Bob \u6210\u4e3a\u6a21\u677f\u7684\u6240\u6709\u8005\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4e0e Bob \u5171\u4eab\u6a21\u677f\u7684\u6240\u6709\u6743\uff0cAlice ",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates#%E5%85%B1%E4%BA%AB%E6%A8%A1%E6%9D%BF%E6%89%80%E6%9C%89%E6%9D%83"},"\u5c06 Bob \u6dfb\u52a0\u4e3a\u6a21\u677f\u7684\u6240\u6709\u8005"),"\u3002"),(0,i.kt)("p",null,"\u7ed3\u679c\u662f\uff0c\u4f5c\u4e3a\u6a21\u677f\u6240\u6709\u8005\uff0cBob \u8d1f\u8d23\u8be5\u6a21\u677f\u7684\u7248\u672c\u63a7\u5236\u3002Bob \u73b0\u5728\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u6240\u6709\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53\u6700\u4f73\u5b9e\u8df5\u53d1\u751f\u53d8\u5316\u65f6",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#%E6%9B%B4%E6%96%B0%E6%A8%A1%E6%9D%BF"},"\u4fee\u6539\u6a21\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#%E7%A6%81%E7%94%A8%E6%A8%A1%E6%9D%BF%E4%BF%AE%E8%AE%A2%E7%89%88"},"\u7981\u7528\u6a21\u677f\u7684\u8fc7\u65f6\u4fee\u8ba2"),"\uff0c\u4ee5\u7981\u6b62\u4f7f\u7528\u8be5\u6a21\u677f\u6765\u521b\u5efa\u96c6\u7fa4"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u7ec4\u7ec7\u60f3\u8981\u6539\u53d8\u65b9\u5411\uff0c\u5219",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#%E5%88%A0%E9%99%A4%E6%A8%A1%E6%9D%BF"},"\u5220\u9664\u6574\u4e2a\u6a21\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#%E5%B0%86%E6%A8%A1%E6%9D%BF%E4%BF%AE%E8%AE%A2%E7%89%88%E8%AE%BE%E7%BD%AE%E4%B8%BA%E9%BB%98%E8%AE%A4"},"\u5c06\u67d0\u4e2a\u7248\u672c\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u503c"),"\uff0c\u7528\u4e8e\u7528\u6237\u521b\u5efa\u96c6\u7fa4\u3002\u6a21\u677f\u7684\u6700\u7ec8\u7528\u6237\u4ecd\u7136\u53ef\u4ee5\u9009\u62e9\u4ed6\u4eec\u60f3\u8981\u4f7f\u7528\u54ea\u4e2a\u7248\u672c\u6765\u521b\u5efa\u96c6\u7fa4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"\u4e0e\u7279\u5b9a\u7528\u6237\u5171\u4eab\u6a21\u677f"),"\uff0c\u8ba9\u6240\u6709 Rancher \u7528\u6237\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u6a21\u677f\uff0c\u6216\u4e0e\u5176\u4ed6\u7528\u6237\u5171\u4eab\u8be5\u6a21\u677f\u7684\u6240\u6709\u6743\u3002")))}d.isMDXComponent=!0}}]);
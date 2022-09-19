"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36156],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47385:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",weight:2043},s=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key",id:"how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key",title:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",description:"RKE1 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",weight:2043},sidebar:"tutorialSidebar",previous:{title:"\u8bc1\u4e66\u8f6e\u6362",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},next:{title:"\u8282\u70b9\u548c\u8282\u70b9\u6c60",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"}},u={},l=[{value:"RKE1 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"rke1-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3},{value:"RKE2 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"rke2-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3}],d={toc:l};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"rke1-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},"RKE1 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u9009\u9879\u4e4b\u4e00\u6765\u542f\u7528\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728 Rancher UI \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"Cluster Options > Advanced Options > Secrets Encryption")," \u4e0b\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Enabled")," \u5355\u9009\u6309\u94ae\uff1a")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"\u542f\u7528\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",src:n(1055).Z,width:"676",height:"457"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6216\u8005\uff0c\u5e94\u7528\u4ee5\u4e0b YAML\uff1a")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  services:\n    kube_api:\n      secrets_encryption_config:\n        enabled: true\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 Rancher UI \u4e2d\u8f6e\u6362\u5bc6\u94a5\uff1a"),(0,o.kt)("p",{parentName:"li"},"2.1. \u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"2.2. \u5728\u6240\u9009\u96c6\u7fa4\u65c1\u8fb9\u7684\u5c4f\u5e55\u6700\u53f3\u4fa7\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Rotate Encryption Keys"),"\uff1a"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",src:n(4200).Z,width:"779",height:"486"})))),(0,o.kt)("h3",{id:"rke2-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},"RKE2 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"v2.6.7 \u65b0\u529f\u80fd"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362\u9ed8\u8ba4\u542f\u7528\uff0c\u4e0d\u80fd\u7981\u7528\u3002")),(0,o.kt)("p",null,"\u8981\u5728 Rancher UI \u4e2d\u8f6e\u6362\u5bc6\u94a5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u6240\u9009\u96c6\u7fa4\u65c1\u8fb9\u7684\u5c4f\u5e55\u6700\u53f3\u4fa7\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Rotate Encryption Keys"),"\uff1a"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",src:n(8810).Z,width:"802",height:"512"})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6709\u5173 RKE2 \u5bc6\u6587\u52a0\u5bc6\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/security/secrets_encryption/"},"RKE2 \u6587\u6863"),"\u3002")))}m.isMDXComponent=!0},1055:function(e,t,n){t.Z=n.p+"assets/images/rke1-enable-secrets-encryption-d29a4755d08b4488657d8cd841f3f04d.png"},4200:function(e,t,n){t.Z=n.p+"assets/images/rke1-encryption-key-f596440d48043810288cc49779a2bbf0.png"},8810:function(e,t,n){t.Z=n.p+"assets/images/rke2-encryption-key-a48b0c7cec7f98605d7ea0923008d67b.png"}}]);
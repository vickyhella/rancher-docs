"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u8bc1\u4e66\u8f6e\u6362"},l=void 0,i={unversionedId:"how-to-guides/new-user-guides/manage-clusters/rotate-certificates",id:"how-to-guides/new-user-guides/manage-clusters/rotate-certificates",title:"\u8bc1\u4e66\u8f6e\u6362",description:"\u8f6e\u6362 Kubernetes \u8bc1\u4e66\u53ef\u80fd\u4f1a\u5bfc\u81f4\u96c6\u7fa4\u5728\u7ec4\u4ef6\u91cd\u542f\u65f6\u6682\u65f6\u4e0d\u53ef\u7528\u3002\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u5efa\u8bae\u5728\u7ef4\u62a4\u65f6\u6bb5\u5185\u6267\u884c\u6b64\u64cd\u4f5c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/manage-clusters/rotate-certificates.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/manage-clusters/rotate-certificates.md",tags:[],version:"current",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"\u8bc1\u4e66\u8f6e\u6362"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Rancher \u7684\u9879\u76ee\u548c Kubernetes \u547d\u540d\u7a7a\u95f4",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},next:{title:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key"}},u={},p=[{value:"\u8bc1\u4e66\u8f6e\u6362",id:"\u8bc1\u4e66\u8f6e\u6362",level:3},{value:"\u8865\u5145\u8bf4\u660e",id:"\u8865\u5145\u8bf4\u660e",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=s("Tabs"),m=s("TabItem"),d={toc:p};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8f6e\u6362 Kubernetes \u8bc1\u4e66\u53ef\u80fd\u4f1a\u5bfc\u81f4\u96c6\u7fa4\u5728\u7ec4\u4ef6\u91cd\u542f\u65f6\u6682\u65f6\u4e0d\u53ef\u7528\u3002\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u5efa\u8bae\u5728\u7ef4\u62a4\u65f6\u6bb5\u5185\u6267\u884c\u6b64\u64cd\u4f5c\u3002")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cKubernetes \u96c6\u7fa4\u9700\u8981\u8bc1\u4e66\uff0cRancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u4f1a\u81ea\u52a8\u4e3a Kubernetes \u7ec4\u4ef6\u751f\u6210\u8bc1\u4e66\u3002\u5728\u8bc1\u4e66\u8fc7\u671f\u4e4b\u524d\u6216\u88ab\u6cc4\u9732\u540e\u8f6e\u6362\u8bc1\u4e66\u975e\u5e38\u91cd\u8981\u3002\u8bc1\u4e66\u8f6e\u6362\u540e\uff0cKubernetes \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u91cd\u542f\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u670d\u52a1\u8f6e\u6362\u8bc1\u4e66\uff1a"),(0,a.kt)(c,{mdxType:"Tabs"},(0,a.kt)(m,{value:"RKE",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"etcd"),(0,a.kt)("li",{parentName:"ul"},"kubelet\uff08\u8282\u70b9\u8bc1\u4e66\uff09"),(0,a.kt)("li",{parentName:"ul"},"kubelet\uff08\u670d\u52a1\u8bc1\u4e66\uff0c\u5982\u679c",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/services/#kubelet-options"},"\u542f\u7528"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"kube-apiserver"),(0,a.kt)("li",{parentName:"ul"},"kube-proxy"),(0,a.kt)("li",{parentName:"ul"},"kube-scheduler"),(0,a.kt)("li",{parentName:"ul"},"kube-controller-manager"))),(0,a.kt)(m,{value:"RKE2",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"admin"),(0,a.kt)("li",{parentName:"ul"},"api-server"),(0,a.kt)("li",{parentName:"ul"},"controller-manager"),(0,a.kt)("li",{parentName:"ul"},"scheduler"),(0,a.kt)("li",{parentName:"ul"},"rke2-controller"),(0,a.kt)("li",{parentName:"ul"},"rke2-server"),(0,a.kt)("li",{parentName:"ul"},"cloud-controller"),(0,a.kt)("li",{parentName:"ul"},"etcd"),(0,a.kt)("li",{parentName:"ul"},"auth-proxy"),(0,a.kt)("li",{parentName:"ul"},"kubelet"),(0,a.kt)("li",{parentName:"ul"},"kube-proxy")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u672a\u8f6e\u6362 webhook \u8bc1\u4e66\uff0c\u4e14\u8bc1\u4e66\u7528\u4e86\u4e00\u5e74\u540e\u5df2\u7ecf\u8fc7\u671f\uff0c\u8bf7\u53c2\u9605\u6b64",(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"},"\u9875\u9762"),"\u3002")),(0,a.kt)("h3",{id:"\u8bc1\u4e66\u8f6e\u6362"},"\u8bc1\u4e66\u8f6e\u6362"),(0,a.kt)("p",null,"Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u80fd\u591f\u901a\u8fc7 UI \u8f6e\u6362\u81ea\u52a8\u751f\u6210\u7684\u8bc1\u4e66\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u8f6e\u6362\u8bc1\u4e66\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u8f6e\u6362\u8bc1\u4e66"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u8f6e\u6362\u7684\u8bc1\u4e66\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8f6e\u6362\u6240\u6709\u670d\u52a1\u8bc1\u4e66\uff08\u4f7f\u7528\u76f8\u540c\u7684 CA\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u8f6e\u6362\u5355\u4e2a\u670d\u52a1\uff0c\u5e76\u4ece\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u5176\u4e2d\u4e00\u9879\u670d\u52a1\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5c06\u8f6e\u6362\u6240\u9009\u8bc1\u4e66\uff0c\u76f8\u5173\u670d\u52a1\u5c06\u91cd\u65b0\u542f\u52a8\u4ee5\u4f7f\u7528\u65b0\u8bc1\u4e66\u3002"),(0,a.kt)("h3",{id:"\u8865\u5145\u8bf4\u660e"},"\u8865\u5145\u8bf4\u660e"),(0,a.kt)(c,{mdxType:"Tabs"},(0,a.kt)(m,{value:"RKE",mdxType:"TabItem"},(0,a.kt)("p",null,"\u867d\u7136 RKE CLI \u53ef\u4ee5\u4e3a Kubernetes \u96c6\u7fa4\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5b9a\u4e49\u8bc1\u4e66\uff0c\u4f46 Rancher \u76ee\u524d\u4e0d\u5141\u8bb8\u5728 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u4e2d\u4e0a\u4f20\u8fd9\u4e9b\u8bc1\u4e66\u3002")),(0,a.kt)(m,{value:"RKE2",mdxType:"TabItem"},(0,a.kt)("p",null,"\u5728 RKE2 \u4e2d\uff0cetcd \u548c controlplane \u8282\u70b9\u90fd\u88ab\u89c6\u4e3a\u76f8\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"server"),"\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u8f6e\u6362\u5176\u4e2d\u4e00\u4e2a\u7ec4\u4ef6\u7684\u670d\u52a1\u8bc1\u4e66\uff0c\u5219\u4e24\u8005\u7684\u8bc1\u4e66\u90fd\u4f1a\u88ab\u8f6e\u6362\u3002\u8bc1\u4e66\u53ea\u4f1a\u9488\u5bf9\u6307\u5b9a\u7684\u670d\u52a1\u66f4\u6539\uff0c\u4f46\u4f60\u4f1a\u770b\u5230\u4e24\u4e2a\u7ec4\u4ef6\u7684\u8282\u70b9\u90fd\u8fdb\u5165\u66f4\u65b0\u72b6\u6001\u3002\u4f60\u53ef\u80fd\u8fd8\u4f1a\u770b\u5230\u4ec5 Worker \u8282\u70b9\u8fdb\u5165\u66f4\u65b0\u72b6\u6001\u3002\u8fd9\u662f\u5728\u8bc1\u4e66\u66f4\u6539\u540e\u91cd\u542f Worker\uff0c\u4ee5\u786e\u4fdd\u4ed6\u4eec\u83b7\u5f97\u6700\u65b0\u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u3002"))))}k.isMDXComponent=!0}}]);
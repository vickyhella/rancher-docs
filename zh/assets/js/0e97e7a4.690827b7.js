"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[77728],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return t?n.createElement(f,u(u({ref:r},s),{},{components:t})):n.createElement(f,u({ref:r},s))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41866:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"RKE1 \u548c RKE2 \u5dee\u200b\u200b\u5f02"},u=void 0,i={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",id:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",title:"RKE1 \u548c RKE2 \u5dee\u200b\u200b\u5f02",description:"RKE2\uff0c\u4e5f\u79f0\u4e3a RKE Government\uff0c\u662f\u4e00\u4e2a\u5b8c\u5168\u7b26\u5408\u6807\u51c6\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u5b83\u4e13\u6ce8\u4e8e\u5b89\u5168\u6027\u548c\u5408\u89c4\u6027\u3002\u5b83\u88ab\u8ba4\u4e3a\u662f Rancher Kubernetes Engine\uff08\u5373 RKE1\uff09\u7684\u4e0b\u4e00\u4e2a\u8fed\u4ee3\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",permalink:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences.md",tags:[],version:"current",lastUpdatedAt:1676523322,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{title:"RKE1 \u548c RKE2 \u5dee\u200b\u200b\u5f02"},sidebar:"tutorialSidebar",previous:{title:"\u5728 Nutanix AOS \u4e2d\u914d\u7f6e Kubernetes \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos"},next:{title:"Rancher Agent",permalink:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents"}},l={},c=[{value:"controlplane \u7ec4\u4ef6",id:"controlplane-\u7ec4\u4ef6",level:3},{value:"Cluster API",id:"cluster-api",level:3},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:3}],s={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RKE2\uff0c\u4e5f\u79f0\u4e3a RKE Government\uff0c\u662f\u4e00\u4e2a\u5b8c\u5168\u7b26\u5408\u6807\u51c6\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u5b83\u4e13\u6ce8\u4e8e\u5b89\u5168\u6027\u548c\u5408\u89c4\u6027\u3002\u5b83\u88ab\u8ba4\u4e3a\u662f Rancher Kubernetes Engine\uff08\u5373 RKE1\uff09\u7684\u4e0b\u4e00\u4e2a\u8fed\u4ee3\u3002"),(0,o.kt)("p",null,"RKE1 \u548c RKE2 \u6709\u4e00\u4e9b\u7ec6\u5fae\u7684\u5dee\u5f02\uff0c\u672c\u6587\u5c06\u91cd\u70b9\u4ecb\u7ecd\u8fd9\u4e9b\u5dee\u5f02\u3002"),(0,o.kt)("h3",{id:"controlplane-\u7ec4\u4ef6"},"controlplane \u7ec4\u4ef6"),(0,o.kt)("p",null,"RKE1 \u4f7f\u7528 Docker \u6765\u90e8\u7f72\u548c\u7ba1\u7406 controlplane \u7ec4\u4ef6\uff0c\u8fd8\u4f7f\u7528 Docker \u4f5c\u4e3a Kubernetes \u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0cRKE2 \u5c06 controlplane \u7ec4\u4ef6\u4f5c\u4e3a\u7531 kubelet \u7ba1\u7406\u7684\u9759\u6001 pod \u542f\u52a8\u3002RKE2 \u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u662f Containerd\uff0c\u5b83\u5141\u8bb8 Mirror \u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u7b49\u5185\u5bb9\u3002\u4f7f\u7528 Docker \u7684 RKE1 \u4e0d\u5141\u8bb8 Mirror\u3002"),(0,o.kt)("h3",{id:"cluster-api"},"Cluster API"),(0,o.kt)("p",null,"RKE2/K3s \u914d\u7f6e\u662f\u57fa\u4e8e Cluster API (CAPI) \u4e0a\u6e38\u6846\u67b6\u4e4b\u4e0a\u6784\u5efa\u7684\uff0c\u8fd9\u5bfc\u81f4 RKE2 \u914d\u7f6e\u7684\u96c6\u7fa4\u7684\u884c\u4e3a\u901a\u5e38\u4e0e RKE1 \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u540c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5728 RKE2 \u4e2d\u66f4\u6539\u96c6\u7fa4\u914d\u7f6e\uff0c\u8282\u70b9",(0,o.kt)("strong",{parentName:"p"},"\u53ef\u80fd"),"\u4f1a\u91cd\u65b0\u914d\u7f6e\u3002\u8fd9\u662f\u7531 CAPI \u63a7\u5236\u5668\u800c\u4e0d\u662f Rancher \u63a7\u5236\u7684\u3002\u8bf7\u6ce8\u610f\uff0cetcd \u8282\u70b9\u4e0d\u9002\u7528\u76f8\u540c\u7684\u884c\u4e3a\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53ef\u80fd\u5bfc\u81f4\u4e0a\u8ff0\u884c\u4e3a\u7684\u914d\u7f6e\u66f4\u6539\u793a\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7f16\u8f91\u96c6\u7fa4\u5e76\u542f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"\u5220\u9664\u524d\u6e05\u7a7a"),"\u65f6\uff0c\u4f1a\u5220\u9664\u73b0\u6709\u7684 controlplane \u8282\u70b9\u548c worker \u5e76\u521b\u5efa\u65b0\u8282\u70b9\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u914d\u7f6e\u8282\u70b9\u5e76\u6267\u884c\u7f29\u51cf\u64cd\u4f5c\u65f6\uff0c\u53ef\u80fd\u4f1a\u5220\u9664\u5f53\u524d\u914d\u7f6e\u7684\u8282\u70b9\u5e76\u914d\u7f6e\u65b0\u7684\u8282\u70b9\u4ee5\u8fbe\u5230\u6240\u9700\u7684\u8282\u70b9\u6570\uff0c\u800c\u4e0d\u662f\u7f29\u51cf\u6240\u9700\u7684\u8282\u70b9\u6570\u91cf\u3002\u8fd9\u662f Cluster API \u7684\u4e00\u4e2a\u95ee\u9898\uff0c\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4f1a\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002\u4e00\u65e6\u4fee\u590d\uff0cRancher \u4f1a\u66f4\u65b0\u6587\u6863\u3002"))),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u662f\u4e60\u60ef\u4e8e RKE1 \u914d\u7f6e\u7684\u7528\u6237\uff0c\u8bf7\u6ce8\u610f\u65b0\u7684 RKE2 \u884c\u4e3a\u3002"),(0,o.kt)("h3",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,o.kt)("p",null,"\u4ece RKE1 \u5230 RKE2\uff0c\u67d0\u4e9b\u672f\u8bed\u5df2\u66f4\u6539\u6216\u5df2\u4e0d\u518d\u4f7f\u7528\u3002\u4f8b\u5982\uff0c\u5728 RKE1\u4e2d\uff0c\u4f60\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u8282\u70b9\u6a21\u677f"),"\uff0c\u800c\u5728 RKE2 \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u6216\u7f16\u8f91\u96c6\u7fa4\u65f6\u914d\u7f6e\u96c6\u7fa4\u8282\u70b9\u6c60\u3002\u53e6\u4e00\u4e2a\u4f8b\u5b50\u662f RKE1 \u4e2d\u7684",(0,o.kt)("strong",{parentName:"p"},"\u8282\u70b9\u6c60\uff08node pool\uff09")," \u73b0\u5728\u5728 RKE2 \u4e2d\u79f0\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u4e3b\u673a\u6c60\uff08machine pool\uff09"),"\u3002"))}p.isMDXComponent=!0}}]);
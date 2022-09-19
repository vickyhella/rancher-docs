"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76631],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),o=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=o(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=o(t),d=a,k=h["".concat(i,".").concat(d)]||h[d]||p[d]||u;return t?n.createElement(k,s(s({ref:r},c),{},{components:t})):n.createElement(k,s({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,s=new Array(u);s[0]=h;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<u;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},82853:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var n=t(87462),a=t(63366),u=(t(67294),t(3905)),s=["components"],l={title:"\u4f7f\u7528 Rancher \u542f\u52a8 Kubernetes",weight:4},i=void 0,o={unversionedId:"pages-for-subheaders/launch-kubernetes-with-rancher",id:"pages-for-subheaders/launch-kubernetes-with-rancher",title:"\u4f7f\u7528 Rancher \u542f\u52a8 Kubernetes",description:"Rancher \u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u8282\u70b9\u542f\u52a8 Kubernetes \u96c6\u7fa4\u3002\u5728 Rancher \u4e2d\u5c06 Kubernetes \u90e8\u7f72\u5230\u8fd9\u4e9b\u8282\u70b9\u4e0a\u65f6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 Rancher Kubernetes Engine (RKE) \u6216 RKE2 \u53d1\u884c\u7248\u3002Rancher \u53ef\u4ee5\u5728\u4efb\u4f55\u8ba1\u7b97\u673a\u4e0a\u542f\u52a8 Kubernetes\uff0c\u5305\u62ec\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/launch-kubernetes-with-rancher.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/launch-kubernetes-with-rancher",permalink:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/launch-kubernetes-with-rancher.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u4f7f\u7528 Rancher \u542f\u52a8 Kubernetes",weight:4},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u534e\u4e3a CCE \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei"},next:{title:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",permalink:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider"}},c={},p=[{value:"RKE",id:"rke",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:3},{value:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",id:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8-kubernetes",level:3},{value:"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",id:"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8-kubernetes",level:3},{value:"RKE2",id:"rke2",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42-1",level:3},{value:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",id:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8-kubernetes-1",level:3},{value:"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",id:"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8-kubernetes-1",level:3}],h={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,s);return(0,u.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Rancher \u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u8282\u70b9\u542f\u52a8 Kubernetes \u96c6\u7fa4\u3002\u5728 Rancher \u4e2d\u5c06 Kubernetes \u90e8\u7f72\u5230\u8fd9\u4e9b\u8282\u70b9\u4e0a\u65f6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 ",(0,u.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine")," (RKE) \u6216 ",(0,u.kt)("a",{parentName:"p",href:"https://docs.rke2.io"},"RKE2")," \u53d1\u884c\u7248\u3002Rancher \u53ef\u4ee5\u5728\u4efb\u4f55\u8ba1\u7b97\u673a\u4e0a\u542f\u52a8 Kubernetes\uff0c\u5305\u62ec\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u88f8\u91d1\u5c5e\u670d\u52a1\u5668"),(0,u.kt)("li",{parentName:"ul"},"\u672c\u5730\u865a\u62df\u673a"),(0,u.kt)("li",{parentName:"ul"},"\u7531\u4e91\u5382\u5546\u6258\u7ba1\u7684\u865a\u62df\u673a")),(0,u.kt)("p",null,"Rancher \u53ef\u4ee5\u5728\u73b0\u6709\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes\uff0c\u4e5f\u53ef\u4ee5\u5728\u4e91\u5382\u5546\u4e2d\u52a8\u6001\u914d\u7f6e\u8282\u70b9\u5e76\u5b89\u88c5 Kubernetes\u3002"),(0,u.kt)("p",null,"Rancher \u8fd8\u53ef\u4ee5\u521b\u5efa\u8282\u70b9\u6c60\u3002\u5728\u6258\u7ba1\u5728\u4e91\u5382\u5546\u7684\u8282\u70b9\u6c60\u4e0a\u5b89\u88c5 Kubernetes \u7684\u4e00\u4e2a\u597d\u5904\u662f\uff0c\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u4e0e\u96c6\u7fa4\u65ad\u5f00\u8fde\u63a5\uff0cRancher \u53ef\u4ee5\u81ea\u52a8\u521b\u5efa\u53e6\u4e00\u4e2a\u8282\u70b9\u5e76\u5c06\u5176\u52a0\u5165\u96c6\u7fa4\uff0c\u4ece\u800c\u786e\u4fdd\u8282\u70b9\u6c60\u7684\u6570\u91cf\u7b26\u5408\u8981\u6c42\u3002"),(0,u.kt)("h2",{id:"rke"},"RKE"),(0,u.kt)("h3",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,u.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 RKE \u5efa\u7acb\u96c6\u7fa4\uff0c\u8282\u70b9\u5fc5\u987b\u6ee1\u8db3\u4e0b\u6e38\u96c6\u7fa4\u7684",(0,u.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"\u8282\u70b9\u8981\u6c42"),"\u3002"),(0,u.kt)("h3",{id:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8-kubernetes"},"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes"),(0,u.kt)("p",null,"\u4f7f\u7528 Rancher\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u8282\u70b9\u6a21\u677f"),"\u521b\u5efa\u8282\u70b9\u6c60\u3002\u6b64\u8282\u70b9\u6a21\u677f\u5b9a\u4e49\u4e86\u8981\u7528\u4e8e\u5728\u4e91\u5382\u5546\u4e2d\u542f\u52a8\u8282\u70b9\u7684\u53c2\u6570\u3002"),(0,u.kt)("p",null,"\u5728\u6258\u7ba1\u5728\u4e91\u5382\u5546\u7684\u8282\u70b9\u6c60\u4e0a\u5b89\u88c5 Kubernetes \u7684\u4e00\u4e2a\u597d\u5904\u662f\uff0c\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u4e0e\u96c6\u7fa4\u65ad\u5f00\u8fde\u63a5\uff0cRancher \u53ef\u4ee5\u81ea\u52a8\u521b\u5efa\u53e6\u4e00\u4e2a\u8282\u70b9\u5e76\u5c06\u5176\u52a0\u5165\u96c6\u7fa4\uff0c\u4ece\u800c\u786e\u4fdd\u8282\u70b9\u6c60\u7684\u6570\u91cf\u7b26\u5408\u8981\u6c42\u3002"),(0,u.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u5728\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes"),"\u3002"),(0,u.kt)("h3",{id:"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8-kubernetes"},"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes"),(0,u.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e0c\u671b\u5c06 Kubernetes \u5b89\u88c5\u5230\u88f8\u673a\u670d\u52a1\u5668\u3001\u672c\u5730\u865a\u62df\u673a\u6216\u4e91\u5382\u5546\u4e2d\u5df2\u5b58\u5728\u7684\u865a\u62df\u673a\u4e0a\u3002\u4f7f\u7528\u6b64\u9009\u9879\uff0c\u4f60\u5c06\u5728\u4e3b\u673a\u4e0a\u8fd0\u884c Rancher Agent Docker \u5bb9\u5668\u3002"),(0,u.kt)("p",null,"\u5982\u679c\u8981\u91cd\u590d\u4f7f\u7528\u4e4b\u524d\u7684\u81ea\u5b9a\u4e49\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\uff0c\u8bf7\u5728\u590d\u7528\u4e4b\u524d",(0,u.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"\u6e05\u7406\u8282\u70b9"),"\u3002\u5982\u679c\u4f60\u91cd\u590d\u4f7f\u7528\u5c1a\u672a\u6e05\u7406\u7684\u8282\u70b9\uff0c\u5219\u96c6\u7fa4\u914d\u7f6e\u53ef\u80fd\u4f1a\u5931\u8d25\u3002"),(0,u.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-existing-nodes"},"\u81ea\u5b9a\u4e49\u8282\u70b9"),"\u3002"),(0,u.kt)("h1",{id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa-rke-\u96c6\u7fa4"},"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa RKE \u96c6\u7fa4"),(0,u.kt)("p",null,"\u901a\u8fc7 Rancher \u4ee5\u7f16\u7a0b\u65b9\u5f0f\u90e8\u7f72 RKE \u96c6\u7fa4\u7684\u6700\u5e38\u89c1\u65b9\u6cd5\u662f\u4f7f\u7528 Rancher 2 Terraform Provider\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,u.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"\u4f7f\u7528 Terraform \u521b\u5efa\u96c6\u7fa4"),"\u3002"),(0,u.kt)("h2",{id:"rke2"},"RKE2"),(0,u.kt)("p",null,"Rancher 2.6 \u652f\u6301\u76f4\u63a5\u4f7f\u7528 Rancher UI \u914d\u7f6e ",(0,u.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," \u96c6\u7fa4\u3002RKE2\uff0c\u4e5f\u79f0\u4e3a RKE Government\uff0c\u662f\u4e00\u4e2a\u5b8c\u5168\u7b26\u5408\u6807\u51c6\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u5b83\u4e13\u6ce8\u4e8e\u5b89\u5168\u6027\u548c\u5408\u89c4\u6027\u3002\u5728 Rancher 2.6.4 \u53ca\u66f4\u65e9\u7248\u672c\u4e2d\uff0cRKE2 \u914d\u7f6e\u8fd8\u5904\u4e8e\u6280\u672f\u9884\u89c8\u9636\u6bb5\u3002"),(0,u.kt)("p",null,"\u5728 Rancher 2.6.5 \u4e2d\uff0cRKE2 \u5df2\u7ecf GA\u3002"),(0,u.kt)("h3",{id:"\u8981\u6c42-1"},"\u8981\u6c42"),(0,u.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 RKE2 \u5efa\u7acb\u96c6\u7fa4\uff0c\u8282\u70b9\u5fc5\u987b\u6ee1\u8db3\u4e0b\u6e38\u96c6\u7fa4\u7684",(0,u.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/requirements/"},"\u8282\u70b9\u8981\u6c42"),"\u3002"),(0,u.kt)("h3",{id:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8-kubernetes-1"},"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes"),(0,u.kt)("p",null,"RKE2 \u57fa\u4e8e\u4f7f\u7528\u4e0a\u6e38",(0,u.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api"},"\u96c6\u7fa4 API")," \u9879\u76ee\u7684\u65b0\u914d\u7f6e\u6846\u67b6\u3002\u8fd9\u4e2a\u65b0\u914d\u7f6e\u6846\u67b6\u652f\u6301\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5c06 RKE2 \u96c6\u7fa4\u914d\u7f6e\u5230 Rancher \u5177\u6709\u4e3b\u673a\u9a71\u52a8\u7684\u4efb\u4f55\u63d0\u4f9b\u5546\u4e0a"),(0,u.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u5728 Rancher \u4e2d\u914d\u7f6e RKE2 \u96c6\u7fa4"),(0,u.kt)("li",{parentName:"ul"},"\u9664\u4e86 Canal \u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u9009\u62e9 CNI \u9009\u9879\uff0c Calico\u3001Cilium \u548c Multus")),(0,u.kt)("p",null,"RKE2 \u914d\u7f6e\u8fd8\u5305\u62ec\u5728\u5177\u6709 Windows \u8282\u70b9\u7684\u96c6\u7fa4\u4e0a\u5b89\u88c5 RKE2\u3002"),(0,u.kt)("p",null,"RKE2 \u7684 Windows \u529f\u80fd\u5305\u62ec\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Windows \u652f\u6301 vSphere \u4e3b\u673a\u9a71\u52a8"),(0,u.kt)("li",{parentName:"ul"},"\u7528\u4e8e Windows RKE2 \u81ea\u5b9a\u4e49\u96c6\u7fa4\u7684 Calico CNI"),(0,u.kt)("li",{parentName:"ul"},"Calico \u7684\u9879\u76ee\u7f51\u7edc\u9694\u79bb (PNI)"),(0,u.kt)("li",{parentName:"ul"},"\u7531 containerd \u63d0\u4f9b\u652f\u6301\u7684\u4f7f\u7528 RKE2 \u7684 Windows \u5bb9\u5668"),(0,u.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Terraform \u914d\u7f6e Windows RKE2 \u96c6\u7fa4"),(0,u.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4ece Rancher UI \u914d\u7f6e Windows RKE2 \u81ea\u5b9a\u4e49\u96c6\u7fa4")),(0,u.kt)("p",null,"\u8981\u4f7f Windows \u652f\u6301 RKE2 \u81ea\u5b9a\u4e49\u96c6\u7fa4\uff0c\u8bf7\u9009\u62e9 Calico \u4f5c\u4e3a CNI\u3002"),(0,u.kt)("h3",{id:"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8-kubernetes-1"},"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes"),(0,u.kt)("p",null,"RKE2 \u8fd8\u652f\u6301\u5728\u9884\u914d\u7f6e\u7684\u865a\u62df\u673a\u6216\u88f8\u673a\u8282\u70b9\u4e0a\u5b89\u88c5\u81ea\u5b9a\u4e49\u96c6\u7fa4\u3002"),(0,u.kt)("p",null,"\u5982\u679c\u8981\u91cd\u590d\u4f7f\u7528\u4e4b\u524d\u7684\u81ea\u5b9a\u4e49\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\uff0c\u8bf7\u5728\u590d\u7528\u4e4b\u524d\u6e05\u7406\u8282\u70b9\u3002\u5982\u679c\u4f60\u91cd\u590d\u4f7f\u7528\u5c1a\u672a\u6e05\u7406\u7684\u8282\u70b9\uff0c\u5219\u96c6\u7fa4\u914d\u7f6e\u53ef\u80fd\u4f1a\u5931\u8d25\u3002"),(0,u.kt)("h1",{id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa-rke2-\u96c6\u7fa4"},"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa RKE2 \u96c6\u7fa4"),(0,u.kt)("p",null,"\u901a\u8fc7 Rancher \u4ee5\u7f16\u7a0b\u65b9\u5f0f\u90e8\u7f72 RKE2 \u96c6\u7fa4\u7684\u6700\u5e38\u89c1\u65b9\u6cd5\u662f\u4f7f\u7528 Rancher 2 Terraform Provider\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,u.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster_v2"},"\u4f7f\u7528 Terraform \u521b\u5efa\u96c6\u7fa4"),"\u3002"))}d.isMDXComponent=!0}}]);
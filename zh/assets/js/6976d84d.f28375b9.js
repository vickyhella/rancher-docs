"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90897],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(t),g=a,m=f["".concat(u,".").concat(g)]||f[g]||p[g]||c;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9074:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=t(87462),a=t(63366),c=(t(67294),t(3905)),o=["components"],i={title:"\u540c\u6b65",weight:10},u=void 0,s={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",id:"reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",title:"\u540c\u6b65",description:"\u540c\u6b65\u662f EKS \u548c GKE \u96c6\u7fa4\u7684\u529f\u80fd\uff0c\u5b83\u4f7f Rancher \u66f4\u65b0\u96c6\u7fa4\u7684\u503c\uff0c\u4ee5\u4fbf\u5b83\u4eec\u4e0e\u6258\u7ba1\u5728 Kubernetes \u63d0\u4f9b\u5546\u4e2d\u7684\u76f8\u5e94\u96c6\u7fa4\u5bf9\u8c61\u4fdd\u6301\u4e00\u81f4\u3002\u8fd9\u4f7f\u5f97 Rancher \u4e0d\u662f\u6258\u7ba1\u96c6\u7fa4\u72b6\u6001\u7684\u552f\u4e00\u6240\u6709\u8005\u3002\u5176\u6700\u5927\u7684\u5c40\u9650\u6027\u662f\uff0c\u5728\u540c\u4e00\u65f6\u95f4\u6216\u5728 5 \u5206\u949f\u5185\u5904\u7406 Rancher \u548c\u53e6\u4e00\u4e2a\u6765\u6e90\u7684\u66f4\u65b0\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5176\u4e2d\u4e00\u4e2a\u6765\u6e90\u7684\u72b6\u6001\u88ab\u5b8c\u5168\u8986\u76d6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u540c\u6b65",weight:10},sidebar:"tutorialSidebar",previous:{title:"Rancher Agent \u9009\u9879",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options"},next:{title:"\u4e0b\u6e38\u96c6\u7fa4\u914d\u7f6e",permalink:"/zh/pages-for-subheaders/downstream-cluster-configuration"}},l={},p=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:3}],f={toc:p};function g(e){var r=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u540c\u6b65\u662f EKS \u548c GKE \u96c6\u7fa4\u7684\u529f\u80fd\uff0c\u5b83\u4f7f Rancher \u66f4\u65b0\u96c6\u7fa4\u7684\u503c\uff0c\u4ee5\u4fbf\u5b83\u4eec\u4e0e\u6258\u7ba1\u5728 Kubernetes \u63d0\u4f9b\u5546\u4e2d\u7684\u76f8\u5e94\u96c6\u7fa4\u5bf9\u8c61\u4fdd\u6301\u4e00\u81f4\u3002\u8fd9\u4f7f\u5f97 Rancher \u4e0d\u662f\u6258\u7ba1\u96c6\u7fa4\u72b6\u6001\u7684\u552f\u4e00\u6240\u6709\u8005\u3002\u5176\u6700\u5927\u7684\u5c40\u9650\u6027\u662f\uff0c\u5728\u540c\u4e00\u65f6\u95f4\u6216\u5728 5 \u5206\u949f\u5185\u5904\u7406 Rancher \u548c\u53e6\u4e00\u4e2a\u6765\u6e90\u7684\u66f4\u65b0\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5176\u4e2d\u4e00\u4e2a\u6765\u6e90\u7684\u72b6\u6001\u88ab\u5b8c\u5168\u8986\u76d6\u3002"),(0,c.kt)("h3",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,c.kt)("p",null,"\u8981\u7406\u89e3\u540c\u6b65\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u5219\u5fc5\u987b\u7406\u89e3 Rancher Cluster \u5bf9\u8c61\u4e0a\u7684\u4e24\u4e2a\u5b57\u6bb5\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u7684 config \u5bf9\u8c61\uff0c\u4f4d\u4e8e\u96c6\u7fa4\u7684\u89c4\u8303\u4e0a\uff1a"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e EKS\uff0c\u8be5\u5b57\u6bb5\u79f0\u4e3a EKSConfig"),(0,c.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e GKE\uff0c\u8be5\u5b57\u6bb5\u79f0\u4e3a GKEConfig"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"UpstreamSpec \u5bf9\u8c61"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e EKS\uff0c\u5b83\u4f4d\u4e8e\u96c6\u7fa4\u72b6\u6001\u7684 EKSStatus \u5b57\u6bb5\u4e2d\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e GKE\uff0c\u5b83\u4f4d\u4e8e\u96c6\u7fa4\u72b6\u6001\u7684 GKEStatus \u5b57\u6bb5\u4e2d\u3002")))),(0,c.kt)("p",null,"\u5b9a\u4e49\u8fd9\u4e9b\u5bf9\u8c61\u7684\u7ed3\u6784\u7c7b\u578b\u53ef\u4ee5\u5728\u5b83\u4eec\u5bf9\u5e94\u7684 operator \u9879\u76ee\u4e2d\u627e\u5230\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/rancher/eks-operator/blob/master/pkg/apis/eks.cattle.io/v1/types.go"},"eks-operator")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/rancher/gke-operator/blob/master/pkg/apis/gke.cattle.io/v1/types.go"},"gke-operator"))),(0,c.kt)("p",null,"\u9664\u96c6\u7fa4\u540d\u79f0\u3001\u4f4d\u7f6e\uff08\u533a\u57df\u6216\u5730\u533a\uff09\u3001\u5bfc\u5165\u548c\u4e91\u51ed\u8bc1\u5f15\u7528\u4e4b\u5916\uff0c\u6240\u6709\u5b57\u6bb5\u5728\u6b64 Spec \u5bf9\u8c61\u4e0a\u90fd\u662f\u53ef\u4e3a\u7a7a\u7684\u3002"),(0,c.kt)("p",null,"EKSConfig \u548c GKEConfig \u4ee3\u8868\u5176\u975e\u96f6\u503c\u7684\u671f\u671b\u72b6\u6001\u3002\u914d\u7f6e\u5bf9\u8c61\u4e2d\u975e\u96f6\u7684\u5b57\u6bb5\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u201c\u7ba1\u7406\u7684\u201d\u3002\u5728 Rancher \u4e2d\u521b\u5efa\u96c6\u7fa4\u65f6\uff0c\u6240\u6709\u5b57\u6bb5\u90fd\u662f\u975e\u96f6\u7684\uff0c\u56e0\u6b64\u90fd\u662f\u201c\u7ba1\u7406\u201d\u7684\u3002\u5728\u628a\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u96c6\u7fa4\u6ce8\u518c\u5230 Rancher \u65f6\uff0c\u6240\u6709\u53ef\u4e3a\u7a7a\u5b57\u6bb5\u90fd\u662f nil \u5e76\u4e14\u4e0d\u662f\u201c\u7ba1\u7406\u201d\u7684\u3002\u4e00\u65e6 Rancher \u66f4\u6539\u4e86\u8fd9\u4e9b\u5b57\u6bb5\u7684\u503c\uff0c\u8fd9\u4e9b\u5b57\u6bb5\u5c31\u4f1a\u88ab\u7ba1\u7406\u3002"),(0,c.kt)("p",null,'UpstreamSpec \u4ee3\u8868\u96c6\u7fa4\u5728\u6258\u7ba1\u7684 Kubernetes \u63d0\u4f9b\u5546\u4e2d\u7684\u60c5\u51b5\uff0c\u5e76\u4ee5 5 \u5206\u949f\u7684\u65f6\u95f4\u95f4\u9694\u5237\u65b0\u3002\u5237\u65b0 UpstreamSpec \u540e\uff0cRancher \u4f1a\u68c0\u67e5\u96c6\u7fa4\u662f\u5426\u6b63\u5728\u8fdb\u884c\u66f4\u65b0\u3002\u5982\u679c\u5b83\u6b63\u5728\u66f4\u65b0\uff0c\u5219\u4e0d\u505a\u4efb\u4f55\u8fdb\u4e00\u6b65\u5904\u7406\u3002\u5982\u679c\u5b83\u76ee\u524d\u6ca1\u6709\u66f4\u65b0\uff0cEKSConfig \u6216 GKEConfig \u4e0a\u7684\u4efb\u4f55 "\u7ba1\u7406" \u5b57\u6bb5\u90fd\u4f1a\u88ab\u6700\u8fd1\u66f4\u65b0\u7684 UpstreamSpec \u4e0a\u7684\u76f8\u5e94\u503c\u8986\u76d6\u3002'),(0,c.kt)("p",null,"\u6709\u6548\u7684\u671f\u671b\u72b6\u6001\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f UpstreamSpec + EKSConfig \u6216 GKEConfig \u4e2d\u7684\u6240\u6709\u975e\u96f6\u5b57\u6bb5\u3002\u8fd9\u662f UI \u4e2d\u663e\u793a\u7684\u5185\u5bb9\u3002"),(0,c.kt)("p",null,'\u5982\u679c Rancher \u548c\u53e6\u4e00\u4e2a\u6765\u6e90\u8bd5\u56fe\u5728\u540c\u4e00\u65f6\u95f4\u6216\u5728\u66f4\u65b0\u5b8c\u6210\u540e\u7684 5 \u5206\u949f\u5c1d\u8bd5\u66f4\u65b0\u96c6\u7fa4\uff0c\u90a3\u4e48\u4efb\u4f55 "\u7ba1\u7406" \u7684\u5b57\u6bb5\u90fd\u6709\u53ef\u80fd\u9677\u5165\u4e89\u7528\u72b6\u6001\u3002\u4ee5 EKS \u4e3a\u4f8b\uff0c\u96c6\u7fa4\u53ef\u80fd\u5c06 PrivateAccess \u4f5c\u4e3a\u7ba1\u7406\u5b57\u6bb5\u3002\u5982\u679c PrivateAccess \u4e3a false\uff0c\u7136\u540e\u5728 EKS \u63a7\u5236\u53f0\u4e2d\u542f\u7528\uff0c\u4e14\u5728 11:01 \u5b8c\u6210\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5728 11:05 \u4e4b\u524d\u4ece Rancher \u66f4\u65b0\u7684\u6807\u7b7e\u7684\u503c\u53ef\u80fd\u4f1a\u88ab\u8986\u76d6\u3002\u5982\u679c\u5728\u96c6\u7fa4\u5904\u7406\u66f4\u65b0\u65f6\u66f4\u65b0\u4e86\u6807\u7b7e\uff0c\u4e5f\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u3002\u5982\u679c\u96c6\u7fa4\u5df2\u6ce8\u518c\u5e76\u4e14 PrivateAccess \u5b57\u6bb5\u4e3a\u96f6\uff0c\u90a3\u4e48\u5728\u4e0a\u8ff0\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u95ee\u9898\u5e94\u8be5\u4e0d\u4f1a\u53d1\u751f\u3002'))}g.isMDXComponent=!0}}]);
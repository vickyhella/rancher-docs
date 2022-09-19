"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35053],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36167:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={title:"\u5347\u7ea7\u548c\u56de\u6eda Kubernetes",weight:70},s=void 0,p={unversionedId:"getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",id:"getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",title:"\u5347\u7ea7\u548c\u56de\u6eda Kubernetes",description:"\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684 Rancher \u4e4b\u540e\uff0c\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u53ef\u4ee5\u5347\u7ea7\u4e3a Rancher \u652f\u6301\u7684\u6700\u65b0\u7684 Kubernetes \u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade",slug:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",permalink:"/zh/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u5347\u7ea7\u548c\u56de\u6eda Kubernetes",weight:70},sidebar:"tutorialSidebar",previous:{title:"\u79bb\u7ebf\u5b89\u88c5\u4e2d\u8bbe\u7f6e\u672c\u5730 System Charts",permalink:"/zh/getting-started/installation-and-upgrade/resources/local-system-charts"},next:{title:"\u5728\u4e0d\u5347\u7ea7 Rancher \u7684\u60c5\u51b5\u4e0b\u5347\u7ea7 Kubernetes",permalink:"/zh/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"}},u={},c=[{value:"\u7ecf\u8fc7\u6d4b\u8bd5\u7684 Kubernetes \u7248\u672c",id:"\u7ecf\u8fc7\u6d4b\u8bd5\u7684-kubernetes-\u7248\u672c",level:2},{value:"\u5347\u7ea7\u7684\u5de5\u4f5c\u539f\u7406",id:"\u5347\u7ea7\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u5347\u7ea7\u7684\u6700\u4f73\u5b9e\u8df5",id:"\u5347\u7ea7\u7684\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5347\u7ea7 Kubernetes \u7248\u672c",id:"\u5347\u7ea7-kubernetes-\u7248\u672c",level:2},{value:"\u56de\u6eda",id:"\u56de\u6eda",level:2},{value:"\u914d\u7f6e\u5347\u7ea7\u7b56\u7565",id:"\u914d\u7f6e\u5347\u7ea7\u7b56\u7565",level:2},{value:"\u5728 Rancher UI \u4e2d\u914d\u7f6e\u6700\u5927\u4e0d\u53ef\u7528\u7684 Worker \u8282\u70b9",id:"\u5728-rancher-ui-\u4e2d\u914d\u7f6e\u6700\u5927\u4e0d\u53ef\u7528\u7684-worker-\u8282\u70b9",level:3},{value:"\u4f7f\u7528 Rancher UI \u5728\u5347\u7ea7\u671f\u95f4\u542f\u7528\u8282\u70b9\u6e05\u7a7a",id:"\u4f7f\u7528-rancher-ui-\u5728\u5347\u7ea7\u671f\u95f4\u542f\u7528\u8282\u70b9\u6e05\u7a7a",level:3},{value:"\u5728\u5347\u7ea7\u671f\u95f4\u7ef4\u62a4\u5e94\u7528\u7684\u53ef\u7528\u6027",id:"\u5728\u5347\u7ea7\u671f\u95f4\u7ef4\u62a4\u5e94\u7528\u7684\u53ef\u7528\u6027",level:3},{value:"\u5728 cluster.yml \u4e2d\u914d\u7f6e\u5347\u7ea7\u7b56\u7565",id:"\u5728-clusteryml-\u4e2d\u914d\u7f6e\u5347\u7ea7\u7b56\u7565",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],d={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684 Rancher \u4e4b\u540e\uff0c\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u53ef\u4ee5\u5347\u7ea7\u4e3a Rancher \u652f\u6301\u7684\u6700\u65b0\u7684 Kubernetes \u7248\u672c\u3002"),(0,l.kt)("p",null,"Rancher \u4f7f\u7528 RKE\uff08Rancher Kubernetes Engine\uff09\u6765\u9884\u7f6e\u548c\u7f16\u8f91 RKE \u96c6\u7fa4\u3002\u6709\u5173\u4e3a RKE \u96c6\u7fa4\u914d\u7f6e\u5347\u7ea7\u7b56\u7565\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE \u6587\u6863"),"\u3002"),(0,l.kt)("h2",{id:"\u7ecf\u8fc7\u6d4b\u8bd5\u7684-kubernetes-\u7248\u672c"},"\u7ecf\u8fc7\u6d4b\u8bd5\u7684 Kubernetes \u7248\u672c"),(0,l.kt)("p",null,"Rancher \u5728\u53d1\u5e03\u65b0\u7248\u672c\u4e4b\u524d\uff0c\u4f1a\u5bf9\u5176\u4e0e Kubernetes \u7684\u6700\u65b0\u6b21\u8981\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4ee5\u786e\u4fdd\u517c\u5bb9\u6027\u3002\u6709\u5173\u5404\u4e2a Rancher \u7248\u672c\u6d4b\u8bd5\u4e86\u54ea\u4e9b Kubernetes \u7248\u672c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.6.0/"},"\u652f\u6301\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,l.kt)("h2",{id:"\u5347\u7ea7\u7684\u5de5\u4f5c\u539f\u7406"},"\u5347\u7ea7\u7684\u5de5\u4f5c\u539f\u7406"),(0,l.kt)("p",null,"RKE v1.1.0 \u6539\u53d8\u4e86\u96c6\u7fa4\u5347\u7ea7\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/how-upgrades-work"},"RKE \u6587\u6863"),"\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u7f16\u8f91\u6216\u5347\u7ea7 RKE Kubernetes \u96c6\u7fa4\u65f6\u4f1a\u53d1\u751f\u7684\u60c5\u51b5\u3002"),(0,l.kt)("h2",{id:"\u5347\u7ea7\u7684\u6700\u4f73\u5b9e\u8df5"},"\u5347\u7ea7\u7684\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("p",null,"\u5728\u5347\u7ea7\u96c6\u7fa4\u7684 Kubernetes \u7248\u672c\u65f6\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u62cd\u4e00\u5f20\u5feb\u7167\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8 Kubernetes \u5347\u7ea7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u5347\u7ea7\u5931\u8d25\uff0c\u8bf7\u5c06\u96c6\u7fa4\u6062\u590d\u5230\u5347\u7ea7\u524d\u7684 Kubernetes \u7248\u672c\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"},"\u6062\u590d etcd \u548c Kubernetes \u7248\u672c"),"\u9009\u9879\u6765\u5b9e\u73b0\u3002\u5728\u6062\u590d etcd \u5feb\u7167 \u4e4b\u524d\uff0c\u8fd9\u4f1a\u5c06\u4f60\u7684\u96c6\u7fa4\u6062\u590d\u5230\u5347\u7ea7\u524d\u7684 kubernetes \u7248\u672c\u3002")),(0,l.kt)("p",null,"\u6062\u590d\u64cd\u4f5c\u5c06\u5728\u4e0d\u5904\u4e8e\u5065\u5eb7\u6216 active \u72b6\u6001\u7684\u96c6\u7fa4\u4e0a\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u5347\u7ea7-kubernetes-\u7248\u672c"},"\u5347\u7ea7 Kubernetes \u7248\u672c"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u9009\u9879\u4ec5\u9002\u7528\u4e8e ",(0,l.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 RKE Kubernetes \u96c6\u7fa4"),"\u548c",(0,l.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters#%E6%B3%A8%E5%86%8C-k3s-%E9%9B%86%E7%BE%A4%E7%9A%84%E5%85%B6%E4%BB%96%E5%8A%9F%E8%83%BD"},"\u6ce8\u518c\u7684 K3s Kubernetes \u96c6\u7fa4"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5347\u7ea7 Kubernetes \u4e4b\u524d\uff0c\u5148",(0,l.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/backup-restore-and-disaster-recovery"},"\u5907\u4efd\u4f60\u7684\u96c6\u7fa4"),"\u3002")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8fdb\u5165\u8981\u5347\u7ea7\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4ece ",(0,l.kt)("strong",{parentName:"li"},"Kubernetes \u7248\u672c")," \u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9\u8981\u7528\u4e8e\u96c6\u7fa4\u7684 Kubernetes \u7248\u672c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5f00\u59cb\u4e3a\u96c6\u7fa4\u5347\u7ea7 Kubernetes\u3002"),(0,l.kt)("h2",{id:"\u56de\u6eda"},"\u56de\u6eda"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u96c6\u7fa4\u6062\u590d\u5230\u4f7f\u7528\u5148\u524d Kubernetes \u7248\u672c\u7684\u5907\u4efd\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters#%E5%BF%AB%E7%85%A7%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"},"\u5907\u4efd\u96c6\u7fa4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup#%E4%BD%BF%E7%94%A8%E5%BF%AB%E7%85%A7%E6%81%A2%E5%A4%8D%E9%9B%86%E7%BE%A4"},"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4"))),(0,l.kt)("h2",{id:"\u914d\u7f6e\u5347\u7ea7\u7b56\u7565"},"\u914d\u7f6e\u5347\u7ea7\u7b56\u7565"),(0,l.kt)("p",null,"\u4ece RKE v1.1.0 \u5f00\u59cb\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u989d\u5916\u7684\u5347\u7ea7\u9009\u9879\uff0c\u8ba9\u4f60\u66f4\u7cbe\u7ec6\u5730\u63a7\u5236\u5347\u7ea7\u8fc7\u7a0b\u3002\u5982\u679c\u6ee1\u8db3",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability"},"\u6761\u4ef6\u548c\u8981\u6c42"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\uff0c\u4ece\u800c\u5728\u96c6\u7fa4\u5347\u7ea7\u671f\u95f4\u7ef4\u6301\u5e94\u7528\u7684\u53ef\u7528\u6027\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u914d\u7f6e\u5347\u7ea7\u7b56\u7565\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u6765\u914d\u7f6e\u7b56\u7565\u3002\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u53ef\u4ee5\u914d\u7f6e\u66f4\u591a\u9ad8\u7ea7\u9009\u9879\u3002"),(0,l.kt)("h3",{id:"\u5728-rancher-ui-\u4e2d\u914d\u7f6e\u6700\u5927\u4e0d\u53ef\u7528\u7684-worker-\u8282\u70b9"},"\u5728 Rancher UI \u4e2d\u914d\u7f6e\u6700\u5927\u4e0d\u53ef\u7528\u7684 Worker \u8282\u70b9"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u914d\u7f6e\u4e0d\u53ef\u7528 worker \u8282\u70b9\u7684\u6700\u5927\u6570\u91cf\u3002\u5728\u96c6\u7fa4\u5347\u7ea7\u671f\u95f4\uff0cworker \u8282\u70b9\u5c06\u6309\u6b64\u5927\u5c0f\u6279\u91cf\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u53ef\u7528 worker \u8282\u70b9\u7684\u6700\u5927\u6570\u91cf\u4e3a\u6240\u6709 worker \u8282\u70b9\u7684 10%\u3002\u6b64\u6570\u5b57\u53ef\u4ee5\u914d\u7f6e\u4e3a\u767e\u5206\u6bd4\u6216\u6574\u6570\u3002\u5f53\u5b9a\u4e49\u4e3a\u767e\u5206\u6bd4\u65f6\uff0c\u6279\u5927\u5c0f\u4f1a\u88ab\u56db\u820d\u4e94\u5165\u5230\u6700\u8fd1\u7684\u8282\u70b9\uff0c\u6700\u5c0f\u4e3a\u4e00\u4e2a\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u8981\u66f4\u6539 worker \u8282\u70b9\u7684\u9ed8\u8ba4\u6570\u91cf\u6216\u767e\u5206\u6bd4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8fdb\u5165\u8981\u5347\u7ea7\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u5347\u7ea7\u7b56\u7565"),"\u9009\u9879\u5361\u4e2d\uff0c\u8f93\u5165 ",(0,l.kt)("strong",{parentName:"li"},"Worker \u5e76\u53d1"),"\u4f5c\u4e3a\u56fa\u5b9a\u7684\u6570\u5b57\u6216\u767e\u5206\u6bd4\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u6570\u51cf\u53bb\u6700\u5927\u4e0d\u53ef\u7528\u8282\u70b9\u6570\u6765\u83b7\u53d6\u8be5\u6570\u5b57\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u96c6\u7fa4\u66f4\u65b0\u4e3a\u4f7f\u7528\u65b0\u7684\u5347\u7ea7\u7b56\u7565\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528-rancher-ui-\u5728\u5347\u7ea7\u671f\u95f4\u542f\u7528\u8282\u70b9\u6e05\u7a7a"},"\u4f7f\u7528 Rancher UI \u5728\u5347\u7ea7\u671f\u95f4\u542f\u7528\u8282\u70b9\u6e05\u7a7a"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRKE \u4f1a\u5728\u5347\u7ea7\u4e4b\u524d",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#manual-node-administration"},"\u5c01\u9501"),"\u6bcf\u4e2a\u8282\u70b9\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"\u6e05\u7a7a"),"\u4f1a\u5728\u5347\u7ea7\u671f\u95f4\u88ab\u7981\u7528\u3002\u5982\u679c\u5728\u96c6\u7fa4\u914d\u7f6e\u4e2d\u542f\u7528\u4e86\u6e05\u7a7a\u200b\u200b\uff0cRKE \u5c06\u5728\u5347\u7ea7\u4e4b\u524d\u5bf9\u8282\u70b9\u8fdb\u884c\u5c01\u9501\u548c\u6e05\u7a7a\u3002"),(0,l.kt)("p",null,"\u8981\u5728\u96c6\u7fa4\u5347\u7ea7\u671f\u95f4\u6e05\u7a7a\u6bcf\u4e2a\u8282\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8fdb\u5165\u8981\u542f\u7528\u8282\u70b9\u6e05\u7a7a\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u5347\u7ea7\u7b56\u7565"),"\u9009\u9879\u5361\u4e2d\uff0c\u8f6c\u5230",(0,l.kt)("strong",{parentName:"li"},"\u6e05\u7a7a\u8282\u70b9"),"\u5b57\u6bb5\u5e76\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u662f"),"\u3002controlplane \u548c worker \u8282\u70b9\u7684\u6e05\u7a7a\u662f\u5355\u72ec\u914d\u7f6e\u7684\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5982\u4f55\u5220\u9664 pod \u7684\u9009\u9879\u3002\u6709\u5173\u6bcf\u4e2a\u9009\u9879\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools#%E6%BF%80%E8%BF%9B%E5%92%8C%E5%AE%89%E5%85%A8%E7%9A%84%E6%B8%85%E7%A9%BA%E9%80%89%E9%A1%B9"},"\u672c\u8282"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u914d\u7f6e\u5bbd\u9650\u671f\u3002\u5bbd\u9650\u671f\u662f\u7ed9\u6bcf\u4e2a pod \u8fdb\u884c\u6e05\u7406\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u80fd\u8ba9 pod \u6709\u673a\u4f1a\u4f18\u96c5\u5730\u9000\u51fa\u3002Pod \u53ef\u80fd\u9700\u8981\u5b8c\u6210\u4efb\u4f55\u672a\u5b8c\u6210\u7684\u8bf7\u6c42\u3001\u56de\u6eda\u4e8b\u52a1\u6216\u5c06\u72b6\u6001\u4fdd\u5b58\u5230\u67d0\u4e9b\u5916\u90e8\u5b58\u50a8\u3002\u5982\u679c\u8be5\u503c\u4e3a\u8d1f\u6570\uff0c\u5c06\u4f7f\u7528 pod \u4e2d\u6307\u5b9a\u7684\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u914d\u7f6e\u8d85\u65f6\uff0c\u8fd9\u662f\u5728\u6e05\u7a7a\u653e\u5f03\u4e4b\u524d\u5e94\u8be5\u7ee7\u7eed\u7b49\u5f85\u7684\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u96c6\u7fa4\u66f4\u65b0\u4e3a\u4f7f\u7528\u65b0\u7684\u5347\u7ea7\u7b56\u7565\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ece Rancher v2.4.0 \u5f00\u59cb\u51fa\u73b0\u4e86\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25478"},"\u5df2\u77e5\u95ee\u9898"),"\uff0c\u5373\u4f7f etcd \u548c controlplane \u6b63\u5728\u88ab\u6e05\u7a7a\uff0c Rancher UI \u4e0d\u4f1a\u5c06\u5b83\u4eec\u7684\u72b6\u6001\u663e\u793a\u4e3a\u5df2\u6e05\u7a7a\u3002"))),(0,l.kt)("h3",{id:"\u5728\u5347\u7ea7\u671f\u95f4\u7ef4\u62a4\u5e94\u7528\u7684\u53ef\u7528\u6027"},"\u5728\u5347\u7ea7\u671f\u95f4\u7ef4\u62a4\u5e94\u7528\u7684\u53ef\u7528\u6027"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u4ece RKE v1.1.0 \u8d77\u53ef\u7528")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability/"},"RKE \u6587\u6863"),"\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u5728\u5347\u7ea7\u96c6\u7fa4\u65f6\u9632\u6b62\u5e94\u7528\u505c\u673a\u7684\u8981\u6c42\u3002"),(0,l.kt)("h3",{id:"\u5728-clusteryml-\u4e2d\u914d\u7f6e\u5347\u7ea7\u7b56\u7565"},"\u5728 cluster.yml \u4e2d\u914d\u7f6e\u5347\u7ea7\u7b56\u7565"),(0,l.kt)("p",null,"\u4f60\u901a\u8fc7\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u6765\u83b7\u5f97\u66f4\u9ad8\u7ea7\u7684\u5347\u7ea7\u7b56\u7565\u914d\u7f6e\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 RKE \u6587\u6863\u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/configuring-strategy"},"\u914d\u7f6e\u5347\u7ea7\u7b56\u7565"),"\u3002\u8fd9\u90e8\u5206\u8fd8\u5305\u62ec\u4e00\u4e2a\u7528\u4e8e\u914d\u7f6e\u5347\u7ea7\u7b56\u7565\u7684\u793a\u4f8b ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"\u3002"),(0,l.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,l.kt)("p",null,"\u5982\u679c\u5347\u7ea7\u540e\u8282\u70b9\u6ca1\u6709\u51fa\u73b0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"rke up")," \u547d\u4ee4\u4f1a\u51fa\u9519\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u53ef\u7528\u8282\u70b9\u7684\u6570\u91cf\u8d85\u8fc7\u914d\u7f6e\u7684\u6700\u5927\u503c\uff0c\u5219\u4e0d\u4f1a\u8fdb\u884c\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5347\u7ea7\u505c\u6b62\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4fee\u590d\u4e0d\u53ef\u7528\u8282\u70b9\u6216\u5c06\u5176\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\uff0c\u7136\u540e\u624d\u80fd\u7ee7\u7eed\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u5931\u8d25\u7684\u8282\u70b9\u53ef\u80fd\u5904\u4e8e\u8bb8\u591a\u4e0d\u540c\u7684\u72b6\u6001\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u673a"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u6e05\u7a7a\u4e86\u8282\u70b9\uff0c\u56e0\u6b64\u8282\u70b9\u4e0a\u6ca1\u6709 kubelet"),(0,l.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u672c\u8eab\u5931\u8d25")),(0,l.kt)("p",null,"\u5982\u679c\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u8fbe\u5230\u6700\u5927\u4e0d\u53ef\u7528\u8282\u70b9\u6570\uff0cRancher \u7684\u4e0b\u6e38\u96c6\u7fa4\u5c06\u505c\u7559\u5728\u66f4\u65b0\u4e2d\u7684\u72b6\u6001\uff0c\u5e76\u4e14\u4e0d\u4f1a\u7ee7\u7eed\u5347\u7ea7\u5176\u4ed6 controlplane \u8282\u70b9\u3002\u5b83\u5c06\u7ee7\u7eed\u8bc4\u4f30\u4e0d\u53ef\u7528\u7684\u8282\u70b9\u96c6\uff0c\u4ee5\u9632\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\u53d8\u5f97\u53ef\u7528\u3002\u5982\u679c\u65e0\u6cd5\u4fee\u590d\u8282\u70b9\uff0c\u5219\u5fc5\u987b\u79fb\u9664\u8282\u70b9\u624d\u80fd\u7ee7\u7eed\u5347\u7ea7\u3002"))}k.isMDXComponent=!0}}]);
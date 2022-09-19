"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[28029],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||l;return a?r.createElement(u,i(i({ref:t},o),{},{components:a})):r.createElement(u,i({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79557:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],s={title:"\u5347\u7ea7",weight:2},p=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",title:"\u5347\u7ea7",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5347\u7ea7\u4f7f\u7528 Helm \u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u7684 Rancher Server\u3002\u8fd9\u4e9b\u6b65\u9aa4\u4e5f\u9002\u7528\u4e8e\u4f7f\u7528 Helm \u8fdb\u884c\u7684\u79bb\u7ebf\u5b89\u88c5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u5347\u7ea7",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u56de\u6eda",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},next:{title:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u6e32\u67d3 Helm \u6a21\u677f",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"}},o={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u8bbf\u95ee kubeconfig",id:"\u8bbf\u95ee-kubeconfig",level:3},{value:"\u67e5\u770b\u5df2\u77e5\u95ee\u9898",id:"\u67e5\u770b\u5df2\u77e5\u95ee\u9898",level:3},{value:"Helm \u7248\u672c",id:"helm-\u7248\u672c",level:3},{value:"\u79bb\u7ebf\u5b89\u88c5\uff1a\u63a8\u9001\u955c\u50cf\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",id:"\u79bb\u7ebf\u5b89\u88c5\u63a8\u9001\u955c\u50cf\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",level:3},{value:"\u5347\u7ea7 Rancher Server \u5e76\u4f7f\u7528\u9690\u85cf\u7684\u672c\u5730\u96c6\u7fa4",id:"\u5347\u7ea7-rancher-server-\u5e76\u4f7f\u7528\u9690\u85cf\u7684\u672c\u5730\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528 cert-manager 0.8.0 \u4e4b\u524d\u7684\u7248\u672c\u5347\u7ea7",id:"\u4f7f\u7528-cert-manager-080-\u4e4b\u524d\u7684\u7248\u672c\u5347\u7ea7",level:3},{value:"\u5347\u7ea7\u6982\u8981",id:"\u5347\u7ea7\u6982\u8981",level:2},{value:"1. \u5907\u4efd\u8fd0\u884c Rancher Server \u7684 Kubernetes \u96c6\u7fa4",id:"1-\u5907\u4efd\u8fd0\u884c-rancher-server-\u7684-kubernetes-\u96c6\u7fa4",level:3},{value:"2. \u66f4\u65b0 Helm Chart \u4ed3\u5e93",id:"2-\u66f4\u65b0-helm-chart-\u4ed3\u5e93",level:3},{value:"3. \u5347\u7ea7 Rancher",id:"3-\u5347\u7ea7-rancher",level:3},{value:"Rancher \u5347\u7ea7\u6b65\u9aa4",id:"rancher-\u5347\u7ea7\u6b65\u9aa4",level:4},{value:"4. \u9a8c\u8bc1\u5347\u7ea7",id:"4-\u9a8c\u8bc1\u5347\u7ea7",level:3},{value:"\u5df2\u77e5\u5347\u7ea7\u95ee\u9898",id:"\u5df2\u77e5\u5347\u7ea7\u95ee\u9898",level:2}],d={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5347\u7ea7\u4f7f\u7528 Helm \u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u7684 Rancher Server\u3002\u8fd9\u4e9b\u6b65\u9aa4\u4e5f\u9002\u7528\u4e8e\u4f7f\u7528 Helm \u8fdb\u884c\u7684\u79bb\u7ebf\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u4f7f\u7528 Docker \u5b89\u88c5\u7684 Rancher \u7684\u5347\u7ea7\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"\u672c\u9875\u3002")),(0,l.kt)("p",null,"\u5982\u9700\u5347\u7ea7 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u7ec4\u4ef6\uff0c\u6216 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/"},"Kubernetes services")," \u6216 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"\u9644\u52a0\u7ec4\u4ef6\uff08add-on\uff09"),"\u7684\u5b9a\u4e49\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/"},"RKE \u5347\u7ea7\u6587\u6863"),"\u7684 Rancher Kubernetes \u5f15\u64ce\u3002"),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("h3",{id:"\u8bbf\u95ee-kubeconfig"},"\u8bbf\u95ee kubeconfig"),(0,l.kt)("p",null,"Helm \u7684\u8fd0\u884c\u4f4d\u7f6e\uff0c\u5e94\u8be5\u4e0e\u4f60\u7684 kubeconfig \u6587\u4ef6\uff0c\u6216\u4f60\u8fd0\u884c kubectl \u547d\u4ee4\u7684\u4f4d\u7f6e\u76f8\u540c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u5b89\u88c5 Kubernetes \u65f6\u4f7f\u7528\u4e86 RKE\uff0c\u90a3\u4e48 config \u5c06\u4f1a\u5728\u4f60\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rke up")," \u7684\u76ee\u5f55\u4e0b\u521b\u5efa\u3002"),(0,l.kt)("p",null,"kubeconfig \u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," \u6807\u7b7e\uff08\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm/"},"https://helm.sh/docs/helm/helm/")," \uff09\u6765\u624b\u52a8\u6307\u5b9a\u6240\u9700\u7684\u96c6\u7fa4\u3002"),(0,l.kt)("h3",{id:"\u67e5\u770b\u5df2\u77e5\u95ee\u9898"},"\u67e5\u770b\u5df2\u77e5\u95ee\u9898"),(0,l.kt)("p",null,"\u5982\u9700\u67e5\u770b\u6bcf\u4e2a Rancher \u7248\u672c\u7684\u5df2\u77e5\u95ee\u9898\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," \u4e2d\u7684\u53d1\u884c\u8bf4\u660e\uff0c\u6216\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher \u8bba\u575b"),"\u3002"),(0,l.kt)("p",null,"\u4e0d\u652f\u6301 ",(0,l.kt)("em",{parentName:"p"},"\u5347\u7ea7")," \u6216 ",(0,l.kt)("em",{parentName:"p"},"\u5347\u7ea7\u5230")," ",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/installation-references/helm-chart-options#helm-chart-%E4%BB%93%E5%BA%93"},"rancher-alpha \u4ed3\u5e93"),"\u4e2d\u7684\u4efb\u4f55 Chart\u3002"),(0,l.kt)("h3",{id:"helm-\u7248\u672c"},"Helm \u7248\u672c"),(0,l.kt)("p",null,"\u672c\u5b89\u88c5\u6307\u5357\u5047\u5b9a\u4f60\u4f7f\u7528\u7684\u662f Helm 3\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Helm 2\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 \u8fc1\u79fb\u5230 Helm 3 \u6587\u6863"),"\u3002\u5982\u679c\u4f60\u4e0d\u80fd\u5347\u7ea7\u5230 Helm 3\uff0c",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2"},"Helm 2 \u5347\u7ea7\u9875\u9762"),"\u63d0\u4f9b\u4e86\u4f7f\u7528 Helm 2 \u5347\u7ea7\u7684\u65e7\u5347\u7ea7\u6307\u5357\u3002"),(0,l.kt)("h3",{id:"\u79bb\u7ebf\u5b89\u88c5\u63a8\u9001\u955c\u50cf\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"},"\u79bb\u7ebf\u5b89\u88c5\uff1a\u63a8\u9001\u955c\u50cf\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/air-gapped-helm-cli-install"},"\u4ec5\u9002\u7528\u4e8e\u79bb\u7ebf\u5b89\u88c5"),"\uff1a\u4e3a\u65b0\u7684 Rancher Server \u7248\u672c\u6536\u96c6\u548c\u63a8\u9001\u955c\u50cf\u3002\u4f7f\u7528\u4f60\u9700\u8981\u9488\u5bf9 Rancher \u7248\u672c\u5347\u7ea7\u7684\u955c\u50cf\uff0c\u6309\u7167\u6b65\u9aa4",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"\u63a8\u9001\u955c\u50cf\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),"\u3002"),(0,l.kt)("h3",{id:"\u5347\u7ea7-rancher-server-\u5e76\u4f7f\u7528\u9690\u85cf\u7684\u672c\u5730\u96c6\u7fa4"},"\u5347\u7ea7 Rancher Server \u5e76\u4f7f\u7528\u9690\u85cf\u7684\u672c\u5730\u96c6\u7fa4"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4ece\u4f7f\u7528 Helm Chart \u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"p"},"--add-local=false")," \u542f\u52a8\u7684 Rancher Server \u5347\u7ea7\u5230 Rancher 2.5\uff0c\u4f60\u9700\u8981\u5728\u5347\u7ea7\u65f6\u53d6\u6d88\u8be5\u6807\u5fd7\u3002\u5426\u5219\uff0cRancher Server \u5c06\u65e0\u6cd5\u542f\u52a8\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"restricted-admin")," \u89d2\u8272\u53ef\u4ee5\u7ee7\u7eed\u7528\u6765\u9650\u5236\u5bf9\u672c\u5730\u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#%E5%9C%A8-rancher-%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%9A%90%E8%97%8F%E7%9A%84-local-%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E5%8D%87%E7%BA%A7"},"\u672c\u7ae0\u8282"),"\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528-cert-manager-080-\u4e4b\u524d\u7684\u7248\u672c\u5347\u7ea7"},"\u4f7f\u7528 cert-manager 0.8.0 \u4e4b\u524d\u7684\u7248\u672c\u5347\u7ea7"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"\u4ece 2019 \u5e74 11 \u6708 1 \u65e5\u5f00\u59cb\uff0cLet's Encrypt \u5df2\u5c4f\u853d\u65e9\u4e8e 0.8.0 \u7684 cert-manager \u5b9e\u4f8b"),"\u3002\u56e0\u6b64\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"\u8bf4\u660e"),"\u628a cert-manager \u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u3002"),(0,l.kt)("h2",{id:"\u5347\u7ea7\u6982\u8981"},"\u5347\u7ea7\u6982\u8981"),(0,l.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5347\u7ea7 Rancher Server\uff1a"),(0,l.kt)("h3",{id:"1-\u5907\u4efd\u8fd0\u884c-rancher-server-\u7684-kubernetes-\u96c6\u7fa4"},"1. \u5907\u4efd\u8fd0\u884c Rancher Server \u7684 Kubernetes \u96c6\u7fa4"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"\u5907\u4efd\u5e94\u7528"),"\u6765\u5907\u4efd Rancher\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u95ee\u9898\uff0c\u4f60\u5c06\u4f7f\u7528\u5907\u4efd\u4f5c\u4e3a\u8fd8\u539f\u70b9\u3002"),(0,l.kt)("h3",{id:"2-\u66f4\u65b0-helm-chart-\u4ed3\u5e93"},"2. \u66f4\u65b0 Helm Chart \u4ed3\u5e93"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u66f4\u65b0\u672c\u5730 Helm \u4ed3\u5e93\u7f13\u5b58\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo update\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u83b7\u53d6\u4f60\u7528\u6765\u5b89\u88c5 Rancher \u7684\u4ed3\u5e93\u540d\u79f0\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5173\u4e8e\u4ed3\u5e93\u53ca\u5176\u533a\u522b\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/installation-references/helm-chart-options#helm-chart-%E4%BB%93%E5%BA%93"},"Helm Chart Repositories"),"\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Latest\uff1a\u5efa\u8bae\u7528\u4e8e\u8bd5\u7528\u6700\u65b0\u529f\u80fd",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,l.kt)("li",{parentName:"ul"},"Stable\uff1a\u5efa\u8bae\u7528\u4e8e\u751f\u4ea7\u73af\u5883",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,l.kt)("li",{parentName:"ul"},"Alpha\uff1a\u5373\u5c06\u53d1\u5e03\u7684\u5b9e\u9a8c\u6027\u9884\u89c8\u3002",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))," \u6ce8\u610f\uff1a\u4e0d\u652f\u6301\u5347\u7ea7\u5230 Alpha \u7248\u3001\u4ece Alpha \u7248\u5347\u7ea7\u6216\u5728 Alpha \u7248\u4e4b\u95f4\u5347\u7ea7\u3002")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo list\n\nNAME                   URL\nstable                 https://charts.helm.sh/stable\nrancher-<CHART_REPO>     https://releases.rancher.com/server-charts/<CHART_REPO>\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u60f3\u5207\u6362\u5230\u4e0d\u540c\u7684 Helm Chart \u4ed3\u5e93\uff0c\u8bf7\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/choose-a-rancher-version#%E5%88%87%E6%8D%A2%E5%88%B0%E5%8F%A6%E4%B8%80%E4%B8%AA-helm-chart-%E4%BB%93%E5%BA%93"},"\u5207\u6362\u4ed3\u5e93\u6b65\u9aa4"),"\u8fdb\u884c\u64cd\u4f5c\u3002\u5982\u679c\u4f60\u8981\u5207\u6362\u4ed3\u5e93\uff0c\u8bf7\u5148\u518d\u6b21\u5217\u51fa\u4ed3\u5e93\uff0c\u518d\u7ee7\u7eed\u6267\u884c\u6b65\u9aa4 3\uff0c\u4ee5\u786e\u4fdd\u6dfb\u52a0\u4e86\u6b63\u786e\u7684\u4ed3\u5e93\u3002")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4ece Helm Chart \u4ed3\u5e93\u83b7\u53d6\u6700\u65b0\u7684 Chart \u6765\u5b89\u88c5 Rancher\u3002"),(0,l.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u5c06\u63d0\u53d6\u6700\u65b0\u7684 Chart\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},".tgz"),"\u6587\u4ef6\u4fdd\u5b58\u5728\u5f53\u524d\u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher\n")),(0,l.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--version=")," \u6807\u8bb0\uff0c\u6765\u6307\u5b9a\u8981\u5347\u7ea7\u7684\u76ee\u6807 Chart \u7248\u672c\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher --version=v2.4.11\n")))),(0,l.kt)("h3",{id:"3-\u5347\u7ea7-rancher"},"3. \u5347\u7ea7 Rancher"),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Helm \u5347\u7ea7 Rancher \u7684\u4e00\u822c\uff08\u4e92\u8054\u7f51\u8fde\u63a5\uff09\u6216\u79bb\u7ebf\u5b89\u88c5\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u79bb\u7ebf\u8bf4\u660e\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 Rancher\uff0c\u8bf7\u8df3\u8fc7\u672c\u9875\u7684\u5176\u4f59\u90e8\u5206\uff0c\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"},"\u672c\u9875"),"\u4e0a\u7684\u8bf4\u660e\u6e32\u67d3 Helm \u6a21\u677f\u3002"))),(0,l.kt)("p",null,"\u4ece\u5f53\u524d\u5b89\u88c5\u7684 Rancher Helm Chart \u4e2d\u83b7\u53d6\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--set"),"\u4f20\u9012\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system\n\nhostname: rancher.my.org\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5217\u51fa\u66f4\u591a\u7684\u503c\u3002\u6b64\u5904\u5c55\u793a\u7684\u53ea\u662f\u5176\u4e2d\u4e00\u4e2a\u503c\u7684\u4f8b\u5b50\u3002"))),(0,l.kt)("p",null,"\u5982\u679c\u8981\u5c06 cert-manager \u4ece v1.5 \u6216\u66f4\u65e9\u7684\u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/upgrade-cert-manager#%E9%80%89%E9%A1%B9-c%EF%BC%9A%E5%8D%87%E7%BA%A7-1.5-%E5%8F%8A%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E7%9A%84-cert-manager"},"cert-manager upgrade docs")," \u4e86\u89e3\u5982\u4f55\u5728\u4e0d\u5378\u8f7d\u6216\u91cd\u65b0\u5b89\u88c5 Rancher \u7684\u60c5\u51b5\u4e0b\u5347\u7ea7 cert-manager\u3002\u5426\u5219\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b",(0,l.kt)("a",{parentName:"p",href:"#rancher-%E5%8D%87%E7%BA%A7%E6%AD%A5%E9%AA%A4"}," Rancher \u5347\u7ea7\u6b65\u9aa4"),"\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,l.kt)("h4",{id:"rancher-\u5347\u7ea7\u6b65\u9aa4"},"Rancher \u5347\u7ea7\u6b65\u9aa4"),(0,l.kt)("p",null,"\u4fdd\u7559\u4f60\u7684\u6240\u6709\u8bbe\u7f6e\u628a Rancher \u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u5c06\u4e0a\u4e00\u6b65\u4e2d\u7684\u6240\u6709\u503c\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value"),"\u8ffd\u52a0\u5230\u547d\u4ee4\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ee5\u4e0a\u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u53ef\u80fd\u6709\u66f4\u591a\u4e0a\u4e00\u6b65\u7684\u503c\u9700\u8981\u8ffd\u52a0\u3002"))),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5f53\u524d\u7684\u503c\u5bfc\u51fa\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5e76\u5728\u5347\u7ea7\u65f6\u5f15\u7528\u8be5\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u53ea\u9700\u8981\u6539\u53d8 Rancher \u7684\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system -o yaml > values.yaml\n\nhelm upgrade rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  -f values.yaml \\\n  --version=2.4.5\n")),(0,l.kt)("h3",{id:"4-\u9a8c\u8bc1\u5347\u7ea7"},"4. \u9a8c\u8bc1\u5347\u7ea7"),(0,l.kt)("p",null,"\u767b\u5f55 Rancher \u4ee5\u786e\u8ba4\u5347\u7ea7\u6210\u529f\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5347\u7ea7\u540e\u51fa\u73b0\u7f51\u7edc\u95ee\u9898"),(0,l.kt)("p",{parentName:"div"},"\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"\u6062\u590d\u96c6\u7fa4\u7f51\u7edc"),"\u3002"))),(0,l.kt)("h2",{id:"\u5df2\u77e5\u5347\u7ea7\u95ee\u9898"},"\u5df2\u77e5\u5347\u7ea7\u95ee\u9898"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," \u53d1\u5e03\u8bf4\u660e\u4ee5\u53ca ",(0,l.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher \u8bba\u575b"),"\u4e2d\u627e\u5230\u6bcf\u4e2a Rancher \u7248\u672c\u7684\u5df2\u77e5\u95ee\u9898\u3002"))}h.isMDXComponent=!0}}]);
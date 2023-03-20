"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(d,i(i({ref:t},k),{},{components:n})):a.createElement(d,i({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"3. \u5b89\u88c5 Kubernetes\uff08Docker \u5b89\u88c5\u8bf7\u8df3\u8fc7\uff09"},i=void 0,s={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",id:"version-2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",title:"3. \u5b89\u88c5 Kubernetes\uff08Docker \u5b89\u88c5\u8bf7\u8df3\u8fc7\uff09",description:"\u5982\u679c\u4f60\u4f7f\u7528 Docker \u5728\u5355\u4e2a\u8282\u70b9\u4e0a\u5b89\u88c5 Rancher\uff0c\u8bf7\u8df3\u8fc7\u672c\u8282\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"3. \u5b89\u88c5 Kubernetes\uff08Docker \u5b89\u88c5\u8bf7\u8df3\u8fc7\uff09"},sidebar:"tutorialSidebar",previous:{title:"2. \u6536\u96c6\u955c\u50cf\u5e76\u53d1\u5e03\u5230\u79c1\u6709\u4ed3\u5e93",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},next:{title:"4. \u5b89\u88c5 Rancher",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"}},o={},p=[{value:"\u5b89\u88c5\u6982\u8981",id:"\u5b89\u88c5\u6982\u8981",level:3},{value:"1. \u51c6\u5907\u955c\u50cf\u76ee\u5f55",id:"1-\u51c6\u5907\u955c\u50cf\u76ee\u5f55",level:3},{value:"2. \u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML",id:"2-\u521b\u5efa\u955c\u50cf\u4ed3\u5e93-yaml",level:3},{value:"3. \u5b89\u88c5 K3s",id:"3-\u5b89\u88c5-k3s",level:3},{value:"4. \u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528 kubeconfig \u6587\u4ef6",id:"4-\u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528-kubeconfig-\u6587\u4ef6",level:3},{value:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u5b89\u88c5\u6982\u8981",id:"\u5b89\u88c5\u6982\u8981-1",level:3},{value:"1. \u521b\u5efa RKE2 \u914d\u7f6e",id:"1-\u521b\u5efa-rke2-\u914d\u7f6e",level:3},{value:"2. \u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML",id:"2-\u521b\u5efa\u955c\u50cf\u4ed3\u5e93-yaml-1",level:3},{value:"3. \u5b89\u88c5 RKE2",id:"3-\u5b89\u88c5-rke2",level:3},{value:"4. \u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528 kubeconfig \u6587\u4ef6",id:"4-\u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528-kubeconfig-\u6587\u4ef6-1",level:3},{value:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879-1",level:3},{value:"1. \u5b89\u88c5 RKE",id:"1-\u5b89\u88c5-rke",level:3},{value:"2. \u521b\u5efa RKE \u914d\u7f6e\u6587\u4ef6",id:"2-\u521b\u5efa-rke-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"3. \u8fd0\u884c RKE",id:"3-\u8fd0\u884c-rke",level:3},{value:"4. \u4fdd\u5b58\u4f60\u7684\u6587\u4ef6",id:"4-\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=k("Tabs"),c=k("TabItem"),m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528 Docker \u5728\u5355\u4e2a\u8282\u70b9\u4e0a\u5b89\u88c5 Rancher\uff0c\u8bf7\u8df3\u8fc7\u672c\u8282\u3002")),(0,r.kt)("p",null,"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u6839\u636e ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/rancher-manager-architecture/architecture-recommendations#kubernetes-%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83"},"Rancher Server \u73af\u5883\u7684\u6700\u4f73\u5b9e\u8df5"),"\u6765\u5b89\u88c5 Kubernetes \u96c6\u7fa4\u3002\u8be5\u96c6\u7fa4\u9700\u8981\u4e13\u7528\u4e8e\u8fd0\u884c Rancher Server\u3002"),(0,r.kt)("p",null,"Rancher \u53ef\u4ee5\u5b89\u88c5\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5305\u62ec\u6258\u7ba1\u7684 Kubernetes\u3002"),(0,r.kt)("p",null,"\u5728 RKE\u3001RKE2 \u6216 K3s \u4e0a\u79bb\u7ebf\u5b89\u88c5 Kubernetes \u96c6\u7fa4\u7684\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"K3s",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u521b\u5efa\u4e86\u8282\u70b9\uff0c\u5e76\u4e14\u5728\u5821\u5792\u670d\u52a1\u5668\u4e0a\u6709\u4e00\u4e2a\u5b89\u5168\u7684 Docker \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5\u6982\u8981"},"\u5b89\u88c5\u6982\u8981"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-%E5%87%86%E5%A4%87%E9%95%9C%E5%83%8F%E7%9B%AE%E5%BD%95"},"\u51c6\u5907\u955c\u50cf\u76ee\u5f55")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-%E5%88%9B%E5%BB%BA%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93-yaml"},"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-%E5%AE%89%E8%A3%85-k3s"},"\u5b89\u88c5 K3s")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#4-%E4%BF%9D%E5%AD%98%E5%B9%B6%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-kubeconfig-%E6%96%87%E4%BB%B6"},"\u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528 kubeconfig \u6587\u4ef6"))),(0,r.kt)("h3",{id:"1-\u51c6\u5907\u955c\u50cf\u76ee\u5f55"},"1. \u51c6\u5907\u955c\u50cf\u76ee\u5f55"),(0,r.kt)("p",null,"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases"},"Releases")," \u9875\u9762\u83b7\u53d6\u8981\u8fd0\u884c\u7684 K3s \u7248\u672c\u7684\u955c\u50cf tar \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u542f\u52a8 K3s \u4e4b\u524d\uff0c\u5c06\u8fd9\u4e2a tar \u6587\u4ef6\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"images")," \u76ee\u5f55\u4e2d\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/\n")),(0,r.kt)("h3",{id:"2-\u521b\u5efa\u955c\u50cf\u4ed3\u5e93-yaml"},"2. \u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML"),(0,r.kt)("p",null,"\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\u521b\u5efa\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml")," \u4e2d\u3002\u6b64\u6587\u4ef6\u4e3a K3s \u63d0\u4f9b\u8fde\u63a5\u5230\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u5728\u52a0\u5165\u5fc5\u8981\u4fe1\u606f\u4e4b\u524d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nmirrors:\n  customreg:\n    endpoint:\n      - "https://ip-to-server:5000"\nconfigs:\n  customreg:\n    auth:\n      username: xxxxxx # \u955c\u50cf\u4ed3\u5e93\u7684\u7528\u6237\u540d\n      password: xxxxxx # \u955c\u50cf\u4ed3\u5e93\u7684\u5bc6\u7801\n    tls:\n      cert_file: <\u955c\u50cf\u4ed3\u5e93\u6240\u7528\u7684\u8bc1\u4e66\u6587\u4ef6\u8def\u5f84>\n      key_file:  <\u955c\u50cf\u4ed3\u5e93\u6240\u7528\u7684\u5bc6\u94a5\u6587\u4ef6\u8def\u5f84>\n      ca_file: <\u955c\u50cf\u4ed3\u5e93\u6240\u7528\u7684 CA \u6587\u4ef6\u8def\u5f84>\n')),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u76ee\u524d\uff0cK3s \u4ec5\u652f\u6301\u5b89\u5168\u7684\u955c\u50cf\u4ed3\u5e93\uff08\u5e26\u6709\u81ea\u5b9a\u4e49 CA \u7684 SSL\uff09\u3002"),(0,r.kt)("p",null,"\u6709\u5173 K3s \u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"K3s \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"3-\u5b89\u88c5-k3s"},"3. \u5b89\u88c5 K3s"),(0,r.kt)("p",null,"Rancher \u9700\u8981\u5b89\u88c5\u5728\u652f\u6301\u7684 Kubernetes \u7248\u672c\u4e0a\u3002\u5982\u9700\u4e86\u89e3\u4f60\u4f7f\u7528\u7684 Rancher \u7248\u672c\u652f\u6301\u54ea\u4e9b Kubernetes \u7248\u672c\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u6307\u5b9a K3s \u7248\u672c\uff0c\u5728\u8fd0\u884c K3s \u5b89\u88c5\u811a\u672c\u65f6\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_VERSION")," \u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases"},"Releases")," \u9875\u9762\u83b7\u53d6 K3s \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u8981\u5339\u914d\u7528\u4e8e\u83b7\u53d6\u79bb\u7ebf\u955c\u50cf\u7684 tar \u7248\u672c\u3002\n\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://get.k3s.io"},"K3s \u5b89\u88c5\u811a\u672c"),"\u4ee5\u83b7\u53d6 K3s \u7684\u5b89\u88c5\u811a\u672c\u3002"),(0,r.kt)("p",null,"\u5c06\u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5230\u6bcf\u4e2a\u8282\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," \u4e2d\u3002\n\u5c06\u5b89\u88c5\u811a\u672c\u653e\u5728\u6bcf\u4e2a\u8282\u70b9\u7684\u4efb\u610f\u4f4d\u7f6e\uff0c\u5e76\u5c06\u811a\u672c\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh"),"\u3002"),(0,r.kt)("p",null,"\u5728\u6bcf\u4e2a Server \u4e0a\u5b89\u88c5 K3s\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n")),(0,r.kt)("p",null,"\u5728\u6bcf\u4e2a Agent \u4e0a\u5b89\u88c5 K3s\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken ./install.sh\n")),(0,r.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"myserver")," \u66ff\u6362\u4e3a Server \u7684 IP \u6216\u6709\u6548 DNS\uff0c\u5e76\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"mynodetoken")," \u66ff\u6362\u4e3a Server \u8282\u70b9\u4e0a\u7684 node-token\u3002\nnode-token \u4f4d\u4e8e Server \u8282\u70b9\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/node-token"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"K3s \u81ea\u52a8\u4e3a kubelets \u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"--resolv-conf")," \u6807\u5fd7\uff0c\u8be5\u6807\u5fd7\u53ef\u80fd\u5bf9\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u914d\u7f6e DNS \u6709\u5e2e\u52a9\u3002")),(0,r.kt)("h3",{id:"4-\u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528-kubeconfig-\u6587\u4ef6"},"4. \u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528 kubeconfig \u6587\u4ef6"),(0,r.kt)("p",null,"\u5728\u6bcf\u4e2a Rancher Server \u8282\u70b9\u5b89\u88c5 K3s \u65f6\uff0c\u4f1a\u5728\u6bcf\u4e2a\u8282\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml")," \u4e2d\u751f\u6210\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u5305\u542b\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002\u8bf7\u5c06\u8be5\u6587\u4ef6\u4fdd\u5b58\u5728\u5b89\u5168\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5982\u8981\u4f7f\u7528\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177 ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236 ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")," \u6587\u4ef6\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u4e3b\u673a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," \u76ee\u5f55\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 kubeconfig \u6587\u4ef6\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"server")," \u7684\u53c2\u6570\u4e3a localhost\u3002\u4f60\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"server")," \u914d\u7f6e\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668\u7684 DNS\uff0c\u5e76\u6307\u5b9a\u7aef\u53e3 6443\uff08\u901a\u8fc7\u7aef\u53e3 6443 \u8bbf\u95ee Kubernetes API Server\uff0c\u901a\u8fc7\u7aef\u53e3 80 \u548c 443 \u8bbf\u95ee Rancher Server\uff09\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s.yaml")," \u793a\u4f8b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # \u7f16\u8f91\u6b64\u884c\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u7ba1\u7406\u4f60\u7684 K3s \u96c6\u7fa4\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff0c\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u65f6\uff0c\u4f60\u53ef\u4ee5\u4f20\u5165\u6587\u4ef6\u8def\u5f84\u6765\u6307\u5b9a\u8981\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/k3s.yaml get pods --all-namespaces\n")),(0,r.kt)("p",null,"\u6709\u5173 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/cluster-access/"},"K3s \u5b98\u65b9\u6587\u6863")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"}," Kubernetes \u5b98\u65b9\u6587\u6863"),"\u4e2d\u5173\u4e8e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u7ba1\u7406\u96c6\u7fa4\u8bbf\u95ee\u7684\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"},"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b8c\u6210\u79bb\u7ebf\u73af\u5883\u7684\u5347\u7ea7\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"Releases")," \u9875\u9762\u4e0b\u8f7d\u8981\u5347\u7ea7\u7684 K3s \u7248\u672c\u7684\u65b0\u79bb\u7ebf\u955c\u50cf tar \u5305\u3002\u5c06 tar \u6587\u4ef6\u653e\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/images/")," \u76ee\u5f55\u4e2d\u3002\u5220\u9664\u65e7\u7684 tar \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236\u5e76\u66ff\u6362\u6bcf\u4e2a\u8282\u70b9\u4e0a ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," \u4e2d\u7684\u65e7 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u590d\u5236 ",(0,r.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"K3s \u5b89\u88c5\u811a\u672c"),"\uff08\u56e0\u4e3a\u811a\u672c\u53ef\u80fd\u81ea\u4e0a\u6b21\u7248\u672c\u53d1\u5e03\u4ee5\u6765\u5df2\u66f4\u6539\uff09\u3002\u4f7f\u7528\u76f8\u540c\u7684\u73af\u5883\u53d8\u91cf\u518d\u6b21\u8fd0\u884c\u811a\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u542f K3s \u670d\u52a1\uff08\u5982\u679c\u5b89\u88c5\u7a0b\u5e8f\u6ca1\u6709\u81ea\u52a8\u91cd\u542f K3s \u7684\u8bdd\uff09\u3002"))),(0,r.kt)(c,{value:"RKE2",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u521b\u5efa\u4e86\u8282\u70b9\uff0c\u5e76\u4e14\u5728\u5821\u5792\u670d\u52a1\u5668\u4e0a\u6709\u4e00\u4e2a\u5b89\u5168\u7684 Docker \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5\u6982\u8981-1"},"\u5b89\u88c5\u6982\u8981"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-%E5%88%9B%E5%BB%BA-rke2-%E9%85%8D%E7%BD%AE"},"\u521b\u5efa RKE2 \u914d\u7f6e")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-%E5%88%9B%E5%BB%BA%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93-yaml"},"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-%E5%AE%89%E8%A3%85-rke2"},"\u5b89\u88c5 RKE2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#4-%E4%BF%9D%E5%AD%98%E5%B9%B6%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-kubeconfig-%E6%96%87%E4%BB%B6"},"\u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528 kubeconfig \u6587\u4ef6"))),(0,r.kt)("h3",{id:"1-\u521b\u5efa-rke2-\u914d\u7f6e"},"1. \u521b\u5efa RKE2 \u914d\u7f6e"),(0,r.kt)("p",null,"\u628a config.yaml \u6587\u4ef6\u521b\u5efa\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml")," \u4e2d\u3002\u8fd9\u5c06\u5305\u542b\u521b\u5efa\u9ad8\u53ef\u7528 RKE2 \u96c6\u7fa4\u6240\u9700\u7684\u6240\u6709\u914d\u7f6e\u9009\u9879\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u53f0\u670d\u52a1\u5668\u7684\u6700\u4f4e\u914d\u7f6e\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"token: my-shared-secret\ntls-san:\n  - loadbalancer-dns-domain.com\n")),(0,r.kt)("p",null,"\u5176\u4ed6\u670d\u52a1\u5668\u7684\u914d\u7f6e\u6587\u4ef6\u5e94\u8be5\u5305\u542b\u76f8\u540c\u7684\u4ee4\u724c\uff0c\u5e76\u8ba9 RKE2 \u77e5\u9053\u8981\u8fde\u63a5\u5230\u73b0\u6709\u7684\u7b2c\u4e00\u53f0\u670d\u52a1\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server: https://ip-of-first-server:9345\ntoken: my-shared-secret\ntls-san:\n  - loadbalancer-dns-domain.com\n")),(0,r.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/ha/"},"RKE2 \u6587\u6863"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"RKE2 \u81ea\u52a8\u4e3a kubelets \u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"resolv-conf")," \u9009\u9879\uff0c\u8be5\u6807\u5fd7\u53ef\u80fd\u5bf9\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u914d\u7f6e DNS \u6709\u5e2e\u52a9\u3002")),(0,r.kt)("h3",{id:"2-\u521b\u5efa\u955c\u50cf\u4ed3\u5e93-yaml-1"},"2. \u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML"),(0,r.kt)("p",null,"\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\u521b\u5efa\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/registries.yaml")," \u4e2d\u3002\u6b64\u6587\u4ef6\u4e3a RKE2 \u63d0\u4f9b\u8fde\u63a5\u5230\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u5728\u52a0\u5165\u5fc5\u8981\u4fe1\u606f\u4e4b\u524d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\nmirrors:\n  customreg:\n    endpoint:\n      - "https://ip-to-server:5000"\nconfigs:\n  customreg:\n    auth:\n      username: xxxxxx # \u955c\u50cf\u4ed3\u5e93\u7684\u7528\u6237\u540d\n      password: xxxxxx # \u955c\u50cf\u4ed3\u5e93\u7684\u5bc6\u7801\n    tls:\n      cert_file: <\u955c\u50cf\u4ed3\u5e93\u6240\u7528\u7684\u8bc1\u4e66\u6587\u4ef6\u8def\u5f84>\n      key_file:  <\u955c\u50cf\u4ed3\u5e93\u6240\u7528\u7684\u5bc6\u94a5\u6587\u4ef6\u8def\u5f84>\n      ca_file: <\u955c\u50cf\u4ed3\u5e93\u6240\u7528\u7684 CA \u6587\u4ef6\u8def\u5f84>\n')),(0,r.kt)("p",null,"\u6709\u5173 RKE2 \u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/containerd_registry_configuration/"},"RKE2 \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"3-\u5b89\u88c5-rke2"},"3. \u5b89\u88c5 RKE2"),(0,r.kt)("p",null,"Rancher \u9700\u8981\u5b89\u88c5\u5728\u652f\u6301\u7684 Kubernetes \u7248\u672c\u4e0a\u3002\u5982\u9700\u4e86\u89e3\u4f60\u4f7f\u7528\u7684 Rancher \u7248\u672c\u652f\u6301\u54ea\u4e9b Kubernetes \u7248\u672c\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,r.kt)("p",null,"\u4ece Release \u9875\u9762\u4e0b\u8f7d\u5b89\u88c5\u811a\u672c\u3001rke2\u3001rke2-images \u548c sha256sum \u5b58\u6863\uff0c\u5e76\u5c06\u5b83\u4eec\u4e0a\u4f20\u5230\u6bcf\u4e2a\u670d\u52a1\u5668\u4e0a\u7684\u76ee\u5f55\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir /tmp/rke2-artifacts && cd /tmp/rke2-artifacts/\nwget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2-images.linux-amd64.tar.zst\nwget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2.linux-amd64.tar.gz\nwget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/sha256sum-amd64.txt\ncurl -sfL https://get.rke2.io --output install.sh\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u6bcf\u4e2a\u670d\u52a1\u5668\u4e0a\u7684\u76ee\u5f55\u8fd0\u884c install.sh\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSTALL_RKE2_ARTIFACT_PATH=/tmp/rke2-artifacts sh install.sh\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728\u6240\u6709\u670d\u52a1\u5668\u4e0a\u542f\u7528\u5e76\u542f\u52a8\u8be5\u670d\u52a1\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"systemctl enable rke2-server.service\nsystemctl start rke2-server.service")),(0,r.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/airgap/"},"RKE2 \u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"4-\u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528-kubeconfig-\u6587\u4ef6-1"},"4. \u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528 kubeconfig \u6587\u4ef6"),(0,r.kt)("p",null,"\u5728\u6bcf\u4e2a Rancher Server \u8282\u70b9\u5b89\u88c5 RKE2 \u65f6\uff0c\u4f1a\u5728\u6bcf\u4e2a\u8282\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2.yaml")," \u4e2d\u751f\u6210\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig"),"  \u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u5305\u542b\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002\u8bf7\u5c06\u8be5\u6587\u4ef6\u4fdd\u5b58\u5728\u5b89\u5168\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5982\u8981\u4f7f\u7528\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl"),"\uff08Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236 ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rancher/rke2/rke2.yaml")," \u6587\u4ef6\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u4e3b\u673a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," \u76ee\u5f55\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 kubeconfig \u6587\u4ef6\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"server")," \u7684\u53c2\u6570\u4e3a localhost\u3002\u4f60\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"server")," \u914d\u7f6e\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668\u7684 DNS\uff0c\u5e76\u6307\u5b9a\u7aef\u53e3 6443\uff08\u901a\u8fc7\u7aef\u53e3 6443 \u8bbf\u95ee Kubernetes API Server\uff0c\u901a\u8fc7\u7aef\u53e3 80 \u548c 443 \u8bbf\u95ee Rancher Server\uff09\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"rke2.yaml")," \u793a\u4f8b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # \u7f16\u8f91\u6b64\u884c\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u7ba1\u7406\u4f60\u7684 RKE2 \u96c6\u7fa4\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff0c\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u65f6\uff0c\u4f60\u53ef\u4ee5\u4f20\u5165\u6587\u4ef6\u8def\u5f84\u6765\u6307\u5b9a\u8981\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/rke2.yaml get pods --all-namespaces\n")),(0,r.kt)("p",null,"\u6709\u5173 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rke2.io/cluster_access/"},"RKE2 \u5b98\u65b9\u6587\u6863"),"\u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"}," Kubernetes \u5b98\u65b9\u6587\u6863"),"\u4e2d\u5173\u4e8e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u7ba1\u7406\u96c6\u7fa4\u8bbf\u95ee\u7684\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879-1"},"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b8c\u6210\u79bb\u7ebf\u73af\u5883\u7684\u5347\u7ea7\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke2/releases"},"Releases")," \u9875\u9762\u4e0b\u8f7d\u65b0\u7684\u79bb\u7ebf\u5de5\u4ef6\uff0c\u5e76\u5b89\u88c5\u5347\u7ea7 RKE2 \u7248\u672c\u7684\u811a\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u76f8\u540c\u7684\u73af\u5883\u53d8\u91cf\u518d\u6b21\u8fd0\u884c\u811a\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u542f RKE2 \u670d\u52a1\u3002"))),(0,r.kt)(c,{value:"RKE",mdxType:"TabItem"},"\u6211\u4eec\u5c06\u4f7f\u7528 Rancher Kubernetes Engine (RKE) \u521b\u5efa\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u3002\u5728\u542f\u52a8 Kubernetes \u96c6\u7fa4\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5b89\u88c5 RKE \u5e76\u521b\u5efa RKE \u914d\u7f6e\u6587\u4ef6\u3002",(0,r.kt)("h3",{id:"1-\u5b89\u88c5-rke"},"1. \u5b89\u88c5 RKE"),(0,r.kt)("p",null,"\u53c2\u7167 ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE \u5b98\u65b9\u6587\u6863"),"\u7684\u8bf4\u660e\u5b89\u88c5 RKE\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"Rancher \u652f\u6301\u77e9\u9635"),"\u4e2d\u627e\u5230\u57fa\u4e8e Rancher \u7248\u672c\u7684 RKE \u8ba4\u8bc1\u7248\u672c\u3002")),(0,r.kt)("h3",{id:"2-\u521b\u5efa-rke-\u914d\u7f6e\u6587\u4ef6"},"2. \u521b\u5efa RKE \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u5728\u53ef\u8bbf\u95ee\u4f60 Linux \u4e3b\u673a\u8282\u70b9\u4e0a\u7684 22/TCP \u7aef\u53e3\u548c 6443/TCP \u7aef\u53e3\u7684\u7cfb\u7edf\u4e0a\uff0c\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," \u7684\u65b0\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8be5\u6587\u4ef6\u662f RKE \u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u914d\u7f6e\u4f60\u8981\u90e8\u7f72 Rancher \u7684\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"\u53c2\u8003\u4e0b\u65b9\u7684 ",(0,r.kt)("em",{parentName:"p"},"RKE \u9009\u9879")," \u8868\u683c\uff0c\u4fee\u6539\u4ee3\u7801\u793a\u4f8b\u4e2d\u7684\u53c2\u6570\u3002\u4f7f\u7528\u4f60\u521b\u5efa\u7684\u4e09\u4e2a\u8282\u70b9\u7684 IP \u5730\u5740\u6216 DNS \u540d\u79f0\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u9700\u83b7\u53d6\u53ef\u7528\u9009\u9879\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 RKE ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"\u914d\u7f6e\u9009\u9879"),"\u3002")),(0,r.kt)("figcaption",null,"RKE \u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u73af\u5883\u4e2d\u8282\u70b9\u7684 DNS \u6216 IP \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u8fd0\u884c Docker \u547d\u4ee4\u7684\u7528\u6237")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u8282\u70b9\u7684 Kubernetes \u89d2\u8272\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"internal_address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009",(0,r.kt)("sup",null,"1")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u96c6\u7fa4\u5185\u90e8\u6d41\u91cf\u7684 DNS \u6216 IP \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ssh_key_path")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u9a8c\u8bc1\u8282\u70b9\u7684 SSH \u79c1\u94a5\u6587\u4ef6\u8def\u5f84\uff08\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa"),"\uff09")))),(0,r.kt)("blockquote",null,(0,r.kt)("sup",null,"1")," \u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5f15\u7528\u5b89\u5168\u7ec4\u6216\u9632\u706b\u5899\uff0c\u67d0\u4e9b\u670d\u52a1\uff08\u5982 AWS EC2\uff09\u8981\u6c42\u8bbe\u7f6e `internal_address`\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n  - address: 10.10.3.187 # \u79bb\u7ebf\u73af\u5883\u8282\u70b9 IP\n    internal_address: 172.31.7.22 # \u8282\u70b9\u5185\u7f51 IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n  - address: 10.10.3.254 # \u79bb\u7ebf\u73af\u5883\u8282\u70b9 IP\n    internal_address: 172.31.13.132 # \u8282\u70b9\u5185\u7f51 IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n  - address: 10.10.3.89 # \u79bb\u7ebf\u73af\u5883\u8282\u70b9 IP\n    internal_address: 172.31.3.216 # \u8282\u70b9\u5185\u7f51 IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n\nprivate_registries:\n  - url: <REGISTRY.YOURDOMAIN.COM:PORT> # \u79c1\u6709\u955c\u50cf\u4ed3\u5e93 URL\n    user: rancher\n    password: '*********'\n    is_default: true\n")),(0,r.kt)("h3",{id:"3-\u8fd0\u884c-rke"},"3. \u8fd0\u884c RKE"),(0,r.kt)("p",null,"\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"\u540e\uff0c\u542f\u52a8\u4f60\u7684 Kubernetes \u96c6\u7fa4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rke up --config ./rancher-cluster.yml\n")),(0,r.kt)("h3",{id:"4-\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6"},"4. \u4fdd\u5b58\u4f60\u7684\u6587\u4ef6"),(0,r.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ef4\u62a4\u3001\u6392\u9664\u95ee\u9898\u548c\u5347\u7ea7\u96c6\u7fa4\u9700\u8981\u7528\u5230\u4ee5\u4e0b\u6587\u4ef6\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u8fd9\u4e9b\u6587\u4ef6\uff1a")),(0,r.kt)("p",null,"\u5c06\u4ee5\u4e0b\u6587\u4ef6\u7684\u526f\u672c\u4fdd\u5b58\u5728\u5b89\u5168\u4f4d\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),"\uff1aRKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),"\uff1a\u96c6\u7fa4\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig \u6587\u4ef6"),"\u3002\u8be5\u6587\u4ef6\u5305\u542b\u53ef\u5b8c\u5168\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),"\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes \u96c6\u7fa4\u72b6\u6001\u6587\u4ef6"),"\u3002\u8be5\u6587\u4ef6\u5305\u542b\u96c6\u7fa4\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5305\u62ec RKE \u914d\u7f6e\u4ee5\u53ca\u8bc1\u4e66",(0,r.kt)("br",null),"\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"Kubernetes \u96c6\u7fa4\u72b6\u6001\u6587\u4ef6\u4ec5\u5728\u4f7f\u7528 RKE 0.2.0 \u6216\u66f4\u9ad8\u7248\u672c\u65f6\u521b\u5efa\u3002"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u540e\u4e24\u4e2a\u6587\u4ef6\u540d\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cluster")," \u90e8\u5206\u53d6\u51b3\u4e8e\u4f60\u547d\u540d RKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u3002")),(0,r.kt)("h3",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,r.kt)("p",null,"\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"\u6545\u969c\u6392\u9664"),"\u9875\u9762\u3002"),(0,r.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"\u5b89\u88c5 Rancher")))}d.isMDXComponent=!0}}]);
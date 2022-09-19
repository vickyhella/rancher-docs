"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98042],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=i(n),f=a,d=l["".concat(s,".").concat(f)]||l[f]||h[f]||c;return n?t.createElement(d,o(o({ref:r},p),{},{components:n})):t.createElement(d,o({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=l;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<c;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},34654:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return h}});var t=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],u={title:"Rancher Server \u548c Components"},s=void 0,i={unversionedId:"reference-guides/rancher-manager-architecture/rancher-server-and-components",id:"reference-guides/rancher-manager-architecture/rancher-server-and-components",title:"Rancher Server \u548c Components",description:"\u5927\u591a\u6570 Rancher 2.x \u8f6f\u4ef6\u5747\u8fd0\u884c\u5728 Rancher Server \u4e0a\u3002Rancher Server \u5305\u62ec\u7528\u4e8e\u7ba1\u7406\u6574\u4e2a Rancher \u90e8\u7f72\u7684\u6240\u6709\u8f6f\u4ef6\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/rancher-manager-architecture/rancher-server-and-components.md",sourceDirName:"reference-guides/rancher-manager-architecture",slug:"/reference-guides/rancher-manager-architecture/rancher-server-and-components",permalink:"/zh/reference-guides/rancher-manager-architecture/rancher-server-and-components",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-manager-architecture/rancher-server-and-components.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Rancher Server \u548c Components"},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/zh/pages-for-subheaders/rancher-manager-architecture"},next:{title:"\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1",permalink:"/zh/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"}},p={},h=[],l={toc:h};function f(e){var r=e.components,u=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},l,u,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5927\u591a\u6570 Rancher 2.x \u8f6f\u4ef6\u5747\u8fd0\u884c\u5728 Rancher Server \u4e0a\u3002Rancher Server \u5305\u62ec\u7528\u4e8e\u7ba1\u7406\u6574\u4e2a Rancher \u90e8\u7f72\u7684\u6240\u6709\u8f6f\u4ef6\u7ec4\u4ef6\u3002"),(0,c.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86 Rancher 2.x \u7684\u4e0a\u5c42\u67b6\u6784\u3002\u4e0b\u56fe\u4e2d\uff0cRancher Server \u7ba1\u7406\u4e24\u4e2a\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\uff0c\u5176\u4e2d\u4e00\u4e2a\u7531 RKE \u521b\u5efa\uff0c\u53e6\u4e00\u4e2a\u7531 Amazon EKS \u521b\u5efa\u3002"),(0,c.kt)("p",null,"\u4e3a\u4e86\u8fbe\u5230\u6700\u4f73\u6027\u80fd\u548c\u5b89\u5168\u6027\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u4e3a Rancher Management Server \u521b\u5efa\u4e00\u4e2a\u4e13\u7528\u7684 Kubernetes \u96c6\u7fa4\u3002\u4e0d\u5efa\u8bae\u5728\u6b64\u96c6\u7fa4\u4e0a\u8fd0\u884c\u7528\u6237\u5de5\u4f5c\u8d1f\u8f7d\u3002\u90e8\u7f72 Rancher \u540e\uff0c\u4f60\u53ef\u4ee5",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u521b\u5efa\u6216\u5bfc\u5165\u96c6\u7fa4"),"\u6765\u8fd0\u884c\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,c.kt)("p",null,"\u4e0b\u56fe\u4ecb\u7ecd\u4e86\u7528\u6237\u5982\u4f55\u901a\u8fc7 Rancher \u7684\u8ba4\u8bc1\u4ee3\u7406\u7ba1\u7406 ",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes")," \u96c6\u7fa4\u548c",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"\u6258\u7ba1\u7684 Kubernetes")," \u96c6\u7fa4\uff1a"),(0,c.kt)("figcaption",null,"\u901a\u8fc7 Rancher \u7684\u8ba4\u8bc1\u4ee3\u7406\u7ba1\u7406 Kubernetes \u96c6\u7fa4"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"\u67b6\u6784",src:n(16904).Z,width:"766",height:"792"})),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u628a Rancher \u5b89\u88c5\u5230\u5355\u4e2a\u8282\u70b9\u6216\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u3002"),(0,c.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5efa\u8bae\u5b89\u88c5\u5230\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"Rancher \u7684 Docker \u5b89\u88c5\u4ec5\u63a8\u8350\u7528\u4e8e\u5f00\u53d1\u548c\u6d4b\u8bd5\u73af\u5883\u4e2d\u3002Rancher \u7248\u672c\u51b3\u5b9a\u4e86\u80fd\u5426\u5c06 Rancher \u8fc1\u79fb\u5230\u9ad8\u53ef\u7528\u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"Rancher backup operator \u53ef\u5c06 Rancher \u4ece\u5355\u4e2a Docker \u5bb9\u5668\u8fc1\u79fb\u5230\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,c.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"\u628a Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4"),"\u3002"),(0,c.kt)("p",null,"\u4e0d\u7ba1 Rancher Server \u662f\u5982\u4f55\u5b89\u88c5\u7684\uff0c\u5b83\u90fd\u5e94\u8be5\u8fd0\u884c\u5728\u4e0e\u5176\u7ba1\u7406\u7684\u4e0b\u6e38\u96c6\u7fa4\u4e0d\u540c\u8282\u70b9\u4e0a\u3002\u5982\u679c Rancher \u5b89\u88c5\u5728\u9ad8\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5b83\u9700\u8981\u8fd0\u884c\u5728\u4e0e\u5176\u7ba1\u7406\u7684\u96c6\u7fa4\u4e0d\u540c\u7684\u96c6\u7fa4\u4e0a\u3002"))}f.isMDXComponent=!0},16904:function(e,r,n){r.Z=n.p+"assets/images/rancher-architecture-rancher-api-server-2743dae746c64cd2ad66711908be4108.svg"}}]);
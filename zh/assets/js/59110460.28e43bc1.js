"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90820],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],l={title:"\u5b89\u88c5\u548c\u914d\u7f6e kubectl",weight:100},i=void 0,u={unversionedId:"faq/install-and-configure-kubectl",id:"faq/install-and-configure-kubectl",title:"\u5b89\u88c5\u548c\u914d\u7f6e kubectl",description:"kubectl \u662f\u4e00\u4e2a CLI \u5de5\u5177\uff0c\u7528\u4e8e\u8fd0\u884c Kubernetes \u96c6\u7fa4\u76f8\u5173\u7684\u547d\u4ee4\u3002Rancher 2.x \u4e2d\u7684\u8bb8\u591a\u7ef4\u62a4\u548c\u7ba1\u7406\u4efb\u52a1\u90fd\u9700\u8981\u5b83\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq/install-and-configure-kubectl.md",sourceDirName:"faq",slug:"/faq/install-and-configure-kubectl",permalink:"/zh/faq/install-and-configure-kubectl",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/install-and-configure-kubectl.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u5b89\u88c5\u548c\u914d\u7f6e kubectl",weight:100},sidebar:"tutorialSidebar",previous:{title:"Rancher \u5f03\u7528\u7684\u529f\u80fd",permalink:"/zh/faq/deprecated-features-in-v2.5"},next:{title:"Dockershim",permalink:"/zh/faq/dockershim"}},p={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3}],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u662f\u4e00\u4e2a CLI \u5de5\u5177\uff0c\u7528\u4e8e\u8fd0\u884c Kubernetes \u96c6\u7fa4\u76f8\u5173\u7684\u547d\u4ee4\u3002Rancher 2.x \u4e2d\u7684\u8bb8\u591a\u7ef4\u62a4\u548c\u7ba1\u7406\u4efb\u52a1\u90fd\u9700\u8981\u5b83\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl \u5b89\u88c5"),"\u5c06 kubectl \u5b89\u88c5\u5230\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u3002"),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u4f7f\u7528 RKE \u521b\u5efa Kubernetes \u96c6\u7fa4\u65f6\uff0cRKE \u4f1a\u5728\u672c\u5730\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml"),"\uff0c\u8be5\u6587\u4ef6\u5305\u542b\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"helm")," \u7b49\u5de5\u5177\u8fde\u63a5\u5230\u65b0\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u6b64\u6587\u4ef6\u590d\u5236\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"\u3002\u5982\u679c\u4f60\u4f7f\u7528\u591a\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," \u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml")," \u7684\u8def\u5f84\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export KUBECONFIG=$(pwd)/kube_config_cluster.yml\n")),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6d4b\u8bd5\u4f60\u7684\u8fde\u63a5\u6027\uff0c\u5e76\u67e5\u770b\u4f60\u662f\u5426\u53ef\u4ee5\u83b7\u53d6\u8282\u70b9\u5217\u8868\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get nodes\n NAME                          STATUS    ROLES                      AGE       VERSION\n165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.10.1\n165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.10.1\n165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.10.1\n")))}d.isMDXComponent=!0}}]);
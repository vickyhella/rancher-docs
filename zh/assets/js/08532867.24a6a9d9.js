"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25668],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={title:"\u79c1\u6709\u96c6\u7fa4",weight:2},l=void 0,u={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters",id:"reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters",title:"\u79c1\u6709\u96c6\u7fa4",description:"\u5728 GKE \u4e2d\uff0c\u79c1\u6709\u96c6\u7fa4\u662f\u4e00\u79cd\u96c6\u7fa4\uff0c\u5176\u8282\u70b9\u4ec5\u901a\u8fc7\u5206\u914d\u5185\u90e8 IP \u5730\u5740\u4e0e\u5165\u7ad9\u548c\u51fa\u7ad9\u6d41\u91cf\u76f8\u9694\u79bb\u3002GKE \u4e2d\u7684\u79c1\u6709\u96c6\u7fa4\u53ef\u4ee5\u9009\u62e9\u5c06 controlplane \u7aef\u70b9\u4f5c\u4e3a\u516c\u5f00\u8bbf\u95ee\u7684\u5730\u5740\u6216\u4f5c\u4e3a\u79c1\u6709\u5730\u5740\u3002\u8fd9\u4e0e\u5176\u4ed6 Kubernetes \u63d0\u4f9b\u5546\u4e0d\u540c\uff0c\u540e\u8005\u53ef\u80fd\u5c06\u5177\u6709\u79c1\u6709 controlplane \u7aef\u70b9\u7684\u96c6\u7fa4\u79f0\u4e3a\u201c\u79c1\u6709\u96c6\u7fa4\u201d\uff0c\u4f46\u4ecd\u5141\u8bb8\u8fdb\u51fa\u8282\u70b9\u7684\u6d41\u91cf\u3002\u57fa\u4e8e\u4f60\u7684\u7ec4\u7ec7\u7684\u7f51\u7edc\u548c\u5b89\u5168\u8981\u6c42\uff0c\u4f60\u53ef\u80fd\u60f3\u521b\u5efa\u4e00\u4e2a\u6709\u79c1\u6709\u8282\u70b9\u7684\u96c6\u7fa4\uff0c\u5176\u4e2d\u6709\u6216\u6ca1\u6709\u516c\u5171 controlplane \u7aef\u70b9\u3002\u4ece Rancher \u914d\u7f6e\u7684 GKE \u96c6\u7fa4\u53ef\u4ee5\u901a\u8fc7\u5728\u96c6\u7fa4\u9009\u9879\u4e2d\u9009\u62e9\u79c1\u6709\u96c6\u7fa4\uff08\u5728\u663e\u793a\u9ad8\u7ea7\u9009\u9879\u4e0b\uff09\u6765\u4f7f\u7528\u9694\u79bb\u7684\u8282\u70b9\u3002\u901a\u8fc7\u9009\u62e9\u542f\u7528\u79c1\u6709\u7aef\u70b9\uff0c\u53ef\u4ee5\u9009\u62e9\u5c06 controlplane \u7aef\u70b9\u8bbe\u4e3a\u79c1\u6709\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u79c1\u6709\u96c6\u7fa4",weight:2},sidebar:"tutorialSidebar",previous:{title:"GKE \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",permalink:"/zh/pages-for-subheaders/gke-cluster-configuration"},next:{title:"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",permalink:"/zh/pages-for-subheaders/use-existing-nodes"}},s={},p=[{value:"\u79c1\u6709\u8282\u70b9",id:"\u79c1\u6709\u8282\u70b9",level:3},{value:"Cloud NAT",id:"cloud-nat",level:4},{value:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",level:4},{value:"\u79c1\u6709 controlplane \u7aef\u70b9",id:"\u79c1\u6709-controlplane-\u7aef\u70b9",level:3},{value:"Cloud NAT",id:"cloud-nat-1",level:4},{value:"\u76f4\u63a5\u8bbf\u95ee",id:"\u76f4\u63a5\u8bbf\u95ee",level:4}],d={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 GKE \u4e2d\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept"},"\u79c1\u6709\u96c6\u7fa4"),"\u662f\u4e00\u79cd\u96c6\u7fa4\uff0c\u5176\u8282\u70b9\u4ec5\u901a\u8fc7\u5206\u914d\u5185\u90e8 IP \u5730\u5740\u4e0e\u5165\u7ad9\u548c\u51fa\u7ad9\u6d41\u91cf\u76f8\u9694\u79bb\u3002GKE \u4e2d\u7684\u79c1\u6709\u96c6\u7fa4\u53ef\u4ee5\u9009\u62e9\u5c06 controlplane \u7aef\u70b9\u4f5c\u4e3a\u516c\u5f00\u8bbf\u95ee\u7684\u5730\u5740\u6216\u4f5c\u4e3a\u79c1\u6709\u5730\u5740\u3002\u8fd9\u4e0e\u5176\u4ed6 Kubernetes \u63d0\u4f9b\u5546\u4e0d\u540c\uff0c\u540e\u8005\u53ef\u80fd\u5c06\u5177\u6709\u79c1\u6709 controlplane \u7aef\u70b9\u7684\u96c6\u7fa4\u79f0\u4e3a\u201c\u79c1\u6709\u96c6\u7fa4\u201d\uff0c\u4f46\u4ecd\u5141\u8bb8\u8fdb\u51fa\u8282\u70b9\u7684\u6d41\u91cf\u3002\u57fa\u4e8e\u4f60\u7684\u7ec4\u7ec7\u7684\u7f51\u7edc\u548c\u5b89\u5168\u8981\u6c42\uff0c\u4f60\u53ef\u80fd\u60f3\u521b\u5efa\u4e00\u4e2a\u6709\u79c1\u6709\u8282\u70b9\u7684\u96c6\u7fa4\uff0c\u5176\u4e2d\u6709\u6216\u6ca1\u6709\u516c\u5171 controlplane \u7aef\u70b9\u3002\u4ece Rancher \u914d\u7f6e\u7684 GKE \u96c6\u7fa4\u53ef\u4ee5\u901a\u8fc7\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u9009\u9879"),"\u4e2d\u9009\u62e9",(0,o.kt)("strong",{parentName:"p"},"\u79c1\u6709\u96c6\u7fa4"),"\uff08\u5728",(0,o.kt)("strong",{parentName:"p"},"\u663e\u793a\u9ad8\u7ea7\u9009\u9879"),"\u4e0b\uff09\u6765\u4f7f\u7528\u9694\u79bb\u7684\u8282\u70b9\u3002\u901a\u8fc7\u9009\u62e9",(0,o.kt)("strong",{parentName:"p"},"\u542f\u7528\u79c1\u6709\u7aef\u70b9"),"\uff0c\u53ef\u4ee5\u9009\u62e9\u5c06 controlplane \u7aef\u70b9\u8bbe\u4e3a\u79c1\u6709\u3002"),(0,o.kt)("h3",{id:"\u79c1\u6709\u8282\u70b9"},"\u79c1\u6709\u8282\u70b9"),(0,o.kt)("p",null,"\u7531\u4e8e\u79c1\u6709\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u53ea\u6709\u5185\u90e8 IP \u5730\u5740\uff0c\u5b83\u4eec\u5c06\u65e0\u6cd5\u5b89\u88c5 cluster agent\uff0cRancher \u5c06\u65e0\u6cd5\u5b8c\u5168\u7ba1\u7406\u96c6\u7fa4\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u51e0\u79cd\u65b9\u5f0f\u6765\u5904\u7406\u3002"),(0,o.kt)("h4",{id:"cloud-nat"},"Cloud NAT"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Cloud NAT \u5c06",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/nat/pricing"},"\u4ea7\u751f\u8d39\u7528"),"\u3002"))),(0,o.kt)("p",null,"\u5982\u679c\u9650\u5236\u5916\u51fa\u7684\u4e92\u8054\u7f51\u8bbf\u95ee\u5bf9\u4f60\u7684\u7ec4\u7ec7\u6765\u8bf4\u4e0d\u662f\u4e00\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528 Google \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/nat/docs/using-nat"},"Cloud NAT")," \u670d\u52a1\u6765\u5141\u8bb8\u79c1\u6709\u7f51\u7edc\u4e2d\u7684\u8282\u70b9\u8bbf\u95ee\u4e92\u8054\u7f51\uff0c\u4f7f\u5b83\u4eec\u80fd\u591f\u4ece Dockerhub \u4e0b\u8f7d\u6240\u9700\u7684\u955c\u50cf\u5e76\u4e0e Rancher management server \u901a\u4fe1\u3002\u8fd9\u662f\u6700\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,o.kt)("h4",{id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6b64\u65b9\u6848\u4e0d\u53d7\u5b98\u65b9\u652f\u6301\u3002\u5982\u679c Cloud NAT \u670d\u52a1\u4e0d\u8db3\u4ee5\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u5219\u53ef\u4ee5\u53c2\u8003\u6b64\u65b9\u6848\u3002"))),(0,o.kt)("p",null,"\u5982\u679c\u8981\u6c42\u9650\u5236\u8282\u70b9\u7684\u4f20\u5165\u548c\u4f20\u51fa\u6d41\u91cf\uff0c\u8bf7\u6309\u7167\u79bb\u7ebf\u5b89\u88c5\u8bf4\u660e\uff0c\u5728\u96c6\u7fa4\u6240\u5728\u7684 VPC \u4e0a\u8bbe\u7f6e\u4e00\u4e2a\u79c1\u6709\u5bb9\u5668",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap/"},"\u955c\u50cf\u4ed3\u5e93"),"\uff0c\u4ece\u800c\u5141\u8bb8\u96c6\u7fa4\u8282\u70b9\u8bbf\u95ee\u548c\u4e0b\u8f7d\u8fd0\u884c cluster agent \u6240\u9700\u7684\u955c\u50cf\u3002\u5982\u679c controlplane \u7aef\u70b9\u4e5f\u662f\u79c1\u6709\u7684\uff0cRancher \u5c06\u9700\u8981",(0,o.kt)("a",{parentName:"p",href:"#%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE"},"\u76f4\u63a5\u8bbf\u95ee"),"\u5b83\u3002"),(0,o.kt)("h3",{id:"\u79c1\u6709-controlplane-\u7aef\u70b9"},"\u79c1\u6709 controlplane \u7aef\u70b9"),(0,o.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u66b4\u9732\u4e86\u516c\u5171\u7aef\u70b9\uff0cRancher \u5c06\u80fd\u591f\u8bbf\u95ee\u96c6\u7fa4\uff0c\u4e14\u65e0\u9700\u6267\u884c\u989d\u5916\u7684\u6b65\u9aa4\u3002\u4f46\u662f\uff0c\u5982\u679c\u96c6\u7fa4\u6ca1\u6709\u516c\u5171\u7aef\u70b9\uff0c\u5219\u5fc5\u987b\u786e\u4fdd Rancher \u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,o.kt)("h4",{id:"cloud-nat-1"},"Cloud NAT"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Cloud NAT \u5c06",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/nat/pricing"},"\u4ea7\u751f\u8d39\u7528"),"\u3002"))),(0,o.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u5982\u679c\u4e0d\u8003\u8651\u9650\u5236\u5bf9\u8282\u70b9\u7684\u4f20\u51fa\u4e92\u8054\u7f51\u8bbf\u95ee\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 Google \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/nat/docs/using-nat"},"Cloud NAT")," \u670d\u52a1\u6765\u5141\u8bb8\u8282\u70b9\u8bbf\u95ee\u4e92\u8054\u7f51\u3002\u5f53\u96c6\u7fa4\u8fdb\u884c\u914d\u7f6e\u65f6\uff0cRancher \u5c06\u63d0\u4f9b\u4e00\u4e2a\u5728\u96c6\u7fa4\u4e0a\u8fd0\u884c\u7684\u6ce8\u518c\u547d\u4ee4\u3002\u4e0b\u8f7d\u65b0\u96c6\u7fa4\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl"},"kubeconfig")," \u5e76\u5728\u96c6\u7fa4\u4e0a\u8fd0\u884c\u63d0\u4f9b\u7684 kubectl \u547d\u4ee4\u3002\u5982\u679c\u8981\u901a\u8fc7\u83b7\u53d6\u96c6\u7fa4\u8bbf\u95ee\u6743\u6765\u8fd0\u884c\u6b64\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e34\u65f6\u8282\u70b9\u6216\u4f7f\u7528 VPC \u4e2d\u7684\u73b0\u6709\u8282\u70b9\uff0c\u6216\u8005\u767b\u5f55\u5230\u67d0\u4e2a\u96c6\u7fa4\u8282\u70b9\u6216\u4f7f\u7528\u67d0\u4e2a\u96c6\u7fa4\u8282\u70b9\u521b\u5efa SSH \u96a7\u9053\u3002"),(0,o.kt)("h4",{id:"\u76f4\u63a5\u8bbf\u95ee"},"\u76f4\u63a5\u8bbf\u95ee"),(0,o.kt)("p",null,"\u5982\u679c Rancher server \u4e0e\u96c6\u7fa4\u7684 controlplane \u8fd0\u884c\u5728\u540c\u4e00 VPC \u4e0a\uff0c\u5b83\u5c06\u76f4\u63a5\u8bbf\u95ee controlplane \u7684\u79c1\u6709\u7aef\u70b9\u3002\u96c6\u7fa4\u8282\u70b9\u5c06\u9700\u8981\u8bbf\u95ee",(0,o.kt)("a",{parentName:"p",href:"#%E7%A7%81%E6%9C%89%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),"\u4ee5\u4e0b\u8f7d\u4e0a\u8ff0\u7684\u955c\u50cf\u3002"),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 Google \u7684\u670d\u52a1\uff08\u4f8b\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview"},"Cloud VPN")," \u6216 ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/network-connectivity/docs/interconnect"},"Cloud Interconnect VLAN"),"\uff09\u6765\u4fc3\u8fdb\u7ec4\u7ec7\u7f51\u7edc\u4e0e Google VPC \u4e4b\u95f4\u7684\u8fde\u63a5\u3002"))}g.isMDXComponent=!0}}]);
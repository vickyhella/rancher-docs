"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4730],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(n),u=r,d=k["".concat(l,".").concat(u)]||k[u]||m[u]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},47207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"Kubernetes \u955c\u50cf\u4ed3\u5e93\u548c Docker \u955c\u50cf\u4ed3\u5e93",description:"\u4e86\u89e3 Docker \u955c\u50cf\u4ed3\u5e93\u548c Kubernetes \u955c\u50cf\u4ed3\u5e93\u3001\u5b83\u4eec\u7684\u7528\u4f8b\u4ee5\u53ca\u5982\u4f55\u5728 Rancher UI \u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",weight:3063},l=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",title:"Kubernetes \u955c\u50cf\u4ed3\u5e93\u548c Docker \u955c\u50cf\u4ed3\u5e93",description:"\u4e86\u89e3 Docker \u955c\u50cf\u4ed3\u5e93\u548c Kubernetes \u955c\u50cf\u4ed3\u5e93\u3001\u5b83\u4eec\u7684\u7528\u4f8b\u4ee5\u53ca\u5982\u4f55\u5728 Rancher UI \u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Kubernetes \u955c\u50cf\u4ed3\u5e93\u548c Docker \u955c\u50cf\u4ed3\u5e93",description:"\u4e86\u89e3 Docker \u955c\u50cf\u4ed3\u5e93\u548c Kubernetes \u955c\u50cf\u4ed3\u5e93\u3001\u5b83\u4eec\u7684\u7528\u4f8b\u4ee5\u53ca\u5982\u4f55\u5728 Rancher UI \u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",weight:3063},sidebar:"tutorialSidebar",previous:{title:"\u5bc6\u6587",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},next:{title:"Rancher \u4e2d\u7684 Helm Chart",permalink:"/zh/pages-for-subheaders/helm-charts-in-rancher"}},c={},m=[{value:"\u5728 Rancher UI \u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",id:"\u5728-rancher-ui-\u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",level:3},{value:"\u901a\u8fc7 kubectl \u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",id:"\u901a\u8fc7-kubectl-\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",level:3}],k={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u955c\u50cf\u4ed3\u5e93\u662f Kubernetes \u5bc6\u6587\uff08Secret\uff09\uff0c\u5305\u542b\u7528\u4e8e\u5411",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93"),"\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\u3002"),(0,o.kt)("p",null,"\u201cRegistry\u201d \u8fd9\u4e2a\u8bcd\u53ef\u80fd\u6709\u4e24\u79cd\u610f\u601d\uff0c\u53ef\u6307\u4ee3 Docker \u6216 Kubernetes \u955c\u50cf\u4ed3\u5e93\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker \u955c\u50cf\u4ed3\u5e93"),"\u5305\u542b Docker \u955c\u50cf\uff0c\u4f60\u53ef\u4ee5\u62c9\u53d6\u955c\u50cf\u4ee5\u4fbf\u5728 deployment \u4e2d\u4f7f\u7528\u955c\u50cf\u3002\u955c\u50cf\u4ed3\u5e93\u662f\u4e00\u4e2a\u65e0\u72b6\u6001\u3001\u53ef\u6269\u5c55\u7684\u670d\u52a1\u5668\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u5b58\u50a8\u548c\u5206\u53d1 Docker \u955c\u50cf\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes \u955c\u50cf\u4ed3\u5e93"),"\u662f\u4e00\u4e2a\u955c\u50cf\u62c9\u53d6\u5bc6\u6587\uff0c\u4f60\u7684 deployment \u4f7f\u7528\u8be5\u5bc6\u6587\u6765\u5411 Docker \u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002")),(0,o.kt)("p",null,"Deployment \u4f7f\u7528 Kubernetes \u955c\u50cf\u4ed3\u5e93\u5bc6\u6587\u5411\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u7136\u540e\u62c9\u53d6\u6258\u7ba1\u5728\u4ed3\u5e93\u4e0a\u7684 Docker \u955c\u50cf\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u53ea\u6709\u5728 Rancher UI \u4e2d\u521b\u5efa\u5de5\u4f5c\u8d1f\u8f7d\u65f6\uff08\u901a\u8fc7 kubectl \u521b\u5efa\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e0d\u53ef\u4ee5\uff09\uff0cDeployment \u624d\u4f1a\u81ea\u52a8\u62c9\u53d6\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u51ed\u8bc1\u3002"),(0,o.kt)("h1",{id:"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u955c\u50cf\u4ed3\u5e93"},"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f60\u5fc5\u987b\u6709\u4e00\u4e2a\u53ef\u7528\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),"\u3002"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u955c\u50cf\u4ed3\u5e93\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8 > \u5bc6\u6587"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u5bc6\u6587"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u955c\u50cf\u4ed3\u5e93"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u955c\u50cf\u4ed3\u5e93\u7684",(0,o.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Kubernetes \u5c06\u5bc6\u6587\u3001\u8bc1\u4e66\u548c\u955c\u50cf\u4ed3\u5e93\u90fd\u5f52\u7c7b\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"\u5bc6\u6587"),"\uff0c\u547d\u540d\u7a7a\u95f4\u6216\u9879\u76ee\u4e2d\u7684\u5bc6\u6587\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u907f\u514d\u51b2\u7a81\uff0c\u955c\u50cf\u4ed3\u5e93\u7684\u540d\u79f0\u5fc5\u987b\u4e0e\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u5176\u4ed6\u5bc6\u6587\u4e0d\u4e00\u6837\u3002")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e3a\u955c\u50cf\u4ed3\u5e93\u9009\u62e9\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9009\u62e9\u6258\u7ba1\u4f60\u7684\u79c1\u4eba\u955c\u50cf\u4ed3\u5e93\u7684\u7f51\u7ad9\u3002\u7136\u540e\uff0c\u8f93\u5165\u5411\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4f7f\u7528 DockerHub\uff0c\u8bf7\u63d0\u4f9b\u4f60\u7684 DockerHub \u7528\u6237\u540d\u548c\u5bc6\u7801\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5df2\u5c06\u4f60\u7684\u5bc6\u6587\u6dfb\u52a0\u5230\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b58\u50a8 > \u5bc6\u6587"),"\u6216",(0,o.kt)("strong",{parentName:"li"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u5bc6\u6587"),"\u5728 Rancher UI \u4e2d\u67e5\u770b\u5bc6\u6587\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u5728\u955c\u50cf\u4ed3\u5e93\u7684\u8303\u56f4\u5185\uff0c\u4f60\u5728 Rancher UI \u4e2d\u521b\u5efa\u7684\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u5c06\u5177\u6709\u8bbf\u95ee\u955c\u50cf\u4ed3\u5e93\u7684\u51ed\u8bc1\u3002")),(0,o.kt)("h1",{id:"\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u955c\u50cf\u4ed3\u5e93"},"\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f60\u5fc5\u987b\u6709\u4e00\u4e2a\u53ef\u7528\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),"\u3002"))),(0,o.kt)("p",null,"\u5728 Rancher 2.6 \u4e4b\u524d\uff0c\u5bc6\u6587\u5fc5\u987b\u521b\u5efa\u5728\u9879\u76ee\u7ea7\u522b\u3002\u73b0\u5728\u4e0d\u518d\u9700\u8981\u9879\u76ee\u7ea7\u522b\uff0c\u4f60\u53ef\u4ee5\u91c7\u7528\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u3002\u56e0\u6b64\uff0cRancher UI \u8fdb\u884c\u4e86\u66f4\u65b0\u4ee5\u53cd\u6620\u8fd9\u4e00\u65b0\u529f\u80fd\u3002\u4f46\u662f\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u6309\u7167\u9700\u8981\u521b\u5efa\u9879\u76ee\u7ea7\u522b\u7684\u955c\u50cf\u4ed3\u5e93\u3002\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u5168\u5c40\u8bbe\u7f6e"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u529f\u80fd\u5f00\u5173"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"\u65e7\u7248\u5e94\u7528"),"\u529f\u80fd\u5f00\u5173\u5e76\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u6fc0\u6d3b"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u955c\u50cf\u4ed3\u5e93\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8 > \u5bc6\u6587"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u5bc6\u6587"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u955c\u50cf\u4ed3\u5e93"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u4e2d\u8fdb\u884c\u8fc7\u6ee4\uff0c\u4ece\u800c\u4ec5\u67e5\u770b\u4e00\u4e2a\u9879\u76ee\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u955c\u50cf\u4ed3\u5e93\u7684",(0,o.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Kubernetes \u5c06\u5bc6\u6587\u3001\u8bc1\u4e66\u548c\u955c\u50cf\u4ed3\u5e93\u90fd\u5f52\u7c7b\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"\u5bc6\u6587"),"\uff0c\u547d\u540d\u7a7a\u95f4\u6216\u9879\u76ee\u4e2d\u7684\u5bc6\u6587\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u907f\u514d\u51b2\u7a81\uff0c\u955c\u50cf\u4ed3\u5e93\u7684\u540d\u79f0\u5fc5\u987b\u4e0e\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u5176\u4ed6\u5bc6\u6587\u4e0d\u4e00\u6837\u3002")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e3a\u955c\u50cf\u4ed3\u5e93\u9009\u62e9\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9009\u62e9\u6258\u7ba1\u4f60\u7684\u79c1\u4eba\u955c\u50cf\u4ed3\u5e93\u7684\u7f51\u7ad9\u3002\u7136\u540e\uff0c\u8f93\u5165\u5411\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4f7f\u7528 DockerHub\uff0c\u8bf7\u63d0\u4f9b\u4f60\u7684 DockerHub \u7528\u6237\u540d\u548c\u5bc6\u7801\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bc6\u6587\u5df2\u6dfb\u52a0\u5230\u4f60\u9009\u62e9\u7684\u9879\u76ee\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b58\u50a8 > \u5bc6\u6587"),"\u6216",(0,o.kt)("strong",{parentName:"li"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u5bc6\u6587"),"\u5728 Rancher UI \u4e2d\u67e5\u770b\u5bc6\u6587\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u5728\u955c\u50cf\u4ed3\u5e93\u7684\u8303\u56f4\u5185\uff0c\u4f60\u5728 Rancher UI \u4e2d\u521b\u5efa\u7684\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u5c06\u5177\u6709\u8bbf\u95ee\u955c\u50cf\u4ed3\u5e93\u7684\u51ed\u8bc1\u3002")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"local \u96c6\u7fa4\u4e0a\u7684\u9879\u76ee\u7ea7\u522b\u955c\u50cf\u4ed3\u5e93\u4ec5\u5728\u9009\u62e9\u5355\u4e2a\u9879\u76ee\u65f6\u53ef\u89c1\u3002"))),(0,o.kt)("h1",{id:"\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"},"\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u955c\u50cf\u6765\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,o.kt)("h3",{id:"\u5728-rancher-ui-\u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"},"\u5728 Rancher UI \u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("p",null,"\u8981\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\u6765\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u521b\u5efa\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5de5\u4f5c\u8d1f\u8f7d\u7684\u72ec\u7279\u540d\u79f0\uff0c\u5e76\u9009\u62e9\u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5bb9\u5668\u955c\u50cf"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u955c\u50cf\u7684\u8def\u5f84 URL\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4f4d\u4e8e Quay.io\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"quay.io/<Quay profile name>/<Image name>"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u7684 deployment \u80fd\u542f\u52a8\uff0c\u80fd\u4f7f\u7528\u4f60\u5728 Rancher UI \u4e2d\u6dfb\u52a0\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u51ed\u8bc1\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u62c9\u53d6\u6307\u5b9a\u7684 Docker \u955c\u50cf\u3002"),(0,o.kt)("h3",{id:"\u901a\u8fc7-kubectl-\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"},"\u901a\u8fc7 kubectl \u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u521b\u5efa\u5de5\u4f5c\u8d1f\u8f7d\u65f6\uff0c\u4f60\u9700\u8981\u914d\u7f6e pod\uff0c\u4ece\u800c\u4f7f\u5176 YAML \u5177\u6709\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u955c\u50cf\u7684\u8def\u5f84\u3002\u5982\u679c Pod \u662f\u5728 Rancher UI \u4e2d\u521b\u5efa\u7684\uff0c\u5b83\u53ea\u4f1a\u81ea\u52a8\u83b7\u53d6\u5bf9\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u51ed\u8bc1\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u56e0\u6b64\u4f60\u8fd8\u5fc5\u987b\u521b\u5efa\u548c\u5f15\u7528\u955c\u50cf\u4ed3\u5e93\u5bc6\u6587\u3002"),(0,o.kt)("p",null,"\u5bc6\u6587\u5fc5\u987b\u521b\u5efa\u5728\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u7684\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b ",(0,o.kt)("inlineCode",{parentName:"p"},"pod.yml"),"\uff0c\u5b83\u7528\u4e8e\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u955c\u50cf\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5728\u6b64\u793a\u4f8b\u4e2d\uff0cpod \u4f7f\u7528\u6765\u81ea Quay.io \u7684\u955c\u50cf\uff0c\u800c\u4e14 .yml \u6307\u5b9a\u4e86\u955c\u50cf\u7684\u8def\u5f84\u3002pod \u4f7f\u7528\u5b58\u50a8\u5728\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"testquay")," \u7684 Kubernetes \u5bc6\u6587\u4e2d\u7684\u51ed\u8bc1\u6765\u5411\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u8be5\u5bc6\u6587\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.imagePullSecrets")," \u4e2d\u6307\u5b9a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: private-reg\nspec:\n  containers:\n  - name: private-reg-container\n    image: quay.io/<Quay profile name>/<image name>\n  imagePullSecrets:\n  - name: testquay\n")),(0,o.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"testquay")," \u7684\u5bc6\u6587\u4f4d\u4e8e Default \u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u51ed\u8bc1\u6765\u521b\u5efa\u5bc6\u6587\u3002\u6b64\u547d\u4ee4\u521b\u5efa\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"testquay")," \u7684\u5bc6\u6587\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create secret docker-registry testquay \\\n    --docker-server=quay.io \\\n    --docker-username=<Profile name> \\\n    --docker-password=<password>\n")),(0,o.kt)("p",null,"\u8981\u67e5\u770b\u5bc6\u6587\u662f\u5982\u4f55\u5b58\u50a8\u5728 Kubernetes \u4e2d\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl get secret testquay --output="jsonpath={.data.\\.dockerconfigjson}" | base64 --decode\n')),(0,o.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"auths":{"quay.io":{"username":"<Profile name>","password":"<password>","auth":"c291bXlhbGo6dGVzdGFiYzEyMw=="}}}\n')),(0,o.kt)("p",null,"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u540e\uff0c\u4f60\u53ef\u4ee5\u68c0\u67e5\u955c\u50cf\u662f\u5426\u5df2\u62c9\u53d6\u6210\u529f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get events\n")),(0,o.kt)("p",null,"\u7ed3\u679c\u5e94\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'14s         Normal    Scheduled          Pod    Successfully assigned default/private-reg2 to minikube\n11s         Normal    Pulling            Pod    pulling image "quay.io/<Profile name>/<image name>"\n10s         Normal    Pulled             Pod    Successfully pulled image "quay.io/<Profile name>/<image name>"\n')),(0,o.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Kubernetes \u6587\u6863\u4e2d\u7684",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-pod-that-uses-your-secret"},"\u521b\u5efa\u4f7f\u7528\u4f60\u5bc6\u6587\u7684 pod"),"\u3002"))}u.isMDXComponent=!0}}]);
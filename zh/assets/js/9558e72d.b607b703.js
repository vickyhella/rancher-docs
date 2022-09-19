"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46531],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37898:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"DigitalOcean \u8282\u70b9\u6a21\u677f\u914d\u7f6e",weight:1},u=void 0,l={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",title:"DigitalOcean \u8282\u70b9\u6a21\u677f\u914d\u7f6e",description:"\u8d26\u6237\u8bbf\u95ee\u4fe1\u606f\u5b58\u50a8\u5728\u4e91\u51ed\u8bc1\u4e2d\u3002\u4e91\u51ed\u8bc1\u5b58\u50a8\u5728 Kubernetes \u5bc6\u6587\u4e2d\u3002\u591a\u4e2a\u8282\u70b9\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u4e91\u51ed\u8bc1\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u7684\u4e91\u51ed\u8bc1\u6216\u521b\u5efa\u65b0\u7684\u51ed\u8bc1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"DigitalOcean \u8282\u70b9\u6a21\u677f\u914d\u7f6e",weight:1},sidebar:"tutorialSidebar",previous:{title:"EC2 \u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2"},next:{title:"Azure \u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"}},s={},d=[{value:"Droplet \u9009\u9879",id:"droplet-\u9009\u9879",level:3},{value:"Docker Daemon",id:"docker-daemon",level:3}],f={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8d26\u6237\u8bbf\u95ee\u4fe1\u606f\u5b58\u50a8\u5728\u4e91\u51ed\u8bc1\u4e2d\u3002\u4e91\u51ed\u8bc1\u5b58\u50a8\u5728 Kubernetes \u5bc6\u6587\u4e2d\u3002\u591a\u4e2a\u8282\u70b9\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u4e91\u51ed\u8bc1\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u7684\u4e91\u51ed\u8bc1\u6216\u521b\u5efa\u65b0\u7684\u51ed\u8bc1\u3002"),(0,a.kt)("h3",{id:"droplet-\u9009\u9879"},"Droplet \u9009\u9879"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Droplet \u9009\u9879"),"\u7528\u4e8e\u914d\u7f6e\u96c6\u7fa4\u7684\u5730\u7406\u533a\u57df\u548c\u89c4\u8303\u3002"),(0,a.kt)("h3",{id:"docker-daemon"},"Docker Daemon"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," \u914d\u7f6e\u9009\u9879\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6807\u7b7e"),"\uff1a\u6709\u5173\u6807\u7b7e\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker \u5bf9\u8c61\u6807\u7b7e\u6587\u6863"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker \u5f15\u64ce\u5b89\u88c5 URL"),"\uff1a\u786e\u5b9a\u8981\u5728\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u7684 Docker \u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u955c\u50cf\u4ed3\u5e93 mirror"),"\uff1aDocker daemon \u4f7f\u7528\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u955c\u50cf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5176\u4ed6\u9ad8\u7ea7\u9009\u9879"),"\uff1a\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon \u9009\u9879\u53c2\u8003"),"\u3002")))}p.isMDXComponent=!0}}]);
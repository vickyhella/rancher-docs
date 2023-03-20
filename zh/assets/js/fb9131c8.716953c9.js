"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95022],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40737:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={title:"\u8d44\u6e90"},s=void 0,l={unversionedId:"pages-for-subheaders/resources",id:"pages-for-subheaders/resources",title:"\u8d44\u6e90",description:"Docker \u5b89\u88c5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/resources.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/resources",permalink:"/zh/pages-for-subheaders/resources",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/resources.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u8d44\u6e90"},sidebar:"tutorialSidebar",previous:{title:"3. \u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"},next:{title:"\u9009\u62e9 Rancher \u7248\u672c",permalink:"/zh/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"}},i={},c=[{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:3},{value:"\u79bb\u7ebf\u5b89\u88c5",id:"\u79bb\u7ebf\u5b89\u88c5",level:3},{value:"\u9ad8\u7ea7\u9009\u9879",id:"\u9ad8\u7ea7\u9009\u9879",level:3}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"\u5355\u8282\u70b9 Docker \u5b89\u88c5"),"\u9002\u7528\u4e8e\u60f3\u8981\u6d4b\u8bd5 Rancher \u7684\u7528\u6237\u3002\u4f60\u65e0\u9700\u4f7f\u7528 Helm \u5728 Kubernetes \u96c6\u7fa4\u4e0a\u8fd0\u884c Rancher\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," \u547d\u4ee4\uff0c\u628a Rancher Server \u7ec4\u4ef6\u5b89\u88c5\u5230\u5355\u4e2a\u8282\u70b9\u4e0a\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u548c\u4e00\u4e2a Docker \u5bb9\u5668\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u8be5\u8282\u70b9\u53d1\u751f\u6545\u969c\uff0c\u7531\u4e8e\u5176\u4ed6\u8282\u70b9\u4e0a\u6ca1\u6709\u53ef\u7528\u7684 etcd \u6570\u636e\u526f\u672c\uff0c\u4f60\u5c06\u4e22\u5931 Rancher Server \u7684\u6240\u6709\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"\u79bb\u7ebf\u5b89\u88c5"},"\u79bb\u7ebf\u5b89\u88c5"),(0,a.kt)("p",null,"\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/air-gapped-helm-cli-install"},"\u4ee5\u4e0b\u6b65\u9aa4"),"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 Rancher Server\u3002"),(0,a.kt)("p",null,"\u79bb\u7ebf\u73af\u5883\u53ef\u4ee5\u662f Rancher Server \u79bb\u7ebf\u5b89\u88c5\u3001\u9632\u706b\u5899\u540e\u9762\u6216\u4ee3\u7406\u540e\u9762\u3002"),(0,a.kt)("h3",{id:"\u9ad8\u7ea7\u9009\u9879"},"\u9ad8\u7ea7\u9009\u9879"),(0,a.kt)("p",null,"\u5b89\u88c5 Rancher \u65f6\uff0c\u6709\u5982\u4e0b\u51e0\u4e2a\u53ef\u5f00\u542f\u7684\u9ad8\u7ea7\u9009\u9879\uff1a\u6bcf\u4e2a\u5b89\u88c5\u6307\u5357\u4e2d\u90fd\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u9009\u9879\u3002\u4e86\u89e3\u9009\u9879\u8be6\u60c5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"},"\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/enable-api-audit-log"},"API \u5ba1\u8ba1\u65e5\u5fd7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/installation-references/tls-settings"},"TLS \u8bbe\u7f6e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs"},"etcd \u914d\u7f6e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/resources/local-system-charts"},"\u79bb\u7ebf\u5b89\u88c5 Local System Chart"))))}p.isMDXComponent=!0}}]);
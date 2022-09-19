"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33619],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(f,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),y=w.tabGroupChoices,R=w.setTabGroupChoices,T=(0,a.useState)(b),S=T[0],D=T[1],z=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=y[k];null!=E&&E!==S&&f.some((function(e){return e.value===E}))&&D(E)}var x=function(e){var t=e.currentTarget,n=z.indexOf(t),r=f[n].value;r!==S&&(C(t),D(r),null!=k&&R(k,String(r)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=z.indexOf(e.currentTarget)+1;n=null!=(r=z[a])?r:z[0];break;case"ArrowLeft":var l,i=z.indexOf(e.currentTarget)-1;n=null!=(l=z[i])?l:z[z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return z.push(e)},onKeyDown:L,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},33281:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),s=["components"],u={title:"1. \u8bbe\u7f6e\u57fa\u7840\u8bbe\u65bd\u548c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",weight:100},c=void 0,p={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",id:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",title:"1. \u8bbe\u7f6e\u57fa\u7840\u8bbe\u65bd\u548c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\uff0c\u4e3a Rancher Management server \u914d\u7f6e\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u3002\u4f60\u8fd8\u5c06\u8bbe\u7f6e Rancher \u8282\u70b9\u4e2d\u5fc5\u987b\u53ef\u7528\u7684 Docker \u79c1\u6709\u4ed3\u5e93\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"1. \u8bbe\u7f6e\u57fa\u7840\u8bbe\u65bd\u548c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",weight:100},sidebar:"tutorialSidebar",previous:{title:"\u79bb\u7ebf Helm CLI \u5b89\u88c5",permalink:"/zh/pages-for-subheaders/air-gapped-helm-cli-install"},next:{title:"2. \u6536\u96c6\u955c\u50cf\u5e76\u53d1\u5e03\u5230\u79c1\u6709\u4ed3\u5e93",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"}},d={},m=[{value:"1. \u914d\u7f6e Linux \u8282\u70b9",id:"1-\u914d\u7f6e-linux-\u8282\u70b9",level:3},{value:"2. \u914d\u7f6e\u5916\u90e8\u6570\u636e\u5e93",id:"2-\u914d\u7f6e\u5916\u90e8\u6570\u636e\u5e93",level:3},{value:"3. \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",id:"3-\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",level:3},{value:"4. \u914d\u7f6e DNS \u8bb0\u5f55",id:"4-\u914d\u7f6e-dns-\u8bb0\u5f55",level:3},{value:"5. \u914d\u7f6e\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93",id:"5-\u914d\u7f6e\u79c1\u6709-docker-\u955c\u50cf\u4ed3\u5e93",level:3},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9",level:3},{value:"1. \u914d\u7f6e Linux \u8282\u70b9",id:"1-\u914d\u7f6e-linux-\u8282\u70b9-1",level:3},{value:"2. \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",id:"2-\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",level:3},{value:"3. \u914d\u7f6e DNS \u8bb0\u5f55",id:"3-\u914d\u7f6e-dns-\u8bb0\u5f55",level:3},{value:"4. \u914d\u7f6e\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93",id:"4-\u914d\u7f6e\u79c1\u6709-docker-\u955c\u50cf\u4ed3\u5e93",level:3},{value:"1. \u914d\u7f6e Linux \u8282\u70b9",id:"1-\u914d\u7f6e-linux-\u8282\u70b9-2",level:3},{value:"2. \u914d\u7f6e\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93",id:"2-\u914d\u7f6e\u79c1\u6709-docker-\u955c\u50cf\u4ed3\u5e93",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],h={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\uff0c\u4e3a Rancher Management server \u914d\u7f6e\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u3002\u4f60\u8fd8\u5c06\u8bbe\u7f6e Rancher \u8282\u70b9\u4e2d\u5fc5\u987b\u53ef\u7528\u7684 Docker \u79c1\u6709\u4ed3\u5e93\u3002"),(0,l.kt)("p",null,"\u79bb\u7ebf\u73af\u5883\u662f Rancher Server \u79bb\u7ebf\u5b89\u88c5\u6216\u5b89\u88c5\u5728\u9632\u706b\u5899\u540e\u9762\u7684\u73af\u5883\u3002"),(0,l.kt)("p",null,"Rancher \u5b89\u88c5\u5728 K3s Kubernetes \u96c6\u7fa4\u3001RKE Kubernetes \u96c6\u7fa4\u8fd8\u662f\u5355\u4e2a Docker \u5bb9\u5668\u4e0a\u5bf9\u5e94\u7684\u57fa\u7840\u8bbe\u65bd\u8bbe\u7f6e\u4f1a\u6709\u6240\u4e0d\u540c\u3002\u5982\u9700\u4e86\u89e3\u5404\u4e2a\u5b89\u88c5\u65b9\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-and-upgrade"},"\u672c\u9875"),"\u3002"),(0,l.kt)("p",null,"Rancher \u53ef\u4ee5\u5b89\u88c5\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e0a\u3002\u4e3a\u4e86\u9605\u8bfb\u65b9\u4fbf\uff0c\u6211\u4eec\u5728\u4e0b\u6587\u4e2d\u4ecd\u63d0\u4f9b\u4e86 RKE \u548c K3s Kubernetes \u57fa\u7840\u8bbe\u65bd\u6559\u7a0b\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"K3s",mdxType:"TabItem"},(0,l.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u9ad8\u53ef\u7528\u5b89\u88c5\uff0c\u6211\u4eec\u5efa\u8bae\u8bbe\u7f6e\u4ee5\u4e0b\u7684\u57fa\u7840\u8bbe\u65bd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"2 \u4e2a Linux \u8282\u70b9"),"\uff1a\u53ef\u4ee5\u662f\u4f60\u7684\u4e91\u63d0\u4f9b\u5546\u4e2d\u7684\u865a\u62df\u673a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"1 \u4e2a\u5916\u90e8\u6570\u636e\u5e93"),"\uff1a\u7528\u4e8e\u5b58\u50a8\u96c6\u7fa4\u6570\u636e\u3002\u652f\u6301 PostgreSQL, MySQL \u548c etcd\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"1 \u4e2a\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u7528\u4e8e\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230\u8fd9\u4e24\u4e2a\u8282\u70b9\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"1 \u4e2a DNS \u8bb0\u5f55"),"\uff1a\u7528\u4e8e\u5c06 URL \u6620\u5c04\u5230\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u6b64 DNS \u8bb0\u5f55\u5c06\u6210\u4e3a Rancher Server \u7684 URL\uff0c\u4e0b\u6e38\u96c6\u7fa4\u9700\u8981\u53ef\u4ee5\u8bbf\u95ee\u5230\u8fd9\u4e2a\u5730\u5740\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"1 \u4e2a\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93"),"\uff1a\u7528\u4e8e\u5c06 Docker \u955c\u50cf\u5206\u53d1\u5230\u4f60\u7684\u4e3b\u673a\u3002")),(0,l.kt)("h3",{id:"1-\u914d\u7f6e-linux-\u8282\u70b9"},"1. \u914d\u7f6e Linux \u8282\u70b9"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u4e3b\u673a\u4f1a\u65ad\u5f00\u4e92\u8054\u7f51\u94fe\u63a5\uff0c\u4f46\u9700\u8981\u80fd\u4e0e\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u7684\u8282\u70b9\u6ee1\u8db3",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u786c\u4ef6\u548c\u7f51\u7edc"),"\u7684\u5e38\u89c4\u8981\u6c42\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e Linux \u8282\u70b9\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"\u5728 Amazon EC2 \u4e2d\u914d\u7f6e\u8282\u70b9"),"\u7684\u6559\u7a0b\u3002"),(0,l.kt)("h3",{id:"2-\u914d\u7f6e\u5916\u90e8\u6570\u636e\u5e93"},"2. \u914d\u7f6e\u5916\u90e8\u6570\u636e\u5e93"),(0,l.kt)("p",null,"K3s \u4e0e\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u4e0d\u540c\uff0c\u5728\u4e8e\u5176\u652f\u6301\u4f7f\u7528 etcd \u4ee5\u5916\u7684\u6570\u636e\u5e93\u6765\u8fd0\u884c Kubernetes\u3002\u8be5\u529f\u80fd\u8ba9 Kubernetes \u8fd0\u7ef4\u66f4\u52a0\u7075\u6d3b\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u5e93\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e K3s \u9ad8\u53ef\u7528\u5b89\u88c5\uff0c\u4f60\u9700\u8981\u914d\u7f6e\u4ee5\u4e0b\u7684\u5176\u4e2d\u4e00\u4e2a\u6570\u636e\u5e93\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL"),"\uff0810.7 \u548c 11.5 \u5df2\u9a8c\u8bc1\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL"),"\uff085.7 \u5df2\u9a8c\u8bc1\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd"),"\uff083.3.15 \u5df2\u9a8c\u8bc1\uff09")),(0,l.kt)("p",null,"\u5728\u5b89\u88c5 Kubernetes \u65f6\uff0c\u4f60\u9700\u8981\u4f20\u5165 K3s \u8fde\u63a5\u6570\u636e\u5e93\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e\u6570\u636e\u5e93\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"},"\u5728 Amazon RDS \u670d\u52a1\u4e2d\u914d\u7f6e MySQL \u6570\u636e\u5e93"),"\u7684\u6559\u7a0b\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e K3s \u96c6\u7fa4\u6570\u636e\u5e93\u7684\u6240\u6709\u53ef\u7528\u9009\u9879\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/datastore/"},"K3s \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"3-\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"},"3. \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u6765\u5c06\u6d41\u91cf\u91cd\u5b9a\u5411\u5230\u4e24\u4e2a\u8282\u70b9\u4e0a\u7684 Rancher \u526f\u672c\u3002\u914d\u7f6e\u540e\uff0c\u5f53\u5355\u4e2a\u8282\u70b9\u4e0d\u53ef\u7528\u65f6\uff0c\u7ee7\u7eed\u4fdd\u969c\u4e0e Rancher Management Server \u7684\u901a\u4fe1\u3002"),(0,l.kt)("p",null,"\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u914d\u7f6e Kubernetes \u65f6\uff0cK3s \u5de5\u5177\u4f1a\u90e8\u7f72\u4e00\u4e2a Traefik Ingress Controller\u3002\u8be5 Controller \u5c06\u4fa6\u542c worker \u8282\u70b9\u7684 80 \u7aef\u53e3\u548c 443 \u7aef\u53e3\uff0c\u4ee5\u54cd\u5e94\u53d1\u9001\u7ed9\u7279\u5b9a\u4e3b\u673a\u540d\u7684\u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u5728\u5b89\u88c5 Rancher \u540e\uff08\u4e5f\u662f\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\uff09\uff0cRancher \u7cfb\u7edf\u5c06\u521b\u5efa\u4e00\u4e2a Ingress \u8d44\u6e90\u3002\u8be5 Ingress \u901a\u77e5 Traefik Ingress Controller \u76d1\u542c\u53d1\u5f80 Rancher \u4e3b\u673a\u540d\u7684\u6d41\u91cf\u3002Traefik Ingress Controller \u5728\u6536\u5230\u53d1\u5f80 Rancher \u4e3b\u673a\u540d\u7684\u6d41\u91cf\u65f6\uff0c\u4f1a\u5c06\u5176\u8f6c\u53d1\u5230\u96c6\u7fa4\u4e2d\u6b63\u5728\u8fd0\u884c\u7684 Rancher Server Pod\u3002"),(0,l.kt)("p",null,"\u5728\u4f60\u7684\u5b9e\u73b0\u4e2d\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u662f\u5426\u9700\u8981\u4f7f\u7528 4 \u5c42\u6216 7 \u5c42\u7684\u8d1f\u8f7d\u5747\u8861\u5668\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u4e24\u79cd\u9009\u62e9\u4e2d\u8f83\u4e3a\u7b80\u5355\u7684\u4e00\u79cd\uff0c\u5b83\u5c06 TCP \u6d41\u91cf\u8f6c\u53d1\u5230\u4f60\u7684\u8282\u70b9\u4e2d\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u5c06\u6d41\u91cf\u4ece TCP/80 \u7aef\u53e3\u548c TCP/443 \u7aef\u53e3\u8f6c\u53d1\u5230 Rancher Management \u96c6\u7fa4\u8282\u70b9\u4e0a\u3002\u96c6\u7fa4\u4e0a\u7684 Ingress Controller \u4f1a\u5c06 HTTP \u6d41\u91cf\u91cd\u5b9a\u5411\u5230 HTTPS\uff0c\u5e76\u5728 TCP/443 \u7aef\u53e3\u4e0a\u7ec8\u6b62 SSL/TLS\u3002Ingress Controller \u4f1a\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 Rancher deployment \u4e2d Ingress Pod \u7684 TCP/80 \u7aef\u53e3\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u76f8\u5bf9\u6bd4\u8f83\u590d\u6742\uff0c\u4f46\u529f\u80fd\u66f4\u5168\u9762\u3002\u4f8b\u5982\uff0c\u4e0e Rancher \u672c\u8eab\u8fdb\u884c TLS \u7ec8\u6b62\u76f8\u53cd\uff0c7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u80fd\u591f\u5728\u8d1f\u8f7d\u5747\u8861\u5668\u5904\u5904\u7406 TLS \u7ec8\u6b62\u3002\u5982\u679c\u4f60\u9700\u8981\u96c6\u4e2d\u5728\u57fa\u7840\u8bbe\u65bd\u4e2d\u8fdb\u884c TLS \u7ec8\u6b62\uff0c7 \u5c42\u8d1f\u8f7d\u5747\u8861\u53ef\u80fd\u4f1a\u5f88\u9002\u5408\u4f60\u30027 \u5c42\u8d1f\u8f7d\u5747\u8861\u8fd8\u80fd\u8ba9\u4f60\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u57fa\u4e8e HTTP \u5c5e\u6027\uff08\u4f8b\u5982 cookie \u7b49\uff09\u505a\u51fa\u51b3\u7b56\uff0c\u800c 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5219\u4e0d\u80fd\u3002\u5982\u679c\u4f60\u9009\u62e9\u5728 7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7ec8\u6b62 SSL/TLS \u6d41\u91cf\uff0c\u5219\u5728\u5b89\u88c5 Rancher \u65f6\uff08\u540e\u7eed\u6b65\u9aa4\uff09\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--set tls=external")," \u9009\u9879\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/installation-references/helm-chart-options#%E5%A4%96%E9%83%A8-tls-%E7%BB%88%E6%AD%A2"},"Rancher Helm Chart \u9009\u9879"),"\u3002")),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e NGINX \u8d1f\u8f7d\u5747\u8861\u5668\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"\u672c\u9875"),"\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u5982\u4f55\u914d\u7f6e Amazon ELB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u6307\u5357\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"\u672c\u9875"),"\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5b89\u88c5\u540e\uff0c\u8bf7\u52ff\u5c06\u6b64\u8d1f\u8f7d\u5747\u8861\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4 Ingress\uff09\u7528\u4e8e Rancher \u4ee5\u5916\u7684\u5e94\u7528\u3002\u5982\u679c\u6b64 Ingress \u4e0e\u5176\u4ed6\u5e94\u7528\u5171\u4eab\uff0c\u5728\u5176\u4ed6\u5e94\u7528\u7684 Ingress \u914d\u7f6e\u91cd\u65b0\u52a0\u8f7d\u540e\uff0c\u53ef\u80fd\u5bfc\u81f4 Rancher \u51fa\u73b0 websocket \u9519\u8bef\u3002\u6211\u4eec\u5efa\u8bae\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4\u4e13\u7528\u7ed9 Rancher\uff0c\u4e0d\u8981\u5728\u96c6\u7fa4\u5185\u90e8\u7f72\u5176\u4ed6\u5e94\u7528\u3002"))),(0,l.kt)("h3",{id:"4-\u914d\u7f6e-dns-\u8bb0\u5f55"},"4. \u914d\u7f6e DNS \u8bb0\u5f55"),(0,l.kt)("p",null,"\u914d\u7f6e\u5b8c\u8d1f\u8f7d\u5747\u8861\u5668\u540e\uff0c\u4f60\u5c06\u9700\u8981\u521b\u5efa DNS \u8bb0\u5f55\uff0c\u4ee5\u5c06\u6d41\u91cf\u53d1\u9001\u5230\u8be5\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,l.kt)("p",null,"\u6839\u636e\u4f60\u7684\u73af\u5883\uff0cDNS \u8bb0\u5f55\u53ef\u4ee5\u662f\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668 IP \u7684 A \u8bb0\u5f55\uff0c\u4e5f\u53ef\u4ee5\u662f\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668\u4e3b\u673a\u540d\u7684 CNAME\u3002\u65e0\u8bba\u662f\u54ea\u79cd\u60c5\u51b5\uff0c\u8bf7\u786e\u4fdd\u8be5\u8bb0\u5f55\u662f\u4f60\u8981 Rancher \u8fdb\u884c\u54cd\u5e94\u7684\u4e3b\u673a\u540d\u3002"),(0,l.kt)("p",null,"\u5728\u5b89\u88c5 Rancher \u65f6\uff08\u540e\u7eed\u6b65\u9aa4\uff09\uff0c\u4f60\u9700\u8981\u6307\u5b9a\u6b64\u4e3b\u673a\u540d\u3002\u8bf7\u77e5\u6089\uff0c\u6b64\u4e3b\u673a\u540d\u65e0\u6cd5\u4fee\u6539\u3002\u8bf7\u786e\u4fdd\u4f60\u8bbe\u7f6e\u7684\u4e3b\u673a\u540d\u662f\u4f60\u60f3\u8981\u7684\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u8bbe\u7f6e DNS \u8bb0\u5f55\u4ee5\u5c06\u57df\u6d41\u91cf\u8f6c\u53d1\u5230 Amazon ELB \u8d1f\u8f7d\u5747\u8861\u5668\u7684\u6307\u5357\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"AWS \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"5-\u914d\u7f6e\u79c1\u6709-docker-\u955c\u50cf\u4ed3\u5e93"},"5. \u914d\u7f6e\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("p",null,"Rancher \u652f\u6301\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u79bb\u7ebf\u5b89\u88c5\u3002\u4f60\u5fc5\u987b\u6709\u81ea\u5df1\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u6216\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u5c06 Docker \u955c\u50cf\u5206\u53d1\u5230\u4e3b\u673a\u3002"),(0,l.kt)("p",null,"\u5728\u540e\u7eed\u8bbe\u7f6e K3s Kubernetes \u96c6\u7fa4\u65f6\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u5176\u4e2d\u5305\u542b\u6b64\u955c\u50cf\u4ed3\u5e93\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u5f97\u521b\u5efa\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"Docker \u5b98\u65b9\u6587\u6863"),"\u3002")),(0,l.kt)(o.Z,{value:"RKE",mdxType:"TabItem"},(0,l.kt)("p",null,"\u5982\u9700\u5728\u9ad8\u53ef\u7528 RKE \u96c6\u7fa4\u4e2d\u5b89\u88c5 Rancher Management Server\uff0c\u6211\u4eec\u5efa\u8bae\u914d\u7f6e\u4ee5\u4e0b\u57fa\u7840\u8bbe\u65bd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"3 \u4e2a Linux \u8282\u70b9"),"\uff1a\u53ef\u4ee5\u662f\u4f60\u7684\u4e91\u63d0\u4f9b\u5546\uff08\u4f8b\u5982 Amazon EC2\uff0cGCE \u6216 vSphere\uff09\u4e2d\u7684\u865a\u62df\u673a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"1 \u4e2a\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u7528\u4e8e\u5c06\u524d\u7aef\u6d41\u91cf\u8f6c\u53d1\u5230\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"1 \u4e2a DNS \u8bb0\u5f55"),"\uff1a\u7528\u4e8e\u5c06 URL \u6620\u5c04\u5230\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u6b64 DNS \u8bb0\u5f55\u5c06\u6210\u4e3a Rancher Server \u7684 URL\uff0c\u4e0b\u6e38\u96c6\u7fa4\u9700\u8981\u53ef\u4ee5\u8bbf\u95ee\u5230\u8fd9\u4e2a\u5730\u5740\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"1 \u4e2a\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93"),"\uff1a\u7528\u4e8e\u5c06 Docker \u955c\u50cf\u5206\u53d1\u5230\u4f60\u7684\u4e3b\u673a\u3002")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u8282\u70b9\u5fc5\u987b\u4f4d\u4e8e\u540c\u4e00\u4e2a\u533a\u57df\u6216\u6570\u636e\u4e2d\u5fc3\u3002\u4f46\u662f\u4f60\u53ef\u4ee5\u628a\u8fd9\u4e9b\u670d\u52a1\u5668\u653e\u5728\u4e0d\u540c\u7684\u53ef\u7528\u533a\u3002"),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9\uff1f"),(0,l.kt)("p",null,"\u5728 RKE \u96c6\u7fa4\u4e2d\uff0cRancher Server \u7684\u6570\u636e\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u800c\u8fd9\u4e2a etcd \u6570\u636e\u5e93\u5728\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u9009\u4e3e\u51fa\u5927\u591a\u6570 etcd \u8282\u70b9\u8ba4\u53ef\u7684 etcd \u96c6\u7fa4 leader\uff0cetcd \u6570\u636e\u5e93\u9700\u8981\u5947\u6570\u4e2a\u8282\u70b9\u3002\u5982\u679c etcd \u6570\u636e\u5e93\u65e0\u6cd5\u9009\u51fa leader\uff0cetcd \u53ef\u80fd\u4f1a\u51fa\u73b0",(0,l.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-split-brain-in-distributed-systems"},"\u8111\u88c2\uff08split brain\uff09"),"\u7684\u95ee\u9898\uff0c\u6b64\u65f6\u4f60\u9700\u8981\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\u3002\u5982\u679c\u4e09\u4e2a etcd \u8282\u70b9\u4e4b\u4e00\u53d1\u751f\u6545\u969c\uff0c\u5176\u4f59\u4e24\u4e2a\u8282\u70b9\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a leader\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f etcd \u8282\u70b9\u603b\u6570\u7684\u5927\u591a\u6570\u90e8\u5206\u3002"),(0,l.kt)("h3",{id:"1-\u914d\u7f6e-linux-\u8282\u70b9-1"},"1. \u914d\u7f6e Linux \u8282\u70b9"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u4e3b\u673a\u4f1a\u65ad\u5f00\u4e92\u8054\u7f51\u94fe\u63a5\uff0c\u4f46\u9700\u8981\u80fd\u4e0e\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u7684\u8282\u70b9\u6ee1\u8db3",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u786c\u4ef6\u548c\u7f51\u7edc"),"\u7684\u5e38\u89c4\u8981\u6c42\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e Linux \u8282\u70b9\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"\u5728 Amazon EC2 \u4e2d\u914d\u7f6e\u8282\u70b9"),"\u7684\u6559\u7a0b\u3002"),(0,l.kt)("h3",{id:"2-\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"},"2. \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u6765\u5c06\u6d41\u91cf\u91cd\u5b9a\u5411\u5230\u4e24\u4e2a\u8282\u70b9\u4e0a\u7684 Rancher \u526f\u672c\u3002\u914d\u7f6e\u540e\uff0c\u5f53\u5355\u4e2a\u8282\u70b9\u4e0d\u53ef\u7528\u65f6\uff0c\u7ee7\u7eed\u4fdd\u969c\u4e0e Rancher Management Server \u7684\u901a\u4fe1\u3002"),(0,l.kt)("p",null,"\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u914d\u7f6e Kubernetes \u65f6\uff0cRKE \u5de5\u5177\u4f1a\u90e8\u7f72\u4e00\u4e2a NGINX Ingress Controller\u3002\u8be5 Controller \u5c06\u4fa6\u542c worker \u8282\u70b9\u7684 80 \u7aef\u53e3\u548c 443 \u7aef\u53e3\uff0c\u4ee5\u54cd\u5e94\u53d1\u9001\u7ed9\u7279\u5b9a\u4e3b\u673a\u540d\u7684\u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u5728\u5b89\u88c5 Rancher \u540e\uff08\u4e5f\u662f\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\uff09\uff0cRancher \u7cfb\u7edf\u5c06\u521b\u5efa\u4e00\u4e2a Ingress \u8d44\u6e90\u3002\u8be5 Ingress \u901a\u77e5 NGINX Ingress Controller \u76d1\u542c\u53d1\u5f80 Rancher \u4e3b\u673a\u540d\u7684\u6d41\u91cf\u3002NGINX Ingress Controller \u5728\u6536\u5230\u53d1\u5f80 Rancher \u4e3b\u673a\u540d\u7684\u6d41\u91cf\u65f6\uff0c\u4f1a\u5c06\u5176\u8f6c\u53d1\u5230\u96c6\u7fa4\u4e2d\u6b63\u5728\u8fd0\u884c\u7684 Rancher Server Pod\u3002"),(0,l.kt)("p",null,"\u5728\u4f60\u7684\u5b9e\u73b0\u4e2d\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u662f\u5426\u9700\u8981\u4f7f\u7528 4 \u5c42\u6216 7 \u5c42\u7684\u8d1f\u8f7d\u5747\u8861\u5668\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u4e24\u79cd\u9009\u62e9\u4e2d\u8f83\u4e3a\u7b80\u5355\u7684\u4e00\u79cd\uff0c\u5b83\u5c06 TCP \u6d41\u91cf\u8f6c\u53d1\u5230\u4f60\u7684\u8282\u70b9\u4e2d\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u5c06\u6d41\u91cf\u4ece TCP/80 \u7aef\u53e3\u548c TCP/443 \u7aef\u53e3\u8f6c\u53d1\u5230 Rancher Management \u96c6\u7fa4\u8282\u70b9\u4e0a\u3002\u96c6\u7fa4\u4e0a\u7684 Ingress Controller \u4f1a\u5c06 HTTP \u6d41\u91cf\u91cd\u5b9a\u5411\u5230 HTTPS\uff0c\u5e76\u5728 TCP/443 \u7aef\u53e3\u4e0a\u7ec8\u6b62 SSL/TLS\u3002Ingress Controller \u4f1a\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 Rancher deployment \u4e2d Ingress Pod \u7684 TCP/80 \u7aef\u53e3\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u76f8\u5bf9\u6bd4\u8f83\u590d\u6742\uff0c\u4f46\u529f\u80fd\u66f4\u5168\u9762\u3002\u4f8b\u5982\uff0c\u4e0e Rancher \u672c\u8eab\u8fdb\u884c TLS \u7ec8\u6b62\u76f8\u53cd\uff0c7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u80fd\u591f\u5728\u8d1f\u8f7d\u5747\u8861\u5668\u5904\u5904\u7406 TLS \u7ec8\u6b62\u3002\u5982\u679c\u4f60\u9700\u8981\u96c6\u4e2d\u5728\u57fa\u7840\u8bbe\u65bd\u4e2d\u8fdb\u884c TLS \u7ec8\u6b62\uff0c7 \u5c42\u8d1f\u8f7d\u5747\u8861\u53ef\u80fd\u4f1a\u5f88\u9002\u5408\u4f60\u30027 \u5c42\u8d1f\u8f7d\u5747\u8861\u8fd8\u80fd\u8ba9\u4f60\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u57fa\u4e8e HTTP \u5c5e\u6027\uff08\u4f8b\u5982 cookie \u7b49\uff09\u505a\u51fa\u51b3\u7b56\uff0c\u800c 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5219\u4e0d\u80fd\u3002\u5982\u679c\u4f60\u9009\u62e9\u5728 7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7ec8\u6b62 SSL/TLS \u6d41\u91cf\uff0c\u5219\u5728\u5b89\u88c5 Rancher \u65f6\uff08\u540e\u7eed\u6b65\u9aa4\uff09\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--set tls=external")," \u9009\u9879\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/installation-references/helm-chart-options#%E5%A4%96%E9%83%A8-tls-%E7%BB%88%E6%AD%A2"},"Rancher Helm Chart \u9009\u9879"),"\u3002")),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e NGINX \u8d1f\u8f7d\u5747\u8861\u5668\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"\u672c\u9875"),"\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u5982\u4f55\u914d\u7f6e Amazon ELB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u6307\u5357\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"\u672c\u9875"),"\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5b89\u88c5\u540e\uff0c\u8bf7\u52ff\u5c06\u6b64\u8d1f\u8f7d\u5747\u8861\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4 Ingress\uff09\u7528\u4e8e Rancher \u4ee5\u5916\u7684\u5e94\u7528\u3002\u5982\u679c\u6b64 Ingress \u4e0e\u5176\u4ed6\u5e94\u7528\u5171\u4eab\uff0c\u5728\u5176\u4ed6\u5e94\u7528\u7684 Ingress \u914d\u7f6e\u91cd\u65b0\u52a0\u8f7d\u540e\uff0c\u53ef\u80fd\u5bfc\u81f4 Rancher \u51fa\u73b0 websocket \u9519\u8bef\u3002\u6211\u4eec\u5efa\u8bae\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4\u4e13\u7528\u7ed9 Rancher\uff0c\u4e0d\u8981\u5728\u96c6\u7fa4\u5185\u90e8\u7f72\u5176\u4ed6\u5e94\u7528\u3002"))),(0,l.kt)("h3",{id:"3-\u914d\u7f6e-dns-\u8bb0\u5f55"},"3. \u914d\u7f6e DNS \u8bb0\u5f55"),(0,l.kt)("p",null,"\u914d\u7f6e\u5b8c\u8d1f\u8f7d\u5747\u8861\u5668\u540e\uff0c\u4f60\u5c06\u9700\u8981\u521b\u5efa DNS \u8bb0\u5f55\uff0c\u4ee5\u5c06\u6d41\u91cf\u53d1\u9001\u5230\u8be5\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,l.kt)("p",null,"\u6839\u636e\u4f60\u7684\u73af\u5883\uff0cDNS \u8bb0\u5f55\u53ef\u4ee5\u662f\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668 IP \u7684 A \u8bb0\u5f55\uff0c\u4e5f\u53ef\u4ee5\u662f\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668\u4e3b\u673a\u540d\u7684 CNAME\u3002\u65e0\u8bba\u662f\u54ea\u79cd\u60c5\u51b5\uff0c\u8bf7\u786e\u4fdd\u8be5\u8bb0\u5f55\u662f\u4f60\u8981 Rancher \u8fdb\u884c\u54cd\u5e94\u7684\u4e3b\u673a\u540d\u3002"),(0,l.kt)("p",null,"\u5728\u5b89\u88c5 Rancher \u65f6\uff08\u540e\u7eed\u6b65\u9aa4\uff09\uff0c\u4f60\u9700\u8981\u6307\u5b9a\u6b64\u4e3b\u673a\u540d\u3002\u8bf7\u77e5\u6089\uff0c\u6b64\u4e3b\u673a\u540d\u65e0\u6cd5\u4fee\u6539\u3002\u8bf7\u786e\u4fdd\u4f60\u8bbe\u7f6e\u7684\u4e3b\u673a\u540d\u662f\u4f60\u60f3\u8981\u7684\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u8bbe\u7f6e DNS \u8bb0\u5f55\u4ee5\u5c06\u57df\u6d41\u91cf\u8f6c\u53d1\u5230 Amazon ELB \u8d1f\u8f7d\u5747\u8861\u5668\u7684\u6307\u5357\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"AWS \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"4-\u914d\u7f6e\u79c1\u6709-docker-\u955c\u50cf\u4ed3\u5e93"},"4. \u914d\u7f6e\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("p",null,"Rancher \u652f\u6301\u4f7f\u7528\u5b89\u5168\u7684 Docker \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u79bb\u7ebf\u5b89\u88c5\u3002\u4f60\u5fc5\u987b\u6709\u81ea\u5df1\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u6216\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u5c06 Docker \u955c\u50cf\u5206\u53d1\u5230\u4e3b\u673a\u3002"),(0,l.kt)("p",null,"\u5728\u540e\u7eed\u8bbe\u7f6e RKE Kubernetes \u96c6\u7fa4\u65f6\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u5176\u4e2d\u5305\u542b\u6b64\u955c\u50cf\u4ed3\u5e93\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u5f97\u521b\u5efa\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"Docker \u5b98\u65b9\u6587\u6863"),"\u3002")),(0,l.kt)(o.Z,{value:"Docker",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u4e8b\u9879\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Docker \u5b89\u88c5\u9002\u7528\u4e8e\u60f3\u8981\u6d4b\u8bd5 Rancher \u7684\u7528\u6237\u3002\u7531\u4e8e\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u548c\u4e00\u4e2a Docker \u5bb9\u5668\uff0c\u56e0\u6b64\u5982\u679c\u8be5\u8282\u70b9\u53d1\u751f\u6545\u969c\uff0c\u4f60\u5c06\u4e22\u5931 Rancher Server \u7684\u6240\u6709\u6570\u636e\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rancher backup operator \u53ef\u5c06 Rancher \u4ece\u5355\u4e2a Docker \u5bb9\u5668\u8fc1\u79fb\u5230\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"\u628a Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4"),"\u3002"))))),(0,l.kt)("h3",{id:"1-\u914d\u7f6e-linux-\u8282\u70b9-2"},"1. \u914d\u7f6e Linux \u8282\u70b9"),(0,l.kt)("p",null,"\u6b64\u4e3b\u673a\u4f1a\u65ad\u5f00\u4e92\u8054\u7f51\u94fe\u63a5\uff0c\u4f46\u9700\u8981\u80fd\u4e0e\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u7684\u8282\u70b9\u6ee1\u8db3",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u64cd\u4f5c\u7cfb\u7edf\uff0cDocker\uff0c\u786c\u4ef6\u548c\u7f51\u7edc"),"\u7684\u5e38\u89c4\u8981\u6c42\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e Linux \u8282\u70b9\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"\u5728 Amazon EC2 \u4e2d\u914d\u7f6e\u8282\u70b9"),"\u7684\u6559\u7a0b\u3002"),(0,l.kt)("h3",{id:"2-\u914d\u7f6e\u79c1\u6709-docker-\u955c\u50cf\u4ed3\u5e93"},"2. \u914d\u7f6e\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("p",null,"Rancher \u652f\u6301\u4f7f\u7528 Docker \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u5728\u5821\u5792\u670d\u52a1\u5668\u4e2d\u8fdb\u884c\u79bb\u7ebf\u5b89\u88c5\u3002\u4f60\u5fc5\u987b\u6709\u81ea\u5df1\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u6216\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u5c06 Docker \u955c\u50cf\u5206\u53d1\u5230\u4e3b\u673a\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u5f97\u521b\u5efa\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker \u5b98\u65b9\u6587\u6863"),"\u3002"))),(0,l.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"\u6536\u96c6\u955c\u50cf\u5e76\u53d1\u5e03\u5230\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93")))}k.isMDXComponent=!0}}]);
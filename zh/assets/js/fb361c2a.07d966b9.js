"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[92041],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),u=n(7094),s=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,k=e.defaultValue,d=e.values,g=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var E=null===k?k:null!=(t=null!=k?k:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==E&&!N.some((function(e){return e.value===E})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,u.U)(),w=v.tabGroupChoices,B=v.setTabGroupChoices,y=(0,a.useState)(E),A=y[0],O=y[1],D=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=w[g];null!=C&&C!==A&&N.some((function(e){return e.value===C}))&&O(C)}var R=function(e){var t=e.currentTarget,n=D.indexOf(t),r=N[n].value;r!==A&&(T(t),O(r),null!=g&&B(g,String(r)))},K=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=D.indexOf(e.currentTarget)+1;n=null!=(r=D[a])?r:D[0];break;case"ArrowLeft":var l,i=D.indexOf(e.currentTarget)-1;n=null!=(l=D[i])?l:D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},N.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return D.push(e)},onKeyDown:K,onFocus:R,onClick:R},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function k(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},86022:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),u=["components"],s={title:"\u521b\u5efa DigitalOcean \u96c6\u7fa4",shortTitle:"DigitalOcean",weight:2215},c=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",title:"\u521b\u5efa DigitalOcean \u96c6\u7fa4",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Rancher \u5728 DigitalOcean \u4e2d\u5b89\u88c5 RKE Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u521b\u5efa DigitalOcean \u96c6\u7fa4",shortTitle:"DigitalOcean",weight:2215},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa Amazon EC2 \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"},next:{title:"\u521b\u5efa Azure \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster"}},m={},k=[{value:"1. \u521b\u5efa\u4e91\u51ed\u8bc1",id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1",level:3},{value:"2. \u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f",id:"2-\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f",level:3},{value:"3. \u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4",id:"3-\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4",level:3},{value:"1. \u521b\u5efa\u4e91\u51ed\u8bc1",id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1-1",level:3},{value:"2. \u521b\u5efa\u4f60\u7684\u96c6\u7fa4",id:"2-\u521b\u5efa\u4f60\u7684\u96c6\u7fa4",level:3}],d={toc:k};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Rancher \u5728 DigitalOcean \u4e2d\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes \u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5728 Rancher \u4e2d\u8bbe\u7f6e\u4f60\u7684 DigitalOcean \u4e91\u51ed\u8bc1\u3002\u7136\u540e\uff0c\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6a21\u677f\uff0cRancher \u5c06\u4f7f\u7528\u8be5\u6a21\u677f\u5728 DigitalOcean \u4e2d\u914d\u7f6e\u65b0\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5728 Rancher \u4e2d\u521b\u5efa\u4e00\u4e2a DigitalOcean \u96c6\u7fa4\uff0c\u5e76\u5728\u914d\u7f6e\u65b0\u96c6\u7fa4\u65f6\u4e3a\u96c6\u7fa4\u5b9a\u4e49\u8282\u70b9\u6c60\u3002\u6bcf\u4e2a\u8282\u70b9\u6c60\u90fd\u6709\u4e00\u4e2a etcd\u3001controlplane \u6216 worker \u7684 Kubernetes \u89d2\u8272\u3002Rancher \u4f1a\u5728\u65b0\u8282\u70b9\u4e0a\u5b89\u88c5 RKE Kubernetes\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u8282\u70b9\u8bbe\u7f6e\u8282\u70b9\u6c60\u5b9a\u4e49\u7684 Kubernetes \u89d2\u8272\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"RKE",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-%E5%88%9B%E5%BB%BA%E4%BA%91%E5%87%AD%E8%AF%81"},"\u521b\u5efa\u4e91\u51ed\u8bc1")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-%E4%BD%BF%E7%94%A8%E4%BA%91%E5%87%AD%E8%AF%81%E5%88%9B%E5%BB%BA%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-%E4%BD%BF%E7%94%A8%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA%E5%85%B7%E6%9C%89%E8%8A%82%E7%82%B9%E6%B1%A0%E7%9A%84%E9%9B%86%E7%BE%A4"},"\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"))),(0,l.kt)("h3",{id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1"},"1. \u521b\u5efa\u4e91\u51ed\u8bc1"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"DigitalOcean"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f60\u7684 Digital Ocean \u51ed\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u521b\u5efa\u7528\u4e8e\u5728\u96c6\u7fa4\u4e2d\u914d\u7f6e\u8282\u70b9\u7684\u4e91\u51ed\u8bc1\u3002\u4f60\u53ef\u4ee5\u5728\u5176\u4ed6\u8282\u70b9\u6a21\u677f\u6216\u96c6\u7fa4\u4e2d\u590d\u7528\u8fd9\u4e9b\u51ed\u8bc1\u3002"),(0,l.kt)("h3",{id:"2-\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f"},"2. \u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f"),(0,l.kt)("p",null,"\u4e3a DigitalOcean \u521b\u5efa",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u8282\u70b9\u6a21\u677f")," \u4f1a\u5141\u8bb8 Rancher \u5728 DigitalOcean \u4e2d\u914d\u7f6e\u65b0\u8282\u70b9\u3002\u5176\u4ed6\u96c6\u7fa4\u53ef\u4ee5\u590d\u7528\u8282\u70b9\u6a21\u677f\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"RKE1 \u914d\u7f6e > \u8282\u70b9\u6a21\u677f"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6a21\u677f"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"DigitalOcean"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u586b\u5199 DigitalOcean \u7684\u8282\u70b9\u6a21\u677f\u3002\u6709\u5173\u586b\u5199\u8868\u5355\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"},"DigitalOcean \u8282\u70b9\u6a21\u677f\u914d\u7f6e"),"\u3002")),(0,l.kt)("h3",{id:"3-\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"},"3. \u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"DigitalOcean"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\u6c60\u6dfb\u52a0\u5230\u4f60\u7684\u96c6\u7fa4\u3002\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\u6c60\u6dfb\u52a0\u5230\u4f60\u7684\u96c6\u7fa4\u3002\u6bcf\u4e2a\u8282\u70b9\u6c60\u90fd\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u6765\u914d\u7f6e\u65b0\u8282\u70b9\u3002\u6709\u5173\u8282\u70b9\u6c60\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u5305\u62ec\u4e3a\u8282\u70b9\u5206\u914d Kubernetes \u89d2\u8272\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u672c\u8282"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u914d\u7f6e"),"\u4e2d\uff0c\u9009\u62e9\u8981\u5b89\u88c5\u7684 Kubernetes \u7248\u672c\u3001\u8981\u4f7f\u7528\u7684\u7f51\u7edc\u63d0\u4f9b\u5546\uff0c\u4ee5\u53ca\u662f\u5426\u542f\u7528\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u3002\u8981\u67e5\u770b\u66f4\u591a\u96c6\u7fa4\u9009\u9879\uff0c\u8bf7\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u663e\u793a\u9ad8\u7ea7\u9009\u9879"),"\u3002\u5982\u9700\u83b7\u53d6\u914d\u7f6e\u96c6\u7fa4\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,l.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,l.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"))),(0,l.kt)(o.Z,{value:"RKE2",mdxType:"TabItem"},(0,l.kt)("h3",{id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1-1"},"1. \u521b\u5efa\u4e91\u51ed\u8bc1"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e00\u7ec4\u53ef\u7528\u7684\u4e91\u51ed\u8bc1\uff0c\u8bf7\u8df3\u8fc7\u6b64\u90e8\u5206\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"DigitalOcean"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f60\u7684 Digital Ocean \u51ed\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,l.kt)("h3",{id:"2-\u521b\u5efa\u4f60\u7684\u96c6\u7fa4"},"2. \u521b\u5efa\u4f60\u7684\u96c6\u7fa4"),(0,l.kt)("p",null,"\u4f7f\u7528 Rancher \u5728 DigitalOcean \u4e2d\u521b\u5efa Kubernetes \u96c6\u7fa4\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5f00\u5173\u5207\u6362\u5230 ",(0,l.kt)("strong",{parentName:"li"},"RKE2/K3s"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"DigitalOcean"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002\u5982\u679c\u5b58\u5728\u591a\u4e2a\u5219\u9700\u8981\u9009\u62e9\u3002\u5426\u5219\uff0c\u5b83\u662f\u9884\u9009\u7684\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u6bcf\u4e2a Kubernetes \u89d2\u8272\u521b\u5efa\u4e00\u4e2a\u4e3b\u673a\u6c60\u3002\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#rke2-%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9%E8%A7%92%E8%89%B2"},"\u6700\u4f73\u5b9e\u8df5"),"\u4e86\u89e3\u89d2\u8272\u5206\u914d\u548c\u8ba1\u6570\u7684\u5efa\u8bae\u3002",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u6bcf\u4e2a\u4e3b\u673a\u6c60\u5b9a\u4e49\u4e3b\u673a\u914d\u7f6e\u3002\u6709\u5173\u914d\u7f6e\u9009\u9879\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean"},"DigitalOcean \u4e3b\u673a\u914d\u7f6e\u53c2\u8003"),"\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u914d\u7f6e"),"\uff0c\u9009\u62e9\u8981\u5b89\u88c5\u7684 Kubernetes \u7248\u672c\u3001\u8981\u4f7f\u7528\u7684\u7f51\u7edc\u63d0\u4f9b\u5546\uff0c\u4ee5\u53ca\u662f\u5426\u542f\u7528\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u3002\u6709\u5173\u914d\u7f6e\u96c6\u7fa4\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration"},"RKE2 \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,l.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,l.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,l.kt)("p",null,"\u4f60\u5df2\u521b\u5efa\u96c6\u7fa4\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u662f",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d"),"\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,l.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")),(0,l.kt)("h1",{id:"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4"},"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4"),(0,l.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u8bbf\u95ee\u96c6\u7fa4\u3002\u6700\u4f73\u5b9e\u8df5\u5efa\u8bae\u4f60\u8bbe\u7f6e\u4ee5\u4e0b\u8bbf\u95ee\u96c6\u7fa4\u7684\u5907\u7528\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u901a\u8fc7 kubectl CLI \u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4"),"\uff1a\u6309\u7167",(0,l.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%AB%99%E4%BD%BF%E7%94%A8-kubectl-%E8%AE%BF%E9%97%AE%E9%9B%86%E7%BE%A4"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u5728\u4f60\u7684\u5de5\u4f5c\u7ad9\u4e0a\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c06\u901a\u8fc7 Rancher Server \u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7406\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u7136\u540e Rancher \u4f1a\u8ba9\u4f60\u8fde\u63a5\u5230\u4e0b\u6e38\u96c6\u7fa4\u3002\u6b64\u65b9\u6cd5\u5141\u8bb8\u4f60\u5728\u6ca1\u6709 Rancher UI \u7684\u60c5\u51b5\u4e0b\u7ba1\u7406\u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u901a\u8fc7 kubectl CLI \u4f7f\u7528\u6388\u6743\u7684\u96c6\u7fa4\u7aef\u70b9\u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4"),"\uff1a\u6309\u7167",(0,l.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u76f4\u63a5\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4\uff0c\u800c\u65e0\u9700\u901a\u8fc7 Rancher \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u6211\u4eec\u5efa\u8bae\u8bbe\u7f6e\u6b64\u66ff\u4ee3\u65b9\u6cd5\u6765\u8bbf\u95ee\u96c6\u7fa4\uff0c\u4ee5\u4fbf\u5728\u65e0\u6cd5\u8fde\u63a5\u5230 Rancher \u65f6\u8bbf\u95ee\u96c6\u7fa4\u3002")))}g.isMDXComponent=!0}}]);
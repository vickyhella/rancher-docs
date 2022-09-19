"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98292],{3905:function(e,r,t){t.d(r,{Zo:function(){return o},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},o=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=u(t),d=a,v=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return t?n.createElement(v,c(c({ref:r},o),{},{components:t})):n.createElement(v,c({ref:r},o))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},95540:function(e,r,t){t.r(r),t.d(r,{assets:function(){return o},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),c=["components"],l={title:"\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher",shortTitle:"vSphere \u73af\u5883\u4e2d\u7684 Rancher",weight:3},s=void 0,u={unversionedId:"reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",id:"reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",title:"\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher",description:"\u672c\u6307\u5357\u6982\u8ff0\u4e86\u5728 vSphere \u73af\u5883\u4e2d\u5728 RKE Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher \u7684\u53c2\u8003\u67b6\u6784\uff0c\u4ee5\u53ca VMware \u8bb0\u5f55\u7684\u6807\u51c6 vSphere \u6700\u4f73\u5b9e\u8df5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",permalink:"/zh/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher",shortTitle:"vSphere \u73af\u5883\u4e2d\u7684 Rancher",weight:3},sidebar:"tutorialSidebar",previous:{title:"Rancher Server \u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/pages-for-subheaders/rancher-server"},next:{title:"Rancher \u90e8\u7f72\u7b56\u7565",permalink:"/zh/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"}},o={},p=[{value:"1. \u8d1f\u8f7d\u5747\u8861\u5668\u6ce8\u610f\u4e8b\u9879",id:"1-\u8d1f\u8f7d\u5747\u8861\u5668\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5229\u7528\u5bb9\u9519\u548c\u9ad8\u53ef\u7528\u6027",id:"\u5229\u7528\u5bb9\u9519\u548c\u9ad8\u53ef\u7528\u6027",level:3},{value:"\u5907\u4efd\u8d1f\u8f7d\u5747\u8861\u5668\u914d\u7f6e",id:"\u5907\u4efd\u8d1f\u8f7d\u5747\u8861\u5668\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u5065\u5eb7\u68c0\u67e5",id:"\u914d\u7f6e\u5065\u5eb7\u68c0\u67e5",level:3},{value:"\u5229\u7528\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668",id:"\u5229\u7528\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668",level:3},{value:"\u5b89\u5168\u8bbf\u95ee Rancher",id:"\u5b89\u5168\u8bbf\u95ee-rancher",level:3},{value:"2. \u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879",id:"2-\u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u6839\u636e Rancher \u6587\u6863\u786e\u5b9a\u865a\u62df\u673a\u7684\u5927\u5c0f",id:"\u6839\u636e-rancher-\u6587\u6863\u786e\u5b9a\u865a\u62df\u673a\u7684\u5927\u5c0f",level:3},{value:"\u5229\u7528\u865a\u62df\u673a\u6a21\u677f\u6765\u6784\u5efa\u73af\u5883",id:"\u5229\u7528\u865a\u62df\u673a\u6a21\u677f\u6765\u6784\u5efa\u73af\u5883",level:3},{value:"\u5229\u7528 DRS \u53cd\u4eb2\u548c\u89c4\u5219\uff08\u53ef\u80fd\u7684\u8bdd\uff09\u5728 ESXi \u4e3b\u673a\u4e0a\u5206\u79bb Rancher \u96c6\u7fa4\u8282\u70b9",id:"\u5229\u7528-drs-\u53cd\u4eb2\u548c\u89c4\u5219\u53ef\u80fd\u7684\u8bdd\u5728-esxi-\u4e3b\u673a\u4e0a\u5206\u79bb-rancher-\u96c6\u7fa4\u8282\u70b9",level:3},{value:"\u5229\u7528 DRS \u53cd\u4eb2\u548c\u89c4\u5219\uff08\u53ef\u80fd\u7684\u8bdd\uff09\u5728 Datastore \u4e0a\u5206\u79bb Rancher \u96c6\u7fa4\u8282\u70b9",id:"\u5229\u7528-drs-\u53cd\u4eb2\u548c\u89c4\u5219\u53ef\u80fd\u7684\u8bdd\u5728-datastore-\u4e0a\u5206\u79bb-rancher-\u96c6\u7fa4\u8282\u70b9",level:3},{value:"\u4e3a Kubernetes \u914d\u7f6e\u5408\u9002\u7684\u865a\u62df\u673a",id:"\u4e3a-kubernetes-\u914d\u7f6e\u5408\u9002\u7684\u865a\u62df\u673a",level:3},{value:"3. \u7f51\u7edc\u6ce8\u610f\u4e8b\u9879",id:"3-\u7f51\u7edc\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5229\u7528 ETCD \u8282\u70b9\u4e4b\u95f4\u7684\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u5e26\u5bbd\u8fde\u63a5",id:"\u5229\u7528-etcd-\u8282\u70b9\u4e4b\u95f4\u7684\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u5e26\u5bbd\u8fde\u63a5",level:3},{value:"\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u56fa\u5b9a\u7684 IP \u5730\u5740",id:"\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u56fa\u5b9a\u7684-ip-\u5730\u5740",level:3},{value:"4. \u5b58\u50a8\u6ce8\u610f\u4e8b\u9879",id:"4-\u5b58\u50a8\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5728 ETCD \u8282\u70b9\u4e0a\u4f7f\u7528 SSD \u78c1\u76d8",id:"\u5728-etcd-\u8282\u70b9\u4e0a\u4f7f\u7528-ssd-\u78c1\u76d8",level:3},{value:"5. \u5907\u4efd\u548c\u707e\u96be\u6062\u590d",id:"5-\u5907\u4efd\u548c\u707e\u96be\u6062\u590d",level:2},{value:"\u5b9a\u671f\u5907\u4efd\u7ba1\u7406\u96c6\u7fa4",id:"\u5b9a\u671f\u5907\u4efd\u7ba1\u7406\u96c6\u7fa4",level:3},{value:"\u5907\u4efd Rancher \u96c6\u7fa4\u8282\u70b9\u865a\u62df\u673a",id:"\u5907\u4efd-rancher-\u96c6\u7fa4\u8282\u70b9\u865a\u62df\u673a",level:3}],h={toc:p};function d(e){var r=e.components,l=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},h,l,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6307\u5357\u6982\u8ff0\u4e86\u5728 vSphere \u73af\u5883\u4e2d\u5728 RKE Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher \u7684\u53c2\u8003\u67b6\u6784\uff0c\u4ee5\u53ca VMware \u8bb0\u5f55\u7684\u6807\u51c6 vSphere \u6700\u4f73\u5b9e\u8df5\u3002"),(0,i.kt)("figcaption",null,"\u89e3\u51b3\u65b9\u6848\u6982\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u89e3\u51b3\u65b9\u6848\u6982\u8ff0",src:t(92990).Z,width:"576",height:"482"})),(0,i.kt)("h2",{id:"1-\u8d1f\u8f7d\u5747\u8861\u5668\u6ce8\u610f\u4e8b\u9879"},"1. \u8d1f\u8f7d\u5747\u8861\u5668\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u4f7f\u7528\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u5668\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 RKE \u8282\u70b9\u4e0a\u7684 Rancher \u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,i.kt)("h3",{id:"\u5229\u7528\u5bb9\u9519\u548c\u9ad8\u53ef\u7528\u6027"},"\u5229\u7528\u5bb9\u9519\u548c\u9ad8\u53ef\u7528\u6027"),(0,i.kt)("p",null,"\u8bf7\u5145\u5206\u5229\u7528\u5177\u6709\u7ee7\u627f\u9ad8\u53ef\u7528\u529f\u80fd\u7684\u5916\u90e8\uff08\u786c\u4ef6\u6216\u8f6f\u4ef6\uff09\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u5982\uff1aF5\u3001NSX-T\u3001Keepalived \u7b49\uff09\u3002"),(0,i.kt)("h3",{id:"\u5907\u4efd\u8d1f\u8f7d\u5747\u8861\u5668\u914d\u7f6e"},"\u5907\u4efd\u8d1f\u8f7d\u5747\u8861\u5668\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728\u707e\u96be\u6062\u590d\u65f6\uff0c\u53ef\u7528\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u914d\u7f6e\u53ef\u4ee5\u52a0\u5feb\u6062\u590d\u8fc7\u7a0b\u3002"),(0,i.kt)("h3",{id:"\u914d\u7f6e\u5065\u5eb7\u68c0\u67e5"},"\u914d\u7f6e\u5065\u5eb7\u68c0\u67e5"),(0,i.kt)("p",null,"\u8ba9\u8d1f\u8f7d\u5747\u8861\u5668\u5728\u5065\u5eb7\u68c0\u67e5\u5931\u8d25\u65f6\u81ea\u52a8\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a\u4e0d\u53ef\u7528\u3002\u4f8b\u5982\uff0cNGINX \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u6765\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max_fails=3 fail_timeout=5s")),(0,i.kt)("h3",{id:"\u5229\u7528\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668"},"\u5229\u7528\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668"),(0,i.kt)("p",null,"\u907f\u514d\u5728\u7ba1\u7406\u96c6\u7fa4\u5185\u4f7f\u7528\u8f6f\u4ef6\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,i.kt)("h3",{id:"\u5b89\u5168\u8bbf\u95ee-rancher"},"\u5b89\u5168\u8bbf\u95ee Rancher"),(0,i.kt)("p",null,"\u5c06\u9632\u706b\u5899/ACL \u89c4\u5219\u914d\u7f6e\u4e3a\u53ea\u5141\u8bb8 Rancher \u8bbf\u95ee\u3002"),(0,i.kt)("h2",{id:"2-\u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879"},"2. \u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("h3",{id:"\u6839\u636e-rancher-\u6587\u6863\u786e\u5b9a\u865a\u62df\u673a\u7684\u5927\u5c0f"},"\u6839\u636e Rancher \u6587\u6863\u786e\u5b9a\u865a\u62df\u673a\u7684\u5927\u5c0f"),(0,i.kt)("p",null,"\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/requirements/"},"\u5b89\u88c5\u8981\u6c42"),"\u6765\u786e\u5b9a\u865a\u62df\u673a\u7684\u5927\u5c0f\u3002"),(0,i.kt)("h3",{id:"\u5229\u7528\u865a\u62df\u673a\u6a21\u677f\u6765\u6784\u5efa\u73af\u5883"},"\u5229\u7528\u865a\u62df\u673a\u6a21\u677f\u6765\u6784\u5efa\u73af\u5883"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u8de8\u73af\u5883\u90e8\u7f72\u7684\u865a\u62df\u673a\u7684\u4e00\u81f4\u6027\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u865a\u62df\u673a\u6a21\u677f\u5f62\u5f0f\u7684\u9ec4\u91d1\u955c\u50cf\uff08golden image\uff09\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Packer \u6765\u5b9e\u73b0\uff0c\u4ece\u800c\u589e\u52a0\u66f4\u591a\u81ea\u5b9a\u4e49\u9009\u9879\u3002"),(0,i.kt)("h3",{id:"\u5229\u7528-drs-\u53cd\u4eb2\u548c\u89c4\u5219\u53ef\u80fd\u7684\u8bdd\u5728-esxi-\u4e3b\u673a\u4e0a\u5206\u79bb-rancher-\u96c6\u7fa4\u8282\u70b9"},"\u5229\u7528 DRS \u53cd\u4eb2\u548c\u89c4\u5219\uff08\u53ef\u80fd\u7684\u8bdd\uff09\u5728 ESXi \u4e3b\u673a\u4e0a\u5206\u79bb Rancher \u96c6\u7fa4\u8282\u70b9"),(0,i.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u8282\u70b9\u865a\u62df\u673a\u5206\u5e03\u5728\u591a\u53f0 ESXi \u4e3b\u673a\u4e0a\uff0c\u4ece\u800c\u9632\u6b62\u4e3b\u673a\u7ea7\u522b\u7684\u5355\u70b9\u6545\u969c\u3002"),(0,i.kt)("h3",{id:"\u5229\u7528-drs-\u53cd\u4eb2\u548c\u89c4\u5219\u53ef\u80fd\u7684\u8bdd\u5728-datastore-\u4e0a\u5206\u79bb-rancher-\u96c6\u7fa4\u8282\u70b9"},"\u5229\u7528 DRS \u53cd\u4eb2\u548c\u89c4\u5219\uff08\u53ef\u80fd\u7684\u8bdd\uff09\u5728 Datastore \u4e0a\u5206\u79bb Rancher \u96c6\u7fa4\u8282\u70b9"),(0,i.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u8282\u70b9\u865a\u62df\u673a\u5206\u5e03\u5728\u591a\u4e2a Datastore \u4e0a\uff0c\u4ece\u800c\u9632\u6b62 Datastore \u7ea7\u522b\u7684\u5355\u70b9\u6545\u969c\u3002"),(0,i.kt)("h3",{id:"\u4e3a-kubernetes-\u914d\u7f6e\u5408\u9002\u7684\u865a\u62df\u673a"},"\u4e3a Kubernetes \u914d\u7f6e\u5408\u9002\u7684\u865a\u62df\u673a"),(0,i.kt)("p",null,"\u5728\u90e8\u7f72\u8282\u70b9\u65f6\uff0c\u8bf7\u9075\u5faa K8s \u548c etcd \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5176\u4e2d\u5305\u62ec\u7981\u7528 swap\uff0c\u68c0\u67e5\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u4e3b\u673a\u4e4b\u95f4\u662f\u5426\u6709\u826f\u597d\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u4e3a\u6bcf\u4e2a\u8282\u70b9\u4f7f\u7528\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3001MAC \u5730\u5740\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"product_uuids"),"\u3002"),(0,i.kt)("h2",{id:"3-\u7f51\u7edc\u6ce8\u610f\u4e8b\u9879"},"3. \u7f51\u7edc\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("h3",{id:"\u5229\u7528-etcd-\u8282\u70b9\u4e4b\u95f4\u7684\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u5e26\u5bbd\u8fde\u63a5"},"\u5229\u7528 ETCD \u8282\u70b9\u4e4b\u95f4\u7684\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u5e26\u5bbd\u8fde\u63a5"),(0,i.kt)("p",null,"\u5c3d\u53ef\u80fd\u5728\u5355\u4e2a\u6570\u636e\u4e2d\u5fc3\u5185\u90e8\u7f72 etcd \u6210\u5458\uff0c\u6765\u907f\u514d\u5ef6\u8fdf\u5f00\u9500\u5e76\u51cf\u5c11\u7f51\u7edc\u5206\u533a\u7684\u53ef\u80fd\u6027\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c1Gb \u7684\u8fde\u63a5\u5c31\u8db3\u591f\u4e86\u3002\u5bf9\u4e8e\u5927\u578b\u96c6\u7fa4\uff0c10Gb \u7684\u8fde\u63a5\u53ef\u4ee5\u7f29\u77ed\u6062\u590d\u5907\u4efd\u6240\u9700\u7684\u65f6\u95f4\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u56fa\u5b9a\u7684-ip-\u5730\u5740"},"\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u56fa\u5b9a\u7684 IP \u5730\u5740"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u4f7f\u7528\u7684\u6240\u6709\u8282\u70b9\u90fd\u914d\u7f6e\u4e00\u4e2a\u9759\u6001 IP\u3002\u5982\u679c\u4f7f\u7528 DHCP\uff0c\u5219\u6bcf\u4e2a\u8282\u70b9\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a DHCP \u9884\u7559\uff0c\u4ee5\u786e\u4fdd\u8282\u70b9\u5206\u914d\u5230\u76f8\u540c\u7684 IP \u5730\u5740\u3002"),(0,i.kt)("h2",{id:"4-\u5b58\u50a8\u6ce8\u610f\u4e8b\u9879"},"4. \u5b58\u50a8\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("h3",{id:"\u5728-etcd-\u8282\u70b9\u4e0a\u4f7f\u7528-ssd-\u78c1\u76d8"},"\u5728 ETCD \u8282\u70b9\u4e0a\u4f7f\u7528 SSD \u78c1\u76d8"),(0,i.kt)("p",null,"ETCD \u5bf9\u5199\u5165\u5ef6\u8fdf\u975e\u5e38\u654f\u611f\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u5c3d\u91cf\u4f7f\u7528 SSD \u78c1\u76d8\u6765\u63d0\u9ad8\u5199\u5165\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"5-\u5907\u4efd\u548c\u707e\u96be\u6062\u590d"},"5. \u5907\u4efd\u548c\u707e\u96be\u6062\u590d"),(0,i.kt)("h3",{id:"\u5b9a\u671f\u5907\u4efd\u7ba1\u7406\u96c6\u7fa4"},"\u5b9a\u671f\u5907\u4efd\u7ba1\u7406\u96c6\u7fa4"),(0,i.kt)("p",null,"Rancher \u5c06\u6570\u636e\u5b58\u50a8\u5728\u5b83\u6240\u5728\u7684 Kubernetes \u96c6\u7fa4\u7684 ETCD datastore \u4e2d\u3002\u4e0e\u5176\u5b83 Kubernetes \u96c6\u7fa4\u4e00\u6837\uff0c\u4f60\u9700\u8981\u5bf9\u8be5\u96c6\u7fa4\u8fdb\u884c\u9891\u7e41\u4e14\u7ecf\u8fc7\u6d4b\u8bd5\u7684\u5907\u4efd\u3002"),(0,i.kt)("h3",{id:"\u5907\u4efd-rancher-\u96c6\u7fa4\u8282\u70b9\u865a\u62df\u673a"},"\u5907\u4efd Rancher \u96c6\u7fa4\u8282\u70b9\u865a\u62df\u673a"),(0,i.kt)("p",null,"\u5c06 Rancher \u7ba1\u7406\u8282\u70b9\u7684\u865a\u62df\u673a\u7eb3\u5165\u6807\u51c6\u7684\u865a\u62df\u673a\u5907\u4efd\u7b56\u7565\u4e2d\u3002"))}d.isMDXComponent=!0},92990:function(e,r,t){r.Z=t.p+"assets/images/rancher-on-prem-vsphere-8d50429a21f63cdfeaf22e0e26639255.svg"}}]);
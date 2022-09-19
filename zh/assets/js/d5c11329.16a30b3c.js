"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83250],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,k=d["".concat(i,".").concat(g)]||d[g]||m[g]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88734:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],s={title:"\u5728 Rancher \u4e2d\u52a8\u6001\u914d\u7f6e\u65b0\u5b58\u50a8",weight:2},i=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",id:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",title:"\u5728 Rancher \u4e2d\u52a8\u6001\u914d\u7f6e\u65b0\u5b58\u50a8",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4e3a Rancher \u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u914d\u7f6e\u65b0\u7684\u6301\u4e45\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u5728 Rancher \u4e2d\u52a8\u6001\u914d\u7f6e\u65b0\u5b58\u50a8",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"},next:{title:"\u4f7f\u7528\u5916\u90e8 Ceph \u9a71\u52a8",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver"}},u={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u6dfb\u52a0\u4e00\u4e2a\u5b58\u50a8\u7c7b\u5e76\u5c06\u5176\u914d\u7f6e\u4e3a\u4f7f\u7528\u4f60\u7684\u5b58\u50a8",id:"1-\u6dfb\u52a0\u4e00\u4e2a\u5b58\u50a8\u7c7b\u5e76\u5c06\u5176\u914d\u7f6e\u4e3a\u4f7f\u7528\u4f60\u7684\u5b58\u50a8",level:3},{value:"2. \u4e3a\u4f7f\u7528 StatefulSet \u90e8\u7f72\u7684 Pod \u4f7f\u7528\u5b58\u50a8\u7c7b",id:"2-\u4e3a\u4f7f\u7528-statefulset-\u90e8\u7f72\u7684-pod-\u4f7f\u7528\u5b58\u50a8\u7c7b",level:3}],d={toc:m};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4e3a Rancher \u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u914d\u7f6e\u65b0\u7684\u6301\u4e45\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"\u672c\u8282\u5047\u8bbe\u4f60\u4e86\u89e3 Kubernetes \u7684\u5b58\u50a8\u7c7b\u548c\u6301\u4e45\u5377\u58f0\u660e\u7684\u6982\u5ff5\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"\u5b58\u50a8\u7684\u5de5\u4f5c\u539f\u7406"),"\u3002"),(0,l.kt)("p",null,"\u65b0\u5b58\u50a8\u901a\u5e38\u7531 Amazon EBS \u7b49\u4e91\u63d0\u4f9b\u5546\u63d0\u4f9b\u3002\u4f46\u662f\uff0c\u65b0\u5b58\u50a8\u4e0d\u4e00\u5b9a\u8981\u5728\u4e91\u4e2d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u5757\u5b58\u50a8\u6c60\u5e76\u4e14\u4e0d\u60f3\u4f7f\u7528\u4e91\u63d0\u4f9b\u5546\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Longhorn \u4e3a Kubernetes \u96c6\u7fa4\u63d0\u4f9b\u6301\u4e45\u5b58\u50a8\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/longhorn"},"\u672c\u9875\u9762"),"\u3002"),(0,l.kt)("p",null,"\u8981\u4e3a\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u914d\u7f6e\u65b0\u5b58\u50a8\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%AD%98%E5%82%A8%E7%B1%BB%E5%B9%B6%E5%B0%86%E5%85%B6%E9%85%8D%E7%BD%AE%E4%B8%BA%E4%BD%BF%E7%94%A8%E4%BD%A0%E7%9A%84%E5%AD%98%E5%82%A8"},"\u6dfb\u52a0\u4e00\u4e2a\u5b58\u50a8\u7c7b\u5e76\u5c06\u5176\u914d\u7f6e\u4e3a\u4f7f\u7528\u4f60\u7684\u5b58\u50a8")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E4%B8%BA%E4%BD%BF%E7%94%A8-statefulset-%E9%83%A8%E7%BD%B2%E7%9A%84-pod-%E4%BD%BF%E7%94%A8%E5%AD%98%E5%82%A8%E7%B1%BB"},"\u4e3a\u4f7f\u7528 StatefulSet \u90e8\u7f72\u7684 Pod \u4f7f\u7528\u5b58\u50a8\u7c7b"))),(0,l.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6301\u4e45\u5b58\u50a8\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"li"},"\u7ba1\u7406\u5377"),"\u7684",(0,l.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%A1%B9%E7%9B%AE%E8%A7%92%E8%89%B2%E5%8F%82%E8%80%83"},"\u89d2\u8272"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u8981\u4e3a\u4e91\u96c6\u7fa4\u914d\u7f6e\u5b58\u50a8\uff0c\u5219\u5b58\u50a8\u548c\u96c6\u7fa4\u4e3b\u673a\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u4e91\u63d0\u4f9b\u5546\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u542f\u7528\u4e91\u63d0\u4f9b\u5546\u3002\u6709\u5173\u542f\u7528\u4e91\u63d0\u4f9b\u5546\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/set-up-cloud-providers"},"\u6b64\u9875\u9762"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4f60\u7684\u5b58\u50a8\u5377\u63d2\u4ef6\u53ef\u4ee5\u542f\u7528\u3002")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u542f\u7528\u4ee5\u4e0b\u5b58\u50a8\u5377\u63d2\u4ef6\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EBS Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws-ebs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureFile"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-file"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureDisk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-disk"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google Persistent Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gce-pd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Longhorn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-volume-longhorn"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VMware vSphere Volume"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vsphere-volume"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"local"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nfs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host-path"))))),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b58\u50a8\u5377\u63d2\u4ef6\u6ca1\u6709\u5728\u4e0a\u8ff0\u5217\u8868\u4e2d\uff0c\u4f60\u9700\u8981",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},"\u4f7f\u7528\u529f\u80fd\u5f00\u5173\u6765\u542f\u7528\u4e0d\u53d7\u652f\u6301\u7684\u5b58\u50a8\u9a71\u52a8"),"\u3002"),(0,l.kt)("h3",{id:"1-\u6dfb\u52a0\u4e00\u4e2a\u5b58\u50a8\u7c7b\u5e76\u5c06\u5176\u914d\u7f6e\u4e3a\u4f7f\u7528\u4f60\u7684\u5b58\u50a8"},"1. \u6dfb\u52a0\u4e00\u4e2a\u5b58\u50a8\u7c7b\u5e76\u5c06\u5176\u914d\u7f6e\u4e3a\u4f7f\u7528\u4f60\u7684\u5b58\u50a8"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u6b65\u9aa4\u63cf\u8ff0\u4e86\u5982\u4f55\u5728\u96c6\u7fa4\u7ea7\u522b\u8bbe\u7f6e\u5b58\u50a8\u7c7b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u52a8\u6001\u914d\u7f6e\u6301\u4e45\u5b58\u50a8\u5377\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5b58\u50a8 > \u5b58\u50a8\u7c7b"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5b58\u50a8\u7c7b\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4ece ",(0,l.kt)("strong",{parentName:"li"},"Provisioner")," \u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9\u8981\u7528\u4e8e\u52a8\u6001\u914d\u7f6e\u5b58\u50a8\u5377\u7684\u670d\u52a1\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u6709\u4e00\u4e2a Amazon EC2 \u96c6\u7fa4\u5e76\u4e14\u60f3\u8981\u4f7f\u7528\u4e91\u5b58\u50a8\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Amazon EBS Disk"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u53c2\u6570"),"\u9009\u9879\u5361\u4e2d\uff0c\u586b\u5199\u670d\u52a1\u7528\u4e8e\u52a8\u6001\u914d\u7f6e\u5b58\u50a8\u5377\u6240\u9700\u7684\u4fe1\u606f\u3002\u6bcf\u4e2a\u5377\u63d2\u4ef6\u90fd\u9700\u8981\u4e0d\u540c\u7684\u4fe1\u606f\u6765\u52a8\u6001\u914d\u7f6e\u5b58\u50a8\u5377\u3002\u6709\u5173\u5982\u4f55\u83b7\u53d6\u6b64\u4fe1\u606f\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605\u670d\u52a1\u6587\u6863\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5b58\u50a8\u7c7b\u53ef\u4f9b PVC \u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u5b58\u50a8\u7c7b\u53c2\u6570\u7684\u5b8c\u6574\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#parameters"},"Kubernetes \u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"2-\u4e3a\u4f7f\u7528-statefulset-\u90e8\u7f72\u7684-pod-\u4f7f\u7528\u5b58\u50a8\u7c7b"},"2. \u4e3a\u4f7f\u7528 StatefulSet \u90e8\u7f72\u7684 Pod \u4f7f\u7528\u5b58\u50a8\u7c7b"),(0,l.kt)("p",null,"StatefulSet \u7ba1\u7406 Pod \u7684\u90e8\u7f72\u548c\u6269\u5c55\uff0c\u540c\u65f6\u4e3a\u6bcf\u4e2a Pod \u7ef4\u62a4\u4e00\u4e2a\u7c98\u6027\u6807\u8bc6\u3002\u5728\u8fd9\u4e2a StatefulSet \u4e2d\uff0c\u6211\u4eec\u5c06\u914d\u7f6e\u4e00\u4e2a VolumeClaimTemplate\u3002StatefulSet \u7ba1\u7406\u7684\u6bcf\u4e2a Pod \u90fd\u5c06\u90e8\u7f72\u4e00\u4e2a\u57fa\u4e8e\u6b64 VolumeClaimTemplate \u7684 PersistentVolumeClaim\u3002PersistentVolumeClaim \u5c06\u5f15\u7528\u6211\u4eec\u521b\u5efa\u7684 StorageClass\u3002\u56e0\u6b64\uff0c\u5728\u90e8\u7f72 StatefulSet \u7ba1\u7406\u7684\u6bcf\u4e2a Pod \u65f6\uff0c\u90fd\u4f1a\u4f7f\u7528 PersistentVolumeClaim \u4e2d\u5b9a\u4e49\u7684 StorageClass \u6765\u7ed1\u5b9a\u5230\u52a8\u6001\u914d\u7f6e\u7684\u5b58\u50a8\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u5c06 StorageClass \u7528\u4e8e\u5de5\u4f5c\u8d1f\u8f7d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"StatefulSet"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u5377\u58f0\u660e\u6a21\u677f"),"\u9009\u9879\u5361\u4e0a\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u58f0\u660e\u6a21\u677f"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6301\u4e45\u5377\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("em",{parentName:"li"},"\u5b58\u50a8\u7c7b"),"*","\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u5c06\u4e3a\u6b64 StatefulSet \u7ba1\u7406\u7684 pod \u52a8\u6001\u914d\u7f6e\u5b58\u50a8\u7684 StorageClass\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u7528\u4e8e\u8bbf\u95ee\u5377\u7684\u8def\u5f84\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u542f\u52a8"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aStatefulSet \u7ba1\u7406\u7684\u6bcf\u4e2a Pod \u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u90fd\u4f1a\u5411 Kubernetes master \u8bf7\u6c42\u6307\u5b9a\u7684\u78c1\u76d8\u7a7a\u95f4\u3002\u5982\u679c\u5728\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u65f6\u5177\u6709\u6307\u5b9a\u8d44\u6e90\u7684 PV \u662f\u53ef\u7528\u7684\uff0c\u5219 Kubernetes master \u4f1a\u5c06 PV \u7ed1\u5b9a\u5230\u5177\u6709\u517c\u5bb9 PVC \u7684 Pod\u3002"),(0,l.kt)("p",null,"\u8981\u5c06 PVC \u9644\u52a0\u5230\u73b0\u6709\u5de5\u4f5c\u8d1f\u8f7d\uff0c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u5c06 StorageClass \u7528\u4e8e\u5de5\u4f5c\u8d1f\u8f7d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\uff0c\u8f6c\u5230\u4f7f\u7528\u7531 StorageClass \u914d\u7f6e\u7684\u5b58\u50a8\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u5377\u58f0\u660e\u6a21\u677f"),"\u4e2d\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u58f0\u660e\u6a21\u677f"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6301\u4e45\u5377\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("em",{parentName:"li"},"\u5b58\u50a8\u7c7b"),"*","\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u5c06\u4e3a\u6b64 StatefulSet \u7ba1\u7406\u7684 pod \u52a8\u6001\u914d\u7f6e\u5b58\u50a8\u7684 StorageClass\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u7528\u4e8e\u8bbf\u95ee\u5377\u7684\u8def\u5f84\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u5411 Kubernetes master \u8bf7\u6c42\u6307\u5b9a\u7684\u78c1\u76d8\u7a7a\u95f4\u3002\u5982\u679c\u5728\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u65f6\u5177\u6709\u6307\u5b9a\u8d44\u6e90\u7684 PV \u662f\u53ef\u7528\u7684\uff0c\u5219 Kubernetes master \u4f1a\u5c06 PV \u7ed1\u5b9a\u5230 PVC\u3002\u5426\u5219\uff0cRancher \u5c06\u914d\u7f6e\u65b0\u7684\u6301\u4e45\u5b58\u50a8\u3002"))}g.isMDXComponent=!0}}]);
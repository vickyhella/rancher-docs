"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6478],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95987:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"\u5907\u4efd\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e",shortTitle:"\u5b58\u50a8",weight:3},s=void 0,c={unversionedId:"reference-guides/backup-restore-configuration/storage-configuration",id:"reference-guides/backup-restore-configuration/storage-configuration",title:"\u5907\u4efd\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e",description:"\u914d\u7f6e\u4e00\u4e2a\u7528\u4e8e\u4fdd\u5b58\u6240\u6709\u5907\u4efd\u7684\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u5bf9\u6bcf\u4e2a\u5907\u4efd\u8fdb\u884c\u8986\u76d6\uff0c\u4f46\u4ec5\u9650\u4e8e\u4f7f\u7528 S3 \u5bf9\u8c61\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/backup-restore-configuration/storage-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/storage-configuration",permalink:"/zh/reference-guides/backup-restore-configuration/storage-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/backup-restore-configuration/storage-configuration.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u5907\u4efd\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e",shortTitle:"\u5b58\u50a8",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u8fd8\u539f\u914d\u7f6e",permalink:"/zh/reference-guides/backup-restore-configuration/restore-configuration"},next:{title:"\u793a\u4f8b",permalink:"/zh/reference-guides/backup-restore-configuration/examples"}},u={},p=[{value:"\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e",id:"\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e",level:2},{value:"\u65e0\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e",id:"\u65e0\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e",level:3},{value:"S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8",id:"s3-\u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8",level:3},{value:"\u4f7f\u7528\u73b0\u6709\u7684 StorageClass",id:"\u4f7f\u7528\u73b0\u6709\u7684-storageclass",level:3},{value:"\u4f7f\u7528\u73b0\u6709\u7684\u6301\u4e45\u5377",id:"\u4f7f\u7528\u73b0\u6709\u7684\u6301\u4e45\u5377",level:3},{value:"rancher-backup Helm Chart \u7684\u793a\u4f8b values.yaml",id:"rancher-backup-helm-chart-\u7684\u793a\u4f8b-valuesyaml",level:2}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u914d\u7f6e\u4e00\u4e2a\u7528\u4e8e\u4fdd\u5b58\u6240\u6709\u5907\u4efd\u7684\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u5bf9\u6bcf\u4e2a\u5907\u4efd\u8fdb\u884c\u8986\u76d6\uff0c\u4f46\u4ec5\u9650\u4e8e\u4f7f\u7528 S3 \u5bf9\u8c61\u5b58\u50a8\u3002"),(0,o.kt)("p",null,"\u5728 operator \u7ea7\u522b\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\u5b58\u50a8\u4f4d\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e"},"\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u65e0\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e"},"\u65e0\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u9009\u62e9\u4e0d\u914d\u7f6e operator \u7ea7\u522b\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002\u5982\u679c\u9009\u62e9\u6b64\u9009\u9879\uff0c\u4f60\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a\u4e0e S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u4f5c\u4e3a\u6bcf\u4e2a\u5907\u4efd\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"s3-\u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8"},"S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u51ed\u8bc1\u5bc6\u6587"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ece Rancher \u7684\u5bc6\u6587\u4e2d\u9009\u62e9 S3 \u7684\u51ed\u8bc1\u3002",(0,o.kt)("a",{parentName:"td",href:"/zh/reference-guides/backup-restore-configuration/examples#%E5%9C%A8-s3-%E4%B8%AD%E5%AD%98%E5%82%A8%E5%A4%87%E4%BB%BD%E7%9A%84%E5%87%AD%E8%AF%81%E5%AF%86%E6%96%87%E7%A4%BA%E4%BE%8B"},"\u793a\u4f8b"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u6876\u540d\u79f0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u5907\u4efd\u7684 ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html"},"S3 \u5b58\u50a8\u6876"),"\u7684\u540d\u79f0\u3002\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"td"},"rancherbackups"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u533a\u57df"),(0,o.kt)("td",{parentName:"tr",align:null},"S3 \u5b58\u50a8\u6876\u6240\u5728\u7684 ",(0,o.kt)("a",{parentName:"td",href:"https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"},"AWS \u533a\u57df"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5939"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u5907\u4efd\u7684 ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/using-folders.html"},"S3 \u5b58\u50a8\u6876\u4e2d\u7684\u6587\u4ef6\u5939"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u7aef\u70b9"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},"S3 \u7aef\u70b9"),"\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"td"},"s3.us-west-2.amazonaws.com"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Endpoint CA"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e S3 \u7aef\u70b9\u7684 CA \u8bc1\u4e66\u3002\u9ed8\u8ba4\u503c\uff1abase64 \u7f16\u7801\u7684 CA \u8bc1\u4e66\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"insecureTLSSkipVerify"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4f60\u4e0d\u4f7f\u7528 TLS\uff0c\u5219\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),"\u3002")))),(0,o.kt)("h3",{id:"\u4f7f\u7528\u73b0\u6709\u7684-storageclass"},"\u4f7f\u7528\u73b0\u6709\u7684 StorageClass"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u901a\u8fc7\u9009\u62e9 StorageClass \u9009\u9879\u6765\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Chart\uff0c\u5c06\u4f1a\u521b\u5efa\u4e00\u4e2a\u6301\u4e45\u5377\u8bf4\u660e\uff08Persistent Volume Claim\uff0cPVC\uff09\uff0c\u800c\u4e14 Kubernetes \u4f1a\u52a8\u6001\u914d\u7f6e\u4e00\u4e2a\u6301\u4e45\u5377\uff08Persistent Volume\uff0cPV\uff09\uff0c\u6240\u6709\u5907\u4efd\u90fd\u4f1a\u9ed8\u8ba4\u4fdd\u5b58\u5230\u8be5\u6301\u4e45\u5377\u4e2d\u3002"),(0,o.kt)("p",null,"\u5173\u4e8e\u521b\u5efa\u5b58\u50a8\u7c7b\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"},"\u672c\u7ae0\u8282"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u56de\u6536\u7b56\u7565\u4e3a "Retain" \u7684 StorageClass\u3002\u5426\u5219\uff0c\u5982\u679c ',(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Chart \u521b\u5efa\u7684 PVC \u5728\u5e94\u7528\u5347\u7ea7\u671f\u95f4\u6216\u610f\u5916\u88ab\u5220\u9664\u540e\uff0cPV \u4e5f\u4f1a\u88ab\u5220\u9664\uff0c\u4e5f\u5c31\u662f\u8bf4\u6240\u6709\u4fdd\u5b58\u5728\u5176\u4e2d\u7684\u5907\u4efd\u90fd\u4f1a\u88ab\u5220\u9664\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",'\u5982\u679c\u6ca1\u6709\u8fd9\u6837\u7684 StorageClass\uff0c\u5219\u5728\u8bbe\u7f6e PV \u4e4b\u540e\uff0c\u4e00\u5b9a\u8981\u5c06\u5b83\u7684\u56de\u6536\u7b56\u7565\u8bbe\u7f6e\u4e3a "Retain"\uff0c\u7136\u540e\u518d\u5c06\u5907\u4efd\u5b58\u50a8\u5728\u5176\u4e2d\u3002'))),(0,o.kt)("h3",{id:"\u4f7f\u7528\u73b0\u6709\u7684\u6301\u4e45\u5377"},"\u4f7f\u7528\u73b0\u6709\u7684\u6301\u4e45\u5377"),(0,o.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u5907\u4efd\u7684\u73b0\u6709\u6301\u4e45\u5377\u3002\u6709\u5173\u5728 Rancher \u4e2d\u521b\u5efa PersistentVolumes \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage#2-%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%BC%95%E7%94%A8%E6%8C%81%E4%B9%85%E5%AD%98%E5%82%A8%E7%9A%84-persistentvolume"},"\u672c\u8282"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u56de\u6536\u7b56\u7565\u4e3a "Retain" \u7684 Persistent Volume\u3002\u5426\u5219\uff0c\u5982\u679c ',(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Chart \u521b\u5efa\u7684 PVC \u5728\u5e94\u7528\u5347\u7ea7\u671f\u95f4\u6216\u610f\u5916\u88ab\u5220\u9664\u540e\uff0cPV \u4e5f\u4f1a\u88ab\u5220\u9664\uff0c\u4e5f\u5c31\u662f\u8bf4\u6240\u6709\u4fdd\u5b58\u5728\u5176\u4e2d\u7684\u5907\u4efd\u90fd\u4f1a\u88ab\u5220\u9664\u3002"))),(0,o.kt)("h2",{id:"rancher-backup-helm-chart-\u7684\u793a\u4f8b-valuesyaml"},"rancher-backup Helm Chart \u7684\u793a\u4f8b values.yaml"),(0,o.kt)("p",null,"\u4f7f\u7528 Helm CLI \u65f6\uff0c\u53ef\u7528\u4e8e\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/backup-restore-operator/blob/master/charts/rancher-backup/values.yaml"},"backup-restore-operator")," \u4ed3\u5e93\u4e2d\u627e\u5230\u3002"),(0,o.kt)("p",null,"\u6709\u5173 ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u6587\u4ef6\u548c\u5728\u5b89\u88c5\u65f6\u914d\u7f6e Helm Charts \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing"},"Helm \u6587\u6863"),"\u3002"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7086],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u8fd8\u539f\u914d\u7f6e"},p=void 0,c={unversionedId:"reference-guides/backup-restore-configuration/restore-configuration",id:"reference-guides/backup-restore-configuration/restore-configuration",title:"\u8fd8\u539f\u914d\u7f6e",description:"\u4f60\u53ef\u4ee5\u5728\u8fd8\u539f\u521b\u5efa\u9875\u9762\u63d0\u4f9b\u8fd8\u539f\u5907\u4efd\u7684\u8be6\u7ec6\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/backup-restore-configuration/restore-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/restore-configuration",permalink:"/zh/reference-guides/backup-restore-configuration/restore-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/backup-restore-configuration/restore-configuration.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"\u8fd8\u539f\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u5907\u4efd\u914d\u7f6e",permalink:"/zh/reference-guides/backup-restore-configuration/backup-configuration"},next:{title:"\u5907\u4efd\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e",permalink:"/zh/reference-guides/backup-restore-configuration/storage-configuration"}},u={},s=[{value:"\u5907\u4efd\u6e90",id:"\u5907\u4efd\u6e90",level:2},{value:"\u4f7f\u7528\u5df2\u6709\u7684\u5907\u4efd\u914d\u7f6e\u6062\u590d",id:"\u4f7f\u7528\u5df2\u6709\u7684\u5907\u4efd\u914d\u7f6e\u6062\u590d",level:3},{value:"\u4f7f\u7528\u9ed8\u8ba4\u5b58\u50a8\u76ee\u6807\u6062\u590d",id:"\u4f7f\u7528\u9ed8\u8ba4\u5b58\u50a8\u76ee\u6807\u6062\u590d",level:3},{value:"\u4f7f\u7528\u4e0e S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u6062\u590d",id:"\u4f7f\u7528\u4e0e-s3-\u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u6062\u590d",level:3},{value:"\u52a0\u5bc6",id:"\u52a0\u5bc6",level:2},{value:"\u8fd8\u539f\u8fc7\u7a0b\u4e2d\u4fee\u526a",id:"\u8fd8\u539f\u8fc7\u7a0b\u4e2d\u4fee\u526a",level:2},{value:"\u4ece S3 \u83b7\u53d6\u5907\u4efd\u6587\u4ef6\u540d",id:"\u4ece-s3-\u83b7\u53d6\u5907\u4efd\u6587\u4ef6\u540d",level:2}],d={toc:s};function k(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd8\u539f\u521b\u5efa\u9875\u9762\u63d0\u4f9b\u8fd8\u539f\u5907\u4efd\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41399).Z,width:"2870",height:"1074"})),(0,i.kt)("h2",{id:"\u5907\u4efd\u6e90"},"\u5907\u4efd\u6e90"),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u63d0\u4f9b\u5907\u4efd\u6587\u4ef6\u548c\u5907\u4efd\u6587\u4ef6\u5b58\u50a8\u4f4d\u7f6e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0coperator \u4f1a\u4f7f\u7528\u8fd9\u4e9b\u4fe1\u606f\u6267\u884c\u8fd8\u539f\u3002\u9009\u62e9\u4ee5\u4e0b\u5176\u4e2d\u4e00\u4e2a\u9009\u9879\u6765\u63d0\u4f9b\u8fd9\u4e9b\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u5df2\u6709\u7684\u5907\u4efd\u914d\u7f6e\u6062\u590d"},"\u4f7f\u7528\u5df2\u6709\u7684\u5907\u4efd\u914d\u7f6e\u6062\u590d"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9009\u62e9\u8fd9\u4e2a\u9009\u9879\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u76ee\u6807\u5907\u4efd"),"\u4e0b\u62c9\u83dc\u5355\u4e2d\u4f1a\u51fa\u73b0\u96c6\u7fa4\u4e2d\u53ef\u7528\u7684\u5907\u4efd\u3002\u4ece\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 Backup\uff0c\u9009\u62e9\u540e",(0,i.kt)("strong",{parentName:"p"},"\u5907\u4efd\u6587\u4ef6\u540d"),"\u5b57\u6bb5\u4f1a\u81ea\u52a8\u586b\u5199\uff0c\u800c\u4e14\u6240\u9009 Backup \u7684\u4fe1\u606f\u4f1a\u4f20\u9012\u7ed9 operator"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23553).Z,width:"2358",height:"1030"})),(0,i.kt)("p",null,"\u5982\u679c Backup \u81ea\u5b9a\u4e49\u8d44\u6e90\u5728\u96c6\u7fa4\u4e2d\u4e0d\u5b58\u5728\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u51c6\u786e\u7684\u6587\u4ef6\u540d\uff0c\u5e76\u4f7f\u7528\u9ed8\u8ba4\u5b58\u50a8\u76ee\u6807\u6216\u4e0e S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u6765\u63d0\u4f9b\u5907\u4efd\u6e90\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u9ed8\u8ba4\u5b58\u50a8\u76ee\u6807\u6062\u590d"},"\u4f7f\u7528\u9ed8\u8ba4\u5b58\u50a8\u76ee\u6807\u6062\u590d"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u8981\u4ece operator \u7ea7\u522b\u914d\u7f6e\u7684\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e\u4e2d\u7684\u5907\u4efd\u6587\u4ef6\u8fdb\u884c\u6062\u590d\uff0c\u8bf7\u9009\u62e9\u6b64\u9009\u9879\u3002operator \u7ea7\u522b\u7684\u914d\u7f6e\u662f\u6307\u5b89\u88c5\u6216\u5347\u7ea7 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator \u65f6\u914d\u7f6e\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002\u5728",(0,i.kt)("strong",{parentName:"p"},"\u5907\u4efd\u6587\u4ef6\u540d"),"\u5b57\u6bb5\u4e2d\u63d0\u4f9b\u51c6\u786e\u7684\u6587\u4ef6\u540d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61272).Z,width:"2366",height:"878"})),(0,i.kt)("h3",{id:"\u4f7f\u7528\u4e0e-s3-\u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u6062\u590d"},"\u4f7f\u7528\u4e0e S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u6062\u590d"),(0,i.kt)("p",null,"\u5982\u679c\u5728 operator \u7ea7\u522b\u6ca1\u6709\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e\uff0c\u6216\u8005\u5907\u4efd\u6587\u4ef6\u6240\u5728\u7684\u5b58\u50a8\u6876\u4e0e\u914d\u7f6e\u7684\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e\u4e0d\u4e00\u6837\u65f6\uff0c\u8bf7\u9009\u62e9\u6b64\u9009\u9879\u3002\u5728",(0,i.kt)("strong",{parentName:"p"},"\u5907\u4efd\u6587\u4ef6\u540d"),"\u5b57\u6bb5\u4e2d\u63d0\u4f9b\u51c6\u786e\u7684\u6587\u4ef6\u540d\u3002\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"#%E4%BB%8E-s3-%E8%8E%B7%E5%8F%96%E5%A4%87%E4%BB%BD%E6%96%87%E4%BB%B6%E5%90%8D"},"\u672c\u8282"),"\u4e86\u89e3\u4ece S3 \u83b7\u53d6\u5907\u4efd\u6587\u4ef6\u540d\u7684\u5177\u4f53\u6b65\u9aa4\u3002\u586b\u5199 S3 \u517c\u5bb9\u5bf9\u8c61\u5b58\u50a8\u7684\u6240\u6709\u8be6\u7ec6\u4fe1\u606f\u3002\u5b83\u7684\u5b57\u6bb5\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/backup-restore-configuration/backup-configuration#%E5%AD%98%E5%82%A8%E4%BD%8D%E7%BD%AE"},"Backup \u81ea\u5b9a\u4e49\u8d44\u6e90"),"\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"backup.StorageLocation")," \u914d\u7f6e\u7684\u5b57\u6bb5\u4e00\u6837\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17357).Z,width:"2344",height:"1332"})),(0,i.kt)("h2",{id:"\u52a0\u5bc6"},"\u52a0\u5bc6"),(0,i.kt)("p",null,"\u5982\u679c\u5907\u4efd\u662f\u5728\u542f\u7528\u52a0\u5bc6\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u7684\uff0c\u5907\u4efd\u6587\u4ef6\u7684\u540e\u7f00\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},".enc"),"\u3002\u5982\u679c\u4f60\u9009\u62e9\u8fd9\u7c7b\u7684 Backup\uff0c\u6216\u8005\u63d0\u4f9b\u540e\u7f00\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},".enc")," \u7684\u5907\u4efd\u6587\u4ef6\u540d\uff0c\u5219\u4f1a\u663e\u793a\u53e6\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"Encryption Config Secret")," \u7684\u4e0b\u62c9\u83dc\u5355\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11896).Z,width:"2362",height:"338"})),(0,i.kt)("p",null,"\u4ece\u8be5\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u7684\u5bc6\u6587\u5fc5\u987b\u4e0e\u6267\u884c\u5907\u4efd\u65f6\u7528\u4e8e Backup \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u5bc6\u6587\u5185\u5bb9\u76f8\u540c\u3002\u5982\u679c\u52a0\u5bc6\u914d\u7f6e\u4e0d\u5339\u914d\uff0c\u8fd8\u539f\u5c06\u4f1a\u5931\u8d25\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Encryption Config Secret")," \u4e0b\u62c9\u83dc\u5355\u5c06\u8fc7\u6ee4\u5e76\u4ec5\u5217\u51fa\u62e5\u6709\u8fd9\u4e2a key \u7684\u5bc6\u6587\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML \u6307\u4ee4\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"encryptionConfigSecretName")),(0,i.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"td"},"cattle-resources-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u5305\u542b\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\u7684\u5bc6\u6587\u7684\u540d\u79f0\u3002")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6b64\u5b57\u6bb5\u4ec5\u5728\u5907\u4efd\u521b\u5efa\u7684\u8fc7\u7a0b\u4e2d\u542f\u7528\u4e86\u52a0\u5bc6\u529f\u80fd\u65f6\u624d\u9700\u8981\u8bbe\u7f6e\u3002\u63d0\u4f9b\u9519\u8bef\u7684\u52a0\u5bc6\u914d\u7f6e\u5c06\u5bfc\u81f4\u8fd8\u539f\u5931\u8d25\u3002"))),(0,i.kt)("h2",{id:"\u8fd8\u539f\u8fc7\u7a0b\u4e2d\u4fee\u526a"},"\u8fd8\u539f\u8fc7\u7a0b\u4e2d\u4fee\u526a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prune"),"\uff1a\u4e3a\u4e86\u4ece\u5907\u4efd\u4e2d\u5b8c\u5168\u6062\u590d Rancher\uff0c\u5e76\u56de\u5230\u5907\u4efd\u65f6\u7684\u786e\u5207\u72b6\u6001\uff0c\u6211\u4eec\u9700\u8981\u5220\u9664 Rancher \u5728\u5907\u4efd\u540e\u521b\u5efa\u7684\u6240\u6709\u989d\u5916\u8d44\u6e90\u3002\u5982\u679c ",(0,i.kt)("strong",{parentName:"li"},"Prune")," \u6807\u5fd7\u88ab\u542f\u7528\uff0coperator \u5c31\u4f1a\u5220\u9664\u8fd9\u4e9b\u8d44\u6e90\u3002Prune \u662f\u9ed8\u8ba4\u542f\u7528\u7684\uff0c\u5efa\u8bae\u4fdd\u6301\u542f\u7528\u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5220\u9664\u8d85\u65f6"),"\uff1a\u5728\u5220\u9664\u8d44\u6e90\u7684\u65f6\u5019\uff0coperator \u7f16\u8f91\u8d44\u6e90\u4ee5\u5220\u9664 Finalizers\uff0c\u5e76\u8bd5\u56fe\u518d\u6b21\u5220\u9664\u524d\u5c06\u7b49\u5f85\u7684\u65f6\u95f4\u3002")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML \u6307\u4ee4\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"prune")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u5907\u4efd\u4e2d\u4e0d\u5b58\u5728\u7684\u7531 Rancher \u7ba1\u7406\u7684\u8d44\u6e90\uff08\u63a8\u8350\uff09\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deleteTimeoutSeconds")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728\u5220\u9664\u8d44\u6e90\u7684\u65f6\u5019\uff0coperator \u7f16\u8f91\u8d44\u6e90\u4ee5\u5220\u9664 Finalizers\uff0c\u5e76\u8bd5\u56fe\u518d\u6b21\u5220\u9664\u524d\u5c06\u7b49\u5f85\u7684\u65f6\u95f4\u3002")))),(0,i.kt)("h2",{id:"\u4ece-s3-\u83b7\u53d6\u5907\u4efd\u6587\u4ef6\u540d"},"\u4ece S3 \u83b7\u53d6\u5907\u4efd\u6587\u4ef6\u540d"),(0,i.kt)("p",null,"\u8fd9\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator \u7528\u6765\u6267\u884c\u8fd8\u539f\u7684\u5907\u4efd\u6587\u4ef6\u7684\u540d\u79f0\u3002"),(0,i.kt)("p",null,"\u8981\u4ece S3 \u83b7\u53d6\u8fd9\u4e2a\u6587\u4ef6\u540d\uff0c\u8bf7\u8fdb\u5165\u4f60\u7684 S3 \u5b58\u50a8\u6876\uff08\u6216\u5728\u6267\u884c\u5907\u4efd\u65f6\u6307\u5b9a\u7684\u6587\u4ef6\u5939\uff09\u3002"),(0,i.kt)("p",null,"\u590d\u5236\u6587\u4ef6\u540d\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u4f60\u7684 Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u4e2d\u3002\u5047\u8bbe\u4f60\u7684\u5907\u4efd\u6587\u4ef6\u7684\u540d\u5b57\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"backupfile"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u5b58\u50a8\u6876\u540d\u79f0\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"s3bucket"),"\uff0c\u800c\u4e14\u4f60\u6ca1\u6709\u6307\u5b9a\u6587\u4ef6\u5939\uff0c\u90a3\u4e48\u8981\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," \u4f1a\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"backupfile"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u5b58\u50a8\u6876\u540d\u79f0\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"s3bucket"),"\uff0c\u800c\u4e14\u57fa\u7840\u6587\u4ef6\u5939\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"s3folder"),"\uff0c\u90a3\u4e48\u8981\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," \u4f1a\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"backupfile"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"s3Folder")," \u4e2d\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"s3sub")," \u7684\u5b50\u6587\u4ef6\u5939\uff0c\u800c\u4e14\u4f60\u7684\u5907\u4efd\u6587\u4ef6\u5b58\u653e\u5728\u8be5\u6587\u4ef6\u5939\u4e2d\uff0c\u90a3\u4e48\u8981\u4f7f\u7528\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," \u4f1a\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"s3sub/backupfile"),"\u3002")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML \u6307\u4ee4\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"backupFilename")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8fd9\u662f ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-backup")," operator \u7528\u6765\u6267\u884c\u8fd8\u539f\u7684\u5907\u4efd\u6587\u4ef6\u7684\u540d\u79f0\u3002")))))}k.isMDXComponent=!0},61272:function(e,t,n){t.Z=n.p+"assets/images/default-95cca92f765567228a78287139a2c1a0.png"},11896:function(e,t,n){t.Z=n.p+"assets/images/encryption-8dfdf6319173018658b2e21a06664814.png"},23553:function(e,t,n){t.Z=n.p+"assets/images/existing-109a6b8a8171763189d2bf81535eb275.png"},41399:function(e,t,n){t.Z=n.p+"assets/images/restore-e471e6f7f7070cbd282958fb299e04d2.png"},17357:function(e,t,n){t.Z=n.p+"assets/images/s3store-35e51e0c0b4d58a3cf9c79a1014be661.png"}}]);
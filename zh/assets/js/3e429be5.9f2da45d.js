"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[71644],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),k=a,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||o;return r?n.createElement(N,i(i({ref:t},d),{},{components:r})):n.createElement(N,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},10787:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"\u6062\u590d\u5907\u4efd - Docker \u5b89\u88c5",shortTitle:"\u8fd8\u539f",weight:3},p=void 0,c={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",id:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",title:"\u6062\u590d\u5907\u4efd - Docker \u5b89\u88c5",description:"\u5982\u679c\u9047\u5230\u707e\u96be\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher Server \u6062\u590d\u5230\u6700\u65b0\u7684\u5907\u4efd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u6062\u590d\u5907\u4efd - Docker \u5b89\u88c5",shortTitle:"\u8fd8\u539f",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u5907\u4efd Docker \u5b89\u88c5\u7684 Rancher",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},next:{title:"\u5907\u4efd\u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"}},d={},u=[{value:"\u5728\u4f60\u5f00\u59cb\u524d",id:"\u5728\u4f60\u5f00\u59cb\u524d",level:2},{value:"\u6062\u590d\u5907\u4efd",id:"\u6062\u590d\u5907\u4efd",level:2}],s={toc:u};function k(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u9047\u5230\u707e\u96be\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher Server \u6062\u590d\u5230\u6700\u65b0\u7684\u5907\u4efd\u3002"),(0,o.kt)("h2",{id:"\u5728\u4f60\u5f00\u59cb\u524d"},"\u5728\u4f60\u5f00\u59cb\u524d"),(0,o.kt)("p",null,"\u5728\u6062\u590d\u5907\u4efd\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u5c06\u8f93\u5165\u4e00\u7cfb\u5217\u547d\u4ee4\u3002\u8bf7\u4f7f\u7528\u73af\u5883\u4e2d\u7684\u6570\u636e\u66ff\u6362\u5360\u4f4d\u7b26\u3002\u5360\u4f4d\u7b26\u7528\u5c16\u62ec\u53f7\u548c\u5927\u5199\u5b57\u6bcd\uff08\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"\uff09\u8868\u793a\u3002\u4ee5\u4e0b\u662f\u5e26\u6709\u5360\u4f4d\u7b26\u7684\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run  --volumes-from <RANCHER_CONTAINER_NAME> -v $PWD:/backup \\\nbusybox sh -c "rm /var/lib/rancher/* -rf  && \\\ntar pzxvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>"\n')),(0,o.kt)("p",null,"\u5728\u6b64\u547d\u4ee4\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_VERSION>-<DATE>")," \u662f\u7528\u4e8e Rancher \u90e8\u7f72\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("p",null,"\u8bf7\u4ea4\u53c9\u53c2\u8003\u4e0b\u65b9\u7684\u56fe\u7247\u548c\u8868\u683c\uff0c\u4e86\u89e3\u83b7\u53d6\u6b64\u5360\u4f4d\u7b26\u6570\u636e\u7684\u65b9\u6cd5\u3002\u5728\u5f00\u59cb\u4ee5\u4e0b\u6b65\u9aa4\u4e4b\u524d\uff0c\u8bf7\u5148\u8bb0\u4e0b\u6216\u590d\u5236\u6b64\u4fe1\u606f\u3002"),(0,o.kt)("sup",null,"\u7ec8\u7aef ",(0,o.kt)("code",null,"docker ps")," \u547d\u4ee4\uff0c\u663e\u793a\u5982\u4f55\u627e\u5230 ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_TAG>")," \u548c ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5360\u4f4d\u7b26\u53c2\u8003",src:r(50953).Z,width:"1275",height:"258"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,o.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_TAG>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"\u9996\u6b21\u5b89\u88c5\u62c9\u53d6\u7684 rancher/rancher \u955c\u50cf\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684 Rancher \u5bb9\u5668\u7684\u540d\u79f0\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"Rancher \u5907\u4efd\u7684\u7248\u672c\u53f7\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5bb9\u5668\u6216\u5907\u4efd\u7684\u521b\u5efa\u65e5\u671f\u3002")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8fdc\u7a0b\u8fde\u63a5\u767b\u5f55\u5230 Rancher Server \u6240\u5728\u7684\u4e3b\u673a\u5e76\u8f93\u5165\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," \u4ee5\u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\uff0c\u4ece\u800c\u83b7\u5f97 ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_TAG>")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a")," \u547d\u4ee4\u67e5\u770b\u505c\u6b62\u4e86\u7684\u5bb9\u5668\u3002\u5728\u521b\u5efa\u5907\u4efd\u671f\u95f4\uff0c\u4f60\u968f\u65f6\u53ef\u4ee5\u8fd0\u884c\u8fd9\u4e9b\u547d\u4ee4\u6765\u83b7\u5f97\u5e2e\u52a9\u3002"),(0,o.kt)("h2",{id:"\u6062\u590d\u5907\u4efd"},"\u6062\u590d\u5907\u4efd"),(0,o.kt)("p",null,"\u4f7f\u7528\u4f60\u4e4b\u524d\u521b\u5efa\u7684",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"\u5907\u4efd"),"\uff0c\u5c06 Rancher \u6062\u590d\u5230\u6700\u540e\u5df2\u77e5\u7684\u5065\u5eb7\u72b6\u6001\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8fdc\u7a0b\u7ec8\u7aef\u8fde\u63a5\uff0c\u767b\u5f55\u5230\u8fd0\u884c Rancher Server \u7684\u8282\u70b9\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u505c\u6b62\u5f53\u524d\u8fd0\u884c Rancher Server \u7684\u5bb9\u5668\u3002\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," \u66ff\u6362\u4e3a Rancher \u5bb9\u5668\u7684\u540d\u79f0\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06\u4f60\u5728",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"\u521b\u5efa\u5907\u4efd - Docker \u5b89\u88c5"),"\u65f6\u521b\u5efa\u7684\u5907\u4efd\u538b\u7f29\u5305\u79fb\u52a8\u5230 Rancher Server\u3002\u5207\u6362\u5230\u4f60\u5c06\u5176\u79fb\u52a8\u5230\u7684\u76ee\u5f55\u3002\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," \u4ee5\u786e\u8ba4\u5b83\u5728\u8be5\u4f4d\u7f6e\u3002"),(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u9075\u5faa\u4e86\u6211\u4eec\u5728",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"\u521b\u5efa\u5907\u4efd - Docker \u5b89\u88c5"),"\u4e2d\u63a8\u8350\u7684\u547d\u540d\u65b9\u5f0f\uff0c\u5b83\u7684\u540d\u79f0\u4f1a\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz")," \u7c7b\u4f3c\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u5f53\u524d\u72b6\u6001\u6570\u636e\uff0c\u5e76\u5c06\u5176\u66ff\u6362\u4e3a\u5907\u4efd\u6570\u636e\u3002\u8bf7\u66ff\u6362\u5360\u4f4d\u7b26\u3002\u4e0d\u8981\u5fd8\u8bb0\u5173\u95ed\u5f15\u53f7\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8be5\u547d\u4ee4\u5c06\u5220\u9664 Rancher Server \u5bb9\u5668\u4e2d\u7684\u6240\u6709\u5f53\u524d\u72b6\u6001\u6570\u636e\u3002\u521b\u5efa\u5907\u4efd\u538b\u7f29\u5305\u540e\u4fdd\u5b58\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u5c06\u4e22\u5931\u3002"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'docker run  --volumes-from <RANCHER_CONTAINER_NAME> -v $PWD:/backup \\\nbusybox sh -c "rm /var/lib/rancher/* -rf  && \\\ntar pzxvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u7ed3\u679c"),"\uff1a\u5c4f\u5e55\u4e0a\u5c06\u8fd0\u884c\u547d\u4ee4\u6d41\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u91cd\u65b0\u542f\u52a8 Rancher Server \u5bb9\u5668\uff0c\u66ff\u6362\u5360\u4f4d\u7b26\u3002Rancher Server \u5c06\u4f7f\u7528\u4f60\u7684\u5907\u4efd\u6570\u636e\u91cd\u65b0\u542f\u52a8\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker start <RANCHER_CONTAINER_NAME>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7b49\u5f85\u7247\u523b\uff0c\u7136\u540e\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 Rancher\u3002\u786e\u8ba4\u8fd8\u539f\u6210\u529f\uff0c\u5e76\u4e14\u4f60\u7684\u6570\u636e\u5df2\u6062\u590d\u3002"))))}k.isMDXComponent=!0},50953:function(e,t,r){t.Z=r.p+"assets/images/placeholder-ref-70c9571e1a85164291c80a55c7c614b5.png"}}]);
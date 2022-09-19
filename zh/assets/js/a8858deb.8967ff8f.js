"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83212],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,u(u({ref:t},s),{},{components:r})):n.createElement(g,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26601:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),u=["components"],i={title:"\u8bbe\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",weight:3},l=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",id:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",title:"\u8bbe\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",description:"\u5728\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\u65f6\uff0c\u5982\u679c\u4f60\u5728\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e0a\u8bbe\u7f6e\u4e86\u4efb\u4f55\u4e0e CPU \u6216\u5185\u5b58\u76f8\u5173\u7684\u5185\u5bb9\uff08\u5373\u9650\u5236\u6216\u9884\u7559\uff09\uff0c\u6240\u6709\u5bb9\u5668\u90fd\u9700\u8981\u5728\u521b\u5efa\u671f\u95f4\u8bbe\u7f6e\u5404\u81ea\u7684 CPU \u6216\u5185\u5b58\u5b57\u6bb5\u3002\u8be6\u60c5\u8bf7\u53c2\u9605 Kubernetes \u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u8bbe\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"},next:{title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"}},s={},p=[{value:"\u7f16\u8f91\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",id:"\u7f16\u8f91\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",level:3},{value:"\u6cbf\u7528\u8d44\u6e90\u9650\u5236",id:"\u6cbf\u7528\u8d44\u6e90\u9650\u5236",level:3},{value:"\u5bb9\u5668\u8d44\u6e90\u914d\u989d\u7c7b\u578b",id:"\u5bb9\u5668\u8d44\u6e90\u914d\u989d\u7c7b\u578b",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\u65f6\uff0c\u5982\u679c\u4f60\u5728\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e0a\u8bbe\u7f6e\u4e86\u4efb\u4f55\u4e0e CPU \u6216\u5185\u5b58\u76f8\u5173\u7684\u5185\u5bb9\uff08\u5373\u9650\u5236\u6216\u9884\u7559\uff09\uff0c\u6240\u6709\u5bb9\u5668\u90fd\u9700\u8981\u5728\u521b\u5efa\u671f\u95f4\u8bbe\u7f6e\u5404\u81ea\u7684 CPU \u6216\u5185\u5b58\u5b57\u6bb5\u3002\u8be6\u60c5\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes \u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u5728\u521b\u5efa\u5de5\u4f5c\u8d1f\u8f7d\u671f\u95f4\u5bf9\u6bcf\u4e2a\u5bb9\u5668\u8bbe\u7f6e\u8fd9\u4e9b\u9650\u5236\uff0c\u53ef\u4ee5\u5728\u547d\u540d\u7a7a\u95f4\u4e0a\u6307\u5b9a\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5bb9\u5668\u8d44\u6e90\u9650\u5236\u3002"),(0,o.kt)("h3",{id:"\u7f16\u8f91\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236"},"\u7f16\u8f91\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u7f16\u8f91\u5bb9\u5668\u7684\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f60\u5728\u9879\u76ee\u4e0a\u8bbe\u7f6e\u4e86 CPU \u6216\u5185\u5b58\u8d44\u6e90\u914d\u989d\uff0c\u73b0\u5728\u9700\u8981\u4e3a\u5bb9\u5668\u8bbe\u7f6e\u76f8\u5e94\u7684\u9ed8\u8ba4\u503c\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u7f16\u8f91\u5bb9\u5668\u7684\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u7f16\u8f91\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u7f16\u8f91\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\u7684\u9879\u76ee\u3002\u5728\u8be5\u9879\u76ee\u4e2d\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c55\u5f00",(0,o.kt)("strong",{parentName:"li"},"\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236"),"\u5e76\u7f16\u8f91\u5bf9\u5e94\u7684\u503c\u3002")),(0,o.kt)("h3",{id:"\u6cbf\u7528\u8d44\u6e90\u9650\u5236"},"\u6cbf\u7528\u8d44\u6e90\u9650\u5236"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u7ea7\u522b\u8bbe\u7f6e\u9ed8\u8ba4\u5bb9\u5668\u8d44\u6e90\u9650\u5236\u540e\uff0c\u9879\u76ee\u4e2d\u6240\u6709\u65b0\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u90fd\u4f1a\u6cbf\u7528\u8fd9\u4e2a\u8d44\u6e90\u9650\u5236\u53c2\u6570\u3002\u65b0\u8bbe\u7f6e\u7684\u9650\u5236\u4e0d\u4f1a\u5f71\u54cd\u9879\u76ee\u4e2d\u73b0\u6709\u7684\u547d\u540d\u7a7a\u95f4\u3002\u4f60\u9700\u8981\u4e3a\u9879\u76ee\u4e2d\u7684\u73b0\u6709\u547d\u540d\u7a7a\u95f4\u624b\u52a8\u8bbe\u7f6e\u9ed8\u8ba4\u5bb9\u5668\u8d44\u6e90\u9650\u5236\uff0c\u4ee5\u4fbf\u521b\u5efa\u5bb9\u5668\u65f6\u80fd\u5e94\u7528\u8be5\u9650\u5236\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u9879\u76ee\u8bbe\u7f6e\u5bb9\u5668\u7684\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\u5e76\u542f\u52a8\u4efb\u4f55\u5546\u5e97\u5e94\u7528\u3002"),(0,o.kt)("p",null,"\u5728\u547d\u540d\u7a7a\u95f4\u4e0a\u914d\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\u540e\uff0c\u5728\u8be5\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u7684\u4efb\u4f55\u5bb9\u5668\u90fd\u4f1a\u6cbf\u7528\u8be5\u9ed8\u8ba4\u503c\u3002\u4f60\u53ef\u4ee5\u5728\u5de5\u4f5c\u8d1f\u8f7d\u521b\u5efa\u671f\u95f4\u8986\u76d6\u8fd9\u4e9b\u9650\u5236/\u9884\u7559\u3002"),(0,o.kt)("h3",{id:"\u5bb9\u5668\u8d44\u6e90\u914d\u989d\u7c7b\u578b"},"\u5bb9\u5668\u8d44\u6e90\u914d\u989d\u7c7b\u578b"),(0,o.kt)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u4ee5\u4e0b\u8d44\u6e90\u9650\u5236\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU \u9650\u5236"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u5bb9\u5668\u7684\u6700\u5927 CPU \u91cf\uff08\u4ee5",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"\u6beb\u6838"),"\u4e3a\u5355\u4f4d\uff09\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU \u9884\u7559"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u7ed9\u5bb9\u5668\u7684\u6700\u5c0f CPU \u91cf\uff08\u4ee5\u6beb\u6838\u4e3a\u5355\u4f4d\uff09\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u9650\u5236"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u5bb9\u5668\u7684\u6700\u5927\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u9884\u7559"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u7ed9\u5bb9\u5668\u7684\u6700\u5c0f\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002")))))}m.isMDXComponent=!0}}]);
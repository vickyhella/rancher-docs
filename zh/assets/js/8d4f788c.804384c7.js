"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99262],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69977:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"RBAC",shortTitle:"RBAC",weight:2},c=void 0,p={unversionedId:"reference-guides/prometheus-federator/rbac",id:"reference-guides/prometheus-federator/rbac",title:"RBAC",description:"\u672c\u6587\u4ecb\u7ecd Prometheus Federator RBAC\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/prometheus-federator/rbac.md",sourceDirName:"reference-guides/prometheus-federator",slug:"/reference-guides/prometheus-federator/rbac",permalink:"/zh/reference-guides/prometheus-federator/rbac",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/prometheus-federator/rbac.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"RBAC",shortTitle:"RBAC",weight:2},sidebar:"tutorialSidebar",previous:{title:"Prometheus Federator",permalink:"/zh/pages-for-subheaders/prometheus-federator"},next:{title:"\u7528\u6237\u8bbe\u7f6e",permalink:"/zh/pages-for-subheaders/user-settings"}},s={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd Prometheus Federator RBAC\u3002"),(0,o.kt)("p",null,"\u5982",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/prometheus-federator#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4"},"\u547d\u540d\u7a7a\u95f4"),"\u90e8\u5206\u6240\u8ff0\uff0cPrometheus Federator \u671f\u671b\u96c6\u7fa4\u4e2d\u5177\u6709\u9879\u76ee\u7ea7\u522b\u6743\u9650\uff08\u4f8b\u5982\uff0c\u5177\u6709\u7531\u5355\u4e2a\u6807\u7b7e\u9009\u62e9\u5668\u786e\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u7ec4\u7684\u6743\u9650\uff09\u7684\u9879\u76ee\u6240\u6709\u8005\u3001\u9879\u76ee\u6210\u5458\u548c\u5176\u4ed6\u7528\u6237\uff0c\u9664\u4e86\u9879\u76ee Registration \u547d\u540d\u7a7a\u95f4\uff08\u9ed8\u8ba4\u5bfc\u5165\u5230\u9879\u76ee\u4e2d\uff09\u548c\u90a3\u4e9b\u5df2\u7ecf\u5305\u542b\u5176\u9879\u76ee\u7684\u547d\u540d\u7a7a\u95f4\u4e4b\u5916\uff0c\u5728\u4efb\u4f55\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u4e2d\u90fd\u53ea\u6709\u6700\u4f4e\u6743\u9650\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u8ba9\u9879\u76ee\u6240\u6709\u8005\u5c06\u7279\u5b9a Chart \u6743\u9650\u5206\u914d\u7ed9\u5176\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u5176\u4ed6\u7528\u6237\uff0cHelm Project Operator \u5c06\u81ea\u52a8\u76d1\u89c6\u4ee5\u4e0b\u7ed1\u5b9a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ClusterRoleBindings"),(0,o.kt)("li",{parentName:"ul"},"\u9879\u76ee\u53d1\u5e03\u547d\u540d\u7a7a\u200b\u200b\u95f4\u4e2d\u7684 RoleBindings")),(0,o.kt)("p",null,"\u5982\u679c Helm Project Operator \u89c2\u5bdf\u5230\u5176\u4e2d\u4e00\u79cd\u7ed1\u5b9a\u7684\u66f4\u6539\uff0cHelm Project Operator \u4f1a\u68c0\u67e5\u7ed1\u5b9a\u6307\u5411\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"roleRef")," \u662f\u5426\u4e0e\u5177\u6709\u4ee5\u4e0b\u540d\u79f0\u7684 ClusterRole \u5339\u914d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.admin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.edit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.view"))),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b roleRef \u5206\u522b\u5bf9\u5e94 ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"view"),"\uff0c\u5b83\u4eec\u90fd\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"Kubernetes \u9762\u5411\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5bf9\u4e8e Rancher RBAC \u7528\u6237\uff0c\u8fd9\u4e9b ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"Kubernetes \u9762\u5411\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272"),"\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6240\u6709\u8005"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6210\u5458"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"\u53ea\u8bfb"),"\u9ed8\u8ba4\u9879\u76ee\u89d2\u8272\u6a21\u677f\u76f4\u63a5\u5bf9\u5e94\u3002"))),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"roleRef")," \u5339\u914d\uff0cHelm Project Operator \u5c06\u4e3a\u6240\u6709\u7528\u6237\u548c\u7ec4\u8fc7\u6ee4\u7ed1\u5b9a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"subjects"),"\uff0c\u5e76\u4f7f\u7528\u5b83\u4e3a\u9879\u76ee Release \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6bcf\u4e2a\u89d2\u8272\u81ea\u52a8\u6784\u9020\u4e00\u4e2a RoleBinding\uff0c\u8be5 RoleBinding \u7684\u540d\u79f0\u4e0e\u89d2\u8272\u76f8\u540c\u5e76\u5e26\u6709\u4ee5\u4e0b\u6807\u7b7e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"helm.cattle.io/project-helm-chart-role: {{ .Release.Name }}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"helm.cattle.io/project-helm-chart-role-aggregate-from: <admin|edit|view>"))),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cPrometheus Federator \u90e8\u7f72\u7684\u5e95\u5c42 Chart ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-project-monitoring")," \u4f1a\u4e3a\u6bcf\u4e2a\u9879\u76ee\u53d1\u5e03\u547d\u540d\u7a7a\u200b\u200b\u95f4\u521b\u5efa\u4e09\u4e2a\u9ed8\u8ba4\u89d2\u8272\uff0c\u8fd9\u4e9b\u89d2\u8272\u80fd\u6388\u6743 ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," \u7528\u6237\u67e5\u770b\u9879\u76ee\u76d1\u63a7\u5806\u6808\u7684 Prometheus\u3001Alertmanager \u548c Grafana UI\uff0c\u4ece\u800c\u63d0\u4f9b\u6700\u4f4e\u6743\u9650\u3002\u5982\u679c\u96c6\u7fa4\u7ba1\u7406\u5458\u60f3\u8981\u4e3a\u67d0\u4e9b\u7528\u6237\u5206\u914d\u989d\u5916\u7684\u6743\u9650\uff0c\u4e00\u79cd\u505a\u6cd5\u662f\u76f4\u63a5\u5c06\u9879\u76ee Release \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 RoleBinding \u5206\u914d\u7ed9\u67d0\u4e9b\u7528\u6237\u3002\u53e6\u4e00\u79cd\u505a\u6cd5\u662f\u521b\u5efa\u5e26\u6709\u4e0a\u8ff0\u4e24\u4e2a\u6807\u7b7e\u7684\u89d2\u8272\uff0c\u7136\u540e\uff0c\u9879\u76ee\u6240\u6709\u8005\u53ef\u4ee5\u63a7\u5236\u5728\u9879\u76ee Registration \u547d\u540d\u7a7a\u95f4\u4e2d\u5206\u914d\u8fd9\u4e9b RBAC \u89d2\u8272\u7684\u7528\u6237\u3002"))}m.isMDXComponent=!0}}]);
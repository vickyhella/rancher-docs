"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52040],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return m}});var t=n(67294);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,c=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=c,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return n?t.createElement(f,o(o({ref:r},d),{},{components:n})):t.createElement(f,o({ref:r},d))}));function m(e,r){var n=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38645:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var t=n(87462),c=n(63366),a=(n(67294),n(3905)),o=["components"],i={title:"\u4e3a\u96c6\u7fa4\u626b\u63cf\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c"},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",id:"how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",title:"\u4e3a\u96c6\u7fa4\u626b\u63cf\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c",description:"\u67d0\u4e9b Kubernetes \u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u81ea\u5b9a\u4e49\u914d\u7f6e Benchmark \u6d4b\u8bd5\u3002\u4f8b\u5982\uff0cKubernetes \u914d\u7f6e\u6587\u4ef6\u6216\u8bc1\u4e66\u7684\u8def\u5f84\u53ef\u80fd\u4e0e\u4e0a\u6e38 CIS Benchmark \u7684\u6807\u51c6\u4f4d\u7f6e\u4e0d\u540c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u4e3a\u96c6\u7fa4\u626b\u63cf\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u5b9a\u65f6\u626b\u63cf\u914d\u7f6e\u544a\u8b66",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule"},next:{title:"\u53c2\u8003\u6307\u5357",permalink:"/zh/reference-guides"}},d={},l=[],p={toc:l};function m(e){var r=e.components,n=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u67d0\u4e9b Kubernetes \u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u81ea\u5b9a\u4e49\u914d\u7f6e Benchmark \u6d4b\u8bd5\u3002\u4f8b\u5982\uff0cKubernetes \u914d\u7f6e\u6587\u4ef6\u6216\u8bc1\u4e66\u7684\u8def\u5f84\u53ef\u80fd\u4e0e\u4e0a\u6e38 CIS Benchmark \u7684\u6807\u51c6\u4f4d\u7f6e\u4e0d\u540c\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," \u5e94\u7528\u6765\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\uff0c\u4ece\u800c\u8fd0\u884c\u96c6\u7fa4\u626b\u63cf\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/cis-scans/custom-benchmark"},"\u6b64\u9875\u9762"),"\u3002"))}m.isMDXComponent=!0}}]);
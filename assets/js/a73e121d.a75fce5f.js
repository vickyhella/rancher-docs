"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82009],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(i,".").concat(f)]||p[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52404:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],s={title:"Create a Custom Benchmark Version for Running a Cluster Scan"},i=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",id:"how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",title:"Create a Custom Benchmark Version for Running a Cluster Scan",description:"There could be some Kubernetes cluster setups that require custom configurations of the Benchmark tests. For example, the path to the Kubernetes config files or certs might be different than the standard location where the upstream CIS Benchmarks look for them.",source:"@site/docs/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",permalink:"/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Create a Custom Benchmark Version for Running a Cluster Scan"},sidebar:"tutorialSidebar",previous:{title:"Configure Alerts for Periodic Scan on a Schedule",permalink:"/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule"},next:{title:"Reference Guides",permalink:"/reference-guides"}},d={},l=[],p={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There could be some Kubernetes cluster setups that require custom configurations of the Benchmark tests. For example, the path to the Kubernetes config files or certs might be different than the standard location where the upstream CIS Benchmarks look for them."),(0,a.kt)("p",null,"It is now possible to create a custom Benchmark Version for running a cluster scan using the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application."),(0,a.kt)("p",null,"For details, see ",(0,a.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/cis-scans/custom-benchmark"},"this page.")))}f.isMDXComponent=!0}}]);
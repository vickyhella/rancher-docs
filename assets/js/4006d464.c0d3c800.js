"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[47183],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83343:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Architecture",weight:1},s=void 0,l={unversionedId:"explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",id:"explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",title:"Architecture",description:"Fleet can manage deployments from git of raw Kubernetes YAML, Helm charts, or Kustomize or any combination of the three. Regardless of the source, all resources are dynamically turned into Helm charts, and Helm is used as the engine to deploy everything in the cluster. This gives you a high degree of control, consistency, and auditability. Fleet focuses not only on the ability to scale, but to give one a high degree of control and visibility to exactly what is installed on the cluster.",source:"@site/docs/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture.md",sourceDirName:"explanations/integrations-in-rancher/fleet-gitops-at-scale",slug:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",permalink:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Architecture",weight:1},sidebar:"tutorialSidebar",previous:{title:"Fleet - GitOps at Scale",permalink:"/pages-for-subheaders/fleet-gitops-at-scale"},next:{title:"Windows Support",permalink:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support"}},u={},p=[],f={toc:p};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Fleet can manage deployments from git of raw Kubernetes YAML, Helm charts, or Kustomize or any combination of the three. Regardless of the source, all resources are dynamically turned into Helm charts, and Helm is used as the engine to deploy everything in the cluster. This gives you a high degree of control, consistency, and auditability. Fleet focuses not only on the ability to scale, but to give one a high degree of control and visibility to exactly what is installed on the cluster."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:n(14956).Z,width:"1366",height:"960"})))}d.isMDXComponent=!0},14956:function(e,t,n){t.Z=n.p+"assets/images/fleet-architecture-f708ce634648101dc98f451dcd59fe84.svg"}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),g=n,k=c["".concat(p,".").concat(g)]||c[g]||d[g]||a;return r?o.createElement(k,s(s({ref:t},u),{},{components:r})):o.createElement(k,s({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"Upgrading Workloads"},s=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",title:"Upgrading Workloads",description:"When a new version of an application image is released on Docker Hub, you can upgrade any workloads running a previous version of the application to the new one.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Upgrading Workloads"},sidebar:"tutorialSidebar",previous:{title:"Rolling Back Workloads",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},next:{title:"Adding a Sidecar",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar"}},p={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When a new version of an application image is released on Docker Hub, you can upgrade any workloads running a previous version of the application to the new one."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the cluster where you want to upgrade a workload and click ",(0,n.kt)("strong",{parentName:"p"},"Explore"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"p"},"Workload"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the workload that you want to upgrade and select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Edit Config"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update the ",(0,n.kt)("strong",{parentName:"p"},"Container Image")," and any options that you want to change.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review and edit the workload's ",(0,n.kt)("strong",{parentName:"p"},"Scaling and Upgrade Policy"),"."),(0,n.kt)("p",{parentName:"li"},"These options control how the upgrade rolls out to containers that are currently running. For example, for scalable deployments, you can choose whether you want to stop old pods before deploying new ones, or vice versa, as well as the upgrade batch size.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The workload begins upgrading its containers, per your specifications. Note that scaling up the deployment or updating the upgrade/scaling policy won't result in the pods recreation."))}d.isMDXComponent=!0}}]);
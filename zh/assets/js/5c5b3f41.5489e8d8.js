"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5099],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21976:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Pod Security Policies"},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",id:"version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",title:"Pod Security Policies",description:"These cluster options are only available for clusters in which Rancher has launched Kubernetes.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Pod Security Policies"},sidebar:"tutorialSidebar",previous:{title:"Rancher's CI/CD Pipelines",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},next:{title:"Project Resource Quotas",permalink:"/zh/v2.5/pages-for-subheaders/manage-project-resource-quotas"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Applying a Pod Security Policy",id:"applying-a-pod-security-policy",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These cluster options are only available for ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"clusters in which Rancher has launched Kubernetes"),".")),(0,o.kt)("p",null,"You can always assign a pod security policy (PSP) to an existing project if you didn't assign one during creation."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a Pod Security Policy within Rancher. Before you can assign a default PSP to an existing project, you must have a PSP available for assignment. For instruction, see ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Creating Pod Security Policies"),"."),(0,o.kt)("li",{parentName:"ul"},"Assign a default Pod Security Policy to the project's cluster. You can't assign a PSP to a project until one is already applied to the cluster. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"the documentation about adding a pod security policy to a cluster"),".")),(0,o.kt)("h3",{id:"applying-a-pod-security-policy"},"Applying a Pod Security Policy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, find the cluster containing the project you want to apply a PSP to."),(0,o.kt)("li",{parentName:"ol"},"From the main menu, select ",(0,o.kt)("strong",{parentName:"li"},"Projects/Namespaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the project that you want to add a PSP to. From that project, select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Pod Security Policy")," drop-down, select the PSP you want to apply to the project.\nAssigning a PSP to a project will:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Override the cluster's default PSP."),(0,o.kt)("li",{parentName:"ul"},"Apply the PSP to the project."),(0,o.kt)("li",{parentName:"ul"},"Apply the PSP to any namespaces you add to the project later.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The PSP is applied to the project and any namespaces added to the project."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Any workloads that are already running in a cluster or project before a PSP is assigned will not be checked to determine if they comply with the PSP. Workloads would need to be cloned or upgraded to see if they pass the PSP.")))}m.isMDXComponent=!0}}]);
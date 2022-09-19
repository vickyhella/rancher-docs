"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59359],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(a),d=o,h=l["".concat(c,".").concat(d)]||l[d]||m[d]||n;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},95302:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],i={title:"Overriding the Default Limit for a Namespace",weight:2,aliases:["/rancher/v2.x/en/project-admin/resource-quotas/override-namespace-default/"]},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",id:"version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",title:"Overriding the Default Limit for a Namespace",description:"Although the Namespace Default Limit propagates from the project to each namespace when created, in some cases, you may need to increase (or decrease) the quotas for a specific namespace. In this situation, you can override the default limits by editing the namespace.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces.md",tags:[],version:"2.5",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Overriding the Default Limit for a Namespace",weight:2,aliases:["/rancher/v2.x/en/project-admin/resource-quotas/override-namespace-default/"]},sidebar:"tutorialSidebar",previous:{title:"How Resource Quotas Work in Rancher Projects",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas"},next:{title:"Setting Container Default Resource Limits",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"}},p={},m=[{value:"Editing Namespace Resource Quotas",id:"editing-namespace-resource-quotas",level:3}],l={toc:m};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Although the ",(0,n.kt)("strong",{parentName:"p"},"Namespace Default Limit")," propagates from the project to each namespace when created, in some cases, you may need to increase (or decrease) the quotas for a specific namespace. In this situation, you can override the default limits by editing the namespace."),(0,n.kt)("p",null,"In the diagram below, the Rancher administrator has a resource quota in effect for their project. However, the administrator wants to override the namespace limits for ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace 3")," so that it has more resources available. Therefore, the administrator ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"raises the namespace limits")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace 3")," so that the namespace can access more resources."),(0,n.kt)("sup",null,"Namespace Default Limit Override"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Namespace Default Limit Override",src:a(30681).Z,width:"1335",height:"843"})),(0,n.kt)("p",null,"How to: ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Editing Namespace Resource Quotas")),(0,n.kt)("h3",{id:"editing-namespace-resource-quotas"},"Editing Namespace Resource Quotas"),(0,n.kt)("p",null,"If there is a ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"resource quota")," configured for a project, you can override the namespace default limit to provide a specific namespace with access to more (or less) project resources."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, open the cluster that contains the namespace for which you want to edit the resource quota.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main menu, select ",(0,n.kt)("strong",{parentName:"p"},"Projects/Namespaces"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the namespace for which you want to edit the resource quota. Select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the Resource Quota ",(0,n.kt)("strong",{parentName:"p"},"Limits"),".  These limits determine the resources available to the namespace. The limits must be set within the configured project limits."),(0,n.kt)("p",{parentName:"li"},"For more information about each ",(0,n.kt)("strong",{parentName:"p"},"Resource Type"),", see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"Resource Quotas"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"If a resource quota is not configured for the project, these options will not be available."),(0,n.kt)("li",{parentName:"ul"},"If you enter limits that exceed the configured project limits, Rancher will not let you save your edits."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Your override is applied to the namespace's resource quota."))}d.isMDXComponent=!0},30681:function(e,t,a){t.Z=a.p+"assets/images/rancher-resource-quota-override-05542ea5daeaeb36a092ecbd8359baae.svg"}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57559],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),l=p(r),f=a,h=l["".concat(u,".").concat(f)]||l[f]||d[f]||i;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=l;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},3679:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),c=["components"],o={title:"Deprecated Features in Rancher v2.5",weight:100,aliases:["/rancher/v2.x/en/faq/deprecated-features-25x/"]},u=void 0,p={unversionedId:"faq/deprecated-features-in-v2.5",id:"version-2.5/faq/deprecated-features-in-v2.5",title:"Deprecated Features in Rancher v2.5",description:"What is Rancher's Deprecation policy?",source:"@site/versioned_docs/version-2.5/faq/deprecated-features-in-v2.5.md",sourceDirName:"faq",slug:"/faq/deprecated-features-in-v2.5",permalink:"/v2.5/faq/deprecated-features-in-v2.5",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/faq/deprecated-features-in-v2.5.md",tags:[],version:"2.5",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Deprecated Features in Rancher v2.5",weight:100,aliases:["/rancher/v2.x/en/faq/deprecated-features-25x/"]},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/v2.5/faq"},next:{title:"Installing and Configuring kubectl",permalink:"/v2.5/faq/install-and-configure-kubectl"}},s={},d=[{value:"What is Rancher&#39;s Deprecation policy?",id:"what-is-ranchers-deprecation-policy",level:3},{value:"Where can I find out which features have been deprecated in Rancher 2.5?",id:"where-can-i-find-out-which-features-have-been-deprecated-in-rancher-25",level:3},{value:"What can I expect when a feature is marked for deprecation?",id:"what-can-i-expect-when-a-feature-is-marked-for-deprecation",level:3}],l={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"what-is-ranchers-deprecation-policy"},"What is Rancher's Deprecation policy?"),(0,i.kt)("p",null,"Starting in Rancher 2.5 we have published our official deprecation policy in the support ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms"},"terms of service"),"."),(0,i.kt)("h3",{id:"where-can-i-find-out-which-features-have-been-deprecated-in-rancher-25"},"Where can I find out which features have been deprecated in Rancher 2.5?"),(0,i.kt)("p",null,"Rancher will publish deprecated features as part of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases/tag/v2.5.0"},"release notes")," for Rancher found on GitHub."),(0,i.kt)("h3",{id:"what-can-i-expect-when-a-feature-is-marked-for-deprecation"},"What can I expect when a feature is marked for deprecation?"),(0,i.kt)("p",null,"In the release where functionality is marked as Deprecated it will still be available and supported allowing upgrades to follow the usual procedure. Once upgraded, users/admins should start planning to move away from the deprecated functionality before upgrading to the release it marked as removed. The recommendation for new deployments is to not use the deprecated feature."))}f.isMDXComponent=!0}}]);
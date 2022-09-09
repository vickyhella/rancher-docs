"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88127],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return p}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),g=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=g(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=g(t),p=i,m=c["".concat(u,".").concat(p)]||c[p]||l[p]||o;return t?n.createElement(m,a(a({ref:r},d),{},{components:t})):n.createElement(m,a({ref:r},d))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=c;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var g=2;g<o;g++)a[g]=t[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},93969:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return l}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"Monitoring Guides",shortTitle:"Guides",weight:4},u=void 0,g={unversionedId:"pages-for-subheaders/monitoring-alerting-guides",id:"version-2.5/pages-for-subheaders/monitoring-alerting-guides",title:"Monitoring Guides",description:"- Enable monitoring",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/monitoring-alerting-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/monitoring-alerting-guides",permalink:"/v2.5/pages-for-subheaders/monitoring-alerting-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/monitoring-alerting-guides.md",tags:[],version:"2.5",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Monitoring Guides",shortTitle:"Guides",weight:4},sidebar:"tutorialSidebar",previous:{title:"Resource Quota Type Reference",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"},next:{title:"Enable Monitoring",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"}},d={},l=[],c={toc:l};function p(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},"Enable monitoring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"},"Uninstall monitoring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"},"Monitoring workloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},"Customizing Grafana dashboards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},"Persistent Grafana dashboards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"},"Debugging high memory usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring"},"Migrating from Monitoring V1 to V2"))))}p.isMDXComponent=!0}}]);
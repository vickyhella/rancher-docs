"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),m=o,p=g["".concat(l,".").concat(m)]||g[m]||d[m]||a;return r?n.createElement(p,i(i({ref:t},c),{},{components:r})):n.createElement(p,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},89941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Alertmanager Configuration"},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",title:"Alertmanager Configuration",description:"It is usually not necessary to directly edit the Alertmanager custom resource. For most use cases, you will only need to edit the Receivers and Routes to configure notifications.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Alertmanager Configuration"},sidebar:"tutorialSidebar",previous:{title:"Advanced Configuration",permalink:"/v2.5/pages-for-subheaders/advanced-configuration"},next:{title:"Prometheus Configuration",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"}},l={},u=[{value:"About the Alertmanager Custom Resource",id:"about-the-alertmanager-custom-resource",level:2},{value:"Deeply Nested Routes",id:"deeply-nested-routes",level:3},{value:"Multiple Alertmanager Replicas",id:"multiple-alertmanager-replicas",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is usually not necessary to directly edit the Alertmanager custom resource. For most use cases, you will only need to edit the Receivers and Routes to configure notifications."),(0,o.kt)("p",null,"When Receivers and Routes are updated, the monitoring application will automatically update the Alertmanager custom resource to be consistent with those changes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#how-alertmanager-works"},"this section."))),(0,o.kt)("h2",{id:"about-the-alertmanager-custom-resource"},"About the Alertmanager Custom Resource"),(0,o.kt)("p",null,"By default, Rancher Monitoring deploys a single Alertmanager onto a cluster that uses a default Alertmanager Config Secret."),(0,o.kt)("p",null,"You may want to edit the Alertmanager custom resource if you would like to take advantage of advanced options that are not exposed in the Rancher UI forms, such as the ability to create a routing tree structure that is more than two levels deep."),(0,o.kt)("p",null,"It is also possible to create more than one Alertmanager in a cluster, which may be useful if you want to implement namespace-scoped monitoring. In this case, you should manage the Alertmanager custom resources  using the same underlying Alertmanager Config Secret."),(0,o.kt)("h3",{id:"deeply-nested-routes"},"Deeply Nested Routes"),(0,o.kt)("p",null,"While the Rancher UI only supports a routing tree that is two levels deep, you can configure more deeply nested routing structures by editing the Alertmanager YAML."),(0,o.kt)("h3",{id:"multiple-alertmanager-replicas"},"Multiple Alertmanager Replicas"),(0,o.kt)("p",null,"As part of the chart deployment options, you can opt to increase the number of replicas of the Alertmanager deployed onto your cluster. The replicas can all be managed using the same underlying Alertmanager Config Secret."),(0,o.kt)("p",null,"This Secret should be updated or modified any time you want to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add in new notifiers or receivers"),(0,o.kt)("li",{parentName:"ul"},"Change the alerts that should be sent to specific notifiers or receivers"),(0,o.kt)("li",{parentName:"ul"},"Change the group of alerts that are sent out")),(0,o.kt)("p",null,"By default, you can either choose to supply an existing Alertmanager Config Secret (i.e. any Secret in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace) or allow Rancher Monitoring to deploy a default Alertmanager Config Secret onto your cluster."),(0,o.kt)("p",null,"By default, the Alertmanager Config Secret created by Rancher will never be modified or deleted on an upgrade or uninstall of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," chart. This restriction prevents users from losing or overwriting their alerting configuration when executing operations on the chart."),(0,o.kt)("p",null,"For more information on what fields can be specified in the Alertmanager Config Secret, please look at the ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Prometheus Alertmanager docs.")),(0,o.kt)("p",null,"The full spec for the Alertmanager configuration file and what it takes in can be found ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#configuration-file"},"here.")))}d.isMDXComponent=!0}}]);
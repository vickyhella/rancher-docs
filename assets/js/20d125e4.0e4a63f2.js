"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97807],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),d=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=d(e.components);return o.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,g=p["".concat(u,".").concat(m)]||p[m]||l[m]||i;return t?o.createElement(g,a(a({ref:r},c),{},{components:t})):o.createElement(g,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90539:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"Setting up Prometheus Federator for a Workload",weight:4},u=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads",title:"Setting up Prometheus Federator for a Workload",description:"- Display CPU and Memory Metrics for a Workload",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads.md",tags:[],version:"current",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Setting up Prometheus Federator for a Workload",weight:4},sidebar:"tutorialSidebar",previous:{title:"Customizing Grafana Dashboards",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/customize-grafana-dashboards"},next:{title:"Installing Project Monitors",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/project-monitors"}},c={},l=[{value:"Display CPU and Memory Metrics for a Workload",id:"display-cpu-and-memory-metrics-for-a-workload",level:3},{value:"Setting up Metrics Beyond CPU and Memory",id:"setting-up-metrics-beyond-cpu-and-memory",level:3}],p={toc:l};function m(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#display-cpu-and-memory-metrics-for-a-workload"},"Display CPU and Memory Metrics for a Workload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-metrics-beyond-cpu-and-memory"},"Setting up Metrics Beyond CPU and Memory"))),(0,i.kt)("h3",{id:"display-cpu-and-memory-metrics-for-a-workload"},"Display CPU and Memory Metrics for a Workload"),(0,i.kt)("p",null,"Displaying CPU and memory metrics with Prometheus Federator is done the same way as with rancher-monitoring. For instructions, refer ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads#display-cpu-and-memory-metrics-for-a-workload"},"here"),"."),(0,i.kt)("h3",{id:"setting-up-metrics-beyond-cpu-and-memory"},"Setting up Metrics Beyond CPU and Memory"),(0,i.kt)("p",null,"Setting up metrics beyond CPU and memory with Prometheus Federator is done the same way as with rancher-monitoring. For instructions, refer ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads#setting-up-metrics-beyond-cpu-and-memory"},"here"),"."))}m.isMDXComponent=!0}}]);
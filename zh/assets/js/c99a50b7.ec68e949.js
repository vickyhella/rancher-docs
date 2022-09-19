"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97329],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71462:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],u={title:"\u793a\u4f8b",weight:400},c=void 0,s={unversionedId:"reference-guides/monitoring-v2-configuration/examples",id:"reference-guides/monitoring-v2-configuration/examples",title:"\u793a\u4f8b",description:"ServiceMonitor",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/monitoring-v2-configuration/examples.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/examples",permalink:"/zh/reference-guides/monitoring-v2-configuration/examples",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/examples.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u793a\u4f8b",weight:400},sidebar:"tutorialSidebar",previous:{title:"Helm Chart \u9009\u9879",permalink:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options"},next:{title:"Prometheus Federator",permalink:"/zh/pages-for-subheaders/prometheus-federator"}},p={},l=[{value:"ServiceMonitor",id:"servicemonitor",level:3},{value:"PodMonitor",id:"podmonitor",level:3},{value:"PrometheusRule",id:"prometheusrule",level:3},{value:"Alertmanager \u914d\u7f6e",id:"alertmanager-\u914d\u7f6e",level:3}],m={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"servicemonitor"},"ServiceMonitor"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/prometheus-operator-crd/monitoring.coreos.com_servicemonitors.yaml"},"\u6b64\u5904"),"\u627e\u5230 ServiceMonitor \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u793a\u4f8b\u3002"),(0,i.kt)("h3",{id:"podmonitor"},"PodMonitor"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/user-guides/getting-started/example-app-pod-monitor.yaml"},"\u6b64\u5904"),"\u627e\u5230 PodMonitor \u793a\u4f8b\uff0c\u8fd8\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/user-guides/getting-started/prometheus-pod-monitor.yaml"},"\u6b64\u5904"),"\u627e\u5230\u5f15\u7528\u5b83\u7684 Prometheus \u8d44\u6e90\u793a\u4f8b\u3002"),(0,i.kt)("h3",{id:"prometheusrule"},"PrometheusRule"),(0,i.kt)("p",null,"PrometheusRule \u5305\u542b\u4f60\u901a\u5e38\u653e\u7f6e\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/"},"Prometheus \u89c4\u5219\u6587\u4ef6"),"\u4e2d\u7684\u544a\u8b66\u548c\u8bb0\u5f55\u89c4\u5219\u3002"),(0,i.kt)("p",null,"\u8981\u5728\u96c6\u7fa4\u4e2d\u66f4\u7ec6\u7c92\u5ea6\u5730\u5e94\u7528 PrometheusRules\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Prometheus \u8d44\u6e90\u7684 ruleSelector \u5b57\u6bb5\uff0c\u4ece\u800c\u6839\u636e\u6dfb\u52a0\u5230 PrometheusRules \u8d44\u6e90\u7684\u6807\u7b7e\u6765\u9009\u62e9\u8981\u52a0\u8f7d\u5230 Prometheus \u4e0a\u7684 PrometheusRule\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/alerting.md"},"\u6b64\u9875\u9762"),"\u627e\u5230 PrometheusRule \u793a\u4f8b\u3002"),(0,i.kt)("h3",{id:"alertmanager-\u914d\u7f6e"},"Alertmanager \u914d\u7f6e"),(0,i.kt)("p",null,"\u6709\u5173\u793a\u4f8b\u914d\u7f6e\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager#alertmanager-%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B"},"\u672c\u8282"),"\u3002"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25877],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(g,l(l({ref:e},u),{},{components:a})):n.createElement(g,l({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22748:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Role-based Access Control",weight:3,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/rbac","/rancher/v2.0-v2.4/en/istio/legacy/rbac","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/rbac","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/rbac/"]},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/rbac-for-istio",id:"version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio",title:"Role-based Access Control",description:"This section describes the permissions required to access Istio features and how to configure access to the Kiali and Jaeger visualizations.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/rbac-for-istio",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/rbac-for-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Role-based Access Control",weight:3,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/rbac","/rancher/v2.0-v2.4/en/istio/legacy/rbac","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/rbac","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/rbac/"]},sidebar:"tutorialSidebar",previous:{title:"CPU and Memory Allocations",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},next:{title:"Disabling Istio",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/disable-istio"}},u={},p=[],d={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the permissions required to access Istio features and how to configure access to the Kiali and Jaeger visualizations."),(0,i.kt)("h1",{id:"cluster-level-access"},"Cluster-level Access"),(0,i.kt)("p",null,"By default, only cluster administrators can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable Istio for the cluster"),(0,i.kt)("li",{parentName:"ul"},"Configure resource allocations for Istio"),(0,i.kt)("li",{parentName:"ul"},"View each UI for Prometheus, Grafana, Kiali, and Jaeger")),(0,i.kt)("h1",{id:"project-level-access"},"Project-level Access"),(0,i.kt)("p",null,"After Istio is enabled in a cluster, project owners and members have permission to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable and disable Istio sidecar auto-injection for namespaces"),(0,i.kt)("li",{parentName:"ul"},"Add the Istio sidecar to workloads"),(0,i.kt)("li",{parentName:"ul"},"View the traffic metrics and traffic graph for the cluster"),(0,i.kt)("li",{parentName:"ul"},"View the Kiali and Jaeger visualizations if cluster administrators give access to project members"),(0,i.kt)("li",{parentName:"ul"},"Configure Istio's resources (such as the gateway, destination rules, or virtual services) with ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," (This does not apply to read-only project members)")),(0,i.kt)("h1",{id:"access-to-visualizations"},"Access to Visualizations"),(0,i.kt)("p",null,"By default,  the Kiali and Jaeger visualizations are restricted to the cluster owner because the information in them could be sensitive."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Jaeger")," provides a UI for a distributed tracing system, which is useful for root cause analysis and for determining what causes poor performance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kiali")," provides a diagram that shows the services within a service mesh and how they are connected."),(0,i.kt)("p",null,"Rancher supports giving groups permission to access Kiali and Jaeger, but not individuals."),(0,i.kt)("p",null,"To configure who has permission to access the Kiali and Jaeger UI,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cluster view and click ",(0,i.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,i.kt)("li",{parentName:"ol"},"Then go to the ",(0,i.kt)("strong",{parentName:"li"},"Member Access")," section. If you want to restrict access to certain groups, choose ",(0,i.kt)("strong",{parentName:"li"},"Allow cluster owner and specified members to access Kiali and Jaeger UI.")," Search for the groups that you want to have access to Kiali and Jaeger. If you want all members to have access to the tools, click ",(0,i.kt)("strong",{parentName:"li"},"Allow all members to access Kiali and Jaeger UI.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The access levels for Kiali and Jaeger have been updated."),(0,i.kt)("h1",{id:"summary-of-default-permissions-for-istio-users"},"Summary of Default Permissions for Istio Users"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Permission"),(0,i.kt)("th",{parentName:"tr",align:null},"Cluster Administrators"),(0,i.kt)("th",{parentName:"tr",align:null},"Project Owners"),(0,i.kt)("th",{parentName:"tr",align:null},"Project Members"),(0,i.kt)("th",{parentName:"tr",align:null},"Read-only Project Members"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio for the cluster"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Configure Istio resource limits"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Control who has access to Kiali and the Jaeger UI"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio for a namespace"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio on workloads"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Configure Istio with ",(0,i.kt)("inlineCode",{parentName:"td"},"kubectl")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View Prometheus UI and Grafana UI"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View Kiali UI and Jaeger UI (",(0,i.kt)("a",{parentName:"td",href:"#access-to-visualizations"},"Configurable"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View Istio project dashboard, including traffic metrics*"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default, only the cluster owner will see the traffic graph. Project members will see only a subset of traffic metrics. Project members cannot see the traffic graph because it comes from Kiali, and access to Kiali is restricted to cluster owners by default.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98650],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81738:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Project Monitoring",weight:2,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/monitoring/project-monitoring","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/project-monitoring"]},s=void 0,p={unversionedId:"explanations/integrations-in-rancher/cluster-monitoring/project-monitoring",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring",title:"Project Monitoring",description:"Available as of v2.2.4",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring.md",sourceDirName:"explanations/integrations-in-rancher/cluster-monitoring",slug:"/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Project Monitoring",weight:2,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/monitoring/project-monitoring","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/project-monitoring"]},sidebar:"tutorialSidebar",previous:{title:"Prometheus Expressions",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression"},next:{title:"Prometheus Configuration",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/prometheus"}},c={},m=[{value:"Monitoring Scope",id:"monitoring-scope",level:3},{value:"Permissions to Configure Project Monitoring",id:"permissions-to-configure-project-monitoring",level:3},{value:"Enabling Project Monitoring",id:"enabling-project-monitoring",level:3},{value:"Project-Level Monitoring Resource Requirements",id:"project-level-monitoring-resource-requirements",level:3},{value:"Project Metrics",id:"project-metrics",level:3}],u={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.2.4")),(0,a.kt)("p",null,"Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),", a leading open-source monitoring solution."),(0,a.kt)("h3",{id:"monitoring-scope"},"Monitoring Scope"),(0,a.kt)("p",null,"Using Prometheus, you can monitor Rancher at both the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"cluster level")," and project level. For each cluster and project that is enabled for monitoring, Rancher deploys a Prometheus server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring/"},"Cluster monitoring")," allows you to view the health of your Kubernetes cluster. Prometheus collects metrics from the cluster components below, which you can view in graphs and charts."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Kubernetes control plane"),(0,a.kt)("li",{parentName:"ul"},"etcd database"),(0,a.kt)("li",{parentName:"ul"},"All nodes (including workers)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Project monitoring allows you to view the state of pods running in a given project. Prometheus collects metrics from the project's deployed HTTP and TCP/UDP workloads."))),(0,a.kt)("h3",{id:"permissions-to-configure-project-monitoring"},"Permissions to Configure Project Monitoring"),(0,a.kt)("p",null,"Only ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrators"),", ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owners or members"),", or ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owners")," can configure project level monitoring. Project members can only view monitoring metrics."),(0,a.kt)("h3",{id:"enabling-project-monitoring"},"Enabling Project Monitoring"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," Cluster monitoring must be ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"enabled."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the project where monitoring should be enabled. Note: When cluster monitoring is enabled, monitoring is also enabled by default in the ",(0,a.kt)("strong",{parentName:"p"},"System")," project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Tools > Monitoring")," in the navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Enable")," to show the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/prometheus"},"Prometheus configuration options"),". Enter in your desired configuration options.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("h3",{id:"project-level-monitoring-resource-requirements"},"Project-Level Monitoring Resource Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Container"),(0,a.kt)("th",{parentName:"tr",align:null},"CPU - Request"),(0,a.kt)("th",{parentName:"tr",align:null},"Mem - Request"),(0,a.kt)("th",{parentName:"tr",align:null},"CPU - Limit"),(0,a.kt)("th",{parentName:"tr",align:null},"Mem - Limit"),(0,a.kt)("th",{parentName:"tr",align:null},"Configurable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus"),(0,a.kt)("td",{parentName:"tr",align:null},"750m"),(0,a.kt)("td",{parentName:"tr",align:null},"750Mi"),(0,a.kt)("td",{parentName:"tr",align:null},"1000m"),(0,a.kt)("td",{parentName:"tr",align:null},"1000Mi"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,a.kt)("td",{parentName:"tr",align:null},"100m"),(0,a.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,a.kt)("td",{parentName:"tr",align:null},"200m"),(0,a.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," A single application,",(0,a.kt)("inlineCode",{parentName:"p"},"project-monitoring"),", is added as an ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher"},"application")," to the project. After the application is ",(0,a.kt)("inlineCode",{parentName:"p"},"active"),", you can start viewing project metrics through the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring/"},"Rancher dashboard")," or directly from Grafana."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The default username and password for the Grafana instance will be ",(0,a.kt)("inlineCode",{parentName:"p"},"admin/admin"),". However, Grafana dashboards are served via the Rancher authentication proxy, so only users who are currently authenticated into the Rancher server have access to the Grafana dashboard.")),(0,a.kt)("h3",{id:"project-metrics"},"Project Metrics"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression#workload-metrics"},"Workload metrics")," are available for the project if monitoring is enabled at the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring/"},"cluster level")," and at the ",(0,a.kt)("a",{parentName:"p",href:"#enabling-project-monitoring"},"project level.")),(0,a.kt)("p",null,"You can monitor custom metrics from any ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/instrumenting/exporters/"},"exporters.")," You can also expose some custom endpoints on deployments without needing to configure Prometheus for your project."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Example:"),"\nA ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis")," application is deployed in the namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-app")," in the project ",(0,a.kt)("inlineCode",{parentName:"p"},"Datacenter"),". It is monitored via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oliver006/redis_exporter"},"Redis exporter"),". After enabling project monitoring, you can edit the application to configure the ",(0,a.kt)("b",null,"Advanced Options -> Custom Metrics")," section. Enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"Container Port")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Path")," and select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Protocol"),".")),(0,a.kt)("p",null,"To access a project-level Grafana instance,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to a cluster that has monitoring enabled.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to a project that has monitoring enabled.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the project view, click ",(0,a.kt)("strong",{parentName:"p"},"Apps.")," In versions before v2.2.0, choose ",(0,a.kt)("strong",{parentName:"p"},"Catalog Apps")," on the main navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"project-monitoring")," application.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"project-monitoring")," application, there are two ",(0,a.kt)("inlineCode",{parentName:"p"},"/index.html")," links: one that leads to a Grafana instance and one that leads to a Prometheus instance. When you click the Grafana link, it will redirect you to a new webpage for Grafana, which shows metrics for the cluster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will be signed in to the Grafana instance automatically. The default username is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and the default password is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),". For security, we recommend that you log out of Grafana, log back in with the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," password, and change your password."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")," You will be logged into Grafana from the Grafana instance. After logging in, you can view the preset Grafana dashboards, which are imported via the ",(0,a.kt)("a",{parentName:"p",href:"http://docs.grafana.org/administration/provisioning/#dashboards"},"Grafana provisioning mechanism"),", so you cannot modify them directly. For now, if you want to configure your own dashboards, clone the original and modify the new copy."))}g.isMDXComponent=!0}}]);
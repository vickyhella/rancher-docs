"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98853],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,c=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Migrating to Rancher v2.5 Logging",weight:2},s=void 0,d={unversionedId:"explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging",id:"explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging",title:"Migrating to Rancher v2.5 Logging",description:"Starting in v2.5, the logging feature available within Rancher has been completely overhauled. The logging operator from Banzai Cloud has been adopted; Rancher configures this tooling for use when deploying logging.",source:"@site/docs/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging",permalink:"/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Migrating to Rancher v2.5 Logging",weight:2},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/explanations/integrations-in-rancher/logging/logging-architecture"},next:{title:"Role-based Access Control for Logging",permalink:"/explanations/integrations-in-rancher/logging/rbac-for-logging"}},p={},g=[{value:"Installation",id:"installation",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Cluster Logging",id:"cluster-logging",level:2},{value:"Project Logging",id:"project-logging",level:2},{value:"Output Configuration",id:"output-configuration",level:2},{value:"Elasticsearch",id:"elasticsearch",level:3},{value:"Splunk",id:"splunk",level:3},{value:"Kafka",id:"kafka",level:3},{value:"Fluentd",id:"fluentd",level:3},{value:"Syslog",id:"syslog",level:3},{value:"Custom Log Fields",id:"custom-log-fields",level:2},{value:"System Logging",id:"system-logging",level:2}],u={toc:g};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Starting in v2.5, the logging feature available within Rancher has been completely overhauled. The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/banzaicloud/logging-operator"},"logging operator")," from Banzai Cloud has been adopted; Rancher configures this tooling for use when deploying logging."),(0,l.kt)("p",null,"Among the many features and changes in the new logging functionality is the removal of project-specific logging configurations. Instead, one now configures logging at the namespace level. Cluster-level logging remains available, but configuration options differ. "),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"To install logging in Rancher v2.5+, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/pages-for-subheaders/logging#enabling-logging"},"installation instructions"),"."),(0,l.kt)("h3",{id:"terminology"},"Terminology"),(0,l.kt)("p",null,"In v2.5+, logging configuration in the ",(0,l.kt)("strong",{parentName:"p"},"Cluster Dashboard"),". To configure logging custom resources after the Logging application is installed, go to the left navigation bar and click ",(0,l.kt)("strong",{parentName:"p"},"Logging"),". It is from this menu option that logging for both cluster and namespace is configured. "),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Logging is installed on a per-cluster basis. You will need to navigate between clusters to configure logging for each cluster. "))),(0,l.kt)("p",null,"There are four key concepts to understand for v2.5+ logging:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Outputs"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," are a configuration resource that determine a destination for collected logs. This is where settings for aggregators such as ElasticSearch, Kafka, etc. are stored. ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," are namespaced resources.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Flows"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," are a configuration resource that determine collection, filtering, and destination rules for logs. It is within a flow that one will configure what logs to collect, how to mutate or filter them, and which ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," to send the logs to. ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," are namespaced resources, and can connect either to an ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," in the same namespace, or a ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),". ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"ClusterOutputs"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutputs")," serve the same functionality as ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs"),", except they are a cluster-scoped resource. ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutputs")," are necessary when collecting logs cluster-wide, or if you wish to provide an ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," to all namespaces in your cluster. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"ClusterFlows"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," serve the same function as ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows"),", but at the cluster level. They are used to configure log collection for an entire cluster, instead of on a per-namespace level. ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," are also where mutations and filters are defined, same as ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," (in functionality)."))),(0,l.kt)("h2",{id:"cluster-logging"},"Cluster Logging"),(0,l.kt)("p",null,"To configure cluster-wide logging for v2.5+ logging, one needs to set up a ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow"),". This object defines the source of logs, any transformations or filters to be applied, and finally the ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs"),") for the logs. "),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," must be defined within the ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," namespace. ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," will not work if defined in any other namespace."))),(0,l.kt)("p",null,"In legacy logging, in order to collect logs from across the entire cluster, one only needed to enable cluster-level logging and define the desired ",(0,l.kt)("inlineCode",{parentName:"p"},"Output"),". This basic approach remains in v2.5+ logging. To replicate legacy cluster-level logging, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Define a ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterOutput")," according to the instructions found under ",(0,l.kt)("a",{parentName:"li",href:"#output-configuration"},"Output Configuration")),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterFlow"),", ensuring that it is set to be created in the ",(0,l.kt)("inlineCode",{parentName:"li"},"cattle-logging-system")," namespace",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Remove all ",(0,l.kt)("em",{parentName:"li"},"Include")," and ",(0,l.kt)("em",{parentName:"li"},"Exclude")," rules from the ",(0,l.kt)("inlineCode",{parentName:"li"},"Flow")," definition. This ensures that all logs are gathered."),(0,l.kt)("li",{parentName:"ol"},"You do not need to configure any filters if you do not wish - default behavior does not require their creation"),(0,l.kt)("li",{parentName:"ol"},"Define your cluster ",(0,l.kt)("inlineCode",{parentName:"li"},"Output")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Outputs"))))),(0,l.kt)("p",null,"This will result in logs from all sources in the cluster (all pods, and all system components) being collected and sent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," you defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow"),". "),(0,l.kt)("h2",{id:"project-logging"},"Project Logging"),(0,l.kt)("p",null,"Logging in v2.5+ is not project-aware. This means that in order to collect logs from pods running in project namespaces, you will need to define ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," for those namespaces. "),(0,l.kt)("p",null,"To collect logs from a specific namespace, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Define an ",(0,l.kt)("inlineCode",{parentName:"li"},"Output")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterOutput")," according to the instructions found under ",(0,l.kt)("a",{parentName:"li",href:"#output-configuration"},"Output Configuration")),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"Flow"),", ensuring that it is set to be created in the namespace in which you want to gather logs.",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"If you wish to define ",(0,l.kt)("em",{parentName:"li"},"Include")," or ",(0,l.kt)("em",{parentName:"li"},"Exclude")," rules, you may do so. Otherwise, removal of all rules will result in all pods in the target namespace having their logs collected. "),(0,l.kt)("li",{parentName:"ol"},"You do not need to configure any filters if you do not wish - default behavior does not require their creation"),(0,l.kt)("li",{parentName:"ol"},"Define your outputs - these can be either ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterOutput")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Output")," objects.")))),(0,l.kt)("p",null,"This will result in logs from all sources in the namespace (pods) being collected and sent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs"),") you defined in your ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To collect logs from a project, repeat the above steps for every namespace within the project. Alternatively, you can label your project workloads with a common label (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"project=my-project"),") and use a ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," to collect logs from all pods matching this label."))),(0,l.kt)("h2",{id:"output-configuration"},"Output Configuration"),(0,l.kt)("p",null,"In legacy logging, there are five logging destinations to choose from: Elasticsearch, Splunk, Kafka, Fluentd, and Syslog. With the exception of Syslog, all of these destinations are available in logging v2.5+. "),(0,l.kt)("h3",{id:"elasticsearch"},"Elasticsearch"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Legacy Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"v2.5+ Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Host"),(0,l.kt)("td",{parentName:"tr",align:null},"Make sure to specify Scheme (https/http), as well as Port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Pack Security -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> User"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Pack Security -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password must now be stored in a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Private Key"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> Client Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Key must now be stored in a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> Client Cert"),(0,l.kt)("td",{parentName:"tr",align:null},"Certificate must now be stored in a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Key Password"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> Client Key Pass"),(0,l.kt)("td",{parentName:"tr",align:null},"Password must now be stored in a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Enabled SSL Verification"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> Certificate Authority File"),(0,l.kt)("td",{parentName:"tr",align:null},"Certificate must now be stored in a secret")))),(0,l.kt)("p",null,'In legacy logging, indices were automatically created according to the format in the "Index Patterns" section. In v2.5 logging, default behavior has been changed to logging to a single index. You can still configure index pattern functionality on the ',(0,l.kt)("inlineCode",{parentName:"p"},"Output")," object by editing as YAML and inputting the following values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n  elasticsearch:\n    ...\n    logstash_format: true\n    logstash_prefix: <desired prefix>\n    logstash_dateformat: "%Y-%m-%d"\n')),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<desired prefix>")," with the prefix for the indices that will be created. In legacy logging, this defaulted to the name of the cluster."),(0,l.kt)("h3",{id:"splunk"},"Splunk"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Legacy Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"v2.5+ Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEC Configuration -> Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Host"),(0,l.kt)("td",{parentName:"tr",align:null},"Protocol (https/http) and port must be defined separately from the host")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEC Configuration -> Token"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Token"),(0,l.kt)("td",{parentName:"tr",align:null},"Token must now be stored as a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEC Configuration -> Index"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"index")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"index")," field must be added as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEC Configuration -> Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"source")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source")," field must be added as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Private Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"client_key")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"client_key")," field must be added as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec"),". See (1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"client_cert")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"client_cert")," field must be added as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec"),". See (1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Key Password"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Not Supported")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifying a password for the client private key is not currently supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> SSL Verify"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"ca_file")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"ca_path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ca_file")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"ca_path")," field must be added as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec"),". See (2)")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(1) ",(0,l.kt)("inlineCode",{parentName:"em"},"client_key")," and ",(0,l.kt)("inlineCode",{parentName:"em"},"client_cert")," values must be paths to the key and cert files, respectively. These files must be mounted into the ",(0,l.kt)("inlineCode",{parentName:"em"},"rancher-logging-fluentd")," pod in order to be used.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(2) Users can configure either ",(0,l.kt)("inlineCode",{parentName:"em"},"ca_file")," (a path to a PEM-encoded CA certificate) or ",(0,l.kt)("inlineCode",{parentName:"em"},"ca_path")," (a path to a directory containing CA certificates in PEM format). These files must be mounted into the ",(0,l.kt)("inlineCode",{parentName:"em"},"rancher-logging-fluentd")," pod in order to be used.")),(0,l.kt)("h3",{id:"kafka"},"Kafka"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Legacy Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"v2.5+ Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka Configuration -> Endpoint Type"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Zookeeper is no longer supported as an endpoint type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka Configuration -> Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Brokers"),(0,l.kt)("td",{parentName:"tr",align:null},"Comma-separated list of brokers (host:port)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka Configuration -> Topic"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Default Topic"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Private Key"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> SSL Client Cert"),(0,l.kt)("td",{parentName:"tr",align:null},"Certificate must be stored as a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> SSL Client Cert Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Key must be stored as a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> CA Certificate PEM"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> SSL CA Cert"),(0,l.kt)("td",{parentName:"tr",align:null},"Certificate must be stored as a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SASL Configuration -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username must be stored in a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SASL Configuration -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password must be stored in a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SASL Configuration -> Scram Mechanism"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Scram Mechanism"),(0,l.kt)("td",{parentName:"tr",align:null},'Input mechanism as string, e.g. "sha256" or "sha512"')))),(0,l.kt)("h3",{id:"fluentd"},"Fluentd"),(0,l.kt)("p",null,'As of v2.5.2, it is only possible to add a single Fluentd server using the "Edit as Form" option. To add multiple servers, edit the ',(0,l.kt)("inlineCode",{parentName:"p"},"Output")," as YAML and input multiple servers."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Legacy Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"v2.5+ Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Host, Port"),(0,l.kt)("td",{parentName:"tr",align:null},"Input the host and port separately")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Shared Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Shared Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Shared key must be stored as a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username must be stored as a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password must be stored as a secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"host")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host")," field set as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward.servers[n]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Weight"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"weight")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"weight")," field set as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward.servers[n]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Use TLS"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Do not need to explicitly enable. Define client cert fields instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Private Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_private_key_path")),(0,l.kt)("td",{parentName:"tr",align:null},"Field set as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward"),". See (1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_client_cert_path")),(0,l.kt)("td",{parentName:"tr",align:null},"Field set as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward"),". See (1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Key Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_client_private_key_passphrase")),(0,l.kt)("td",{parentName:"tr",align:null},"Field set as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward"),". See (1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> SSL Verify"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_insecure_mode")),(0,l.kt)("td",{parentName:"tr",align:null},"Field set as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward"),". Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> CA Certificate PEM"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_cert_path")),(0,l.kt)("td",{parentName:"tr",align:null},"Field set as YAML key under ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward"),". See (1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Gzip Compression"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"No longer supported in v2.5+ logging")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(1) These values are to be specified as paths to files. Those files must be mounted into the ",(0,l.kt)("inlineCode",{parentName:"em"},"rancher-logging-fluentd")," pod in order to be used.")),(0,l.kt)("h3",{id:"syslog"},"Syslog"),(0,l.kt)("p",null,"As of v2.5.2, syslog is not currently supported for ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," using v2.5+ logging. "),(0,l.kt)("h2",{id:"custom-log-fields"},"Custom Log Fields"),(0,l.kt)("p",null,"In order to add custom log fields, you will need to add the following YAML to your ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n  filters:\n    - record_modifier:\n        records:\n        - foo: "bar"\n')),(0,l.kt)("p",null,"(replace ",(0,l.kt)("inlineCode",{parentName:"p"},'foo: "bar"')," with custom log fields you wish to add)"),(0,l.kt)("h2",{id:"system-logging"},"System Logging"),(0,l.kt)("p",null,'In legacy logging, collecting logs from system components was accomplished by checking a box labeled "Include System Log" when setting up cluster logging. In v2.5+ logging, system logs are gathered in one of two ways:'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Gather all cluster logs, not specifying any match or exclusion rules. This results in all container logs from the cluster being collected, which includes system logs. "),(0,l.kt)("li",{parentName:"ol"},"Specifically target system logs by adding match rules for system components. Specific match rules depend on the component being collected.")))}m.isMDXComponent=!0}}]);
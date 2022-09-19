"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82500],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35541:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Configuring PrometheusRules",weight:3},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",id:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",title:"Configuring PrometheusRules",description:"A PrometheusRule defines a group of Prometheus alerting and/or recording rules.",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",permalink:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Configuring PrometheusRules",weight:3},sidebar:"tutorialSidebar",previous:{title:"Prometheus Configuration",permalink:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"},next:{title:"Setup Guide",permalink:"/pages-for-subheaders/istio-setup-guide"}},d={},p=[{value:"Creating PrometheusRules in the Rancher UI",id:"creating-prometheusrules-in-the-rancher-ui",level:3},{value:"About the PrometheusRule Custom Resource",id:"about-the-prometheusrule-custom-resource",level:3},{value:"Rule Group",id:"rule-group",level:3},{value:"Alerting Rules",id:"alerting-rules",level:3},{value:"Recording Rules",id:"recording-rules",level:3}],m={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A PrometheusRule defines a group of Prometheus alerting and/or recording rules."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section assumes familiarity with how monitoring components work together. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"this section.")))),(0,o.kt)("h3",{id:"creating-prometheusrules-in-the-rancher-ui"},"Creating PrometheusRules in the Rancher UI"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The monitoring application needs to be installed."))),(0,o.kt)("p",null,"To create rule groups in the Rancher UI,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the cluster where you want to create rule groups. Click ",(0,o.kt)("strong",{parentName:"li"},"Monitoring > Advanced")," and click ",(0,o.kt)("strong",{parentName:"li"},"Prometheus Rules"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Group Name"),"."),(0,o.kt)("li",{parentName:"ol"},"Configure the rules. In Rancher's UI, we expect a rule group to contain either alert rules or recording rules, but not both. For help filling out the forms, refer to the configuration options below."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Alerts can be configured to send notifications to the receiver(s)."),(0,o.kt)("h3",{id:"about-the-prometheusrule-custom-resource"},"About the PrometheusRule Custom Resource"),(0,o.kt)("p",null,"When you define a Rule (which is declared within a RuleGroup in a PrometheusRule resource), the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#rule"},"spec of the Rule itself")," contains labels that are used by Alertmanager to figure out which Route should receive this Alert. For example, an Alert with the label ",(0,o.kt)("inlineCode",{parentName:"p"},"team: front-end")," will be sent to all Routes that match on that label."),(0,o.kt)("p",null,"Prometheus rule files are held in PrometheusRule custom resources. A PrometheusRule allows you to define one or more RuleGroups. Each RuleGroup consists of a set of Rule objects that can each represent either an alerting or a recording rule with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of the new alert or record"),(0,o.kt)("li",{parentName:"ul"},"A PromQL expression for the new alert or record"),(0,o.kt)("li",{parentName:"ul"},"Labels that should be attached to the alert or record that identify it (e.g. cluster name or severity)"),(0,o.kt)("li",{parentName:"ul"},"Annotations that encode any additional important pieces of information that need to be displayed on the notification for an alert (e.g. summary, description, message, runbook URL, etc.). This field is not required for recording rules.")),(0,o.kt)("p",null,"For more information on what fields can be specified, please look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#prometheusrulespec"},"Prometheus Operator spec.")),(0,o.kt)("p",null,"Use the label selector field ",(0,o.kt)("inlineCode",{parentName:"p"},"ruleSelector")," in the Prometheus object to define the rule files that you want to be mounted into Prometheus."),(0,o.kt)("p",null,"For examples, refer to the Prometheus documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/"},"recording rules")," and ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"alerting rules.")),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"rule-group"},"Rule Group"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the group. Must be unique within a rules file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Override Group Interval"),(0,o.kt)("td",{parentName:"tr",align:null},"Duration in seconds for how often rules in the group are evaluated.")))),(0,o.kt)("h3",{id:"alerting-rules"},"Alerting Rules"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"Alerting rules")," allow you to define alert conditions based on PromQL (Prometheus Query Language) expressions and to send notifications about firing alerts to an external service."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Alert Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the alert. Must be a valid label value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Wait To Fire For"),(0,o.kt)("td",{parentName:"tr",align:null},"Duration in seconds. Alerts are considered firing once they have been returned for this long. Alerts which have not yet fired for long enough are considered pending.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PromQL Expression"),(0,o.kt)("td",{parentName:"tr",align:null},"The PromQL expression to evaluate. Prometheus will evaluate the current value of this PromQL expression on every evaluation cycle and all resultant time series will become pending/firing alerts. For more information, refer to the ",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"Prometheus documentation")," or our ",(0,o.kt)("a",{parentName:"td",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},"example PromQL expressions."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Labels"),(0,o.kt)("td",{parentName:"tr",align:null},"Labels to add or overwrite for each alert.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Severity"),(0,o.kt)("td",{parentName:"tr",align:null},"When enabled, labels are attached to the alert or record that identify it by the severity level.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Severity Label Value"),(0,o.kt)("td",{parentName:"tr",align:null},"Critical, warning, or none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Annotations"),(0,o.kt)("td",{parentName:"tr",align:null},"Annotations are a set of informational labels that can be used to store longer additional information, such as alert descriptions or runbook links. A ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Runbook"},"runbook")," is a set of documentation about how to handle alerts. The annotation values can be ",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/#templating"},"templated."))))),(0,o.kt)("h3",{id:"recording-rules"},"Recording Rules"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#recording-rules"},"Recording rules")," allow you to precompute frequently needed or computationally expensive PromQL (Prometheus Query Language) expressions and save their result as a new set of time series."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time Series Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the time series to output to. Must be a valid metric name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PromQL Expression"),(0,o.kt)("td",{parentName:"tr",align:null},"The PromQL expression to evaluate. Prometheus will evaluate the current value of this PromQL expression on every evaluation cycle and the result will be recorded as a new set of time series with the metric name as given by 'record'.  For more information about expressions, refer to the ",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"Prometheus documentation")," or our ",(0,o.kt)("a",{parentName:"td",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},"example PromQL expressions."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Labels"),(0,o.kt)("td",{parentName:"tr",align:null},"Labels to add or overwrite before storing the result.")))))}c.isMDXComponent=!0}}]);
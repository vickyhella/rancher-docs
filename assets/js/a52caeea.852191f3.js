"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86006],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),u=n(7094),s=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,m=e.defaultValue,f=e.values,h=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,O=(0,r.useState)(y),R=O[0],x=O[1],C=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var M=w[h];null!=M&&M!==R&&b.some((function(e){return e.value===M}))&&x(M)}var A=function(e){var t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==R&&(E(t),x(a),null!=h&&T(h,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var o,i=C.indexOf(e.currentTarget)-1;n=null!=(o=C[i])?o:C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},g)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:A,onClick:A},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function m(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},36106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),u=["components"],s={title:"Route Configuration",shortTitle:"Routes",weight:5},c=void 0,d={unversionedId:"reference-guides/monitoring-v2-configuration/routes",id:"reference-guides/monitoring-v2-configuration/routes",title:"Route Configuration",description:"The route configuration is the section of the Alertmanager custom resource that controls how the alerts fired by Prometheus are grouped and filtered before they reach the receiver.",source:"@site/docs/reference-guides/monitoring-v2-configuration/routes.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/routes",permalink:"/reference-guides/monitoring-v2-configuration/routes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/routes.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Route Configuration",shortTitle:"Routes",weight:5},sidebar:"tutorialSidebar",previous:{title:"Receiver Configuration",permalink:"/reference-guides/monitoring-v2-configuration/receivers"},next:{title:"ServiceMonitor and PodMonitor Configuration",permalink:"/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"}},p={},m=[{value:"Route Restrictions",id:"route-restrictions",level:2},{value:"Route Configuration",id:"route-configuration",level:2},{value:"Note on Labels and Annotations",id:"note-on-labels-and-annotations",level:3},{value:"Receiver",id:"receiver",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Matching",id:"matching",level:3}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The route configuration is the section of the Alertmanager custom resource that controls how the alerts fired by Prometheus are grouped and filtered before they reach the receiver."),(0,o.kt)("p",null,"When a Route is changed, the Prometheus Operator regenerates the Alertmanager custom resource to reflect the changes."),(0,o.kt)("p",null,"For more information about configuring routes, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.prometheus.io/docs/alerting/latest/configuration/#route"},"official Alertmanager documentation.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section assumes familiarity with how monitoring components work together. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"this section.")))),(0,o.kt)("h2",{id:"route-restrictions"},"Route Restrictions"),(0,o.kt)("p",null,"Alertmanager proxies alerts for Prometheus based on its receivers and a routing tree that filters alerts to certain receivers based on labels."),(0,o.kt)("p",null,"Alerting drivers proxy alerts for Alertmanager to non-native receivers, such as Microsoft Teams and SMS."),(0,o.kt)("p",null,"In the Rancher UI for configuring routes and receivers, you can configure routing trees with one root and then a depth of one more level, for a tree with a depth of two. But if you use a ",(0,o.kt)("inlineCode",{parentName:"p"},"continue")," route when configuring Alertmanager directly, you can make the tree deeper."),(0,o.kt)("p",null,"Each receiver is for one or more notification providers. So if you know that every alert for Slack should also go to PagerDuty, you can configure both in the same receiver."),(0,o.kt)("h2",{id:"route-configuration"},"Route Configuration"),(0,o.kt)("h3",{id:"note-on-labels-and-annotations"},"Note on Labels and Annotations"),(0,o.kt)("p",null,"Labels should be used for identifying information that can affect the routing of notifications. Identifying information about the alert could consist of a container name, or the name of the team that should be notified."),(0,o.kt)("p",null,"Annotations should be used for information that does not affect who receives the alert, such as a runbook url or error message."),(0,o.kt)("h3",{id:"receiver"},"Receiver"),(0,o.kt)("p",null,"The route needs to refer to a ",(0,o.kt)("a",{parentName:"p",href:"#receiver-configuration"},"receiver")," that has already been configured."),(0,o.kt)("h3",{id:"grouping"},"Grouping"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As of Rancher v2.6.5, ",(0,o.kt)("inlineCode",{parentName:"p"},"Group By")," now accepts a list of strings instead of key-value pairs. See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#route"},"upstream documentation")," for details."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group By"),(0,o.kt)("td",{parentName:"tr",align:null},"N/a"),(0,o.kt)("td",{parentName:"tr",align:null},'List of labels to group by. Labels must not be repeated (unique list). Special label "..." (aggregate by all possible labels), if provided, must be the only element in the list.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Wait"),(0,o.kt)("td",{parentName:"tr",align:null},"30s"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait to buffer alerts of the same group before sending initially.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Interval"),(0,o.kt)("td",{parentName:"tr",align:null},"5m"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait before sending an alert that has been added to a group of alerts for which an initial notification has already been sent.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Repeat Interval"),(0,o.kt)("td",{parentName:"tr",align:null},"4h"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait before re-sending a given alert that has already been sent."))))),(0,o.kt)(l.Z,{value:"Rancher before v2.6.5",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group By"),(0,o.kt)("td",{parentName:"tr",align:null},"N/a"),(0,o.kt)("td",{parentName:"tr",align:null},"The labels by which incoming alerts are grouped together. For example, ",(0,o.kt)("inlineCode",{parentName:"td"},"[ group_by: '[' <labelname>, ... ']' ]")," Multiple alerts coming in for labels such as ",(0,o.kt)("inlineCode",{parentName:"td"},"cluster=A")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"alertname=LatencyHigh")," can be batched into a single group. To aggregate by all possible labels, use the special value ",(0,o.kt)("inlineCode",{parentName:"td"},"'...'")," as the sole label name, for example: ",(0,o.kt)("inlineCode",{parentName:"td"},"group_by: ['...']"),"  Grouping by ",(0,o.kt)("inlineCode",{parentName:"td"},"...")," effectively disables aggregation entirely, passing through all alerts as-is. This is unlikely to be what you want, unless you have a very low alert volume or your upstream notification system performs its own grouping.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Wait"),(0,o.kt)("td",{parentName:"tr",align:null},"30s"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait to buffer alerts of the same group before sending initially.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Interval"),(0,o.kt)("td",{parentName:"tr",align:null},"5m"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait before sending an alert that has been added to a group of alerts for which an initial notification has already been sent.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Repeat Interval"),(0,o.kt)("td",{parentName:"tr",align:null},"4h"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait before re-sending a given alert that has already been sent.")))))),(0,o.kt)("h3",{id:"matching"},"Matching"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Match")," field refers to a set of equality matchers used to identify which alerts to send to a given Route based on labels defined on that alert. When you add key-value pairs to the Rancher UI, they correspond to the YAML in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"match:\n  [ <labelname>: <labelvalue>, ... ]\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Match Regex")," field refers to a set of regex-matchers used to identify which alerts to send to a given Route based on labels defined on that alert. When you add key-value pairs in the Rancher UI, they correspond to the YAML in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"match_re:\n  [ <labelname>: <regex>, ... ]\n")))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[56238],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return h}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(67294),r=t(86010),o="tabItem_Ymn6";function i(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},a)}},65488:function(e,a,t){t.d(a,{Z:function(){return h}});var n=t(87462),r=t(67294),o=t(86010),i=t(72389),s=t(67392),l=t(7094),d=t(12466),p="tabList__CuJ",c="tabItem_LNqP";function u(e){var a,t,i=e.lazy,u=e.block,h=e.defaultValue,m=e.values,g=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:k.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,s.l)(b,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(a=null!=h?h:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?a:k[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),y=w.tabGroupChoices,C=w.setTabGroupChoices,M=(0,r.useState)(N),O=M[0],T=M[1],G=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var D=y[g];null!=D&&D!==O&&b.some((function(e){return e.value===D}))&&T(D)}var j=function(e){var a=e.currentTarget,t=G.indexOf(a),n=b[t].value;n!==O&&(x(a),T(n),null!=g&&C(g,String(n)))},I=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n,r=G.indexOf(e.currentTarget)+1;t=null!=(n=G[r])?n:G[0];break;case"ArrowLeft":var o,i=G.indexOf(e.currentTarget)-1;t=null!=(o=G[i])?o:G[G.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},b.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:function(e){return G.push(e)},onKeyDown:I,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===a})}),null!=t?t:a)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}function h(e){var a=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},6051:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return h}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i=t(65488),s=t(85162),l=["components"],d={title:"Persistent Grafana Dashboards",weight:6},p=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",title:"Persistent Grafana Dashboards",description:"To allow the Grafana dashboard to persist after the Grafana instance restarts, add the dashboard configuration JSON into a ConfigMap. ConfigMaps also allow the dashboards to be deployed with a GitOps or CD based approach. This allows the dashboard to be put under version control.",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",tags:[],version:"current",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Persistent Grafana Dashboards",weight:6},sidebar:"tutorialSidebar",previous:{title:"Customizing Grafana Dashboards",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},next:{title:"Debugging High Memory Usage",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"}},u={},h=[{value:"1. Get the JSON model of the dashboard that you want to persist",id:"1-get-the-json-model-of-the-dashboard-that-you-want-to-persist",level:3},{value:"2. Create a ConfigMap using the Grafana JSON model",id:"2-create-a-configmap-using-the-grafana-json-model",level:3},{value:"Configuring Namespaces for the Grafana Dashboard ConfigMap",id:"configuring-namespaces-for-the-grafana-dashboard-configmap",level:3}],m={toc:h};function g(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To allow the Grafana dashboard to persist after the Grafana instance restarts, add the dashboard configuration JSON into a ConfigMap. ConfigMaps also allow the dashboards to be deployed with a GitOps or CD based approach. This allows the dashboard to be put under version control."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-persistent-grafana-dashboard"},"Creating a Persistent Grafana Dashboard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#known-issues"},"Known Issues"))),(0,o.kt)("h1",{id:"creating-a-persistent-grafana-dashboard"},"Creating a Persistent Grafana Dashboard"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The monitoring application needs to be installed."),(0,o.kt)("li",{parentName:"ul"},"To create the persistent dashboard, you must have at least the ",(0,o.kt)("strong",{parentName:"li"},"Manage Config Maps")," Rancher RBAC permissions assigned to you in the project or namespace that contains the Grafana Dashboards. This correlates to the ",(0,o.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-edit")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-admin")," Kubernetes native RBAC Roles exposed by the Monitoring chart."),(0,o.kt)("li",{parentName:"ul"},"To see the links to the external monitoring UIs, including Grafana dashboards, you will need at least a ",(0,o.kt)("a",{parentName:"li",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#users-with-rancher-cluster-manager-based-permissions"},"project-member role."))))),(0,o.kt)("h3",{id:"1-get-the-json-model-of-the-dashboard-that-you-want-to-persist"},"1. Get the JSON model of the dashboard that you want to persist"),(0,o.kt)("p",null,"To create a persistent dashboard, you will need to get the JSON model of the dashboard you want to persist. You can use a premade dashboard or build your own."),(0,o.kt)("p",null,"To use a premade dashboard, go to ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards"},"https://grafana.com/grafana/dashboards"),", open up its detail page, and click on the ",(0,o.kt)("strong",{parentName:"p"},"Download JSON")," button to get the JSON model for the next step."),(0,o.kt)("p",null,"To use your own dashboard:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the link to open Grafana. On the cluster detail page, click ",(0,o.kt)("strong",{parentName:"p"},"Monitoring"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in to Grafana. Note: The default Admin username and password for the Grafana instance is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),". Alternative credentials can also be supplied on deploying or upgrading the chart."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Regardless of who has the password, in order to access the Grafana instance, you still need at least the ",(0,o.kt)("b",null,"Manage Services")," or ",(0,o.kt)("b",null,"View Monitoring")," permissions in the project that Rancher Monitoring is deployed into. Alternative credentials can also be supplied on deploying or upgrading the chart.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a dashboard using Grafana's UI. Once complete, go to the dashboard's settings by clicking on the gear icon in the top navigation menu. In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"p"},"JSON Model"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the JSON data structure that appears."))),(0,o.kt)("h3",{id:"2-create-a-configmap-using-the-grafana-json-model"},"2. Create a ConfigMap using the Grafana JSON model"),(0,o.kt)("p",null,"Create a ConfigMap in the namespace that contains your Grafana Dashboards (e.g. cattle-dashboards by default)."),(0,o.kt)("p",null,"The ConfigMap should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards # Change if using a non-default namespace\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')),(0,o.kt)("p",null,"By default, Grafana is configured to watch all ConfigMaps with the ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana_dashboard")," label within the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace."),(0,o.kt)("p",null,"To specify that you would like Grafana to watch for ConfigMaps across all namespaces, refer to ",(0,o.kt)("a",{parentName:"p",href:"#configuring-namespaces-for-the-grafana-dashboard-configmap"},"this section.")),(0,o.kt)("p",null,"To create the ConfigMap in the Rancher UI,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"More Resources > Core > ConfigMaps"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Set up the key-value pairs similar to the example above. When entering the value for ",(0,o.kt)("inlineCode",{parentName:"li"},"<dashboard-name>.json"),", click ",(0,o.kt)("strong",{parentName:"li"},"Read from File")," to upload the JSON data model as the value."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," After the ConfigMap is created, it should show up on the Grafana UI and be persisted even if the Grafana pod is restarted."),(0,o.kt)("p",null,"Dashboards that are persisted using ConfigMaps cannot be deleted or edited from the Grafana UI."),(0,o.kt)("p",null,'If you attempt to delete the dashboard in the Grafana UI, you will see the error message "Dashboard cannot be deleted because it was provisioned." To delete the dashboard, you will need to delete the ConfigMap.'),(0,o.kt)("h3",{id:"configuring-namespaces-for-the-grafana-dashboard-configmap"},"Configuring Namespaces for the Grafana Dashboard ConfigMap"),(0,o.kt)("p",null,"To specify that you would like Grafana to watch for ConfigMaps across all namespaces, set this value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grafana.sidecar.dashboards.searchNamespace=ALL\n")),(0,o.kt)("p",null,"Note that the RBAC roles exposed by the Monitoring chart to add Grafana Dashboards are still restricted to giving permissions for users to add dashboards in the namespace defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana.dashboards.namespace"),", which defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),".")),(0,o.kt)(s.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The monitoring application needs to be installed."),(0,o.kt)("li",{parentName:"ul"},"You must have the cluster-admin ClusterRole permission.")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to configure the Grafana namespace and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Monitoring"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Grafana"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in to Grafana. Note: The default Admin username and password for the Grafana instance is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),". Alternative credentials can also be supplied on deploying or upgrading the chart."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Regardless of who has the password, cluster administrator permission in Rancher is still required to access the Grafana instance.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the dashboard that you want to persist. In the top navigation menu, go to the dashboard settings by clicking the gear icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"p"},"JSON Model"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the JSON data structure that appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ConfigMap in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace. The ConfigMap needs to have the label ",(0,o.kt)("inlineCode",{parentName:"p"},'grafana_dashboard: "1"'),". Paste the JSON into the ConfigMap in the format shown in the example below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," After the ConfigMap is created, it should show up on the Grafana UI and be persisted even if the Grafana pod is restarted."),(0,o.kt)("p",null,'Dashboards that are persisted using ConfigMaps cannot be deleted from the Grafana UI. If you attempt to delete the dashboard in the Grafana UI, you will see the error message "Dashboard cannot be deleted because it was provisioned." To delete the dashboard, you will need to delete the ConfigMap.'),(0,o.kt)("p",null,"To prevent the persistent dashboard from being deleted when Monitoring v2 is uninstalled, add the following annotation to the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'helm.sh/resource-policy: "keep"\n')))),(0,o.kt)("h1",{id:"known-issues"},"Known Issues"),(0,o.kt)("p",null,"For users who are using Monitoring V2 v9.4.203 or below, uninstalling the Monitoring chart will delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace, which will delete all persisted dashboards, unless the namespace is marked with the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),"."),(0,o.kt)("p",null,"This annotation will be added by default in the new monitoring chart released by Rancher v2.5.8, but it still needs to be manually applied for users of earlier Rancher versions."))}g.isMDXComponent=!0}}]);
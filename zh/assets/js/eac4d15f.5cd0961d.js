"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54660],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77895:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"Configure Alerts for Periodic Scan on a Schedule"},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",id:"version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",title:"Configure Alerts for Periodic Scan on a Schedule",description:"It is possible to run a ClusterScan on a schedule.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule.md",tags:[],version:"2.5",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Configure Alerts for Periodic Scan on a Schedule"},sidebar:"tutorialSidebar",previous:{title:"Enable Alerting for Rancher CIS Benchmark",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark"},next:{title:"Create a Custom Benchmark Version for Running a Cluster Scan",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run"}},u={},p=[],d={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is possible to run a ClusterScan on a schedule."),(0,i.kt)("p",null,"A scheduled scan can also specify if you should receive alerts when the scan completes."),(0,i.kt)("p",null,"Alerts are supported only for a scan that runs on a schedule."),(0,i.kt)("p",null,"The CIS Benchmark application supports two types of alerts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alert on scan completion: This alert is sent out when the scan run finishes. The alert includes details including the ClusterScan's name and the ClusterScanProfile name."),(0,i.kt)("li",{parentName:"ul"},"Alert on scan failure: This alert is sent out if there are some test failures in the scan run or if the scan is in a ",(0,i.kt)("inlineCode",{parentName:"li"},"Fail")," state.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before enabling alerts for ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark"),", make sure to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application and configure the Receivers and Routes. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/cis-scans/configuration-reference"},"this section.")),(0,i.kt)("p",{parentName:"div"},"While configuring the routes for ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," alerts, you can specify the matching using the key-value pair ",(0,i.kt)("inlineCode",{parentName:"p"},"job: rancher-cis-scan"),". An example route configuration is ",(0,i.kt)("a",{parentName:"p",href:"../../../reference-guides/monitoring-v2-configuration/receivers/#example-route-config-for-cis-scan-alerts"},"here.")))),(0,i.kt)("p",null,"To configure alerts for a scan that runs on a schedule,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Please enable alerts on the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark")," application (#enabling-alerting-for-rancher-cis-benchmark)"),(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to run a CIS scan and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"CIS Benchmark > Scan"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose a cluster scan profile. The profile determines which CIS Benchmark version will be used and which tests will be performed. If you choose the Default profile, then the CIS Operator will choose a profile applicable to the type of Kubernetes cluster it is installed on."),(0,i.kt)("li",{parentName:"ol"},"Choose the option ",(0,i.kt)("strong",{parentName:"li"},"Run scan on a schedule"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a valid ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron#CRON_expression"},"cron schedule expression")," in the field ",(0,i.kt)("strong",{parentName:"li"},"Schedule"),"."),(0,i.kt)("li",{parentName:"ol"},"Check the boxes next to the Alert types under ",(0,i.kt)("strong",{parentName:"li"},"Alerting"),"."),(0,i.kt)("li",{parentName:"ol"},"Optional: Choose a ",(0,i.kt)("strong",{parentName:"li"},"Retention Count"),", which indicates the number of reports maintained for this recurring scan. By default this count is 3. When this retention limit is reached, older reports will get purged."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The scan runs and reschedules to run according to the cron schedule provided. Alerts are sent out when the scan finishes if routes and receiver are configured under ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application."),(0,i.kt)("p",null,"A report is generated with the scan results every time the scan runs. To see the latest results, click the name of the scan that appears."))}h.isMDXComponent=!0}}]);
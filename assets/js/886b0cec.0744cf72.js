"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96861],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41481:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Run a Scan Periodically on a Schedule"},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",id:"version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",title:"Run a Scan Periodically on a Schedule",description:"To run a ClusterScan on a schedule,",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule.md",tags:[],version:"2.5",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Run a Scan Periodically on a Schedule"},sidebar:"tutorialSidebar",previous:{title:"Run a Scan",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"},next:{title:"Skip Tests",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests"}},u={},d=[],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To run a ClusterScan on a schedule,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to run a CIS scan and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"CIS Benchmark > Scan"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose a cluster scan profile. The profile determines which CIS Benchmark version will be used and which tests will be performed. If you choose the Default profile, then the CIS Operator will choose a profile applicable to the type of Kubernetes cluster it is installed on."),(0,o.kt)("li",{parentName:"ol"},"Choose the option ",(0,o.kt)("strong",{parentName:"li"},"Run scan on a schedule"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a valid ",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Cron#CRON_expression",target:"_blank"},"cron schedule expression")," in the field ",(0,o.kt)("strong",{parentName:"li"},"Schedule"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose a ",(0,o.kt)("strong",{parentName:"li"},"Retention")," count, which indicates the number of reports maintained for this recurring scan. By default this count is 3. When this retention limit is reached, older reports will get purged."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The scan runs and reschedules to run according to the cron schedule provided. The ",(0,o.kt)("strong",{parentName:"p"},"Next Scan")," value indicates the next time this scan will run again. "),(0,o.kt)("p",null,"A report is generated with the scan results every time the scan runs. To see the latest results, click the name of the scan that appears."),(0,o.kt)("p",null,"You can also see the previous reports by choosing the report from the ",(0,o.kt)("strong",{parentName:"p"},"Reports")," dropdown on the scan detail page."))}h.isMDXComponent=!0}}]);
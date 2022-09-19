"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36883],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),g=a,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?r.createElement(h,o(o({ref:n},l),{},{components:t})):r.createElement(h,o({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},73425:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={title:"Run a Scan Periodically on a Schedule"},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",title:"Run a Scan Periodically on a Schedule",description:"Recurring scans can be scheduled to run on any RKE Kubernetes cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Run a Scan Periodically on a Schedule"},sidebar:"tutorialSidebar",previous:{title:"Run a Scan",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"},next:{title:"Skip Tests",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests"}},l={},d=[],p={toc:d};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Recurring scans can be scheduled to run on any RKE Kubernetes cluster."),(0,i.kt)("p",null,"To enable recurring scans, edit the advanced options in the cluster configuration during cluster creation or after the cluster has been created."),(0,i.kt)("p",null,"To schedule scans for an existing cluster:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cluster view in Rancher."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Tools > CIS Scans.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Schedule.")," This takes you to the section of the cluster editing page that is applicable to configuring a schedule for CIS scans. (This section can also be reached by going to the cluster view, clicking ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit,")," and going to the ",(0,i.kt)("strong",{parentName:"li"},"Advanced Options."),")"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"CIS Scan Enabled")," field, click ",(0,i.kt)("strong",{parentName:"li"},"Yes."),(0,i.kt)("a",{parentName:"li",href:"#skip-tests"},"defined in a separate ConfigMap")),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"CIS Scan Interval (cron)")," job, enter a ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron#CRON_expression"},"cron expression")," to define how often the cluster will be scanned."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"CIS Scan Report Retention")," field, enter the number of past reports that should be kept.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The security scan will run and generate reports at the scheduled intervals."),(0,i.kt)("p",null,"The test schedule can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"scheduled_cluster_scan:\n\xa0\xa0\xa0\xa0enabled: true\n\xa0\xa0\xa0\xa0scan_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cis_scan_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0override_benchmark_version: rke-cis-1.4\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0profile: permissive\n\xa0\xa0\xa0\xa0schedule_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cron_schedule: 0 0 * * *\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0retention: 24\n")))}g.isMDXComponent=!0}}]);
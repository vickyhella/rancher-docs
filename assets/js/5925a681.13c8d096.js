"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={title:"CIS Scans"},i=void 0,l={unversionedId:"pages-for-subheaders/cis-scans",id:"version-2.5/pages-for-subheaders/cis-scans",title:"CIS Scans",description:"Rancher can run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/cis-scans.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cis-scans",permalink:"/v2.5/pages-for-subheaders/cis-scans",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/cis-scans.md",tags:[],version:"2.5",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"CIS Scans"},sidebar:"tutorialSidebar",previous:{title:"Integrations in Rancher",permalink:"/v2.5/pages-for-subheaders/integrations-in-rancher"},next:{title:"Configuration",permalink:"/v2.5/explanations/integrations-in-rancher/cis-scans/configuration-reference"}},o={},p=[{value:"Changes in Rancher v2.5",id:"changes-in-rancher-v25",level:2},{value:"About the CIS Benchmark",id:"about-the-cis-benchmark",level:2},{value:"About the Generated Report",id:"about-the-generated-report",level:2},{value:"Test Profiles",id:"test-profiles",level:2},{value:"About Skipped and Not Applicable Tests",id:"about-skipped-and-not-applicable-tests",level:2},{value:"Roles-based Access Control",id:"roles-based-access-control",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How-to Guides",id:"how-to-guides",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("Tabs"),d=c("TabItem"),h={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher can run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," app leverages ",(0,r.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench,")," an open-source tool from Aqua Security, to check clusters for CIS Kubernetes Benchmark compliance. Also, to generate a cluster-wide report, the application utilizes ",(0,r.kt)("a",{href:"https://github.com/vmware-tanzu/sonobuoy",target:"_blank"},"Sonobuoy")," for report aggregation."),(0,r.kt)("h2",{id:"changes-in-rancher-v25"},"Changes in Rancher v2.5"),(0,r.kt)("p",null,"We now support running CIS scans on any Kubernetes cluster, including hosted Kubernetes providers such as EKS, AKS, and GKE. Previously it was only supported to run CIS scans on RKE Kubernetes clusters."),(0,r.kt)("p",null,"In Rancher v2.4, the CIS scan tool was available from the ",(0,r.kt)("strong",{parentName:"p"},"cluster manager")," in the Rancher UI. Now it is available in the ",(0,r.kt)("strong",{parentName:"p"},"Cluster Explorer")," and it can be enabled and deployed using a Helm chart. It can be installed from the Rancher UI, but it can also be installed independently of Rancher. It  deploys a CIS scan operator for the cluster, and deploys Kubernetes custom resources for cluster scans. The custom resources can be managed directly from the ",(0,r.kt)("strong",{parentName:"p"},"Cluster Explorer.")),(0,r.kt)("p",null,"In v1 of the CIS scan tool, which was available in Rancher v2.4 through the cluster manager, recurring scans could be scheduled. The ability to schedule recurring scans is now also available for CIS v2 from Rancher v2.5.4."),(0,r.kt)("p",null,"Support for alerting for the cluster scan results is now also available from Rancher v2.5.4."),(0,r.kt)("p",null,"In Rancher v2.4, permissive and hardened profiles were included. In Rancher v2.5.0 and in v2.5.4, more profiles were included."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"Profiles in v2.5.4",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,r.kt)("li",{parentName:"ul"},"Generic CIS 1.6"),(0,r.kt)("li",{parentName:"ul"},"RKE permissive 1.5"),(0,r.kt)("li",{parentName:"ul"},"RKE hardened 1.5"),(0,r.kt)("li",{parentName:"ul"},"RKE permissive 1.6"),(0,r.kt)("li",{parentName:"ul"},"RKE hardened 1.6"),(0,r.kt)("li",{parentName:"ul"},"EKS"),(0,r.kt)("li",{parentName:"ul"},"GKE"),(0,r.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"),(0,r.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"))),(0,r.kt)(d,{value:"Profiles in v2.5.0-v2.5.3",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,r.kt)("li",{parentName:"ul"},"RKE permissive"),(0,r.kt)("li",{parentName:"ul"},"RKE hardened"),(0,r.kt)("li",{parentName:"ul"},"EKS"),(0,r.kt)("li",{parentName:"ul"},"GKE")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"The default profile and the supported CIS benchmark version depends on the type of cluster that will be scanned and the Rancher version:"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"v2.5.4",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," supports the CIS 1.6 Benchmark version."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For RKE Kubernetes clusters, the RKE Permissive 1.6 profile is the default."),(0,r.kt)("li",{parentName:"ul"},"EKS and GKE have their own CIS Benchmarks published by ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-bench"),". The corresponding test profiles are used by default for those clusters."),(0,r.kt)("li",{parentName:"ul"},"For RKE2 Kubernetes clusters, the RKE2 Permissive 1.5 profile is the default."),(0,r.kt)("li",{parentName:"ul"},"For cluster types other than RKE, RKE2, EKS and GKE, the Generic CIS 1.5 profile will be used by default."))),(0,r.kt)(d,{value:"v2.5.0-v2.5.3",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," supports the CIS 1.5 Benchmark version."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For RKE Kubernetes clusters, the RKE permissive profile is the default."),(0,r.kt)("li",{parentName:"ul"},"EKS and GKE have their own CIS Benchmarks published by ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-bench"),". The corresponding test profiles are used by default for those clusters."),(0,r.kt)("li",{parentName:"ul"},"For cluster types other than RKE, EKS and GKE, the Generic CIS 1.5 profile will be used by default.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," CIS v1 cannot run on a cluster when CIS v2 is deployed. In other words, after ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," is installed, you can't run scans by going to the Cluster Manager view in the Rancher UI and clicking ",(0,r.kt)("b",null,"Tools > CIS Scans."))),(0,r.kt)("h2",{id:"about-the-cis-benchmark"},"About the CIS Benchmark"),(0,r.kt)("p",null,"The Center for Internet Security is a 501(c",")",'(3) non-profit organization, formed in October 2000, with a mission to "identify, develop, validate, promote, and sustain best practice solutions for cyber defense and build and lead communities to enable an environment of trust in cyberspace". The organization is headquartered in East Greenbush, New York, with members including large corporations, government agencies, and academic institutions.'),(0,r.kt)("p",null,"CIS Benchmarks are best practices for the secure configuration of a target system. CIS Benchmarks are developed through the generous volunteer efforts of subject matter experts, technology vendors, public and private community members, and the CIS Benchmark Development team."),(0,r.kt)("p",null,"The official Benchmark documents are available through the CIS website. The sign-up form to access the documents is"),(0,r.kt)("a",{href:"https://learn.cisecurity.org/benchmarks",target:"_blank"},"here."),(0,r.kt)("h2",{id:"about-the-generated-report"},"About the Generated Report"),(0,r.kt)("p",null,"Each scan generates a report can be viewed in the Rancher UI and can be downloaded in CSV format."),(0,r.kt)("p",null,"From Rancher v2.5.4, the scan uses the CIS Benchmark v1.6 by default. In Rancher v2.5.0-2.5.3, the CIS Benchmark v1.5. is used."),(0,r.kt)("p",null,"The Benchmark version is included in the generated report."),(0,r.kt)("p",null,"The Benchmark provides recommendations of two types: Automated and Manual. Recommendations marked as Manual in the Benchmark are not included in the generated report."),(0,r.kt)("p",null,'Some tests are designated as "Not Applicable." These tests will not be run on any CIS scan because of the way that Rancher provisions RKE clusters. For information on how test results can be audited, and why some tests are designated to be not applicable, refer to Rancher\'s ',(0,r.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-security#the-cis-benchmark-and-self-assessment"},"self-assessment guide")," for the corresponding Kubernetes version."),(0,r.kt)("p",null,"The report contains the following information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column in Report"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID number of the CIS Benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"The description of the CIS Benchmark test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remediation")),(0,r.kt)("td",{parentName:"tr",align:null},"What needs to be fixed in order to pass the test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the test passed, failed, was skipped, or was not applicable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"node_type")),(0,r.kt)("td",{parentName:"tr",align:null},"The node role, which affects which tests are run on the node. Master tests are run on controlplane nodes, etcd tests are run on etcd nodes, and node tests are run on the worker nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"audit")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the audit check that ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-bench")," runs for this test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"audit_config")),(0,r.kt)("td",{parentName:"tr",align:null},"Any configuration applicable to the audit script.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"test_info")),(0,r.kt)("td",{parentName:"tr",align:null},"Test-related info as reported by ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"commands")),(0,r.kt)("td",{parentName:"tr",align:null},"Test-related commands as reported by ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config_commands")),(0,r.kt)("td",{parentName:"tr",align:null},"Test-related configuration data as reported by ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actual_value")),(0,r.kt)("td",{parentName:"tr",align:null},"The test's actual value, present if reported by ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-bench"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expected_result")),(0,r.kt)("td",{parentName:"tr",align:null},"The test's expected result, present if reported by ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-bench"),".")))),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-security"},"table in the cluster hardening guide")," for information on which versions of Kubernetes, the Benchmark, Rancher, and our cluster hardening guide correspond to each other. Also refer to the hardening guide for configuration files of CIS-compliant clusters and information on remediating failed tests."),(0,r.kt)("h2",{id:"test-profiles"},"Test Profiles"),(0,r.kt)("p",null,"The following profiles are available:"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"Profiles in v2.5.4",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,r.kt)("li",{parentName:"ul"},"Generic CIS 1.6"),(0,r.kt)("li",{parentName:"ul"},"RKE permissive 1.5"),(0,r.kt)("li",{parentName:"ul"},"RKE hardened 1.5"),(0,r.kt)("li",{parentName:"ul"},"RKE permissive 1.6"),(0,r.kt)("li",{parentName:"ul"},"RKE hardened 1.6"),(0,r.kt)("li",{parentName:"ul"},"EKS"),(0,r.kt)("li",{parentName:"ul"},"GKE"),(0,r.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"),(0,r.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"))),(0,r.kt)(d,{value:"Profiles in v2.5.0-v2.5.3",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,r.kt)("li",{parentName:"ul"},"RKE permissive"),(0,r.kt)("li",{parentName:"ul"},"RKE hardened"),(0,r.kt)("li",{parentName:"ul"},"EKS"),(0,r.kt)("li",{parentName:"ul"},"GKE")))),(0,r.kt)("p",null,"You also have the ability to customize a profile by saving a set of tests to skip."),(0,r.kt)("p",null,"All profiles will have a set of not applicable tests that will be skipped during the CIS scan. These tests are not applicable based on how a RKE cluster manages Kubernetes."),(0,r.kt)("p",null,"There are two types of RKE cluster scan profiles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Permissive:")," This profile has a set of tests that have been will be skipped as these tests will fail on a default RKE Kubernetes cluster. Besides the list of skipped tests, the profile will also not run the not applicable tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hardened:")," This profile will not skip any tests, except for the non-applicable tests.")),(0,r.kt)("p",null,"The EKS and GKE cluster scan profiles are based on CIS Benchmark versions that are specific to those types of clusters."),(0,r.kt)("p",null,'In order to pass the "Hardened" profile, you will need to follow the steps on the ',(0,r.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-security#rancher-hardening-guide"},"hardening guide")," and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," defined in the hardening guide to provision a hardened cluster."),(0,r.kt)("h2",{id:"about-skipped-and-not-applicable-tests"},"About Skipped and Not Applicable Tests"),(0,r.kt)("p",null,"For a list of skipped and not applicable tests, refer to ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"},"this page"),"."),(0,r.kt)("p",null,"For now, only user-defined skipped tests are marked as skipped in the generated report."),(0,r.kt)("p",null,"Any skipped tests that are defined as being skipped by one of the default profiles are marked as not applicable."),(0,r.kt)("h2",{id:"roles-based-access-control"},"Roles-based Access Control"),(0,r.kt)("p",null,"For information about permissions, refer to ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans"},"this page"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"For more information about configuring the custom resources for the scans, profiles, and benchmark versions, refer to ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/cis-scans/configuration-reference"},"this page"),"."),(0,r.kt)("h2",{id:"how-to-guides"},"How-to Guides"),(0,r.kt)("p",null,"Please refer ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/cis-scan-guides"},"here")," for how-to guides on CIS scans."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73050],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),k=a,m=p["".concat(l,".").concat(k)]||p[k]||c[k]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57449:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={title:"RKE1 to RKE2 Windows Migration Guidance",weight:3},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",title:"RKE1 to RKE2 Windows Migration Guidance",description:"Caution: The contents of this document are not covered under SLA by Rancher Support. Please proceed with caution.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"RKE1 to RKE2 Windows Migration Guidance",weight:3},sidebar:"tutorialSidebar",previous:{title:"Networking Requirements for Host Gateway (L2bridge)",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway"},next:{title:"Setting up Cloud Providers",permalink:"/pages-for-subheaders/set-up-cloud-providers"}},d={},c=[{value:"RKE1 Windows Scheduling",id:"rke1-windows-scheduling",level:2},{value:"RKE2 Windows Scheduling",id:"rke2-windows-scheduling",level:2},{value:"Example Migrations",id:"example-migrations",level:2},{value:"RKE1 to RKE2 Windows Workload",id:"rke1-to-rke2-windows-workload",level:3},{value:"RKE1 Windows Cluster Linux-Only Deployment",id:"rke1-windows-cluster-linux-only-deployment",level:3},{value:"RKE1 Windows-Supported Windows Server Versions",id:"rke1-windows-supported-windows-server-versions",level:2},{value:"Long-Term Servicing Channel (LTSC)",id:"long-term-servicing-channel-ltsc",level:3},{value:"Semi-Annual Channel (SAC)",id:"semi-annual-channel-sac",level:3},{value:"RKE2 Windows-Supported Windows Server Versions",id:"rke2-windows-supported-windows-server-versions",level:2},{value:"Long-Term Servicing Channel in RKE2",id:"long-term-servicing-channel-in-rke2",level:3},{value:"Kubernetes Version Support",id:"kubernetes-version-support",level:2},{value:"Rancher 2.5 vs. Rancher 2.6 Support Matrix for Windows Clusters",id:"rancher-25-vs-rancher-26-support-matrix-for-windows-clusters",level:3},{value:"Rancher 2.5 vs. Rancher 2.6 Supported Kubernetes Versions for Provisioning RKE1 and RKE2 Windows Clusters",id:"rancher-25-vs-rancher-26-supported-kubernetes-versions-for-provisioning-rke1-and-rke2-windows-clusters",level:3},{value:"Guiding Migrations of Workloads to RKE2 Windows",id:"guiding-migrations-of-workloads-to-rke2-windows",level:2},{value:"In-Place Upgrade of Rancher 2.5",id:"in-place-upgrade-of-rancher-25",level:3},{value:"Migrating Windows Workloads to a New Rancher Environment",id:"migrating-windows-workloads-to-a-new-rancher-environment",level:3}],p={toc:c};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caution:")," The contents of this document are not covered under SLA by Rancher Support. Please proceed with caution."),(0,o.kt)("p",null,"This document covers how end users can migrate their Windows workloads from RKE1 to RKE2."),(0,o.kt)("h2",{id:"rke1-windows-scheduling"},"RKE1 Windows Scheduling"),(0,o.kt)("p",null,"RKE1 Windows workload scheduling is based on taints and tolerations."),(0,o.kt)("p",null,"Every Linux node in an RKE1 Windows cluster, regardless of the role assigned to it, will have have a default taint that prevents workloads to be scheduled on it unless the workload has a toleration configured. This is a major design feature for RKE1 Windows clusters which were designed to only run Windows workloads."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default RKE1 Linux node ",(0,o.kt)("inlineCode",{parentName:"li"},"NoSchedule")," taint:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nkind: Node\nspec:\n  ...\n  taints:\n  - effect: NoSchedule\n    key: cattle.io/os\n    value: linux\n")),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RKE1 Linux ",(0,o.kt)("inlineCode",{parentName:"li"},"NoSchedule")," toleration for workloads")),(0,o.kt)("p",null,"The following toleration would allow an end-user workload to schedule on any Linux node of an RKE1 Windows cluster. These tolerations are used for various core Rancher services and workloads."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      tolerations:\n      - effect: NoSchedule\n        key: cattle.io/os\n        operator: Equal\n        value: linux\n")),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aligning with best practices, any end-user workloads being run on Linux nodes would be scheduled on those with the worker role only:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      tolerations:\n      - effect: NoSchedule\n        key: cattle.io/os\n        operator: Equal\n        value: linux\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - preference:\n              matchExpressions:\n              - key: node-role.kubernetes.io/worker\n                operator: In\n                values:\n                - "true"\n            weight: 100\n      ...\n')),(0,o.kt)("h2",{id:"rke2-windows-scheduling"},"RKE2 Windows Scheduling"),(0,o.kt)("p",null,"Based on feedback and requests for hybrid workload support, RKE2 Windows was designed to support both Linux and Windows workloads by default. RKE2 scheduling relies on node selectors by default. This is a marked change from RKE1 as taints and tolerations were not incorporated into RKE2. Node selectors were a critical part of RKE1 Windows clusters, which makes for an easy migration of your workloads."),(0,o.kt)("h2",{id:"example-migrations"},"Example Migrations"),(0,o.kt)("h3",{id:"rke1-to-rke2-windows-workload"},"RKE1 to RKE2 Windows Workload"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pre-migration RKE1 Windows deployment:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: kubernetes.io/os\n                operator: NotIn\n                values:\n                - linux\n")),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Migrated RKE2 Windows deployment using ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeAffinity"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\n...\nspec:\n  ...\n  template:\n    ...\n    spec:\n      ...\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n              - matchExpressions:\n                  - key: kubernetes.io/os\n                    operator: In\n                    values:\n                      - windows\n")),(0,o.kt)("h3",{id:"rke1-windows-cluster-linux-only-deployment"},"RKE1 Windows Cluster Linux-Only Deployment"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," When leveraging node selectors and node affinity, note the following:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"If both ",(0,o.kt)("inlineCode",{parentName:"li"},"nodeSelector")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"nodeAffinity")," are specified, both must be satisfied for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Pod")," to be scheduled onto a node."),(0,o.kt)("li",{parentName:"ul"},"If you specify multiple ",(0,o.kt)("inlineCode",{parentName:"li"},"matchExpressions")," associated with a single ",(0,o.kt)("inlineCode",{parentName:"li"},"nodeSelectorTerms"),", then the ",(0,o.kt)("inlineCode",{parentName:"li"},"Pod")," can be scheduled onto a node only if all the ",(0,o.kt)("inlineCode",{parentName:"li"},"matchExpressions")," are satisfied."))),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pre-migration RKE1 Windows cluster Linux-only deployment targeting RKE1 Linux worker nodes:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      tolerations:\n      - effect: NoSchedule\n        key: cattle.io/os\n        operator: Equal\n        value: linux\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            preference:\n              matchExpressions:\n              - key: node-role.kubernetes.io/worker\n                operator: In\n                values:\n                - "true"\n\n')),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Migrated RKE2 hybrid cluster Linux-only deployment targeting RKE2 Linux worker nodes using node selectors:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      nodeSelector:\n        kubernetes.io/os: "linux"\n        node-role.kubernetes.io/worker: "true"\n')),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Migrated RKE2 hybrid cluster Linux-only deployment targeting RKE2 Linux worker nodes using node affinity:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nspec:\n ...\n template:\n   ...\n   spec:\n      affinity:\n       nodeAffinity:\n         requiredDuringSchedulingIgnoredDuringExecution:\n         - weight: 100\n           preference:\n             matchExpressions:\n             - key: node-role.kubernetes.io/worker\n               operator: In\n               values:\n               - "true"\n           nodeSelectorTerms:\n             - matchExpressions:\n                 - key: kubernetes.io/os\n                   operator: In\n                   values:\n                     - linux\n')))),(0,o.kt)("h2",{id:"rke1-windows-supported-windows-server-versions"},"RKE1 Windows-Supported Windows Server Versions"),(0,o.kt)("h3",{id:"long-term-servicing-channel-ltsc"},"Long-Term Servicing Channel (LTSC)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows Server 2019 LTSC ","\u2705"," Will reach Mainstream EOL on Jan 9, 2024 and Extended EOL on Jan 9, 2029")),(0,o.kt)("h3",{id:"semi-annual-channel-sac"},"Semi-Annual Channel (SAC)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows Server 20H2 SAC ","\u274c"," EOL Reached on Aug 9, 2022"),(0,o.kt)("li",{parentName:"ul"},"Windows Server 2004 SAC ","\u274c"," EOL Reached on Dec 14, 2021"),(0,o.kt)("li",{parentName:"ul"},"Windows Server 1909 SAC ","\u274c"," EOL Reached on May 11, 2021"),(0,o.kt)("li",{parentName:"ul"},"Windows Server 1903 SAC ","\u274c"," EOL Reached on Dec 8, 2020"),(0,o.kt)("li",{parentName:"ul"},"Windows Server 1809 SAC ","\u274c"," EOL Reached on Nov 10, 2020")),(0,o.kt)("h2",{id:"rke2-windows-supported-windows-server-versions"},"RKE2 Windows-Supported Windows Server Versions"),(0,o.kt)("h3",{id:"long-term-servicing-channel-in-rke2"},"Long-Term Servicing Channel in RKE2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows Server 2019 LTSC ","\u2705"," Will reach Mainstream EOL on Jan 9, 2024 and Extended EOL on Jan 9, 2029"),(0,o.kt)("li",{parentName:"ul"},"Windows Server 2022 LTSC ","\u2705"," Will reach Mainstream EOL on Oct 13, 2026 and Extended EOL on Oct 13, 2031")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," SAC is not supported in RKE2.")),(0,o.kt)("p",null,"For more information, please see the following references:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/lifecycle/products/windows-server"},"Windows Server SAC Lifecycle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/lifecycle/products/windows-server-2022"},"Windows Server 2022 LTSC Lifecycle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/lifecycle/products/windows-server-2019"},"Windows Server 2019 LTSC Lifecycle")))),(0,o.kt)("h2",{id:"kubernetes-version-support"},"Kubernetes Version Support"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," All versions listed below are SLA Supported per the ",(0,o.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-6-7/"},"Rancher v2.6.7 Support Matrix"),". Any version not listed should be assumed as being EOL and not supported under SLA by SUSE.")),(0,o.kt)("h3",{id:"rancher-25-vs-rancher-26-support-matrix-for-windows-clusters"},"Rancher 2.5 vs. Rancher 2.6 Support Matrix for Windows Clusters"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RKE1 vs. RKE2 Windows cluster-supported Kubernetes versions:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Kubernetes Versions"),(0,o.kt)("th",{parentName:"tr",align:"center"},"RKE1"),(0,o.kt)("th",{parentName:"tr",align:"center"},"RKE2"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.18"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.19"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.20"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.21"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.22"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.23"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.24"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.25+"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713")))),(0,o.kt)("h3",{id:"rancher-25-vs-rancher-26-supported-kubernetes-versions-for-provisioning-rke1-and-rke2-windows-clusters"},"Rancher 2.5 vs. Rancher 2.6 Supported Kubernetes Versions for Provisioning RKE1 and RKE2 Windows Clusters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Rancher Versions"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Kubernetes Versions"),(0,o.kt)("th",{parentName:"tr",align:"center"},"RKE1"),(0,o.kt)("th",{parentName:"tr",align:"center"},"RKE2"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2.5 - RKE1 Provisioning"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1.18 1.19 1.20"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2.6 - RKE1 Provisioning"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1.18 1.19 1.20 1.21 1.22"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2.6 - RKE2 Provisioning"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1.22 1.23 1.24 1.25+"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2713")))),(0,o.kt)("h2",{id:"guiding-migrations-of-workloads-to-rke2-windows"},"Guiding Migrations of Workloads to RKE2 Windows"),(0,o.kt)("p",null,"Referencing the tables in ",(0,o.kt)("a",{parentName:"p",href:"#rancher-2-5-vs-rancher-2-6-support-matrix-for-windows-clusters"},"Rancher 2.5 vs. Rancher 2.6 Support Matrix for Windows Clusters")," and ",(0,o.kt)("a",{parentName:"p",href:"#rancher-2-5-vs-rancher-2-6-supported-kubernetes-versions-for-provisioning-rke1-and-rke2-windows-clusters"},"Rancher 2.5 vs. Rancher 2.6 Supported Kubernetes Versions for Provisioning RKE1 and RKE2 Windows Clusters"),", you will find the overlap in Kubernetes versions between RKE1 and RKE2 occurs in 1.22. This will be the base version required to migrate RKE1 Windows workloads when following the Rancher recommended approach."),(0,o.kt)("h3",{id:"in-place-upgrade-of-rancher-25"},"In-Place Upgrade of Rancher 2.5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upgrade the Rancher version to v2.6.5+."),(0,o.kt)("li",{parentName:"ol"},"Upgrade the RKE1 Windows downstream cluster(s) to RKE1 v1.22 using the latest available patch version."),(0,o.kt)("li",{parentName:"ol"},"Provision a new RKE2 Windows downstream cluster using RKE2 v1.22 using the matching patch version that the RKE1 Windows cluster is at."),(0,o.kt)("li",{parentName:"ol"},"Begin the migration of the Windows workloads from RKE1 to RKE2 clusters."),(0,o.kt)("li",{parentName:"ol"},"Perform validation tests to ensure that there has been no functionality loss or change when migrating your application from RKE1 to RKE2."),(0,o.kt)("li",{parentName:"ol"},"After successful validation tests have occurred, you can opt to upgrade your RKE2 1.22.x cluster to a new minor version such as 1.23 or 1.24.")),(0,o.kt)("h3",{id:"migrating-windows-workloads-to-a-new-rancher-environment"},"Migrating Windows Workloads to a New Rancher Environment"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," To perform either of the following options requires Rancher v2.6.5 or above.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When using matching Kubernetes patch versions for RKE1 and RKE2:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provision a new RKE2 Windows downstream cluster using RKE2 v1.22 using the matching patch version that the RKE1 Windows cluster is at."),(0,o.kt)("li",{parentName:"ol"},"Begin the migration of the Windows workloads from RKE1 to RKE2 clusters."),(0,o.kt)("li",{parentName:"ol"},"Perform validation tests to ensure that there has been no functionality loss or change when migrating your application from RKE1 to RKE2."),(0,o.kt)("li",{parentName:"ol"},"After successful validation tests have occurred, you can opt to upgrade your RKE2 1.22.x cluster to a new minor version such as 1.23 or 1.24.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When using a newer Kubernetes patch version for RKE2:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provision a new RKE2 Windows downstream cluster using RKE2 v1.23 or v1.24."),(0,o.kt)("li",{parentName:"ol"},"Begin the migration of the Windows workloads from RKE1 to RKE2 clusters."),(0,o.kt)("li",{parentName:"ol"},"Perform validation tests to ensure that there has been no functionality loss or change when migrating your application from RKE1 to RKE2.")))}k.isMDXComponent=!0}}]);
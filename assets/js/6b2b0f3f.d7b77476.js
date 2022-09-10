"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[77337],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Tips for Running Rancher",weight:100,aliases:["/rancher/v2.0-v2.4/en/best-practices/deployment-types","/rancher/v2.0-v2.4/en/best-practices/v2.0-v2.4/deployment-types","/rancher/v2.x/en/best-practices/v2.0-v2.4/deployment-types/"]},c=void 0,l={unversionedId:"reference-guides/best-practices/deployment-types",id:"version-2.0-2.4/reference-guides/best-practices/deployment-types",title:"Tips for Running Rancher",description:'A high-availability Kubernetes installation, defined as an installation of Rancher on a Kubernetes cluster with at least three nodes, should be used in any production installation of Rancher, as well as any installation deemed "important." Multiple Rancher instances running on multiple nodes ensure high availability that cannot be accomplished with a single node environment.',source:"@site/versioned_docs/version-2.0-2.4/reference-guides/best-practices/deployment-types.md",sourceDirName:"reference-guides/best-practices",slug:"/reference-guides/best-practices/deployment-types",permalink:"/v2.0-v2.4/reference-guides/best-practices/deployment-types",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/best-practices/deployment-types.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Tips for Running Rancher",weight:100,aliases:["/rancher/v2.0-v2.4/en/best-practices/deployment-types","/rancher/v2.0-v2.4/en/best-practices/v2.0-v2.4/deployment-types","/rancher/v2.x/en/best-practices/v2.0-v2.4/deployment-types/"]},sidebar:"tutorialSidebar",previous:{title:"Rancher Deployment Strategies",permalink:"/v2.0-v2.4/reference-guides/best-practices/deployment-strategies"},next:{title:"Tips for Scaling, Security and Reliability",permalink:"/v2.0-v2.4/reference-guides/best-practices/management"}},u={},d=[{value:"Run Rancher on a Separate Cluster",id:"run-rancher-on-a-separate-cluster",level:3},{value:"Don&#39;t Run Rancher on a Hosted Kubernetes Environment",id:"dont-run-rancher-on-a-hosted-kubernetes-environment",level:3},{value:"Make sure nodes are configured correctly for Kubernetes",id:"make-sure-nodes-are-configured-correctly-for-kubernetes",level:3},{value:"When using RKE: Backup the Statefile",id:"when-using-rke-backup-the-statefile",level:3},{value:"Run All Nodes in the Cluster in the Same Datacenter",id:"run-all-nodes-in-the-cluster-in-the-same-datacenter",level:3},{value:"Development and Production Environments Should be Similar",id:"development-and-production-environments-should-be-similar",level:3},{value:"Monitor Your Clusters to Plan Capacity",id:"monitor-your-clusters-to-plan-capacity",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'A high-availability Kubernetes installation, defined as an installation of Rancher on a Kubernetes cluster with at least three nodes, should be used in any production installation of Rancher, as well as any installation deemed "important." Multiple Rancher instances running on multiple nodes ensure high availability that cannot be accomplished with a single node environment.'),(0,o.kt)("p",null,"When you set up your high-availability Rancher installation, consider the following:"),(0,o.kt)("h3",{id:"run-rancher-on-a-separate-cluster"},"Run Rancher on a Separate Cluster"),(0,o.kt)("p",null,"Don't run other workloads or microservices in the Kubernetes cluster that Rancher is installed on."),(0,o.kt)("h3",{id:"dont-run-rancher-on-a-hosted-kubernetes-environment"},"Don't Run Rancher on a Hosted Kubernetes Environment"),(0,o.kt)("p",null,"When the Rancher server is installed on a Kubernetes cluster, it should not be run in a hosted Kubernetes environment such as Google's GKE, Amazon's EKS, or Microsoft's AKS. These hosted Kubernetes solutions do not expose etcd to a degree that is manageable for Rancher, and their customizations can interfere with Rancher operations."),(0,o.kt)("p",null,"It is strongly recommended to use hosted infrastructure such as Amazon's EC2 or Google's GCE instead. When you create a cluster using RKE on an infrastructure provider, you can configure the cluster to create etcd snapshots as a backup. You can then ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/etcd-snapshots/"},"use RKE")," or ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/backup-restore-and-disaster-recovery"},"Rancher")," to restore your cluster from one of these snapshots. In a hosted Kubernetes environment, this backup and restore functionality is not supported."),(0,o.kt)("h3",{id:"make-sure-nodes-are-configured-correctly-for-kubernetes"},"Make sure nodes are configured correctly for Kubernetes"),(0,o.kt)("p",null,"It's important to follow K8s and etcd best practices when deploying your nodes, including disabling swap, double checking you have full network connectivity between all machines in the cluster, using unique hostnames, MAC addresses, and product_uuids for every node, checking that all correct ports are opened, and deploying with ssd backed etcd.  More details can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#before-you-begin"},"kubernetes docs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/performance.md"},"etcd's performance op guide")),(0,o.kt)("h3",{id:"when-using-rke-backup-the-statefile"},"When using RKE: Backup the Statefile"),(0,o.kt)("p",null,"RKE keeps record of the cluster state in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.rkestate"),". This file is important for the recovery of a cluster and/or the continued maintenance of the cluster through RKE. Because this file contains certificate material, we strongly recommend encrypting this file before backing up. After each run of ",(0,o.kt)("inlineCode",{parentName:"p"},"rke up")," you should backup the state file."),(0,o.kt)("h3",{id:"run-all-nodes-in-the-cluster-in-the-same-datacenter"},"Run All Nodes in the Cluster in the Same Datacenter"),(0,o.kt)("p",null,"For best performance, run all three of your nodes in the same geographic datacenter. If you are running nodes in the cloud, such as AWS, run each node in a separate Availability Zone. For example, launch node 1 in us-west-2a, node 2 in us-west-2b, and node 3 in us-west-2c."),(0,o.kt)("h3",{id:"development-and-production-environments-should-be-similar"},"Development and Production Environments Should be Similar"),(0,o.kt)("p",null,'It\'s strongly recommended to have a "staging" or "pre-production" environment of the Kubernetes cluster that Rancher runs on. This environment should mirror your production environment as closely as possible in terms of software and hardware configuration.'),(0,o.kt)("h3",{id:"monitor-your-clusters-to-plan-capacity"},"Monitor Your Clusters to Plan Capacity"),(0,o.kt)("p",null,"The Rancher server's Kubernetes cluster should run within the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"system and hardware requirements")," as closely as possible. The more you deviate from the system and hardware requirements, the more risk you take."),(0,o.kt)("p",null,"However, metrics-driven capacity planning analysis should be the ultimate guidance for scaling Rancher, because the published requirements take into account a variety of workload types."),(0,o.kt)("p",null,"Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with Prometheus, a leading open-source monitoring solution, and Grafana, which lets you visualize the metrics from Prometheus."),(0,o.kt)("p",null,"After you ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"enable monitoring")," in the cluster, you can set up ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"a notification channel")," and ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-alerts"},"cluster alerts")," to let you know if your cluster is approaching its capacity. You can also use the Prometheus and Grafana monitoring framework to establish a baseline for key metrics as you scale."))}h.isMDXComponent=!0}}]);
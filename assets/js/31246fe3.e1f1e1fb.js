"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82229],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,p=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(p,o(o({ref:t},h),{},{components:r})):n.createElement(p,o({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={title:"Rancher is No Longer Needed"},o=void 0,i={unversionedId:"faq/rancher-is-no-longer-needed",id:"faq/rancher-is-no-longer-needed",title:"Rancher is No Longer Needed",description:"This page is intended to answer questions about what happens if you don't want Rancher anymore, if you don't want a cluster to be managed by Rancher anymore, or if the Rancher server is deleted.",source:"@site/docs/faq/rancher-is-no-longer-needed.md",sourceDirName:"faq",slug:"/faq/rancher-is-no-longer-needed",permalink:"/faq/rancher-is-no-longer-needed",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/rancher-is-no-longer-needed.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Rancher is No Longer Needed"},sidebar:"tutorialSidebar",previous:{title:"Container Network Interface (CNI) Providers",permalink:"/faq/container-network-interface-providers"},next:{title:"General Troubleshooting",permalink:"/troubleshooting/general-troubleshooting"}},c={},l=[{value:"If the Rancher server is deleted, what happens to the workloads in my downstream clusters?",id:"if-the-rancher-server-is-deleted-what-happens-to-the-workloads-in-my-downstream-clusters",level:3},{value:"If the Rancher server is deleted, how do I access my downstream clusters?",id:"if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters",level:3},{value:"What if I don&#39;t want Rancher anymore?",id:"what-if-i-dont-want-rancher-anymore",level:3},{value:"What if I don&#39;t want my registered cluster managed by Rancher?",id:"what-if-i-dont-want-my-registered-cluster-managed-by-rancher",level:3},{value:"What if I don&#39;t want my RKE cluster or hosted Kubernetes cluster managed by Rancher?",id:"what-if-i-dont-want-my-rke-cluster-or-hosted-kubernetes-cluster-managed-by-rancher",level:3}],h={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page is intended to answer questions about what happens if you don't want Rancher anymore, if you don't want a cluster to be managed by Rancher anymore, or if the Rancher server is deleted."),(0,a.kt)("h3",{id:"if-the-rancher-server-is-deleted-what-happens-to-the-workloads-in-my-downstream-clusters"},"If the Rancher server is deleted, what happens to the workloads in my downstream clusters?"),(0,a.kt)("p",null,"If Rancher is ever deleted or unrecoverable, all workloads in the downstream Kubernetes clusters managed by Rancher will continue to function as normal."),(0,a.kt)("h3",{id:"if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"If the Rancher server is deleted, how do I access my downstream clusters?"),(0,a.kt)("p",null,"The capability to access a downstream cluster without Rancher depends on the type of cluster and the way that the cluster was created. To summarize:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Registered clusters:")," The cluster will be unaffected and you can access the cluster using the same methods that you did before the cluster was registered into Rancher."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hosted Kubernetes clusters:")," If you created the cluster in a cloud-hosted Kubernetes provider such as EKS, GKE, or AKS, you can continue to manage the cluster using your provider's cloud credentials."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RKE clusters:")," To access an ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE cluster,")," the cluster must have the ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint")," enabled, and you must have already downloaded the cluster's kubeconfig file from the Rancher UI. (The authorized cluster endpoint is enabled by default for RKE clusters.) With this endpoint, you can access your cluster with kubectl directly instead of communicating through the Rancher server's ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/rancher-manager-architecture#1-the-authentication-proxy"},"authentication proxy.")," For instructions on how to configure kubectl to use the authorized cluster endpoint, refer to the section about directly accessing clusters with ",(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"kubectl and the kubeconfig file.")," These clusters will use a snapshot of the authentication as it was configured when Rancher was removed.")),(0,a.kt)("h3",{id:"what-if-i-dont-want-rancher-anymore"},"What if I don't want Rancher anymore?"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The previously recommended ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/system-tools"},"System Tools")," has been deprecated since June 2022.")),(0,a.kt)("p",null,"If you ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"installed Rancher on a Kubernetes cluster,")," remove Rancher by using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-cleanup"},"Rancher Cleanup")," tool."),(0,a.kt)("p",null,"As of Rancher v2.5.8, uninstalling Rancher in high-availability (HA) mode will also remove all ",(0,a.kt)("inlineCode",{parentName:"p"},"helm-operation-*")," pods and the following apps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fleet"),(0,a.kt)("li",{parentName:"ul"},"fleet-agent"),(0,a.kt)("li",{parentName:"ul"},"rancher-operator"),(0,a.kt)("li",{parentName:"ul"},"rancher-webhook")),(0,a.kt)("p",null,"Custom resources (CRDs) and custom namespaces will still need to be manually removed."),(0,a.kt)("p",null,"If you installed Rancher with Docker, you can uninstall Rancher by removing the single Docker container that it runs in."),(0,a.kt)("p",null,"Imported clusters will not be affected by Rancher being removed. For other types of clusters, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"accessing downstream clusters when Rancher is removed.")),(0,a.kt)("h3",{id:"what-if-i-dont-want-my-registered-cluster-managed-by-rancher"},"What if I don't want my registered cluster managed by Rancher?"),(0,a.kt)("p",null,"If a registered cluster is deleted from the Rancher UI, the cluster is detached from Rancher, leaving it intact and accessible by the same methods that were used to access it before it was registered in Rancher."),(0,a.kt)("p",null,"To detach the cluster,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the registered cluster that should be detached from Rancher and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Delete"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Delete"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The registered cluster is detached from Rancher and functions normally outside of Rancher."),(0,a.kt)("h3",{id:"what-if-i-dont-want-my-rke-cluster-or-hosted-kubernetes-cluster-managed-by-rancher"},"What if I don't want my RKE cluster or hosted Kubernetes cluster managed by Rancher?"),(0,a.kt)("p",null,'At this time, there is no functionality to detach these clusters from Rancher. In this context, "detach" is defined as the ability to remove Rancher components from the cluster and manage access to the cluster independently of Rancher.'),(0,a.kt)("p",null,"The capability to manage these clusters without Rancher is being tracked in this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25234"},"issue.")),(0,a.kt)("p",null,"For information about how to access clusters if the Rancher server is deleted, refer to ",(0,a.kt)("a",{parentName:"p",href:"#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"this section.")))}d.isMDXComponent=!0}}]);
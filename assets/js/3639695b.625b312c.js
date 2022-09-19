"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[40227],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18404:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={title:"How the Authorized Cluster Endpoint Works",weight:2015},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",id:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",title:"How the Authorized Cluster Endpoint Works",description:"This section describes how the kubectl CLI, the kubeconfig file, and the authorized cluster endpoint work together to allow you to access a downstream Kubernetes cluster directly, without authenticating through the Rancher server. It is intended to provide background information and context to the instructions for how to set up kubectl to directly access a cluster.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"How the Authorized Cluster Endpoint Works",weight:2015},sidebar:"tutorialSidebar",previous:{title:"Access a Cluster with Kubectl and kubeconfig",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},next:{title:"Adding Users to Clusters",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"}},l={},h=[{value:"About the kubeconfig File",id:"about-the-kubeconfig-file",level:3},{value:"Two Authentication Methods for RKE Clusters",id:"two-authentication-methods-for-rke-clusters",level:3},{value:"About the kube-api-auth Authentication Webhook",id:"about-the-kube-api-auth-authentication-webhook",level:3}],d={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how the kubectl CLI, the kubeconfig file, and the authorized cluster endpoint work together to allow you to access a downstream Kubernetes cluster directly, without authenticating through the Rancher server. It is intended to provide background information and context to the instructions for ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"how to set up kubectl to directly access a cluster.")),(0,o.kt)("h3",{id:"about-the-kubeconfig-file"},"About the kubeconfig File"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"kubeconfig file")," is a file used to configure access to Kubernetes when used in conjunction with the kubectl command line tool (or other clients)."),(0,o.kt)("p",null,"This kubeconfig file and its contents are specific to the cluster you are viewing. It can be downloaded from the cluster view in Rancher. You will need a separate kubeconfig file for each cluster that you have access to in Rancher."),(0,o.kt)("p",null,"After you download the kubeconfig file, you will be able to use the kubeconfig file and its Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/#kubectl-context-and-configuration"},"contexts")," to access your downstream cluster."),(0,o.kt)("p",null,"If admins have ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens#disable-tokens-in-generated-kubeconfigs"},"kubeconfig token generation turned off"),", the kubeconfig file requires ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"rancher cli")," to be present in your PATH."),(0,o.kt)("h3",{id:"two-authentication-methods-for-rke-clusters"},"Two Authentication Methods for RKE Clusters"),(0,o.kt)("p",null,"If the cluster is not an ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE cluster,")," the kubeconfig file allows you to access the cluster in only one way: it lets you be authenticated with the Rancher server, then Rancher allows you to run kubectl commands on the cluster."),(0,o.kt)("p",null,"For RKE clusters, the kubeconfig file allows you to be authenticated in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Through the Rancher server authentication proxy:")," Rancher's authentication proxy validates your identity, then connects you to the downstream cluster that you want to access."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Directly with the downstream cluster's API server:")," RKE clusters have an authorized cluster endpoint enabled by default. This endpoint allows you to access your downstream Kubernetes cluster with the kubectl CLI and a kubeconfig file, and it is enabled by default for RKE clusters. In this scenario, the downstream cluster's Kubernetes API server authenticates you by calling a webhook (the ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-api-auth")," microservice) that Rancher set up.")),(0,o.kt)("p",null,"This second method, the capability to connect directly to the cluster's Kubernetes API server, is important because it lets you access your downstream cluster if you can't connect to Rancher."),(0,o.kt)("p",null,"To use the authorized cluster endpoint, you will need to configure kubectl to use the extra kubectl context in the kubeconfig file that Rancher generates for you when the RKE cluster is created. This file can be downloaded from the cluster view in the Rancher UI, and the instructions for configuring kubectl are on ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"this page.")),(0,o.kt)("p",null,"These methods of communicating with downstream Kubernetes clusters are also explained in the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture#communicating-with-downstream-user-clusters"},"architecture page")," in the larger context of explaining how Rancher works and how Rancher communicates with downstream clusters."),(0,o.kt)("h3",{id:"about-the-kube-api-auth-authentication-webhook"},"About the kube-api-auth Authentication Webhook"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," microservice is deployed to provide the user authentication functionality for the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint,")," which is only available for ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters.")," When you access the user cluster using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),", the cluster's Kubernetes API server authenticates you by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," service as a webhook."),(0,o.kt)("p",null,"During cluster provisioning, the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/kube-api-authn-webhook.yaml")," is deployed and ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," is configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"--authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml"),". This configures the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," to query ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:6440/v1/authenticate")," to determine authentication for bearer tokens."),(0,o.kt)("p",null,"The scheduling rules for ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," are listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"nodeAffinity nodeSelectorTerms"),(0,o.kt)("th",{parentName:"tr",align:null},"nodeSelector"),(0,o.kt)("th",{parentName:"tr",align:null},"Tolerations"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kube-api-auth"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/controlplane:In:"true"')),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"operator:Exists"))))))}p.isMDXComponent=!0}}]);
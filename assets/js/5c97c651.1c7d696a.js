"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65909],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||s;return r?n.createElement(p,o(o({ref:t},u),{},{components:r})):n.createElement(p,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54909:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"Architecture Recommendations",weight:3},l=void 0,c={unversionedId:"reference-guides/rancher-manager-architecture/architecture-recommendations",id:"version-2.0-2.4/reference-guides/rancher-manager-architecture/architecture-recommendations",title:"Architecture Recommendations",description:"Kubernetes cluster. If you are installing Rancher on a single node, the main architecture recommendation that applies to your installation is that the cluster running Rancher should be separate from downstream clusters.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/rancher-manager-architecture/architecture-recommendations.md",sourceDirName:"reference-guides/rancher-manager-architecture",slug:"/reference-guides/rancher-manager-architecture/architecture-recommendations",permalink:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/architecture-recommendations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/rancher-manager-architecture/architecture-recommendations.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Architecture Recommendations",weight:3},sidebar:"tutorialSidebar",previous:{title:"Communicating with Downstream User Clusters",permalink:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"},next:{title:"Cluster Configuration",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-configuration"}},u={},h=[{value:"K3s Kubernetes Cluster Installations",id:"k3s-kubernetes-cluster-installations",level:3},{value:"RKE Kubernetes Cluster Installations",id:"rke-kubernetes-cluster-installations",level:3},{value:"K3s Cluster Roles",id:"k3s-cluster-roles",level:3},{value:"RKE Cluster Roles",id:"rke-cluster-roles",level:3},{value:"Contrasting RKE Cluster Architecture for Rancher Server and for Downstream Kubernetes Clusters",id:"contrasting-rke-cluster-architecture-for-rancher-server-and-for-downstream-kubernetes-clusters",level:3}],d={toc:h};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kubernetes cluster. If you are installing Rancher on a single node, the main architecture recommendation that applies to your installation is that the cluster running Rancher should be ",(0,s.kt)("a",{parentName:"p",href:"#separation-of-rancher-and-user-clusters"},"separate from downstream clusters.")),(0,s.kt)("h1",{id:"separation-of-rancher-and-user-clusters"},"Separation of Rancher and User Clusters"),(0,s.kt)("p",null,"A user cluster is a downstream Kubernetes cluster that runs your apps and services."),(0,s.kt)("p",null,"If you have a Docker installation of Rancher, the node running the Rancher server should be separate from your downstream clusters."),(0,s.kt)("p",null,"In Kubernetes installations of Rancher, the Rancher server cluster should also be separate from the user clusters."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Separation of Rancher Server from User Clusters",src:r(52690).Z,width:"827",height:"595"})),(0,s.kt)("h1",{id:"why-ha-is-better-for-rancher-in-production"},"Why HA is Better for Rancher in Production"),(0,s.kt)("p",null,"We recommend installing the Rancher server on a high-availability Kubernetes cluster, primarily because it protects the Rancher server data. In a high-availability installation, a load balancer serves as the single point of contact for clients, distributing network traffic across multiple servers in the cluster and helping to prevent any one server from becoming a point of failure."),(0,s.kt)("p",null,"We don't recommend installing Rancher in a single Docker container, because if the node goes down, there is no copy of the cluster data available on other nodes and you could lose the data on your Rancher server."),(0,s.kt)("p",null,"As of v2.4, Rancher needs to be installed on either a high-availability ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE (Rancher Kubernetes Engine)")," Kubernetes cluster, or a high-availability ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"K3s (Lightweight Kubernetes)")," Kubernetes cluster. Both RKE and K3s are fully certified Kubernetes distributions."),(0,s.kt)("p",null,"Rancher versions before v2.4 need to be installed on an RKE cluster."),(0,s.kt)("h3",{id:"k3s-kubernetes-cluster-installations"},"K3s Kubernetes Cluster Installations"),(0,s.kt)("p",null,"If you are installing Rancher v2.4 for the first time, we recommend installing it on a K3s Kubernetes cluster. One main advantage of this K3s architecture is that it allows an external datastore to hold the cluster data, allowing the K3s server nodes to be treated as ephemeral."),(0,s.kt)("p",null,"The option to install Rancher on a K3s cluster is a feature introduced in Rancher v2.4. K3s is easy to install, with half the memory of Kubernetes, all in a binary less than 100 MB."),(0,s.kt)("figcaption",null,"Architecture of a K3s Kubernetes Cluster Running the Rancher Management Server"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Architecture of a K3s Kubernetes Cluster Running the Rancher Management Server",src:r(74973).Z,width:"249",height:"371"})),(0,s.kt)("h3",{id:"rke-kubernetes-cluster-installations"},"RKE Kubernetes Cluster Installations"),(0,s.kt)("p",null,"If you are installing Rancher before v2.4, you will need to install Rancher on an RKE cluster, in which the cluster data is stored on each node with the etcd role. As of Rancher v2.4, there is no migration path to transition the Rancher server from an RKE cluster to a K3s cluster. All versions of the Rancher server, including v2.4+, can be installed on an RKE cluster."),(0,s.kt)("p",null,"In an RKE installation, the cluster data is replicated on each of three etcd nodes in the cluster, providing redundancy and data duplication in case one of the nodes fails."),(0,s.kt)("figcaption",null,"Architecture of an RKE Kubernetes Cluster Running the Rancher Management Server"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Architecture of an RKE Kubernetes cluster running the Rancher management server",src:r(17248).Z,width:"341",height:"322"})),(0,s.kt)("h1",{id:"recommended-load-balancer-configuration-for-kubernetes-installations"},"Recommended Load Balancer Configuration for Kubernetes Installations"),(0,s.kt)("p",null,"We recommend the following configurations for the load balancer and Ingress controllers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The DNS for Rancher should resolve to a Layer 4 load balancer (TCP)"),(0,s.kt)("li",{parentName:"ul"},"The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster."),(0,s.kt)("li",{parentName:"ul"},"The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443."),(0,s.kt)("li",{parentName:"ul"},"The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.")),(0,s.kt)("figcaption",null,"Rancher installed on a Kubernetes cluster with layer 4 load balancer, depicting SSL termination at Ingress controllers"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Rancher HA",src:r(86089).Z,width:"1236",height:"525"})),(0,s.kt)("h1",{id:"environment-for-kubernetes-installations"},"Environment for Kubernetes Installations"),(0,s.kt)("p",null,"It is strongly recommended to install Rancher on a Kubernetes cluster on hosted infrastructure such as Amazon's EC2 or Google Compute Engine."),(0,s.kt)("p",null,"For the best performance and greater security, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads."),(0,s.kt)("p",null,"It is not recommended to install Rancher on top of a managed Kubernetes service such as Amazon\u2019s EKS or Google Kubernetes Engine. These hosted Kubernetes solutions do not expose etcd to a degree that is manageable for Rancher, and their customizations can interfere with Rancher operations."),(0,s.kt)("h1",{id:"recommended-node-roles-for-kubernetes-installations"},"Recommended Node Roles for Kubernetes Installations"),(0,s.kt)("p",null,"Our recommendations for the roles of each node differ depending on whether Rancher is installed on a K3s Kubernetes cluster or an RKE Kubernetes cluster."),(0,s.kt)("h3",{id:"k3s-cluster-roles"},"K3s Cluster Roles"),(0,s.kt)("p",null,"In K3s clusters, there are two types of nodes: server nodes and agent nodes. Both servers and agents can have workloads scheduled on them. Server nodes run the Kubernetes master."),(0,s.kt)("p",null,"For the cluster running the Rancher management server, we recommend using two server nodes. Agent nodes are not required."),(0,s.kt)("h3",{id:"rke-cluster-roles"},"RKE Cluster Roles"),(0,s.kt)("p",null,"If Rancher is installed on an RKE Kubernetes cluster, the cluster should have three nodes, and each node should have all three Kubernetes roles: etcd, controlplane, and worker."),(0,s.kt)("h3",{id:"contrasting-rke-cluster-architecture-for-rancher-server-and-for-downstream-kubernetes-clusters"},"Contrasting RKE Cluster Architecture for Rancher Server and for Downstream Kubernetes Clusters"),(0,s.kt)("p",null,"Our recommendation for RKE node roles on the Rancher server cluster contrasts with our recommendations for the downstream user clusters that run your apps and services."),(0,s.kt)("p",null,"Rancher uses RKE as a library when provisioning downstream Kubernetes clusters. Note: The capability to provision downstream K3s clusters will be added in a future version of Rancher."),(0,s.kt)("p",null,"For downstream Kubernetes clusters, we recommend that each node in a user cluster should have a single role for stability and scalability."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Kubernetes Roles for Nodes in Rancher Server Cluster vs. User Clusters",src:r(663).Z,width:"801",height:"411"})),(0,s.kt)("p",null,"RKE only requires at least one node with each role and does not require nodes to be restricted to one role. However, for the clusters that run your apps, we recommend separate roles for each node so that workloads on worker nodes don't interfere with the Kubernetes master or cluster data as your services scale."),(0,s.kt)("p",null,"We recommend that downstream user clusters should have at least:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Three nodes with only the etcd role")," to maintain a quorum if one node is lost, making the state of your cluster highly available"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Two nodes with only the controlplane role")," to make the master component highly available"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"One or more nodes with only the worker role")," to run the Kubernetes node components, as well as the workloads for your apps and services")),(0,s.kt)("p",null,"With that said, it is safe to use all three roles on three nodes when setting up the Rancher server because:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It allows one ",(0,s.kt)("inlineCode",{parentName:"li"},"etcd")," node failure."),(0,s.kt)("li",{parentName:"ul"},"It maintains multiple instances of the master components by having multiple ",(0,s.kt)("inlineCode",{parentName:"li"},"controlplane")," nodes."),(0,s.kt)("li",{parentName:"ul"},"No other workloads than Rancher itself should be created on this cluster.")),(0,s.kt)("p",null,"Because no additional workloads will be deployed on the Rancher server cluster, in most cases it is not necessary to use the same architecture that we recommend for the scalability and reliability of downstream clusters."),(0,s.kt)("p",null,"For more best practices for downstream clusters, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/checklist-for-production-ready-clusters"},"production checklist")," or our ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/best-practices"},"best practices guide.")),(0,s.kt)("h1",{id:"architecture-for-an-authorized-cluster-endpoint"},"Architecture for an Authorized Cluster Endpoint"),(0,s.kt)("p",null,"If you are using an ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint,")," we recommend creating an FQDN pointing to a load balancer which balances traffic across your nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,s.kt)("p",null,"If you are using private CA signed certificates on the load balancer, you have to supply the CA certificate, which will be included in the generated kubeconfig file to validate the certificate chain. See the documentation on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubeconfig files")," and ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/user-settings/api-keys#creating-an-api-key"},"API keys")," for more information."))}m.isMDXComponent=!0},86089:function(e,t,r){t.Z=r.p+"assets/images/rancher2ha-109862fddef6042942f103cfc94d892b.svg"},74973:function(e,t,r){t.Z=r.p+"assets/images/k3s-server-storage-d746fa487cbe57d9ac9c5ed69c068f74.svg"},663:function(e,t,r){t.Z=r.p+"assets/images/rancher-architecture-node-roles-d119f0d32608589178cd9bf1375745cc.svg"},52690:function(e,t,r){t.Z=r.p+"assets/images/rancher-architecture-separation-of-rancher-server-b32508a12beee49d72836caa5469e585.svg"},17248:function(e,t,r){t.Z=r.p+"assets/images/rke-server-storage-479a90c18ba2cf4b197554330d05afe8.svg"}}]);
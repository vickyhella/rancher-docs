"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2309],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44533:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=r(13683),o=["components"],l={title:"Overview",weight:1},u=void 0,c={unversionedId:"getting-started/introduction/overview",id:"version-2.0-2.4/getting-started/introduction/overview",title:"Overview",description:"Rancher is a container management platform built for organizations that deploy containers in production. Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/introduction/overview.md",sourceDirName:"getting-started/introduction",slug:"/getting-started/introduction/overview",permalink:"/v2.0-v2.4/getting-started/introduction/overview",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/introduction/overview.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Overview",weight:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/v2.0-v2.4/pages-for-subheaders/introduction"},next:{title:"What Are Divio Docs?",permalink:"/v2.0-v2.4/getting-started/introduction/what-are-divio-docs"}},d={},p=[{value:"Authorization and Role-Based Access Control",id:"authorization-and-role-based-access-control",level:3},{value:"Working with Kubernetes",id:"working-with-kubernetes",level:3},{value:"Working with Cloud Infrastructure",id:"working-with-cloud-infrastructure",level:3},{value:"Cluster Visibility",id:"cluster-visibility",level:3}],g={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher is a container management platform built for organizations that deploy containers in production. Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams."),(0,i.kt)("h1",{id:"run-kubernetes-everywhere"},"Run Kubernetes Everywhere"),(0,i.kt)("p",null,"Kubernetes has become the container orchestration standard. Most cloud and virtualization vendors now offer it as standard infrastructure. Rancher users have the choice of creating Kubernetes clusters with Rancher Kubernetes Engine (RKE) or cloud Kubernetes services, such as GKE, AKS, and EKS. Rancher users can also import and manage their existing Kubernetes clusters created using any Kubernetes distribution or installer."),(0,i.kt)("h1",{id:"meet-it-requirements"},"Meet IT requirements"),(0,i.kt)("p",null,"Rancher supports centralized authentication, access control, and monitoring for all Kubernetes clusters under its control. For example, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use your Active Directory credentials to access Kubernetes clusters hosted by cloud vendors, such as GKE."),(0,i.kt)("li",{parentName:"ul"},"Setup and enforce access control and security policies across all users, groups, projects, clusters, and clouds."),(0,i.kt)("li",{parentName:"ul"},"View the health and capacity of your Kubernetes clusters from a single-pane-of-glass.")),(0,i.kt)("h1",{id:"empower-devops-teams"},"Empower DevOps Teams"),(0,i.kt)("p",null,"Rancher provides an intuitive user interface for DevOps engineers to manage their application workload. The user does not need to have in-depth knowledge of Kubernetes concepts to start using Rancher. Rancher catalog contains a set of useful DevOps tools. Rancher is certified with a wide selection of cloud native ecosystem products, including, for example, security tools, monitoring systems, container registries, and storage and networking drivers."),(0,i.kt)("p",null,"The following figure illustrates the role Rancher plays in IT and DevOps organizations. Each team deploys their applications on the public or private clouds they choose. IT administrators gain visibility and enforce policies across all users, clusters, and clouds."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Platform",src:r(83362).Z,width:"791",height:"245"})),(0,i.kt)("h1",{id:"features-of-the-rancher-api-server"},"Features of the Rancher API Server"),(0,i.kt)("p",null,"The Rancher API server is built on top of an embedded Kubernetes API server and an etcd database. It implements the following functionalities:"),(0,i.kt)("h3",{id:"authorization-and-role-based-access-control"},"Authorization and Role-Based Access Control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User management:")," The Rancher API server ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/about-authentication"},"manages user identities")," that correspond to external authentication providers like Active Directory or GitHub, in addition to local users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authorization:")," The Rancher API server manages ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/manage-role-based-access-control-rbac"},"access control")," and ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"security")," policies.")),(0,i.kt)("h3",{id:"working-with-kubernetes"},"Working with Kubernetes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Provisioning Kubernetes clusters:")," The Rancher API server can ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provision Kubernetes")," on existing nodes, or perform ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Kubernetes upgrades.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Catalog management:")," Rancher provides the ability to use a ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher"},"catalog of Helm charts")," that make it easy to repeatedly deploy applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Managing projects:")," A project is a group of multiple namespaces and access control policies within a cluster. A project is a Rancher concept, not a Kubernetes concept, which allows you to manage multiple namespaces as a group and perform Kubernetes operations in them. The Rancher UI provides features for ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/manage-projects"},"project administration")," and for ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-resources-setup"},"managing applications within projects.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pipelines:")," Setting up a ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"pipeline")," can help developers deliver new software as quickly and efficiently as possible. Within Rancher, you can configure pipelines for each of your Rancher projects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Istio:")," Our ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/istio"},"integration with Istio")," is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing.")),(0,i.kt)("h3",{id:"working-with-cloud-infrastructure"},"Working with Cloud Infrastructure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tracking nodes:")," The Rancher API server tracks identities of all the ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"nodes")," in all clusters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Setting up infrastructure:"),"  When configured to use a cloud provider, Rancher can dynamically provision ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"new nodes")," and ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"persistent storage")," in the cloud.")),(0,i.kt)("h3",{id:"cluster-visibility"},"Cluster Visibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logging:")," Rancher can integrate with a variety of popular logging services and tools that exist outside of your Kubernetes clusters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Monitoring:")," Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with Prometheus, a leading open-source monitoring solution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Alerting:")," To keep your clusters and applications healthy and driving your organizational productivity forward, you need to stay informed of events occurring in your clusters and projects, both planned and unplanned.")),(0,i.kt)("h1",{id:"editing-downstream-clusters-with-rancher"},"Editing Downstream Clusters with Rancher"),(0,i.kt)("p",null,"The options and settings available for an existing cluster change based on the method that you used to provision it. For example, only clusters ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"provisioned by RKE")," have ",(0,i.kt)("strong",{parentName:"p"},"Cluster Options")," available for editing."),(0,i.kt)("p",null,"After a cluster is created with Rancher, a cluster administrator can manage cluster membership, enable pod security policies, and manage node pools, among ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-configuration"},"other options.")),(0,i.kt)("p",null,"The following table summarizes the options and settings available for each cluster type:"),(0,i.kt)(s.ZP,{mdxType:"ClusterCapabilitiesTable"}))}m.isMDXComponent=!0},13683:function(e,t,r){r.d(t,{ZP:function(){return l}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={toc:[]};function l(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes Clusters")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Kubernetes Clusters")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"Imported Clusters")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher/"},"Using App Catalogs")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-cluster-tools"},"Configuring Tools (Alerts, Notifiers, Logging, Monitoring, Istio)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},"Cloning Clusters")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd"},"Ability to back up your Kubernetes Clusters")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd"},"Ability to recover and restore etcd")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/cis-scans"},"Running Security Scans")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#authorized-cluster-endpoint"},"Authorized Cluster Endpoint")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"*"," Cluster configuration options can't be edited for imported clusters, except for K3s clusters."))}l.isMDXComponent=!0},83362:function(e,t,r){t.Z=r.p+"assets/images/platform-9c0c4130a7a0828898dbc7af56f76df7.png"}}]);
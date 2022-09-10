"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84002],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Private Clusters",weight:2},c=void 0,l={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters",id:"reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters",title:"Private Clusters",description:'In GKE, private clusters are clusters whose nodes are isolated from inbound and outbound traffic by assigning them internal IP addresses only. Private clusters in GKE have the option of exposing the control plane endpoint as a publicly accessible address or as a private address. This is different from other Kubernetes providers, which may refer to clusters with private control plane endpoints as "private clusters" but still allow traffic to and from nodes. You may want to create a cluster with private nodes, with or without a public control plane endpoint, depending on your organization\'s networking and security requirements. A GKE cluster provisioned from Rancher can use isolated nodes by selecting "Private Cluster" in the Cluster Options (under "Show advanced options"). The control plane endpoint can optionally be made private by selecting "Enable Private Endpoint".',source:"@site/docs/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters.md",tags:[],version:"current",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Private Clusters",weight:2},sidebar:"tutorialSidebar",previous:{title:"GKE Cluster Configuration Reference",permalink:"/pages-for-subheaders/gke-cluster-configuration"},next:{title:"Launching Kubernetes on Existing Custom Nodes",permalink:"/pages-for-subheaders/use-existing-nodes"}},u={},d=[{value:"Private Nodes",id:"private-nodes",level:3},{value:"Cloud NAT",id:"cloud-nat",level:4},{value:"Private registry",id:"private-registry",level:4},{value:"Private Control Plane Endpoint",id:"private-control-plane-endpoint",level:3},{value:"Cloud NAT",id:"cloud-nat-1",level:4},{value:"Direct access",id:"direct-access",level:4}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In GKE, ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept"},"private clusters"),' are clusters whose nodes are isolated from inbound and outbound traffic by assigning them internal IP addresses only. Private clusters in GKE have the option of exposing the control plane endpoint as a publicly accessible address or as a private address. This is different from other Kubernetes providers, which may refer to clusters with private control plane endpoints as "private clusters" but still allow traffic to and from nodes. You may want to create a cluster with private nodes, with or without a public control plane endpoint, depending on your organization\'s networking and security requirements. A GKE cluster provisioned from Rancher can use isolated nodes by selecting "Private Cluster" in the Cluster Options (under "Show advanced options"). The control plane endpoint can optionally be made private by selecting "Enable Private Endpoint".'),(0,a.kt)("h3",{id:"private-nodes"},"Private Nodes"),(0,a.kt)("p",null,"Because the nodes in a private cluster only have internal IP addresses, they will not be able to install the cluster agent and Rancher will not be able to fully manage the cluster. This can be overcome in a few ways."),(0,a.kt)("h4",{id:"cloud-nat"},"Cloud NAT"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Cloud NAT will ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/nat/pricing"},"incur charges"),"."))),(0,a.kt)("p",null,"If restricting outgoing internet access is not a concern for your organization, use Google's ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/nat/docs/using-nat"},"Cloud NAT")," service to allow nodes in the private network to access the internet, enabling them to download the required images from Dockerhub and contact the Rancher management server. This is the simplest solution."),(0,a.kt)("h4",{id:"private-registry"},"Private registry"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This scenario is not officially supported, but is described for cases in which using the Cloud NAT service is not sufficient."))),(0,a.kt)("p",null,"If restricting both incoming and outgoing traffic to nodes is a requirement, follow the air-gapped installation instructions to set up a private container image ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap/"},"registry")," on the VPC where the cluster is going to be, allowing the cluster nodes to access and download the images they need to run the cluster agent. If the control plane endpoint is also private, Rancher will need ",(0,a.kt)("a",{parentName:"p",href:"#direct-access"},"direct access")," to it."),(0,a.kt)("h3",{id:"private-control-plane-endpoint"},"Private Control Plane Endpoint"),(0,a.kt)("p",null,"If the cluster has a public endpoint exposed, Rancher will be able to reach the cluster, and no additional steps need to be taken. However, if the cluster has no public endpoint, then considerations must be made to ensure Rancher can access the cluster."),(0,a.kt)("h4",{id:"cloud-nat-1"},"Cloud NAT"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Cloud NAT will ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/nat/pricing"},"incur charges"),"."))),(0,a.kt)("p",null,"As above, if restricting outgoing internet access to the nodes is not a concern, then Google's ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/nat/docs/using-nat"},"Cloud NAT")," service can be used to allow the nodes to access the internet. While the cluster is provisioning, Rancher will provide a registration command to run on the cluster. Download the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl"},"kubeconfig")," for the new cluster and run the provided kubectl command on the cluster. Gaining access\nto the cluster in order to run this command can be done by creating a temporary node or using an existing node in the VPC, or by logging on to or creating an SSH tunnel through one of the cluster nodes."),(0,a.kt)("h4",{id:"direct-access"},"Direct access"),(0,a.kt)("p",null,"If the Rancher server is run on the same VPC as the cluster's control plane, it will have direct access to the control plane's private endpoint. The cluster nodes will need to have access to a ",(0,a.kt)("a",{parentName:"p",href:"#private-registry"},"private registry")," to download images as described above."),(0,a.kt)("p",null,"You can also use services from Google such as ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview"},"Cloud VPN")," or ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/network-connectivity/docs/interconnect"},"Cloud Interconnect VLAN")," to facilitate connectivity between your organization's network and your Google VPC."))}h.isMDXComponent=!0}}]);
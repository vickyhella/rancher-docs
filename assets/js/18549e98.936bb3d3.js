"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36208],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"v2.1.x and v2.2.x Windows Documentation (Experimental)",weight:9100,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/windows-clusters/docs-for-2.1-and-2.2/"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/v2.1-v2.2",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/v2.1-v2.2",title:"v2.1.x and v2.2.x Windows Documentation (Experimental)",description:"Available from v2.1.0 to v2.1.9 and v2.2.0 to v2.2.3",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/v2.1-v2.2.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/v2.1-v2.2",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/v2.1-v2.2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/v2.1-v2.2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"v2.1.x and v2.2.x Windows Documentation (Experimental)",weight:9100,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/windows-clusters/docs-for-2.1-and-2.2/"]},sidebar:"tutorialSidebar",previous:{title:"Networking Requirements for Host Gateway (L2bridge)",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway"},next:{title:"Setting up Cloud Providers",permalink:"/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"}},d={},p=[{value:"OS and Container Requirements",id:"os-and-container-requirements",level:2},{value:"Objectives for Creating Cluster with Windows Support",id:"objectives-for-creating-cluster-with-windows-support",level:2},{value:"1. Provision Hosts",id:"1-provision-hosts",level:2},{value:"Requirements",id:"requirements",level:3},{value:"2. Cloud-hosted VM Networking Configuration",id:"2-cloud-hosted-vm-networking-configuration",level:2},{value:"3. Create the Custom Cluster",id:"3-create-the-custom-cluster",level:2},{value:"Enable the Windows Support Option",id:"enable-the-windows-support-option",level:3},{value:"Networking Option",id:"networking-option",level:3},{value:"Node Configuration",id:"node-configuration",level:3},{value:"4. Add Linux Host for Ingress Support",id:"4-add-linux-host-for-ingress-support",level:2},{value:"5. Adding Windows Workers",id:"5-adding-windows-workers",level:2},{value:"6. Cloud-hosted VM Routes Configuration",id:"6-cloud-hosted-vm-routes-configuration",level:2}],c={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available from v2.1.0 to v2.1.9 and v2.2.0 to v2.2.3")),(0,a.kt)("p",null,"This section describes how to provision Windows clusters in Rancher v2.1.x and v2.2.x. If you are using Rancher v2.3.0 or later, please refer to the new documentation for ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"v2.3.0 or later"),"."),(0,a.kt)("p",null,"When you create a ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom cluster"),", Rancher uses RKE (the Rancher Kubernetes Engine) to provision the Kubernetes cluster on your existing infrastructure."),(0,a.kt)("p",null,"You can provision a custom Windows cluster using Rancher by using a mix of Linux and Windows hosts as your cluster nodes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:")," In versions of Rancher before v2.3, support for Windows nodes is experimental. Therefore, it is not recommended to use Windows nodes for production environments if you are using Rancher before v2.3.")),(0,a.kt)("p",null,"This guide walks you through create of a custom cluster that includes three nodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Linux node, which serves as a Kubernetes control plane node"),(0,a.kt)("li",{parentName:"ul"},"Another Linux node, which serves as a Kubernetes worker used to support Ingress for the cluster"),(0,a.kt)("li",{parentName:"ul"},"A Windows node, which is assigned the Kubernetes worker role and runs your Windows containers")),(0,a.kt)("p",null,"For a summary of Kubernetes features supported in Windows, see ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/windows/intro-windows-in-kubernetes/"},"Using Windows in Kubernetes"),"."),(0,a.kt)("h2",{id:"os-and-container-requirements"},"OS and Container Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For clusters provisioned with Rancher v2.1.x and v2.2.x, containers must run on Windows Server 1809 or above."),(0,a.kt)("li",{parentName:"ul"},"You must build containers on a Windows Server core version 1809 or above to run these containers on the same server version.")),(0,a.kt)("h2",{id:"objectives-for-creating-cluster-with-windows-support"},"Objectives for Creating Cluster with Windows Support"),(0,a.kt)("p",null,"When setting up a custom cluster with support for Windows nodes and containers, complete the series of tasks below."),(0,a.kt)("h2",{id:"1-provision-hosts"},"1. Provision Hosts"),(0,a.kt)("p",null,"To begin provisioning a custom cluster with Windows support, prepare your host servers. Provision three nodes according to our ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"requirements"),"\u2014two Linux, one Windows. Your hosts can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud-hosted VMs"),(0,a.kt)("li",{parentName:"ul"},"VMs from virtualization clusters"),(0,a.kt)("li",{parentName:"ul"},"Bare-metal servers")),(0,a.kt)("p",null,"The table below lists the Kubernetes node roles you'll assign to each host, although you won't enable these roles until further along in the configuration process\u2014we're just informing you of each node's purpose. The first node, a Linux host, is primarily responsible for managing the Kubernetes control plane, although, in this use case, we're installing all three roles on this node. Node 2 is also a Linux worker, which is responsible for Ingress support. Finally, the third node is your Windows worker, which will run your Windows applications."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Node"),(0,a.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,a.kt)("th",{parentName:"tr",align:null},"Future Cluster Role(s)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 1"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux (Ubuntu Server 16.04 recommended)"),(0,a.kt)("td",{parentName:"tr",align:null},"Control plane, etcd, worker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 2"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux (Ubuntu Server 16.04 recommended)"),(0,a.kt)("td",{parentName:"tr",align:null},"Worker (This node is used for Ingress support)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 3"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows (Windows Server core version 1809 or above)"),(0,a.kt)("td",{parentName:"tr",align:null},"Worker")))),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can view node requirements for Linux and Windows nodes in the ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"installation section"),"."),(0,a.kt)("li",{parentName:"ul"},"All nodes in a virtualization cluster or a bare metal cluster must be connected using a layer 2 network."),(0,a.kt)("li",{parentName:"ul"},"To support ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),", your cluster must include at least one Linux node dedicated to the worker role."),(0,a.kt)("li",{parentName:"ul"},"Although we recommend the three node architecture listed in the table above, you can add additional Linux and Windows workers to scale up your cluster for redundancy.")),(0,a.kt)("h2",{id:"2-cloud-hosted-vm-networking-configuration"},"2. Cloud-hosted VM Networking Configuration"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This step only applies to nodes hosted on cloud-hosted virtual machines. If you're using virtualization clusters or bare-metal servers, skip ahead to ",(0,a.kt)("a",{parentName:"p",href:"#3-create-the-custom-cluster"},"Create the Custom Cluster"),".")),(0,a.kt)("p",null,"If you're hosting your nodes on any of the cloud services listed below, you must disable the private IP address checks for both your Linux or Windows hosts on startup. To disable this check for each node, follow the directions provided by each service below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Directions to disable private IP address checks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Amazon EC2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#EIP_Disable_SrcDestCheck"},"Disabling Source/Destination Checks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google GCE"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://cloud.google.com/vpc/docs/using-routes#canipforward"},"Enabling IP Forwarding for Instances"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Azure VM"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface#enable-or-disable-ip-forwarding"},"Enable or Disable IP Forwarding"))))),(0,a.kt)("h2",{id:"3-create-the-custom-cluster"},"3. Create the Custom Cluster"),(0,a.kt)("p",null,"To create a custom cluster that supports Windows nodes, follow the instructions in ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"Creating a Cluster with Custom Nodes"),", starting from 2. Create the Custom Cluster. While completing the linked instructions, look for steps that requires special actions for Windows nodes, which are flagged with a note. These notes will link back here, to the special Windows instructions listed in the subheadings below."),(0,a.kt)("h3",{id:"enable-the-windows-support-option"},"Enable the Windows Support Option"),(0,a.kt)("p",null,"While choosing ",(0,a.kt)("strong",{parentName:"p"},"Cluster Options"),", set ",(0,a.kt)("strong",{parentName:"p"},"Windows Support (Experimental)")," to ",(0,a.kt)("strong",{parentName:"p"},"Enabled"),"."),(0,a.kt)("p",null,"After you select this option, resume ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"Creating a Cluster with Custom Nodes")," from ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes#step-6"},"step 6"),"."),(0,a.kt)("h3",{id:"networking-option"},"Networking Option"),(0,a.kt)("p",null,"When choosing a network provider for a cluster that supports Windows, the only option available is Flannel, as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#host-gw"},"host-gw")," is needed for IP routing."),(0,a.kt)("p",null,"If your nodes are hosted by a cloud provider and you want automation support such as load balancers or persistent storage devices, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Selecting Cloud Providers")," for configuration info."),(0,a.kt)("h3",{id:"node-configuration"},"Node Configuration"),(0,a.kt)("p",null,"The first node in your cluster should be a Linux host that fills the Control Plane role. This role must be fulfilled before you can add Windows hosts to your cluster. At minimum, the node must have this role enabled, but we recommend enabling all three. The following table lists our recommended settings (we'll provide the recommended settings for nodes 2 and 3 later)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Setting"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node Operating System"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node Roles"),(0,a.kt)("td",{parentName:"tr",align:null},"etcd ",(0,a.kt)("br",null)," Control Plane ",(0,a.kt)("br",null)," Worker")))),(0,a.kt)("p",null,"When you're done with these configurations, resume ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"Creating a Cluster with Custom Nodes")," from ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes#step-8"},"step 8"),"."),(0,a.kt)("h2",{id:"4-add-linux-host-for-ingress-support"},"4. Add Linux Host for Ingress Support"),(0,a.kt)("p",null,"After the initial provisioning of your custom cluster, your cluster only has a single Linux host. Add another Linux host, which will be used to support Ingress for your cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using the content menu, open the custom cluster your created in ",(0,a.kt)("a",{parentName:"p",href:"#3-create-the-custom-cluster"},"2. Create the Custom Cluster"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the main menu, select ",(0,a.kt)("strong",{parentName:"p"},"Nodes"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Edit Cluster"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scroll down to ",(0,a.kt)("strong",{parentName:"p"},"Node Operating System"),". Choose ",(0,a.kt)("strong",{parentName:"p"},"Linux"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Worker")," role.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the command displayed on screen to your clipboard.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to your Linux host using a remote Terminal connection. Run the command copied to your clipboard.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From ",(0,a.kt)("strong",{parentName:"p"},"Rancher"),", click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The worker role is installed on your Linux host, and the node registers with Rancher."),(0,a.kt)("h2",{id:"5-adding-windows-workers"},"5. Adding Windows Workers"),(0,a.kt)("p",null,"You can add Windows hosts to a custom cluster by editing the cluster and choosing the ",(0,a.kt)("strong",{parentName:"p"},"Windows")," option."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the main menu, select ",(0,a.kt)("strong",{parentName:"p"},"Nodes"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Edit Cluster"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scroll down to ",(0,a.kt)("strong",{parentName:"p"},"Node Operating System"),". Choose ",(0,a.kt)("strong",{parentName:"p"},"Windows"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Worker")," role.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the command displayed on screen to your clipboard.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to your Windows host using your preferred tool, such as ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients"},"Microsoft Remote Desktop"),". Run the command copied to your clipboard in the ",(0,a.kt)("strong",{parentName:"p"},"Command Prompt (CMD)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From Rancher, click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional:")," Repeat these instruction if you want to add more Windows nodes to your cluster."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The worker role is installed on your Windows host, and the node registers with Rancher."),(0,a.kt)("h2",{id:"6-cloud-hosted-vm-routes-configuration"},"6. Cloud-hosted VM Routes Configuration"),(0,a.kt)("p",null,"In Windows clusters, containers communicate with each other using the ",(0,a.kt)("inlineCode",{parentName:"p"},"host-gw")," mode of Flannel. In ",(0,a.kt)("inlineCode",{parentName:"p"},"host-gw")," mode, all containers on the same node belong to a private subnet, and traffic routes from a subnet on one node to a subnet on another node through the host network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When worker nodes are provisioned on AWS, virtualization clusters, or bare metal servers, make sure they belong to the same layer 2 subnet. If the nodes don't belong to the same layer 2 subnet, ",(0,a.kt)("inlineCode",{parentName:"p"},"host-gw")," networking will not work.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When worker nodes are provisioned on GCE or Azure, they are not on the same layer 2 subnet. Nodes on GCE and Azure belong to a routable layer 3 network. Follow the instructions below to configure GCE and Azure so that the cloud network knows how to route the host subnets on each node."))),(0,a.kt)("p",null,"To configure host subnet routing on GCE or Azure, first run the following command to find out the host subnets on each worker node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o custom-columns=nodeName:.metadata.name,nodeIP:status.addresses[0].address,routeDestination:.spec.podCIDR\n")),(0,a.kt)("p",null,"Then follow the instructions for each cloud provider to configure routing rules for each node:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google GCE"),(0,a.kt)("td",{parentName:"tr",align:null},"For GCE, add a static route for each node: ",(0,a.kt)("a",{parentName:"td",href:"https://cloud.google.com/vpc/docs/using-routes#addingroute"},"Adding a Static Route"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Azure VM"),(0,a.kt)("td",{parentName:"tr",align:null},"For Azure, create a routing table: ",(0,a.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview#user-defined"},"Custom Routes: User-defined"),".")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"}," ")))}h.isMDXComponent=!0}}]);
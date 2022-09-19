"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11018],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return r?a.createElement(g,n(n({ref:t},u),{},{components:r})):a.createElement(g,n({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var p=2;p<s;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57130:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=r(87462),o=r(63366),s=(r(67294),r(3905)),n=["components"],i={title:"Setting up Existing Storage",weight:1},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",title:"Setting up Existing Storage",description:"This section describes how to set up existing persistent storage for workloads in Rancher.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Setting up Existing Storage",weight:1},sidebar:"tutorialSidebar",previous:{title:"How Persistent Storage Works",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},next:{title:"Dynamically Provisioning New Storage in Rancher",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Set up persistent storage",id:"1-set-up-persistent-storage",level:3},{value:"2. Add a persistent volume that refers to the persistent storage",id:"2-add-a-persistent-volume-that-refers-to-the-persistent-storage",level:3},{value:"3. Add a persistent volume claim that refers to the persistent volume",id:"3-add-a-persistent-volume-claim-that-refers-to-the-persistent-volume",level:3},{value:"4. Mount the persistent volume claim as a volume in your workload",id:"4-mount-the-persistent-volume-claim-as-a-volume-in-your-workload",level:3}],c={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes how to set up existing persistent storage for workloads in Rancher."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This section assumes that you understand the Kubernetes concepts of persistent volumes and persistent volume claims. For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"how storage works."))),(0,s.kt)("p",null,"To set up storage, follow these steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#1-set-up-persistent-storage"},"Set up persistent storage.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#2-add-a-persistent-volume-that-refers-to-the-persistent-storage"},"Add a persistent volume that refers to the persistent storage.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#3-add-a-persistent-volume-claim-that-refers-to-the-persistent-volume"},"Add a persistent volume claim that refers to the persistent volume.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#4-mount-the-persistent-volume-claim-as-a-volume-in-your-workload"},"Mount the persistent volume claim as a volume in your workload."))),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To create a persistent volume as a Kubernetes resource, you must have the ",(0,s.kt)("inlineCode",{parentName:"li"},"Manage Volumes")," ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-role-reference"},"role.")),(0,s.kt)("li",{parentName:"ul"},"If you are provisioning storage for a cluster hosted in the cloud, the storage and cluster hosts must have the same cloud provider.")),(0,s.kt)("h3",{id:"1-set-up-persistent-storage"},"1. Set up persistent storage"),(0,s.kt)("p",null,"Creating a persistent volume in Rancher will not create a storage volume. It only creates a Kubernetes resource that maps to an existing volume. Therefore, before you can create a persistent volume as a Kubernetes resource, you must have storage provisioned."),(0,s.kt)("p",null,"The steps to set up a persistent storage device will differ based on your infrastructure. We provide examples of how to set up storage using ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},"vSphere,")," ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage"},"NFS,")," or Amazon's ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs"},"EBS.")," "),(0,s.kt)("p",null,"If you have a pool of block storage, and you don't want to use a cloud provider, Longhorn could help you provide persistent storage to your Kubernetes cluster. "),(0,s.kt)("h3",{id:"2-add-a-persistent-volume-that-refers-to-the-persistent-storage"},"2. Add a persistent volume that refers to the persistent storage"),(0,s.kt)("p",null,"These steps describe how to set up a persistent volume at the cluster level in Kubernetes."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the cluster view, select ",(0,s.kt)("strong",{parentName:"p"},"Storage > Persistent Volumes"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Add Volume"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter a ",(0,s.kt)("strong",{parentName:"p"},"Name")," for the persistent volume.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select the ",(0,s.kt)("strong",{parentName:"p"},"Volume Plugin")," for the disk type or service that you're using. When adding storage to a cluster that's hosted by a cloud provider, use the cloud provider's plug-in for cloud storage. For example, if you have a Amazon EC2 cluster and you want to use cloud storage for it, you must use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Amazon EBS Disk")," volume plugin.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter the ",(0,s.kt)("strong",{parentName:"p"},"Capacity")," of your volume in gigabytes.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Complete the ",(0,s.kt)("strong",{parentName:"p"},"Plugin Configuration")," form. Each plugin type requires information specific to the vendor of disk type. For help regarding each plugin's form and the information that's required, refer to the plug-in's vendor documentation.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Optional: In the ",(0,s.kt)("strong",{parentName:"p"},"Customize")," form, configure the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"access modes.")," This options sets how many nodes can access the volume, along with the node read/write permissions. The ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"Kubernetes Documentation")," includes a table that lists which access modes are supported by the plugins available.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Optional: In the ",(0,s.kt)("strong",{parentName:"p"},"Customize")," form, configure the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options"},"mount options.")," Each volume plugin allows you to specify additional command line options during the mounting process. Consult each plugin's vendor documentation for the mount options available.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Save"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Your new persistent volume is created."),(0,s.kt)("h3",{id:"3-add-a-persistent-volume-claim-that-refers-to-the-persistent-volume"},"3. Add a persistent volume claim that refers to the persistent volume"),(0,s.kt)("p",null,"These steps describe how to set up a PVC in the namespace where your stateful workload will be deployed."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Go to the project containing a workload that you want to add a persistent volume claim to.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Then click the ",(0,s.kt)("strong",{parentName:"p"},"Volumes")," tab and click ",(0,s.kt)("strong",{parentName:"p"},"Add Volume"),". (In versions before v2.3.0, click ",(0,s.kt)("strong",{parentName:"p"},"Workloads")," on the main navigation bar, then ",(0,s.kt)("strong",{parentName:"p"},"Volumes."),") ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter a ",(0,s.kt)("strong",{parentName:"p"},"Name")," for the volume claim.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select the namespace of the workload that you want to add the persistent storage to.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the section called ",(0,s.kt)("strong",{parentName:"p"},"Use an existing persistent volume,")," go to the ",(0,s.kt)("strong",{parentName:"p"},"Persistent Volume")," drop-down and choose the persistent volume that you created.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Optional:")," From ",(0,s.kt)("strong",{parentName:"p"},"Customize"),", select the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"Access Modes")," that you want to use.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Create.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Your PVC is created. You can now attach it to any workload in the project."),(0,s.kt)("h3",{id:"4-mount-the-persistent-volume-claim-as-a-volume-in-your-workload"},"4. Mount the persistent volume claim as a volume in your workload"),(0,s.kt)("p",null,"Mount PVCs to stateful workloads so that your applications can store their data."),(0,s.kt)("p",null,"You can mount PVCs during the deployment of a workload, or following workload creation."),(0,s.kt)("p",null,"The following steps describe how to assign existing storage to a new workload that is a stateful set:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the ",(0,s.kt)("strong",{parentName:"li"},"Project")," view, go to the ",(0,s.kt)("strong",{parentName:"li"},"Workloads")," tab."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Deploy.")),(0,s.kt)("li",{parentName:"ol"},"Enter a name for the workload."),(0,s.kt)("li",{parentName:"ol"},"Next to the ",(0,s.kt)("strong",{parentName:"li"},"Workload Type")," field, click ",(0,s.kt)("strong",{parentName:"li"},"More Options.")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Stateful set of 1 pod.")," Optionally, configure the number of pods."),(0,s.kt)("li",{parentName:"ol"},"Choose the namespace where the workload will be deployed."),(0,s.kt)("li",{parentName:"ol"},"Expand the ",(0,s.kt)("strong",{parentName:"li"},"Volumes")," section and click ",(0,s.kt)("strong",{parentName:"li"},"Add Volume > Use an existing persistent volume (claim)."),"."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Persistent Volume Claim")," field, select the PVC that you created."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Mount Point")," field, enter the path that the workload will use to access the volume."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Launch."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," When the workload is deployed, it will make a request for the specified amount of disk space to the Kubernetes master. If a PV with the specified resources is available when the workload is deployed, the Kubernetes master will bind the PV to the PVC."),(0,s.kt)("p",null,"The following steps describe how to assign persistent storage to an existing workload:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the ",(0,s.kt)("strong",{parentName:"li"},"Project")," view, go to the ",(0,s.kt)("strong",{parentName:"li"},"Workloads")," tab."),(0,s.kt)("li",{parentName:"ol"},"Go to the workload that you want to add the persistent storage to. The workload type should be a stateful set. Click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,s.kt)("li",{parentName:"ol"},"Expand the ",(0,s.kt)("strong",{parentName:"li"},"Volumes")," section and click ",(0,s.kt)("strong",{parentName:"li"},"Add Volume > Use an existing persistent volume (claim)."),"."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Persistent Volume Claim")," field, select the PVC that you created."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Mount Point")," field, enter the path that the workload will use to access the volume."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The workload will make a request for the specified amount of disk space to the Kubernetes master. If a PV with the specified resources is available when the workload is deployed, the Kubernetes master will bind the PV to the PVC."))}d.isMDXComponent=!0}}]);
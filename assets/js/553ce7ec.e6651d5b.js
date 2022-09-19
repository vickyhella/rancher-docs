"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97241],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65304:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],u={title:"Setting up the Azure Cloud Provider",weight:2},l=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",title:"Setting up the Azure Cloud Provider",description:"When using the Azure cloud provider, you can leverage the following capabilities:",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Setting up the Azure Cloud Provider",weight:2},sidebar:"tutorialSidebar",previous:{title:"Setting up the Amazon Cloud Provider",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon"},next:{title:"Setting up the Google Compute Engine Cloud Provider",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine"}},p={},c=[{value:"1. Set up the Azure Tenant ID",id:"1-set-up-the-azure-tenant-id",level:3},{value:"2. Set up the Azure Client ID and Azure Client Secret",id:"2-set-up-the-azure-client-id-and-azure-client-secret",level:3},{value:"3. Configure App Registration Permissions",id:"3-configure-app-registration-permissions",level:3},{value:"4. Set up Azure Network Security Group Name",id:"4-set-up-azure-network-security-group-name",level:3}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Azure")," cloud provider, you can leverage the following capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Load Balancers:")," Launches an Azure Load Balancer within a specific Network Security Group.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Persistent Volumes:")," Supports using Azure Blob disks and Azure Managed Disks with standard and premium storage accounts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Network Storage:")," Support Azure Files via CIFS mounts."))),(0,o.kt)("p",null,"The following account types are not supported for Azure Subscriptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single tenant accounts (i.e. accounts with no subscriptions)."),(0,o.kt)("li",{parentName:"ul"},"Multi-subscription accounts.")),(0,o.kt)("h1",{id:"prerequisites-for-rke-and-rke2"},"Prerequisites for RKE and RKE2"),(0,o.kt)("p",null,"To set up the Azure cloud provider for both RKE and RKE2, the following credentials need to be configured:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-set-up-the-azure-tenant-id"},"Set up the Azure Tenant ID")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-set-up-the-azure-client-id-and-azure-client-secret"},"Set up the Azure Client ID and Azure Client Secret")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-configure-app-registration-permissions"},"Configure App Registration Permissions")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#4-set-up-azure-network-security-group-name"},"Set up Azure Network Security Group Name"))),(0,o.kt)("h3",{id:"1-set-up-the-azure-tenant-id"},"1. Set up the Azure Tenant ID"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure portal"),", login and go to ",(0,o.kt)("strong",{parentName:"p"},"Azure Active Directory")," and select ",(0,o.kt)("strong",{parentName:"p"},"Properties"),". Your ",(0,o.kt)("strong",{parentName:"p"},"Directory ID")," is your ",(0,o.kt)("strong",{parentName:"p"},"Tenant ID")," (tenantID)."),(0,o.kt)("p",null,"If you want to use the Azure CLI, you can run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"az account show")," to get the information."),(0,o.kt)("h3",{id:"2-set-up-the-azure-client-id-and-azure-client-secret"},"2. Set up the Azure Client ID and Azure Client Secret"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure portal"),", login and follow the steps below to create an ",(0,o.kt)("strong",{parentName:"p"},"App Registration")," and the corresponding ",(0,o.kt)("strong",{parentName:"p"},"Azure Client ID")," (aadClientId) and ",(0,o.kt)("strong",{parentName:"p"},"Azure Client Secret")," (aadClientSecret)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"App registrations"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"New application registration"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose a ",(0,o.kt)("strong",{parentName:"li"},"Name"),", select ",(0,o.kt)("inlineCode",{parentName:"li"},"Web app / API")," as ",(0,o.kt)("strong",{parentName:"li"},"Application Type")," and a ",(0,o.kt)("strong",{parentName:"li"},"Sign-on URL")," which can be anything in this case."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"App registrations")," view, you should see your created App registration. The value shown in the column ",(0,o.kt)("strong",{parentName:"p"},"APPLICATION ID")," is what you need to use as ",(0,o.kt)("strong",{parentName:"p"},"Azure Client ID"),"."),(0,o.kt)("p",null,"The next step is to generate the ",(0,o.kt)("strong",{parentName:"p"},"Azure Client Secret"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your created App registration."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Settings")," view, open ",(0,o.kt)("strong",{parentName:"li"},"Keys"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Key description"),", select an expiration time and select ",(0,o.kt)("strong",{parentName:"li"},"Save"),"."),(0,o.kt)("li",{parentName:"ol"},"The generated value shown in the column ",(0,o.kt)("strong",{parentName:"li"},"Value")," is what you need to use as ",(0,o.kt)("strong",{parentName:"li"},"Azure Client Secret"),". This value will only be shown once.")),(0,o.kt)("h3",{id:"3-configure-app-registration-permissions"},"3. Configure App Registration Permissions"),(0,o.kt)("p",null,"The last thing you will need to do, is assign the appropriate permissions to your App registration."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"More services"),", search for ",(0,o.kt)("strong",{parentName:"li"},"Subscriptions")," and open it."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Access control (IAM)"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add"),"."),(0,o.kt)("li",{parentName:"ol"},"For ",(0,o.kt)("strong",{parentName:"li"},"Role"),", select ",(0,o.kt)("inlineCode",{parentName:"li"},"Contributor"),"."),(0,o.kt)("li",{parentName:"ol"},"For ",(0,o.kt)("strong",{parentName:"li"},"Select"),", select your created App registration name."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("h3",{id:"4-set-up-azure-network-security-group-name"},"4. Set up Azure Network Security Group Name"),(0,o.kt)("p",null,"A custom Azure Network Security Group (securityGroupName) is needed to allow Azure Load Balancers to work."),(0,o.kt)("p",null,"If you provision hosts using Rancher Machine Azure driver, you will need to edit them manually to assign them to this Network Security Group."),(0,o.kt)("p",null,"You should already assign custom hosts to this Network Security Group during provisioning."),(0,o.kt)("p",null,"Only hosts expected to be load balancer back ends need to be in this group."),(0,o.kt)("h1",{id:"rke2-cluster-set-up-in-rancher"},"RKE2 Cluster Set-up in Rancher"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Choose "Azure" from the Cloud Provider drop-down in the Cluster Configuration section.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Supply the Cloud Provider Configuration. Note that Rancher will automatically create a new Network Security Group, Resource Group, Availability Set, Subnet, and Virtual Network. If you already have some or all of these created, you will need to specify them before creating the cluster."),(0,o.kt)("li",{parentName:"ul"},'You can click on "Show Advanced" to see more of these automatically generated names and update them if\nnecessary. Your Cloud Provider Configuration ',(0,o.kt)("strong",{parentName:"li"},"must")," match the fields in the Machine Pools section. If you have multiple pools, they must all use the same Resource Group, Availability Set, Subnet, Virtual Network, and Network Security Group."),(0,o.kt)("li",{parentName:"ul"},"An example is provided below. You will modify it as needed.")),(0,o.kt)("details",{id:"v2.6.0-cloud-provider-config-file"},(0,o.kt)("summary",null,"Example Cloud Provider Config"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "cloud":"AzurePublicCloud",\n    "tenantId": "YOUR TENANTID HERE",\n    "aadClientId": "YOUR AADCLIENTID HERE",\n    "aadClientSecret": "YOUR AADCLIENTSECRET HERE",\n    "subscriptionId": "YOUR SUBSCRIPTIONID HERE",\n    "resourceGroup": "docker-machine",\n    "location": "westus",\n    "subnetName": "docker-machine",\n    "securityGroupName": "rancher-managed-KA4jV9V2",\n    "securityGroupResourceGroup": "docker-machine",\n    "vnetName": "docker-machine-vnet",\n    "vnetResourceGroup": "docker-machine",\n    "primaryAvailabilitySetName": "docker-machine",\n    "routeTableResourceGroup": "docker-machine",\n    "cloudProviderBackoff": false,\n    "useManagedIdentityExtension": false,\n    "useInstanceMetadata": true\n}\n')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Configuration > Advanced")," section, click ",(0,o.kt)("strong",{parentName:"p"},"Add")," under ",(0,o.kt)("strong",{parentName:"p"},"Additional Controller Manager Args")," and add this flag: ",(0,o.kt)("inlineCode",{parentName:"p"},"--configure-cloud-routes=false"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button to submit the form and create the cluster."))))}m.isMDXComponent=!0}}]);
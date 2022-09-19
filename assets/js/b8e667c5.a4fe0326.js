"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26743],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41327:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Cluster Templates",weight:100},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",title:"Cluster Templates",description:"Cluster templates encompass both Kubernetes configuration and node pool configuration, allowing a single template to contain all the information Rancher needs to provision new nodes in a cloud provider and install Kubernetes on those nodes.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Cluster Templates",weight:100},sidebar:"tutorialSidebar",previous:{title:"Example Scenarios",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases"},next:{title:"Pod Security Policies",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Kubernetes Distribution",id:"kubernetes-distribution",level:3},{value:"Versioning",id:"versioning",level:3},{value:"RKE2 Cluster Template",id:"rke2-cluster-template",level:2},{value:"Adding a Cluster Template to Rancher",id:"adding-a-cluster-template-to-rancher",level:2},{value:"Creating a Cluster from a Cluster Template",id:"creating-a-cluster-from-a-cluster-template",level:2},{value:"Updating a Cluster Created from a Cluster Template",id:"updating-a-cluster-created-from-a-cluster-template",level:2},{value:"Deploying Clusters from a Template with Fleet",id:"deploying-clusters-from-a-template-with-fleet",level:2},{value:"Uninstalling Cluster Templates",id:"uninstalling-cluster-templates",level:2},{value:"Configuration Options",id:"configuration-options",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cluster templates encompass both Kubernetes configuration and node pool configuration, allowing a single template to contain all the information Rancher needs to provision new nodes in a cloud provider and install Kubernetes on those nodes."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Cluster templates are provided as Helm charts. To use them, you will need to clone and fork the templates, change them according to your use case, and then install the Helm charts on the Rancher management cluster. When the Helm chart is installed on the Rancher management cluster, a new cluster resource is created, which Rancher uses to provision the new cluster."),(0,l.kt)("p",null,"After the cluster is provisioned using the template, no changes to the template will affect the cluster. After the cluster is created from the cluster template, its configuration and infrastructure can change, because no restrictions are enforced by cluster templates."),(0,l.kt)("h3",{id:"kubernetes-distribution"},"Kubernetes Distribution"),(0,l.kt)("p",null,"Cluster templates can use any Kubernetes distribution. For now, we provide an example with an RKE2 Kubernetes cluster. We may provide more examples in the future using other Kubernetes distributions."),(0,l.kt)("h3",{id:"versioning"},"Versioning"),(0,l.kt)("p",null,"Rancher doesn't manage version control for cluster templates. Version control is handled in the repository containing the template's Helm chart."),(0,l.kt)("h2",{id:"rke2-cluster-template"},"RKE2 Cluster Template"),(0,l.kt)("p",null,"The example repository for an RKE2 cluster template is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/cluster-template-examples"},"here"),". As of Rancher v2.6.0, we provide an RKE2 cluster template and may add more in the future."),(0,l.kt)("h2",{id:"adding-a-cluster-template-to-rancher"},"Adding a Cluster Template to Rancher"),(0,l.kt)("p",null,"In this section, you'll learn how to add the cluster template to the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster's chart repo list. The result is that Rancher will include the cluster template as an option when users install new Kubernetes clusters."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"You will need permission to install Helm charts on the ",(0,l.kt)("inlineCode",{parentName:"li"},"local")," Kubernetes cluster that Rancher is installed on."),(0,l.kt)("li",{parentName:"ul"},"In order for the chart to appear in the form for creating new clusters, the chart must have the annotation ",(0,l.kt)("inlineCode",{parentName:"li"},"catalog.cattle.io/type: cluster-template"),".")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to a cluster template example repository. Rancher's examples are in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/cluster-template-examples"},"this GitHub repository.")," As of Rancher v2.6.0, we provide an RKE2 cluster template and add to more in the future."),(0,l.kt)("li",{parentName:"ol"},"Fork the repository."),(0,l.kt)("li",{parentName:"ol"},"Optional: Edit the cluster options by editing the ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," file. For help editing the file, see the cluster template's Helm chart README."),(0,l.kt)("li",{parentName:"ol"},"Add the chart repository to Rancher. Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"local")," cluster and click ",(0,l.kt)("strong",{parentName:"li"},"Explore.")),(0,l.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,l.kt)("strong",{parentName:"li"},"Apps & Marketplace > Chart Repositories.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create.")),(0,l.kt)("li",{parentName:"ol"},"Enter a name for the cluster template repository."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Git Repository containing Helm chart definitions.")),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Git Repo URL")," field, enter the URL for the repository. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/rancher/cluster-template-examples.git"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Git Branch")," field, enter the branch to use as the source for the template. Rancher's example repository uses ",(0,l.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The cluster template available from the ",(0,l.kt)("strong",{parentName:"p"},"Apps & Marketplace")," in Rancher's ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster. It can now be used to deploy clusters."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Restricted Admin access:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are a restricted admin and don\u2019t have access to the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster, you may still add new RKE2 templates and manage cluster repositories. To navigate to the chart repository, go to the left navigation bar and click ",(0,l.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management >  Advanced > Repositories"),". You will bypass steps 1 - 6 above, then proceed to follow steps 7 - 12 to create the cluster template."))),(0,l.kt)("h2",{id:"creating-a-cluster-from-a-cluster-template"},"Creating a Cluster from a Cluster Template"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"You will need permission to provision new Kubernetes clusters."),(0,l.kt)("li",{parentName:"ul"},"You will need cloud credentials for provisioning infrastructure using the template."),(0,l.kt)("li",{parentName:"ul"},"In order to show in the form for creating new clusters, the cluster template's Helm chart must have the ",(0,l.kt)("inlineCode",{parentName:"li"},"catalog.cattle.io/type: cluster-template")," annotation.")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,l.kt)("strong",{parentName:"li"},"Create.")),(0,l.kt)("li",{parentName:"ol"},"Click the name of your cluster template."),(0,l.kt)("li",{parentName:"ol"},"Finish installing the Helm chart.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," After Rancher provisions the new cluster, it is managed in the same way as any other Rancher-launched Kubernetes cluster. You can configure any options through the UI if the cluster template has options for the user to choose from."),(0,l.kt)("h2",{id:"updating-a-cluster-created-from-a-cluster-template"},"Updating a Cluster Created from a Cluster Template"),(0,l.kt)("p",null,"You can update any clusters using a template from the ",(0,l.kt)("strong",{parentName:"p"},"Apps & Marketplace > Installed Apps")," page, given there is a new version of a template being used by those clusters."),(0,l.kt)("h2",{id:"deploying-clusters-from-a-template-with-fleet"},"Deploying Clusters from a Template with Fleet"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"You will need permission to provision new Kubernetes clusters."),(0,l.kt)("li",{parentName:"ul"},"You will need cloud credentials for provisioning infrastructure using the template."),(0,l.kt)("li",{parentName:"ul"},"In order to show in the form for creating new clusters, the cluster template's Helm chart must have the ",(0,l.kt)("inlineCode",{parentName:"li"},"catalog.cattle.io/type:cluster-template")," annotation."),(0,l.kt)("li",{parentName:"ul"},"In order to use a template as part of continuous delivery/GitOps, the cluster template needs to be deployed in the ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet-local")," namespace of the ",(0,l.kt)("inlineCode",{parentName:"li"},"local")," cluster."),(0,l.kt)("li",{parentName:"ul"},"All values must be set in the ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," of the template."),(0,l.kt)("li",{parentName:"ul"},"Fleet repositories must follow the guidelines on ",(0,l.kt)("a",{parentName:"li",href:"http://fleet.rancher.io/gitrepo-structure/"},"this page.")," For RKE2 cluster templates, that means a ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet.yaml")," file must be added to the repository.")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,l.kt)("strong",{parentName:"li"},"Create.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create Cluster from Template."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," After Rancher provisions the new cluster, it is managed by Fleet."),(0,l.kt)("h2",{id:"uninstalling-cluster-templates"},"Uninstalling Cluster Templates"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"local")," cluster and click ",(0,l.kt)("strong",{parentName:"li"},"Apps & Marketplace > Chart Repositories.")),(0,l.kt)("li",{parentName:"ol"},"Go to the chart repository for your cluster template and click ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > Delete.")),(0,l.kt)("li",{parentName:"ol"},"Confirm the deletion.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The cluster template is uninstalled. This action does not affect clusters created with the cluster template."),(0,l.kt)("p",null,"An admin with access to the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster can also remove a cluster deployed via cluster templates through the ",(0,l.kt)("strong",{parentName:"p"},"Apps & Marketplace > Installed Apps")," page."),(0,l.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,l.kt)("p",null,"Cluster templates are flexible enough that they can be used to configure all of the following options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node configuration"),(0,l.kt)("li",{parentName:"ul"},"Node pools"),(0,l.kt)("li",{parentName:"ul"},"Pre-specified cloud credentials"),(0,l.kt)("li",{parentName:"ul"},"Enable/configure an authorized cluster endpoint to get kubectl access to the cluster without using Rancher as a proxy"),(0,l.kt)("li",{parentName:"ul"},"Install Rancher V2 monitoring"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes version"),(0,l.kt)("li",{parentName:"ul"},"Assign cluster members"),(0,l.kt)("li",{parentName:"ul"},"Infrastructure configuration such as AWS VPC/subnets or vSphere data center"),(0,l.kt)("li",{parentName:"ul"},"Cloud provider options"),(0,l.kt)("li",{parentName:"ul"},"Pod security options"),(0,l.kt)("li",{parentName:"ul"},"Network providers"),(0,l.kt)("li",{parentName:"ul"},"Ingress controllers"),(0,l.kt)("li",{parentName:"ul"},"Network security configuration"),(0,l.kt)("li",{parentName:"ul"},"Network plugins"),(0,l.kt)("li",{parentName:"ul"},"Private registry URL and credentials"),(0,l.kt)("li",{parentName:"ul"},"Add-ons"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes options, including configurations for Kubernetes components such as kube-api, kube-controller, kubelet, and services")),(0,l.kt)("p",null,"For details on how to configure the template, refer to the cluster template's Helm chart README."))}d.isMDXComponent=!0}}]);
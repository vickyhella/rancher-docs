"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86751],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70885:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"RKE Templates and Infrastructure",weight:90},u=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",title:"RKE Templates and Infrastructure",description:"In Rancher, RKE templates are used to provision Kubernetes and define Rancher settings, while node templates are used to provision nodes.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure.md",tags:[],version:"current",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"RKE Templates and Infrastructure",weight:90},sidebar:"tutorialSidebar",previous:{title:"Applying Templates",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates"},next:{title:"Example Scenarios",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases"}},c={},d=[{value:"Node Templates",id:"node-templates",level:3},{value:"Terraform",id:"terraform",level:3}],p={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Rancher, RKE templates are used to provision Kubernetes and define Rancher settings, while node templates are used to provision nodes."),(0,o.kt)("p",null,"Therefore, even if RKE template enforcement is turned on, the end user still has flexibility when picking the underlying hardware when creating a Rancher cluster. The end users of an RKE template can still choose an infrastructure provider and the nodes they want to use."),(0,o.kt)("p",null,"If you want to standardize the hardware in your clusters, use RKE templates conjunction with node templates or with a server provisioning tool such as Terraform."),(0,o.kt)("h3",{id:"node-templates"},"Node Templates"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/manage-node-templates"},"Node templates")," are responsible for node configuration and node provisioning in Rancher. From your user profile, you can set up node templates to define which templates are used in each of your node pools. With node pools enabled, you can make sure you have the required number of nodes in each node pool, and ensure that all nodes in the pool are the same."),(0,o.kt)("h3",{id:"terraform"},"Terraform"),(0,o.kt)("p",null,"Terraform is a server provisioning tool. It uses infrastructure-as-code that lets you create almost every aspect of your infrastructure with Terraform configuration files. It can automate the process of server provisioning in a way that is self-documenting and easy to track in version control."),(0,o.kt)("p",null,"This section focuses on how to use Terraform with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/rancher2/"},"Rancher 2 Terraform provider"),", which is a recommended option to standardize the hardware for your Kubernetes clusters. If you use the Rancher Terraform provider to provision hardware, and then use an RKE template to provision a Kubernetes cluster on that hardware, you can quickly create a comprehensive, production-ready cluster."),(0,o.kt)("p",null,"Terraform allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define almost any kind of infrastructure-as-code, including servers, databases, load balancers, monitoring, firewall settings, and SSL certificates"),(0,o.kt)("li",{parentName:"ul"},"Leverage catalog apps and multi-cluster apps"),(0,o.kt)("li",{parentName:"ul"},"Codify infrastructure across many platforms, including Rancher and major cloud providers"),(0,o.kt)("li",{parentName:"ul"},"Commit infrastructure-as-code to version control"),(0,o.kt)("li",{parentName:"ul"},"Easily repeat configuration and setup of infrastructure"),(0,o.kt)("li",{parentName:"ul"},"Incorporate infrastructure changes into standard development practices"),(0,o.kt)("li",{parentName:"ul"},"Prevent configuration drift, in which some servers become configured differently than others")),(0,o.kt)("h1",{id:"how-does-terraform-work"},"How Does Terraform Work?"),(0,o.kt)("p",null,"Terraform is written in files with the extension ",(0,o.kt)("inlineCode",{parentName:"p"},".tf"),". It is written in HashiCorp Configuration Language, which is a declarative language that lets you define the infrastructure you want in your cluster, the cloud provider you are using, and your credentials for the provider. Then Terraform makes API calls to the provider in order to efficiently create that infrastructure."),(0,o.kt)("p",null,"To create a Rancher-provisioned cluster with Terraform, go to your Terraform configuration file and define the provider as Rancher 2. You can set up your Rancher 2 provider with a Rancher API key. Note: The API key has the same permissions and access level as the user it is associated with."),(0,o.kt)("p",null,"Then Terraform calls the Rancher API to provision your infrastructure, and Rancher calls the infrastructure provider. As an example, if you wanted to use Rancher to provision infrastructure on AWS, you would provide both your Rancher API key and your AWS credentials in the Terraform configuration file or in environment variables so that they could be used to provision the infrastructure."),(0,o.kt)("p",null,"When you need to make changes to your infrastructure, instead of manually updating the servers, you can make changes in the Terraform configuration files. Then those files can be committed to version control, validated, and reviewed as necessary. Then when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply"),", the changes would be deployed."),(0,o.kt)("h1",{id:"tips-for-working-with-terraform"},"Tips for Working with Terraform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There are examples of how to provide most aspects of a cluster in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/rancher2/"},"documentation for the Rancher 2 provider."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the Terraform settings, you can install Docker Machine by using the Docker Machine node driver.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can also modify auth in the Terraform provider.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can reverse engineer how to do define a setting in Terraform by changing the setting in Rancher, then going back and checking your Terraform state file to see how it maps to the current state of your infrastructure.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to manage Kubernetes cluster settings, Rancher settings, and hardware settings all in one place, use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/terraform-modules"},"Terraform modules"),". You can pass a cluster configuration YAML file or an RKE template configuration file to a Terraform module so that the Terraform module will create it. In that case, you could use your infrastructure-as-code to manage the version control and revision history of both your Kubernetes cluster and its underlying hardware."))),(0,o.kt)("h1",{id:"tip-for-creating-cis-benchmark-compliant-clusters"},"Tip for Creating CIS Benchmark Compliant Clusters"),(0,o.kt)("p",null,"This section describes one way that you can make security and compliance-related config files standard in your clusters."),(0,o.kt)("p",null,"When you create a ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security"},"CIS benchmark compliant cluster,")," you have an encryption config file and an audit log config file."),(0,o.kt)("p",null,"Your infrastructure provisioning system can write those files to disk. Then in your RKE template, you would specify where those files will be, then add your encryption config file and audit log config file as extra mounts to the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-api-server"),"."),(0,o.kt)("p",null,"Then you would make sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-api-server")," flag in your RKE template uses your CIS-compliant config files."),(0,o.kt)("p",null,"In this way, you can create flags that comply with the CIS benchmark."),(0,o.kt)("h1",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/"},"Terraform documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/providers/rancher2/"},"Rancher2 Terraform provider documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/YNCq-prI8-8"},"The RanchCast - Episode 1: Rancher 2 Terraform Provider"),": In this demo, Director of Community Jason van Brackel walks through using the Rancher 2 Terraform Provider to provision nodes and create a custom cluster.")))}h.isMDXComponent=!0}}]);
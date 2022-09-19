"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78909],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97495:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"Rancher Hetzner Cloud Quick Start Guide",description:"Read this step by step Rancher Hetzner Cloud guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",weight:140},s=void 0,d={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud",id:"getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud",title:"Rancher Hetzner Cloud Quick Start Guide",description:"Read this step by step Rancher Hetzner Cloud guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",source:"@site/docs/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Rancher Hetzner Cloud Quick Start Guide",description:"Read this step by step Rancher Hetzner Cloud guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",weight:140},sidebar:"tutorialSidebar",previous:{title:"Rancher GCP Quick Start Guide",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},next:{title:"Vagrant Quick Start",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Result",id:"result",level:4},{value:"What&#39;s Next?",id:"whats-next",level:3},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following steps will quickly deploy a Rancher server on Hetzner Cloud in a single-node K3s Kubernetes cluster, with a single-node downstream Kubernetes cluster attached."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-and-upgrade"},"Installation"),"."))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deploying to Hetzner Cloud will incur charges."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.hetzner.com"},"Hetzner Cloud Account"),": You will require an account on Hetzner as this is where the server and cluster will run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hetzner.cloud/#getting-started"},"Hetzner API Access Key"),": Use these instructions to create a Hetzner Cloud API Key if you don't have one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),": Used to provision the server and cluster to Hetzner.")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go into the Hetzner folder containing the terraform files by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"cd quickstart/rancher/hcloud"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rename the ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," and customize the following variables:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hcloud_token")," - Hetzner API access key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - Admin password for created Rancher server"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," Modify optional variables within ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/rancher/hcloud"},"Hetzner Quickstart Readme")," for more information.\nSuggestions include:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," - Prefix for all created resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instance_type")," - Instance type, minimum required is ",(0,i.kt)("inlineCode",{parentName:"li"},"cx21")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hcloud_location")," - Hetzner Cloud location, choose the closest instead of the default (",(0,i.kt)("inlineCode",{parentName:"li"},"fsn1"),")"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform init"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To initiate the creation of the environment, run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve"),". Then wait for output similar to the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Apply complete! Resources: 15 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Paste the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," from the output above into the browser. Log in when prompted (default username is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", use the password set in ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"ssh to the Rancher Server using the ",(0,i.kt)("inlineCode",{parentName:"p"},"id_rsa")," key generated in ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/hcloud"),"."))),(0,i.kt)("h4",{id:"result"},"Result"),(0,i.kt)("p",null,"Two Kubernetes clusters are deployed into your Hetzner account, one running Rancher Server and the other ready for experimentation deployments. Please note that while this setup is a great way to explore Rancher functionality, a production setup should follow our high availability setup guidelines. SSH keys for the VMs are auto-generated and stored in the module directory."),(0,i.kt)("h3",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,i.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/hcloud")," folder, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait for confirmation that all resources have been destroyed."))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[15708],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20032:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Rancher GCP Quick Start Guide",description:"Read this step by step Rancher GCP guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",weight:100},s=void 0,p={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/gcp",id:"version-2.5/getting-started/quick-start-guides/deploy-rancher-manager/gcp",title:"Rancher GCP Quick Start Guide",description:"Read this step by step Rancher GCP guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",source:"@site/versioned_docs/version-2.5/getting-started/quick-start-guides/deploy-rancher-manager/gcp.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/gcp",permalink:"/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/gcp",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/quick-start-guides/deploy-rancher-manager/gcp.md",tags:[],version:"2.5",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Rancher GCP Quick Start Guide",description:"Read this step by step Rancher GCP guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",weight:100},sidebar:"tutorialSidebar",previous:{title:"Rancher DigitalOcean Quick Start Guide",permalink:"/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"},next:{title:"Vagrant Quick Start",permalink:"/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Result",id:"result",level:4},{value:"What&#39;s Next?",id:"whats-next",level:3},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following steps will quickly deploy a Rancher server on GCP in a single-node K3s Kubernetes cluster, with a single-node downstream Kubernetes cluster attached."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to Google GCP will incur charges.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"Google GCP Account"),": A Google GCP Account is required to create resources for deploying Rancher and Kubernetes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project"},"Google GCP Project"),": Use this link to follow a tutorial to create a GCP Project if you don't have one yet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Google GCP Service Account"),": Use this link and follow instructions to create a GCP service account and token file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),": Used to provision the server and cluster in Google GCP.")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go into the GCP folder containing the terraform files by executing ",(0,o.kt)("inlineCode",{parentName:"p"},"cd quickstart/gcp"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rename the ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," file to ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," and customize the following variables:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gcp_account_json")," - GCP service account file path and file name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - Admin password for created Rancher server"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional:")," Modify optional variables within ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/gcp"},"GCP Quickstart Readme")," for more information.\nSuggestions include:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- `gcp_region` - Google GCP region, choose the closest instead of the default (`us-east4`)\n- `gcp_zone` - Google GCP zone, choose the closest instead of the default (`us-east4-a`)\n- `prefix` - Prefix for all created resources\n- `machine_type` - Compute instance size used, minimum is `n1-standard-1` but `n1-standard-2` or `n1-standard-4` could be used if within budget\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To initiate the creation of the environment, run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve"),". Then wait for output similar to the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Apply complete! Resources: 16 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," from the output above into the browser. Log in when prompted (default username is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),", use the password set in ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"ssh to the Rancher Server using the ",(0,o.kt)("inlineCode",{parentName:"p"},"id_rsa")," key generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart/gcp"),"."))),(0,o.kt)("h4",{id:"result"},"Result"),(0,o.kt)("p",null,"Two Kubernetes clusters are deployed into your GCP account, one running Rancher Server and the other ready for experimentation deployments. Please note that while this setup is a great way to explore Rancher functionality, a production setup should follow our high availability setup guidelines. SSH keys for the VMs are auto-generated and stored in the module directory."),(0,o.kt)("h3",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,o.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart/gcp")," folder, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for confirmation that all resources have been destroyed."))))}m.isMDXComponent=!0}}]);
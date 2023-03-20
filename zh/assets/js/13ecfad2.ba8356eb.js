"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Creating an Amazon EC2 Cluster",description:"Learn the prerequisites and steps required in order for you to create an Amazon EC2 cluster using Rancher"},s=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",title:"Creating an Amazon EC2 Cluster",description:"Learn the prerequisites and steps required in order for you to create an Amazon EC2 cluster using Rancher",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"Creating an Amazon EC2 Cluster",description:"Learn the prerequisites and steps required in order for you to create an Amazon EC2 cluster using Rancher"},sidebar:"tutorialSidebar",previous:{title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},next:{title:"Creating a DigitalOcean Cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating an EC2 Cluster",id:"creating-an-ec2-cluster",level:2},{value:"1. Create your cloud credentials",id:"1-create-your-cloud-credentials",level:3},{value:"2. Create a node template with your cloud credentials and information from EC2",id:"2-create-a-node-template-with-your-cloud-credentials-and-information-from-ec2",level:3},{value:"3. Create a cluster with node pools using the node template",id:"3-create-a-cluster-with-node-pools-using-the-node-template",level:3},{value:"IAM Policies",id:"iam-policies",level:2},{value:"Example IAM Policy",id:"example-iam-policy",level:3},{value:"Example IAM Policy with PassRole",id:"example-iam-policy-with-passrole",level:3},{value:"Example IAM Policy to allow encrypted EBS volumes",id:"example-iam-policy-to-allow-encrypted-ebs-volumes",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=u("Tabs"),d=u("TabItem"),m={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, you'll learn how to use Rancher to install an ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in Amazon EC2."),(0,a.kt)("p",null,"First, you will set up your EC2 cloud credentials in Rancher. Then you will use your cloud credentials to create a node template, which Rancher will use to provision new nodes in EC2."),(0,a.kt)("p",null,"Then you will create an EC2 cluster in Rancher, and when configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install RKE Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AWS EC2 Access Key and Secret Key")," that will be used to create the instances. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon Documentation: Creating Access Keys")," how to create an Access Key and Secret Key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IAM Policy created")," to add to the user of the Access Key And Secret Key. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon Documentation: Creating IAM Policies (Console)")," how to create an IAM policy. See our three example JSON policies below:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#example-iam-policy"},"Example IAM Policy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#example-iam-policy-with-passrole"},"Example IAM Policy with PassRole")," (needed if you want to use ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," or want to pass an IAM Profile to an instance)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IAM Policy added as Permission")," to the user. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon Documentation: Adding Permissions to a User (Console)")," how to attach it to an user.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Rancher v2.4.6 and v2.4.7 had an issue where the ",(0,a.kt)("inlineCode",{parentName:"p"},"kms:ListKeys")," permission was required to create, edit, or clone Amazon EC2 node templates. This requirement was removed in v2.4.8.")),(0,a.kt)("h2",{id:"creating-an-ec2-cluster"},"Creating an EC2 Cluster"),(0,a.kt)("p",null,"The steps to create a cluster differ based on your Rancher version."),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"Rancher v2.2.0+",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-create-your-cloud-credentials"},"Create your cloud credentials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-create-a-node-template-with-your-cloud-credentials-and-information-from-ec2"},"Create a node template with your cloud credentials and information from EC2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-create-a-cluster-with-node-pools-using-the-node-template"},"Create a cluster with node pools using the node template"))),(0,a.kt)("h3",{id:"1-create-your-cloud-credentials"},"1. Create your cloud credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Cloud Credential.")),(0,a.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential Type")," field, select ",(0,a.kt)("strong",{parentName:"li"},"Amazon.")),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Region")," field, select the AWS region where your cluster nodes will be located."),(0,a.kt)("li",{parentName:"ol"},"Enter your AWS EC2 ",(0,a.kt)("strong",{parentName:"li"},"Access Key")," and ",(0,a.kt)("strong",{parentName:"li"},"Secret Key.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters."),(0,a.kt)("h3",{id:"2-create-a-node-template-with-your-cloud-credentials-and-information-from-ec2"},"2. Create a node template with your cloud credentials and information from EC2"),(0,a.kt)("p",null,"Creating a ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template")," for EC2 will allow Rancher to provision new nodes in EC2. Node templates can be reused for other clusters."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,a.kt)("strong",{parentName:"li"},"Node Templates.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Template.")),(0,a.kt)("li",{parentName:"ol"},"Fill out a node template for EC2. For help filling out the form, refer to ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2"},"EC2 Node Template Configuration."))),(0,a.kt)("h3",{id:"3-create-a-cluster-with-node-pools-using-the-node-template"},"3. Create a cluster with node pools using the node template"),(0,a.kt)("p",null,"Add one or more node pools to your cluster. For more information about node pools, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Amazon EC2"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a node pool for each Kubernetes role. For each node pool, choose a node template that you created. For more information about node pools, including best practices for assigning Kubernetes roles to them, see ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. Refer to ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Selecting Cloud Providers")," to configure the Kubernetes Cloud Provider. For help configuring the cluster, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces"))),(0,a.kt)(d,{value:"Rancher before v2.2.0",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Amazon EC2"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,a.kt)("strong",{parentName:"li"},"Show advanced options.")," Refer to ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Selecting Cloud Providers")," to configure the Kubernetes Cloud Provider. For help configuring the cluster, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. For more information about node pools, including best practices for assigning Kubernetes roles to them, see ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section.")," To create a node template, click ",(0,a.kt)("strong",{parentName:"li"},"Add Node Template"),". For help filling out the node template, refer to ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2"},"EC2 Node Template Configuration.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," Add additional node pools."),(0,a.kt)("li",{parentName:"ol"},"Review your cluster settings to confirm they are correct. Then click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))),"### Optional Next Steps",(0,a.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster.")),(0,a.kt)("h2",{id:"iam-policies"},"IAM Policies"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Rancher v2.4.6 and v2.4.7 had an issue where the ",(0,a.kt)("inlineCode",{parentName:"p"},"kms:ListKeys")," permission was required to create, edit, or clone Amazon EC2 node templates. This requirement was removed in v2.4.8.")),(0,a.kt)("h3",{id:"example-iam-policy"},"Example IAM Policy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:Describe*",\n                "ec2:ImportKeyPair",\n                "ec2:CreateKeyPair",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateTags",\n                "ec2:DeleteKeyPair",\n                "ec2:ModifyInstanceMetadataOptions"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RunInstances"\n            ],\n            "Resource": [\n                "arn:aws:ec2:REGION::image/ami-*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:placement-group/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:subnet/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:key-pair/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:network-interface/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:security-group/*"\n            ]\n        },\n        {\n            "Sid": "VisualEditor2",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RebootInstances",\n                "ec2:TerminateInstances",\n                "ec2:StartInstances",\n                "ec2:StopInstances"\n            ],\n            "Resource": "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"example-iam-policy-with-passrole"},"Example IAM Policy with PassRole"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:Describe*",\n                "ec2:ImportKeyPair",\n                "ec2:CreateKeyPair",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateTags",\n                "ec2:DeleteKeyPair",\n                "ec2:ModifyInstanceMetadataOptions"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole",\n                "ec2:RunInstances"\n            ],\n            "Resource": [\n                "arn:aws:ec2:REGION::image/ami-*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:placement-group/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:subnet/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:key-pair/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:network-interface/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:security-group/*",\n                "arn:aws:iam::AWS_ACCOUNT_ID:role/YOUR_ROLE_NAME"\n            ]\n        },\n        {\n            "Sid": "VisualEditor2",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RebootInstances",\n                "ec2:TerminateInstances",\n                "ec2:StartInstances",\n                "ec2:StopInstances"\n            ],\n            "Resource": "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "kms:Decrypt",\n        "kms:GenerateDataKeyWithoutPlaintext",\n        "kms:Encrypt",\n        "kms:DescribeKey",\n        "kms:CreateGrant",\n        "ec2:DetachVolume",\n        "ec2:AttachVolume",\n        "ec2:DeleteSnapshot",\n        "ec2:DeleteTags",\n        "ec2:CreateTags",\n        "ec2:CreateVolume",\n        "ec2:DeleteVolume",\n        "ec2:CreateSnapshot"\n      ],\n      "Resource": [\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:snapshot/*",\n        "arn:aws:kms:REGION:AWS_ACCOUNT_ID:key/KMS_KEY_ID"\n      ]\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "ec2:DescribeInstances",\n        "ec2:DescribeTags",\n        "ec2:DescribeVolumes",\n        "ec2:DescribeSnapshots"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')))}h.isMDXComponent=!0}}]);
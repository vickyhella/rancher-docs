"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21187],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60728:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Prerequisites",weight:1},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",id:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",title:"Prerequisites",description:"1. Setting Up License Manager and Purchasing Support",source:"@site/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements.md",sourceDirName:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace",slug:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Prerequisites",weight:1},sidebar:"tutorialSidebar",previous:{title:"AWS Marketplace Integration",permalink:"/pages-for-subheaders/aws-cloud-marketplace"},next:{title:"Installing the Adapter",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter"}},u={},p=[{value:"1. Setting Up License Manager and Purchasing Support",id:"1-setting-up-license-manager-and-purchasing-support",level:3},{value:"2. Create an EKS Cluster",id:"2-create-an-eks-cluster",level:3},{value:"3. Install Rancher",id:"3-install-rancher",level:3},{value:"4. Create an OIDC Provider",id:"4-create-an-oidc-provider",level:3},{value:"5. Create an IAM Role",id:"5-create-an-iam-role",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-setting-up-license-manager-and-purchasing-support"},"1. Setting Up License Manager and Purchasing Support"),(0,o.kt)("p",null,"First, complete the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/license-manager/latest/userguide/getting-started.html"},"first step"),' of the license manager one-time setup.\nNext, go to the AWS Marketplace. Locate the "Rancher Premium Support Billing Container Starter Pack". Purchase at least one entitlement.'),(0,o.kt)("p",null,'If you have installed Rancher using the "Rancher Setup" AWS Marketplace offering, skip to ',(0,o.kt)("a",{parentName:"p",href:"#4-create-an-oidc-provider"},"Step 4"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Each entitlement grants access to support for a certain amount of nodes. You can purchase more licenses as necessary later on.")),(0,o.kt)("h3",{id:"2-create-an-eks-cluster"},"2. Create an EKS Cluster"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"},"Rancher docs")," to create an EKS cluster. When you get to the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#8-install-the-rancher-helm-chart"},"final step to install Rancher"),", ",(0,o.kt)("strong",{parentName:"p"},"stop and return to this page"),". This cluster will need to meet the following requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"EKS version 1.22."),(0,o.kt)("li",{parentName:"ul"},"Each node in the cluster has access to the registry containing Rancher and its related images."),(0,o.kt)("li",{parentName:"ul"},"Each node in the cluster has access to the ECR repo storing the CSP Adapter."),(0,o.kt)("li",{parentName:"ul"},"Each node in the cluster has access to the license manager service."),(0,o.kt)("li",{parentName:"ul"},"Each node in the cluster has access to global endpoints for the STS service.")),(0,o.kt)("h3",{id:"3-install-rancher"},"3. Install Rancher"),(0,o.kt)("p",null,"In addition to the options specified to install Rancher in the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#8-install-the-rancher-helm-chart"},"Rancher docs"),", you will also need to enable extra metrics.\nThis can be done through the Helm CLI through the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'--set extraEnv\\[0\\].name="CATTLE_PROMETHEUS_METRICS" --set-string extraEnv\\[0\\].value=true\n')),(0,o.kt)("p",null,"You can also use a values.yaml like the below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'extraEnv:\n  - name: "CATTLE_PROMETHEUS_METRICS"\n    value: "true"\n')),(0,o.kt)("p",null,"You will also need to install Rancher version 2.6.7 or higher."),(0,o.kt)("h3",{id:"4-create-an-oidc-provider"},"4. Create an OIDC Provider"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html"},"AWS documentation")," to create an OIDC provider for the cluster specified in the previous section."),(0,o.kt)("h3",{id:"5-create-an-iam-role"},"5. Create an IAM Role"),(0,o.kt)("p",null,"An IAM role is required for the CSP adapter to check-in/check-out entitlements."),(0,o.kt)("p",null,"First, configure the trust policy as below. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_AWS_ACC")," with your AWS account number, ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_AWS_REGION")," with your AWS region, and ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_OIDC_PROVIDER")," with the id of your OIDC provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Principal": {\n                "Federated": "arn:aws:iam::${MY_AWS_ACC}:oidc-provider/oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}"\n            },\n            "Action": "sts:AssumeRoleWithWebIdentity",\n            "Condition": {\n                "StringEquals": {\n                    "oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}:sub": "system:serviceaccount:cattle-csp-adapter-system:rancher-csp-adapter",\n                    "oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}:aud": "sts.amazonaws.com"\n                }\n            }\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Next, use a policy for the role which has the following permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "RancherCSPAdapterPermissions",\n            "Effect": "Allow",\n            "Action": [\n                "license-manager:ListReceivedLicenses",\n                "license-manager:CheckoutLicense",\n                "license-manager:ExtendLicenseConsumption",\n                "license-manager:CheckInLicense",\n                "license-manager:GetLicense",\n                "license-manager:GetLicenseUsage"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Save the name of the role. You will need it later on when installing the CSP adapter."))}m.isMDXComponent=!0}}]);
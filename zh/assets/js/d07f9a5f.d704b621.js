"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42459],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"EC2 \u4e3b\u673a\u914d\u7f6e\u53c2\u8003",weight:2},c=void 0,l={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2",title:"EC2 \u4e3b\u673a\u914d\u7f6e\u53c2\u8003",description:"\u6709\u5173 EC2 \u548c\u8282\u70b9\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 EC2 \u7ba1\u7406\u63a7\u5236\u53f0\u7684\u5b98\u65b9\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"EC2 \u4e3b\u673a\u914d\u7f6e\u53c2\u8003",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u673a\u914d\u7f6e",permalink:"/zh/pages-for-subheaders/machine-configuration"},next:{title:"DigitalOcean \u4e3b\u673a\u914d\u7f6e",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean"}},u={},p=[{value:"\u533a\u57df",id:"\u533a\u57df",level:3},{value:"\u5730\u533a",id:"\u5730\u533a",level:3},{value:"\u5b9e\u4f8b\u7c7b\u578b",id:"\u5b9e\u4f8b\u7c7b\u578b",level:3},{value:"\u6839\u78c1\u76d8\u5927\u5c0f",id:"\u6839\u78c1\u76d8\u5927\u5c0f",level:3},{value:"VPC/\u5b50\u7f51",id:"vpc\u5b50\u7f51",level:3},{value:"IAM \u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u540d\u79f0",id:"iam-\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u540d\u79f0",level:3},{value:"\u9ad8\u7ea7\u9009\u9879",id:"\u9ad8\u7ea7\u9009\u9879",level:2},{value:"AMI ID",id:"ami-id",level:3},{value:"\u7528\u4e8e AMI \u7684 SSH \u7528\u6237\u540d",id:"\u7528\u4e8e-ami-\u7684-ssh-\u7528\u6237\u540d",level:3},{value:"\u5b89\u5168\u7ec4",id:"\u5b89\u5168\u7ec4",level:3},{value:"EBS \u6839\u5377\u7c7b\u578b",id:"ebs-\u6839\u5377\u7c7b\u578b",level:3},{value:"\u52a0\u5bc6 EBS \u5377",id:"\u52a0\u5bc6-ebs-\u5377",level:3},{value:"\u8bf7\u6c42 Spot \u5b9e\u4f8b",id:"\u8bf7\u6c42-spot-\u5b9e\u4f8b",level:3},{value:"\u4ec5\u4f7f\u7528\u79c1\u6709\u5730\u5740",id:"\u4ec5\u4f7f\u7528\u79c1\u6709\u5730\u5740",level:3},{value:"EBS \u4f18\u5316\u5b9e\u4f8b",id:"ebs-\u4f18\u5316\u5b9e\u4f8b",level:3},{value:"\u5141\u8bb8\u8bbf\u95ee EC2 \u5143\u6570\u636e",id:"\u5141\u8bb8\u8bbf\u95ee-ec2-\u5143\u6570\u636e",level:3},{value:"\u4e3a\u5143\u6570\u636e\u4f7f\u7528 Token",id:"\u4e3a\u5143\u6570\u636e\u4f7f\u7528-token",level:3},{value:"\u6dfb\u52a0\u6807\u7b7e",id:"\u6dfb\u52a0\u6807\u7b7e",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6709\u5173 EC2 \u548c\u8282\u70b9\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},"EC2 \u7ba1\u7406\u63a7\u5236\u53f0"),"\u7684\u5b98\u65b9\u6587\u6863\u3002"),(0,i.kt)("h3",{id:"\u533a\u57df"},"\u533a\u57df"),(0,i.kt)("p",null,"\u6784\u5efa\u96c6\u7fa4\u7684\u5730\u7406",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"},"\u533a\u57df"),"\u3002"),(0,i.kt)("h3",{id:"\u5730\u533a"},"\u5730\u533a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones"},"\u5730\u533a"),"\uff0c\u4e00\u4e2a\u533a\u57df\u5185\u7528\u4e8e\u6784\u5efa\u96c6\u7fa4\u7684\u9694\u79bb\u4f4d\u7f6e\u3002"),(0,i.kt)("h3",{id:"\u5b9e\u4f8b\u7c7b\u578b"},"\u5b9e\u4f8b\u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html"},"\u5b9e\u4f8b\u7c7b\u578b"),"\u7528\u4e8e\u914d\u7f6e\u96c6\u7fa4\uff0c\u80fd\u786e\u5b9a\u786c\u4ef6\u7279\u6027\u3002"),(0,i.kt)("h3",{id:"\u6839\u78c1\u76d8\u5927\u5c0f"},"\u6839\u78c1\u76d8\u5927\u5c0f"),(0,i.kt)("p",null,"\u914d\u7f6e",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/RootDeviceStorage.html"},"\u6839\u8bbe\u5907"),"\u7684\u5927\u5c0f\uff08\u4ee5 GB \u4e3a\u5355\u4f4d\uff09\u3002"),(0,i.kt)("h3",{id:"vpc\u5b50\u7f51"},"VPC/\u5b50\u7f51"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html"},"VPC")," \u6216\u7279\u5b9a\u7684",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html"},"\u5b50\u7f51"),"\uff08VPC \u4e2d\u7684\u4e00\u4e2a IP \u8303\u56f4\uff09\uff0c\u7528\u4e8e\u6dfb\u52a0\u4f60\u7684\u8d44\u6e90\u3002"),(0,i.kt)("h3",{id:"iam-\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u540d\u79f0"},"IAM \u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u540d\u79f0"),(0,i.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\uff0c\u7528\u4e8e\u5c06 IAM \u89d2\u8272\u4f20\u9012\u7ed9 EC2 \u5b9e\u4f8b\u3002"),(0,i.kt)("h2",{id:"\u9ad8\u7ea7\u9009\u9879"},"\u9ad8\u7ea7\u9009\u9879"),(0,i.kt)("h3",{id:"ami-id"},"AMI ID"),(0,i.kt)("p",null,"\u7528\u4e8e\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"},"Amazon Machine Image\uff08AMI\uff09"),"\u3002"),(0,i.kt)("h3",{id:"\u7528\u4e8e-ami-\u7684-ssh-\u7528\u6237\u540d"},"\u7528\u4e8e AMI \u7684 SSH \u7528\u6237\u540d"),(0,i.kt)("p",null,"\u7528\u4e8e\u8fde\u63a5\u5230\u4f60\u542f\u52a8\u7684\u5b9e\u4f8b\u7684\u7528\u6237\u540d\u3002\u6709\u5173\u9009\u5b9a AMI \u7684\u9ed8\u8ba4\u7528\u6237\u540d\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html"},"\u6b64\u5904"),"\u3002\u5bf9\u4e8e\u672a\u5217\u51fa\u7684 AMI\uff0c\u8bf7\u54a8\u8be2 AMI \u63d0\u4f9b\u5546\u3002"),(0,i.kt)("h3",{id:"\u5b89\u5168\u7ec4"},"\u5b89\u5168\u7ec4"),(0,i.kt)("p",null,"\u9009\u62e9\u9ed8\u8ba4\u5b89\u5168\u7ec4\u6216\u914d\u7f6e\u5b89\u5168\u7ec4\u3002"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rancher-aws-ec2-%E5%AE%89%E5%85%A8%E7%BB%84"},"\u4f7f\u7528\u4e3b\u673a\u9a71\u52a8\u65f6\u7684 Amazon EC2 \u5b89\u5168\u7ec4"),"\uff0c\u4e86\u89e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-nodes")," \u5b89\u5168\u7ec4\u4e2d\u521b\u5efa\u7684\u89c4\u5219\u3002"),(0,i.kt)("h3",{id:"ebs-\u6839\u5377\u7c7b\u578b"},"EBS \u6839\u5377\u7c7b\u578b"),(0,i.kt)("p",null,"\u7528\u4e8e\u6839\u8bbe\u5907\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html"},"EBS \u5377\u7c7b\u578b"),"\u3002"),(0,i.kt)("h3",{id:"\u52a0\u5bc6-ebs-\u5377"},"\u52a0\u5bc6 EBS \u5377"),(0,i.kt)("p",null,"\u542f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html"},"Amazon EBS \u52a0\u5bc6"),"\u3002"),(0,i.kt)("h3",{id:"\u8bf7\u6c42-spot-\u5b9e\u4f8b"},"\u8bf7\u6c42 Spot \u5b9e\u4f8b"),(0,i.kt)("p",null,"\u5f00\u542f",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html"},"\u8bf7\u6c42 Spot \u5b9e\u4f8b"),"\u9009\u9879\uff0c\u5e76\u6307\u5b9a\u4f60\u613f\u610f\u652f\u4ed8\u7684\u6700\u9ad8\u5b9e\u4f8b\u4ef7\u683c\uff08\u6bcf\u5c0f\u65f6\uff09\u3002"),(0,i.kt)("h3",{id:"\u4ec5\u4f7f\u7528\u79c1\u6709\u5730\u5740"},"\u4ec5\u4f7f\u7528\u79c1\u6709\u5730\u5740"),(0,i.kt)("p",null,"\u542f\u7528\u4ec5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html"},"\u79c1\u4eba\u5730\u5740"),"\u7684\u9009\u9879\u3002"),(0,i.kt)("h3",{id:"ebs-\u4f18\u5316\u5b9e\u4f8b"},"EBS \u4f18\u5316\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html"},"EBS \u4f18\u5316\u5b9e\u4f8b"),"\u3002"),(0,i.kt)("h3",{id:"\u5141\u8bb8\u8bbf\u95ee-ec2-\u5143\u6570\u636e"},"\u5141\u8bb8\u8bbf\u95ee EC2 \u5143\u6570\u636e"),(0,i.kt)("p",null,"\u542f\u7528\u5bf9 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html"},"EC2 \u5143\u6570\u636e"),"\u7684\u8bbf\u95ee\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u5143\u6570\u636e\u4f7f\u7528-token"},"\u4e3a\u5143\u6570\u636e\u4f7f\u7528 Token"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html"},"Instance Metadata Service Version 2 (IMDSv2)"),"\uff0c\u5373\u57fa\u4e8e\u4ee4\u724c\u8bbf\u95ee\u5143\u6570\u636e\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u6807\u7b7e"},"\u6dfb\u52a0\u6807\u7b7e"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html"},"\u6807\u7b7e"),"\u6dfb\u52a0\u5143\u6570\u636e\uff0c\u4ece\u800c\u5bf9\u8d44\u6e90\u8fdb\u884c\u5206\u7c7b\u3002"))}d.isMDXComponent=!0}}]);
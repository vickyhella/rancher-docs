"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25080],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,k=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5709:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={title:"Rancher GCP \u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\u9605\u8bfb\u6b64\u5206\u6b65 Rancher GCP \u6307\u5357\uff0c\u4ee5\u5feb\u901f\u90e8\u7f72\u5e26\u6709\u5355\u8282\u70b9\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 Rancher Server\u3002",weight:130},l=void 0,c={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/gcp",id:"getting-started/quick-start-guides/deploy-rancher-manager/gcp",title:"Rancher GCP \u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\u9605\u8bfb\u6b64\u5206\u6b65 Rancher GCP \u6307\u5357\uff0c\u4ee5\u5feb\u901f\u90e8\u7f72\u5e26\u6709\u5355\u8282\u70b9\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 Rancher Server\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/quick-start-guides/deploy-rancher-manager/gcp.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/gcp",permalink:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/gcp",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-rancher-manager/gcp.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Rancher GCP \u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\u9605\u8bfb\u6b64\u5206\u6b65 Rancher GCP \u6307\u5357\uff0c\u4ee5\u5feb\u901f\u90e8\u7f72\u5e26\u6709\u5355\u8282\u70b9\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 Rancher Server\u3002",weight:130},sidebar:"tutorialSidebar",previous:{title:"Rancher DigitalOcean \u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"},next:{title:"Rancher Hetzner Cloud \u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud"}},m={},d=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528",level:2},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",level:4},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3},{value:"\u9500\u6bc1\u73af\u5883",id:"\u9500\u6bc1\u73af\u5883",level:2}],s={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u5728 GCP \u7684\u5355\u8282\u70b9 K3s Kubernetes \u96c6\u7fa4\u4e2d\u5feb\u901f\u90e8\u7f72 Rancher Server\uff0c\u5e76\u9644\u52a0\u4e00\u4e2a\u5355\u8282\u70b9\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u7ae0\u8282\u4e2d\u63d0\u4f9b\u7684\u6307\u5357\uff0c\u65e8\u5728\u5e2e\u52a9\u4f60\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u7528\u4e8e Rancher \u7684\u6c99\u76d2\uff0c\u4ee5\u8bc4\u4f30 Rancher \u662f\u5426\u80fd\u6ee1\u8db3\u4f60\u7684\u4f7f\u7528\u9700\u6c42\u3002\u5feb\u901f\u5165\u95e8\u6307\u5357\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002\u5982\u679c\u4f60\u9700\u8981\u83b7\u53d6\u751f\u4ea7\u73af\u5883\u7684\u64cd\u4f5c\u6307\u5bfc\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-and-upgrade"},"\u5b89\u88c5"),"\u3002"))),(0,i.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u90e8\u7f72\u5230 Google GCP \u4f1a\u4ea7\u751f\u8d39\u7528\u3002"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"Google GCP Account"),"\uff1a\u7528\u4e8e\u521b\u5efa\u90e8\u7f72 Rancher \u548c Kubernetes \u7684\u8d44\u6e90\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project"},"Google GCP \u9879\u76ee"),"\uff1a\u5982\u679c\u4f60\u6ca1\u6709\u7684\u8bdd\uff0c\u8bf7\u8bbf\u95ee\u6b64\u94fe\u63a5\u67e5\u770b\u5982\u4f55\u521b\u5efa GCP \u9879\u76ee\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Google GCP  ServiceAccount"),"\uff1a\u8bf7\u8bbf\u95ee\u6b64\u94fe\u63a5\u67e5\u770b\u5982\u4f55\u521b\u5efa GCP  ServiceAccount \u548c Token \u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),"\uff1a\u7528\u4e8e\u5728 Google GCP \u4e2d\u914d\u7f6e\u670d\u52a1\u5668\u548c\u96c6\u7fa4\u3002")),(0,i.kt)("h2",{id:"\u5f00\u59cb\u4f7f\u7528"},"\u5f00\u59cb\u4f7f\u7528"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart")," \u628a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," \u514b\u9686\u5230\u672c\u5730\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"cd quickstart/rancher/gcp")," \u547d\u4ee4\uff0c\u8fdb\u5165\u5305\u542b terraform \u6587\u4ef6\u7684 GCP \u6587\u4ef6\u5939\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," \u6587\u4ef6\u91cd\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7f16\u8f91 ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," \u6587\u4ef6\uff0c\u5e76\u66ff\u6362\u4ee5\u4e0b\u53d8\u91cf\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcp_account_json")," - \u66ff\u6362\u4e3a GCP ServiceAccount \u6587\u4ef6\u8def\u5f84\u548c\u6587\u4ef6\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - \u66ff\u6362\u4e3a\u521b\u5efa Rancher Server \u7684 admin \u8d26\u53f7\u7684\u5bc6\u7801"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u53ef\u9009"),"\uff1a\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," \u4e2d\u7684\u53ef\u9009\u53c2\u6570\u3002\n\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," \u4ee5\u53ca ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/rancher/gcp"},"GCP Quickstart Readme")," \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\n\u5efa\u8bae\u5305\u62ec\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcp_region")," - Google GCP \u533a\u57df\u3002GCP \u7684\u9ed8\u8ba4\u533a\u57df (",(0,i.kt)("inlineCode",{parentName:"li"},"us-east4"),") \u4e0d\u4e00\u5b9a\u662f\u8ddd\u79bb\u4f60\u6700\u8fd1\u7684\u533a\u57df\u3002\u5efa\u8bae\u4fee\u6539\u4e3a\u8ddd\u79bb\u4f60\u6700\u8fd1\u7684\u533a\u57df\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcp_zone")," - Google GCP \u533a\u57df\u3002GCP \u7684\u9ed8\u8ba4\u533a\u57df (",(0,i.kt)("inlineCode",{parentName:"li"},"us-east4-a"),") \u4e0d\u4e00\u5b9a\u662f\u8ddd\u79bb\u4f60\u6700\u8fd1\u7684\u533a\u57df\u3002\u5efa\u8bae\u4fee\u6539\u4e3a\u8ddd\u79bb\u4f60\u6700\u8fd1\u7684\u533a\u57df\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," - \u6240\u6709\u521b\u5efa\u8d44\u6e90\u7684\u524d\u7f00"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"machine_type")," - \u4f7f\u7528\u7684\u8ba1\u7b97\u5b9e\u4f8b\u5927\u5c0f\uff0c\u6700\u5c0f\u89c4\u683c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"n1-standard-1"),"\u3002\u5982\u679c\u5728\u9884\u7b97\u8303\u56f4\u5185\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"n1-standard-2")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"n1-standard-4"),"\u3002"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform init"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve")," \u4ee5\u521d\u59cb\u5316\u73af\u5883\u3002\u7136\u540e\uff0c\u7b49\u5f85\u547d\u4ee4\u884c\u5de5\u5177\u8fd4\u56de\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Apply complete! Resources: 16 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u4ee5\u4e0a\u8f93\u51fa\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," \u7c98\u8d34\u5230\u6d4f\u89c8\u5668\u4e2d\u3002\u5728\u767b\u5f55\u9875\u9762\u4e2d\u767b\u5f55\uff08\u9ed8\u8ba4\u7528\u6237\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"\uff0c\u5bc6\u7801\u4e3a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password")," \u4e2d\u8bbe\u7f6e\u7684\u5bc6\u7801\uff09\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/gcp")," \u4e2d\u751f\u6210\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"id_rsa")," \u5bc6\u94a5 SSH \u5230 Rancher Server\u3002"))),(0,i.kt)("h4",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,i.kt)("p",null,"\u4e24\u4e2a Kubernetes \u96c6\u7fa4\u5df2\u90e8\u7f72\u5230\u4f60\u7684 GCP \u8d26\u6237\u4e2d\uff0c\u4e00\u4e2a\u8fd0\u884c Rancher Server\uff0c\u53e6\u4e00\u4e2a\u4e3a\u5b9e\u9a8c\u90e8\u7f72\u505a\u597d\u51c6\u5907\u3002\u8bf7\u6ce8\u610f\uff0c\u867d\u7136\u8fd9\u79cd\u8bbe\u7f6e\u662f\u63a2\u7d22 Rancher \u529f\u80fd\u7684\u597d\u65b9\u6cd5\uff0c\u4f46\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5e94\u9075\u5faa\u6211\u4eec\u7684\u9ad8\u53ef\u7528\u8bbe\u7f6e\u6307\u5357\u3002\u7528\u4e8e\u865a\u62df\u673a\u7684 SSH \u5bc6\u94a5\u662f\u81ea\u52a8\u751f\u6210\u7684\uff0c\u5b58\u50a8\u5728\u6a21\u5757\u76ee\u5f55\u4e2d\u3002"),(0,i.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,i.kt)("p",null,"\u4f7f\u7528 Rancher \u521b\u5efa deployment\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/deploy-rancher-workloads"},"\u521b\u5efa Deployment"),"\u3002"),(0,i.kt)("h2",{id:"\u9500\u6bc1\u73af\u5883"},"\u9500\u6bc1\u73af\u5883"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fdb\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/gcp")," \u6587\u4ef6\u5939\uff0c\u7136\u540e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7b49\u5f85\u547d\u4ee4\u884c\u754c\u9762\u663e\u793a\u8d44\u6e90\u5df2\u5220\u9664\u7684\u6d88\u606f\u3002"))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9726],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94383:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],u={title:"\u8bbe\u7f6e Google Compute Engine \u4e91\u63d0\u4f9b\u5546"},s=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",title:"\u8bbe\u7f6e Google Compute Engine \u4e91\u63d0\u4f9b\u5546",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u5728 Rancher \u4e2d\u4e3a\u81ea\u5b9a\u4e49\u96c6\u7fa4\u542f\u7528 Google Compute Engine (GCE) \u4e91\u63d0\u4f9b\u5546\u3002\u81ea\u5b9a\u4e49\u96c6\u7fa4\u6307\u7684\u662f Rancher \u5728\u73b0\u6709\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes \u7684\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"\u8bbe\u7f6e Google Compute Engine \u4e91\u63d0\u4f9b\u5546"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure"},next:{title:"\u914d\u7f6e\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"}},p={},l=[],d={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u5728 Rancher \u4e2d\u4e3a\u81ea\u5b9a\u4e49\u96c6\u7fa4\u542f\u7528 Google Compute Engine (GCE) \u4e91\u63d0\u4f9b\u5546\u3002\u81ea\u5b9a\u4e49\u96c6\u7fa4\u6307\u7684\u662f Rancher \u5728\u73b0\u6709\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes \u7684\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#gce"},"GCE \u4e91\u63d0\u4f9b\u5546\u7684\u5b98\u65b9 Kubernetes \u6587\u6863"),"\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"GCE \u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Identity")," ServiceAccount \u548c API \u8bbf\u95ee\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"Computer Admin"),"\u6743\u9650\u3002"))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Calico\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8fdb\u5165\u81ea\u5b9a\u4e49\u96c6\u7fa4\uff0c\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91 YAML")," \u5e76\u8f93\u5165\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: gce\n    customCloudProvider: |-\n      [Global]\n      project-id=<your project ID, optional>\n      network-name=<your network, optional if using default network>\n      subnetwork-name=<your subnetwork of the above network, optional if using default network>\n      node-instance-prefix=<your instance group name/your instance name specific prefix, required>\n      node-tags=<your network tags, must patch one or some tags, required>\n  network:\n    options:\n      calico_cloud_provider: "gce"\n    plugin: "calico"\n')))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Canal \u6216 Flannel\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8fdb\u5165\u81ea\u5b9a\u4e49\u96c6\u7fa4\uff0c\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91 YAML")," \u5e76\u8f93\u5165\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: gce\n    customCloudProvider: |-\n      [Global]\n      project-id=<your project ID, optional>\n      network-name=<your network, optional if using default network>\n      subnetwork-name=<your subnetwork of the above network, optional if using default network>\n      node-instance-prefix=<your instance group name/your instance name specific prefix, required>\n      node-tags=<your network tags, must patch one or some tags, required>\n  services:\n    kube_controller:\n      extra_args:\n        configure-cloud-routes: true # we need to allow the cloud provider configure the routes for the hosts\n")))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41830],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49341:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"RKE1 Example YAML",weight:60},s=void 0,c={unversionedId:"reference-guides/rke1-template-example-yaml",id:"version-2.0-2.4/reference-guides/rke1-template-example-yaml",title:"RKE1 Example YAML",description:"Below is an example RKE template configuration file for reference.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/rke1-template-example-yaml.md",sourceDirName:"reference-guides",slug:"/reference-guides/rke1-template-example-yaml",permalink:"/v2.0-v2.4/reference-guides/rke1-template-example-yaml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/rke1-template-example-yaml.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"RKE1 Example YAML",weight:60},sidebar:"tutorialSidebar",previous:{title:"System Tools",permalink:"/v2.0-v2.4/reference-guides/system-tools"},next:{title:"Pipelines",permalink:"/v2.0-v2.4/pages-for-subheaders/pipelines"}},u={},p=[],f={toc:p};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Below is an example RKE template configuration file for reference."),(0,i.kt)("p",null,"The YAML in the RKE template uses the same customization that is used when you create an RKE cluster. However, since the YAML is within the context of a Rancher provisioned RKE cluster, the customization from the RKE docs needs to be nested under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine")," directive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# \n# Cluster Config\n# \ndocker_root_dir: /var/lib/docker\n\nenable_cluster_alerting: false\n# This setting is not enforced. Clusters\n# created with this sample template\n# would have alerting turned off by default,\n# but end users could still turn alerting\n# on or off.\n\nenable_cluster_monitoring: true \n# This setting is not enforced. Clusters\n# created with this sample template\n# would have monitoring turned on\n# by default, but end users could still\n# turn monitoring on or off.\n\nenable_network_policy: false\nlocal_cluster_auth_endpoint:\n  enabled: true\n# \n# Rancher Config\n# \nrancher_kubernetes_engine_config: # Your RKE template config goes here.\n  addon_job_timeout: 30\n  authentication:\n    strategy: x509\n  ignore_docker_version: true\n# \n# # Currently only nginx ingress provider is supported.\n# # To disable ingress controller, set `provider: none`\n# # To enable ingress on specific nodes, use the node_selector, eg:\n#    provider: nginx\n#    node_selector:\n#      app: ingress\n# \n  ingress:\n    provider: nginx\n  kubernetes_version: v1.15.3-rancher3-1\n  monitoring:\n    provider: metrics-server\n# \n#   If you are using calico on AWS\n# \n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n# \n# # To specify flannel interface\n# \n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n# \n# # To specify flannel interface for canal plugin\n# \n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n# \n  network:\n    options:\n      flannel_backend_type: vxlan\n    plugin: canal\n# \n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n# \n  services:\n    etcd:\n      backup_config:\n        enabled: true\n        interval_hours: 12\n        retention: 6\n        safe_timestamp: false\n      creation: 12h\n      extra_args:\n        election-timeout: 5000\n        heartbeat-interval: 500\n      gid: 0\n      retention: 72h\n      snapshot: false\n      uid: 0\n    kube_api:\n      always_pull_images: false\n      pod_security_policy: false\n      service_node_port_range: 30000-32767\n  ssh_agent_auth: false\nwindows_prefered_cluster: false\n")))}d.isMDXComponent=!0}}]);
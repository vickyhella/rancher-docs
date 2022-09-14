"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59694],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={title:"3. Install Kubernetes with RKE (Kubernetes Installs Only)",weight:300,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/install-kube","/rancher/v2.0-v2.4/en/installation/options/air-gap-helm2/launch-kubernetes","/rancher/v2.x/en/installation/resources/advanced/air-gap-helm2/launch-kubernetes/"]},o=void 0,u={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/launch-kubernetes",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/launch-kubernetes",title:"3. Install Kubernetes with RKE (Kubernetes Installs Only)",description:"This section is about how to prepare to launch a Kubernetes cluster which is used to deploy Rancher server for your air gapped environment.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/launch-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/launch-kubernetes",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/launch-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/launch-kubernetes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"3. Install Kubernetes with RKE (Kubernetes Installs Only)",weight:300,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/install-kube","/rancher/v2.0-v2.4/en/installation/options/air-gap-helm2/launch-kubernetes","/rancher/v2.x/en/installation/resources/advanced/air-gap-helm2/launch-kubernetes/"]},sidebar:"tutorialSidebar",previous:{title:"2. Collect and Publish Images to your Private Registry",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry"},next:{title:"4. Install Rancher",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/install-rancher"}},c={},d=[{value:"A. Create an RKE Config File",id:"a-create-an-rke-config-file",level:3},{value:"B. Run RKE",id:"b-run-rke",level:3},{value:"C. Save Your Files",id:"c-save-your-files",level:3},{value:"Next: Install Rancher",id:"next-install-rancher",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This section is about how to prepare to launch a Kubernetes cluster which is used to deploy Rancher server for your air gapped environment."),(0,l.kt)("p",null,"Since a Kubernetes Installation requires a Kubernetes cluster, we will create a Kubernetes cluster using ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine")," (RKE). Before being able to start your Kubernetes cluster, you'll need to ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"install RKE")," and create a RKE config file."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#a-create-an-rke-config-file"},"A. Create an RKE Config File")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#b-run-rke"},"B. Run RKE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#c-save-your-files"},"C. Save Your Files"))),(0,l.kt)("h3",{id:"a-create-an-rke-config-file"},"A. Create an RKE Config File"),(0,l.kt)("p",null,"From a system that can access ports 22/tcp and 6443/tcp on your host nodes, use the sample below to create a new file named ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),". This file is a Rancher Kubernetes Engine configuration file (RKE config file), which is a configuration for the cluster you're deploying Rancher to."),(0,l.kt)("p",null,"Replace values in the code sample below with help of the ",(0,l.kt)("em",{parentName:"p"},"RKE Options")," table. Use the IP address or DNS names of the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes"},"3 nodes")," you created."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Tip:")," For more details on the options available, see the RKE ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"Config Options"),".")),(0,l.kt)("figcaption",null,"RKE Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS or IP address for the node within the air gap network.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"A user that can run docker commands.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"role")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"List of Kubernetes roles assigned to the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"internal_address")),(0,l.kt)("td",{parentName:"tr",align:null},"optional",(0,l.kt)("sup",null,"1")),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS or IP address used for internal cluster traffic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ssh_key_path")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Path to SSH private key used to authenticate to the node (defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa"),").")))),(0,l.kt)("blockquote",null,(0,l.kt)("sup",null,"1")," Some services like AWS EC2 require setting the `internal_address` if you want to use self-referencing security groups or firewalls."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n  - address: 10.10.3.187 # node air gap network IP\n    internal_address: 172.31.7.22 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n  - address: 10.10.3.254 # node air gap network IP\n    internal_address: 172.31.13.132 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n  - address: 10.10.3.89 # node air gap network IP\n    internal_address: 172.31.3.216 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n\nprivate_registries:\n  - url: <REGISTRY.YOURDOMAIN.COM:PORT> # private registry url\n    user: rancher\n    password: '*********'\n    is_default: true\n")),(0,l.kt)("h3",{id:"b-run-rke"},"B. Run RKE"),(0,l.kt)("p",null,"After configuring ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),", bring up your Kubernetes cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rke up --config ./rancher-cluster.yml\n")),(0,l.kt)("h3",{id:"c-save-your-files"},"C. Save Your Files"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important"),"\nThe files mentioned below are needed to maintain, troubleshoot and upgrade your cluster.")),(0,l.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube_config_rancher-cluster.yml"),": The ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains credentials for full access to the cluster.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"li"},"The Kubernetes Cluster State file is only created when using RKE v0.2.0 or higher."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),' The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.')),(0,l.kt)("h3",{id:"next-install-rancher"},(0,l.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Next: Install Rancher")))}h.isMDXComponent=!0}}]);
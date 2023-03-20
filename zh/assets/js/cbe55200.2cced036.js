"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(r),p=a,b=h["".concat(o,".").concat(p)]||h[p]||d[p]||i;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},17207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"About High-availability Installations"},s=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs",title:"About High-availability Installations",description:"We recommend using Helm, a Kubernetes package manager, to install Rancher on a dedicated Kubernetes cluster. This is called a high-availability Kubernetes installation because increased availability is achieved by running Rancher on multiple nodes.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"About High-availability Installations"},sidebar:"tutorialSidebar",previous:{title:"Don't have a Kubernetes cluster? Try one of these tutorials.",permalink:"/zh/v2.5/pages-for-subheaders/kubernetes-cluster-setup"},next:{title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher"}},o={},c=[{value:"Recommended Architecture",id:"recommended-architecture",level:3}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We recommend using Helm, a Kubernetes package manager, to install Rancher on a dedicated Kubernetes cluster. This is called a high-availability Kubernetes installation because increased availability is achieved by running Rancher on multiple nodes."),(0,a.kt)("p",null,"In a standard installation, Kubernetes is first installed on three nodes that are hosted in an infrastructure provider such as Amazon's EC2 or Google Compute Engine."),(0,a.kt)("p",null,"Then Helm is used to install Rancher on top of the Kubernetes cluster. Helm uses Rancher's Helm chart to install a replica of Rancher on each of the three nodes in the Kubernetes cluster. We recommend using a load balancer to direct traffic to each replica of Rancher in the cluster, in order to increase Rancher's availability."),(0,a.kt)("p",null,"The Rancher server data is stored on etcd. This etcd database also runs on all three nodes, and requires an odd number of nodes so that it can always elect a leader with a majority of the etcd cluster. If the etcd database cannot elect a leader, etcd can fail, requiring the cluster to be restored from backup."),(0,a.kt)("p",null,"For information on how Rancher works, regardless of the installation method, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-manager-architecture"},"architecture section.")),(0,a.kt)("h3",{id:"recommended-architecture"},"Recommended Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DNS for Rancher should resolve to a layer 4 load balancer"),(0,a.kt)("li",{parentName:"ul"},"The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},"The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443."),(0,a.kt)("li",{parentName:"ul"},"The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.")),(0,a.kt)("figcaption",null,"Kubernetes Rancher install with layer 4 load balancer, depicting SSL termination at ingress controllers"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High-availability Kubernetes Installation of Rancher",src:r(86089).Z,width:"1236",height:"525"})),(0,a.kt)("sup",null,"Kubernetes Rancher install with Layer 4 load balancer (TCP), depicting SSL termination at ingress controllers"))}d.isMDXComponent=!0},86089:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher2ha-109862fddef6042942f103cfc94d892b.svg"}}]);
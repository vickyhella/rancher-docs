"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80395],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=c(n),d=o,m=b["".concat(u,".").concat(d)]||b[d]||p[d]||s;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72191:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={title:"Kubernetes Components",weight:100,aliases:["/rancher/v2.x/en/troubleshooting/kubernetes-components/"]},u=void 0,c={unversionedId:"pages-for-subheaders/kubernetes-components",id:"version-2.5/pages-for-subheaders/kubernetes-components",title:"Kubernetes Components",description:"The commands and steps listed in this section apply to the core Kubernetes components on Rancher Launched Kubernetes clusters.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/kubernetes-components.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/kubernetes-components",permalink:"/v2.5/pages-for-subheaders/kubernetes-components",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/kubernetes-components.md",tags:[],version:"2.5",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Kubernetes Components",weight:100,aliases:["/rancher/v2.x/en/troubleshooting/kubernetes-components/"]},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/v2.5/troubleshooting"},next:{title:"Troubleshooting etcd Nodes",permalink:"/v2.5/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"}},l={},p=[],b={toc:p};function d(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The commands and steps listed in this section apply to the core Kubernetes components on ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," clusters."),(0,s.kt)("p",null,"This section includes troubleshooting tips in the following categories:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.5/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"},"Troubleshooting etcd Nodes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.5/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes"},"Troubleshooting Controlplane Nodes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.5/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"},"Troubleshooting nginx-proxy Nodes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.5/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components"},"Troubleshooting Worker Nodes and Generic Components"))),(0,s.kt)("h1",{id:"kubernetes-component-diagram"},"Kubernetes Component Diagram"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Cluster diagram",src:n(56492).Z,width:"772",height:"1145"}),(0,s.kt)("br",null)),(0,s.kt)("sup",null,"Lines show the traffic flow between components. Colors are used purely for visual aid"))}d.isMDXComponent=!0},56492:function(e,t,n){t.Z=n.p+"assets/images/clusterdiagram-2b66ee124fed594265b3bc07fa1f145d.svg"}}]);
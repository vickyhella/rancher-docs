"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88469],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,d=p["".concat(s,".").concat(g)]||p[g]||h[g]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Longhorn - Cloud native distributed block storage for Kubernetes",shortTitle:"Longhorn Storage",weight:19,aliases:["/rancher/v2.x/en/longhorn/"]},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/longhorn",id:"version-2.5/explanations/integrations-in-rancher/longhorn",title:"Longhorn - Cloud native distributed block storage for Kubernetes",description:"Longhorn is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/longhorn.md",sourceDirName:"explanations/integrations-in-rancher",slug:"/explanations/integrations-in-rancher/longhorn",permalink:"/v2.5/explanations/integrations-in-rancher/longhorn",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/longhorn.md",tags:[],version:"2.5",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Longhorn - Cloud native distributed block storage for Kubernetes",shortTitle:"Longhorn Storage",weight:19,aliases:["/rancher/v2.x/en/longhorn/"]},sidebar:"tutorialSidebar",previous:{title:"Additional Steps for Project Network Isolation",permalink:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation"},next:{title:"Rancher Integration with Logging Services",permalink:"/v2.5/pages-for-subheaders/logging"}},u={},h=[{value:"New in Rancher v2.5",id:"new-in-rancher-v25",level:3},{value:"Installing Longhorn with Rancher",id:"installing-longhorn-with-rancher",level:3},{value:"Accessing Longhorn from the Rancher UI",id:"accessing-longhorn-from-the-rancher-ui",level:3},{value:"Uninstalling Longhorn from the Rancher UI",id:"uninstalling-longhorn-from-the-rancher-ui",level:3},{value:"GitHub Repository",id:"github-repository",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Architecture",id:"architecture",level:3}],p={toc:h};function g(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/"},"Longhorn")," is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes."),(0,a.kt)("p",null,"Longhorn is free, open source software. Originally developed by Rancher Labs, it is now being developed as a sandbox project of the Cloud Native Computing Foundation. It can be installed on any Kubernetes cluster with Helm, with kubectl, or with the Rancher UI. You can learn more about its architecture ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.0.2/concepts/"},"here.")),(0,a.kt)("p",null,"With Longhorn, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use Longhorn volumes as persistent storage for the distributed stateful applications in your Kubernetes cluster"),(0,a.kt)("li",{parentName:"ul"},"Partition your block storage into Longhorn volumes so that you can use Kubernetes volumes with or without a cloud provider"),(0,a.kt)("li",{parentName:"ul"},"Replicate block storage across multiple nodes and data centers to increase availability"),(0,a.kt)("li",{parentName:"ul"},"Store backup data in external storage such as NFS or AWS S3"),(0,a.kt)("li",{parentName:"ul"},"Create cross-cluster disaster recovery volumes so that data from a primary Kubernetes cluster can be quickly recovered from backup in a second Kubernetes cluster"),(0,a.kt)("li",{parentName:"ul"},"Schedule recurring snapshots of a volume, and schedule recurring backups to NFS or S3-compatible secondary storage"),(0,a.kt)("li",{parentName:"ul"},"Restore volumes from backup"),(0,a.kt)("li",{parentName:"ul"},"Upgrade Longhorn without disrupting persistent volumes")),(0,a.kt)("figcaption",null,"Longhorn Dashboard"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Longhorn Dashboard",src:n(29248).Z,width:"1336",height:"724"})),(0,a.kt)("h3",{id:"new-in-rancher-v25"},"New in Rancher v2.5"),(0,a.kt)("p",null,"Before Rancher v2.5, Longhorn could be installed as a Rancher catalog app. In Rancher v2.5, the catalog system was replaced by the ",(0,a.kt)("strong",{parentName:"p"},"Apps & Marketplace,")," and it became possible to install Longhorn as an app from that page."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Cluster Explorer")," now allows you to manipulate Longhorn's Kubernetes resources from the Rancher UI. So now you can control the Longhorn functionality with the Longhorn UI, or with kubectl, or by manipulating Longhorn's Kubernetes custom resources in the Rancher UI."),(0,a.kt)("p",null,"These instructions assume you are using Rancher v2.5, but Longhorn can be installed with earlier Rancher versions. For documentation about installing Longhorn as a catalog app using the legacy Rancher UI, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.0.2/deploy/install/install-with-rancher/"},"Longhorn documentation.")),(0,a.kt)("h3",{id:"installing-longhorn-with-rancher"},"Installing Longhorn with Rancher"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fulfill all ",(0,a.kt)("a",{parentName:"li",href:"https://longhorn.io/docs/1.1.0/deploy/install/#installation-requirements"},"Installation Requirements.")),(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Explorer")," in the Rancher UI."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Apps.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn"),"."),(0,a.kt)("li",{parentName:"ol"},"Optional: To customize the initial settings, click ",(0,a.kt)("strong",{parentName:"li"},"Longhorn Default Settings")," and edit the configuration. For help customizing the settings, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://longhorn.io/docs/1.0.2/references/settings/"},"Longhorn documentation.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Install."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Longhorn is deployed in the Kubernetes cluster."),(0,a.kt)("h3",{id:"accessing-longhorn-from-the-rancher-ui"},"Accessing Longhorn from the Rancher UI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},'Cluster Explorer," go to the top left dropdown menu and click '),"Cluster Explorer > Longhorn.**"),(0,a.kt)("li",{parentName:"ol"},"On this page, you can edit Kubernetes resources managed by Longhorn. To view the Longhorn UI, click the ",(0,a.kt)("strong",{parentName:"li"},"Longhorn")," button in the ",(0,a.kt)("strong",{parentName:"li"},"Overview")," section.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," You will be taken to the Longhorn UI, where you can manage your Longhorn volumes and their replicas in the Kubernetes cluster, as well as secondary backups of your Longhorn storage that may exist in another Kubernetes cluster or in S3."),(0,a.kt)("h3",{id:"uninstalling-longhorn-from-the-rancher-ui"},"Uninstalling Longhorn from the Rancher UI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cluster Explorer > Apps & Marketplace.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Installed Apps.")),(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-system")," namespace and check the boxes next to the ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-crd")," apps."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Delete,")," and confirm ",(0,a.kt)("strong",{parentName:"li"},"Delete."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Longhorn is uninstalled."),(0,a.kt)("h3",{id:"github-repository"},"GitHub Repository"),(0,a.kt)("p",null,"The Longhorn project is available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn"},"here.")),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"The Longhorn documentation is ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/"},"here.")),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Longhorn creates a dedicated storage controller for each volume and synchronously replicates the volume across multiple replicas stored on multiple nodes."),(0,a.kt)("p",null,"The storage controller and replicas are themselves orchestrated using Kubernetes."),(0,a.kt)("p",null,"You can learn more about its architecture ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.0.2/concepts/"},"here.")),(0,a.kt)("figcaption",null,"Longhorn Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Longhorn Architecture",src:n(87087).Z,width:"1366",height:"820"})))}g.isMDXComponent=!0},87087:function(e,t,n){t.Z=n.p+"assets/images/longhorn-architecture-170665ab1264134b2a4307183e1811e7.svg"},29248:function(e,t,n){t.Z=n.p+"assets/images/longhorn-screenshot-3de16ad65d20cedf515d6c18cf56799a.png"}}]);
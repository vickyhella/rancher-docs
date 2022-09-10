"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24273],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),p=a,d=f["".concat(c,".").concat(p)]||f[p]||h[p]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70144:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Syncing",weight:10},c=void 0,l={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",id:"reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",title:"Syncing",description:"Syncing is the feature for EKS and GKE clusters that causes Rancher to update the clusters' values so they are up to date with their corresponding cluster object in the hosted Kubernetes provider. This enables Rancher to not be the sole owner of a hosted cluster\u2019s state. Its largest limitation is that processing an update from Rancher and another source at the same time or within 5 minutes of one finishing may cause the state from one source to completely overwrite the other.",source:"@site/docs/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters.md",tags:[],version:"current",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Syncing",weight:10},sidebar:"tutorialSidebar",previous:{title:"Rancher Agent Options",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options"},next:{title:"Downstream Cluster Configuration",permalink:"/pages-for-subheaders/downstream-cluster-configuration"}},u={},h=[{value:"How it works",id:"how-it-works",level:3}],f={toc:h};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Syncing is the feature for EKS and GKE clusters that causes Rancher to update the clusters' values so they are up to date with their corresponding cluster object in the hosted Kubernetes provider. This enables Rancher to not be the sole owner of a hosted cluster\u2019s state. Its largest limitation is that processing an update from Rancher and another source at the same time or within 5 minutes of one finishing may cause the state from one source to completely overwrite the other."),(0,o.kt)("h3",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"There are two fields on the Rancher Cluster object that must be understood to understand how syncing works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The config object for the cluster, located on the Spec of the Cluster:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For EKS, the field is called EKSConfig"),(0,o.kt)("li",{parentName:"ul"},"For GKE, the field is called GKEConfig"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The UpstreamSpec object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For EKS, this is located on the EKSStatus field on the Status of the Cluster."),(0,o.kt)("li",{parentName:"ul"},"For GKE, this is located on the GKEStatus field on the Status of the Cluster.")))),(0,o.kt)("p",null,"The struct types that define these objects can be found in their corresponding operator projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/eks-operator/blob/master/pkg/apis/eks.cattle.io/v1/types.go"},"eks-operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/gke-operator/blob/master/pkg/apis/gke.cattle.io/v1/types.go"},"gke-operator"))),(0,o.kt)("p",null,"All fields with the exception of the cluster name, the location (region or zone), Imported, and the cloud credential reference, are nillable on this Spec object."),(0,o.kt)("p",null,'The EKSConfig or GKEConfig represents desired state for its non-nil values. Fields that are non-nil in the config object can be thought of as \u201cmanaged". When a cluster is created in Rancher, all fields are non-nil and therefore \u201cmanaged\u201d. When a pre-existing cluster is registered in rancher all nillable fields are nil and are not \u201cmanaged\u201d. Those fields become managed once their value has been changed by Rancher.'),(0,o.kt)("p",null,"UpstreamSpec represents the cluster as it is in the hosted Kubernetes provider and is refreshed on an interval of 5 minutes. After the UpstreamSpec has been refreshed, Rancher checks if the cluster has an update in progress. If it is updating, nothing further is done. If it is not currently updating, any \u201cmanaged\u201d fields on EKSConfig or GKEConfig are overwritten with their corresponding value from the recently updated UpstreamSpec."),(0,o.kt)("p",null,"The effective desired state can be thought of as the UpstreamSpec + all non-nil fields in the EKSConfig or GKEConfig. This is what is displayed in the UI."),(0,o.kt)("p",null,"If Rancher and another source attempt to update a cluster at the same time or within the 5 minute refresh window of an update finishing, then it is likely any \u201cmanaged\u201d fields can be caught in a race condition. To use EKS as an example, a cluster may have PrivateAccess as a managed field. If PrivateAccess is false and then enabled in EKS console, then finishes at 11:01, and then tags are updated from Rancher before 11:05 the value will likely be overwritten. This would also occur if tags were updated while the cluster was processing the update. If the cluster was registered and the PrivateAccess fields was nil then this issue should not occur in the aforementioned case."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[28320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Running on ARM64 (Experimental)",weight:3,aliases:["/rancher/v2.0-v2.4/en/installation/options/arm64-platform"]},s=void 0,p={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",title:"Running on ARM64 (Experimental)",description:"Important:",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Running on ARM64 (Experimental)",weight:3,aliases:["/rancher/v2.0-v2.4/en/installation/options/arm64-platform"]},sidebar:"tutorialSidebar",previous:{title:"Enabling Experimental Features",permalink:"/v2.0-v2.4/pages-for-subheaders/enable-experimental-features"},next:{title:"Allow Unsupported Storage Drivers",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"}},u={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")),(0,o.kt)("p",{parentName:"blockquote"},"Running on an ARM64 platform is currently an experimental feature and is not yet officially supported in Rancher. Therefore, we do not recommend using ARM64 based nodes in a production environment.")),(0,o.kt)("p",null,"The following options are available when using an ARM64 platform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Running Rancher on ARM64 based node(s)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Only for Docker Install. Please note that the following installation command replaces the examples found in the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker Install")," link:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'# In the last line `rancher/rancher:vX.Y.Z`, be certain to replace "X.Y.Z" with a released version in which ARM64 builds exist. For  example, if your matching version is v2.5.8, you would fill in this line with `rancher/rancher:v2.5.8`. \ndocker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  --privileged \\\n  rancher/rancher:vX.Y.Z  \n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," To check if your specific released version is compatible with the ARM64 architecture, you may navigate to your",(0,o.kt)("br",{parentName:"p"}),"\n","version's release notes in the following two ways:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Manually find your version using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases"},"https://github.com/rancher/rancher/releases"),"."),(0,o.kt)("li",{parentName:"ul"},"Go directly to your version using the tag and the specific version number. If you plan to use v2.5.8, for example, you may\nnavigate to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases/tag/v2.5.8"},"https://github.com/rancher/rancher/releases/tag/v2.5.8"),".   ")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create custom cluster and adding ARM64 based node(s)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Kubernetes cluster version must be 1.12 or higher"),(0,o.kt)("li",{parentName:"ul"},"CNI Network Provider must be ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/faq/container-network-interface-providers#flannel"},"Flannel")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Importing clusters that contain ARM64 based nodes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Kubernetes cluster version must be 1.12 or higher")))),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"Cluster Options")," for information on how to configure the cluster options."),(0,o.kt)("p",null,"The following features are not tested:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monitoring, alerts, notifiers, pipelines and logging"),(0,o.kt)("li",{parentName:"ul"},"Launching apps from the catalog")))}m.isMDXComponent=!0}}]);
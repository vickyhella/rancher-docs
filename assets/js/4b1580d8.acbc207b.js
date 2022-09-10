"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98915],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32127:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Air Gapped Helm CLI Install",weight:1,aliases:["/rancher/v2.5/en/installation/air-gap-installation/","/rancher/v2.5/en/installation/air-gap-high-availability/","/rancher/v2.5/en/installation/air-gap-single-node/","/rancher/v2.x/en/installation/other-installation-methods/air-gap/"]},s=void 0,p={unversionedId:"pages-for-subheaders/air-gapped-helm-cli-install",id:"version-2.5/pages-for-subheaders/air-gapped-helm-cli-install",title:"Air Gapped Helm CLI Install",description:"This section is about using the Helm CLI to install the Rancher server in an air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/air-gapped-helm-cli-install.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/air-gapped-helm-cli-install",permalink:"/v2.5/pages-for-subheaders/air-gapped-helm-cli-install",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/air-gapped-helm-cli-install.md",tags:[],version:"2.5",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Air Gapped Helm CLI Install",weight:1,aliases:["/rancher/v2.5/en/installation/air-gap-installation/","/rancher/v2.5/en/installation/air-gap-high-availability/","/rancher/v2.5/en/installation/air-gap-single-node/","/rancher/v2.x/en/installation/other-installation-methods/air-gap/"]},sidebar:"tutorialSidebar",previous:{title:"Other Installation Methods",permalink:"/v2.5/pages-for-subheaders/other-installation-methods"},next:{title:"1. Set up Infrastructure and Private Registry",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"}},u={},c=[{value:"Next: Prepare your Node(s)",id:"next-prepare-your-nodes",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section is about using the Helm CLI to install the Rancher server in an air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy."),(0,i.kt)("p",null,"The installation steps differ depending on whether Rancher is installed on an RKE Kubernetes cluster, a K3s Kubernetes cluster, or a single Docker container."),(0,i.kt)("p",null,"For more information on each installation option, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/installation-and-upgrade"},"this page.")),(0,i.kt)("p",null,"Throughout the installation instructions, there will be ",(0,i.kt)("em",{parentName:"p"},"tabs")," for each installation option."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:")," If you install Rancher following the Docker installation guide, there is no upgrade path to transition your Docker Installation to a Kubernetes Installation.")),(0,i.kt)("h1",{id:"installation-outline"},"Installation Outline"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},"Set up infrastructure and private registry")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"Collect and publish images to your private registry")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},"Set up a Kubernetes cluster (Skip this step for Docker installations)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Install Rancher"))),(0,i.kt)("h1",{id:"upgrades"},"Upgrades"),(0,i.kt)("p",null,"To upgrade Rancher with Helm CLI in an air gap environment, follow ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"this procedure.")),(0,i.kt)("h3",{id:"next-prepare-your-nodes"},(0,i.kt)("a",{parentName:"h3",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},"Next: Prepare your Node(s)")))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59373],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||h[d]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},84957:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return h}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"Upgrades",weight:2,aliases:["/rancher/v2.5/en/installation/install-rancher-on-linux/upgrades","/rancher/v2.x/en/installation/install-rancher-on-linux/upgrades/"]},s=void 0,u={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd",id:"version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd",title:"Upgrades",description:"Note: RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux",slug:"/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd.md",tags:[],version:"2.5",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Upgrades",weight:2,aliases:["/rancher/v2.5/en/installation/install-rancher-on-linux/upgrades","/rancher/v2.x/en/installation/install-rancher-on-linux/upgrades/"]},sidebar:"tutorialSidebar",previous:{title:"Rollbacks",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd"},next:{title:"Resources",permalink:"/v2.5/pages-for-subheaders/resources"}},c={},h=[{value:"Upgrading the Rancher Helm Chart without Upgrading the Underlying Cluster",id:"upgrading-the-rancher-helm-chart-without-upgrading-the-underlying-cluster",level:3},{value:"Upgrading Both Rancher and the Underlying Cluster",id:"upgrading-both-rancher-and-the-underlying-cluster",level:3}],p={toc:h};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.")),(0,l.kt)("p",null,"When RancherD is upgraded, the Rancher Helm controller and the Fleet pods are upgraded."),(0,l.kt)("p",null,"During a RancherD upgrade, there is very little downtime, but it is possible that RKE2 may be down for a minute, during which you could lose access to Rancher."),(0,l.kt)("p",null,"When Rancher is installed with RancherD, the underlying Kubernetes cluster can't be upgraded from the Rancher UI. It needs to be upgraded using the RancherD CLI."),(0,l.kt)("h3",{id:"upgrading-the-rancher-helm-chart-without-upgrading-the-underlying-cluster"},"Upgrading the Rancher Helm Chart without Upgrading the Underlying Cluster"),(0,l.kt)("p",null,"To upgrade Rancher without upgrading the underlying Kubernetes cluster, follow these steps."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Before upgrading, we recommend that you should:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Create a backup of the Rancher server using the ",(0,l.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"backup application.")),(0,l.kt)("li",{parentName:"ul"},"Review the known issues for the Rancher version you are upgrading to. The known issues are listed in the release notes on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,l.kt)("a",{parentName:"li",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Uninstall the chart with Helm:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm uninstall rancher\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Reinstall the Rancher chart with Helm. To install a specific Rancher version, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--version")," flag. For example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm install rancher rancher-latest/rancher \\\n--namespace cattle-system \\\n--set hostname=rancher.my.org \\\n--version 2.5.1\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," Rancher is upgraded to the new version."),(0,l.kt)("p",null,"If necessary, restore Rancher from backup by following ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},"these steps.")),(0,l.kt)("h3",{id:"upgrading-both-rancher-and-the-underlying-cluster"},"Upgrading Both Rancher and the Underlying Cluster"),(0,l.kt)("p",null,"Upgrade both RancherD and the underlying Kubernetes cluster by re-running the RancherD installation script."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Before upgrading, we recommend that you should:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Create a backup of the Rancher server using the ",(0,l.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"backup application.")),(0,l.kt)("li",{parentName:"ul"},"Review the known issues for the Rancher version you are upgrading to. The known issues are listed in the release notes on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,l.kt)("a",{parentName:"li",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo curl -sfL https://get.rancher.io | sudo sh -\n")),(0,l.kt)("p",null,"To specify a specific version to upgrade to, use ",(0,l.kt)("inlineCode",{parentName:"p"},"INSTALL_RANCHERD_VERSION")," environment variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -sfL https://get.rancher.io | INSTALL_RANCHERD_VERSION=v2.5.1 sh -\n")),(0,l.kt)("p",null,"Then launch the server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"systemctl enable rancherd-server\nsystemctl start rancherd-server\n")),(0,l.kt)("p",null,"The upgrade can also be performed by manually installing the binary of the desired version."))}d.isMDXComponent=!0}}]);
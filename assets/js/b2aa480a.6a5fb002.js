"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42857],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Rollbacks",weight:3,aliases:["/rancher/v2.5/en/installation/install-rancher-on-linux/rollbacks","/rancher/v2.x/en/installation/install-rancher-on-linux/rollbacks/"]},c=void 0,s={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd",id:"version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd",title:"Rollbacks",description:"Note: RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux",slug:"/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd.md",tags:[],version:"2.5",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Rollbacks",weight:3,aliases:["/rancher/v2.5/en/installation/install-rancher-on-linux/rollbacks","/rancher/v2.x/en/installation/install-rancher-on-linux/rollbacks/"]},sidebar:"tutorialSidebar",previous:{title:"Install/Upgrade Rancher with RancherD",permalink:"/v2.5/pages-for-subheaders/install-rancher-on-linux"},next:{title:"Upgrades",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd"}},u={},d=[],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.")),(0,o.kt)("p",null,"To roll back Rancher to a previous version, re-run the installation script with the previous version specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTALL_RANCHERD_VERSION")," environment variable."))}h.isMDXComponent=!0}}]);
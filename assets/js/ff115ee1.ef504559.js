"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8226],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),g=o,d=f["".concat(u,".").concat(g)]||f[g]||p[g]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26411:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"DigitalOcean Machine Configuration",weight:2},u=void 0,l={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",title:"DigitalOcean Machine Configuration",description:"For more details about DigitalOcean, Droplets, refer to the official documentation.",source:"@site/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md",tags:[],version:"current",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"DigitalOcean Machine Configuration",weight:2},sidebar:"tutorialSidebar",previous:{title:"EC2 Machine Configuration Reference",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2"},next:{title:"Azure Machine Configuration",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure"}},s={},p=[{value:"Region",id:"region",level:3},{value:"Size",id:"size",level:3},{value:"OS Image",id:"os-image",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"IPv6",id:"ipv6",level:3},{value:"Private Networking",id:"private-networking",level:3},{value:"Droplet Tags",id:"droplet-tags",level:3}],f={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For more details about DigitalOcean, Droplets, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/compute/"},"official documentation"),"."),(0,i.kt)("h3",{id:"region"},"Region"),(0,i.kt)("p",null,"Configure the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/app-platform/concepts/region/"},"region")," where Droplets are created."),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("p",null,"Configure the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/droplets/resources/choose-plan/"},"size")," of Droplets."),(0,i.kt)("h3",{id:"os-image"},"OS Image"),(0,i.kt)("p",null,"Configure the operating system ",(0,i.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/images/"},"image")," Droplets are created from."),(0,i.kt)("h3",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"Enable the DigitalOcean agent for additional ",(0,i.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/monitoring/"},"monitoring"),"."),(0,i.kt)("h3",{id:"ipv6"},"IPv6"),(0,i.kt)("p",null,"Enable IPv6 for Droplets."),(0,i.kt)("h3",{id:"private-networking"},"Private Networking"),(0,i.kt)("p",null,"Enable private networking for Droplets."),(0,i.kt)("h3",{id:"droplet-tags"},"Droplet Tags"),(0,i.kt)("p",null,"Apply a tag (label) to a Droplet. Tags may only contain letters, numbers, colons, dashes, and underscores. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"my_server"),"."))}g.isMDXComponent=!0}}]);
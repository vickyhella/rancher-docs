"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17088],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),o=r(86010),a="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(87462),o=r(67294),a=r(86010),i=r(72389),l=r(67392),u=r(7094),c=r(12466),s="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,r,i=e.lazy,d=e.block,p=e.defaultValue,f=e.values,g=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:k[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,O=N.setTabGroupChoices,T=(0,o.useState)(y),D=T[0],E=T[1],z=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var x=w[g];null!=x&&x!==D&&v.some((function(e){return e.value===x}))&&E(x)}var C=function(e){var t=e.currentTarget,r=z.indexOf(t),n=v[r].value;n!==D&&(j(t),E(n),null!=g&&O(g,String(n)))},A=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,o=z.indexOf(e.currentTarget)+1;r=null!=(n=z[o])?n:z[0];break;case"ArrowLeft":var a,i=z.indexOf(e.currentTarget)-1;r=null!=(a=z[i])?a:z[z.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var t=e.value,r=e.label,i=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return z.push(e)},onKeyDown:A,onFocus:C,onClick:C},i,{className:(0,a.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":D===t})}),null!=r?r:t)}))),i?(0,o.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function p(e){var t=(0,i.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},53334:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(65488),l=r(85162),u=["components"],c={title:"Azure Node Template Configuration",weight:1},s=void 0,m={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",id:"version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",title:"Azure Node Template Configuration",description:"For more information about Azure, refer to the official Azure documentation.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Azure Node Template Configuration",weight:1},sidebar:"tutorialSidebar",previous:{title:"DigitalOcean Node Template Configuration",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"},next:{title:"VSphere Node Template Configuration",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/creating-a-vsphere-cluster"}},d={},p=[],f={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For more information about Azure, refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/?product=featured"},"Azure documentation.")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Rancher v2.2.0+",mdxType:"TabItem"},(0,a.kt)("p",null,"Account access information is stored as a cloud credential. Cloud credentials are stored as Kubernetes secrets. Multiple node templates can use the same cloud credential. You can use an existing cloud credential or create a new one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Placement")," sets the geographical region where your cluster is hosted and other location metadata."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network")," configures the networking used in your cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Instance")," customizes your VM configuration.")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference")))),(0,a.kt)(l.Z,{value:"Rancher before v2.2.0",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Account Access")," stores your account information for authenticating with Azure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Placement")," sets the geographical region where your cluster is hosted and other location metadata."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network")," configures the networking used in your cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Instance")," customizes your VM configuration.")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference"))))))}g.isMDXComponent=!0}}]);
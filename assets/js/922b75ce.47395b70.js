"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[60165],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(87462),n=a(67294),o=a(86010),i=a(72389),s=a(67392),l=a(7094),c=a(12466),u="tabList__CuJ",p="tabItem_LNqP";function h(e){var t,a,i=e.lazy,h=e.block,m=e.defaultValue,d=e.values,g=e.groupId,f=e.className,y=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:y[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),C=N.tabGroupChoices,w=N.setTabGroupChoices,T=(0,n.useState)(k),R=T[0],S=T[1],O=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var x=C[g];null!=x&&x!==R&&v.some((function(e){return e.value===x}))&&S(x)}var I=function(e){var t=e.currentTarget,a=O.indexOf(t),r=v[a].value;r!==R&&(E(t),S(r),null!=g&&w(g,String(r)))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=O.indexOf(e.currentTarget)+1;a=null!=(r=O[n])?r:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;a=null!=(o=O[i])?o:O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},f)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":R===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(y.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function m(e){var t=(0,i.Z)();return n.createElement(h,(0,r.Z)({key:String(t)},e))}},4356:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(65488),s=a(85162),l=["components"],c={title:"Setting up Local System Charts for Air Gapped Installations",weight:120,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-single-node/config-rancher-system-charts/_index.md","/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/config-rancher-system-charts/_index.md","/rancher/v2.0-v2.4/en/installation/options/local-system-charts"]},u=void 0,p={unversionedId:"getting-started/installation-and-upgrade/resources/local-system-charts",id:"version-2.0-2.4/getting-started/installation-and-upgrade/resources/local-system-charts",title:"Setting up Local System Charts for Air Gapped Installations",description:"The System Charts repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/local-system-charts.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/local-system-charts",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/local-system-charts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/local-system-charts.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Setting up Local System Charts for Air Gapped Installations",weight:120,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-single-node/config-rancher-system-charts/_index.md","/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/config-rancher-system-charts/_index.md","/rancher/v2.0-v2.4/en/installation/options/local-system-charts"]},sidebar:"tutorialSidebar",previous:{title:"Updating the Rancher Certificate",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},next:{title:"Upgrading and Rolling Back Kubernetes",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"}},h={},m=[{value:"A. Prepare System Charts",id:"a-prepare-system-charts",level:3},{value:"B. Configure System Charts",id:"b-configure-system-charts",level:3}],d={toc:m};function g(e){var t=e.components,c=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-charts"},"System Charts")," repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS."),(0,o.kt)("p",null,"In an air gapped installation of Rancher, you will need to configure Rancher to use a local copy of the system charts. This section describes how to use local system charts using a CLI flag in Rancher v2.3.0, and using a Git mirror for Rancher versions before v2.3.0."),(0,o.kt)("h1",{id:"using-local-system-charts-in-rancher-v230"},"Using Local System Charts in Rancher v2.3.0"),(0,o.kt)("p",null,"In Rancher v2.3.0, a local copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," has been packaged into the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container. To be able to use these features in an air gap install, you will need to run the Rancher install command with an extra environment variable, ",(0,o.kt)("inlineCode",{parentName:"p"},"CATTLE_SYSTEM_CATALOG=bundled"),", which tells Rancher to use the local copy of the charts instead of attempting to fetch them from GitHub."),(0,o.kt)("p",null,"Example commands for a Rancher installation with a bundled ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," are included in the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/install-rancher"},"air gap Docker installation")," instructions and the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap Kubernetes installation")," instructions."),(0,o.kt)("h1",{id:"setting-up-system-charts-for-rancher-before-v230"},"Setting Up System Charts for Rancher Before v2.3.0"),(0,o.kt)("h3",{id:"a-prepare-system-charts"},"A. Prepare System Charts"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-charts"},"System Charts")," repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. To be able to use these features in an air gap install, you will need to mirror the ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," repository to a location in your network that Rancher can reach and configure Rancher to use that repository."),(0,o.kt)("p",null,"Refer to the release notes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," repository to see which branch corresponds to your version of Rancher."),(0,o.kt)("h3",{id:"b-configure-system-charts"},"B. Configure System Charts"),(0,o.kt)("p",null,"Rancher needs to be configured to use your Git mirror of the ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," repository. You can configure the system charts repository either from the Rancher UI or from Rancher's API view."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Rancher UI",mdxType:"TabItem"},(0,o.kt)("p",null,"In the catalog management page in the Rancher UI, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Tools > Catalogs."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The system chart is displayed under the name ",(0,o.kt)("inlineCode",{parentName:"p"},"system-library"),". To edit the configuration of the system chart, click ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Edit."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Catalog URL")," field, enter the location of the Git mirror of the ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to download all the required catalog items from your ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," repository.")),(0,o.kt)(s.Z,{value:"Rancher API",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log into Rancher.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<your-rancher-server>/v3/catalogs/system-library")," in your browser."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(17750).Z,width:"2044",height:"1056"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Edit")," on the upper right corner and update the value for ",(0,o.kt)("strong",{parentName:"p"},"url")," to the location of the Git mirror of the ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," repository."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(66902).Z,width:"1508",height:"1352"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Show Request"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Send Request")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to download all the required catalog items from your ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," repository."))))}g.isMDXComponent=!0},17750:function(e,t,a){t.Z=a.p+"assets/images/system-charts-setting-8fe086a52e64ba6fa4376986787ef993.png"},66902:function(e,t,a){t.Z=a.p+"assets/images/system-charts-update-94a6d35a9593ab2231b43b6eb7e61c6f.png"}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[85587],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"3. Select the Nodes Where Istio Components Will be Deployed"},l=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors",title:"3. Select the Nodes Where Istio Components Will be Deployed",description:"Prerequisite: Your cluster needs a worker node that can designated for Istio. The worker node should meet the resource requirements.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"3. Select the Nodes Where Istio Components Will be Deployed"},sidebar:"tutorialSidebar",previous:{title:"2. Enable Istio in a Namespace",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},next:{title:"4. Add Deployments and Services with the Istio Sidecar",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"}},u={},c=[{value:"Next: Add Deployments and Services",id:"next-add-deployments-and-services",level:3}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," Your cluster needs a worker node that can designated for Istio. The worker node should meet the ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"resource requirements."))),(0,i.kt)("p",null,"This section describes how use node selectors to configure Istio components to be deployed on a designated node."),(0,i.kt)("p",null,"In larger deployments, it is strongly advised that Istio's infrastructure be placed on dedicated nodes in the cluster by adding a node selector for each Istio component."),(0,i.kt)("h1",{id:"adding-a-label-to-the-istio-node"},"Adding a Label to the Istio Node"),(0,i.kt)("p",null,"First, add a label to the node where Istio components should be deployed. This label can have any key-value pair. For this example, we will use the key ",(0,i.kt)("inlineCode",{parentName:"p"},"istio")," and the value ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the cluster view, go to the ",(0,i.kt)("strong",{parentName:"li"},"Nodes")," tab."),(0,i.kt)("li",{parentName:"ol"},"Go to a worker node that will host the Istio components and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,i.kt)("li",{parentName:"ol"},"Expand the ",(0,i.kt)("strong",{parentName:"li"},"Labels & Annotations")," section."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Label.")),(0,i.kt)("li",{parentName:"ol"},"In the fields that appear, enter ",(0,i.kt)("inlineCode",{parentName:"li"},"istio")," for the key and ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," for the value."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," A worker node has the label that will allow you to designate it for Istio components."),(0,i.kt)("h1",{id:"configuring-istio-components-to-use-the-labeled-node"},"Configuring Istio Components to Use the Labeled Node"),(0,i.kt)("p",null,"Configure each Istio component to be deployed to the node with the Istio label. Each Istio component can be configured individually, but in this tutorial, we will configure all of the components to be scheduled on the same node for the sake of simplicity."),(0,i.kt)("p",null,"For larger deployments, it is recommended to schedule each component of Istio onto separate nodes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the cluster view, click ",(0,i.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,i.kt)("li",{parentName:"ol"},"Expand the ",(0,i.kt)("strong",{parentName:"li"},"Pilot")," section and click ",(0,i.kt)("strong",{parentName:"li"},"Add Selector")," in the form that appears. Enter the node selector label that you added to the Istio node. In our case, we are using the key ",(0,i.kt)("inlineCode",{parentName:"li"},"istio")," and the value ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled.")),(0,i.kt)("li",{parentName:"ol"},"Repeat the previous step for the ",(0,i.kt)("strong",{parentName:"li"},"Mixer")," and ",(0,i.kt)("strong",{parentName:"li"},"Tracing")," sections."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The Istio components will be deployed on the Istio node."),(0,i.kt)("h3",{id:"next-add-deployments-and-services"},(0,i.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},"Next: Add Deployments and Services")))}h.isMDXComponent=!0}}]);
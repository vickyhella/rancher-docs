"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[85587],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},39277:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const i={title:"3. Select the Nodes Where Istio Components Will be Deployed"},a=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors",title:"3. Select the Nodes Where Istio Components Will be Deployed",description:"Prerequisite: Your cluster needs a worker node that can designated for Istio. The worker node should meet the resource requirements.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"2022\u5e7410\u670829\u65e5",frontMatter:{title:"3. Select the Nodes Where Istio Components Will be Deployed"},sidebar:"tutorialSidebar",previous:{title:"2. Enable Istio in a Namespace",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},next:{title:"4. Add Deployments and Services with the Istio Sidecar",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"}},l={},d=[{value:"Adding a Label to the Istio Node",id:"adding-a-label-to-the-istio-node",level:2},{value:"Configuring Istio Components to Use the Labeled Node",id:"configuring-istio-components-to-use-the-labeled-node",level:2},{value:"Next: Add Deployments and Services",id:"next-add-deployments-and-services",level:3}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisite:")," Your cluster needs a worker node that can designated for Istio. The worker node should meet the ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"resource requirements."))),(0,r.kt)("p",null,"This section describes how use node selectors to configure Istio components to be deployed on a designated node."),(0,r.kt)("p",null,"In larger deployments, it is strongly advised that Istio's infrastructure be placed on dedicated nodes in the cluster by adding a node selector for each Istio component."),(0,r.kt)("h2",{id:"adding-a-label-to-the-istio-node"},"Adding a Label to the Istio Node"),(0,r.kt)("p",null,"First, add a label to the node where Istio components should be deployed. This label can have any key-value pair. For this example, we will use the key ",(0,r.kt)("inlineCode",{parentName:"p"},"istio")," and the value ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the cluster view, go to the ",(0,r.kt)("strong",{parentName:"li"},"Nodes")," tab."),(0,r.kt)("li",{parentName:"ol"},"Go to a worker node that will host the Istio components and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("strong",{parentName:"li"},"Labels & Annotations")," section."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Label.")),(0,r.kt)("li",{parentName:"ol"},"In the fields that appear, enter ",(0,r.kt)("inlineCode",{parentName:"li"},"istio")," for the key and ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," for the value."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," A worker node has the label that will allow you to designate it for Istio components."),(0,r.kt)("h2",{id:"configuring-istio-components-to-use-the-labeled-node"},"Configuring Istio Components to Use the Labeled Node"),(0,r.kt)("p",null,"Configure each Istio component to be deployed to the node with the Istio label. Each Istio component can be configured individually, but in this tutorial, we will configure all of the components to be scheduled on the same node for the sake of simplicity."),(0,r.kt)("p",null,"For larger deployments, it is recommended to schedule each component of Istio onto separate nodes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the cluster view, click ",(0,r.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("strong",{parentName:"li"},"Pilot")," section and click ",(0,r.kt)("strong",{parentName:"li"},"Add Selector")," in the form that appears. Enter the node selector label that you added to the Istio node. In our case, we are using the key ",(0,r.kt)("inlineCode",{parentName:"li"},"istio")," and the value ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled.")),(0,r.kt)("li",{parentName:"ol"},"Repeat the previous step for the ",(0,r.kt)("strong",{parentName:"li"},"Mixer")," and ",(0,r.kt)("strong",{parentName:"li"},"Tracing")," sections."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The Istio components will be deployed on the Istio node."),(0,r.kt)("h3",{id:"next-add-deployments-and-services"},(0,r.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},"Next: Add Deployments and Services")))}u.isMDXComponent=!0}}]);
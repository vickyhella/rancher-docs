"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[34541],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,v=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"6. Set up Istio's Components for Traffic Management",weight:6,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup/set-up-traffic-management","/rancher/v2.0-v2.4/en/istio/legacy/setup/set-up-traffic-management","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup/set-up-traffic-management","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/set-up-traffic-management/"]},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",title:"6. Set up Istio's Components for Traffic Management",description:"A central advantage of traffic management in Istio is that it allows dynamic request routing. Some common applications for dynamic request routing include canary deployments and blue/green deployments. The two key resources in Istio traffic management are virtual services and destination rules.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"6. Set up Istio's Components for Traffic Management",weight:6,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup/set-up-traffic-management","/rancher/v2.0-v2.4/en/istio/legacy/setup/set-up-traffic-management","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup/set-up-traffic-management","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/set-up-traffic-management/"]},sidebar:"tutorialSidebar",previous:{title:"5. Set up the Istio Gateway",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},next:{title:"7. Generate and View Traffic",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"}},p={},l=[{value:"Next: Generate and View Traffic",id:"next-generate-and-view-traffic",level:3}],d={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A central advantage of traffic management in Istio is that it allows dynamic request routing. Some common applications for dynamic request routing include canary deployments and blue/green deployments. The two key resources in Istio traffic management are ",(0,a.kt)("em",{parentName:"p"},"virtual services")," and ",(0,a.kt)("em",{parentName:"p"},"destination rules"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/"},"Virtual services")," intercept and direct traffic to your Kubernetes services, allowing you to divide percentages of traffic from a request to different services. You can use them to define a set of routing rules to apply when a host is addressed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule/"},"Destination rules")," serve as the single source of truth about which service versions are available to receive traffic from virtual services. You can use these resources to define policies that apply to traffic that is intended for a service after routing has occurred.")),(0,a.kt)("p",null,"This section describes how to add an example virtual service that corresponds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," microservice in the sample BookInfo app. The purpose of this service is to divide traffic between two versions of the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," service."),(0,a.kt)("p",null,"In this example, we take the traffic to the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," service and intercept it so that 50 percent of it goes to ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," of the service and 50 percent goes to ",(0,a.kt)("inlineCode",{parentName:"p"},"v2"),"."),(0,a.kt)("p",null,"After this virtual service is deployed, we will generate traffic and see from the Kiali visualization that traffic is being routed evenly between the two versions of the service."),(0,a.kt)("p",null,"To deploy the virtual service and destination rules for the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," service,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the project view and click ",(0,a.kt)("strong",{parentName:"li"},"Import YAML.")),(0,a.kt)("li",{parentName:"ol"},"Copy resources below into the form."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Import."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: reviews\nspec:\n  hosts:\n  - reviews\n  http:\n  - route:\n    - destination:\n        host: reviews\n        subset: v1\n      weight: 50\n    - destination:\n        host: reviews\n        subset: v3\n      weight: 50\n---\napiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: reviews\nspec:\n  host: reviews\n  subsets:\n  - name: v1\n    labels:\n      version: v1\n  - name: v2\n    labels:\n      version: v2\n  - name: v3\n    labels:\n      version: v3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," When you generate traffic to this service (for example, by refreshing the ingress gateway URL), the Kiali traffic graph will reflect that traffic to the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," service is divided evenly between ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"v3"),"."),(0,a.kt)("h3",{id:"next-generate-and-view-traffic"},(0,a.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"},"Next: Generate and View Traffic")))}f.isMDXComponent=!0}}]);
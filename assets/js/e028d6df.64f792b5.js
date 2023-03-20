"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"API Keys"},o=void 0,s={unversionedId:"reference-guides/user-settings/api-keys",id:"version-2.0-2.4/reference-guides/user-settings/api-keys",title:"API Keys",description:"API Keys and User Authentication",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/user-settings/api-keys.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/api-keys",permalink:"/v2.0-v2.4/reference-guides/user-settings/api-keys",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/user-settings/api-keys.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"API Keys"},sidebar:"tutorialSidebar",previous:{title:"User Settings",permalink:"/v2.0-v2.4/pages-for-subheaders/user-settings"},next:{title:"Managing Node Templates",permalink:"/v2.0-v2.4/reference-guides/user-settings/manage-node-templates"}},p={},l=[{value:"API Keys and User Authentication",id:"api-keys-and-user-authentication",level:2},{value:"Creating an API Key",id:"creating-an-api-key",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Deleting API Keys",id:"deleting-api-keys",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"api-keys-and-user-authentication"},"API Keys and User Authentication"),(0,a.kt)("p",null,"If you want to access your Rancher clusters, projects, or other objects using external applications, you can do so using the Rancher API. However, before your application can access the API, you must provide the app with a key used to authenticate with Rancher. You can obtain a key using the Rancher UI."),(0,a.kt)("p",null,"An API key is also required for using Rancher CLI."),(0,a.kt)("p",null,"API Keys are composed of four components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Endpoint:")," This is the IP address and path that other applications use to send requests to the Rancher API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access Key:")," The token's username."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secret Key:")," The token's password. For applications that prompt you for two different strings for API authentication, you usually enter the two keys together."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bearer Token:")," The token username and password concatenated together. Use this string for applications that prompt you for one authentication string.")),(0,a.kt)("h2",{id:"creating-an-api-key"},"Creating an API Key"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"User Avatar")," > ",(0,a.kt)("strong",{parentName:"p"},"API & Keys")," from the ",(0,a.kt)("strong",{parentName:"p"},"User Settings")," menu in the upper-right.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Key"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional:")," Enter a description for the API key and select an expiration period or a scope. We recommend setting an expiration date."),(0,a.kt)("p",{parentName:"li"},"The API key won't be valid after expiration. Shorter expiration periods are more secure."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Available as of v2.4.6"),"\nExpiration period will be bound by ",(0,a.kt)("inlineCode",{parentName:"p"},"v3/settings/auth-token-max-ttl-minutes"),". If it exceeds the max-ttl, API key will be created with max-ttl as the expiration period."),(0,a.kt)("p",{parentName:"li"},"A scope will limit the API key so that it will only work against the Kubernetes API of the specified cluster. If the cluster is configured with an Authorized Cluster Endpoint, you will be able to use a scoped token directly against the cluster's API without proxying through the Rancher server. See ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"Authorized Cluster Endpoints")," for more information.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step Result:")," Your API Key is created. Your API ",(0,a.kt)("strong",{parentName:"p"},"Endpoint"),", ",(0,a.kt)("strong",{parentName:"p"},"Access Key"),", ",(0,a.kt)("strong",{parentName:"p"},"Secret Key"),", and ",(0,a.kt)("strong",{parentName:"p"},"Bearer Token")," are displayed."),(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("strong",{parentName:"p"},"Bearer Token")," to authenticate with Rancher CLI.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the information displayed to a secure location. This information is only displayed once, so if you lose your key, you'll have to make a new one."))),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter your API key information into the application that will send requests to the Rancher API."),(0,a.kt)("li",{parentName:"ul"},"Learn more about the Rancher endpoints and parameters by selecting ",(0,a.kt)("strong",{parentName:"li"},"View in API")," for an object in the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},"API keys are used for API calls and ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/cli-with-rancher"},"Rancher CLI"),".")),(0,a.kt)("h2",{id:"deleting-api-keys"},"Deleting API Keys"),(0,a.kt)("p",null,"If you need to revoke an API key, delete it. You should delete API keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"That may have been compromised."),(0,a.kt)("li",{parentName:"ul"},"That have expired.")),(0,a.kt)("p",null,"To delete an API, select the stale key and click ",(0,a.kt)("strong",{parentName:"p"},"Delete"),"."))}u.isMDXComponent=!0}}]);
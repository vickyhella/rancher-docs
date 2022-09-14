"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91869],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(n),h=i,f=k["".concat(l,".").concat(h)]||k[h]||s[h]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},63424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),c=["components"],o={title:"kubectl Utility"},l="kubectl",u={unversionedId:"reference-guides/cli-with-rancher/kubectl-utility",id:"reference-guides/cli-with-rancher/kubectl-utility",title:"kubectl Utility",description:"Interact with Rancher using kubectl.",source:"@site/docs/reference-guides/cli-with-rancher/kubectl-utility.md",sourceDirName:"reference-guides/cli-with-rancher",slug:"/reference-guides/cli-with-rancher/kubectl-utility",permalink:"/reference-guides/cli-with-rancher/kubectl-utility",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cli-with-rancher/kubectl-utility.md",tags:[],version:"current",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"kubectl Utility"},sidebar:"tutorialSidebar",previous:{title:"Rancher CLI",permalink:"/reference-guides/cli-with-rancher/rancher-cli"},next:{title:"API",permalink:"/pages-for-subheaders/about-the-api"}},p={},s=[{value:"kubectl Utility",id:"kubectl-utility",level:3},{value:"Authentication with kubectl and kubeconfig Tokens with TTL",id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl",level:3}],k={toc:s};function h(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubectl"},"kubectl"),(0,a.kt)("p",null,"Interact with Rancher using kubectl."),(0,a.kt)("h3",{id:"kubectl-utility"},"kubectl Utility"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," utility. See ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"install kubectl"),"."),(0,a.kt)("p",null,"Configure kubectl by visiting your cluster in the Rancher Web UI, clicking on ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubeconfig"),", copying contents, and putting them into your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," file."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," successfully."),(0,a.kt)("h3",{id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl"},"Authentication with kubectl and kubeconfig Tokens with TTL"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Requirements")),(0,a.kt)("p",null,"If admins have ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens#disable-tokens-in-generated-kubeconfigs"},"kubeconfig token generation turned off"),", the kubeconfig file requires the ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/cli-with-rancher/rancher-cli"},"Rancher CLI")," to be present in your PATH when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),". Otherwise, you\u2019ll see an error like:\n",(0,a.kt)("inlineCode",{parentName:"p"},'Unable to connect to the server: getting credentials: exec: exec: "rancher": executable file not found in $PATH'),"."),(0,a.kt)("p",null,"This feature enables kubectl to authenticate with the Rancher server and get a new kubeconfig token when required. The following auth providers are currently supported:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Local"),(0,a.kt)("li",{parentName:"ol"},"Active Directory (LDAP only)"),(0,a.kt)("li",{parentName:"ol"},"FreeIPA"),(0,a.kt)("li",{parentName:"ol"},"OpenLDAP"),(0,a.kt)("li",{parentName:"ol"},"SAML providers: Ping, Okta, ADFS, Keycloak, Shibboleth")),(0,a.kt)("p",null,"When you first run kubectl, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),", it will ask you to pick an auth provider and log in with the Rancher server. The kubeconfig token is cached in the path where you run kubectl under ",(0,a.kt)("inlineCode",{parentName:"p"},"./.cache/token"),". This token is valid until ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens#disable-tokens-in-generated-kubeconfigs"},"it expires"),", or ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens#deleting-tokens"},"gets deleted from the Rancher server"),". Upon expiration, the next ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," will ask you to log in with the Rancher server again."))}h.isMDXComponent=!0}}]);
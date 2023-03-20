"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,f=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},62496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={title:"Rotation of Expired Webhook Certificates"},a=void 0,c={unversionedId:"troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",id:"version-2.6/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",title:"Rotation of Expired Webhook Certificates",description:"For Rancher versions that have rancher-webhook installed, certain versions created certificates that will expire after one year. It will be necessary for you to rotate your webhook certificate if the certificate did not renew.",source:"@site/versioned_docs/version-2.6/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",permalink:"/v2.6/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Rotation of Expired Webhook Certificates"},sidebar:"tutorialSidebar",previous:{title:"User ID Tracking in Audit Logs",permalink:"/v2.6/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs"},next:{title:"Contributing to Rancher",permalink:"/v2.6/contribute-to-rancher"}},s={},l=[{value:"1. Users with cluster access, run the following commands:",id:"1-users-with-cluster-access-run-the-following-commands",level:5},{value:"2. Users with no cluster access via <code>kubectl</code>:",id:"2-users-with-no-cluster-access-via-kubectl",level:5}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For Rancher versions that have ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-webhook")," installed, certain versions created certificates that will expire after one year. It will be necessary for you to rotate your webhook certificate if the certificate did not renew."),(0,n.kt)("p",null,"In Rancher v2.6.3 and up, rancher-webhook deployments will automatically renew their TLS certificate when it is within 30 or fewer days of its expiration date. If you are using v2.6.2 or below, there are two methods to work around this issue:"),(0,n.kt)("h5",{id:"1-users-with-cluster-access-run-the-following-commands"},"1. Users with cluster access, run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl delete secret -n cattle-system cattle-webhook-tls\nkubectl delete mutatingwebhookconfigurations.admissionregistration.k8s.io --ignore-not-found=true rancher.cattle.io\nkubectl delete pod -n cattle-system -l app=rancher-webhook\n")),(0,n.kt)("h5",{id:"2-users-with-no-cluster-access-via-kubectl"},"2. Users with no cluster access via ",(0,n.kt)("inlineCode",{parentName:"h5"},"kubectl"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-webhook-tls")," secret in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace in the local cluster.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher.cattle.io")," mutating webhook")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-webhook")," pod in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace in the local cluster."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The webhook certificate expiration issue is not specific to ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-webhook-tls")," as listed in the examples. You will fill in your expired certificate secret accordingly.")))}u.isMDXComponent=!0}}]);
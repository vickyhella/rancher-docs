"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[62608],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},54771:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"Rotation of Expired Webhook Certificates",weight:120},l=void 0,s={unversionedId:"troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",id:"version-2.5/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",title:"Rotation of Expired Webhook Certificates",description:"For Rancher versions that have rancher-webhook installed, certain versions created certificates that will expire after one year. It will be necessary for you to rotate your webhook certificate if the certificate did not renew.",source:"@site/versioned_docs/version-2.5/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",permalink:"/zh/v2.5/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation.md",tags:[],version:"2.5",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Rotation of Expired Webhook Certificates",weight:120},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/zh/v2.5/troubleshooting/other-troubleshooting-tips/logging"},next:{title:"Contributing to Rancher",permalink:"/zh/v2.5/contribute-to-rancher"}},u={},p=[{value:"1. Users with cluster access, run the following commands:",id:"1-users-with-cluster-access-run-the-following-commands",level:5},{value:"2. Users with no cluster access via <code>kubectl</code>:",id:"2-users-with-no-cluster-access-via-kubectl",level:5}],h={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For Rancher versions that have ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-webhook")," installed, certain versions created certificates that will expire after one year. It will be necessary for you to rotate your webhook certificate if the certificate did not renew."),(0,i.kt)("p",null,"In Rancher v2.5.12 and up, rancher-webhook deployments will automatically renew their TLS certificate when it is within 30 or fewer days of its expiration date. If you are using v2.5.11 or below, there are two methods to work around this issue:"),(0,i.kt)("h5",{id:"1-users-with-cluster-access-run-the-following-commands"},"1. Users with cluster access, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl delete secret -n cattle-system cattle-webhook-tls\nkubectl delete mutatingwebhookconfigurations.admissionregistration.k8s.io --ignore-not-found=true rancher.cattle.io\nkubectl delete pod -n cattle-system -l app=rancher-webhook\n")),(0,i.kt)("h5",{id:"2-users-with-no-cluster-access-via-kubectl"},"2. Users with no cluster access via ",(0,i.kt)("inlineCode",{parentName:"h5"},"kubectl"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-webhook-tls")," secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace in the local cluster.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher.cattle.io")," mutating webhook")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-webhook")," pod in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace in the local cluster."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The webhook certificate expiration issue is not specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-webhook-tls")," as listed in the examples. You will fill in your expired certificate secret accordingly."))}d.isMDXComponent=!0}}]);
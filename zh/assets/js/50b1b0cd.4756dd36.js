"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76855],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},60563:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],c={title:"2. \u5728 Rancher \u4e2d\u914d\u7f6e Microsoft AD FS",weight:1205},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",title:"2. \u5728 Rancher \u4e2d\u914d\u7f6e Microsoft AD FS",description:"\u5b8c\u6210\u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher \u540e\uff0c\u5c06\u4f60\u7684 AD FS \u4fe1\u606f\u8f93\u5165 Rancher\uff0c\u6765\u5141\u8bb8 Rancher \u901a\u8fc7 AD FS \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"2. \u5728 Rancher \u4e2d\u914d\u7f6e Microsoft AD FS",weight:1205},sidebar:"tutorialSidebar",previous:{title:"1. \u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},next:{title:"\u914d\u7f6e Shibboleth (SAML)",permalink:"/zh/pages-for-subheaders/configure-shibboleth-saml"}},d={},m=[],p={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5b8c\u6210",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"\u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher")," \u540e\uff0c\u5c06\u4f60\u7684 AD FS \u4fe1\u606f\u8f93\u5165 Rancher\uff0c\u6765\u5141\u8bb8 Rancher \u901a\u8fc7 AD FS \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u914d\u7f6e ADFS \u670d\u52a1\u5668\u7684\u91cd\u8981\u8bf4\u660e\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SAML 2.0 WebSSO \u534f\u8bae\u670d\u52a1 URL \u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_SERVER>/v1-saml/adfs/saml/acs")),(0,i.kt)("li",{parentName:"ul"},"\u4fe1\u8d56\u65b9\u4fe1\u4efb\u6807\u8bc6\u7b26 URL \u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_SERVER>/v1-saml/adfs/saml/metadata")),(0,i.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u4ece AD FS \u670d\u52a1\u5668\u5bfc\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"federationmetadata.xml")," \u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml")," \u4e2d\u627e\u5230\u8be5\u6587\u4ef6\u3002")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u8ba4\u8bc1"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"ADFS"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u586b\u5199",(0,i.kt)("strong",{parentName:"p"},"\u914d\u7f6e AD FS \u8d26\u53f7"),"\u8868\u5355\u3002Microsoft AD FS \u5141\u8bb8\u4f60\u6307\u5b9a\u73b0\u6709\u7684 Active Directory (AD) \u670d\u52a1\u5668\u3002",(0,i.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE"},"\u4ee5\u4e0b\u914d\u7f6e\u793a\u4f8b"),"\u63cf\u8ff0\u4e86\u5982\u4f55\u5c06 AD \u5c5e\u6027\u6620\u5c04\u5230 Rancher \u4e2d\u7684\u5b57\u6bb5\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b8c\u6210",(0,i.kt)("strong",{parentName:"p"},"\u914d\u7f6e AD FS \u8d26\u53f7"),"\u8868\u5355\u540e\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"),(0,i.kt)("p",{parentName:"li"},"Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 AD FS \u767b\u5f55\u9875\u9762\u3002\u8f93\u5165\u4f7f\u7528 Microsoft AD FS \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\uff0c\u6765\u9a8c\u8bc1\u4f60\u7684 Rancher AD FS \u914d\u7f6e\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u53ef\u80fd\u9700\u8981\u7981\u7528\u5f39\u51fa\u7a97\u53e3\u963b\u6b62\u7a0b\u5e8f\u624d\u80fd\u770b\u5230 AD FS \u767b\u5f55\u9875\u9762\u3002"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 AD FS\u3002\u4f60\u7684\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 AD FS \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002"),(0,i.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u540d\u79f0\u5b57\u6bb5"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u7528\u6237\u663e\u793a\u540d\u79f0\u7684 AD \u5c5e\u6027\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u793a\u4f8b\uff1a",(0,i.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u5b57\u6bb5"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u7528\u6237\u540d/\u7ed9\u5b9a\u540d\u79f0\u7684 AD \u5c5e\u6027\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u793a\u4f8b\uff1a",(0,i.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UID \u5b57\u6bb5"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u7528\u6237\u72ec\u6709\u7684 AD \u5c5e\u6027\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u793a\u4f8b\uff1a",(0,i.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7ec4\u5b57\u6bb5"),(0,i.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7528\u4e8e\u7ba1\u7406\u7ec4\u6210\u5458\u5173\u7cfb\u7684\u6761\u76ee\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u793a\u4f8b\uff1a",(0,i.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/claims/Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher API \u4e3b\u673a"),(0,i.kt)("td",{parentName:"tr",align:null},"Rancher Server \u7684 URL\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u79c1\u94a5/\u8bc1\u4e66"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 Rancher \u548c\u4f60\u7684 AD FS \u4e4b\u95f4\u521b\u5efa\u5b89\u5168\u5916\u58f3\uff08SSH\uff09\u7684\u5bc6\u94a5/\u8bc1\u4e66\u5bf9\u3002\u786e\u4fdd\u5c06 Common Name (CN) \u8bbe\u7f6e\u4e3a Rancher Server URL\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"#cert-command"},"\u8bc1\u4e66\u521b\u5efa\u547d\u4ee4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5143\u6570\u636e XML"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4ece AD FS \u670d\u52a1\u5668\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"federationmetadata.xml")," \u6587\u4ef6\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"td"},"https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml")," \u627e\u5230\u8be5\u6587\u4ef6\u3002")))),(0,i.kt)("a",{id:"cert-command"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 openssl \u547d\u4ee4\u751f\u6210\u8bc1\u4e66\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n')))))}u.isMDXComponent=!0}}]);
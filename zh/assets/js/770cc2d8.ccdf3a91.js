"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[38259],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),h=c(n),b=o,d=h["".concat(s,".").concat(b)]||h[b]||p[b]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84465:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={title:"Shibboleth \u548c OpenLDAP \u7684\u7ec4\u6743\u9650",weight:1},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",title:"Shibboleth \u548c OpenLDAP \u7684\u7ec4\u6743\u9650",description:"\u672c\u6587\u4e3a\u6253\u7b97\u5728 Rancher \u4e2d\u8bbe\u7f6e Shibboleth \u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u63d0\u4f9b\u80cc\u666f\u4fe1\u606f\u548c\u4e0a\u4e0b\u6587\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions.md",tags:[],version:"current",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Shibboleth \u548c OpenLDAP \u7684\u7ec4\u6743\u9650",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e Shibboleth (SAML)",permalink:"/zh/pages-for-subheaders/configure-shibboleth-saml"},next:{title:"RBAC",permalink:"/zh/pages-for-subheaders/manage-role-based-access-control-rbac"}},l={},p=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:3},{value:"\u5c06 OpenLDAP \u7ec4\u6743\u9650\u6dfb\u52a0\u5230 Rancher \u8d44\u6e90",id:"\u5c06-openldap-\u7ec4\u6743\u9650\u6dfb\u52a0\u5230-rancher-\u8d44\u6e90",level:3}],h={toc:p};function b(e){var t=e.components,u=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3a\u6253\u7b97\u5728 Rancher \u4e2d\u8bbe\u7f6e Shibboleth \u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u63d0\u4f9b\u80cc\u666f\u4fe1\u606f\u548c\u4e0a\u4e0b\u6587\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e Shibboleth \u662f SAML \u63d0\u4f9b\u8005\uff0c\u56e0\u6b64\u5b83\u4e0d\u652f\u6301\u641c\u7d22\u7528\u6237\u7ec4\u7684\u529f\u80fd\u3002\u867d\u7136 Shibboleth \u96c6\u6210\u53ef\u4ee5\u9a8c\u8bc1\u7528\u6237\u51ed\u8bc1\uff0c\u4f46\u662f\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u914d\u7f6e\uff0cShibboleth \u4e0d\u80fd\u5728 Rancher \u4e2d\u7ed9\u7528\u6237\u7ec4\u5206\u914d\u6743\u9650\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e OpenLDAP \u6807\u8bc6\u63d0\u4f9b\u8005\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5982\u679c\u8ba9 Shibboleth \u4f7f\u7528 OpenLDAP \u540e\u7aef\uff0c\u4f60\u5c06\u80fd\u591f\u5728 Rancher \u4e2d\u641c\u7d22\u7ec4\uff0c\u5e76\u4ece Rancher UI \u5c06\u96c6\u7fa4\u3001\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u7b49\u8d44\u6e90\u5206\u914d\u7ed9\u7528\u6237\u7ec4\u3002"),(0,a.kt)("h3",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shibboleth"),"\uff1a\u7528\u4e8e\u8ba1\u7b97\u673a\u7f51\u7edc\u548c\u4e92\u8054\u7f51\u7684\u5355\u70b9\u767b\u5f55\u7cfb\u7edf\u3002\u5b83\u5141\u8bb8\u7528\u6237\u4ec5\u4f7f\u7528\u4e00\u79cd\u8eab\u4efd\u767b\u5f55\u5230\u5404\u79cd\u7cfb\u7edf\u3002\u5b83\u9a8c\u8bc1\u7528\u6237\u51ed\u8bc1\uff0c\u4f46\u4e0d\u5355\u72ec\u5904\u7406\u7ec4\u6210\u5458\u8eab\u4efd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SAML"),"\uff1a\u5b89\u5168\u58f0\u660e\u6807\u8bb0\u8bed\u8a00\uff08Security Assertion Markup Language\uff09\uff0c\u7528\u4e8e\u5728\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u548c\u670d\u52a1\u63d0\u4f9b\u5546\u4e4b\u95f4\u4ea4\u6362\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u6570\u636e\u7684\u5f00\u653e\u6807\u51c6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OpenLDAP"),"\uff1a\u8f7b\u578b\u76ee\u5f55\u8bbf\u95ee\u534f\u8bae\uff08LDAP\uff09\u7684\u514d\u8d39\u5f00\u6e90\u5b9e\u73b0\u3002\u5b83\u7528\u4e8e\u7ba1\u7406\u7ec4\u7ec7\u7684\u8ba1\u7b97\u673a\u548c\u7528\u6237\u3002OpenLDAP \u5bf9 Rancher \u7528\u6237\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u5b83\u652f\u6301\u7ec4\u3002\u53ea\u8981\u7ec4\u5df2\u5b58\u5728\u4e8e\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u4e2d\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728 Rancher \u4e2d\u4e3a\u7ec4\u5206\u914d\u6743\u9650\uff0c\u4ece\u800c\u8ba9\u7ec4\u8bbf\u95ee\u8d44\u6e90\uff08\u4f8b\u5982\u96c6\u7fa4\uff0c\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IdP \u6216 IDP"),"\uff1a\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u3002OpenLDAP \u662f\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002")),(0,a.kt)("h3",{id:"\u5c06-openldap-\u7ec4\u6743\u9650\u6dfb\u52a0\u5230-rancher-\u8d44\u6e90"},"\u5c06 OpenLDAP \u7ec4\u6743\u9650\u6dfb\u52a0\u5230 Rancher \u8d44\u6e90"),(0,a.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86 OpenLDAP \u7ec4\u7684\u6210\u5458\u5982\u4f55\u8bbf\u95ee Rancher \u4e2d\u8be5\u7ec4\u6709\u6743\u8bbf\u95ee\u7684\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u96c6\u7fa4\u6240\u6709\u8005\u53ef\u4ee5\u5c06 OpenLDAP \u7ec4\u6dfb\u52a0\u5230\u96c6\u7fa4\uff0c\u4ece\u800c\u8ba9\u7ec4\u6709\u6743\u67e5\u770b\u5927\u591a\u6570\u96c6\u7fa4\u7ea7\u522b\u7684\u8d44\u6e90\u5e76\u521b\u5efa\u65b0\u9879\u76ee\u3002\u7136\u540e\uff0cOpenLDAP \u7ec4\u6210\u5458\u5728\u767b\u5f55 Rancher \u540e\u5c31\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cOpenLDAP \u5141\u8bb8\u96c6\u7fa4\u6240\u6709\u8005\u5728\u5206\u914d\u6743\u9650\u65f6\u641c\u7d22\u7ec4\u3002\u5982\u679c\u6ca1\u6709 OpenLDAP\uff0c\u5c06\u4e0d\u652f\u6301\u641c\u7d22\u7ec4\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5f53 OpenLDAP \u7ec4\u7684\u6210\u5458\u767b\u5f55\u5230 Rancher \u65f6\uff0c\u7528\u6237\u5c06\u88ab\u91cd\u5b9a\u5411\u5230 Shibboleth \u5e76\u5728\u90a3\u91cc\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"),(0,a.kt)("p",null,"Shibboleth \u4f1a\u9a8c\u8bc1\u7528\u6237\u7684\u51ed\u8bc1\uff0c\u5e76\u4ece OpenLDAP \u68c0\u7d22\u7528\u6237\u5c5e\u6027\uff0c\u5176\u4e2d\u5305\u62ec\u7528\u6237\u6240\u5728\u7684\u7ec4\u4fe1\u606f\u3002\u7136\u540e Shibboleth \u5c06\u5411 Rancher \u53d1\u9001\u4e00\u4e2a\u5305\u542b\u7528\u6237\u5c5e\u6027\u7684 SAML \u65ad\u8a00\u3002Rancher \u4f1a\u4f7f\u7528\u7ec4\u6570\u636e\uff0c\u4ee5\u4fbf\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u4ed6\u6240\u5728\u7684\u7ec4\u6709\u6743\u8bbf\u95ee\u7684\u6240\u6709\u8d44\u6e90\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding OpenLDAP Group Permissions to Rancher Resources",src:n(48277).Z,width:"656",height:"730"})))}b.isMDXComponent=!0},48277:function(e,t,n){t.Z=n.p+"assets/images/shibboleth-with-openldap-groups-f337a46dd2c87e8342c13b8486a8c7b9.svg"}}]);
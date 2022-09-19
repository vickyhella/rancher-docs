"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74566],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,k=u["".concat(o,".").concat(f)]||u[f]||m[f]||l;return a?n.createElement(k,p(p({ref:t},d),{},{components:a})):n.createElement(k,p({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<l;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53042:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],i={title:"OpenLDAP \u914d\u7f6e\u53c2\u8003",weight:2},o=void 0,c={unversionedId:"reference-guides/configure-openldap/openldap-config-reference",id:"reference-guides/configure-openldap/openldap-config-reference",title:"OpenLDAP \u914d\u7f6e\u53c2\u8003",description:"\u672c\u6587\u63d0\u4f9b\u5728 Rancher \u4e2d\u8bbe\u7f6e OpenLDAP \u8eab\u4efd\u9a8c\u8bc1\u7684\u53c2\u8003\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/configure-openldap/openldap-config-reference.md",sourceDirName:"reference-guides/configure-openldap",slug:"/reference-guides/configure-openldap/openldap-config-reference",permalink:"/zh/reference-guides/configure-openldap/openldap-config-reference",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/configure-openldap/openldap-config-reference.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"OpenLDAP \u914d\u7f6e\u53c2\u8003",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e OpenLDAP",permalink:"/zh/pages-for-subheaders/configure-openldap"},next:{title:"Kubernetes \u6982\u5ff5",permalink:"/zh/reference-guides/kubernetes-concepts"}},d={},m=[{value:"\u80cc\u666f\uff1aOpenLDAP \u8ba4\u8bc1\u6d41\u7a0b",id:"\u80cc\u666fopenldap-\u8ba4\u8bc1\u6d41\u7a0b",level:2},{value:"\u7528\u6237 Schema \u914d\u7f6e",id:"\u7528\u6237-schema-\u914d\u7f6e",level:3},{value:"\u7ec4 Schema \u914d\u7f6e",id:"\u7ec4-schema-\u914d\u7f6e",level:3}],u={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u63d0\u4f9b\u5728 Rancher \u4e2d\u8bbe\u7f6e OpenLDAP \u8eab\u4efd\u9a8c\u8bc1\u7684\u53c2\u8003\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u914d\u7f6e OpenLDAP \u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://www.openldap.org/doc/"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u719f\u6089",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/about-authentication#%E5%A4%96%E9%83%A8%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E9%85%8D%E7%BD%AE%E5%92%8C%E7%94%A8%E6%88%B7%E4%B8%BB%E4%BD%93"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u914d\u7f6e\u548c\u4e3b\u4f53\u7528\u6237"),"\u7684\u6982\u5ff5\u3002")),(0,l.kt)("h2",{id:"\u80cc\u666fopenldap-\u8ba4\u8bc1\u6d41\u7a0b"},"\u80cc\u666f\uff1aOpenLDAP \u8ba4\u8bc1\u6d41\u7a0b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f53\u7528\u6237\u5c1d\u8bd5\u4f7f\u7528\u5176 LDAP \u51ed\u8bc1\u767b\u5f55\u65f6\uff0cRancher \u4f1a\u4f7f\u7528\u5177\u6709\u641c\u7d22\u76ee\u5f55\u548c\u8bfb\u53d6\u7528\u6237/\u7ec4\u5c5e\u6027\u6743\u9650\u7684 ServiceAccount\uff0c\u521b\u5efa\u4e0e LDAP \u670d\u52a1\u5668\u7684\u521d\u59cb\u7ed1\u5b9a\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7136\u540e\uff0cRancher \u4f7f\u7528\u641c\u7d22\u7b5b\u9009\u5668\u6839\u636e\u7528\u6237\u540d\u548c\u914d\u7f6e\u7684\u5c5e\u6027\u6620\u5c04\u4e3a\u7528\u6237\u641c\u7d22\u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u627e\u5230\u7528\u6237\u540e\uff0c\u5c06\u4f7f\u7528\u7528\u6237\u7684 DN \u548c\u63d0\u4f9b\u7684\u5bc6\u7801\uff0c\u901a\u8fc7\u53e6\u4e00\u4e2a LDAP \u7ed1\u5b9a\u8bf7\u6c42\u5bf9\u7528\u6237\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8eab\u4efd\u9a8c\u8bc1\u6210\u529f\u540e\uff0cRancher \u5c06\u57fa\u4e8e\u7528\u6237\u5bf9\u8c61\u7684\u6210\u5458\u5c5e\u6027\u548c\u914d\u7f6e\u7684\u7528\u6237\u6620\u5c04\u5c5e\u6027\u6267\u884c\u7ec4\u641c\u7d22\uff0c\u6765\u89e3\u6790\u7ec4\u6210\u5458\u3002")),(0,l.kt)("h1",{id:"openldap-\u670d\u52a1\u5668\u914d\u7f6e"},"OpenLDAP \u670d\u52a1\u5668\u914d\u7f6e"),(0,l.kt)("p",null,"\u4f60\u5c06\u9700\u8981\u8f93\u5165\u5730\u5740\uff0c\u7aef\u53e3\u548c\u534f\u8bae\u6765\u8fde\u63a5\u5230 OpenLDAP \u670d\u52a1\u5668\u3002\u4e0d\u5b89\u5168\u6d41\u91cf\u7684\u6807\u51c6\u7aef\u53e3\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"389"),"\uff0cTLS \u6d41\u91cf\u7684\u6807\u51c6\u7aef\u53e3\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"636"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 TLS\uff1f")),(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c OpenLDAP \u670d\u52a1\u5668\u4f7f\u7528\u7684\u8bc1\u4e66\u662f\u81ea\u7b7e\u540d\u7684\u6216\u4e0d\u662f\u6765\u81ea\u8ba4\u53ef\u7684\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff0c\u8bf7\u786e\u4fdd\u624b\u5934\u6709 PEM \u683c\u5f0f\u7684 CA \u8bc1\u4e66\uff08\u5305\u542b\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\uff09\u3002\u4f60\u5fc5\u987b\u5728\u914d\u7f6e\u671f\u95f4\u7c98\u8d34\u6b64\u8bc1\u4e66\uff0c\u4ee5\u4fbf Rancher \u80fd\u591f\u9a8c\u8bc1\u8bc1\u4e66\u94fe\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u8981\u5728\u7528\u6237/\u7ec4",(0,l.kt)("inlineCode",{parentName:"p"},"\u641c\u7d22\u5e93"),"\u5b57\u6bb5\u4e2d\u8f93\u5165\u4ec0\u4e48\u503c\uff0c\u8bf7\u54a8\u8be2\u4f60\u7684 LDAP \u7ba1\u7406\u5458\uff0c\u6216\u53c2\u89c1 Active Directory \u8eab\u4efd\u9a8c\u8bc1\u6587\u6863\u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory#%E9%99%84%E5%BD%95%EF%BC%9A%E4%BD%BF%E7%94%A8-ldapsearch-%E7%A1%AE%E5%AE%9A%E6%90%9C%E7%B4%A2%E5%BA%93%E5%92%8C-schema"},"\u4f7f\u7528 ldapsearch \u786e\u5b9a\u641c\u7d22\u5e93\u548c Schema")," \u7ae0\u8282\u3002"),(0,l.kt)("figcaption",null,"OpenLDAP \u670d\u52a1\u5668\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u673a\u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a OpenLDAP \u670d\u52a1\u5668\u7684\u4e3b\u673a\u540d\u6216 IP \u5730\u5740\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a OpenLDAP \u670d\u52a1\u5668\u76d1\u542c\u8fde\u63a5\u7684\u7aef\u53e3\u3002\u672a\u52a0\u5bc6\u7684 LDAP \u901a\u5e38\u4f7f\u7528 389 \u7684\u6807\u51c6\u7aef\u53e3\uff0c\u800c LDAPS \u4f7f\u7528 636 \u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TLS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9009\u4e2d\u6b64\u6846\u53ef\u542f\u7528 SSL/TLS \u4e0a\u7684 LDAP\uff08\u901a\u5e38\u79f0\u4e3a LDAPS\uff09\u3002\u5982\u679c\u670d\u52a1\u5668\u4f7f\u7528\u81ea\u7b7e\u540d/\u4f01\u4e1a\u7b7e\u540d\u7684\u8bc1\u4e66\uff0c\u5219\u8fd8\u9700\u8981\u7c98\u8d34 CA \u8bc1\u4e66\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u8fde\u63a5\u8d85\u65f6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rancher \u5728\u8ba4\u4e3a\u65e0\u6cd5\u8bbf\u95ee\u670d\u52a1\u5668\u4e4b\u524d\u7b49\u5f85\u7684\u65f6\u95f4\uff08\u79d2\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ServiceAccount \u6807\u8bc6\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u5165\u7528\u4e8e\u7ed1\u5b9a\uff0c\u641c\u7d22\u548c\u68c0\u7d22 LDAP \u6761\u76ee\u7684\u7528\u6237\u7684\u6807\u8bc6\u540d\u79f0\uff08DN\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ServiceAccount \u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ServiceAccount \u7684\u5bc6\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u641c\u7d22\u5e93"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u8f93\u5165\u76ee\u5f55\u6811\u4e2d\u5f00\u59cb\u641c\u7d22\u7528\u6237\u5bf9\u8c61\u7684\u8282\u70b9\u7684\u6807\u8bc6\u540d\u79f0\uff08DN\uff09\u3002\u6240\u6709\u7528\u6237\u90fd\u5fc5\u987b\u662f\u6b64\u57fa\u7840\u6807\u8bc6\u540d\u79f0\u7684\u540e\u4ee3\u3002\u4f8b\u5982\uff0c"ou=people,dc=acme,dc=com"\u3002')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u641c\u7d22\u5e93"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u7ec4\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"td"},"\u7528\u6237\u641c\u7d22\u5e93"),'\u4e0b\u914d\u7f6e\u7684\u8282\u70b9\u4e4b\u5916\u7684\u5176\u4ed6\u8282\u70b9\u4e0b\uff0c\u5219\u9700\u8981\u5728\u6b64\u5904\u63d0\u4f9b\u6807\u8bc6\u540d\u79f0\u3002\u5426\u5219\uff0c\u5c06\u6b64\u5b57\u6bb5\u7559\u7a7a\u3002\u4f8b\u5982\uff1a"ou=groups,dc=acme,dc=com"\u3002')))),(0,l.kt)("h1",{id:"\u7528\u6237\u7ec4-schema-\u914d\u7f6e"},"\u7528\u6237/\u7ec4 Schema \u914d\u7f6e"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684 OpenLDAP \u76ee\u5f55\u4e0d\u540c\u4e8e\u6807\u51c6\u7684 OpenLDAP Schema\uff0c\u5219\u5fc5\u987b\u5b8c\u6210",(0,l.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 Schema")," \u90e8\u5206\u5b9e\u73b0\u5339\u914d\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cRancher \u4f7f\u7528\u672c\u8282\u4e2d\u914d\u7f6e\u7684\u5c5e\u6027\u6620\u5c04\u6765\u6784\u9020\u641c\u7d22\u7b5b\u9009\u5668\u548c\u89e3\u6790\u7ec4\u6210\u5458\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u9a8c\u8bc1\u6b64\u5904\u7684\u914d\u7f6e\u662f\u5426\u4e0e\u4f60\u5728 OpenLDAP \u4e2d\u4f7f\u7528\u7684 Schema \u5339\u914d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a OpenLDAP \u670d\u52a1\u5668\u4e2d\u4f7f\u7528\u7684\u7528\u6237/\u7ec4 Schema\uff0c\u8bf7\u54a8\u8be2\u4f60\u7684 LDAP \u7ba1\u7406\u5458\uff0c\u6216\u53c2\u89c1 Active Directory \u8eab\u4efd\u9a8c\u8bc1\u6587\u6863\u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory#%E9%99%84%E5%BD%95%EF%BC%9A%E4%BD%BF%E7%94%A8-ldapsearch-%E7%A1%AE%E5%AE%9A%E6%90%9C%E7%B4%A2%E5%BA%93%E5%92%8C-schema"},"\u4f7f\u7528 ldapsearch \u786e\u5b9a\u641c\u7d22\u5e93\u548c Schema")," \u7ae0\u8282\u3002"),(0,l.kt)("h3",{id:"\u7528\u6237-schema-\u914d\u7f6e"},"\u7528\u6237 Schema \u914d\u7f6e"),(0,l.kt)("p",null,"\u4e0b\u8868\u8be6\u7ec6\u8bf4\u660e\u4e86\u7528\u6237 Schema \u914d\u7f6e\u7684\u53c2\u6570\u3002"),(0,l.kt)("figcaption",null,"\u7528\u6237 Schema \u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Object Class"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u57df\u4e2d\u7528\u4e8e\u7528\u6237\u5bf9\u8c61\u7684\u5bf9\u8c61\u7c7b\u522b\u540d\u79f0\u3002\u5982\u679c\u5b9a\u4e49\u4e86\u6b64\u53c2\u6570\uff0c\u5219\u4ec5\u6307\u5b9a\u5bf9\u8c61\u7c7b\u522b\u7684\u540d\u79f0 - ",(0,l.kt)("em",{parentName:"td"},"\u8bf7\u52ff"),"\u5c06\u5176\u653e\u5728 LDAP \u5305\u88c5\u5668\u4e2d\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"&(objectClass=xxxx)"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Username Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5c5e\u6027\u7684\u503c\u9002\u5408\u4f5c\u4e3a\u663e\u793a\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Login Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u767b\u5f55\u5c5e\u6027\u7684\u503c\u4e0e\u7528\u6237\u767b\u5f55 Rancher \u65f6\u8f93\u5165\u7684\u51ed\u8bc1\u7684\u7528\u6237\u540d\u90e8\u5206\u5339\u914d\u3002\u901a\u5e38\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"uid"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"User Member Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u7528\u6237\u6240\u5c5e\u7ec4\u7684\u6807\u8bc6\u540d\u79f0\u7684\u7528\u6237\u5c5e\u6027\u3002\u901a\u5e38\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"memberOf")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"isMemberOf"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Search Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u7528\u6237\u8f93\u5165\u6587\u672c\u4ee5\u5728\u7528\u6237\u754c\u9762\u4e2d\u6dfb\u52a0\u7528\u6237\u6216\u7ec4\u65f6\uff0cRancher \u4f1a\u67e5\u8be2 LDAP \u670d\u52a1\u5668\uff0c\u5e76\u5c1d\u8bd5\u6839\u636e\u6b64\u8bbe\u7f6e\u4e2d\u63d0\u4f9b\u7684\u5c5e\u6027\u5339\u914d\u7528\u6237\u3002\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u7ba1\u9053\uff08\u201c","|","\u201d\uff09\u7b26\u53f7\u5206\u9694\u5c5e\u6027\u6765\u6307\u5b9a\u591a\u4e2a\u5c5e\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"User Enabled Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c OpenLDAP \u670d\u52a1\u5668\u7684 Schema \u652f\u6301\u4f7f\u7528\u7528\u6237\u5c5e\u6027\u7684\u503c\u6765\u8bc4\u4f30\u8d26\u53f7\u662f\u7981\u7528\u8fd8\u662f\u5173\u95ed\uff0c\u8bf7\u8f93\u5165\u8be5\u5c5e\u6027\u7684\u540d\u79f0\u3002\u9ed8\u8ba4\u7684 OpenLDAP Schema \u4e0d\u652f\u6301\u6b64\u529f\u80fd\uff0c\u56e0\u6b64\u6b64\u5b57\u6bb5\u901a\u5e38\u7559\u7a7a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Disabled Status Bitmask"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7981\u7528/\u9501\u5b9a\u7684\u7528\u6237\u8d26\u53f7\u7684\u503c\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"td"},"User Enabled Attribute")," \u662f\u7a7a\u7684\uff0c\u5219\u5ffd\u7565\u6b64\u53c2\u6570\u3002")))),(0,l.kt)("h3",{id:"\u7ec4-schema-\u914d\u7f6e"},"\u7ec4 Schema \u914d\u7f6e"),(0,l.kt)("p",null,"\u4e0b\u8868\u8be6\u7ec6\u8bf4\u660e\u4e86\u7ec4 Schema \u914d\u7f6e\u7684\u53c2\u6570\u3002"),(0,l.kt)("figcaption",null,"\u7ec4 Schema \u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Object Class"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u57df\u4e2d\u7528\u4e8e\u7ec4\u6761\u76ee\u7684\u5bf9\u8c61\u7c7b\u522b\u540d\u79f0\u3002\u5982\u679c\u5b9a\u4e49\u4e86\u6b64\u53c2\u6570\uff0c\u5219\u4ec5\u6307\u5b9a\u5bf9\u8c61\u7c7b\u522b\u7684\u540d\u79f0 - ",(0,l.kt)("em",{parentName:"td"},"\u8bf7\u52ff"),"\u5c06\u5176\u653e\u5728 LDAP \u5305\u88c5\u5668\u4e2d\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"&(objectClass=xxxx)"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Name Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u540d\u79f0\u5c5e\u6027\u7684\u503c\u9002\u5408\u4f5c\u4e3a\u663e\u793a\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Group Member User Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u7528\u6237\u5c5e\u6027"),"\u7684\u540d\u79f0\u3002\u5b83\u7684\u683c\u5f0f\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"Group Member Mapping Attribute")," \u4e2d\u7684\u7ec4\u6210\u5458\u5339\u914d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Group Member Mapping Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u7ec4\u6210\u5458\u7684\u7ec4\u5c5e\u6027\u7684\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Search Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5728 UI \u4e2d\u5c06\u7ec4\u6dfb\u52a0\u5230\u96c6\u7fa4\u6216\u9879\u76ee\u65f6\uff0c\u7528\u4e8e\u6784\u9020\u641c\u7d22\u7b5b\u9009\u5668\u7684\u5c5e\u6027\u3002\u8bf7\u53c2\u89c1\u7528\u6237 Schema \u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"Search Attribute"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Group DN Attribute"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u5c5e\u6027\u7684\u540d\u79f0\uff0c\u5176\u683c\u5f0f\u4e0e\u7528\u6237\u7684\u7ec4\u6210\u5458\u5c5e\u6027\u4e2d\u7684\u503c\u5339\u914d\u3002\u53c2\u89c1 ",(0,l.kt)("inlineCode",{parentName:"td"},"User Member Attribute"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Nested Group Membership"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u8bbe\u7f6e\u5b9a\u4e49 Rancher \u662f\u5426\u5e94\u89e3\u6790\u5d4c\u5957\u7ec4\u6210\u5458\u8eab\u4efd\u3002\u4ec5\u5f53\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528\u8fd9\u4e9b\u5d4c\u5957\u6210\u5458\u8eab\u4efd\u65f6\u624d\u4f7f\u7528\uff08\u5373\u4f60\u6709\u5305\u542b\u5176\u4ed6\u7ec4\u4f5c\u4e3a\u6210\u5458\u7684\u7ec4\uff09\u3002\u5982\u679c\u4f60\u4f7f\u7528 Shibboleth\uff0c\u6b64\u9009\u9879\u4f1a\u88ab\u7981\u7528\u3002")))))}f.isMDXComponent=!0}}]);
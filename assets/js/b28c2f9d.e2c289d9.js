"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[47161],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,s=k["".concat(d,".").concat(m)]||k[m]||u[m]||i;return n?a.createElement(s,o(o({ref:t},c),{},{components:n})):a.createElement(s,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},90900:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Configure Keycloak (OIDC)",description:"Create a Keycloak OpenID Connect (OIDC) client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",weight:1200},d=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",title:"Configure Keycloak (OIDC)",description:"Create a Keycloak OpenID Connect (OIDC) client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Configure Keycloak (OIDC)",description:"Create a Keycloak OpenID Connect (OIDC) client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",weight:1200},sidebar:"tutorialSidebar",previous:{title:"Configure GitHub",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github"},next:{title:"Configure Keycloak (SAML)",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-saml"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Keycloak in Rancher",id:"configuring-keycloak-in-rancher",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"Migrating from SAML to OIDC",id:"migrating-from-saml-to-oidc",level:2},{value:"Reconfigure Keycloak",id:"reconfigure-keycloak",level:3},{value:"Reconfigure Rancher",id:"reconfigure-rancher",level:3},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",level:2},{value:"You are not redirected to Keycloak",id:"you-are-not-redirected-to-keycloak",level:3},{value:"The generated <code>Issuer</code> and <code>Auth Endpoint</code> are incorrect",id:"the-generated-issuer-and-auth-endpoint-are-incorrect",level:3},{value:"Keycloak Error: &quot;Invalid grant_type&quot;",id:"keycloak-error-invalid-grant_type",level:3}],k={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org"},"Keycloak Identity Provider (IdP)")," for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials. Rancher supports integration with Keycloak using the OpenID Connect (OIDC) protocol and the SAML protocol. Both implementations are functionally equivalent when used with Rancher. This page describes the process to configure Rancher to work with Keycloak using the OIDC protocol."),(0,i.kt)("p",null,"If you prefer to use Keycloak with the SAML protocol instead, refer to ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-saml"},"this page"),"."),(0,i.kt)("p",null,"If you have an existing configuration using the SAML protocol and want to switch to the OIDC protocol, refer to ",(0,i.kt)("a",{parentName:"p",href:"#migrating-from-saml-to-oidc"},"this section"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On Rancher, Keycloak (SAML) is disabled.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/"},"Keycloak IdP Server")," configured.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In Keycloak, create a ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#oidc-clients"},"new OIDC client"),", with the settings below. See the ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#oidc-clients"},"Keycloak documentation")," for help."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Client ID")),(0,i.kt)("td",{parentName:"tr",align:null},"<","CLIENT_ID> (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Name")),(0,i.kt)("td",{parentName:"tr",align:null},"<","CLIENT_NAME> (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Client Protocol")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"openid-connect"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Access Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"confidential"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Valid Redirect URI")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/verify-auth")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the new OIDC client, create ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#_protocol-mappers"},"Mappers")," to expose the users fields."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Create a new "Groups Mapper" with the settings below.'),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Groups Mapper"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Mapper Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Group Membership"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Token Claim Name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"groups"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Add to ID token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Add to access token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Add to user info")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Create a new "Client Audience" with the settings below.'),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Client Audience"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Mapper Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Audience"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Included Client Audience")),(0,i.kt)("td",{parentName:"tr",align:null},"<","CLIENT_NAME>")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Add to access token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Create a new "Groups Path" with the settings below.'),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Group Path"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Mapper Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Group Membership"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Token Claim Name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"full_group_path"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Full group path")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Add to user info")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON"))))))))),(0,i.kt)("h2",{id:"configuring-keycloak-in-rancher"},"Configuring Keycloak in Rancher"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Rancher UI, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Keycloak (OIDC)"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure a Keycloak OIDC account")," form. For help with filling the form, see the ",(0,i.kt)("a",{parentName:"p",href:"#configuration-reference"},"configuration reference"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure a Keycloak OIDC account")," form, click ",(0,i.kt)("strong",{parentName:"p"},"Enable"),"."),(0,i.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Keycloak IdP to validate your Rancher Keycloak configuration."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You may need to disable your popup blocker to see the IdP login page."))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Keycloak using the OIDC protocol. Your users can now sign into Rancher using their Keycloak logins."),(0,i.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"Client ID")," of your Keycloak client.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,i.kt)("td",{parentName:"tr",align:null},"The generated ",(0,i.kt)("inlineCode",{parentName:"td"},"Secret")," of your Keycloak client. In the Keycloak console, select ",(0,i.kt)("strong",{parentName:"td"},"Clients"),", select the client you created, select the ",(0,i.kt)("strong",{parentName:"td"},"Credentials")," tab and copy the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Secret")," field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,i.kt)("td",{parentName:"tr",align:null},"A key/certificate pair to create a secure shell between Rancher and your IdP. Required if HTTPS/SSL is enabled on your Keycloak server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Endpoints"),(0,i.kt)("td",{parentName:"tr",align:null},"Choose whether to use the generated values for the ",(0,i.kt)("inlineCode",{parentName:"td"},"Rancher URL"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Issue"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"Auth Endpoint")," fields or to provide manual overrides if incorrect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keycloak URL"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL for your Keycloak server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keycloak Realm"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the realm in which the Keycloak client was created in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher URL"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Issuer"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL of your IdP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL where users are redirected to authenticate.")))),(0,i.kt)("h2",{id:"migrating-from-saml-to-oidc"},"Migrating from SAML to OIDC"),(0,i.kt)("p",null,"This section describes the process to transition from using Rancher with Keycloak (SAML) to Keycloak (OIDC)."),(0,i.kt)("h3",{id:"reconfigure-keycloak"},"Reconfigure Keycloak"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the existing client to use the OIDC protocol. In the Keycloak console, select ",(0,i.kt)("strong",{parentName:"p"},"Clients"),", select the SAML client to migrate, select the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," tab, change ",(0,i.kt)("inlineCode",{parentName:"p"},"Client Protocol")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"saml")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"openid-connect"),", and click ",(0,i.kt)("strong",{parentName:"p"},"Save"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the ",(0,i.kt)("inlineCode",{parentName:"p"},"Valid Redirect URIs")," are still valid.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Mappers")," tab and create a new Mapper with the settings below."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Groups Mapper"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Mapper Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Group Membership"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Token Claim Name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"groups"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Add to ID token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Add to access token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Add to user info")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON"))))))),(0,i.kt)("h3",{id:"reconfigure-rancher"},"Reconfigure Rancher"),(0,i.kt)("p",null,"Before configuring Rancher to use Keycloak (OIDC), Keycloak (SAML) must be first disabled. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Rancher UI, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Auth Provider"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Keycloak (SAML)"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Disable"),".")),(0,i.kt)("p",null,"Configure Rancher to use Keycloak (OIDC) by following the steps in ",(0,i.kt)("a",{parentName:"p",href:"#configuring-keycloak-in-rancher"},"this section"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After configuration is completed, Rancher user permissions will need to be reapplied as they are not automatically migrated."))),(0,i.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,i.kt)("p",null,"If you are experiencing issues while testing the connection to the Keycloak server, first double-check the configuration options of your OIDC client. You may also inspect the Rancher logs to help pinpoint what's causing issues. Debug logs may contain more detailed information about the error. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."),(0,i.kt)("p",null,"All Keycloak related log entries will be prepended with either ",(0,i.kt)("inlineCode",{parentName:"p"},"[generic oidc]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"[keycloak oidc]"),"."),(0,i.kt)("h3",{id:"you-are-not-redirected-to-keycloak"},"You are not redirected to Keycloak"),(0,i.kt)("p",null,"When you fill the ",(0,i.kt)("strong",{parentName:"p"},"Configure a Keycloak OIDC account")," form and click on ",(0,i.kt)("strong",{parentName:"p"},"Enable"),", you are not redirected to your IdP."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify your Keycloak client configuration.")),(0,i.kt)("h3",{id:"the-generated-issuer-and-auth-endpoint-are-incorrect"},"The generated ",(0,i.kt)("inlineCode",{parentName:"h3"},"Issuer")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"Auth Endpoint")," are incorrect"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Configure a Keycloak OIDC account")," form, change ",(0,i.kt)("strong",{parentName:"li"},"Endpoints")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Specify (advanced)")," and override the ",(0,i.kt)("inlineCode",{parentName:"li"},"Issuer")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth Endpoint")," values. To find the values, go to the Keycloak console and select ",(0,i.kt)("strong",{parentName:"li"},"Realm Settings"),", select the ",(0,i.kt)("strong",{parentName:"li"},"General")," tab, and click ",(0,i.kt)("strong",{parentName:"li"},"OpenID Endpoint Configuration"),". The JSON output will display values for ",(0,i.kt)("inlineCode",{parentName:"li"},"issuer")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"authorization_endpoint"),".")),(0,i.kt)("h3",{id:"keycloak-error-invalid-grant_type"},'Keycloak Error: "Invalid grant_type"'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In some cases, this error message may be misleading and is actually caused by setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"Valid Redirect URI")," incorrectly.")))}m.isMDXComponent=!0}}]);
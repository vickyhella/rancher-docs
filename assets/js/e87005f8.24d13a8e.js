"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Configure FreeIPA"},o=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa",title:"Configure FreeIPA",description:"If your organization uses FreeIPA for user authentication, you can configure Rancher to allow your users to login using their FreeIPA credentials.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Configure FreeIPA"},sidebar:"tutorialSidebar",previous:{title:"Configure Active Directory (AD)",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory"},next:{title:"Configure Azure AD",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad"}},u={},c=[],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your organization uses FreeIPA for user authentication, you can configure Rancher to allow your users to login using their FreeIPA credentials."),(0,a.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You must have a ",(0,a.kt)("a",{parentName:"li",href:"https://www.freeipa.org/"},"FreeIPA Server")," configured."),(0,a.kt)("li",{parentName:"ul"},"Create a service account in FreeIPA with ",(0,a.kt)("inlineCode",{parentName:"li"},"read-only")," access. Rancher uses this account to verify group membership when a user makes a request using an API key."),(0,a.kt)("li",{parentName:"ul"},"Read ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/authentication-config#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign into Rancher using a local user assigned the ",(0,a.kt)("inlineCode",{parentName:"p"},"administrator")," role (i.e., the ",(0,a.kt)("em",{parentName:"p"},"local principal"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,a.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"FreeIPA"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Complete the ",(0,a.kt)("strong",{parentName:"p"},"Configure an FreeIPA server")," form."),(0,a.kt)("p",{parentName:"li"},"You may need to log in to your domain controller to find the information requested in the form."),(0,a.kt)("admonition",{parentName:"li",title:"Using TLS?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the certificate is self-signed or not from a recognized certificate authority, make sure you provide the complete chain. That chain is needed to verify the server's certificate.")),(0,a.kt)("admonition",{parentName:"li",title:"User Search Base vs. Group Search Base",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Search base allows Rancher to search for users and groups that are in your FreeIPA.  These fields are only for search bases and not for search filters."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If your users and groups are in the same search base, complete only the User Search Base."),(0,a.kt)("li",{parentName:"ul"},"If your groups are in a different search base, you can optionally complete the Group Search Base. This field is dedicated to searching groups, but is not required.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If your FreeIPA deviates from the standard AD schema, complete the ",(0,a.kt)("strong",{parentName:"p"},"Customize Schema")," form to match it. Otherwise, skip this step."),(0,a.kt)("admonition",{parentName:"li",title:"Search Attribute",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Search Attribute field defaults with three specific values: ",(0,a.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),". After FreeIPA is configured, when a user enters text to add users or groups, Rancher automatically queries the FreeIPA server and attempts to match fields by user id, last name, or first name. Rancher specifically searches for users/groups that begin with the text entered in the search field."),(0,a.kt)("p",{parentName:"admonition"},"The default field value ",(0,a.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),", but you can configure this field to a subset of these fields. The pipe (",(0,a.kt)("inlineCode",{parentName:"p"},"|"),") between the fields separates these fields."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uid"),": User ID"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sn"),": Last Name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"givenName"),": First Name")),(0,a.kt)("p",{parentName:"admonition"},"With this search attribute, Rancher creates search filters for users and groups, but you ",(0,a.kt)("em",{parentName:"p"},"cannot")," add your own search filters in this field."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter your FreeIPA username and password in ",(0,a.kt)("strong",{parentName:"p"},"Authenticate with FreeIPA")," to confirm that Rancher is configured to use FreeIPA authentication.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Enable"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FreeIPA authentication is configured."),(0,a.kt)("li",{parentName:"ul"},"You are signed into Rancher with your FreeIPA account (i.e., the ",(0,a.kt)("em",{parentName:"li"},"external principal"),").")))}p.isMDXComponent=!0}}]);
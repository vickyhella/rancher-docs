"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65598],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",weight:1200},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",weight:1200},sidebar:"tutorialSidebar",previous:{title:"Configuring GitHub",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github"},next:{title:"Configuring PingIdentity (SAML)",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Keycloak in Rancher",id:"configuring-keycloak-in-rancher",level:2},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",level:2},{value:"You are not redirected to Keycloak",id:"you-are-not-redirected-to-keycloak",level:3},{value:"Forbidden message displayed after IdP login",id:"forbidden-message-displayed-after-idp-login",level:3},{value:"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata",id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata",level:3},{value:"Keycloak Error: &quot;We&#39;re sorry, failed to process response&quot;",id:"keycloak-error-were-sorry-failed-to-process-response",level:3},{value:"Keycloak Error: &quot;We&#39;re sorry, invalid requester&quot;",id:"keycloak-error-were-sorry-invalid-requester",level:3}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.1.0")),(0,o.kt)("p",null,"If your organization uses Keycloak Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You must have a ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/"},"Keycloak IdP Server")," configured.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Keycloak, create a ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"new SAML client"),", with the settings below. See the ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"Keycloak documentation")," for help."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Sign Documents")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Sign Assertions")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"All other ",(0,o.kt)("inlineCode",{parentName:"td"},"ON/OFF")," Settings"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Client ID")),(0,o.kt)("td",{parentName:"tr",align:null},"Either ",(0,o.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata")," or the value configured in the ",(0,o.kt)("inlineCode",{parentName:"td"},"Entry ID Field")," of the Rancher Keycloak configuration",(0,o.kt)("sup",null,"2"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Client Name")),(0,o.kt)("td",{parentName:"tr",align:null},"<CLIENT_NAME> (e.g. ",(0,o.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Client Protocol")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SAML"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Valid Redirect URI")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/acs"))))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"><sup>1</sup>: Optionally, you can enable either one or both of these settings.\n><sup>2</sup>: Rancher SAML metadata won't be generated until a SAML provider is configured and saved.\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(91906).Z,width:"1962",height:"2292"}),"\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the new SAML client, create Mappers to expose the users fields"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Add all "Builtin Protocol Mappers"\n',(0,o.kt)("img",{src:n(1051).Z,width:"2618",height:"898"})),(0,o.kt)("li",{parentName:"ul"},'Create a new "Group list" mapper to map the member attribute to a user\'s groups\n',(0,o.kt)("img",{src:n(19640).Z,width:"1522",height:"1070"}),"       "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Export a ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file from your Keycloak client:\nFrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"Installation")," tab, choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAML Metadata IDPSSODescriptor")," format option and download your file."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),"\nKeycloak versions 6.0.0 and up no longer provide the IDP metadata under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Installation")," tab.\nYou can still get the XML from the following url:"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"https://{KEYCLOAK-URL}/auth/realms/{REALM-NAME}/protocol/saml/descriptor")),(0,o.kt)("p",{parentName:"blockquote"},"The XML obtained from this URL contains ",(0,o.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor")," as the root element. Rancher expects the root element to be ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityDescriptor")," rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor"),". So before passing this XML to Rancher, follow these steps to adjust it:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Copy all the attributes from ",(0,o.kt)("inlineCode",{parentName:"li"},"EntitiesDescriptor")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"EntityDescriptor")," that are not present."),(0,o.kt)("li",{parentName:"ul"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"<EntitiesDescriptor>")," tag from the beginning."),(0,o.kt)("li",{parentName:"ul"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"</EntitiesDescriptor>")," from the end of the xml.")),(0,o.kt)("p",{parentName:"blockquote"},"You are left with something similar as the example below:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" entityID="https://{KEYCLOAK-URL}/auth/realms/{REALM-NAME}">\n  .... \n</EntityDescriptor>\n'))))),(0,o.kt)("h2",{id:"configuring-keycloak-in-rancher"},"Configuring Keycloak in Rancher"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,o.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Keycloak"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure Keycloak Account")," form."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"| Field                     | Description                                                                                                                                              |\n| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| Display Name Field        | The attribute that contains the display name of users. <br/><br/>Example: `givenName`                                                                    |\n| User Name Field           | The attribute that contains the user name/given name. <br/><br/>Example: `email`                                                                         |\n| UID Field                 | An attribute that is unique to every user. <br/><br/>Example: `email`                                                                                    |\n| Groups Field              | Make entries for managing group memberships. <br/><br/>Example: `member`                                                                                 |\n| Entity ID Field           | The ID that needs to be configured as a client ID in the Keycloak client. <br/><br/>Default: `https://yourRancherHostURL/v1-saml/keycloak/saml/metadata` |\n| Rancher API Host          | The URL for your Rancher Server.                                                                                                                         |\n| Private Key / Certificate | A key/certificate pair to create a secure shell between Rancher and your IdP.                                                                            |\n| IDP-metadata              | The `metadata.xml` file that you exported from your IdP server.                                                                                          |\n\n>**Tip:** You can generate a key/certificate pair using an openssl command. For example:\n>\n>        openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.cert\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure Keycloak Account")," form, click ",(0,o.kt)("strong",{parentName:"p"},"Authenticate with Keycloak"),", which is at the bottom of the page."),(0,o.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Keycloak IdP to validate your Rancher Keycloak configuration."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the IdP login page.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Keycloak. Your users can now sign into Rancher using their Keycloak logins."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAML Provider Caveats:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,o.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,o.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,o.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.")))),(0,o.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,o.kt)("p",null,"If you are experiencing issues while testing the connection to the Keycloak server, first double-check the configuration option of your SAML client. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."),(0,o.kt)("h3",{id:"you-are-not-redirected-to-keycloak"},"You are not redirected to Keycloak"),(0,o.kt)("p",null,"When you click on ",(0,o.kt)("strong",{parentName:"p"},"Authenticate with Keycloak"),", your are not redirected to your IdP."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify your Keycloak client configuration."),(0,o.kt)("li",{parentName:"ul"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"Force Post Binding")," set to ",(0,o.kt)("inlineCode",{parentName:"li"},"OFF"),".")),(0,o.kt)("h3",{id:"forbidden-message-displayed-after-idp-login"},"Forbidden message displayed after IdP login"),(0,o.kt)("p",null,"You are correctly redirected to your IdP login page and you are able to enter your credentials, however you get a ",(0,o.kt)("inlineCode",{parentName:"p"},"Forbidden")," message afterwards."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check the Rancher debug log."),(0,o.kt)("li",{parentName:"ul"},"If the log displays ",(0,o.kt)("inlineCode",{parentName:"li"},"ERROR: either the Response or Assertion must be signed"),", make sure either ",(0,o.kt)("inlineCode",{parentName:"li"},"Sign Documents")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Sign assertions")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"ON")," in your Keycloak client.")),(0,o.kt)("h3",{id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata"},"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata"),(0,o.kt)("p",null,"This is usually due to the metadata not being created until a SAML provider is configured.\nTry configuring and saving keycloak as your SAML provider and then accessing the metadata."),(0,o.kt)("h3",{id:"keycloak-error-were-sorry-failed-to-process-response"},'Keycloak Error: "We\'re sorry, failed to process response"'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,o.kt)("li",{parentName:"ul"},"If the log displays ",(0,o.kt)("inlineCode",{parentName:"li"},"failed: org.keycloak.common.VerificationException: Client does not have a public key"),", set ",(0,o.kt)("inlineCode",{parentName:"li"},"Encrypt Assertions")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")),(0,o.kt)("h3",{id:"keycloak-error-were-sorry-invalid-requester"},'Keycloak Error: "We\'re sorry, invalid requester"'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,o.kt)("li",{parentName:"ul"},"If the log displays ",(0,o.kt)("inlineCode",{parentName:"li"},"request validation failed: org.keycloak.common.VerificationException: SigAlg was null"),", set ",(0,o.kt)("inlineCode",{parentName:"li"},"Client Signature Required")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")))}m.isMDXComponent=!0},1051:function(e,t,n){t.Z=n.p+"assets/images/keycloak-saml-client-builtin-mappers-00ff9682000bed21181c493512aaac6f.png"},91906:function(e,t,n){t.Z=n.p+"assets/images/keycloak-saml-client-configuration-c6ef99ce0f7510ce130ee88e940cc430.png"},19640:function(e,t,n){t.Z=n.p+"assets/images/keycloak-saml-client-group-mapper-bc05499e6b7e1f429b0a97490c1d9ddd.png"}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19179],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],c={title:"Adding TLS Secrets",weight:2,aliases:["/rancher/v2.5/en/installation/resources/encryption/tls-secrets/","/rancher/v2.x/en/installation/resources/tls-secrets/"]},o=void 0,l={unversionedId:"getting-started/installation-and-upgrade/resources/add-tls-secrets",id:"version-2.5/getting-started/installation-and-upgrade/resources/add-tls-secrets",title:"Adding TLS Secrets",description:"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the tls-rancher-ingress secret in the cattle-system namespace with the certificate and key.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/add-tls-secrets",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/add-tls-secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",tags:[],version:"2.5",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Adding TLS Secrets",weight:2,aliases:["/rancher/v2.5/en/installation/resources/encryption/tls-secrets/","/rancher/v2.x/en/installation/resources/tls-secrets/"]},sidebar:"tutorialSidebar",previous:{title:"Helm Version Requirements",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements"},next:{title:"About Custom CA Root Certificates",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace with the certificate and key."),(0,i.kt)("p",null,"Combine the server certificate followed by any intermediate certificate(s) needed into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt"),". Copy your certificate key into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("a",{parentName:"p",href:"https://acme.sh"},"acme.sh")," provides server certificate and CA chains in ",(0,i.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," file.\nThis ",(0,i.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," should be renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt")," & certificate key file as ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls")," secret type to create the secrets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you want to replace the certificate, you can delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl -n cattle-system delete secret tls-rancher-ingress")," and add a new one using the command shown above. If you are using a private CA signed certificate, replacing the certificate is only possible if the new certificate is signed by the same CA as the certificate currently in use.")),(0,i.kt)("h1",{id:"using-a-private-ca-signed-certificate"},"Using a Private CA Signed Certificate"),(0,i.kt)("p",null,"If you are using a private CA, Rancher requires a copy of the CA certificate which is used by the Rancher Agent to validate the connection to the server."),(0,i.kt)("p",null,"Copy the CA certificate into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem=./cacerts.pem\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The configured ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret is retrieved when Rancher starts. On a running Rancher installation the updated CA will take effect after new Rancher pods are started.")),(0,i.kt)("h1",{id:"updating-a-private-ca-certificate"},"Updating a Private CA Certificate"),(0,i.kt)("p",null,"Follow the steps on ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},"this page")," to update the SSL certificate of the ingress in a Rancher ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"high availability Kubernetes installation")," or to switch from the default self-signed certificate to a custom certificate."))}f.isMDXComponent=!0}}]);
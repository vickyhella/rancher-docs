"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87302],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(o,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],c={title:"Adding Kubernetes TLS Secrets",description:"Read about how to populate the Kubernetes TLS secret for a Rancher installation",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/helm-rancher/tls-secrets","/rancher/v2.x/en/installation/resources/advanced/helm2/helm-rancher/tls-secrets/"]},o=void 0,l={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets",title:"Adding Kubernetes TLS Secrets",description:"Read about how to populate the Kubernetes TLS secret for a Rancher installation",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Adding Kubernetes TLS Secrets",description:"Read about how to populate the Kubernetes TLS secret for a Rancher installation",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/helm-rancher/tls-secrets","/rancher/v2.x/en/installation/resources/advanced/helm2/helm-rancher/tls-secrets/"]},sidebar:"tutorialSidebar",previous:{title:"4.  Install Rancher",permalink:"/v2.0-v2.4/pages-for-subheaders/helm-rancher"},next:{title:"Chart Options",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/chart-options"}},d={},p=[{value:"Using a Private CA Signed Certificate",id:"using-a-private-ca-signed-certificate",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace with the certificate and key."),(0,i.kt)("p",null,"Combine the server certificate followed by any intermediate certificate(s) needed into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt"),". Copy your certificate key into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls")," secret type to create the secrets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you want to replace the certificate, you can delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl -n cattle-system delete secret tls-rancher-ingress")," and add a new one using the command shown above. If you are using a private CA signed certificate, replacing the certificate is only possible if the new certificate is signed by the same CA as the certificate currently in use.")),(0,i.kt)("h3",{id:"using-a-private-ca-signed-certificate"},"Using a Private CA Signed Certificate"),(0,i.kt)("p",null,"If you are using a private CA, Rancher requires a copy of the CA certificate which is used by the Rancher Agent to validate the connection to the server."),(0,i.kt)("p",null,"Copy the CA certificate into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:")," Make sure the file is called ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," as Rancher uses that filename to configure the CA certificate.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem\n")))}h.isMDXComponent=!0}}]);
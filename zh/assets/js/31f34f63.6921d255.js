"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[28768],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=r,m=p["".concat(d,".").concat(g)]||p[g]||c[g]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},94217:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"Enable API Auditing",weight:300,aliases:["/rke/latest/en/config-options/add-ons/api-auditing/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/api-auditing","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/api-auditing/"]},d=void 0,s={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/api-auditing",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/api-auditing",title:"Enable API Auditing",description:"Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/api-auditing.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/api-auditing",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/api-auditing",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/api-auditing.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Enable API Auditing",weight:300,aliases:["/rke/latest/en/config-options/add-ons/api-auditing/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/api-auditing","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/api-auditing/"]},sidebar:"tutorialSidebar",previous:{title:"HTTP Proxy Configuration",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy"},next:{title:"Troubleshooting HA RKE Add-On Install",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting"}},u={},c=[{value:"In-line Arguments",id:"in-line-arguments",level:2}],p={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,o.kt)("p",{parentName:"blockquote"},"Please use the Rancher Helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Kubernetes Install "),"."),(0,o.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,o.kt)("p",null,"If you're using RKE to install Rancher, you can use directives to enable API Auditing for your Rancher install. You can know what happened, when it happened, who initiated it, and what cluster it affected. API auditing records all requests and responses to and from the Rancher API, which includes use of the Rancher UI and any other use of the Rancher API through programmatic use."),(0,o.kt)("h2",{id:"in-line-arguments"},"In-line Arguments"),(0,o.kt)("p",null,"Enable API Auditing using RKE by adding arguments to your Rancher container."),(0,o.kt)("p",null,"To enable API auditing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add API Auditing arguments (",(0,o.kt)("inlineCode",{parentName:"li"},"args"),") to your Rancher container."),(0,o.kt)("li",{parentName:"ul"},"Declare a ",(0,o.kt)("inlineCode",{parentName:"li"},"mountPath")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"volumeMounts")," directive of the container."),(0,o.kt)("li",{parentName:"ul"},"Declare a ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"volumes")," directive.")),(0,o.kt)("p",null,"For more information about each argument, its syntax, and how to view API Audit logs, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"},"Rancher v2.0 Documentation: API Auditing"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'...\ncontainers:\n        - image: rancher/rancher:latest\n          imagePullPolicy: Always\n          name: cattle-server\n          args: ["--audit-log-path", "/var/log/auditlog/rancher-api-audit.log", "--audit-log-maxbackup", "5", "--audit-log-maxsize", "50", "--audit-level", "2"]\n          ports:\n          - containerPort: 80\n            protocol: TCP\n          - containerPort: 443\n            protocol: TCP\n          volumeMounts:\n          - mountPath: /etc/rancher/ssl\n            name: cattle-keys-volume\n            readOnly: true\n          - mountPath: /var/log/auditlog\n            name: audit-log-dir\n        volumes:\n        - name: cattle-keys-volume\n          secret:\n            defaultMode: 420\n            secretName: cattle-keys-server\n        - name: audit-log-dir\n          hostPath:\n            path: /var/log/rancher/auditlog\n            type: Directory\n')))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[40388],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),l=t(86010),a="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),l=t(67294),a=t(86010),o=t(72389),u=t(67392),i=t(7094),s=t(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t,o=e.lazy,d=e.block,m=e.defaultValue,g=e.values,k=e.groupId,h=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,u.l)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(n=null!=m?m:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,i.U)(),C=E.tabGroupChoices,y=E.setTabGroupChoices,S=(0,l.useState)(N),I=S[0],T=S[1],A=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=C[k];null!=P&&P!==I&&b.some((function(e){return e.value===P}))&&T(P)}var w=function(e){var n=e.currentTarget,t=A.indexOf(n),r=b[t].value;r!==I&&(O(n),T(r),null!=k&&y(k,String(r)))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,l=A.indexOf(e.currentTarget)+1;t=null!=(r=A[l])?r:A[0];break;case"ArrowLeft":var a,o=A.indexOf(e.currentTarget)-1;t=null!=(a=A[o])?a:A[A.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return A.push(e)},onKeyDown:R,onFocus:w,onClick:w},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(f.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function m(e){var n=(0,o.Z)();return l.createElement(d,(0,r.Z)({key:String(n)},e))}},98252:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(87462),l=t(63366),a=(t(67294),t(3905)),o=t(65488),u=t(85162),i=["components"],s={title:"\u5728 GKE \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher",shortTitle:"GKE",weight:3},p=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke",title:"\u5728 GKE \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 GKE \u5b89\u88c5 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke.md",tags:[],version:"current",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"\u5728 GKE \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher",shortTitle:"GKE",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u5728 Azure Kubernetes Service \u4e0a\u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"},next:{title:"Rancher Server Kubernetes \u96c6\u7fa4\u7684\u95ee\u9898\u6392\u67e5",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"}},d={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"1. \u542f\u7528 Kubernetes Engine API",id:"1-\u542f\u7528-kubernetes-engine-api",level:2},{value:"2. \u6253\u5f00 Cloud Shell",id:"2-\u6253\u5f00-cloud-shell",level:2},{value:"Cloud Shell",id:"cloud-shell",level:3},{value:"\u672c\u5730 Shell",id:"\u672c\u5730-shell",level:3},{value:"3. \u914d\u7f6e gcloud CLI",id:"3-\u914d\u7f6e-gcloud-cli",level:2},{value:"4. \u786e\u8ba4 gcloud \u7684\u914d\u7f6e\u662f\u5426\u6b63\u786e",id:"4-\u786e\u8ba4-gcloud-\u7684\u914d\u7f6e\u662f\u5426\u6b63\u786e",level:2},{value:"5. \u521b\u5efa\u4e00\u4e2a GKE \u96c6\u7fa4",id:"5-\u521b\u5efa\u4e00\u4e2a-gke-\u96c6\u7fa4",level:2},{value:"6. \u83b7\u53d6\u9a8c\u8bc1\u51ed\u8bc1",id:"6-\u83b7\u53d6\u9a8c\u8bc1\u51ed\u8bc1",level:2},{value:"7. \u5b89\u88c5 Ingress",id:"7-\u5b89\u88c5-ingress",level:2},{value:"8. \u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP",id:"8-\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684-ip",level:2},{value:"9. \u8bbe\u7f6e DNS",id:"9-\u8bbe\u7f6e-dns",level:2},{value:"10. \u5b89\u88c5 Rancher Helm Chart",id:"10-\u5b89\u88c5-rancher-helm-chart",level:2}],g={toc:m};function k(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 GKE \u5b89\u88c5 Rancher\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e00\u4e2a GKE Kubernetes \u96c6\u7fa4\uff0c\u8bf7\u76f4\u63a5\u8df3\u8f6c\u5230",(0,a.kt)("a",{parentName:"p",href:"#7-%E5%AE%89%E8%A3%85-ingress"},"\u5b89\u88c5 Ingress"),"\u8fd9\u4e2a\u6b65\u9aa4\u3002\u7136\u540e\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#%E5%AE%89%E8%A3%85-rancher-helm-chart"},"\u6b64\u5904"),"\u7684\u6b65\u9aa4\u5b89\u88c5 Rancher Helm Chart\u3002"),(0,a.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u6709\u4e00\u4e2a Google \u8d26\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u6709\u4e00\u4e2a Google Cloud Billing \u8d26\u53f7\u3002\u4f60\u53ef\u4f7f\u7528 Google Cloud Console \u6765\u7ba1\u7406\u4f60\u7684 Cloud Billing \u8d26\u53f7\u3002\u6709\u5173 Cloud Console \u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/cloud/answer/3465889?hl=en&ref_topic=3340599"}," Console \u901a\u7528\u6307\u5357"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u81f3\u5c11\u4e00\u4e2a\u5728\u7528\u7684 IP \u5730\u5740\u548c\u81f3\u5c11 2 \u4e2a CPU \u7684\u4e91\u914d\u989d\u3002\u6709\u5173 Rancher Server \u7684\u786c\u4ef6\u8981\u6c42\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/installation-requirements#rke-%E5%92%8C%E6%89%98%E7%AE%A1-kubernetes"},"\u672c\u8282"),"\u3002")),(0,a.kt)("h2",{id:"1-\u542f\u7528-kubernetes-engine-api"},"1. \u542f\u7528 Kubernetes Engine API"),(0,a.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u7528 Kubernetes Engine API\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbf\u95ee Google Cloud Console \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/projectselector/kubernetes?_ga=2.169595943.767329331.1617810440-856599067.1617343886"},"Kubernetes Engine \u9875\u9762"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6216\u9009\u62e9\u4e00\u4e2a\u9879\u76ee\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00\u9879\u76ee\uff0c\u5e76\u4e3a\u9879\u76ee\u542f\u7528 Kubernetes Engine API\u3002\u7b49\u5f85 API \u548c\u76f8\u5173\u670d\u52a1\u7684\u542f\u7528\u3002\u8fd9\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u4e3a\u4f60\u7684\u4e91\u9879\u76ee\u542f\u7528\u4e86\u8ba1\u8d39\u3002\u6709\u5173\u5982\u4f55\u4e3a\u4f60\u7684\u9879\u76ee\u542f\u7528\u8ba1\u8d39\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project"},"Google Cloud \u6587\u6863\u4e2d\u5fc3"),"\u3002")),(0,a.kt)("h2",{id:"2-\u6253\u5f00-cloud-shell"},"2. \u6253\u5f00 Cloud Shell"),(0,a.kt)("p",null,"Cloud Shell \u662f\u4e00\u4e2a shell \u73af\u5883\uff0c\u7528\u4e8e\u7ba1\u7406\u6258\u7ba1\u5728 Google Cloud \u4e0a\u7684\u8d44\u6e90\u3002Cloud Shell \u9884\u88c5\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," \u547d\u4ee4\u884c\u5de5\u5177\u548c kubectl \u547d\u4ee4\u884c\u5de5\u5177\u4e2d\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," \u5de5\u5177\u4e3a Google Cloud \u63d0\u4f9b\u4e3b\u8981\u7684\u547d\u4ee4\u884c\u754c\u9762\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5219\u63d0\u4f9b\u9488\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u4e3b\u8981\u547d\u4ee4\u884c\u754c\u9762\u3002"),(0,a.kt)("p",null,"\u4e0b\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u4ece Google Cloud Console \u6216\u4ece\u672c\u5730\u5de5\u4f5c\u7ad9\u542f\u52a8 Cloud Shell\u3002"),(0,a.kt)("h3",{id:"cloud-shell"},"Cloud Shell"),(0,a.kt)("p",null,"\u5982\u9700\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com"},"Google Cloud Console")," \u542f\u52a8 shell\uff0c\u8bf7\u5728\u63a7\u5236\u53f0\u7684\u53f3\u4e0a\u89d2\u70b9\u51fb\u7ec8\u7aef\u6309\u94ae\u3002\u9f20\u6807\u60ac\u505c\u5728\u6309\u94ae\u4e0a\u65f6\uff0c\u5b83\u4f1a\u6807\u8bb0\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"Activate Cloud Shell"),"\u3002"),(0,a.kt)("h3",{id:"\u672c\u5730-shell"},"\u672c\u5730 Shell"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u4ee5\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u5b89\u88c5 Cloud SDK\u3002The Cloud SDK \u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u5bf9\u5e94\u7684\u6b65\u9aa4\u6709\u6240\u4e0d\u540c\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5 Cloud SDK \u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"gcloud components install kubectl\n")),(0,a.kt)("p",{parentName:"li"},"\u540e\u9762\u7684\u6b65\u9aa4\u4f1a\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff0c\u4f7f\u5176\u7528\u4e8e\u4f7f\u7528\u65b0\u7684 GKE \u96c6\u7fa4\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c Helm 3 \u672a\u5b89\u88c5\u7684\u8bdd\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"\u5b89\u88c5 Helm 3"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"HELM_EXPERIMENTAL_OCI")," \u53d8\u91cf\u6765\u542f\u7528 Helm \u7684\u5b9e\u9a8c\u529f\u80fd ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/helm/community/blob/master/hips/hip-0006.md"},"OCI \u955c\u50cf\u652f\u6301"),"\u3002\u628a\u4ee5\u4e0b\u884c\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," \uff08\u6216 macOS \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),"\uff0c\u6216\u8005\u4f60\u7684 shell \u5b58\u50a8\u73af\u5883\u53d8\u91cf\u7684\u5730\u65b9\uff09\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"export HELM_EXPERIMENTAL_OCI=1\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u52a0\u8f7d\u4f60\u66f4\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".bashrc")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"source ~/.bashrc\n")),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u8fd0\u884c\u7684\u662f macOS\uff0c\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"source ~/.bash_profile\n")))),(0,a.kt)("h2",{id:"3-\u914d\u7f6e-gcloud-cli"},"3. \u914d\u7f6e gcloud CLI"),(0,a.kt)("p",null,"\u9009\u62e9\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u914d\u7f6e\u9ed8\u8ba4\u7684 gcloud \u8bbe\u7f6e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u9ed8\u8ba4\u503c\uff0c\u8bf7\u4f7f\u7528 gcloud init\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u9700\u5355\u72ec\u8bbe\u7f6e\u4f60\u7684\u9879\u76ee ID\u3001\u5730\u533a\u548c\u533a\u57df\uff0c\u4f7f\u7528 gcloud config\u3002")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"\u4f7f\u7528 gcloud init",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c gcloud init \u5e76\u6309\u7167\u6307\u793a\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"gcloud init\n")),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 SSH\uff0c\u4f7f\u7528 --console-only \u6807\u5fd7\uff0c\u4ee5\u9632\u6b62\u8be5\u547d\u4ee4\u542f\u52a8\u6d4f\u89c8\u5668\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"gcloud init --console-only\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6309\u7167\u6307\u793a\uff0c\u4ee5\u6388\u6743 gcloud \u4f7f\u7528\u4f60\u7684 Google Cloud \u8d26\u6237\uff0c\u5e76\u9009\u62e9\u4f60\u521b\u5efa\u7684\u65b0\u9879\u76ee\u3002")))),(0,a.kt)(u.Z,{value:"\u4f7f\u7528 gcloud config",mdxType:"TabItem"})),(0,a.kt)("h2",{id:"4-\u786e\u8ba4-gcloud-\u7684\u914d\u7f6e\u662f\u5426\u6b63\u786e"},"4. \u786e\u8ba4 gcloud \u7684\u914d\u7f6e\u662f\u5426\u6b63\u786e"),(0,a.kt)("p",null,"\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud config list\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u5e94\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[compute]\nregion = us-west1 # Your chosen region\nzone = us-west1-b # Your chosen zone\n[core]\naccount = <Your email>\ndisable_usage_reporting = True\nproject = <Your project ID>\n\nYour active configuration is: [default]\n")),(0,a.kt)("h2",{id:"5-\u521b\u5efa\u4e00\u4e2a-gke-\u96c6\u7fa4"},"5. \u521b\u5efa\u4e00\u4e2a GKE \u96c6\u7fa4"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u547d\u4ee4\u521b\u5efa\u4e86\u4e00\u4e2a\u4e09\u8282\u70b9\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-name")," \u66ff\u6362\u4e3a\u4f60\u65b0\u96c6\u7fa4\u7684\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u5728\u9009\u62e9 Kubernetes \u7248\u672c\u65f6\uff0c\u8bf7\u52a1\u5fc5\u5148\u67e5\u9605",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-matrix/"},"\u652f\u6301\u77e9\u9635"),"\uff0c\u4ee5\u627e\u51fa\u5df2\u9488\u5bf9\u4f60\u7684 Rancher \u7248\u672c\u9a8c\u8bc1\u7684\u6700\u65b0 Kubernetes \u7248\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c Kubernetes \u7684\u7248\u672c\u66f4\u65b0\u5230 v1.22 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u5219 ingress-nginx \u7684\u7248\u672c\u4e5f\u9700\u8981",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/#faq-migration-to-apiversion-networkingk8siov1"},"\u66f4\u65b0"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud container clusters create cluster-name --num-nodes=3 --cluster-version=<VERSION>\n")),(0,a.kt)("h2",{id:"6-\u83b7\u53d6\u9a8c\u8bc1\u51ed\u8bc1"},"6. \u83b7\u53d6\u9a8c\u8bc1\u51ed\u8bc1"),(0,a.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4\u540e\uff0c\u4f60\u9700\u8981\u83b7\u5f97\u8ba4\u8bc1\u51ed\u8bc1\u624d\u80fd\u4e0e\u96c6\u7fa4\u4ea4\u4e92\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud container clusters get-credentials cluster-name\n")),(0,a.kt)("p",null,"\u6b64\u547d\u4ee4\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u914d\u7f6e\u6210\u4f7f\u7528\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("h2",{id:"7-\u5b89\u88c5-ingress"},"7. \u5b89\u88c5 Ingress"),(0,a.kt)("p",null,"\u96c6\u7fa4\u9700\u8981\u4e00\u4e2a Ingress\uff0c\u4ee5\u4ece\u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee Rancher\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u5e26\u6709 LoadBalancer \u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm upgrade --install \\\n  ingress-nginx ingress-nginx/ingress-nginx \\\n  --namespace ingress-nginx \\\n  --set controller.service.type=LoadBalancer \\\n  --version 4.0.18 \\\n  --create-namespace\n")),(0,a.kt)("h2",{id:"8-\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684-ip"},"8. \u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP \u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get service ingress-nginx-controller --namespace=ingress-nginx\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u5e94\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE\ningress-nginx-controller   LoadBalancer   10.3.244.156   35.233.206.34   80:31876/TCP,443:32497/TCP   81s\n")),(0,a.kt)("p",null,"\u4fdd\u5b58 ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),"\u3002"),(0,a.kt)("h2",{id:"9-\u8bbe\u7f6e-dns"},"9. \u8bbe\u7f6e DNS"),(0,a.kt)("p",null,"\u5230 Rancher Server \u7684\u5916\u90e8\u6d41\u91cf\u9700\u8981\u91cd\u5b9a\u5411\u5230\u4f60\u521b\u5efa\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u6307\u5411\u4f60\u4fdd\u5b58\u7684\u5916\u90e8 IP \u5730\u5740\u7684 DNS\u3002\u8fd9\u4e2a DNS \u4f1a\u7528\u4f5c Rancher Server \u7684 URL\u3002"),(0,a.kt)("p",null,"\u8bbe\u7f6e DNS \u7684\u6709\u6548\u65b9\u6cd5\u6709\u5f88\u591a\u3002\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 Google Cloud \u6587\u6863\u4e2d\u7684",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dns/docs/records"},"\u7ba1\u7406 DNS \u8bb0\u5f55"),"\u90e8\u5206\u3002"),(0,a.kt)("h2",{id:"10-\u5b89\u88c5-rancher-helm-chart"},"10. \u5b89\u88c5 Rancher Helm Chart"),(0,a.kt)("p",null,"\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#%E5%AE%89%E8%A3%85-rancher-helm-chart"},"\u672c\u9875"),"\u7684\u8bf4\u660e\u5b89\u88c5 Rancher Helm Chart\u3002\u4efb\u4f55 Kubernetes \u53d1\u884c\u7248\u4e0a\u5b89\u88c5\u7684 Rancher \u7684 Helm \u8bf4\u660e\u90fd\u662f\u4e00\u6837\u7684\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5 Rancher \u65f6\uff0c\u4f7f\u7528\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684 DNS \u540d\u79f0\u4f5c\u4e3a Rancher Server \u7684 URL\u3002\u5b83\u53ef\u4ee5\u4f5c\u4e3a Helm \u9009\u9879\u4f20\u9012\u8fdb\u6765\u3002\u4f8b\u5982\uff0c\u5982\u679c DNS \u540d\u79f0\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher.my.org"),"\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--set hostname=rancher.my.org")," \u9009\u9879\u6765\u8fd0\u884c Helm \u5b89\u88c5\u547d\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"v2.6.7 \u65b0\u529f\u80fd"))),(0,a.kt)("p",null,"\u5728\u6b64\u8bbe\u7f6e\u4e4b\u4e0a\u5b89\u88c5 Rancher \u65f6\uff0c\u4f60\u8fd8\u9700\u8981\u5c06\u4ee5\u4e0b\u503c\u4f20\u9012\u5230 Rancher Helm \u5b89\u88c5\u547d\u4ee4\uff0c\u4ee5\u8bbe\u7f6e\u4e0e Rancher \u7684 Ingress \u8d44\u6e90\u4e00\u8d77\u4f7f\u7528\u7684 Ingress Controller \u7684\u540d\u79f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--set ingress.ingressClassName=nginx\n")),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#5-%E6%A0%B9%E6%8D%AE%E4%BD%A0%E9%80%89%E6%8B%A9%E7%9A%84%E8%AF%81%E4%B9%A6%E9%80%89%E9%A1%B9%EF%BC%8C%E9%80%9A%E8%BF%87-helm-%E5%AE%89%E8%A3%85-rancher"},"Helm \u5b89\u88c5\u547d\u4ee4"),"\u4e86\u89e3\u4f60\u7684\u8bc1\u4e66\u9009\u9879\u3002"))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61333],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],o={title:"1. Enable Istio in the Cluster",weight:1,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup/enable-istio-in-cluster","/rancher/v2.0-v2.4/en/istio/legacy/setup/enable-istio-in-cluster","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup/enable-istio-in-cluster","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/enable-istio-in-cluster/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",title:"1. Enable Istio in the Cluster",description:"This cluster uses the default Nginx controller to allow traffic into the cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"1. Enable Istio in the Cluster",weight:1,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup/enable-istio-in-cluster","/rancher/v2.0-v2.4/en/istio/legacy/setup/enable-istio-in-cluster","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup/enable-istio-in-cluster","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/enable-istio-in-cluster/"]},sidebar:"tutorialSidebar",previous:{title:"Setup Guide",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/istio-setup-guide"},next:{title:"Enable Istio with Pod Security Policies",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp"}},c={},p=[{value:"Next: Enable Istio in a Namespace",id:"next-enable-istio-in-a-namespace",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This cluster uses the default Nginx controller to allow traffic into the cluster."),(0,a.kt)("p",null,"A Rancher ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," or ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner")," can configure Rancher to deploy Istio in a Kubernetes cluster."),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This guide assumes you have already ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},"installed Rancher,")," and you have already ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provisioned a separate Kubernetes cluster")," on which you will install Istio."),(0,a.kt)("p",null,"The nodes in your cluster must meet the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"CPU and memory requirements.")),(0,a.kt)("p",null,"The workloads and services that you want to be controlled by Istio must meet ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/requirements/"},"Istio's requirements.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the cluster has a Pod Security Policy enabled there are ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp"},"additional prerequisites steps"))),(0,a.kt)("h1",{id:"enable-istio-in-the-cluster"},"Enable Istio in the Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Global")," view, navigate to the ",(0,a.kt)("strong",{parentName:"li"},"cluster")," where you want to enable Istio."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,a.kt)("li",{parentName:"ol"},"Optional: Configure member access and ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"resource limits")," for the Istio components. Ensure you have enough resources on your worker nodes to enable Istio."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Enable"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Istio is enabled at the cluster level."),(0,a.kt)("p",null,"The Istio application, ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-istio"),", is added as an application to the cluster's ",(0,a.kt)("inlineCode",{parentName:"p"},"system")," project."),(0,a.kt)("p",null,"When Istio is enabled in the cluster, the label for Istio sidecar auto injection,",(0,a.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled"),", will be automatically added to each new namespace in this cluster. This automatically enables Istio sidecar injection in all new workloads that are deployed in those namespaces. You will need to manually enable Istio in preexisting namespaces and workloads."),(0,a.kt)("h3",{id:"next-enable-istio-in-a-namespace"},(0,a.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},"Next: Enable Istio in a Namespace")))}h.isMDXComponent=!0}}]);
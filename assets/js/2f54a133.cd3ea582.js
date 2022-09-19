"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88445],{3905:function(e,r,o){o.d(r,{Zo:function(){return c},kt:function(){return k}});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),u=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},c=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),k=n,w=p["".concat(i,".").concat(k)]||p[k]||d[k]||a;return o?t.createElement(w,s(s({ref:r},c),{},{components:o})):t.createElement(w,s({ref:r},c))}));function k(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=o[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},62588:function(e,r,o){o.r(r),o.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var t=o(87462),n=o(63366),a=(o(67294),o(3905)),s=["components"],l={title:"Rolling Back Workloads",weight:3027,aliases:["/rancher/v2.0-v2.4/en/tasks/workloads/rollback-workloads/","/rancher/v2.0-v2.4/en/k8s-in-rancher/workloads/rollback-workloads"]},i=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",title:"Rolling Back Workloads",description:"Sometimes there is a need to rollback to the previous version of the application, either for debugging purposes or because an upgrade did not go as planned.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Rolling Back Workloads",weight:3027,aliases:["/rancher/v2.0-v2.4/en/tasks/workloads/rollback-workloads/","/rancher/v2.0-v2.4/en/k8s-in-rancher/workloads/rollback-workloads"]},sidebar:"tutorialSidebar",previous:{title:"Deploying Workloads",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},next:{title:"Upgrading Workloads",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"}},c={},d=[],p={toc:d};function k(e){var r=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes there is a need to rollback to the previous version of the application, either for debugging purposes or because an upgrade did not go as planned."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, open the project running the workload you want to rollback.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the workload that you want to rollback and select ",(0,a.kt)("strong",{parentName:"p"},"Vertical ","\u22ee"," (... ) > Rollback"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the revision that you want to roll back to. Click ",(0,a.kt)("strong",{parentName:"p"},"Rollback"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Your workload reverts to the previous version that you chose. Wait a few minutes for the action to complete."))}k.isMDXComponent=!0}}]);
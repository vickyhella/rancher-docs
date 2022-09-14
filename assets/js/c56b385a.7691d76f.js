"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35033],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,s(s({ref:e},c),{},{components:r})):n.createElement(f,s({ref:e},c))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},17333:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Bootstrap Password",weight:800},l=void 0,p={unversionedId:"getting-started/installation-and-upgrade/resources/bootstrap-password",id:"getting-started/installation-and-upgrade/resources/bootstrap-password",title:"Bootstrap Password",description:"When Rancher starts for the first time, a password is randomly generated for the first admin user. When the admin first logs in to Rancher, the UI shows commands that can be used to retrieve the bootstrap password. The admin needs to run those commands and log in with the bootstrap password. Then Rancher gives the admin an opportunity to reset the password.",source:"@site/docs/getting-started/installation-and-upgrade/resources/bootstrap-password.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/bootstrap-password",permalink:"/getting-started/installation-and-upgrade/resources/bootstrap-password",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/bootstrap-password.md",tags:[],version:"current",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Bootstrap Password",weight:800},sidebar:"tutorialSidebar",previous:{title:"Updating the Rancher Certificate",permalink:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},next:{title:"Setting up Local System Charts for Air Gapped Installations",permalink:"/getting-started/installation-and-upgrade/resources/local-system-charts"}},c={},d=[{value:"Specifying the Bootstrap Password in Helm Installs",id:"specifying-the-bootstrap-password-in-helm-installs",level:3},{value:"Specifying the Bootstrap Password in Docker Installs",id:"specifying-the-bootstrap-password-in-docker-installs",level:3}],u={toc:d};function h(t){var e=t.components,r=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When Rancher starts for the first time, a password is randomly generated for the first admin user. When the admin first logs in to Rancher, the UI shows commands that can be used to retrieve the bootstrap password. The admin needs to run those commands and log in with the bootstrap password. Then Rancher gives the admin an opportunity to reset the password."),(0,o.kt)("p",null,"The bootstrap password is randomly generated if it is not set during installation with a variable. For details on how to set the bootstrap password using a variable, see below."),(0,o.kt)("h3",{id:"specifying-the-bootstrap-password-in-helm-installs"},"Specifying the Bootstrap Password in Helm Installs"),(0,o.kt)("p",null,"For a Helm install, users can specify the bootstrap password variable by configuring it in the Helm chart values with ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.bootstrapPassword"),"."),(0,o.kt)("p",null,"The password will be stored in a Kubernetes secret. After Rancher is installed, the UI will show instructions for how to retrieve the password using kubectl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{ .data.bootstrapPassword|base64decode}}{{ \"\\n\" }}'\n")),(0,o.kt)("h3",{id:"specifying-the-bootstrap-password-in-docker-installs"},"Specifying the Bootstrap Password in Docker Installs"),(0,o.kt)("p",null,"For a Docker install, you can specify the bootstrap password by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"-e CATTLE_BOOTSTRAP_PASSWORD=password")," to the Docker install command."),(0,o.kt)("p",null,"The password will be stored in the Docker container logs. After Rancher is installed, the UI will show instructions for how to retrieve the password using the Docker container ID:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker logs  container-id  2>&1 | grep "Bootstrap Password:"\n')))}h.isMDXComponent=!0}}]);
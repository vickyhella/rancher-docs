"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96391],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"iSCSI Volumes",weight:6e3,aliases:["/rancher/v2.x/en/cluster-admin/volumes-and-storage/iscsi-volumes/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",title:"iSCSI Volumes",description:"In Rancher Launched Kubernetes clusters that store data on iSCSI volumes, you may experience an issue where kubelets fail to automatically connect with iSCSI volumes. This failure is likely due to an incompatibility issue involving the iSCSI initiator tool. You can resolve this issue by installing the iSCSI initiator tool on each of your cluster nodes.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes.md",tags:[],version:"2.5",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"iSCSI Volumes",weight:6e3,aliases:["/rancher/v2.x/en/cluster-admin/volumes-and-storage/iscsi-volumes/"]},sidebar:"tutorialSidebar",previous:{title:"GlusterFS Volumes",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes"},next:{title:"Provisioning Storage Examples",permalink:"/v2.5/pages-for-subheaders/provisioning-storage-examples"}},c={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes clusters")," that store data on iSCSI volumes, you may experience an issue where kubelets fail to automatically connect with iSCSI volumes. This failure is likely due to an incompatibility issue involving the iSCSI initiator tool. You can resolve this issue by installing the iSCSI initiator tool on each of your cluster nodes."),(0,i.kt)("p",null,"Rancher Launched Kubernetes clusters storing data on iSCSI volumes leverage the ",(0,i.kt)("a",{parentName:"p",href:"http://www.open-iscsi.com/"},"iSCSI initiator tool"),", which is embedded in the kubelet's ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/hyperkube")," Docker image. From each kubelet (i.e., the ",(0,i.kt)("em",{parentName:"p"},"initiator"),"), the tool discovers and launches sessions with an iSCSI volume (i.e., the ",(0,i.kt)("em",{parentName:"p"},"target"),"). However, in some instances, the versions of the iSCSI initiator tool installed on the initiator and the target may not match, resulting in a connection failure."),(0,i.kt)("p",null,"If you encounter this issue, you can work around it by installing the initiator tool on each node in your cluster. You can install the iSCSI initiator tool by logging into your cluster nodes and entering one of the following commands:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Platform"),(0,i.kt)("th",{parentName:"tr",align:null},"Package Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Install Command"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ubuntu/Debian"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"open-iscsi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sudo apt install open-iscsi"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RHEL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iscsi-initiator-utils")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"yum install iscsi-initiator-utils -y"))))),(0,i.kt)("p",null,"After installing the initiator tool on your nodes, edit the YAML for your cluster, editing the kubelet configuration to mount the iSCSI binary and configuration, as shown in the sample below."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Notes:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Before updating your Kubernetes YAML to mount the iSCSI binary and configuration, make sure either the ",(0,i.kt)("inlineCode",{parentName:"p"},"open-iscsi")," (deb) or ",(0,i.kt)("inlineCode",{parentName:"p"},"iscsi-initiator-utils")," (yum) package is installed on your cluster nodes. If this package isn't installed ",(0,i.kt)("em",{parentName:"p"},"before")," the bind mounts are created in your Kubernetes YAML, Docker will automatically create the directories and files on each node and will not allow the package install to succeed.",(0,i.kt)("br",null)),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The example YAML below does not apply to K3s, but only to RKE clusters. Since the K3s kubelet does not run in a container, adding extra binds is not necessary. However, all iSCSI tools must still be installed on your K3s nodes.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'services:\n  kubelet:\n    extra_binds:\n      - "/etc/iscsi:/etc/iscsi"\n      - "/sbin/iscsiadm:/sbin/iscsiadm"\n')))}m.isMDXComponent=!0}}]);
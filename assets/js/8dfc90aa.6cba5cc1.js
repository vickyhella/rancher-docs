"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25875],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=l(n),d=a,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},50931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Rolling back to v2.0.0-v2.1.5",weight:1,aliases:["/rancher/v2.x/en/backups/v2.0.x-v2.4.x/restore/rke-restore/v2.0-v2.1/"]},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1",title:"Rolling back to v2.0.0-v2.1.5",description:"Rolling back to Rancher v2.0-v2.1 is no longer supported. The instructions for rolling back to these versions are preserved here and are intended to be used only in cases where upgrading to Rancher v2.2+ is not feasible.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Rolling back to v2.0.0-v2.1.5",weight:1,aliases:["/rancher/v2.x/en/backups/v2.0.x-v2.4.x/restore/rke-restore/v2.0-v2.1/"]},sidebar:"tutorialSidebar",previous:{title:"Restoring Backups\u2014Kubernetes installs",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},next:{title:"Migrating from v1.6 to v2.x",permalink:"/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x"}},p={},u=[],k={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rolling back to Rancher v2.0-v2.1 is no longer supported. The instructions for rolling back to these versions are preserved here and are intended to be used only in cases where upgrading to Rancher v2.2+ is not feasible.")),(0,o.kt)("p",null,"If you are rolling back to versions in either of these scenarios, you must follow some extra instructions in order to get your clusters working."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rolling back from v2.1.6+ to any version between v2.1.0 - v2.1.5 or v2.0.0 - v2.0.10."),(0,o.kt)("li",{parentName:"ul"},"Rolling back from v2.0.11+ to any version between v2.0.0 - v2.0.10.")),(0,o.kt)("p",null,"Because of the changes necessary to address ",(0,o.kt)("a",{parentName:"p",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20321"},"CVE-2018-20321"),", special steps are necessary if the user wants to roll back to a previous version of Rancher where this vulnerability exists. The steps are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Record the ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceAccountToken")," for each cluster.  To do this, save the following script on a machine with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," access to the Rancher management plane and execute it.  You will need to run these commands on the machine where the rancher container is running. Ensure JQ is installed before running the command. The commands will vary depending on how you installed Rancher."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher Installed with Docker")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker exec <NAME OF RANCHER CONTAINER> kubectl get clusters -o json | jq '[.items[] | select(any(.status.conditions[]; .type == \"ServiceAccountMigrated\")) | {name: .metadata.name, token: .status.serviceAccountToken}]' > tokens.json\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher Installed on a Kubernetes Cluster")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl get clusters -o json | jq '[.items[] | select(any(.status.conditions[]; .type == \"ServiceAccountMigrated\")) | {name: .metadata.name, token: .status.serviceAccountToken}]' > tokens.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After executing the command a ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens.json")," file will be created.  Important! Back up this file in a safe place.",(0,o.kt)("strong",{parentName:"p"}," You will need it to restore functionality to your clusters after rolling back Rancher.  "),"If you lose this file, you may lose access to your clusters.**")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rollback Rancher following the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},"normal instructions"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once Rancher comes back up, every cluster managed by Rancher (except for Imported clusters) will be in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Unavailable")," state.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the backed up tokens based on how you installed Rancher."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher Installed with Docker")),(0,o.kt)("p",{parentName:"li"},"Save the following script as ",(0,o.kt)("inlineCode",{parentName:"p"},"apply_tokens.sh")," to the machine where the Rancher docker container is running. Also copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens.json")," file created previously to the same directory as the script."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'set -e\n\ntokens=$(jq .[] -c tokens.json)\nfor token in $tokens; do\n    name=$(echo $token | jq -r .name)\n    value=$(echo $token | jq -r .token)\n\n    docker exec $1 kubectl patch --type=merge clusters $name -p "{\\"status\\": {\\"serviceAccountToken\\": \\"$value\\"}}"\ndone\n')),(0,o.kt)("p",{parentName:"li"}," the script to allow execution (",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x apply_tokens.sh"),") and execute the script as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"./apply_tokens.sh <DOCKER CONTAINER NAME>\n")),(0,o.kt)("p",{parentName:"li"},"After a few moments the clusters will go from Unavailable back to Available."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher Installed on a Kubernetes Cluster")),(0,o.kt)("p",{parentName:"li"},"Save the following script as ",(0,o.kt)("inlineCode",{parentName:"p"},"apply_tokens.sh")," to a machine with kubectl access to the Rancher management plane. Also copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens.json")," file created previously to the same directory as the script."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'set -e\n\ntokens=$(jq .[] -c tokens.json)\nfor token in $tokens; do\n    name=$(echo $token | jq -r .name)\n    value=$(echo $token | jq -r .token)\n\n   kubectl patch --type=merge clusters $name -p "{\\"status\\": {\\"serviceAccountToken\\": \\"$value\\"}}"\ndone\n')),(0,o.kt)("p",{parentName:"li"},"Set the script to allow execution (",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x apply_tokens.sh"),") and execute the script as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"./apply_tokens.sh\n")),(0,o.kt)("p",{parentName:"li"},"After a few moments the clusters will go from ",(0,o.kt)("inlineCode",{parentName:"p"},"Unavailable")," back to ",(0,o.kt)("inlineCode",{parentName:"p"},"Available"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Continue using Rancher as normal."))))}d.isMDXComponent=!0}}]);
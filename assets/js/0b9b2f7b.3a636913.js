"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45381],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,h=d["".concat(i,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={title:"Restoring Backups\u2014Kubernetes installs",shortTitle:"RKE Installs",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/after-installation/ha-backup-and-restoration/","/rancher/v2.0-v2.4/en/backups/restorations/ha-restoration","/rancher/v2.0-v2.4/en/backups/restorations/k8s-restore/rke-restore","/rancher/v2.0-v2.4/en/backups/legacy/restore/k8s-restore/rke-restore/","/rancher/v2.0-v2.4/en/backups/legacy/restore/rke-restore","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/restore/rke-restore","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/restore/rke-restore/"]},i=void 0,c={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",title:"Restoring Backups\u2014Kubernetes installs",description:"This procedure describes how to use RKE to restore a snapshot of the Rancher Kubernetes cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663559800,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Restoring Backups\u2014Kubernetes installs",shortTitle:"RKE Installs",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/after-installation/ha-backup-and-restoration/","/rancher/v2.0-v2.4/en/backups/restorations/ha-restoration","/rancher/v2.0-v2.4/en/backups/restorations/k8s-restore/rke-restore","/rancher/v2.0-v2.4/en/backups/legacy/restore/k8s-restore/rke-restore/","/rancher/v2.0-v2.4/en/backups/legacy/restore/rke-restore","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/restore/rke-restore","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/restore/rke-restore/"]},sidebar:"tutorialSidebar",previous:{title:"Backing up Rancher Installed on an RKE Kubernetes Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},next:{title:"Rolling back to v2.0.0-v2.1.5",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1"}},u={},p=[{value:"1. Preparation",id:"1-preparation",level:3},{value:"2. Place Snapshot",id:"2-place-snapshot",level:3},{value:"3. Configure RKE",id:"3-configure-rke",level:3},{value:"4. Restore the Database and bring up the Cluster",id:"4-restore-the-database-and-bring-up-the-cluster",level:3},{value:"Restoring from a Local Snapshot",id:"restoring-from-a-local-snapshot",level:4},{value:"Restoring from a Snapshot in S3",id:"restoring-from-a-snapshot-in-s3",level:4},{value:"Options for <code>rke etcd snapshot-restore</code>",id:"options-for-rke-etcd-snapshot-restore",level:4},{value:"Testing the Cluster",id:"testing-the-cluster",level:4},{value:"Check Kubernetes Pods",id:"check-kubernetes-pods",level:4},{value:"Finishing Up",id:"finishing-up",level:4}],d={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This procedure describes how to use RKE to restore a snapshot of the Rancher Kubernetes cluster.\nThis will restore the Kubernetes configuration and the Rancher database and state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This document covers clusters set up with RKE >= v0.2.x, for older RKE versions refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/etcd-snapshots/restoring-from-backup"},"RKE Documentation"),".")),(0,o.kt)("h3",{id:"1-preparation"},"1. Preparation"),(0,o.kt)("p",null,"It is advised that you run the restore from your local host or a jump box/bastion where your cluster yaml, rke statefile, and kubeconfig are stored.  You will need ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE")," and ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/faq/install-and-configure-kubectl"},"kubectl")," CLI utilities installed locally."),(0,o.kt)("p",null,"Prepare by creating 3 new nodes to be the target for the restored Rancher instance.  We recommend that you start with fresh nodes and a clean state. For clarification on the requirements, review the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.0-v2.4/en/installation/requirements/"},"Installation Requirements"),"."),(0,o.kt)("p",null,"Alternatively you can re-use the existing nodes after clearing Kubernetes and Rancher configurations. This will destroy the data on these nodes. See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Node Cleanup")," for the procedure."),(0,o.kt)("p",null,"You must restore each of your etcd nodes to the same snapshot. Copy the snapshot you're using from one of your nodes to the others before running the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd snapshot-restore")," command."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Before starting the restore make sure all the Kubernetes services on the old cluster nodes are stopped. We recommend powering off the nodes to be sure.")),(0,o.kt)("h3",{id:"2-place-snapshot"},"2. Place Snapshot"),(0,o.kt)("p",null,"As of RKE v0.2.0, snapshots could be saved in an S3 compatible backend. To restore your cluster from the snapshot stored in S3 compatible backend, you can skip this step and retrieve the snapshot in ",(0,o.kt)("a",{parentName:"p",href:"#4-restore-the-database-and-bring-up-the-cluster"},"4. Restore the Database and bring up the Cluster"),". Otherwise, you will need to place the snapshot directly on one of the etcd nodes."),(0,o.kt)("p",null,"Pick one of the clean nodes that will have the etcd role assigned and place the zip-compressed snapshot file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," on that node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Because of a current limitation in RKE, the restore process does not work correctly if ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," is a NFS share that is mounted on all nodes with the etcd role. The easiest options are to either keep ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," as a local folder during the restore process and only mount the NFS share there after it has been completed, or to only mount the NFS share to one node with an etcd role in the beginning.")),(0,o.kt)("h3",{id:"3-configure-rke"},"3. Configure RKE"),(0,o.kt)("p",null,"Use your original ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate")," files. If they are not stored in a version control system, it is a good idea to back them up before making any changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp rancher-cluster.yml rancher-cluster.yml.bak\ncp rancher-cluster.rkestate rancher-cluster.rkestate.bak\n")),(0,o.kt)("p",null,"If the replaced or cleaned nodes have been configured with new IP addresses, modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file to ensure the address and optional internal_address fields reflect the new addresses."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," You should not rename the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate")," files. It is important that the filenames match each other.")),(0,o.kt)("h3",{id:"4-restore-the-database-and-bring-up-the-cluster"},"4. Restore the Database and bring up the Cluster"),(0,o.kt)("p",null,"You will now use the RKE command-line tool with the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate")," configuration files to restore the etcd database and bring up the cluster on the new nodes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Ensure your ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate")," is present in the same directory as the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file before starting the restore, as this file contains the certificate data for the cluster.")),(0,o.kt)("h4",{id:"restoring-from-a-local-snapshot"},"Restoring from a Local Snapshot"),(0,o.kt)("p",null,"When restoring etcd from a local snapshot, the snapshot is assumed to be located on the target node in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rke etcd snapshot-restore --name snapshot-name --config ./rancher-cluster.yml\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The --name parameter expects the filename of the snapshot without the extension.")),(0,o.kt)("h4",{id:"restoring-from-a-snapshot-in-s3"},"Restoring from a Snapshot in S3"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of RKE v0.2.0")),(0,o.kt)("p",null,"When restoring etcd from a snapshot located in an S3 compatible backend, the command needs the S3 information in order to connect to the S3 backend and retrieve the snapshot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-restore --config ./rancher-cluster.yml --name snapshot-name \\\n--s3 --access-key S3_ACCESS_KEY --secret-key S3_SECRET_KEY \\\n--bucket-name s3-bucket-name --s3-endpoint s3.amazonaws.com \\\n--folder folder-name # Available as of v2.3.0\n")),(0,o.kt)("h4",{id:"options-for-rke-etcd-snapshot-restore"},"Options for ",(0,o.kt)("inlineCode",{parentName:"h4"},"rke etcd snapshot-restore")),(0,o.kt)("p",null,"S3 specific options are only available for RKE v0.2.0+."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"S3 Specific"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify snapshot name"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,o.kt)("td",{parentName:"tr",align:null},'Specify an alternate cluster YAML file (default: "cluster.yml") ',"[$RKE_CONFIG]"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--s3")),(0,o.kt)("td",{parentName:"tr",align:null},"Enabled backup to s3"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--s3-endpoint")," value"),(0,o.kt)("td",{parentName:"tr",align:null},'Specify s3 endpoint url (default: "s3.amazonaws.com")'),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--access-key")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 accessKey"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--secret-key")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 secretKey"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--bucket-name")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 bucket name"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--folder")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 folder in the bucket name ",(0,o.kt)("em",{parentName:"td"},"Available as of v2.3.0")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--region")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the s3 bucket location (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rke/latest/en/config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rke/latest/en/config-options/#supported-docker-versions"},"Disable Docker version check")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h4",{id:"testing-the-cluster"},"Testing the Cluster"),(0,o.kt)("p",null,"Once RKE completes it will have created a credentials file in the local directory.  Configure ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml")," credentials file and check on the state of the cluster. See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/faq/install-and-configure-kubectl#configuration"},"Installing and Configuring kubectl")," for details."),(0,o.kt)("h4",{id:"check-kubernetes-pods"},"Check Kubernetes Pods"),(0,o.kt)("p",null,"Wait for the pods running in ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher")," pod in ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-system")," to return to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Running")," state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," pods will be in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," state until Rancher server is up and the DNS/Load Balancer have been pointed at the new cluster.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods --all-namespaces\n\nNAMESPACE       NAME                                    READY     STATUS    RESTARTS   AGE\ncattle-system   cattle-cluster-agent-766585f6b-kj88m    0/1       Error     6          4m\ncattle-system   cattle-node-agent-wvhqm                 0/1       Error     8          8m\ncattle-system   rancher-78947c8548-jzlsr                0/1       Running   1          4m\ningress-nginx   default-http-backend-797c5bc547-f5ztd   1/1       Running   1          4m\ningress-nginx   nginx-ingress-controller-ljvkf          1/1       Running   1          8m\nkube-system     canal-4pf9v                             3/3       Running   3          8m\nkube-system     cert-manager-6b47fc5fc-jnrl5            1/1       Running   1          4m\nkube-system     kube-dns-7588d5b5f5-kgskt               3/3       Running   3          4m\nkube-system     kube-dns-autoscaler-5db9bbb766-s698d    1/1       Running   1          4m\nkube-system     metrics-server-97bc649d5-6w7zc          1/1       Running   1          4m\nkube-system     tiller-deploy-56c4cf647b-j4whh          1/1       Running   1          4m\n")),(0,o.kt)("h4",{id:"finishing-up"},"Finishing Up"),(0,o.kt)("p",null,"Rancher should now be running and available to manage your Kubernetes clusters."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Remember to save your updated RKE config (",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),") state file (",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," credentials (",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),") files in a safe place for future maintenance for example in a version control system.")))}k.isMDXComponent=!0}}]);
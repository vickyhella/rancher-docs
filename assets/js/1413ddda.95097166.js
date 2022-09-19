"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33986],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return k}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),k=n,h=u["".concat(i,".").concat(k)]||u[k]||d[k]||o;return t?r.createElement(h,c(c({ref:a},s),{},{components:t})):r.createElement(h,c({ref:a},s))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23033:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(87462),n=t(63366),o=(t(67294),t(3905)),c=["components"],l={title:"Backing up Rancher Installed with Docker",shortTitle:"Docker Installs",weight:3,aliases:["/rancher/v2.0-v2.4/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.0-v2.4/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.0-v2.4/en/backups/backups/single-node-backups/","/rancher/v2.0-v2.4/en/backups/legacy/backup/single-node-backups/","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/backup/docker-backups","/rancher/v2.0-v2.4/en/installation/backups-and-restoration/single-node-backup-and-restoration/","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/backup/docker-backups/"]},i=void 0,p={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",title:"Backing up Rancher Installed with Docker",description:"After completing your Docker installation of Rancher, we recommend creating backups of it on a regular basis. Having a recent backup will let you recover quickly from an unexpected disaster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Backing up Rancher Installed with Docker",shortTitle:"Docker Installs",weight:3,aliases:["/rancher/v2.0-v2.4/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.0-v2.4/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.0-v2.4/en/backups/backups/single-node-backups/","/rancher/v2.0-v2.4/en/backups/legacy/backup/single-node-backups/","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/backup/docker-backups","/rancher/v2.0-v2.4/en/installation/backups-and-restoration/single-node-backup-and-restoration/","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/backup/docker-backups/"]},sidebar:"tutorialSidebar",previous:{title:"Backups and Disaster Recovery",permalink:"/v2.0-v2.4/pages-for-subheaders/backup-restore-and-disaster-recovery"},next:{title:"Restoring Backups\u2014Docker Installs",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"}},s={},d=[{value:"How to Read Placeholders",id:"how-to-read-placeholders",level:3},{value:"Obtaining Placeholder Data",id:"obtaining-placeholder-data",level:3},{value:"Creating a Backup",id:"creating-a-backup",level:3}],u={toc:d};function k(e){var a=e.components,l=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After completing your Docker installation of Rancher, we recommend creating backups of it on a regular basis. Having a recent backup will let you recover quickly from an unexpected disaster."),(0,o.kt)("h3",{id:"how-to-read-placeholders"},"How to Read Placeholders"),(0,o.kt)("p",null,"During the creation of your backup, you'll enter a series of commands, replacing placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,o.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"). Here's an example of a command with a placeholder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run  \\\n  --volumes-from rancher-data-<DATE> \\\n  -v $PWD:/backup busybox tar pzcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher\n")),(0,o.kt)("p",null,"In this command, ",(0,o.kt)("inlineCode",{parentName:"p"},"<DATE>")," is a placeholder for the date that the data container and backup were created. ",(0,o.kt)("inlineCode",{parentName:"p"},"9-27-18")," for example."),(0,o.kt)("h3",{id:"obtaining-placeholder-data"},"Obtaining Placeholder Data"),(0,o.kt)("p",null,"Get the placeholder data by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("p",null,"Write down or copy this information before starting the ",(0,o.kt)("a",{parentName:"p",href:"#creating-a-backup"},"procedure below"),"."),(0,o.kt)("sup",null,"Terminal ",(0,o.kt)("code",null,"docker ps")," Command, Displaying Where to Find ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_TAG>")," and ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Placeholder Reference",src:t(50953).Z,width:"1275",height:"258"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_TAG>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you pulled for initial install.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The version of Rancher that you're creating a backup for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,o.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can obtain ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_TAG>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," by logging into your Rancher Server by remote connection and entering the command to view the containers that are running: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime while creating backups."),(0,o.kt)("h3",{id:"creating-a-backup"},"Creating a Backup"),(0,o.kt)("p",null,"This procedure creates a backup that you can restore if Rancher encounters a disaster scenario."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the container currently running Rancher Server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the ",(0,o.kt)("a",{parentName:"p",href:"#how-to-read-placeholders"},"name of your Rancher container"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{id:"backup"}),"Use the command below, replacing each placeholder, to create a data container from the Rancher container that you just stopped.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker create --volumes-from <RANCHER_CONTAINER_NAME> --name rancher-data-<DATE> rancher/rancher:<RANCHER_CONTAINER_TAG>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{id:"tarball"}),"From the data container that you just created (",(0,o.kt)("code",null,"rancher-data-<DATE>"),"), create a backup tarball (",(0,o.kt)("code",null,"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),"). Use the following command, replacing each placeholder.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker run  --volumes-from rancher-data-<DATE> -v $PWD:/backup:z busybox tar pzcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step Result:")," A stream of commands runs on the screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command to confirm that the backup tarball was created. It will have a name similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move your backup tarball to a safe location external to your Rancher Server. Then delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-<DATE>")," container from your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart Rancher Server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker start <RANCHER_CONTAINER_NAME>\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," A backup tarball of your Rancher Server data is created. See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"Restoring Backups: Docker Installs")," if you need to restore backup data."))}k.isMDXComponent=!0},50953:function(e,a,t){a.Z=t.p+"assets/images/placeholder-ref-70c9571e1a85164291c80a55c7c614b5.png"}}]);
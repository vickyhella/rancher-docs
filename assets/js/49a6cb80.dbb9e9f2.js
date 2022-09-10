"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95406],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Backup Configuration",shortTitle:"Backup",weight:1,aliases:["/rancher/v2.5/en/backups/v2.5/configuration/backup-config","/rancher/v2.x/en/backups/v2.5/configuration/backup-config/"]},c=void 0,s={unversionedId:"reference-guides/backup-restore-configuration/backup-configuration",id:"version-2.5/reference-guides/backup-restore-configuration/backup-configuration",title:"Backup Configuration",description:"The Backup Create page lets you configure a schedule, enable encryption and specify the storage location for your backups.",source:"@site/versioned_docs/version-2.5/reference-guides/backup-restore-configuration/backup-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/backup-configuration",permalink:"/v2.5/reference-guides/backup-restore-configuration/backup-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/backup-restore-configuration/backup-configuration.md",tags:[],version:"2.5",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Backup Configuration",shortTitle:"Backup",weight:1,aliases:["/rancher/v2.5/en/backups/v2.5/configuration/backup-config","/rancher/v2.x/en/backups/v2.5/configuration/backup-config/"]},sidebar:"tutorialSidebar",previous:{title:"Rancher Backup Configuration Reference",permalink:"/v2.5/pages-for-subheaders/backup-restore-configuration"},next:{title:"Restore Configuration",permalink:"/v2.5/reference-guides/backup-restore-configuration/restore-configuration"}},p={},u=[{value:"Schedule",id:"schedule",level:2},{value:"Encryption",id:"encryption",level:2},{value:"Storage Location",id:"storage-location",level:2},{value:"S3",id:"s3",level:3},{value:"Example S3 Storage Configuration",id:"example-s3-storage-configuration",level:3},{value:"Example MinIO Configuration",id:"example-minio-configuration",level:3},{value:"Example credentialSecret",id:"example-credentialsecret",level:3},{value:"IAM Permissions for EC2 Nodes to Access S3",id:"iam-permissions-for-ec2-nodes-to-access-s3",level:3},{value:"Examples",id:"examples",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Backup Create page lets you configure a schedule, enable encryption and specify the storage location for your backups."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(91806).Z,width:"2861",height:"1292"})),(0,i.kt)("h2",{id:"schedule"},"Schedule"),(0,i.kt)("p",null,"Select the first option to perform a one-time backup, or select the second option to schedule recurring backups. Selecting ",(0,i.kt)("strong",{parentName:"p"},"Recurring Backups")," lets you configure following two fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Schedule"),": This field accepts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Standard ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron"},"cron expressions"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"0 * * * *"')),(0,i.kt)("li",{parentName:"ul"},"Descriptors, such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"@midnight"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"@every 1h30m"')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retention Count"),": This value specifies how many backup files must be retained. If files exceed the given retentionCount,  the oldest files will be deleted. The default value is 10.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(57616).Z,width:"2326",height:"320"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schedule")),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the cron string for scheduling recurring backups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"retentionCount")),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the number of backup files to be retained.")))),(0,i.kt)("h2",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"The rancher-backup gathers resources by making calls to the kube-apiserver. Objects returned by apiserver are decrypted, so even if ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"},"encryption At rest")," is enabled, even the encrypted objects gathered by the backup will be in plaintext."),(0,i.kt)("p",null,"To avoid storing them in plaintext, you can use the same encryptionConfig file that was used for at-rest encryption, to encrypt certain resources in your backup."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:")," You must save the encryptionConfig file, because it won\u2019t be saved by the rancher-backup operator.\nThe same encryptionFile needs to be used when performing a restore.")),(0,i.kt)("p",null,"The operator consumes this encryptionConfig as a Kubernetes Secret, and the Secret must be in the operator\u2019s namespace. Rancher installs the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-resources-system")," namespace, so create this encryptionConfig secret in that namespace."),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"EncryptionConfiguration"),", you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#understanding-the-encryption-at-rest-configuration"},"sample file provided in the Kubernetes documentation.")),(0,i.kt)("p",null,"To create the Secret, the encryption configuration file must be named ",(0,i.kt)("inlineCode",{parentName:"p"},"encryption-provider-config.yaml"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"--from-file")," flag must be used to create this secret."),(0,i.kt)("p",null,"Save the ",(0,i.kt)("inlineCode",{parentName:"p"},"EncryptionConfiguration")," in a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"encryption-provider-config.yaml")," and run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create secret generic encryptionconfig \\\n  --from-file=./encryption-provider-config.yaml \\\n  -n cattle-resources-system\n")),(0,i.kt)("p",null,"This will ensure that the secret contains a key named ",(0,i.kt)("inlineCode",{parentName:"p"},"encryption-provider-config.yaml"),", and the operator will use this key to get the encryption configuration."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Encryption Config Secret")," dropdown will filter out and list only those Secrets that have this exact key"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61687).Z,width:"1203",height:"376"})),(0,i.kt)("p",null,"In the example command above, the name ",(0,i.kt)("inlineCode",{parentName:"p"},"encryptionconfig")," can be changed to anything."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"encryptionConfigSecretName")),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the name of the Secret from ",(0,i.kt)("inlineCode",{parentName:"td"},"cattle-resources-system")," namespace, that contains the encryption config file.")))),(0,i.kt)("h2",{id:"storage-location"},"Storage Location"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(25092).Z,width:"2348",height:"680"})),(0,i.kt)("p",null,"If the StorageLocation is specified in the Backup, the operator will retrieve the backup location from that particular S3 bucket. If not specified, the operator will try to find this file in the default operator-level S3 store, and in the operator-level PVC store. The default storage location is configured during the deployment of the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator."),(0,i.kt)("p",null,"Selecting the first option stores this backup in the storage location configured while installing the rancher-backup chart. The second option lets you configure a different S3 compatible storage provider for storing the backup."),(0,i.kt)("h3",{id:"s3"},"S3"),(0,i.kt)("p",null,"The S3 storage location contains the following configuration fields:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Credential Secret")," (optional): If you need to use the AWS Access keys Secret keys to access s3 bucket, create a secret with your credentials with keys and the directives ",(0,i.kt)("inlineCode",{parentName:"li"},"accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"secretKey"),". It can be in any namespace. An example secret is ",(0,i.kt)("a",{parentName:"li",href:"#example-credentialsecret"},"here.")," This directive is unnecessary if the nodes running your operator are in EC2 and set up with IAM permissions that allow them to access S3, as described in ",(0,i.kt)("a",{parentName:"li",href:"#iam-permissions-for-ec2-nodes-to-access-s3"},"this section.")," The Credential Secret dropdown lists the secrets in all namespaces."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Bucket Name"),": The name of the S3 bucket where backup files will be stored."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Region")," (optional): The AWS ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"},"region")," where the S3 bucket is located. This field isn't needed for configuring MinIO."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Folder")," (optional): The name of the folder in the S3 bucket where backup files will be stored. Nested folders (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher/cluster1"),") are not supported."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Endpoint"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},"endpoint"),"  that is used to access S3 in the region of your bucket."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Endpoint CA")," (optional): This should be the Base64 encoded CA cert. For an example, refer to the ",(0,i.kt)("a",{parentName:"li",href:"#example-s3-storage-configuration"},"example S3 compatible configuration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Skip TLS Verifications")," (optional): Set to true if you are not using TLS.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"credentialSecretName")),(0,i.kt)("td",{parentName:"tr",align:null},"If you need to use the AWS Access keys Secret keys to access s3 bucket, create a secret with your credentials with keys and the directives ",(0,i.kt)("inlineCode",{parentName:"td"},"accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"secretKey"),". It can be in any namespace as long as you provide that namespace in ",(0,i.kt)("inlineCode",{parentName:"td"},"credentialSecretNamespace"),". An example secret is ",(0,i.kt)("a",{parentName:"td",href:"#example-credentialsecret"},"here.")," This directive is unnecessary if the nodes running your operator are in EC2 and set up with IAM permissions that allow them to access S3, as described in ",(0,i.kt)("a",{parentName:"td",href:"#iam-permissions-for-ec2-nodes-to-access-s3"},"this section.")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"credentialSecretNamespace")),(0,i.kt)("td",{parentName:"tr",align:null},"The namespace of the secret containing the credentials to access S3. This directive is unnecessary if the nodes running your operator are in EC2 and set up with IAM permissions that allow them to access S3, as described in ",(0,i.kt)("a",{parentName:"td",href:"#iam-permissions-for-ec2-nodes-to-access-s3"},"this section.")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bucketName")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the S3 bucket where backup files will be stored."),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"folder")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the folder in the S3 bucket where backup files will be stored. Nested folders (e.g., ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher/cluster1"),") are not supported."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"region")),(0,i.kt)("td",{parentName:"tr",align:null},"The AWS ",(0,i.kt)("a",{parentName:"td",href:"https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"},"region")," where the S3 bucket is located."),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},"endpoint"),"  that is used to access S3 in the region of your bucket."),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"endpointCA")),(0,i.kt)("td",{parentName:"tr",align:null},"This should be the Base64 encoded CA cert. For an example, refer to the ",(0,i.kt)("a",{parentName:"td",href:"#example-s3-storage-configuration"},"example S3 compatible configuration.")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"insecureTLSSkipVerify")),(0,i.kt)("td",{parentName:"tr",align:null},"Set to true if you are not using TLS."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"example-s3-storage-configuration"},"Example S3 Storage Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"s3:\n  credentialSecretName: s3-creds\n  credentialSecretNamespace: default\n  bucketName: rancher-backups\n  folder: rancher\n  region: us-west-2\n  endpoint: s3.us-west-2.amazonaws.com\n")),(0,i.kt)("h3",{id:"example-minio-configuration"},"Example MinIO Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"s3:\n  credentialSecretName: minio-creds\n  bucketName: rancherbackups\n  endpoint: minio.35.202.130.254.sslip.io\n  endpointCA: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURHakNDQWdLZ0F3SUJBZ0lKQUtpWFZpNEpBb0J5TUEwR0NTcUdTSWIzRFFFQkN3VUFNQkl4RURBT0JnTlYKQkFNTUIzUmxjM1F0WTJFd0hoY05NakF3T0RNd01UZ3lOVFE1V2hjTk1qQXhNREk1TVRneU5UUTVXakFTTVJBdwpEZ1lEVlFRRERBZDBaWE4wTFdOaE1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBCjA4dnV3Q2Y0SEhtR2Q2azVNTmozRW5NOG00T2RpS3czSGszd1NlOUlXQkwyVzY5WDZxenBhN2I2M3U2L05mMnkKSnZWNDVqeXplRFB6bFJycjlpbEpWaVZ1NFNqWlFjdG9jWmFCaVNsL0xDbEFDdkFaUlYvKzN0TFVTZSs1ZDY0QQpWcUhDQlZObU5xM3E3aVY0TE1aSVpRc3N6K0FxaU1Sd0pOMVVKQTZ6V0tUc2Yzc3ByQ0J2dWxJWmZsVXVETVAyCnRCTCt6cXZEc0pDdWlhNEEvU2JNT29tVmM2WnNtTGkwMjdub3dGRld3MnRpSkM5d0xMRE14NnJoVHQ4a3VvVHYKQXJpUjB4WktiRU45L1Uzb011eUVKbHZyck9YS2ZuUDUwbk8ycGNaQnZCb3pUTStYZnRvQ1d5UnhKUmI5cFNTRApKQjlmUEFtLzNZcFpMMGRKY2sxR1h3SURBUUFCbzNNd2NUQWRCZ05WSFE0RUZnUVU5NHU4WXlMdmE2MTJnT1pyCm44QnlFQ2NucVFjd1FnWURWUjBqQkRzd09ZQVU5NHU4WXlMdmE2MTJnT1pybjhCeUVDY25xUWVoRnFRVU1CSXgKRURBT0JnTlZCQU1NQjNSbGMzUXRZMkdDQ1FDb2wxWXVDUUtBY2pBTUJnTlZIUk1FQlRBREFRSC9NQTBHQ1NxRwpTSWIzRFFFQkN3VUFBNElCQVFER1JRZ1RtdzdVNXRQRHA5Q2psOXlLRW9Vd2pYWWM2UlAwdm1GSHpubXJ3dUVLCjFrTkVJNzhBTUw1MEpuS29CY0ljVDNEeGQ3TGdIbTNCRE5mVVh2anArNnZqaXhJYXR2UWhsSFNVaWIyZjJsSTkKVEMxNzVyNCtROFkzelc1RlFXSDdLK08vY3pJTGh5ei93aHRDUlFkQ29lS1dXZkFiby8wd0VSejZzNkhkVFJzNwpHcWlGNWZtWGp6S0lOcTBjMHRyZ0xtalNKd1hwSnU0ZnNGOEcyZUh4b2pOKzdJQ1FuSkg5cGRIRVpUQUtOL2ppCnIvem04RlZtd1kvdTBndEZneWVQY1ZWbXBqRm03Y0ZOSkc4Y2ZYd0QzcEFwVjhVOGNocTZGeFBHTkVvWFZnclMKY1VRMklaU0RJd1FFY3FvSzFKSGdCUWw2RXBaUVpWMW1DRklrdFBwSQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t\n")),(0,i.kt)("h3",{id:"example-credentialsecret"},"Example credentialSecret"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: creds\ntype: Opaque\ndata:\n  accessKey: <Enter your base64-encoded access key>\n  secretKey: <Enter your base64-encoded secret key>\n")),(0,i.kt)("h3",{id:"iam-permissions-for-ec2-nodes-to-access-s3"},"IAM Permissions for EC2 Nodes to Access S3"),(0,i.kt)("p",null,"There are two ways to set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator to use S3 as the backup storage location."),(0,i.kt)("p",null,"One way is to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"credentialSecretName")," in the Backup custom resource, which refers to AWS credentials that have access to S3."),(0,i.kt)("p",null,"If the cluster nodes are in Amazon EC2, the S3 access can also be set up by assigning IAM permissions to the EC2 nodes so that they can access S3."),(0,i.kt)("p",null,"To allow a node to access S3, follow the instructions in the ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-access-s3-bucket/"},"AWS documentation")," to create an IAM role for EC2. When you add a custom policy to the role, add the following permissions, and replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," with your bucket name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "s3:ListBucket"\n      ],\n     "Resource": [\n        "arn:aws:s3:::rancher-backups"\n      ]\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "s3:PutObject",\n        "s3:GetObject",\n        "s3:DeleteObject",\n        "s3:PutObjectAcl"\n      ],\n      "Resource": [\n         "arn:aws:s3:::rancher-backups/*"\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"After the role is created, and you have attached the corresponding instance profile to your EC2 instance(s), the ",(0,i.kt)("inlineCode",{parentName:"p"},"credentialSecretName")," directive can be left empty in the Backup custom resource."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"For example Backup custom resources, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/examples#backup"},"this page.")))}m.isMDXComponent=!0},91806:function(e,t,n){t.Z=n.p+"assets/images/backup-0af306446321add8bd941589de27c022.png"},61687:function(e,t,n){t.Z=n.p+"assets/images/encryption-764e07a9a1c79ccb857802bdba719cb8.png"},57616:function(e,t,n){t.Z=n.p+"assets/images/schedule-a66f30c4f4cca4afc0c425ae15c055e1.png"},25092:function(e,t,n){t.Z=n.p+"assets/images/storageLocation-99ed78bc5fab38cf56754e6d6a11b02b.png"}}]);
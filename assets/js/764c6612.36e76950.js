"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"Docker Install with TLS Termination at Layer-7 NGINX Load Balancer"},i=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer",id:"how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer",title:"Docker Install with TLS Termination at Layer-7 NGINX Load Balancer",description:"For development and testing environments that have a special requirement to terminate TLS/SSL at a load balancer instead of your Rancher Server container, deploy Rancher and configure a load balancer to work with it conjunction.",source:"@site/docs/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer.md",sourceDirName:"how-to-guides/advanced-user-guides",slug:"/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer",permalink:"/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Docker Install with TLS Termination at Layer-7 NGINX Load Balancer"},sidebar:"tutorialSidebar",previous:{title:"Enabling the API Audit Log to Record System Events",permalink:"/how-to-guides/advanced-user-guides/enable-api-audit-log"},next:{title:"Best Practices Guide",permalink:"/pages-for-subheaders/best-practices"}},s={},d=[{value:"Requirements for OS, Docker, Hardware, and Networking",id:"requirements-for-os-docker-hardware-and-networking",level:2},{value:"Installation Outline",id:"installation-outline",level:2},{value:"1. Provision Linux Host",id:"1-provision-linux-host",level:2},{value:"2. Choose an SSL Option and Install Rancher",id:"2-choose-an-ssl-option-and-install-rancher",level:2},{value:"3. Configure Load Balancer",id:"3-configure-load-balancer",level:2},{value:"Example NGINX configuration",id:"example-nginx-configuration",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"FAQ and Troubleshooting",id:"faq-and-troubleshooting",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"API Auditing",id:"api-auditing",level:3},{value:"Air Gap",id:"air-gap",level:3},{value:"Persistent Data",id:"persistent-data",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For development and testing environments that have a special requirement to terminate TLS/SSL at a load balancer instead of your Rancher Server container, deploy Rancher and configure a load balancer to work with it conjunction."),(0,a.kt)("p",null,"A layer-7 load balancer can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with."),(0,a.kt)("p",null,"This install procedure walks you through deployment of Rancher using a single container, and then provides a sample configuration for a layer-7 NGINX load balancer."),(0,a.kt)("h2",{id:"requirements-for-os-docker-hardware-and-networking"},"Requirements for OS, Docker, Hardware, and Networking"),(0,a.kt)("p",null,"Make sure that your node fulfills the general ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"installation requirements.")),(0,a.kt)("h2",{id:"installation-outline"},"Installation Outline"),(0,a.kt)("h2",{id:"1-provision-linux-host"},"1. Provision Linux Host"),(0,a.kt)("p",null,"Provision a single Linux host according to our ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"Requirements")," to launch your Rancher Server."),(0,a.kt)("h2",{id:"2-choose-an-ssl-option-and-install-rancher"},"2. Choose an SSL Option and Install Rancher"),(0,a.kt)("p",null,"For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster."),(0,a.kt)("admonition",{title:"Do you want to..",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Complete an Air Gap Installation?"),(0,a.kt)("li",{parentName:"ul"},"Record all transactions with the Rancher API?")),(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"#advanced-options"},"Advanced Options")," below before continuing.")),(0,a.kt)("p",null,"Choose from the following options:"),(0,a.kt)("details",{id:"option-a"},(0,a.kt)("summary",null,"Option A-Bring Your Own Certificate: Self-Signed"),(0,a.kt)("p",null,"If you elect to use a self-signed certificate to encrypt communication, you must install the certificate on your load balancer (which you'll do later) and your Rancher container. Run the Docker command to deploy Rancher, pointing it toward your certificate."),(0,a.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Create a self-signed certificate."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The certificate files must be in PEM format."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To Install Rancher Using a Self-Signed Cert:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"While running the Docker command to deploy Rancher, point Docker toward your CA certificate file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /etc/your_certificate_directory/cacerts.pem:/etc/rancher/ssl/cacerts.pem \\\n  rancher/rancher:latest\n"))))),(0,a.kt)("details",{id:"option-b"},(0,a.kt)("summary",null,"Option B-Bring Your Own Certificate: Signed by Recognized CA"),(0,a.kt)("p",null,"If your cluster is public facing, it's best to use a certificate signed by a recognized CA."),(0,a.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The certificate files must be in PEM format."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To Install Rancher Using a Cert Signed by a Recognized CA:")),(0,a.kt)("p",null,"If you use a certificate signed by a recognized CA, installing your certificate in the Rancher container isn't necessary. We do have to make sure there is no default CA certificate generated and stored, you can do this by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-cacerts")," parameter to the container."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the following command."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"```\ndocker run -d --restart=unless-stopped \\\n-p 80:80 -p 443:443 \\\nrancher/rancher:latest --no-cacerts\n```\n"))))),(0,a.kt)("h2",{id:"3-configure-load-balancer"},"3. Configure Load Balancer"),(0,a.kt)("p",null,"When using a load balancer in front of your Rancher container, there's no need for the container to redirect port communication from port 80 or port 443. By passing the header ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Proto: https")," header, this redirect is disabled."),(0,a.kt)("p",null,"The load balancer or proxy has to be configured to support the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"WebSocket")," connections")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"SPDY")," / ",(0,a.kt)("strong",{parentName:"p"},"HTTP/2")," protocols")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Passing / setting the following headers:"),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Header"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Host")),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname used to reach Rancher."),(0,a.kt)("td",{parentName:"tr",align:null},"To identify the server requested by the client.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"X-Forwarded-Proto")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https")),(0,a.kt)("td",{parentName:"tr",align:null},"To identify the protocol that a client used to connect to the load balancer or proxy.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Note:")," If this header is present, ",(0,a.kt)("inlineCode",{parentName:"td"},"rancher/rancher")," does not redirect HTTP to HTTPS.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"X-Forwarded-Port")),(0,a.kt)("td",{parentName:"tr",align:null},"Port used to reach Rancher."),(0,a.kt)("td",{parentName:"tr",align:null},"To identify the protocol that client used to connect to the load balancer or proxy.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"X-Forwarded-For")),(0,a.kt)("td",{parentName:"tr",align:null},"IP of the client connection."),(0,a.kt)("td",{parentName:"tr",align:null},"To identify the originating IP address of a client.")))))),(0,a.kt)("h3",{id:"example-nginx-configuration"},"Example NGINX configuration"),(0,a.kt)("p",null,"This NGINX configuration is tested on NGINX 1.14."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This NGINX configuration is only an example and may not suit your environment. For complete documentation, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/"},"NGINX Load Balancing - HTTP Load Balancing"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-server")," with the IP address or hostname of the node running the Rancher container."),(0,a.kt)("li",{parentName:"ul"},"Replace both occurrences of ",(0,a.kt)("inlineCode",{parentName:"li"},"FQDN")," to the DNS name for Rancher."),(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"/certs/fullchain.pem")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/certs/privkey.pem")," to the location of the server certificate and the server certificate key respectively.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"worker_processes 4;\nworker_rlimit_nofile 40000;\n\nevents {\n    worker_connections 8192;\n}\n\nhttp {\n    upstream rancher {\n        server rancher-server:80;\n    }\n\n    map $http_upgrade $connection_upgrade {\n        default Upgrade;\n        ''      close;\n    }\n\n    server {\n        listen 443 ssl http2;\n        server_name FQDN;\n        ssl_certificate /certs/fullchain.pem;\n        ssl_certificate_key /certs/privkey.pem;\n\n        location / {\n            proxy_set_header Host $host;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_set_header X-Forwarded-Port $server_port;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass http://rancher;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection $connection_upgrade;\n            # This allows the ability for the execute shell window to remain open for up to 15 minutes. Without this parameter, the default is 1 minute and will automatically close.\n            proxy_read_timeout 900s;\n            proxy_buffering off;\n        }\n    }\n\n    server {\n        listen 80;\n        server_name FQDN;\n        return 301 https://$server_name$request_uri;\n    }\n}\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Recommended:")," Review Single Node ",(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"Backup")," and ",(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"Restore"),". Although you don't have any data you need to back up right now, we recommend creating backups after regular Rancher use."),(0,a.kt)("li",{parentName:"ul"},"Create a Kubernetes cluster: ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"Provisioning Kubernetes Clusters"),".")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"faq-and-troubleshooting"},"FAQ and Troubleshooting"),(0,a.kt)("p",null,"For help troubleshooting certificates, see ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"},"this section.")),(0,a.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,a.kt)("h3",{id:"api-auditing"},"API Auditing"),(0,a.kt)("p",null,"If you want to record all transactions with the Rancher API, enable the ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/enable-api-audit-log"},"API Auditing")," feature by adding the flags below into your install command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-e AUDIT_LEVEL=1 \\\n-e AUDIT_LOG_PATH=/var/log/auditlog/rancher-api-audit.log \\\n-e AUDIT_LOG_MAXAGE=20 \\\n-e AUDIT_LOG_MAXBACKUP=20 \\\n-e AUDIT_LOG_MAXSIZE=100 \\\n")),(0,a.kt)("h3",{id:"air-gap"},"Air Gap"),(0,a.kt)("p",null,"If you are visiting this page to complete an ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/air-gapped-helm-cli-install"},"Air Gap Installation"),", you must pre-pend your private registry URL to the server tag when running the installation command in the option that you choose. Add ",(0,a.kt)("inlineCode",{parentName:"p"},"<REGISTRY.DOMAIN.COM:PORT>")," with your private registry URL in front of ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," <REGISTRY.DOMAIN.COM:PORT>/rancher/rancher:latest\n")),(0,a.kt)("h3",{id:"persistent-data"},"Persistent Data"),(0,a.kt)("p",null,"Rancher uses etcd as a datastore. When Rancher is installed with Docker, the embedded etcd is being used. The persistent data is at the following path in the container: ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher"),"."),(0,a.kt)("p",null,"You can bind mount a host volume to this location to preserve data on the host it is running on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /opt/rancher:/var/lib/rancher \\\n  --privileged \\\n  rancher/rancher:latest\n")),(0,a.kt)("p",null,"As of Rancher v2.5, privileged access is ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-on-a-single-node-with-docker#privileged-access-for-rancher-v2-5"},"required.")),(0,a.kt)("p",null,"This layer 7 NGINX configuration is tested on NGINX version 1.13 (mainline) and 1.14 (stable)."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This NGINX configuration is only an example and may not suit your environment. For complete documentation, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/"},"NGINX Load Balancing - TCP and UDP Load Balancer"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"upstream rancher {\n    server rancher-server:80;\n}\n\nmap $http_upgrade $connection_upgrade {\n    default Upgrade;\n    ''      close;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name rancher.yourdomain.com;\n    ssl_certificate /etc/your_certificate_directory/fullchain.pem;\n    ssl_certificate_key /etc/your_certificate_directory/privkey.pem;\n\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Port $server_port;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_pass http://rancher;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        # This allows the ability for the execute shell window to remain open for up to 15 minutes. Without this parameter, the default is 1 minute and will automatically close.\n        proxy_read_timeout 900s;\n        proxy_buffering off;\n    }\n}\n\nserver {\n    listen 80;\n    server_name rancher.yourdomain.com;\n    return 301 https://$server_name$request_uri;\n}\n")),(0,a.kt)("br",null))}p.isMDXComponent=!0}}]);
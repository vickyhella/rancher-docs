"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83100],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"Testing HPAs with kubectl",weight:3031,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/horizontal-pod-autoscaler/testing-hpa"]},i=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl",title:"Testing HPAs with kubectl",description:"This document describes how to check the status of your HPAs after scaling them up or down with your load testing tool. For information on how to check the status from the Rancher UI (at least version 2.3.x), refer to Managing HPAs with the Rancher UI.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663558776,formattedLastUpdatedAt:"2022/9/19",frontMatter:{title:"Testing HPAs with kubectl",weight:3031,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/horizontal-pod-autoscaler/testing-hpa"]},sidebar:"tutorialSidebar",previous:{title:"Managing HPAs with kubectl",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl"},next:{title:"Set Up Load Balancer and Ingress Controller within Rancher",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/load-balancer-and-ingress-controller"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to check the status of your HPAs after scaling them up or down with your load testing tool. For information on how to check the status from the Rancher UI (at least version 2.3.x), refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl"},"Managing HPAs with the Rancher UI"),"."),(0,r.kt)("p",null,"For HPA to work correctly, service deployments should have resources request definitions for containers. Follow this hello-world example to test if HPA is working correctly."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to connect to your Kubernetes cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world")," deployment manifest below."),(0,r.kt)("details",{id:"hello-world"},(0,r.kt)("summary",null,"Hello World Manifest"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: apps/v1beta2\nkind: Deployment\nmetadata:\n  labels:\n    app: hello-world\n  name: hello-world\n  namespace: default\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - image: rancher/hello-world\n        imagePullPolicy: Always\n        name: hello-world\n        resources:\n          requests:\n            cpu: 500m\n            memory: 64Mi\n        ports:\n        - containerPort: 80\n          protocol: TCP\n      restartPolicy: Always\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app: hello-world\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy it to your cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl create -f <HELLO_WORLD_MANIFEST>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy one of the HPAs below based on the metric type you're using:"),(0,r.kt)("details",{id:"service-deployment-resource-metrics"},(0,r.kt)("summary",null,"Hello World HPA: Resource Metrics"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  scaleTargetRef:\n    apiVersion: extensions/v1beta1\n    kind: Deployment\n    name: hello-world\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 50\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageValue: 1000Mi\n"))),(0,r.kt)("details",{id:"service-deployment-custom-metrics"},(0,r.kt)("summary",null,"Hello World HPA: Custom Metrics"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  scaleTargetRef:\n    apiVersion: extensions/v1beta1\n    kind: Deployment\n    name: hello-world\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 50\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageValue: 100Mi\n  - type: Pods\n    pods:\n      metricName: cpu_system\n      targetAverageValue: 20m\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the HPA info and description. Confirm that metric data is shown."),(0,r.kt)("details",{id:"hpa-info-resource-metrics"},(0,r.kt)("summary",null,"Resource Metrics"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Enter the following commands.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl get hpa\nNAME          REFERENCE                TARGETS                     MINPODS   MAXPODS   REPLICAS   AGE\nhello-world   Deployment/hello-world   1253376 / 100Mi, 0% / 50%   1         10        1          6m\n# kubectl describe hpa\nName:                                                  hello-world\nNamespace:                                             default\nLabels:                                                <none>\nAnnotations:                                           <none>\nCreationTimestamp:                                     Mon, 23 Jul 2018 20:21:16 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             1253376 / 100Mi\n  resource cpu on pods  (as a percentage of request):  0% (0) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    ReadyForNewScale    the last scale time was sufficiently old as to warrant a new scale\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:           <none>\n"))))),(0,r.kt)("details",{id:"hpa-info-custom-metrics"},(0,r.kt)("summary",null,"Custom Metrics"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Enter the following command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive the output that follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'Name:                                                  hello-world\nNamespace:                                             default\nLabels:                                                <none>\nAnnotations:                                           <none>\nCreationTimestamp:                                     Tue, 24 Jul 2018 18:36:28 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             3514368 / 100Mi\n  "cpu_system" on pods:                                0 / 20m\n  resource cpu on pods  (as a percentage of request):  0% (0) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    ReadyForNewScale    the last scale time was sufficiently old as to warrant a new scale\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:           <none>\n')))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a load for the service to test that your pods autoscale as intended. You can use any load-testing tool (Hey, Gatling, etc.), but we're using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rakyll/hey"},"Hey"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test that pod autoscaling works as intended.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"To Test Autoscaling Using Resource Metrics:")),(0,r.kt)("details",{id:"observe-upscale-2-pods-cpu"},(0,r.kt)("summary",null,"Upscale to 2 Pods: CPU Usage Up to Target"),(0,r.kt)("p",{parentName:"li"},"  Use your load testing tool to scale up to two pods based on CPU Usage."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"View your HPA.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive output similar to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Name:                                                  hello-world\nNamespace:                                             default\nLabels:                                                <none>\nAnnotations:                                           <none>\nCreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             10928128 / 100Mi\n  resource cpu on pods  (as a percentage of request):  56% (280m) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 2\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:\n  Type    Reason             Age   From                       Message\n  ----    ------             ----  ----                       -------\n  Normal  SuccessfulRescale  13s   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n"))),(0,r.kt)("li",{parentName:"ol"},"Enter the following command to confirm you've scaled to two pods.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   # kubectl get pods\n")),"You should receive output similar to what follows:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   NAME                                                     READY     STATUS    RESTARTS   AGE\n   hello-world-54764dfbf8-k8ph2                             1/1       Running   0          1m\n   hello-world-54764dfbf8-q6l4v                             1/1       Running   0          3h\n"))))),(0,r.kt)("details",{id:"observe-upscale-3-pods-cpu-cooldown"},(0,r.kt)("summary",null,"Upscale to 3 pods: CPU Usage Up to Target"),(0,r.kt)("p",{parentName:"li"},"  Use your load testing tool to upscale to 3 pods based on CPU usage with ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-upscale-delay")," set to 3 minutes."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Enter the following command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive output similar to what follows",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   Name:                                                  hello-world\n   Namespace:                                             default\n   Labels:                                                <none>\n   Annotations:                                           <none>\n   CreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\n   Reference:                                             Deployment/hello-world\n   Metrics:                                               ( current / target )\n     resource memory on pods:                             9424896 / 100Mi\n     resource cpu on pods  (as a percentage of request):  66% (333m) / 50%\n   Min replicas:                                          1\n   Max replicas:                                          10\n   Conditions:\n     Type            Status  Reason              Message\n     ----            ------  ------              -------\n     AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n     ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n     ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n   Events:\n     Type    Reason             Age   From                       Message\n     ----    ------             ----  ----                       -------\n     Normal  SuccessfulRescale  4m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n     Normal  SuccessfulRescale  16s   horizontal-pod-autoscaler  New size: 3; reason: cpu resource utilization (percentage of request) above target\n"))),(0,r.kt)("li",{parentName:"ol"},"Enter the following command to confirm three pods are running.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl get pods\n"))," You should receive output similar to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," NAME                                                     READY     STATUS    RESTARTS   AGE\n hello-world-54764dfbf8-f46kh                             0/1       Running   0          1m\n hello-world-54764dfbf8-k8ph2                             1/1       Running   0          5m\n hello-world-54764dfbf8-q6l4v                             1/1       Running   0          3h\n"))))),(0,r.kt)("details",{id:"observe-downscale-1-pod"},(0,r.kt)("summary",null,"Downscale to 1 Pod: All Metrics Below Target"),(0,r.kt)("p",{parentName:"li"},"  Use your load testing to scale down to 1 pod when all metrics are below target for ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-downscale-delay")," (5 minutes by default)."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Enter the following command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive output similar to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                <none>\n    Annotations:                                           <none>\n    CreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             10070016 / 100Mi\n      resource cpu on pods  (as a percentage of request):  0% (0) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 1\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  10m   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  6m    horizontal-pod-autoscaler  New size: 3; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  1s    horizontal-pod-autoscaler  New size: 1; reason: All metrics below target\n"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"To Test Autoscaling Using Custom Metrics:")),(0,r.kt)("details",{id:"custom-observe-upscale-2-pods-cpu"},(0,r.kt)("summary",null,"Upscale to 2 Pods: CPU Usage Up to Target"),(0,r.kt)("p",{parentName:"li"},"  Use your load testing tool to upscale two pods based on CPU usage."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Enter the following command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  # kubectl describe hpa\n")),"You should receive output similar to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'  Name:                                                  hello-world\n  Namespace:                                             default\n  Labels:                                                <none>\n  Annotations:                                           <none>\n  CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n  Reference:                                             Deployment/hello-world\n  Metrics:                                               ( current / target )\n    resource memory on pods:                             8159232 / 100Mi\n    "cpu_system" on pods:                                7m / 20m\n    resource cpu on pods  (as a percentage of request):  64% (321m) / 50%\n  Min replicas:                                          1\n  Max replicas:                                          10\n  Conditions:\n    Type            Status  Reason              Message\n    ----            ------  ------              -------\n    AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 2\n    ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n    ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n  Events:\n    Type    Reason             Age   From                       Message\n    ----    ------             ----  ----                       -------\n    Normal  SuccessfulRescale  16s   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n'))),(0,r.kt)("li",{parentName:"ol"},"Enter the following command to confirm two pods are running.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  # kubectl get pods\n")),"You should receive output similar to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"      NAME                           READY     STATUS    RESTARTS   AGE\n      hello-world-54764dfbf8-5pfdr   1/1       Running   0          3s\n      hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n"))))),(0,r.kt)("details",{id:"observe-upscale-3-pods-cpu-cooldown-2"},(0,r.kt)("summary",null,"Upscale to 3 Pods: CPU Usage Up to Target"),(0,r.kt)("p",{parentName:"li"},"  Use your load testing tool to scale up to three pods when the cpu_system usage limit is up to target."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Enter the following command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive output similar to what follows:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'   Name:                                                  hello-world\n   Namespace:                                             default\n   Labels:                                                <none>\n   Annotations:                                           <none>\n   CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n   Reference:                                             Deployment/hello-world\n   Metrics:                                               ( current / target )\n     resource memory on pods:                             8374272 / 100Mi\n     "cpu_system" on pods:                                27m / 20m\n     resource cpu on pods  (as a percentage of request):  71% (357m) / 50%\n   Min replicas:                                          1\n   Max replicas:                                          10\n   Conditions:\n     Type            Status  Reason              Message\n     ----            ------  ------              -------\n     AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n     ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n     ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n   Events:\n     Type    Reason             Age   From                       Message\n     ----    ------             ----  ----                       -------\n     Normal  SuccessfulRescale  3m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n     Normal  SuccessfulRescale  3s    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n'))),(0,r.kt)("li",{parentName:"ol"},"Enter the following command to confirm three pods are running.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl get pods\n")),"You should receive output similar to what follows:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   # kubectl get pods\n   NAME                           READY     STATUS    RESTARTS   AGE\n   hello-world-54764dfbf8-5pfdr   1/1       Running   0          3m\n   hello-world-54764dfbf8-m2hrl   1/1       Running   0          1s\n   hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n"))))),(0,r.kt)("details",{id:"observe-upscale-4-pods"},(0,r.kt)("summary",null,"Upscale to 4 Pods: CPU Usage Up to Target"),(0,r.kt)("p",{parentName:"li"},"  Use your load testing tool to upscale to four pods based on CPU usage. ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-upscale-delay")," is set to three minutes by default."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Enter the following command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive output similar to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                <none>\n    Annotations:                                           <none>\n    CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             8374272 / 100Mi\n      "cpu_system" on pods:                                27m / 20m\n      resource cpu on pods  (as a percentage of request):  71% (357m) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  5m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  3m    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n      Normal  SuccessfulRescale  4s    horizontal-pod-autoscaler  New size: 4; reason: cpu resource utilization (percentage of request) above target\n'))),(0,r.kt)("li",{parentName:"ol"},"Enter the following command to confirm four pods are running.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl get pods\n")),"You should receive output similar to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  NAME                           READY     STATUS    RESTARTS   AGE\n  hello-world-54764dfbf8-2p9xb   1/1       Running   0          5m\n  hello-world-54764dfbf8-5pfdr   1/1       Running   0          2m\n  hello-world-54764dfbf8-m2hrl   1/1       Running   0          1s\n  hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n"))))),(0,r.kt)("details",{id:"custom-metrics-observe-downscale-1-pod"},(0,r.kt)("summary",null,"Downscale to 1 Pod: All Metrics Below Target"),(0,r.kt)("p",{parentName:"li"},"  Use your load testing tool to scale down to one pod when all metrics below target for ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-downscale-delay"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Enter the following command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive similar output to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                <none>\n    Annotations:                                           <none>\n    CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             8101888 / 100Mi\n      "cpu_system" on pods:                                8m / 20m\n      resource cpu on pods  (as a percentage of request):  0% (0) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 1\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  10m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  8m    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n      Normal  SuccessfulRescale  5m    horizontal-pod-autoscaler  New size: 4; reason: cpu resource utilization (percentage of request) above target\n      Normal   SuccessfulRescale             13s               horizontal-pod-autoscaler  New size: 1; reason: All metrics below target\n'))),(0,r.kt)("li",{parentName:"ol"},"Enter the following command to confirm a single pods is running.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    # kubectl get pods\n")),"You should receive output similar to what follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    NAME                           READY     STATUS    RESTARTS   AGE\n    hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n"))))))))}m.isMDXComponent=!0}}]);
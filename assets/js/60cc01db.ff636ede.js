"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9198],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20850:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},i="Using KusionStack Operating to operate Pods gracefully",l={unversionedId:"operating/started/demo-graceful-operation",id:"operating/started/demo-graceful-operation",title:"Using KusionStack Operating to operate Pods gracefully",description:"Applications always provide its service along with traffic routing.",source:"@site/docs/operating/started/demo-graceful-operation.md",sourceDirName:"operating/started",slug:"/operating/started/demo-graceful-operation",permalink:"/docs/next/operating/started/demo-graceful-operation",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/operating/started/demo-graceful-operation.md",tags:[],version:"current",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1706608804,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{},sidebar:"operating",previous:{title:"Installation",permalink:"/docs/next/operating/started/install"},next:{title:"PodOpsLifecycle",permalink:"/docs/next/operating/concepts/podopslifecycle"}},s={},p=[{value:"Preparing",id:"preparing",level:2},{value:"Get started",id:"get-started",level:2},{value:"Create a new namespace",id:"create-a-new-namespace",level:3},{value:"Provision Pods and Services",id:"provision-pods-and-services",level:3},{value:"Provision a client",id:"provision-a-client",level:3},{value:"Update Pod revision",id:"update-pod-revision",level:3},{value:"Provision PodTransistionRule",id:"provision-podtransistionrule",level:3},{value:"Clean tutorial namespace",id:"clean-tutorial-namespace",level:3},{value:"Comparison with the Native Approach",id:"comparison-with-the-native-approach",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-kusionstack-operating-to-operate-pods-gracefully"},"Using KusionStack Operating to operate Pods gracefully"),(0,r.kt)("p",null,"Applications always provide its service along with traffic routing.\nOn Kubernetes, they should be a set of Pods and a corresponding Kubernetes Service resource to expose the service."),(0,r.kt)("p",null,"However, during operations such as updating Pod revisions,\nthere is a risk that client request traffic may be lost. This can lead to a poor user experience for developers."),(0,r.kt)("p",null,"This tutorial will demonstrate how to operate Pods gracefully in a KusionStack Operating way on Aliyun ACK\nwith SLB as a Service backend provider."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also get the same point from ",(0,r.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1n8411q7sP/?t=15.7"},"this video"),",\nwhich shows the same case using both KusionStack Kusion and Operating.\nThe sample used in this video can be found from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog/tree/main/models/samples/wordpress"},"KusionStack Catalog"),".")),(0,r.kt)("h2",{id:"preparing"},"Preparing"),(0,r.kt)("p",null,"First, ensure that you have an Aliyun ACK Kubernetes cluster set up in order to provision an Aliyun SLB."),(0,r.kt)("p",null,"Next, install KusionStack Operating on this Kubernetes cluster\nfollowing ",(0,r.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/operating/started/install"},"installation doc"),"."),(0,r.kt)("h2",{id:"get-started"},"Get started"),(0,r.kt)("h3",{id:"create-a-new-namespace"},"Create a new namespace"),(0,r.kt)("p",null,"To begin, create a new namespace for this tutorial:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create ns operating-tutorial\n")),(0,r.kt)("h3",{id:"provision-pods-and-services"},"Provision Pods and Services"),(0,r.kt)("p",null,"You can create a set of Pods to run up a demo application service\nby creating CollaSet resource using following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo \'\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: server\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: server\n  template:\n    metadata:\n      labels:\n        app: server\n    spec:\n      containers:\n      - image: wu8685/echo:1.3\n        name: server\n        command:\n        - /server\n        resources:\n          limits:\n            cpu: "0.1"\n            ephemeral-storage: 100Mi\n            memory: 100Mi\n          requests:\n            cpu: "0.1"\n            ephemeral-storage: 100Mi\n            memory: 100Mi\n        readinessProbe:\n          httpGet:\n            path: /healthz\n            port: 8080\n          initialDelaySeconds: 5\n          periodSeconds: 3\n\' | kubectl -n operating-tutorial apply -f -\n')),(0,r.kt)("p",null,"There should be 3 Pods created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n operating-tutorial get pod\nNAME           READY   STATUS    RESTARTS   AGE\nserver-c5lsr   1/1     Running   0          2m23s\nserver-p6wrx   1/1     Running   0          2m23s\nserver-zn62c   1/1     Running   0          2m23s\n")),(0,r.kt)("p",null,"Then create a Kubernetes Service by running following command,\nwhich will provision Aliyun SLB to expose service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo '\napiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: slb.s1.small\n    service.beta.kubernetes.io/backend-type: eni\n  labels:\n    kusionstack.io/control: \"true\"  # this label is required\n  name: server\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 8080\n  selector:\n    app: server\n  type: LoadBalancer\n' | kubectl -n operating-tutorial apply -f -\n")),(0,r.kt)("p",null,"A service with external IP should be provisioned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n operating-tutorial get svc server\nNAME     TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE\nserver   LoadBalancer   192.168.225.55   47.101.49.182   80:30146/TCP   51s\n")),(0,r.kt)("p",null,"The label ",(0,r.kt)("inlineCode",{parentName:"p"},'kusionstack.io/control: "true"')," on Service is very important.\nIt means this service resource will be recognized by ResourceConsist framework, and then participate in PodOpsLifecycle\nto control the Aliyun SLB to switch off traffic before updating each Pod and switch on traffic after it finished,\nin order to protect the service."),(0,r.kt)("h3",{id:"provision-a-client"},"Provision a client"),(0,r.kt)("p",null,"Then we will provision a client to access the service we created before.\nPlease replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<EXTERNAL_IP>")," in the following CollaSet yaml with the external IP from Kubernetes Service created above, and apply again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo \'\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: client\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: client\n  template:\n    metadata:\n      labels:\n        app: client\n    spec:\n      containers:\n      - image: wu8685/echo:1.3\n        name: nginx\n        command:\n        - /client\n        args:\n        - -url\n        - http://<EXTERNAL_IP>/echo   # EXTERNAL_IP should be replaced\n        - -m\n        - POST\n        - d\n        - operating-tutorial\n        - -qps\n        - "10"\n        - -worker\n        - "10"\n        - -timeout\n        - "10000"\n        resources:\n          limits:\n            cpu: "0.1"\n            ephemeral-storage: 1Gi\n            memory: 100Mi\n          requests:\n            cpu: "0.1"\n            ephemeral-storage: 1Gi\n            memory: 100Mi\n\' | kubectl -n operating-tutorial apply -f -\n')),(0,r.kt)("p",null,"A client Pod should be created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n operating-tutorial get pod\nNAME           READY   STATUS    RESTARTS   AGE\nclient-nc426   1/1     Running   0          30s\nserver-c5lsr   1/1     Running   0          19m\nserver-p6wrx   1/1     Running   0          19m\nserver-zn62c   1/1     Running   0          19m\n")),(0,r.kt)("p",null,"This client will continuously access the service using the configuration provided in the command.\nYou can monitor the response codes from its logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n operating-tutorial logs -f client-nc426\nworker-0 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\nworker-0 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\nworker-0 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\nworker-0 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\n")),(0,r.kt)("p",null,"The accesses are all successful."),(0,r.kt)("h3",{id:"update-pod-revision"},"Update Pod revision"),(0,r.kt)("p",null,"To trigger a Pod revision update, run the following command\nto edit the container image and command in the PodTemplate of CollaSet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo \'\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: server\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: server\n  template:\n    metadata:\n      labels:\n        app: server\n    spec:\n      containers:\n      - image: wu8685/echo:1.2\n        name: server\n        command:\n        - /app/echo\n        resources:\n          limits:\n            cpu: "0.1"\n            ephemeral-storage: 100Mi\n            memory: 100Mi\n          requests:\n            cpu: "0.1"\n            ephemeral-storage: 100Mi\n            memory: 100Mi\n        readinessProbe:\n          httpGet:\n            path: /healthz\n            port: 8080\n          initialDelaySeconds: 5\n          periodSeconds: 3\n\' | kubectl -n operating-tutorial apply -f -\n')),(0,r.kt)("p",null,"It will trigger all Pods updated simultaneously. So the application ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," has no Pod to serve.\nWe can observe the error from client logs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'worker-1 fails to request POST http://47.101.49.182/echo : Post "http://47.101.49.182/echo": read tcp 10.244.1.11:54040->47.101.49.182:80: read: connection reset by peer\nworker-0 fails to request POST http://47.101.49.182/echo : Post "http://47.101.49.182/echo": read tcp 10.244.1.11:34438->47.101.49.182:80: read: connection reset by peer\nworker-1 fails to request POST http://47.101.49.182/echo : Post "http://47.101.49.182/echo": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\nworker-0 fails to request POST http://47.101.49.182/echo : Post "http://47.101.49.182/echo": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\nworker-1 fails to request POST http://47.101.49.182/echo : Post "http://47.101.49.182/echo": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\nworker-1 another loop, request: 20, failed: 3\nworker-0 fails to request POST http://47.101.49.182/echo : Post "http://47.101.49.182/echo": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\nworker-0 another loop, request: 20, failed: 3\nworker-1 fails to request POST http://47.101.49.182/echo : Post "http://47.101.49.182/echo": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\n')),(0,r.kt)("h3",{id:"provision-podtransistionrule"},"Provision PodTransistionRule"),(0,r.kt)("p",null,"To avoid this problem, provision a PodTransitionRule with a maxUnavailable 50% rule by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo '\napiVersion: apps.kusionstack.io/v1alpha1\nkind: PodTransitionRule\nmetadata:\n  labels:\n  name: server\nspec:\n  rules:\n  - availablePolicy:\n      maxUnavailableValue: 50%\n    name: maxUnavailable\n  selector:\n    matchLabels:\n      app: server\n' | kubectl -n operating-tutorial apply -f -\n")),(0,r.kt)("p",null,"After updating the CollaSet of the server to trigger an update, you will see the Pods rolling update one by one,\nensuring that at least one Pod is always available to serve."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n operating-tutorial get pod\nNAME           READY   STATUS    RESTARTS   AGE\nclient-rrfbj   1/1     Running   0          25s\nserver-457sn   0/1     Running   0          5s\nserver-bd5sz   0/1     Running   0          5s\nserver-l842s   1/1     Running   0          2m4s\n")),(0,r.kt)("p",null,"You can see from the client logs that no access requests fail during this update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"worker-0 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\nworker-0 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\nworker-0 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\nworker-0 another loop, request: 50, failed: 0\nworker-0 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\nworker-1 another loop, request: 50, failed: 0\nworker-0 another loop, request: 50, failed: 0\n")),(0,r.kt)("h3",{id:"clean-tutorial-namespace"},"Clean tutorial namespace"),(0,r.kt)("p",null,"At the end of this tutorial, you can clean up the resources by deleting the namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl delete ns operating-tutorial\n")),(0,r.kt)("h2",{id:"comparison-with-the-native-approach"},"Comparison with the Native Approach"),(0,r.kt)("p",null,"Kubernetes provides ",(0,r.kt)("inlineCode",{parentName:"p"},"preStop")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"postStart")," hook in each container, by which users can also interact with service outside\nKubernetes like Aliyun SLB service. However, KusionStack Operating offers several advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pod level vs Container level")),(0,r.kt)("p",null,"Operating offers a Pod level hooks which have more complete information than one container,\nespecially there are several containers in one Pod."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plugin-able")),(0,r.kt)("p",null,"Through KusionStack Operating, you can decouple operations executed before or after Pods actually change.\nFor example, traffic control can be added or removed without modifying the Pod's preStop configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rollback option")),(0,r.kt)("p",null,"In case of issues, rollback becomes a viable option when using the Operating approach to update Pods.\nSince Operating does not modify the Pods or their containers during the update,\nif the traffic service experiences problems, there is an opportunity to cancel the update."))}u.isMDXComponent=!0}}]);
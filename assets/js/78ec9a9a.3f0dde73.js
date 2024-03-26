"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9193],{3905:(e,a,n)=>{n.d(a,{Zo:()=>r,kt:()=>m});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),d=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},r=function(e){var a=d(e.components);return t.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,r=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?t.createElement(g,o(o({ref:a},r),{},{components:n})):t.createElement(g,o({ref:a},r))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56855:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=n(87462),l=(n(67294),n(3905));const i={sidebar_position:1},o="CollaSet",s={unversionedId:"operating/manuals/collaset",id:"operating/manuals/collaset",title:"CollaSet",description:"CollaSet is responsible for managing a set of Pods. Similar to Kubernetes Deployment and StatefulSet, it also supports scaling and updating Pods. Additionally, CollaSet offers advanced features to provide users with more granular control over managing Pods.",source:"@site/docs/operating/manuals/collaset.md",sourceDirName:"operating/manuals",slug:"/operating/manuals/collaset",permalink:"/docs/next/operating/manuals/collaset",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/operating/manuals/collaset.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1711420915,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"operating",previous:{title:"PodOpsLifecycle",permalink:"/docs/next/operating/concepts/podopslifecycle"},next:{title:"ResourceConsist",permalink:"/docs/next/operating/manuals/resourceconsist"}},p={},d=[{value:"Basic Features",id:"basic-features",level:2},{value:"Scaling Pods",id:"scaling-pods",level:3},{value:"Updating Pods",id:"updating-pods",level:3},{value:"Partition",id:"partition",level:4},{value:"Update by Label",id:"update-by-label",level:4},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Scaling Pods",id:"scaling-pods-1",level:3},{value:"Pod Instance ID",id:"pod-instance-id",level:4},{value:"Revision Consistency",id:"revision-consistency",level:4},{value:"Updating Pods",id:"updating-pods-1",level:3},{value:"Update Policy",id:"update-policy",level:4}],r={toc:d};function c(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},r,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"collaset"},"CollaSet"),(0,l.kt)("p",null,"CollaSet is responsible for managing a set of Pods. Similar to Kubernetes Deployment and StatefulSet, it also supports scaling and updating Pods. Additionally, CollaSet offers advanced features to provide users with more granular control over managing Pods."),(0,l.kt)("p",null,"A basic CollaSet configuration is represented in the following YAML format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: foo\n  template:\n    metadata:\n      labels:\n        app: foo\n    spec:\n      containers:\n        - image: nginx:1.25.2\n          name: nginx\n")),(0,l.kt)("p",null,"Let's explore the features of CollaSet."),(0,l.kt)("h2",{id:"basic-features"},"Basic Features"),(0,l.kt)("h3",{id:"scaling-pods"},"Scaling Pods"),(0,l.kt)("p",null,"CollaSet utilizes the field spec.replicas to indicate the number of Pods under management."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample\nspec:\n  replicas: 3 # indicate the number of Pods to manage\n  selector:\n    matchLabels:\n      app: foo\n  template:\n    metadata:\n      labels:\n        app: foo\n    spec:\n      containers:\n        - image: nginx:1.25.2\n          name: nginx\n...\n")),(0,l.kt)("p",null,"Pods can be provisioned by CollaSet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n default apply -f ./config/samples/apps_v1alpha1_collaset.yaml\ncollaset.apps.kusionstack.io/collaset-sample created\n\n$ kubectl -n default get pod\nNAME                    READY   STATUS    RESTARTS   AGE\ncollaset-sample-85q7g   1/1     Running   0          57s\ncollaset-sample-vx5ws   1/1     Running   0          57s\ncollaset-sample-hr7pv   1/1     Running   0          57s\n\n$ kubectl -n default get cls\nNAME              DESIRED   CURRENT   UPDATED   UPDATED_READY   UPDATED_AVAILABLE   CURRENT_REVISION            UPDATED_REVISION            AGE\ncollaset-sample   3         3         3         3               3                   collaset-sample-6d7b7c58f   collaset-sample-6d7b7c58f   64s\n")),(0,l.kt)("p",null,"By default, CollaSet always creates new Pods using the latest template specified in ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.template"),". CollaSet establishes ownership over a set of Pods through the label selector defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.selector"),". Thus, it's important to ensure that the labels provided in ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.selector")," match those in ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels"),"."),(0,l.kt)("p",null,"CollaSet status provides general information about this CollaSet and all Pods under it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n default get cls collaset-sample -o yaml\n......\nstatus:\n  availableReplicas: 3\n  collisionCount: 0\n  conditions:\n  - lastTransitionTime: "2023-09-01T03:56:09Z"\n    reason: Updated\n    status: "True"\n    type: Update\n  currentRevision: collaset-sample-6d7b7c58f\n  observedGeneration: 1\n  operatingReplicas: 0\n  readyReplicas: 3\n  replicas: 3\n  scheduledReplicas: 3\n  updatedAvailableReplicas: 3\n  updatedReadyReplicas: 3\n  updatedReplicas: 3\n  updatedRevision: collaset-sample-6d7b7c58f\n')),(0,l.kt)("p",null,"Some fields in CollaSet status are explained here:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"updatedRevision")," indicates the latest revision that CollaSet uses to create or update Pods."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"currentRevision")," indicates the last updated revision. It will be set to updatedRevision after all Pods are updated, and their PodReady conditions become True."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"replicas")," indicates the count of Pods under this CollaSet."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scheduledReplicas")," indicates the count of Pods under this CollaSet that successfully got scheduled."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"availableReplicas")," indicates the count of Pods under this CollaSet that have all expected finalizers attached."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"updatedReplicas")," indicates the count of Pods under this CollaSet that have the updated revision."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"updatedReadyReplicas")," indicates the count of Pods under this CollaSet that are counted in ",(0,l.kt)("inlineCode",{parentName:"p"},"updatedReplicas")," and have their PodReady conditions set to True."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"updatedAvailableReplicas")," indicates the count of Pods under this CollaSet that is counted in ",(0,l.kt)("inlineCode",{parentName:"p"},"updatedReadyReplicas")," and have all expected finalizers attached."),(0,l.kt)("h3",{id:"updating-pods"},"Updating Pods"),(0,l.kt)("p",null,"CollaSet generates Pods according to the pod template described in ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.template"),". This template can be updated to signal CollaSet to update each owned Pod:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n default edit cls collaset-sample\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n......\nspec:\n......\n  template:\n    ......\n    spec:\n      containers:\n      - image: nginx:1.24.0  # changed from nginx:1.25.2 \n......\n")),(0,l.kt)("p",null,"CollaSet immediately updates all Pods it owns with the new Pod template by default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n default get pod -o yaml | grep "image: nginx"\n    - image: nginx:1.24.0\n    - image: nginx:1.24.0\n    - image: nginx:1.24.0\n')),(0,l.kt)("p",null,"The update progress can be controlled using partition."),(0,l.kt)("h4",{id:"partition"},"Partition"),(0,l.kt)("p",null,"Similar to StatefulSet, ",(0,l.kt)("inlineCode",{parentName:"p"},"partition")," is used to control the upgrade progress."),(0,l.kt)("p",null,"By default, if not indicated, all Pods will be updated when spec.template changes. The ",(0,l.kt)("inlineCode",{parentName:"p"},"partition")," can be adjusted from 0 to ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.replicas")," to specify how many Pods CollaSet should update. ",(0,l.kt)("strong",{parentName:"p"},"Unlike StatefulSet, the partition in CollaSet represents the number of Pods to update.")),(0,l.kt)("p",null,"Let's update the image back to nginx:1.25.2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n default edit cls collaset-sample\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample\nspec:\n  template:\n    ......\n    spec:\n      containers:\n      - image: nginx:1.25.2  # changed from nginx:1.24.0 \n  ...\n  updateStrategy:\n    rollingUpdate:\n      byPartition:\n        partition: 1    # use partition to control upgrade progress\n")),(0,l.kt)("p",null,"In this case, CollaSet only updates 1 Pod to the updated revision."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n default get pod -o yaml | grep "image: nginx"\n    - image: nginx:1.24.0\n    - image: nginx:1.25.2   # only 1 Pod updated\n    - image: nginx:1.24.0\n')),(0,l.kt)("h4",{id:"update-by-label"},"Update by Label"),(0,l.kt)("p",null,"By configuring the ",(0,l.kt)("inlineCode",{parentName:"p"},"byLabel")," rolling update policy, users can precisely specify which Pods they want to update by using labels."),(0,l.kt)("p",null,"If you go back to the sample in the ",(0,l.kt)("a",{parentName:"p",href:"#Partition"},"section Partition")," and change ",(0,l.kt)("inlineCode",{parentName:"p"},"byPartition")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"byLabel")," like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n default edit cls collaset-sample\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample\nspec:\n  ...\n  updateStrategy:\n    rollingUpdate:\n-     byPartition:\n-       partition: 1\n+     byLabel: {}\n")),(0,l.kt)("p",null,"Subsequently, each Pod will only be updated if it's marked with the label ",(0,l.kt)("inlineCode",{parentName:"p"},"collaset.kusionstack.io/update-included"),"."),(0,l.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,l.kt)("h3",{id:"scaling-pods-1"},"Scaling Pods"),(0,l.kt)("h4",{id:"pod-instance-id"},"Pod Instance ID"),(0,l.kt)("p",null,"Each Pod created by CollaSet has a unique ID held by the label ",(0,l.kt)("inlineCode",{parentName:"p"},"collaset.kusionstack.io/instance-id"),", which can be used to identify each individual Pod."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    collaset.kusionstack.io/instance-id: "0"  # Pod instance ID\n...\n')),(0,l.kt)("p",null,"CollaSet provides a context to specify an ID pool, which defaults to the same name as the CollaSet and is immutable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  scaleStrategy:\n    context: <id-pool-name>\n")),(0,l.kt)("p",null,"The same ID pool name can be indicated for multiple CollaSets, allowing them to share a single ID pool. Consequently, each Pod created by these CollaSets will be assigned a unique ID."),(0,l.kt)("p",null,"For example, these are two CollaSets with the same context:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat ~/sample.yaml\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample-a\nspec:\n  replicas: 2\n  scaleStrategy:\n    context: foo    # with the same context foo\n  selector:\n    matchLabels:\n      app: foo\n  template:\n    metadata:\n      labels:\n        app: foo\n    spec:\n      containers:\n        - image: nginx:1.25.2\n          name: nginx\n---\n\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample-b\nspec:\n  replicas: 2\n  scaleStrategy:\n    context: foo    # with the same context foo\n  selector:\n    matchLabels:\n      app: foo\n  template:\n    metadata:\n      labels:\n        app: foo\n    spec:\n      containers:\n        - image: nginx:1.25.2\n          name: nginx\n")),(0,l.kt)("p",null,"Then create these CollaSets with the sample file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n default apply -f ~/sample.yaml\ncollaset.apps.kusionstack.io/collaset-sample-a created\ncollaset.apps.kusionstack.io/collaset-sample-b created\n\n$ kubectl -n default get pod\nNAME                      READY   STATUS    RESTARTS   AGE\ncollaset-sample-a-g4sjj   1/1     Running   0          42s\ncollaset-sample-a-ph9vc   1/1     Running   0          42s\ncollaset-sample-b-fqkq4   1/1     Running   0          42s\ncollaset-sample-b-lqg8f   1/1     Running   0          42s\n\n$ kubectl -n default get pod -o yaml | grep collaset.kusionstack.io/instance-id\n      collaset.kusionstack.io/instance-id: "0"\n      collaset.kusionstack.io/instance-id: "1"\n      collaset.kusionstack.io/instance-id: "3"\n      collaset.kusionstack.io/instance-id: "2"\n')),(0,l.kt)("p",null,"Now, the 4 Pods created by these 2 CollaSets will have a unique instance ID."),(0,l.kt)("h4",{id:"revision-consistency"},"Revision Consistency"),(0,l.kt)("p",null,"Pods within a CollaSet can utilize more than two different Pod templates simultaneously, including both the current and updated revisions. This can result from partial updates. To ensure the stability of Pod revisions over time, CollaSet records this information. When a Pod is deleted, CollaSet recreates it using its previous revision."),(0,l.kt)("p",null,"It can be reproduced by following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Provision a new CollaSet with replicas 3.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n default apply -f ./config/samples/apps_v1alpha1_collaset.yaml\ncollaset.apps.kusionstack.io/collaset-sample created\n\n$ kubectl get pod\nNAME                     READY   STATUS    RESTARTS   AGE\ncollaset-sample-5tgcs    1/1     Running   0          4s\ncollaset-sample-glgnb    1/1     Running   0          4s\ncollaset-sample-qs46r    1/1     Running   0          4s\n\n$ kubectl -n default get cls\nNAME              DESIRED   CURRENT   UPDATED   UPDATED_READY   UPDATED_AVAILABLE   CURRENT_REVISION            UPDATED_REVISION            AGE\ncollaset-sample   3         3         3         3               3                   collaset-sample-6d7b7c58f   collaset-sample-6d7b7c58f   64s\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Update the image of PodTemplate of the CollaSet to image nginx:1.24.0 and set the partition to 2. Then there will be 2 Pods with image nginx:1.24.0 and 1 Pod with image nginx:1.25.2.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n default edit cls collaset-sample\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample\nspec:\n  template:\n    ......\n    spec:\n      containers:\n      - image: nginx:1.24.0  # changed from nginx:1.25.2 \n  ...\n  updateStrategy:\n    rollingUpdate:\n      byPartition:\n        partition: 2    # update 2 Pods\n\n# Wait until these 2 Pods are updated, and check the Pod\'s images.\n$ kubectl get pod -o yaml | grep "image: nginx"\n    - image: nginx:1.25.2\n    - image: nginx:1.24.0\n    - image: nginx:1.24.0\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Update the image of PodTemplate of the CollaSet to image nginx:1.23.4 and set the partition to 1.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n default edit cls collaset-sample\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample\nspec:\n  template:\n    ......\n    spec:\n      containers:\n      - image: nginx:1.23.4  # changed from nginx:1.24.0\n  ...\n  updateStrategy:\n    rollingUpdate:\n      byPartition:\n        partition: 1    # update 1 Pod\n\n# Wait until the Pod is updated, and check the Pod\'s images.\n$ kubectl get pod -o yaml | grep "image: nginx"\n    - image: nginx:1.25.2\n    - image: nginx:1.24.0   # Pod collaset-sample-qs46r\n    - image: nginx:1.23.4\n')),(0,l.kt)("p",null,"Now, there are 3 Pods, each of which has an individual image. If we then delete the Pod with the image nginx:1.24.0, the new Pod replacing it will be created with the same image nginx:1.24.0 in order for the Pod to inherit the revision."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl delete -n default delete pod collaset-sample-qs46r\npod "collaset-sample-qs46r" deleted\n\n$ kubectl get pod\nNAME                     READY   STATUS    RESTARTS      AGE\ncollaset-sample-5tgcs    1/1     Running   0             3h\ncollaset-sample-ht9x6    1/1     Running   0             2m27s  # Pod recreated\ncollaset-sample-qs46r    1/1     Running   1 (3h ago)    3h\n\n$ kubectl get pod -o yaml | grep "image: nginx"\n    - image: nginx:1.25.2\n    - image: nginx:1.24.0   # image has not been changed\n    - image: nginx:1.23.4\n')),(0,l.kt)("h3",{id:"updating-pods-1"},"Updating Pods"),(0,l.kt)("h4",{id:"update-policy"},"Update Policy"),(0,l.kt)("p",null,"In addition to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReCreate")," update policy, which is identical to Deployment and StatefulSet, CollaSet offers the ",(0,l.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible")," update policy."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample\nspec:\n  ...\n  updateStrategy:\n    podUpgradePolicy: InPlaceIfPossible  # Options: InPlaceIfPossible, ReCreate\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible")," is the default value, which instructs CollaSets to try to update Pods in place when only container images, labels, and annotations have changed. If some other fields have changed too, the policy will back off to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReCreate")," policy."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ReCreate")," indicates CollaSets always delete the old Pod and create a new one with an updated revision."),(0,l.kt)("p",null,"If update pod template with ",(0,l.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible")," policy as following example, the Pod will not be recreated."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n default edit cls collaset-sample\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: collaset-sample\nspec:\n  template:\n    ......\n    spec:\n      containers:\n      - image: nginx:1.24.0  # changed from nginx:1.25.2\n  ...\n  updateStrategy:\n    podUpgradePolicy: InPlaceIfPossible # use InPlaceIfPossible policy\n\n$ kubectl -n default get pod -o yaml | grep "image: nginx"\n    - image: nginx:1.24.0\n    - image: nginx:1.24.0\n    - image: nginx:1.24.0\n\n$ kubectl -n default get pod\nNAME                     READY   STATUS    RESTARTS     AGE\ncollaset-sample-5wvlh    1/1     Running   1 (6s ago)   2m10s\ncollaset-sample-ldvrg    1/1     Running   1 (6s ago)   2m10s\ncollaset-sample-pbz75    1/1     Running   1 (6s ago)   2m10s\n')))}c.isMDXComponent=!0}}]);
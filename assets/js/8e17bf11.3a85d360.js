"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1974],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?t.createElement(f,l(l({ref:n},d),{},{components:a})):t.createElement(f,l({ref:n},d))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1544:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var t=a(7462),o=(a(7294),a(3905));const i={sidebar_position:4},l="PodDecoration",r={unversionedId:"operating/manuals/poddecoration",id:"version-v0.9/operating/manuals/poddecoration",title:"PodDecoration",description:"PodDecoration works in conjunction with CollaSet to selectively inject specific configurations to Pods that meet certain criteria.",source:"@site/versioned_docs/version-v0.9/operating/manuals/poddecoration.md",sourceDirName:"operating/manuals",slug:"/operating/manuals/poddecoration",permalink:"/docs/operating/manuals/poddecoration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/operating/manuals/poddecoration.md",tags:[],version:"v0.9",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1705302018,formattedLastUpdatedAt:"Jan 15, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"operating",previous:{title:"PodTransitionRule",permalink:"/docs/operating/manuals/podtransitionrule"}},p={},s=[{value:"Create CollaSet",id:"create-collaset",level:2},{value:"Create PodDecoration",id:"create-poddecoration",level:2},{value:"Update PodDecoration",id:"update-poddecoration",level:2},{value:"Rolling update v1",id:"rolling-update-v1",level:3},{value:"Rolling update v1 -&gt; v2",id:"rolling-update-v1---v2",level:3},{value:"Injection",id:"injection",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Primary Container",id:"primary-container",level:3},{value:"Sidecar Container",id:"sidecar-container",level:3},{value:"InitContainer",id:"initcontainer",level:3},{value:"Upgrade strategy",id:"upgrade-strategy",level:2}],d={toc:s};function c(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"poddecoration"},"PodDecoration"),(0,o.kt)("p",null,"PodDecoration works in conjunction with CollaSet to selectively inject specific configurations to Pods that meet certain criteria. "),(0,o.kt)("p",null,"PodDecoration not only allows injecting sidecar containers to Pods but also enables modifying existing container configurations, metadata, and scheduling parameters etc.\nThe PodDecoration controller does not control the upgrade of Pods. The actual upgrade process is fully controlled by the CollaSet controller. This means that the injection upgrade of PodDecoration can also be performed ",(0,o.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible"),"."),(0,o.kt)("p",null,"About ",(0,o.kt)("a",{parentName:"p",href:"/docs/operating/manuals/collaset"},"CollaSet"),"."),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("h2",{id:"create-collaset"},"Create CollaSet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# collaset.yaml\napiVersion: apps.kusionstack.io/v1alpha1\nkind: CollaSet\nmetadata:\n  name: foo\n  namespace: default\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: foo\n  template:\n    metadata:\n      labels:\n        app: foo\n    spec:\n      containers:\n      - image: nginx:1.25.2\n        name: foo\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"collaset.yaml")," to create three pods under CollaSet ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," management."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f collaset.yaml\ncollaset.apps.kusionstack.io/foo created\n\n$ kubectl get cls\nNAME     DESIRED   CURRENT   AVAILABLE   UPDATED   UPDATED_READY   UPDATED_AVAILABLE   CURRENT_REVISION   UPDATED_REVISION   AGE\nfoo      3         3         3           3         3               3                   foo-7bdb974bc7     foo-7bdb974bc7     7s\n\n$ kubectl get pod\nNAME           READY   STATUS    RESTARTS      AGE\nfoo-2wnnf      1/1     Running   0             41s\nfoo-hqpx7      1/1     Running   0             41s\nfoo-mqt48      1/1     Running   0             41s\n")),(0,o.kt)("h2",{id:"create-poddecoration"},"Create PodDecoration"),(0,o.kt)("p",null,"The following ",(0,o.kt)("inlineCode",{parentName:"p"},"poddecoration.yaml")," file describes a PodDecoration, which selects the pod under CollaSet ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," and injects the content in ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," into the pod with ",(0,o.kt)("inlineCode",{parentName:"p"},"instance-id=0"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# poddecoration.yaml\napiVersion: apps.kusionstack.io/v1alpha1\nkind: PodDecoration\nmetadata:\n  name: sample-pd\nspec:\n  selector:     # selected pod range in which PodDecoration takes effect\n    matchLabels:\n      app: foo\n  updateStrategy:\n    rollingUpdate:\n      selector:      # select pod to upgrade in effect range\n        matchLabels:\n          collaset.kusionstack.io/instance-id: "0"\n  template:\n    metadata:\n    - patchPolicy: Overwrite\n      labels:\n        custom.io/sidecar-version: "v1"\n    containers:\n    - injectPolicy: AfterPrimaryContainer\n      name: sidecar-a\n      image: ubuntu:22.04\n      command: ["sleep", "2h"]\n      volumeMounts:\n      - name: sample-volume\n        mountPath: /vol/sample\n    volumes:\n    - name: sample-volume\n      emptyDir: {}\n')),(0,o.kt)("p",null,"Create PodDecoration ",(0,o.kt)("inlineCode",{parentName:"p"},"sample-pd")," to upgrade selected pod "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f poddecoration.yaml\npoddecoration.apps.kusionstack.io/sample-pd created\n")),(0,o.kt)("p",null,"The status of PodDecoration is updated, and one pod is injected with sidecar through recreate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pd\nNAME        EFFECTIVE   MATCHED   INJECTED   UPDATED   UPDATED_READY   CURRENT_REVISION   UPDATED_REVISION      AGE\nsample-pd   true        3         1          1         1                                  sample-pd-9465f4c84   20s\n\n$ kubectl get pod\nNAME        READY   STATUS    RESTARTS   AGE\nfoo-2gnnl   2/2     Running   0          15s\nfoo-2wnnf   1/1     Running   0          2m\nfoo-hqpx7   1/1     Running   0          2m\n\n$ kubectl get pd sample-pd -o yaml | grep -A20 status\nstatus:\n  details:\n  - affectedReplicas: 3\n    collaSet: foo\n    pods:\n    - name: foo-2gnnl\n      revision: sample-pd-9465f4c84\n    - name: foo-2wnnf\n      escaped: true\n    - name: foo-hqpx7\n      escaped: true\n  matchedPods: 3\n  injectedPods: 1\n  updatedPods: 1\n  updatedReadyPods: 1\n  updatedAvailablePods: 1\n  isEffective: true\n  updatedRevision: sample-pd-9465f4c84\n")),(0,o.kt)("h2",{id:"update-poddecoration"},"Update PodDecoration"),(0,o.kt)("h3",{id:"rolling-update-v1"},"Rolling update v1"),(0,o.kt)("p",null,"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"sample-pd")," to expand the upgrade scope."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl edit pd sample-pd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# poddecoration.yaml\n# Edit updateStrategy to select instance-id in [0, 1, 2]\n...\nspec:\n  ...\n  updateStrategy:\n    rollingUpdate:\n      selector: \n        matchExpressions:\n        - key: collaset.kusionstack.io/instance-id\n          operator: In\n          values:\n          - "0"\n          - "1"  \n          - "2"  \n  template:\n    ...\n')),(0,o.kt)("p",null,"All pods updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pd\nNAME        EFFECTIVE   MATCHED   INJECTED   UPDATED   UPDATED_READY   CURRENT_REVISION      UPDATED_REVISION      AGE\nsample-pd   true        3         3          3         3               sample-pd-9465f4c84   sample-pd-9465f4c84   3m\n\n$ kubectl get pod\nNAME        READY   STATUS    RESTARTS      AGE\nfoo-2gnnl   2/2     Running   0             3m\nfoo-lftw8   2/2     Running   0             8s\nfoo-n57rr   2/2     Running   0             8s\n\n$ kubectl get pd sample-pd -o yaml | grep -A20 status\nstatus:\n  currentRevision: sample-pd-9465f4c84\n  details:\n  - affectedReplicas: 3\n    collaSet: foo\n    pods:\n    - name: foo-2gnnl\n      revision: sample-pd-9465f4c84\n    - name: foo-lftw8\n      revision: sample-pd-9465f4c84\n    - name: foo-n57rr\n      revision: sample-pd-9465f4c84\n  matchedPods: 3\n  injectedPods: 3\n  updatedPods: 3\n  updatedReadyPods: 3\n  updatedAvailablePods: 3\n  isEffective: true\n  currentRevision: sample-pd-9465f4c84\n  updatedRevision: sample-pd-9465f4c84\n")),(0,o.kt)("h3",{id:"rolling-update-v1---v2"},"Rolling update v1 -> v2"),(0,o.kt)("p",null,"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"sample-pd"),"'s sidecar container image and ",(0,o.kt)("inlineCode",{parentName:"p"},"updateStrategy"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl edit pd sample-pd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# poddecoration.yaml\n# Update sidecar-a\'s image with ubuntu:22.10\n# Edit updateStrategy to select instance-id in [0]\n...\nspec:\n  ...\n  updateStrategy:\n    rollingUpdate:\n      selector:\n        - key: collaset.kusionstack.io/instance-id\n          operator: In\n          values:\n          - "0"\n  template:\n    ...\n    containers:\n    - injectPolicy: AfterPrimaryContainer\n      name: sidecar-a\n      image: ubuntu:22.10\n      ...\n')),(0,o.kt)("p",null,"Pod ",(0,o.kt)("inlineCode",{parentName:"p"},"foo-2gnnl")," in-place upgrade sidecar container image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get pd\nNAME        EFFECTIVE   MATCHED   INJECTED   UPDATED   UPDATED_READY   CURRENT_REVISION      UPDATED_REVISION       AGE\nsample-pd   true        3         3          1         1               sample-pd-9465f4c84   sample-pd-8697d4bf8c   6min\n\n$ kubectl get pod\nNAME        READY   STATUS    RESTARTS       AGE\nfoo-2gnnl   2/2     Running   1 (12s ago)    6m\nfoo-lftw8   2/2     Running   0              3min\nfoo-n57rr   2/2     Running   0              3min\n\n$ kubectl get pod foo-2gnnl -o yaml | grep "image: ubuntu"\n    image: ubuntu:22.10\n\n$ kubectl get pd sample-pd -o yaml | grep -A20 status\nstatus:\n  details:\n  - affectedReplicas: 3\n    collaSet: foo\n    pods:\n    - name: foo-2gnnl\n      revision: sample-pd-8697d4bf8c\n    - name: foo-lftw8\n      revision: sample-pd-9465f4c84\n    - name: foo-n57rr\n      revision: sample-pd-9465f4c84\n  matchedPods: 3\n  injectedPods: 3\n  updatedPods: 1\n  updatedReadyPods: 1\n  updatedAvailablePods: 1\n  isEffective: true\n  currentRevision: sample-pd-9465f4c84\n  updatedRevision: sample-pd-8697d4bf8c\n')),(0,o.kt)("h1",{id:"features"},"Features"),(0,o.kt)("h2",{id:"injection"},"Injection"),(0,o.kt)("h3",{id:"metadata"},"Metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kusionstack.io/v1alpha1\nkind: PodDecoration\nspec:\n  template:\n    metadata:\n    - patchPolicy: MergePatchJson\n      annotations:\n        cafe.sofastack.io/decoration-version: \'[{"name":"sample-pd","version":"v2"}]\'\n    - patchPolicy: Overwrite\n      labels:\n        custom.io/sidecar-version: "v2"\n      annotations:\n        cafe.sofastack.io/decoration-name: sample-pd\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"patchPolicy")," is the injected policy, as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Retain"),": The original value of annotations and labels will be retained."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Overwrite"),": The value of annotations and labels corresponding to the existing key will be overwritten."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MergePatchJson"),": It only takes effect for annotation. If the key does not exist, the value will be written directly. Otherwise, the json value will be merged.")),(0,o.kt)("p",null,"For example\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Old pod metadata\nmetadata:\n  labels:\n    custom.io/sidecar-version: "v1"\n  annotations:\n    cafe.sofastack.io/decoration-version: \'[{"name":"old-pd","version":"v1"}]\'\n\n# After metadata injected\nmetadata:\n  labels:\n    custom.io/sidecar-version: "v2"\n  annotations:\n    cafe.sofastack.io/decoration-type: sample-pd\n    cafe.sofastack.io/decoration-version: \'[{"name":"old-pd","version":"v1"}, {"name":"sample-pd","version":"v2"}]\'\n')),(0,o.kt)("h3",{id:"primary-container"},"Primary Container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kusionstack.io/v1alpha1\nkind: PodDecoration\nspec:\n  template:\n    primaryContainers:\n    - targetPolicy: ByName\n      name: foo\n      image: foo:v2\n      env: \n      - name: APP_NAME\n        value: foo\n      volumeMounts:\n      - name: sample-volume\n        mountPath: /vol/sample\n    volumes:\n    - name: sample-volume\n      emptyDir: {}\n")),(0,o.kt)("p",null,"Injection into the primary containers only supports limited fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"volumeMounts"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"targetPolicy")," indicates which existed container these configuration should inject into, as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ByName"),": Only inject containers matching ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"All"),": Inject all primary containers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"First"),": Inject into first primary container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Last"),": Inject into last primary container.")),(0,o.kt)("h3",{id:"sidecar-container"},"Sidecar Container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    containers:\n    - injectPolicy: AfterPrimaryContainer  # Container injected policy, AfterPrimaryContainer or BeforePrimaryContainer\n      name: sidecar-a\n      image: ubuntu:22.04\n      ...\n")),(0,o.kt)("p",null,"Inject a new sidecar container. Optional, it can be placed in front or behind the primary container."),(0,o.kt)("h3",{id:"initcontainer"},"InitContainer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    initContainers:\n    - name: init\n      image: custom-init-image:v1\n      ...\n")),(0,o.kt)("h2",{id:"upgrade-strategy"},"Upgrade strategy"),(0,o.kt)("p",null,"Coming soon..."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9470],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>k});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=o,d=u["".concat(i,".").concat(k)]||u[k]||m[k]||r;return a?t.createElement(d,s(s({ref:n},c),{},{components:a})):t.createElement(d,s({ref:n},c))}));function k(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78406:(e,n,a)=>{a.r(n),a.d(n,{Highlight:()=>c,assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=a(87462),o=(a(67294),a(3905));const r={sidebar_position:4},s="Try a Sample",l={unversionedId:"ctrlmesh/started/try",id:"ctrlmesh/started/try",title:"Try a Sample",description:"This guide lets you quickly evaluate KusionStack Controller Mesh.",source:"@site/docs/ctrlmesh/started/try.md",sourceDirName:"ctrlmesh/started",slug:"/ctrlmesh/started/try",permalink:"/docs/next/ctrlmesh/started/try",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/ctrlmesh/started/try.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1706096606,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ctrlmesh",previous:{title:"Installation",permalink:"/docs/next/ctrlmesh/started/install"},next:{title:"FAQ",permalink:"/docs/next/ctrlmesh/faq/"}},i={},p=[{value:"Install Controller Mesh Manager",id:"install-controller-mesh-manager",level:2},{value:"Try with sample-operator",id:"try-with-sample-operator",level:2},{value:"Get and deploy sample-operator v0",id:"get-and-deploy-sample-operator-v0",level:3},{value:"Play with ShardingConfig",id:"play-with-shardingconfig",level:3},{value:"Try with Operating",id:"try-with-operating",level:2}],c=e=>{let{children:n,color:a}=e;return(0,o.kt)("span",{style:{backgroundColor:a,borderRadius:"5px",color:"#fff",padding:"0.1rem"}},n)},m={toc:p,Highlight:c};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"try-a-sample"},"Try a Sample"),(0,o.kt)("p",null,"This guide lets you quickly evaluate KusionStack Controller Mesh. "),(0,o.kt)("h2",{id:"install-controller-mesh-manager"},"Install Controller Mesh Manager"),(0,o.kt)("p",null,"Controller Mesh requires ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install with helm")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add KusionStack charts repository if you haven't do this.\n$ helm repo add kusionstack https://kusionstack.github.io/charts\n\n# To update the kusionstack repo.\n$ helm repo update kusionstack\n\n# Install the latest version.\n$ helm install ctrlmesh kusionstack/ctrlmesh\n\n# Wait manager ready\n$ kubectl -n ctrlmesh get po\nNAME                        READY   STATUS    RESTARTS   AGE\nctrlmesh-57d6b4df57-mdslc   1/1     Running   0          40s\nctrlmesh-57d6b4df57-mtv2s   1/1     Running   0          40s\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/ctrlmesh/started/install"},"Install manager with more options")),(0,o.kt)("h2",{id:"try-with-sample-operator"},"Try with sample-operator"),(0,o.kt)("p",null,"Here is an example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," enabling sharding."),(0,o.kt)("h3",{id:"get-and-deploy-sample-operator-v0"},"Get and deploy sample-operator v0"),(0,o.kt)("p",null,"\ud83d\udc49 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/controller-mesh/tree/sample-operator"},"sample-operator repo"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone and checkout branch sample-operator.\n$ git clone -b sample-operator https://github.com/KusionStack/controller-mesh.git\n$ cd sample\n\n# Make sure you have kind or test cluster, and kubectl is available.\n\n# Deploy default sample-operator v0.\n$ IMAGE_TAG=v0.1.0 make deploy\n\nnamespace/kusionstack-sample created\nserviceaccount/kusionstack-controller-manager created\nrole.rbac.authorization.k8s.io/kusionstack-leader-election-role created\nclusterrole.rbac.authorization.k8s.io/kusionstack-manager-role created\nrolebinding.rbac.authorization.k8s.io/kusionstack-leader-election-rolebinding created\nclusterrolebinding.rbac.authorization.k8s.io/kusionstack-sample-manager-rolebinding created\ndeployment.apps/kusionstack-sample-operator-v0 created\n\n# kusionstack-sample-operator-v0 is created.\n$ kubectl get deploy -n kusionstack-sample     \nNAME                             READY   UP-TO-DATE   AVAILABLE   AGE\nkusionstack-sample-operator-v0   2/2     2            2           14s\n\n$ kubectl get po -n kusionstack-sample  \nNAME                                              READY   STATUS    RESTARTS   AGE\nkusionstack-sample-operator-v0-66f7595c7b-n4c47   1/1     Running   0          50s\nkusionstack-sample-operator-v0-66f7595c7b-wxwtv   1/1     Running   0          50s\n\n# sample-operator uses leader-election. Only one leader pod reconciling.\n$ kubectl -n kusionstack-sample get lease \nNAME                     HOLDER                                                                                 AGE\nsample-operator-leader   kusionstack-sample-operator-v0-66f7595c7b-wxwtv_c0ed684d-f332-47f6-890c-dd7e489486f2   53\n")),(0,o.kt)("h3",{id:"play-with-shardingconfig"},"Play with ShardingConfig"),(0,o.kt)("p",null,"By configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"ShardingConfig")," appropriately, you can achieve canary and sharding deploy."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Isolate canary namespaces")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Create some test namespaces([foo-01, foo-02, ..., foo-31]).\n$ chmod +x ./scripts/create-ns-foo.sh && ./scripts/create-ns-foo.sh\n\n# All namespaces are controlled by sample-operator v0.\n$ kubectl get ns -l sample.kusionstack.io/control-by=kusionstack-sample-operator-v0-66f7595c7b-wxwtv                                               \nNAME                 STATUS   AGE\ndefault              Active   12d\nfoo-01               Active   78s\nfoo-02               Active   78s\nfoo-03               Active   78s\n...                  ...      ...\nfoo-32               Active   78s\n\n# There are more details in leader pod log.\n$ kubectl logs kusionstack-sample-operator-v0-66f7595c7b-wxwtv -n kusionstack-sample | grep "hold namespaces"\nI0110 09:32:50.950535   1 runner.go:101] hold namespaces [ctrlmesh default foo-01 foo-02 foo-03 foo-04 foo-05 foo-06 foo-07 foo-08 foo-09 foo-10 foo-11 foo-12 foo-13 foo-14 foo-15 foo-16 foo-17 foo-18 foo-19 foo-20 foo-21 foo-22 foo-23 foo-24 foo-25 foo-26 foo-27 foo-28 foo-29 foo-30 foo-31 foo-32 kusionstack-sample kusionstack-system local-path-storage]\n\n# Apply sample ShardingConfigs\n./bin/kustomize build config/shardingconfig/canary | kubectl apply -f -\nshardingconfig.ctrlmesh.kusionstack.io/kusionstack-sample-operator-0-canary created\nshardingconfig.ctrlmesh.kusionstack.io/kusionstack-sample-operator-1-normal created\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/controller-mesh/blob/sample-operator/sample/config/shardingconfig/canary/shardingconfig-canary.yaml"},"kusionstack-sample-operator-0-canary")," has restricted the scope of namespaces ",(0,o.kt)(c,{color:"#A3B1A8",mdxType:"Highlight"},"[foo-01, foo-02, foo-03]")," reconciled by version ",(0,o.kt)("inlineCode",{parentName:"p"},"v1"),".\nAnd ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/controller-mesh/blob/sample-operator/sample/config/shardingconfig/canary/shardingconfig-normal.yaml"},"kusionstack-sample-operator-1-normal")," decided that other namespaces will be reconciled by version ",(0,o.kt)("inlineCode",{parentName:"p"},"v0"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Patch labels to pod template to inject sidecar and ShardingConfig\n$ kubectl -n kusionstack-sample patch deployment kusionstack-sample-operator-v0 --type=strategic --patch \\\n  \'spec:\n    template:\n      metadata:\n        labels:\n          ctrlmesh.kusionstack.io/enable-proxy: "true"\n          ctrlmesh.kusionstack.io/watching: "true"\'\n\n# Mesh proxy container was injected\n$ kubectl get po -n kusionstack-sample\nNAME                                              READY   STATUS    RESTARTS   AGE\nkusionstack-sample-operator-v0-6944bb4bf5-gclqq   2/2     Running   0          30s\nkusionstack-sample-operator-v0-6944bb4bf5-lfwdb   2/2     Running   0          41s\n\n# Find current leader\n# sharding lease format: ${leader-election-name}---${shardingconfig-name}\n$ kubectl get lease -n kusionstack-sample\nNAME                                                            HOLDER                                                                                 AGE\nsample-operator-leader---kusionstack-sample-operator-1-normal   kusionstack-sample-operator-v0-6944bb4bf5-lfwdb_497a7962-a5f1-465e-b8ef-6e35660c63f4   32s\n\n# Namespaces [foo-1, foo-2, foo-3] are no longer under v0 control.\n$ kubectl logs kusionstack-sample-operator-v0-6944bb4bf5-lfwdb -c manager | grep "namespaces"\n ... hold namespaces [default foo-04 foo-05 ... foo-32]\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Deploy canary sample-operator v1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Apply sample operator v1 which deployment already labeled\n$ ./bin/kustomize build config/manager-v1 | kubectl apply -f - \ndeployment.apps/kusionstack-sample-operator-v1 created\n\n# Two pods created\n$ kubectl get po -n kusionstack-sample\nNAME                                              READY   STATUS              RESTARTS   AGE\nkusionstack-sample-operator-v0-6944bb4bf5-gclqq   2/2     Running             0          4m\nkusionstack-sample-operator-v0-6944bb4bf5-lfwdb   2/2     Running             0          4m\nkusionstack-sample-operator-v1-7b6bbb49c8-kbgww   0/2     ContainerCreating   0          3s\nkusionstack-sample-operator-v1-7b6bbb49c8-qbzjj   0/2     ContainerCreating   0          3s\n\n# The canary shard uses a separate lease\n$ kubectl get lease -n kusionstack-sample \nNAME                                                            HOLDER                                                                                 AGE\nsample-operator-leader---kusionstack-sample-operator-0-canary   kusionstack-sample-operator-v1-7b6bbb49c8-qbzjj_64272983-c59a-4574-933d-7d5fea7a1e35   15s\nsample-operator-leader---kusionstack-sample-operator-1-normal   kusionstack-sample-operator-v0-6944bb4bf5-lfwdb_497a7962-a5f1-465e-b8ef-6e35660c63f4   4m\n\n# Only foo-01, foo-02, foo-03 controlled by v1\n$ kubectl get ns -l sample.kusionstack.io/control-by=v1 -n kusionstack-sample\nNAME     STATUS   AGE\nfoo-01   Active   4m\nfoo-02   Active   4m\nfoo-03   Active   4m\n\n$ kubectl logs kusionstack-sample-operator-v1-7b6bbb49c8-qbzjj -c manager | grep namespaces\n ... hold namespaces [foo-01 foo-02 foo-03]\n")),(0,o.kt)("p",null,"Similarly, if you want to have more shards, you need to do the following steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Extract a portion of the namespace from the existing ShardingConfigs."),(0,o.kt)("li",{parentName:"ol"},"Configure a new ShardingConfig and apply it."),(0,o.kt)("li",{parentName:"ol"},"Recreate or restart the existing pods to make the new ShardingConfig take effect."),(0,o.kt)("li",{parentName:"ol"},"Scale out the Pods for the new ShardingConfig.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Beta"),": ",(0,o.kt)("em",{parentName:"p"},"We try to support automatic sharding strategy. With automatic sharding configuration, there is no need to manually configure each shard's configuration. It manages multiple sub-shardingconfigs automatically through a root configuration."))),(0,o.kt)("h2",{id:"try-with-operating"},"Try with Operating"),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"StatefulSet")," case, you can use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://kusionstack.io/docs/operating/introduction/"},"Operating v0.1.1"))," available here."),(0,o.kt)("p",null,"Deploy the sample operator with ShardingConfig:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo update\n$ helm install sample-operating kusionstack/operating \\\n  --version v0.2.0 \\\n  --set sharding.enabled=true \\\n  --set sharding.isDemo=true\n\n$ kubectl -n kusionstack-system get sts\nNAME                    READY   AGE\nkusionstack-operating   5/5     1m45s\n\n# The proxy container will be automatically injected into the pod\n$ kubectl -n kusionstack-system get po\nNAME                      READY   STATUS              RESTARTS   AGE\nkusionstack-operating-0   2/2     Running             0          42s\nkusionstack-operating-1   2/2     Running             0          32s\nkusionstack-operating-2   2/2     Running             0          21s\nkusionstack-operating-3   2/2     Running             0          12s\nkusionstack-operating-4   0/2     ContainerCreating   0          1s\n\n# Now we have three shards with three lease.\n#  operating-0-canary -> [kusionstack-operating-0]\n#  operating-1-normal -> [kusionstack-operating-1, kusionstack-operating-2]\n#  operating-2-normal -> [kusionstack-operating-3, kusionstack-operating-4]\n$ kubectl -n kusionstack-system get lease\nNAME                                                  HOLDER                                                         AGE\nkusionstack-controller-manager---operating-0-canary   kusionstack-operating-0_81b5bbae-be63-45ed-a939-e67e0c3d6326   12m\nkusionstack-controller-manager---operating-1-normal   kusionstack-operating-1_e4bbad49-e6ec-42fa-8ffd-caae82156a3e   12m\nkusionstack-controller-manager---operating-2-normal   kusionstack-operating-3_94f7f81a-f9e6-47d6-b72b-e16da479e9be   12m\n")),(0,o.kt)("p",null," Show the sample ShardingConfig:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm template sample-operating kusionstack/operating \\\n  --version v0.1.1 \\\n  --set sharding.enabled=true \\\n  --set sharding.isDemo=true \\\n  --show-only templates/shardingconfig.yaml\n")),(0,o.kt)("p",null,"Here is a sample ",(0,o.kt)("inlineCode",{parentName:"p"},"ShardingConfig"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="operating/templates/shardingconfig.yaml"',title:'"operating/templates/shardingconfig.yaml"'},"apiVersion: ctrlmesh.kusionstack.io/v1alpha1\nkind: ShardingConfig\nmetadata:\n  name: sharding-root\n  namespace: kusionstack-system\nspec:\n  # Auto sharding config\n  root:\n    prefix: operating\n    targetStatefulSet: kusionstack-operating\n    canary:\n      replicas: 1\n      inNamespaces:\n      - kusionstack-system\n    auto:\n      everyShardReplicas: 2\n      shardingSize: 2\n    resourceSelector:\n    - relateResources:\n      - apiGroups:\n        - '*'\n        resources:\n        - configmaps\n        - pods\n        - endpoints\n        - services\n        - replicasets\n      - apiGroups:\n        - apps.kusionstack.io\n        resources:\n        - '*'\n  controller:\n    leaderElectionName: kusionstack-controller-manager\n")),(0,o.kt)("p",null,"You can configure the ShardingConfig according to your requirements."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In order to enable the ShardingConfig, you also need to add the following label to the pod template.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ctrlmesh.kusionstack.io/watching: 'true'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ctrlmesh.kusionstack.io/enable-proxy: 'true'"),(0,o.kt)("br",{parentName:"p"}),"\n","We plan to deprecate it in future versions.")))}u.isMDXComponent=!0}}]);
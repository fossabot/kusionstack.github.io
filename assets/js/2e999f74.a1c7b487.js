"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9470],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return t?r.createElement(h,s(s({ref:n},m),{},{components:t})):r.createElement(h,s({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:4},s="Try a Demo",l={unversionedId:"ctrlmesh/started/try",id:"ctrlmesh/started/try",title:"Try a Demo",description:"This guide lets you quickly evaluate KusionStack Controller Mesh.",source:"@site/docs/ctrlmesh/started/try.md",sourceDirName:"ctrlmesh/started",slug:"/ctrlmesh/started/try",permalink:"/docs/ctrlmesh/started/try",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/ctrlmesh/started/try.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1697449403,formattedLastUpdatedAt:"Oct 16, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ctrlmesh",previous:{title:"Installation",permalink:"/docs/ctrlmesh/started/install"},next:{title:"FAQ",permalink:"/docs/ctrlmesh/faq/"}},i={},c=[{value:"Install Controller Mesh Manager",id:"install-controller-mesh-manager",level:2},{value:"Enable Custom Operator Sharding",id:"enable-custom-operator-sharding",level:2}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"try-a-demo"},"Try a Demo"),(0,a.kt)("p",null,"This guide lets you quickly evaluate KusionStack Controller Mesh. "),(0,a.kt)("h2",{id:"install-controller-mesh-manager"},"Install Controller Mesh Manager"),(0,a.kt)("p",null,"Controller Mesh requires ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install with helm")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add KusionStack charts repository if you haven't do this.\n$ helm repo add kusionstack https://kusionstack.io/charts\n\n# To update the kusionstack repo.\n$ helm repo update kusionstack\n\n# Install the latest version.\n$ helm install ctrlmesh kusionstack/ctrlmesh --version v0.1.0\n\n# Wait manager ready\n$ kubectl -n ctrlmesh get po\nNAME                        READY   STATUS    RESTARTS   AGE\nctrlmesh-57d6b4df57-mdslc   1/1     Running   0          40s\nctrlmesh-57d6b4df57-mtv2s   1/1     Running   0          40s\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/ctrlmesh/started/install"},"Install manager with more options")),(0,a.kt)("h2",{id:"enable-custom-operator-sharding"},"Enable Custom Operator Sharding"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Deploy the sample operator application:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install sample kusionstack/sample-operator --version v0.1.2\n\n$ kubeconfig kubectl -n ctrlmesh get sts\nNAME            READY   AGE\ndemo-operator   2/2     10s\n\n$ kubectl -n ctrlmesh get po\nNAME                        READY   STATUS    RESTARTS   AGE\nctrlmesh-57d6b4df57-mdslc   1/1     Running   0          1m\nctrlmesh-57d6b4df57-mtv2s   1/1     Running   0          1m\ndemo-operator-0             1/1     Running   0          17s\ndemo-operator-1             1/1     Running   0          16s\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Config and apply shardingconfig:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Show demo shardingconfig\n$ helm template sample kusionstack/sample-operator --version v0.1.1 --set sharding.enable=true --show-only templates/shardingconfig.yaml > shardingconfig.yaml\n$ cat shardingconfig.yaml\n")),(0,a.kt)("p",null,"Here is a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"ShardingConfig"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# Source: sample-operator/templates/shardingconfig.yaml\napiVersion: ctrlmesh.kusionstack.io/v1alpha1\nkind: ShardingConfig\nmetadata:\n  name: sharding-root\n  namespace: ctrlmesh\nspec:\n  # auto sharding config\n  root:\n    prefix: sample-demo\n    targetStatefulSet: sample-operator\n    canary:\n      replicas: 1\n      inNamespaces:\n      - demo-0a\n    auto:\n      everyShardReplicas: 2\n      shardingSize: 2\n    resourceSelector:\n    - relateResources:\n      - apiGroups:\n        - '*'\n        resources:\n        - configmaps\n      selector:\n        matchLabels:\n          control-by: demo\n  controller:\n    leaderElectionName: demo-manager\n")),(0,a.kt)("p",null,"You can configure the ShardingConfig according to your requirements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Apply shardingconfig\n$ kubectl apply shardingconfig.yaml\n\n# Waiting for pods to be recreate and ready.\n# The mesh-proxy container will be automatically injected into the pod.\n$ kubectl -n ctrlmesh get po\nNAME                        READY   STATUS    RESTARTS   AGE\nctrlmesh-57d6b4df57-mdslc   1/1     Running   0          6m\nctrlmesh-57d6b4df57-mtv2s   1/1     Running   0          6m\nsample-operator-0           2/2     Running   0          22s\nsample-operator-1           2/2     Running   0          17s\nsample-operator-2           2/2     Running   0          13s\nsample-operator-3           2/2     Running   0          9s\nsample-operator-4           2/2     Running   0          5s\n\n# Now we have three shards with three lease.\n#  sample-demo-0-canary -> [sample-operator-0]\n#  sample-demo-1-normal -> [sample-operator-1, sample-operator-2]\n#  sample-demo-2-normal -> [sample-operator-3, sample-operator-4]\n$ kubectl -n ctrlmesh get lease\nNAME                                  HOLDER                                                           AGE\nctrlmesh-manager                      ctrlmesh-57d6b4df57-mdslc_a804c1cc-4bca-4acc-a0c3-54762b459cb3   6m\ndemo-manager---sample-demo-0-canary   sample-operator-0_55a0909a-a72b-469b-86c6-cbabccee1269           85s\ndemo-manager---sample-demo-1-normal   sample-operator-1_45efc2fa-4928-4073-81c4-9b0892a7398d           81s\ndemo-manager---sample-demo-2-normal   sample-operator-3_55914401-a735-445b-84d2-17120dca0e05           73s\n")))}p.isMDXComponent=!0}}]);
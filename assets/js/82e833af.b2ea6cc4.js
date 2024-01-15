"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9310],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(k,s(s({ref:n},c),{},{components:t})):a.createElement(k,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:4},s="Try a Sample",i={unversionedId:"ctrlmesh/started/try",id:"version-v0.9/ctrlmesh/started/try",title:"Try a Sample",description:"This guide lets you quickly evaluate KusionStack Controller Mesh.",source:"@site/versioned_docs/version-v0.9/ctrlmesh/started/try.md",sourceDirName:"ctrlmesh/started",slug:"/ctrlmesh/started/try",permalink:"/docs/ctrlmesh/started/try",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/ctrlmesh/started/try.md",tags:[],version:"v0.9",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1705307469,formattedLastUpdatedAt:"Jan 15, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ctrlmesh",previous:{title:"Installation",permalink:"/docs/ctrlmesh/started/install"},next:{title:"FAQ",permalink:"/docs/ctrlmesh/faq/"}},l={},p=[{value:"Install Controller Mesh Manager",id:"install-controller-mesh-manager",level:2},{value:"Enable Custom Operator Sharding",id:"enable-custom-operator-sharding",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"try-a-sample"},"Try a Sample"),(0,r.kt)("p",null,"This guide lets you quickly evaluate KusionStack Controller Mesh. "),(0,r.kt)("h2",{id:"install-controller-mesh-manager"},"Install Controller Mesh Manager"),(0,r.kt)("p",null,"Controller Mesh requires ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install with helm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add KusionStack charts repository if you haven't do this.\n$ helm repo add kusionstack https://kusionstack.github.io/charts\n\n# To update the kusionstack repo.\n$ helm repo update kusionstack\n\n# Install the latest version.\n$ helm install ctrlmesh kusionstack/ctrlmesh\n\n# Wait manager ready\n$ kubectl -n ctrlmesh get po\nNAME                        READY   STATUS    RESTARTS   AGE\nctrlmesh-57d6b4df57-mdslc   1/1     Running   0          40s\nctrlmesh-57d6b4df57-mtv2s   1/1     Running   0          40s\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/ctrlmesh/started/install"},"Install manager with more options")),(0,r.kt)("h2",{id:"enable-custom-operator-sharding"},"Enable Custom Operator Sharding"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://kusionstack.io/docs/operating/introduction/"},"Operating v0.1.1"))," available here."),(0,r.kt)("p",null,"Deploy the sample operator with ShardingConfig:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo update\n$ helm install sample-operating kusionstack/operating \\\n  --version v0.2.0 \\\n  --set sharding.enabled=true \\\n  --set sharding.isDemo=true\n\n$ kubectl -n kusionstack-system get sts\nNAME                    READY   AGE\nkusionstack-operating   5/5     1m45s\n\n# The proxy container will be automatically injected into the pod\n$ kubectl -n kusionstack-system get po\nNAME                      READY   STATUS              RESTARTS   AGE\nkusionstack-operating-0   2/2     Running             0          42s\nkusionstack-operating-1   2/2     Running             0          32s\nkusionstack-operating-2   2/2     Running             0          21s\nkusionstack-operating-3   2/2     Running             0          12s\nkusionstack-operating-4   0/2     ContainerCreating   0          1s\n\n# Now we have three shards with three lease.\n#  operating-0-canary -> [kusionstack-operating-0]\n#  operating-1-normal -> [kusionstack-operating-1, kusionstack-operating-2]\n#  operating-2-normal -> [kusionstack-operating-3, kusionstack-operating-4]\n$ kubectl -n kusionstack-system get lease\nNAME                                                  HOLDER                                                         AGE\nkusionstack-controller-manager---operating-0-canary   kusionstack-operating-0_81b5bbae-be63-45ed-a939-e67e0c3d6326   12m\nkusionstack-controller-manager---operating-1-normal   kusionstack-operating-1_e4bbad49-e6ec-42fa-8ffd-caae82156a3e   12m\nkusionstack-controller-manager---operating-2-normal   kusionstack-operating-3_94f7f81a-f9e6-47d6-b72b-e16da479e9be   12m\n")),(0,r.kt)("p",null," Show the sample ShardingConfig:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm template sample-operating kusionstack/operating \\\n  --version v0.1.1 \\\n  --set sharding.enabled=true \\\n  --set sharding.isDemo=true \\\n  --show-only templates/shardingconfig.yaml\n")),(0,r.kt)("p",null,"Here is a sample ",(0,r.kt)("inlineCode",{parentName:"p"},"ShardingConfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# Source: operating/templates/shardingconfig.yaml\napiVersion: ctrlmesh.kusionstack.io/v1alpha1\nkind: ShardingConfig\nmetadata:\n  name: sharding-root\n  namespace: kusionstack-system\nspec:\n  # Auto sharding config\n  root:\n    prefix: operating\n    targetStatefulSet: kusionstack-operating\n    canary:\n      replicas: 1\n      inNamespaces:\n      - kusionstack-system\n    auto:\n      everyShardReplicas: 2\n      shardingSize: 2\n    resourceSelector:\n    - relateResources:\n      - apiGroups:\n        - '*'\n        resources:\n        - configmaps\n        - pods\n        - endpoints\n        - services\n        - replicasets\n      - apiGroups:\n        - apps.kusionstack.io\n        resources:\n        - '*'\n  controller:\n    leaderElectionName: kusionstack-controller-manager\n")),(0,r.kt)("p",null,"You can configure the ShardingConfig according to your requirements."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In order to enable the ShardingConfig, you also need to add the following label to the pod template.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ctrlmesh.kusionstack.io/enable-proxy: 'true'"),(0,r.kt)("br",{parentName:"p"}),"\n","We plan to deprecate it in future versions.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Supported OS/ARCH",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"ControllerMesh")," v0.1.0: ",(0,r.kt)("inlineCode",{parentName:"p"},"linux/amd64"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"linux/arm64"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Operating")," v0.1.1: ",(0,r.kt)("inlineCode",{parentName:"p"},"linux/amd64"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"linux/arm64"),".  ")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},l="Concepts",c={unversionedId:"ctrlmesh/concepts/concepts",id:"ctrlmesh/concepts/concepts",title:"Concepts",description:"Generally, a ctrlmesh-proxy container will be injected into each operator Pod that has configured in ShardingConfigs.",source:"@site/docs/ctrlmesh/concepts/concepts.md",sourceDirName:"ctrlmesh/concepts",slug:"/ctrlmesh/concepts/",permalink:"/docs/next/ctrlmesh/concepts/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/ctrlmesh/concepts/concepts.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1711714561,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{},sidebar:"ctrlmesh",previous:{title:"Controller Mesh",permalink:"/docs/next/ctrlmesh/intro/"},next:{title:"Installation",permalink:"/docs/next/ctrlmesh/started/install"}},s={},i=[],p={toc:i};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"Generally, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrlmesh-proxy")," container will be injected into each operator Pod that has configured in ShardingConfigs.\nThis proxy container will intercept and handle the connection by between API/Oth Server and controllers/webhooks in the Pod."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"550",src:n(3400).Z})),(0,o.kt)("p",null,"ApiServer proxy method:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"iptables nat"),": "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"fake kubeconfig"),": ")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrlmesh-manager")," dispatches rules to the proxies, so that they can route requests according to the rules."),(0,o.kt)("p",null,"A core CRD of ControllerMesh is ",(0,o.kt)("inlineCode",{parentName:"p"},"ShardingConfig"),". It contains all rules for user's controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: ctrlmesh.kusionstack.io/v1alpha1\nkind: ShardingConfig\nmetadata:\n  name: sharding-demo\n  namespace: operator-demo\nspec:\n  controller:\n    leaderElectionName: operator-leader\n  webhook:\n    certDir: /tmp/webhook-certs\n    port: 9443\n  limits:\n  - relateResources:\n    - apiGroups:\n      - '*'\n      resources:\n      - pods\n      - services\n    selector:\n      matchExpressions:\n      - key: ctrlmesh.kusionstack.io/namespace\n        operator: In\n        values:\n        - ns-a\n        - ns-b\n      matchLabels:\n        app: foo\n  selector:\n    matchExpressions:\n    - key: statefulset.kubernetes.io/pod-name\n      operator: In\n      values:\n      - operator-demo-0\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"selector: for all pods under a shard. It can be a subset of pods under a StatefulSet."),(0,o.kt)("li",{parentName:"ul"},"controller: configuration for controller, including leader election name"),(0,o.kt)("li",{parentName:"ul"},"webhook: configuration for webhook, including certDir and port of this webhook"),(0,o.kt)("li",{parentName:"ul"},"limits: shard isolation is achieved through a set of ",(0,o.kt)("inlineCode",{parentName:"li"},"ObjectSelector"),".")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"manager")," is first launched, shard labels will be added to all configured resources."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ctrlmesh.kusionstack.io/sharding-hash"),": the hash value calculated based on the namespace ranges from 0 to 31."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ctrlmesh.kusionstack.io/namespace"),": the namespace referring to this resource."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ctrlmesh.kusionstack.io/control"),": under ctrlmesh-manager control.")),(0,o.kt)("p",null,"In this repo, we only support ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectSelector")," type of flow control,\nwhich means the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrlmesh-proxy "),"will proxy http/s requests to the ApiServer,\nand inject a ",(0,o.kt)("inlineCode",{parentName:"p"},"LabelSelector")," into the request param for the requested resource type."),(0,o.kt)("p",null,"Router:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"600",src:n(85321).Z})))}u.isMDXComponent=!0},3400:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fake-configmap-532e288cad1389abce66dcd4b67cd817.png"},85321:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mesh-proxy-4103e0c9a907b1df91258341cd841c52.png"}}]);
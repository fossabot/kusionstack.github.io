"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9436],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={id:"concept",sidebar_label:"\u57fa\u672c\u6982\u5ff5"},o="Kusion \u6a21\u578b\u5e93\u57fa\u672c\u6982\u5ff5",l={unversionedId:"reference/model/concept",id:"reference/model/concept",title:"Kusion \u6a21\u578b\u5e93\u57fa\u672c\u6982\u5ff5",description:"1. Kusion \u6a21\u578b\u5e93 (Kusion Model)",source:"@site/docs/reference/model/2-concept.md",sourceDirName:"reference/model",slug:"/reference/model/concept",permalink:"/zh-CN/docs/reference/model/concept",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/2-concept.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663316466,formattedLastUpdatedAt:"2022/9/16",sidebarPosition:2,frontMatter:{id:"concept",sidebar_label:"\u57fa\u672c\u6982\u5ff5"},sidebar:"reference",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/reference/model/overview"},next:{title:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u6a21\u578b(Server)",permalink:"/zh-CN/docs/reference/model/core/server"}},s={},c=[{value:"1. Kusion \u6a21\u578b\u5e93 (Kusion Model)",id:"1-kusion-\u6a21\u578b\u5e93-kusion-model",level:2},{value:"2. \u524d\u7aef\u6a21\u578b",id:"2-\u524d\u7aef\u6a21\u578b",level:2},{value:"3. \u540e\u7aef\u6a21\u578b",id:"3-\u540e\u7aef\u6a21\u578b",level:2},{value:"4. \u5e95\u5c42\u6a21\u578b",id:"4-\u5e95\u5c42\u6a21\u578b",level:2},{value:"5. Mixin",id:"5-mixin",level:2},{value:"6. FAQ",id:"6-faq",level:2},{value:"\u2753 \u4e3a\u4ec0\u4e48\u8981\u533a\u5206\u524d\u7aef\u6a21\u578b\u548c\u540e\u7aef\u6a21\u578b\uff1f",id:"-\u4e3a\u4ec0\u4e48\u8981\u533a\u5206\u524d\u7aef\u6a21\u578b\u548c\u540e\u7aef\u6a21\u578b",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kusion-\u6a21\u578b\u5e93\u57fa\u672c\u6982\u5ff5"},"Kusion \u6a21\u578b\u5e93\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("h2",{id:"1-kusion-\u6a21\u578b\u5e93-kusion-model"},"1. Kusion \u6a21\u578b\u5e93 (Kusion Model)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kusion \u6a21\u578b\u5e93"),"\u4e5f\u53eb\u505a ",(0,a.kt)("inlineCode",{parentName:"p"},"Kusion Model"),"\uff0c\u662f KusionStack \u4e2d\u9884\u7f6e\u7684\u3001\u4f7f\u7528 KCL \u63cf\u8ff0\u7684\u914d\u7f6e\u6a21\u578b\uff0c\u5b83\u63d0\u4f9b\u7ed9\u7528\u6237\u5f00\u7bb1\u5373\u7528\u3001\u9ad8\u5ea6\u62bd\u8c61\u7684\u914d\u7f6e\u754c\u9762\uff0c\u6a21\u578b\u5e93\u6700\u521d\u6734\u7d20\u7684\u51fa\u53d1\u70b9\u5c31\u662f\u6539\u5584 YAML \u7528\u6237\u7684\u6548\u7387\u548c\u4f53\u9a8c\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u5c06\u4ee3\u7801\u66f4\u7e41\u6742\u7684\u6a21\u578b\u62bd\u8c61\u5c01\u88c5\u5230\u7edf\u4e00\u7684\u6a21\u578b\u4e2d\uff0c\u4ece\u800c\u7b80\u5316\u7528\u6237\u4fa7\u914d\u7f6e\u4ee3\u7801\u7684\u7f16\u5199\u3002"),(0,a.kt)("p",null,"\u26a1\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Kusion \u6a21\u578b\u5e93"),"\u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6838\u5fc3\u6a21\u578b\u5e93"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u524d\u7aef\u6a21\u578b"),"\uff1a\u524d\u7aef\u6a21\u578b\u5373\u300c\u7528\u6237\u754c\u9762\u300d\uff0c\u5305\u542b\u5e73\u53f0\u4fa7\u66b4\u9732\u7ed9\u7528\u6237\u7684\u6240\u6709\u53ef\u914d\u7f6e\u5c5e\u6027\uff0c\u5176\u4e2d\u7701\u7565\u4e86\u4e00\u4e9b\u91cd\u590d\u7684\u3001\u53ef\u63a8\u5bfc\u7684\u914d\u7f6e\uff0c\u62bd\u8c61\u51fa\u5fc5\u8981\u5c5e\u6027\u66b4\u9732\u7ed9\u7528\u6237\uff0c\u5177\u6709\u7528\u6237\u53cb\u597d\u7684\u7279\u6027\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"server.k"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u540e\u7aef\u6a21\u578b"),"\uff1a\u540e\u7aef\u6a21\u578b\u662f\u300c\u6a21\u578b\u5b9e\u73b0\u300d\uff0c\u662f\u8ba9\u524d\u7aef\u6a21\u578b\u5c5e\u6027\u751f\u6548\u7684\u6a21\u578b\uff0c\u4e3b\u8981\u5305\u542b\u524d\u7aef\u6a21\u578b\u5b9e\u4f8b\u7684\u6e32\u67d3\u903b\u8f91\uff0c\u540e\u7aef\u6a21\u578b\u4e2d\u53ef\u501f\u52a9 KCL \u7f16\u5199\u6821\u9a8c\u3001\u903b\u8f91\u5224\u65ad\u3001\u4ee3\u7801\u7247\u6bb5\u590d\u7528\u7b49\u4ee3\u7801\uff0c\u63d0\u9ad8\u914d\u7f6e\u4ee3\u7801\u590d\u7528\u6027\u548c\u5065\u58ee\u6027\uff0c\u5bf9\u7528\u6237\u4e0d\u611f\u77e5\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"server_backend.k")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5e95\u5c42\u6a21\u578b"),"\uff1a\u662f\u4e0d\u5305\u542b\u4efb\u4f55\u5b9e\u73b0\u903b\u8f91\u548c\u62bd\u8c61\u7684\u6a21\u578b\uff0c\u5f80\u5f80\u7531\u5de5\u5177\u8f6c\u6362\u751f\u6210\uff0c\u65e0\u9700\u4fee\u6539\uff0c\u548c\u771f\u6b63\u751f\u6548\u7684 YAML \u5c5e\u6027\u4e00\u4e00\u5bf9\u5e94\uff0c\u5e95\u5c42\u6a21\u578b\u9700\u8981\u7ecf\u8fc7\u8fdb\u4e00\u6b65\u62bd\u8c61\uff0c\u4e00\u822c\u4e0d\u76f4\u63a5\u88ab\u7528\u6237\u4f7f\u7528\u3002\u6bd4\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"kusion_kubernetes")," \u662f Kubernetes \u573a\u666f\u7684\u5e95\u5c42\u6a21\u578b\u5e93\uff1b")),(0,a.kt)("h2",{id:"2-\u524d\u7aef\u6a21\u578b"},"2. \u524d\u7aef\u6a21\u578b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u524d\u7aef\u6a21\u578b")," \u5373\u300c\u7528\u6237\u754c\u9762\u300d\uff0c\u5305\u542b\u5e73\u53f0\u4fa7\u66b4\u9732\u7ed9\u7528\u6237\u7684\u6240\u6709\u53ef\u914d\u7f6e\u5c5e\u6027\uff0c\u5176\u4e2d\u7701\u7565\u4e86\u4e00\u4e9b\u91cd\u590d\u7684\u3001\u53ef\u63a8\u5bfc\u7684\u914d\u7f6e\uff0c\u62bd\u8c61\u51fa\u5fc5\u8981\u5c5e\u6027\u66b4\u9732\u7ed9\u7528\u6237\uff0c\u5177\u6709\u7528\u6237\u53cb\u597d\u7684\u7279\u6027\u3002\u7528\u6237\u53ea\u9700\u8981\u50cf\u5b9e\u4f8b\u5316\u4e00\u4e2a\u7c7b\uff08Class\uff09\u4e00\u6837\uff0c\u4f20\u5165\u5fc5\u8981\u53c2\u6570\u6784\u6210\u4e00\u4efd\u5e94\u7528\u7684\u300c\u914d\u7f6e\u6e05\u5355\u300d\uff0c\u7ecf\u8fc7\u5de5\u5177\u94fe\u7f16\u8bd1\u5373\u53ef\u5f97\u5230\u5b8c\u6574\u7684 Kubernetes Manifests\uff0c\u5176\u4e2d\u5305\u542b Deployment\u3001Service \u7b49 Kubernetes \u8d44\u6e90\uff1b\n\u4e00\u4e2a\u7b80\u5355\u7684\u524d\u7aef\u6a21\u578b\u6837\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'schema Server:\n    # Application workload type, default to \'Deployment\'\n    workloadType: "Deployment" | "StatefulSet" = "Deployment"\n\n    # Application replicas\n    replicas: int = option("replicas") or 1\n\n    # Main container image\n    image: str = option("image")\n    # Main container resource\n    schedulingStrategy: strategy.SchedulingStrategy = strategy.SchedulingStrategy{}\n\n    # Main container configuration\n    mainContainer: container.Main\n    # Sidecar container configurations\n    sidecarContainers?: [s.Sidecar]\n    # Init container configurations\n    initContainers?: [s.Sidecar]\n\n    # Workload configuration\n    labels?: {str:str}\n    annotations?: {str:str}\n    selector?: {str:str}\n    podMetadata?: apis.ObjectMeta\n    volumes?: [volume.Volume]\n\n    # Other configurations\n    needNamespace?: bool = True\n\n    configMaps?: [configmap.ConfigMap]\n    secrets?: [secret.Secret]\n    services?: [service.Service]\n')),(0,a.kt)("h2",{id:"3-\u540e\u7aef\u6a21\u578b"},"3. \u540e\u7aef\u6a21\u578b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u540e\u7aef\u6a21\u578b")," \u662f\u300c\u6a21\u578b\u5b9e\u73b0\u300d\uff0c\u662f\u8ba9\u524d\u7aef\u6a21\u578b\u5c5e\u6027\u751f\u6548\u7684\u6a21\u578b\uff0c\u4e3b\u8981\u5305\u542b\u524d\u7aef\u6a21\u578b\u5b9e\u4f8b\u7684\u6e32\u67d3\u903b\u8f91\uff0c\u540e\u7aef\u6a21\u578b\u4e2d\u53ef\u501f\u52a9 KCL \u7f16\u5199\u6821\u9a8c\u3001\u903b\u8f91\u5224\u65ad\u3001\u4ee3\u7801\u7247\u6bb5\u590d\u7528\u7b49\u4ee3\u7801\uff0c\u63d0\u9ad8\u914d\u7f6e\u4ee3\u7801\u590d\u7528\u6027\u548c\u5065\u58ee\u6027\uff0c\u5bf9\u7528\u6237\u4e0d\u611f\u77e5\uff1b\n\u4e00\u4e2a\u7b80\u5355\u7684\u540e\u7aef\u6a21\u578b\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'schema ServerBackend[inputData]:\n    mixin [\n        ......\n    ]\n\n    # Validations\n    assert ac.__META_APP_NAME, "app name must be specified and can\'t be empty or None or Undefined"\n    ......\n\n    # Varaible\n    _workload_name: str = "{}{}".format(metadata.__META_APP_NAME, metadata.__META_ENV_TYPE_NAME).lower()\n\n    # result\n    kubernetes: {str: []} {\n        Deployment = [\n            v1alpha1.Deployment {\n                name = _cafedName\n                ......\n            }\n        ]\n    }\n')),(0,a.kt)("h2",{id:"4-\u5e95\u5c42\u6a21\u578b"},"4. \u5e95\u5c42\u6a21\u578b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e95\u5c42\u6a21\u578b")," \u662f\u4e0d\u5305\u542b\u4efb\u4f55\u5b9e\u73b0\u903b\u8f91\u548c\u62bd\u8c61\u7684\u6a21\u578b\uff0c\u5f80\u5f80\u7531\u5de5\u5177\u8f6c\u6362\u751f\u6210\uff0c\u65e0\u9700\u4fee\u6539\uff0c\u548c\u771f\u6b63\u751f\u6548\u7684 YAML \u5c5e\u6027\u4e00\u4e00\u5bf9\u5e94\uff0c\u5e95\u5c42\u6a21\u578b\u9700\u8981\u7ecf\u8fc7\u8fdb\u4e00\u6b65\u62bd\u8c61\uff0c\u4e00\u822c\u4e0d\u76f4\u63a5\u88ab\u7528\u6237\u4f7f\u7528\u3002\u6bd4\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kusion_kubernetes")," \u662f Kubernetes \u573a\u666f\u7684\u5e95\u5c42\u6a21\u578b\u5e93\uff1b"),(0,a.kt)("p",null,"\u5e38\u7528\u7684\u5e95\u5c42\u6a21\u578b\u5e93\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u5e95\u5c42\u6a21\u578b\u5e93\uff08kusion_kubernetes\uff09"),(0,a.kt)("li",{parentName:"ul"},"Prometheus \u5e95\u5c42\u6a21\u578b\u5e93\uff08kusion_prometheus\uff09")),(0,a.kt)("h2",{id:"5-mixin"},"5. Mixin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mixin")," \u662f KCL \u63d0\u4f9b\u7684\u4e00\u79cd\u590d\u7528\u4ee3\u7801\u7247\u6bb5\u7684\u65b9\u5f0f\uff0c\u540e\u7aef\u6a21\u578b\u53ea\u9700\u8981\u901a\u8fc7\u4e0b\u8ff0\u65b9\u5f0f\u5f15\u7528\uff0c\u5c31\u53ef\u4ee5\u590d\u7528 Mixin \u4e2d\u7684\u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"import sigma.base.pkg.kusion_models.mixins\n\nschema ServerBackend[inputData]:\n    mixin [\n        ......\n        mixins.SchedulingStrategyMixin,\n        ......\n    ]\n")),(0,a.kt)("h2",{id:"6-faq"},"6. FAQ"),(0,a.kt)("h3",{id:"-\u4e3a\u4ec0\u4e48\u8981\u533a\u5206\u524d\u7aef\u6a21\u578b\u548c\u540e\u7aef\u6a21\u578b"},"\u2753 \u4e3a\u4ec0\u4e48\u8981\u533a\u5206\u524d\u7aef\u6a21\u578b\u548c\u540e\u7aef\u6a21\u578b\uff1f"),(0,a.kt)("p",null,"\u533a\u5206\u524d\u7aef\u6a21\u578b\u548c\u540e\u7aef\u6a21\u578b\u7684\u76f4\u63a5\u76ee\u7684\u662f\u5c06\u300c\u7528\u6237\u754c\u9762\u300d\u548c\u300c\u6a21\u578b\u5b9e\u73b0\u300d\u8fdb\u884c\u5206\u79bb\uff1b"))}u.isMDXComponent=!0}}]);
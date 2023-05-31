"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1273],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:4},i="Konfig \u5927\u5e93\u7ed3\u6784",s={unversionedId:"develop/design/konfig",id:"develop/design/konfig",title:"Konfig \u5927\u5e93\u7ed3\u6784",description:"\u672c\u6587\u4e3b\u8981\u89e3\u91ca Konfig \u914d\u7f6e\u5927\u5e93\u7684\u76ee\u5f55\u548c\u4ee3\u7801\u7ed3\u6784\uff0c\u5176\u4e2d\u6d89\u53ca\u7684\u57fa\u672c\u6982\u5ff5\u89e3\u91ca\u53ef\u89c1\u300a\u6a21\u578b\u6982\u89c8\u300b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/develop/design/konfig.md",sourceDirName:"develop/design",slug:"/develop/design/konfig",permalink:"/zh-CN/docs/develop/design/konfig",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/design/konfig.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685544974,formattedLastUpdatedAt:"2023/5/31",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"develop",previous:{title:"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",permalink:"/zh-CN/docs/develop/design/"},next:{title:"KCLVM \u6574\u4f53\u67b6\u6784",permalink:"/zh-CN/docs/develop/design/kclvm"}},c={},l=[{value:"1. \u6574\u4f53\u7ed3\u6784",id:"1-\u6574\u4f53\u7ed3\u6784",level:2},{value:"2. \u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784",id:"2-\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784",level:2},{value:"3. Project \u548c Stack \u7ed3\u6784",id:"3-project-\u548c-stack-\u7ed3\u6784",level:2}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"konfig-\u5927\u5e93\u7ed3\u6784"},"Konfig \u5927\u5e93\u7ed3\u6784"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u89e3\u91ca Konfig \u914d\u7f6e\u5927\u5e93\u7684\u76ee\u5f55\u548c\u4ee3\u7801\u7ed3\u6784\uff0c\u5176\u4e2d\u6d89\u53ca\u7684\u57fa\u672c\u6982\u5ff5\u89e3\u91ca\u53ef\u89c1",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/overview"},"\u300a\u6a21\u578b\u6982\u89c8\u300b"),"\u3002"),(0,o.kt)("h2",{id:"1-\u6574\u4f53\u7ed3\u6784"},"1. \u6574\u4f53\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Makefile            # \u901a\u8fc7 Makefile \u5c01\u88c5\u5e38\u7528\u547d\u4ee4\n\u251c\u2500\u2500 README.md           # \u914d\u7f6e\u5927\u5e93\u8bf4\u660e\n\u251c\u2500\u2500 appops              # \u5e94\u7528\u8fd0\u7ef4\u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u5e94\u7528\u7684 KCL \u8fd0\u7ef4\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 clickhouse-operator\n\u2502   \u251c\u2500\u2500 code-city\n\u2502   \u251c\u2500\u2500 guestbook\n\u2502   \u251c\u2500\u2500 http-echo\n\u2502   \u2514\u2500\u2500 nginx-example\n\u251c\u2500\u2500 base                # Kusion Model \u6a21\u578b\u5e93\n\u2502   \u251c\u2500\u2500 examples        # Kusion Model \u6837\u4f8b\u4ee3\u7801\n\u2502   \u2502   \u251c\u2500\u2500 monitoring  # \u76d1\u63a7\u914d\u7f6e\u6837\u4f8b\n\u2502   \u2502   \u251c\u2500\u2500 native      # Kubernetes \u8d44\u6e90\u914d\u7f6e\u6837\u4f8b\n\u2502   \u2502   \u251c\u2500\u2500 provider    # \u57fa\u7840\u8d44\u6e90\u914d\u7f6e\u6837\u4f8b\n\u2502   \u2502   \u2514\u2500\u2500 server      # \u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u914d\u7f6e\u6a21\u578b\u6837\u4f8b\n\u2502   \u2514\u2500\u2500 pkg\n\u2502       \u251c\u2500\u2500 kusion_kubernetes   # Kubernetes \u5e95\u5c42\u6a21\u578b\u5e93\n\u2502       \u251c\u2500\u2500 kusion_models       # \u6838\u5fc3\u6a21\u578b\u5e93\n\u2502       \u251c\u2500\u2500 kusion_prometheus   # Prometheus \u5e95\u5c42\u6a21\u578b\u5e93\n\u2502       \u2514\u2500\u2500 kusion_provider     # \u57fa\u7840\u8d44\u6e90 \u5e95\u5c42\u6a21\u578b\u5e93\n\u251c\u2500\u2500 hack                # \u653e\u7f6e\u4e00\u4e9b\u811a\u672c\n\u2514\u2500\u2500 kcl.mod             # \u5927\u5e93\u914d\u7f6e\u6587\u4ef6\uff0c\u901a\u5e38\u7528\u6765\u6807\u8bc6\u5927\u5e93\u6839\u76ee\u5f55\u4f4d\u7f6e\u4ee5\u53ca\u5927\u5e93\u6240\u9700\u4f9d\u8d56\n")),(0,o.kt)("h2",{id:"2-\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784"},"2. \u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784"),(0,o.kt)("p",null,"\u6838\u5fc3\u6a21\u578b\u5e93\u4e00\u822c\u547d\u540d\u4e3a kusion_models\uff0c\u4e3b\u8981\u5305\u542b\u524d\u7aef\u6a21\u578b\u3001\u540e\u7aef\u6a21\u578b\u3001Mixin\u3001\u6e32\u67d3\u5668\u7b49\uff0c\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 commons         # \u57fa\u7840\u8d44\u6e90\u6838\u5fc3\u6a21\u578b\u5e93\n\u251c\u2500\u2500 kube            # \u4e91\u539f\u751f\u8d44\u6e90\u6838\u5fc3\u6a21\u578b\u5e93\n\u2502   \u251c\u2500\u2500 backend         # \u540e\u7aef\u6a21\u578b\n\u2502   \u251c\u2500\u2500 frontend        # \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 common          # \u901a\u7528\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 configmap       # ConfigMap \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 container       # \u5bb9\u5668\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 ingress         # Ingress \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 resource        # \u8d44\u6e90\u89c4\u683c\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 secret          # Secret \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 service         # Service \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 sidecar         # Sidecar \u5bb9\u5668\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 strategy        # \u7b56\u7565\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 volume          # Volume \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u2514\u2500\u2500 server.k        # \u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u524d\u7aef\u6a21\u578b\n\u2502   \u251c\u2500\u2500 metadata        # \u5e94\u7528\u8fd0\u7ef4\u7684\u5143\u6570\u636e\u6a21\u578b\n\u2502   \u251c\u2500\u2500 mixins          # \u7edf\u4e00\u653e\u7f6e\u53ef\u590d\u7528\u7684 Mixin\n\u2502   \u251c\u2500\u2500 render          # \u6e32\u67d3\u5668\uff0c\u628a\u524d\u540e\u7aef\u6a21\u578b\u8054\u7cfb\u5728\u4e00\u8d77\u7684\u6865\u6881\n\u2502   \u251c\u2500\u2500 templates       # \u9759\u6001\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 utils           # \u5de5\u5177\u65b9\u6cd5\n\u2514\u2500\u2500 metadata        # \u901a\u7528\u5143\u6570\u636e\u6a21\u578b\n")),(0,o.kt)("h2",{id:"3-project-\u548c-stack-\u7ed3\u6784"},"3. Project \u548c Stack \u7ed3\u6784"),(0,o.kt)("p",null,"Project \u548c Stack \u7684\u57fa\u672c\u6982\u5ff5\u53ef\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/concepts/konfig"},"\u300aProject & Stack\u300b"),"\u3002"),(0,o.kt)("p",null,"Project \u5728\u914d\u7f6e\u5927\u5e93\u7684\u5e94\u7528\u8fd0\u7ef4\uff08appops\uff09\u573a\u666f\u4e2d\u5bf9\u5e94\u7684\u6982\u5ff5\u662f\u300c\u5e94\u7528\u300d\uff0cStack \u5bf9\u5e94\u7684\u6982\u5ff5\u662f\u300c\u73af\u5883\u300d\uff0c\u66f4\u591a\u6620\u5c04\u5173\u7cfb\u53ef\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/organizing-projects-stacks/mapping"},"\u300a\u6620\u5c04\u5173\u7cfb\u300b"),"\u3002"),(0,o.kt)("p",null,"\u672c\u8282\u4ee5\u5e94\u7528\u300cnginx-example\u300d\u4e3a\u4f8b\uff0c\u4ecb\u7ecd Project \u548c Stack \u5728\u914d\u7f6e\u5927\u5e93\u4e2d\u7684\u57fa\u672c\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 README.md       # Project \u4ecb\u7ecd\u6587\u4ef6\n\u251c\u2500\u2500 base            # \u5404\u73af\u5883\u901a\u7528\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 base.k      # \u901a\u7528 KCL \u914d\u7f6e\n\u251c\u2500\u2500 dev             # \u73af\u5883\u7279\u6709\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 ci-test     # \u6d4b\u8bd5\u76ee\u5f55\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml       # \u6d4b\u8bd5\u6570\u636e\n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml  # \u6d4b\u8bd5\u671f\u671b\u7ed3\u679c\n\u2502   \u251c\u2500\u2500 kcl.yaml    # \u591a\u6587\u4ef6\u7f16\u8bd1\u914d\u7f6e\uff0c\u662f KCL \u7f16\u8bd1\u7684\u5165\u53e3\n\u2502   \u251c\u2500\u2500 main.k      # \u5f53\u524d\u73af\u5883 KCL \u914d\u7f6e\n\u2502   \u2514\u2500\u2500 stack.yaml  # Stack \u914d\u7f6e\u6587\u4ef6\n\u2514\u2500\u2500 project.yaml    # Project \u914d\u7f6e\u6587\u4ef6\n")))}d.isMDXComponent=!0}}]);
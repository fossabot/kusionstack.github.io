"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[962],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},39936:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],p={sidebar_position:3},s="Kubernetes",l={unversionedId:"user_docs/getting-started/kubernetes",id:"user_docs/getting-started/kubernetes",title:"Kubernetes",description:"\u6211\u4eec\u4ee5 Kubernetes \u5b98\u65b9\u7684 Guestbook \u4e3a\u4f8b\u5b50\uff0c\u5c55\u793a Kusion \u5de5\u5177\u5bf9\u63a5 Kubernetes \u7684\u7528\u6cd5\u3002Kubernetes \u5b98\u65b9\u7684\u4f8b\u5b50\u5728\u8fd9\u91cc\uff1a",source:"@site/docs/user_docs/getting-started/kubernetes.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/kubernetes",permalink:"/docs/user_docs/getting-started/kubernetes",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653552030,formattedLastUpdatedAt:"2022/5/26",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"KCL \u8bed\u8a00\u901f\u89c8",permalink:"/docs/user_docs/getting-started/kcl"},next:{title:"Kusion \u6a21\u578b\u5e93",permalink:"/docs/user_docs/getting-started/konfig"}},d={},u=[{value:"1. \u5b89\u88c5\u4f9d\u8d56",id:"1-\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"2. \u521d\u59cb\u5316\u5de5\u7a0b",id:"2-\u521d\u59cb\u5316\u5de5\u7a0b",level:2},{value:"3. \u7406\u89e3\u4ee3\u7801\u5185\u5bb9",id:"3-\u7406\u89e3\u4ee3\u7801\u5185\u5bb9",level:2},{value:"4. \u8ba4\u8bc6 <code>apply</code> \u547d\u4ee4",id:"4-\u8ba4\u8bc6-apply-\u547d\u4ee4",level:2},{value:"5. \u901a\u8fc7 <code>apply</code> \u547d\u4ee4\u67e5\u770b\u53d8\u66f4\u4fe1\u606f",id:"5-\u901a\u8fc7-apply-\u547d\u4ee4\u67e5\u770b\u53d8\u66f4\u4fe1\u606f",level:2},{value:"6. \u901a\u8fc7 <code>apply</code> \u547d\u4ee4\u6267\u884c\u53d8\u66f4\u8ba1\u5212",id:"6-\u901a\u8fc7-apply-\u547d\u4ee4\u6267\u884c\u53d8\u66f4\u8ba1\u5212",level:2},{value:"7. \u67e5\u770b\u670d\u52a1\u4fe1\u606f",id:"7-\u67e5\u770b\u670d\u52a1\u4fe1\u606f",level:2}],c={toc:u};function m(e){var n=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"\u6211\u4eec\u4ee5 Kubernetes \u5b98\u65b9\u7684 Guestbook \u4e3a\u4f8b\u5b50\uff0c\u5c55\u793a Kusion \u5de5\u5177\u5bf9\u63a5 Kubernetes \u7684\u7528\u6cd5\u3002Kubernetes \u5b98\u65b9\u7684\u4f8b\u5b50\u5728\u8fd9\u91cc\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/examples/blob/master/guestbook/frontend-deployment.yaml"},"https://github.com/kubernetes/examples/blob/master/guestbook/frontend-deployment.yaml")),(0,o.kt)("h2",{id:"1-\u5b89\u88c5\u4f9d\u8d56"},"1. \u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"\u5b89\u88c5 Kusion \u5de5\u5177")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"\u514b\u9686 Konfig \u5927\u5e93"))),(0,o.kt)("h2",{id:"2-\u521d\u59cb\u5316\u5de5\u7a0b"},"2. \u521d\u59cb\u5316\u5de5\u7a0b"),(0,o.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1a\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"Konfig/appops")," \u76ee\u5f55\u5bf9\u5e94\u7684\u547d\u4ee4\u884c\uff0c\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion init")," \u547d\u4ee4\u521d\u59cb\u5316\u5de5\u7a0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion init\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190 \n? This command will initialize KCL file structure and base codes for a new project.Please choose a KCL schema type: \n  \u25b8 Server\n")),(0,o.kt)("p",null,"\u9009\u62e9\u5de5\u7a0b\u7684\u7c7b\u578b\uff1a\u76ee\u524d\u53ea\u6709\u4e00\u4e2a Server \u7c7b\u578b\uff0c\u70b9\u51fb\u56de\u8f66\u786e\u5b9a\u3002\u7136\u540e\u8f93\u5165\u5de5\u7a0b\u7684\u540d\u5b57\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190 \n\u2714 Server\n\u2714 project name: \u2588emo\n")),(0,o.kt)("p",null,"\u6bd4\u5982\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," \u7684\u540d\u5b57\u7136\u540e\u56de\u8f66\u786e\u8ba4\u3002\u7136\u540e\u8f93\u5165 stack \u7684\u540d\u5b57\uff08stack \u662f\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\u5927\u91cf\u4e91\u539f\u751f\u5e94\u7528\u800c\u4eba\u4e3a\u505a\u7684\u5206\u7c7b\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190 \n\u2714 Server\nproject name: demo\nstack name: \u2588ev\n")),(0,o.kt)("p",null,"\u7136\u540e\u9009\u62e9\u9ed8\u8ba4\u96c6\u7fa4\u7684\u540d\u5b57\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190 \n\u2714 Server\nproject name: demo\nstack name: dev\n\u2714 cluster name: \u2588efault\ncluster name: \u2588efault\n")),(0,o.kt)("p",null,"\u7136\u540e\u6307\u5b9a\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190 \n\u2714 Server\nproject name: demo\nstack name: dev\n\u2714 cluster name: \u2588efault\n\u2714 image: \u2588cr.io/google-samples/gb-frontend:v4\n")),(0,o.kt)("p",null,"\u521d\u59cb\u5316\u5b8c\u6210\u540e\u4f1a\u4ea7\u751f\u4e00\u4e2a demo \u76ee\u5f55\uff0c\u5176\u4e2d\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd demo\n$ tree .\n.\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 ci-test\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 settings.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n3 directories, 7 files\n")),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u6709\u4e00\u4e2a\u5b8c\u6574\u7684 Kusion \u914d\u7f6e\u9879\u76ee\u3002"),(0,o.kt)("h2",{id:"3-\u7406\u89e3\u4ee3\u7801\u5185\u5bb9"},"3. \u7406\u89e3\u4ee3\u7801\u5185\u5bb9"),(0,o.kt)("p",null,"\u67e5\u770b base \u76ee\u5f55\u7684\u57fa\u7ebf\u914d\u7f6e\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"base/base.k")," \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.container\nimport base.pkg.kusion_models.kube.templates.resource as res_tpl\nimport base.pkg.kusion_models.kube.frontend.service\n\n# Application Configuration\nappConfiguration: frontend.Server {\n    # Main Container Configuration\n    mainContainer = container.Main {\n        name = "php-redis"\n        env = [\n            {\n                name = "GET_HOSTS_FROM"\n                value = "dns"\n            }\n        ]\n        ports = [{containerPort = 80}]\n    }\n    selector = {\n        "tier" = "frontend"\n    }\n    podMetadata.labels: {\n        "tier" = "frontend"\n    }\n    schedulingStrategy.resource = res_tpl.medium\n    services = [\n        service.Service {\n            name = "frontend-service"\n            type = "NodePort"\n            ports = [{port = 80}]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"\u5176\u4e2d\u5305\u542b\u4e3b\u5bb9\u5668\u548c\u5e94\u7528\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002\u57fa\u7ebf\u914d\u7f6e\u53c2\u6570\u76f8\u5bf9\u76f8\u5bf9\uff0c\u4e0d\u8fc7\u90fd\u662f\u9ed8\u8ba4\u7684\u914d\u7f6e\uff0c\u5e73\u65f6\u4e0d\u9700\u8981\u7ecf\u5e38\u4fee\u6539\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dev")," \u5bf9\u5e94 stack \u7c7b\u578b\uff08\u5e38\u89c1\u7684\u7c7b\u578b\u8fd8\u6709 gray \u8868\u793a\u7070\u5ea6\u3001pre \u8868\u793a\u9884\u53d1\u3001prod \u8868\u793a\u6b63\u662f\u7248\u672c\u7b49\uff09\uff0c\u8fd9\u91cc\u8868\u793a\u5f00\u53d1\u72b6\u6001\u7684\u914d\u7f6e\u3002 \u914d\u7f6e\u7684\u5165\u53e3\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.templates.resource as res_tpl\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    image = "gcr.io/google-samples/gb-frontend:v4"\n    schedulingStrategy.resource = res_tpl.tiny\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"main.k")," \u4e2d\u53ea\u9700\u8981\u586b\u5199\u548c\u57fa\u7ebf\u53c2\u6570\u4e0d\u4e00\u6837\u7684\u90e8\u5206\u3002\u6bd4\u5982 image \u5728\u57fa\u7ebf\u7684\u57fa\u7840\u4e4b\u540e\u589e\u52a0\u65b0\u7684\u955c\u50cf\u8def\u5f84\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"schedulingStrategy.resource")," \u5219\u662f\u8986\u76d6\u5df2\u6709\u7684\u57fa\u7ebf\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," \u4e2d\u8bb0\u5f55\u4e86\u5de5\u7a0b\u7684\u540d\u5b57 demo\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"dev/stack.yaml")," \u4e2d\u8bb0\u5f55\u4e86\u5f53\u524d\u76ee\u5f55\u7684\u7c7b\u578b\u3002"),(0,o.kt)("h2",{id:"4-\u8ba4\u8bc6-apply-\u547d\u4ee4"},"4. \u8ba4\u8bc6 ",(0,o.kt)("inlineCode",{parentName:"h2"},"apply")," \u547d\u4ee4"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kusion")," \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," \u5b50\u547d\u4ee4\u5c06\u5f53\u524d stack \u4e2d\u7684\u4e00\u7cfb\u5217\u8d44\u6e90\u5e94\u7528\u5230\u8fd0\u884c\u65f6\uff0c\u5b83\u4f1a\u6839\u636e Konfig \u5806\u6808\u4e2d\u7684 KCL \u6587\u4ef6\u521b\u5efa\u6216\u66f4\u65b0\u6216\u5220\u9664\u8d44\u6e90\u3002 Kusion \u9ed8\u8ba4\u4f1a\u751f\u6210\u6267\u884c\u8ba1\u5212\uff0c\u5e76\u6700\u7ec8\u4ea4\u7ed9\u7528\u6237\u786e\u8ba4\u6267\u884c\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"apply")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kusion apply -h\nApply a series of resource changes within the stack.\n\n Create or update or delete resources according to the KCL files within a Konfig stack. By default, Kusion will generate\nan execution plan and present it for your approval before taking any action.\n\n You can check the plan details and then decide if the actions should be taken or aborted.\n\nExamples:\n  # Apply with specifying work directory\n  kusion apply -w /path/to/workdir\n  \n  # Apply with specifying arguments\n  kusion apply -D name=test -D age=18\n  \n  # Apply with specifying setting file\n  kusion apply -Y settings.yaml\n  \n  # Skip interactive approval of plan details before applying\n  kusion apply --yes\n\nOptions:\n  -D, --argument=[]: Specify the arguments to apply KCL. Example: kusion apply -D name=test -D age=18 | kusion apply\n--argument name=test,age=18\n  -d, --detail=false: Automatically show plan details after previewing it\n      --operator='': Specify the operator. Example: kusion apply -operator dayuan.ldy\n  -O, --overrides=[]: Specify the configuration override path and value\n  -Y, --setting=[]: Specify the command line setting files. Example: kusion apply -Y settings.yaml\n  -w, --workdir='': Specify the work directory.\n  -y, --yes=false: Automatically approve and perform the update after previewing it\n\nUsage:\n  kusion apply [flags] [options]\n\nUse \"kusion apply options\" for a list of global command-line options (applies to all commands).\n")),(0,o.kt)("h2",{id:"5-\u901a\u8fc7-apply-\u547d\u4ee4\u67e5\u770b\u53d8\u66f4\u4fe1\u606f"},"5. \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"h2"},"apply")," \u547d\u4ee4\u67e5\u770b\u53d8\u66f4\u4fe1\u606f"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"demo/dev")," \u76ee\u5f55\u4e0b\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion apply")," \u547d\u4ee4\u67e5\u770b\u6267\u884c\u8ba1\u5212\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kusion apply\n SUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type              Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace              demo  Create\n      * \u251c\u2500  kubernetes  apps/v1:Deployment           demodev  Create\n      * \u2514\u2500  kubernetes          v1:Service  frontend-service  Create\n\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190 \n? Do you want to apply these diffs?: \n  \u25b8 yes\n    no\n    details\n")),(0,o.kt)("p",null,"\u5728\u6267\u884c\u4e4b\u524d\u5148\u5207\u6362\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"details")," \u9009\u9879\u56de\u8f66\u67e5\u770b\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2714 details\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190 \n? Which diff detail do you want to see?: \n  \u25b8 all\n    <kubernetes, v1:Namespace, demo> Create\n    <kubernetes, v1:Service, frontend-service> Create\n    <kubernetes, apps/v1:Deployment, demodev> Create\n    cancel\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b\u65b0\u5efa\u7684 Namespace\u3001Service\u3001Deployment \u7b49\u8d44\u6e90\u3002\u5207\u6362\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," \u9009\u9879\u56de\u8f66\u67e5\u770b\u5168\u90e8\u5dee\u5f02\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2714 details\n\u2714 all\n\nProvider: kubernetes\nType: apps/v1:Deployment\nName: demodev\nPlan: Create\nDiff: \n(root level)\n\xb1 type change from <nil> to map\n  - <nil>\n  + id: \n    status: \n    attributes:\n      apiVersion: apps/v1\n      kind: Deployment\n      metadata:\n        name: demodev\n        namespace: demo\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app.kubernetes.io/env: dev\n            app.kubernetes.io/instance: demo-dev\n            app.kubernetes.io/name: demo\n            cluster.x-k8s.io/cluster-name: default\n            tier: frontend\n        template:\n          metadata:\n            labels:\n              app.kubernetes.io/env: dev\n              app.kubernetes.io/instance: demo-dev\n              app.kubernetes.io/name: demo\n              cluster.x-k8s.io/cluster-name: default\n              tier: frontend\n          spec:\n            containers:\n            - env:\n              - name: GET_HOSTS_FROM\n                value: dns\n              - name: APP_NAME\n                value: demo\n              - name: ENVIRONMENT\n                value: dev\n              - name: INSTANCE\n                value: demo-dev\n              - name: CLUSTER\n                value: default\n              image: gcr.io/google-samples/gb-frontend:v4\n              name: php-redis\n              ports:\n              - containerPort: 80\n                protocol: TCP\n              resources:\n                limits:\n                  cpu: 100m\n                  ephemeral-storage: 1Gi\n                  memory: 100Mi\n                requests:\n                  cpu: 100m\n                  ephemeral-storage: 1Gi\n                  memory: 100Mi\n    private: {}\n    dependsOn: []\n\nProvider: kubernetes\nType: v1:Namespace\nName: demo\nPlan: Create\nDiff: \n(root level)\n\xb1 type change from <nil> to map\n  - <nil>\n  + id: \n    status: \n    attributes:\n      apiVersion: v1\n      kind: Namespace\n      metadata:\n        name: demo\n    private: {}\n    dependsOn: []\n\nProvider: kubernetes\nType: v1:Service\nName: frontend-service\nPlan: Create\nDiff: \n(root level)\n\xb1 type change from <nil> to map\n  - <nil>\n  + id: \n    status: \n    attributes:\n      apiVersion: v1\n      kind: Service\n      metadata:\n        name: frontend-service\n        namespace: demo\n      spec:\n        ports:\n        - port: 80\n        selector:\n          app.kubernetes.io/env: dev\n          app.kubernetes.io/instance: demo-dev\n          app.kubernetes.io/name: demo\n          cluster.x-k8s.io/cluster-name: default\n          tier: frontend\n        type: NodePort\n    private: {}\n    dependsOn: []\n")),(0,o.kt)("h2",{id:"6-\u901a\u8fc7-apply-\u547d\u4ee4\u6267\u884c\u53d8\u66f4\u8ba1\u5212"},"6. \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"h2"},"apply")," \u547d\u4ee4\u6267\u884c\u53d8\u66f4\u8ba1\u5212"),(0,o.kt)("p",null,"\u5728\u6267\u884c\u53d8\u66f4\u8ba1\u5212\u524d\u9700\u8981\u786e\u4fdd\u672c\u5730\u53ef\u4ee5\u94fe\u63a5\u5230 Kubernetes \u96c6\u7fa4\uff0c\u5982\u679c\u662f\u672c\u5730\u6d4b\u8bd5\u53ef\u4ee5\u9009\u62e9\u542f\u52a8 Docker \u81ea\u5e26\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u5728 dev \u76ee\u5f55\u4e0b\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion apply")," \u547d\u4ee4\uff0c\u7136\u540e\u9009\u62e9 yes \u6267\u884c\u8ba1\u5212\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ $ kusion apply\n SUCCESS  Compiling in stack dev...                                                                                                                        \n\nStack: dev    Provider                Type              Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace              demo  Create\n      * \u251c\u2500  kubernetes  apps/v1:Deployment           demodev  Create\n      * \u2514\u2500  kubernetes          v1:Service  frontend-service  Create\n\n\u2714 yes\nStart applying diffs......\n SUCCESS  Creating Namespace/demo\n SUCCESS  Creating Deployment/demodev\n SUCCESS  Creating Service/frontend-service\nCreating Service/frontend-service [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n\nApply complete! Resources: 3 created, 0 updated, 0 deleted.\n")),(0,o.kt)("p",null,"\u6210\u529f\u542f\u52a8\u670d\u52a1\u3002"),(0,o.kt)("h2",{id:"7-\u67e5\u770b\u670d\u52a1\u4fe1\u606f"},"7. \u67e5\u770b\u670d\u52a1\u4fe1\u606f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kusion apply")," \u547d\u4ee4\u542f\u52a8\u7684\u670d\u52a1\u5728 demo \u540d\u5b57\u7a7a\u95f4\u4e0b\uff0c\u4e5f\u5c31\u662f\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion init")," \u547d\u4ee4\u65f6\u6307\u5b9a\u7684\u53c2\u6570\uff0c\u4fdd\u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"demo/project.yaml")," \u6587\u4ef6\u4e2d\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Kubernetes \u81ea\u5e26\u7684 kubectl \u547d\u4ee4\u67e5\u770b\u4e0b\u4ea7\u751f\u4e86\u54ea\u4e9b deploy\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get --namespace demo deploy\nNAME      READY   UP-TO-DATE   AVAILABLE   AGE\ndemodev   1/1     1            1           12m\n")),(0,o.kt)("p",null,"\u67e5\u770b\u6709\u54ea\u4e9b pods\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get --namespace demo pods\nNAME                       READY   STATUS    RESTARTS   AGE\ndemodev-6c85bfcc89-w67ns   1/1     Running   0          6m45s\n")),(0,o.kt)("p",null,"\u67e5\u770b\u6709\u54ea\u4e9b service\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get --namespace demo service\nNAME               TYPE       CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE\nfrontend-service   NodePort   10.0.0.1         <none>        80:10080/TCP   10m\n")),(0,o.kt)("p",null,"\u670d\u52a1\u5df2\u7ecf\u7ed1\u5b9a\u5230\u4e86\u5bbf\u4e3b\u673a\u5668\u7684 10080 \u7aef\u53e3\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u6253\u5f00 http://localhost:10080 \u67e5\u770b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:t(48035).Z,width:"1204",height:"776"})),(0,o.kt)("p",null,"\u8bf4\u660e\u670d\u52a1\u5df2\u7ecf\u6b63\u5e38\u542f\u52a8\u3002"))}m.isMDXComponent=!0},48035:function(e,n,t){n.Z=t.p+"assets/images/guestbook-ec16459e626800c955d5d8e66071e086.png"}}]);
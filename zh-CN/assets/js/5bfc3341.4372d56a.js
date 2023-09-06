"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8249],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(h,l(l({ref:n},p),{},{components:t})):o.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={},l="\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668",i={unversionedId:"user_docs/guides/working-with-k8s/container",id:"user_docs/guides/working-with-k8s/container",title:"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668",description:"\u60a8\u53ef\u4ee5\u901a\u8fc7AppConfiguration\u6a21\u578b\u4e2d\u7684containers\u5b57\u6bb5(\u5b58\u5728\u4e8eworkload\u91cc)\u7ba1\u7406\u5bb9\u5668\u7ea7\u522b\u7684\u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e00\u4e2a\u5b9a\u4e49\u5728containers\u4e2d\u7684\u5bb9\u5668\u90fd\u4f1a\u88ab\u8ba4\u4e3a\u662f\u4e1a\u52a1\u5bb9\u5668\u3002Sidecar\u5bb9\u5668\u4f1a\u5728\u672a\u6765\u7684 Kusion \u7248\u672c\u4e2d\u652f\u6301\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/2-container.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/container",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/container",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/2-container.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1693986916,formattedLastUpdatedAt:"2023\u5e749\u67086\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"user_docs",previous:{title:"\u90e8\u7f72\u5e94\u7528",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application"},next:{title:"\u914d\u7f6e\u7f51\u7edc",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/service"}},s={},c=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\u6837\u4f8b",id:"2-\u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\u6837\u4f8b",level:2},{value:"3. \u914d\u7f6e\u751f\u6548",id:"3-\u914d\u7f6e\u751f\u6548",level:2},{value:"4. \u914d\u7f6e\u9a8c\u8bc1",id:"4-\u914d\u7f6e\u9a8c\u8bc1",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668"},"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),"\u6a21\u578b\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"containers"),"\u5b57\u6bb5(\u5b58\u5728\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"workload"),"\u91cc)\u7ba1\u7406\u5bb9\u5668\u7ea7\u522b\u7684\u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e00\u4e2a\u5b9a\u4e49\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"containers"),"\u4e2d\u7684\u5bb9\u5668\u90fd\u4f1a\u88ab\u8ba4\u4e3a\u662f\u4e1a\u52a1\u5bb9\u5668\u3002Sidecar\u5bb9\u5668\u4f1a\u5728\u672a\u6765\u7684 Kusion \u7248\u672c\u4e2d\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u4e1a\u52a1\u5bb9\u5668\u7684\u5b8c\u6574\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/model/catalog_models/workload/doc_service#schema-container"},"\u6709\u5173\u5bb9\u5668\u7684\u6a21\u578b\u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,r.kt)("p",null,"\u4e0b\u6587\u4e2d\u6848\u4f8b\u9700\u8981\u60a8\u5df2\u7ecf\u6b63\u786e\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"kusion init"),(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application#2-%E5%88%9D%E5%A7%8B%E5%8C%96"},"\u521d\u59cb\u5316\u9879\u76ee"),"\u3002\u521d\u59cb\u5316\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u6587\u4ef6\u4f4d\u4e8e\u5f53\u524d\u7684\u914d\u7f6e\u6808(Stack)\u4e0b\u3002"),(0,r.kt)("h2",{id:"2-\u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\u6837\u4f8b"},"2. \u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\u6837\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helloworld/dev/main.k"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.network as n\n\nhelloworld: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "helloworld": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v4"\n                env: {\n                    "env1": "VALUE"\n                    "env2": "VALUE2"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512M"\n                }\n                # \u914d\u7f6e\u4e00\u4e2aHTTP\u5c31\u7eea\u63a2\u9488\n                readinessProbe: p.Probe {\n                    probeHandler: p.Http {\n                        url: "http://localhost:80"\n                    }\n                    initialDelaySeconds: 10\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"3-\u914d\u7f6e\u751f\u6548"},"3. \u914d\u7f6e\u751f\u6548"),(0,r.kt)("p",null,"\u518d\u6b21\u6267\u884c\u3010",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application#4-%E9%85%8D%E7%BD%AE%E7%94%9F%E6%95%88"},"\u914d\u7f6e\u751f\u6548"),"\u3011\u7684\u6b65\u9aa4\u5373\u53ef\u8fdb\u884c\u5bb9\u5668\u914d\u7f6e\u7684\u4fee\u6539\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  UnChanged v1:Service:helloworld:helloworld-dev-helloworld-private, skip                                                                                                                                                                                               \n SUCCESS  Update apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nUpdate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,r.kt)("h2",{id:"4-\u914d\u7f6e\u9a8c\u8bc1"},"4. \u914d\u7f6e\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u9a8c\u8bc1\u65b0\u7684\u5bb9\u5668\u914d\u7f6e\u5df2\u88ab\u4e0b\u53d1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get deployment -n helloworld -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          - name: env1\n            value: VALUE\n          - name: env2\n            value: VALUE2\n          image: gcr.io/google-samples/gb-frontend:v4\n          imagePullPolicy: IfNotPresent\n          name: helloworld\n          readinessProbe:\n            failureThreshold: 3\n            httpGet:\n              host: localhost\n              path: /\n              port: 80\n              scheme: HTTP\n            initialDelaySeconds: 10\n            periodSeconds: 10\n            successThreshold: 1\n            timeoutSeconds: 1\n          resources:\n            limits:\n              cpu: 500m\n              memory: 512M\n...\n")))}d.isMDXComponent=!0}}]);
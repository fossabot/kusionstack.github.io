"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4868],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?t.createElement(k,a(a({ref:n},p),{},{components:r})):t.createElement(k,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18901:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const l={},a="\u5e94\u7528\u6269\u7f29\u5bb9",i={unversionedId:"user_docs/guides/working-with-k8s/resource-spec",id:"user_docs/guides/working-with-k8s/resource-spec",title:"\u5e94\u7528\u6269\u7f29\u5bb9",description:"\u60a8\u53ef\u4ee5\u901a\u8fc7Container\u6a21\u578b\u4e2d\u7684resources\u5b57\u6bb5\u4fee\u6539\u5e94\u7528\u4e1a\u52a1\u5bb9\u5668\u7684\u89c4\u683c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/5-resource-spec.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/resource-spec",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/resource-spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/5-resource-spec.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1694145554,formattedLastUpdatedAt:"2023\u5e749\u67088\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"user_docs",previous:{title:"\u955c\u50cf\u5347\u7ea7",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/image-upgrade"},next:{title:"\u914d\u7f6e\u76d1\u63a7",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/monitoring"}},s={},c=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u6269\u7f29\u5bb9\u914d\u7f6e\u6837\u4f8b",id:"2-\u6269\u7f29\u5bb9\u914d\u7f6e\u6837\u4f8b",level:2},{value:"3. \u914d\u7f6e\u751f\u6548",id:"3-\u914d\u7f6e\u751f\u6548",level:2},{value:"4. \u914d\u7f6e\u9a8c\u8bc1",id:"4-\u914d\u7f6e\u9a8c\u8bc1",level:2}],p={toc:c};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e94\u7528\u6269\u7f29\u5bb9"},"\u5e94\u7528\u6269\u7f29\u5bb9"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Container"),"\u6a21\u578b\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),"\u5b57\u6bb5\u4fee\u6539\u5e94\u7528\u4e1a\u52a1\u5bb9\u5668\u7684\u89c4\u683c\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u4e1a\u52a1\u5bb9\u5668\u7684\u5b8c\u6574\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/model/catalog_models/workload/doc_service#schema-container"},"\u6709\u5173\u5bb9\u5668\u7684\u6a21\u578b\u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,o.kt)("p",null,"\u4e0b\u6587\u4e2d\u6848\u4f8b\u9700\u8981\u60a8\u5df2\u7ecf\u6b63\u786e\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"kusion init"),(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application#2-%E5%88%9D%E5%A7%8B%E5%8C%96"},"\u521d\u59cb\u5316\u9879\u76ee"),"\u3002\u521d\u59cb\u5316\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u6587\u4ef6\u4f4d\u4e8e\u5f53\u524d\u7684\u914d\u7f6e\u6808(Stack)\u4e0b\u3002"),(0,o.kt)("h2",{id:"2-\u6269\u7f29\u5bb9\u914d\u7f6e\u6837\u4f8b"},"2. \u6269\u7f29\u5bb9\u914d\u7f6e\u6837\u4f8b"),(0,o.kt)("p",null,"\u7f16\u8f91 ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u4e2d\u7684 resources \u7684\u503c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\n\nhelloworld: ac.AppConfiguration {\n    workload.containers.helloworld: {\n        # \u4e4b\u524d:\n        # resources: {\n        #     "cpu": "500m"\n        #     "memory": "512M"\n        # }\n        # \u4e4b\u540e: \n        resources: {\n            "cpu": "250m"\n            "memory": "256Mi"\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"main.k"),"\u4e2d\u5176\u4ed6\u503c\u4e0d\u53d8\u3002"),(0,o.kt)("h2",{id:"3-\u914d\u7f6e\u751f\u6548"},"3. \u914d\u7f6e\u751f\u6548"),(0,o.kt)("p",null,"\u518d\u6b21\u6267\u884c\u3010",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application#4-%E9%85%8D%E7%BD%AE%E7%94%9F%E6%95%88"},"\u914d\u7f6e\u751f\u6548"),"\u3011\u7684\u6b65\u9aa4\u5373\u53ef\u8fdb\u884c\u8d44\u6e90\u6269\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\n\u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  UnChanged v1:Service:helloworld:helloworld-dev-helloworld-private, skip                                                                                                                                                                                               \n SUCCESS  Update apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nUpdate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,o.kt)("h2",{id:"4-\u914d\u7f6e\u9a8c\u8bc1"},"4. \u914d\u7f6e\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u9a8c\u8bc1\u65b0\u7684\u5bb9\u5668\u89c4\u683c\u5df2\u88ab\u66f4\u65b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get deployment -n helloworld -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          ...\n          image: gcr.io/google-samples/gb-frontend:v4\n          ...\n          resources:\n            limits:\n              cpu: 250m\n              memory: 256Mi\n...\n")))}d.isMDXComponent=!0}}]);
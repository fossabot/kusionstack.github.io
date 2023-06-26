"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},o="\u6258\u7ba1\u5e76\u53d6\u56de\u654f\u611f\u4fe1\u606f",i={unversionedId:"user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets",id:"user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets",title:"\u6258\u7ba1\u5e76\u53d6\u56de\u654f\u611f\u4fe1\u606f",description:"\u672c\u6307\u5357\u5411\u5927\u5bb6\u5c55\u793a\uff0cKusionStack \u5728 Secret as Code \u9886\u57df\u7684\u5b9e\u8df5\u3002\u6587\u4e2d\u4f7f\u7528\u4e86 Vault \u4f5c\u4e3a\u654f\u611f\u4fe1\u606f\u7684\u5916\u90e8\u5b58\u50a8\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets.md",sourceDirName:"user_docs/guides/sensitive-data-solution",slug:"/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1687748253,formattedLastUpdatedAt:"2023/6/26",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u8bb0\u5f55\u4e0e\u544a\u8b66",permalink:"/zh-CN/docs/user_docs/guides/prometheus/recording-and-alerting"},next:{title:"Vault Agent",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/vault-agent"}},s={},p=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u67e5\u770b\u9879\u76ee\u548c\u4ee3\u7801",id:"\u67e5\u770b\u9879\u76ee\u548c\u4ee3\u7801",level:2},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:3},{value:"\u914d\u7f6e\u4ee3\u7801",id:"\u914d\u7f6e\u4ee3\u7801",level:3},{value:"\u9884\u5b58\u654f\u611f\u4fe1\u606f",id:"\u9884\u5b58\u654f\u611f\u4fe1\u606f",level:2},{value:"\u90e8\u7f72\u5e94\u7528",id:"\u90e8\u7f72\u5e94\u7528",level:2},{value:"\u9a8c\u8bc1\u654f\u611f\u4fe1\u606f",id:"\u9a8c\u8bc1\u654f\u611f\u4fe1\u606f",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6258\u7ba1\u5e76\u53d6\u56de\u654f\u611f\u4fe1\u606f"},"\u6258\u7ba1\u5e76\u53d6\u56de\u654f\u611f\u4fe1\u606f"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5411\u5927\u5bb6\u5c55\u793a\uff0cKusionStack \u5728 Secret as Code \u9886\u57df\u7684\u5b9e\u8df5\u3002\u6587\u4e2d\u4f7f\u7528\u4e86 Vault \u4f5c\u4e3a\u654f\u611f\u4fe1\u606f\u7684\u5916\u90e8\u5b58\u50a8\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"\u5b89\u88c5 Kusion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes \u96c6\u7fa4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/vault/downloads"},"\u5b89\u88c5 Vault"))),(0,r.kt)("h2",{id:"\u67e5\u770b\u9879\u76ee\u548c\u4ee3\u7801"},"\u67e5\u770b\u9879\u76ee\u548c\u4ee3\u7801"),(0,r.kt)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u514b\u9686 Konfig \u4ed3\u5e93\u5e76\u8fdb\u5165 Konfig \u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/konfig.git && cd konfig\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"base/examples")," \u76ee\u5f55\u4e0b\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"secret-as-code")," \u9879\u76ee\uff0c\u7531\u4ee5\u4e0b\u6587\u4ef6\u7ec4\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd base/examples/secret-as-code && tree .\n.\n\u251c\u2500\u2500 base                            // \u5404\u73af\u5883\u901a\u7528\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 base.k                      // \u5e94\u7528\u7684\u73af\u5883\u901a\u7528\u914d\u7f6e\n\u251c\u2500\u2500 dev                             // \u73af\u5883\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 ci-test                     // CI \u6d4b\u8bd5\u76ee\u5f55\uff0c\u653e\u7f6e\u6d4b\u8bd5\u811a\u672c\u548c\u6570\u636e\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml           // \u6d4b\u8bd5\u6570\u636e\u548c\u7f16\u8bd1\u6587\u4ef6\u914d\u7f6e\n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml      // \u671f\u671b\u7684 YAML\uff0c\u53ef\u901a\u8fc7 make \u66f4\u65b0\n\u2502   \u251c\u2500\u2500 kcl.yaml                    // \u5f53\u524d Stack \u7684\u591a\u6587\u4ef6\u7f16\u8bd1\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 main.k                      // \u5e94\u7528\u5728\u5f53\u524d\u73af\u5883\u7684\u5e94\u7528\u5f00\u53d1\u8005\u5173\u6ce8\u7684\u914d\u7f6e\u6e05\u5355\n\u2502   \u2514\u2500\u2500 stack.yaml                  // Stack \u5143\u4fe1\u606f\n\u2514\u2500\u2500 project.yaml                    // Project \u5143\u4fe1\u606f\n\n3 directories, 8 files\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5173\u4e8e Konfig \u9879\u76ee\u76ee\u5f55\u7ed3\u6784\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig \u57fa\u672c\u6982\u5ff5"),"\u3002"))),(0,r.kt)("h3",{id:"\u914d\u7f6e\u4ee3\u7801"},"\u914d\u7f6e\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# project.yaml\nname: secret-as-code\nsecret_stores:\n  vault:\n    address: http://127.0.0.1:8200\n    auth_method: approle\n    role_id: c6a97b50-6b98-67fd-6917-242def1162b0\n    secret_id: f8167881-a090-770b-905d-305e7368f26a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," \u4e2d\u6307\u5b9a\u4e86\u654f\u611f\u4fe1\u606f\u7684\u5916\u90e8\u5b58\u50a8\u4e3a Vault\uff0c\u5e76\u7ed9\u51fa\u4e86\u670d\u52a1\u5668\u5730\u5740\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"\uff09\u548c\u8ba4\u8bc1\u65b9\u5f0f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"auth_method"),"\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# stack.yaml\nname: dev\nlabels:\n  kusionstack.io/secure: true\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stack.yaml")," \u4e2d\u7684\u6807\u7b7e\u5b57\u6bb5\uff0c\u663e\u793a\u6307\u5b9a\u5f53\u524d stack \u5305\u542b\u654f\u611f\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# base.k\nimport base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.container\n\n# Application Configuration\nappConfiguration: frontend.Server {\n    # Main Container Configuration\n    mainContainer = container.Main {\n        ports = [\n            {containerPort = 80}\n        ]\n    }\n    image = "nginx:1.7.8"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"base.k")," \u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 k8s \u65e0\u72b6\u6001\u5e94\u7528 \u2014\u2014 Nginx\uff0c\u5e76\u6307\u5b9a\u4e86\u955c\u50cf\u5730\u5740\u548c\u5bb9\u5668\u7aef\u53e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\nimport base.pkg.kusion_models.kube.frontend\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    annotations: {\n        "secret-store": "vault"\n        # Valid format:\n        #  "ref+vault://PATH/TO/KV_BACKEND#/KEY"\n        "foo": "ref+vault://secret/foo#/foo"\n        "bar": "ref+vault://secret/bar#/bar"\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u4e2d\u6269\u5c55\u4e86 Nginx \u5e94\u7528\u7684\u914d\u7f6e\uff0c\u81ea\u5b9a\u4e49\u6ce8\u89e3\u3002\u5176\u4e2d\uff0c\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u7684\u503c\uff0c\u9075\u5faa\u654f\u611f\u4fe1\u606f\u5f15\u7528\u683c\u5f0f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"ref+vault://PATH/TO/KV_BACKEND#/KEY"),"\uff09\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ref+vault"),"\uff1a\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u654f\u611f\u4fe1\u606f\u5f15\u7528\uff0c\u4e14\u5916\u90e8\u5b58\u50a8\u670d\u52a1\u662f Vault"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PATH/TO/KV_BACKEND"),"\uff1a\u6307\u5b9a\u654f\u611f\u4fe1\u606f\u5b58\u50a8\u7684\u8def\u5f84"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"KEY"),"\uff1a\u6307\u5b9a\u8bfb\u53d6\u654f\u611f\u4fe1\u606f\u7684\u952e")),(0,r.kt)("p",null,"\u5b8c\u6574\u7684\u683c\u5f0f\u4f7f\u7528\u7c7b\u4f3c URI \u8868\u8fbe\u5f0f\u7684\u98ce\u683c\u62fc\u63a5\uff0c\u53ef\u4ee5\u68c0\u7d22\u5230\u5916\u90e8\u5b58\u50a8\u7684\u654f\u611f\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u9884\u5b58\u654f\u611f\u4fe1\u606f"},"\u9884\u5b58\u654f\u611f\u4fe1\u606f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ee5\u5f00\u53d1\u6a21\u5f0f\u542f\u52a8 Vault \u5e76\u89e3\u5c01\u540e\uff0c\u9884\u5b58\u654f\u611f\u4fe1\u606f\uff0c\u8def\u5f84\u548c\u952e\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"main.k")," \u4e00\u81f4\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put secret/foo foo=foo\nvault kv put secret/bar bar=bar\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"approle")," \u8ba4\u8bc1\u65b9\u5f0f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault auth enable approle\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6743\u9650\u7b56\u7565\u96c6\u5408\uff0c\u5177\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"secret/foo")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"secret/bar")," \u8def\u5f84\u4e0b\u7684\u8bfb\u6743\u9650\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'vault policy write my-policy - <<EOF\npath "secret/foo" {\n  capabilities = ["read"]\n}\n\npath "secret/bar" {\n  capabilities = ["read"]\n}\nEOF\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u7ed1\u5b9a\u6743\u9650\u96c6\u5408\u5230\u89d2\u8272\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault write auth/approle/role/my-role policies=my-policy\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u4fdd\u5b58 role_id\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault read auth/approle/role/my-role/role-id\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u4fdd\u5b58 secret_id\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault write -f auth/approle/role/my-role/secret-id\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6709\u5173\u8ba4\u8bc1\u65b9\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault/docs/auth/approle"},"AppRole Auth Method"),"\u3002"))),(0,r.kt)("h2",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,r.kt)("p",null,"\u90e8\u7f72\u4e4b\u524d\uff0c\u66ff\u6362 ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"role_id")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_id")," \u7684\u503c\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5b8c\u6210\u4e00\u952e\u90e8\u7f72\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd base/example/secret-as-code/dev && kusion apply --yes\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"apply",src:n(18698).Z,width:"1998",height:"434"})),(0,r.kt)("h2",{id:"\u9a8c\u8bc1\u654f\u611f\u4fe1\u606f"},"\u9a8c\u8bc1\u654f\u611f\u4fe1\u606f"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u9a8c\u8bc1\u654f\u611f\u4fe1\u606f\u5df2\u7ecf\u4ece Vault \u4e2d\u53d6\u56de\uff0c\u5e76\u66ff\u6362\u4e86 Nginx \u5e94\u7528\u7684\u6ce8\u89e3\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy -n secret-as-code secret-as-codedev -o jsonpath='{.metadata.annotations}'\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bar": "bar",\n  "deployment.kubernetes.io/revision": "1",\n  "foo": "foo",\n  "secret-store": "vault"\n}\n')),(0,r.kt)("p",null,"\u539f\u59cb\u914d\u7f6e\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bar": "ref+vault://secret/bar#/bar",\n  "foo": "ref+vault://secret/foo#/foo",\n  "secret-store": "vault"\n}\n')),(0,r.kt)("p",null,"\u539f\u914d\u7f6e\u6309\u7167\u4ee5\u4e0b\u5185\u5bb9\u4fee\u6539\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- "bar": "ref+vault://secret/bar#/bar",\n+ "bar": "bar",\n- "foo": "ref+vault://secret/foo#/foo",\n+ "foo": "foo",\n')),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u901a\u8fc7 IaC \u7684\u65b9\u5f0f\uff0c\u6211\u4eec\u5c06\u6258\u7ba1\u5728 Vault \u7684\u654f\u611f\u4fe1\u606f\u53d6\u56de\u5e76\u4f7f\u7528\u3002"))}d.isMDXComponent=!0},18698:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-f93fa767d7dc1b8190cf6d59468d6c21.jpg"}}]);
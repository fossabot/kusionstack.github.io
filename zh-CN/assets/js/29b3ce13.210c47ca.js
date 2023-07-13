"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9432],{3905:(e,s,n)=>{n.d(s,{Zo:()=>u,kt:()=>m});var a=n(67294);function t(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function o(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?o(Object(n),!0).forEach((function(s){t(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function p(e,s){if(null==e)return{};var n,a,t=function(e,s){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),c=function(e){var s=a.useContext(i),n=s;return e&&(n="function"==typeof e?e(s):r(r({},s),e)),n},u=function(e){var s=c(e.components);return a.createElement(i.Provider,{value:s},e.children)},l={inlineCode:"code",wrapper:function(e){var s=e.children;return a.createElement(a.Fragment,{},s)}},k=a.forwardRef((function(e,s){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=c(n),m=t,d=k["".concat(i,".").concat(m)]||k[m]||l[m]||o;return n?a.createElement(d,r(r({ref:s},u),{},{components:n})):a.createElement(d,r({ref:s},u))}));function m(e,s){var n=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=k;var p={};for(var i in s)hasOwnProperty.call(s,i)&&(p[i]=s[i]);p.originalType=e,p.mdxType="string"==typeof e?e:t,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55036:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),t=(n(67294),n(3905));const o={id:"guide",sidebar_label:"Use Guide"},r="Use Guide",p={unversionedId:"reference/konfig/guide",id:"reference/konfig/guide",title:"Use Guide",description:"1. \u6dfb\u52a0\u5e94\u7528",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/konfig/3-guide.md",sourceDirName:"reference/konfig",slug:"/reference/konfig/guide",permalink:"/zh-CN/docs/reference/konfig/guide",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/konfig/3-guide.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1689248321,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",sidebarPosition:3,frontMatter:{id:"guide",sidebar_label:"Use Guide"},sidebar:"reference",previous:{title:"Dir Struct",permalink:"/zh-CN/docs/reference/konfig/structure"},next:{title:"Magic Vars",permalink:"/zh-CN/docs/reference/konfig/vars"}},i={},c=[{value:"1. \u6dfb\u52a0\u5e94\u7528",id:"1-\u6dfb\u52a0\u5e94\u7528",level:2},{value:"2. \u9a8c\u8bc1 Konfig \u4ee3\u7801",id:"2-\u9a8c\u8bc1-konfig-\u4ee3\u7801",level:2},{value:"2.1 \u5feb\u901f\u5f00\u59cb",id:"21-\u5feb\u901f\u5f00\u59cb",level:3},{value:"2.2 \u4f7f\u7528\u6837\u4f8b",id:"22-\u4f7f\u7528\u6837\u4f8b",level:3},{value:"3. \u81ea\u52a8\u7f16\u8bd1",id:"3-\u81ea\u52a8\u7f16\u8bd1",level:2},{value:"3.1 \u5feb\u901f\u5f00\u59cb",id:"31-\u5feb\u901f\u5f00\u59cb",level:3},{value:"3.2 \u4f7f\u7528\u6837\u4f8b",id:"32-\u4f7f\u7528\u6837\u4f8b",level:3},{value:"3.3 \u4e34\u65f6\u7ed5\u8fc7",id:"33-\u4e34\u65f6\u7ed5\u8fc7",level:3},{value:"3.4 \u7f16\u8bd1\u7ed3\u679c\u4e0d\u81ea\u52a8\u52a0\u5165\u63d0\u4ea4",id:"34-\u7f16\u8bd1\u7ed3\u679c\u4e0d\u81ea\u52a8\u52a0\u5165\u63d0\u4ea4",level:3}],u={toc:c};function l(e){let{components:s,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},u,n,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"use-guide"},"Use Guide"),(0,t.kt)("h2",{id:"1-\u6dfb\u52a0\u5e94\u7528"},"1. \u6dfb\u52a0\u5e94\u7528"),(0,t.kt)("p",null,"\u5728 ",(0,t.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/usecases/deliver-first-project"},"\u5feb\u901f\u5f00\u59cb/Usecases")," \u6211\u4eec\u5df2\u7ecf\u5c55\u793a\u5982\u4f55\u5feb\u901f\u6dfb\u52a0\u4e00\u4e2a\u5e94\u7528\uff08\u53c2\u8003 ",(0,t.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Project & Stack"),"\uff09\u3002"),(0,t.kt)("h2",{id:"2-\u9a8c\u8bc1-konfig-\u4ee3\u7801"},"2. \u9a8c\u8bc1 Konfig \u4ee3\u7801"),(0,t.kt)("h3",{id:"21-\u5feb\u901f\u5f00\u59cb"},"2.1 \u5feb\u901f\u5f00\u59cb"),(0,t.kt)("p",null,"\u5728\u5b89\u88c5\u5b8c\u6210 Kusion \u5de5\u5177\u4e4b\u540e\uff0c\u5728 Konfig \u6839\u76ee\u5f55\u6267\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},"make check-all")," \u9a8c\u8bc1\u5927\u5e93\u5168\u90e8 Project\uff08\u53c2\u8003 ",(0,t.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig"),"\uff09\uff0c\u6216\u8005\u6267\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},'make check WHAT="http-echo"')," \u9a8c\u8bc1 ",(0,t.kt)("inlineCode",{parentName:"p"},"appops/http-echo")," \u5e94\u7528\u3002"),(0,t.kt)("p",null,"\u5982\u679c\u9700\u8981\u5355\u72ec\u9a8c\u8bc1 ",(0,t.kt)("inlineCode",{parentName:"p"},"appops/http-echo")," \u5e94\u7528\u7684 dev \u7248\u672c\uff0c\u53ef\u4ee5\u8fdb\u5165 ",(0,t.kt)("inlineCode",{parentName:"p"},"appops/http-echo/dev")," \u76ee\u5f55\u6267\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},"kusion compile")," \u547d\u4ee4\uff08\u6216\u8005\u901a\u8fc7\u66f4\u5e95\u5c42\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"kcl -Y kcl.yaml ci-test/settings.yaml -o ci-test/stdout.golden.yaml")," \u547d\u4ee4\uff09\uff0c\u8f93\u51fa\u7684\u6587\u4ef6\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"appops/http-echo/dev/ci-test/stdout.golden.yaml"),"\u3002"),(0,t.kt)("admonition",{type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5927\u5e93\u9884\u7f6e\u547d\u4ee4\u53ef\u4ee5\u5728\u5927\u5e93\u6839\u76ee\u5f55\u6267\u884c make \u547d\u4ee4\u8fdb\u884c\u67e5\u770b\uff1a"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'$ make\nhelp                \u8fd9\u91cc\u662f\u5e2e\u52a9\u6587\u6863 :)\ncheck-all           \u6821\u9a8c\u6240\u6709 Project\ncheck               \u6821\u9a8c\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684 Project\uff0c\u6bd4\u5982 make check WHAT=nginx-example \u6216\u8005 make check WHAT="http-echo nginx-example"\nclean-all           \u6e05\u7406\u7f13\u5b58\ninstall-hooks       \u5b89\u88c5 git hooks\uff0c\u76ee\u524d\u4e3b\u8981\u6709 pre-commit hook\uff08\u63d0\u4ea4\u65f6\u81ea\u52a8\u7f16\u8bd1\uff09\nuninstall-hooks     \u5378\u8f7d git hooks\n'))),(0,t.kt)("h3",{id:"22-\u4f7f\u7528\u6837\u4f8b"},"2.2 \u4f7f\u7528\u6837\u4f8b"),(0,t.kt)("p",null,"\ud83c\udfaf \u6839\u636e\u76ee\u5f55\u540d\u7f16\u8bd1\u6307\u5b9a\u5e94\u7528\uff0c\u6bd4\u5982\u7f16\u8bd1\u5e94\u7528 http-echo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"make check WHAT=http-echo\n# OR: make check-http-echo\n")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"\u6267\u884c\u7ed3\u679c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"Matched path: ['/Users/kusion-user/workspace/Konfig/appops/http-echo']\nMatched path total: 1\n\n/Users/kusion-user/workspace/Konfig/appops/http-echo                 [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/http-echo/dev         [Success]\n\nAll Success!\nTotal time: 2.06s, Total app num: 1, Total env num: 1, Time per env: 2.06s\n"))),(0,t.kt)("p",null,"\ud83c\udfaf \u7f16\u8bd1\u591a\u4e2a\u5e94\u7528"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'make check WHAT="http-echo nginx-example"\n')),(0,t.kt)("details",null,(0,t.kt)("summary",null,"\u6267\u884c\u7ed3\u679c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"Matched path: ['/Users/kusion-user/workspace/Konfig/appops/http-echo']\nMatched path total: 1\n\nMatched path: ['/Users/kusion-user/workspace/Konfig/appops/nginx-example']\nMatched path total: 1\n\n/Users/kusion-user/workspace/Konfig/appops/http-echo                 [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/http-echo/dev         [Success]\n/Users/kusion-user/workspace/Konfig/appops/nginx-example             [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/nginx-example/dev     [Success]\n\nAll Success!\nTotal time: 2.11s, Total app num: 2, Total env num: 2, Time per env: 1.06s\n"))),(0,t.kt)("p",null,"\ud83c\udfaf \u5173\u952e\u5b57\u9664\u4e86\u662f\u5e94\u7528\u540d\uff0c\u4e5f\u53ef\u4ee5\u662f\u4efb\u610f\u76ee\u5f55\u540d\u79f0\uff0c\u6bd4\u5982\u7f16\u8bd1 appops \u5e94\u7528\u8fd0\u7ef4\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u5e94\u7528"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"make check-appops\n# OR: make check WHAT=appops\n")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"\u6267\u884c\u7ed3\u679c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"Matched path: ['/Users/kusion-user/workspace/Konfig/appops']\nMatched path total: 1\n\n/Users/kusion-user/workspace/Konfig/appops/nginx-example             [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/nginx-example/dev     [Success]\n/Users/kusion-user/workspace/Konfig/appops/guestbook           [ALL DONE]\n  \u2523\u2501 /Users/kusion-user/workspace/Konfig/appops/guestbook/dev  [Success]\n  \u2523\u2501 /Users/kusion-user/workspace/Konfig/appops/guestbook/prod [Success]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/guestbook/test [Success]\n/Users/kusion-user/workspace/Konfig/appops/http-echo                 [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/http-echo/dev         [Success]\n\nAll Success!\nTotal time: 4.08s, Total app num: 3, Total env num: 5, Time per env: 0.82s\n"))),(0,t.kt)("p",null,"\ud83c\udfaf \u7f16\u8bd1\u6240\u6709\u5e94\u7528"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"make check-all\n")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"\u6267\u884c\u7ed3\u679c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"Matched path total: 139\n\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_need_namespace [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_need_namespace/prod [Success]\n/Users/kusion-user/workspace/Konfig/appops/guestbook           [ALL DONE]\n  \u2523\u2501 /Users/kusion-user/workspace/Konfig/appops/guestbook/dev  [Success]\n  \u2523\u2501 /Users/kusion-user/workspace/Konfig/appops/guestbook/prod [Success]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/guestbook/test [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_secret  [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_secret/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_volume  [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_volume/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_config_map [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_config_map/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_label_selector [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_label_selector/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_main_container [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_main_container/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_sidecar [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_sidecar/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_stateful_set [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_stateful_set/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_service [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_service/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/server/app_scheduling_strategy [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/server/app_scheduling_strategy/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/kcl-vault-agent    [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/kcl-vault-agent/dev [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/monitoring/prometheus-example-app [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/monitoring/prometheus-example-app/prod [Success]\n/Users/kusion-user/workspace/Konfig/base/examples/kcl-vault-csi      [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/base/examples/kcl-vault-csi/dev [Success]\n/Users/kusion-user/workspace/Konfig/appops/nginx-example             [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/nginx-example/dev     [Success]\n/Users/kusion-user/workspace/Konfig/appops/http-echo                 [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/http-echo/dev         [Success]\n\nAll Success!\nTotal time: 17.21s, Total app num: 16, Total env num: 18, Time per env: 0.96s\n"))),(0,t.kt)("h2",{id:"3-\u81ea\u52a8\u7f16\u8bd1"},"3. \u81ea\u52a8\u7f16\u8bd1"),(0,t.kt)("p",null,"\u501f\u52a9 git hooks \u529f\u80fd\u548c pre-commit \u811a\u672c\uff0c\u5b9e\u73b0\u63d0\u4ea4\u4ee3\u7801\uff08git commit\uff09\u5230\u5927\u5e93\u65f6\u81ea\u52a8\u7f16\u8bd1\u5f53\u524d\u53d8\u66f4\u6d89\u53ca\u7684\u5e94\u7528/\u9879\u76ee\uff1b"),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u81ea\u52a8\u7f16\u8bd1\u5728 terminal \u4e2d\u5c55\u793a\u6548\u679c\u8f83\u597d\uff0c\u5728 IDE \u8fdb\u884c commit \u63d0\u4ea4\u7684\u5c55\u793a\u6548\u679c\u4e0d\u4f73\uff1b")),(0,t.kt)("h3",{id:"31-\u5feb\u901f\u5f00\u59cb"},"3.1 \u5feb\u901f\u5f00\u59cb"),(0,t.kt)("p",null,"\u79fb\u52a8\u5230\u5927\u5e93\u6839\u76ee\u5f55"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"cd ~/Konfig\n")),(0,t.kt)("p",null,"\u5b89\u88c5"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"make install-hooks\n")),(0,t.kt)("p",null,"\u5378\u8f7d"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"make uninstall-hooks\n")),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u6f14\u793a\u547d\u4ee4\u5747\u5728\u5927\u5e93\u6839\u76ee\u5f55\u4e2d\u6267\u884c\uff1b")),(0,t.kt)("h3",{id:"32-\u4f7f\u7528\u6837\u4f8b"},"3.2 \u4f7f\u7528\u6837\u4f8b"),(0,t.kt)("p",null,"git hooks \u5b89\u88c5\u6210\u529f\u540e\uff0c\u5728\u63d0\u4ea4\u65f6\u4f1a\u81ea\u52a8\u7f16\u8bd1:"),(0,t.kt)("details",null,(0,t.kt)("summary",null,"\u6267\u884c\u7ed3\u679c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c Konfig (master) \u2714 make install-hooks  \nSuccessfully install pre-commit hooks!\n\u279c Konfig (master) \u2714 git status          \nOn branch master\nYour branch is up to date with \'origin/master\'.\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n        modified:   appops/http-echo/base/base.k\n\nno changes added to commit (use "git add" and/or "git commit -a")\n\n\u279c Konfig (master) \u2714 git add . \n\u279c Konfig (master) \u2714 git commit -m \'test\'\n------------- \u5f00\u59cb\u6267\u884c\u63d0\u4ea4\u524d\u7f6e\u68c0\u67e5 \ud83d\ude80 -------------\n\ud83d\udd52 \u5f00\u59cb\u81ea\u52a8\u6267\u884c\u9884\u7f16\u8bd1...\nRunning kclvm /Users/kusion-user/workspace/Konfig/hack/compile-rocket.py appops/http-echo ...\nMatched path: [\'/Users/kusion-user/workspace/Konfig/appops/http-echo\']\nMatched path total: 1\n\n/Users/kusion-user/workspace/Konfig/appops/http-echo [ALL DONE]\n  \u2517\u2501 /Users/kusion-user/workspace/Konfig/appops/http-echo/dev [Success]\n\nAll Success!\nTotal time: 2.04s, Total app num: 1, Total env num: 1, Time per env: 2.04s\n\ud83d\udd52 \u6b63\u5728\u5c06\u7f16\u8bd1\u7ed3\u679c\u52a0\u5165\u5230\u6682\u5b58\u533a(stage)\uff0c\u4f5c\u4e3a\u672c\u6b21\u63d0\u4ea4\u5185\u5bb9...\n\ud83d\udca1 \u9884\u7f16\u8bd1\u6267\u884c\u7ed3\u675f\n\n------------- \u6267\u884c\u7ed3\u679c -------------\n\u9884\u7f16\u8bd1: \u6210\u529f\n\n------------- \u5efa\u8bae -------------\n\u9884\u7f16\u8bd1: \u65e0\n\n------------- \u524d\u7f6e\u68c0\u67e5\u5b8c\u6210\uff0c\u5df2\u63d0\u4ea4 \u2705 -------------\n\n[master c006e80] test\n 2 files changed, 2 insertions(+), 2 deletions(-)\n\n\u279c Konfig (master) \u2714 git status          \nOn branch master\nYour branch is ahead of \'origin/master\' by 1 commit.\n  (use "git push" to publish your local commits)\n\nnothing to commit, working tree clean\n'))),(0,t.kt)("h3",{id:"33-\u4e34\u65f6\u7ed5\u8fc7"},"3.3 \u4e34\u65f6\u7ed5\u8fc7"),(0,t.kt)("p",null,"\u5982\u679c\u60f3\u5728\u672c\u6b21\u63d0\u4ea4\u65f6\u4e34\u65f6\u7ed5\u8fc7\u300c\u81ea\u52a8\u7f16\u8bd1\u300d\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"git commit -n\n# OR: git commit --no-verify\n")),(0,t.kt)("h3",{id:"34-\u7f16\u8bd1\u7ed3\u679c\u4e0d\u81ea\u52a8\u52a0\u5165\u63d0\u4ea4"},"3.4 \u7f16\u8bd1\u7ed3\u679c\u4e0d\u81ea\u52a8\u52a0\u5165\u63d0\u4ea4"),(0,t.kt)("p",null,"\u4ece\u6837\u4f8b\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u7f16\u8bd1\u751f\u6210\u7684\u7f16\u8bd1\u7ed3\u679c\u4f1a\u81ea\u52a8\u52a0\u5165\u5230\u672c\u6b21\u63d0\u4ea4\u4e2d\uff0c\u5982\u679c\u4e0d\u60f3\u81ea\u52a8\u52a0\u5165\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf ADD_TO_STAGE_AFTER_COMPILE=False\uff0c\u5173\u95ed\u6b64\u529f\u80fd\uff1a\nexport ADD_TO_STAGE_AFTER_COMPILE=False"),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u901a\u8fc7 export \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u53ea\u5728\u5f53\u524d Terminal \u6709\u6548")))}l.isMDXComponent=!0}}]);
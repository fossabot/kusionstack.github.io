"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,m=k["".concat(p,".").concat(d)]||k[d]||u[d]||a;return n?l.createElement(m,i(i({ref:t},c),{},{components:n})):l.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},i="\u547d\u4ee4\u884c\u5de5\u5177",o={unversionedId:"user_docs/support/faq-cli",id:"user_docs/support/faq-cli",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"1. Konfig \u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684 settings.yaml \u6587\u4ef6\u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/support/faq-cli.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/faq-cli",permalink:"/zh-CN/docs/user_docs/support/faq-cli",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/support/faq-cli.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663221548,formattedLastUpdatedAt:"2022/9/15",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"user_docs",previous:{title:"YAML \u8bed\u6cd5",permalink:"/zh-CN/docs/user_docs/support/faq-yaml"},next:{title:"\u5b89\u88c5\u95ee\u9898",permalink:"/zh-CN/docs/user_docs/support/install-error"}},p={},s=[{value:"1. Konfig \u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684 settings.yaml \u6587\u4ef6\u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f",id:"1-konfig-\u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684-settingsyaml-\u6587\u4ef6\u7684\u4f5c\u7528\u662f\u4ec0\u4e48",level:3},{value:"2. \u5982\u4f55\u4f20\u5165\u52a8\u6001\u53c2\u6570\uff1f\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u83b7\u53d6\u547d\u4ee4\u884c\u4f20\u5165\u7684\u52a8\u6001\u53c2\u6570\uff1f",id:"2-\u5982\u4f55\u4f20\u5165\u52a8\u6001\u53c2\u6570\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u83b7\u53d6\u547d\u4ee4\u884c\u4f20\u5165\u7684\u52a8\u6001\u53c2\u6570",level:3},{value:"3. \u5982\u4f55\u4f7f\u7528 kcl \u7684\u591a\u6587\u4ef6\u7f16\u8bd1\u7279\u6027\uff1f",id:"3-\u5982\u4f55\u4f7f\u7528-kcl-\u7684\u591a\u6587\u4ef6\u7f16\u8bd1\u7279\u6027",level:3},{value:"4. Konfig \u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684 stack.yaml \u6587\u4ef6\u7684\u5b9a\u4f4d\u662f\u4ec0\u4e48\uff1f",id:"4-konfig-\u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684-stackyaml-\u6587\u4ef6\u7684\u5b9a\u4f4d\u662f\u4ec0\u4e48",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,r.kt)("h3",{id:"1-konfig-\u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684-settingsyaml-\u6587\u4ef6\u7684\u4f5c\u7528\u662f\u4ec0\u4e48"},"1. Konfig \u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684 settings.yaml \u6587\u4ef6\u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"KCL \u4e2d settings.yaml \u6587\u4ef6\u8868\u793a KCL \u547d\u4ee4\u884c\u5de5\u5177\u7684\u914d\u7f6e\u53c2\u6570\u6587\u4ef6\uff0c\u53ef\u4ee5\u5c06\u7f16\u8bd1\u7684\u914d\u7f6e\u653e\u5165\u5176\u4e2d\u8fdb\u884c\u8c03\u7528\u6bd4\u5982\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6\uff0c\u9700\u8981\u8f93\u5165\u7684 option \u52a8\u6001\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"-d"),"\uff0c\u662f\u5426\u9700\u8981\u5ffd\u7565\u6389\u7a7a\u503c None ",(0,r.kt)("inlineCode",{parentName:"p"},"-n")," \u7b49\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u5bf9\u4e8e\u5982\u4e0b\u7684\u547d\u4ee4\u884c\u8fd0\u884c\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kcl main.k -D key=value -n -r\n")),(0,r.kt)("p",null,"\u5c31\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u7684\u547d\u4ee4\u884c\u53c2\u6570\u548c settings.yaml \u914d\u7f6e\u6587\u4ef6\u4ee3\u66ff"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nkcl -Y settings.yaml\n")),(0,r.kt)("p",null,"settings.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - main.k\n  disable_none: true\n  strict_range_check: true\nkcl_options:\n  - key: key\n    value: value\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kcl_cli_configs")," \u8868\u793a\u53ef\u4ee5\u914d\u7f6e\u7684\u7f16\u8bd1\u53c2\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"file")," \u7528\u4e8e\u914d\u7f6e\u7f16\u8bd1\u7684 KCL \u6587\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"disable_none")," \u8868\u793a\u662f\u5426\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"-n")," \u53c2\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"strict_range_check")," \u8868\u793a\u662f\u5426\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"-r")," \u53c2\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kcl_options")," \u8868\u793a\u53ef\u4ee5\u914d\u7f6e\u7684\u52a8\u6001\u53c2\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"key")," \u8868\u793a\u52a8\u6001\u53c2\u6570\u7684\u540d\u79f0\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u8868\u793a\u52a8\u6001\u53c2\u6570\u7684\u503c")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1asettings.yaml \u7684\u6587\u4ef6\u540d\u79f0\u53ef\u66ff\u6362\uff0c\u53ea\u8981\u5176\u4e2d\u7684\u914d\u7f6e\u7ed3\u6784\u6ee1\u8db3\u89c4\u5b9a\u5373\u53ef"),(0,r.kt)("h3",{id:"2-\u5982\u4f55\u4f20\u5165\u52a8\u6001\u53c2\u6570\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u83b7\u53d6\u547d\u4ee4\u884c\u4f20\u5165\u7684\u52a8\u6001\u53c2\u6570"},"2. \u5982\u4f55\u4f20\u5165\u52a8\u6001\u53c2\u6570\uff1f\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u83b7\u53d6\u547d\u4ee4\u884c\u4f20\u5165\u7684\u52a8\u6001\u53c2\u6570\uff1f"),(0,r.kt)("p",null,"KCL \u652f\u6301\u591a\u79cd\u65b9\u5f0f\u4f20\u5165\u52a8\u6001\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-D"),": \u4f7f\u7528 KCL \u547d\u4ee4\u884c\u7684-D \u53c2\u6570\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u52a8\u6001\u53c2\u6570\uff0c\u652f\u6301\u57fa\u672c\u6570\u636e\u7c7b\u578b str/int/float/bool, \u4ee5\u53ca\u7ed3\u6784\u6570\u636e\u7c7b\u578b list/dict")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kcl main.k -D env-type=TEST -D deploy-topology=\'[{"cluster":"sigma-eu126-mybank-staging","idc":"cn-hangzhou-test-eu126","replicas":2,"workspace":"middlewarehzcloudsit","zone":"CellAEU126"}]\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-Y"),": \u4f7f\u7528 KCL \u547d\u4ee4\u884c\u7684-Y \u53c2\u6570\u53ef\u4ee5\u95f4\u63a5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u4f20\u5165\u52a8\u6001\u53c2\u6570:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_options:\n- key: env-type\n  value: TEST\n- key: deploy-topology\n  value:\n  - cluster: sigma-eu126-mybank-staging\n    idc: cn-hangzhou-test-eu126\n    replicas: 2\n    workspace: middlewarehzcloudsit\n    zone: CellAEU126\n")),(0,r.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u5185\u7f6e\u7684 option \u51fd\u6570\u83b7\u53d6\u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'env = option("env-type")\ndeploy_topology = option("deploy-topology")\n')),(0,r.kt)("p",null,"\u8f93\u51fa YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"env: TEST\ndeploy_topology:\n- cluster: sigma-eu126-mybank-staging\n  idc: cn-hangzhou-test-eu126\n  replicas: 2\n  workspace: middlewarehzcloudsit\n  zone: CellAEU126\n")),(0,r.kt)("h3",{id:"3-\u5982\u4f55\u4f7f\u7528-kcl-\u7684\u591a\u6587\u4ef6\u7f16\u8bd1\u7279\u6027"},"3. \u5982\u4f55\u4f7f\u7528 kcl \u7684\u591a\u6587\u4ef6\u7f16\u8bd1\u7279\u6027\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KCL \u547d\u4ee4\u884c\u5de5\u5177\u76f4\u63a5\u4e66\u5199\u591a\u6587\u4ef6\u7f16\u8bd1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kcl file1.k file2.k file3.k\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u5e76\u914d\u5408 KCL \u547d\u4ee4\u884c\u5de5\u5177\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"-Y")," \u4f7f\u7528")),(0,r.kt)("p",null,"settings.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - file1.k\n    - file2.k\n    - file3.k\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kcl -Y settings.yaml\n")),(0,r.kt)("h3",{id:"4-konfig-\u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684-stackyaml-\u6587\u4ef6\u7684\u5b9a\u4f4d\u662f\u4ec0\u4e48"},"4. Konfig \u5927\u5e93\u5e94\u7528\u76ee\u5f55\u4e0b\u7684 stack.yaml \u6587\u4ef6\u7684\u5b9a\u4f4d\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"Stack \u662f\u9879\u76ee\u4e2d\u7684\u4e00\u4e2a\u9694\u79bb\u7684\u903b\u8f91\u5de5\u4f5c\u533a\u3002Stack \u552f\u4e00\u5730\u5c5e\u4e8e\u4e00\u4e2a\u5f00\u53d1\u7ec4\uff0c\u4f8b\u5982 Web \u9879\u76ee\u4e2d\u7684\u524d\u7aef\u5f00\u53d1\u7ec4\uff0c\u5e76\u4e14\u552f\u4e00\u8868\u793a\u7279\u5b9a\u7684\u5f00\u53d1\u9636\u6bb5\uff0c\u4f8b\u5982\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u751f\u4ea7\u3002\u4ece\u5f00\u53d1\u7684\u89d2\u5ea6\u770b\uff0cStack \u662f Kusion \u9879\u76ee\u7684\u57fa\u672c\u914d\u7f6e\u5355\u5143\u3002\u4ece\u6267\u884c\u7684\u89d2\u5ea6\u6765\u770b\uff0cKCL \u4ee3\u7801\u5355\u5143\u88ab\u90e8\u7f72\u5230\u4e00\u4e2a Stack \u4e2d\u3002"))}u.isMDXComponent=!0}}]);
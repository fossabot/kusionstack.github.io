"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),k=p(n),m=i,d=k["".concat(c,".").concat(m)]||k[m]||s[m]||r;return n?l.createElement(d,o(o({ref:t},u),{},{components:n})):l.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));const r={sidebar_position:3},o="Lint Check",a={unversionedId:"reference/cli/kcl/lint",id:"reference/cli/kcl/lint",title:"Lint Check",description:"KCL supports checking KCL code style through built-in command line tool and supports multiple output formats. This document shows how to use the KCL Lint tool.",source:"@site/docs/reference/cli/kcl/lint.md",sourceDirName:"reference/cli/kcl",slug:"/reference/cli/kcl/lint",permalink:"/docs/reference/cli/kcl/lint",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kcl/lint.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1663817930,formattedLastUpdatedAt:"9/22/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reference",previous:{title:"Format",permalink:"/docs/reference/cli/kcl/fmt"},next:{title:"Validation Code",permalink:"/docs/reference/cli/kcl/vet"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Project Struct",id:"project-struct",level:3},{value:"KCL Lint Tool",id:"kcl-lint-tool",level:2},{value:"Args",id:"args",level:3},{value:"Lint Configuration",id:"lint-configuration",level:3},{value:"Priority",id:"priority",level:4},{value:".kcllint",id:"kcllint",level:4},{value:"Error Code",id:"error-code",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lint-check"},"Lint Check"),(0,i.kt)("p",null,"KCL supports checking KCL code style through built-in command line tool and supports multiple output formats. This document shows how to use the KCL Lint tool."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"project-struct"},"Project Struct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},".\n\u2514\u2500\u2500 Test\n    \u2514\u2500\u2500 kcl.mod\n    \u2514\u2500\u2500 .kcllint\n    \u2514\u2500\u2500 a.k\n    \u2514\u2500\u2500 b.k\n    \u2514\u2500\u2500 dir\n        \u2514\u2500\u2500 c.k\n    \u2514\u2500\u2500 test.k\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".kcllint")," is the configuration file of lint. It is optional. ",(0,i.kt)("inlineCode",{parentName:"p"},"a.k"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b.k"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"c.k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test.k")," are the kcl file to be checked."),(0,i.kt)("p",null,"Args\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint your_config.k\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint your_config_path\n")),(0,i.kt)("p",null,"lint configuration file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint --config abspath/.kcllint your_config.k\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"/Users/../test.k:12:1: E0501 line too long (122 > 120 characters)\n# line too long, line too long, line too long, line too long, line too long, line too long, line too long, line too long,\n^\n\n/Users/../test.k:14:1: E0413 Import b should be placed at the top of the module\nimport b\n^\n\n\nCheck total 1 files:\n1       E0413: ImportStmt is not at the top of the file\n1       E0501: Line too long\nKCL Lint: 2 problems\n")),(0,i.kt)("h2",{id:"kcl-lint-tool"},"KCL Lint Tool"),(0,i.kt)("h3",{id:"args"},"Args"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"usage: kcl-lint [-h] [--config file] [file]\n\npositional arguments:\n  file           KCL file path\n\noptional arguments:\n  -h, --help     show this help message and exit\n  --config file  KCL lint config path\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--config : path of ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")),(0,i.kt)("li",{parentName:"ul"},"file: the path of a single ",(0,i.kt)("inlineCode",{parentName:"li"},"*.k")," file or directory to be checked. Support the absolute path or relative path of the current directory.")),(0,i.kt)("h3",{id:"lint-configuration"},"Lint Configuration"),(0,i.kt)("h4",{id:"priority"},"Priority"),(0,i.kt)("p",null,"The priority of Lint's configuration is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")," set in CLI Args"),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")," under directory of checked ",(0,i.kt)("inlineCode",{parentName:"li"},".k")," file or checked directory"),(0,i.kt)("li",{parentName:"ol"},"default configuration")),(0,i.kt)("h4",{id:"kcllint"},".kcllint"),(0,i.kt)("p",null,"The file ",(0,i.kt)("inlineCode",{parentName:"p"},".kcllint")," is written in YAML. Its contents include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check_list: kinds of checks, including ",(0,i.kt)("inlineCode",{parentName:"li"},'"import"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"misc"')),(0,i.kt)("li",{parentName:"ul"},"ignore: ignored check items. See the ",(0,i.kt)("inlineCode",{parentName:"li"},"Error Code")," for optional items."),(0,i.kt)("li",{parentName:"ul"},"max_line_length: the parameter of check, that is, the maximum length of code"),(0,i.kt)("li",{parentName:"ul"},"output: output streams and formats, including ",(0,i.kt)("inlineCode",{parentName:"li"},'"stdout"'),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},'"file"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"sarif"')),(0,i.kt)("li",{parentName:"ul"},"output_path: The path of output file. It is optional, but it is required when the ",(0,i.kt)("inlineCode",{parentName:"li"},"output")," set as ",(0,i.kt)("inlineCode",{parentName:"li"},'"file"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"sarif"'))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'check_list: ["import","misc"]\nignore: ["E0501"]\nmax_line_length: 120\noutput: ["stdout"]\noutput_path:\n')),(0,i.kt)("p",null,"Default Configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'check_list: ["import", "misc"]\nignore": []\nmax_line_length: 200\noutput: ["stdout"]\n')),(0,i.kt)("h3",{id:"error-code"},"Error Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"import_checker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E0401: Unable to import."),(0,i.kt)("li",{parentName:"ul"},"W0401: Reimport."),(0,i.kt)("li",{parentName:"ul"},"E0406: Module import itself."),(0,i.kt)("li",{parentName:"ul"},"W0411: Import but unused."),(0,i.kt)("li",{parentName:"ul"},"E0413: ImportStmt is not at the top of the file"))),(0,i.kt)("li",{parentName:"ul"},"misc_checker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E0501: Line too long")))))}s.isMDXComponent=!0}}]);
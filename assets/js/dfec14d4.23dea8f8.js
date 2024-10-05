"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,f=c["".concat(m,".").concat(u)]||c[u]||d[u]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},i="inference",o={unversionedId:"reference/modules/workspace-configs/inference/inference",id:"version-v0.13/reference/modules/workspace-configs/inference/inference",title:"inference",description:"Index",source:"@site/docs_versioned_docs/version-v0.13/6-reference/2-modules/2-workspace-configs/inference/inference.md",sourceDirName:"6-reference/2-modules/2-workspace-configs/inference",slug:"/reference/modules/workspace-configs/inference/",permalink:"/docs/reference/modules/workspace-configs/inference/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/6-reference/2-modules/2-workspace-configs/inference/inference.md",tags:[],version:"v0.13",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"Oct 5, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"postgres",permalink:"/docs/reference/modules/workspace-configs/database/postgres"},next:{title:"k8s_manifest",permalink:"/docs/reference/modules/workspace-configs/k8s_manifest/"}},m={},s=[{value:"Index",id:"index",level:2},{value:"Schemas",id:"schemas",level:2},{value:"Inference",id:"inference-1",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Examples",id:"examples",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inference"},"inference"),(0,a.kt)("h2",{id:"index"},"Index"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#inference"},"Inference"))))),(0,a.kt)("h2",{id:"schemas"},"Schemas"),(0,a.kt)("h3",{id:"inference-1"},"Inference"),(0,a.kt)("p",null,"Inference is a module schema consisting of model, framework and so on"),(0,a.kt)("h4",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"framework")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},'"Ollama"'),(0,a.kt)("td",{parentName:"tr",align:null},'"KubeRay"'),(0,a.kt)("td",{parentName:"tr",align:null},"The framework or environment in which the model operates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"model")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"The model name to be used for inference."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"num_ctx")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The size of the context window used to generate the next token."),(0,a.kt)("td",{parentName:"tr",align:null},"2048")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"num_predict")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum number of tokens to predict when generating text."),(0,a.kt)("td",{parentName:"tr",align:null},"128")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"system")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"The system message, which will be set in the template."),(0,a.kt)("td",{parentName:"tr",align:null},'""')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"temperature")),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"A parameter determines whether the model's output is more random and creative or more predictable."),(0,a.kt)("td",{parentName:"tr",align:null},"0.8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"template")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"The full prompt template, which will be sent to the model."),(0,a.kt)("td",{parentName:"tr",align:null},'""')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"top_k")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"A higher value (e.g. 100) will give more diverse answers, while a lower value (e.g. 10) will be more conservative."),(0,a.kt)("td",{parentName:"tr",align:null},"40")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"top_p")),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"A higher value (e.g. 0.9) will give more diverse answers, while a lower value (e.g. 0.5) will be more conservative."),(0,a.kt)("td",{parentName:"tr",align:null},"0.9")))),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import inference.v1.infer\n\naccessories: {\n    "inference@v0.1.0": infer.Inference {\n        model: "llama3"\n        framework: "Ollama"\n\n        system: "You are Mario from super mario bros, acting as an assistant."\n        template: "{{ if .System }}<|im_start|>system {{ .System }}<|im_end|> {{ end }}{{ if .Prompt }}<|im_start|>user {{ .Prompt }}<|im_end|> {{ end }}<|im_start|>assistant"\n\n        top_k: 40\n        top_p: 0.9\n        temperature: 0.8\n\n        num_predict: 128\n        num_ctx: 2048\n    }\n}\n')))}d.isMDXComponent=!0}}]);
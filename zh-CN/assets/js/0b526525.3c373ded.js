"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:4},c="Validation \u6821\u9a8c\u4ee3\u7801",i={unversionedId:"reference/cli/kcl/vet",id:"reference/cli/kcl/vet",title:"Validation \u6821\u9a8c\u4ee3\u7801",description:"\u7b80\u4ecb",source:"@site/docs/reference/cli/kcl/vet.md",sourceDirName:"reference/cli/kcl",slug:"/reference/cli/kcl/vet",permalink:"/zh-CN/docs/reference/cli/kcl/vet",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kcl/vet.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663313028,formattedLastUpdatedAt:"2022/9/16",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"reference",previous:{title:"Lint \u68c0\u67e5\u4ee3\u7801\u98ce\u683c",permalink:"/zh-CN/docs/reference/cli/kcl/lint"},next:{title:"\u6587\u6863\u751f\u6210\u5de5\u5177",permalink:"/zh-CN/docs/reference/cli/kcl/docgen"}},o={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u6307\u5b9a\u6821\u9a8c\u7684 schema",id:"\u6307\u5b9a\u6821\u9a8c\u7684-schema",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validation-\u6821\u9a8c\u4ee3\u7801"},"Validation \u6821\u9a8c\u4ee3\u7801"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl-vet")," \u547d\u4ee4\u884c\u5de5\u5177\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u914d\u7f6e\u6570\u636e\u6821\u9a8c\u80fd\u529b\uff0c\u53ef\u4ee5\u7f16\u5199 KCL schema \u5bf9\u8f93\u5165\u7684 JSON/YAML \u683c\u5f0f\u6587\u4ef6\u8fdb\u884c\u7c7b\u578b\u4ee5\u53ca\u6570\u503c\u7684\u6821\u9a8c\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"\u5047\u8bbe\u6709 data.json \u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Alice",\n    "age": "18",\n    "message": "This is Alice",\n    "data": {\n        "id": "1",\n        "value": "value1"\n    },\n    "labels": {\n        "key": "value"\n    },\n    "hc": [1, 2, 3]\n}\n')),(0,a.kt)("p",null,"\u6784\u9020 schema.k \u6821\u9a8c\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n        \n    check:\n        age > 10\n\nschema Data:\n    id: int\n    value: str\n")),(0,a.kt)("p",null,"\u5728\u76ee\u5f55\u4e0b\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kcl-vet data.json schema.k\nValidate succuss!\n")),(0,a.kt)("h2",{id:"\u6307\u5b9a\u6821\u9a8c\u7684-schema"},"\u6307\u5b9a\u6821\u9a8c\u7684 schema"),(0,a.kt)("p",null,"\u5f53\u6559\u7814\u7684 KCL \u6587\u4ef6\u4e2d\u5b58\u5728\u591a\u4e2a schema \u5b9a\u4e49\u65f6\uff0ckcl-vet \u5de5\u5177\u4f1a\u9ed8\u8ba4\u53d6\u7b2c\u4e00\u4e2a schema \u5b9a\u4e49\u8fdb\u884c\u6821\u9a8c\uff0c\u5982\u679c\u9700\u8981\u6307\u5b9a\u6821\u9a8c\u7684 schema\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-d|--schema")," \u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$kcl-vet data.json schema.k -d User\n")),(0,a.kt)("h2",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kcl-vet -h\nusage: kcl-vet [-h] [-d schema] [--format format] [-n attribute_name]\n               data_file kcl_file\n\npositional arguments:\n  data_file             Validation data file\n  kcl_file              KCL file\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -d schema, --schema schema\n  --format format       Validation data file format, support YAML and JSON\n  -n attribute_name, --attribute-name attribute_name\n")))}u.isMDXComponent=!0}}]);
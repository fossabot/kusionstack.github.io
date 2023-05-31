"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},p="OpenAPI to KCL",i={unversionedId:"reference/cli/openapi/openapi-to-kcl",id:"reference/cli/openapi/openapi-to-kcl",title:"OpenAPI to KCL",description:"To convert from models defined in the OpenAPI spec file to KCL schema, we could run the following script:",source:"@site/docs/reference/cli/openapi/openapi-to-kcl.md",sourceDirName:"reference/cli/openapi",slug:"/reference/cli/openapi/openapi-to-kcl",permalink:"/docs/reference/cli/openapi/openapi-to-kcl",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/openapi/openapi-to-kcl.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685526885,formattedLastUpdatedAt:"5/31/2023",frontMatter:{},sidebar:"reference",previous:{title:"CRD to KCL",permalink:"/docs/reference/cli/openapi/crd-to-kcl"},next:{title:"KCL OpenAPI Spec",permalink:"/docs/reference/cli/openapi/spec"}},l={},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openapi-to-kcl"},"OpenAPI to KCL"),(0,a.kt)("p",null,"To convert from models defined in the OpenAPI spec file to KCL schema, we could run the following script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f ${your_open_api_spec.yaml} -t ${the_kcl_files_output_dir}\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is the OpenAPI spec file that we need to convert: ",(0,a.kt)("inlineCode",{parentName:"p"},"test_open_api_spec.yaml")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  v1.TestInt:\n    type: object\n    properties:\n      name:\n        type: string\n        format: int-or-string\n    required:\n      - name\n    x-kcl-type:\n      import:\n        package: v1.test_int\n        alias: test_int\n      type: TestInt\nswagger: "2.0"\ninfo:\n  title: Kusion\n  version: v0.0.2\npaths: {}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The script will be:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f test_open_api_spec.yaml -t ~/\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then we can find the generated file here: ",(0,a.kt)("inlineCode",{parentName:"p"},"~/models/v1/test_int.k")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis is the test_int module in v1 package.\namytestThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\n')))),(0,a.kt)("p",null,'  schema TestInt:\n"""v1 test int\n"""'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  name: int | str\n  """name\n  """\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}m.isMDXComponent=!0}}]);
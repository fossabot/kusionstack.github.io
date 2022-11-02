"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6921],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:1},l="Introduction",o={unversionedId:"reference/lang/xlang-api/overview",id:"reference/lang/xlang-api/overview",title:"Introduction",description:"The KCL language provides general programming language interfaces such as C/Rust/Go/Python/Java, and the related languages are under development.",source:"@site/docs/reference/lang/xlang-api/overview.md",sourceDirName:"reference/lang/xlang-api",slug:"/reference/lang/xlang-api/overview",permalink:"/docs/reference/lang/xlang-api/overview",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/xlang-api/overview.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1667394044,formattedLastUpdatedAt:"11/2/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"Multi-Language",permalink:"/docs/reference/lang/xlang-api/"},next:{title:"Rest API",permalink:"/docs/reference/lang/xlang-api/rest-api"}},s={},p=[{value:"1. C/Rust API",id:"1-crust-api",level:2},{value:"2. Go API",id:"2-go-api",level:2},{value:"2.1. Abstract Model",id:"21-abstract-model",level:3},{value:"2.2. Example",id:"22-example",level:3},{value:"3. REST-API",id:"3-rest-api",level:2},{value:"3.1. Start REST Service",id:"31-start-rest-service",level:3},{value:"3.2. <code>BuiltinService</code>",id:"32-builtinservice",level:3},{value:"3.3. <code>KclvmService</code>",id:"33-kclvmservice",level:3},{value:"4. APIs in other languages",id:"4-apis-in-other-languages",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The KCL language provides general programming language interfaces such as C/Rust/Go/Python/Java, and the related languages are under development."),(0,r.kt)("h2",{id:"1-crust-api"},"1. C/Rust API"),(0,r.kt)("p",null,"The core of KCL is developed in Rust, and the C language API is exported externally for packaging and integration in high-level languages such as Go/Python/Java."),(0,r.kt)("h2",{id:"2-go-api"},"2. Go API"),(0,r.kt)("p",null,"Go API is a C-API provided by CGO wrapping KCL, while providing deeper customization features to meet the needs of upper-level tools such as Kusion Engine."),(0,r.kt)("h3",{id:"21-abstract-model"},"2.1. Abstract Model"),(0,r.kt)("p",null,"The abstract model of the KCL Go API is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     kcl files   \u2502         \u2502   KCLVM-Go-API  \u2502           \u2502  KCLResultList  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2502    1.k    \u2502  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("a.b.c") \u2502\n\u2502  \u2502    2.k    \u2502  \u2502         \u2502  \u2502 Run(path) \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\u2500\u2500\u2500\u2500\u2510    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502    3.k    \u2502  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("k", &v) \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u251c\u2500\u2500\u2500\u25b6\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502                 \u2502\n\u2502  \u2502setting.yml\u2502  \u2502    \u2502    \u2502  \u2502RunFiles() \u2502  \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.JSONString() \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                       \u2502    \u2502                 \u2502           \u2502                 \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     Options     \u2502    \u2502    \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.YAMLString() \u2502\n\u2502WithOptions      \u2502    \u2502    \u2502  \u2502MustRun()  \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502WithOverrides    \u2502\u2500\u2500\u2500\u2500\u2518    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502WithWorkDir      \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502WithDisableNone  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,r.kt)("p",null,"The input file contains the KCL file and the ",(0,r.kt)("inlineCode",{parentName:"p"},"setting.yml")," configuration file, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Options"),' can be used to specify additional parameters and information such as working directory. The "KCLVM-Go-API" part is the provided KCLVM execution function. The execution function executes the KCL program according to the input file and additional parameters, and finally outputs the result of ',(0,r.kt)("inlineCode",{parentName:"p"},"KCLResultList"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"KCLResultList")," is a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"KCLResult"),", each ",(0,r.kt)("inlineCode",{parentName:"p"},"KCLResult")," corresponding to a generated configuration file or ",(0,r.kt)("inlineCode",{parentName:"p"},"map[string]interface{}"),"."),(0,r.kt)("h3",{id:"22-example"},"2.2. Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "kusionstack.io/kclvm-go/api/kcl"\n)\n\n\nfunc main() {\n    const k_code = `\nimport kcl_plugin.hello\n\nname = "kcl"\nage = 1\n\ntwo = hello.add(1, 1)\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person{}\nx1 = Person{age:101}\n`\n\n    result := kcl.MustRun("hello.k", kcl.WithCode(k_code)).First()\n    fmt.Println(result.YAMLString())\n\n    fmt.Println("----")\n    fmt.Println("x0.name:", result.Get("x0.name"))\n    fmt.Println("x1.age:", result.Get("x1.age"))\n\n    fmt.Println("----")\n\n    var person struct {\n        Name string\n        Age  int\n    }\n    fmt.Printf("person: %+v\\n", result.Get("x1", &person))\n}\n')),(0,r.kt)("p",null,"Output result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"age: 1\nname: kcl\ntwo: 2\nx0:\n    age: 1\n    name: kcl\nx1:\n    age: 101\n    name: kcl\n\n----\nx0.name: kcl\nx1.age: 101\n----\nperson: &{Name:kcl Age:101}\n")),(0,r.kt)("h2",{id:"3-rest-api"},"3. REST-API"),(0,r.kt)("p",null,"The C-API provided by KCL does not have a REST-API. The REST-API is defined by Protobuf and is finally implemented by the upper-layer Go-SDK."),(0,r.kt)("h3",{id:"31-start-rest-service"},"3.1. Start REST Service"),(0,r.kt)("p",null,"The RestAPI service can be started in the following ways:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kcl-go rest-server -http=:2021\n")),(0,r.kt)("p",null,"The service can then be requested via the POST protocol:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST http://127.0.0.1:2021/api:protorpc/BuiltinService.Ping --data \'{}\'\n{\n    "error": "",\n    "result": {}\n}\n')),(0,r.kt)("p",null,"The POST request and the returned JSON data are consistent with the structure defined by Protobuf."),(0,r.kt)("h3",{id:"32-builtinservice"},"3.2. ",(0,r.kt)("inlineCode",{parentName:"h3"},"BuiltinService")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api:protorpc/BuiltinService.Ping")," path represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ping")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BuiltinService")," service."),(0,r.kt)("p",null,"The complete ",(0,r.kt)("inlineCode",{parentName:"p"},"BuiltinService")," is defined by Protobuf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"service BuiltinService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n    rpc ListMethod(ListMethod_Args) returns(ListMethod_Result);\n}\n\nmessage Ping_Args {\n    string value = 1;\n}\nmessage Ping_Result {\n    string value = 1;\n}\n\nmessage ListMethod_Args {\n    // empty\n}\nmessage ListMethod_Result {\n    repeated string method_name_list = 1;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Ping")," method can verify whether the service is normal, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ListMethod")," method can query the list of all services and functions provided."),(0,r.kt)("h3",{id:"33-kclvmservice"},"3.3. ",(0,r.kt)("inlineCode",{parentName:"h3"},"KclvmService")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"KclvmService")," service is a service related to KCLVM functionality. The usage is the same as the ",(0,r.kt)("inlineCode",{parentName:"p"},"BuiltinService")," service."),(0,r.kt)("p",null,"For example, there is the following ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," structure definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"schema Person:\n    key: str\n\n    check:\n        \"value\" in key  # 'key' is required and 'key' must contain \"value\"\n")),(0,r.kt)("p",null,"Then we want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," to verify the following JSON data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"key": "value"}\n')),(0,r.kt)("p",null,"This can be done through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateCode")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KclvmService")," service. Refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateCode")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ValidateCode_Args {\n    string data = 1;\n    string code = 2;\n    string schema = 3;\n    string attribute_name = 4;\n    string format = 5;\n}\n")),(0,r.kt)("p",null,"Construct the JSON data required by the POST request according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," structure, which contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," definition and the JSON data to be verified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "\\nschema Person:\\n    key: str\\n\\n    check:\\n        \\"value\\" in key  # \'key\' is required and \'key\' must contain \\"value\\"\\n",\n    "data": "{\\"attr_name\\": {\\"key\\": \\"value\\"}}"\n}\n')),(0,r.kt)("p",null,"Save this JSON data to the ",(0,r.kt)("inlineCode",{parentName:"p"},"vet-hello.json")," file and verify it with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST \\\n        http://127.0.0.1:2021/api:protorpc/KclvmService.ValidateCode \\\n        -H  "accept: application/json" \\\n        --data @./vet-hello.json\n{\n    "error": "",\n    "result": {\n        "success": true\n    }\n}\n')),(0,r.kt)("h2",{id:"4-apis-in-other-languages"},"4. APIs in other languages"),(0,r.kt)("p",null,"Coming soon"))}u.isMDXComponent=!0}}]);
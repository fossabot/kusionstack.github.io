"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={id:"kcl-basics"},r="KCL Basics",l={unversionedId:"configuration-walkthrough/kcl-basics",id:"version-v0.11/configuration-walkthrough/kcl-basics",title:"KCL Basics",description:"Table of Content",source:"@site/docs_versioned_docs/version-v0.11/4-configuration-walkthrough/2-kcl-basics.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/kcl-basics",permalink:"/zh/docs/v0.11/configuration-walkthrough/kcl-basics",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/4-configuration-walkthrough/2-kcl-basics.md",tags:[],version:"v0.11",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1724060961,formattedLastUpdatedAt:"2024\u5e748\u670819\u65e5",sidebarPosition:2,frontMatter:{id:"kcl-basics"},sidebar:"kusion",previous:{title:"Configuration File Overview",permalink:"/zh/docs/v0.11/configuration-walkthrough/overview"},next:{title:"Base and Override",permalink:"/zh/docs/v0.11/configuration-walkthrough/base-override"}},s={},p=[{value:"Table of Content",id:"table-of-content",level:2},{value:"Variable assignments",id:"variable-assignments",level:2},{value:"Common built-in types",id:"common-built-in-types",level:2},{value:"Lists and maps",id:"lists-and-maps",level:2},{value:"Conditional statements",id:"conditional-statements",level:2},{value:"The <code>:</code> and <code>=</code> operator",id:"the--and--operator",level:2},{value:"Advanced KCL capabilities",id:"advanced-kcl-capabilities",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kcl-basics"},"KCL Basics"),(0,i.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#variable-assignments"},"Variable assignments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#common-built-in-types"},"Common built-in types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lists-and-maps"},"Lists and maps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#conditional-statements"},"Conditional statements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the--and--operator"},"The : and = operator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#advanced-kcl-capabilities"},"Advanced KCL capabilities"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL")," is the choice of configuration language consumed by Kusion. KCL is an open source constraint-based record and functional language. KCL works well with a large number of complex configurations via modern programming language technology and practice, and is committed to provide better modularity, scalability, stability and extensibility."),(0,i.kt)("h2",{id:"variable-assignments"},"Variable assignments"),(0,i.kt)("p",null,"There are two ways to initialize a variable in KCL. You can either use the ",(0,i.kt)("inlineCode",{parentName:"p"},":")," operator or the ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," operator. We will discuss the difference between them in ",(0,i.kt)("a",{parentName:"p",href:"#the--and--operator"},"this section later"),"."),(0,i.kt)("p",null,"Here are the two ways to create a variable and initialize it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'foo = "Foo"  # Declare a variable named `foo` and its value is a string literal "Foo"\nbar: "Bar"  # Declare a variable named `bar` and its value is a string literal "Bar"\n')),(0,i.kt)("p",null,"You will be able to override a variable assignment via the ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," operator. We will discuss this in depth in the ",(0,i.kt)("a",{parentName:"p",href:"#the--and--operator"},(0,i.kt)("inlineCode",{parentName:"a"},":")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"=")," operator section"),"."),(0,i.kt)("h2",{id:"common-built-in-types"},"Common built-in types"),(0,i.kt)("p",null,"KCL supports ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," as the built-in types."),(0,i.kt)("p",null,"Other types are defined in the packages that are imported into the application configuration files. One such example would be the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," object (or ",(0,i.kt)("inlineCode",{parentName:"p"},"Container"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Probe"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Port")," object, etc) that are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kam")," repository."),(0,i.kt)("h2",{id:"lists-and-maps"},"Lists and maps"),(0,i.kt)("p",null,"Lists are represented using the ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," notation.\nAn example of lists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list0 = [1, 2, 3]\nlist1 = [4, 5, 6]\njoined_list = list0 + list1  # [1, 2, 3, 4, 5, 6]\n")),(0,i.kt)("p",null,"Maps are represented using the ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," notation.\nAn example of maps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"a = {\"one\" = 1, \"two\" = 2, \"three\" = 3}\nb = {'one' = 1, 'two' = 2, 'three' = 3}\nassert a == b # True\nassert len(a) == 3 # True\n")),(0,i.kt)("h2",{id:"conditional-statements"},"Conditional statements"),(0,i.kt)("p",null,"You can also use basic control flow statements when writing the configuration file."),(0,i.kt)("p",null,"An example that sets the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," conditionally based on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"containers.myapp.resources.cpu"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport kam.v1.workload as wl\nimport kam.v1.workload.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "<no value>"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1 if containers.myapp.resources.cpu == "500m" else 2\n    }\n}\n')),(0,i.kt)("p",null,"For more details on KCL's control flow statements, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/lang/tour#control-flow-statements"},"KCL documentation"),"."),(0,i.kt)("h2",{id:"the--and--operator"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},":")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"=")," operator"),(0,i.kt)("p",null,"You might have noticed there is a mixed usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},":")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," in the samples above."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"TLDR: The recommendation is to use ",(0,i.kt)("inlineCode",{parentName:"strong"},":")," in the common configurations, and ",(0,i.kt)("inlineCode",{parentName:"strong"},"=")," for override in the environment-specific configurations."))),(0,i.kt)("p",null,"In KCL:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":")," represents a union-ed value assignment. In the pattern ",(0,i.kt)("inlineCode",{parentName:"li"},"identifier: E")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"identifier: T E"),", the value of the expression ",(0,i.kt)("inlineCode",{parentName:"li"},"E")," with optional type annotation ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," will be merged and union-ed into the element value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=")," represents a value override. In the pattern ",(0,i.kt)("inlineCode",{parentName:"li"},"identifier = E")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"identifier = T E"),", The value of the expression ",(0,i.kt)("inlineCode",{parentName:"li"},"E")," with optional type annotation ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," will override the ",(0,i.kt)("inlineCode",{parentName:"li"},"identifier")," attribute value.")),(0,i.kt)("p",null,"Let's take a look at an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# This is one configuration that will be merged.\nconfig: Config {\n    data.d1 = 1\n}\n# This is another configuration that will be merged.\nconfig: Config {\n    data.d2 = 2\n}\n")),(0,i.kt)("p",null,"The above is equivalent to the snippet below since the two expressions for ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," get merged/union-ed into one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"config: Config {\n    data.d1 = 1\n    data.d2 = 1\n}\n")),(0,i.kt)("p",null,"whereas using the ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," operators will result in a different outcome:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# This is first configuration.\nconfig = Config {\n    data.d1 = 1\n}\n# This is second configuration that will override the prior one.\nconfig = Config {\n    data.d2 = 2\n}\n")),(0,i.kt)("p",null,"The config above results in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"config: Config {\n    data.d2 = 2\n}\n")),(0,i.kt)("p",null,"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},":")," attribute operator represents an idempotent merge operation, and an error will be thrown when the values that need to be merged conflict with each other."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"data0 = {id: 1} | {id: 2}  # Error\uff1aconflicting values between {'id': 2} and {'id': 1}\ndata1 = {id: 1} | {id = 2}  # Ok, the value of `data` is {\"id\": 2}\n")),(0,i.kt)("p",null,"More about ",(0,i.kt)("inlineCode",{parentName:"p"},":")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," operator can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/lang/tour#config-operations"},"KCL documentation"),"."),(0,i.kt)("h2",{id:"advanced-kcl-capabilities"},"Advanced KCL capabilities"),(0,i.kt)("p",null,"For more advanced KCL capabilities, please visit the ",(0,i.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/support/faq-kcl"},"KCL website"),"."))}c.isMDXComponent=!0}}]);
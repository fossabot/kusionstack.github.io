"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2237],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(a),k=r,u=c["".concat(i,".").concat(k)]||c[k]||d[k]||m;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,o=new Array(m);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<m;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},54300:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(87462),r=a(63366),m=(a(67294),a(3905)),o=["components"],s={},i="container",l={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_container",id:"reference/model/kusion_kubernetes/api/core/v1/doc_container",title:"container",description:"Source: base/pkg/kusionkubernetes/api/core/v1/container.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_container",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1662640562,formattedLastUpdatedAt:"2022/9/8",frontMatter:{},sidebar:"reference",previous:{title:"config_map_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_config_map_volume_source"},next:{title:"container_port",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container_port"}},p={},d=[{value:"Schema Container",id:"schema-container",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,m.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"container"},"container"),(0,m.kt)("p",null,"Source: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/container.k"},"base/pkg/kusion_kubernetes/api/core/v1/container.k")),(0,m.kt)("p",null,"This is the container module in kusion","_","kubernetes.api.core.v1 package.",(0,m.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,m.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,m.kt)("h2",{id:"schema-container"},"Schema Container"),(0,m.kt)("p",null,"A single application container that you want to run within a pod."),(0,m.kt)("h3",{id:"attributes"},"Attributes"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,m.kt)("th",{parentName:"tr",align:null},"Type"),(0,m.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,m.kt)("th",{parentName:"tr",align:null},"Required"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"args"),(0,m.kt)("br",null),"Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references ",(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 155: \u2026hanged. Double $\u0332",style:{color:"#cc0000"}},"(VAR\\_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $"))," are reduced to a single ",(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 33: \u2026r escaping the $\u0332(VAR\\_NAME) syn\u2026",style:{color:"#cc0000"}},', which allows for escaping the $(VAR\\_NAME) syntax: i.e. "')),(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"N"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"M"),(0,m.kt)("mi",{parentName:"mrow"},"E"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"'),(0,m.kt)("mi",{parentName:"mrow"},"w"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"')),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},'(VAR\\_NAME)" will produce the string literal "')))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,m.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"ME"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord"},'"'),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"llp"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ro"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord"},'"'))))),"(VAR","_",'NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: ',(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/%5C#running-a-command-in-a-shell"},"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/\\#running-a-command-in-a-shell")),(0,m.kt)("td",{parentName:"tr",align:null},"[str]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"command"),(0,m.kt)("br",null),"Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references ",(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 155: \u2026hanged. Double $\u0332",style:{color:"#cc0000"}},"(VAR\\_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $"))," are reduced to a single ",(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 33: \u2026r escaping the $\u0332(VAR\\_NAME) syn\u2026",style:{color:"#cc0000"}},', which allows for escaping the $(VAR\\_NAME) syntax: i.e. "')),(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"N"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"M"),(0,m.kt)("mi",{parentName:"mrow"},"E"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"'),(0,m.kt)("mi",{parentName:"mrow"},"w"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"')),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},'(VAR\\_NAME)" will produce the string literal "')))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,m.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"ME"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord"},'"'),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"llp"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ro"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord"},'"'))))),"(VAR","_",'NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: ',(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/%5C#running-a-command-in-a-shell"},"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/\\#running-a-command-in-a-shell")),(0,m.kt)("td",{parentName:"tr",align:null},"[str]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"env"),(0,m.kt)("br",null),"List of environment variables to set in the container. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_env_var#schema-envvar"},"v1.EnvVar"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"envFrom"),(0,m.kt)("br",null),"List of sources to populate environment variables in the container. The keys defined within a source must be a C","_","IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_env_from_source#schema-envfromsource"},"v1.EnvFromSource"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"image"),(0,m.kt)("br",null),"Docker image name. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images"},"https://kubernetes.io/docs/concepts/containers/images")," This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"imagePullPolicy"),(0,m.kt)("br",null),"Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images%5C#updating-images"},"https://kubernetes.io/docs/concepts/containers/images\\#updating-images")),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"name"),(0,m.kt)("br",null),"Name of the container specified as a DNS","_","LABEL. Each container in a pod must have a unique name (DNS","_","LABEL). Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"required"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"ports"),(0,m.kt)("br",null),'List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.'),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_container_port#schema-containerport"},"v1.ContainerPort"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"stdin"),(0,m.kt)("br",null),"Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false."),(0,m.kt)("td",{parentName:"tr",align:null},"bool"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"stdinOnce"),(0,m.kt)("br",null),"Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false"),(0,m.kt)("td",{parentName:"tr",align:null},"bool"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"terminationMessagePath"),(0,m.kt)("br",null),"Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"terminationMessagePolicy"),(0,m.kt)("br",null),"Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"tty"),(0,m.kt)("br",null),"Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false."),(0,m.kt)("td",{parentName:"tr",align:null},"bool"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"volumeDevices"),(0,m.kt)("br",null),"volumeDevices is the list of block devices to be used by the container."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_volume_device#schema-volumedevice"},"v1.VolumeDevice"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"volumeMounts"),(0,m.kt)("br",null),"Pod volumes to mount into the container's filesystem. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_volume_mount#schema-volumemount"},"v1.VolumeMount"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"workingDir"),(0,m.kt)("br",null),"Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"lifecycle"),(0,m.kt)("br",null),"Actions that the management system should take in response to container lifecycle events. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_lifecycle#schema-lifecycle"},"Lifecycle")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"livenessProbe"),(0,m.kt)("br",null),"Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle%5C#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle\\#container-probes")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"readinessProbe"),(0,m.kt)("br",null),"Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle%5C#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle\\#container-probes")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"resources"),(0,m.kt)("br",null),"Compute Resources required by this container. Cannot be updated. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_resource_requirements#schema-resourcerequirements"},"ResourceRequirements")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"securityContext"),(0,m.kt)("br",null),"SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"},"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_security_context#schema-securitycontext"},"SecurityContext")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"startupProbe"),(0,m.kt)("br",null),"StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle%5C#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle\\#container-probes")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")))))}k.isMDXComponent=!0}}]);
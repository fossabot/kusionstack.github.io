"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8419],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=i(a),k=r,N=c["".concat(s,".").concat(k)]||c[k]||d[k]||m;return a?n.createElement(N,l(l({ref:t},p),{},{components:a})):n.createElement(N,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,l=new Array(m);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<m;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43111:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var n=a(87462),r=a(63366),m=(a(67294),a(3905)),l=["components"],o={},s="ephemeral_container",i={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_ephemeral_container",id:"reference/model/kusion_kubernetes/api/core/v1/doc_ephemeral_container",title:"ephemeral_container",description:"Source: base/pkg/kusionkubernetes/api/core/v1/ephemeralcontainer.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_ephemeral_container.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_ephemeral_container",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_ephemeral_container",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_ephemeral_container.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1657596779,formattedLastUpdatedAt:"2022/7/12",frontMatter:{},sidebar:"reference",previous:{title:"env_var_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_env_var_source"},next:{title:"ephemeral_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_ephemeral_volume_source"}},p={},d=[{value:"Schema EphemeralContainer",id:"schema-ephemeralcontainer",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,m.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"ephemeral_container"},"ephemeral_container"),(0,m.kt)("p",null,"Source: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/ephemeral_container.k"},"base/pkg/kusion_kubernetes/api/core/v1/ephemeral_container.k")),(0,m.kt)("p",null,"This is the ephemeral","_","container module in kusion","_","kubernetes.api.core.v1 package.",(0,m.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,m.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,m.kt)("h2",{id:"schema-ephemeralcontainer"},"Schema EphemeralContainer"),(0,m.kt)("p",null,"An EphemeralContainer is a container that may be added temporarily to an existing pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a pod is removed or restarted. If an ephemeral container causes a pod to exceed its resource allocation, the pod may be evicted. Ephemeral containers may not be added by directly updating the pod spec. They must be added via the pod's ephemeralcontainers subresource, and they will appear in the pod spec once added. This is an alpha feature enabled by the EphemeralContainers feature flag."),(0,m.kt)("h3",{id:"attributes"},"Attributes"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,m.kt)("th",{parentName:"tr",align:null},"Type"),(0,m.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,m.kt)("th",{parentName:"tr",align:null},"Required"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"args"),(0,m.kt)("br",null),"Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references ",(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 155: \u2026hanged. Double $\u0332",style:{color:"#cc0000"}},"(VAR\\_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $"))," are reduced to a single ",(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 33: \u2026r escaping the $\u0332(VAR\\_NAME) syn\u2026",style:{color:"#cc0000"}},', which allows for escaping the $(VAR\\_NAME) syntax: i.e. "')),(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"N"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"M"),(0,m.kt)("mi",{parentName:"mrow"},"E"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"'),(0,m.kt)("mi",{parentName:"mrow"},"w"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"')),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},'(VAR\\_NAME)" will produce the string literal "')))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,m.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"ME"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord"},'"'),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"llp"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ro"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord"},'"'))))),"(VAR","_",'NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: ',(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/%5C#running-a-command-in-a-shell"},"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/\\#running-a-command-in-a-shell")),(0,m.kt)("td",{parentName:"tr",align:null},"[str]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"command"),(0,m.kt)("br",null),"Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references ",(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 155: \u2026hanged. Double $\u0332",style:{color:"#cc0000"}},"(VAR\\_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $"))," are reduced to a single ",(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 33: \u2026r escaping the $\u0332(VAR\\_NAME) syn\u2026",style:{color:"#cc0000"}},', which allows for escaping the $(VAR\\_NAME) syntax: i.e. "')),(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"N"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"M"),(0,m.kt)("mi",{parentName:"mrow"},"E"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"'),(0,m.kt)("mi",{parentName:"mrow"},"w"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},'"')),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},'(VAR\\_NAME)" will produce the string literal "')))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,m.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"ME"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord"},'"'),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"llp"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ro"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord"},'"'))))),"(VAR","_",'NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: ',(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/%5C#running-a-command-in-a-shell"},"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/\\#running-a-command-in-a-shell")),(0,m.kt)("td",{parentName:"tr",align:null},"[str]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"env"),(0,m.kt)("br",null),"List of environment variables to set in the container. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_env_var#schema-envvar"},"v1.EnvVar"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"envFrom"),(0,m.kt)("br",null),"List of sources to populate environment variables in the container. The keys defined within a source must be a C","_","IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_env_from_source#schema-envfromsource"},"v1.EnvFromSource"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"image"),(0,m.kt)("br",null),"Docker image name. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images"},"https://kubernetes.io/docs/concepts/containers/images")),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"imagePullPolicy"),(0,m.kt)("br",null),"Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: ",(0,m.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images%5C#updating-images"},"https://kubernetes.io/docs/concepts/containers/images\\#updating-images")),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"name"),(0,m.kt)("br",null),"Name of the ephemeral container specified as a DNS","_","LABEL. This name must be unique among all containers, init containers and ephemeral containers."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"required"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"ports"),(0,m.kt)("br",null),"Ports are not allowed for ephemeral containers."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_container_port#schema-containerport"},"v1.ContainerPort"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"stdin"),(0,m.kt)("br",null),"Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false."),(0,m.kt)("td",{parentName:"tr",align:null},"bool"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"stdinOnce"),(0,m.kt)("br",null),"Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false"),(0,m.kt)("td",{parentName:"tr",align:null},"bool"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"targetContainerName"),(0,m.kt)("br",null),"If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container is run in whatever namespaces are shared for the pod. Note that the container runtime must support this feature."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"terminationMessagePath"),(0,m.kt)("br",null),"Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"terminationMessagePolicy"),(0,m.kt)("br",null),"Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"tty"),(0,m.kt)("br",null),"Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false."),(0,m.kt)("td",{parentName:"tr",align:null},"bool"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"volumeDevices"),(0,m.kt)("br",null),"volumeDevices is the list of block devices to be used by the container."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_volume_device#schema-volumedevice"},"v1.VolumeDevice"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"volumeMounts"),(0,m.kt)("br",null),"Pod volumes to mount into the container's filesystem. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"[",(0,m.kt)("a",{parentName:"td",href:"doc_volume_mount#schema-volumemount"},"v1.VolumeMount"),"]"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"workingDir"),(0,m.kt)("br",null),"Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated."),(0,m.kt)("td",{parentName:"tr",align:null},"str"),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"lifecycle"),(0,m.kt)("br",null),"Lifecycle is not allowed for ephemeral containers."),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_lifecycle#schema-lifecycle"},"Lifecycle")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"livenessProbe"),(0,m.kt)("br",null),"Probes are not allowed for ephemeral containers."),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"readinessProbe"),(0,m.kt)("br",null),"Probes are not allowed for ephemeral containers."),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"resources"),(0,m.kt)("br",null),"Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod."),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_resource_requirements#schema-resourcerequirements"},"ResourceRequirements")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"securityContext"),(0,m.kt)("br",null),"Optional: SecurityContext defines the security options the ephemeral container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext."),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_security_context#schema-securitycontext"},"SecurityContext")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("strong",{parentName:"td"},"startupProbe"),(0,m.kt)("br",null),"Probes are not allowed for ephemeral containers."),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,m.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"optional")))))}k.isMDXComponent=!0}}]);
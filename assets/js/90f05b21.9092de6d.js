"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4458],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4113:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],c={},i="secret",l={unversionedId:"reference/model/kusion_models/kube/frontend/secret/doc_secret",id:"reference/model/kusion_models/kube/frontend/secret/doc_secret",title:"secret",description:"Source: base/pkg/kusionmodels/kube/frontend/secret/secret.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/secret/doc_secret.md",sourceDirName:"reference/model/kusion_models/kube/frontend/secret",slug:"/reference/model/kusion_models/kube/frontend/secret/doc_secret",permalink:"/docs/reference/model/kusion_models/kube/frontend/secret/doc_secret",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/secret/doc_secret.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1652156296,formattedLastUpdatedAt:"2022/5/10",frontMatter:{},sidebar:"reference",previous:{title:"resource_requirements",permalink:"/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements"},next:{title:"service",permalink:"/docs/reference/model/kusion_models/kube/frontend/service/doc_service"}},u={},d=[{value:"Schema Secret",id:"schema-secret",level:2},{value:"Base Schema",id:"base-schema",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"secret"},"secret"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/secret/secret.k"},"base/pkg/kusion_models/kube/frontend/secret/secret.k")),(0,o.kt)("h2",{id:"schema-secret"},"Schema Secret"),(0,o.kt)("p",null,"Secret holds secret data of a certain type. ",(0,o.kt)("br",null),"The total bytes of the values in the Data field",(0,o.kt)("br",null),"must be less than MaxSecretSize bytes."),(0,o.kt)("h3",{id:"base-schema"},"Base Schema"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../common/doc_metadata#schema-metadata"},"@base.pkg.kusion_models.kube.frontend.common.Metadata")),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"data"),(0,o.kt)("br",null),"Data contains the secret data. Each key must consist of alphanumeric characters, '-', '","_","' or '.'. ",(0,o.kt)("br",null),"More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/secret/%5C#restriction-names-data"},"https://kubernetes.io/docs/concepts/configuration/secret/\\#restriction-names-data")),(0,o.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"stringData"),(0,o.kt)("br",null),"stringData allows specifying non-binary secret data in string form. ",(0,o.kt)("br",null),"More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/secret/%5C#restriction-names-data"},"https://kubernetes.io/docs/concepts/configuration/secret/\\#restriction-names-data")),(0,o.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"type"),(0,o.kt)("br",null),"Used to facilitate programmatic handling of secret data.",(0,o.kt)("br",null),"More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/secret/%5C#secret-types"},"https://kubernetes.io/docs/concepts/configuration/secret/\\#secret-types")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'secret = Secret {\n    name = "my-secret"\n    namespace = "my-secret-namespace"\n    data = {\n        foo = bar\n        bar = foo\n    }\n    $type = "kubernetes.io/service-account-token"\n}\n')))}m.isMDXComponent=!0}}]);
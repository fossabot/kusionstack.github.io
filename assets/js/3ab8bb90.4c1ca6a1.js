"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3257],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},d),{},{components:r})):n.createElement(k,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={},o="network",p={unversionedId:"reference/modules/developer-schemas/network/network",id:"reference/modules/developer-schemas/network/network",title:"network",description:"Schema Network",source:"@site/docs/kusion/6-reference/2-modules/1-developer-schemas/network/network.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/network",slug:"/reference/modules/developer-schemas/network/",permalink:"/docs/next/reference/modules/developer-schemas/network/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/1-developer-schemas/network/network.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718370150,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"prometheus",permalink:"/docs/next/reference/modules/developer-schemas/monitoring/prometheus"},next:{title:"opsrule",permalink:"/docs/next/reference/modules/developer-schemas/opsrule/"}},i={},s=[{value:"Schema Network",id:"schema-network",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Schema Port",id:"schema-port",level:2},{value:"Examples",id:"examples-1",level:3}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network"},"network"),(0,a.kt)("h2",{id:"schema-network"},"Schema Network"),(0,a.kt)("p",null,"Network defines the exposed port of Service, which can be used to describe how the Service",(0,a.kt)("br",null),"get accessed."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ports")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"#schema-port"},"Port"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of ports which the Workload should get exposed."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import network as n\n\n"network": n.Network {\n    ports: [\n        n.Port {\n            port: 80\n            public: True\n        }\n    ]\n}\n')),(0,a.kt)("h2",{id:"schema-port"},"Schema Port"),(0,a.kt)("p",null,"Port defines the exposed port of Workload, which can be used to describe how the Workload get accessed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"port")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The exposed port of the Workload."),(0,a.kt)("td",{parentName:"tr",align:null},"80")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"protocol")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},'"TCP"'),(0,a.kt)("td",{parentName:"tr",align:null},'"UDP"'),(0,a.kt)("td",{parentName:"tr",align:null},"The protocol to access the port.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"public")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Public defines whether the port can be accessed through Internet."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"targetPort")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The backend container port. If empty, set it the same as the port."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"examples-1"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import network as n\n\nport = n.Port {\n    port: 80\n    targetPort: 8080\n    protocol: "TCP"\n    public: True\n}\n')))}c.isMDXComponent=!0}}]);
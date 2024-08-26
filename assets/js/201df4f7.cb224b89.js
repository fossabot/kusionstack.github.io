"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||s;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={},o="k8s_manifest",i={unversionedId:"reference/modules/workspace-configs/k8s_manifest/k8s_manifest",id:"version-v0.12/reference/modules/workspace-configs/k8s_manifest/k8s_manifest",title:"k8s_manifest",description:"Module K8sManifest",source:"@site/docs_versioned_docs/version-v0.12/6-reference/2-modules/2-workspace-configs/k8s_manifest/k8s_manifest.md",sourceDirName:"6-reference/2-modules/2-workspace-configs/k8s_manifest",slug:"/reference/modules/workspace-configs/k8s_manifest/",permalink:"/docs/reference/modules/workspace-configs/k8s_manifest/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/2-modules/2-workspace-configs/k8s_manifest/k8s_manifest.md",tags:[],version:"v0.12",lastUpdatedBy:"hexin",lastUpdatedAt:1724678822,formattedLastUpdatedAt:"Aug 26, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"postgres",permalink:"/docs/reference/modules/workspace-configs/database/postgres"},next:{title:"monitoring",permalink:"/docs/reference/modules/workspace-configs/monitoring/prometheus"}},l={},c=[{value:"Module K8sManifest",id:"module-k8smanifest",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k8s_manifest"},"k8s_manifest"),(0,a.kt)("h2",{id:"module-k8smanifest"},"Module K8sManifest"),(0,a.kt)("p",null,"K8sManifest defines the paths of the YAML files, or the directories of the raw Kubernetes manifests, which will be jointly appended to the Resources of Spec."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"paths"),(0,a.kt)("br",null),"The paths of the YAML files, or the directories of the raw Kubernetes manifests."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"optional"))))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"modules: \n    k8s_manifest: \n        path: oci://ghcr.io/kusionstack/k8s_manifest\n        version: 0.1.0\n        configs: \n            default: \n                paths: \n                    # The default paths to apply for the raw K8s manifest YAML files. \n                    - /path/to/k8s_manifest.yaml\n                    - /dir/to/k8s_manifest/\n")))}f.isMDXComponent=!0}}]);
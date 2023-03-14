"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},a="git_repo_volume_source",l={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_git_repo_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_git_repo_volume_source",title:"git_repo_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/gitrepovolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_git_repo_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_git_repo_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_git_repo_volume_source",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_git_repo_volume_source.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1678779307,formattedLastUpdatedAt:"3/14/2023",frontMatter:{},sidebar:"reference",previous:{title:"gce_persistent_disk_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source"},next:{title:"glusterfs_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_glusterfs_volume_source"}},u={},s=[{value:"Schema GitRepoVolumeSource",id:"schema-gitrepovolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git_repo_volume_source"},"git_repo_volume_source"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/git_repo_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/git_repo_volume_source.k")),(0,o.kt)("p",null,"This is the git","_","repo","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-gitrepovolumesource"},"Schema GitRepoVolumeSource"),(0,o.kt)("p",null,"Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.",(0,o.kt)("br",null),"DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"directory"),(0,o.kt)("br",null),"     Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.",(0,o.kt)("br",null),"repository : str, default is Undefined, required",(0,o.kt)("br",null),"     Repository URL",(0,o.kt)("br",null),"revision : str, default is Undefined, optional",(0,o.kt)("br",null),"     Commit hash for the specified revision."),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"repository")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"revision")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);
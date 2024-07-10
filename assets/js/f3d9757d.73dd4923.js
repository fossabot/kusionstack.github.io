"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(r),p=a,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={title:"Multi-Cluster Management"},s=void 0,l={unversionedId:"user-guide/multi-cluster-management",id:"version-v0.4/user-guide/multi-cluster-management",title:"Multi-Cluster Management",description:"Multi-cluster management is the entrance to register clusters into Karpor, enabling search and insight capabilities across a large number of clusters.",source:"@site/karpor_versioned_docs/version-v0.4/3-user-guide/1-multi-cluster-management.md",sourceDirName:"3-user-guide",slug:"/user-guide/multi-cluster-management",permalink:"/karpor/user-guide/multi-cluster-management",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/3-user-guide/1-multi-cluster-management.md",tags:[],version:"v0.4",lastUpdatedBy:"hexin",lastUpdatedAt:1720601103,formattedLastUpdatedAt:"Jul 10, 2024",sidebarPosition:1,frontMatter:{title:"Multi-Cluster Management"},sidebar:"karpor",previous:{title:"Glossary",permalink:"/karpor/concepts/glossary"},next:{title:"How to Search",permalink:"/karpor/user-guide/search"}},c={},o=[{value:"Register Cluster",id:"register-cluster",level:2},{value:"Edit Cluster",id:"edit-cluster",level:2},{value:"Rotate Certificate",id:"rotate-certificate",level:2},{value:"Remove Cluster",id:"remove-cluster",level:2}],u={toc:o};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Multi-cluster management is the entrance to register clusters into Karpor, enabling search and insight capabilities across a large number of clusters."),(0,a.kt)("h2",{id:"register-cluster"},"Register Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("kbd",null,"Cluster Management")," Tab."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("kbd",null,"Register Cluster")," button.\n",(0,a.kt)("img",{src:r(96615).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"Add the cluster name. The cluster name must be unique and CANNOT be altered once created."),(0,a.kt)("li",{parentName:"ol"},"Upload the cluster's kubeconfig file. One with read permission is sufficient."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("kbd",null,"Verify and Submit")," button.\n",(0,a.kt)("img",{src:r(35517).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"Once verified, the cluster will be added under the ",(0,a.kt)("kbd",null,"Cluster Management")," page\n",(0,a.kt)("img",{src:r(2377).Z,width:"1620",height:"1080"}))),(0,a.kt)("h2",{id:"edit-cluster"},"Edit Cluster"),(0,a.kt)("p",null,"The ",(0,a.kt)("kbd",null,"Edit")," button allows for modifications to the ",(0,a.kt)("kbd",null,"Display Name")," and ",(0,a.kt)("kbd",null,"Description"),", thus altering how the cluster's name and description appear on the Dashboard.\n",(0,a.kt)("img",{src:r(44009).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"rotate-certificate"},"Rotate Certificate"),(0,a.kt)("p",null,"When the kubeconfig expires, you can update the certificate by clicking ",(0,a.kt)("kbd",null,"Rotate Certificate"),".\n",(0,a.kt)("img",{src:r(18892).Z,width:"1216",height:"810"}),"\n",(0,a.kt)("img",{src:r(93893).Z,width:"1620",height:"1080"}),"\n",(0,a.kt)("img",{src:r(62647).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"remove-cluster"},"Remove Cluster"),(0,a.kt)("p",null,"The ",(0,a.kt)("kbd",null,"delete")," button facilitates the removal of a registered cluster.\n",(0,a.kt)("img",{src:r(9825).Z,width:"1216",height:"810"})))}d.isMDXComponent=!0},9825:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-delete-cluster-d710c7d34eeffe1b4885edf986635331.png"},44009:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-edit-cluster-07e5bea950a6328a23ac3b37bb757bf2.png"},96615:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-empty-42686a32f37ccbd355e49b2ab53b1320.png"},35517:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-register-new-cluster-df17d3a7e2b322e93e55a56b9689e4c8.png"},2377:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-register-success-1eeaaeec418f80431c9b77b5cd7d027d.png"},18892:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-rotate-cluster-1-51394b403e893828990ac403a8ae8bf5.png"},93893:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-rotate-cluster-2-c840425dd672a06feafc951ed648e991.png"},62647:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-rotate-cluster-3-b5fd49c780f3db5bce7e11c379a2c880.png"}}]);
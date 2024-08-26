"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"release",sidebar_label:"Releases"},i="Release",s={unversionedId:"concepts/release",id:"version-v0.12/concepts/release",title:"Release",description:"Release is used to indicate a single operation, triggered by kusion apply and kusion destroy, providing users with a more coherent and consistent operation experience with Kusion. Release also provides audit and rollback capabilities, which is currently under development.",source:"@site/docs_versioned_docs/version-v0.12/3-concepts/9-release.md",sourceDirName:"3-concepts",slug:"/concepts/release",permalink:"/zh/docs/concepts/release",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/3-concepts/9-release.md",tags:[],version:"v0.12",lastUpdatedBy:"hexin",lastUpdatedAt:1724678822,formattedLastUpdatedAt:"2024\u5e748\u670826\u65e5",sidebarPosition:9,frontMatter:{id:"release",sidebar_label:"Releases"},sidebar:"kusion",previous:{title:"Configuration",permalink:"/zh/docs/concepts/configuration"},next:{title:"Configuration File Overview",permalink:"/zh/docs/configuration-walkthrough/overview"}},p={},l=[{value:"State",id:"state",level:3},{value:"Concurrency Control",id:"concurrency-control",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release"},"Release"),(0,a.kt)("p",null,"Release is used to indicate a single operation, triggered by ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion destroy"),", providing users with a more coherent and consistent operation experience with Kusion. Release also provides audit and rollback capabilities, which is currently under development. "),(0,a.kt)("p",null,"Every time ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion destroy")," is executed, it will trigger the generation of a ",(0,a.kt)("inlineCode",{parentName:"p"},"release")," file. The combination of a ",(0,a.kt)("inlineCode",{parentName:"p"},"project")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace")," corresponds to a set of ",(0,a.kt)("inlineCode",{parentName:"p"},"release")," files, which also relates to a set of the real application resources. The ",(0,a.kt)("inlineCode",{parentName:"p"},"release")," file is stored in the same ",(0,a.kt)("inlineCode",{parentName:"p"},"backend")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace"),", and the default path is ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.kusion/releases/$PROJECT_NAME/$WORKSPACE_NAME"),", whose revision starts from 1 and increments. "),(0,a.kt)("p",null,"The release file contains the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/spec"},"Spec")," and ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/release#state"},"State")," of an application, both of which are composed of ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources"),", representing the expected description from the configuration code and the actual state of the resources respectively. In addition, the release file also contains the information of creation and modification time, operation phase, and application metadata, etc. "),(0,a.kt)("h3",{id:"state"},"State"),(0,a.kt)("p",null,"State is a record of an operation's result. It is a mapping between resources managed by Kusion and the actual infra resources. State is often used as a data source for three-way merge/diff in operations like ",(0,a.kt)("inlineCode",{parentName:"p"},"Apply")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Preview"),". "),(0,a.kt)("p",null,"State can be stored in many storage ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/concepts/backend"},"backend")," mediums like filesystems, S3, and OSS, etc. "),(0,a.kt)("h2",{id:"concurrency-control"},"Concurrency Control"),(0,a.kt)("p",null,"Release supports collaboration among multiple users and implements the concurrency control through operation ",(0,a.kt)("inlineCode",{parentName:"p"},"phase"),". When the field of ",(0,a.kt)("inlineCode",{parentName:"p"},"phase")," in the release file is not ",(0,a.kt)("inlineCode",{parentName:"p"},"succeeded")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),", kusion will not be able to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion destroy")," operation to the corresponding stack. For example, if a user unexpectedly exits during the ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion destroy")," process, the ",(0,a.kt)("inlineCode",{parentName:"p"},"phase")," of the release file may be kept as ",(0,a.kt)("inlineCode",{parentName:"p"},"applying")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"destroying"),". In this case, the user can use the command of ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion release unlock")," to unlock the release file for a specified application and workspace, setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"phase")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),"."))}d.isMDXComponent=!0}}]);
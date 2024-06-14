"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={id:"spec",sidebar_label:"Spec"},a="Spec",s={unversionedId:"concepts/spec",id:"version-v0.11/concepts/spec",title:"Spec",description:"The Spec represents the operational intentions that you aim to deliver using Kusion. These intentions are expected to contain all components throughout the DevOps lifecycle, including resources (workload, database, load balancer, etc.), dependencies, and policies. The Kusion module generators are responsible for converting all AppConfigurations and environment configurations into the Spec. Once the Spec is generated, the Kusion Engine takes charge of updating the actual infrastructures to match the Spec.",source:"@site/docs_versioned_docs/version-v0.11/3-concepts/6-spec.md",sourceDirName:"3-concepts",slug:"/concepts/spec",permalink:"/docs/v0.11/concepts/spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/3-concepts/6-spec.md",tags:[],version:"v0.11",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718359438,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:6,frontMatter:{id:"spec",sidebar_label:"Spec"},sidebar:"kusion",previous:{title:"AppConfiguration",permalink:"/docs/v0.11/concepts/app-configuration"},next:{title:"Backend",permalink:"/docs/v0.11/concepts/backend"}},c={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Single Source of Truth",id:"single-source-of-truth",level:3},{value:"Consistency",id:"consistency",level:3},{value:"Rollback and Disaster Recovery",id:"rollback-and-disaster-recovery",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spec"},"Spec"),(0,r.kt)("p",null,"The Spec represents the operational intentions that you aim to deliver using Kusion. These intentions are expected to contain all components throughout the DevOps lifecycle, including resources (workload, database, load balancer, etc.), dependencies, and policies. The Kusion module generators are responsible for converting all AppConfigurations and environment configurations into the Spec. Once the Spec is generated, the Kusion Engine takes charge of updating the actual infrastructures to match the Spec."),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("h3",{id:"single-source-of-truth"},"Single Source of Truth"),(0,r.kt)("p",null,"In Kusion's workflow, the platform engineer builds Kusion modules and provides environment configurations, application developers choose Kusion modules they need and deploy operational intentions to an environment with related environment configurations. They can also input dynamic parameters like the container image when executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion generate")," command. So the final operational intentions include configurations written by application developers, environment configurations and dynamic inputs. Due to this reason, we introduce ",(0,r.kt)("strong",{parentName:"p"},"Spec")," to represent the SSoT(Single Source of Truth) of Kusion. It is the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion generate")," which contains all operational intentions from different sources."),(0,r.kt)("h3",{id:"consistency"},"Consistency"),(0,r.kt)("p",null,"Delivering an application to different environments with identical configurations is a common practice, especially for applications that require scalable distribution. In such cases, an immutable configuration package is helpful. By utilizing the Spec, all configurations and changes are stored in a single file. As the Spec is the input of Kusion, it ensures consistency across different environments whenever you execute Kusion with the same Spec file."),(0,r.kt)("h3",{id:"rollback-and-disaster-recovery"},"Rollback and Disaster Recovery"),(0,r.kt)("p",null,"The ability to roll back is crucial in reducing incident duration. Rolling back the system to a previously validated version is much faster compared to attempting to fix it during an outage. We regard a validated Spec as a snapshot of the system and recommend storing the Spec in a version control system like Git. This enables better change management practices and makes it simpler to roll back to previous versions if needed. In case of a failure or outage, having a validated Spec simplifies the rollback process, ensuring that the system can be quickly recovered."))}u.isMDXComponent=!0}}]);
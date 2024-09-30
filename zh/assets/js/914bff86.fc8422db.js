"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={id:"intent",sidebar_label:"Intent"},a="Intent",s={unversionedId:"concepts/intent",id:"version-v0.10/concepts/intent",title:"Intent",description:"The Intent represents the operational intentions that you aim to deliver using Kusion. These intentions are expected to contain all components throughout the software development lifecycle (SDLC), including resources (workload, database, load balancer, etc.), dependencies, and policies. The Kusion module generators are responsible for converting all AppConfigurations and environment configurations into the Intent. Once the Intent is generated, the Kusion Engine takes charge of updating the actual infrastructures to match the Intent.",source:"@site/docs_versioned_docs/version-v0.10/3-concepts/6-intent.md",sourceDirName:"3-concepts",slug:"/concepts/intent",permalink:"/zh/docs/v0.10/concepts/intent",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/3-concepts/6-intent.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727679725,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:6,frontMatter:{id:"intent",sidebar_label:"Intent"},sidebar:"kusion",previous:{title:"AppConfiguration",permalink:"/zh/docs/v0.10/concepts/app-configuration"},next:{title:"Backend Configuration",permalink:"/zh/docs/v0.10/concepts/backend-configuration"}},c={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Single Source of Truth",id:"single-source-of-truth",level:3},{value:"Consistency",id:"consistency",level:3},{value:"Rollback and Disaster Recovery",id:"rollback-and-disaster-recovery",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intent"},"Intent"),(0,i.kt)("p",null,"The Intent represents the operational intentions that you aim to deliver using Kusion. These intentions are expected to contain all components throughout the software development lifecycle (SDLC), including resources (workload, database, load balancer, etc.), dependencies, and policies. The Kusion module generators are responsible for converting all AppConfigurations and environment configurations into the Intent. Once the Intent is generated, the Kusion Engine takes charge of updating the actual infrastructures to match the Intent."),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("h3",{id:"single-source-of-truth"},"Single Source of Truth"),(0,i.kt)("p",null,"In Kusion's workflow, the platform engineer builds Kusion modules and provides environment configurations, application developers choose Kusion modules they need and deploy operational intentions to an environment with related environment configurations. They can also input dynamic parameters like the container image when executing the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion build")," command. So the final operational intentions include configurations written by application developers, environment configurations and dynamic inputs. Due to this reason, we introduce ",(0,i.kt)("strong",{parentName:"p"},"Intent")," to represent the SSoT(Single Source of Truth) of Kusion. It is the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion build")," which contains all operational intentions from different sources."),(0,i.kt)("h3",{id:"consistency"},"Consistency"),(0,i.kt)("p",null,"Delivering an application to different environments with identical configurations is a common practice, especially for applications that require scalable distribution. In such cases, an immutable configuration package is helpful. By utilizing the Intent, all configurations and changes are stored in a single file. As the Intent is the input of Kusion, it ensures consistency across different environments whenever you execute Kusion with the same Intent file."),(0,i.kt)("h3",{id:"rollback-and-disaster-recovery"},"Rollback and Disaster Recovery"),(0,i.kt)("p",null,"The ability to roll back is crucial in reducing incident duration. Rolling back the system to a previously validated version is much faster compared to attempting to fix it during an outage. We regard a validated Intent as a snapshot of the system and recommend storing the Intent in a version control system like Git. This enables better change management practices and makes it simpler to roll back to previous versions if needed. In case of a failure or outage, having a validated Intent simplifies the rollback process, ensuring that the system can be quickly recovered."))}p.isMDXComponent=!0}}]);
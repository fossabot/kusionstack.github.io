"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2709],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(87462),i=(t(67294),t(3905));const r={},a="Intent",s={unversionedId:"kusion/concepts/intent",id:"version-v0.9/kusion/concepts/intent",title:"Intent",description:"The Intent represents the operational intentions that you aim to deliver using Kusion. These intentions are expected to contain all components throughout the software development lifecycle (SDLC), including resources (workload, database, load balancer, etc.), dependencies, and policies. The Kusion module generators are responsible for converting all AppConfigurations and environment configurations into the Intent. Once the Intent is generated, the Kusion Engine takes charge of updating the actual infrastructures to match the Intent.",source:"@site/versioned_docs/version-v0.9/kusion/concepts/intent.md",sourceDirName:"kusion/concepts",slug:"/kusion/concepts/intent",permalink:"/docs/v0.9/kusion/concepts/intent",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/concepts/intent.md",tags:[],version:"v0.9",lastUpdatedBy:"Dayuan",lastUpdatedAt:1711695705,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"AppConfiguration",permalink:"/docs/v0.9/kusion/concepts/appconfiguration"},next:{title:"Configuration File Overview",permalink:"/docs/v0.9/kusion/config-walkthrough/overview"}},c={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Single Source of Truth",id:"single-source-of-truth",level:3},{value:"Consistency",id:"consistency",level:3},{value:"Rollback and Disaster Recovery",id:"rollback-and-disaster-recovery",level:3}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intent"},"Intent"),(0,i.kt)("p",null,"The Intent represents the operational intentions that you aim to deliver using Kusion. These intentions are expected to contain all components throughout the software development lifecycle (SDLC), including resources (workload, database, load balancer, etc.), dependencies, and policies. The Kusion module generators are responsible for converting all AppConfigurations and environment configurations into the Intent. Once the Intent is generated, the Kusion Engine takes charge of updating the actual infrastructures to match the Intent."),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("h3",{id:"single-source-of-truth"},"Single Source of Truth"),(0,i.kt)("p",null,"In Kusion's workflow, platform engineer build Kusion modules and provide environment configurations, application developers choose Kusion modules they need and deploy operational intentions to an environment with related environment configurations. They can also input dynamic paramters like the container image when execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion build")," command. So the final operational intentions includes configuratins written by application developers, environment configurations and dynamic inputs. Due to this reason, we introduce ",(0,i.kt)("strong",{parentName:"p"},"Intent")," to represent the SSoT(Single Source of Truth) of Kusion. It is the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion build")," which contains all operational intentions from different sources."),(0,i.kt)("h3",{id:"consistency"},"Consistency"),(0,i.kt)("p",null,"Delivering an application to different environments with identical configurations is a common practice, especially for applications that require scalable distribution. In such cases, an immutable configuration package is helpful. By utilizing the Intent, all configurations and changes are stored in a single file. As the Intent is the input of Kusion, it ensures consistency across different environments whenever you execute Kusion with the same Intent file."),(0,i.kt)("h3",{id:"rollback-and-disaster-recovery"},"Rollback and Disaster Recovery"),(0,i.kt)("p",null,"The ability to roll back is crucial in reducing incident duration. Rolling back the system to previously validated version is much faster compared to attempting to fix it during an outage. We regard a validated Intent as a snapshot of the system and recommend to sotre the Intent in a version control systems like Git. This enables better change management practices and makes it simpler to roll back to previous versions if needed. In case of a failure or outage, having a validated Intent simplifies the rollback process, ensuring that the system can be quickly recovered."))}p.isMDXComponent=!0}}]);
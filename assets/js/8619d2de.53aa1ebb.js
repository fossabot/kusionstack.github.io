"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),o=n(7294),i=n(6668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,o.useRef)(void 0),n=d();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=s(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?o.createElement("ul",{className:i?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const m=o.memo(p);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:p,...f}=e;const h=(0,i.L)(),v=d??h.tableOfContents.minHeadingLevel,g=p??h.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>l({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return u((0,o.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:g}}),[c,s,v,g])),o.createElement(m,(0,a.Z)({toc:y,className:n,linkClassName:c},f))}},6433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(7462),o=n(7294),i=n(3905),r=n(3743);const l="tableOfContentsInline_prmo";function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return o.createElement("div",{className:l},o.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}const s={sidebar_position:2},d="Glossary",u={unversionedId:"kusion/concepts/glossary",id:"version-v0.9/kusion/concepts/glossary",title:"Glossary",description:"This page lists and defines technical terms that are widely used across KusionStack. Words such as Project, Stack, etc. can be overloaded in the technical community, so this page attempts to clarify their meaning in the context of KusionStack.",source:"@site/versioned_docs/version-v0.9/kusion/concepts/glossary.md",sourceDirName:"kusion/concepts",slug:"/kusion/concepts/glossary",permalink:"/docs/kusion/concepts/glossary",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/concepts/glossary.md",tags:[],version:"v0.9",lastUpdatedBy:"KK",lastUpdatedAt:1704956242,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kusion",previous:{title:"Architecture",permalink:"/docs/kusion/concepts/arch"},next:{title:"How Kusion Works",permalink:"/docs/kusion/concepts/kusion"}},p={},m=[{value:"Project",id:"project",level:2},{value:"Stack",id:"stack",level:2},{value:"Application",id:"application",level:2},{value:"High Level Schema",id:"high-level-schema",level:2}],f={toc:m};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("p",null,"This page lists and defines technical terms that are widely used across KusionStack. Words such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Project"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack"),", etc. can be overloaded in the technical community, so this page attempts to clarify their meaning in the context of KusionStack."),(0,i.kt)(c,{toc:m.filter((e=>2===e.level||4===e.level)),minHeadingLevel:2,maxHeadingLevel:4,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("p",null,"A project in Kusion is any folder which contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"project.yaml")," file and is linked to a Git repository. Usually the mapping between project and repository is 1:1, also you can have multiple projects connected to a single repository (for example, a monorepo). And a project is composed of one or more applications."),(0,i.kt)("p",null,'The purpose of the "project" is to bundle application configurations and a refer to Git repository. Specifically, it includes logical configurations for internal pieces to orchestrate the application, and it bundles these configurations in a way to fit different roles, e.g. developer, SRE, to cover the whole life-cycle of application development.'),(0,i.kt)("p",null,"From the perspective of the application development life cycle, the configuration described by the project is decoupled from the application code, takes the immutable image as input, and users could conduct the operation, and maintenance of the application in an independent configuration code base."),(0,i.kt)("h2",{id:"stack"},"Stack"),(0,i.kt)("p",null,"A stack in Kusion is any folder which contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"stack.yaml")," file under belonging project directory. Stack provides a mechanism to isolate multiple deploys of same application, it's the target workspace that an application will be deployed to, also the the smallest operation unit that can be configured and deployed independently. Stacks are commonly used to denote different phases of software development lifecycle e.g. development, staging, and production."),(0,i.kt)("p",null,"A project can have as many stacks as you need. By default, Kusion creates a default stack for you when you start a new project using the kusion init command."),(0,i.kt)("p",null,"Stacks let's you chose on which cluster your applications will be deployed to."),(0,i.kt)("h2",{id:"application"},"Application"),(0,i.kt)("p",null,"An application in Kusion is declared using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," schema and represents a basic unit that is deployed. "),(0,i.kt)("p",null,"You can create multiple applications within a single project so they can share common configurations. This can be useful if you have several applications that are closely related, such as a backend system for content management and a frontend system for content delivery and display."),(0,i.kt)("h2",{id:"high-level-schema"},"High Level Schema"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"High_Level_Schema",src:n(4994).Z,width:"2390",height:"1487"})))}h.isMDXComponent=!0},4994:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/high-level-schema-ba34668ea6879003a582f15496c3ab6e.png"}}]);
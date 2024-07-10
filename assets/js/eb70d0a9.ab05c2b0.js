"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"Commit Conventions"},a=void 0,l={unversionedId:"developer-guide/conventions/commit-conventions",id:"developer-guide/conventions/commit-conventions",title:"Commit Conventions",description:"Commit Message Structure",source:"@site/docs/karpor/4-developer-guide/2-conventions/4-commit-conventions.md",sourceDirName:"4-developer-guide/2-conventions",slug:"/developer-guide/conventions/commit-conventions",permalink:"/karpor/next/developer-guide/conventions/commit-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/4-developer-guide/2-conventions/4-commit-conventions.md",tags:[],version:"current",lastUpdatedBy:"hexin",lastUpdatedAt:1720601103,formattedLastUpdatedAt:"Jul 10, 2024",sidebarPosition:4,frontMatter:{title:"Commit Conventions"},sidebar:"karpor",previous:{title:"Test Conventions",permalink:"/karpor/next/developer-guide/conventions/test-conventions"},next:{title:"karpor",permalink:"/karpor/next/references/cli-commands/karpor"}},s={},c=[{value:"Commit Message Structure",id:"commit-message-structure",level:2},{value:"Example",id:"example",level:2},{value:"<code>&lt;type&gt;</code>(Required)",id:"typerequired",level:2},{value:"<code>&lt;scope&gt;</code>(Optional)",id:"scopeoptional",level:2},{value:"<code>&lt;subject&gt;</code>(Required)",id:"subjectrequired",level:2},{value:"<code>&lt;body&gt;</code>(Required)",id:"bodyrequired",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"commit-message-structure"},"Commit Message Structure"),(0,r.kt)("p",null,"Karpor adheres to ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional-commits"),"."),(0,r.kt)("p",null,"Commit messages should be organized following this structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<type>[optional scope]: <subject>\n\n[optional body]\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Commit message with scope:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"feat(lang): add polish language\n")),(0,r.kt)("p",null,"Commit message without body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docs: correct spelling of CHANGELOG\n")),(0,r.kt)("p",null,"Commit message with multiple body paragraphs:\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fix: correct minor typos in code\n\nsee the issue for details\n\non typos fixed.\n\nreviewed-by: Z\nrefs #133\n")),(0,r.kt)("h2",{id:"typerequired"},(0,r.kt)("inlineCode",{parentName:"h2"},"<type>"),"(Required)"),(0,r.kt)("p",null,"The required type helps better capture the area of the commit, based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular guidelines"),"."),(0,r.kt)("p",null,"We use lowercase for ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>")," to avoid spending time on case-sensitive issues. ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>")," can be one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feat"),": A new feature"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fix"),": A bug fix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"docs"),": Documentation only changes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"build"),": Changes that affect the build system or external dependencies"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"perf"),": A code change that improves performance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chore"),": Changes to the build process or auxiliary tools and libraries such as documentation generation")),(0,r.kt)("h2",{id:"scopeoptional"},(0,r.kt)("inlineCode",{parentName:"h2"},"<scope>"),"(Optional)"),(0,r.kt)("p",null,"Scope is optional and can be provided to the type of commit to provide additional contextual information, enclosed in parentheses. It can be anything specifying the place of the commit change. Github issue links are also valid scopes e.g., fix(ui), feat(api), fix(#233), etc."),(0,r.kt)("p",null,"When the change affects multiple scopes, ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," can be used."),(0,r.kt)("h2",{id:"subjectrequired"},(0,r.kt)("inlineCode",{parentName:"h2"},"<subject>"),"(Required)"),(0,r.kt)("p",null,'The subject must come immediately after the type/scope prefix, followed by a colon and space. It is a concise summary of the code changes, for example, "fix: array parsing issue when multiple spaces were contained in string", rather than "fix: bug".'),(0,r.kt)("h2",{id:"bodyrequired"},(0,r.kt)("inlineCode",{parentName:"h2"},"<body>"),"(Required)"),(0,r.kt)("p",null,"A longer commit body can be provided after the brief subject, giving additional context information about the code change. The body must begin one line after the description."))}u.isMDXComponent=!0}}]);
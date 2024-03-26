"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={id:"kusion-vs-x"},i="Kusion vs Other Software",s={unversionedId:"kusion/what-is-kusion/kusion-vs-x",id:"version-v0.10/kusion/what-is-kusion/kusion-vs-x",title:"Kusion vs Other Software",description:"It can be difficult to understand how different software compare to each other. Is one a replacement for the other? Are they complementary? etc. In this section, we compare Kusion to other software.",source:"@site/versioned_docs/version-v0.10/kusion/1-what-is-kusion/2-kusion-vs-x.md",sourceDirName:"kusion/1-what-is-kusion",slug:"/kusion/what-is-kusion/kusion-vs-x",permalink:"/docs/kusion/what-is-kusion/kusion-vs-x",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.10/kusion/1-what-is-kusion/2-kusion-vs-x.md",tags:[],version:"v0.10",lastUpdatedBy:"KK",lastUpdatedAt:1711420915,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:2,frontMatter:{id:"kusion-vs-x"},sidebar:"kusion",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Install Kusion",permalink:"/docs/kusion/getting-started/install-kusion"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-vs-other-software"},"Kusion vs Other Software"),(0,o.kt)("p",null,"It can be difficult to understand how different software compare to each other. Is one a replacement for the other? Are they complementary? etc. In this section, we compare Kusion to other software."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. GitOps (ArgoCD, FluxCD, etc.)")),(0,o.kt)("p",null,"According to the ",(0,o.kt)("a",{parentName:"p",href:"https://opengitops.dev/"},"open GitOps principles"),", GitOps systems typically have its desired state expressed declaratively, continuously observe actual system state and attempt to apply the desired state. In the design of Kusion toolchain, we refer to those principles but have no intention to reinvent any GitOps systems wheel. "),(0,o.kt)("p",null,"Kusion adopts your GitOps process and improves it with richness of features. The declarative ",(0,o.kt)("a",{parentName:"p",href:"../concepts/app-configuration"},"AppConfiguration")," model can be used to express desired intent, once intent is declared ",(0,o.kt)("a",{parentName:"p",href:"../reference/commands"},"Kusion CLI")," takes the role to make production match intent as safely as possible. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. PaaS (Heroku, Vercel, etc.)")),(0,o.kt)("p",null,"Kusion shares the same goal with traditional PaaS platforms to provide application delivery and management capabilities. The intuitive difference from the full functionality PaaS platforms is that Kusion is a client-side toolchain, not a complete PaaS platform. "),(0,o.kt)("p",null,"Also traditional PaaS platforms typically constrain the type of applications they can run but there is no such constrain for Kusion which means Kusion provides greater flexibility."),(0,o.kt)("p",null,"Kusion allows you to have platform-like features without the constraints of a traditional PaaS. However, Kusion is not attempting to replace any PaaS platforms, instead Kusion can be used to deploy to a platform such as Heroku."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. KubeVela")),(0,o.kt)("p",null,"KubeVela is a modern software delivery and management control plane. KubeVela makes it easier to deploy and operate applications on top of Kubernetes."),(0,o.kt)("p",null,"Kusion is not a control plane. Kusion is a client-side tool for describing application intent in  a declarative way and providing consistent workflow to apply that desired state."),(0,o.kt)("p",null,"With proper Generator implementation, the target Spec of ",(0,o.kt)("a",{parentName:"p",href:"../concepts/app-configuration"},"AppConfiguration")," can be ",(0,o.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/getting-started/core-concept/"},"KubeVela Application"),' and Kusion can use KubeVela to satisfy the "apply" step.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. Helm")),(0,o.kt)("p",null,"The concept of Helm originates from the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Package_manager"},"package management")," mechanism of the operating system. It is a package management tool based on templated YAML files and supports the execution and management of resources in the package. "),(0,o.kt)("p",null,"Kusion is not a package manager. Kusion naturally provides a superset of Helm capabilities with the modeled key-value pairs, so that developers can use Kusion directly as a programable alternative to avoid the pain of writing text templates. For users who have adopted Helm, the stack compilation results in Kusion can be packaged and used in Helm format."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. Kubernetes")),(0,o.kt)("p",null,'Kubernetes(K8s) is a container scheduling and management runtime widely used around the world, an "operating system" core for containers, and a platform for building platforms. Above the Kubernetes API layer, Kusion aims to provide app-centric ',(0,o.kt)("strong",{parentName:"p"},"abstraction")," and unified ",(0,o.kt)("strong",{parentName:"p"},"workspace"),", better ",(0,o.kt)("strong",{parentName:"p"},"user experience")," and automation ",(0,o.kt)("strong",{parentName:"p"},"workflow"),", and helps developers build the app delivery model easily and collaboratively."))}u.isMDXComponent=!0}}]);
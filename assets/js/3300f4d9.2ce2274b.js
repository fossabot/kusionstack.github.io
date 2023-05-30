"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="Quick Stack with VS Code Kusion",s={unversionedId:"user_docs/getting-started/kusion-ide",id:"user_docs/getting-started/kusion-ide",title:"Quick Stack with VS Code Kusion",description:"The VS Code Kusion extension provides convenient operations to deliver KCL configurations to Clouds.",source:"@site/docs/user_docs/getting-started/kusion-ide.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/kusion-ide",permalink:"/docs/user_docs/getting-started/kusion-ide",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/kusion-ide.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685455809,formattedLastUpdatedAt:"5/30/2023",frontMatter:{},sidebar:"user_docs",previous:{title:"KCL Quick Start",permalink:"/docs/user_docs/getting-started/kcl"},next:{title:"Architecture & Concepts",permalink:"/docs/user_docs/concepts/"}},p={},l=[{value:"Set Up Your Environment",id:"set-up-your-environment",level:2},{value:"Get Started to Deliver Your First App",id:"get-started-to-deliver-your-first-app",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-stack-with-vs-code-kusion"},"Quick Stack with VS Code Kusion"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=KusionStack.kusion"},"VS Code Kusion extension")," provides convenient operations to deliver KCL configurations to Clouds."),(0,o.kt)("h2",{id:"set-up-your-environment"},"Set Up Your Environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Install Kusion on your system."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Install the Kusion extension for Visual Studio Code. This extension requires the VS Code 1.68+")),(0,o.kt)("h2",{id:"get-started-to-deliver-your-first-app"},"Get Started to Deliver Your First App"),(0,o.kt)("p",null,"Here's an example for you to quickly get started to deliver ",(0,o.kt)("a",{parentName:"p",href:"https://wettel.github.io/codecity.html"},"code city")," application to the clouds with the VS Code Kusion Extension. All the steps could be interactivly experienced in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Getting started with Kusion")," walkthrough within VS Code."),(0,o.kt)("p",null,"To find the Kusion walkthrough: Open the Command Palatte > type and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Welcome: Open Walkthrough...")," > then type and select ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open a Konfig Workspace Folder"),"\nA monorepo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"konfig")," is already there for quick start, we could clone the repo and open it with VS Code: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/KusionStack/konfig.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create a New Kusion Project")),(0,o.kt)("p",{parentName:"li"},"We could quickly create a new kusion project from archetype. To do that, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Kusion Project")," button on the walkthrough (or, type ",(0,o.kt)("inlineCode",{parentName:"p"},"Kusion: Create")," in the Command Palatte), and select a project template(For example using the ",(0,o.kt)("inlineCode",{parentName:"p"},"code-city")," template we could deploy an application to visualize software as 3D cities)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",src:n(51503).Z,width:"1264",height:"748"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Explore Your Project and Configurations"),"\nNow let's open our kusion project that we previously created and browse the configuration code")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Verify the Resource Changes to be made")),(0,o.kt)("p",{parentName:"li"},"After changing the stack's configuration, we can right-click at the configuraion main file and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Preview Live Diff and Apply")," to verify the resource changes to be made. And ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Apply the Application Changes"),"\nThen if the live diff is as expected, we apply the changes to the runtime by clicking the 'Apply' button to confirm to apply."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",src:n(16161).Z,width:"1434",height:"861"})))))}d.isMDXComponent=!0},16161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config-diff-apply-254fbdfc2893e09e4118445e5e9c8f21.gif"},51503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-project-92123ea89068eb3ad68ba50189711440.gif"}}]);
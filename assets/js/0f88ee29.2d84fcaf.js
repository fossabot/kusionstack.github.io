"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);function a(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(87462),a=n(67294),r=n(72389),i=n(20650),l=n(86010);const s="tabItem_LplD";function u(e){var t,n;const{lazy:r,block:u,defaultValue:c,values:d,groupId:p,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),k=(0,i.lx)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=f[0])?void 0:n.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,i.UB)(),[y,w]=(0,a.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=p){const e=b[p];null!=e&&e!==y&&h.some((t=>t.value===e))&&w(e)}const N=e=>{const t=e.currentTarget,n=C.indexOf(t),o=h[n].value;o!==y&&(T(t),w(o),null!=p&&v(p,o))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]||C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]||C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},m)},h.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:x,onFocus:N,onClick:N},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":y===t})}),n??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,r.Z)();return a.createElement(u,(0,o.Z)({key:String(t)},e))}},75318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),r=n(9877),i=n(58215);const l={sidebar_position:3},s="Use VS Code Kusion",u={unversionedId:"user_docs/getting-started/kusion-ide",id:"user_docs/getting-started/kusion-ide",title:"Use VS Code Kusion",description:"The VS Code Kusion extension provides convenient operations to deliver KCL configurations to Clouds.",source:"@site/docs/user_docs/getting-started/kusion-ide.mdx",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/kusion-ide",permalink:"/docs/user_docs/getting-started/kusion-ide",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/kusion-ide.mdx",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1687748253,formattedLastUpdatedAt:"6/26/2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"Deliver the WordPress application on Kubernetes and clouds",permalink:"/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds"},next:{title:"KCL",permalink:"/docs/user_docs/getting-started/kcl"}},c={},d=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Get Started to Deliver Your First App",id:"get-started-to-deliver-your-first-app",level:2},{value:"1. Abstract: Define Your Models",id:"1-abstract-define-your-models",level:3},{value:"2. Config: New Kusion Project",id:"2-config-new-kusion-project",level:3},{value:"3. Preview: YAML Representation",id:"3-preview-yaml-representation",level:3},{value:"4. Runtime Diff and Go online",id:"4-runtime-diff-and-go-online",level:3}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-vs-code-kusion"},"Use VS Code Kusion"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=KusionStack.kusion"},"VS Code Kusion extension")," provides convenient operations to deliver KCL configurations to Clouds."),(0,a.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,a.kt)("p",null,"You could begin with VS Code Kusion using cloud IDE ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/codespaces"},"GitHub Codespaces"),", or you could install it on your desktop VS Code."),(0,a.kt)(r.Z,{className:"unique-tabs",defaultValue:"cloudide",values:[{label:"GitHub Codespaces",value:"cloudide"},{label:"VS Code Desktop",value:"desktop"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"cloudide",mdxType:"TabItem"},(0,a.kt)("p",null,"Conguratulations! \ud83c\udf89\ud83c\udf89 There's no environment setting up required! You could directly ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=488867056&machine=standardLinux32gb&devcontainer_path=.devcontainer.json"},"create a workspace with bundled Kusion"),".")),(0,a.kt)(i.Z,{value:"desktop",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Install Kusion on your system. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"install kusion"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Install the Kusion extension for Visual Studio Code. This extension requires the VS Code 1.68+."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," You need to have a Kubernetes Cluster and place the kubeConfig file at ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"."))),(0,a.kt)("h2",{id:"get-started-to-deliver-your-first-app"},"Get Started to Deliver Your First App"),(0,a.kt)("p",null,"Here's an example for you to quickly get started to deliver ",(0,a.kt)("a",{parentName:"p",href:"https://wettel.github.io/codecity.html"},"code city")," application to the clouds with the VS Code Kusion Extension. All the steps could be interactivly experienced in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Getting started with Kusion")," walkthrough within VS Code."),(0,a.kt)("p",null,"To find the Kusion walkthrough: Open the Command Palatte > type and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Welcome: Open Walkthrough...")," > then type and select ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion"),"."),(0,a.kt)("h3",{id:"1-abstract-define-your-models"},"1. Abstract: Define Your Models"),(0,a.kt)(r.Z,{className:"unique-tabs",defaultValue:"cloudide",values:[{label:"GitHub Codespaces",value:"cloudide"},{label:"VS Code Desktop",value:"desktop"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"cloudide",mdxType:"TabItem"},(0,a.kt)("p",null,"The monorepo ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"konfig")," is already opened in your workspace. It contains classical atractions of application configuration for you to quick start.")),(0,a.kt)(i.Z,{value:"desktop",mdxType:"TabItem"},(0,a.kt)("p",null,"You could clone the monorepo ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"konfig")," which contains classical atractions of application configuration for you to quick start:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/KusionStack/konfig.git\n")),(0,a.kt)("p",null,"Then open it with your VS Code."))),(0,a.kt)("h3",{id:"2-config-new-kusion-project"},"2. Config: New Kusion Project"),(0,a.kt)("p",null,"You could quickly create a new kusion project from archetype. To do that, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Kusion Project")," button on the walkthrough (or, type ",(0,a.kt)("inlineCode",{parentName:"p"},"Kusion: Create")," in the Command Palatte), and select a project template(For example using the ",(0,a.kt)("inlineCode",{parentName:"p"},"code-city")," template you could deploy an application to visualize software as 3D cities)."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(51503).Z,width:"1264",height:"748"})),(0,a.kt)("h3",{id:"3-preview-yaml-representation"},"3. Preview: YAML Representation"),(0,a.kt)("p",null,"Now let's preview the YAML representation of our Config previously created by clicking the data preview button or type and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Kusion: Open Data Preview To the Side"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(66736).Z,width:"1077",height:"639"})),(0,a.kt)("h3",{id:"4-runtime-diff-and-go-online"},"4. Runtime Diff and Go online"),(0,a.kt)("p",null,"To view the runtime diff of the current stack, you could right-click at the configuraion main file and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Diff with Runtime and Apply")," to open the runtime diff page."),(0,a.kt)("p",null,"Then confirm the diff and make the changes go online."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(16161).Z,width:"1212",height:"729"})))}m.isMDXComponent=!0},16161:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/config-diff-apply-0b05ba764379b5118d2f75e1b2e3c7a0.gif"},51503:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-project-92123ea89068eb3ad68ba50189711440.gif"},66736:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/data-preview-51f7b7d1bfa9988c5fe505556c79f4cb.gif"}}]);
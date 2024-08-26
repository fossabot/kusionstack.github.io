"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),s=n(86010),o=n(72957),l=n(76775),i=n(75238),u=n(33609),c=n(92560);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=k({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var f=n(51048);const b="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},88134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(73992),o=n(18679);const l={},i="Install Kusion",u={unversionedId:"getting-started/install-kusion",id:"getting-started/install-kusion",title:"Install Kusion",description:"You can install the latest Kusion CLI on MacOS, Linux and Windows.",source:"@site/docs/kusion/2-getting-started/1-install-kusion.md",sourceDirName:"2-getting-started",slug:"/getting-started/install-kusion",permalink:"/docs/next/getting-started/install-kusion",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/2-getting-started/1-install-kusion.md",tags:[],version:"current",lastUpdatedBy:"hexin",lastUpdatedAt:1724678822,formattedLastUpdatedAt:"Aug 26, 2024",sidebarPosition:1,frontMatter:{},sidebar:"kusion",previous:{title:"Kusion vs Other Software",permalink:"/docs/next/what-is-kusion/kusion-vs-x"},next:{title:"Run Your First App on Kubernetes with Kusion",permalink:"/docs/next/getting-started/deliver-quickstart"}},c={},p=[{value:"MacOs/Linux",id:"macoslinux",level:2},{value:"Windows",id:"windows",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-kusion"},"Install Kusion"),(0,r.kt)("p",null,"You can install the latest Kusion CLI on MacOS, Linux and Windows."),(0,r.kt)("h2",{id:"macoslinux"},"MacOs/Linux"),(0,r.kt)("p",null,"For the MacOs and Linux, Homebrew and sh script are supported. Choose the one you prefer from the methods below."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Homebrew",mdxType:"TabItem"},(0,r.kt)("p",null,"The recommended method for installing on MacOS and Linux is to use the brew package manager."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# tap formula repository Kusionstack/tap\nbrew tap KusionStack/tap\n\n# install Kusion \nbrew install KusionStack/tap/kusion\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# update formulae from remote\nbrew update\n\n# update Kusion\nbrew upgrade KusionStack/tap/kusion\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Uninstall Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# uninstall Kusion\nbrew uninstall KusionStack/tap/kusion\n"))),(0,r.kt)(o.Z,{value:"curl | sh",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# install Kusion, default latest version\ncurl https://www.kusionstack.io/scripts/install.sh | sh\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install the Specified Version of Kusion")),(0,r.kt)("p",null,"You can also install the specified version of Kusion by appointing the version as shell script parameter, where the version is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/tags"},"available tag"),' trimming prefix "v", such as 0.11.0, 0.10.0, etc. In general, you don\'t need to specify Kusion version, just use the command above to install the latest version.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# install Kusion of specified version 0.11.0\ncurl https://www.kusionstack.io/scripts/install.sh | sh -s 0.11.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Uninstall Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# uninstall Kusion\ncurl https://www.kusionstack.io/scripts/uninstall.sh | sh\n")))),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,"For the Windows, Scoop and Powershell script are supported. Choose the one you prefer from the methods below."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Scoop",mdxType:"TabItem"},(0,r.kt)("p",null,"The recommended method for installing on Windows is to use the scoop package manager."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# add scoop bucket KusionStack\nscoop bucket add KusionStack https://github.com/KusionStack/scoop-bucket.git\n\n# install kusion\nscoop install KusionStack/kusion\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# update manifest from remote\nscoop update\n\n# update Kusion\nscoop install KusionStack/kusion\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Uninstall Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# uninstall Kusion\nbrew uninstall KusionStack/kusion\n"))),(0,r.kt)(o.Z,{value:"Powershell",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# install Kusion, default latest version\npowershell -Command "iwr -useb https://www.kusionstack.io/scripts/install.ps1 | iex"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install the Specified Version of Kusion")),(0,r.kt)("p",null,"You can also install the specified version of Kusion by appointing the version as shell script parameter, where the version is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/tags"},"available tag"),' trimming prefix "v", such as 0.11.0, etc. In general, you don\'t need to specify Kusion version, just use the command above to install the latest version.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# install Kusion of specified version 0.10.0\npowershell {"& { $(irm https://www.kusionstack.io/scripts/install.ps1) } -Version 0.11.0" | iex}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Uninstall Kusion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# uninstall Kusion\npowershell -Command "iwr -useb https://www.kusionstack.io/scripts/uninstall.ps1 | iex"\n')))))}m.isMDXComponent=!0}}]);
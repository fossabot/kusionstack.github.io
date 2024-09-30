"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),s=n(86010),o=n(72957),l=n(76775),u=n(75238),i=n(33609),c=n(92560);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,i]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),b(e)}),[i,b,s]),tabValues:s}}var h=n(51048);const v="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==l&&(p(t),u(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",v)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},69307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),s=n(73992),o=n(18679);const l={},u="Install Kusion",i={unversionedId:"getting-started/install-kusion",id:"version-v0.10/getting-started/install-kusion",title:"Install Kusion",description:"You can install the latest Kusion CLI on MacOS and Linux. Choose the one you prefer from the methods below.",source:"@site/docs_versioned_docs/version-v0.10/2-getting-started/1-install-kusion.md",sourceDirName:"2-getting-started",slug:"/getting-started/install-kusion",permalink:"/docs/v0.10/getting-started/install-kusion",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/2-getting-started/1-install-kusion.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:1,frontMatter:{},sidebar:"kusion",previous:{title:"Kusion vs Other Software",permalink:"/docs/v0.10/what-is-kusion/kusion-vs-x"},next:{title:"Deliver the WordPress Application on Kubernetes",permalink:"/docs/v0.10/getting-started/deliver-wordpress"}},c={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-kusion"},"Install Kusion"),(0,a.kt)("p",null,"You can install the latest Kusion CLI on MacOS and Linux. Choose the one you prefer from the methods below."),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Homebrew",mdxType:"TabItem"},(0,a.kt)("p",null,"The recommended method for installing on MacOS and Linux is to use the brew package manager."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install Kusion")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# tap formula repository Kusionstack/tap\nbrew tap KusionStack/tap\n\n# install Kusion \nbrew install KusionStack/tap/kusion\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Update Kusion")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# update formulae from remote\nbrew update\n\n# update Kusion\nbrew upgrade KusionStack/tap/kusion\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Uninstall Kusion")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# uninstall Kusion\nbrew uninstall KusionStack/tap/kusion\n"))),(0,a.kt)(o.Z,{value:"curl | sh",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install Kusion")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# install Kusion, default latest version\ncurl https://www.kusionstack.io/scripts/install.sh | sh\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install the Specified Version of Kusion")),(0,a.kt)("p",null,"You can also install the specified version of Kusion by appointing the version as shell script parameter, where the version is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/tags"},"available tag"),' trimming prefix "v", such as 0.10.0, 0.9.0, etc. In general, you don\'t need to specify Kusion version, just use the command above to install the latest version.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# install Kusion of specified version 0.10.0\ncurl https://www.kusionstack.io/scripts/install.sh | sh -s 0.10.0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Uninstall Kusion")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# uninstall Kusion\ncurl https://www.kusionstack.io/scripts/uninstall.sh | sh\n")))))}m.isMDXComponent=!0}}]);
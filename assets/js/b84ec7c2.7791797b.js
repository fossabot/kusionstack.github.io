"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33170],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(t),d=r,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return t?o.createElement(m,s(s({ref:n},l),{},{components:t})):o.createElement(m,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const i={},s="kusion config set",a={unversionedId:"reference/commands/kusion-config-set",id:"version-v0.12/reference/commands/kusion-config-set",title:"kusion config set",description:"Set a config item",source:"@site/docs_versioned_docs/version-v0.12/6-reference/1-commands/kusion-config-set.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-config-set",permalink:"/docs/reference/commands/kusion-config-set",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/1-commands/kusion-config-set.md",tags:[],version:"v0.12",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1719756905,formattedLastUpdatedAt:"Jun 30, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion config list",permalink:"/docs/reference/commands/kusion-config-list"},next:{title:"kusion config unset",permalink:"/docs/reference/commands/kusion-config-unset"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 12-Jun-2024",id:"auto-generated-by-spf13cobra-on-12-jun-2024",level:6}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-config-set"},"kusion config set"),(0,r.kt)("p",null,"Set a config item"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"This command sets the value of a specified kusion config item, where the config item must be registered, and the value must be in valid type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion config set\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  # Set a config item with string type value\n  kusion config set backends.current s3-pre\n  \n  # Set a config item with struct or map type value\n  kusion config set backends.s3-pre.configs \'{"bucket":"kusion"}\'\n')),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for set\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/commands/kusion-config"},"kusion config"),"\t - Interact with the Kusion config")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jun-2024"},"Auto generated by spf13/cobra on 12-Jun-2024"))}u.isMDXComponent=!0}}]);
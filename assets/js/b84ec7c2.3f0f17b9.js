"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?o.createElement(m,s(s({ref:t},l),{},{components:n})):o.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={},s="kusion config set",a={unversionedId:"reference/commands/kusion-config-set",id:"version-v0.12/reference/commands/kusion-config-set",title:"kusion config set",description:"Set a config item",source:"@site/docs_versioned_docs/version-v0.12/6-reference/1-commands/kusion-config-set.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-config-set",permalink:"/docs/reference/commands/kusion-config-set",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/1-commands/kusion-config-set.md",tags:[],version:"v0.12",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1720065334,formattedLastUpdatedAt:"Jul 4, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion config list",permalink:"/docs/reference/commands/kusion-config-list"},next:{title:"kusion config unset",permalink:"/docs/reference/commands/kusion-config-unset"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 12-Jun-2024",id:"auto-generated-by-spf13cobra-on-12-jun-2024",level:6}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-config-set"},"kusion config set"),(0,r.kt)("p",null,"Set a config item"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"This command sets the value of a specified kusion config item, where the config item must be registered, and the value must be in valid type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion config set\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  # Set a config item with string type value\n  kusion config set backends.current s3-pre\n  \n  # Set a config item with struct or map type value\n  kusion config set backends.s3-pre.configs \'{"bucket":"kusion"}\'\n')),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for set\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/commands/kusion-config"},"kusion config"),"\t - Interact with the Kusion config")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jun-2024"},"Auto generated by spf13/cobra on 12-Jun-2024"))}u.isMDXComponent=!0}}]);
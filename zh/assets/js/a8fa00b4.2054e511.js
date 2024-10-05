"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36014],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return t?o.createElement(d,a(a({ref:n},p),{},{components:t})):o.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const i={},a="kusion config",s={unversionedId:"reference/commands/kusion-config",id:"version-v0.11/reference/commands/kusion-config",title:"kusion config",description:"Interact with the Kusion config",source:"@site/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-config.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-config",permalink:"/zh/docs/v0.11/reference/commands/kusion-config",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-config.md",tags:[],version:"v0.11",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"2024\u5e7410\u67085\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion config unset",permalink:"/zh/docs/v0.11/reference/commands/kusion-config-unset"},next:{title:"kusion destroy",permalink:"/zh/docs/v0.11/reference/commands/kusion-destroy"}},c={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Apr-2024",id:"auto-generated-by-spf13cobra-on-29-apr-2024",level:6}],p={toc:l};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-config"},"kusion config"),(0,r.kt)("p",null,"Interact with the Kusion config"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Config contains the operation of Kusion configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion config [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for config\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of Internal Developer Platform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/reference/commands/kusion-config-get"},"kusion config get"),"\t - Get a config item"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/reference/commands/kusion-config-list"},"kusion config list"),"\t - List all config items"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/reference/commands/kusion-config-set"},"kusion config set"),"\t - Set a config item"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/reference/commands/kusion-config-unset"},"kusion config unset"),"\t - Unset a config item")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-apr-2024"},"Auto generated by spf13/cobra on 29-Apr-2024"))}f.isMDXComponent=!0}}]);
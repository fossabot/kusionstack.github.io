"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82313],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24763:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={title:"karpor syncer"},s=void 0,c={unversionedId:"references/cli-commands/karpor-syncer",id:"references/cli-commands/karpor-syncer",title:"karpor syncer",description:"karpor syncer",source:"@site/docs/karpor/5-references/1-cli-commands/2-karpor-syncer.md",sourceDirName:"5-references/1-cli-commands",slug:"/references/cli-commands/karpor-syncer",permalink:"/karpor/next/references/cli-commands/karpor-syncer",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/5-references/1-cli-commands/2-karpor-syncer.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727679725,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:2,frontMatter:{title:"karpor syncer"},sidebar:"karpor",previous:{title:"karpor",permalink:"/karpor/next/references/cli-commands/karpor"},next:{title:"OpenAPI",permalink:"/karpor/next/references/openapi"}},i={},p=[{value:"karpor syncer",id:"karpor-syncer",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 7-May-2024",id:"auto-generated-by-spf13cobra-on-7-may-2024",level:6}],l={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"karpor-syncer"},"karpor syncer"),(0,a.kt)("p",null,"start a resource syncer to sync resource from clusters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"karpor syncer [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --elastic-search-addresses strings   The elastic search address.\n      --health-probe-bind-address string   The address the probe endpoint binds to. (default ":8081")\n  -h, --help                               help for syncer\n      --metrics-bind-address string        The address the metric endpoint binds to. (default ":8080")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/karpor/next/references/cli-commands/karpor"},"karpor"),"\t - Launch an API server")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-7-may-2024"},"Auto generated by spf13/cobra on 7-May-2024"))}d.isMDXComponent=!0}}]);
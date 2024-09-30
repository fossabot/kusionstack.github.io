"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87186],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7167:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"karpor syncer"},s=void 0,c={unversionedId:"references/cli-commands/karpor-syncer",id:"version-v0.5/references/cli-commands/karpor-syncer",title:"karpor syncer",description:"karpor syncer",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.5/5-references/1-cli-commands/2-karpor-syncer.md",sourceDirName:"5-references/1-cli-commands",slug:"/references/cli-commands/karpor-syncer",permalink:"/zh/karpor/references/cli-commands/karpor-syncer",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.5/5-references/1-cli-commands/2-karpor-syncer.md",tags:[],version:"v0.5",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727688217,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:2,frontMatter:{title:"karpor syncer"},sidebar:"karpor",previous:{title:"karpor",permalink:"/zh/karpor/references/cli-commands/karpor"},next:{title:"OpenAPI",permalink:"/zh/karpor/references/openapi"}},i={},p=[{value:"karpor syncer",id:"karpor-syncer",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 7-May-2024",id:"auto-generated-by-spf13cobra-on-7-may-2024",level:6}],l={toc:p};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"karpor-syncer"},"karpor syncer"),(0,o.kt)("p",null,"start a resource syncer to sync resource from clusters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"karpor syncer [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --elastic-search-addresses strings   The elastic search address.\n      --health-probe-bind-address string   The address the probe endpoint binds to. (default ":8081")\n  -h, --help                               help for syncer\n      --metrics-bind-address string        The address the metric endpoint binds to. (default ":8080")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/karpor/references/cli-commands/karpor"},"karpor"),"\t - Launch an API server")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-7-may-2024"},"Auto generated by spf13/cobra on 7-May-2024"))}d.isMDXComponent=!0}}]);
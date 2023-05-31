"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(a,".").concat(d)]||f[d]||c[d]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},28753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={},l="uninstall",s={unversionedId:"reference/cli/kusionup/uninstall",id:"reference/cli/kusionup/uninstall",title:"uninstall",description:'Uninstall Kusion with a version, alias: "ui"',source:"@site/docs/reference/cli/kusionup/uninstall.md",sourceDirName:"reference/cli/kusionup",slug:"/reference/cli/kusionup/uninstall",permalink:"/docs/reference/cli/kusionup/uninstall",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionup/uninstall.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685503692,formattedLastUpdatedAt:"5/31/2023",frontMatter:{},sidebar:"reference",previous:{title:"show",permalink:"/docs/reference/cli/kusionup/show"},next:{title:"version",permalink:"/docs/reference/cli/kusionup/version"}},a={},u=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uninstall"},"uninstall"),(0,i.kt)("p",null,'Uninstall Kusion with a version, alias: "ui"'),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Uninstall Kusion by providing a version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusionup uninstall <VERSION>... [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n  kusionup uninstall open@latest\n  kusionup uninstall open@v0.2.15\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help          help for uninstall\n      --ignore-hint   Ignore uninstall hint\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --custom-sources-file string   Custom sources file\n  -v, --verbose                      Verbose\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusionup/"},"kusionup"),"\t - The Kusion installer")))}c.isMDXComponent=!0}}]);
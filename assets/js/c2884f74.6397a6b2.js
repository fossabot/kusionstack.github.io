"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={},i="kusion destroy",a={unversionedId:"kusion/reference/commands/kusion-destroy",id:"version-v0.10/kusion/reference/commands/kusion-destroy",title:"kusion destroy",description:"Destroy resources within the stack.",source:"@site/versioned_docs/version-v0.10/kusion/6-reference/1-commands/kusion-destroy.md",sourceDirName:"kusion/6-reference/1-commands",slug:"/kusion/reference/commands/kusion-destroy",permalink:"/docs/kusion/reference/commands/kusion-destroy",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.10/kusion/6-reference/1-commands/kusion-destroy.md",tags:[],version:"v0.10",lastUpdatedBy:"KK",lastUpdatedAt:1711420915,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion compile",permalink:"/docs/kusion/reference/commands/kusion-compile"},next:{title:"kusion init",permalink:"/docs/kusion/reference/commands/kusion-init"}},c={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Jan-2024",id:"auto-generated-by-spf13cobra-on-4-jan-2024",level:6}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-destroy"},"kusion destroy"),(0,o.kt)("p",null,"Destroy resources within the stack."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Destroy resources within the stack."),(0,o.kt)("p",null," Please note that the destroy command does NOT perform resource version checks. Therefore, if someone submits an update to a resource at the same time you execute a destroy command, their update will be lost along with the rest of the resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion destroy [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Delete resources of current stack\n  kusion destroy\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -D, --argument stringToString   Specify the top-level argument (default [])\n  -C, --backend-config strings    backend-config config state storage backend\n      --backend-type string       backend-type specify state storage backend\n  -d, --detail                    Automatically show plan details after previewing it\n  -h, --help                      help for destroy\n      --operator string           Specify the operator\n  -Y, --setting strings           Specify the command line setting files\n  -w, --workdir string            Specify the work directory\n  -y, --yes                       Automatically approve and perform the update after previewing it\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/kusion/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of KusionStack")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-jan-2024"},"Auto generated by spf13/cobra on 4-Jan-2024"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},s="kusion generate",i={unversionedId:"reference/commands/kusion-generate",id:"version-v0.11/reference/commands/kusion-generate",title:"kusion generate",description:"Generate and print the resulting Spec resources of target Stack",source:"@site/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-generate.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-generate",permalink:"/zh/docs/v0.11/reference/commands/kusion-generate",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-generate.md",tags:[],version:"v0.11",lastUpdatedBy:"Ekjot Singh",lastUpdatedAt:1722091057,formattedLastUpdatedAt:"2024\u5e747\u670827\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion destroy",permalink:"/zh/docs/v0.11/reference/commands/kusion-destroy"},next:{title:"kusion init",permalink:"/zh/docs/v0.11/reference/commands/kusion-init"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Apr-2024",id:"auto-generated-by-spf13cobra-on-29-apr-2024",level:6}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-generate"},"kusion generate"),(0,o.kt)("p",null,"Generate and print the resulting Spec resources of target Stack"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    This command generates Spec resources with given values, then write the resulting Spec resources to specific output file or stdout.\n\n    The nearest parent folder containing a stack.yaml file is loaded from the project in the current directory.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion generate [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n        # Generate and write Spec resources to specific output file\n        kusion generate -o /tmp/spec.yaml\n\n        # Generate spec with custom workspace\n        kusion generate -o /tmp/spec.yaml --workspace dev\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --backend string     The backend to use, supports 'local', 'oss' and 's3'.\n  -h, --help               help for generate\n      --no-style           no-style sets to RawOutput mode and disables all of styling\n  -o, --output string      File to write generated Spec resources to\n      --set stringArray    Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)\n  -w, --workdir string     The work directory to run Kusion CLI.\n      --workspace string   The name of target workspace to operate in.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of Internal Developer Platform")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-apr-2024"},"Auto generated by spf13/cobra on 29-Apr-2024"))}u.isMDXComponent=!0}}]);
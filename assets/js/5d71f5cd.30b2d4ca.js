"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=c(n),m=r,h=l["".concat(u,".").concat(m)]||l[m]||d[m]||s;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=l;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},27701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={},i="kusion mod push",a={unversionedId:"reference/commands/kusion-mod-push",id:"version-v0.11/reference/commands/kusion-mod-push",title:"kusion mod push",description:"Push a module to OCI registry",source:"@site/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-mod-push.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-mod-push",permalink:"/docs/reference/commands/kusion-mod-push",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-mod-push.md",tags:[],version:"v0.11",lastUpdatedBy:"Chaer",lastUpdatedAt:1716971694,formattedLastUpdatedAt:"May 29, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion mod init",permalink:"/docs/reference/commands/kusion-mod-init"},next:{title:"kusion mod",permalink:"/docs/reference/commands/kusion-mod"}},u={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Apr-2024",id:"auto-generated-by-spf13cobra-on-29-apr-2024",level:6}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-mod-push"},"kusion mod push"),(0,r.kt)("p",null,"Push a module to OCI registry"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    The push command packages the module as an OCI artifact and pushes it to the\n    OCI registry using the version as the image tag.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion mod push [MODULE PATH] [OCI REPOSITORY URL]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n        # Push a module of current OS arch to an OCI Registry using a token\n        kusion mod push /path/to/my-module oci://ghcr.io/org --creds <YOUR_TOKEN>\n\n        # Push a module of specific OS arch to an OCI Registry using a token\n        kusion mod push /path/to/my-module oci://ghcr.io/org --os-arch==darwin/arm64 --creds <YOUR_TOKEN>\n        \n        # Push a module to an OCI Registry using a credentials in <YOUR_USERNAME>:<YOUR_TOKEN> format. \n        kusion mod push /path/to/my-module oci://ghcr.io/org --creds <YOUR_USERNAME>:<YOUR_TOKEN>\n\n        # Push a release candidate without marking it as the latest stable\n        kusion mod push /path/to/my-module oci://ghcr.io/org --latest=false\n\n        # Push a module with custom OCI annotations\n        kusion mod push /path/to/my-module oci://ghcr.io/org \\\n          --annotation='org.opencontainers.image.documentation=https://app.org/docs'\n\n        # Push and sign a module with Cosign (the cosign binary must be present in PATH)\n        export COSIGN_PASSWORD=password\n        kusion mod push /path/to/my-module oci://ghcr.io/org \\\n          --sign=cosign --cosign-key=/path/to/cosign.key\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -a, --annotations strings   Set custom OCI annotations in '<KEY>=<VALUE>' format.\n      --cosign-key string     The Cosign private key for signing the module.\n      --creds string          The credentials token for the OCI registry in <YOUR_TOKEN> or <YOUR_USERNAME>:<YOUR_TOKEN> format.\n  -h, --help                  help for push\n      --insecure-registry     If true, allows connecting to a OCI registry without TLS or with self-signed certificates.\n      --latest                Tags the current version as the latest stable module version. (default true)\n      --os-arch string        The os arch of the module e.g. 'darwin/arm64', 'linux/amd64'.\n      --sign string           Signs the module with the specified provider.\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/commands/kusion-mod"},"kusion mod"),"\t - Manage Kusion modules")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-apr-2024"},"Auto generated by spf13/cobra on 29-Apr-2024"))}d.isMDXComponent=!0}}]);
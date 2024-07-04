"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,k=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(k,l(l({ref:t},c),{},{components:n})):o.createElement(k,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={},l="kusion build",u={unversionedId:"reference/cli/kusion/kusion_build",id:"version-v0.9/reference/cli/kusion/kusion_build",title:"kusion build",description:"Build Kusion modules in a Stack to the Intent.",source:"@site/docs_versioned_docs/version-v0.9/reference/cli/kusion/kusion_build.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/kusion_build",permalink:"/docs/v0.9/reference/cli/kusion/kusion_build",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/reference/cli/kusion/kusion_build.md",tags:[],version:"v0.9",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1720065334,formattedLastUpdatedAt:"Jul 4, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion apply",permalink:"/docs/v0.9/reference/cli/kusion/kusion_apply"},next:{title:"kusion compile",permalink:"/docs/v0.9/reference/cli/kusion/kusion_compile"}},a={},s=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 30-Nov-2023",id:"auto-generated-by-spf13cobra-on-30-nov-2023",level:6}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-build"},"kusion build"),(0,r.kt)("p",null,"Build Kusion modules in a Stack to the Intent."),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Build Kusion modules in a Stack to the Intent."),(0,r.kt)("p",null," The command must be executed in a Stack or by specifying a Stack directory with the -w flag. You can provide a list of arguments to replace the placeholders defined in KCL, and use the --output flag to output the built results to a file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion build [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Build main.k with arguments\n  kusion build -D name=test -D age=18\n  \n  # Build main.k with work directory\n  kusion build -w appops/demo/dev\n  \n  # Build main.k and write result into output.yaml\n  kusion build -o output.yaml\n  \n  # Build without output style and color\n  kusion build --no-style=true\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -D, --argument stringToString   Specify the top-level argument (default [])\n  -h, --help                      help for build\n      --no-style                  Disable the output style and color\n  -o, --output string             Specify the output file\n  -w, --workdir string            Specify the work directory\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-30-nov-2023"},"Auto generated by spf13/cobra on 30-Nov-2023"))}p.isMDXComponent=!0}}]);
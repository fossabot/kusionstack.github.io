"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},i="Diff",l={unversionedId:"reference/cli/kusionctl/diff",id:"reference/cli/kusionctl/diff",title:"Diff",description:"\u6bd4\u8f83\u8f93\u5165\u6587\u4ef6 ` \u548c ` \u4e4b\u95f4\u7684\u5dee\u5f02",source:"@site/docs/reference/cli/kusionctl/diff.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/diff",permalink:"/zh-CN/docs/reference/cli/kusionctl/diff",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/diff.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685517977,formattedLastUpdatedAt:"2023/5/31",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"reference",previous:{title:"Compile",permalink:"/zh-CN/docs/reference/cli/kusionctl/compile"},next:{title:"Apply",permalink:"/zh-CN/docs/reference/cli/kusionctl/apply"}},p={},s=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],c={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"diff"},"Diff"),(0,o.kt)("p",null,"\u6bd4\u8f83\u8f93\u5165\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"<from>")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"<to>")," \u4e4b\u95f4\u7684\u5dee\u5f02"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"\u6bd4\u8f83\u6587\u4ef6\u5dee\u5f02\u5e76\u663e\u793a\u589e\u91cf\u3002 \u652f\u6301\u7684\u6587\u4ef6\u7c7b\u578b\u6709: YAML (",(0,o.kt)("a",{parentName:"p",href:"http://yaml.org/"},"http://yaml.org/"),") \u548c JSON (",(0,o.kt)("a",{parentName:"p",href:"http://json.org/"},"http://json.org/"),")\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion diff <from> <to> [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # \u6bd4\u8f83\u5bf9\u8c61\u6765\u81ea\u6587\u4ef6\n  kusion diff pod-1.yaml pod-2.yaml\n  kusion diff pod-1.yaml pod-2.yaml --swap=true\n  \n  # \u6bd4\u8f83\u5bf9\u8c61\u6765\u81ea\u6807\u51c6\u8f93\u5165\n  cat pod-1.yaml > pod-full.yaml\n  echo '---' >> pod-full.yaml\n  cat pod-2.yaml >> pod-full.yaml\n  cat pod-full.yaml | kusion diff -\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --diff-mode string              \u5dee\u5f02\u6a21\u5f0f\u3002normal \u548c ignore-added \u4e4b\u4e00\u3002\u9ed8\u8ba4\u503c normal (default "normal")\n  -h, --help                          help for diff\n  -i, --ignore-order-changes          \u5ffd\u7565\u5217\u8868\u4e2d\u7684\u987a\u5e8f\u53d8\u5316\uff0c\u9ed8\u8ba4\u4e3a\u5426\n  -b, --omit-header                   \u7701\u7565 dyff \u6458\u8981\u6807\u9898\uff0c\u9ed8\u8ba4\u4e3a\u5426\n  -o, --output string                 \u6307\u5b9a\u8f93\u51fa\u98ce\u683c\uff0chuman \u548c raw \u4e4b\u4e00\uff0c\u9ed8\u8ba4\u503c human (default "human")\n  -k, --sort-by-kubernetes-resource   \u6309 kubernetes \u8d44\u6e90\u987a\u5e8f\u6392\u5e8f\uff08\u975e\u6807\u51c6\u884c\u4e3a\uff09\u3002\u9ed8\u8ba4\u4e3a\u5426 (default true)\n      --swap                          \u4ea4\u6362 <from> \u548c <to> \u8fdb\u884c\u6bd4\u8f83\u3002\u6ce8\u610f <from> \u4e3a\u6807\u51c6\u8f93\u5165\u65f6\u65e0\u6548\u3002\u9ed8\u8ba4\u4e3a\u5426\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}f.isMDXComponent=!0}}]);
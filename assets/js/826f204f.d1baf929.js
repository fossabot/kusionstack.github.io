"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2425],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:5},p="Diff \u6bd4\u8f83\u6587\u6863\u5dee\u5f02",c={unversionedId:"reference/cli/kusionctl/diff",id:"reference/cli/kusionctl/diff",title:"Diff \u6bd4\u8f83\u6587\u6863\u5dee\u5f02",description:"\u6bd4\u8f83\u8f93\u5165\u6587\u4ef6 ` \u548c ` \u4e4b\u95f4\u7684\u5dee\u5f02",source:"@site/docs/reference/cli/kusionctl/diff.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/diff",permalink:"/docs/reference/cli/kusionctl/diff",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/diff.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653552030,formattedLastUpdatedAt:"2022/5/26",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"reference",previous:{title:"\u7f16\u8bd1\u5de5\u7a0b",permalink:"/docs/reference/cli/kusionctl/compile"},next:{title:"Apply",permalink:"/docs/reference/cli/kusionctl/apply"}},u={},f=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],s={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"diff-\u6bd4\u8f83\u6587\u6863\u5dee\u5f02"},"Diff \u6bd4\u8f83\u6587\u6863\u5dee\u5f02"),(0,i.kt)("p",null,"\u6bd4\u8f83\u8f93\u5165\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"<from>")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"<to>")," \u4e4b\u95f4\u7684\u5dee\u5f02"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"\u6bd4\u8f83\u6587\u4ef6\u5dee\u5f02\u5e76\u663e\u793a\u589e\u91cf\u3002 \u652f\u6301\u7684\u6587\u4ef6\u7c7b\u578b\u6709: YAML (",(0,i.kt)("a",{parentName:"p",href:"http://yaml.org/"},"http://yaml.org/"),") \u548c JSON (",(0,i.kt)("a",{parentName:"p",href:"http://json.org/"},"http://json.org/"),")\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion diff <from> <to> [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # \u6bd4\u8f83\u5bf9\u8c61\u6765\u81ea\u6587\u4ef6\n  kusion diff pod-1.yaml pod-2.yaml\n  kusion diff pod-1.yaml pod-2.yaml --swap=true\n  \n  # \u6bd4\u8f83\u5bf9\u8c61\u6765\u81ea\u6807\u51c6\u8f93\u5165\n  cat pod-1.yaml > pod-full.yaml\n  echo '---' >> pod-full.yaml\n  cat pod-2.yaml >> pod-full.yaml\n  cat pod-full.yaml | kusion diff -\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --diff-mode string              \u5dee\u5f02\u6a21\u5f0f\u3002normal \u548c ignore-added \u4e4b\u4e00\u3002\u9ed8\u8ba4\u503c normal (default "normal")\n  -h, --help                          help for diff\n  -i, --ignore-order-changes          \u5ffd\u7565\u5217\u8868\u4e2d\u7684\u987a\u5e8f\u53d8\u5316\uff0c\u9ed8\u8ba4\u4e3a\u5426\n  -b, --omit-header                   \u7701\u7565 dyff \u6458\u8981\u6807\u9898\uff0c\u9ed8\u8ba4\u4e3a\u5426\n  -o, --output string                 \u6307\u5b9a\u8f93\u51fa\u98ce\u683c\uff0chuman \u548c raw \u4e4b\u4e00\uff0c\u9ed8\u8ba4\u503c human (default "human")\n  -k, --sort-by-kubernetes-resource   \u6309 kubernetes \u8d44\u6e90\u987a\u5e8f\u6392\u5e8f\uff08\u975e\u6807\u51c6\u884c\u4e3a\uff09\u3002\u9ed8\u8ba4\u4e3a\u5426 (default true)\n      --swap                          \u4ea4\u6362 <from> \u548c <to> \u8fdb\u884c\u6bd4\u8f83\u3002\u6ce8\u610f <from> \u4e3a\u6807\u51c6\u8f93\u5165\u65f6\u65e0\u6548\u3002\u9ed8\u8ba4\u4e3a\u5426\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}d.isMDXComponent=!0}}]);
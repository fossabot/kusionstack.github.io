"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Code Conventions"},o=void 0,l={unversionedId:"developer-guide/conventions/code-conventions",id:"version-v0.4/developer-guide/conventions/code-conventions",title:"Code Conventions",description:"In this section, you will find the code conventions for all kinds of code Karpor project related. It's not necessary to learn all of them at once, but make sure you have read corresponding parts before you start to code.",source:"@site/karpor_versioned_docs/version-v0.4/4-developer-guide/2-conventions/2-code-conventions.md",sourceDirName:"4-developer-guide/2-conventions",slug:"/developer-guide/conventions/code-conventions",permalink:"/karpor/developer-guide/conventions/code-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/2-conventions/2-code-conventions.md",tags:[],version:"v0.4",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1722237898,formattedLastUpdatedAt:"Jul 29, 2024",sidebarPosition:2,frontMatter:{title:"Code Conventions"},sidebar:"karpor",previous:{title:"Release Process And Cadence",permalink:"/karpor/developer-guide/conventions/release-process"},next:{title:"Test Conventions",permalink:"/karpor/developer-guide/conventions/test-conventions"}},s={},p=[{value:"Go Code Conventions",id:"go-code-conventions",level:2},{value:"Bash or Script Conventions",id:"bash-or-script-conventions",level:2},{value:"Directory and File Conventions",id:"directory-and-file-conventions",level:2},{value:"Linting and Formatting",id:"linting-and-formatting",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, you will find the code conventions for all kinds of code Karpor project related. It's not necessary to learn all of them at once, but make sure you have read corresponding parts before you start to code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#go-code-conventions"},"Go Code Conventions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bash-or-script-conventions"},"Bash or Script Conventions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#directory-and-file-conventions"},"Directory and File Conventions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#linting-and-formatting"},"Linting and Formatting"))),(0,r.kt)("h2",{id:"go-code-conventions"},"Go Code Conventions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://go.dev/wiki/CodeReviewComments"},"Go Code Review Comments"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/effective_go"},"Effective Go"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Know and avoid ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/lavalamp/4bd23295a9f32706a48f"},"Go landmines"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comment your code."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/blog/godoc"},"Go's commenting conventions")),(0,r.kt)("li",{parentName:"ul"},"If reviewers ask questions about why the code is the way it is, that's a\nsign that comments might be helpful."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Command-line flags should use dashes, not underscores")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'According to RFC3986, URLs are "case sensitive". Karpor uses ',(0,r.kt)("inlineCode",{parentName:"li"},"kebab-case")," for API URLs.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g.: ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /rest-api/v1/resource-group-rule")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Naming"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please consider package name when selecting an interface name, and avoid\nredundancy."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g.: ",(0,r.kt)("inlineCode",{parentName:"li"},"storage.Interface")," is better than ",(0,r.kt)("inlineCode",{parentName:"li"},"storage.StorageInterface"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not use uppercase characters, underscores, or dashes in package\nnames.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please consider parent directory name when choosing a package name."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"so pkg/manager/cluster/foo.go should say ",(0,r.kt)("inlineCode",{parentName:"li"},"package cluster"),"\nnot ",(0,r.kt)("inlineCode",{parentName:"li"},"package clustermanager"),"."),(0,r.kt)("li",{parentName:"ul"},"Unless there's a good reason, the ",(0,r.kt)("inlineCode",{parentName:"li"},"package foo")," line should match\nthe name of the directory in which the .go file exists."),(0,r.kt)("li",{parentName:"ul"},"Importers can use a different name if they need to disambiguate."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Locks should be called ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," and should never be embedded (always ",(0,r.kt)("inlineCode",{parentName:"p"},"lock sync.Mutex"),"). When multiple locks are present, give each lock a distinct name\nfollowing Go conventions - ",(0,r.kt)("inlineCode",{parentName:"p"},"stateLock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mapLock")," etc."))))),(0,r.kt)("h2",{id:"bash-or-script-conventions"},"Bash or Script Conventions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://google.github.io/styleguide/shell.xml"},"https://google.github.io/styleguide/shell.xml")),(0,r.kt)("li",{parentName:"ul"},"Ensure that build, release, test, and cluster-management scripts run on\nmacOS")),(0,r.kt)("h2",{id:"directory-and-file-conventions"},"Directory and File Conventions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avoid package sprawl. Find an appropriate subdirectory for new packages."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Libraries with no more appropriate home belong in new package\nsubdirectories of pkg/util"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Avoid general utility packages. Packages called "util" are suspect. Instead,\nderive a name that describes your desired function. For example, the utility\nfunctions dealing with waiting for operations are in the "wait" package and\ninclude functionality like Poll. So the full name is wait.Poll')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All filenames should be lowercase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go source files and directories use underscores, not dashes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Package directories should generally avoid using separators as much as\npossible (when packages are multiple words, they usually should be in nested\nsubdirectories)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Document directories and filenames should use dashes rather than underscores")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contrived examples that illustrate system features belong in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/user-guide")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/admin"),", depending on whether it is a feature primarily\nintended for users that deploy applications or cluster administrators,\nrespectively. Actual application examples belong in /examples."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Examples should also illustrate ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/overview/"},"best practices for configuration and using the system")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Third-party code"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go code for normal third-party dependencies is managed using\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules"},"go modules"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Other third-party code belongs in ",(0,r.kt)("inlineCode",{parentName:"p"},"/third_party")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"forked third party Go code goes in ",(0,r.kt)("inlineCode",{parentName:"li"},"/third_party/forked")),(0,r.kt)("li",{parentName:"ul"},"forked ",(0,r.kt)("em",{parentName:"li"},"golang stdlib")," code goes in ",(0,r.kt)("inlineCode",{parentName:"li"},"/third_party/forked/golang")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Third-party code must include licenses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This includes modified third-party code and excerpts, as well"))))),(0,r.kt)("h2",{id:"linting-and-formatting"},"Linting and Formatting"),(0,r.kt)("p",null,"To ensure consistency across the Go codebase, we require all code to pass a number of linter checks."),(0,r.kt)("p",null,"To run all linters, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lint")," Makefile target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make lint\n")),(0,r.kt)("p",null,"The command will clean code along with some lint checks. Please remember to check in all changes after that."))}d.isMDXComponent=!0}}]);
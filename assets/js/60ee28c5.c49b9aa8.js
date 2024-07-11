"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67370],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return o?n.createElement(h,a(a({ref:t},p),{},{components:o})):n.createElement(h,a({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2723:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={},a="Contributing Guide",l={unversionedId:"developer-guide/contribution-guide/index",id:"developer-guide/contribution-guide/index",title:"Contributing Guide",description:"Contributing Guide that introduces how to participate and contribute to the community.",source:"@site/docs/karpor/4-developer-guide/1-contribution-guide/index.md",sourceDirName:"4-developer-guide/1-contribution-guide",slug:"/developer-guide/contribution-guide/",permalink:"/karpor/next/developer-guide/contribution-guide/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/4-developer-guide/1-contribution-guide/index.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1720688154,formattedLastUpdatedAt:"Jul 11, 2024",frontMatter:{},sidebar:"karpor",previous:{title:"One-Pass with Proxy",permalink:"/karpor/next/user-guide/best-production-practices/one-pass-with-proxy"},next:{title:"Non-code Contribution Guide",permalink:"/karpor/next/developer-guide/contribution-guide/non-code-contribute"}},u={},s=[{value:"Before contributing",id:"before-contributing",level:2},{value:"Find a Contribution Point",id:"find-a-contribution-point",level:3},{value:"How to Contribute Non-code",id:"how-to-contribute-non-code",level:3},{value:"How to Contribute Code",id:"how-to-contribute-code",level:3},{value:"Contribute a Pull Request",id:"contribute-a-pull-request",level:2},{value:"Fork Repository",id:"fork-repository",level:3},{value:"Develop Code/Non-Code",id:"develop-codenon-code",level:3},{value:"Open a Pull Request",id:"open-a-pull-request",level:3},{value:"Sign CLA",id:"sign-cla",level:3},{value:"PR Checks",id:"pr-checks",level:3},{value:"Become a Community Member",id:"become-a-community-member",level:2}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-guide"},"Contributing Guide"),(0,r.kt)("p",null,"Contributing Guide that introduces how to participate and contribute to the community."),(0,r.kt)("p",null,"To help us create a safe and positive community experience for all, we require all participants adhere to the CNCF Community ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cncf/foundation/blob/main/code-of-conduct.md"},"Code of Conduct"),"."),(0,r.kt)("h2",{id:"before-contributing"},"Before contributing"),(0,r.kt)("h3",{id:"find-a-contribution-point"},"Find a Contribution Point"),(0,r.kt)("p",null,"You can contribute to Karpor in several ways including code and non-code contributions,\nwe appreciate every effort you contribute to the community."),(0,r.kt)("p",null,"Here are some examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contribute to the codebase and docs."),(0,r.kt)("li",{parentName:"ul"},"Report and triage issues."),(0,r.kt)("li",{parentName:"ul"},"Organize meetups and user groups in your local area."),(0,r.kt)("li",{parentName:"ul"},"Help others by answering questions about Karpor.")),(0,r.kt)("p",null,"And:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you don\u2019t know what issues start, we have prepared a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues/463"},"Community tasks | \u65b0\u624b\u4efb\u52a1\u6e05\u5355 \ud83c\udf96\ufe0e"),", or you can filter ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22"},"help wanted")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues?q=is%3Aopen+is%3Aissue++label%3A%22good+first+issue%22"},"good first issue")," label in issue tracker. you can choose the issue you like."),(0,r.kt)("li",{parentName:"ul"},"If you have any questions, please ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues/new/choose"},"Submit the Issue")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/discussions/new/choose"},"Post on the discussions"),", we will answer as soon as possible.")),(0,r.kt)("h3",{id:"how-to-contribute-non-code"},"How to Contribute Non-code"),(0,r.kt)("p",null,"We regard non-coding contribution as equally important with code contribution for the community's very existence and its future growth."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refer to ",(0,r.kt)("a",{parentName:"li",href:"./non-code-contribute"},"Non-code Contribution Guide")," to know how you could help.")),(0,r.kt)("h3",{id:"how-to-contribute-code"},"How to Contribute Code"),(0,r.kt)("p",null,"Unsure where to begin contributing to Karpor codebase? Start by browsing issues labeled ",(0,r.kt)("inlineCode",{parentName:"p"},"good first issue")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"help wanted"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/labels/good%20first%20issue"},"Good first issue")," issues are generally straightforward to complete."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/labels/help%20wanted"},"Help wanted")," issues are problems we would like the community to help us with regardless of complexity."),(0,r.kt)("li",{parentName:"ul"},"Refer to ",(0,r.kt)("a",{parentName:"li",href:"./code-contribute"},"Code Contribution Guide")," for more details.")),(0,r.kt)("p",null,"Learn ",(0,r.kt)("a",{parentName:"p",href:"../conventions/code-conventions"},"Code Conventions")," and ",(0,r.kt)("a",{parentName:"p",href:"../conventions/test-conventions"},"Test Conventions")," and understand what to pay attention to when writing code."),(0,r.kt)("p",null,"And learn the ",(0,r.kt)("a",{parentName:"p",href:"../conventions/release-process"},"Release Process And Cadence")," to know when your code changes will be released."),(0,r.kt)("h2",{id:"contribute-a-pull-request"},"Contribute a Pull Request"),(0,r.kt)("p",null,"After opening or claiming an issue, you could contribute codes or non-codes to karpor by a pull request. Here are the steps you should follow:"),(0,r.kt)("h3",{id:"fork-repository"},"Fork Repository"),(0,r.kt)("p",null,"Karpor adopts trunk-based development, i.e., the code used for release is maintained on the main branch."),(0,r.kt)("p",null,"Thus, to develop karpor, you have to fork one project in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor"},"karpor")," repository to your workspace, and then check out a new branch to develop coding."),(0,r.kt)("h3",{id:"develop-codenon-code"},"Develop Code/Non-Code"),(0,r.kt)("p",null,"Now you can start writing to solve the issue. To maintain the quality of karpor, after submitting the PR, some necessary checks will be triggered."),(0,r.kt)("p",null,"After the development is completed, commit and push to your forked repository. Since the PR Title will be used as a merging commit message, we ask your PR Title to meet the ",(0,r.kt)("a",{parentName:"p",href:"/karpor/next/developer-guide/conventions/commit-conventions"},"Commit Conventions"),"."),(0,r.kt)("p",null,"Here are some simple explanations:"),(0,r.kt)("p",null,"PR Title should be organized following this structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<type>[optional scope]: <subject>\n\n[optional body]\n")),(0,r.kt)("p",null,"The required type helps better capture the area of the commit, based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular guidelines"),"."),(0,r.kt)("p",null,"We use lowercase for ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>")," to avoid spending time on case-sensitive issues. ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>")," can be one of the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"feat: A new feature\nfix: A bug fix\ndocs: Documentation only changes\nbuild: Changes that affect the build system or external dependencies\nstyle: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)\nrefactor: A code change that neither fixes a bug nor adds a feature\nperf: A code change that improves performance\ntest: Adding missing tests or correcting existing tests\nchore: Changes to the build process or auxiliary tools and libraries such as documentation generation\n")),(0,r.kt)("h3",{id:"open-a-pull-request"},"Open a Pull Request"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/pulls"},"Open a pull request")," from the develop branch of your forked repository to the main branch of karpor. You should clearly describe what you do in the PR, and link it to an issue. Besides, the PR title should also follow the commit conventions described above, and must be 5-256 characters in length, prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"WIP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"[WIP]")," are not allowed."),(0,r.kt)("h3",{id:"sign-cla"},"Sign CLA"),(0,r.kt)("p",null,"If it was your first pull request, you need to sign our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/.github/blob/main/CLA.md"},"CLA(Contributor License Agreement)"),". The only thing you need to do is to post a pull request comment same as the below format:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"I have read the CLA Document and I hereby sign the CLA")),(0,r.kt)("p",null,"If your CLA signature failed, you may find the solutions below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The comment must be in the same format as above, with no extra spaces, line breaks, etc."),(0,r.kt)("li",{parentName:"ul"},"The git committer must be the same one who created the Karpor PR")),(0,r.kt)("h3",{id:"pr-checks"},"PR Checks"),(0,r.kt)("p",null,"To keep the reliability of the karpor project, the following check will get triggered automatically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit Test"),(0,r.kt)("li",{parentName:"ul"},"Golang Lint"),(0,r.kt)("li",{parentName:"ul"},"Commit Lint"),(0,r.kt)("li",{parentName:"ul"},"PR Title Lint"),(0,r.kt)("li",{parentName:"ul"},"License Lint"),(0,r.kt)("li",{parentName:"ul"},"Markdown Link Lint")),(0,r.kt)("p",null,"Please make sure your PR passes these checks."),(0,r.kt)("h2",{id:"become-a-community-member"},"Become a Community Member"),(0,r.kt)("p",null,"If you're interested to become a community member or learn more about the governance, please check the ",(0,r.kt)("a",{parentName:"p",href:"/karpor/next/developer-guide/contribution-guide/roles"},"Roles")," for details."),(0,r.kt)("p",null,"Enjoy coding and collaboration in Karpor world!"))}c.isMDXComponent=!0}}]);
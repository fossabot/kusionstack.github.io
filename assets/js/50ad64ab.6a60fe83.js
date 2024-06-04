"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?l.createElement(g,o(o({ref:t},p),{},{components:n})):l.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const a={title:"Code Contribution Guide"},o=void 0,r={unversionedId:"developer-guide/contribution-guide/code-contribute",id:"version-v0.4/developer-guide/contribution-guide/code-contribute",title:"Code Contribution Guide",description:"In this code contribution guide, you will learn about the following:",source:"@site/karpor_versioned_docs/version-v0.4/4-developer-guide/1-contribution-guide/2-code-contribute.md",sourceDirName:"4-developer-guide/1-contribution-guide",slug:"/developer-guide/contribution-guide/code-contribute",permalink:"/karpor/developer-guide/contribution-guide/code-contribute",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/1-contribution-guide/2-code-contribute.md",tags:[],version:"v0.4",lastUpdatedBy:"elliotxx",lastUpdatedAt:1717490853,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:2,frontMatter:{title:"Code Contribution Guide"},sidebar:"karpor",previous:{title:"Non-code Contribution Guide",permalink:"/karpor/developer-guide/contribution-guide/non-code-contribute"},next:{title:"Release Process And Cadence",permalink:"/karpor/developer-guide/conventions/release-process"}},u={},s=[{value:"Running Karpor Locally",id:"running-karpor-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Building",id:"building",level:3},{value:"Testing",id:"testing",level:3},{value:"Creating a Pull Request",id:"creating-a-pull-request",level:2},{value:"Before you begin",id:"before-you-begin",level:3},{value:"Your First Pull Request",id:"your-first-pull-request",level:3},{value:"Code Review",id:"code-review",level:2},{value:"Formatting Guidelines",id:"formatting-guidelines",level:2},{value:"Commit Message Format",id:"commit-message-format",level:3},{value:"Example",id:"example",level:4},{value:"<code>&lt;type&gt;</code>(Required)",id:"typerequired",level:4},{value:"<code>&lt;scope&gt;</code>(Optional)",id:"scopeoptional",level:4},{value:"<code>&lt;subject&gt;</code>(Required)",id:"subjectrequired",level:4},{value:"<code>&lt;body&gt;</code>(Required)",id:"bodyrequired",level:4},{value:"Pull Request Title",id:"pull-request-title",level:3},{value:"Passing All CI Checks",id:"passing-all-ci-checks",level:3},{value:"Updating Documentation and Website",id:"updating-documentation-and-website",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this code contribution guide, you will learn about the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#running-karpor-locally"},"How to run Karpor locally")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-pull-request"},"How to create a pull request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-review"},"Code review guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#formatting-guidelines"},"Formatting guidelines for pull requests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#updating-documentation-and-website"},"Updating Documentation and Website"))),(0,i.kt)("h2",{id:"running-karpor-locally"},"Running Karpor Locally"),(0,i.kt)("p",null,"This guide will help you get started with Karpor development."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Golang version 1.19+")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Installing Golang"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install go1.19 from the ",(0,i.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"official website"),". Extract the binary files and place them at a location, assuming it is located under the home directory ",(0,i.kt)("inlineCode",{parentName:"li"},"~/go/"),", here is an example command, you should choose the correct binary file for your system.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"wget https://go.dev/dl/go1.20.2.linux-amd64.tar.gz\ntar xzf go1.20.2.linux-amd64.tar.gz\n")))),(0,i.kt)("p",null,"If you would like to maintain multiple versions of golang in your local development environment, you can download the package and extract it to a location, like ",(0,i.kt)("inlineCode",{parentName:"p"},"~/go/go1.19.1"),", and then alter the path in the command below accordingly."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set environment variables for Golang"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"export PATH=~/go/bin/:$PATH\nexport GOROOT=~/go/\nexport GOPATH=~/gopath/\n")))),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"gopath")," folder does not exist, create it with ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir ~/gopath"),". These commands will add the go binary folder to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable (making it the primary choice for go) and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"GOROOT")," environment to this go folder. Please add these lines to your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file, so you won't need to set these environment variables every time you open a new terminal."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"(Optional) Some regions, such as China, may have slow connection to the default go registry; you can configure GOPROXY to speed up the download process.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"go env -w GOPROXY=https://goproxy.cn,direct\n"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes version v1.20+ configured with ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"golangci-lint version v1.52.2+, it will be installed automatically if you run ",(0,i.kt)("inlineCode",{parentName:"p"},"make lint"),", if the installation fails, you can install it manually."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Manually installing golangci-lint"),(0,i.kt)("p",null,"You can install it manually following the ",(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/welcome/install"},"guide"),", or use the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~/go/ && curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s v1.52.2\n"))),(0,i.kt)("h3",{id:"building"},"Building"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone this project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/karpor.git\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build locally")),(0,i.kt)("p",null,"Executing ",(0,i.kt)("inlineCode",{parentName:"p"},"make build-all")," will build the executables for all platforms; if you only want to build for a specific platform, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"make build-${PlatformName}"),", e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"make build-darwin"),". To see all available commands, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"make help"),"."),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"It's essential to write tests to maintain code quality, you can run all unit tests by executing the following command in the project root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")),(0,i.kt)("p",null,"If you need to generate extra coverage report files, execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make cover\n")),(0,i.kt)("p",null,"Then you can view the content of the coverage report in a browser by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make cover-html\n")),(0,i.kt)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,i.kt)("p",null,"We are thrilled that you are considering contributing to the Karpor project!"),(0,i.kt)("p",null,"This document will guide you through the process of creating a ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/articles/about-pull-requests/"},"pull request"),"."),(0,i.kt)("h3",{id:"before-you-begin"},"Before you begin"),(0,i.kt)("p",null,"We know you are excited to create your first pull request. Before we get started, make sure your code follows the relevant ",(0,i.kt)("a",{parentName:"p",href:"/karpor/developer-guide/conventions/code-conventions"},"code conventions"),"."),(0,i.kt)("h3",{id:"your-first-pull-request"},"Your First Pull Request"),(0,i.kt)("p",null,"Before submitting your PR, run the following commands to ensure they all succeed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make test\nmake lint\n")),(0,i.kt)("p",null,"If this is your first time contributing to an open-source project on GitHub, please make sure to read the instructions on ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/articles/creating-a-pull-request"},"creating a pull request"),"."),(0,i.kt)("p",null,"To increase the chances of your pull request being accepted, please ensure your pull request follows these guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The title and description match the implementation."),(0,i.kt)("li",{parentName:"ul"},"The commits in the pull request follow the ",(0,i.kt)("a",{parentName:"li",href:"#Formatting-guidelines"},"formatting guidelines"),"."),(0,i.kt)("li",{parentName:"ul"},"The pull request closes a related issue."),(0,i.kt)("li",{parentName:"ul"},"The pull request includes necessary tests to verify the expected behavior."),(0,i.kt)("li",{parentName:"ul"},"If your pull request has conflicts, please rebase your branch onto the main branch.")),(0,i.kt)("p",null,"If the pull request fixes a bug:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The pull request description must contain ",(0,i.kt)("inlineCode",{parentName:"li"},"Closes #<issue number>")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Fixes #<issue number>"),"."),(0,i.kt)("li",{parentName:"ul"},"To prevent regressions, the pull request should include tests that replicate the bug being fixed.")),(0,i.kt)("h2",{id:"code-review"},"Code Review"),(0,i.kt)("p",null,"Once you have created a pull request, the next step is to have others review your changes. Review is a learning opportunity for both reviewers and the author of the pull request."),(0,i.kt)("p",null,"If you believe a specific person should review your pull request, you can tag them in the description or a comment.\nTag a user by typing an ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," symbol followed by their username."),(0,i.kt)("p",null,"We recommend that you read ",(0,i.kt)("a",{parentName:"p",href:"https://google.github.io/eng-practices/review/reviewer/"},"How to do a code review")," to learn more about code reviews."),(0,i.kt)("h2",{id:"formatting-guidelines"},"Formatting Guidelines"),(0,i.kt)("p",null,"A well-crafted pull request can minimize the time to get your changes accepted. These guidelines will help you write well-formulated commit messages and descriptions for your pull requests."),(0,i.kt)("h3",{id:"commit-message-format"},"Commit Message Format"),(0,i.kt)("p",null,"Karpor adheres to ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional-commits"),"."),(0,i.kt)("p",null,"Commit messages should be organized following this structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<type>[optional scope]: <subject>\n\n[optional body]\n")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Commit message with scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"feat(lang): add polish language\n")),(0,i.kt)("p",null,"Commit message without body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docs: correct spelling of CHANGELOG\n")),(0,i.kt)("p",null,"Commit message with multiple body paragraphs:\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fix: correct minor typos in code\n\nsee the issue for details\n\non typos fixed.\n\nreviewed-by: Z\nrefs #133\n")),(0,i.kt)("h4",{id:"typerequired"},(0,i.kt)("inlineCode",{parentName:"h4"},"<type>"),"(Required)"),(0,i.kt)("p",null,"The required type helps better capture the area of the commit, based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular guidelines"),"."),(0,i.kt)("p",null,"We use lowercase for ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," to avoid spending time on case-sensitive issues. ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," can be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feat"),": A new feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fix"),": A bug fix"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"docs"),": Documentation only changes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build"),": Changes that affect the build system or external dependencies"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"perf"),": A code change that improves performance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chore"),": Changes to the build process or auxiliary tools and libraries such as documentation generation")),(0,i.kt)("h4",{id:"scopeoptional"},(0,i.kt)("inlineCode",{parentName:"h4"},"<scope>"),"(Optional)"),(0,i.kt)("p",null,"Scope is optional and can be provided to the type of commit to provide additional contextual information, enclosed in parentheses. It can be anything specifying the place of the commit change. Github issue links are also valid scopes e.g., fix(ui), feat(api), fix(#233), etc."),(0,i.kt)("p",null,"When the change affects multiple scopes, ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," can be used."),(0,i.kt)("h4",{id:"subjectrequired"},(0,i.kt)("inlineCode",{parentName:"h4"},"<subject>"),"(Required)"),(0,i.kt)("p",null,'The subject must come immediately after the type/scope prefix, followed by a colon and space. It is a concise summary of the code changes, for example, "fix: array parsing issue when multiple spaces were contained in string", rather than "fix: bug".'),(0,i.kt)("h4",{id:"bodyrequired"},(0,i.kt)("inlineCode",{parentName:"h4"},"<body>"),"(Required)"),(0,i.kt)("p",null,"A longer commit body can be provided after the brief subject, giving additional context information about the code change. The body must begin one line after the description."),(0,i.kt)("h3",{id:"pull-request-title"},"Pull Request Title"),(0,i.kt)("p",null,"When accepting pull requests, the Karpor team merges all commits into one."),(0,i.kt)("p",null,"The pull request title becomes the subject line of the merged commit message."),(0,i.kt)("p",null,"We still encourage contributors to write informative commit messages, as they will be part of the Git commit body."),(0,i.kt)("p",null,"We use the pull request titles when generating change logs for releases. Hence, we strive to make the titles as informative as possible."),(0,i.kt)("p",null,"Make sure your pull request title uses the same format as the commit message subject line. If the format is not followed, we will add a ",(0,i.kt)("inlineCode",{parentName:"p"},"title-needs-formatting")," label on the pull request."),(0,i.kt)("h3",{id:"passing-all-ci-checks"},"Passing All CI Checks"),(0,i.kt)("p",null,"Before merging, all testing CIs should pass:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Coverage should not drop. Currently, the pull request coverage should be at least 70%."),(0,i.kt)("li",{parentName:"ul"},"Karpor uses a ",(0,i.kt)("strong",{parentName:"li"},"CLA")," for the contributor agreement. It requires you to sign for every commit before merging the pull request.")),(0,i.kt)("h2",{id:"updating-documentation-and-website"},"Updating Documentation and Website"),(0,i.kt)("p",null,"If your pull request has been merged, and it is a new feature or enhancement, you need to update the documentation and send a pull request to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusionstack.io"},"kusionstack.io")," repository."),(0,i.kt)("p",null,"Learn how to write documentation through the following guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/README.md"},"kusionstack.io Developer Guide"))),(0,i.kt)("p",null,"Awesome, you've completed the lifecycle of code contribution!"))}c.isMDXComponent=!0}}]);
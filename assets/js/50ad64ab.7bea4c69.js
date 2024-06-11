"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?l.createElement(g,r(r({ref:t},p),{},{components:n})):l.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var s=2;s<i;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var l=n(87462),o=(n(67294),n(3905));const i={title:"Code Contribution Guide"},r=void 0,a={unversionedId:"developer-guide/contribution-guide/code-contribute",id:"version-v0.4/developer-guide/contribution-guide/code-contribute",title:"Code Contribution Guide",description:"In this code contribution guide, you will learn about the following:",source:"@site/karpor_versioned_docs/version-v0.4/4-developer-guide/1-contribution-guide/2-code-contribute.md",sourceDirName:"4-developer-guide/1-contribution-guide",slug:"/developer-guide/contribution-guide/code-contribute",permalink:"/karpor/developer-guide/contribution-guide/code-contribute",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/1-contribution-guide/2-code-contribute.md",tags:[],version:"v0.4",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1718116037,formattedLastUpdatedAt:"Jun 11, 2024",sidebarPosition:2,frontMatter:{title:"Code Contribution Guide"},sidebar:"karpor",previous:{title:"Non-code Contribution Guide",permalink:"/karpor/developer-guide/contribution-guide/non-code-contribute"},next:{title:"Roles",permalink:"/karpor/developer-guide/contribution-guide/roles"}},u={},s=[{value:"Running Karpor Locally",id:"running-karpor-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Building",id:"building",level:3},{value:"Testing",id:"testing",level:3},{value:"Creating a Pull Request",id:"creating-a-pull-request",level:2},{value:"Before you begin",id:"before-you-begin",level:3},{value:"Your First Pull Request",id:"your-first-pull-request",level:3},{value:"Code Review",id:"code-review",level:2},{value:"Formatting Guidelines",id:"formatting-guidelines",level:2},{value:"Commit Message Format",id:"commit-message-format",level:3},{value:"Pull Request Title",id:"pull-request-title",level:3},{value:"Passing All CI Checks",id:"passing-all-ci-checks",level:3},{value:"Updating Documentation and Website",id:"updating-documentation-and-website",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this code contribution guide, you will learn about the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#running-karpor-locally"},"How to run Karpor locally")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-pull-request"},"How to create a pull request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-review"},"Code review guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#formatting-guidelines"},"Formatting guidelines for pull requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#updating-documentation-and-website"},"Updating Documentation and Website"))),(0,o.kt)("h2",{id:"running-karpor-locally"},"Running Karpor Locally"),(0,o.kt)("p",null,"This guide will help you get started with Karpor development."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Golang version 1.19+")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Installing Golang"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install go1.19 from the ",(0,o.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"official website"),". Extract the binary files and place them at a location, assuming it is located under the home directory ",(0,o.kt)("inlineCode",{parentName:"li"},"~/go/"),", here is an example command, you should choose the correct binary file for your system.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://go.dev/dl/go1.20.2.linux-amd64.tar.gz\ntar xzf go1.20.2.linux-amd64.tar.gz\n")),(0,o.kt)("p",null,"If you would like to maintain multiple versions of golang in your local development environment, you can download the package and extract it to a location, like ",(0,o.kt)("inlineCode",{parentName:"p"},"~/go/go1.19.1"),", and then alter the path in the command below accordingly."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set environment variables for Golang")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export PATH=~/go/bin/:$PATH\nexport GOROOT=~/go/\nexport GOPATH=~/gopath/\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"gopath")," folder does not exist, create it with ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir ~/gopath"),". These commands will add the go binary folder to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable (making it the primary choice for go) and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"GOROOT")," environment to this go folder. Please add these lines to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file, so you won't need to set these environment variables every time you open a new terminal."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(Optional) Some regions, such as China, may have slow connection to the default go registry; you can configure GOPROXY to speed up the download process.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go env -w GOPROXY=https://goproxy.cn,direct\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes version v1.20+ configured with ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"."),(0,o.kt)("li",{parentName:"ul"},"golangci-lint version v1.52.2+, it will be installed automatically if you run ",(0,o.kt)("inlineCode",{parentName:"li"},"make lint"),", if the installation fails, you can install it manually.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Manually installing golangci-lint"),(0,o.kt)("p",null,"You can install it manually following the ",(0,o.kt)("a",{parentName:"p",href:"https://golangci-lint.run/welcome/install"},"guide"),", or use the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/go/ && curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s v1.52.2\n"))),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clone this project")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/karpor.git\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build locally")),(0,o.kt)("p",null,"Executing ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-all")," will build the executables for all platforms; if you only want to build for a specific platform, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-${PlatformName}"),", e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-darwin"),". To see all available commands, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"make help"),"."),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"It's essential to write tests to maintain code quality, you can run all unit tests by executing the following command in the project root directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")),(0,o.kt)("p",null,"If you need to generate extra coverage report files, execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make cover\n")),(0,o.kt)("p",null,"Then you can view the content of the coverage report in a browser by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make cover-html\n")),(0,o.kt)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,o.kt)("p",null,"We are thrilled that you are considering contributing to the Karpor project!"),(0,o.kt)("p",null,"This document will guide you through the process of ",(0,o.kt)("a",{parentName:"p",href:"/karpor/developer-guide/contribution-guide/#contribute-a-pull-request"},"creating a pull request"),"."),(0,o.kt)("h3",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("p",null,"We know you are excited to create your first pull request. Before we get started, make sure your code follows the relevant ",(0,o.kt)("a",{parentName:"p",href:"/karpor/developer-guide/conventions/code-conventions"},"code conventions"),"."),(0,o.kt)("h3",{id:"your-first-pull-request"},"Your First Pull Request"),(0,o.kt)("p",null,"Before submitting your PR, run the following commands to ensure they all succeed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make test\nmake lint\n")),(0,o.kt)("p",null,"If this is your first time contributing to an open-source project on GitHub, please make sure to read the instructions on ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/en/articles/creating-a-pull-request"},"creating a pull request"),"."),(0,o.kt)("p",null,"To increase the chances of your pull request being accepted, please ensure your pull request follows these guidelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The title and description match the implementation."),(0,o.kt)("li",{parentName:"ul"},"The commits in the pull request follow the ",(0,o.kt)("a",{parentName:"li",href:"#Formatting-guidelines"},"formatting guidelines"),"."),(0,o.kt)("li",{parentName:"ul"},"The pull request closes a related issue."),(0,o.kt)("li",{parentName:"ul"},"The pull request includes necessary tests to verify the expected behavior."),(0,o.kt)("li",{parentName:"ul"},"If your pull request has conflicts, please rebase your branch onto the main branch.")),(0,o.kt)("p",null,"If the pull request fixes a bug:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The pull request description must contain ",(0,o.kt)("inlineCode",{parentName:"li"},"Closes #<issue number>")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Fixes #<issue number>"),"."),(0,o.kt)("li",{parentName:"ul"},"To prevent regressions, the pull request should include tests that replicate the bug being fixed.")),(0,o.kt)("h2",{id:"code-review"},"Code Review"),(0,o.kt)("p",null,"Once you have created a pull request, the next step is to have others review your changes. Review is a learning opportunity for both reviewers and the author of the pull request."),(0,o.kt)("p",null,"If you believe a specific person should review your pull request, you can tag them in the description or a comment.\nTag a user by typing an ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," symbol followed by their username."),(0,o.kt)("p",null,"We recommend that you read ",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/eng-practices/review/reviewer/"},"How to do a code review")," to learn more about code reviews."),(0,o.kt)("h2",{id:"formatting-guidelines"},"Formatting Guidelines"),(0,o.kt)("p",null,"A well-crafted pull request can minimize the time to get your changes accepted. These guidelines will help you write well-formulated commit messages and descriptions for your pull requests."),(0,o.kt)("h3",{id:"commit-message-format"},"Commit Message Format"),(0,o.kt)("p",null,"More see: ",(0,o.kt)("a",{parentName:"p",href:"/karpor/developer-guide/conventions/commit-conventions"},"Commit Conventions")),(0,o.kt)("h3",{id:"pull-request-title"},"Pull Request Title"),(0,o.kt)("p",null,"When accepting pull requests, the Karpor team merges all commits into one."),(0,o.kt)("p",null,"The pull request title becomes the subject line of the merged commit message."),(0,o.kt)("p",null,"We still encourage contributors to write informative commit messages, as they will be part of the Git commit body."),(0,o.kt)("p",null,"We use the pull request titles when generating change logs for releases. Hence, we strive to make the titles as informative as possible."),(0,o.kt)("p",null,"Make sure your pull request title uses the same format as the commit message subject line. If the format is not followed, we will add a ",(0,o.kt)("inlineCode",{parentName:"p"},"title-needs-formatting")," label on the pull request."),(0,o.kt)("h3",{id:"passing-all-ci-checks"},"Passing All CI Checks"),(0,o.kt)("p",null,"Before merging, all testing CIs should pass:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Coverage should not drop. Currently, the pull request coverage should be at least 70%."),(0,o.kt)("li",{parentName:"ul"},"Karpor uses a ",(0,o.kt)("strong",{parentName:"li"},"CLA")," for the contributor agreement. It requires you to sign for every commit before merging the pull request.")),(0,o.kt)("h2",{id:"updating-documentation-and-website"},"Updating Documentation and Website"),(0,o.kt)("p",null,"If your pull request has been merged, and it is a new feature or enhancement, you need to update the documentation and send a pull request to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusionstack.io"},"kusionstack.io")," repository."),(0,o.kt)("p",null,"Learn how to write documentation through the following guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/README.md"},"kusionstack.io Developer Guide"))),(0,o.kt)("p",null,"Awesome, you've completed the lifecycle of code contribution!"))}c.isMDXComponent=!0}}]);
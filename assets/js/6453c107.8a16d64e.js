"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1552],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(i),d=n,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return i?o.createElement(f,r(r({ref:t},u),{},{components:i})):o.createElement(f,r({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<a;l++)r[l]=i[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},59027:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=i(87462),n=(i(67294),i(3905));const a={sidebar_position:1},r="Ensure Configuration Code Quality of Konfig via GitHub Actions",s={unversionedId:"user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions",id:"user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions",title:"Ensure Configuration Code Quality of Konfig via GitHub Actions",description:"In the scenario of multi-person collaboration, the application configuration codes in Konfig are completed by Developer and Platform from different teams. Hence, the correctness of the configurations needs to be guaranteed through a reliable mechanism. As a CI/CD platform, GitHub Actions can automate pipelines such as building, testing, and deploying. By customizing the GitHub Actions workflow, you can guarantee the correctness and reliability of the configuration codes in the Konfig repository.",source:"@site/docs/user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions.md",sourceDirName:"user_docs/guides/github-actions",slug:"/user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions",permalink:"/docs/user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1690429013,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Drift Detection by ArgoCD",permalink:"/docs/user_docs/guides/argocd/drift-detection-by-argocd"},next:{title:"Kubernetes",permalink:"/docs/user_docs/guides/working-with-k8s/"}},c={},l=[{value:"Create Konfig Repository",id:"create-konfig-repository",level:2},{value:"Create GitHub Actions Workflow",id:"create-github-actions-workflow",level:2},{value:"Analyze Affected Application",id:"analyze-affected-application",level:3},{value:"Verify Directory Structure",id:"verify-directory-structure",level:3},{value:"Test Code Correctness",id:"test-code-correctness",level:3},{value:"Check Lint Style",id:"check-lint-style",level:3},{value:"Summary",id:"summary",level:2}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ensure-configuration-code-quality-of-konfig-via-github-actions"},"Ensure Configuration Code Quality of Konfig via GitHub Actions"),(0,n.kt)("p",null,"In the scenario of multi-person collaboration, the application configuration codes in Konfig are completed by Developer and Platform from different teams. Hence, the correctness of the configurations needs to be guaranteed through a reliable mechanism. As a CI/CD platform, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," can automate pipelines such as building, testing, and deploying. By customizing the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/about-workflows"},"GitHub Actions workflow"),", you can guarantee the correctness and reliability of the configuration codes in the Konfig repository."),(0,n.kt)("p",null,"KusionStack provides a variety of tools integrating with GitHub Actions. This tutorial will demonstrate how to co ensure quality of the configuration codes through GitHub Actions."),(0,n.kt)("h2",{id:"create-konfig-repository"},"Create Konfig Repository"),(0,n.kt)("p",null,"KusionStack provides an official application configuration repository ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"KusionStack/konfig"),", which mainly includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Base models"),", such as ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},"Server"),", located in ",(0,n.kt)("inlineCode",{parentName:"li"},"/base"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sample application configuration codes"),", such as ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/tree/main/appops/wordpress"},"Wordpress")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/tree/main/appops/guestbook"},"Guestbook"),", located in ",(0,n.kt)("inlineCode",{parentName:"li"},"/appops"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Configuration code management tools"),", such as ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/hack/verify-project-structure.py"},"directory structure verification"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/hack/test_konfig.py"},"code correctness test")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/hack/lint_check.py"},"lint style check"),", located in ",(0,n.kt)("inlineCode",{parentName:"li"},"/hack"),".")),(0,n.kt)("p",null,"Fork KusionStack/konfig, and create your own Konfig repository, to maintain your application configuration codes."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"KusionStack/konfig is looking forward to your ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig#contribution-guidelines"},"contributions")," to enhance the base models and management tools.")),(0,n.kt)("h2",{id:"create-github-actions-workflow"},"Create GitHub Actions Workflow"),(0,n.kt)("p",null,"KusionStack/konfig provides the GitHub Actions workflow ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml"},"main.yml"),", which is triggered by a push or pull request on the main branch. The main.yml includes multiple jobs, ensuring the reliability of configuration codes on the main branch."),(0,n.kt)("p",null,"Next, this tutorial will introduce the usages and functions of these jobs. To show how they work more visually, an example, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/pull/113"},"adding environment variables for application Wordpress"),' (referred to "the example" in the below), is also given.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wordpress-workflow",src:i(97955).Z,width:"1500",height:"617"})),(0,n.kt)("h3",{id:"analyze-affected-application"},"Analyze Affected Application"),(0,n.kt)("p",null,"There are two types of code maintained in the Konfig repository, ",(0,n.kt)("strong",{parentName:"p"},"application configurations")," and ",(0,n.kt)("strong",{parentName:"p"},"base models"),". When the codes of the former case get changed, only the corresponding applications are affected, while for the latter case, all the applications that depend on these codes are affected. If you want to ensure the correctness of all the application configurations after each change, analyzing the affected applications is the first step."),(0,n.kt)("p",null,"The jobs, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L10"},"diff")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L20"},"deps"),", perfectly accomplish the affected application analysis. The main steps are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Obtain the list of changed files through ",(0,n.kt)("inlineCode",{parentName:"li"},"git diff"),";"),(0,n.kt)("li",{parentName:"ul"},"Based on the changed file list, use ",(0,n.kt)("inlineCode",{parentName:"li"},"kusion deps")," to obtain the list of projects and stacks affected by the changed file.")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/5132912522/jobs/9234827063?pr=113"},"example")," changes the file ",(0,n.kt)("inlineCode",{parentName:"p"},"/appops/wordpress/dev/main.k"),", where the affected project is ",(0,n.kt)("inlineCode",{parentName:"p"},"/appops/wordpress"),", and the stack is ",(0,n.kt)("inlineCode",{parentName:"p"},"/appops/wordpress/dev"),". Delightfully, the result, which is shown below, meets our expectation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"deps",src:i(73091).Z,width:"1500",height:"931"})),(0,n.kt)("h3",{id:"verify-directory-structure"},"Verify Directory Structure"),(0,n.kt)("p",null,"The Konfig repository should be orginized according to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig#directory-structure"},"correct directory structure"),". The job ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L121"},"structure-check")," guarantees the directory structure legality of the changed applications. The check items are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There must be the files ",(0,n.kt)("inlineCode",{parentName:"li"},"project.yaml")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"OWNERS")," under the project directory;"),(0,n.kt)("li",{parentName:"ul"},"There must be the files ",(0,n.kt)("inlineCode",{parentName:"li"},"stack.yaml"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"main.k"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ci-test/settings.yaml")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"ci-test/stdout.golden.yaml")," under the stack directory;"),(0,n.kt)("li",{parentName:"ul"},"The field ",(0,n.kt)("inlineCode",{parentName:"li"},"name")," is required in project.yaml;"),(0,n.kt)("li",{parentName:"ul"},"The field ",(0,n.kt)("inlineCode",{parentName:"li"},"name")," is required in stack.yaml, and must be the same as stack directory name.")),(0,n.kt)("p",null,"The success of structure-check means the correctness of directory structure. A ",(0,n.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.3.x/"},"pytest")," report ",(0,n.kt)("inlineCode",{parentName:"p"},"structure-check-report")," is also generated, and you can get it from ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts"},"GithHub Actions Artifacts")," ."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/5132912522/jobs/9234834632"},"example")," passes the directory structure verification. It is clear from the report that the affected application ",(0,n.kt)("inlineCode",{parentName:"p"},"appops/wordpress")," has get checked, and the result is passed."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"structure-check",src:i(46382).Z,width:"1500",height:"842"})),(0,n.kt)("h3",{id:"test-code-correctness"},"Test Code Correctness"),(0,n.kt)("p",null,"Besides a rightful directory structure, the codes must have correct syntax and semantics, and the configuration changes should meet the expectation of Developer or Platform. The ",(0,n.kt)("inlineCode",{parentName:"p"},"ci-test")," directory under the path of stack ensures the correctness. The workflow is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Developer or Platform completes configuration code development locally, and executes ",(0,n.kt)("inlineCode",{parentName:"li"},"make check-${changedProject}")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"make check-all")," (that is, executes ",(0,n.kt)("inlineCode",{parentName:"li"},"kusion compile")," under the affected stacks' pathes), to update ",(0,n.kt)("inlineCode",{parentName:"li"},"ci-test/stdout.golden.yaml"),". The Developer or Platform needs to confirm the changes of ",(0,n.kt)("inlineCode",{parentName:"li"},"ci-test/stdout.golden.yaml")," meet its expectation, which means the correctness of configuration changes is acknowledged;"),(0,n.kt)("li",{parentName:"ul"},"Then, push or pull request to the main branch. The job ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L144"},"test")," executes ",(0,n.kt)("inlineCode",{parentName:"li"},"kusion compile")," on the changed stacks to generate new compilation results, and compare them with ",(0,n.kt)("inlineCode",{parentName:"li"},"ci-test/stdout.golden.yaml"),". If the comparison results are consistent, the correctness is confirmed. It means the changes of configuration codes meet expectation. If ",(0,n.kt)("inlineCode",{parentName:"li"},"kusion compile")," fails or the comparison results are inconsistent, the check fails. It means there are syntax errors, or the changes are not expected by Developer or Platform.")),(0,n.kt)("p",null,"The report whose name is ",(0,n.kt)("inlineCode",{parentName:"p"},"test-report")," get generated."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/5132912522/jobs/9234834490"},"example")," passes the code correctness test. The report shows that the tested stack is ",(0,n.kt)("inlineCode",{parentName:"p"},"appops/wordpress/dev"),", and the result is passed."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"test",src:i(51551).Z,width:"1500",height:"929"})),(0,n.kt)("h3",{id:"check-lint-style"},"Check Lint Style"),(0,n.kt)("p",null,"For the maintainability and scalability of the Konfig reposiroty, the job ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L89"},"lint")," is provided, which performs lint style check for the changed codes. The job lint is based on ",(0,n.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/cli/kcl/lint/"},"kcl lint"),", which checks import compliance, etc."),(0,n.kt)("p",null,"Similar to the above jobs, the job lint will also generate a report named ",(0,n.kt)("inlineCode",{parentName:"p"},"link-report"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/5132912522/jobs/9234834286"},"example")," passes the lint style check and its report is as follows."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"lint",src:i(74960).Z,width:"1500",height:"915"})),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This tutorial demonstrates how the Konfig repository integrates with GitHub Actions, to manage the quality of configuration codes. In the scenario of multi-person collaboration, Konfig with GitHub Actions enables you manage application configurations efficiently and reliably."))}p.isMDXComponent=!0},73091:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/deps-905e9fdc74ee7d19130d648111131ca7.png"},74960:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/lint-6f27b54bf6ab94c7fbcf537311bb2849.png"},46382:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/structure-check-addafa4edf6ca1a8854e359dfb24c916.png"},51551:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/test-0fac8858edce43c915daace31be2839d.png"},97955:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/wordpress-workflow-dd1f36e5c1a989adb4075e11981bcb14.png"}}]);
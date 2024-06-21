"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=i,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:1},r="Deploy Application Securely and Efficiently via GitHub Actions",s={unversionedId:"guides/github-actions/deploy-application-securely-and-efficiently-via-github-actions",id:"version-v0.9/guides/github-actions/deploy-application-securely-and-efficiently-via-github-actions",title:"Deploy Application Securely and Efficiently via GitHub Actions",description:"This document provides the instruction to deploy your application securely and efficiently via GitHub Actions.",source:"@site/docs_versioned_docs/version-v0.9/guides/github-actions/deploy-application-securely-and-efficiently-via-github-actions.md",sourceDirName:"guides/github-actions",slug:"/guides/github-actions/deploy-application-securely-and-efficiently-via-github-actions",permalink:"/zh/docs/v0.9/guides/github-actions/deploy-application-securely-and-efficiently-via-github-actions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/guides/github-actions/deploy-application-securely-and-efficiently-via-github-actions.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718940543,formattedLastUpdatedAt:"2024\u5e746\u670821\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kusion",previous:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/zh/docs/v0.9/guides/observability/prometheus"},next:{title:"Command Line Tools",permalink:"/zh/docs/v0.9/reference/cli/"}},c={},l=[{value:"GitHub Actions Workflow",id:"github-actions-workflow",level:2},{value:"Get Changed Project and Stack",id:"get-changed-project-and-stack",level:2},{value:"Check Project and Stack Structure",id:"check-project-and-stack-structure",level:2},{value:"Test Code Correctness",id:"test-code-correctness",level:2},{value:"Preview Changed Stack",id:"preview-changed-stack",level:2},{value:"Apply Changed Stack",id:"apply-changed-stack",level:2},{value:"Summary",id:"summary",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-application-securely-and-efficiently-via-github-actions"},"Deploy Application Securely and Efficiently via GitHub Actions"),(0,i.kt)("p",null,"This document provides the instruction to deploy your application securely and efficiently via GitHub Actions."),(0,i.kt)("p",null,"Using git repository is a very reliable and common way to manage code, and the same goes for Kusion-managed configuration code. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," is a CI/CD platform. By customizing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/about-workflows"},"GitHub Actions workflow"),", the pipeline such as building, testing, and deploying will be executed automatically."),(0,i.kt)("p",null,"Kusion has a commendable integration with Github Actions. You can use Github Actions to test configuration correctness, preview change, and deploy application. This tutorial demonstrates how to deploy and operate an application through GitHub Actions."),(0,i.kt)("h2",{id:"github-actions-workflow"},"GitHub Actions Workflow"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"KusionStack/konfig")," is the official example repository, and provides the GitHub Actions workflow ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml"},"main.yml"),". The main.yml is triggered by a push or a pull request on the main branch, and includes multiple jobs, which ensures the reliability of configuration code, and deploys the changed application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"workflow",src:a(74559).Z,width:"2594",height:"1364"})),(0,i.kt)("p",null,"The workflow to deploy an application is shown above, which includes the following jobs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get changed project and stack"),(0,i.kt)("li",{parentName:"ul"},"Check project and stack structure"),(0,i.kt)("li",{parentName:"ul"},"Test code correctness"),(0,i.kt)("li",{parentName:"ul"},"Preview changed stack"),(0,i.kt)("li",{parentName:"ul"},"Apply changed stack")),(0,i.kt)("p",null,"These jobs ensure the security and efficiency of the application deployment. Next, this tutorial will introduce the usage and function of these jobs. To show how they work more visually, ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://github.com/KusionStack/konfig/actions/runs/6325390734"},"updating port configuration of multi-stack"),' (referred to "the example" in the below)')," is given as an example."),(0,i.kt)("h2",{id:"get-changed-project-and-stack"},"Get Changed Project and Stack"),(0,i.kt)("p",null,"As Kusion organizes code by ",(0,i.kt)("strong",{parentName:"p"},"project")," and ",(0,i.kt)("strong",{parentName:"p"},"stack"),", to deploy the affected applications, analyze the changed project and stack is the first step."),(0,i.kt)("p",null,"The jobs, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L10"},"get-changed-project-stack")," perfectly accomplish the analysis. The main steps are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtain the list of changed files through ",(0,i.kt)("inlineCode",{parentName:"li"},"git diff"),";"),(0,i.kt)("li",{parentName:"ul"},"Based on the changed file list, obtain the changed projects and stacks which are indicated by ",(0,i.kt)("inlineCode",{parentName:"li"},"project.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stack.yaml")," respectively.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/6325320773/job/17176584497"},"example")," changes the file ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/base/base.k"),", where the affected project is ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack"),", and the stack is ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/prod"),". Delightfully, the result, which is shown below, meets our expectation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"changed-project-stack",src:a(465).Z,width:"1758",height:"1038"})),(0,i.kt)("h2",{id:"check-project-and-stack-structure"},"Check Project and Stack Structure"),(0,i.kt)("p",null,"The job ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L39"},"check-structure")," guarantees the structure legality of the changed project and stack, so that Kusion CLI tools can be used correctly. The check items are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," is required in project.yaml;"),(0,i.kt)("li",{parentName:"ul"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," is required in stack.yaml.")),(0,i.kt)("p",null,"The success of structure-check means the correctness of structure. A ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.3.x/"},"pytest")," report ",(0,i.kt)("inlineCode",{parentName:"p"},"check-structure-report")," is also generated, and you can get it from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts"},"GithHub Actions Artifacts")," ."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/6325320773/job/17176592318"},"example")," passes the directory structure verification. It is clear from the report that the changed project and stack have get checked, and the result is passed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"check-structure",src:a(71020).Z,width:"1452",height:"482"})),(0,i.kt)("h2",{id:"test-code-correctness"},"Test Code Correctness"),(0,i.kt)("p",null,"Besides a rightful structure, the code must have correct syntax and semantics, and the job ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L65"},"test-correctness")," ensures the correctness. ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion compile")," get executed on the changed stacks. If succeeded, there are no syntax errors; or the configuration code is illegal, and the following application deployment will fail."),(0,i.kt)("p",null,"The report whose name is ",(0,i.kt)("inlineCode",{parentName:"p"},"test-correctness-report")," get generated."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/6325320773/job/17176592034"},"example")," passes the code correctness test. The report shows that the tested stack is ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/prod"),", and the result is passed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"test-correctness",src:a(48848).Z,width:"1626",height:"404"})),(0,i.kt)("h2",{id:"preview-changed-stack"},"Preview Changed Stack"),(0,i.kt)("p",null,"After passing the above jobs, security of the configuration change is guaranteed, and it's time to deploy your application. Before applying the change to the real infrastructure, it's necessary to get the expected result of the application deployment. The job ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L90"},"preview")," calls ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion preview")," to get the expected change result, the result is uploaded to the artifact ",(0,i.kt)("inlineCode",{parentName:"p"},"preview-report"),". If the result meets your requirement, you can go to the next job and deploy the application."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/6325320773/job/17176612053"},"example")," changes stack ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/prod"),". The following picture shows the preview result of ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/prod"),", where the result is to create a Kubernetes Namespace, Service and Deployment if call ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preview",src:a(72915).Z,width:"1424",height:"264"})),(0,i.kt)("h2",{id:"apply-changed-stack"},"Apply Changed Stack"),(0,i.kt)("p",null,"Finally, the last step is arrived, i.e. deploy application. The job ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L121"},"apply")," calls ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply")," to apply the configuration change to the real infrastructure. If the job succeeded, the result will be uploaded to the artifact ",(0,i.kt)("inlineCode",{parentName:"p"},"apply-report"),"."),(0,i.kt)("p",null,"For the stack ",(0,i.kt)("inlineCode",{parentName:"p"},"example/multi-stack/prod")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/6325320773/job/17176645252"},"example"),", a Kubernetes Namespace, Service and Deployment get created, which is consistent with the preview result."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"apply",src:a(32965).Z,width:"1456",height:"554"})),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This tutorial demonstrates how Kusion integrates with GitHub Actions to deploy an application. By structure check, correctness test, preview and apply, Kusion with GitHub Actions enables you deploy application efficiently and securely."))}u.isMDXComponent=!0},32965:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-3197adde2cbda84d3e032918679c17cb.png"},465:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/changed-project-stack-0055bea978f129b99b6e74c5b7c4ab88.png"},71020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/check-structure-2e3226c0efbdbf41b4d7ae70bd16df28.png"},72915:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preview-4f2aae42391f5decddfcac6107d53a25.png"},48848:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/test-correctness-a6846c2c32c4129b816b6463927325b8.png"},74559:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workflow-052aa326816199187357363891109493.png"}}]);
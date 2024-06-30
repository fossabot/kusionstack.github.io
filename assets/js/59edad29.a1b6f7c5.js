"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={},s="Deploy Application Securely and Efficiently via GitHub Actions",o={unversionedId:"user-guides/github-actions/deploy-application-via-github-actions",id:"version-v0.10/user-guides/github-actions/deploy-application-via-github-actions",title:"Deploy Application Securely and Efficiently via GitHub Actions",description:"This document provides the instruction to deploy your application securely and efficiently via GitHub Actions.",source:"@site/docs_versioned_docs/version-v0.10/5-user-guides/4-github-actions/1-deploy-application-via-github-actions.md",sourceDirName:"5-user-guides/4-github-actions",slug:"/user-guides/github-actions/deploy-application-via-github-actions",permalink:"/docs/v0.10/user-guides/github-actions/deploy-application-via-github-actions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/5-user-guides/4-github-actions/1-deploy-application-via-github-actions.md",tags:[],version:"v0.10",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1719756905,formattedLastUpdatedAt:"Jun 30, 2024",sidebarPosition:1,frontMatter:{},sidebar:"kusion",previous:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/docs/v0.10/user-guides/observability/prometheus"},next:{title:"Using Cloud Secrets Manager",permalink:"/docs/v0.10/user-guides/secrets-management/using-cloud-secrets"}},c={},l=[{value:"GitHub Actions Workflow",id:"github-actions-workflow",level:2},{value:"Get Changed Project and Stack",id:"get-changed-project-and-stack",level:2},{value:"Check Project and Stack Structure",id:"check-project-and-stack-structure",level:2},{value:"Test Code Correctness",id:"test-code-correctness",level:2},{value:"Preview Changed Stack",id:"preview-changed-stack",level:2},{value:"Apply Changed Stack",id:"apply-changed-stack",level:2},{value:"Summary",id:"summary",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-application-securely-and-efficiently-via-github-actions"},"Deploy Application Securely and Efficiently via GitHub Actions"),(0,i.kt)("p",null,"This document provides the instruction to deploy your application securely and efficiently via GitHub Actions."),(0,i.kt)("p",null,"Using git repository is a very reliable and common way to manage code, and the same goes for Kusion-managed configuration code. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," is a CI/CD platform. By customizing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/about-workflows"},"GitHub Actions workflow"),", the pipeline such as building, testing, and deploying will be executed automatically."),(0,i.kt)("p",null,"Kusion has a commendable integration with GitHub Actions. You can use GitHub Actions to test configuration correctness, preview change, and deploy application. This tutorial demonstrates how to deploy and operate an application through GitHub Actions."),(0,i.kt)("h2",{id:"github-actions-workflow"},"GitHub Actions Workflow"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"KusionStack/konfig")," is the official example repository, and provides the GitHub Actions workflow ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/deploy/deploy.yml"},(0,i.kt)("em",{parentName:"a"},"deploy")),". The workflow is triggered by a push on the main branch, and includes multiple jobs, which ensures the reliability of configuration code, and deploys the changed application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"workflow",src:a(74559).Z,width:"2594",height:"1364"})),(0,i.kt)("p",null,"The workflow to deploy an application is shown above, which includes the following jobs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get changed project and stack"),(0,i.kt)("li",{parentName:"ul"},"Check project and stack structure"),(0,i.kt)("li",{parentName:"ul"},"Test code correctness"),(0,i.kt)("li",{parentName:"ul"},"Preview changed stack"),(0,i.kt)("li",{parentName:"ul"},"Apply changed stack")),(0,i.kt)("p",null,"These jobs ensure the security and efficiency of the application deployment. Next, this tutorial will introduce the usage and function of these jobs. To show how they work more visually, updating port configuration in file ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/base/base.k")," of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/tree/main/example/service-multi-stack"},(0,i.kt)("em",{parentName:"a"},"service-multi-stack")),' (referred to "the example" in the below) is given as an example.'),(0,i.kt)("h2",{id:"get-changed-project-and-stack"},"Get Changed Project and Stack"),(0,i.kt)("p",null,"As Kusion organizes code by project and stack, to deploy the affected applications, analyze the changed project and stack is the first step."),(0,i.kt)("p",null,"The job, ",(0,i.kt)("strong",{parentName:"p"},"get-changed-project-stack")," perfectly accomplish the analysis. The main steps are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtain the list of changed files through ",(0,i.kt)("inlineCode",{parentName:"li"},"git diff"),";"),(0,i.kt)("li",{parentName:"ul"},"Based on the changed file list, obtain the changed projects and stacks which are indicated by ",(0,i.kt)("inlineCode",{parentName:"li"},"project.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stack.yaml")," respectively.")),(0,i.kt)("p",null,"The example changes the file ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/base/base.k"),", where the affected project is ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack"),", and the stack is ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/prod"),". Delightfully, the result, which is shown below, meets our expectation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"changed-project-stack",src:a(15203).Z,width:"2248",height:"1104"})),(0,i.kt)("h2",{id:"check-project-and-stack-structure"},"Check Project and Stack Structure"),(0,i.kt)("p",null,"The job ",(0,i.kt)("strong",{parentName:"p"},"check-structure")," guarantees the structure legality of the changed project and stack, so that Kusion CLI tools can be used correctly. The check items are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," is required in project.yaml;"),(0,i.kt)("li",{parentName:"ul"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," is required in stack.yaml.")),(0,i.kt)("p",null,"The success of structure-check means the correctness of structure. A ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.3.x/"},"pytest")," report ",(0,i.kt)("inlineCode",{parentName:"p"},"check-structure-report")," is also generated, and you can get it from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts"},"GithHub Actions Artifacts")," ."),(0,i.kt)("p",null,"The example passes the directory structure verification. It is clear from the report that the changed project and stack have get checked, and the result is passed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<testsuites>\n    <testsuite name="pytest" errors="0" failures="0" skipped="0" tests="3" time="0.039"\n        timestamp="2024-01-11T08:29:52.941858" hostname="cdbc8e525b50">\n        <testcase classname="hack.check_structure"\n            name="test_project_structure[example/service-multi-stack]" time="0.001" />\n        <testcase classname="hack.check_structure"\n            name="test_stack_structure[example/service-multi-stack/dev]" time="0.001" />\n        <testcase classname="hack.check_structure"\n            name="test_stack_structure[example/service-multi-stack/prod]" time="0.001" />\n    </testsuite>\n</testsuites>\n')),(0,i.kt)("h2",{id:"test-code-correctness"},"Test Code Correctness"),(0,i.kt)("p",null,"Besides a rightful structure, the code must have correct syntax and semantics, and the job ",(0,i.kt)("strong",{parentName:"p"},"test-correctness")," ensures the correctness. ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion build")," get executed on the changed stacks. If succeeded, there are no syntax errors; or the configuration code is illegal, and the following application deployment will fail."),(0,i.kt)("p",null,"In this job, not only the correctness of AppConfiguration is checked, but also the workspace configuration. Hence, you should prepare workspace configuration in advance. Now, the job ",(0,i.kt)("strong",{parentName:"p"},"test-correctness")," supports you put workspace configuration files under directory ",(0,i.kt)("inlineCode",{parentName:"p"},"workspaces")," with file name's prefix the same as the workspace name and suffix ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml"),". For example, if you have two workspaces named ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prod"),", you should provide files ",(0,i.kt)("inlineCode",{parentName:"p"},"workspaces/dev.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"workspaces/prod.yaml")," with corresponding workspace configuration."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The jobs preview and apply also ask for the workspace configuration files."),(0,i.kt)("p",{parentName:"admonition"},"Putting AppConfiguration and workspace configuration in one repository seems not a good idea. Doing this is to give a simple illustration. You can change it in your real production practice, and you can get more information of ",(0,i.kt)("a",{parentName:"p",href:"../../concepts/app-configuration"},"AppConfiguration")," and ",(0,i.kt)("a",{parentName:"p",href:"../../concepts/workspace"},"workspace")," here.")),(0,i.kt)("p",null,"The report whose name is ",(0,i.kt)("inlineCode",{parentName:"p"},"test-correctness-report")," get generated."),(0,i.kt)("p",null,"The example passes the code correctness test. The report shows that the tested stack is ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/prod"),", and the result is passed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<testsuites>\n    <testsuite name="pytest" errors="0" failures="0" skipped="0" tests="2" time="1.671"\n        timestamp="2024-01-11T08:29:53.487470" hostname="dfb68b2d7229">\n        <testcase classname="hack.test_correctness"\n            name="test_correctness[example/service-multi-stack/dev]" time="0.856" />\n        <testcase classname="hack.test_correctness"\n            name="test_correctness[example/service-multi-stack/prod]" time="0.644" />\n    </testsuite>\n</testsuites>\n')),(0,i.kt)("h2",{id:"preview-changed-stack"},"Preview Changed Stack"),(0,i.kt)("p",null,"After passing the above jobs, security of the configuration change is guaranteed, and it's time to deploy your application. Before applying the change to the real infrastructure, it's necessary to get the expected result of the application deployment. The job ",(0,i.kt)("strong",{parentName:"p"},"preview")," calls ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion preview")," to get the expected change result, the result is uploaded to the artifact ",(0,i.kt)("inlineCode",{parentName:"p"},"preview-report"),". If the result meets your requirement, you can go to the next job and deploy the application."),(0,i.kt)("p",null,"The example changes stack ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/prod"),". The following picture shows the preview result of ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/prod"),", where the result is to create a Kubernetes Namespace, Service and Deployment if call ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Generating Intent in the Stack prod...\ncloning 'https://github.com/KusionStack/catalog.git' with tag '0.1.2'\n\nStack: prod  ID                                                                          Action\n* \u251c\u2500        v1:Namespace:service-multi-stack                                            Create\n* \u251c\u2500        v1:Service:service-multi-stack:service-multi-stack-prod-echoserver-public   Create\n* \u2514\u2500        apps/v1:Deployment:service-multi-stack:service-multi-stack-prod-echoserver  Create\n")),(0,i.kt)("h2",{id:"apply-changed-stack"},"Apply Changed Stack"),(0,i.kt)("p",null,"Finally, the last step is arrived, i.e. deploy application. The job ",(0,i.kt)("strong",{parentName:"p"},"apply")," calls ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply")," to apply the configuration change to the real infrastructure. If the job succeeded, the result will be uploaded to the artifact ",(0,i.kt)("inlineCode",{parentName:"p"},"apply-report"),"."),(0,i.kt)("p",null,"For the stack ",(0,i.kt)("inlineCode",{parentName:"p"},"example/service-multi-stack/prod")," in the example, a Kubernetes Namespace, Service and Deployment get created, which is consistent with the preview result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Generating Intent in the Stack prod...\ncloning 'https://github.com/KusionStack/catalog.git' with tag '0.1.2'\n\nStack: prod  ID                                                                          Action\n* \u251c\u2500        v1:Namespace:service-multi-stack                                            UnChanged\n* \u251c\u2500        v1:Service:service-multi-stack:service-multi-stack-prod-echoserver-public   Create\n* \u2514\u2500        apps/v1:Deployment:service-multi-stack:service-multi-stack-prod-echoserver  Create\n\nStart applying diffs ...\n                                                                                \nSUCCESS: UnChanged v1:Namespace:service-multi-stack, skip                                                                             \nSUCCESS: Create v1:Service:service-multi-stack:service-multi-stack-prod-echoserver-public success                                                                     \nSUCCESS: Create apps/v1:Deployment:service-multi-stack:service-multi-stack-prod-echoserver success\n\nApply complete! Resources: 2 created, 0 updated, 0 deleted.\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This tutorial demonstrates how Kusion integrates with GitHub Actions to deploy an application. By structure check, correctness test, preview and apply, Kusion with GitHub Actions enables you deploy application efficiently and securely."))}u.isMDXComponent=!0},15203:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusion-changed-project-stack-de4c7df77236ad9eeb758f1f9e2af703.png"},74559:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workflow-052aa326816199187357363891109493.png"}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36313],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,k=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const i={id:"collaborate-with-github-actions"},s="Achieving Team Collaboration in Production Practice with GitHub Actions",r={unversionedId:"user-guides/production-practice-case/collaborate-with-github-actions",id:"version-v0.12/user-guides/production-practice-case/collaborate-with-github-actions",title:"Achieving Team Collaboration in Production Practice with GitHub Actions",description:"In this article, we will introduce how to use Kusion CLI in combination with GitHub Actions to achieve team collaboration in production practice.",source:"@site/docs_versioned_docs/version-v0.12/5-user-guides/5-production-practice-case/1-production-practice-case.md",sourceDirName:"5-user-guides/5-production-practice-case",slug:"/user-guides/production-practice-case/collaborate-with-github-actions",permalink:"/docs/user-guides/production-practice-case/collaborate-with-github-actions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/5-user-guides/5-production-practice-case/1-production-practice-case.md",tags:[],version:"v0.12",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1724060961,formattedLastUpdatedAt:"Aug 19, 2024",sidebarPosition:1,frontMatter:{id:"collaborate-with-github-actions"},sidebar:"kusion",previous:{title:"Using Cloud Secrets Manager",permalink:"/docs/user-guides/secrets-management/using-cloud-secrets"},next:{title:"Kusion Commands",permalink:"/docs/reference/commands/"}},c={},l=[{value:"Perspective of PE",id:"perspective-of-pe",level:2},{value:"Setup Kusion Storage Backend",id:"setup-kusion-storage-backend",level:3},{value:"Develop Customized Kusion Modules",id:"develop-customized-kusion-modules",level:3},{value:"Create and Update Workspace",id:"create-and-update-workspace",level:3},{value:"Perspective of Dev",id:"perspective-of-dev",level:2},{value:"Setup Kusion Storage Backend",id:"setup-kusion-storage-backend-1",level:3},{value:"Create and Update Project and Stack",id:"create-and-update-project-and-stack",level:3},{value:"Trigger Preview and Apply Pipeline",id:"trigger-preview-and-apply-pipeline",level:3}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"achieving-team-collaboration-in-production-practice-with-github-actions"},"Achieving Team Collaboration in Production Practice with GitHub Actions"),(0,o.kt)("p",null,"In this article, we will introduce how to use Kusion CLI in combination with GitHub Actions to achieve team collaboration in production practice. "),(0,o.kt)("p",null,"Adopting the concept of separation of concerns, we divide the staff involved in application delivery and operation into two groups: ",(0,o.kt)("strong",{parentName:"p"},"Platform Engineers (PEs)")," and ",(0,o.kt)("strong",{parentName:"p"},"Developers (Devs)"),". As the builders of the Internal Developer Platform (IDP), platform engineers are primarily responsible for creating the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/backend"},"storage backend")," for the Kusion CLI in team collaborative scenarios (e.g. AWS S3 or Alicloud OSS), developing custom reusable ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/module/overview"},"Kusion modules"),", and creating and maintaining standardized platform configurations in ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/workspace"},"workspace"),". While application developers can focus on writing the application business logic and the configuration codes, self-serving the application delivery and operation by triggering the automated CI/CD pipelines. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," is such a CI/CD platform, and by customizing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows"},"GitHub Actions workflow"),", the pipeline such as building, testing, and deploying will be executed automatically. "),(0,o.kt)("p",null,"In the following sections, we will demonstrate the specific workflow from the perspectives of both PEs and Devs with the sample workflows from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"konfg")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"catalog")," repository. "),(0,o.kt)("h2",{id:"perspective-of-pe"},"Perspective of PE"),(0,o.kt)("h3",{id:"setup-kusion-storage-backend"},"Setup Kusion Storage Backend"),(0,o.kt)("p",null,"In order to enable multiple people to collaboratively edit and modify application configuration code within a team, PEs need to create a centralized remote storage backend for Kusion CLI, such as ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/pm/serv-s3/"},"AWS S3")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/en/product/object-storage-service"},"Alicloud OSS"),". Below is an example OSS bucket, we can see that it is mainly used to store application ",(0,o.kt)("strong",{parentName:"p"},"releases")," and ",(0,o.kt)("strong",{parentName:"p"},"workspace")," configurations. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alicloud oss bucket for storage backend",src:a(83328).Z,width:"2874",height:"1546"})),(0,o.kt)("p",null,"Suppose PEs have set up the Alicloud OSS storage backend and get the AK/SK with the permission to read and write the bucket, they can use the following commands to set up the remote storage backend. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# please replace the env with actual AK/SK\nexport OSS_ACCESS_KEY_ID=LTAxxxxxxxxxxxxxx\nexport OSS_ACCESS_KEY_SECRET=uUPxxxxxxxxxx\n\n# set up backend\nkusion config set backends.oss_test \'{"type":"oss","configs":{"bucket":"kusion-test","endpoint":"oss-cn-shanghai.aliyuncs.com"}}\'\nkusion config set backends.current oss_test\n')),(0,o.kt)("h3",{id:"develop-customized-kusion-modules"},"Develop Customized Kusion Modules"),(0,o.kt)("p",null,"In the production practice of an enterprise, a common scenario is that PEs need to abstract and encapsulate the on-premises infrastructural computing, storage and networking resources to reduce the cognitive burden of the developers. And they can develop customized Kusion modules, a kind of reusable building blocks to achieve this goal. Below shows an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog/actions/runs/9398478367/job/25883893076"},"GitHub Actions workflow")," for pushing the module artifacts provided by KusionStack Official with multiple os/arch to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/features/packages"},"GitHub Packages"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"upload kusion modules through github actions",src:a(8170).Z,width:"2874",height:"1470"})),(0,o.kt)("h3",{id:"create-and-update-workspace"},"Create and Update Workspace"),(0,o.kt)("p",null,"Moreover, PEs also need to create and update the workspace configurations, where they can declare the Kusion modules available in the workspace, and add some standardized default or application-specific configurations across the entire scope of the workspace. "),(0,o.kt)("p",null,"Suppose PEs have set up the remote storage backend, they can use the following commands to create and update workspace. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# create workspace with the name of 'dev'\nkusion workspace create dev\n\n# update workspace with 'dev.yaml'\nkusion workspace update dev -f dev.yaml\n\n# switch to the 'dev' workspace\nkusion workspace switch dev\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# dev.yaml declares 'mysql' and 'network' modules in the workspace\nmodules:\n    mysql:\n        path: oci://ghcr.io/kusionstack/mysql\n        version: 0.2.0\n    network:\n        path: oci://ghcr.io/kusionstack/network\n        version: 0.2.0\n")),(0,o.kt)("p",null,"So far, PE has almost completed the fundamental work for setting up the IDP. "),(0,o.kt)("h2",{id:"perspective-of-dev"},"Perspective of Dev"),(0,o.kt)("h3",{id:"setup-kusion-storage-backend-1"},"Setup Kusion Storage Backend"),(0,o.kt)("p",null,"In order to get the available modules of the workspace and validate the generated ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/spec"},"spec"),", developers need to communicate with PEs to obtain the AK/SK (usually with ",(0,o.kt)("strong",{parentName:"p"},"Read-Only")," permission), bucket name, and the endpoint to access the remote storage backend. And similar to the PEs, developers can set up the backend configs with the following commands. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# please replace the env with actual AK/SK\nexport OSS_ACCESS_KEY_ID=LTAxxxxxxxxxxxxxx\nexport OSS_ACCESS_KEY_SECRET=uUPxxxxxxxxxx\n\n# set up backend\nkusion config set backends.oss_test \'{"type":"oss","configs":{"bucket":"kusion-test","endpoint":"oss-cn-shanghai.aliyuncs.com"}}\'\nkusion config set backends.current oss_test\n')),(0,o.kt)("h3",{id:"create-and-update-project-and-stack"},"Create and Update Project and Stack"),(0,o.kt)("p",null,"Next, developers can create and update the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/project/overview"},"Project")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/stack/overview"},"Stack")," configurations with ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion project")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion stack")," command. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# create a new project named quickstart\nmkdir quickstart && cd quickstart\nkusion project create\n\n# create a stack named dev\nkusion stack create dev\n")),(0,o.kt)("p",null,"Below shows the initiated project and stack contents. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# quickstart/project.yaml\nname: quickstart\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# quickstart/dev/stack.yaml\n# The metadata information of the stack.\nname: dev\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# kcl.mod\n# Please add the modules you need in \'dependencies\'.\n[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\nservice = {oci = "oci://ghcr.io/kusionstack/service", tag = "0.1.0" }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# main.k\n# The configuration codes in perspective of developers.\nimport kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\n# Please replace the ${APPLICATION_NAME} with the name of your application, and complete the\n# 'AppConfiguration' instance with your own workload and accessories.\n${APPLICATION_NAME}: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n\n        }\n    }\n    accessories: {\n\n    }\n}\n")),(0,o.kt)("p",null,"Developers can use ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion mod list")," to get the available modules in current workspace and use ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion mod add")," to add a specified module to current stack. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# list the available modules in the current workspace\n\u279c kusion mod list\nName     Version  URL\nmysql    0.2.0    oci://ghcr.io/kusionstack/mysql\nnetwork  0.2.0    oci://ghcr.io/kusionstack/network\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# add the specified modules to the current stack\nkusion mod add mysql && kusion mod add network\n")),(0,o.kt)("p",null,"The corresponding module artifacts will be downloaded and the declaration of the modules will be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod"),", which can be compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"go mod tidy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# kcl.mod after executing \'kusion mod add\'\n[package]\n\n[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\nservice = { oci = "oci://ghcr.io/kusionstack/service", tag = "0.1.0" }\nmysql = { oci = "oci://ghcr.io/kusionstack/mysql", tag = "0.2.0" }\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.2.0" }\n')),(0,o.kt)("p",null,"After this, developers can edit the application configuration codes according to the actual needs. "),(0,o.kt)("h3",{id:"trigger-preview-and-apply-pipeline"},"Trigger Preview and Apply Pipeline"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"KusionStack/konfig")," is the official example repository, and provides a set of GitHub Actions workflows ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/preview.yml"},"preview.yml")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/apply.yml"},"apply.yml"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"preview.yml")," is triggered by a pull request to the main branch, while ",(0,o.kt)("inlineCode",{parentName:"p"},"apply.yml")," is triggered by a push to the main branch. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preview workflow",src:a(99897).Z,width:"2876",height:"928"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"apply workflow",src:a(52964).Z,width:"2874",height:"922"})),(0,o.kt)("p",null,"The previewing workflow will first get the changed projects and stacks. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"get changed projects and stacks",src:a(41951).Z,width:"2874",height:"1258"})),(0,o.kt)("p",null,"Then the previewing workflow will execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion preview")," command to all of the changed stacks, and open an issue for manual approval to merge the changes after the approvers check the preview result artifact. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preview workflow details",src:a(61884).Z,width:"2876",height:"1424"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mannual approval",src:a(8531).Z,width:"2872",height:"1564"})),(0,o.kt)("p",null,"Once the code review is completed and the pull request is merged into the main branch, it will trigger the apply workflow, which will deploy the changes to the affected Projects and Stacks, and upload the respective results to the GitHub Actions Artifacts."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"apply workflow details",src:a(21119).Z,width:"2874",height:"1264"})))}d.isMDXComponent=!0},83328:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/alicloud_oss_storage_backend-167404cb06561dab71ddb20e52463332.png"},52964:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github_actions_apply-acbd2098f22191b9944485e27495b84b.png"},21119:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github_actions_apply_details-0c4c08ba08c61686df2fddd19c204bde.png"},41951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github_actions_get_changed_projects_stacks-dab85539cad3765422ae1eefe5da5137.png"},8531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github_actions_mannual_approval-7ec3ae1ca613a1dd284c9e6d52d4f48c.png"},99897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github_actions_preview-5875df06926e93b1927e924f48c4f506.png"},61884:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github_actions_preview_details-6e3fa16df0ab5100e31f39fed6b9b0b3.png"},8170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upload_modules-03c181def6db605b0d3fd6b4a16f2d89.png"}}]);
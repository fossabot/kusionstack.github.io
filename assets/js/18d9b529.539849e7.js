"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"using-cloud-secrets"},o="Using Cloud Secrets Manager",s={unversionedId:"user-guides/secrets-management/using-cloud-secrets",id:"user-guides/secrets-management/using-cloud-secrets",title:"Using Cloud Secrets Manager",description:"Applications usually store sensitive data in secrets by using centralized secrets management solutions. For example, you authenticate databases, services, and external systems with passwords, API keys, tokens, and other credentials stored in a secret store, e.g. Hashicorp Vault, AWS Secrets Manager, Azure Key Vault, etc",source:"@site/docs/kusion/5-user-guides/4-secrets-management/1-using-cloud-secrets.md",sourceDirName:"5-user-guides/4-secrets-management",slug:"/user-guides/secrets-management/using-cloud-secrets",permalink:"/docs/next/user-guides/secrets-management/using-cloud-secrets",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/5-user-guides/4-secrets-management/1-using-cloud-secrets.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"Oct 5, 2024",sidebarPosition:1,frontMatter:{id:"using-cloud-secrets"},sidebar:"kusion",previous:{title:"Resource Graph",permalink:"/docs/next/user-guides/observability/resource-graph"},next:{title:"Achieving Team Collaboration in Production Practice with GitHub Actions",permalink:"/docs/next/user-guides/production-practice-case/collaborate-with-github-actions"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up workspace",id:"setting-up-workspace",level:2},{value:"Update AppConfiguration",id:"update-appconfiguration",level:2},{value:"Apply and Verify",id:"apply-and-verify",level:2}],l={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-cloud-secrets-manager"},"Using Cloud Secrets Manager"),(0,a.kt)("p",null,"Applications usually store sensitive data in secrets by using centralized secrets management solutions. For example, you authenticate databases, services, and external systems with passwords, API keys, tokens, and other credentials stored in a secret store, e.g. Hashicorp Vault, AWS Secrets Manager, Azure Key Vault, etc"),(0,a.kt)("p",null,"Kusion provides out-of-the-box support to reference existing external secrets management solution, this tutorial introduces that how to pull the secret from AWS Secrets Manager to make it available to applications."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,a.kt)("p",null,"The example below also requires you to have ",(0,a.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#initializing"},"initialized the project")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,a.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#kclmod"},(0,a.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the project directory."),(0,a.kt)("p",null,"Additionally, you also need to configure the obtained AccessKey and SecretKey as environment variables: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="AKIAQZDxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="oE/xxxx" # replace it with your SecretKey\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"aws iam account",src:n(24838).Z,width:"2874",height:"1398"})),(0,a.kt)("h2",{id:"setting-up-workspace"},"Setting up workspace"),(0,a.kt)("p",null,"Since v0.10.0, we have introduced the concept of ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/concepts/workspace"},"workspaces"),", whose configurations represent the part of the application behaviors that platform teams are interested in standardizing, or the ones to eliminate from developer's mind to make their lives easier."),(0,a.kt)("p",null,"In the case of setting up cloud secrets manager, platform teams need to specify which secrets management solution to use and necessary information to access on the workspace level."),(0,a.kt)("p",null,"A sample ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," with AWS Secrets Manager settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"modules:\n  ...\nsecretStore:\n  provider:\n    aws:\n      region: us-east-1\n      profile: The optional profile to be used to interact with AWS Secrets Manager.\n...\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"secretStore")," now supports ",(0,a.kt)("inlineCode",{parentName:"p"},"aws"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"alicloud")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"viettelcloud"),". ")),(0,a.kt)("h2",{id:"update-appconfiguration"},"Update AppConfiguration"),(0,a.kt)("p",null,"At this point we are set up for good! Now you can declare external type of secrets via the ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model to consume sensitive data stored in AWS Secrets Manager."),(0,a.kt)("p",null,"See the example below for a full, deployable AppConfiguration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport service.secret as sec\n\ngitsync: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "syncer": c.Container {\n                image: "dyrnq/git-sync"\n                # Run the following command as defined\n                command: [\n                    "--repo=https://github.com/KusionStack/kusion"\n                    "--ref=HEAD"\n                    "--root=/mnt/git"\n                ]\n                # Consume secrets in environment variables\n                env: {\n                    "GIT_SYNC_USERNAME": "secret://git-auth/username"\n                    "GIT_SYNC_PASSWORD": "secret://git-auth/password"\n                }\n            }\n        }\n        # Secrets used to retrieve secret data from AWS Secrets Manager\n        secrets: {\n            "git-auth": sec.Secret {\n                type: "external"\n                data: {\n                    "username": "ref://git-auth-info/username"\n                    "password": "ref://git-auth-info/password"\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"apply-and-verify"},"Apply and Verify"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply")," command to deploy above application, then use the below command to verify if the secret got deployed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get secret -n secretdemo\n")),(0,a.kt)("p",null,"You will find ",(0,a.kt)("inlineCode",{parentName:"p"},"git-auth")," of type Opaque automatically created and contains sensitive information pulled from AWS Secrets Manager."))}u.isMDXComponent=!0},24838:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-iam-account-2216105e7fa18fb2f7bf4be7e19f98bd.png"}}]);
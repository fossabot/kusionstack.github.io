"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},o="Using Cloud Secrets Manager",i={unversionedId:"user-guides/secrets-management/using-cloud-secrets",id:"version-v0.10/user-guides/secrets-management/using-cloud-secrets",title:"Using Cloud Secrets Manager",description:"Applications usually store sensitive data in secrets by using centralized secrets management solutions. For example, you authenticate databases, services, and external systems with passwords, API keys, tokens, and other credentials stored in a secret store, e.g. Hashicorp Vault, AWS Secrets Manager, Azure Key Vault, etc",source:"@site/docs_versioned_docs/version-v0.10/5-user-guides/5-secrets-management/1-using-cloud-secrets.md",sourceDirName:"5-user-guides/5-secrets-management",slug:"/user-guides/secrets-management/using-cloud-secrets",permalink:"/docs/v0.10/user-guides/secrets-management/using-cloud-secrets",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/5-user-guides/5-secrets-management/1-using-cloud-secrets.md",tags:[],version:"v0.10",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718187043,formattedLastUpdatedAt:"Jun 12, 2024",sidebarPosition:1,frontMatter:{},sidebar:"kusion",previous:{title:"Deploy Application Securely and Efficiently via GitHub Actions",permalink:"/docs/v0.10/user-guides/github-actions/deploy-application-via-github-actions"},next:{title:"Kusion Commands",permalink:"/docs/v0.10/reference/commands/"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up workspace",id:"setting-up-workspace",level:2},{value:"Update AppConfiguration",id:"update-appconfiguration",level:2},{value:"Apply and Verify",id:"apply-and-verify",level:2}],p={toc:l};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-cloud-secrets-manager"},"Using Cloud Secrets Manager"),(0,a.kt)("p",null,"Applications usually store sensitive data in secrets by using centralized secrets management solutions. For example, you authenticate databases, services, and external systems with passwords, API keys, tokens, and other credentials stored in a secret store, e.g. Hashicorp Vault, AWS Secrets Manager, Azure Key Vault, etc"),(0,a.kt)("p",null,"Kusion provides out-of-the-box support to reference existing external secrets management solution, this tutorial introduces that how to pull the secret from AWS Secrets Manager to make it available to applications."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,a.kt)("p",null,"The example below also requires you to have ",(0,a.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#initializing"},"initialized the project")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,a.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#kclmod"},(0,a.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the project directory."),(0,a.kt)("p",null,"Additionally, you also need to configure the obtained AccessKey and SecretKey as environment variables: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="AKIAQZDxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="oE/xxxx" # replace it with your SecretKey\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"aws iam account",src:n(24838).Z,width:"2874",height:"1398"})),(0,a.kt)("h2",{id:"setting-up-workspace"},"Setting up workspace"),(0,a.kt)("p",null,"Since v0.10.0, we have introduced the concept of ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.10/concepts/workspace"},"workspaces"),", whose configurations represent the part of the application behaviors that platform teams are interested in standardizing, or the ones to eliminate from developer's mind to make their lives easier."),(0,a.kt)("p",null,"In the case of setting up cloud secrets manager, platform teams need to specify which secrets management solution to use and necessary information to access on the workspace level."),(0,a.kt)("p",null,"A sample ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," with AWS Secrets Manager settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"modules:\n  ...\nsecretStore:\n  provider:\n    aws:\n      region: us-east-1\n      profile: The optional profile to be used to interact with AWS Secrets Manager.\n...\n")),(0,a.kt)("h2",{id:"update-appconfiguration"},"Update AppConfiguration"),(0,a.kt)("p",null,"At this point we are set up for good! Now you can declare external type of secrets via the ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model to consume sensitive data stored in AWS Secrets Manager."),(0,a.kt)("p",null,"See the example below for a full, deployable AppConfiguration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.container as c\nimport models.schema.v1.workload.secret as sec\n\ngitsync: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "syncer": c.Container {\n                image: "dyrnq/git-sync"\n                # Run the following command as defined\n                command: [\n                    "--repo=https://github.com/KusionStack/kusion"\n                    "--ref=HEAD"\n                    "--root=/mnt/git"\n                ]\n                # Consume secrets in environment variables\n                env: {\n                    "GIT_SYNC_USERNAME": "secret://git-auth/username"\n                    "GIT_SYNC_PASSWORD": "secret://git-auth/password"\n                }\n            }\n        }\n        # Secrets used to retrieve secret data from AWS Secrets Manager\n        secrets: {\n            "git-auth": sec.Secret {\n                type: "external"\n                data: {\n                    "username": "ref://git-auth-info/username"\n                    "password": "ref://git-auth-info/password"\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"apply-and-verify"},"Apply and Verify"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply")," command to deploy above application, then use the below command to verify if the secret got deployed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get secret -n secretdemo\n")),(0,a.kt)("p",null,"You will find ",(0,a.kt)("inlineCode",{parentName:"p"},"git-auth")," of type Opaque automatically created and contains sensitive information pulled from AWS Secrets Manager."))}u.isMDXComponent=!0},24838:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-iam-account-2216105e7fa18fb2f7bf4be7e19f98bd.png"}}]);
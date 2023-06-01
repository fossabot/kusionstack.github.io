"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="Hosting and Retrieving Secrets",s={unversionedId:"user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets",id:"user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets",title:"Hosting and Retrieving Secrets",description:"This guide shows you the practice of KusionStack in the field of Secret as Code. Vault is used in this paper as an external storage for secrets.",source:"@site/docs/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets.md",sourceDirName:"user_docs/guides/sensitive-data-solution",slug:"/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets",permalink:"/docs/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1685613407,formattedLastUpdatedAt:"6/1/2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Recording and Alerting",permalink:"/docs/user_docs/guides/prometheus/recording-and-alerting"},next:{title:"Vault Agent",permalink:"/docs/user_docs/guides/sensitive-data-solution/vault-agent"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Review Project and Codes",id:"review-project-and-codes",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"Config Code",id:"config-code",level:3},{value:"Pre-store Secrets",id:"pre-store-secrets",level:2},{value:"Deploy Application",id:"deploy-application",level:2},{value:"Verify Secrets",id:"verify-secrets",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hosting-and-retrieving-secrets"},"Hosting and Retrieving Secrets"),(0,r.kt)("p",null,"This guide shows you the practice of KusionStack in the field of Secret as Code. Vault is used in this paper as an external storage for secrets."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Install Kusion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes Cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/vault/downloads"},"Install Vault"))),(0,r.kt)("h2",{id:"review-project-and-codes"},"Review Project and Codes"),(0,r.kt)("h3",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,"Firstly, let's clone the Konfig repo and enter the root directory: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/konfig.git && cd konfig\n")),(0,r.kt)("p",null,"Then we can locate the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret-as-code")," project under the ",(0,r.kt)("inlineCode",{parentName:"p"},"base/examples")," directory, which is composed of the following files: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd base/examples/secret-as-code && tree .\n.\n\u251c\u2500\u2500 base                            // Common configuration for all stacks\n\u2502   \u2514\u2500\u2500 base.k                      // Common config code file for all stacks\n\u251c\u2500\u2500 dev                             // Stack directory\n\u2502   \u251c\u2500\u2500 ci-test                     // CI test directory, storing test scripts and data\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml           // Configuration for test data and compiling\n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml      // Expected Spec YAML, which can be updated using make\n\u2502   \u251c\u2500\u2500 kcl.yaml                    // Multi-file compilation configuration for current stack\n\u2502   \u251c\u2500\u2500 main.k                      // Config codes for App Dev in current stack\n\u2502   \u2514\u2500\u2500 stack.yaml                  // Meta data of current stack\n\u2514\u2500\u2500 project.yaml                    // Meta data of current project\n\n3 directories, 8 files\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"More details about the directory structure can be found in ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig")))),(0,r.kt)("h3",{id:"config-code"},"Config Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# project.yaml\nname: secret-as-code\nsecret_stores:\n  vault:\n    address: http://127.0.0.1:8200\n    auth_method: approle\n    role_id: c6a97b50-6b98-67fd-6917-242def1162b0\n    secret_id: f8167881-a090-770b-905d-305e7368f26a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," file specifies the external storage of secrets as Vault and gives the server address (",(0,r.kt)("inlineCode",{parentName:"p"},"address"),") and authentication method (",(0,r.kt)("inlineCode",{parentName:"p"},"auth_method"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# stack.yaml\nname: dev\nlabels:\n  kusionstack.io/secure: true\n")),(0,r.kt)("p",null,"The label field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"stack.yaml")," file indicates that the current stack contains secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# base.k\nimport base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.container\n\n# Application Configuration\nappConfiguration: frontend.Server {\n    # Main Container Configuration\n    mainContainer = container.Main {\n        ports = [\n            {containerPort = 80}\n        ]\n    }\n    image = "nginx:1.7.8"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"base.k")," file defines a simple k8s stateless application - Nginx and specifies the mirror address and container port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\nimport base.pkg.kusion_models.kube.frontend\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    annotations: {\n        "secret-store": "vault"\n        # Valid format:\n        #  "ref+vault://PATH/TO/KV_BACKEND#/KEY"\n        "foo": "ref+vault://secret/foo#/foo"\n        "bar": "ref+vault://secret/bar#/bar"\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," file extends the configuration of the Nginx application and customizes annotations. Among them, the value of annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," follow secret reference format (",(0,r.kt)("inlineCode",{parentName:"p"},"ref+vault://PATH/TO/KV_BACKEND#/KEY"),"):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ref+vault"),": indicates that this is a secret reference, and the external storage service is Vault"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PATH/TO/KV_BACKEND"),": specifies the path where a secret is stored"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"KEY"),": specifies the key to reading secret")),(0,r.kt)("p",null,"The complete format is concatenated using a style similar to URI expressions, which can retrieve a secret stored externally."),(0,r.kt)("h2",{id:"pre-store-secrets"},"Pre-store Secrets"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"After Vault is started in development mode and unpacked, secrets are pre-stored, and the path and keys are consistent with ",(0,r.kt)("inlineCode",{parentName:"li"},"main.k"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put secret/foo foo=foo\nvault kv put secret/bar bar=bar\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"approle")," auth method:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault auth enable approle\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'Create a policy named "my-policy" with READ permissions under the paths ',(0,r.kt)("inlineCode",{parentName:"li"},"secret/foo")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"secret/bar"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'vault policy write my-policy - <<EOF\npath "secret/foo" {\n  capabilities = ["read"]\n}\n\npath "secret/bar" {\n  capabilities = ["read"]\n}\nEOF\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Bind permission sets to the role named "my-role":')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault write auth/approle/role/my-role policies=my-policy\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Save role_id\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault read auth/approle/role/my-role/role-id\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Save secret_id\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault write -f auth/approle/role/my-role/secret-id\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information on authentication methods, please read ",(0,r.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault/docs/auth/approle"},"AppRole Auth Method"),"."))),(0,r.kt)("h2",{id:"deploy-application"},"Deploy Application"),(0,r.kt)("p",null,"Before deploying, replace the values of ",(0,r.kt)("inlineCode",{parentName:"p"},"role_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_id")," in the  ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," file."),(0,r.kt)("p",null,"Complete one-click deployment with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd base/example/secret-as-code/dev && kusion apply --yes\n")),(0,r.kt)("p",null,"The output is similar to below:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"apply",src:n(18698).Z,width:"1998",height:"434"})),(0,r.kt)("h2",{id:"verify-secrets"},"Verify Secrets"),(0,r.kt)("p",null,"Next, verify that the secrets have been retrieved from Vault and replace the values of annotations of Nginx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy -n secret-as-code secret-as-codedev -o jsonpath='{.metadata.annotations}'\n")),(0,r.kt)("p",null,"The output is similar to below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bar": "bar",\n  "deployment.kubernetes.io/revision": "1",\n  "foo": "foo",\n  "secret-store": "vault"\n}\n')),(0,r.kt)("p",null,"The original config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bar": "ref+vault://secret/bar#/bar",\n  "foo": "ref+vault://secret/foo#/foo",\n  "secret-store": "vault"\n}\n')),(0,r.kt)("p",null,"They have been changed as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- "bar": "ref+vault://secret/bar#/bar",\n+ "bar": "bar",\n- "foo": "ref+vault://secret/foo#/foo",\n+ "foo": "foo",\n')),(0,r.kt)("p",null,"So far, we have retrieved the secrets hosted in Vault by IaC and put them into use."))}d.isMDXComponent=!0},18698:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-f93fa767d7dc1b8190cf6d59468d6c21.jpg"}}]);
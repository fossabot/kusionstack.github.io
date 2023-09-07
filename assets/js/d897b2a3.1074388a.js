"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},s="Vault Agent",i={unversionedId:"user_docs/guides/sensitive-data-solution/vault-agent",id:"user_docs/guides/sensitive-data-solution/vault-agent",title:"Vault Agent",description:"This guide will show you that KCL/Kusion solves the secret management problem by integrating Vault.",source:"@site/docs/user_docs/guides/sensitive-data-solution/vault-agent.md",sourceDirName:"user_docs/guides/sensitive-data-solution",slug:"/user_docs/guides/sensitive-data-solution/vault-agent",permalink:"/docs/user_docs/guides/sensitive-data-solution/vault-agent",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/sensitive-data-solution/vault-agent.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1694077538,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Hosting and Retrieving Secrets",permalink:"/docs/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets"},next:{title:"Vault CSI Provider",permalink:"/docs/user_docs/guides/sensitive-data-solution/vault-csi-provider"}},o={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Vault",id:"install-vault",level:2},{value:"Configure Vault",id:"configure-vault",level:2},{value:"Create a Secret",id:"create-a-secret",level:3},{value:"Enable Kubernetes Authentication",id:"enable-kubernetes-authentication",level:3},{value:"Verify Secret",id:"verify-secret",level:2},{value:"Create Annotated Pods",id:"create-annotated-pods",level:3},{value:"Validation mount results",id:"validation-mount-results",level:3},{value:"Raw Output",id:"raw-output",level:4},{value:"Formatted Output",id:"formatted-output",level:4},{value:"What&#39;s Next",id:"whats-next",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vault-agent"},"Vault Agent"),(0,r.kt)("p",null,"This guide will show you that KCL/Kusion solves the secret management problem by integrating Vault.\nWe will pass the database username and password into the Pod, involving 3 Kubernetes resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespace"),(0,r.kt)("li",{parentName:"ul"},"Deployment"),(0,r.kt)("li",{parentName:"ul"},"ServiceAccount")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This guide requires you to have a basic understanding of Kubernetes.\nIf you are not familiar with the relevant concepts, please refer to the links below:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tutorials/Kubernetes-basics/"},"Learn Kubernetes Basics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"ServiceAccount")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before we start, we need to complete the following steps:"),(0,r.kt)("p",null,"1\u3001Install Kusion"),(0,r.kt)("p",null,"We recommend using the official installation tool ",(0,r.kt)("em",{parentName:"p"},"kusionup")," which supports multi-version management.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"Download and Install")," for more details."),(0,r.kt)("p",null,"2\u3001Clone Konfig repo"),(0,r.kt)("p",null,"In this guide, we need some KCL models that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"Konfig")," offers.\nFor more details on KCL language, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"Tour of KCL"),"."),(0,r.kt)("p",null,"3\u3001Running Kubernetes cluster"),(0,r.kt)("p",null,"There must be a running Kubernetes cluster and a ",(0,r.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," command line tool.\nIf you don't have a cluster yet, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," to start one of your own."),(0,r.kt)("p",null,"4\u3001Available Helm CLI"),(0,r.kt)("p",null,"The Helm tool is used to deploy the Vault Server and Agent Injector.\nIf you haven't installed Helm, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Install Helm"),"."),(0,r.kt)("h2",{id:"install-vault"},"Install Vault"),(0,r.kt)("p",null,"We recommend deploying the vault server and agent on Kubernetes by ",(0,r.kt)("em",{parentName:"p"},"Helm Chart"),".\n",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/"},"Helm")," is a package manager,\nit can install and configure Vault and its related components in different modes.\nHelm chart implements conditionalization and parameterization of templates.\nThese parameters can be set via command line arguments or defined in YAML files."),(0,r.kt)("p",null,"1\u3001Add HashiCorp helm repo\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add hashicorp https://helm.releases.hashicorp.com\n")),(0,r.kt)("p",null,"2\u3001Update to cache HashiCorp's latest version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,r.kt)("p",null,"3\u3001Install Vault server and agent, and start in development mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm install vault hashicorp/vault --set "server.dev.enabled=true"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server.dev.enabled=true")," indicates that Vault is started in developer mode on a single pod."),(0,r.kt)("p",null,"4\u3001Check all pods in the default namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                  READY   STATUS    RESTARTS      AGE\nvault-0                               1/1     Running   0             2d1h\nvault-agent-injector-58b6d499-k9x9r   1/1     Running   0             2d1h\n")),(0,r.kt)("p",null,"Pod ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-0")," is the Vault server running in ",(0,r.kt)("strong",{parentName:"p"},"dev")," mode,\npod ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-agent-injector-58b6d499-k9x9r")," is an agent that injects data according to ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.annotations"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To simplify the demonstration, start the Vault server in ",(0,r.kt)("strong",{parentName:"p"},"dev")," mode.\nIn this mode, the vault server will automatically initialize and unseal.\n",(0,r.kt)("strong",{parentName:"p"},"DO NOT")," use it in a production environment.")),(0,r.kt)("h2",{id:"configure-vault"},"Configure Vault"),(0,r.kt)("p",null,"Vault stores secrets in its database, and users need to configure the relevant confidential data and enable Vault's Kubernetes authentication."),(0,r.kt)("h3",{id:"create-a-secret"},"Create a Secret"),(0,r.kt)("p",null,"We must enable the k/v engine of Vault, and save the secret data(username and password of database) in it.\nThen, in the ",(0,r.kt)("a",{parentName:"p",href:"#create-annotated-pods"},"Create Annotated Pods")," section, the database username and password will be injected into the pod."),(0,r.kt)("p",null,"1\u3001Start an interactive shell session on the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-0")," pod: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it vault-0 -- /bin/sh\n")),(0,r.kt)("p",null,"2\u3001Enable the k/v engine at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"path=internal")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault secrets enable -path=internal kv-v2\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Success! Enabled the kv-v2 secrets engine at: internal/\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more detail on the k/v secrets engine, see ",(0,r.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/vault/static-secrets"},"Static Secrets: Key/Value Secret"),".")),(0,r.kt)("p",null,"3\u3001Create a secret at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"internal/database/config")," with username and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault kv put internal/database/config username="db-readonly-username" password="db-secret-password"\n')),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Key              Value\n---              -----\ncreated_time     2022-03-13T08:40:02.1133715Z\ndeletion_time    n/a\ndestroyed        false\nversion          1\n")),(0,r.kt)("p",null,"4\u3001Verify that the secret is readable at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"internal/database/config"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault kv get internal/database/config\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"======= Metadata =======\nKey                Value\n---                -----\ncreated_time       2022-03-13T08:40:02.1133715Z\ncustom_metadata    <nil>\ndeletion_time      n/a\ndestroyed          false\nversion            1\n\n====== Data ======\nKey         Value\n---         -----\npassword    db-secret-password\nusername    db-readonly-username\n")),(0,r.kt)("p",null,"Now the confidential data is created, please don't exit the Pod."),(0,r.kt)("h3",{id:"enable-kubernetes-authentication"},"Enable Kubernetes Authentication"),(0,r.kt)("p",null,"Vault provides a Kubernetes authentication method that enables clients to authenticate with a Kubernetes ServiceAccount Token.\nThe Kubernetes resources that access the secret and create the volume authenticate through this method through a ",(0,r.kt)("inlineCode",{parentName:"p"},"role"),"."),(0,r.kt)("p",null,"1\u3001Continue with the terminal in the previous step, and enable the Kubernetes authentication method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault auth enable kubernetes\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Enabled Kubernetes auth method at: Kubernetes/\n")),(0,r.kt)("p",null,"2\u3001Configure authentication rules, depending on the Kubernetes API address, ServiceAccount token, certificate, and the issuer of the Kubernetes ServiceAccount(required for Kubernetes 1.21+):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault write auth/Kubernetes/config \\\n    Kubernetes_host="https://$Kubernetes_PORT_443_TCP_ADDR:443" \\\n    token_reviewer_jwt="$(cat /var/run/secrets/Kubernetes.io/serviceaccount/token)" \\\n    Kubernetes_ca_cert=@/var/run/secrets/Kubernetes.io/serviceaccount/ca.crt \\\n    issuer="https://Kubernetes.default.svc.cluster.local"\n')),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Data written to: auth/Kubernetes/config\n")),(0,r.kt)("p",null,"When Kubernetes creates pods, mount ",(0,r.kt)("inlineCode",{parentName:"p"},"token_reviewer_jwt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubernetes_ca_cert")," into them.\nThe environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBERNETES_PORT_443_TCP_ADDR")," references the internal network address of the Kubernetes host."),(0,r.kt)("p",null,"3\u3001Create a policy named ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-agent-agent-policy"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault policy write kcl-vault-agent-agent-policy - <<EOF\npath "internal/data/database/config" {\n  capabilities = ["read"]\n}\nEOF\n')),(0,r.kt)("p",null,'The service to be deployed later needs to read the secret saved in the path "internal/database/config",\nso grant read permission to the path first.'),(0,r.kt)("p",null,"4\u3001Create a role named ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-agent-agent-role"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault write auth/Kubernetes/role/kcl-vault-agent-agent-role \\\n    bound_service_account_names=kcl-vault-agent-agent-sa \\\n    bound_service_account_namespaces=kcl-vault-agent-agent \\\n    policies=kcl-vault-agent-agent-policy \\\n    ttl=24h\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Data written to: auth/Kubernetes/role/kcl-vault-agent-role\n")),(0,r.kt)("p",null,"This role associates the Kubernetes service account ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-agent-sa")," and namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault")," with the Vault policy ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-agent-role"),".\nThis Kubernetes service account will be created later. The token returned after successful authentication is valid for 24 hours.\nFinally, exit the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-0")," pod."),(0,r.kt)("h2",{id:"verify-secret"},"Verify Secret"),(0,r.kt)("p",null,"In the previous section, we created a secret in the Vault server,\nconfigured the Vault ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"policy"),", and completed the binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),".\nIn this section, we directly use the Vault demo project ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-agent")," in Konfig to deploy the application and verify the results."),(0,r.kt)("h3",{id:"create-annotated-pods"},"Create Annotated Pods"),(0,r.kt)("p",null,"1\u3001Enter stack dir ",(0,r.kt)("inlineCode",{parentName:"p"},"base/examples/kcl-vault-agent/dev")," and apply stack configs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd base/examples/kcl-vault/dev && kusion apply --yes=true\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SUCCESS  Compiling in stack dev...\nStack: dev    Provider                Type                    Name    Plan\n      * \u251c\u2500  Kubernetes        v1:Namespace      kcl-vault-agent[0]  Create\n      * \u251c\u2500  Kubernetes  apps/v1:Deployment  kcl-vault-agent-dev[0]  Create\n      * \u2514\u2500  Kubernetes   v1:ServiceAccount   kcl-vault-agent-sa[0]  Create\n\nStart applying diffs......\n SUCCESS  Creating Namespace/kcl-vault-agent\n SUCCESS  Creating Deployment/kcl-vault-agent-dev\n SUCCESS  Creating ServiceAccount/kcl-vault-agent-sa\nCreating ServiceAccount/kcl-vault-agent-sa [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All three resources have been distributed, and the controller needs some time to sync these resources."),(0,r.kt)("p",{parentName:"admonition"},"Please execute ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get po -n kcl-vault-agent")," to make sure the Pod is Running (",(0,r.kt)("inlineCode",{parentName:"p"},"2/2"),").")),(0,r.kt)("h3",{id:"validation-mount-results"},"Validation mount results"),(0,r.kt)("h4",{id:"raw-output"},"Raw Output"),(0,r.kt)("p",null,"1\u3001Secret injection result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl exec -n kcl-vault \\\n    $(kubectl get pod -n kcl-vault-agent -l app=kcl-vault-agent-test -o jsonpath="{.items[0].metadata.name}") \\\n    --container kcl-vault-agent-test -- cat /vault/secrets/database-config.txt\n')),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"data: map[password:db-secret-password username:db-readonly-username]\nmetadata: map[created_time:2022-03-13T08:40:02.1133715Z custom_metadata:<nil> deletion_time: destroyed:false version:1]\n")),(0,r.kt)("p",null,"You can see the unformatted database username and password, which are configured in the ",(0,r.kt)("a",{parentName:"p",href:"#create-a-secret"},"Create a secret")," section."),(0,r.kt)("h4",{id:"formatted-output"},"Formatted Output"),(0,r.kt)("p",null,"Unformatted data is unreasonable and not read directly for applications.\nRegarding formatting, Vault also provides some ",(0,r.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/agent/template"},"template instructions"),".\nIn this example, you only need to uncomment the code of ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," and re-apply the configurations."),(0,r.kt)("p",null,"The following shows commented code in ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'podMetadata = apis.ObjectMeta {\n        annotations = {\n            "vault.hashicorp.com/agent-inject" = "true"\n            "vault.hashicorp.com/role" = "kcl-vault-agent-role"\n            "vault.hashicorp.com/agent-inject-secret-database-config.txt" = "internal/data/database/config"\n            "vault.hashicorp.com/agent-inject-status" = "update"\n            "vault.hashicorp.com/agent-inject-template-database-config.txt" = """\\\n{{- with secret "internal/data/database/config" -}}\npostgresql://{{ .Data.data.username }}:{{ .Data.data.password }}@postgres:5432/wizard\n{{- end -}}"""\n')),(0,r.kt)("p",null,"Apply again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply --yes=true\n")),(0,r.kt)("p",null,"Check the secret data after the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," rolling update is finished:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl exec -n kcl-vault-agent \\\n    $(kubectl get pod -n kcl-vault-agent -l app=kcl-vault-agent-test -o jsonpath="{.items[0].metadata.name}") \\\n    --container kcl-vault-agent-test -- cat /vault/secrets/database-config.txt\n')),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"postgresql://db-readonly-username:db-secret-password@postgres:5432/wizard\n")),(0,r.kt)("p",null,"As you can see, the confidential data is injected successfully and the result is rendered in the format specified by annotation."),(0,r.kt)("p",null,"At this point, we have completed the KCL/Kusion integration Vault agent to realize secret management."),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn about secret management with ",(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/guides/sensitive-data-solution/vault-csi-provider"},"Vault CSI Provider"))))}c.isMDXComponent=!0}}]);
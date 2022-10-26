"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6520],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={},i="Vault CSI Provider",l={unversionedId:"user_docs/guides/sensitive-data-solution/vault-csi-provider",id:"user_docs/guides/sensitive-data-solution/vault-csi-provider",title:"Vault CSI Provider",description:"This guide will show you that KCL/Kusion solves the secret management problem by integrating Vault CSI Provider.",source:"@site/docs/user_docs/guides/sensitive-data-solution/vault-csi-provider.md",sourceDirName:"user_docs/guides/sensitive-data-solution",slug:"/user_docs/guides/sensitive-data-solution/vault-csi-provider",permalink:"/docs/user_docs/guides/sensitive-data-solution/vault-csi-provider",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/sensitive-data-solution/vault-csi-provider.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1666755388,formattedLastUpdatedAt:"10/26/2022",frontMatter:{},sidebar:"user_docs",previous:{title:"Vault Agent",permalink:"/docs/user_docs/guides/sensitive-data-solution/vault-agent"},next:{title:"FAQ",permalink:"/docs/user_docs/support/"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Vault server and CSI driver",id:"install-vault-server-and-csi-driver",level:2},{value:"Install Vault server",id:"install-vault-server",level:3},{value:"Install CSI driver",id:"install-csi-driver",level:3},{value:"Configure Vault",id:"configure-vault",level:2},{value:"Create a secret",id:"create-a-secret",level:3},{value:"Enable Kubernetes authentication",id:"enable-kubernetes-authentication",level:3},{value:"Verify Secret",id:"verify-secret",level:2},{value:"Create a pod with a secret mounted",id:"create-a-pod-with-a-secret-mounted",level:3},{value:"Verify mount results",id:"verify-mount-results",level:3},{value:"What&#39;s Next",id:"whats-next",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vault-csi-provider"},"Vault CSI Provider"),(0,r.kt)("p",null,"This guide will show you that KCL/Kusion solves the secret management problem by integrating Vault CSI Provider.\nWe will pass the database username and password into the Pod, involving 3 kubernetes built-in resources and 1 custom resource:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespace"),(0,r.kt)("li",{parentName:"ul"},"Deployment"),(0,r.kt)("li",{parentName:"ul"},"ServiceAccount"),(0,r.kt)("li",{parentName:"ul"},"SecretProviderClass")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This guide requires you to have a basic understanding of Kubernetes.\nIf you are not familiar with the relevant concepts, please refer to the links below:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"ServiceAccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://secrets-store-csi-driver.sigs.k8s.io/concepts.html#custom-resource-definitions-crds"},"SecretProviderClass"))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before we start, we need to complete the following steps first:"),(0,r.kt)("p",null,"1\u3001Install Kusion"),(0,r.kt)("p",null,"We recommend using the official installation tool ",(0,r.kt)("em",{parentName:"p"},"kusionup")," which supports multi-version management.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"Download and Install")," for more details."),(0,r.kt)("p",null,"2\u3001Clone Konfig repo"),(0,r.kt)("p",null,"In this guide, we need some KCL models that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"Konfig")," offers.\nFor more details on KCL language, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/lang/lang/tour"},"Tour of KCL"),"."),(0,r.kt)("p",null,"3\u3001Running Kubernetes cluster"),(0,r.kt)("p",null,"There must be a running Kubernetes cluster and a ",(0,r.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," command line tool.\nIf you don't have a cluster yet, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," to start one of your own."),(0,r.kt)("p",null,"4\u3001Available Helm CLI"),(0,r.kt)("p",null,"The Helm tool is used to deploy the Vault server and CSI driver.\nIf you haven't installed Helm, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Install Helm"),"."),(0,r.kt)("h2",{id:"install-vault-server-and-csi-driver"},"Install Vault server and CSI driver"),(0,r.kt)("p",null,"We recommend deploying the Vault server and CSI driver on Kubernetes by ",(0,r.kt)("em",{parentName:"p"},"Helm Chart"),".\n",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/"},"Helm")," is a package manager,\nwhich can install and configure Vault and its related components in different modes.\nHelm chart implements conditionalization and parameterization of templates.\nThese parameters can be set via command line arguments or defined in YAML files."),(0,r.kt)("h3",{id:"install-vault-server"},"Install Vault server"),(0,r.kt)("p",null,"1\u3001Add HashiCorp helm repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add hashicorp https://helm.releases.hashicorp.com\n")),(0,r.kt)("p",null,"2\u3001Update to cache HashiCorp's latest version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,r.kt)("p",null,"3\u3001Install Vault server, start in development mode, disable Injector and enable CSI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm install vault hashicorp/vault \\\n    --set "server.dev.enabled=true" \\\n    --set "injector.enabled=false" \\\n    --set "csi.enabled=true"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server.dev.enabled=true")," indicates that Vault is started in developer mode on a single pod.\n",(0,r.kt)("inlineCode",{parentName:"p"},"injector.enabled=false")," indicates that the Injector service is disabled;\n",(0,r.kt)("inlineCode",{parentName:"p"},"csi.enabled=true")," Indicates that the Vault CSI Pod is enabled.\nIf you already have Vault installed, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command to update Vault's deployment mode."),(0,r.kt)("p",null,"4\u3001Check all pods in the default namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\nNAME                       READY   STATUS    RESTARTS   AGE\nvault-0                    1/1     Running   0          17m\nvault-csi-provider-456hl   1/1     Running   0          17m\n")),(0,r.kt)("p",null,"Wait until the status of ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-0")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," and ready (",(0,r.kt)("inlineCode",{parentName:"p"},"1/1"),") before continuing with this guide."),(0,r.kt)("h3",{id:"install-csi-driver"},"Install CSI driver"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://secrets-store-csi-driver.sigs.k8s.io/introduction.html"},"Secrets Store CSI Driver"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"secrets-store.csi.k8s.io")," allows Kubernetes to mount multiple secrets, keys,\nand certs stored in enterprise-grade external secrets stores into their pods as a volume.\nOnce the volume is attached, the data in it is mounted into the container\u2019s file system."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/container-storage-interface/spec/blob/master/spec.md"},"Container Storage Interface (CSI)"),"\nis a standard for exposing arbitrary block and file storage systems\nto containerized workloads on Container Orchestration Systems (COs) like Kubernetes.\nUsing CSI third-party storage providers can write and deploy plugins exposing new storage systems in Kubernetes\nwithout ever having to touch the core Kubernetes code."))),(0,r.kt)("p",null,"1\u3001Add CSI driver helm repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts\n")),(0,r.kt)("p",null,"2\u3001Install Kubernetes-Secrets-Store-CSI-Driver\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install csi secrets-store-csi-driver/secrets-store-csi-driver --namespace kube-system\n")),(0,r.kt)("p",null,"3\u3001Check CSI driver pods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl --namespace=kube-system get pods -l "app=secrets-store-csi-driver"\nNAME                                 READY   STATUS    RESTARTS   AGE\ncsi-secrets-store-csi-driver-2wl2f   3/3     Running   0          2m\n')),(0,r.kt)("p",null,"Wait until the status of pod ",(0,r.kt)("inlineCode",{parentName:"p"},"csi-secrets-store-csi-driver-2wl2f")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," and is ready (",(0,r.kt)("inlineCode",{parentName:"p"},"3/3"),") before continuing with this guide."),(0,r.kt)("h2",{id:"configure-vault"},"Configure Vault"),(0,r.kt)("p",null,"Vault stores confidential data in its database, and users need to configure the relevant confidential data and enable Vault's Kubernetes authentication."),(0,r.kt)("h3",{id:"create-a-secret"},"Create a secret"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"#create-a-pod-with-a-secret-mounted"},"Create a pod with a secret mounted")," section,\nthe volume mounted in Pod expects secret stored at path ",(0,r.kt)("inlineCode",{parentName:"p"},"secret/data/db-pass"),".\nWhen Vault is run in development a K/V secret engine is enabled at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/secret"),"."),(0,r.kt)("p",null,"1\u3001start an interactive shell session on the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-0")," pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it vault-0 -- /bin/sh\n")),(0,r.kt)("p",null,"2\u3001Create a secret at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"secret/db-pass")," with a password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault kv put secret/db-pass password="db-secret-password"\n')),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Key                Value\n---                -----\ncreated_time       2022-03-17T07:45:06.3767973Z\ncustom_metadata    <nil>\ndeletion_time      n/a\ndestroyed          false\nversion            1\n")),(0,r.kt)("p",null,"3\u3001Verify that the secret is readable at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"secret/db-pass"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault kv get secret/db-pass\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"======= Metadata =======\nKey                Value\n---                -----\ncreated_time       2022-03-17T07:45:06.3767973Z\ncustom_metadata    <nil>\ndeletion_time      n/a\ndestroyed          false\nversion            1\n\n====== Data ======\nKey         Value\n---         -----\npassword    db-secret-password\n")),(0,r.kt)("p",null,"For now, the confidential data is created, please don't exit the vault pod immediately."),(0,r.kt)("h3",{id:"enable-kubernetes-authentication"},"Enable Kubernetes authentication"),(0,r.kt)("p",null,"Vault provides a Kubernetes authentication method that enables clients to authenticate with a Kubernetes ServiceAccount Token.\nThe Kubernetes resources that access the secret and create the volume authenticate through this method through a ",(0,r.kt)("inlineCode",{parentName:"p"},"role"),"."),(0,r.kt)("p",null,"1\u3001Continue with the terminal in the previous step, and enable the Kubernetes authentication method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault auth enable kubernetes\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Enabled kubernetes auth method at: kubernetes/\n")),(0,r.kt)("p",null,"2\u3001Configure authentication rules, depending on the Kubernetes API address, ServiceAccount token, certificate, and the issuer of the Kubernetes ServiceAccount(required for Kubernetes 1.21+):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault write auth/kubernetes/config \\\n    kubernetes_host="https://$KUBERNETES_PORT_443_TCP_ADDR:443" \\\n    token_reviewer_jwt="$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" \\\n    kubernetes_ca_cert=@/var/run/secrets/kubernetes.io/serviceaccount/ca.crt \\\n    issuer="https://kubernetes.default.svc.cluster.local"\n')),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Data written to: auth/kubernetes/config\n")),(0,r.kt)("p",null,"When Kubernetes creates pods, mount ",(0,r.kt)("inlineCode",{parentName:"p"},"token_reviewer_jwt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubernetes_ca_cert")," into them.\nThe environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBERNETES_PORT_443_TCP_ADDR")," references the internal network address of the Kubernetes host."),(0,r.kt)("p",null,"3\u3001Create a policy named ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-csi-policy"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault policy write kcl-vault-csi-policy - <<EOF\npath "secret/data/db-pass" {\n  capabilities = ["read"]\n}\nEOF\n')),(0,r.kt)("p",null,"Kubernetes-Secrets-Store-CSI-Driver needs to read the secret key, which must have read access to the mounted volume."),(0,r.kt)("p",null,"4\u3001Create a role named ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-csi-role"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault write auth/kubernetes/role/kcl-vault-csi-role \\\n    bound_service_account_names=kcl-vault-csi-sa \\\n    bound_service_account_namespaces=kcl-vault-csi \\\n    policies=kcl-vault-csi-policy \\\n    ttl=24h\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Data written to: auth/kubernetes/role/kcl-vault-csi-role\n")),(0,r.kt)("p",null,"This role associates the Kubernetes service account ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-csi-sa")," and namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-csi")," with the Vault policy ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-csi-role"),".\nThis Kubernetes service account will be created later. The token returned after successful authentication is valid for 24 hours.\nFinally, exit the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-0")," pod."),(0,r.kt)("h2",{id:"verify-secret"},"Verify Secret"),(0,r.kt)("p",null,"In the previous section, we created a secret in the Vault server,\nconfigured the Vault ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"policy"),", and completed the binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),".\nIn this section, we directly use the Vault demo project ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-csi")," in Konfig to deploy the application and verify the results."),(0,r.kt)("h3",{id:"create-a-pod-with-a-secret-mounted"},"Create a pod with a secret mounted"),(0,r.kt)("p",null,"1\u3001Enter stack dir ",(0,r.kt)("inlineCode",{parentName:"p"},"base/examples/kcl-vault-csi/dev")," and apply stack configs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd base/examples/kcl-vault-csi/dev && kusion apply --yes=true\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SUCCESS  Compiling in stack dev...                                                                                                   \n\nStack: dev    Provider                                               Type                       Name    Plan\n      * \u251c\u2500  kubernetes                                       v1:Namespace           kcl-vault-csi[0]  Create\n      * \u251c\u2500  kubernetes                                  v1:ServiceAccount        kcl-vault-csi-sa[0]  Create\n      * \u251c\u2500  kubernetes  secrets-store.csi.x-k8s.io/v1:SecretProviderClass  kcl-vault-csi-database[0]  Create\n      * \u2514\u2500  kubernetes                                 apps/v1:Deployment       kcl-vault-csi-dev[0]  Create\n\nStart applying diffs......\n SUCCESS  Creating Namespace/kcl-vault-csi                                                                                            \n SUCCESS  Creating ServiceAccount/kcl-vault-csi-sa                                                                                    \n SUCCESS  Creating SecretProviderClass/kcl-vault-csi-database                                                                         \n SUCCESS  Creating Deployment/kcl-vault-csi-dev                                                                                       \nCreating Deployment/kcl-vault-csi-dev [4/4] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n\nApply complete! Resources: 4 created, 0 updated, 0 deleted.\n")),(0,r.kt)("p",null,"The four resources are created successfully.\nAfter the deployment controller finished syncing pods, it will mount the volume declared in SecretProviderClass to the pod's file system."),(0,r.kt)("h3",{id:"verify-mount-results"},"Verify mount results"),(0,r.kt)("p",null,"1\u3001Check pod status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kcl-vault-csi \n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                 READY   STATUS    RESTARTS   AGE\nkcl-vault-csi-dev-64b66968d8-p27fv   1/1     Running   0          12s\n")),(0,r.kt)("p",null,"2\u3001Read file content from ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/secrets-store/db-password"),", see if it is the password written in the section ",(0,r.kt)("a",{parentName:"p",href:"#create-a-secret"},"Create a secret"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it kcl-vault-csi-dev-64b66968d8-p27fv -n kcl-vault-csi -- cat /mnt/secrets-store/db-password\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"db-secret-password\n")),(0,r.kt)("p",null,"It can be seen that we successfully injected the secret data ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," into the file system of the pod by the CSI driver."),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn about secret management with ",(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/guides/sensitive-data-solution/vault-agent"},"Vault Agent"))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,g=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Multi-Cluster Management"},s=void 0,l={unversionedId:"user-guide/multi-cluster-management",id:"user-guide/multi-cluster-management",title:"Multi-Cluster Management",description:"Multi-cluster management is the entrance to register clusters into Karpor, enabling search and insight capabilities across a large number of clusters.",source:"@site/docs/karpor/3-user-guide/2-multi-cluster-management.md",sourceDirName:"3-user-guide",slug:"/user-guide/multi-cluster-management",permalink:"/karpor/next/user-guide/multi-cluster-management",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/3-user-guide/2-multi-cluster-management.md",tags:[],version:"current",lastUpdatedBy:"hexin",lastUpdatedAt:1724678822,formattedLastUpdatedAt:"Aug 26, 2024",sidebarPosition:2,frontMatter:{title:"Multi-Cluster Management"},sidebar:"karpor",previous:{title:"How to create token",permalink:"/karpor/next/user-guide/how-to-create-token"},next:{title:"How to Search",permalink:"/karpor/next/user-guide/search"}},o={},c=[{value:"Register Cluster",id:"register-cluster",level:2},{value:"Register eks Cluster",id:"register-eks-cluster",level:3},{value:"Edit Cluster",id:"edit-cluster",level:2},{value:"Rotate Certificate",id:"rotate-certificate",level:2},{value:"Remove Cluster",id:"remove-cluster",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Multi-cluster management is the entrance to register clusters into Karpor, enabling search and insight capabilities across a large number of clusters."),(0,a.kt)("h2",{id:"register-cluster"},"Register Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("kbd",null,"Cluster Management")," Tab."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("kbd",null,"Register Cluster")," button.\n",(0,a.kt)("img",{src:n(96615).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"Add the cluster name. The cluster name must be unique and CANNOT be altered once created."),(0,a.kt)("li",{parentName:"ol"},"Upload the cluster's kubeconfig file. One with read permission is sufficient."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("kbd",null,"Verify and Submit")," button.\n",(0,a.kt)("img",{src:n(35517).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"Once verified, the cluster will be added under the ",(0,a.kt)("kbd",null,"Cluster Management")," page\n",(0,a.kt)("img",{src:n(2377).Z,width:"1620",height:"1080"}))),(0,a.kt)("h3",{id:"register-eks-cluster"},"Register eks Cluster"),(0,a.kt)("p",null,"If you want to register an EKS cluster, you need to perform some additional operations on the kubeconfig:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Export the kubeconfig for the EKS cluster. For example, you can obtain the kubeconfig for the specified cluster using the following AWS command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"aws eks --region <YOUR REGION> update-kubeconfig  --name <YOUR CLUSTER NAME> --kubeconfig=<OUTPUT FILENAME>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add the fields ",(0,a.kt)("inlineCode",{parentName:"li"},"env"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"interactiveMode"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"provideClusterInfo")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"users/exec")," section of the exported kubeconfig file. You can refer to the following kubeconfig structure:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: CA\n    server: SERVER\n  name: CLUSTER\ncontexts:\n- context:\n    cluster: CLUSTER\n    user: USER\n  name: CONTEXT\ncurrent-context: CONTEXT\nkind: Config\npreferences: {}\nusers:\n- name: USER\n  user:\n    exec:\n      apiVersion: client.authentication.k8s.io/v1beta1\n      args:\n      - --region\n      - ap-southeast-1\n      - eks\n      - get-token\n      - --cluster-name\n      - mycluster3\n      - --output\n      - json\n      command: aws\n      ### The following fields need to be added to the kubeconfig.\n      env:\n      - name: AWS_ACCESS_KEY_ID\n        value: <YOUR AWS_ACCESS_KEY_ID>\n      - name: AWS_SECRET_ACCESS_KEY\n        value: <YOUR AWS_SECRET_ACCESS_KEY>\n      - name: AWS_DEFAULT_REGION\n        value: <AWS_DEFAULT_REGION>\n      - name: AWS_DEFAULT_OUTPUT\n        value: json\n      interactiveMode: IfAvailable\n      provideClusterInfo: false\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Use the modified kubeconfig in ",(0,a.kt)("a",{parentName:"li",href:"#register-cluster"},"Register Cluster"),".")),(0,a.kt)("h2",{id:"edit-cluster"},"Edit Cluster"),(0,a.kt)("p",null,"The ",(0,a.kt)("kbd",null,"Edit")," button allows for modifications to the ",(0,a.kt)("kbd",null,"Display Name")," and ",(0,a.kt)("kbd",null,"Description"),", thus altering how the cluster's name and description appear on the Dashboard.\n",(0,a.kt)("img",{src:n(44009).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"rotate-certificate"},"Rotate Certificate"),(0,a.kt)("p",null,"When the kubeconfig expires, you can update the certificate by clicking ",(0,a.kt)("kbd",null,"Rotate Certificate"),".\n",(0,a.kt)("img",{src:n(18892).Z,width:"1216",height:"810"}),"\n",(0,a.kt)("img",{src:n(93893).Z,width:"1620",height:"1080"}),"\n",(0,a.kt)("img",{src:n(62647).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"remove-cluster"},"Remove Cluster"),(0,a.kt)("p",null,"The ",(0,a.kt)("kbd",null,"delete")," button facilitates the removal of a registered cluster.\n",(0,a.kt)("img",{src:n(9825).Z,width:"1216",height:"810"})))}d.isMDXComponent=!0},9825:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-delete-cluster-d710c7d34eeffe1b4885edf986635331.png"},44009:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-edit-cluster-07e5bea950a6328a23ac3b37bb757bf2.png"},96615:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-empty-42686a32f37ccbd355e49b2ab53b1320.png"},35517:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-register-new-cluster-df17d3a7e2b322e93e55a56b9689e4c8.png"},2377:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-register-success-1eeaaeec418f80431c9b77b5cd7d027d.png"},18892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-rotate-cluster-1-51394b403e893828990ac403a8ae8bf5.png"},93893:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-rotate-cluster-2-c840425dd672a06feafc951ed648e991.png"},62647:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-rotate-cluster-3-b5fd49c780f3db5bce7e11c379a2c880.png"}}]);
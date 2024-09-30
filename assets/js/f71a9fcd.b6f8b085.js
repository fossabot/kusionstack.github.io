"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,k=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?o.createElement(k,s(s({ref:t},c),{},{components:r})):o.createElement(k,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={title:"How to Create Token"},s=void 0,i={unversionedId:"user-guide/how-to-create-token",id:"version-v0.5/user-guide/how-to-create-token",title:"How to Create Token",description:"In this document, you will learn how to use a token to access the Karpor dashboard.",source:"@site/karpor_versioned_docs/version-v0.5/3-user-guide/1-how-to-create-token.md",sourceDirName:"3-user-guide",slug:"/user-guide/how-to-create-token",permalink:"/karpor/user-guide/how-to-create-token",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.5/3-user-guide/1-how-to-create-token.md",tags:[],version:"v0.5",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727688217,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:1,frontMatter:{title:"How to Create Token"},sidebar:"karpor",previous:{title:"Glossary",permalink:"/karpor/concepts/glossary"},next:{title:"Multi-Cluster Management",permalink:"/karpor/user-guide/multi-cluster-management"}},l={},u=[{value:"Exporting the Kubeconfig for the Hub Cluster",id:"exporting-the-kubeconfig-for-the-hub-cluster",level:2},{value:"Forward the Services of the Hub Cluster to the Local Machine",id:"forward-the-services-of-the-hub-cluster-to-the-local-machine",level:2},{value:"Create ServiceAccount and ClusterRoleBinding for Your Users",id:"create-serviceaccount-and-clusterrolebinding-for-your-users",level:2},{value:"Create Tokens for Your Users",id:"create-tokens-for-your-users",level:2},{value:"Start Using Karpor Safely",id:"start-using-karpor-safely",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this document, you will learn how to use a token to access the Karpor dashboard."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/karpor/concepts/glossary#hub-cluster"},"Hub Cluster")," adopts the same Role-Based Access Control (RBAC) mechanism as Kubernetes. This means that in order to access the Hub Cluster, users need to create a ClusterRole, ServiceAccount, and the corresponding ClusterRoleBinding in the Hub Cluster to bind the two. To enhance user experience, we have preset two ClusterRoles: karpor-admin and karpor-guest. The karpor-admin role has permissions to perform all actions on the dashboard, including but not limited to adding or deleting clusters, creating resource groups, etc., while the karpor-guest role is limited to view-only actions on the dashboard. As users gain a deeper understanding of Karpor, they can create additional ClusterRoles based on their needs to achieve more granular permission management."),(0,n.kt)("h2",{id:"exporting-the-kubeconfig-for-the-hub-cluster"},"Exporting the Kubeconfig for the Hub Cluster"),(0,n.kt)("p",null,"Since the Hub Cluster requires a kubeconfig for authentication, you can export the kubeconfig to access the Hub Cluster using the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# The following operation is performed in the Kubernetes cluster where Karpor is installed\nkubectl get configmap karpor-kubeconfig -n karpor -o go-template='{{.data.config}}'\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Please ensure that the server address in the Hub Cluster's kubeconfig is accessible from your local machine. If you deployed Karpor in a local cluster, you need to forward the karpor-server service to local port 7443 and change the server address to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:7443"),"."),(0,n.kt)("h2",{id:"forward-the-services-of-the-hub-cluster-to-the-local-machine"},"Forward the Services of the Hub Cluster to the Local Machine"),(0,n.kt)("p",null,"In this section, we assume that you have deployed Karpor in a local cluster."),(0,n.kt)("p",null,"As mentioned in the previous section, to access the Hub Cluster locally, you need to forward the karpor-server service to your local machine. If you have used other methods for forwarding, you can skip this step. Here, we will use a simple port-forwarding method. Open another terminal and run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# The following operation is performed in the Kubernetes cluster where Karpor is installed\nkubectl -n karpor port-forward svc/karpor-server 7443:7443\n")),(0,n.kt)("h2",{id:"create-serviceaccount-and-clusterrolebinding-for-your-users"},"Create ServiceAccount and ClusterRoleBinding for Your Users"),(0,n.kt)("p",null,"You can use the following commands to create karpor-admin and karpor-guest along with the corresponding ClusterRoleBinding in the Hub Cluster:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": The following operations are performed in the Hub Cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# Create ServiceAccount karpor-admin and bind to ClusterRole\nexport KUBECONFIG=<Hub Cluster KUBECONFIG>\nkubectl create serviceaccount karpor-admin\nkubectl create clusterrolebinding karpor-admin --clusterrole=karpor-admin --serviceaccount=default:karpor-admin\n# Create ServiceAccount karpor-guest and bind to ClusterRole\nkubectl create serviceaccount karpor-guest\nkubectl create clusterrolebinding karpor-guest --clusterrole=karpor-guest --serviceaccount=default:karpor-guest\n")),(0,n.kt)("h2",{id:"create-tokens-for-your-users"},"Create Tokens for Your Users"),(0,n.kt)("p",null,"By default, the validity period of a token is 1 hour. If you need a long-term token, you can specify the expiration time when generating the token. For example:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": The following operations are performed in the Hub Cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=<Hub Cluster KUBECONFIG>\nkubectl create token karpor-admin --duration=1000h\n")),(0,n.kt)("p",null,"By default, the maximum validity period of the token is 8760 hours (1 year). If you need to modify this maximum validity period, you can add ",(0,n.kt)("inlineCode",{parentName:"p"},"--service-account-max-token-expiration={MAX_EXPIRATION:h/m/s}")," to the startup parameters of the karpor-server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Creating a token requires kubectl version 1.25.0 or higher."),(0,n.kt)("h2",{id:"start-using-karpor-safely"},"Start Using Karpor Safely"),(0,n.kt)("p",null,"Copy the token you just generated and paste it into the token input box on the Karpor dashboard, then click login."),(0,n.kt)("p",null,"Start your Karpor journey in a secure environment!"))}p.isMDXComponent=!0}}]);
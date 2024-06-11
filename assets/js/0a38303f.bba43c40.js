"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={title:"One-Pass with Proxy"},i=void 0,o={unversionedId:"user-guide/best-production-practices/one-pass-with-proxy",id:"version-v0.4/user-guide/best-production-practices/one-pass-with-proxy",title:"One-Pass with Proxy",description:"Challenges and Demands",source:"@site/karpor_versioned_docs/version-v0.4/3-user-guide/4-best-production-practices/1-one-pass-with-proxy.md",sourceDirName:"3-user-guide/4-best-production-practices",slug:"/user-guide/best-production-practices/one-pass-with-proxy",permalink:"/karpor/user-guide/best-production-practices/one-pass-with-proxy",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/3-user-guide/4-best-production-practices/1-one-pass-with-proxy.md",tags:[],version:"v0.4",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718107126,formattedLastUpdatedAt:"Jun 11, 2024",sidebarPosition:1,frontMatter:{title:"One-Pass with Proxy"},sidebar:"karpor",previous:{title:"Topology",permalink:"/karpor/user-guide/insight/topology"},next:{title:"Contributing Guide",permalink:"/karpor/developer-guide/contribution-guide/"}},l={},c=[{value:"Challenges and Demands",id:"challenges-and-demands",level:2},{value:"The Scale of Multicluster at a Grand Scale",id:"the-scale-of-multicluster-at-a-grand-scale",level:3},{value:"The Basic Needs from Multicluster Accessors",id:"the-basic-needs-from-multicluster-accessors",level:3},{value:"The Idea of A &quot;One-Pass Access&quot;",id:"the-idea-of-a-one-pass-access",level:2},{value:"Multi-cluster Request Routing and Proxy",id:"multi-cluster-request-routing-and-proxy",level:3},{value:"Supporting All Kubernetes Native Requests",id:"supporting-all-kubernetes-native-requests",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"challenges-and-demands"},"Challenges and Demands"),(0,s.kt)("h3",{id:"the-scale-of-multicluster-at-a-grand-scale"},"The Scale of Multicluster at a Grand Scale"),(0,s.kt)("p",null,"In June 2014, Kubernetes, born from Google's internal Borg project, made a striking debut. Endorsed by tech giants and aided by a thriving open-source community, it gradually became the de facto standard in the container orchestration field. As companies began to deploy Kubernetes in production environments, a single Kubernetes cluster could no longer meet the increasingly complex demands internally. It's common for the number of nodes in a single cluster to exceed the community-recommended limit (5,000), making the expansion into a multicluster configuration a natural choice."),(0,s.kt)("h3",{id:"the-basic-needs-from-multicluster-accessors"},"The Basic Needs from Multicluster Accessors"),(0,s.kt)("p",null,"With the thriving development of multiclusters, various platforms may need to access resources across different clusters, requiring access to each cluster's KubeConfig."),(0,s.kt)("p",null,"As the number of users and clusters increases, cluster administrators face significant time costs: If there are ",(0,s.kt)("inlineCode",{parentName:"p"},"M")," clusters and ",(0,s.kt)("inlineCode",{parentName:"p"},"N")," users, the time complexity for managing KubeConfig becomes ",(0,s.kt)("inlineCode",{parentName:"p"},"O(M*N)"),". Moreover, users need to switch between different KubeConfigs when accessing different clusters, and the corresponding permissions for KubeConfigs vary across clusters, undoubtedly adding to the complexity of use."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Direct Connection: Users need to maintain multiple KubeConfigs",src:n(34674).Z,width:"1820",height:"1368"})),(0,s.kt)("p",null,"Under these circumstances, is there a method to conveniently access resources in different clusters without maintaining a large number of KubeConfigs and managing various users' permissions across clusters? Moreover, this method should ideally be cloud-native, accessible through kubectl and Kubernetes' official client, to reduce the cost of transitioning to this method. The emergence of ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," is to solve these problems."),(0,s.kt)("h2",{id:"the-idea-of-a-one-pass-access"},'The Idea of A "One-Pass Access"'),(0,s.kt)("p",null,"We developed ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor"),", an open-source project. While serving as a Kubernetes Explorer with unique advantages in searching and insight into cluster resources, its foundational multicluster management component, featuring cluster certificate issuance and multicluster request proxying, makes it highly suitable as a unified access point for platforms to multiple clusters. This component supports forwarding user requests to designated clusters in a cloud-native manner, allowing users to maintain a single set of KubeConfigs to access different clusters, making multicluster access as simple as accessing a single cluster. So, how does it work? Below, we introduce ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor"),"'s architecture and functionality."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Using Multi-cluster Gateway: Users only need to maintain a single set of KubeConfigs",src:n(29542).Z,width:"1820",height:"1608"})),(0,s.kt)("h3",{id:"multi-cluster-request-routing-and-proxy"},"Multi-cluster Request Routing and Proxy"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," includes an application layer gateway capable of forwarding any Kubernetes-style request to a specified Kubernetes cluster. ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," is also developed based on the Kubernetes framework as a kube-apiserver, which can operate independently or as an extension to an existing kube-apiserver. ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," supports handling two types of extended resources: ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster/Proxy"),", the former for storing cluster information and the latter for forwarding user requests to a specific cluster. Users can access through the Kubernetes official CLI (",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),") or SDK (",(0,s.kt)("inlineCode",{parentName:"p"},"client-go"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"client-java"),", etc.)."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," proxies all access to ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster/Proxy")," subresources to the target cluster. For example, to retrieve Pod information from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster1")," cluster, users need to send the ",(0,s.kt)("inlineCode",{parentName:"p"},"GET /apis/kusionstack.io/Cluster/cluster1/proxy/api/v1/pods")," request to ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," will generate a KubeConfig from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster/Cluster1")," resource for accessing the cluster and proxy the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/v1/pods")," request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster1")," cluster."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Accessing any managed cluster with kubectl &amp; karpor certificate",src:n(95658).Z,width:"1246",height:"574"})),(0,s.kt)("h3",{id:"supporting-all-kubernetes-native-requests"},"Supporting All Kubernetes Native Requests"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," supports forwarding all kube-apiserver requests. Specifically, ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," is an application layer gateway that proxies HTTP requests through the HTTP connect protocol. In addition to supporting ",(0,s.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"update"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"delete")," operations on resources, it also supports ",(0,s.kt)("inlineCode",{parentName:"p"},"watch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"log"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"attach"),", etc. (Since the SPDY protocol used for ",(0,s.kt)("inlineCode",{parentName:"p"},"exec"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"attach")," does not support http2, ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor")," will disable http2 when forwarding these requests, switching to http1.1 and supporting hijacker processing)."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(91236).Z,width:"1300",height:"888"})),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"As can be gleaned from the text above, utilizing ",(0,s.kt)("inlineCode",{parentName:"p"},"Karpor"),'\'s multi-cluster management component enables the issuance of a "multi-cluster pass" with controllable permissions for users. Users no longer need to concern themselves with issues such as frequent cluster certificate switching and onboarding of new clusters. With this "one-pass access", the cost of accessing multiple clusters is reduced, fulfilling the most fundamental needs of most users on multi-cluster platforms.'))}p.isMDXComponent=!0},34674:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20240326163622363-8c92f17aa1abdebcf4caf86a62b849ff.png"},29542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20240326164141400-e674819a47d47ad0e09b272d8333c191.png"},95658:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20240326165247891-2dd2decd1f8caf371be5ebe4fe9429f0.png"},91236:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20240326165632158-8a9a4fd137d861a36b419f91b7a0c8eb.png"}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o="Mapping",p={unversionedId:"user_docs/guides/organizing-projects-stacks/mapping",id:"user_docs/guides/organizing-projects-stacks/mapping",title:"Mapping",description:"In Project & stack section, we have already introduced the basics of Project and Stack.",source:"@site/docs/user_docs/guides/organizing-projects-stacks/mapping.md",sourceDirName:"user_docs/guides/organizing-projects-stacks",slug:"/user_docs/guides/organizing-projects-stacks/mapping",permalink:"/docs/user_docs/guides/organizing-projects-stacks/mapping",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/organizing-projects-stacks/mapping.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1672715784,formattedLastUpdatedAt:"1/3/2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Project Best Practices",permalink:"/docs/user_docs/guides/organizing-projects-stacks/"},next:{title:"ArgoCD",permalink:"/docs/user_docs/guides/argocd/"}},c={},s=[{value:"Cloud Native: Applications and Clusters",id:"cloud-native-applications-and-clusters",level:2},{value:"Single-tenancy: Applications and Environments",id:"single-tenancy-applications-and-environments",level:2},{value:"Multi-tenancy: Applications and Environments",id:"multi-tenancy-applications-and-environments",level:2}],l={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig#project--stack"},"Project & stack")," section, we have already introduced the basics of ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack"),".\nA configuration library consists of Project, and the further logical isolation under Project is Stack. Each Project contains one or more Stack.\nProject and Stack can choose the mapping relationship based on user needs.\nFor example, users can map an application to a Project, or map an operation and maintenance scenario to a Project,\nsuch as site construction and operation and maintenance.\nIn this section, several best practices for mapping relationships are detailed."),(0,r.kt)("h2",{id:"cloud-native-applications-and-clusters"},"Cloud Native: Applications and Clusters"),(0,r.kt)("p",null,"In the application-centric operation and maintenance system, applications are the core object of DevOps operation and maintenance.\nIn cloud-native scenarios, applications are usually deployed in Kubernetes clusters,\nSo you can map ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," to applications and ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack")," to clusters.\nAn application's configuration is distinct within different clusters, the differentiated configuration is stored in each stack directory,\nand the common configuration of all clusters is stored in the base directory."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"Mapping TO"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project"),(0,r.kt)("td",{parentName:"tr",align:null},"Application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stack"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster")))),(0,r.kt)("h2",{id:"single-tenancy-applications-and-environments"},"Single-tenancy: Applications and Environments"),(0,r.kt)("p",null,"An application usually needs to be deployed to multiple environments, such as dev, test, and prod.\nIn a single-tenant scenario, a recommended practice is to map ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," to applications and ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack")," to environments."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"Mapping To"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project"),(0,r.kt)("td",{parentName:"tr",align:null},"Application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stack"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment")))),(0,r.kt)("h2",{id:"multi-tenancy-applications-and-environments"},"Multi-tenancy: Applications and Environments"),(0,r.kt)("p",null,"In an application-centric operation and maintenance system in a multi-tenant scenario,\nwe recommend appending tenant information to the app's name.\nThe application name is unique among different tenants, that is,\n",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," is mapped to the unique application, ",(0,r.kt)("inlineCode",{parentName:"p"},"Project Name")," is the unique name of all apps,\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack")," is mapped to the environment configuration of the unique app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"Mapping To"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project"),(0,r.kt)("td",{parentName:"tr",align:null},"Application+Tenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stack"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment")))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78348],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=s.createContext({}),l=function(e){var r=s.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return s.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},p=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=n,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return t?s.createElement(m,o(o({ref:r},c),{},{components:t})):s.createElement(m,o({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12870:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(87462),n=(t(67294),t(3905));const a={id:"resource-graph"},o="Resource Graph",i={unversionedId:"user-guides/observability/resource-graph",id:"version-v0.13/user-guides/observability/resource-graph",title:"Resource Graph",description:"Kusion provides a powerful feature to visualize the relationships and dependencies between kusion resources using a resource graph. This feature offers several key benefits:",source:"@site/docs_versioned_docs/version-v0.13/5-user-guides/3-observability/2-resource-graph.md",sourceDirName:"5-user-guides/3-observability",slug:"/user-guides/observability/resource-graph",permalink:"/zh/docs/user-guides/observability/resource-graph",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/5-user-guides/3-observability/2-resource-graph.md",tags:[],version:"v0.13",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:2,frontMatter:{id:"resource-graph"},sidebar:"kusion",previous:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/zh/docs/user-guides/observability/prometheus"},next:{title:"Using Cloud Secrets Manager",permalink:"/zh/docs/user-guides/secrets-management/using-cloud-secrets"}},u={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Display Resource Graph",id:"display-resource-graph",level:2}],c={toc:l};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"resource-graph"},"Resource Graph"),(0,n.kt)("p",null,"Kusion provides a powerful feature to visualize the relationships and dependencies between kusion ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," using a resource graph. This feature offers several key benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Comprehensive Visualization: The resource graph offers a clear, visual representation of your entire infrastructure, allowing you to see all resources and their interconnections at a glance. It includes detailed information about each cloud resource, such as its type, name, and unique identifiers, making it easier to locate and manage resources in your cloud environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dependency Tracking: It helps you understand how resources are linked, making it easier to identify potential impacts when making changes to your infrastructure.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Troubleshooting Aid: When issues arise during the ",(0,n.kt)("inlineCode",{parentName:"p"},"apply")," operation, the resource graph becomes an invaluable tool for pinpointing the source of problems. It provides a clear visual representation of resource relationships and their current status. This comprehensive view significantly reduces debugging time and enhances your ability to maintain a stable and efficient infrastructure.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visual Documentation: The resource graph provides a clear, up-to-date visual representation of your infrastructure. It automatically updates as changes occur,providing a clear and current representation of your resource\nlandscape. It improves team understanding and communication about the infrastructure setup."))),(0,n.kt)("p",null,"This feature empowers you to gain a comprehensive and intuitive understanding of your infrastructure's architecture, enabling more efficient troubleshooting and decision-making."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/user-guides/cloud-resources/database"},"Deliver the WordPress Application with Cloud RDS")," in the guide for deploying an application."),(0,n.kt)("p",null,"This guide will assume that you have already deployed an application following the guide."),(0,n.kt)("h2",{id:"display-resource-graph"},"Display Resource Graph"),(0,n.kt)("p",null,"To display a resource graph, you need to run the following command with project name specified:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kusion resource graph --project wordpress-rds-cloud\n")),(0,n.kt)("p",null,"The output will be a resource graph in the terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Displaying resource graph in the project wordpress-rds-cloud...\n\nWorkspace: demo\n\nWorkload Resources:\nID                                                      Kind                           Name                           CloudResourceID                Status\napps/v1:Deployment:wordpress-rds-cloud:wordpress-rds-cl Kubernetes:apps/v1:Deployment  wordpress-rds-cloud/wordpress-                                Apply succeeded | Reconciled\noud-dev-wordpress                                                                      rds-cloud-dev-wordpress\n\nDependency Resources:\nID                                                      Kind                           Name                           CloudResourceID                Status\nv1:Secret:wordpress-rds-cloud:wordpress-mysql-mysql     Kubernetes:v1:Secret           wordpress-rds-cloud/wordpress-                                Apply succeeded | Reconciled\n                                                                                       mysql-mysql\nv1:Service:wordpress-rds-cloud:wordpress-rds-cloud-dev- Kubernetes:v1:Service          wordpress-rds-cloud/wordpress-                                Apply succeeded | Reconciled\nwordpress-private                                                                      rds-cloud-dev-wordpress-privat\n                                                                                       e\nv1:Namespace:wordpress-rds-cloud                        Kubernetes:v1:Namespace        wordpress-rds-cloud                                           Apply succeeded | Reconciled\n\nOther Resources:\nID                                                      Kind                           Name                           CloudResourceID                Status\naliyun:alicloud:alicloud_db_connection:wordpress-mysql  alicloud:alicloud_db_connectio wordpress-mysql                rm-2zer0f93xy490fdzq:rm-2zer0f Apply succeeded | Reconciled\n                                                        n                                                             93xy490fdzqtf\naliyun:alicloud:alicloud_db_instance:wordpress-mysql    alicloud:alicloud_db_instance  wordpress-mysql                rm-2zer0f93xy490fdzq           Apply succeeded | Reconciled\naliyun:alicloud:alicloud_rds_account:wordpress-mysql    alicloud:alicloud_rds_account  wordpress-mysql                rm-2zer0f93xy490fdzq:root      Apply succeeded | Reconciled\nhashicorp:random:random_password:wordpress-mysql-mysql  custom:random_password                                                                       Apply succeeded\n")),(0,n.kt)("p",null,"The resource graph output provides a comprehensive overview of the resources in your project. Let's break down each field:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ID: This is a unique identifier for each resource.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Kind: This field indicates the type of resource.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name: This is the name of the resource within its namespace or scope.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CloudResourceID: For cloud resources, this field shows the unique identifier assigned by the cloud provider. For Kubernetes resources, this field is often empty.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Status: This field shows the current state of the resource. Common statuses include:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'"Apply succeeded | Reconciled": The resource has been successfully created and is in sync with the desired state.'),(0,n.kt)("li",{parentName:"ul"},'"Apply succeeded | Reconcile failed": The resource has been successfully created, but the resource is not in sync with the desired state.'),(0,n.kt)("li",{parentName:"ul"},'"Apply succeeded": The ',(0,n.kt)("inlineCode",{parentName:"li"},"apply")," operation has completed, but the resource might not in sync with the desired state."),(0,n.kt)("li",{parentName:"ul"},'"Apply failed": The ',(0,n.kt)("inlineCode",{parentName:"li"},"apply")," operation has failed.")))),(0,n.kt)("p",null,"The graph is divided into three sections:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Workload Resources: These are the main application components, such as Kubernetes Deployments.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Dependency Resources: These are resources that the workload depends on, such as Kubernetes Secrets, Services, and Namespaces.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Other Resources: This section includes additional resources, often cloud provider-specific, such as database instances and connections."))),(0,n.kt)("p",null,"This graph gives you a clear view of all the resources in your project, their types, names, cloud identifiers (if applicable), and current status. It's particularly useful for understanding the structure of your application and its dependencies, as well as for troubleshooting and ensuring all resources are in the expected state."))}d.isMDXComponent=!0}}]);
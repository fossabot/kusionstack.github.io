"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i="ResourceConsist",a={unversionedId:"operating/manuals/resourceconsist",id:"operating/manuals/resourceconsist",title:"ResourceConsist",description:"Motivation",source:"@site/docs/operating/manuals/resourceconsist.md",sourceDirName:"operating/manuals",slug:"/operating/manuals/resourceconsist",permalink:"/docs/operating/manuals/resourceconsist",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/operating/manuals/resourceconsist.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1695875449,formattedLastUpdatedAt:"Sep 28, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"operating",previous:{title:"CollaSet",permalink:"/docs/operating/manuals/collaset"},next:{title:"PodTransitionRule",permalink:"/docs/operating/manuals/podtransitionrule"}},s={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals",id:"non-goals",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Key Concepts",id:"key-concepts",level:3},{value:"Employer",id:"employer",level:4},{value:"Employee",id:"employee",level:4},{value:"Key Interface/Struct Definitions",id:"key-interfacestruct-definitions",level:3},{value:"ReconcileAdapter",id:"reconcileadapter",level:4},{value:"IEmployer/IEmployee",id:"iemployeriemployee",level:4},{value:"PodEmployeeStatuses",id:"podemployeestatuses",level:4},{value:"PodAvailableConditions",id:"podavailableconditions",level:4},{value:"Key Finalizers",id:"key-finalizers",level:3},{value:"LifecycleFinalizer",id:"lifecyclefinalizer",level:4},{value:"CleanFinalizer",id:"cleanfinalizer",level:4},{value:"Main Logic of Reconcile in ResourceConsist Controller",id:"main-logic-of-reconcile-in-resourceconsist-controller",level:3},{value:"Ensure clean finalizer of Employer",id:"ensure-clean-finalizer-of-employer",level:4},{value:"Ensure PodAvailableConditions if PodOpsLifecycle followed",id:"ensure-podavailableconditions-if-podopslifecycle-followed",level:4},{value:"Get Expect/Current Employer/Employee, make diff, and do sync",id:"get-expectcurrent-employeremployee-make-diff-and-do-sync",level:4},{value:"Tutorials",id:"tutorials",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"resourceconsist"},"ResourceConsist"),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("p",null,"Making a customized controller can be realized easily, and offering the ability of controllers following PodOpsLifecycle."),(0,r.kt)("p",null,"The only thing users need to do to realize a customized controller is writing an adapter implementing ReconcileAdapter."),(0,r.kt)("h3",{id:"non-goals"},"Non-Goals"),(0,r.kt)("p",null,"Making resource consist as a pkg like controller-runtime."),(0,r.kt)("p",null,'A customized controller can be started by command like "resource-consist enable".'),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("h3",{id:"key-concepts"},"Key Concepts"),(0,r.kt)("h4",{id:"employer"},"Employer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Employer")," is the entity responsible for managing and coordinating the utilization of another resource, similar to how a service selects and controls pods."),(0,r.kt)("p",null,"Employer can be any kind, and CRD is of course can be used as Employer."),(0,r.kt)("h4",{id:"employee"},"Employee"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Employee")," is the resource managed by another resource, like pods selected by service."),(0,r.kt)("p",null,"Same with Employer, Employee can be any kind, and CRD is of course can be used as Employee."),(0,r.kt)("p",null,"If an adapter implementing ReconcileAdapter and following PodOpsLifecycle, the Employee should be Pod."),(0,r.kt)("h3",{id:"key-interfacestruct-definitions"},"Key Interface/Struct Definitions"),(0,r.kt)("h4",{id:"reconcileadapter"},"ReconcileAdapter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ReconcileAdapter")," is an interface specifying a set of methods as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// ReconcileOptions includes max concurrent reconciles and rate limiter,\n// max concurrent reconcile: 5 and DefaultControllerRateLimiter() will be used if ReconcileOptions not implemented.\ntype ReconcileOptions interface {\n    GetRateLimiter() ratelimiter.RateLimiter\n    GetMaxConcurrentReconciles() int\n}\n\n// ReconcileWatchOptions defines what employer and employee is and how controller watch\n// default employer: Service, default employee: Pod\ntype ReconcileWatchOptions interface {\n    NewEmployer() client.Object\n    NewEmployee() client.Object\n    EmployerEventHandler() handler.EventHandler\n    EmployeeEventHandler() handler.EventHandler\n    EmployerPredicates() predicate.Funcs\n    EmployeePredicates() predicate.Funcs\n}\n\n// ReconcileAdapter is the interface that customized controllers should implement.\ntype ReconcileAdapter interface {\n    GetControllerName() string\n    NotFollowPodOpsLifeCycle() bool\n\n    GetSelectedEmployeeNames(ctx context.Context, employer client.Object) ([]string, error)\n\n    // GetExpectEmployer and GetCurrentEmployer return expect/current status of employer from related backend provider\n    GetExpectEmployer(ctx context.Context, employer client.Object) ([]IEmployer, error)\n    GetCurrentEmployer(ctx context.Context, employer client.Object) ([]IEmployer, error)\n\n    CreateEmployer(ctx context.Context, employer client.Object, toCreate []IEmployer) ([]IEmployer, []IEmployer, error)\n    UpdateEmployer(ctx context.Context, employer client.Object, toUpdate []IEmployer) ([]IEmployer, []IEmployer, error)\n    DeleteEmployer(ctx context.Context, employer client.Object, toDelete []IEmployer) ([]IEmployer, []IEmployer, error)\n\n    // GetExpectEmployee and GetCurrentEmployee return expect/current status of employees from related backend provider\n    GetExpectEmployee(ctx context.Context, employer client.Object) ([]IEmployee, error)\n    GetCurrentEmployee(ctx context.Context, employer client.Object) ([]IEmployee, error)\n\n    CreateEmployees(ctx context.Context, employer client.Object, toCreate []IEmployee) ([]IEmployee, []IEmployee, error)\n    UpdateEmployees(ctx context.Context, employer client.Object, toUpdate []IEmployee) ([]IEmployee, []IEmployee, error)\n    DeleteEmployees(ctx context.Context, employer client.Object, toDelete []IEmployee) ([]IEmployee, []IEmployee, error)\n}\n")),(0,r.kt)("p",null,"A customized controller should realize an adapter implementing the ReconcileAdapter."),(0,r.kt)("p",null,"ReconcileOptions and ReconcileWatchOptions Interfaces can be optional implemented, dependent on whether customized controllers need specify some reconcile options like rate limiter."),(0,r.kt)("p",null,"Service/Pod will be default Employer/Employee, if ReconcileWatchOptions not implemented. And there is a default Predicate which filters out Services without ",(0,r.kt)("strong",{parentName:"p"},'Label "kusionstack.io/control": "true"'),"."),(0,r.kt)("h4",{id:"iemployeriemployee"},"IEmployer/IEmployee"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IEmployer/IEmployee")," are interfaces defined as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type IEmployer interface {\n    GetEmployerId() string\n    GetEmployerStatuses() interface{}\n    EmployerEqual(employer IEmployer) (bool, error)\n}\n\ntype IEmployee interface {\n    GetEmployeeId() string\n    GetEmployeeName() string\n    GetEmployeeStatuses() interface{}\n    EmployeeEqual(employee IEmployee) (bool, error)\n}\n")),(0,r.kt)("h4",{id:"podemployeestatuses"},"PodEmployeeStatuses"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PodEmployeeStatuses")," is a built-in struct implementing EmployeeStatus.EmployeeStatuses.\nExtraStatus in PodEmployeeStatuses is an interface so that adapters can implement it as they wished. Normally, ExtraStatus is extra info beyond basic pod status related to backend provider, like the traffic status of backend server(pod) under load balancer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'type PodEmployeeStatuses struct {\n    // can be set by calling SetCommonPodEmployeeStatus\n    Ip             string `json:"ip,omitempty"`\n    Ipv6           string `json:"ipv6,omitempty"`\n    LifecycleReady bool   `json:"lifecycleReady,omitempty"`\n    // extra info related to backend provider\n    ExtraStatus interface{} `json:"extraStatus,omitempty"`\n}\n')),(0,r.kt)("h4",{id:"podavailableconditions"},"PodAvailableConditions"),(0,r.kt)("p",null,"Used if PodOpsLifecycle followed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PodAvailableConditions")," is an annotation on pod, indicating what finalizer should be added to achieve service-available state."),(0,r.kt)("p",null,"For a pod employed by multiple employers, there will be multiple LifecycleFinalizer should be added, and PodAvailableConditions annotation will record what employers and what finalizers are."),(0,r.kt)("p",null,"Webhook will also record PodAvailableConditions in case of Pod creation to avoid Pod reaching service-available state if ResourceConsist controller not record PodAvailableConditions before Pod ready."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const PodAvailableConditionsAnnotation = "pod.kusionstack.io/available-conditions" // indicate the available conditions of a pod\n\ntype PodAvailableConditions struct {\n    ExpectedFinalizers map[string]string `json:"expectedFinalizers,omitempty"` // indicate the expected finalizers of a pod\n}\n\nfunc GenerateLifecycleFinalizerKey(employer client.Object) string {\n    return fmt.Sprintf("%s/%s/%s", employer.GetObjectKind().GroupVersionKind().Kind,\n        employer.GetNamespace(), employer.GetName())\n}\n\nfunc GenerateLifecycleFinalizer(employerName string) string {\n    b := md5.Sum([]byte(employerName))\n    return v1alpha1.PodOperationProtectionFinalizerPrefix + "/" + hex.EncodeToString(b[:])[8:24]\n}\n')),(0,r.kt)("h3",{id:"key-finalizers"},"Key Finalizers"),(0,r.kt)("h4",{id:"lifecyclefinalizer"},"LifecycleFinalizer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LifecycleFinalizer")," prefixed with ",(0,r.kt)("mark",null,'"prot.podopslifecycle.kusionstack.io"'),", is a finalizer on Employee used to following PodOpsLifecycle, removed in preparing period of PodOpsLifecycle and added in completing period of PodOpsLifecycle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const (\n    PodOperationProtectionFinalizerPrefix = "prot.podopslifecycle.kusionstack.io"\n)\n\nfunc GenerateLifecycleFinalizerKey(employer client.Object) string {\n    return fmt.Sprintf("%s/%s/%s", employer.GetObjectKind().GroupVersionKind().Kind,\n        employer.GetNamespace(), employer.GetName())\n}\n\nfunc GenerateLifecycleFinalizer(employerName string) string {\n    b := md5.Sum([]byte(employerName))\n    return v1alpha1.PodOperationProtectionFinalizerPrefix + "/" + hex.EncodeToString(b[:])[8:24]\n}\n')),(0,r.kt)("h4",{id:"cleanfinalizer"},"CleanFinalizer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CleanFinalizer")," is a finalizer on Employer, used to bind Employer and Employee."),(0,r.kt)("p",null,"CleanFinalizer should be added in the first Reconcile of the resource, and be removed only when there is no more relation between Employer and Employee and during deletion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    cleanFinalizerPrefix = "resource-consist.kusionstack.io/clean-"\n    \n    cleanFlz := cleanFinalizerPrefix + employer.GetName()\n')),(0,r.kt)("h3",{id:"main-logic-of-reconcile-in-resourceconsist-controller"},"Main Logic of Reconcile in ResourceConsist Controller"),(0,r.kt)("h4",{id:"ensure-clean-finalizer-of-employer"},"Ensure clean finalizer of Employer"),(0,r.kt)("p",null,"Clean finalizer will be added to Employer before everything, and all resources related to Employer will be cleaned before clean finalizer removed, so that nothing related to Employer will be remained."),(0,r.kt)("h4",{id:"ensure-podavailableconditions-if-podopslifecycle-followed"},"Ensure PodAvailableConditions if PodOpsLifecycle followed"),(0,r.kt)("p",null,"An expected LifecycleFinalizer related to Employer will be added into PodAvailableConditions."),(0,r.kt)("h4",{id:"get-expectcurrent-employeremployee-make-diff-and-do-sync"},"Get Expect/Current Employer/Employee, make diff, and do sync"),(0,r.kt)("p",null,"Adapters should implement these methods, and Resource Consist Controller will call it."),(0,r.kt)("h2",{id:"tutorials"},"Tutorials"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pkg/controllers/alibabacloudslb")," is an adapter that implements ReconcileAdapter. It follows ",(0,r.kt)("strong",{parentName:"p"},"PodOpsLifecycle")," to handle various scenarios during pod operations, such as creating a new pod, deleting an existing pod, or handling changes to pod configurations. This adapter ensures minimal traffic loss and provides a seamless experience for users accessing services load balanced by Alibaba Cloud SLB."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/controllers/alibabacloudslb"),", the real server is removed from SLB before pod operation in ACK. The LB management and real server management are handled by CCM in ACK. If the cluster is not in ACK or CCM is not working in the cluster, the alibabacloudslb controller should implement additional methods of ReconcileAdapter."),(0,r.kt)("p",null,"A demo is implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"resource_controller_suite_test.go"),". In the demo controller, the employer is represented as a service and is expected to have the following ",(0,r.kt)("strong",{parentName:"p"},"DemoServiceStatus"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DemoServiceStatus{\n    EmployerId: employer.GetName(),\n    EmployerStatuses: DemoServiceDetails{\n        RemoteVIP:    "demo-remote-VIP",\n        RemoteVIPQPS: 100,\n    }\n}\n')),(0,r.kt)("p",null,"The employee is represented as a pod and is expected to have the following ",(0,r.kt)("strong",{parentName:"p"},"DemoPodStatus"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DemoPodStatus{\n    EmployeeId:   pod.Name,\n    EmployeeName: pod.Name,\n    EmployeeStatuses: PodEmployeeStatuses{\n        Ip: string,\n        Ipv6: string,\n        LifecycleReady: bool,\n        ExtraStatus: PodExtraStatus{\n            TrafficOn: bool,\n            TrafficWeight: int,\n        },\n    }\n}\n")),(0,r.kt)("p",null,"The DemoResourceProviderClient is a fake client that handles backend provider resources related to the employer/employee (service/pods). In the Demo Controller, ",(0,r.kt)("inlineCode",{parentName:"p"},"demoResourceVipStatusInProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"demoResourceRsStatusInProvider")," are mocked as resources in the backend provider."),(0,r.kt)("p",null,"These two adapters can be referred to for implementing customized controllers."))}d.isMDXComponent=!0}}]);
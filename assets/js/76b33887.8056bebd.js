"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(i,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2},l="ResourceConsist",s={unversionedId:"operating/manuals/resourceconsist",id:"version-v0.10/operating/manuals/resourceconsist",title:"ResourceConsist",description:"ResourceConsist aims to make a customized controller can be realized easily, and offering the ability of following",source:"@site/versioned_docs/version-v0.10/operating/manuals/resourceconsist.md",sourceDirName:"operating/manuals",slug:"/operating/manuals/resourceconsist",permalink:"/docs/operating/manuals/resourceconsist",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.10/operating/manuals/resourceconsist.md",tags:[],version:"v0.10",lastUpdatedBy:"KK",lastUpdatedAt:1709188611,formattedLastUpdatedAt:"Feb 29, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"operating",previous:{title:"CollaSet",permalink:"/docs/operating/manuals/collaset"},next:{title:"PodTransitionRule",permalink:"/docs/operating/manuals/podtransitionrule"}},i={},p=[{value:"Tutorials",id:"tutorials",level:2},{value:"adapters",id:"adapters",level:3},{value:"alibabacloudslb adapter",id:"alibabacloudslb-adapter",level:4},{value:"experimental/adapters",id:"experimentaladapters",level:3},{value:"demo adapter",id:"demo-adapter",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resourceconsist"},"ResourceConsist"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/resourceconsist/blob/main/README.md"},(0,o.kt)("strong",{parentName:"a"},"ResourceConsist"))," aims to make a customized controller can be realized easily, and offering the ability of following\n",(0,o.kt)("strong",{parentName:"p"},"PodOpsLifecycle")," for controllers."),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"kusionstack.io/resourceconsit")," mainly consists of frame, experimental/adapters and adapters."),(0,o.kt)("p",null,"The frame, ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionstack.io/resourceconsist/pkg/frame"),", is used for adapters starting a controller, which handles\nReconcile and Employer/Employees' spec&status. If you wrote an adapter in your own repo, you can import\n",(0,o.kt)("inlineCode",{parentName:"p"},"kusionstack.io/resourceconsist/pkg/frame/controller")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionstack.io/resourceconsist/pkg/frame/webhook"),",\n]and call AddToMgr to start a controller."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"webhookAdapter is only necessary to be implemented for controllers following PodOpsLifecycle.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    controllerframe "kusionstack.io/resourceconsist/pkg/frame/controller"\n    webhookframe "kusionstack.io/resourceconsist/pkg/frame/webhook"\n)\n\nfunc main() {\n    controllerframe.AddToMgr(manager, yourOwnControllerAdapter)\n    webhookframe.AddToMgr(manager, yourOwnWebhookAdapter)\n}\n')),(0,o.kt)("h3",{id:"adapters"},"adapters"),(0,o.kt)("p",null,"The adapters, ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionstack.io/resourceconsist/pkg/adapters"),", consists of built-in adapters. You can start a\ncontroller with built-in adapters just calling AddBuiltinControllerAdaptersToMgr and AddBuiltinWebhookAdaptersToMgr,\npassing built-in adapters' names. Currently, an aliababacloudslb adapter has released. You can use it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "kusionstack.io/resourceconsist/pkg/adapters"\n)\n\nfunc main() {\n    adapters.AddBuiltinControllerAdaptersToMgr(manager, []adapters.AdapterName{adapters.AdapterAlibabaCloudSlb})\n    adapters.AddBuiltinWebhookAdaptersToMgr(manager, []adapters.AdapterName{adapters.AdapterAlibabaCloudSlb})\n}\n')),(0,o.kt)("p",null,"Built-in adapters can also be used like how frame used. You can call NewAdapter from a certain built-in adapter pkg\nand the call frame.AddToMgr to start a controller/webhook"),(0,o.kt)("p",null,"More built-in adapters will be implemented in the future. To make this repo stable, all new built-in adapters will\nbe added to ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionstack.io/resourceconsist/pkg/experimental/adapters")," first, and then moved to\n",(0,o.kt)("inlineCode",{parentName:"p"},"kusionstack.io/resourceconsist/pkg/adapters")," until ready to be released."),(0,o.kt)("h4",{id:"alibabacloudslb-adapter"},"alibabacloudslb adapter"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pkg/adapters/alibabacloudslb")," is an adapter that implements ReconcileAdapter. It follows ",(0,o.kt)("strong",{parentName:"p"},"PodOpsLifecycle")," to\nhandle various scenarios during pod operations, such as creating a new pod, deleting an existing pod, or handling\nchanges to pod configurations. This adapter ensures minimal traffic loss and provides a seamless experience for users\naccessing services load balanced by Alibaba Cloud SLB."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg/adapters/alibabacloudslb"),", the real server is removed from SLB before pod operation in ACK. The LB\nmanagement and real server management are handled by CCM in ACK. Since alibabacloudslb adapter follows PodOpsLifecycle\nand real servers are managed by CCM, ReconcileLifecycleOptions should be implemented. If the cluster is not in ACK or\nCCM is not working in the cluster, the alibabacloudslb controller should implement additional methods of ReconcileAdapter."),(0,o.kt)("h3",{id:"experimentaladapters"},"experimental/adapters"),(0,o.kt)("p",null,"The experimental/adapters is more like a pre-release pkg for built-in adapters. Usage of experimental/adapters is same\nwith built-in adapters, and be aware that ",(0,o.kt)("strong",{parentName:"p"},"DO NOT USE EXPERIMENTAL/ADAPTERS IN PRODUCTION")),(0,o.kt)("h3",{id:"demo-adapter"},"demo adapter"),(0,o.kt)("p",null,"A demo is implemented in ",(0,o.kt)("inlineCode",{parentName:"p"},"resource_controller_suite_test.go"),". In the demo controller, the employer is represented\nas a service and is expected to have the following ",(0,o.kt)("strong",{parentName:"p"},"DemoServiceStatus"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'DemoServiceStatus{\n    EmployerId: employer.GetName(),\n    EmployerStatuses: DemoServiceDetails{\n        RemoteVIP:    "demo-remote-VIP",\n        RemoteVIPQPS: 100,\n    }\n}\n')),(0,o.kt)("p",null,"The employee is represented as a pod and is expected to have the following ",(0,o.kt)("strong",{parentName:"p"},"DemoPodStatus"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DemoPodStatus{\n    EmployeeId:   pod.Name,\n    EmployeeName: pod.Name,\n    EmployeeStatuses: PodEmployeeStatuses{\n        Ip: string,\n        Ipv6: string,\n        LifecycleReady: bool,\n        ExtraStatus: PodExtraStatus{\n            TrafficOn: bool,\n            TrafficWeight: int,\n        },\n    }\n}\n")),(0,o.kt)("p",null,"The DemoResourceProviderClient is a fake client that handles backend provider resources related to the employer/employee\n(service/pods). In the Demo Controller, ",(0,o.kt)("inlineCode",{parentName:"p"},"demoResourceVipStatusInProvider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"demoResourceRsStatusInProvider"),"\nare mocked as resources in the backend provider."),(0,o.kt)("p",null,"How the demo controller adapter realized will be introduced in detail as follows,\n",(0,o.kt)("inlineCode",{parentName:"p"},"DemoControllerAdapter")," was defined, including a kubernetes client and a resourceProviderClient. What included in\nthe Adapter struct can be defined as needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type DemoControllerAdapter struct {\n    client.Client\n    resourceProviderClient *DemoResourceProviderClient\n}\n")),(0,o.kt)("p",null,"Declaring that the DemoControllerAdapter implemented ",(0,o.kt)("inlineCode",{parentName:"p"},"ReconcileAdapter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ReconcileLifecycleOptions"),".\nImplementing ",(0,o.kt)("inlineCode",{parentName:"p"},"RconcileAdapter")," is a must action, while ",(0,o.kt)("inlineCode",{parentName:"p"},"ReconcileLifecycleOptions")," isn't, check the remarks\nfor ",(0,o.kt)("inlineCode",{parentName:"p"},"ReconcileLifecycleOptions")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionstack.io/resourceconsist/pkg/frame/controller/types.go")," to find why."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var _ ReconcileAdapter = &DemoControllerAdapter{}\nvar _ ReconcileLifecycleOptions = &DemoControllerAdapter{}\n")),(0,o.kt)("p",null,"Following two methods for DemoControllerAdapter inplementing ",(0,o.kt)("inlineCode",{parentName:"p"},"ReconcileLifecycleOptions"),", defines whether\nDemoControllerAdapter following PodOpsLifecycle and need record employees."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (r *DemoControllerAdapter) FollowPodOpsLifeCycle() bool {\n    return true\n}\n\nfunc (r *DemoControllerAdapter) NeedRecordEmployees() bool {\n    return needRecordEmployees\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IEmployer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"IEmployee")," are interfaces that includes several methods indicating the status employer and\nemployee."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type IEmployer interface {\n    GetEmployerId() string\n    GetEmployerStatuses() interface{}\n    EmployerEqual(employer IEmployer) (bool, error)\n}\n\ntype IEmployee interface {\n    GetEmployeeId() string\n    GetEmployeeName() string\n    GetEmployeeStatuses() interface{}\n    EmployeeEqual(employee IEmployee) (bool, error)\n}\n\ntype DemoServiceStatus struct {\n    EmployerId       string\n    EmployerStatuses DemoServiceDetails\n}\n\ntype DemoServiceDetails struct {\n    RemoteVIP    string\n    RemoteVIPQPS int\n}\n\ntype DemoPodStatus struct {\n    EmployeeId       string\n    EmployeeName     string\n    EmployeeStatuses PodEmployeeStatuses\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GetSelectedEmployeeNames")," returns all employees' names selected by employer, here is pods' names selected by\nservice. ",(0,o.kt)("inlineCode",{parentName:"p"},"GetSelectedEmployeeNames")," is used for ensuring LifecycleFinalizer and ExpectedFinalizer, so you can give\nit an empty return if your adapter doesn't follow PodOpsLifecycle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r *DemoControllerAdapter) GetSelectedEmployeeNames(ctx context.Context, employer client.Object) ([]string, error) {\n    svc, ok := employer.(*corev1.Service)\n    if !ok {\n        return nil, fmt.Errorf("expect employer kind is Service")\n    }\n    selector := labels.Set(svc.Spec.Selector).AsSelectorPreValidated()\n    var podList corev1.PodList\n    err := r.List(ctx, &podList, &client.ListOptions{Namespace: svc.Namespace, LabelSelector: selector})\n    if err != nil {\n        return nil, err\n    }\n\n    selected := make([]string, len(podList.Items))\n    for idx, pod := range podList.Items {\n        selected[idx] = pod.Name\n    }\n\n    return selected, nil\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GetExpectedEmployer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GetCurrentEmployer")," defines what is expected under the spec of employer and what is\ncurrent status, like the load balancer from a cloud provider. Here in the demo adapter, expected is defined by hardcode\nand current is retrieved from a fake resource provider ",(0,o.kt)("inlineCode",{parentName:"p"},"demoResourceVipStatusInProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r *DemoControllerAdapter) GetExpectedEmployer(ctx context.Context, employer client.Object) ([]IEmployer, error) {\n    if !employer.GetDeletionTimestamp().IsZero() {\n        return nil, nil\n    }\n    var expect []IEmployer\n    expect = append(expect, DemoServiceStatus{\n        EmployerId: employer.GetName(),\n        EmployerStatuses: DemoServiceDetails{\n            RemoteVIP:    "demo-remote-VIP",\n            RemoteVIPQPS: 100,\n        },\n    })\n    return expect, nil\n}\n\nfunc (r *DemoControllerAdapter) GetCurrentEmployer(ctx context.Context, employer client.Object) ([]IEmployer, error) {\n    var current []IEmployer\n\n    req := &DemoResourceVipOps{}\n    resp, err := r.resourceProviderClient.QueryVip(req)\n    if err != nil {\n        return current, err\n    }\n    if resp == nil {\n        return current, fmt.Errorf("demo resource vip query resp is nil")\n    }\n\n    for _, employerStatus := range resp.VipStatuses {\n        current = append(current, employerStatus)\n    }\n    return current, nil\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CreateEmployer/UpdateEmployer/DeleteEmployer")," handles creation/update/deletion of resources related to employer on\nrelated backend provider. Here in the demo adapter, ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateEmployer/UpdateEmployer/DeleteEmployer")," handles\n",(0,o.kt)("inlineCode",{parentName:"p"},"demoResourceVipStatusInProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r *DemoControllerAdapter) CreateEmployer(ctx context.Context, employer client.Object, toCreates []IEmployer) ([]IEmployer, []IEmployer, error) {\n    if toCreates == nil || len(toCreates) == 0 {\n        return toCreates, nil, nil\n    }\n\n    toCreateDemoServiceStatus := make([]DemoServiceStatus, len(toCreates))\n    for idx, create := range toCreates {\n        createDemoServiceStatus, ok := create.(DemoServiceStatus)\n        if !ok {\n            return nil, toCreates, fmt.Errorf("toCreates employer is not DemoServiceStatus")\n        }\n        toCreateDemoServiceStatus[idx] = createDemoServiceStatus\n    }\n\n    _, err := r.resourceProviderClient.CreateVip(&DemoResourceVipOps{\n        VipStatuses: toCreateDemoServiceStatus,\n    })\n    if err != nil {\n        return nil, toCreates, err\n    }\n    return toCreates, nil, nil\n}\n\nfunc (r *DemoControllerAdapter) UpdateEmployer(ctx context.Context, employer client.Object, toUpdates []IEmployer) ([]IEmployer, []IEmployer, error) {\n    if toUpdates == nil || len(toUpdates) == 0 {\n        return toUpdates, nil, nil\n    }\n\n    toUpdateDemoServiceStatus := make([]DemoServiceStatus, len(toUpdates))\n    for idx, update := range toUpdates {\n        updateDemoServiceStatus, ok := update.(DemoServiceStatus)\n        if !ok {\n            return nil, toUpdates, fmt.Errorf("toUpdates employer is not DemoServiceStatus")\n        }\n        toUpdateDemoServiceStatus[idx] = updateDemoServiceStatus\n    }\n\n    _, err := r.resourceProviderClient.UpdateVip(&DemoResourceVipOps{\n        VipStatuses: toUpdateDemoServiceStatus,\n    })\n    if err != nil {\n        return nil, toUpdates, err\n    }\n    return toUpdates, nil, nil\n}\n\nfunc (r *DemoControllerAdapter) DeleteEmployer(ctx context.Context, employer client.Object, toDeletes []IEmployer) ([]IEmployer, []IEmployer, error) {\n    if toDeletes == nil || len(toDeletes) == 0 {\n        return toDeletes, nil, nil\n    }\n\n    toDeleteDemoServiceStatus := make([]DemoServiceStatus, len(toDeletes))\n    for idx, update := range toDeletes {\n        deleteDemoServiceStatus, ok := update.(DemoServiceStatus)\n        if !ok {\n            return nil, toDeletes, fmt.Errorf("toDeletes employer is not DemoServiceStatus")\n        }\n        toDeleteDemoServiceStatus[idx] = deleteDemoServiceStatus\n    }\n\n    _, err := r.resourceProviderClient.DeleteVip(&DemoResourceVipOps{\n        VipStatuses: toDeleteDemoServiceStatus,\n    })\n    if err != nil {\n        return nil, toDeletes, err\n    }\n    return toDeletes, nil, nil\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GetExpectedEmployee"),"and",(0,o.kt)("inlineCode",{parentName:"p"},"GetCurrentEmployee")," defines what is expected under the spec of employer and employees\nand what is current status, like real servers under the load balancer from a cloud provider. Here in the demo adapter,\nexpected is calculated from pods and current is retrieved from a fake resource provider ",(0,o.kt)("inlineCode",{parentName:"p"},"demoResourceRsStatusInProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// GetExpectEmployeeStatus return expect employee status\nfunc (r *DemoControllerAdapter) GetExpectedEmployee(ctx context.Context, employer client.Object) ([]IEmployee, error) {\n    if !employer.GetDeletionTimestamp().IsZero() {\n        return []IEmployee{}, nil\n    }\n\n    svc, ok := employer.(*corev1.Service)\n    if !ok {\n        return nil, fmt.Errorf("expect employer kind is Service")\n    }\n    selector := labels.Set(svc.Spec.Selector).AsSelectorPreValidated()\n\n    var podList corev1.PodList\n    err := r.List(ctx, &podList, &client.ListOptions{Namespace: svc.Namespace, LabelSelector: selector})\n    if err != nil {\n        return nil, err\n    }\n\n    expected := make([]IEmployee, len(podList.Items))\n    expectIdx := 0\n    for _, pod := range podList.Items {\n        if !pod.DeletionTimestamp.IsZero() {\n            continue\n        }\n        status := DemoPodStatus{\n            EmployeeId:   pod.Name,\n            EmployeeName: pod.Name,\n        }\n        employeeStatuses, err := GetCommonPodEmployeeStatus(&pod)\n        if err != nil {\n            return nil, err\n        }\n        extraStatus := PodExtraStatus{}\n        if employeeStatuses.LifecycleReady {\n            extraStatus.TrafficOn = true\n            extraStatus.TrafficWeight = 100\n        } else {\n            extraStatus.TrafficOn = false\n            extraStatus.TrafficWeight = 0\n        }\n        employeeStatuses.ExtraStatus = extraStatus\n        status.EmployeeStatuses = employeeStatuses\n        expected[expectIdx] = status\n        expectIdx++\n    }\n\n    return expected[:expectIdx], nil\n}\n\nfunc (r *DemoControllerAdapter) GetCurrentEmployee(ctx context.Context, employer client.Object) ([]IEmployee, error) {\n    var current []IEmployee\n    req := &DemoResourceRsOps{}\n    resp, err := r.resourceProviderClient.QueryRealServer(req)\n    if err != nil {\n        return current, err\n    }\n    if resp == nil {\n        return current, fmt.Errorf("demo resource rs query resp is nil")\n    }\n\n    for _, rsStatus := range resp.RsStatuses {\n        current = append(current, rsStatus)\n    }\n    return current, nil\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CreateEmployees/UpdateEmployees/DeleteEmployees")," handles creation/update/deletion of resources related to employee\non related backend provider. Here in the demo adapter, ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateEmployees/UpdateEmployees/DeleteEmployees"),"\nhandles ",(0,o.kt)("inlineCode",{parentName:"p"},"demoResourceRsStatusInProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r *DemoControllerAdapter) CreateEmployees(ctx context.Context, employer client.Object, toCreates []IEmployee) ([]IEmployee, []IEmployee, error) {\n    if toCreates == nil || len(toCreates) == 0 {\n        return toCreates, nil, nil\n    }\n    toCreateDemoPodStatuses := make([]DemoPodStatus, len(toCreates))\n\n    for idx, toCreate := range toCreates {\n        podStatus, ok := toCreate.(DemoPodStatus)\n        if !ok {\n            return nil, toCreates, fmt.Errorf("toCreate is not DemoPodStatus")\n        }\n        toCreateDemoPodStatuses[idx] = podStatus\n    }\n\n    _, err := r.resourceProviderClient.CreateRealServer(&DemoResourceRsOps{\n        RsStatuses: toCreateDemoPodStatuses,\n    })\n    if err != nil {\n        return nil, toCreates, err\n    }\n\n    return toCreates, nil, nil\n}\n\nfunc (r *DemoControllerAdapter) UpdateEmployees(ctx context.Context, employer client.Object, toUpdates []IEmployee) ([]IEmployee, []IEmployee, error) {\n    if toUpdates == nil || len(toUpdates) == 0 {\n        return toUpdates, nil, nil\n    }\n\n    toUpdateDemoPodStatuses := make([]DemoPodStatus, len(toUpdates))\n\n    for idx, toUpdate := range toUpdates {\n        podStatus, ok := toUpdate.(DemoPodStatus)\n        if !ok {\n            return nil, toUpdates, fmt.Errorf("toUpdate is not DemoPodStatus")\n        }\n        toUpdateDemoPodStatuses[idx] = podStatus\n    }\n\n    _, err := r.resourceProviderClient.UpdateRealServer(&DemoResourceRsOps{\n        RsStatuses: toUpdateDemoPodStatuses,\n    })\n    if err != nil {\n        return nil, toUpdates, err\n    }\n\n    return toUpdates, nil, nil\n}\n\nfunc (r *DemoControllerAdapter) DeleteEmployees(ctx context.Context, employer client.Object, toDeletes []IEmployee) ([]IEmployee, []IEmployee, error) {\n    if toDeletes == nil || len(toDeletes) == 0 {\n        return toDeletes, nil, nil\n    }\n\n    toDeleteDemoPodStatuses := make([]DemoPodStatus, len(toDeletes))\n\n    for idx, toDelete := range toDeletes {\n        podStatus, ok := toDelete.(DemoPodStatus)\n        if !ok {\n            return nil, toDeletes, fmt.Errorf("toDelete is not DemoPodStatus")\n        }\n        toDeleteDemoPodStatuses[idx] = podStatus\n    }\n\n    _, err := r.resourceProviderClient.DeleteRealServer(&DemoResourceRsOps{\n        RsStatuses: toDeleteDemoPodStatuses,\n    })\n    if err != nil {\n        return nil, toDeletes, err\n    }\n\n    return toDeletes, nil, nil\n}\n')))}c.isMDXComponent=!0}}]);
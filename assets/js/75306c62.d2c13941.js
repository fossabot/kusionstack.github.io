"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43058],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),f=r,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return o?n.createElement(h,a(a({ref:t},p),{},{components:o})):n.createElement(h,a({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},62565:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={sidebar_position:2},a="PodOpsLifecycle",l={unversionedId:"concepts/podopslifecycle",id:"concepts/podopslifecycle",title:"PodOpsLifecycle",description:"Background",source:"@site/docs/kuperator/concepts/podopslifecycle.md",sourceDirName:"concepts",slug:"/concepts/podopslifecycle",permalink:"/kuperator/next/concepts/podopslifecycle",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"operating",previous:{title:"Using KusionStack Kuperator to operate Pods gracefully",permalink:"/kuperator/next/started/demo-graceful-operation"},next:{title:"CollaSet",permalink:"/kuperator/next/manuals/collaset"}},c={},s=[{value:"Background",id:"background",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Developer&#39;s Guide",id:"developers-guide",level:2},{value:"Operation Controller",id:"operation-controller",level:3},{value:"Pod Cooperation Controller",id:"pod-cooperation-controller",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Concurrency Support",id:"concurrency-support",level:3},{value:"General Workload Support",id:"general-workload-support",level:3}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"podopslifecycle"},"PodOpsLifecycle"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Kubernetes provides a set of default controllers for workload management, such as StatefulSet, Deployment, and DaemonSet, which are responsible for Pod operations.\nMeanwhile, application users may also have some services outside the Kubernetes cluster that are closely related to the Pod Lifecycle, including traffic routing, service discovery, or alert monitoring.\nHowever, they face challenges in participating in the operational lifecycle of a Pod, even if they are connected to Kubernetes by developing a controller that watches the Pods."),(0,r.kt)("p",null,"PodOpsLifecycle aims to offer Kubernetes administrators and developers finer-grained control over the entire lifecycle of a Pod.\nIt enables developers to execute necessary actions before, during, and after specific phases of a Pod operation.\nFor instance, removing the Pod's IP from the traffic route before initiating the Pod operation, performing the actual Pod operations, and adding it back after the Pod operation is completed to achieve a smooth and graceful Pod operation, and prevent any traffic loss."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In PodOpsLifecycle, participants are classified into two roles: ",(0,r.kt)("inlineCode",{parentName:"p"},"operation controllers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cooperation controllers"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operation controllers")," are responsible for operating Pods, such as Deployments and StatefulSets from Kubernetes, and CollaSets from Kuperator which intend to scale, update, or recreate Pods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cooperation controllers")," are sensitive with Pod status. They handle resources or configurations around Pods, which may include traffic controller, alert monitoring controller, etc. These controllers typically reconcile Kubernetes resources around Pods with external services, such as sync Pod IPs with the LB provider, or maintaining Pods' metadata with application monitoring system.")),(0,r.kt)("p",null,"The two types of controllers do not need to be aware of each other. All controllers are organized by PodOpsLifecycle. Additionally, KusionStack Kuperator introduces extra phases around the native Kubernetes Pod Lifecycle: ServiceAvailable, Preparing, and Completing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pod-ops-lifecycle",src:o(92651).Z,width:"1500",height:"978"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Completing"),": After a Pod is created or updated and becomes ready, Kuperator marks its PodOpsLifecycle as the ",(0,r.kt)("inlineCode",{parentName:"li"},"Completing")," phase. During this phase, the Pod is in a ready condition, prompting cooperation controllers to perform actions such as registering the Pod IP in the traffic route. Once all cooperation controllers complete their tasks, Kuperator sets the PodOpsLifecycle to the ",(0,r.kt)("inlineCode",{parentName:"li"},"ServiceAvailable")," phase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ServiceAvailable"),": This phase indicates that the Pod is in a normal state and ready to serve. If everything goes smoothly, the Pod remains in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ServiceAvailable")," phase until the next operation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Preparing"),": When an operation controller needs to operate the Pod, it triggers a new PodOpsLifecycle. The Pod then transitions from the ",(0,r.kt)("inlineCode",{parentName:"li"},"ServiceAvailable")," phase to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Preparing")," phase. During this phase, the Pod is initially marked as Unready by setting ReadinessGate to false. All cooperation controllers then begin preparing tasks, such as removing the Pod's IP from the traffic route. After completing these tasks, the Pod enters the ",(0,r.kt)("inlineCode",{parentName:"li"},"Operating")," phase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operating"),": If a Pod enters the ",(0,r.kt)("inlineCode",{parentName:"li"},"Operating")," phase, it is expected to accept any kind of operation without any damage, including recreation, scaling-in, upgrading, etc. Operation controllers are permitted to apply any changes to this Pod. Once all these operations are completed, the Pod advances to the next phase \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"Completing"),", and the PodOpsLifecycle continues.")),(0,r.kt)("p",null,"The PodOpsLifecycle detail and the relationship with Kubernetes native Pod Lifecycle is showed by following sequence diagram."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pod-ops-lifecycle-sequence-diagram",src:o(70124).Z,width:"1500",height:"694"})),(0,r.kt)("h2",{id:"developers-guide"},"Developer's Guide"),(0,r.kt)("p",null,"This section introduces how to develop operation controllers and cooperation controllers to interact with PodOpsLifecycle."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The operation controller is responsible for a set of Pod operation tasks. KusionStack Kuperator has already provided various types of operation controllers. Users only need to develop a new operation controller if a new kind of Pod operation needs to be added."),(0,r.kt)("li",{parentName:"ul"},"The cooperation controller participates in PodOpsLifecycle before and after operating on a Pod, such as the Traffic controller, alert monitoring controller, and other controllers responsible for maintaining the Pod and application status. Users should develop a new cooperation controller only when there is a new type of service or status around the Pod that needs to be maintained, such as integrating with a new traffic provider.")),(0,r.kt)("h3",{id:"operation-controller"},"Operation Controller"),(0,r.kt)("p",null,"The operation controller is responsible for Pod operations. The tasks that an operation controller needs to perform during PodOpsLifecycle include triggering a PodOpsLifecycle, checking whether the Pod has entered the Operating phase, performing Pod operations, and marking Pod operations as finished. These actions interacting with PodOpsLifecycle are provided in the package ",(0,r.kt)("inlineCode",{parentName:"p"},"kusionstack.io/kuperator/pkg/controllers/utils/podopslifecycle/utils.go"),"."),(0,r.kt)("p",null,"A simple operation controller reconcile method would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n\n    corev1 "k8s.io/api/core/v1"\n    "sigs.k8s.io/controller-runtime/pkg/reconcile"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n    \n    "kusionstack.io/kuperator/pkg/controllers/utils/podopslifecycle"\n)\n\nvar operationAdapter = &OperationOpsLifecycleAdapter{}\n\ntype OperationOpsLifecycleAdapter struct {\n}\n\n// GetID indicates ID of the PodOpsLifecycle\nfunc (a *OperationOpsLifecycleAdapter) GetID() string {\n    return "new-id"\n}\n\n// GetType indicates type for this Operation Controller\nfunc (a *OperationOpsLifecycleAdapter) GetType() podopslifecycle.OperationType {\n    return "new-type"\n}\n\n// AllowMultiType indicates whether multiple IDs which have the same Type are allowed\nfunc (a *OperationOpsLifecycleAdapter) AllowMultiType() bool {\n    return true\n}\n\n// WhenBegin is a hook, which will be executed when begin a lifecycle\nfunc (a *OperationOpsLifecycleAdapter) WhenBegin(pod client.Object) (bool, error) {\n    return false, nil\n}\n\n// WhenFinish is a hook, which will be executed when finish a lifecycle\nfunc (a *OperationOpsLifecycleAdapter) WhenFinish(pod client.Object) (bool, error) {\n    return false, nil\n}\n\n......\nfunc (r *PodOperationReconciler) Reconcile(ctx context.Context, req reconcile.Request) (ctrl.Result, error) {\n    // get the Pod\n    pod := &corev1.Pod{}\n    if err := r.Get(ctx, req.NamespacedName, pod); err != nil {\n        if !errors.IsNotFound(err) {\n            return reconcile.Result{}, err\n        }\n        return reconcile.Result{}, nil\n    }\n\n    // check if the Pod needs operation\n    if !r.needOperation(pod) {\n        return reconcile.Result{}, nil\n    }\n\n    // if PodOpsLifecycle has not been triggered, trigger it\n    if !podopslifecycle.IsDuringOps(OpsLifecycleAdapter, pod) {\n        if updated, err := podopslifecycle.Begin(r, operationAdapter, pod); err != nil {\n            return reconcile.Result{}, err\n        } else if updated {\n            return reconcile.Result{}, nil\n        }\n    }\n\n    // waiting until Pod enters operating phase\n    if _, allowed := podopslifecycle.AllowOps(operationAdapter, 0, pod); !allowed {\n        return reconcile.Result{}, nil\n    }\n\n    // do operation works\n    if completed := r.doPodOperation(pod); !completed {\n        return reconcile.Result{}, nil\n    }\n\n    // after operation works completed, finish operating phase to continue PodOpsLifecycle\n    if _, err := podopslifecycle.Finish(r, operationAdapter, pod); err != nil {\n        return reconcile.Result{}, err\n    }\n}\n')),(0,r.kt)("h3",{id:"pod-cooperation-controller"},"Pod Cooperation Controller"),(0,r.kt)("p",null,"There are two ways to develop a cooperation controller.\nOne way is to develop a controller using the controller runtime and adhering to some conventions of PodOpsLifecycle and Kubernetes.\nAnother way is to take the use of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/resourceconsist"},"ResourceConsist")," framework provided by KusionStack, which can be referenced from its ",(0,r.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/kuperator/manuals/resourceconsist"},"documentation"),"."),(0,r.kt)("p",null,"The following outlines the first approach."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n\n    corev1 "k8s.io/api/core/v1"\n    "k8s.io/apimachinery/pkg/api/errors"\n    k8spod "k8s.io/kubernetes/pkg/api/v1/pod/util.go"\n    "sigs.k8s.io/controller-runtime/pkg/controller/controllerutil"\n    "sigs.k8s.io/controller-runtime/pkg/reconcile"\n\n    appsv1alpha1 "kusionstack.io/kuperator/apis/apps/v1alpha1"\n)\n\nconst (\n    // Finalizer needs to have prefix: `prot.podopslifecycle.kusionstack.io`.\n    // KusionStack Kuperator keeps this prefix back-compatible,\n    // so that it can be hard code to decouple with KusionStack Kuperator.\n    finalizerPrefix = appsv1alpha1.PodOperationProtectionFinalizerPrefix\n\n    protectionFinalizer = finalizerPrefix + "/" + "unique-id"\n)\n\n......\nfunc (r *PodResourceReconciler) Reconcile(ctx context.Context, req reconcile.Request) (reconcile.Result, error) {\n    // get the Pod\n    pod := &corev1.Pod{}\n    if err := r.Get(ctx, req.NamespacedName, pod); err != nil {\n        if !errors.IsNotFound(err) {\n            return reconcile.Result{}, err\n        }\n        return reconcile.Result{}, nil\n    }\n\n    if k8spod.IsPodReady(pod) {\n        // do resource reconcile like add Pod IP to traffic route\n        r.trafficOn(pod.status.PodIP)\n        // It is important to add a unique finalizer on this Pod\n        return reconcile.Result{}, r.addFinalizer(ctx, pod, protectionFinalizer)\n    }\n\n    if !k8spod.IsPodReady(pod) {\n        // do resource reconcile like remove Pod IP from traffic route\n        r.trafficOff(pod.status.PodIP)\n        // It is important to remove the unique finalizer from this Pod\n        return reconcile.Result{}, r.removeFinalizer(ctx, pod, protectionFinalizer)\n    }\n}\n\nfunc (r *PodResourceReconciler) addFinalizer(ctx context.Context, pod *corev1.Pod, finalizer string) error {\n    if controllerutil.ContainsFinalizer(pod, finalizer) {\n        return nil\n    }\n\n    controllerutil.AddFinalizer(pod, finalizer)\n    return r.Update(ctx, pod)\n}\n\nfunc (r *PodResourceReconciler) removeFinalizer(ctx context.Context, pod *corev1.Pod, finalizer string) error {\n    if !controllerutil.ContainsFinalizer(pod, finalizer) {\n        return nil\n    }\n\n    controllerutil.RemoveFinalizer(pod, finalizer)\n    return r.Update(ctx, pod)\n}\n')),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("h3",{id:"concurrency-support"},"Concurrency Support"),(0,r.kt)("p",null,"PodOpsLifecycle in KusionStack Kuperator supports concurrency.\nIt means PodOpsLifecycle is able to organize and track multi controllers operating the same pod at the same time.\nFor example, when a controller is going to update Pod, other controllers are allowed to do other operations at the same time, like delete, restart, recreate it,\nalthough the result may not be meaningful."),(0,r.kt)("h3",{id:"general-workload-support"},"General Workload Support"),(0,r.kt)("p",null,"PodOpsLifecycle offers seamless integration with various workload types, including Deployment and StatefulSet.\nTo enable this functionality, ensure the feature gate for ",(0,r.kt)("inlineCode",{parentName:"p"},"GraceDeleteWebhook")," is enabled when starting the KusionStack Kuperator controller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Enable the GraceDeleteWebhook feature when starting the controller with this argument\n$ /manager --feature-gates=GraceDeleteWebhook=true\n")),(0,r.kt)("p",null,"Once enabled, any Pod labeled with ",(0,r.kt)("inlineCode",{parentName:"p"},"kusionstack.io/control=true")," under a general workload, such as Deployment, becomes manageable by PodOpsLifecycle.\nThis feature provides workloads a way to work closer with Pod Cooperation Controllers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Due to the Kubernetes webhook mechanism, the following error will be returned when workloads or users delete a pod. This error is intentional and serves to indicate that the pod deletion process has started and is being managed by PodOpsLifecycle.   "),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n default delete pod collaset-sample-74fsv\nError from server (failed to validate GraceDeleteWebhook, pod deletion process is underway and being managed by PodOpsLifecycle): admission webhook "validating-pod.apps.kusionstack.io" denied the request: failed to validate GraceDeleteWebhook, pod deletion process is underway and being managed by PodOpsLifecycle\n'))))}d.isMDXComponent=!0},70124:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/pod-ops-lifecycle-sequence-diagram-47bc9fbcab1c539cb11e8bc5f3987cf5.png"},92651:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/pod-ops-lifecycle-6ed0948e3faaf60bcd3ddb5c572038cf.png"}}]);
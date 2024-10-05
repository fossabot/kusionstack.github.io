"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42062],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,k=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return a?i.createElement(k,o(o({ref:t},u),{},{components:a})):i.createElement(k,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},90691:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={id:"health-policy"},o="Customized Health Check with KCL",s={unversionedId:"user-guides/working-with-k8s/health-policy",id:"version-v0.13/user-guides/working-with-k8s/health-policy",title:"Customized Health Check with KCL",description:"Kusion now offers advanced customized health checks leveraging the power of KCL. This robust feature empowers users to define complex and tailored health policies for their Kubernetes resources. By implementing these custom policies, you can ensure that your resources not only meet specific criteria but also satisfy complex conditions before being deemed healthy. This capability is particularly valuable when assessing the health status of Kubernetes Custom Resources (CRs), providing a flexible and precise mechanism to validate the state of your entire project.",source:"@site/docs_versioned_docs/version-v0.13/5-user-guides/2-working-with-k8s/10-customize-health-policy.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/health-policy",permalink:"/docs/user-guides/working-with-k8s/health-policy",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/5-user-guides/2-working-with-k8s/10-customize-health-policy.md",tags:[],version:"v0.13",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728109585,formattedLastUpdatedAt:"Oct 5, 2024",sidebarPosition:10,frontMatter:{id:"health-policy"},sidebar:"kusion",previous:{title:"Apply the Raw K8s Manifest YAML",permalink:"/docs/user-guides/working-with-k8s/k8s-manifest"},next:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/docs/user-guides/observability/prometheus"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Defining a Health Policy",id:"defining-a-health-policy",level:2},{value:"Example Health Policy",id:"example-health-policy",level:3},{value:"How It Works",id:"how-it-works",level:2},{value:"Applying the Health Policy",id:"applying-the-health-policy",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Validation",id:"validation",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"customized-health-check-with-kcl"},"Customized Health Check with KCL"),(0,n.kt)("p",null,"Kusion now offers advanced customized health checks leveraging the power of ",(0,n.kt)("inlineCode",{parentName:"p"},"KCL"),". This robust feature empowers users to define complex and tailored health policies for their Kubernetes resources. By implementing these custom policies, you can ensure that your resources not only meet specific criteria but also satisfy complex conditions before being deemed healthy. This capability is particularly valuable when assessing the health status of Kubernetes Custom Resources (CRs), providing a flexible and precise mechanism to validate the state of your entire ",(0,n.kt)("inlineCode",{parentName:"p"},"project"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,n.kt)("p",null,"The example below also requires you to have ",(0,n.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,n.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,n.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,n.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,n.kt)("h2",{id:"defining-a-health-policy"},"Defining a Health Policy"),(0,n.kt)("p",null,"You can define a health policy in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Workspace")," configuration via the ",(0,n.kt)("inlineCode",{parentName:"p"},"healthPolicy")," field. The ",(0,n.kt)("inlineCode",{parentName:"p"},"healthPolicy")," should contain a KCL script that defines the health check logic and can be used to assert healthy conditions on your ",(0,n.kt)("inlineCode",{parentName:"p"},"Kubernetes")," resources."),(0,n.kt)("p",null,"Firstly, you need to initialize the workspace configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"~/$ touch ~/dev.yaml\n~/$ kusion workspace create dev -f ~/dev.yaml\ncreate workspace dev successfully\n")),(0,n.kt)("h3",{id:"example-health-policy"},"Example Health Policy"),(0,n.kt)("p",null,"Here is an example of how to define a health policy for a Kubernetes Deployment. This policy checks multiple aspects of the Deployment's health status. Update ~/dev.yaml with this example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n    service:\n        configs:\n            default:\n                healthPolicy:\n                    health.kcl: |\n                        assert res.metadata.generation == res.status.observedGeneration\n                        assert res.status.replicas == 1\n")),(0,n.kt)("p",null,"In this example, the custom health check ensures that:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Deployment has 1 replicas"),(0,n.kt)("li",{parentName:"ol"},"The observed generation matches the current generation (indicating that the latest changes have been processed)")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"res")," represents the Kubernetes resource being evaluated. It's a fixed expression in this feature that provides access to all fields and properties of the resource. You can use dot notation (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"res.metadata.name"),") to access nested fields within the resource. This allows you to create complex health checks based on various aspects of your Kubernetes resources.")),(0,n.kt)("h2",{id:"how-it-works"},"How It Works"),(0,n.kt)("p",null,"When you apply your configuration, ",(0,n.kt)("inlineCode",{parentName:"p"},"kusion")," will patch the provided ",(0,n.kt)("inlineCode",{parentName:"p"},"KCL")," script into the ",(0,n.kt)("inlineCode",{parentName:"p"},"extension")," field of the specified resource in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Spec")," and use the provided KCL script to evaluate the health of this resource. The health check will be performed repeatedly until it passes or a timeout is reached."),(0,n.kt)("p",null,"The KCL script has access to the full Kubernetes resource object through the ",(0,n.kt)("inlineCode",{parentName:"p"},"res")," variable. You can use any fields or properties of the resource in your health check logic."),(0,n.kt)("p",null,"Besides configuring the workspace, platform engineers can also utilize the useful ",(0,n.kt)("inlineCode",{parentName:"p"},"PatchHealthPolicyToExtension")," function in SDK to perform this feature while constructing the ",(0,n.kt)("inlineCode",{parentName:"p"},"module"),". This function allows for a more programmatic and flexible approach to applying health policies while it's multiple resources case for a module."),(0,n.kt)("p",null,"Here's a code snippet of how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"PatchHealthPolicyToExtension")," function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-golang"},'// Generate Kusion resource ID and wrap the Kubernetes Service into Kusion resource\n// with the SDK provided by kusion module framework.\nresourceID := module.KubernetesResourceID(svc.TypeMeta, svc.ObjectMeta)\nresource, err := module.WrapK8sResourceToKusionResource(resourceID, svc)\nif err != nil {\n    return nil, err\n}\nmodule.PatchHealthPolicyToExtension(resource, "assert res.metadata.generation == res.status.observedGeneration")\n')),(0,n.kt)("h2",{id:"applying-the-health-policy"},"Applying the Health Policy"),(0,n.kt)("p",null,"To apply the health policy, update your workspace configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"~/$ kusion workspace update dev -f ~/dev.yaml\nupdate workspace dev successfully\n")),(0,n.kt)("p",null,"After updating the workspace configuration, apply your new configuration with the customized health check with the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"~/$ cd quickstart/default\n~/quickstart/default/$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack default...                                         \n                                                                                                      \nStack: default                                               \nID                                                           Action\nv1:Namespace:quickstart                                      Create\nv1:Service:quickstart:quickstart-default-quickstart-private  Create\napps/v1:Deployment:quickstart:quickstart-default-quickstart  Create\n\n\nDo you want to apply these diffs?: \n  > yes\n\nStart applying diffs ...\n \u2714\ufe0e  Succeeded v1:Namespace:quickstart\n \u28fd  Creating v1:Service:quickstart:quickstart-default-quickstart-private (0s)\n \u2714\ufe0e  Succeeded v1:Namespace:quickstart\n \u28bf  Creating v1:Service:quickstart:quickstart-default-quickstart-private (0s)\n \u28bf  Creating apps/v1:Deployment:quickstart:quickstart-default-quickstart (0s)\n ......\n \u2714\ufe0e  Succeeded v1:Namespace:quickstart\n \u2714\ufe0e  Succeeded v1:Service:quickstart:quickstart-default-quickstart-private\n \u2714\ufe0e  Succeeded apps/v1:Deployment:quickstart:quickstart-default-quickstart\nApply complete! Resources: 3 created, 0 updated, 0 deleted.\n\n[v1:Namespace:quickstart]\nType   Kind            Name        Detail\nREADY  Namespace       quickstart  Phase: Active\nREADY  ServiceAccount  default     Secrets: 0, Age: 0s\n[v1:Service:quickstart:quickstart-default-quickstart-private]\nType   Kind           Name                                         Detail\nREADY  Service        quickstart-default-quickstart-private        Type: ClusterIP, InternalIP: 10.96.196.38, ExternalIP: <none>, Port(s): 8080/TCP\nREADY  EndpointSlice  quickstart-default-quickstart-private-v42zc  AddressType: IPv4, Ports: 8080, Endpoints: 10.244.1.99\n[apps/v1:Deployment:quickstart:quickstart-default-quickstart]\nType   Kind        Name                                            Detail\nREADY  Deployment  quickstart-default-quickstart                   Reconciled\nREADY  ReplicaSet  quickstart-default-quickstart-67459cd68d        Desired: 1, Current: 1, Ready: 1\nREADY  Pod         quickstart-default-quickstart-67459cd68d-jqtt7  Ready: 1/1, Status: Running, Restart: 0, Age: 4s\n")),(0,n.kt)("h2",{id:"explanation"},"Explanation"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Detail")," column for the Deployment ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart-default-quickstart")," provides crucial information about the resource's reconciliation status:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'If it shows "Reconciled", it means the resource has successfully met the conditions defined in the health policy.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Type   Kind        Name                                 Detail\nREADY  Deployment  quickstart-default-quickstart        Reconciled\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'If it displays "Reconciling...", it indicates that the resource is still in the process of reaching the desired state as per the health policy.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Type   Kind        Name                                 Detail\nMODIFIED  Deployment  quickstart-default-quickstart     Reconciling...\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In case of any errors or unsupported configurations, appropriate messages will be shown, and customized health check will be skipped.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Type   Kind        Name                                 Detail\nREADY  Deployment  quickstart-default-quickstart        health policy err: invalid syntax error, skip\n")),(0,n.kt)("p",null,"This ",(0,n.kt)("inlineCode",{parentName:"p"},"Detail")," helps you quickly assess whether your Kubernetes resources have reached their intended state after applying changes. It's an essential feedback mechanism for ensuring the reliability and correctness of your deployments."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"Detail")," showing as ",(0,n.kt)("inlineCode",{parentName:"p"},"Unsupported kind, skip")," indicates that the health policy is not configured for this resource's health check. This can occur due to several reasons:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"There's a mismatch between the resource kind in your Kubernetes manifests and the kinds specified in your health policy."),(0,n.kt)("li",{parentName:"ol"},"The health policy in your workspace configuration might be missing or incorrectly defined for this particular resource."),(0,n.kt)("li",{parentName:"ol"},"You might forgot to updated your workspace with the new configuration.")),(0,n.kt)("p",{parentName:"admonition"},"To resolve this:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Review your workspace configuration to ensure the health policy is correctly defined for all intended resource kinds."),(0,n.kt)("li",{parentName:"ol"},"Check that the resource kind in your Kubernetes manifests matches the kinds specified in your health policy.")),(0,n.kt)("p",{parentName:"admonition"},"If the issue persists, you may need to update your workspace configuration or adjust your health policy to include the specific resource kind.")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keep your health check logic simple and focused on key indicators of health for your specific resource."),(0,n.kt)("li",{parentName:"ul"},"Use assertions to clearly define what conditions must be true for the resource to be considered healthy."),(0,n.kt)("li",{parentName:"ul"},"Consider both the desired state (e.g., number of replicas) and the current state (e.g., available replicas) in your health checks."),(0,n.kt)("li",{parentName:"ul"},"For complex resources, you may want to check multiple conditions to ensure full health and readiness.")),(0,n.kt)("h2",{id:"limitations"},"Limitations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The customized health check feature is currently only available for Kubernetes resources."),(0,n.kt)("li",{parentName:"ul"},"The KCL script must complete execution within a reasonable time to avoid timeouts during the apply process."),(0,n.kt)("li",{parentName:"ul"},"Errors in the KCL script syntax will cause the health check to be skipped, so be sure to test your scripts thoroughly.")),(0,n.kt)("h2",{id:"validation"},"Validation"),(0,n.kt)("p",null,"To verify the health policy, you can check the status of your Kubernetes resources:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get -n quickstart deployment quickstart-default-quickstart -o yaml\n")),(0,n.kt)("p",null,"Ensure that the resource meets the conditions defined in your health policy."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Customized health checks provides a powerful way to ensure your Kubernetes resources are in the desired state before considering an ",(0,n.kt)("inlineCode",{parentName:"p"},"apply")," operation complete. By defining health policies, you can automate the validation of your resources and ensure they meet specific criteria before being considered healthy. By leveraging KCL, you can create sophisticated health check logic tailored to your specific ",(0,n.kt)("inlineCode",{parentName:"p"},"project")," needs."),(0,n.kt)("p",null,"For more details on KCL and its syntax, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration-walkthrough/kcl-basics"},"KCL documentation"),"."))}p.isMDXComponent=!0}}]);
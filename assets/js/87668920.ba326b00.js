"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9243],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return o?a.createElement(f,r(r({ref:t},d),{},{components:o})):a.createElement(f,r({ref:t},d))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,r=new Array(n);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<n;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6854:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=o(7462),i=(o(7294),o(3905));const n={sidebar_position:2},r="PodOpsLifecycle",l={unversionedId:"operating/concepts/podopslifecycle",id:"operating/concepts/podopslifecycle",title:"PodOpsLifecycle",description:"Kubernetes provides a set of default controllers for workload management, like StatefulSet, Deployment, DaemonSet for instances. While user services outside Kubernetes have difficulty to participate in the operation lifecycle of a pod.",source:"@site/docs/operating/concepts/podopslifecycle.md",sourceDirName:"operating/concepts",slug:"/operating/concepts/podopslifecycle",permalink:"/docs/operating/concepts/podopslifecycle",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/operating/concepts/podopslifecycle.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1695816572,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"operating",previous:{title:"Using KusionStack Operating to operate Pods gracefully",permalink:"/docs/operating/started/demo-graceful-operation"},next:{title:"CollaSet",permalink:"/docs/operating/manuals/collaset"}},s={},p=[{value:"Goals",id:"goals",level:2},{value:"Proposal",id:"proposal",level:2},{value:"User Stories",id:"user-stories",level:3},{value:"Story 1",id:"story-1",level:4},{value:"Story 2",id:"story-2",level:4},{value:"Story 3",id:"story-3",level:4},{value:"Design Details",id:"design-details",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"podopslifecycle"},"PodOpsLifecycle"),(0,i.kt)("p",null,"Kubernetes provides a set of default controllers for workload management, like StatefulSet, Deployment, DaemonSet for instances. While user services outside Kubernetes have difficulty to participate in the operation lifecycle of a pod."),(0,i.kt)("p",null,"PodOpsLifecycle attempts to provide Kubernetes administrators and developers with finer-grained control the entire lifecycle of a pod. For example, we can develop a controller to do some necessary things in both the PreCheck and PostCheck phases to avoid traffic loss."),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provides extensibility that allows users to control the whole lifecycle of pods using the PodOpsLifecycle mechanism."),(0,i.kt)("li",{parentName:"ol"},"Provide some concurrency, multi controllers can operate the pod in the same time. For example, when a pod is going to be updated, other controllers may want to delete it."),(0,i.kt)("li",{parentName:"ol"},"All the lifecycle phases of a pod can be traced.")),(0,i.kt)("h2",{id:"proposal"},"Proposal"),(0,i.kt)("h3",{id:"user-stories"},"User Stories"),(0,i.kt)("h4",{id:"story-1"},"Story 1"),(0,i.kt)("p",null,"As a developer that focuses on pod traffic, I should remove the endpoint once the readiness gate ",(0,i.kt)("inlineCode",{parentName:"p"},"pod.kusionstack.io/service-ready")," set to false which means traffic to the pod should be turned off, and I should add the endpoint once the readiness gate ",(0,i.kt)("inlineCode",{parentName:"p"},"pod.kusionstack.io/service-ready")," set to false and pod is ready which means traffic to the pod should be turned on."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://mermaid.ink/svg/pako:eNqtksFqwzAMhl9F-Jy29zACgx43GO1t-KLaSmuaWJ6tZJTSd5-SbRkb9DafbPmX_P2WrsaxJ1ObQm8DRUfbgMeMvY1W0Aln2NJIHSfKUyhhluBCwijwwt5G0LUoYNU0U7iGp1AEMHp4R3EnSN9SvZxFS0oNO0IfIpUCRxSapOvzUALHogDndeBNoTwGR6usygsUEhCGFrtCd9_f9TwSyImAok8cFLfN3EPH6OGAHarT_G9IoYDkgaqHQ940s21NAcfRB9Gsud6iusv86P1vYnX5h9dUpqfcY_DasetUyRpN6cmaWreeWhw6scbGm0pxEN5fojP1TGeG5NXOV4NNPf9gZbSXr8w_Z1Jozs-fUzEPx-0DO3m-sA",alt:null})),(0,i.kt)("p",null,"The finalizer can be added and removed automatically if we implement interface ReconcileAdapter provided by resourceconsist controller."),(0,i.kt)("h4",{id:"story-2"},"Story 2"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"As a developer that maintain a system that provide pod operations like update and scale, I should add the label ",(0,i.kt)("inlineCode",{parentName:"li"},"operating.podopslifecycle.kusionstack.io/<id>=<time>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"operation-type.podopslifecycle.kusionstack.io/<id>=<type>")," at the same time when I want to operate a pod."),(0,i.kt)("li",{parentName:"ol"},"If the operation is completed I should remove the label ",(0,i.kt)("inlineCode",{parentName:"li"},"operating.podopslifecycle.kusionstack.io/<id>=<time>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"operation-type.podopslifecycle.kusionstack.io/<id>=<type>")," at the same time when."),(0,i.kt)("li",{parentName:"ol"},"If I want to cancel the operation, I need to add the label ",(0,i.kt)("inlineCode",{parentName:"li"},"undo-operation-type.podopslifecycle.kusionstack.io/<id>=<type>"),".")),(0,i.kt)("p",null,"The sequence diagram below describes how to update a pod."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://mermaid.ink/svg/pako:eNqtUk1LAzEU_CuPnLfb-1IXhB4VRPEiubwmr21ovkzeVpbS_26ylSpi1UNzSoZhZjLMQaigSXQi0-tAXtHS4Cahk14yKg4JlrQnGyKlCkVMbJSJ6BkegpYeyjkzYNb3Fe7gzmQG9BrekNX2Iu1Wa7C4IgsVRzZ-08agQ8zWrEmNylK7G7IJPpc0u9aE-cLo_mbBxlHfwGKV5n21we9Cwc94jPRPtcLsARl4S5DREVT99hS7BJ0Cn-OX331x-suiRqPLRT1HXTQm4_hLn4_kwp6u01X6QesadYlGOEoOjS5zOtSvSFEYjqToylXTGgfLUkh_LFQcODyNXomO00CNGKYiPtYnujXaXNAytJcQPt-kTdnk_Wmy03KP7zEC-QI",alt:null})),(0,i.kt)("h4",{id:"story-3"},"Story 3"),(0,i.kt)("p",null,"As a developer that cares about pod operation observability, I can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>=<time>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>=<type>")," in the labels to tracing a pod. The ",(0,i.kt)("inlineCode",{parentName:"p"},"<time>")," is a unix nano time, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," is a string that describe the operation type, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>")," is a string that used in the whole operation lifecycle."),(0,i.kt)("h2",{id:"design-details"},"Design Details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Podopslifecycle mechanism is provided by a mutating webhook server and a controller. The mutating webhook server will chage the labels at the right time, and the controller will set the readinessgate ",(0,i.kt)("inlineCode",{parentName:"li"},"pod.kusionstack.io/service-ready")," to true or false if necessary. The controller will also chage the label at some time."),(0,i.kt)("li",{parentName:"ol"},"The label ",(0,i.kt)("inlineCode",{parentName:"li"},"operating.podopslifecycle.kusionstack.io/<id>=<time>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"operation-type.podopslifecycle.kusionstack.io/<id>=<type>")," will be validated by a validating webhook server, they must be added or removed at the same time by the operation controller."),(0,i.kt)("li",{parentName:"ol"},"Traffic controller should turn the traffic on or off based on the readiness gate ",(0,i.kt)("inlineCode",{parentName:"li"},"pod.kusionstack.io/service-ready")," and pod condition ",(0,i.kt)("inlineCode",{parentName:"li"},"Ready"),"."),(0,i.kt)("li",{parentName:"ol"},"Protection finalizer names must have prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"prot.podopslifecycle.kusionstack.io"),". They are used to determine whether the traffic has been completely removed or is fully prepared."),(0,i.kt)("li",{parentName:"ol"},"The special label ",(0,i.kt)("inlineCode",{parentName:"li"},"podopslifecycle.kusionstack.io/service-available")," indicate a pod is available to serve."),(0,i.kt)("li",{parentName:"ol"},"We can use the message ",(0,i.kt)("inlineCode",{parentName:"li"},"<id>=<time>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<id>=<type>")," in the labels to tracing a pod. The ",(0,i.kt)("inlineCode",{parentName:"li"},"<time>")," is a unix time.")),(0,i.kt)("p",null,"Below we use a sequence diagram to show how to use podopslifecycle mechanism to avoid traffic loss. You can also use this podopslifecycle mechanism to do others things, for example, to prevent tasks to be interrupted when they are need to run for a long time."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://mermaid.ink/svg/pako:eNrNWF2O0zAQvoqVF0BqC1sWAdVSCcELErAIkJBQH3DtSWutYwfb2VVB3IAjcSeuwDhOmqQJbZMuEk-brsfjz99885N8j5jmEM0iC18zUAxeCroyNFmohaOZ0ypLlmD8r5QaJ5hIqXLkMgVDndCKvNDKGS1l2-ad5h3_ukztaxED2zAJHcsfDVVWeM_vs7YBrsaxYM1D0cYAc8SslvTu2fn5aPrwycj_fTA5v-dXF64LLhnP5_7EGXnOOdHBQq0mqeY6tbLEOLnKLG60jrKridD3LwSfP7twIoH5iFwszf05rbZrNXabFI70gZZzQh1xayCWJkC810lA_FY7IEas1o7oOMD8BIRRRTIL_Y4jTpMVhGO8uXeIfgQvjtoJSsXLpzWoQcQQpAT4718_t_ykBsZsDWh5vJcKXlMUFcBLlOsg102AJTlMGwM21YrjdQNVS2oBo6vydcGLiAskUEpiEIwlN8KtcStu8gDLsKbU2r9QAHyAxhQnTZ3hQyKs33bQW46oSWpLXk2KZ7UEx3Uu4hgMYAJ6VzaX4RKZBxNrkyBBeH2WGW8hN9s7I-SbNSBxhgi3f08gscoDT31g2hIOzl9V4Zblxqvf3LEVD95NkdD51UDx3ZIwffRoNJ1OR2ePH9ZKwn7VHx-sIKUiTM7vLYKNdWtYOZFWE4uSNEBRiGAtWVGMFjra3YxcXAsGY2-5IdSSGDeXFaRdK3fu2Nc_xsLDys8YEY4gNcZKAUMX1GwwfHhfW4bfhSMSfQ0dyRULRaX4hpjyJ7nZF7yzp9PR9MHxwfO5mRpUOMsVsj3LkjVFNEvYIuMNtFWCQf8yRaULD4e6Ta2qwlHaKjEi457ISvpSXGESQyop85yiLwwLSHDFr3om1sNxSq_z4my66d_zCsYAdbSfsi1nr-JCQ9u1Gz8OYGPDssJANokp741Vx651JkPpzBTX45MxlwptBPywHGv4-nVSSZe-yewXbhGQIZ2w1l92vQztUy15DGxVndCKqrr10IFhN5dPaLdcKzhZM4eGuf6HHJro6pnV0mZTnKdlRbv5lcHP2z6KF6HsNHdEmZu_inczA8_oGgQq7Ydkr8R_W0prJPctjBD5XNq8XC8VNut-NVRo6_7BFB0GniG-2-E_fpRuiKDnJL3F2ovVv40Y3a-MxwV3IJT2CxLTSYqdG25jXvyvxkVnMqRL-ajxKrjkfWnj12sv0jmpHbPb5LYGv3ZqNapIn-rXblCn9YuOhjckK_e5ObGnD1BpyPNigjPgQ6506Awh4f1btY_8lwM-S3XRayryqehLmdDRKEqw8FPBo1n0faEIWUR4WAKLaIaPHGKa4bAWLdQPNPUftT5sFItmufSiLOUY9uKrVzQLrzdRStVnravfgLrV5k34VJZ_MfvxBzhuFb0",alt:null})))}c.isMDXComponent=!0}}]);
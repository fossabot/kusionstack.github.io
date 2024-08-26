"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18131],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?t.createElement(h,o(o({ref:n},d),{},{components:a})):t.createElement(h,o({ref:n},d))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88864:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const i={sidebar_position:3},o="PodTransitionRule",l={unversionedId:"manuals/podtransitionrule",id:"version-v0.3/manuals/podtransitionrule",title:"PodTransitionRule",description:"In normal pod lifecycle,  some phases are defined. For example, K8s Pods follow a defined lifecycle\uff0cstarting in the Pending phase, moving through Running if at least one of its primary containers starts OK, and then through either the Succeeded or Failed phases depending on whether any container in the Pod terminated in failure.",source:"@site/kuperator_versioned_docs/version-v0.3/manuals/podtransitionrule.md",sourceDirName:"manuals",slug:"/manuals/podtransitionrule",permalink:"/zh/kuperator/v0.3/manuals/podtransitionrule",draft:!1,tags:[],version:"v0.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kuperator",previous:{title:"ResourceConsist",permalink:"/zh/kuperator/v0.3/manuals/resourceconsist"},next:{title:"PodDecoration",permalink:"/zh/kuperator/v0.3/manuals/poddecoration"}},s={},p=[{value:"Rule Definition",id:"rule-definition",level:2},{value:"Available Policy",id:"available-policy",level:3},{value:"maxUnavailable",id:"maxunavailable",level:4},{value:"minAvailable",id:"minavailable",level:4},{value:"Label Check",id:"label-check",level:3},{value:"Webhook",id:"webhook",level:3}],d={toc:p};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"podtransitionrule"},"PodTransitionRule"),(0,r.kt)("p",null,"In normal pod lifecycle,  some phases are defined. For example, K8s Pods follow a defined lifecycle\uff0cstarting in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending")," phase, moving through ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," if at least one of its primary containers starts ",(0,r.kt)("inlineCode",{parentName:"p"},"OK"),", and then through either the ",(0,r.kt)("inlineCode",{parentName:"p"},"Succeeded")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Failed")," phases depending on whether any container in the Pod terminated in failure."),(0,r.kt)("p",null,"These phase definitions can fulfill basic Pod change scenarios, but it are ambiguous.\nActually, before pod upgrade or ready, it is necessary to have some check mechanisms in place to ensure the safety of pod changes. Fortunately, ",(0,r.kt)("a",{parentName:"p",href:"/zh/kuperator/v0.3/concepts/podopslifecycle"},"PodOpsLifecycle")," extends and supports some check stages: ",(0,r.kt)("inlineCode",{parentName:"p"},"PreCheck")," before pod upgrade and ",(0,r.kt)("inlineCode",{parentName:"p"},"PostCheck")," before pod ready."),(0,r.kt)("p",null,"To ensure a more fine-grained and controlled change process for Pods, we introduce custom rules or perform additional tasks as prerequisites for state transitions before the desired state of a Pod is achieved. Similar to the Pod ",(0,r.kt)("inlineCode",{parentName:"p"},"readinessGates"),", where certain conditions must be met for a Pod to be considered readiness. For example, we consider a Pod ready for the ",(0,r.kt)("inlineCode",{parentName:"p"},"PostCheck")," phase only if it has specific labels. For this purpose, we introduce the ",(0,r.kt)("inlineCode",{parentName:"p"},"PodTransitionRule")," as a prerequisite for the state transition of a Pod."),(0,r.kt)("h2",{id:"rule-definition"},"Rule Definition"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"PodTransitionRule")," to define a set of transition rules for your workload pods.\nEach rule will be executed at the corresponding stage, and it will be blocked if the conditions are not met."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kusionstack.io/v1alpha1\nkind: PodTransitionRule\nmetadata:\n  name: podtransitionrule-sample\nspec:\n  rules:\n  - availablePolicy:\n      maxUnavailableValue: 50%\n    name: maxUnavailable\n  - stage: PreCheck  # stages are supported by PodOpsLifecycle. Defaults to PreCheck.\n    labelCheck:\n      requires:\n        matchLabels:\n          app.custom/ready: 'true' \n    name: labelCheck\n  - stage: PostCheck\n    webhook:\n      clientConfig:\n        url: https://1.1.1.1:8089/post-stop\n        caBundle: Cg==\n        poll:\n          url: http://1.1.1.1:8089/fetch-result\n          rawQueryKey: task-id   # URL parameter key to carry trace ID when fetching result. Defaults to task-id in form 'QueryUrl=URL?rawQueryKey=<task-id>'\n          intervalSeconds: 5\n          timeoutSeconds: 60\n      failurePolicy: Fail\n      parameters:\n      - key: podIP\n        valueFrom:\n          fieldRef: \n            fieldPath: status.podIP\n    name: webhookCheck\n  selector:        # select pods in effect\n    matchLabels:\n      app: foo\n")),(0,r.kt)("h3",{id:"available-policy"},"Available Policy"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"availablePolicy")," rule defines the availability strategy during the Pod update process."),(0,r.kt)("h4",{id:"maxunavailable"},"maxUnavailable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"availablePolicy:\n  maxUnavailable: \n    value: 50%  # int or string \n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailableValue")," is the maximum number of pods that can be unavailable during the update.\nValue can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).\nAbsolute number is calculated from percentage by rounding down.\nThis can not be 0."),(0,r.kt)("h4",{id:"minavailable"},"minAvailable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"availablePolicy:\n  minAvailable:\n    value: 5  # int or string \n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"minAvailableValue")," is the minimum number of pods that should be available during the update."),(0,r.kt)("h3",{id:"label-check"},"Label Check"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"labelCheck")," rule is used to check if labels are satisfied.\nYou can define your own labels as change check conditions and modify the labels according to your needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"labelCheck:\n  requires:\n    matchLabels:\n      app.custom/ready: 'true' \n    matchExpressions:\n    - key: app.custom/forbidden \n      operator: DoesNotExist\n")),(0,r.kt)("h3",{id:"webhook"},"Webhook"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"webhook")," is an HTTP callback, based on which a external web application can determine whether a pod can pass this check."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An HTTP POST occurs first when pods entries the configured stage which defaults PreCheck."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"poll")," is provided, this rule then keeps calling polling url to fetch a long running job result. This job can be located by ",(0,r.kt)("inlineCode",{parentName:"li"},"task-id")," returned from the response of the first request.  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"webhook:\n  clientConfig: # custom server config\n    url: https://1.1.1.1:8089/post-stop\n    caBundle: Cg==\n    poll:\n      url: http://1.1.1.1:8089/fetch-result\n      rawQueryKey: task-id\n      intervalSeconds: 5\n      timeoutSeconds: 60\n  failurePolicy: Fail\n  parameters:\n    - key: podIP\n      valueFrom:\n        fieldRef:\n          fieldPath: status.podIP\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Protocol without poll")),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// URL: https://1.1.1.1:8089/post-stop\n// Method: POST\n\n{ \n  "traceId": "<trace-id>",    // <trace-id> is generated by Kuperator, which can be used to track request\n  "stage": "PreTrafficOff",\n  "ruleName": "webhookCheck",\n    "resources": [            // Information of Pods which are in this stage\n    {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "name": "pod-a",\n      "parameters": {\n        "podIP": "1.0.0.1"    // Customized information users can indicate from rule paramter\n      }\n    },\n    {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "name": "pod-b",\n      "parameters": {\n        "podIP": "1.0.0.2"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": false,\n  "message": "msg", \n  "finishedNames": ["pod-a", "pod-b"]\n}\n')),(0,r.kt)("p",null,"Response ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," indicating all pods approved or not. If it's ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"finishedNames")," field can be used to approve partial pods."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Protocol with poll")),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// URL: https://1.1.1.1:8089/post-stop\n// Method: POST\n\n{ \n  "traceId": "<trace-id>",    // <trace-id> is generated by Kuperator, which can be used to track request\n  "stage": "PreTrafficOff",\n  "ruleName": "webhookCheck",\n    "resources": [            // Information of Pods which are in this stage\n    {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "name": "pod-a",\n      "parameters": {\n        "podIP": "1.0.0.1"    // Customized information users can indicate from rule paramter\n      }\n    },\n    {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "name": "pod-b",\n      "parameters": {\n        "podIP": "1.0.0.2"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "poll": true,         // required to indicate polling calls is necessary\n  "taskId": <task-id>,  // required to to fetch polling result\n  "message": "msg"\n}\n')),(0,r.kt)("p",null,"Response ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," indicating whether the first request is success or not. If true and field ",(0,r.kt)("inlineCode",{parentName:"p"},"poll")," in response is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (or field ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," in response is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"), PodTransisionRule will then begin to keep calling poll URL to fetch process result.\nField ",(0,r.kt)("inlineCode",{parentName:"p"},"taskId")," is required for polling. "),(0,r.kt)("p",null,"The request for polling is GET method and in form of ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryUrl=URL?task-id=<task-id>"),". The parameter key in this URL defaults ",(0,r.kt)("inlineCode",{parentName:"p"},"task-id"),", if using ",(0,r.kt)("inlineCode",{parentName:"p"},"poll")," in above response. It would be ",(0,r.kt)("inlineCode",{parentName:"p"},"trace-id")," if using ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," in above response.\nUsers can also indicate the key by field ",(0,r.kt)("inlineCode",{parentName:"p"},"poll.rawQueryKey"),"."),(0,r.kt)("p",null,"The response from polling call is expected like following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "msg",\n  "finished": false,\n  "finishedNames": ["pod-a", "pod-b"]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"success")," is supposed to be true, if there is no error. If all pods is approved, ",(0,r.kt)("inlineCode",{parentName:"p"},"finished")," should be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"finished")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"finishedNames")," can be used to allow partial pods to be approved."))}u.isMDXComponent=!0}}]);
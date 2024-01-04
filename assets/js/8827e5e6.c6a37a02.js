"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6631],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?t.createElement(h,r(r({ref:n},d),{},{components:a})):t.createElement(h,r({ref:n},d))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2589:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(7462),i=(a(7294),a(3905));const o={sidebar_position:3},r="PodTransitionRule",l={unversionedId:"operating/manuals/podtransitionrule",id:"version-v0.9/operating/manuals/podtransitionrule",title:"PodTransitionRule",description:"In normal pod lifecycle,  some phases are defined. For example, K8s Pods follow a defined lifecycle\uff0cstarting in the Pending phase, moving through Running if at least one of its primary containers starts OK, and then through either the Succeeded or Failed phases depending on whether any container in the Pod terminated in failure.",source:"@site/versioned_docs/version-v0.9/operating/manuals/podtransitionrule.md",sourceDirName:"operating/manuals",slug:"/operating/manuals/podtransitionrule",permalink:"/docs/operating/manuals/podtransitionrule",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/operating/manuals/podtransitionrule.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1704363490,formattedLastUpdatedAt:"Jan 4, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"operating",previous:{title:"ResourceConsist",permalink:"/docs/operating/manuals/resourceconsist"},next:{title:"PodDecoration",permalink:"/docs/operating/manuals/poddecoration"}},s={},p=[{value:"Rule Definition",id:"rule-definition",level:2},{value:"Available Policy",id:"available-policy",level:3},{value:"maxUnavailable",id:"maxunavailable",level:4},{value:"minAvailable",id:"minavailable",level:4},{value:"Label Check",id:"label-check",level:3},{value:"Webhook",id:"webhook",level:3}],d={toc:p};function c(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"podtransitionrule"},"PodTransitionRule"),(0,i.kt)("p",null,"In normal pod lifecycle,  some phases are defined. For example, K8s Pods follow a defined lifecycle\uff0cstarting in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pending")," phase, moving through ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," if at least one of its primary containers starts ",(0,i.kt)("inlineCode",{parentName:"p"},"OK"),", and then through either the ",(0,i.kt)("inlineCode",{parentName:"p"},"Succeeded")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Failed")," phases depending on whether any container in the Pod terminated in failure."),(0,i.kt)("p",null,"These phase definitions can fulfill basic Pod change scenarios, but it are ambiguous.\nActually, before pod upgrade or ready, it is necessary to have some check mechanisms in place to ensure the safety of pod changes. Fortunately, ",(0,i.kt)("a",{parentName:"p",href:"/docs/operating/concepts/podopslifecycle"},"PodOpsLifecycle")," extends and supports some check stages: ",(0,i.kt)("inlineCode",{parentName:"p"},"PreCheck")," before pod upgrade and ",(0,i.kt)("inlineCode",{parentName:"p"},"PostCheck")," before pod ready."),(0,i.kt)("p",null,"To ensure a more fine-grained and controlled change process for Pods, we introduce custom rules or perform additional tasks as prerequisites for state transitions before the desired state of a Pod is achieved. Similar to the Pod ",(0,i.kt)("inlineCode",{parentName:"p"},"readinessGates"),", where certain conditions must be met for a Pod to be considered readiness. For example, we consider a Pod ready for the ",(0,i.kt)("inlineCode",{parentName:"p"},"PostCheck")," phase only if it has specific labels. For this purpose, we introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"PodTransitionRule")," as a prerequisite for the state transition of a Pod."),(0,i.kt)("h2",{id:"rule-definition"},"Rule Definition"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"PodTransitionRule")," to define a set of transition rules for your workload pods.\nEach rule will be executed at the corresponding stage, and it will be blocked if the conditions are not met."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kusionstack.io/v1alpha1\nkind: PodTransitionRule\nmetadata:\n  name: podtransitionrule-sample\nspec:\n  rules:\n  - availablePolicy:\n      maxUnavailableValue: 50%\n    name: maxUnavailable\n  - stage: PreCheck  # stages are supported by PodOpsLifecycle. Defaults to PreCheck.\n    labelCheck:\n      requires:\n        matchLabels:\n          app.custom/ready: 'true' \n    name: labelCheck\n  - stage: PostCheck\n    webhook:\n      clientConfig:\n        url: https://1.1.1.1:8089/post-stop\n        caBundle: Cg==\n        poll:\n          url: http://1.1.1.1:8089/fetch-result\n          rawQueryKey: task-id   # URL parameter key to carry trace ID when fetching result. Defaults to task-id in form 'QueryUrl=URL?rawQueryKey=<task-id>'\n          intervalSeconds: 5\n          timeoutSeconds: 60\n      failurePolicy: Fail\n      parameters:\n      - key: podIP\n        valueFrom:\n          fieldRef: \n            fieldPath: status.podIP\n    name: webhookCheck\n  selector:        # select pods in effect\n    matchLabels:\n      app: foo\n")),(0,i.kt)("h3",{id:"available-policy"},"Available Policy"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"availablePolicy")," rule defines the availability strategy during the Pod update process."),(0,i.kt)("h4",{id:"maxunavailable"},"maxUnavailable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"availablePolicy:\n  maxUnavailable: \n    value: 50%  # int or string \n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailableValue")," is the maximum number of pods that can be unavailable during the update.\nValue can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).\nAbsolute number is calculated from percentage by rounding down.\nThis can not be 0."),(0,i.kt)("h4",{id:"minavailable"},"minAvailable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"availablePolicy:\n  minAvailable:\n    value: 5  # int or string \n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"minAvailableValue")," is the minimum number of pods that should be available during the update."),(0,i.kt)("h3",{id:"label-check"},"Label Check"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"labelCheck")," rule is used to check if labels are satisfied.\nYou can define your own labels as change check conditions and modify the labels according to your needs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"labelCheck:\n  requires:\n    matchLabels:\n      app.custom/ready: 'true' \n    matchExpressions:\n    - key: app.custom/forbidden \n      operator: DoesNotExist\n")),(0,i.kt)("h3",{id:"webhook"},"Webhook"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook")," is an HTTP callback, based on which a external web application can determine whether a pod can pass this check."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An HTTP POST occurs first when pods entries the configured stage which defaults PreCheck."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"poll")," is provided, this rule then keeps calling polling url to fetch a long running job result. This job can be located by ",(0,i.kt)("inlineCode",{parentName:"li"},"task-id")," returned from the response of the first request.  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"webhook:\n  clientConfig: # custom server config\n    url: https://1.1.1.1:8089/post-stop\n    caBundle: Cg==\n    poll:\n      url: http://1.1.1.1:8089/fetch-result\n      rawQueryKey: task-id\n      intervalSeconds: 5\n      timeoutSeconds: 60\n  failurePolicy: Fail\n  parameters:\n    - key: podIP\n      valueFrom:\n        fieldRef:\n          fieldPath: status.podIP\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Protocol without poll")),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// URL: https://1.1.1.1:8089/post-stop\n// Method: POST\n\n{ \n  "traceId": "<trace-id>",    // <trace-id> is generated by Operating, which can be used to track request\n  "stage": "PreTrafficOff",\n  "ruleName": "webhookCheck",\n    "resources": [            // Information of Pods which are in this stage\n    {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "name": "pod-a",\n      "parameters": {\n        "podIP": "1.0.0.1"    // Customized information users can indicate from rule paramter\n      }\n    },\n    {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "name": "pod-b",\n      "parameters": {\n        "podIP": "1.0.0.2"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": false,\n  "message": "msg", \n  "finishedNames": ["pod-a", "pod-b"]\n}\n')),(0,i.kt)("p",null,"Response ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," indicating all pods approved or not. If it's ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"finishedNames")," field can be used to approve partial pods."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Protocol with poll")),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// URL: https://1.1.1.1:8089/post-stop\n// Method: POST\n\n{ \n  "traceId": "<trace-id>",    // <trace-id> is generated by Operating, which can be used to track request\n  "stage": "PreTrafficOff",\n  "ruleName": "webhookCheck",\n    "resources": [            // Information of Pods which are in this stage\n    {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "name": "pod-a",\n      "parameters": {\n        "podIP": "1.0.0.1"    // Customized information users can indicate from rule paramter\n      }\n    },\n    {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "name": "pod-b",\n      "parameters": {\n        "podIP": "1.0.0.2"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "poll": true,         // required to indicate polling calls is necessary\n  "taskId": <task-id>,  // required to to fetch polling result\n  "message": "msg"\n}\n')),(0,i.kt)("p",null,"Response ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," indicating whether the first request is success or not. If true and field ",(0,i.kt)("inlineCode",{parentName:"p"},"poll")," in response is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," (or field ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," in response is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"), PodTransisionRule will then begin to keep calling poll URL to fetch process result.\nField ",(0,i.kt)("inlineCode",{parentName:"p"},"taskId")," is required for polling. "),(0,i.kt)("p",null,"The request for polling is GET method and in form of ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryUrl=URL?task-id=<task-id>"),". The parameter key in this URL defaults ",(0,i.kt)("inlineCode",{parentName:"p"},"task-id"),", if using ",(0,i.kt)("inlineCode",{parentName:"p"},"poll")," in above response. It would be ",(0,i.kt)("inlineCode",{parentName:"p"},"trace-id")," if using ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," in above response.\nUsers can also indicate the key by field ",(0,i.kt)("inlineCode",{parentName:"p"},"poll.rawQueryKey"),"."),(0,i.kt)("p",null,"The response from polling call is expected like following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "msg",\n  "finished": false,\n  "finishedNames": ["pod-a", "pod-b"]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"success")," is supposed to be true, if there is no error. If all pods is approved, ",(0,i.kt)("inlineCode",{parentName:"p"},"finished")," should be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"finished")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"finishedNames")," can be used to allow partial pods to be approved."))}c.isMDXComponent=!0}}]);
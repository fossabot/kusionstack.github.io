"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5010],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7545:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return b}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="cron_job_spec",s={unversionedId:"reference/model/kusion_kubernetes/api/batch/v1beta1/doc_cron_job_spec",id:"reference/model/kusion_kubernetes/api/batch/v1beta1/doc_cron_job_spec",title:"cron_job_spec",description:"Source: base/pkg/kusionkubernetes/api/batch/v1beta1/cronjobspec.k",source:"@site/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_cron_job_spec.md",sourceDirName:"reference/model/kusion_kubernetes/api/batch/v1beta1",slug:"/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_cron_job_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_cron_job_spec",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_cron_job_spec.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1652156296,formattedLastUpdatedAt:"2022/5/10",frontMatter:{},sidebar:"reference",previous:{title:"cron_job",permalink:"/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_cron_job"},next:{title:"job_template_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_job_template_spec"}},u={},p=[{value:"Schema CronJobSpec",id:"schema-cronjobspec",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cron_job_spec"},"cron_job_spec"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/batch/v1beta1/cron_job_spec.k"},"base/pkg/kusion_kubernetes/api/batch/v1beta1/cron_job_spec.k")),(0,o.kt)("p",null,"This is the cron","_","job","_","spec module in kusion","_","kubernetes.api.batch.v1beta1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-cronjobspec"},"Schema CronJobSpec"),(0,o.kt)("p",null,"CronJobSpec describes how the job execution will look like and when it will actually run."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"concurrencyPolicy"),(0,o.kt)("br",null),'Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn\'t finished yet; - "Replace": cancels currently running job and replaces it with a new one'),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"failedJobsHistoryLimit"),(0,o.kt)("br",null),"The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1."),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"schedule"),(0,o.kt)("br",null),"The schedule in Cron format, see ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Cron"},"https://en.wikipedia.org/wiki/Cron"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"startingDeadlineSeconds"),(0,o.kt)("br",null),"Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones."),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"successfulJobsHistoryLimit"),(0,o.kt)("br",null),"The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 3."),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"suspend"),(0,o.kt)("br",null),"This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false."),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"jobTemplate"),(0,o.kt)("br",null),"Specifies the job that will be created when executing a CronJob."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_job_template_spec#schema-jobtemplatespec"},"JobTemplateSpec")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))))))}b.isMDXComponent=!0}}]);
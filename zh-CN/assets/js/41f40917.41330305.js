"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1098],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(a),m=r,d=b["".concat(p,".").concat(m)]||b[m]||u[m]||o;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},83095:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},i="job_template_spec",c={unversionedId:"reference/model/kusion_kubernetes/api/batch/v1beta1/doc_job_template_spec",id:"reference/model/kusion_kubernetes/api/batch/v1beta1/doc_job_template_spec",title:"job_template_spec",description:"Source: base/pkg/kusionkubernetes/api/batch/v1beta1/jobtemplatespec.k",source:"@site/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_job_template_spec.md",sourceDirName:"reference/model/kusion_kubernetes/api/batch/v1beta1",slug:"/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_job_template_spec",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_job_template_spec",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_job_template_spec.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685599157,formattedLastUpdatedAt:"2023/6/1",frontMatter:{},sidebar:"reference",previous:{title:"cron_job_spec",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_cron_job_spec"},next:{title:"affinity",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_affinity"}},p={},l=[{value:"Schema JobTemplateSpec",id:"schema-jobtemplatespec",level:2},{value:"Attributes",id:"attributes",level:3}],s={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"job_template_spec"},"job_template_spec"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/batch/v1beta1/job_template_spec.k"},"base/pkg/kusion_kubernetes/api/batch/v1beta1/job_template_spec.k")),(0,r.kt)("p",null,"This is the job","_","template","_","spec module in kusion","_","kubernetes.api.batch.v1beta1 package.",(0,r.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,r.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,r.kt)("h2",{id:"schema-jobtemplatespec"},"Schema JobTemplateSpec"),(0,r.kt)("p",null,"JobTemplateSpec describes the data a Job should have when created from a template"),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"metadata"),(0,r.kt)("br",null),"Standard object's metadata of the jobs created from this template. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#metadata"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#metadata")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_object_meta#schema-objectmeta"},"apis.ObjectMeta")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"spec"),(0,r.kt)("br",null),"Specification of the desired behavior of the job. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#spec-and-status"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#spec-and-status")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../v1/doc_job_spec#schema-jobspec"},"v1.JobSpec")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))))}u.isMDXComponent=!0}}]);
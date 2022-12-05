"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6329],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},i="CRD to KCL",s={unversionedId:"reference/cli/openapi/crd-to-kcl",id:"reference/cli/openapi/crd-to-kcl",title:"CRD to KCL",description:"\u547d\u4ee4",source:"@site/docs/reference/cli/openapi/crd-to-kcl.md",sourceDirName:"reference/cli/openapi",slug:"/reference/cli/openapi/crd-to-kcl",permalink:"/docs/reference/cli/openapi/crd-to-kcl",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/openapi/crd-to-kcl.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1670242264,formattedLastUpdatedAt:"12/5/2022",frontMatter:{},sidebar:"reference",previous:{title:"Quick Start",permalink:"/docs/reference/cli/openapi/quick-start"},next:{title:"OpenAPI to KCL",permalink:"/docs/reference/cli/openapi/openapi-to-kcl"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crd-to-kcl"},"CRD to KCL"),(0,a.kt)("p",null,"\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model --crd -f ${your_CRD.yaml} -t ${the_kcl_files_output_dir} --skip-validation\n")),(0,a.kt)("h1",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6587\u4ef6\uff1atest_crontab_CRD.yaml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Deprecated in v1.16 in favor of apiextensions.k8s.io/v1\napiVersion: apiextensions.k8s.io/v1beta1\nkind: CustomResourceDefinition\nmetadata:\n  # name must match the spec fields below, and be in the form: <plural>.<group>\n  name: crontabs.stable.example.com\nspec:\n  # group name to use for REST API: /apis/<group>/<version>\n  group: stable.example.com\n  # list of versions supported by this CustomResourceDefinition\n  versions:\n    - name: v1\n      # Each version can be enabled/disabled by Served flag.\n      served: true\n      # One and only one version must be marked as the storage version.\n      storage: true\n  # either Namespaced or Cluster\n  scope: Namespaced\n  names:\n    # plural name to be used in the URL: /apis/<group>/<version>/<plural>\n    plural: crontabs\n    # singular name to be used as an alias on the CLI and for display\n    singular: crontab\n    # kind is normally the CamelCased singular type. Your resource manifests use this.\n    kind: CronTab\n    # shortNames allow shorter string to match your resource on the CLI\n    shortNames:\n      - ct\n  preserveUnknownFields: false\n  validation:\n    openAPIV3Schema:\n      type: object\n      properties:\n        spec:\n          type: object\n          properties:\n            cronSpec:\n              type: string\n            image:\n              type: string\n            replicas:\n              type: integer\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f test_crontab_CRD.yaml -t ~/ --skip-validation --crd\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u6587\u4ef6\uff1a ~/models/stable_example_com_v1_cron_tab.k")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\nimport kusion_kubernetes.apimachinery.apis\n\n\nschema CronTab:\n    """stable example com v1 cron tab\n    """\n\n    apiVersion: "stable.example.com/v1" = "stable.example.com/v1"\n    """ APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources\n    """\n\n    kind: "CronTab" = "CronTab"\n    """ Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds\n    """\n\n    metadata?: apis.ObjectMeta\n    """ Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata\n    """\n\n    spec?: StableExampleComV1CronTabSpec\n    """spec\n    """\n\n\nschema StableExampleComV1CronTabSpec:\n    """stable example com v1 cron tab spec\n    """\n\n\n    cronSpec?: str\n    """cron spec\n    """\n\n    image?: str\n    """image\n    """\n\n    replicas?: int\n    """replicas\n    """\n\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"configuration",sidebar_label:"Project Configuration"},a="Project Configuration",p={unversionedId:"concepts/project/configuration",id:"version-v0.10/concepts/project/configuration",title:"Project Configuration",description:"Users can add config items of the project in project.yaml, such as the project name, generator type, Prometheus monitoring, etc.",source:"@site/docs_versioned_docs/version-v0.10/3-concepts/1-project/2-configuration.md",sourceDirName:"3-concepts/1-project",slug:"/concepts/project/configuration",permalink:"/docs/v0.10/concepts/project/configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/3-concepts/1-project/2-configuration.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727688217,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:2,frontMatter:{id:"configuration",sidebar_label:"Project Configuration"},sidebar:"kusion",previous:{title:"Overview",permalink:"/docs/v0.10/concepts/project/overview"},next:{title:"Overview",permalink:"/docs/v0.10/concepts/stack/overview"}},c={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-configuration"},"Project Configuration"),(0,o.kt)("p",null,"Users can add config items of the project in ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml"),", such as the project name, generator type, Prometheus monitoring, etc."),(0,o.kt)("p",null,"Here is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The project basic info\nname: helloworld\ngenerator:\n  type: AppConfiguration\nprometheus:\n  operatorMode: True\n  monitorType: Service\n")),(0,o.kt)("p",null,"The config items in ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," are explained below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": The name of the project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"generator"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": The type of the module generator, supports ",(0,o.kt)("inlineCode",{parentName:"li"},"AppConfiguration")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"KCL"),", default is ",(0,o.kt)("inlineCode",{parentName:"li"},"AppConfiguration"),". If using the schema AppConfiguration, set type as AppConfiguration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"prometheus"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"operatorMode"),": Decides whether Kusion runs Prometheus in ",(0,o.kt)("inlineCode",{parentName:"li"},"Operator")," mode. Kusion will generate a ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom Resource")," if it is true, while generate some annotations if it is false"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"monitorType"),": The type of the monitored resource, which can be one of ",(0,o.kt)("inlineCode",{parentName:"li"},"Service")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Pod"))))))}u.isMDXComponent=!0}}]);
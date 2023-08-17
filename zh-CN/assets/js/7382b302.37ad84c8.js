"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),i=n(76775),l=n(91980),d=n(67392),p=n(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,d]=k({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=l??c;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var g=n(72389);const h="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),a=d[n].value;a!==i&&(c(t),l(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:u},o,{className:(0,s.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},17079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(74866),o=n(85162);const i={sidebar_position:2},l="\u5728 Kubernetes \u548c\u4e91\u4e0a\u90e8\u7f72 WordPress \u5e94\u7528",d={unversionedId:"user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",id:"user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",title:"\u5728 Kubernetes \u548c\u4e91\u4e0a\u90e8\u7f72 WordPress \u5e94\u7528",description:"\u672c\u6559\u7a0b\u5c06\u6f14\u793a\u5982\u4f55\u901a\u8fc7 KusionStack \u4e00\u952e\u90e8\u7f72 WordPress \u5e94\u7528 (\u8be5\u5e94\u7528\u540c\u65f6\u4f9d\u8d56 Kubernetes \u548c\u4e91\u5382\u5546 IaaS \u8d44\u6e90)\u3002\u4e0e\u6211\u4eec\u4e4b\u524d\u4ecb\u7ecd\u7684\u90e8\u7f72\u5728 Kubernetes \u4e0a\u7684 Code-City \u5e94\u7528\u6240\u4e0d\u540c\u7684\u662f\uff0cWordPress \u5e94\u7528\u8fd8\u5c06\u4f9d\u8d56\u5173\u7cfb\u578b\u6570\u636e\u5e93\u670d\u52a1 RDS (Relational Database Service) \u4ee5\u4fbf\u4e3a WordPress \u7f51\u7ad9\u7684\u6587\u7ae0\u3001\u9875\u9762\u3001\u8bc4\u8bba\u3001\u7528\u6237\u7b49\u4fe1\u606f\u63d0\u4f9b\u4e91\u7aef\u6570\u636e\u5e93\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds.md",sourceDirName:"user_docs/getting-started/usecases",slug:"/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",permalink:"/zh-CN/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds.md",tags:[],version:"current",lastUpdatedBy:"zoumo",lastUpdatedAt:1692261210,formattedLastUpdatedAt:"2023\u5e748\u670817\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",permalink:"/zh-CN/docs/user_docs/getting-started/usecases/deliver-first-project"},next:{title:"kcl",permalink:"/zh-CN/docs/user_docs/getting-started/kcl"}},p={},c=[{value:"\u5b8c\u6574\u6f14\u793a",id:"\u5b8c\u6574\u6f14\u793a",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u67e5\u770b\u9879\u76ee\u7ed3\u6784\u4e0e\u914d\u7f6e\u4ee3\u7801",id:"\u67e5\u770b\u9879\u76ee\u7ed3\u6784\u4e0e\u914d\u7f6e\u4ee3\u7801",level:2},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:3},{value:"\u914d\u7f6e\u4ee3\u7801",id:"\u914d\u7f6e\u4ee3\u7801",level:3},{value:"\u90e8\u7f72 WordPress \u5e94\u7528",id:"\u90e8\u7f72-wordpress-\u5e94\u7528",level:2},{value:"\u9a8c\u8bc1 WordPress \u5e94\u7528\u670d\u52a1",id:"\u9a8c\u8bc1-wordpress-\u5e94\u7528\u670d\u52a1",level:2},{value:"\u4fee\u6539 WordPress \u5e94\u7528\u914d\u7f6e",id:"\u4fee\u6539-wordpress-\u5e94\u7528\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u5408\u6cd5\u6027\u68c0\u67e5",id:"\u914d\u7f6e\u5408\u6cd5\u6027\u68c0\u67e5",level:3},{value:"\u914d\u7f6e\u4fee\u6539\u751f\u6548",id:"\u914d\u7f6e\u4fee\u6539\u751f\u6548",level:3},{value:"\u5220\u9664 WordPress \u5e94\u7528",id:"\u5220\u9664-wordpress-\u5e94\u7528",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5728-kubernetes-\u548c\u4e91\u4e0a\u90e8\u7f72-wordpress-\u5e94\u7528"},"\u5728 Kubernetes \u548c\u4e91\u4e0a\u90e8\u7f72 WordPress \u5e94\u7528"),(0,r.kt)("p",null,"\u672c\u6559\u7a0b\u5c06\u6f14\u793a\u5982\u4f55\u901a\u8fc7 KusionStack \u4e00\u952e\u90e8\u7f72 WordPress \u5e94\u7528 (\u8be5\u5e94\u7528\u540c\u65f6\u4f9d\u8d56 Kubernetes \u548c\u4e91\u5382\u5546 IaaS \u8d44\u6e90)\u3002\u4e0e\u6211\u4eec\u4e4b\u524d\u4ecb\u7ecd\u7684\u90e8\u7f72\u5728 Kubernetes \u4e0a\u7684 Code-City \u5e94\u7528\u6240\u4e0d\u540c\u7684\u662f\uff0cWordPress \u5e94\u7528\u8fd8\u5c06\u4f9d\u8d56\u5173\u7cfb\u578b\u6570\u636e\u5e93\u670d\u52a1 RDS (Relational Database Service) \u4ee5\u4fbf\u4e3a WordPress \u7f51\u7ad9\u7684\u6587\u7ae0\u3001\u9875\u9762\u3001\u8bc4\u8bba\u3001\u7528\u6237\u7b49\u4fe1\u606f\u63d0\u4f9b\u4e91\u7aef\u6570\u636e\u5e93\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h2",{id:"\u5b8c\u6574\u6f14\u793a"},"\u5b8c\u6574\u6f14\u793a"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u89c6\u9891\u5c06\u4e3a\u60a8\u5b8c\u6574\u5730\u6f14\u793a\u5982\u4f55\u901a\u8fc7 Kusion \u547d\u4ee4\u884c\u5de5\u5177\u5b8c\u6210 WordPress \u5e94\u7528\u4ee5\u53ca\u76f8\u5173\u963f\u91cc\u4e91 RDS \u8d44\u6e90\u7684\u4e00\u952e\u90e8\u7f72\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QHzKKsoKLQ0",title:"kusionstack-delivery-wordpress-application"},(0,r.kt)("img",{alt:"kusionstack-delivery-wordpress-application",src:n(82794).Z,width:"889",height:"500"}))),(0,r.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"\u5b89\u88c5 Kusion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"\u90e8\u7f72 Kubernetes \u96c6\u7fa4")," \u6216 ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"\u5b89\u88c5 Terraform")),(0,r.kt)("li",{parentName:"ul"},"\u51c6\u5907\u4e00\u4e2a\u4e91\u670d\u52a1\u8d26\u53f7\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u5177\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"VPCFullAccess")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"RDSFullAccess")," \u6743\u9650\u7684\u7528\u6237\uff0c\u4ee5\u4f7f\u7528\u5176\u5173\u7cfb\u578b\u6570\u636e\u5e93\u670d\u52a1\uff0c\u8be5\u7528\u6237\u53ef\u4ee5\u5728\u4e91\u670d\u52a1\u63a7\u5236\u53f0\u4e2d\u8eab\u4efd\u8bbf\u95ee\u7ba1\u7406 (Identity and Access Management, IAM) \u754c\u9762\u8fdb\u884c\u521b\u5efa\u548c\u7ba1\u7406")),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u5c06\u8be5\u7528\u6237\u7684 AccessKey \u548c SecretKey \u914d\u7f6e\u4e3a\u73af\u5883\u53d8\u91cf\uff1a"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="AKIAQZDxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="oE/xxxx" # replace it with your SecretKey\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aws iam account",src:n(24838).Z,width:"2874",height:"1398"}))),(0,r.kt)(o.Z,{value:"\u963f\u91cc\u4e91",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export ALICLOUD_ACCESS_KEY="LTAI5txxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="nxuowIxxx" # replace it with your SecretKey\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alicloud iam account",src:n(73725).Z,width:"1500",height:"629"})))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0cKusion \u8fd8\u63d0\u4f9b\u654f\u611f\u6570\u636e\u7ba1\u7406\u5de5\u5177\uff0c\u7528\u4ee5\u52a0\u5bc6\u5b58\u50a8\u4e0a\u8ff0\u63d0\u5230\u7684 AccessKey \u548c SecretKey\u3002")),(0,r.kt)("h2",{id:"\u67e5\u770b\u9879\u76ee\u7ed3\u6784\u4e0e\u914d\u7f6e\u4ee3\u7801"},"\u67e5\u770b\u9879\u76ee\u7ed3\u6784\u4e0e\u914d\u7f6e\u4ee3\u7801"),(0,r.kt)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u514b\u9686 Konfig \u4ed3\u5e93\u5e76\u8fdb\u5165 Konfig \u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/konfig.git && cd konfig\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"appops/")," \u76ee\u5f55\u4e0b\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress")," \u9879\u76ee\uff0c\u7531\u4ee5\u4e0b\u6587\u4ef6\u7ec4\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd appops/wordpress && tree\n.\n\u251c\u2500\u2500 README.md                       // \u8bf4\u660e\u6587\u6863\n\u251c\u2500\u2500 base                            // \u5404\u73af\u5883\u901a\u7528\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 base.k                      // \u5e94\u7528\u7684\u73af\u5883\u901a\u7528\u914d\u7f6e\n\u251c\u2500\u2500 dev                             // \u73af\u5883\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 ci-test                     // CI \u6d4b\u8bd5\u76ee\u5f55\uff0c\u653e\u7f6e\u6d4b\u8bd5\u811a\u672c\u548c\u6570\u636e\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml           // \u6d4b\u8bd5\u6570\u636e\u548c\u7f16\u8bd1\u6587\u4ef6\u914d\u7f6e\n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml      // \u671f\u671b\u7684 YAML\uff0c\u53ef\u901a\u8fc7 make \u66f4\u65b0\n\u2502   \u251c\u2500\u2500 kcl.yaml                    // \u5f53\u524d Stack \u7684\u591a\u6587\u4ef6\u7f16\u8bd1\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 main.k                      // \u5e94\u7528\u5728\u5f53\u524d\u73af\u5883\u7684\u5e94\u7528\u5f00\u53d1\u8005\u5173\u6ce8\u7684\u914d\u7f6e\u6e05\u5355\n\u2502   \u251c\u2500\u2500 platform.k                  // \u5e94\u7528\u5728\u5f53\u524d\u73af\u5883\u7684\u5e73\u53f0\u5f00\u53d1\u8005\u5173\u6ce8\u7684\u914d\u7f6e\u6e05\u5355\n\u2502   \u2514\u2500\u2500 stack.yaml                  // Stack \u5143\u4fe1\u606f\n\u2514\u2500\u2500 project.yaml                    // Project \u5143\u4fe1\u606f\n\n3 directories, 9 files\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5173\u4e8e Konfig \u9879\u76ee\u76ee\u5f55\u7ed3\u6784\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig \u57fa\u672c\u6982\u5ff5"),"\u3002")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u4ee3\u7801"},"\u914d\u7f6e\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\nimport base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.storage\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\n# And main.k is for the configurations in concern of application developers. \n\n# defination of wordpress application frontend model\nwordpress: frontend.Server {\n    # specify application image\n    image = "wordpress:4.8-apache"\n\n    # use cloud database for the storage of wordpress\n    database = storage.DataBase {\n        # choose aws_rds as the cloud database\n        dataBaseType = "aws_rds"\n        dataBaseAttr = storage.DBAttr {\n            # choose the engine type and version of the database\n            databaseEngine = "MySQL"\n            databaseEngineVersion = "5.7"\n            # create database account\n            databaseAccountName = "root"\n            databaseAccountPassword = option("db_password")\n            # create internet access for the cloud database\n            internetAccess = True\n        }\n    }\n\n    # NOTE: this configuration is an example of adding an environment variable in the main container\n    # uncommenting and re-deploying will add the environment variable "ENV_ADD_EXAMPLE" in the \n    # main container and the differnces will be shown by the command of "kusion apply"\n    mainContainer: {\n        env += [\n            {\n                name = "ENV_ADD_EXAMPLE"\n                value = "wordpress-example"\n            }\n        ]\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# dev/platform.k\nimport base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.storage\nimport base.pkg.kusion_models.kube.metadata\nimport base.pkg.kusion_clouds.aws_backend.aws_config\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\n# And platform.k is for the configurations in concern of platform developers. \n\n_cloudResourceName = "{}-{}".format(metadata.__META_APP_NAME, metadata.__META_ENV_TYPE_NAME).lower()\n_awsDependencyPrefix = "$kusion_path." + aws_config.awsProvider.namespace + ":" + aws_config.awsProvider.name + ":"\n\n# defination of wordpress application frontend model\nwordpress: frontend.Server {\n    # add environment variable in main container with implicit alicloud resource dependency\n    mainContainer: {\n        env += [\n            {\n                name = "WORDPRESS_DB_HOST"\n                value = _awsDependencyPrefix + aws_config.awsDBInstanceMeta.type + ":" + _cloudResourceName + ".address"\n            }\n        ]\n    }\n\n    # supplement database related configuration code on the platform side\n    database: storage.DataBase {\n        dataBaseAttr: storage.DBAttr {\n            # specify instance type for aws or alicloud rds\n            # for aws rds\n            instanceType = "db.t3.micro" \n\n            # for alicloud rds\n            # instanceType = "mysql.n2.serverless.1c" \n\n            # specify cloud charge type for alicloud rds\n            # extraMap = {\n            #     "cloudChargeType": "Serverless"\n            # }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u60a8\u6240\u9700\u8981\u5173\u6ce8\u7684\u914d\u7f6e\u4ee3\u7801\u6587\u4ef6\u4e3b\u8981\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/platform.k"),"\u3002\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev/main.k")," \u5b58\u653e\u4e86 WordPress \u5e94\u7528\u5728 dev \u8fd9\u4e2a\u73af\u5883\u4e2d ",(0,r.kt)("strong",{parentName:"li"},"Developer")," \u6240\u9700\u8981\u5173\u6ce8\u7684\u914d\u7f6e\u6e05\u5355\uff0c\u9664\u4e86\u5e94\u7528\u5bb9\u5668\u955c\u50cf\u5916\uff0c\u8fd8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"frontend.Server.databse")," \u5c5e\u6027\u5206\u914d\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"storage.DataBase")," \u7c7b\u578b\u7684\u5b9e\u4f8b\uff0c\u4ece\u800c\u4e3a WordPress \u5e94\u7528\u7684\u90e8\u7f72\u58f0\u660e\u4e86\u4e00\u4e2a\u4ee5 MySQL \u4f5c\u4e3a\u5f15\u64ce\u7684 RDS \u6570\u636e\u5e93\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev/platform.k")," \u5b58\u653e\u4e86 WordPress \u5e94\u7528\u5728 dev \u8fd9\u4e2a\u73af\u5883\u4e2d ",(0,r.kt)("strong",{parentName:"li"},"Platform")," \u6240\u9700\u8981\u5173\u6ce8\u7684\u914d\u7f6e\u6e05\u5355\uff0c\u6b64\u5904\u4e3b\u8981\u662f\u4e3a WordPress \u5e94\u7528\u5bb9\u5668\u6307\u5b9a\u4e86\u5f85\u8fde\u63a5\u7684\u4e91\u6570\u636e\u5e93\u57df\u540d\u4ee5\u53ca RDS \u5b9e\u4f8b\u7c7b\u578b\uff0c\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"dev/platform.k")," \u4e2d\u7533\u660e RDS \u6536\u8d39\u7c7b\u578b\u7b49\u914d\u7f6e\uff1b")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5f97\u76ca\u4e8e KCL \u7684\u53d8\u91cf\u3001\u51fd\u6570\u3001\u6a21\u578b\u5b9a\u4e49\u7b49\u9ad8\u7ea7\u529f\u80fd\uff0c\u6211\u4eec\u5c06\u4e91\u670d\u52a1\u7684 RDS \u8d44\u6e90\u8fdb\u884c\u4e86\u62bd\u8c61\u548c\u5c01\u88c5\uff0c\u5c4f\u853d\u4e86\u8bb8\u591a\u5e94\u7528\u5f00\u53d1\u8005\u65e0\u9700\u611f\u77e5\u7684\u5c5e\u6027 (\u6bd4\u5982 RDS \u80cc\u540e VPC \u548c vSwitch \u7684\u7f51\u6bb5)\uff0cDeveloper \u53ea\u9700\u5728\u524d\u7aef\u6a21\u578b\u5b9e\u4f8b\u4e2d\u586b\u5199\u51e0\u4e2a\u5fc5\u8981\u7684\u5b57\u6bb5\u5373\u53ef\u5b8c\u6210\u5bf9 RDS \u8d44\u6e90\u7684\u58f0\u660e\uff0c\u4ece\u800c\u53ef\u4ee5\u66f4\u81ea\u7531\u3001\u7075\u6d3b\u3001\u9ad8\u6548\u5730\u7ec4\u7ec7\u5e94\u7528\u914d\u7f6e\u3002\u6b64\u5916\uff0c\u5728 Konfig \u5927\u5e93\u4e2d\u5171\u540c\u7f16\u5199\u914d\u7f6e\u4ee3\u7801\u7684\u534f\u4f5c\u6a21\u5f0f\u4e0b\uff0c\u53ef\u80fd\u6765\u81ea\u4e8e\u4e0d\u540c\u56e2\u961f\u7684 Developer \u548c Platform \u80fd\u591f\u5404\u53f8\u5176\u804c\uff0c\u4e0d\u540c\u7684\u89d2\u8272\u53ef\u4ee5\u4ec5\u5173\u6ce8\u81ea\u5df1\u8d1f\u8d23\u7684\u914d\u7f6e\u4ee3\u7801\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7814\u53d1\u4e0e\u8fd0\u7ef4\u7684\u534f\u4f5c\u6548\u7387\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u6709\u5173Konfig\u6a21\u578b\u7684\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig \u6a21\u578b\u4ecb\u7ecd"),"\u3002")),(0,r.kt)("h2",{id:"\u90e8\u7f72-wordpress-\u5e94\u7528"},"\u90e8\u7f72 WordPress \u5e94\u7528"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u884c\u5b8c\u6210 WordPress \u5e94\u7528\u7684\u4e00\u952e\u90e8\u7f72\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd appops/wordpress/dev && kusion apply --yes\n")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply the wordpress application with aws rds",src:n(87103).Z,width:"2276",height:"766"}))),(0,r.kt)(o.Z,{value:"\u963f\u91cc\u4e91",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply the wordpress application with alicloud rds",src:n(30263).Z,width:"1906",height:"926"})))),(0,r.kt)("p",null,"\u7b49\u5f85\u6240\u6709\u8d44\u6e90\u5747\u8c03\u548c\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u672c\u5730\u7aef\u53e3 (\u4f8b\u5982 12345) \u8f6c\u53d1\u5230\u96c6\u7fa4\u4e2d\u7684 WordPress \u524d\u7aef\u670d\u52a1\u7aef\u53e3 (80): "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n wordpress-example svc/wordpress 12345:80\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubectl port-forward for wordpress",src:n(86535).Z,width:"992",height:"150"})),(0,r.kt)("h2",{id:"\u9a8c\u8bc1-wordpress-\u5e94\u7528\u670d\u52a1"},"\u9a8c\u8bc1 WordPress \u5e94\u7528\u670d\u52a1"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u9a8c\u8bc1\u4e00\u4e0b\u521a\u521a\u90e8\u7f72\u7684 WordPress \u7ad9\u70b9\u670d\u52a1\uff0c\u53ca\u5176\u6240\u4f9d\u8d56\u7684 RDS \u8d44\u6e90\u7684\u521b\u5efa\u60c5\u51b5\uff0c\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee\u521a\u521a\u914d\u7f6e\u7684\u672c\u5730\u8f6c\u53d1\u7aef\u53e3 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:12345"},"http://localhost:12345")," \u5373\u53ef\u5f00\u59cb WordPress \u7ad9\u70b9\u7684\u4f7f\u7528\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wordpress site page",src:n(85773).Z,width:"1500",height:"803"})),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u767b\u5f55\u4e91\u670d\u52a1\u63a7\u5236\u53f0\u9875\u9762\uff0c\u67e5\u770b\u6211\u4eec\u521a\u521a\u521b\u5efa\u7684 RDS \u8d44\u6e90\u5b9e\u4f8b\uff1a"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aws rds instance",src:n(68678).Z,width:"2876",height:"964"}),"\n",(0,r.kt)("img",{alt:"aws rds instance detailed information",src:n(86915).Z,width:"1224",height:"274"}))),(0,r.kt)(o.Z,{value:"\u963f\u91cc\u4e91",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alicloud rds instance",src:n(34811).Z,width:"1500",height:"748"})))),(0,r.kt)("h2",{id:"\u4fee\u6539-wordpress-\u5e94\u7528\u914d\u7f6e"},"\u4fee\u6539 WordPress \u5e94\u7528\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u5408\u6cd5\u6027\u68c0\u67e5"},"\u914d\u7f6e\u5408\u6cd5\u6027\u68c0\u67e5"),(0,r.kt)("p",null,"\u4f7f\u7528 KCL \u7f16\u5199\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u5929\u7136\u5177\u5907\u5bf9\u914d\u7f6e\u5b57\u6bb5\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u7684\u80fd\u529b\uff0c\u6b64\u5916\u8fd8\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"assert"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"check")," \u7b49\u5173\u952e\u5b57\u5b9e\u73b0\u914d\u7f6e\u5b57\u6bb5\u7684\u6821\u9a8c\u903b\u8f91\uff0c\u4ece\u800c\u80fd\u66f4\u52a0\u65b9\u4fbf\u5730\u5728\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u7f16\u5199\u65f6\u5c31\u53d1\u73b0\u6f5c\u5728\u7684\u95ee\u9898\uff0c\u51cf\u5c0f\u9519\u8bef\u914d\u7f6e\u751f\u6548\u5e26\u6765\u7684\u98ce\u9669\u3002"),(0,r.kt)("p",null,"\u5728\u521b\u5efa RDS \u8d44\u6e90\u65f6\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7c7b\u578b\u7684\u4e91\u670d\u52a1\u5382\u5546\uff0c\u6211\u4eec\u53ef\u4ee5\u58f0\u660e\u76f8\u5e94\u7684 RDS \u5b9e\u4f8b\u7c7b\u578b\uff0cKonfig \u540e\u7aef\u6a21\u578b\u5df2\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"assert")," \u5173\u952e\u5b57\u6dfb\u52a0\u4e86\u5bf9 RDS \u5b9e\u4f8b\u7c7b\u578b\u7684\u6821\u9a8c\u903b\u8f91\uff0c\u56e0\u6b64\uff0c\u5f53\u6211\u4eec\u4e0d\u5c0f\u5fc3\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/platform.k")," \u4e2d\u4fee\u6539 RDS \u5b9e\u4f8b\u7c7b\u578b\u4e3a\u4e00\u4e2a\u65e0\u6548\u7684\u503c\u65f6\uff0cKusion \u5728\u751f\u6548\u524d\u7684\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5c31\u5c06\u629b\u51fa\u76f8\u5e94\u7684\u9519\u8bef\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KCL Assertion Failure",src:n(6746).Z,width:"1962",height:"1272"})),(0,r.kt)("h3",{id:"\u914d\u7f6e\u4fee\u6539\u751f\u6548"},"\u914d\u7f6e\u4fee\u6539\u751f\u6548"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u4e2d\u7684\u914d\u7f6e\u4ee3\u7801\uff0c\u5728\u4e3b\u5bb9\u5668\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u5728\u4f7f\u7528 kusion apply \u91cd\u65b0\u4f7f\u914d\u7f6e\u751f\u6548\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 Kusion \u547d\u4ee4\u884c\u5de5\u5177",(0,r.kt)("strong",{parentName:"p"},"\u4e09\u8def\u5b9e\u65f6\u5dee\u5f02\u6bd4\u5bf9 (3-way diff)")," \u7684\u80fd\u529b\u67e5\u770b\u5230\u76f8\u5e94\u8d44\u6e90\u7684\u53d8\u66f4\u9884\u89c8 (\u6ce8\uff1a\u4e3a\u4e86\u5c55\u793a\u6548\u679c\uff0c\u6b64\u5904\u6211\u4eec\u5ffd\u7565 metadata.managedFields \u8fd9\u4e2a\u5b57\u6bb5\u7684\u53d8\u66f4)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\n# ...\n\nwordpress: frontend.Server {\n    # Some unchanged codes are omitted\n    # image = ...\n    # database = storage.DataBase{...}\n    \n    # NOTE: this configuration is an example of adding an environment variable in the main container\n    # uncommenting and re-deploying will add the environment variable "ENV_ADD_EXAMPLE" in the \n    # main container and the differnces will be shown by the command of "kusion apply"\n    mainContainer: {\n        env += [\n            {\n                name = "ENV_ADD_EXAMPLE"\n                value = "wordpress-example"\n            }\n        ]\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'kusion apply --ignore-fields "metadata.managedFields"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion 3-way diff",src:n(56535).Z,width:"1902",height:"1470"})),(0,r.kt)("h2",{id:"\u5220\u9664-wordpress-\u5e94\u7528"},"\u5220\u9664 WordPress \u5e94\u7528"),(0,r.kt)("p",null,"\u60a8\u53ef\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u884c\u5b8c\u6210 WordPress \u5e94\u7528\u53ca RDS \u76f8\u5173\u8d44\u6e90\u7684\u4e00\u952e\u5220\u9664\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion destroy wordpress with aws rds",src:n(37589).Z,width:"2184",height:"730"}))),(0,r.kt)(o.Z,{value:"\u963f\u91cc\u4e91",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion destroy wordpress with alicloud rds",src:n(75775).Z,width:"1904",height:"896"})))),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u672c\u6559\u7a0b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 KusionStack \u4e00\u952e\u90e8\u7f72\u4e00\u4e2a\u540c\u65f6\u4f9d\u8d56 Kubernetes \u548c\u4e91 RDS \u8d44\u6e90\u7684 WordPress \u5e94\u7528\u3002\u5728\u8fdb\u884c\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u7684\u7f16\u5199\u548c\u751f\u6548\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u7ed3\u5408\u4e86 KCL \u914d\u7f6e\u7b56\u7565\u8bed\u8a00\u3001Konfig \u914d\u7f6e\u4ee3\u7801\u5927\u5e93\u4ee5\u53ca Kusion \u6267\u884c\u5f15\u64ce\u7684 KusionStack \u5e94\u7528\u8fd0\u7ef4\u4ea7\u54c1\u5177\u5907\u4e0b\u8ff0\u4f18\u52bf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301\u6df7\u5408\u8d44\u6e90\u7f16\u6392"),": \u4f7f\u7528 KCL \u7f16\u5199\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u8d44\u6e90\u8fdb\u884c\u7edf\u4e00\u7684\u7f16\u6392\u4e0e\u7ba1\u7406\uff0c\u793a\u4f8b\u4e2d\u4f7f\u7528\u4e86 Kubernetes \u548c\u4e91\u5382\u5546 IaaS \u8d44\u6e90\u7684 WordPress \u5e94\u7528\u53ef\u4ee5\u5728\u4e00\u4efd KCL \u4ee3\u7801\u4e2d\u5b8c\u6210\u58f0\u660e\uff0c\u4ece\u800c\u53ef\u4ee5\u4e00\u952e\u62c9\u8d77\u6240\u6709\u4f9d\u8d56\uff0c\u5b9e\u73b0\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\u8fd0\u7ef4\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u63d0\u4f9b\u5e94\u7528\u6a21\u578b\u62bd\u8c61"),": \u4f7f\u7528 KCL \u5185\u7f6e\u7684\u53d8\u91cf\u3001\u51fd\u6570\u4ee5\u53ca\u6a21\u578b\u5b9a\u4e49\u7b49\u9ad8\u7ea7\u529f\u80fd\uff0c\u53ef\u4ee5\u5bf9\u5e94\u7528\u6240\u9700\u7684\u8d44\u6e90\u8fdb\u884c\u62bd\u8c61\u548c\u5c01\u88c5\uff0c\u5c4f\u853d\u6389\u5e94\u7528\u5f00\u53d1\u8005\u65e0\u9700\u611f\u77e5\u7684\u5c5e\u6027\uff0cDeveloper \u53ea\u9700\u5728\u524d\u7aef\u6a21\u578b\u5b9e\u4f8b\u4e2d\u586b\u5199\u51e0\u4e2a\u5fc5\u8981\u7684\u5b57\u6bb5\u5373\u53ef\u5b8c\u6210\u5bf9\u6240\u9700\u8d44\u6e90\u7684\u58f0\u660e\uff0c\u4ece\u800c\u53ef\u4ee5\u66f4\u81ea\u7531\u3001\u7075\u6d3b\u3001\u9ad8\u6548\u5730\u7ec4\u7ec7\u5e94\u7528\u914d\u7f6e\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u591a\u56e2\u961f\u591a\u89d2\u8272\u534f\u4f5c"),": \u5728 Konfig \u5927\u5e93\u4e2d\u5171\u540c\u7f16\u5199\u914d\u7f6e\u4ee3\u7801\u7684\u534f\u4f5c\u6a21\u5f0f\u4e0b\uff0c\u53ef\u80fd\u6765\u81ea\u4e8e\u4e0d\u540c\u56e2\u961f\u7684 Developer \u548c Platform \u80fd\u591f\u5404\u53f8\u5176\u804c\uff0c\u4e0d\u540c\u7684\u89d2\u8272\u53ef\u4ee5\u4ec5\u5173\u6ce8\u81ea\u5df1\u8d1f\u8d23\u7684\u914d\u7f6e\u4ee3\u7801\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7814\u53d1\u4e0e\u8fd0\u7ef4\u7684\u534f\u4f5c\u6548\u7387\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u98ce\u9669\u6821\u9a8c\u5de6\u79fb"),": \u4f7f\u7528 KCL \u7f16\u5199\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u5929\u7136\u5177\u5907\u914d\u7f6e\u5b57\u6bb5\u7c7b\u578b\u68c0\u67e5\u7684\u80fd\u529b\uff0c\u6b64\u5916\u8fd8\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"assert"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"check")," \u7b49\u5173\u952e\u5b57\u5b9e\u73b0\u914d\u7f6e\u6821\u9a8c\u903b\u8f91\uff0c\u4ece\u800c\u80fd\u66f4\u52a0\u65b9\u4fbf\u5730\u5728\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u7f16\u5199\u65f6\u5c31\u53d1\u73b0\u6f5c\u5728\u7684\u95ee\u9898\uff0c\u51cf\u5c0f\u9519\u8bef\u914d\u7f6e\u751f\u6548\u5e26\u6765\u7684\u98ce\u9669\uff0c\u540c\u65f6\uff0cKusion \u8fd8\u53ef\u4ee5\u5728\u914d\u7f6e\u751f\u6548\u524d\u63d0\u4f9b",(0,r.kt)("strong",{parentName:"p"},"\u4e09\u8def\u5b9e\u65f6\u5dee\u5f02\u6bd4\u5bf9"),"\u7684\u80fd\u529b\uff0c\u7528\u4ee5\u9884\u89c8\u914d\u7f6e\u7684\u53d8\u66f4\uff0c\u4ece\u800c\u63d0\u4f9b\u4e00\u4e2a\u66f4\u52a0\u5b89\u5168\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002"))))}m.isMDXComponent=!0},34811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alicloud-rds-instance-88d560e7fdab77f7d83592ae1ded6866.png"},87103:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-application-with-aws-rds-580915491e85e04d050cf19bbf0f96cd.png"},30263:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-application-886535bde5df29d976078592e19c8354.png"},6746:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assert-rds-instance-type-76dc6d198327400aa1a60e93b68043bb.png"},24838:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-iam-account-2216105e7fa18fb2f7bf4be7e19f98bd.png"},86915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-rds-instance-detail-e0f1e737f54491f738769b152de96806.png"},68678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-rds-instance-12f87b94fbc4a76319d8d9d39fd465d2.png"},56535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-3-way-diff-690063924d7b01f71b0e3a7bfb6079cb.png"},37589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-destroy-wordpress-with-aws-rds-304a7051e2646ad78490fb641fe5a776.png"},75775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-destroy-wordpress-c62de368f65a6f991b0d9705d67f1f83.png"},73725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/set-rds-access-9347ae09377aeb94d9f6d1e5d8688ab5.png"},86535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-port-forward-ef4d8aa9652b51a59cbf13b66738ad24.png"},85773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-site-page-ef650e640399209d1eec5e6dfe88c454.png"},82794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-video-cover-254599c8ae4456128ad18a86f63cab3d.png"}}]);
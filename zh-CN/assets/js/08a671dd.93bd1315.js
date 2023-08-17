"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),u=n(12466),l=n(76775),i=n(91980),s=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[u,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,s]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var k=n(72389);const h="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(d(t),i(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},u,{className:(0,o.Z)("tabs__item",g,null==u?void 0:u.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function C(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return a.createElement(C,(0,r.Z)({key:String(t)},e))}},99726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),u=n(85162);const l={sidebar_position:2},i="\u4f7f\u7528 VS Code Kusion",s={unversionedId:"user_docs/getting-started/kusion-ide",id:"user_docs/getting-started/kusion-ide",title:"\u4f7f\u7528 VS Code Kusion",description:"VS Code Kusion extension \u63d0\u4f9b\u4e86\u5f88\u65b9\u4fbf\u7684\u64cd\u4f5c\u6765\u5c06 KCL \u914d\u7f6e\u5e26\u5230\u5230\u4e91\u7aef\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/getting-started/kusion-ide.mdx",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/kusion-ide",permalink:"/zh-CN/docs/user_docs/getting-started/kusion-ide",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/kusion-ide.mdx",tags:[],version:"current",lastUpdatedBy:"zoumo",lastUpdatedAt:1692261210,formattedLastUpdatedAt:"2023\u5e748\u670817\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/zh-CN/docs/user_docs/getting-started/install"},next:{title:"\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",permalink:"/zh-CN/docs/user_docs/getting-started/usecases/deliver-first-project"}},c={},d=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",level:2},{value:"\u5f00\u59cb\u4ea4\u4ed8\u60a8\u7684\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f",id:"\u5f00\u59cb\u4ea4\u4ed8\u60a8\u7684\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"1. \u5efa\u6a21: \u5b9a\u4e49\u4f60\u7684\u6a21\u578b",id:"1-\u5efa\u6a21-\u5b9a\u4e49\u4f60\u7684\u6a21\u578b",level:3},{value:"2. \u914d\u7f6e: \u65b0\u5efa Kusion \u9879\u76ee",id:"2-\u914d\u7f6e-\u65b0\u5efa-kusion-\u9879\u76ee",level:3},{value:"3. \u9884\u89c8\uff1aYAML \u8868\u793a",id:"3-\u9884\u89c8yaml-\u8868\u793a",level:3},{value:"4.\u8fd0\u884c\u65f6\u5dee\u5f02\u548c\u4e0a\u7ebf",id:"4\u8fd0\u884c\u65f6\u5dee\u5f02\u548c\u4e0a\u7ebf",level:3}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528-vs-code-kusion"},"\u4f7f\u7528 VS Code Kusion"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=KusionStack.kusion"},"VS Code Kusion extension")," \u63d0\u4f9b\u4e86\u5f88\u65b9\u4fbf\u7684\u64cd\u4f5c\u6765\u5c06 KCL \u914d\u7f6e\u5e26\u5230\u5230\u4e91\u7aef\u3002"),(0,a.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u4e91 IDE\u4e0a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/codespaces"},"GitHub Codespaces")," \u7684 VS Code Kusion \u5f00\u59cb\uff0c\u6216\u8005\u60a8\u53ef\u4ee5\u5c06\u5b83\u5b89\u88c5\u5728\u684c\u9762\u7248 VS Code \u4e0a\u3002"),(0,a.kt)(o.Z,{className:"unique-tabs",defaultValue:"cloudide",values:[{label:"GitHub Codespaces",value:"cloudide"},{label:"\u684c\u9762\u7aef VS Code",value:"desktop"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"cloudide",mdxType:"TabItem"},(0,a.kt)("p",null,"\u606d\u559c\uff01 \ud83c\udf89\ud83c\udf89 \u60a8\u65e0\u9700\u8bbe\u7f6e\u73af\u5883\uff01 \u60a8\u53ef\u4ee5\u76f4\u63a5",(0,a.kt)("a",{parentName:"p",href:"https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=488867056&machine=standardLinux32gb&devcontainer_path=.devcontainer.json"},"\u4f7f\u7528\u5185\u7f6e\u7684 Kusion \u521b\u5efa\u5de5\u4f5c\u533a"),"\u3002")),(0,a.kt)(u.Z,{value:"desktop",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u5728\u60a8\u7684\u7cfb\u7edf\u4e0a\u5b89\u88c5 Kusion\u3002 \u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u5b89\u88c5 Kusion"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u4e3a Visual Studio Code \u5b89\u88c5 Kusion \u6269\u5c55\u3002 \u6b64\u6269\u5c55\u9700\u8981 VS Code 1.68+\u7248\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u60a8\u9700\u8981\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u5e76\u5c06 kubeConfig \u6587\u4ef6\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\u4e0b\u3002"))),(0,a.kt)("h2",{id:"\u5f00\u59cb\u4ea4\u4ed8\u60a8\u7684\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f"},"\u5f00\u59cb\u4ea4\u4ed8\u60a8\u7684\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u8ba9\u60a8\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 VS Code Kusion Extension \u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://wettel.github.io/codecity.html"},"code city")," \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4ed8\u5230\u4e91\u7aef\u3002 \u6240\u6709\u6b65\u9aa4\u90fd\u53ef\u4ee5\u5728 VS Code \u4e2d\u7684 Kusion ",(0,a.kt)("inlineCode",{parentName:"p"},"Getting started with Kusion")," \u4e2d\u4ea4\u4e92\u5f0f\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,"\u8981\u67e5\u627e Kusion walkthrough \uff1a\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"Command Palatte")," > \u952e\u5165\u5e76\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Welcome: Open Walkthrough...")," > \u7136\u540e\u952e\u5165\u5e76\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion"),"\u3002"),(0,a.kt)("h3",{id:"1-\u5efa\u6a21-\u5b9a\u4e49\u4f60\u7684\u6a21\u578b"},"1. \u5efa\u6a21: \u5b9a\u4e49\u4f60\u7684\u6a21\u578b"),(0,a.kt)(o.Z,{className:"unique-tabs",defaultValue:"cloudide",values:[{label:"GitHub Codespaces",value:"cloudide"},{label:"\u684c\u9762\u7aef VS Code",value:"desktop"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"cloudide",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"konfig")," \u4ee3\u7801\u4ed3\u5e93\u5df2\u7ecf\u5728\u60a8\u7684\u5de5\u4f5c\u533a\u4e2d\u6253\u5f00\u3002\u5b83\u5305\u542b\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u7684\u7ecf\u5178\u5438\u5f15\u529b\uff0c\u4f9b\u60a8\u5feb\u901f\u542f\u52a8\u3002")),(0,a.kt)(u.Z,{value:"desktop",mdxType:"TabItem"},(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u514b\u9686 monorepo ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"config"),"\uff0c\u5176\u4e2d\u5305\u542b\u7ecf\u5178\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\uff0c\u4f9b\u60a8\u5feb\u901f\u5f00\u59cb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/KusionStack/konfig.git\n")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u5728\u60a8\u7684 VS Code \u4e2d\u6253\u5f00\u3002"))),(0,a.kt)("h3",{id:"2-\u914d\u7f6e-\u65b0\u5efa-kusion-\u9879\u76ee"},"2. \u914d\u7f6e: \u65b0\u5efa Kusion \u9879\u76ee"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u539f\u578b\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 kusion \u9879\u76ee\u3002 \u4e3a\u6b64\uff0c\u8bf7\u5355\u51fb walkthrough \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Kusion Project")," \u6309\u94ae\uff08\u6216\u8005\uff0c\u5728\u547d\u4ee4\u9762\u677f\u4e2d\u952e\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"Kusion\uff1aCreate"),"\uff09\uff0c\u7136\u540e\u9009\u62e9\u4e00\u4e2a\u9879\u76ee\u6a21\u677f\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"code-city")," \u6a21\u677f\uff0c\u60a8\u53ef\u4ee5\u90e8\u7f72\u4e00\u4e2a 3D \u57ce\u5e02\u53ef\u89c6\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(51503).Z,width:"1264",height:"748"})),(0,a.kt)("h3",{id:"3-\u9884\u89c8yaml-\u8868\u793a"},"3. \u9884\u89c8\uff1aYAML \u8868\u793a"),(0,a.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u9884\u89c8\u6211\u4eec\u4e4b\u524d\u521b\u5efa\u7684\u914d\u7f6e\u7684 YAML \u8868\u793a\uff0c\u65b9\u6cd5\u662f\u5355\u51fb\u6570\u636e\u9884\u89c8\u6309\u94ae\u6216\u952e\u5165\u5e76\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Kusion\uff1aOpen Data Preview To the Side"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66736).Z,width:"1077",height:"639"})),(0,a.kt)("h3",{id:"4\u8fd0\u884c\u65f6\u5dee\u5f02\u548c\u4e0a\u7ebf"},"4.\u8fd0\u884c\u65f6\u5dee\u5f02\u548c\u4e0a\u7ebf"),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u5f53\u524d\u8fd0\u884c\u65f6\u5dee\u5f02\uff0c\u60a8\u53ef\u4ee5\u53f3\u952e\u5355\u51fb\u914d\u7f6e\u4e3b\u6587\u4ef6\u5e76\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Diff with Runtime and Apply")," \u4ee5\u6253\u5f00\u8fd0\u884c\u65f6\u5dee\u5f02\u9875\u9762\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u786e\u8ba4\u5dee\u5f02\u5e76\u4f7f\u66f4\u6539\u4e0a\u7ebf\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(16161).Z,width:"1212",height:"729"})))}m.isMDXComponent=!0},16161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config-diff-apply-0b05ba764379b5118d2f75e1b2e3c7a0.gif"},51503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-project-92123ea89068eb3ad68ba50189711440.gif"},66736:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/data-preview-51f7b7d1bfa9988c5fe505556c79f4cb.gif"}}]);
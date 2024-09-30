"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u591a\u96c6\u7fa4\u7ba1\u7406"},l=void 0,s={unversionedId:"user-guide/multi-cluster-management",id:"user-guide/multi-cluster-management",title:"\u591a\u96c6\u7fa4\u7ba1\u7406",description:"\u591a\u96c6\u7fa4\u7ba1\u7406\u662f\u5c06\u96c6\u7fa4\u6ce8\u518c\u8fdb Karpor \u7684\u5165\u53e3\uff0c\u4f7f\u80fd\u5728\u5927\u91cf\u96c6\u7fa4\u95f4\u8fdb\u884c\u641c\u7d22\u548c\u6d1e\u5bdf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/3-user-guide/2-multi-cluster-management.md",sourceDirName:"3-user-guide",slug:"/user-guide/multi-cluster-management",permalink:"/zh/karpor/next/user-guide/multi-cluster-management",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/3-user-guide/2-multi-cluster-management.md",tags:[],version:"current",lastUpdatedBy:"Yang Yang",lastUpdatedAt:1727679683,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:2,frontMatter:{title:"\u591a\u96c6\u7fa4\u7ba1\u7406"},sidebar:"karpor",previous:{title:"\u5982\u4f55\u521b\u5efa Token",permalink:"/zh/karpor/next/user-guide/how-to-create-token"},next:{title:"\u5982\u4f55\u641c\u7d22",permalink:"/zh/karpor/next/user-guide/search"}},o={},c=[{value:"\u6ce8\u518c\u96c6\u7fa4",id:"\u6ce8\u518c\u96c6\u7fa4",level:2},{value:"\u6ce8\u518c eks \u96c6\u7fa4",id:"\u6ce8\u518c-eks-\u96c6\u7fa4",level:3},{value:"\u7f16\u8f91\u96c6\u7fa4",id:"\u7f16\u8f91\u96c6\u7fa4",level:2},{value:"\u8f6e\u6362\u8bc1\u4e66",id:"\u8f6e\u6362\u8bc1\u4e66",level:2},{value:"\u79fb\u9664\u96c6\u7fa4",id:"\u79fb\u9664\u96c6\u7fa4",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u591a\u96c6\u7fa4\u7ba1\u7406\u662f\u5c06\u96c6\u7fa4\u6ce8\u518c\u8fdb Karpor \u7684\u5165\u53e3\uff0c\u4f7f\u80fd\u5728\u5927\u91cf\u96c6\u7fa4\u95f4\u8fdb\u884c\u641c\u7d22\u548c\u6d1e\u5bdf\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u518c\u96c6\u7fa4"},"\u6ce8\u518c\u96c6\u7fa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u96c6\u7fa4\u7ba1\u7406")," \u6807\u7b7e\u9875\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u6ce8\u518c\u96c6\u7fa4")," \u6309\u94ae\u3002\n",(0,a.kt)("img",{src:n(96615).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u96c6\u7fa4\u540d\u5b57\u3002\u96c6\u7fa4\u540d\u79f0\u5fc5\u987b\u552f\u4e00\u4e14\u4e00\u65e6\u521b\u5efa\u4e0d\u80fd\u66f4\u6539\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0a\u4f20\u8be5\u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\uff08\u4e00\u4e2a\u5177\u6709\u8bfb\u6743\u9650\u7684\u6587\u4ef6\u5c31\u8db3\u591f\u4e86\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u9a8c\u8bc1\u5e76\u63d0\u4ea4")," \u6309\u94ae\u3002\n",(0,a.kt)("img",{src:n(35517).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u9a8c\u8bc1\u901a\u8fc7\uff0c\u96c6\u7fa4\u5c06\u4f1a\u88ab\u6dfb\u52a0\u5230 ",(0,a.kt)("kbd",null,"\u96c6\u7fa4\u7ba1\u7406")," \u9875\u9762\u3002\n",(0,a.kt)("img",{src:n(2377).Z,width:"1620",height:"1080"}))),(0,a.kt)("h3",{id:"\u6ce8\u518c-eks-\u96c6\u7fa4"},"\u6ce8\u518c eks \u96c6\u7fa4"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u6ce8\u518c eks \u96c6\u7fa4\uff0c\u90a3\u4e48\u9700\u8981\u5bf9 kubeconfig \u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bfc\u51fa eks \u96c6\u7fa4\u7684 kubeconfig\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u5982\u4e0b aws \u547d\u4ee4\u53ef\u4ee5\u83b7\u5f97\u6307\u5b9a\u96c6\u7fa4\u7684 kubeconfig:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"aws eks --region <YOUR REGION> update-kubeconfig  --name <YOUR CLUSTER NAME> --kubeconfig=<OUTPUT FILENAME>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728\u5bfc\u51fa\u7684 kubeconfig \u6587\u4ef6\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"users/exec")," \u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"env"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"interactiveMode")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"provideClusterInfo")," \u5b57\u6bb5\u3002\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u7684 kubeconfig \u7ed3\u6784\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: CA\n    server: SERVER\n  name: CLUSTER\ncontexts:\n- context:\n    cluster: CLUSTER\n    user: USER\n  name: CONTEXT\ncurrent-context: CONTEXT\nkind: Config\npreferences: {}\nusers:\n- name: USER\n  user:\n    exec:\n      apiVersion: client.authentication.k8s.io/v1beta1\n      args:\n      - --region\n      - ap-southeast-1\n      - eks\n      - get-token\n      - --cluster-name\n      - mycluster3\n      - --output\n      - json\n      command: aws\n      ### \u4ee5\u4e0b\u5b57\u6bb5\u9700\u8981\u8865\u5145\u5230 kubeconfig \u4e2d\n      env:\n      - name: AWS_ACCESS_KEY_ID\n        value: <YOUR AWS_ACCESS_KEY_ID>\n      - name: AWS_SECRET_ACCESS_KEY\n        value: <YOUR AWS_SECRET_ACCESS_KEY>\n      - name: AWS_DEFAULT_REGION\n        value: <AWS_DEFAULT_REGION>\n      - name: AWS_DEFAULT_OUTPUT\n        value: json\n      interactiveMode: IfAvailable\n      provideClusterInfo: false\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("a",{parentName:"li",href:"#%E6%B3%A8%E5%86%8C%E9%9B%86%E7%BE%A4"},"\u6ce8\u518c\u96c6\u7fa4")," \u4e2d\u4f7f\u7528\u4fee\u6539\u540e\u7684 kubeconfig\u3002")),(0,a.kt)("h2",{id:"\u7f16\u8f91\u96c6\u7fa4"},"\u7f16\u8f91\u96c6\u7fa4"),(0,a.kt)("kbd",null,"\u7f16\u8f91")," \u6309\u94ae\u5141\u8bb8\u4fee\u6539 ",(0,a.kt)("kbd",null,"\u663e\u793a\u540d\u79f0")," \u548c ",(0,a.kt)("kbd",null,"\u63cf\u8ff0"),"\uff0c\u4ece\u800c\u6539\u53d8\u4eea\u8868\u76d8\u4e2d\u96c6\u7fa4\u540d\u79f0\u548c\u63cf\u8ff0\u7684\u663e\u793a\u65b9\u5f0f\u3002",(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44009).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"\u8f6e\u6362\u8bc1\u4e66"},"\u8f6e\u6362\u8bc1\u4e66"),(0,a.kt)("p",null,"\u5f53 kubeconfig \u8fc7\u671f\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u8f6e\u6362\u8bc1\u4e66")," \u6765\u66f4\u65b0\u8bc1\u4e66\u3002\n",(0,a.kt)("img",{src:n(18892).Z,width:"1216",height:"810"}),"\n",(0,a.kt)("img",{src:n(93893).Z,width:"1620",height:"1080"}),"\n",(0,a.kt)("img",{src:n(62647).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"\u79fb\u9664\u96c6\u7fa4"},"\u79fb\u9664\u96c6\u7fa4"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("kbd",null,"\u5220\u9664")," \u6309\u94ae\u65b9\u4fbf\u5730\u79fb\u9664\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\u3002\n",(0,a.kt)("img",{src:n(9825).Z,width:"1216",height:"810"})))}p.isMDXComponent=!0},9825:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-delete-cluster-d710c7d34eeffe1b4885edf986635331.png"},44009:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-edit-cluster-07e5bea950a6328a23ac3b37bb757bf2.png"},96615:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-empty-42686a32f37ccbd355e49b2ab53b1320.png"},35517:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-register-new-cluster-df17d3a7e2b322e93e55a56b9689e4c8.png"},2377:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-register-success-1eeaaeec418f80431c9b77b5cd7d027d.png"},18892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-rotate-cluster-1-51394b403e893828990ac403a8ae8bf5.png"},93893:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-rotate-cluster-2-c840425dd672a06feafc951ed648e991.png"},62647:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cluster-mng-rotate-cluster-3-b5fd49c780f3db5bce7e11c379a2c880.png"}}]);
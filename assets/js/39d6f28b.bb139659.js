"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8285],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=i(n),m=c,_=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(_,a(a({ref:t},u),{},{components:n})):r.createElement(_,a({ref:t},u))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:c,a[1]=p;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4500:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return i},assets:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),c=n(3366),o=(n(7294),n(3905)),a=["components"],p={},l="project_context",i={unversionedId:"reference/lang/plugin/project_context",id:"reference/lang/plugin/project_context",title:"project_context",description:"project_context extract base info from project.yaml&stack.yaml",source:"@site/docs/reference/lang/plugin/project_context.md",sourceDirName:"reference/lang/plugin",slug:"/reference/lang/plugin/project_context",permalink:"/docs/reference/lang/plugin/project_context",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/plugin/project_context.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1653041898,formattedLastUpdatedAt:"2022/5/20",frontMatter:{},sidebar:"reference",previous:{title:"KCL \u63d2\u4ef6\u7b80\u4ecb",permalink:"/docs/reference/lang/plugin/overview"},next:{title:"Kusion \u6a21\u578b\u5e93",permalink:"/docs/reference/model/"}},u={},s=[{value:"<code>get_project_current_path</code>",id:"get_project_current_path",level:2},{value:"<code>get_project_input_file</code>",id:"get_project_input_file",level:2},{value:"<code>get_project_context</code>",id:"get_project_context",level:2},{value:"<code>get_stack_context</code>",id:"get_stack_context",level:2}],f={toc:s};function m(e){var t=e.components,n=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project_context"},"project_context"),(0,o.kt)("p",null,"project_context extract base info from project.yaml&stack.yaml"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"version: 0.0.1")),(0,o.kt)("h2",{id:"get_project_current_path"},(0,o.kt)("inlineCode",{parentName:"h2"},"get_project_current_path")),(0,o.kt)("p",null,"return the relative path of first file"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import kcl_plugin.project_context as ctx\n\npath = ctx.get_project_current_path()\nprint(path)\n")),(0,o.kt)("h2",{id:"get_project_input_file"},(0,o.kt)("inlineCode",{parentName:"h2"},"get_project_input_file")),(0,o.kt)("p",null,"return compiling file list"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import kcl_plugin.project_context as ctx\n\ninput_file = ctx.get_project_input_file()\nprint(input_file)\n")),(0,o.kt)("h2",{id:"get_project_context"},(0,o.kt)("inlineCode",{parentName:"h2"},"get_project_context")),(0,o.kt)("p",null,"return the current project context from project.yaml"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import kcl_plugin.project_context as ctx\n\nproject = ctx.get_project_context()\n# Get project name\nprint(project?.name)\n")),(0,o.kt)("h2",{id:"get_stack_context"},(0,o.kt)("inlineCode",{parentName:"h2"},"get_stack_context")),(0,o.kt)("p",null,"return the current stack context from stack.yaml"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import kcl_plugin.project_context as ctx\n\nstack = ctx.get_stack_context()\n# Get stack name\nprint(stack?.name)\n")))}m.isMDXComponent=!0}}]);
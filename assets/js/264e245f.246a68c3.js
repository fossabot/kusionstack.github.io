"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(n),p=o,m=k["".concat(l,".").concat(p)]||k[p]||d[p]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},63941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={sidebar_position:2},a="Docker",i={unversionedId:"user_docs/getting-started/install/docker",id:"user_docs/getting-started/install/docker",title:"Docker",description:"If the environment do not supported, you can choose the Docker version of KusionStack. First install the Docker environment and start the Docker service. Then use the docker info command to verify that the Docker service has been started succeed.",source:"@site/docs/user_docs/getting-started/install/docker.md",sourceDirName:"user_docs/getting-started/install",slug:"/user_docs/getting-started/install/docker",permalink:"/docs/user_docs/getting-started/install/docker",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/install/docker.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1664259847,formattedLastUpdatedAt:"9/27/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Kusionup",permalink:"/docs/user_docs/getting-started/install/kusionup"},next:{title:"Use Cases",permalink:"/docs/user_docs/getting-started/usecase"}},l={},c=[{value:"1. Latest Version",id:"1-latest-version",level:2},{value:"2. Custom Version",id:"2-custom-version",level:2},{value:"3. Run KCL",id:"3-run-kcl",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("p",null,"If the environment do not supported, you can choose the Docker version of KusionStack. First install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," environment and start the Docker service. Then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker info")," command to verify that the Docker service has been started succeed."),(0,o.kt)("p",null,"KusionStack image: ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kusionstack/kusion"},"https://hub.docker.com/r/kusionstack/kusion")),(0,o.kt)("h2",{id:"1-latest-version"},"1. Latest Version"),(0,o.kt)("p",null,"Pull the latest version with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull kusionstack/kusion\nUsing default tag: latest\nlatest: Pulling from kusion/kusion\n...\nkusionstack/kusion:latest\n$\n")),(0,o.kt)("p",null,"Then use the following command to check the KCL version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it kusionstack/kusion kcl --version\nkclvm version is 0.4.1; checksum: ***\n$\n")),(0,o.kt)("h2",{id:"2-custom-version"},"2. Custom Version"),(0,o.kt)("p",null,"Check the list of image ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kusionstack/kusion/tags"},"versions")," at first, pull the latest image of kusion with the following command (the Kusion image include the KCL command tools):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull kusionstack/kusion\n...\n")),(0,o.kt)("p",null,"Then use the following command to check the KCL version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it kusionstack/kusion:v0.4.1 kcl --version\nkclvm version is 0.4.1\n$\n")),(0,o.kt)("h2",{id:"3-run-kcl"},"3. Run KCL"),(0,o.kt)("p",null,"If you want to verify the execution of the KCL program, you can first create a ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.k")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'hello = "world"\n')),(0,o.kt)("p",null,"Then execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.k")," file with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it -v `pwd`:/root/hello.k kusionstack/kusion kcl /root/hello.k\nhello: world\n$\n")),(0,o.kt)("p",null,"The output this the YAML format data, content is ",(0,o.kt)("inlineCode",{parentName:"p"},"hello: world"),"."))}d.isMDXComponent=!0}}]);
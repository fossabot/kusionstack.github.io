"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},s="Installation Guide",l={unversionedId:"user_docs/getting-started/install",id:"user_docs/getting-started/install",title:"Installation Guide",description:"Homebrew (MacOS & Linux)",source:"@site/docs/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/docs/user_docs/getting-started/install",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/install.md",tags:[],version:"current",lastUpdatedBy:"cuih",lastUpdatedAt:1688442263,formattedLastUpdatedAt:"7/4/2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Get Started",permalink:"/docs/user_docs/getting-started/"},next:{title:"Deliver Your First Project on Kubernetes",permalink:"/docs/user_docs/getting-started/usecases/deliver-first-project"}},i={},c=[{value:"Homebrew (MacOS &amp; Linux)",id:"homebrew-macos--linux",level:2},{value:"Curl|sh install (MacOS &amp; Linux)",id:"curlsh-install-macos--linux",level:2},{value:"Scoop (Windows)",id:"scoop-windows",level:2},{value:"Powershell (Windows)",id:"powershell-windows",level:2},{value:"Docker Image",id:"docker-image",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,a.kt)("h2",{id:"homebrew-macos--linux"},"Homebrew (MacOS & Linux)"),(0,a.kt)("p",null,"The preferred method for installing on Mac and Linux is to use the brew package manager."),(0,a.kt)("p",null,"You can install the latest Kusion CLI with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install KusionStack/tap/kusion\n")),(0,a.kt)("p",null,"You can also follow the binary installation below."),(0,a.kt)("h2",{id:"curlsh-install-macos--linux"},"Curl|sh install (MacOS & Linux)"),(0,a.kt)("p",null,"If you don't have homebrew, you can install the CLI with this one-liner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://kusionstack.io/scripts/install.sh | sh\n")),(0,a.kt)("h2",{id:"scoop-windows"},"Scoop (Windows)"),(0,a.kt)("p",null,"You can install the latest Kusion CLI with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add KusionStack https://github.com/KusionStack/scoop-bucket.git\nscoop install KusionStack/kusion\n")),(0,a.kt)("h2",{id:"powershell-windows"},"Powershell (Windows)"),(0,a.kt)("p",null,"Run the following command in ",(0,a.kt)("em",{parentName:"p"},"powershell")," with administrator privilege:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'powershell -Command "iwr -useb https://kusionstack.io/scripts/install.ps1 | iex"\n')),(0,a.kt)("h2",{id:"docker-image"},"Docker Image"),(0,a.kt)("p",null,"If the upper installation doesn't support your environment, you can use the docker image of Kusion instead."),(0,a.kt)("p",null,"First, pull the latest image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kusionstack/kusion:latest\n")),(0,a.kt)("p",null,"Next, run Kusion in an interactive mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it kusionstack/kusion:latest bash\n")))}p.isMDXComponent=!0}}]);
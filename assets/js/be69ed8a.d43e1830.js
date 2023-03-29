"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>f,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var a=n(87462),i=n(67294),l=n(3905),o=n(72389),r=n(20650),s=n(86010);const u="tabItem_LplD";function p(e){var t,n;const{lazy:l,block:o,defaultValue:p,values:c,groupId:d,className:m}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,r.lx)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=k[0])?void 0:n.props.value);if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,r.UB)(),[N,y]=(0,i.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&b.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==N&&(C(t),y(a),null!=d&&f(d,a))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},m)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:T,onClick:T},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),l?(0,i.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,o.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}function d(e){let{children:t,hidden:n,className:a}=e;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}const m={},k="Kusionup Tools",b={unversionedId:"reference/cli/kusionup/index",id:"reference/cli/kusionup/index",title:"Kusionup Tools",description:"Kusionup is a multi-version management tool for Kusion and KCL. It is heavily inspired by goup.",source:"@site/docs/reference/cli/kusionup/index.md",sourceDirName:"reference/cli/kusionup",slug:"/reference/cli/kusionup/",permalink:"/docs/reference/cli/kusionup/",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionup/index.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1680091886,formattedLastUpdatedAt:"3/29/2023",frontMatter:{},sidebar:"reference",previous:{title:"KCL OpenAPI Spec",permalink:"/docs/reference/cli/openapi/spec"},next:{title:"default",permalink:"/docs/reference/cli/kusionup/default"}},h={},g=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Install the specified version",id:"install-the-specified-version",level:2},{value:"Version Management",id:"version-management",level:2},{value:"Tips and Trouble Shooting",id:"tips-and-trouble-shooting",level:2}],v={toc:g};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kusionup-tools"},"Kusionup Tools"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusionup"},"Kusionup")," is a multi-version management tool for Kusion and KCL. It is heavily inspired by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/owenthereal/goup"},"goup"),"."),(0,l.kt)("p",null,"After ",(0,l.kt)("inlineCode",{parentName:"p"},"kusionup init")," is finished, a ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.kusionup")," directory will be created, and contains these files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/bin")," is a directory that contains the ",(0,l.kt)("inlineCode",{parentName:"li"},"kusionup")," binary file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/env")," is a file that declares environment variables used by ",(0,l.kt)("inlineCode",{parentName:"li"},"kusionup")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"kusion")," tools"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/current")," is a soft link to the currently active ",(0,l.kt)("inlineCode",{parentName:"li"},"kusion")," tools"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/$VERSION")," are directories of different versions of ",(0,l.kt)("inlineCode",{parentName:"li"},"kusion")," tools. For example, the latest version will be installed by default to the ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/latest")," directory")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(c,{mdxType:"Tabs"},(0,l.kt)(d,{value:"MacOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install KusionStack/tap/kusionup\n"))),(0,l.kt)(d,{value:"Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/KusionStack/kusionup/main/scripts/install.sh | bash\n"))),(0,l.kt)(d,{value:"Go Install",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/KusionStack/kusionup@latest\n")))),(0,l.kt)("h2",{id:"initialization"},"Initialization"),(0,l.kt)("p",null,"After ",(0,l.kt)("inlineCode",{parentName:"p"},"kusionup")," is installed, execute the one-click initialization command to complete the installation of the latest version of Kusion and the supporting KCL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusionup init --skip-prompt && source $HOME/.kusionup/env\n")),(0,l.kt)("h2",{id:"install-the-specified-version"},"Install the specified version"),(0,l.kt)("p",null,"The command ",(0,l.kt)("inlineCode",{parentName:"p"},"kusionup init --skip-prompt")," will install the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion")," and the supporting KCL.\nAnd if you want to customize it and install a specific version(take ",(0,l.kt)("a",{parentName:"p",href:"mailto:github@v0.7.0"},"github@v0.7.0")," as an example) directly, please run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusionup install github@v0.7.0\n")),(0,l.kt)("h2",{id:"version-management"},"Version Management"),(0,l.kt)("p",null,"During the initialization of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusionup"),", the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion")," is installed. Then you can check and navigate through all the installed versions of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusionup\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Select a version:\n  \u25b8 latest\n")),(0,l.kt)("p",null,"Also, you can list all the available versions of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusionup ls-ver\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdn@latest\ncdn@v0.4.2\ncdn@v0.4.1\ngithub@latest\ngithub@v0.4.2\ngithub@v0.4.1\n")),(0,l.kt)("p",null,"To install a specific version of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion"),", you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"kusionup install $VERSION"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusionup install cdn@latest\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Downloaded   0.0% (     2426 / 139988826 bytes) ...\nDownloaded  11.4% ( 16003466 / 139988826 bytes) ...\nDownloaded  21.0% ( 29433014 / 139988826 bytes) ...\nDownloaded  32.2% ( 45077686 / 139988826 bytes) ...\nDownloaded  41.9% ( 58642898 / 139988826 bytes) ...\nDownloaded  51.2% ( 71647010 / 139988826 bytes) ...\nDownloaded  61.6% ( 86258486 / 139988826 bytes) ...\nDownloaded  71.2% ( 99667706 / 139988826 bytes) ...\nDownloaded  81.5% (114078806 / 139988826 bytes) ...\nDownloaded  91.5% (128134166 / 139988826 bytes) ...\nDownloaded 100.0% (139988826 / 139988826 bytes)\nINFO[0055] Unpacking /root/.kusionup/kusion@latest/kusion-linux.tgz ...\nINFO[0061] Success: latest downloaded in /root/.kusionup/kusion@latest\nINFO[0061] Default Kusion is set to 'latest'\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"kusionup show")," to check all the installed versions and spot the active version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusionup show\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"|    VERSION    | ACTIVE |\n|---------------|--------|\n|  cdn@latest   |   *    |\n|  cdn@v0.4.1   |        |\n")),(0,l.kt)("p",null,"You can run ",(0,l.kt)("inlineCode",{parentName:"p"},"kusionup uninstall $VERSION")," to uninstall a specific version of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusionup uninstall cdn@latest\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"INFO[0000] Removing cdn@latest\n")),(0,l.kt)("p",null,"Finally, there is no latest version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusionup show\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"|    VERSION    | ACTIVE |\n|---------------|--------|\n|  cdn@v0.4.1   |   *    |\n")),(0,l.kt)("h2",{id:"tips-and-trouble-shooting"},"Tips and Trouble Shooting"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. How to add a custom version of ",(0,l.kt)("inlineCode",{parentName:"strong"},"kusion")," to the ",(0,l.kt)("inlineCode",{parentName:"strong"},"kusionup")," toggle list?")),(0,l.kt)("p",null,"You might need to add a local version of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion")," for debugging and this can be done by following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# place your debug version of kusion tools to the kusion-debug directory\n$ cp -r <directory_contianing_your_customized_kusion> $HOME/.kusionup/kusion-debug\n\n# switch to the debug version\n$ kusionup\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Select a version:\n    cdn@latest\n  \u25b8 debug\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The subdirectories under the ",(0,l.kt)("inlineCode",{parentName:"p"},".kusionup"),' must be named with a "kusion-" prefix and with a version number as a suffix.'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Mac M1 openssl ",(0,l.kt)("inlineCode",{parentName:"strong"},"dylib")," library cannot be found or SSL module is not available")),(0,l.kt)("p",null,"Make sure you have arm64e-version homebrew installed at ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/homebrew"),". If not, you can first install it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# add to path environment\nexport PATH=/opt/homebrew/bin:$PATH\n')),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"openssl@1.1")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"brew")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openssl@1.1\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Mac KCLVM ",(0,l.kt)("inlineCode",{parentName:"strong"},"gettext")," dylib cannot be found")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/317257/1646538731635-b1e290a5-465d-4838-b8d1-7f22cb48e267.png#clientId=uc50abf48-5ee8-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=200&id=ub5ce78d1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=400&originWidth=1158&originalType=binary&ratio=1&rotation=0&showTitle=false&size=238920&status=done&style=none&taskId=ue75303e6-140d-450f-84de-464da45a473&title=&width=579",alt:"image.png"})),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"which")," command to find the location of your ",(0,l.kt)("inlineCode",{parentName:"p"},"gettext"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"which gettext\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/Users/UserName/tools/homebrew/bin/gettext\n")),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"otool -L")," command to get the location of ",(0,l.kt)("inlineCode",{parentName:"p"},"libintl.8.dylib"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"otool -L /Users/yueyi/tools/homebrew/bin/gettext\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"/Users/yueyi/tools/homebrew/bin/gettext:\n  /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation (compatibility version 150.0.0, current version 1675.129.0)\n  /Users/yueyi/tools/homebrew/Cellar/gettext/0.21/lib/libintl.8.dylib (compatibility version 11.0.0, current version 11.0.0)\n  /usr/lib/libiconv.2.dylib (compatibility version 7.0.0, current version 7.0.0)\n  /usr/lib/libSystem.B.dylib (compatibility version 1.0.0, current version 1281.100.1)\n")),(0,l.kt)("p",null,"Copy to the target location:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cp /Users/yueyi/tools/homebrew/Cellar/gettext/0.21/lib/libintl.8.dylib /usr/local/opt/gettext/lib/libintl.8.dylib\n")))}f.isMDXComponent=!0}}]);
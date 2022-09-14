"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,4608],{96756:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var n=a(67294),l=a(3905),o=a(18790),c=a(42773),r=a(86010),i=a(20650),s=a(55537),d=a(87462);function m(e){return n.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=a(95999),b=a(39960),p=a(13919),h=a(90541);const E="menuHtmlItem_fVIQ";var f=a(72389);function g(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(v,(0,d.Z)({item:t},a));case"html":return n.createElement(_,(0,d.Z)({item:t},a));default:return n.createElement(k,(0,d.Z)({item:t},a))}}function v(e){let{item:t,onItemClick:a,activePath:l,level:o,index:c,...s}=e;const{items:m,label:p,collapsible:h,className:E,href:g}=t,v=function(e){const t=(0,f.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),_=(0,i._F)(t,l),k=(0,i.Mg)(g,l),{collapsed:C,setCollapsed:N}=(0,i.uR)({initialState:()=>!!h&&(!_&&t.collapsed)});!function(e){let{isActive:t,collapsed:a,setCollapsed:l}=e;const o=(0,i.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:_,collapsed:C,setCollapsed:N});const{expandedItem:I,setExpandedItem:Z}=(0,i.fP)();function T(e){void 0===e&&(e=!C),Z(e?null:c),N(e)}const{autoCollapseSidebarCategories:M}=(0,i.LU)();return(0,n.useEffect)((()=>{h&&I&&I!==c&&M&&N(!0)}),[h,I,c,N,M]),n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":C},E)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(b.Z,(0,d.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":h&&!g,"menu__link--active":_}),onClick:h?e=>{null==a||a(t),g?T(!1):(e.preventDefault(),T())}:()=>{null==a||a(t)},"aria-current":k?"page":void 0,href:h?v??"#":v},s),p),g&&h&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:p}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),T()}})),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(S,{items:m,tabIndex:C?-1:0,onItemClick:a,activePath:l,level:o+1})))}function _(e){let{item:t,level:a,index:l}=e;const{value:o,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(a),c&&`${E} menu__list-item`,s),key:l,dangerouslySetInnerHTML:{__html:o}})}function k(e){let{item:t,onItemClick:a,activePath:l,level:o,index:c,...s}=e;const{href:m,label:u,className:E}=t,f=(0,i._F)(t,l);return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",E),key:u},n.createElement(b.Z,(0,d.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":f}),"aria-current":f?"page":void 0,to:m},(0,p.Z)(m)&&{onClick:a?()=>a(t):void 0},s),(0,p.Z)(m)?u:n.createElement("span",null,u,n.createElement(h.Z,null))))}function C(e){let{items:t,...a}=e;return n.createElement(i.D_,null,t.map(((e,t)=>n.createElement(g,(0,d.Z)({key:t,item:e,index:t},a)))))}const S=(0,n.memo)(C),N="sidebar_CW9Y",I="sidebarWithHideableNavbar_FoYL",Z="sidebarHidden_D64r",T="sidebarLogo_FJUI",M="menu_SkdO",y="menuWithAnnouncementBar_x19h",L="collapseSidebarButton_cwdi",x="collapseSidebarButtonIcon_xORG";function w(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",L),onClick:t},n.createElement(m,{className:x}))}function A(e){let{path:t,sidebar:a,onCollapse:l,isHidden:o}=e;const c=function(){const{isActive:e}=(0,i.nT)(),[t,a]=(0,n.useState)(e);return(0,i.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}(),{navbar:{hideOnScroll:d},hideableSidebar:m}=(0,i.LU)();return n.createElement("div",{className:(0,r.Z)(N,{[I]:d,[Z]:o})},d&&n.createElement(s.Z,{tabIndex:-1,className:T}),n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",M,{[y]:c})},n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:a,activePath:t,level:1}))),m&&n.createElement(w,{onClick:l}))}const F=e=>{let{toggleSidebar:t,sidebar:a,path:l}=e;return n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:a,activePath:l,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function P(e){return n.createElement(i.Cv,{component:F,props:e})}const B=n.memo(A),D=n.memo(P);function H(e){const t=(0,i.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(B,e),l&&n.createElement(D,e))}var R=a(54689),W=a(24608);const Y="backToTopButton_RiI4",q="backToTopButtonShow_ssHd";function z(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}function U(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:l,cancelScrollToTop:o}=z();return(0,i.RF)(((e,n)=>{let{scrollY:l}=e;const c=null==n?void 0:n.scrollY;if(!c)return;if(a.current)return void(a.current=!1);const r=l<c;if(r||o(),l<300)t(!1);else if(r){const e=document.documentElement.scrollHeight;l+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.kM.common.backToTopButton,Y,{[q]:e}),type:"button",onClick:()=>l()})}var O=a(76775);const V={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};var G=a(35742);function K(e){let{currentDocRoute:t,versionMetadata:a,children:o,sidebarName:s}=e;const d=(0,i.Vq)(),{pluginId:b,version:p}=a,[h,E]=(0,n.useState)(!1),[f,g]=(0,n.useState)(!1),v=(0,n.useCallback)((()=>{f&&g(!1),E((e=>!e))}),[f]);return n.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:p,tag:(0,i.os)(b,p)}},n.createElement("div",{className:V.docPage},n.createElement(U,null),d&&n.createElement("aside",{className:(0,r.Z)(i.kM.docs.docSidebarContainer,V.docSidebarContainer,{[V.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(V.docSidebarContainer)&&h&&g(!0)}},n.createElement(H,{key:s,sidebar:d,path:t.path,onCollapse:v,isHidden:f}),f&&n.createElement("div",{className:V.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},n.createElement(m,{className:V.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.Z)(V.docMainContainer,{[V.docMainContainerEnhanced]:h||!d})},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,{[V.docItemWrapperEnhanced]:h})},n.createElement(l.Zo,{components:R.Z},o)))))}function X(e){const{route:{routes:t},versionMetadata:a,location:l}=e,c=t.find((e=>(0,O.LX)(l.pathname,e)));if(!c)return n.createElement(W.default,null);const r=c.sidebar,s=r?a.docsSidebars[r]:null;return n.createElement(n.Fragment,null,n.createElement(G.Z,null,n.createElement("html",{className:a.className})),n.createElement(i.qu,{version:a},n.createElement(i.bT,{sidebar:s},n.createElement(K,{currentDocRoute:c,versionMetadata:a,sidebarName:r},(0,o.H)(t,{versionMetadata:a})))))}},24608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),l=a(42773),o=a(95999);function c(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);
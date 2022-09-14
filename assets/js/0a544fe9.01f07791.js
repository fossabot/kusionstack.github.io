"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6271],{78665:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),n=a(86010),r=a(42773),i=a(39960);const s="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD";var p=a(95999);function b(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}function h(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(b,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},36299:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(95999),r=a(71750);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&l.createElement(r.Z,{permalink:i,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},71750:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(67294),n=a(39960);function r(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},92122:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(67294),n=a(86010),r=a(3905),i=a(39960),s=a(44996),m=a(18780),o=a(54689);const c="blogPostTitle_PrKK",g="blogPostPageTitle_dsQZ",d="blogPostData_fpy6",p="image_XZWt";function b(e){let{author:t}=e;const{name:a,url:n,imageURL:r}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},r&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:n},l.createElement("img",{className:p,src:r,alt:a,onError:e=>{e.currentTarget.src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" fill="none" stroke="%2325c2a0" stroke-width="30" version="1.1"><circle cx="300" cy="230" r="115"/><path stroke-linecap="butt" d="M106.81863443903,481.4 a205,205 1 0,1 386.36273112194,0"/></svg>'}})))}const h="imageOnlyAuthorRow_xKgx",u="imageOnlyAuthorCol_I1C9",v="toggleButton_ct6G";var E=a(87462);function N(e){let{expanded:t,...a}=e;return t?l.createElement("svg",(0,E.Z)({viewBox:"0 0 1024 1024",width:"20",height:"20",fill:"currentColor"},a),l.createElement("path",{d:"M783.915092 1009.031953l-271.898251-277.615587-271.930737 277.550617a49.214558 49.214558 0 0 1-70.752018 0 51.780862 51.780862 0 0 1 0-72.246322l307.274261-313.706262a49.279528 49.279528 0 0 1 70.784503 0l307.33923 313.706262a51.975771 51.975771 0 0 1 0 72.311292 49.409467 49.409467 0 0 1-70.816988 0z m-307.306745-608.05155L169.269117 87.274141A51.975771 51.975771 0 0 1 169.269117 14.96285a49.409467 49.409467 0 0 1 70.816987 0l271.930737 277.615586L783.850122 14.96285a49.409467 49.409467 0 0 1 70.816988 0 51.975771 51.975771 0 0 1 0 72.311291l-307.33923 313.706262a49.376982 49.376982 0 0 1-70.719533 0z"})):l.createElement("svg",(0,E.Z)({viewBox:"0 0 1024 1024",width:"20",height:"20",fill:"currentColor"},a),l.createElement("path",{d:"M476.612887 1009.12034L169.240699 695.380437a51.981345 51.981345 0 0 1 0-72.319045 49.382277 49.382277 0 0 1 70.824582 0l271.959897 277.645356 271.862433-277.645356a49.382277 49.382277 0 0 1 70.824582 0 51.981345 51.981345 0 0 1 0 72.319045l-307.307212 313.739903a49.447254 49.447254 0 0 1-70.792094 0z m307.274724-608.116755L511.99269 123.455693l-271.959897 277.645357a49.382277 49.382277 0 0 1-70.824582 0 51.981345 51.981345 0 0 1 0-72.319045L476.580399 15.042102a49.382277 49.382277 0 0 1 70.727117 0l307.372188 313.739903a51.981345 51.981345 0 0 1 0 72.319045 49.414766 49.414766 0 0 1-70.824582 0z"}))}function _(e){let{authors:t,assets:a}=e;const[r,i]=(0,l.useState)(!1);if(0===t.length)return null;const s=t.slice(0,r?t.length:10);return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",h)},s.map(((e,t)=>l.createElement("div",{className:u,key:t},l.createElement(b,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))),t.length>10&&l.createElement("button",{className:(0,n.Z)("clean-btn",v),type:"button",onClick:()=>i((e=>!e)),"aria-label":"expand"},l.createElement(N,{expanded:r})))}function Z(e){const{withBaseUrl:t}=(0,s.C)(),{children:a,frontMatter:p,assets:b,metadata:h,isBlogPostPage:u=!1}=e,{date:v,formattedDate:E,permalink:N,title:Z,authors:k}=h,f=b.image??p.image,w=u?"h1":"h2";return l.createElement("article",{className:u?void 0:"margin-bottom--md",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(w,{className:(0,n.Z)(u?g:c),itemProp:"headline"},u?Z:l.createElement(i.Z,{itemProp:"url",to:N},Z)),l.createElement("div",{className:(0,n.Z)(d,"margin-vert--md")},l.createElement("time",{dateTime:v,itemProp:"datePublished"},E)),l.createElement(_,{authors:k,assets:b})),f&&l.createElement("meta",{itemProp:"image",content:t(f,{absolute:!0})}),l.createElement("div",{id:u?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:o.Z},a)))}},56768:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(67294),n=a(78665),r=a(36299),i=a(20650),s=a(92122);function m(e){const{metadata:t,items:a,sidebar:m}=e,{blogDescription:o,blogTitle:c}=t;return l.createElement(n.Z,{title:c,description:o,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:m},l.createElement("header",{className:"margin-bottom--lg"},l.createElement("h1",{style:{fontSize:"3rem"}},c)),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(r.Z,{metadata:t}))}}}]);
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69899],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=u(r),h=o,d=y["".concat(l,".").concat(h)]||y[h]||p[h]||s;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9996:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function s(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function a(e,t){try{return t in e}catch(r){return!1}}function i(e,t,r){var o={};return r.isMergeableObject(e)&&s(e).forEach((function(t){o[t]=n(e[t],r)})),s(t).forEach((function(s){(function(e,t){return a(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,s)||(a(e,s)&&r.isMergeableObject(t[s])?o[s]=function(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return"function"==typeof r?r:l}(s,r)(e[s],t[s],r):o[s]=n(t[s],r))})),o}function l(e,r,s){(s=s||{}).arrayMerge=s.arrayMerge||o,s.isMergeableObject=s.isMergeableObject||t,s.cloneUnlessOtherwiseSpecified=n;var a=Array.isArray(r);return a===Array.isArray(e)?a?s.arrayMerge(e,r,s):i(e,r,s):n(r,s)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return l(e,r,t)}),{})};var u=l;e.exports=u},49090:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},a.type=n.type||"text/javascript",a.charset=n.charset||"utf8",a.async=!("async"in n)||!!n.async,a.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(a,n.attrs),n.text&&(a.text=""+n.text),("onload"in a?t:r)(a,o),a.onload||t(a,o),s.appendChild(a)}},30845:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function o(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(o=e[r],s=t[r],!(o===s||n(o)&&n(s)))return!1;var o,s;return!0}const s=function(e,t){var r;void 0===t&&(t=o);var n,s=[],a=!1;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return a&&r===this&&t(o,s)||(n=e.apply(this,o),a=!0,r=this,s=o),n}}},8193:(e,t,r)=>{"use strict";r.d(t,{LHV:()=>s,mny:()=>o,y5j:()=>a});var n=r(88357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]})(e)}function s(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(e)}function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}},88357:(e,t,r)=>{"use strict";r.d(t,{w_:()=>u});var n=r(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return n.createElement(c,a({attr:a({},e.attr)},t),l(e.child))}}function c(e){var t=function(t){var r,o=e.attr,s=e.size,l=e.title,u=i(e,["attr","size","title"]),c=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==s?n.createElement(s.Consumer,null,(function(e){return t(e)})):t(o)}},60722:(e,t,r)=>{var n,o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))u.call(e,o)||o===r||s(e,o,{get:()=>t[o],enumerable:!(n=a(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)),y=(e,t,r)=>(((e,t,r)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),h={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(h,{default:()=>g}),e.exports=(n=h,c(s({},"__esModule",{value:!0}),n));var d=p(r(67294)),f=p(r(69590)),m=r(85741),b=r(38045);class g extends d.Component{constructor(){super(...arguments),y(this,"mounted",!1),y(this,"isReady",!1),y(this,"isPlaying",!1),y(this,"isLoading",!0),y(this,"loadOnReady",null),y(this,"startOnPlay",!0),y(this,"seekOnPlay",null),y(this,"onDurationCalled",!1),y(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),y(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),y(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),y(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),y(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),y(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),y(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),y(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),y(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),y(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:s,pip:a,loop:i,activePlayer:l,disableDeferredLoading:u}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!u&&!(0,b.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&a&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!a&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==s&&this.player.setPlaybackRate&&this.player.setPlaybackRate(s),e.loop!==i&&this.player.setLoop&&this.player.setLoop(i)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?d.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}y(g,"displayName","Player"),y(g,"propTypes",m.propTypes),y(g,"defaultProps",m.defaultProps)},70390:(e,t,r)=>{var n,o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))u.call(e,o)||o===r||s(e,o,{get:()=>t[o],enumerable:!(n=a(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)),y=(e,t,r)=>(((e,t,r)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),h={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(h,{createReactPlayer:()=>E}),e.exports=(n=h,c(s({},"__esModule",{value:!0}),n));var d=p(r(67294)),f=p(r(9996)),m=p(r(30845)),b=p(r(69590)),g=r(85741),P=r(38045),v=p(r(60722));const w=(0,P.lazy)((()=>r.e(87664).then(r.t.bind(r,83855,23)))),O="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,k=void 0!==r.g&&r.g.window&&r.g.window.document,C=Object.keys(g.propTypes),T=O||k?d.Suspense:()=>null,S=[],E=(e,t)=>{var r;return r=class extends d.Component{constructor(){super(...arguments),y(this,"state",{showPreview:!!this.props.light}),y(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),y(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),y(this,"showPreview",(()=>{this.setState({showPreview:!0})})),y(this,"getDuration",(()=>this.player?this.player.getDuration():null)),y(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),y(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),y(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),y(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),y(this,"handleReady",(()=>{this.props.onReady(this)})),y(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...S,...e])if(t.canPlay(r))return t;return t||null}))),y(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return f.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},r,r[t]||{}])}))),y(this,"getAttributes",(0,m.default)((e=>(0,P.omit)(this.props,C)))),y(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return d.default.createElement(v.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:o,previewAriaLabel:s}=this.props;return d.default.createElement(w,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:s,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:o,wrapper:s}=this.props,{showPreview:a}=this.state,i=this.getAttributes(e),l="string"==typeof s?this.references.wrapper:void 0;return d.default.createElement(s,{ref:l,style:{...t,width:r,height:n},...i},d.default.createElement(T,{fallback:o},a?this.renderPreview(e):this.renderActivePlayer(e)))}},y(r,"displayName","ReactPlayer"),y(r,"propTypes",g.propTypes),y(r,"defaultProps",g.defaultProps),y(r,"addCustomPlayer",(e=>{S.push(e)})),y(r,"removeCustomPlayers",(()=>{S.length=0})),y(r,"canPlay",(t=>{for(const r of[...S,...e])if(r.canPlay(t))return!0;return!1})),y(r,"canEnablePIP",(t=>{for(const r of[...S,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},22004:(e,t,r)=>{var n,o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))u.call(e,o)||o===r||s(e,o,{get:()=>t[o],enumerable:!(n=a(t,o))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(p,{default:()=>f}),e.exports=(n=p,c(s({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(86497)),h=r(70390);const d=y.default[y.default.length-1];var f=(0,h.createReactPlayer)(y.default,d)},71776:(e,t,r)=>{var n,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>C,DASH_EXTENSIONS:()=>E,FLV_EXTENSIONS:()=>j,HLS_EXTENSIONS:()=>S,MATCH_URL_DAILYMOTION:()=>v,MATCH_URL_FACEBOOK:()=>d,MATCH_URL_FACEBOOK_WATCH:()=>f,MATCH_URL_KALTURA:()=>k,MATCH_URL_MIXCLOUD:()=>w,MATCH_URL_MUX:()=>h,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>P,MATCH_URL_TWITCH_VIDEO:()=>g,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>y,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>T,canPlay:()=>I}),e.exports=(n=l,((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of a(t))i.call(e,l)||l===r||o(e,l,{get:()=>t[l],enumerable:!(n=s(t,l))||n.enumerable});return e})(o({},"__esModule",{value:!0}),n));var u=r(38045);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,y=/vimeo\.com\/(?!progressive_redirect).+/,h=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,d=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,f=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,g=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,P=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,v=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,w=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,k=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,C=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,T=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,S=/\.(m3u8)($|\?)/i,E=/\.(mpd)($|\?)/i,j=/\.(flv)($|\?)/i,L=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&L(t))return!0;if(L(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(C.test(e)||T.test(e)||S.test(e)||E.test(e)||j.test(e))},I={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!C.test(e),vimeo:e=>y.test(e)&&!T.test(e)&&!S.test(e),mux:e=>h.test(e),facebook:e=>d.test(e)||f.test(e),streamable:e=>m.test(e),wistia:e=>b.test(e),twitch:e=>g.test(e)||P.test(e),dailymotion:e=>v.test(e),mixcloud:e=>w.test(e),vidyard:e=>O.test(e),kaltura:e=>k.test(e),file:L}},86497:(e,t,r)=>{Object.create;var n,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,i=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),l=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of a(t))i.call(e,l)||l===r||o(e,l,{get:()=>t[l],enumerable:!(n=s(t,l))||n.enumerable});return e},u={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>y}),e.exports=(n=u,l(o({},"__esModule",{value:!0}),n));var c=r(38045),p=r(71776),y=[{key:"youtube",name:"YouTube",canPlay:p.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(64439).then(r.t.bind(r,60356,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:p.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(6125).then(r.t.bind(r,72648,23))))},{key:"vimeo",name:"Vimeo",canPlay:p.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(73743).then(r.t.bind(r,80868,23))))},{key:"mux",name:"Mux",canPlay:p.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>r.e(64258).then(r.t.bind(r,58376,23))))},{key:"facebook",name:"Facebook",canPlay:p.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(12121).then(r.t.bind(r,31972,23))))},{key:"streamable",name:"Streamable",canPlay:p.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(52546).then(r.t.bind(r,50993,23))))},{key:"wistia",name:"Wistia",canPlay:p.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(88055).then(r.t.bind(r,8018,23))))},{key:"twitch",name:"Twitch",canPlay:p.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(86216).then(r.t.bind(r,29482,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:p.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(47596).then(r.t.bind(r,36807,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:p.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(84667).then(r.t.bind(r,50143,23))))},{key:"vidyard",name:"Vidyard",canPlay:p.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(68888).then(r.t.bind(r,36596,23))))},{key:"kaltura",name:"Kaltura",canPlay:p.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(10261).then(r.t.bind(r,73911,23))))},{key:"file",name:"FilePlayer",canPlay:p.canPlay.file,canEnablePIP:e=>p.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!p.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(26011).then(r.t.bind(r,14926,23))))}]},85741:(e,t,r)=>{var n,o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))u.call(e,o)||o===r||s(e,o,{get:()=>t[o],enumerable:!(n=a(t,o))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(p,{defaultProps:()=>C,propTypes:()=>O}),e.exports=(n=p,c(s({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(45697));const{string:h,bool:d,number:f,array:m,oneOfType:b,shape:g,object:P,func:v,node:w}=y.default,O={url:b([h,m,P]),playing:d,loop:d,controls:d,volume:f,muted:d,playbackRate:f,width:b([h,f]),height:b([h,f]),style:P,progressInterval:f,playsinline:d,pip:d,stopOnUnmount:d,light:b([d,h,P]),playIcon:w,previewTabIndex:f,previewAriaLabel:h,fallback:w,oEmbedUrl:h,wrapper:b([h,v,g({render:v.isRequired})]),config:g({soundcloud:g({options:P}),youtube:g({playerVars:P,embedOptions:P,onUnstarted:v}),facebook:g({appId:h,version:h,playerId:h,attributes:P}),dailymotion:g({params:P}),vimeo:g({playerOptions:P,title:h}),mux:g({attributes:P,version:h}),file:g({attributes:P,tracks:m,forceVideo:d,forceAudio:d,forceHLS:d,forceSafariHLS:d,forceDisableHls:d,forceDASH:d,forceFLV:d,hlsOptions:P,hlsVersion:h,dashVersion:h,flvVersion:h}),wistia:g({options:P,playerId:h,customControls:m}),mixcloud:g({options:P}),twitch:g({options:P,playerId:h}),vidyard:g({options:P})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},k=()=>{},C={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k}},38045:(e,t,r)=>{var n,o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))u.call(e,o)||o===r||s(e,o,{get:()=>t[o],enumerable:!(n=a(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)),y={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(y,{callPlayer:()=>_,getConfig:()=>L,getSDK:()=>j,isBlobUrl:()=>x,isMediaStream:()=>A,lazy:()=>m,omit:()=>I,parseEndTime:()=>k,parseStartTime:()=>O,queryString:()=>T,randomString:()=>C,supportsWebKitPresentationMode:()=>M}),e.exports=(n=y,c(s({},"__esModule",{value:!0}),n));var h=p(r(67294)),d=p(r(49090)),f=p(r(9996));const m=e=>h.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),b=/[?&#](?:start|t)=([0-9hms]+)/,g=/[?&#]end=([0-9hms]+)/,P=/(\d+)(h|m|s)/g,v=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(P))return function(e){let t=0,r=P.exec(e);for(;null!==r;){const[,n,o]=r;"h"===o&&(t+=60*parseInt(n,10)*60),"m"===o&&(t+=60*parseInt(n,10)),"s"===o&&(t+=parseInt(n,10)),r=P.exec(e)}return t}(e);if(v.test(e))return parseInt(e)}}function O(e){return w(e,b)}function k(e){return w(e,g)}function C(){return Math.random().toString(36).substr(2,5)}function T(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function S(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const E={},j=function(e){0;return e}((function(e,t,r=null,n=(()=>!0),o=d.default){const s=S(t);return s&&n(s)?Promise.resolve(s):new Promise(((n,s)=>{if(E[e])return void E[e].push({resolve:n,reject:s});E[e]=[{resolve:n,reject:s}];const a=t=>{E[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),a(S(t))}}o(e,(n=>{n?(E[e].forEach((e=>e.reject(n))),E[e]=null):r||a(S(t))}))}))}));function L(e,t){return(0,f.default)(t.config,e.config)}function I(e,...t){const r=[].concat(...t),n={},o=Object.keys(e);for(const s of o)-1===r.indexOf(s)&&(n[s]=e[s]);return n}function _(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function A(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function x(e){return/^blob:/.test(e)}function M(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},89911:(e,t,r)=>{"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>i});var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},s=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,r){if(e.el="string"==typeof r?document.querySelector(r):r,e.options=n({},o,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(e.stringsElement.children),a=s.length;if(a)for(var i=0;i<a;i+=1)e.strings.push(s[i].innerHTML.trim())}for(var l in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[l]=l;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var r=document.createElement("style");r.setAttribute(t,"true"),r.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(r)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var r=document.createElement("style");r.setAttribute(t,"true"),r.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(r)}},e}()),a=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,r){if("html"!==r.contentType)return t;var n=e.substring(t).charAt(0);if("<"===n||"&"===n){var o;for(o="<"===n?">":";";e.substring(t+1).charAt(0)!==o&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,r){if("html"!==r.contentType)return t;var n=e.substring(t).charAt(0);if(">"===n||";"===n){var o;for(o=">"===n?"<":"&";e.substring(t-1).charAt(0)!==o&&!(--t<0););t--}return t},e}()),i=function(){function e(e,t){s.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===e.strPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)},t.typewrite=function(e,t){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=a.typeHtmlChars(e,t,r);var n=0,s=e.substring(t);if("^"===s.charAt(0)&&/^\^\d+/.test(s)){var i=1;i+=(s=/\d+/.exec(s)[0]).length,n=parseInt(s),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),e=e.substring(0,t)+e.substring(t+i),r.toggleBlinking(!0)}if("`"===s.charAt(0)){for(;"`"!==e.substring(t+o).charAt(0)&&(o++,!(t+o>e.length)););var l=e.substring(0,t),u=e.substring(l.length+1,t+o),c=e.substring(t+o+1);e=l+u+c,o--}r.timeout=setTimeout((function(){r.toggleBlinking(!1),t>=e.length?r.doneTyping(e,t):r.keepTyping(e,t,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))}),n)}),n):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,r){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=e.substring(0,t+=r);this.replaceText(n),this.typewrite(e,t)},t.doneTyping=function(e,t){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){r.backspace(e,t)}),this.backDelay))},t.backspace=function(e,t){var r=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=a.backSpaceHtmlChars(e,t,r);var n=e.substring(0,t);if(r.replaceText(n),r.smartBackspace){var o=r.strings[r.arrayPos+1];r.stopNum=o&&n===o.substring(0,t)?t:0}t>r.stopNum?(t--,r.backspace(e,t)):t<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],t))}),n)}else this.setPauseStatus(e,t,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,r){this.pause.typewrite=r,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}()}}]);
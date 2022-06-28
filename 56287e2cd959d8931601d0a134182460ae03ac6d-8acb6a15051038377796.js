"use strict";(self.webpackChunkhmilly=self.webpackChunkhmilly||[]).push([[226],{7059:function(e,t,a){a.d(t,{G:function(){return j},L:function(){return m},M:function(){return x},P:function(){return v},S:function(){return R},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,p=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=o(e,f);return r.createElement("img",s({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},b=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(y,s({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],v=function(e){var t=e.fallback,a=o(e,w);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(u=b.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;var E,k,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],z=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,p=e.class,g=e.onStartLoad,m=e.onLoad,f=e.onError,h=o(e,S),y=i.width,b=i.height,w=i.layout,v=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,b,w),x=v.style,L=v.className,C=o(v,_),T=(0,r.useRef)(),j=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(u=p);var N=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((function(){E||(E=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=T.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void z.add(j)):k&&z.has(j)?void 0:(E.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;T.current&&(T.current.innerHTML=r(s({isLoading:!0,isLoaded:z.has(j),image:i},h)),z.has(j)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,j,z,c,g,m,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){z.has(j)&&k&&(T.current.innerHTML=k(s({isLoading:z.has(j),isLoaded:z.has(j),image:i},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},C,{style:s({},x,c,{backgroundColor:d}),className:L+(u?" "+u:""),ref:T,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));j.propTypes=C,j.displayName="GatsbyImage";var N,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],O=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),A={src:i().string.isRequired,alt:L,width:O,height:O,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(N=j,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,I);return n&&console.warn(n),a?r.createElement(N,s({image:a},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=A},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},4803:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(1074),i=(0,n.createGlobalStyle)(['*{font-family:"Gill Sans",sans-serif,serif;color:#eebde7;box-sizing:border-box;padding:0;margin:0;}p,h1,h2,h3,li{text-shadow:3px 2px #632968e8;color:#bfc4ff;}h1{font-size:30px;}h2{font-size:25px;}p,li{font-size:20px;}@media (max-width:500px){h1{font-size:22px;}h2{font-size:18px;}p,li{font-size:16px;}}']),s=a.p+"static/bg-ea262050bf2858c4de1d9f01659b8a16.jpg",o=n.default.div.withConfig({displayName:"Layoutstyled__Body",componentId:"sc-19f6wck-0"})(["display:grid;height:100vh;overflow:hidden;grid-template-columns:1fr;grid-template-rows:50px 1fr 30px;grid-auto-columns:1fr;gap:10px;background-image:url(",");background-position:center;footer{background-color:#000000a2;justify-self:end;padding:5px;}"],s),l=n.default.nav.withConfig({displayName:"Layoutstyled__Navbar",componentId:"sc-19f6wck-1"})(["background-color:#000000b5;display:grid;grid-template-columns:minmax(200px,600px) minmax(75px,250px);grid-template-rows:50px;justify-content:space-between;ul.internal{grid-template-columns:repeat(3,1fr);}ul.external{grid-template-columns:repeat(2,1fr);img{height:50px;width:50px;}}ul{display:grid;grid-template-rows:50px;list-style:none;gap:10px;text-align:center;a{display:grid;align-content:center;text-decoration:none;&:hover{background:#80008096;transition:0.2s;img{opacity:0.65;transition:0.2s;}}}}"]),c=a(1597),d=a(7059),u=function(){return r.createElement(l,null,r.createElement("ul",{className:"internal"},r.createElement(c.Link,{to:"/"},r.createElement("li",null,"Home")),r.createElement(c.Link,{to:"/projects"},r.createElement("li",null,"Projects")),r.createElement(c.Link,{to:"/about"},r.createElement("li",null,"About"))),r.createElement("ul",{className:"external"},r.createElement("a",{href:"https://github.com/hmilly",target:"_blank",rel:"noreferrer"},r.createElement("li",null,r.createElement(d.S,{src:"../images/git.jpg",alt:"github icon",__imageData:a(7112)}))),r.createElement("a",{href:"https://www.linkedin.com/in/hmilly/",target:"_blank",rel:"noreferrer"},r.createElement("li",null,r.createElement(d.S,{src:"../images/in.jpg",alt:"linked in icon",__imageData:a(927)})))))},p=function(e){var t=e.children;return r.createElement(o,null,r.createElement("title",null,"Hm Portfolio"),r.createElement("header",null,r.createElement(u,null)),r.createElement(i,null),t,r.createElement("footer",null,r.createElement("p",null,"2022 Hmilly")))}},927:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/14a145ce662b45d210dc3e15eca318fb/3f735/in.png","srcSet":"/static/14a145ce662b45d210dc3e15eca318fb/6d3f5/in.png 41w,\\n/static/14a145ce662b45d210dc3e15eca318fb/1e111/in.png 82w,\\n/static/14a145ce662b45d210dc3e15eca318fb/3f735/in.png 163w","sizes":"(min-width: 163px) 163px, 100vw"},"sources":[{"srcSet":"/static/14a145ce662b45d210dc3e15eca318fb/0d9f6/in.webp 41w,\\n/static/14a145ce662b45d210dc3e15eca318fb/4be14/in.webp 82w,\\n/static/14a145ce662b45d210dc3e15eca318fb/95eca/in.webp 163w","type":"image/webp","sizes":"(min-width: 163px) 163px, 100vw"}]},"width":163,"height":155}')},7112:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3398dca93f389f16a24c1ef7162b951a/68974/git.jpg","srcSet":"/static/3398dca93f389f16a24c1ef7162b951a/d4a57/git.jpg 64w,\\n/static/3398dca93f389f16a24c1ef7162b951a/19e71/git.jpg 128w,\\n/static/3398dca93f389f16a24c1ef7162b951a/68974/git.jpg 256w","sizes":"(min-width: 256px) 256px, 100vw"},"sources":[{"srcSet":"/static/3398dca93f389f16a24c1ef7162b951a/8257c/git.webp 64w,\\n/static/3398dca93f389f16a24c1ef7162b951a/6766a/git.webp 128w,\\n/static/3398dca93f389f16a24c1ef7162b951a/22bfc/git.webp 256w","type":"image/webp","sizes":"(min-width: 256px) 256px, 100vw"}]},"width":256,"height":256}')}}]);
//# sourceMappingURL=56287e2cd959d8931601d0a134182460ae03ac6d-8acb6a15051038377796.js.map
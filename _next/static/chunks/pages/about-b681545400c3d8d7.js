(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6010:function(n,e,t){"use strict";function a(){for(var n,e,t=0,a="";t<arguments.length;)(n=arguments[t++])&&(e=function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t)}return i}(n))&&(a&&(a+=" "),a+=e);return a}t.d(e,{W:function(){return a}})},512:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(3447)}])},955:function(n,e,t){"use strict";var a=t(5893),i=t(7294),o=t(1163),r=t(6010),s=t(7268),l=t.n(s),c=t(3322),_=t.n(c);e.Z=function(n){let{containerId:e}=n,[t,s]=(0,i.useState)(!1),c=(0,o.useRouter)(),d=n=>{n.preventDefault(),n.target.pathname!==c.asPath&&(f(),setTimeout(()=>{c.push(n.target.pathname)},500))},h=n=>{let e=n.target.documentElement.scrollTop;!t&&e>=1?s(!0):t&&e<1&&s(!1)},u=()=>{p(),setTimeout(()=>{v()},500)},m=()=>{p(),setTimeout(()=>{v()},500)},f=()=>{if(e){let n=document.getElementById(e);n.classList.add(_().unloading)}},p=()=>{if(e){let n=document.getElementById(e);n.classList.add(_().loading)}},v=()=>{if(e){let n=document.getElementById(e);n.classList.remove(_().loading)}};return(0,i.useEffect)(()=>(window.addEventListener("load",u),window.addEventListener("scroll",h),c.events.on("routeChangeComplete",m),()=>{window.removeEventListener("load",u),window.removeEventListener("scroll",h),c.events.off("routeChangeComplete",m)}),[c,t]),(0,a.jsx)("nav",{className:(0,r.W)(l().nav__container,_().transition,t&&l().nav__shadow),children:(0,a.jsxs)("ul",{className:l().nav__list,children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/",className:(0,r.W)(l().nav__link,_().transition,"/"===c.asPath&&l().nav__activeLink),"aria-label":"Home",onClick:d,children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/code",className:(0,r.W)(l().nav__link,_().transition,"/code"===c.asPath&&l().nav__activeLink),"aria-label":"Code",onClick:d,children:"Code"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/about",className:(0,r.W)(l().nav__link,_().transition,"/about"===c.asPath&&l().nav__activeLink),"aria-label":"About",onClick:d,children:"About"})})]})})}},3447:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var a=t(5893),i=t(9008),o=t.n(i),r=t(955),s=t(3322),l=t.n(s),c=t(1109),_=t.n(c),d=function(){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",className:"".concat(_().rightArrow," ").concat(l().transition),children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z",clipRule:"evenodd"})})},h=t(430),u=t.n(h),m=function(){return(0,a.jsxs)("div",{id:"app__container",className:l().container,children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"Stephan Santos"})}),(0,a.jsxs)("header",{className:l().header,children:[(0,a.jsx)(r.Z,{containerId:"app__container"}),(0,a.jsx)("div",{className:l().header__container,children:(0,a.jsx)("h1",{children:"About"})})]}),(0,a.jsxs)("main",{className:u().container,children:[(0,a.jsxs)("section",{className:u().infoSection,children:[(0,a.jsx)("p",{children:"I'm a full-stack developer with an art & design background. In other words, I went to art school and returned a programmer."}),(0,a.jsx)("p",{children:"Oops."}),(0,a.jsx)("p",{children:"Primarily, I work with web technologies. I can plan, design, build, launch, and maintain a website myself. I've delivered work professionally that ranged from simple CRUD apps to complex line-of-business applications with multiple interdependent cloud components."})]}),(0,a.jsxs)("section",{className:u().links,children:[(0,a.jsx)("p",{children:"Find me here:"}),(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://github.com/stephanpssantos","aria-label":"Github",target:"_blank",rel:"noreferrer",className:"".concat(u().link," ").concat(l().transition),children:[(0,a.jsx)("strong",{children:"Github: "}),"https://github.com/stephanpssantos"]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://www.linkedin.com/in/stephan-santos/","aria-label":"LinkedIn",target:"_blank",rel:"noreferrer",className:"".concat(u().link," ").concat(l().transition),children:[(0,a.jsx)("strong",{children:"LinkedIn: "}),"https://www.linkedin.com/in/stephan-santos/"]})})]}),(0,a.jsx)("section",{className:u().resume,children:(0,a.jsxs)("a",{href:"stephansantos_resume.pdf","aria-label":"View Resume",target:"_blank",rel:"noreferrer",className:"".concat(u().link," ").concat(l().transition," ").concat(l().v_align_mid),children:[(0,a.jsx)("strong",{children:"View Resume"}),(0,a.jsx)("span",{className:u().transform,children:(0,a.jsx)(d,{})})]})})]})]})}},430:function(n){n.exports={container:"About_container__rRFE8",infoSection:"About_infoSection__qid4F",links:"About_links___dUZY",link:"About_link__trebR",transform:"About_transform__sgYjh",resume:"About_resume___gYOe"}},7268:function(n){n.exports={nav__container:"Nav_nav__container__TjUWn",nav__shadow:"Nav_nav__shadow__kwAxe",nav__list:"Nav_nav__list___TwYs",nav__link:"Nav_nav__link__zSE_b",nav__activeLink:"Nav_nav__activeLink__8ahX0"}},3322:function(n){n.exports={container:"common_container__mqVJE",loading:"common_loading__hWacd",centerToBottom:"common_centerToBottom__xOIqh",unloading:"common_unloading__CjZS2",topToCenter:"common_topToCenter__R_kKC",header:"common_header__Lafcr",header__container:"common_header__container__JqaDg",header__sub:"common_header__sub___x4QL",v_align_mid:"common_v_align_mid__OefYo",transition:"common_transition__0r4LC"}},1109:function(n){n.exports={rightArrow:"minis_rightArrow__z8rGQ",upRightArrow:"minis_upRightArrow__BRaSi",pill:"minis_pill__0NGoB"}},9008:function(n,e,t){n.exports=t(2636)},1163:function(n,e,t){n.exports=t(6885)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=512)}),_N_E=n.O()}]);
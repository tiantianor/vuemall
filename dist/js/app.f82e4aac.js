(function(t){function e(e){for(var r,a,o=e[0],s=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-01d0b840":"a6d069c7","chunk-319bc702":"4edaf2b7","chunk-a5ae4536":"e7d428ce","chunk-470dacb2":"6c2d4d14","chunk-5e7858e0":"a464e18d","chunk-084cd6b5":"0ac06306","chunk-7330b9fa":"83554eef"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-01d0b840":1,"chunk-319bc702":1,"chunk-a5ae4536":1,"chunk-470dacb2":1,"chunk-5e7858e0":1,"chunk-084cd6b5":1,"chunk-7330b9fa":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-01d0b840":"bc869fb2","chunk-319bc702":"d25b5b35","chunk-a5ae4536":"b73c1e69","chunk-470dacb2":"03c705bc","chunk-5e7858e0":"c961a055","chunk-084cd6b5":"03a9ebea","chunk-7330b9fa":"1d896325"}[t]+".css",c=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0892":function(t,e,n){"use strict";n("e65a")},"0de4":function(t,e,n){},"1c54":function(t,e,n){"use strict";n("0de4")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"detail"}},[n("router-view")],1),n("main-tab-bar")],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/shopcart"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},d=l,p=(n("1c54"),n("2877")),m=Object(p["a"])(d,s,u,!1,null,"f34b9104",null),f=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v={name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data(){return{}},computed:{isActive(){return-1!==this.$route.path.indexOf(this.path)},activeStyle(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick(){this.$router.replace(this.path)}}},g=v,k=(n("0892"),Object(p["a"])(g,h,b,!1,null,"10a37b72",null)),y=k.exports,_={name:"MainTabBar",components:{TabBar:f,TabBarItem:y}},x=_,w=Object(p["a"])(x,i,o,!1,null,"2913ee44",null),O=w.exports,j={name:"app",components:{MainTabBar:O}},P=j,S=(n("034f"),Object(p["a"])(P,a,c,!1,null,null,null)),T=S.exports,C=n("8c4f");const E=()=>Promise.all([n.e("chunk-a5ae4536"),n.e("chunk-5e7858e0"),n.e("chunk-084cd6b5")]).then(n.bind(null,"77b8")),L=()=>n.e("chunk-01d0b840").then(n.bind(null,"f4ba")),A=()=>Promise.all([n.e("chunk-a5ae4536"),n.e("chunk-470dacb2")]).then(n.bind(null,"c723")),B=()=>n.e("chunk-319bc702").then(n.bind(null,"893c")),$=()=>Promise.all([n.e("chunk-a5ae4536"),n.e("chunk-5e7858e0"),n.e("chunk-7330b9fa")]).then(n.bind(null,"7be8"));r["a"].use(C["a"]);const M=[{path:"",redirect:"/home"},{path:"/home",component:E},{path:"/category",component:L},{path:"/shopcart",component:A},{path:"/profile",component:B},{path:"/detail/:iid",component:$}],N=new C["a"]({routes:M,mode:"history"});var I=N,q=n("2f62");const D="add_counter",J="add_to_cart";var F={[D](t,e){e.count++},[J](t,e){e.checked=!0,t.cartList.push(e)}},H={addCart(t,e){return new Promise((n,r)=>{let a=t.state.cartList.find(t=>t.iid===e.iid);a?(t.commit(D,a),n("当前的商品数量+1")):(e.count=1,t.commit(J,e),n("添加了新的商品"))})}},K={cartLength(t){return t.cartList.length},cartList(t){return t.cartList}};r["a"].use(q["a"]);const U={cartList:[]},z=new q["a"].Store({state:U,mutations:F,actions:H,getters:K});var G=z,Q=n("94db"),R=n.n(Q),V=n("46e9");r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],R.a.attach(document.body),r["a"].use(V["a"],{loading:n("eb67")}),new r["a"]({render:t=>t(T),router:I,store:G}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},e65a:function(t,e,n){},eb67:function(t,e,n){t.exports=n.p+"img/loading.97cf67ff.gif"}});
//# sourceMappingURL=app.f82e4aac.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"018e":function(e,t){},"1cf7":function(e,t,n){var r={"./BackgroundColor.vue":["367e",0,8],"./Basic.vue":["b0d2",0,9],"./OnComponent.vue":["2995",0,10]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="1cf7",e.exports=o},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"toc",(function(){return C}));var o={};n.r(o),n.d(o,"toc",(function(){return _}));var a=n("967e"),u=n.n(a),c=(n("a481"),n("96cf"),n("fa84")),i=n.n(c),s=(n("573e"),n("7d6e"),n("e54f"),n("985d"),n("0047"),n("a1e8"),n("9922"),n("be56"),n("2b0e")),l=n("1f91"),f=n("42d2"),p=n("b05d"),d=n("2a19"),v=n("0967");s["a"].use(p["a"],{config:{dark:"auto"},lang:l["a"],iconSet:f["a"],plugins:{Notify:d["a"],Platform:v["b"]}});var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},b=[],m={name:"App"},y=m,w=n("2877"),x=Object(w["a"])(y,h,b,!1,null,null,null),k=x.exports,g=n("2f62"),O={toc:[]},C=function(e){return e.toc},S=n("4db1"),P=n.n(S),_=function(e,t){var n;(n=e.toc).splice.apply(n,[0,e.toc.length].concat(P()(t)))},q=n("018e"),N={namespaced:!0,state:O,getters:r,mutations:o,actions:q};s["a"].use(g["a"]);var B=function(){var e=new g["a"].Store({modules:{common:N},strict:!1});return e},T=(n("551c"),n("06db"),n("8c4f")),j=[{path:"/",redirect:"/docs"},{path:"/docs",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"8b24"))}}]},{path:"/examples",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"0960"))}}]}];j.push({path:"*",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"e51e"))}});var E=j;s["a"].use(T["a"]);var D=function(){var e=new T["a"]({scrollBehavior:function(e,t,n){return new Promise((function(t){setTimeout((function(){if(void 0!==e.hash&&""!==e.hash){var r=document.getElementById(e.hash.substring(1));if(null!==r)return void t({x:0,y:r.offsetTop-r.scrollHeight})}t(n||{x:0,y:0})}),100)}))},routes:E,mode:"history",base:"/quasar-ui-qoverlay/"});return e},I=function(){return U.apply(this,arguments)};function U(){return U=i()(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof B){e.next=6;break}return e.next=3,B({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=B;case 7:if(t=e.t0,"function"!==typeof D){e.next=14;break}return e.next=11,D({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=D;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(k)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}var z=n("384e");s["a"].use(z["a"]);var J=n("4b46"),Q=n("0ce9"),V=n("2abd");function F(){return L.apply(this,arguments)}function L(){return L=i()(u.a.mark((function e(){var t,n,r,o,a,c,i,l,f;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,a=!0,c=function(e){a=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),l=[void 0,J["default"],Q["default"],V["default"]],f=0;case 11:if(!(!0===a&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:n,router:o,store:r,Vue:s["a"],ssrContext:null,redirect:c,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==a){e.next=31;break}return e.abrupt("return");case 31:new s["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),L.apply(this,arguments)}F()},"384e":function(e,t,n){"use strict";n.d(t,"b",(function(){return r["a"]}));n("7f7f");var r=n("ab0b"),o=(n("c5f6"),n("0230")),a=n("f2f6"),u=n("1b40"),c=n("10b2"),i={name:"QOverlay",mixins:[a["a"],u["a"]],props:{backgroundColor:{type:String,default:"#000000"},opacity:{type:[Number,String],default:.35},zIndex:{type:[Number,String],default:6e3},cursorType:{type:String,default:"not-allowed"},noScroll:Boolean},computed:{styles:function(){var e=Object(c["a"])(this.backgroundColor);return{zIndex:this.zIndex,backgroundColor:"rgba(".concat(e.r,", ").concat(e.g,", ").concat(e.b,", ").concat(this.opacity,")"),padding:0,margin:0}}},beforeDestroy:function(){!0===this.noScroll&&!0===this.value&&this.__preventScroll(!1)},render:function(e){var t=Object(o["a"])(this,"default"),n=Object(o["a"])(this,"body"),r=void 0===t;if(this.__preventScroll(!0===this.noScroll&&!0===this.value),!0===this.value&&!0===r)return e("div",{staticClass:"q-overlay fixed fullscreen",class:"cursor-".concat(this.cursorType),style:this.styles},n);if(!0===this.value||!0!==r){if(!0===this.value&&!0!==r){var a=e("div",{staticClass:"q-overlay q-overlay--component",class:"cursor-".concat(this.cursorType),style:this.styles},n);return e("div",{staticClass:"q-overlay--wrapper"},[a].concat(t))}return e("div",{staticClass:"q-overlay"},t)}}};t["a"]={version:r["a"],QOverlay:i,install:function(e){e.component(i.name,i)}}},ab0b:function(e){e.exports=JSON.parse('{"a":"1.0.3"}')},c50f:function(e,t,n){var r={"./BackgroundColor.vue":["6eac",11],"./Basic.vue":["2123",12],"./OnComponent.vue":["6e12",13]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="c50f",e.exports=o}},[[0,3,0]]]);
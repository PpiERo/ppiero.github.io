(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{a3f2:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{PageCur:"basics"}},methods:{NavChange:function(a){this.PageCur=a.currentTarget.dataset.cur,console.log(a.currentTarget.dataset.cur)}}};t.default=e},bdfc:function(a,t,n){"use strict";n.r(t);var e=n("a3f2"),i=n.n(e);for(var c in e)"default"!==c&&function(a){n.d(t,a,(function(){return e[a]}))}(c);t["default"]=i.a},ddf2:function(a,t,n){"use strict";n.r(t);var e=n("ea09"),i=n("bdfc");for(var c in i)"default"!==c&&function(a){n.d(t,a,(function(){return i[a]}))}(c);var u,s=n("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"1177abbf",null,!1,e["a"],u);t["default"]=r.exports},ea09:function(a,t,n){"use strict";var e;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return e}));var i=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",{staticClass:"content"},["basics"==a.PageCur?n("basics"):a._e(),"component"==a.PageCur?n("components"):a._e(),"plugin"==a.PageCur?n("plugin"):a._e(),n("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[n("v-uni-view",{staticClass:"action",attrs:{"data-cur":"basics"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-cu-image"},[n("v-uni-image",{attrs:{src:"/static/tabbar/basics"+["basics"==a.PageCur?"_cur":""]+".png"}})],1),n("v-uni-view",{class:"basics"==a.PageCur?"text-green":"text-gray"},[a._v("元素")])],1),n("v-uni-view",{staticClass:"action",attrs:{"data-cur":"component"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-cu-image"},[n("v-uni-image",{attrs:{src:"/static/tabbar/component"+["component"==a.PageCur?"_cur":""]+".png"}})],1),n("v-uni-view",{class:"component"==a.PageCur?"text-green":"text-gray"},[a._v("组件")])],1),n("v-uni-view",{staticClass:"action",attrs:{"data-cur":"plugin"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-cu-image"},[n("v-uni-image",{attrs:{src:"/static/tabbar/plugin"+["plugin"==a.PageCur?"_cur":""]+".png"}})],1),n("v-uni-view",{class:"plugin"==a.PageCur?"text-green":"text-gray"},[a._v("工具箱")])],1),n("v-uni-view",{staticClass:"action",attrs:{"data-cur":"user"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-cu-image"},[n("v-uni-image",{attrs:{src:"/static/tabbar/user"+["user"==a.PageCur?"_cur":""]+".png"}})],1),n("v-uni-view",{class:"user"==a.PageCur?"text-green":"text-gray"},[a._v("我的")])],1)],1)],1)},c=[]}}]);
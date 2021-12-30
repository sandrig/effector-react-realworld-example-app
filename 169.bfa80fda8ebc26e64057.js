"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[169,771],{8771:function(e,n,r){r.r(n);var t=r(1650),o=r(4246);n.default=function(){return(0,o.jsx)(t.W,{children:(0,o.jsx)("h1",{children:"404 Page Not Found"})})}},169:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var t=r(7378),o=r(9635),i=r(1650),c=r(5382),s=r(9462),l=r(8771),u=r(9848),a=r(4246),f=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(676)]).then(r.bind(r,1676))})),d=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(419)]).then(r.bind(r,5419))})),m=function(){var e=(0,o.$B)().path;return(0,a.jsx)(t.Suspense,{fallback:(0,a.jsx)(u.$,{}),children:(0,a.jsxs)(o.rs,{children:[(0,a.jsx)(o.AW,{exact:!0,path:e,children:(0,a.jsx)(f,{})}),(0,a.jsx)(o.AW,{path:"".concat(e,"/favorites"),children:(0,a.jsx)(d,{})}),(0,a.jsx)(o.AW,{path:"*",children:(0,a.jsx)(l.default,{})})]})})},j=r(4289),h=r(7765),p=function(){return s.wl.useIsVisitor()?(0,a.jsx)(j.rU,{to:"/settings",children:(0,a.jsxs)(h.z,{className:"btn-outline-secondary action-btn",size:"sm",children:[(0,a.jsx)("i",{className:"ion-gear-a"})," Edit Profile Settings"]})}):null},x=function(){var e=s.wl.useUserName(),n=s.wl.useFollowing();return s.wl.useIsVisitor()?null:(0,a.jsxs)(h.z,{className:"action-btn btn-secondary",size:"sm",onClick:function(){s.f_({username:e,following:n})},children:[(0,a.jsx)("i",{className:"ion-plus-round"})," ",n?"Unfollow":"Follow"," ",e]})},b=function(){var e=s.wl.useBio();return e?(0,a.jsx)("p",{children:e}):null},v=function(){var e=s.wl.useUserName(),n=s.wl.useImage();return(0,a.jsx)("img",{alt:e,className:"user-img",src:n})},w=function(){var e=s.wl.useUserName();return(0,a.jsx)("h4",{children:e})},g=(0,t.memo)((function(){return(0,a.jsx)("div",{className:"user-info",children:(0,a.jsx)(i.W,{children:(0,a.jsx)(c.X,{children:(0,a.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,a.jsx)(v,{}),(0,a.jsx)(w,{}),(0,a.jsx)(b,{}),(0,a.jsx)(p,{}),(0,a.jsx)(x,{})]})})})})}));g.displayName="ProfileInfo";var y=r(3128),O=function(e){var n=e.children,r=(0,o.$B)().url;return(0,a.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,a.jsxs)("ul",{className:"nav nav-pills outline-active articles-toggle",children:[(0,a.jsx)(y.L,{children:(0,a.jsx)(j.OL,{exact:!0,className:"nav-link",to:"".concat(r),children:"My Articles"})}),(0,a.jsx)(y.L,{children:(0,a.jsx)(j.OL,{exact:!0,className:"nav-link",to:"".concat(r,"/favorites"),children:"Favorited Articles"})})]}),n]})},N=function(){var e=(0,o.UO)().username;return(0,t.useEffect)((function(){e&&s.bK(e)}),[e]),(0,a.jsxs)("div",{className:"profile-page",children:[(0,a.jsx)(g,{}),(0,a.jsx)(i.W,{children:(0,a.jsx)(c.X,{children:(0,a.jsx)(O,{children:(0,a.jsx)(m,{})})})})]})}},9462:function(e,n,r){r.d(n,{f_:function(){return s},bK:function(){return l},wl:function(){return x}});var t=r(1549),o=r(9041),i=r(2737),c=r(946),s=(0,t.yM)(),l=(0,t.GW)((function(e){return c.WY({url:"profiles/".concat(e),method:"get"}).then((function(e){return e.profile}))})),u=(0,t.GW)((function(e){return c.WY({url:"profiles/".concat(e,"/follow"),method:"post"}).then((function(e){return e.profile}))})),a=(0,t.GW)((function(e){return c.WY({url:"profiles/".concat(e,"/follow"),method:"delete"}).then((function(e){return e.profile}))})),f=(0,t.MT)({bio:"",following:!1,image:"",username:""}).on([l.doneData,u.doneData,a.doneData],(function(e,n){return n})),d=f.map((function(e){return e.bio})),m=f.map((function(e){return e.image})),j=f.map((function(e){return e.username})),h=f.map((function(e){return e.following}));(0,t.Vl)({source:s,match:{canFollowed:function(e){return!0===e.following},cantFollowed:function(e){return!1===e.following}},cases:{canFollowed:a.prepend((function(e){return e.username})),cantFollowed:u.prepend((function(e){return e.username}))}});var p=(0,t.$e)(f,i.Sj,(function(e,n){return e.username===n.username})),x={useIsVisitor:function(){return(0,o.oR)(p)},useFollowing:function(){return(0,o.oR)(h)},useBio:function(){return(0,o.oR)(d)},useUserName:function(){return(0,o.oR)(j)},useImage:function(){return(0,o.oR)(m)}}},7765:function(e,n,r){r.d(n,{z:function(){return f}});var t=r(7378),o=r(8944),i=r(4246),c=["type","size","className","children"];function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){u(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=(0,t.memo)((0,t.forwardRef)((function(e,n){var r=e.type,t=void 0===r?"button":r,s=e.size,u=void 0===s?"":s,f=e.className,d=void 0===f?"":f,m=e.children,j=a(e,c),h=(0,o.Z)("btn",{"btn-sm":"sm"===u,"btn-lg":"lg"===u});return(0,i.jsx)("button",l(l({className:"".concat(h," ").concat(d),ref:n,type:t},j),{},{children:m}))})));f.displayName="Button"},5382:function(e,n,r){r.d(n,{X:function(){return o}});var t=r(4246),o=function(e){var n=e.children,r=e.className,o=void 0===r?"":r;return(0,t.jsx)("div",{className:"row ".concat(o),children:n})}}}]);
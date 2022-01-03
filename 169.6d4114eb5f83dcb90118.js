"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[169,771],{8771:function(n,e,r){r.r(e);var t=r(1650),s=r(4246);e.default=function(){return(0,s.jsx)(t.W,{children:(0,s.jsx)("h1",{children:"404 Page Not Found"})})}},169:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t=r(7378),s=r(9635),o=r(1650),i=r(5382),l=r(9462),u=r(8771),c=r(4300),a=r(9848),f=r(4246),d=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(676)]).then(r.bind(r,1676))})),m=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(419)]).then(r.bind(r,5419))})),h=function(){return(0,f.jsx)(t.Suspense,{fallback:(0,f.jsx)(a.$,{}),children:(0,f.jsxs)(s.rs,{children:[(0,f.jsx)(s.AW,{exact:!0,path:c.Z.profile.root,children:(0,f.jsx)(d,{})}),(0,f.jsx)(s.AW,{path:c.Z.profile.favorites,children:(0,f.jsx)(m,{})}),(0,f.jsx)(s.AW,{path:"*",children:(0,f.jsx)(u.default,{})})]})})},x=r(4289),j=r(7765),p=function(){return l.wl.useIsVisitor()?(0,f.jsx)(x.rU,{to:c.Z.settings,children:(0,f.jsxs)(j.z,{className:"btn-outline-secondary action-btn",size:"sm",children:[(0,f.jsx)("i",{className:"ion-gear-a"})," Edit Profile Settings"]})}):null},v=function(){var n=l.wl.useUserName(),e=l.wl.useFollowing();return l.wl.useIsVisitor()?null:(0,f.jsxs)(j.z,{className:"action-btn btn-secondary",size:"sm",onClick:function(){l.f_({username:n,following:e})},children:[(0,f.jsx)("i",{className:"ion-plus-round"})," ",e?"Unfollow":"Follow"," ",n]})},w=function(){var n=l.wl.useBio();return n?(0,f.jsx)("p",{children:n}):null},g=function(){var n=l.wl.useUserName(),e=l.wl.useImage();return(0,f.jsx)("img",{alt:n,className:"user-img",src:e})},N=function(){var n=l.wl.useUserName();return(0,f.jsx)("h4",{children:n})},b=(0,t.memo)((function(){return(0,f.jsx)("div",{className:"user-info",children:(0,f.jsx)(o.W,{children:(0,f.jsx)(i.X,{children:(0,f.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,f.jsx)(g,{}),(0,f.jsx)(N,{}),(0,f.jsx)(w,{}),(0,f.jsx)(p,{}),(0,f.jsx)(v,{})]})})})})}));b.displayName="ProfileInfo";var W=r(3128),F=function(n){var e=n.children,r=(0,s.$B)().url;return(0,f.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,f.jsxs)("ul",{className:"nav nav-pills outline-active articles-toggle",children:[(0,f.jsx)(W.L,{children:(0,f.jsx)(x.OL,{exact:!0,className:"nav-link",to:"".concat(r),children:"My Articles"})}),(0,f.jsx)(W.L,{children:(0,f.jsx)(x.OL,{exact:!0,className:"nav-link",to:"".concat(r,"/favorites"),children:"Favorited Articles"})})]}),e]})},k=function(){var n=(0,s.UO)().username;return(0,t.useEffect)((function(){n&&l.bK(n)}),[n]),(0,f.jsxs)("div",{className:"profile-page",children:[(0,f.jsx)(b,{}),(0,f.jsx)(o.W,{children:(0,f.jsx)(i.X,{children:(0,f.jsx)(F,{children:(0,f.jsx)(h,{})})})})]})}},9462:function(n,e,r){r.d(e,{f_:function(){return l},bK:function(){return u},wl:function(){return p}});var t=r(1549),s=r(9041),o=r(2737),i=r(946),l=(0,t.yM)(),u=(0,t.GW)((function(n){return i.WY({url:"profiles/".concat(n),method:"get"}).then((function(n){return n.profile}))})),c=(0,t.GW)((function(n){return i.WY({url:"profiles/".concat(n,"/follow"),method:"post"}).then((function(n){return n.profile}))})),a=(0,t.GW)((function(n){return i.WY({url:"profiles/".concat(n,"/follow"),method:"delete"}).then((function(n){return n.profile}))})),f=(0,t.MT)({bio:"",following:!1,image:"",username:""}).on([u.doneData,c.doneData,a.doneData],(function(n,e){return e})),d=f.map((function(n){return n.bio})),m=f.map((function(n){return n.image})),h=f.map((function(n){return n.username})),x=f.map((function(n){return n.following}));(0,t.Vl)({source:l,match:{canFollowed:function(n){return!0===n.following},cantFollowed:function(n){return!1===n.following}},cases:{canFollowed:a.prepend((function(n){return n.username})),cantFollowed:c.prepend((function(n){return n.username}))}});var j=(0,t.$e)(f,o.Sj,(function(n,e){return n.username===e.username})),p={useIsVisitor:function(){return(0,s.oR)(j)},useFollowing:function(){return(0,s.oR)(x)},useBio:function(){return(0,s.oR)(d)},useUserName:function(){return(0,s.oR)(h)},useImage:function(){return(0,s.oR)(m)}}},5382:function(n,e,r){r.d(e,{X:function(){return s}});var t=r(4246),s=function(n){var e=n.children,r=n.className,s=void 0===r?"":r;return(0,t.jsx)("div",{className:"row ".concat(s),children:e})}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[916],{6763:function(e,t,n){n.d(t,{qn:function(){return v},fR:function(){return b},o4:function(){return r}});var r={};n.r(r),n.d(r,{createFeed:function(){return f}});var a=n(1549),i=n(9041),c=n(3719),o=n(6942);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e.effect,n=(0,a.yM)(),r=(0,a.GW)((function(e){var t=e.slug;return o.v_("articles/".concat(t,"/favorite")).then((function(e){return e.data}))})),u=(0,a.GW)((function(e){var t=e.slug;return o.IV("articles/".concat(t,"/favorite")).then((function(e){return e.data}))})),l=(0,a.MT)({articlesCount:0,articles:[]}).on(t.doneData,(function(e,t){return t})).on([r.done,u.done],(function(e,t){var n=t.params,r=t.result;return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==n.slug?e:s(s({},e),{},{favorited:r.article.favorited,favoritesCount:r.article.favoritesCount})}))})})),f=l.map((function(e){return e.articlesCount})),d=l.map((function(e){return e.articles})),p=(0,c.status)({effect:t}),g=(0,a.$e)(p,d,(function(e,t){return("done"===e||"fail"===e)&&0===t.length}));return(0,a.Vl)({source:n,match:{favorite:function(e){return!0===e.favorited},unfavorite:function(e){return!1===e.favorited}},cases:{favorite:u,unfavorite:r}}),{favoriteArticleToggled:n,setUnfavoriteArticleFx:u,$feed:l,$totalPages:f,$articles:d,$isEmptyFeed:g,selectors:{useLoading:function(){return(0,i.oR)(t.pending)},useIsEmpty:function(){return(0,i.oR)(g)}}}}var d=n(4246),p=function(e){var t=e.children;return(0,d.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},g=n(303),v=function(e){var t=e.author,n=e.createdAt,r=e.children;return(0,d.jsxs)("div",{className:"article-meta",children:[(0,d.jsx)(g.rU,{to:"/@".concat(t.username),children:(0,d.jsx)("img",{alt:t.username,src:t.image})}),(0,d.jsxs)("div",{className:"info",children:[(0,d.jsx)(g.rU,{className:"author",to:"/@".concat(t.username),children:t.username}),(0,d.jsx)("span",{className:"date",children:new Date(n).toDateString()})]}),r]})},h=n(7391),m=function(e){var t=e.active,n=e.onClick,r=e.children;return(0,d.jsxs)(h.zx,{className:"button-favorite btn-outline-primary","data-active":t,size:"sm",onClick:n,children:[(0,d.jsx)("i",{className:"ion-heart"})," ",r]})},j=function(e){var t=e.data,n=t.author,r=t.createdAt,a=t.slug,i=t.title,c=t.description,o=t.tagList,u=t.favorited,s=t.favoritesCount,l=e.onClick;return(0,d.jsxs)("article",{className:"article-preview",children:[(0,d.jsx)(v,{author:n,createdAt:r,children:(0,d.jsx)("div",{className:"pull-xs-right",children:(0,d.jsx)(m,{active:u,onClick:l,children:s})})}),(0,d.jsxs)(g.rU,{className:"preview-link",to:"/article/".concat(a),children:[(0,d.jsx)("h1",{children:i}),(0,d.jsx)("p",{children:c}),(0,d.jsx)("span",{children:"Read more..."}),(0,d.jsx)(h.PS,{children:o.map((function(e){return(0,d.jsx)(h.Vp,{children:e.toLowerCase()},e)}))})]})]})},x=function(e){return e.show?(0,d.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null},b=function(e){var t=e.loading,n=e.isEmpty,r=e.pageSize,a=e.pageNumber,c=e.totalPages,o=e.articles,u=e.onPageChange,s=e.onArticleClick;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{show:n}),(0,d.jsx)(p,{children:(0,i.sm)(o,{getKey:function(e){return e.slug},fn:function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(j,{data:e,onClick:function(){return s(e)}})})}})}),(0,d.jsx)(h.tl,{current:a,pageSize:r,total:c,onPageChange:u}),(0,d.jsx)(h.$j,{loading:t})]})}},6925:function(e,t,n){n.d(t,{F:function(){return i}});var r=n(1549),a=n(8737);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageSize,n=void 0===t?10:t,i=(0,r.yM)(),c=(0,r.MT)(n),o=(0,r.MT)("1").on(i.map(String),(function(e,t){return t})),u=o.map(Number);(0,a.tJ)({store:o,key:"page"});var s=u.map((function(e){return e-1}));return{paginationChanged:i,$pageSize:c,$pageNumber:u,$pageIndex:s}}n(7405)},8916:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(7378),a=n(6763),i=n(1549),c=n(9041),o=n(6925),u=n(6942),s=n(3300),l=(0,i.GW)((function(e){var t=e.pageSize,n=e.pageIndex;return u.U2("articles/feed?".concat((0,s.b)(t,n))).then((function(e){return e.data}))})),f=a.o4.createFeed({effect:l}),d=f.favoriteArticleToggled,p=(f.$feed,f.$isEmptyFeed),g=f.$articles,v=f.$totalPages,h=(0,o.F)({pageSize:10}),m=h.paginationChanged,j=h.$pageSize,x=h.$pageIndex,b=h.$pageNumber,y=function(){return(0,c.oR)(l.pending)},C=function(){return(0,c.oR)(p)},O=function(){return(0,c.oR)(v)},w=function(){return(0,c.oR)(j)},N=function(){return(0,c.oR)(b)},P=function(){return(0,c.oR)(x)},$=n(4246),S=function(){var e=y(),t=C(),n=w(),i=P(),c=N(),o=O();return(0,r.useEffect)((function(){l({pageSize:n,pageIndex:i})}),[n,i]),(0,$.jsx)(a.fR,{articles:g,isEmpty:t,loading:e,pageNumber:c,pageSize:n,totalPages:o,onArticleClick:d,onPageChange:function(e){m(e),l({pageSize:n,pageIndex:i})}})}},3300:function(e,t,n){n.d(t,{b:function(){return r}});var r=function(e,t){return"limit=".concat(e,"&offset=").concat(t*e)}}}]);
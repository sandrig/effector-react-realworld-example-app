"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[593],{1451:function(e,t,n){n.d(t,{qn:function(){return m},fR:function(){return P},o4:function(){return r}});var r={};n.r(r),n.d(r,{createFeed:function(){return g},createPagination:function(){return d}});var a=n(1549),i=n(9041),c=n(8737),o=n(3719),u=n(6942);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=e.pageSize,n=e.effect,r=(0,a.MT)({articlesCount:0,articles:[]}).on(n.doneData,(function(e,t){return t})),c=r.map((function(e){return e.articlesCount})),s=r.map((function(e){return e.articles})),f=(0,o.status)({effect:n}),g=(0,a.$e)(f,s,(function(e,t){return("done"===e||"fail"===e)&&0===t.length})),p=d(t),v=p.paginationChanged,h=p.$pageSize,m=p.$pageIndex,j=p.$pageNumber;return{paginationChanged:v,favoriteArticleToggled:function(e){var t=(0,a.yM)(),n=(0,a.GW)((function(e){var t=e.slug;return u.v_("articles/".concat(t,"/favorite")).then((function(e){return e.data}))})),r=(0,a.GW)((function(e){var t=e.slug;return u.IV("articles/".concat(t,"/favorite")).then((function(e){return e.data}))}));return e.on([n.done,r.done],(function(e,t){var n=t.params,r=t.result;return l(l({},e),{},{articles:e.articles.map((function(e){return e.slug!==n.slug?e:l(l({},e),{},{favorited:r.article.favorited,favoritesCount:r.article.favoritesCount})}))})})),(0,a.Vl)({source:t,match:{favorite:function(e){return!0===e.favorited},unfavorite:function(e){return!1===e.favorited}},cases:{favorite:r,unfavorite:n}}),{favoriteArticleToggled:t}}(r).favoriteArticleToggled,$totalPages:c,$articles:s,$isEmptyFeed:g,$pageSize:h,$pageIndex:m,$pageNumber:j,selectors:{useLoading:function(){return(0,i.oR)(n.pending)},useIsEmpty:function(){return(0,i.oR)(g)},usePageSize:function(){return(0,i.oR)(h)},usePageIndex:function(){return(0,i.oR)(m)},usePageNumber:function(){return(0,i.oR)(j)},useTotalPages:function(){return(0,i.oR)(c)}}}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=(0,a.yM)(),n=(0,a.MT)(e),r=(0,a.MT)("1").on(t.map(String),(function(e,t){return t})),i=r.map(Number);(0,c.tJ)({store:r,key:"page"});var o=i.map((function(e){return e-1}));return{paginationChanged:t,$pageSize:n,$pageNumber:i,$pageIndex:o}}var p=n(4246),v=function(e){var t=e.children;return(0,p.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},h=n(5483),m=function(e){var t=e.author,n=e.createdAt,r=e.children;return(0,p.jsxs)("div",{className:"article-meta",children:[(0,p.jsx)(h.rU,{to:"/@".concat(t.username),children:(0,p.jsx)("img",{alt:t.username,src:t.image})}),(0,p.jsxs)("div",{className:"info",children:[(0,p.jsx)(h.rU,{className:"author",to:"/@".concat(t.username),children:t.username}),(0,p.jsx)("span",{className:"date",children:new Date(n).toDateString()})]}),r]})},j=n(9511),x=function(e){var t=e.active,n=e.onClick,r=e.children;return(0,p.jsxs)(j.zx,{className:"btn btn-sm btn-outline-primary","data-active":t,onClick:n,children:[(0,p.jsx)("i",{className:"ion-heart"})," ",r]})},b=function(e){var t=e.data,n=t.author,r=t.createdAt,a=t.slug,i=t.title,c=t.description,o=t.tagList,u=t.favorited,s=t.favoritesCount,l=e.onClick;return(0,p.jsxs)("article",{className:"article-preview",children:[(0,p.jsx)(m,{author:n,createdAt:r,children:(0,p.jsx)("div",{className:"pull-xs-right",children:(0,p.jsx)(x,{active:u,onClick:l,children:s})})}),(0,p.jsxs)(h.rU,{className:"preview-link",to:"/article/".concat(a),children:[(0,p.jsx)("h1",{children:i}),(0,p.jsx)("p",{children:c}),(0,p.jsx)("span",{children:"Read more..."}),(0,p.jsx)(j.PS,{children:o.map((function(e){return(0,p.jsx)(j.Vp,{children:e.toLowerCase()},e)}))})]})]})},y=function(e){return e.show?(0,p.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null},P=function(e){var t=e.loading,n=e.isEmpty,r=e.pageSize,a=e.pageNumber,c=e.totalPages,o=e.articles,u=e.onPageChange,s=e.onArticleClick;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y,{show:n}),(0,p.jsx)(v,{children:(0,i.sm)(o,{getKey:function(e){return e.slug},fn:function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(b,{data:e,onClick:function(){return s(e)}})})}})}),(0,p.jsx)(j.tl,{current:a,pageSize:r,total:c,onPageChange:u}),(0,p.jsx)(j.$j,{loading:t})]})}},3593:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(9041),a=n(1451),i=n(1549),c=n(6942),o=n(3300),u=n(4397),s=(0,i.GW)((function(e){var t=e.tag,n=e.pageSize,r=e.pageIndex;return c.U2("articles?tag=".concat(encodeURIComponent(t),"&").concat((0,o.b)(n,r))).then((function(e){return e.data}))})),l=(0,r.Bq)(),f=a.o4.createFeed({effect:s}),g=f.paginationChanged,d=f.favoriteArticleToggled,p=f.$pageSize,v=f.$pageIndex,h=f.$articles,m=f.selectors;(0,i.UP)({source:{tag:u.o.$currentTag,pageSize:p,pageIndex:v},clock:[l.open,g,u.o.tagSelected],target:s});var j=n(4246),x=function(){(0,r.DD)(l);var e=m.useLoading(),t=m.useIsEmpty(),n=m.usePageSize(),i=m.usePageNumber(),c=m.useTotalPages();return(0,j.jsx)(a.fR,{articles:h,isEmpty:t,loading:e,pageNumber:i,pageSize:n,totalPages:c,onArticleClick:d,onPageChange:g})}},3300:function(e,t,n){n.d(t,{b:function(){return r}});var r=function(e,t){return"limit=".concat(e,"&offset=").concat(t*e)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[100],{1451:function(e,r,t){t.d(r,{qn:function(){return j},fR:function(){return O},o4:function(){return n}});var n={};t.r(n),t.d(n,{createFeed:function(){return d},createPagination:function(){return m}});var a=t(1549),c=t(9041),o=t(8737),i=t(3719),s=t(6942);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){var r=e.pageSize,t=e.effect,n=(0,a.MT)({articlesCount:0,articles:[]}).on(t.doneData,(function(e,r){return r})),o=n.map((function(e){return e.articlesCount})),u=n.map((function(e){return e.articles})),f=(0,i.status)({effect:t}),d=(0,a.$e)(f,u,(function(e,r){return("done"===e||"fail"===e)&&0===r.length})),g=m(r),h=g.paginationChanged,p=g.$pageSize,j=g.$pageIndex,v=g.$pageNumber;return{paginationChanged:h,favoriteArticleToggled:function(e){var r=(0,a.yM)(),t=(0,a.GW)((function(e){var r=e.slug;return s.v_("articles/".concat(r,"/favorite")).then((function(e){return e.data}))})),n=(0,a.GW)((function(e){var r=e.slug;return s.IV("articles/".concat(r,"/favorite")).then((function(e){return e.data}))}));return e.on([t.done,n.done],(function(e,r){var t=r.params,n=r.result;return l(l({},e),{},{articles:e.articles.map((function(e){return e.slug!==t.slug?e:l(l({},e),{},{favorited:n.article.favorited,favoritesCount:n.article.favoritesCount})}))})})),(0,a.Vl)({source:r,match:{favorite:function(e){return!0===e.favorited},unfavorite:function(e){return!1===e.favorited}},cases:{favorite:n,unfavorite:t}}),{favoriteArticleToggled:r}}(n).favoriteArticleToggled,$totalPages:o,$articles:u,$isEmptyFeed:d,$pageSize:p,$pageIndex:j,$pageNumber:v,selectors:{useLoading:function(){return(0,c.oR)(t.pending)},useIsEmpty:function(){return(0,c.oR)(d)},usePageSize:function(){return(0,c.oR)(p)},usePageIndex:function(){return(0,c.oR)(j)},usePageNumber:function(){return(0,c.oR)(v)},useTotalPages:function(){return(0,c.oR)(o)}}}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,r=(0,a.yM)(),t=(0,a.MT)(e),n=(0,a.MT)("1").on(r.map(String),(function(e,r){return r})),c=n.map(Number);(0,o.tJ)({store:n,key:"page"});var i=c.map((function(e){return e-1}));return{paginationChanged:r,$pageSize:t,$pageNumber:c,$pageIndex:i}}var g=t(4246),h=function(e){var r=e.children;return(0,g.jsx)("ul",{className:"articles-wrapper list-unstyled",children:r})},p=t(5483),j=function(e){var r=e.author,t=e.createdAt,n=e.children;return(0,g.jsxs)("div",{className:"article-meta",children:[(0,g.jsx)(p.rU,{to:"/@".concat(r.username),children:(0,g.jsx)("img",{alt:r.username,src:r.image})}),(0,g.jsxs)("div",{className:"info",children:[(0,g.jsx)(p.rU,{className:"author",to:"/@".concat(r.username),children:r.username}),(0,g.jsx)("span",{className:"date",children:new Date(t).toDateString()})]}),n]})},v=t(9511),b=function(e){var r=e.active,t=e.onClick,n=e.children;return(0,g.jsxs)(v.zx,{className:"btn btn-sm btn-outline-primary","data-active":r,onClick:t,children:[(0,g.jsx)("i",{className:"ion-heart"})," ",n]})},x=function(e){var r=e.data,t=r.author,n=r.createdAt,a=r.slug,c=r.title,o=r.description,i=r.tagList,s=r.favorited,u=r.favoritesCount,l=e.onClick;return(0,g.jsxs)("article",{className:"article-preview",children:[(0,g.jsx)(j,{author:t,createdAt:n,children:(0,g.jsx)("div",{className:"pull-xs-right",children:(0,g.jsx)(b,{active:s,onClick:l,children:u})})}),(0,g.jsxs)(p.rU,{className:"preview-link",to:"/article/".concat(a),children:[(0,g.jsx)("h1",{children:c}),(0,g.jsx)("p",{children:o}),(0,g.jsx)("span",{children:"Read more..."}),(0,g.jsx)(v.PS,{children:i.map((function(e){return(0,g.jsx)(v.Vp,{children:e.toLowerCase()},e)}))})]})]})},y=function(e){return e.show?(0,g.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null},O=function(e){var r=e.loading,t=e.isEmpty,n=e.pageSize,a=e.pageNumber,o=e.totalPages,i=e.articles,s=e.onPageChange,u=e.onArticleClick;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{show:t}),(0,g.jsx)(h,{children:(0,c.sm)(i,{getKey:function(e){return e.slug},fn:function(e){return(0,g.jsx)("li",{children:(0,g.jsx)(x,{data:e,onClick:function(){return u(e)}})})}})}),(0,g.jsx)(v.tl,{current:a,pageSize:n,total:o,onPageChange:s}),(0,g.jsx)(v.$j,{loading:r})]})}},3100:function(e,r,t){t.r(r),t.d(r,{default:function(){return Y}});var n=t(9041),a=t(5483),c=t(9511),o=t(3312),i=t(227),s=t(1549),u=t(6942),l=["createdAt"];function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h=(0,s.Fj)("article-page"),p=h.createEvent(),j=h.createEffect((function(e){return u.U2("articles/".concat(e)).then((function(e){return e.data.article})).then((function(e){var r=e.createdAt;return d(d({},g(e,l)),{},{createdAt:new Date(r).toDateString()})}))})),v=h.createEffect((function(e){return u.IV("articles/".concat(e))})),b=(0,n.Bq)(),x=b.state.map((function(e){return e.slug})),y=(0,s.nu)(j.doneData,{title:"",slug:"",body:"",createdAt:"",updatedAt:"",tagList:[],description:"",author:{username:"",bio:"",image:"",following:!1},favorited:!1,favoritesCount:0}),O=(0,s.$e)(y,o.o4.bR,(function(e,r){return e.author.username===r.username}));(0,s.UP)({source:x,clock:b.open,target:j}),(0,s.UP)({source:x,clock:p,target:v}),v.done.watch((function(){a.m8.push("/")}));var w=t(8438);function P(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return N(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var A=(0,s.yM)(),D=(0,s.GW)((function(e){return u.U2("articles/".concat(e,"/comments")).then((function(e){return e.data.comments}))})),S=(0,s.GW)((function(e){var r=e.slug,t=e.body;return u.v_("articles/".concat(r,"/comments"),{body:t}).then((function(e){return e.data.comment}))})),C=(0,s.GW)((function(e){var r=e.slug,t=e.id;return u.IV("articles/".concat(r,"/comments/").concat(t))})),k=(0,n.Bq)(),R=k.state.map((function(e){return e.slug})),I=(0,s.nu)(D.doneData,[]).on(S.doneData,(function(e,r){return[r].concat(P(e))})).on(C.done,(function(e,r){var t=r.params;return e.filter((function(e){return e.id!==t.id}))})),$=(0,w.Np)({fields:{comment:{init:""}}});(0,s.UP)({source:R,clock:R.updates,target:D}),(0,s.UP)({source:{slug:R,body:$.fields.comment.$value},clock:$.submit,target:S}),(0,s.eH)({from:S,to:$.reset}),(0,s.UP)({source:R,clock:A,fn:function(e,r){return{slug:e,id:r}},target:C}),i.o._4.on([S.failData,C.failData],(function(e,r){var t;return null===(t=r.response)||void 0===t?void 0:t.data})).reset($.$touched);var U=t(4246),E=function(){var e=(0,n.oR)(o.o4.bR),r=e.image,t=e.username;return(0,U.jsxs)("div",{className:"card-footer",children:[(0,U.jsx)("img",{alt:t,className:"comment-author-img",src:r}),(0,U.jsx)(c.zx,{className:"btn-sm btn-primary",type:"submit",children:"Post Comment"})]})},z=function(){var e=(0,w.cI)($),r=e.submit,t=e.fields;return(0,U.jsxs)(c.l0,{className:"card comment-form",onSubmit:function(e){e.preventDefault(),r()},children:[(0,U.jsx)("div",{className:"card-block",children:(0,U.jsx)(c.NI,{as:"textarea",placeholder:"Write a comment...",rows:3,value:t.comment.value,onChange:function(e){return t.comment.onChange(e.target.value)}})}),(0,U.jsx)(E,{})]})},T=function(e){var r=e.author,t=e.onClick,a=(0,n.oR)(o.o4.bR).username,i=o.wl.useIsAuth(),s=a===r.username;return i&&s?(0,U.jsx)(c.zx,{className:"mod-options btn-delete",onClick:t,children:(0,U.jsx)("i",{className:"ion-trash-a"})}):null},F=function(e){var r=e.author,t=e.createdAt,n=e.id;return(0,U.jsxs)("div",{className:"card-footer",children:[(0,U.jsx)(a.rU,{className:"comment-author",to:"/@".concat(r.username),children:(0,U.jsx)("img",{alt:r.username,className:"comment-author-img",src:r.image})})," ",(0,U.jsx)(a.rU,{className:"comment-author",to:"/@".concat(r.username),children:r.username}),(0,U.jsx)("span",{className:"date-posted",children:new Date(t).toDateString()}),(0,U.jsx)(T,{author:r,onClick:function(){return A(n)}})]})};function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach((function(r){V(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function V(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var W=function(e){var r=e.comment;return(0,U.jsxs)("div",{className:"card",children:[(0,U.jsx)("div",{className:"card-block",children:(0,U.jsx)("p",{className:"card-text",children:r.body})}),(0,U.jsx)(F,L({},r))]})},G=function(){return(0,U.jsx)(c.aV,{children:(0,n.sm)(I,{getKey:function(e){return e.id},fn:function(e){return(0,U.jsx)(W,{comment:e})}})})},q=function(e){var r=e.slug;(0,n.DD)(b,{slug:r}),(0,n.DD)(k,{slug:r});var t=o.wl.useIsAuth();return(0,U.jsx)(U.Fragment,{children:t?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(i.K,{}),(0,U.jsx)(z,{}),(0,U.jsx)(G,{})]}):null})},K=t(4080),_=function(){var e=(0,n.oR)(y).tagList;return(0,U.jsx)(c.PS,{children:e.map((function(e){return(0,U.jsx)(c.Vp,{children:e.toLowerCase()},e)}))})},B=function(){var e=(0,n.oR)(y).body;return(0,U.jsx)(c.X2,{className:"article-content",children:(0,U.jsxs)("div",{className:"col-xs-12",children:[(0,U.jsx)(K.Z,{children:e}),(0,U.jsx)(_,{})]})})},X=t(1451),H=t(4289),J=function(){var e=(0,n.oR)(O),r=(0,n.oR)(y).slug;return(0,U.jsx)(U.Fragment,{children:e&&(0,U.jsxs)("span",{children:[(0,U.jsx)(H.rU,{to:"/editor/".concat(r),children:(0,U.jsxs)(c.zx,{className:"btn-sm btn-outline-secondary",children:[(0,U.jsx)("i",{className:"ion-edit"})," Edit Article"]})}),(0,U.jsxs)(c.zx,{className:"btn-sm btn-outline-danger",onClick:p,children:[(0,U.jsx)("i",{className:"ion-trash-a"})," Delete Article"]})]})})},Z=function(){var e=(0,n.oR)(y),r=e.title,t=e.author,a=e.createdAt;return(0,U.jsx)(c.jL,{children:(0,U.jsxs)(c.W2,{children:[(0,U.jsx)("h1",{children:r}),(0,U.jsx)(X.qn,{author:t,createdAt:a,children:(0,U.jsx)(J,{})})]})})},Q=function(){var e=o.wl.useIsAuth();return(0,U.jsx)(U.Fragment,{children:e?null:(0,U.jsxs)("p",{children:[(0,U.jsx)(a.rU,{to:"/login",children:"Sign in"})," or ",(0,U.jsx)(a.rU,{to:"/register",children:"sign up"})," to add comments on this article."]})})},Y=function(){var e=(0,a.UO)().slug;(0,n.DD)(b,{slug:e});var r=(0,n.oR)(j.pending);return(0,U.jsx)(U.Fragment,{children:!r&&(0,U.jsxs)("div",{className:"article-page",children:[(0,U.jsx)(Z,{}),(0,U.jsxs)(c.T3,{children:[(0,U.jsx)(B,{}),(0,U.jsx)("hr",{}),(0,U.jsx)("div",{className:"article-actions"}),(0,U.jsx)(c.X2,{children:(0,U.jsxs)("div",{className:"col-xs-12 col-md-8 offset-md-2",children:[(0,U.jsx)(q,{slug:e}),(0,U.jsx)(Q,{})]})})]})]})})}},227:function(e,r,t){t.d(r,{K:function(){return f},o:function(){return n}});var n={};t.r(n),t.d(n,{_4:function(){return a},l6:function(){return o},CD:function(){return c}});var a=(0,t(1549).MT)({errors:{}}),c=a.map((function(e){return Object.keys(e).length})),o=a.map((function(e){return Object.entries(e.errors)})),i=t(9041),s=t(4246);function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,c=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(c.push(n.value),!r||c.length!==r);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return c}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var f=function(){var e=(0,i.oR)(c),r=(0,i.oR)(o);return(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsx)("ul",{className:"error-messages",children:r.map((function(e){var r=u(e,2),t=r[0],n=r[1];return(0,s.jsxs)("li",{children:[t," ",n]},t)}))})})}}}]);
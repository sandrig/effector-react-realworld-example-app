"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[851],{1851:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(6455),i=r(4246),c=function(e){var t=e.tag,r=e.onTagClick,c=e.children;return(0,i.jsxs)("span",{className:"tag-default tag-pill",children:[c,(0,i.jsx)(n.zx,{className:"editor-tag",size:"sm",onClick:function(){return r(t)},children:(0,i.jsx)("i",{className:"ion-close-round"})})]})},o=r(7378),a=r(8039),l=r(9635),u=r(9041),s=r(1549),f=r(9721),d=r(6942);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,s.yM)(),(0,s.yM)();var h=(0,s.GW)((function(e){return d.v_("articles",{article:e}).then((function(e){return e.data.article}))})),g=(0,s.GW)((function(e){return d.U2("articles/".concat(e)).then((function(e){return e.data.article}))})),O=(0,s.GW)((function(e){return d.gz("/articles/".concat(e.slug),{article:p(p({},e),{},{slug:void 0})}).then((function(e){return e.data.article}))})),m=(0,s.GW)((function(e){var t=e.slug;f.m8.replace("/article/".concat(t))}));(0,s.eH)({from:[O.doneData,h.doneData],to:m});var v=(0,u.Bq)(),y=(0,s.MT)({errors:{}}).on(h.failData,(function(e,t){var r;return null===(r=t.response)||void 0===r?void 0:r.data})).reset(v.close),x=y.map((function(e){return Object.keys(Object(e)).length>0})),w=y.map((function(e){return Object.entries(Object(null==e?void 0:e.errors))})),P=function(){return(0,u.oR)(h.pending)},D=function(){return(0,u.oR)(x)},k=function(){return(0,u.oR)(w)},S=function(){var e=function(){var e=(0,a.Gc)(),t=e.setValue,r=e.watch,n=(0,o.useRef)(null),i=r("tagList"),c=function(e){var r,c,o=null===(r=n.current)||void 0===r?void 0:r.value;"Enter"===e.key&&o&&(t("tagList",(c=i.concat(o),Array.from(new Set(c)))),n.current.value="")},l=function(e){e.preventDefault()},u=(0,o.useCallback)((function(e){t("tagList",i.filter((function(t){return t!==e})))}),[t,i]);return{ref:n,tags:i,handleAddTag:c,handleSubmit:l,handleDeleteTag:u}}(),t=e.handleSubmit,r=e.ref,l=e.tags,u=e.handleAddTag,s=e.handleDeleteTag;return(0,i.jsxs)(n.l0,{onSubmit:t,children:[(0,i.jsx)(n.l0.Control,{ref:r,onKeyDown:u}),(0,i.jsx)(n.aV,{children:l.map((function(e){return(0,i.jsx)(c,{tag:e,onTagClick:s,children:e},e)}))})]})};var C=(0,o.memo)((function(){var e=P();return(0,i.jsx)(n.zx,{className:"btn-primary pull-xs-right",disabled:e,form:"editor",size:"lg",type:"submit",children:"Publish article"})}));function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(){var e=function(){(0,u.DD)(v);var e=(0,l.UO)().slug,t=(0,a.cI)({defaultValues:{slug:"",title:"",description:"",body:"",tagList:[]}}),r=t.handleSubmit,n=t.register,i=t.reset;return(0,o.useEffect)((function(){e&&g(e);var t=g.doneData.watch((function(e){i(e)}));return function(){return t()}}),[e,i]),{handleSubmit:r((function(t){e?O(G(G({},t),{},{slug:e})):h(t)})),methods:t,register:n}}(),t=e.methods,r=e.handleSubmit,c=e.register;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.RV,G(G({},t),{},{children:[(0,i.jsxs)(n.l0,{id:"editor",onSubmit:r,children:[(0,i.jsx)(n.l0.Group,{children:(0,i.jsx)(n.l0.Control,G({placeholder:"Article Title",size:"lg"},c("title")))}),(0,i.jsx)(n.l0.Group,{children:(0,i.jsx)(n.l0.Control,G({placeholder:"What's this article about?"},c("description")))}),(0,i.jsx)(n.l0.Group,{children:(0,i.jsx)(n.l0.Control,G({as:"textarea",placeholder:"Write your article (in markdown)",rows:8},c("body")))})]}),(0,i.jsx)(S,{})]})),(0,i.jsx)(C,{})]})};var W=function(){var e=D(),t=k();return e?(0,i.jsx)(n.KM,{errors:t}):null},N=function(){return(0,i.jsx)(n.T3,{children:(0,i.jsx)(n.X2,{children:(0,i.jsxs)("div",{className:"col-md-10 offset-md-1 col-xs-12",children:[(0,i.jsx)(W,{}),(0,i.jsx)(E,{})]})})})}}}]);
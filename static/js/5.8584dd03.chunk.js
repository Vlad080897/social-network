(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[5],{296:function(e,n,t){e.exports={massages:"dialogs_massages__3BPLL",text:"dialogs_text__1p56a"}},302:function(e,n,t){"use strict";t.r(n);var r=t(18),s=t(19),a=t(21),u=t(20),c=t(1),i=t.n(c),o=t(11),l=t(296),d=t.n(l),f=t(131),p=t(132),g=t(22),j=t(24),h=t(0),m=Object(j.a)(100),b=Object(p.a)({form:"dialogs"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(f.a,{component:g.b,name:"text",placeholder:"text your massage",validate:(j.c,m)})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Send Massage"})})]})})),v=function(e){return Object(h.jsx)(b,{onSubmit:function(n){e.addMassageThunk(n.text)}})},O=function(e){return Object(h.jsx)("div",{children:e.massage})},x=function(e){return Object(h.jsx)("div",{children:e.name})},y=function(e){var n=e.massages.map((function(e,n){return Object(h.jsx)(O,{massage:e.massages},n)})),t=e.users.map((function(e){return Object(h.jsx)(x,{name:e.name,id:e.id},e.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:d.a.users,children:t}),Object(h.jsxs)("div",{className:d.a.massages,children:[n,Object(h.jsx)(v,{addMassageThunk:e.addMassageThunk})]})]})},k=t(130),M=t(128),T=t(9),P=t(57);function _(e,n){return e===n}function w(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,s=0;s<r;s++)if(!e(n[s],t[s]))return!1;return!0}function S(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var A=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];var a=0,u=r.pop(),c=S(r),i=e.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(t)),o=e((function(){for(var e=[],n=c.length,t=0;t<n;t++)e.push(c[t].apply(null,arguments));return i.apply(null,e)}));return o.resultFunc=u,o.dependencies=c,o.recomputations=function(){return a},o.resetRecomputations=function(){return a=0},o}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_,t=null,r=null;return function(){return w(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));A((function(e){return e.usersPageReducer}),(function(e){return e}));var F=function(e){return e.massagesPage.massagesPage.massages},J=function(e){return e.massagesPage.massagesPage.dialogs},L=function(e){Object(a.a)(t,e);var n=Object(u.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(h.jsx)(y,{massages:this.props.massages,users:this.props.users,dialogsThunk:this.props.dialogsThunk,addMassageThunk:this.props.addMassageThunk})}}]),t}(i.a.Component);n.default=Object(T.d)(P.a,Object(o.b)((function(e){return{massages:F(e),users:J(e)}}),{addMassageThunk:k.a}),M.a)(L)}}]);
//# sourceMappingURL=5.8584dd03.chunk.js.map
(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[5],{298:function(e,s,t){e.exports={massages:"dialogs_massages__3BPLL",text:"dialogs_text__1p56a"}},304:function(e,s,t){"use strict";t.r(s);var a=t(18),n=t(19),c=t(21),r=t(20),i=t(1),u=t.n(i),d=t(11),o=t(298),j=t.n(o),b=t(132),m=t(133),h=t(22),g=t(24),p=t(0),O=Object(g.a)(100),l=Object(m.a)({form:"dialogs"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(b.a,{component:h.b,name:"text",placeholder:"text your massage",validate:(g.c,O)})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Send Massage"})})]})})),x=function(e){return Object(p.jsx)(l,{onSubmit:function(s){e.addMassageThunk(s.text)}})},f=function(e){return Object(p.jsx)("div",{children:e.massage})},k=function(e){return Object(p.jsx)("div",{children:e.name})},v=function(e){var s=e.massages.map((function(e,s){return Object(p.jsx)(f,{massage:e.massages},s)})),t=e.users.map((function(e){return Object(p.jsx)(k,{name:e.name,id:e.id},e.id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:j.a.users,children:t}),Object(p.jsxs)("div",{className:j.a.massages,children:[s,Object(p.jsx)(x,{addMassageThunk:e.addMassageThunk})]})]})},M=t(131),T=t(129),y=t(9),_=t(92),S=t(35),w=function(e){Object(c.a)(t,e);var s=Object(r.a)(t);function t(){return Object(a.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(p.jsx)(v,{massages:this.props.massages,users:this.props.users,dialogsThunk:this.props.dialogsThunk,addMassageThunk:this.props.addMassageThunk})}}]),t}(u.a.Component);s.default=Object(y.d)(_.a,Object(d.b)((function(e){return{massages:Object(S.e)(e),users:Object(S.g)(e)}}),{addMassageThunk:M.a}),T.a)(w)}}]);
//# sourceMappingURL=5.6adce21f.chunk.js.map
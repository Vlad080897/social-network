(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[4],{295:function(e,n,t){e.exports={news_container:"news_news_container__3zbcZ",news_send:"news_news_send__3jqOL"}},297:function(e,n,t){e.exports={"btn-send":"btn_send_btn-send__1hsIT"}},303:function(e,n,t){"use strict";t.r(n);var s=t(1),a=t.n(s),c=t(295),r=t.n(c),o=(t.p,t(99)),u=t(297),i=t.n(u),d=t(0),j=function(e){var n;return Object(d.jsx)("input",(n={type:"button",value:"Send",name:"new-post",className:i.a.btn_send},Object(o.a)(n,"className",r.a.news_send),Object(o.a)(n,"onClick",e.addNewsPost),n))},w=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:"",alt:""}),Object(d.jsx)("div",{children:e.text})]})},b=t(97),_=t(11),f=function(e){var n=e.newsPage.map((function(e){return Object(d.jsx)(w,{text:e.text})})),t=a.a.createRef();return Object(d.jsxs)("div",{className:r.a.news_container,children:[n,Object(d.jsx)("textarea",{ref:t,name:"",id:"",onChange:function(){var n=t.current.value;e.onNewsChanged(n)},value:e.newsPageText}),Object(d.jsx)(j,{className:r.a.news_send,addNewsPost:function(){var n=t.current.value;e.addNewsPost(n)}})]})},l=Object(_.b)((function(e){return{newsPage:e.newsPage.newsPage.allNews}}),(function(e){return{addNewsPost:function(n){e(Object(b.a)(n))},onNewsChanged:function(n){e(Object(b.c)(n))}}}))(f);n.default=l}}]);
//# sourceMappingURL=4.ea5bffee.chunk.js.map
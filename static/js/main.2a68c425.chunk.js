(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{30:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(9),a=n.n(r),s=(n(30),n(31),n(2)),d=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:" Home page "})})},j=n(8),o=n(23),l=n(17),b=n.p+"static/media/dump.bb8494aa.svg",u=n.p+"static/media/flag.f3a1fab1.svg",x=n.p+"static/media/flag-fill.3ed1e3dd.svg",h=n(11);n(33);var p=function(e){var t=e.index,n=e.item,c=e.onCheck,i=e.onMark;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(h.b,{draggableId:n.id,index:t,children:function(e){return Object(s.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({className:"item",ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:[n.name,Object(s.jsxs)("div",{className:"actions-group",children:[Object(s.jsx)("img",{src:n.priority?x:u,alt:"flag",width:"25px",onClick:function(){i(n.id)}}),Object(s.jsx)("img",{src:b,alt:"trash bin",width:"25px",onClick:function(){c(n.id)}})]})]}))}})})};n(38);var O=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),a=Object(l.a)(r,2),d=a[0],b=a[1],u=Object(c.useState)(1),x=Object(l.a)(u,2),O=x[0],f=x[1];function g(){n.trim()&&(b((function(e){return[].concat(Object(o.a)(e),[{name:n,priority:!1,id:""+O}])})),f((function(e){return++e})),i(""))}function m(e){b((function(t){return t.filter((function(t){return t.id!==e}))}))}function v(e){b((function(t){return t.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{priority:!t.priority}):t}))}))}return Object(s.jsx)(h.a,{onDragEnd:function(e){var t=e.destination,n=e.source;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var c=Array.from(d),i=c.splice(n.index,1);c.splice.apply(c,[t.index,0].concat(Object(o.a)(i))),b(c)}},children:Object(s.jsxs)("div",{className:"todolist",children:[Object(s.jsx)("div",{className:"heading",children:Object(s.jsx)("h1",{className:"title",children:"\u041f\u043b\u0430\u043d\u0435\u0440"})}),Object(s.jsx)("input",{type:"text",value:n,onKeyPress:function(e){"Enter"===e.key&&g()},onChange:function(e){i(e.target.value)}}),Object(s.jsx)("button",{onClick:g,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(s.jsx)(h.c,{droppableId:"text",children:function(e){return Object(s.jsxs)("div",Object(j.a)(Object(j.a)({className:"items",ref:e.innerRef},e.droppableProps),{},{children:[d.map((function(e,t){return Object(s.jsx)(p,{index:t,item:e,onCheck:m,onMark:v},e.id)})),e.placeholder,0===d.length&&Object(s.jsx)("span",{children:"\u041d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447"})]}))}})]})})};var f=function(){return Object(s.jsxs)("div",{style:{margin:"50px auto",padding:"16px",minHeight:"580px",maxWidth:"580px",backgroundColor:"#f1f5f8",paddingLeft:"30px",paddingRight:"30px",lineHeight:"1.3"},children:[Object(s.jsx)("h1",{style:{fontWeight:"300"},children:" \u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0434\u043b\u044f \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \ud83d\udc99 React \ud83d\udc99  "}),Object(s.jsx)("li",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0436\u0430\u0442\u0438\u044f Enter \u0438\u043b\u0438 \u043a\u043d\u043e\u043f\u043a\u0438"}),Object(s.jsx)("li",{children:"  \u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447"}),Object(s.jsx)("li",{children:"   \u0420\u043e\u0443\u0442\u0438\u043d\u0433"}),Object(s.jsx)("li",{children:"   \u041f\u043e\u043c\u0435\u0447\u0430\u043d\u0438\u0435 \u0432\u0430\u0436\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447 "}),Object(s.jsx)("li",{children:"  Drag and drop "})]})},g=n(14),m=n(3);var v=function(){return Object(s.jsx)(g.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("ul",{className:"header",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)(g.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})," "]}),Object(s.jsx)("li",{children:Object(s.jsx)(g.b,{to:"/todo",children:"\u041f\u043b\u0430\u043d\u0435\u0440"})}),Object(s.jsx)("li",{children:Object(s.jsx)(g.b,{to:"/about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})})]}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{path:"/",exact:!0,component:d}),Object(s.jsx)(m.a,{path:"/todo",component:O}),Object(s.jsx)(m.a,{path:"/about",component:f})]})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.2a68c425.chunk.js.map
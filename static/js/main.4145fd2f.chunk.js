(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{48:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o,s,l,j,b,p,d,u,x,h,O=t(0),g=t(17),f=t.n(g),m=(t(48),t(4)),v=t(3),y=t(11),w=t(5),k=w.a.div(r||(r=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    \n    margin-top: ",";\n    margin-left: ",";\n    margin-right: ",";\n    margin-bottom: ",";\n"])),(function(e){var n=e.mt;return n?n+"px":"0px"}),(function(e){var n=e.ml;return n?n+"px":"0px"}),(function(e){var n=e.mr;return n?n+"px":"0px"}),(function(e){var n=e.mb;return n?n+"px":"0px"})),I=w.a.div(c||(c=Object(m.a)(["\n    display: flex;\n    flex-direction: column;    \n    justify-content: center;\n    \n    margin-top: ",";\n    margin-left: ",";\n    margin-right: ",";\n    margin-bottom: ",";\n"])),(function(e){var n=e.mt;return n?n+"px":"0px"}),(function(e){var n=e.ml;return n?n+"px":"0px"}),(function(e){var n=e.mr;return n?n+"px":"0px"}),(function(e){var n=e.mb;return n?n+"px":"0px"})),C=w.a.input(i||(i=Object(m.a)(["\n    width: 300px;\n    height: 50px;\n    border: 1px solid grey;\n    padding: 10px;\n    outline: none;\n    color: grey;\n    font-weight: 300;\n    font-size: 15px;\n"]))),S=w.a.button(a||(a=Object(m.a)(["\n    min-width: 100px;\n    height: 40px;\n    color: ",";\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid grey;\n    cursor: pointer;\n    background: ",";\n    \n    margin-top: ",";\n    margin-left: ",";\n    margin-right: ",";\n    margin-bottom: ",";\n"])),(function(e){var n=e.color;return n||"black"}),(function(e){var n=e.bg;return n||"white"}),(function(e){var n=e.mt;return n?n+"px":"0px"}),(function(e){var n=e.ml;return n?n+"px":"0px"}),(function(e){var n=e.mr;return n?n+"px":"0px"}),(function(e){var n=e.mb;return n?n+"px":"0px"})),z=t(24),E=t.n(z),D=t(2),P=function(){var e=Object(O.useState)(""),n=Object(y.a)(e,2),t=n[0],r=n[1],c=Object(O.useState)(""),i=Object(y.a)(c,2),a=i[0],o=i[1],s=Object(O.useState)(""),l=Object(y.a)(s,2),j=l[0],b=l[1];return Object(D.jsxs)(H,{children:[Object(D.jsx)(A,{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(D.jsxs)(I,{children:[Object(D.jsx)("span",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(D.jsx)(C,{type:"text",value:t,onChange:function(e){return r(e.target.value)}}),Object(D.jsx)("span",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(D.jsx)(C,{type:"password",value:a,onChange:function(e){return o(e.target.value)}}),Object(D.jsx)("span",{children:"\u0415\u043c\u0435\u0439\u043b"}),Object(D.jsx)(C,{type:"email",value:j,onChange:function(e){return b(e.target.value)}}),Object(D.jsx)(S,{bg:"#0051cc",color:"white",onClick:function(){return function(e,n,t){E.a.post("https://sabfesapp.herokuapp.com/api/auth/signup",{username:e,email:t,role:["user"],password:n}).then((function(e){return console.log(e)}))}(t,a,j)},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})},A=w.a.h1(o||(o=Object(m.a)(["\n    font-weight: 300;\n    font-size: 40px;\n"]))),H=w.a.div(s||(s=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: 60%;\n"]))),R=function(){var e=Object(v.f)(),n=Object(O.useState)(""),t=Object(y.a)(n,2),r=t[0],c=t[1],i=Object(O.useState)(""),a=Object(y.a)(i,2),o=a[0],s=a[1];return Object(D.jsxs)(B,{children:[Object(D.jsx)(J,{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(D.jsxs)(I,{children:[Object(D.jsx)("span",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(D.jsx)(C,{placeholder:"\u041b\u043e\u0433\u0438\u043d",value:r,onChange:function(e){return c(e.target.value)}}),Object(D.jsx)("span",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(D.jsx)(C,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:o,onChange:function(e){return s(e.target.value)},type:"password"}),Object(D.jsx)(S,{bg:"#0051cc",color:"white",onClick:function(){E.a.post("https://sabfesapp.herokuapp.com/api/auth/signin",{username:"test",password:"test"}).then((function(n){200===n.status&&(console.log(n),localStorage.setItem("token",n.data.token),e.push("/boards/".concat(n.data.id)))}))},children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},B=w.a.div(l||(l=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: 60%;\n"]))),J=w.a.h1(j||(j=Object(m.a)(["\n    font-weight: 300;\n    font-size: 40px;\n"]))),T=t(15),q=t(19),F=function(){return Object(D.jsxs)(L,{children:[Object(D.jsx)(X,{to:"/",children:Object(D.jsx)(G,{children:"Trello"})}),Object(D.jsxs)(k,{mr:30,children:[Object(D.jsx)(X,{to:"/registration",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(D.jsx)(X,{to:"/login",children:"\u041b\u043e\u0433\u0438\u043d"})]})]})},L=w.a.div(b||(b=Object(m.a)(["\n    display: flex;\n    height: 80px;\n    align-items: center;   \n    justify-content: space-between;\n"]))),X=Object(w.a)(q.b)(p||(p=Object(m.a)(["\n    text-decoration: none;\n    color: black;\n    cursor: pointer;\n    font-size: 20px;\n    font-weight: 300;\n    margin-right: 10px;\n    \n    &:last-of-type {\n        margin-right: 0px;\n    }\n"]))),G=w.a.h1(d||(d=Object(m.a)(["\n    font-size: 25px;\n    font-weight: 300;\n    margin-left: 30px;\n    cursor: pointer;\n"]))),K=function(){return Object(D.jsx)(M,{children:Object(D.jsx)(N,{children:"Trello"})})},M=w.a.div(u||(u=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center; \n    height: 70%;  \n"]))),N=w.a.h1(x||(x=Object(m.a)(["\n    font-size: 140px;\n    font-weight: 300;\n"]))),Q=t(6),U=t(25),V=t(22),W=t.n(V),Y=t(20),Z=t(26),$=[{id:W()(),name:"Requested",tasks:[{id:W()(),content:"First task"},{id:W()(),content:"Second task"}]}],_=function(){var e=Object(O.useState)($),n=Object(y.a)(e,2),t=n[0],r=n[1];return Object(D.jsxs)("div",{style:{marginLeft:"20px",display:"flex",justifyContent:"flex-start",height:"80%",overflowX:"scroll"},children:[Object(D.jsx)("button",{onClick:function(){var e=Object.entries(t);e.push([W()(),{name:"test",items:[]}]);var n=Object.fromEntries(e);r(n)},children:"add col"}),Object(D.jsx)(U.a,{onDragEnd:function(e){return function(e,n,t){if(e.destination){var r=e.source,c=e.destination;if(r.droppableId!==c.droppableId){var i,a=n[r.droppableId],o=n[c.droppableId],s=Object(Z.a)(a.items),l=Object(Z.a)(o.items),j=s.splice(r.index,1),b=Object(y.a)(j,1)[0];l.splice(c.index,0,b),t(Object(Q.a)(Object(Q.a)({},n),{},(i={},Object(Y.a)(i,r.droppableId,Object(Q.a)(Object(Q.a)({},a),{},{items:s})),Object(Y.a)(i,c.droppableId,Object(Q.a)(Object(Q.a)({},o),{},{items:l})),i)))}else{var p=n[r.droppableId],d=Object(Z.a)(p.items),u=d.splice(r.index,1),x=Object(y.a)(u,1)[0];d.splice(c.index,0,x),t(Object(Q.a)(Object(Q.a)({},n),{},Object(Y.a)({},r.droppableId,Object(Q.a)(Object(Q.a)({},p),{},{items:d}))))}}}(e,t,r)},children:Object.entries(t).map((function(e,n){var t=Object(y.a)(e,2),r=t[0],c=t[1];return Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(D.jsx)("h2",{children:c.name}),Object(D.jsx)("div",{style:{margin:8},children:Object(D.jsx)(U.c,{droppableId:r,children:function(e,n){return Object(D.jsxs)("div",Object(Q.a)(Object(Q.a)({},e.droppableProps),{},{ref:e.innerRef,style:{background:n.isDraggingOver?"pink":"lightgrey",padding:4,width:250,minHeight:500},children:[c.items.map((function(e,n){return Object(D.jsx)(U.b,{draggableId:e.id,index:n,children:function(n,t){return Object(D.jsx)("div",Object(Q.a)(Object(Q.a)(Object(Q.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{style:Object(Q.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"50px",backgroundColor:t.isDragging?"#263B4A":"#456C86",color:"white"},n.draggableProps.style),children:e.content}))}},e.id)})),e.placeholder]}))}},r)})]},r)}))})]})};var ee=function(){var e=Object(T.c)((function(e){return e.user.isAuth}));return Object(D.jsxs)(ne,{children:[Object(D.jsx)(F,{}),Object(D.jsx)(v.c,{children:!e&&Object(D.jsxs)(v.c,{children:[Object(D.jsx)(v.a,{path:"/",exact:!0,component:K}),Object(D.jsx)(v.a,{path:"/registration",exact:!0,component:P}),Object(D.jsx)(v.a,{path:"/login",exact:!0,component:R}),Object(D.jsx)(v.a,{path:"/boards/:id",exact:!0,component:_})]})})]})},ne=w.a.div(h||(h=Object(m.a)(["\n    height: 100vh;\n    background: linear-gradient(0deg, #fff, #E5E5E5 100%);    \n"]))),te=t(13),re={isAuth:!1},ce=Object(te.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,n=arguments.length>1?arguments[1]:void 0;return n.type,e}}),ie=Object(te.e)(ce);f.a.render(Object(D.jsx)(q.a,{children:Object(D.jsx)(T.a,{store:ie,children:Object(D.jsx)(ee,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.4145fd2f.chunk.js.map
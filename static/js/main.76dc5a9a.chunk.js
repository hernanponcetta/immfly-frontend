(this["webpackJsonpimmfly-frontend"]=this["webpackJsonpimmfly-frontend"]||[]).push([[0],{39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var i,r,a,c,o,d,b,s,l,j,u,x,m,g,h,O,p,f,v,k=t(0),y=t.n(k),z=t(20),w=t.n(z),F=t(10),I=t(4),L=t(13),S=function(){var n=Object(k.useState)({status:"loading"}),e=Object(L.a)(n,2),t=e[0],i=e[1];return Object(k.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150").then((function(n){return n.json()})).then((function(n){return i({status:"loaded",data:n})})).catch((function(n){return i({status:"error",error:n})}))}),[]),t},C=function(n){var e=n.split("/");return e[e.length-2]},E=t(2),P=t(3),T=P.a.div(i||(i=Object(E.a)(["\n  background-color: #f3f1f1;\n  box-sizing: border-box;\n  min-height: 100vh;\n"]))),B=P.a.div(r||(r=Object(E.a)(["\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n"]))),D=P.a.div(a||(a=Object(E.a)(["\n  box-sizing: border-box;\n  padding: 2rem;\n"]))),J=P.a.div(c||(c=Object(E.a)(["\n  box-sizing: border-box;\n  margin: auto;\n  text-align: center;\n"]))),_=P.a.div(o||(o=Object(E.a)(["\n  box-sizing: border-box;\n  text-align: center;\n  text-transform: capitalize;\n  padding: 1rem 0;\n"]))),A=t.p+"static/media/poke_logo.aa0228b0.png",H=t(1),M=P.a.div(d||(d=Object(E.a)(["\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n"]))),X=P.a.img(b||(b=Object(E.a)(["\n  max-width: 100%;\n"]))),q=function(){return Object(H.jsx)(M,{children:Object(H.jsx)(X,{src:A,alt:"Pokemon Logo"})})},G=t.p+"static/media/ify_logo.dd5d56ec.png",K=P.a.div(s||(s=Object(E.a)(["\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1.5rem;\n  text-align: center;\n"]))),N=function(){return Object(H.jsx)(K,{children:Object(H.jsx)("img",{width:"50px",src:G,alt:"Immfly logo"})})},Q=P.a.div(l||(l=Object(E.a)(["\n  box-sizing: border-box;\n  margin-bottom: 2rem;\n"]))),R=function(){return Object(H.jsxs)(Q,{children:[Object(H.jsx)(N,{}),Object(H.jsx)(q,{})]})},U=P.a.div(j||(j=Object(E.a)(["\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 3rem;\n  grid-row-gap: 2rem;\n  margin-bottom: 3rem;\n  padding: 2rem;\n  @media (max-width: 860px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (max-width: 660px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),V=function(n){var e=n.children;return Object(H.jsx)(U,{children:e})},W=P.a.div(u||(u=Object(E.a)(["\n  border: 1px solid black;\n  border-radius: 8px;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  height: 230px;\n  justify-content: space-between;\n  padding: 1rem;\n  transition: 0.3s;\n  &:hover {\n    background-color: #e2e2e2;\n  }\n"]))),Y=P.a.img(x||(x=Object(E.a)([""]))),Z=Object(P.a)(F.b)(m||(m=Object(E.a)(["\n  text-decoration: none;\n  color: black;\n"]))),$=function(n){var e=n.name;return Object(H.jsx)(Z,{to:"/pokemon/".concat(e),children:Object(H.jsxs)(W,{children:[Object(H.jsx)(J,{children:Object(H.jsx)(Y,{src:"https://img.pokemondb.net/sprites/black-white/anim/normal/".concat(e,".gif"),alt:e})}),Object(H.jsx)(_,{children:e})]})})},nn=function(n){var e=Object(k.useState)({status:"loading"}),t=Object(L.a)(e,2),i=t[0],r=t[1];return Object(k.useEffect)((function(){fetch(n).then((function(n){return n.json()})).then((function(n){return r({status:"loaded",data:n})})).catch((function(n){return r({status:"error",error:n})}))}),[]),i},en=P.a.div(g||(g=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  box-sizing: border-box;\n  height: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 350px;\n  border: 1px solid black;\n  margin-top: 3rem;\n  padding: 2rem 1.5rem;\n"]))),tn=P.a.div(h||(h=Object(E.a)(["\n  box-sizing: border-box;\n  padding: 10px 0;\n"]))),rn=P.a.ul(O||(O=Object(E.a)(["\n  margin: 0;\n"]))),an=P.a.div(p||(p=Object(E.a)(["\n  box-sizing: border-box;\n  margin-left: auto;\n  padding: 0.5rem 0;\n"]))),cn=P.a.div(f||(f=Object(E.a)(["\n  box-sizing: border-box;\n"]))),on=Object(P.a)(F.b)(v||(v=Object(E.a)(["\n  text-decoration: none;\n  color: black;\n"]))),dn=function(n){var e,t,i,r,a,c,o,d=n.url,b=nn(d);return Object(H.jsxs)(en,{children:[Object(H.jsx)(an,{children:Object(H.jsx)(on,{to:"/pokemon",children:"X"})}),Object(H.jsx)(J,{children:Object(H.jsx)("img",{alt:"".concat(null===(e=b.data)||void 0===e?void 0:e.name),src:"https://img.pokemondb.net/sprites/black-white/anim/normal/".concat(null===(t=b.data)||void 0===t?void 0:t.name,".gif")})}),Object(H.jsxs)("div",{children:[Object(H.jsx)(_,{children:null===(i=b.data)||void 0===i?void 0:i.name}),Object(H.jsx)(tn,{children:Object(H.jsx)(cn,{children:"ID: ".concat(null===(r=b.data)||void 0===r?void 0:r.id)})}),Object(H.jsxs)(tn,{children:[Object(H.jsx)(cn,{children:"Types:"}),Object(H.jsx)(rn,{children:null===(a=b.data)||void 0===a?void 0:a.types.map((function(n){return Object(H.jsx)("li",{children:n.type.name},n.type.name)}))})]}),Object(H.jsx)(tn,{children:Object(H.jsx)(cn,{children:"Heigth: ".concat(null===(c=b.data)||void 0===c?void 0:c.height)})}),Object(H.jsxs)(tn,{children:[Object(H.jsx)(cn,{children:"Abilities:"}),Object(H.jsx)(rn,{children:null===(o=b.data)||void 0===o?void 0:o.abilities.map((function(n){return Object(H.jsx)("li",{children:n.ability.name},n.ability.name)}))})]})]})]})},bn=function(){var n,e,t=S();return Object(H.jsx)(T,{children:Object(H.jsx)(F.a,{children:Object(H.jsx)(B,{children:Object(H.jsxs)(I.d,{children:["loaded"===t.status&&(null===(n=t.data)||void 0===n?void 0:n.results.map((function(n){return Object(H.jsx)(I.b,{path:"/pokemon/".concat(n.name),children:Object(H.jsx)(dn,{url:n.url})},C(n.url))}))),Object(H.jsxs)(I.b,{path:"/pokemon",children:[Object(H.jsx)(D,{children:Object(H.jsx)(R,{})}),Object(H.jsxs)(V,{children:["loading"===t.status&&Object(H.jsx)("div",{children:"Loading..."}),"loaded"===t.status&&(null===(e=t.data)||void 0===e?void 0:e.results.map((function(n){return Object(H.jsx)($,{name:n.name},C(n.url))})))]})]}),Object(H.jsx)(I.b,{path:"/",children:Object(H.jsx)(I.a,{to:"/pokemon"})})]})})})})},sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),i(n),r(n),a(n),c(n)}))};t(39);w.a.render(Object(H.jsx)(y.a.StrictMode,{children:Object(H.jsx)(bn,{})}),document.getElementById("root")),sn()}},[[40,1,2]]]);
//# sourceMappingURL=main.76dc5a9a.chunk.js.map
(this.webpackJsonpintershella=this.webpackJsonpintershella||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(15),i=c.n(a),r=(c(22),c(3)),j=(c(23),c(16)),l=c.n(j),o=c(17),d=c.n(o),h=c(0);var b=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)({name:"",species:"",img:"",hp:"",attack:"",defense:"",type:""}),i=Object(r.a)(a,2),j=i[0],o=i[1],b=Object(s.useState)(!1),p=Object(r.a)(b,2),O=p[0],u=p[1],m=Object(s.useState)(!1),x=Object(r.a)(m,2),f=x[0],k=x[1],v=function(){k(!f)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:"Welcome To Pokemon World"}),Object(h.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)},placeholder:"Enter your pokemon"}),Object(h.jsx)("button",{onClick:function(){""!==c&&l.a.get("https://pokeapi.co/api/v2/pokemon/".concat(c)).then((function(e){o({name:c,species:e.data.species.name,img:e.data.sprites.front_default,hp:e.data.stats[0].base_stat,attack:e.data.stats[1].base_stat,defense:e.data.stats[2].base_stat,type:e.data.types[0].type.name}),u(!0),k(!1)}))},children:"Search"})]}),Object(h.jsx)("div",{className:"display",children:O?Object(h.jsxs)(d.a,{isFlipped:f,flipDirection:"vertical",children:[Object(h.jsxs)("div",{className:"front",children:[Object(h.jsx)("img",{src:j.img,alt:j.name}),Object(h.jsx)("h2",{children:j.name}),Object(h.jsx)("button",{onClick:v,children:"See More"})]}),Object(h.jsxs)("div",{className:"back",onClick:v,children:[Object(h.jsx)("h3",{children:j.name}),Object(h.jsxs)("h3",{children:["species:",j.species]}),Object(h.jsxs)("h3",{children:["Hp:",j.hp]}),Object(h.jsxs)("h3",{children:["Attack: ",j.attack]}),Object(h.jsxs)("h3",{children:["Defense: ",j.defense]}),Object(h.jsxs)("h3",{children:["Type: ",j.type]})]})]}):Object(h.jsx)("div",{className:"entry",children:Object(h.jsx)("h1",{children:"Search Your Favourite Pokemon"})})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()}},[[43,1,2]]]);
//# sourceMappingURL=main.b5c82aeb.chunk.js.map
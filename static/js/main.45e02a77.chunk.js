(this["webpackJsonprobofriendsupdated-hooks"]=this["webpackJsonprobofriendsupdated-hooks"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),o=n(4),a=n.n(o),i=(n(10),n(3)),h=function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots,n=t.map((function(e,n){return Object(c.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(c.jsx)("div",{children:n})},d=function(e){var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})};n(11);var l=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=Object(i.a)(o,2),h=a[0],l=a[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(c.jsx)(d,{searchChange:function(e){l(e.target.value)}}),Object(c.jsx)(j,{children:Object(c.jsx)(b,{robots:u})})]}):Object(c.jsx)("h1",{className:"tc",children:"Loading"})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};n(12);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.45e02a77.chunk.js.map
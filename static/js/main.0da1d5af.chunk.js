(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r);a(12),a(13);var i=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"The Shoppies")))},c=a(2);var m=function(e){var t=e.nominated.map((function(e,t){return e.Plot}));return e.Title?t.includes(e.Plot)?l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"movie"},l.a.createElement("p",null,e.Title),l.a.createElement("p",null,e.Year),l.a.createElement("p",null,e.Plot),l.a.createElement("button",{disabled:!0},"Nominate!"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"movie"},l.a.createElement("p",null,e.Title),l.a.createElement("p",null,e.Year),l.a.createElement("p",null,e.Plot),l.a.createElement("button",{onClick:function(){e.setNominated(e.nominated.concat(e))}},"Nominate!"))):null},u=a(6);var s=function(e){var t=e.nominated,a=e.setNominated,n=function(e){var n=e.target.getAttribute("index");if(n>-1){var l=Object(u.a)(t);l.splice(n,1),a(l)}};return t?t.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("p",null,e.Title),l.a.createElement("p",null,e.Year),l.a.createElement("p",null,e.Plot),l.a.createElement("button",{onClick:n,index:t},"Remove"))})):null};var p=function(){var e=Object(n.useState)({}),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),i=Object(c.a)(o,2),u=i[0],p=i[1],E=Object(n.useState)(""),d=Object(c.a)(E,2),h=d[0],v=d[1],f=Object(n.useState)([]),b=Object(c.a)(f,2),g=b[0],w=b[1];return 5===g.length?l.a.createElement("main",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",null,"Welcome to the Shoppies, Shopify's official movies awards! Search for and nominate up to five movies, and check out the list of nominees!"),l.a.createElement("h3",null,"You've nominated five movies!"),l.a.createElement("ul",{className:"nominations",id:"nominations"},l.a.createElement(s,{nominated:g,setNominated:w})))):l.a.createElement("main",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",null,"Welcome to the Shoppies, Shopify's official movies awards! Search for and nominate up to five movies, and check out the list of nominees!"),l.a.createElement("form",{action:"#"},l.a.createElement("label",{htmlFor:"movieTitle"},"Movie title",l.a.createElement("input",{onChange:function(e){p(e.target.value),v(e.target.value),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"".concat(u);fetch("https://www.omdbapi.com/?t=".concat(e,"&apikey=640dab7")).then((function(e){return e.json()})).then((function(e){return r(e)}))}(e.target.value)},type:"text",name:"movieTitle",id:"movieTitle"}))),l.a.createElement("ul",{className:"results",id:"results"},l.a.createElement(m,{Title:a.Title,Year:a.Year,Plot:a.Plot,inputValue:h,nominated:g,setNominated:w})),l.a.createElement("ul",{className:"nominations",id:"nominations"},l.a.createElement(s,{nominated:g,setNominated:w}))))};var E=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",null,"Copyright 2020 ",l.a.createElement("a",{href:"https://lucassilbernagel.com/",target:"_blank",rel:"noopener noreferrer"},"Lucas Silbernagel"))))};var d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(p,null),l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0da1d5af.chunk.js.map
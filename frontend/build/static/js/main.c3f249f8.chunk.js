(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(t,n,e){},36:function(t,n,e){},57:function(t,n,e){"use strict";e.r(n);var o=e(0),c=e.n(o),i=e(12),a=e.n(i),r=(e(35),e(28)),l=e(24),u=e(25),s=e(29),d=e(27),h=(e(36),e(59)),b=e(62),j=e(60),f=e(61),g=e(3),p=e(38).default,O=function(t){Object(s.a)(e,t);var n=Object(d.a)(e);function e(t){var o;return Object(l.a)(this,e),(o=n.call(this,t)).state={locations:[]},o}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;p.get("/").then((function(n){t.setState({locations:n.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this,n=this.state.locations;return Object(g.jsxs)(h.a,{center:[20,0],zoom:2,scrollWheelZoom:!1,doubleClickZoom:!1,whenCreated:function(n){n.on("dblclick",(function(n){p.post("/locations",{latitude:n.latlng.lat,longitude:n.latlng.lng}).then((function(n){return t.setState((function(t){return{locations:[].concat(Object(r.a)(t.locations),[n.data])}}))})).catch((function(t){return console.log(t)}))}))},children:[Object(g.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.map((function(t){return Object(g.jsx)("div",{children:Object(g.jsx)(j.a,{position:[t.latitude,t.longitude],children:Object(g.jsxs)(f.a,{children:["id: "+t.id,Object(g.jsx)("br",{}),"latitude: "+t.latitude,Object(g.jsx)("br",{}),"longitude: "+t.longitude]})},t.id)},t.id)}))]})}}]),e}(c.a.Component),m=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,63)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;e(t),o(t),c(t),i(t),a(t)}))};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root")),m()}},[[57,1,2]]]);
//# sourceMappingURL=main.c3f249f8.chunk.js.map
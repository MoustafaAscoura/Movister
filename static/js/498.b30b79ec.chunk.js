"use strict";(self.webpackChunkmovister=self.webpackChunkmovister||[]).push([[498],{9223:function(t,e,n){n.d(e,{Z:function(){return d}});var s=n(4165),i=n(5861),a=n(9806),c=n(1632),o=n(6678),r=n(9434),l=n(1040),u=n(184);function d(t){var e=t.movie,n=(0,r.v9)((function(t){return t.watchlist.watchlist})),d=(0,r.I0)(),p=function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.includes(e.id)){t.next=7;break}return t.next=3,o.b.post("/3/account/".concat(window.sessionStorage.profile_id,"/watchlist?session_id=").concat(window.sessionStorage.session_id),{media_type:"movie",media_id:e.id,watchlist:!1});case 3:13===t.sent.data.status_code&&d((0,l.PZ)(e.id)),t.next=11;break;case 7:return t.next=9,o.b.post("/3/account/".concat(window.sessionStorage.profile_id,"/watchlist?session_id=").concat(window.sessionStorage.session_id),{media_type:"movie",media_id:e.id,watchlist:!0});case 9:1===t.sent.data.status_code&&d((0,l.r_)(e.id));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,u.jsx)(a.G,{onClick:function(){return p(e)},className:"position-absolute fs-3 ".concat(n.includes(e.id)?"text-warning":"text-black-50"),style:{right:"10px",top:"15px"},icon:c.m6i})}},3683:function(t,e,n){n.d(e,{Z:function(){return o}});var s=n(9806),i=n(1632),a=n(6850),c=n(184);function o(t){for(var e=t.rating,n=[],o=0;o<5;o++)e>=1?(n.push((0,c.jsx)(s.G,{icon:i.Tab,style:{color:"black"},className:"color-info"},o)),e-=1):0<e?(n.push((0,c.jsx)(s.G,{icon:i.pG1,style:{color:"black"}},o)),e=0):n.push((0,c.jsx)(s.G,{icon:a.Tab,style:{color:"black"}},o));return(0,c.jsx)("div",{className:"rating  d-inline",children:n})}},2498:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var s=n(4165),i=n(5861),a=n(9439),c=n(6678),o=n(2791),r=n(6511),l=n(7689),u=(n(584),n(3683)),d=n(9223),p=n(184);function f(t){var e=(0,l.s0)(),n=function(t){e("/Movie/".concat(t))},s=t.movie;return(0,p.jsx)("div",{className:"card mx-5 my-2  p-4 col-lg-5  ",style:{maxWidth:"800px",maxHeight:"330px",justifyContent:"space-between"},children:(0,p.jsxs)("div",{className:"row g-0 ",children:[(0,p.jsx)("div",{style:{alignItems:"center",maxHeight:"250px"},className:"col-md-4",children:(0,p.jsx)("img",{onClick:function(){return n(s.id)},src:"".concat("https://image.tmdb.org/t/p/w500").concat(s.poster_path),className:"card-img-top col-4 mb-2",alt:"...",style:{maxHeight:"260px"}})}),(0,p.jsxs)("div",{className:"col-lg-6 ms-5 ",children:[(0,p.jsxs)("div",{className:"card-body",children:[(0,p.jsx)("h3",{className:"card-title  fw-bolder",onClick:function(){return n(s.id)},children:s.title}),(0,p.jsx)("h5",{className:"text-muted",children:s.release_date}),(0,p.jsx)(u.Z,{rating:s.vote_average/2})]}),(0,p.jsx)("p",{class:"card-text p-1",style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},children:s.overview}),(0,p.jsx)(d.Z,{movie:s},s)]})]})})}function m(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),n=e[0],l=e[1],u=(0,o.useState)(1),d=(0,a.Z)(u,2),m=d[0],x=(d[1],(0,o.useContext)(r.Z).lang);function h(){return(h=(0,i.Z)((0,s.Z)().mark((function t(){var e;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.get("/3/account/".concat(window.sessionStorage.profile_id,"/watchlist/movies?language=").concat(x,"&page=").concat(m));case 2:e=t.sent,l(e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[x]),(0,p.jsx)("div",{className:"row",children:n.map((function(t){return(0,p.jsx)(f,{movie:t})}))})}},584:function(){}}]);
//# sourceMappingURL=498.b30b79ec.chunk.js.map
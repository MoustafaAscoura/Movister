"use strict";(self.webpackChunkmovister=self.webpackChunkmovister||[]).push([[467],{9223:function(e,s,n){n.d(s,{Z:function(){return p}});var t=n(4165),a=n(5861),i=n(9806),c=n(1632),r=n(6678),o=n(9434),l=n(1040),d=n(184);function p(e){var s=e.movie,n=(0,o.v9)((function(e){return e.watchlist.watchlist})),p=(0,o.I0)(),u=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.includes(s.id)){e.next=7;break}return e.next=3,r.b.post("/3/account/".concat(window.sessionStorage.profile_id,"/watchlist?session_id=").concat(window.sessionStorage.session_id),{media_type:"movie",media_id:s.id,watchlist:!1});case 3:13===e.sent.data.status_code&&p((0,l.PZ)(s.id)),e.next=11;break;case 7:return e.next=9,r.b.post("/3/account/".concat(window.sessionStorage.profile_id,"/watchlist?session_id=").concat(window.sessionStorage.session_id),{media_type:"movie",media_id:s.id,watchlist:!0});case 9:1===e.sent.data.status_code&&p((0,l.r_)(s.id));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.jsx)(i.G,{onClick:function(){return u(s)},className:"position-absolute fs-3 ".concat(n.includes(s.id)?"text-warning":"text-black-50"),style:{right:"10px",top:"15px"},icon:c.m6i})}},3515:function(e,s,n){n.d(s,{Z:function(){return o}});n(584);var t=n(2481),a=n(184);function i(e){var s=e.rate;return(0,a.jsx)("div",{className:"bg-dark d-inline-block text-light rounded-circle",children:(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[(0,a.jsx)("h5",{className:"position-absolute m-0",children:10*s}),(0,a.jsx)(t.Z,{variant:"determinate",value:10*s})]})})}var c=n(7689),r=n(9223);function o(e){var s=e.movie,n=(0,c.s0)();return(0,a.jsx)("div",{className:"col-6 col-md-4 col-lg-2",children:(0,a.jsxs)("div",{className:"card mb-2 border-0 vh-50",children:[(0,a.jsx)("img",{onClick:function(){return n("/movie/".concat(s.id))},src:"".concat("https://image.tmdb.org/t/p/w500").concat(s.poster_path),className:"card-img-top img-fluid rounded",alt:"product thumbnail"}),(0,a.jsxs)("div",{className:"card-body p-0 position-relative rounded mt-1",children:[(0,a.jsx)("h5",{onClick:function(){return n("/movie/".concat(s.id))},className:"d-inline-block card-title mt-3 w-75",style:{textWrap:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:s.title}),(0,a.jsx)("p",{className:"position-absolute m-0 text-secondary p-0",style:{bottom:"-5px"},children:s.release_date}),(0,a.jsx)("div",{className:"position-absolute",style:{top:"-30px",left:"15px"},children:(0,a.jsx)(i,{rate:parseInt(s.vote_average)})}),(0,a.jsx)(r.Z,{movie:s},s.id)]})]})})}},3683:function(e,s,n){n.d(s,{Z:function(){return r}});var t=n(9806),a=n(1632),i=n(6850),c=n(184);function r(e){for(var s=e.rating,n=[],r=0;r<5;r++)s>=1?(n.push((0,c.jsx)(t.G,{icon:a.Tab,style:{color:"black"},className:"color-info"},r)),s-=1):0<s?(n.push((0,c.jsx)(t.G,{icon:a.pG1,style:{color:"black"}},r)),s=0):n.push((0,c.jsx)(t.G,{icon:i.Tab,style:{color:"black"}},r));return(0,c.jsx)("div",{className:"rating  d-inline",children:n})}},467:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var t=n(4165),a=n(5861),i=n(9439),c=n(2791),r=n(7689),o=n(6678),l=n(3683),d=n(3515),p=n(9223),u=n(184);function x(){var e=(0,r.UO)().id,s=(0,c.useState)(null),n=(0,i.Z)(s,2),x=n[0],m=n[1],h=(0,c.useState)(null),g=(0,i.Z)(h,2),f=g[0],v=g[1],j=function(){var s=(0,a.Z)((0,t.Z)().mark((function s(){var n,a;return(0,t.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,o.b.get("".concat("https://api.themoviedb.org","/3/movie/").concat(e,"/recommendations?api_key=").concat("09e13f0811a7ab10687002086c5de6af")).catch((function(e){return console.log(e)}));case 2:return n=s.sent,v(n.data),s.next=6,o.b.get("".concat("https://api.themoviedb.org","/3/movie/").concat(e,"?api_key=").concat("09e13f0811a7ab10687002086c5de6af")).catch((function(e){return console.log(e)}));case 6:a=s.sent,m(a.data);case 8:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return(0,c.useEffect)((function(){j()}),[]),x?(0,u.jsxs)("div",{className:"container",style:{},children:[(0,u.jsx)("div",{className:"card border-0  ",style:{height:"500px"},children:(0,u.jsxs)("div",{className:"row  ",children:[(0,u.jsx)("div",{className:"col-md-3 rounded",style:{alignSelf:"center",height:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/w500").concat(x.poster_path,")")}}),(0,u.jsxs)("div",{className:"col-lg-7 ms-5 md-6 ",children:[(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h3",{className:"card-title  fw-bolder d-inline",children:x.title}),(0,u.jsx)("span",{className:"position-absolute fs-3",style:{right:"80px",top:"30px"},children:(0,u.jsx)(p.Z,{movie:x})},x.id),(0,u.jsx)("h5",{className:"text-muted",children:x.release_date}),(0,u.jsxs)("div",{className:"d-inline",style:{display:"inline"},children:[" ",(0,u.jsx)(l.Z,{className:"d-inline ",rating:x.vote_average/2})," "]}),(0,u.jsx)("p",{className:"d-inline ms-2",children:x.vote_count})]}),(0,u.jsx)("p",{className:"card-text p-1",children:x.overview}),(0,u.jsxs)("div",{children:[x.genres?x.genres.map((function(e,s){return(0,u.jsx)("span",{class:"badge badge-pill p-2 bg-warning m-2",style:{color:"black"},children:x.genres[s].name},s)})):(0,u.jsx)(u.Fragment,{}),(0,u.jsxs)("div",{style:{paddingTop:"20px"},children:[(0,u.jsxs)("p",{className:"d-inline",style:{fontSize:"15px"},children:[" ",(0,u.jsx)("span",{className:"fw-bold px-2",children:"Duration: "})," ",(x.runtime/60).toFixed(2)," h"]}),(0,u.jsxs)("p",{className:"d-inline px-4",style:{fontSize:"15px"},children:[(0,u.jsx)("span",{className:"fw-bold px-2",children:"Languages: "}),x.spoken_languages.map((function(e,s){return(0,u.jsxs)("span",{className:"px-2",children:[" ",x.spoken_languages[s].english_name," "]})}))]})]}),(0,u.jsx)("img",{style:{display:"block",width:"40%",height:"150px",padding:"30px 0px 30px 0px"},src:"".concat("https://image.tmdb.org/t/p/w500").concat(x.production_companies[0].logo_path),alt:" picturee!"}),(0,u.jsx)("a",{className:" ",href:x.homepage,children:(0,u.jsxs)("span",{className:"badge border border-warning text-secondary",children:["Website"," ",(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-link-45deg",viewBox:"0 0 16 16",children:[(0,u.jsx)("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),(0,u.jsx)("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})]})]})})]})]})]})}),(0,u.jsx)("hr",{}),(0,u.jsx)("h2",{children:"Recommendations"}),(0,u.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"auto"},children:f&&0!==f.results.length?(0,u.jsx)("div",{className:"container-fluid ",children:(0,u.jsx)("div",{className:"d-flex flex-row flex-nowrap gx-5 ",style:{gap:"15px"},children:f.results.map((function(e){return(0,u.jsx)(d.Z,{movie:e},e.id)}))})}):(0,u.jsxs)("div",{style:{textAlign:"center ",paddingTop:"15px"},children:[" ","THERE IS NO RECOMINDATION AT THE CURRENR MOMENT"," ",(0,u.jsx)("div",{className:"fw-bold",children:"will be added soon"})]})})]}):(0,u.jsx)(u.Fragment,{})}},584:function(){}}]);
//# sourceMappingURL=467.384593fb.chunk.js.map
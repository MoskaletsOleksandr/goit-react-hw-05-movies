"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[282],{282:function(e,n,r){r.r(n),r.d(n,{default:function(){return M}});var t,a,o,c,i,s,u,p,l,h=r(861),f=r(439),x=r(687),d=r.n(x),v=r(791),m=r(689),g=r(87),j=r(168),w=r(686),b=w.Z.div(t||(t=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),Z=w.Z.img(a||(a=(0,j.Z)(["\n  width: 200px;\n  height: auto;\n  margin-right: 20px;\n"]))),k=w.Z.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),y=w.Z.h2(c||(c=(0,j.Z)(["\n  font-size: 24px;\n  margin-bottom: 10px;\n"]))),z=w.Z.p(i||(i=(0,j.Z)(["\n  font-size: 16px;\n  margin-bottom: 5px;\n"]))),I=w.Z.h3(s||(s=(0,j.Z)(["\n  font-size: 20px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]))),U=w.Z.p(u||(u=(0,j.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 20px;\n"]))),E=w.Z.p(p||(p=(0,j.Z)(["\n  font-size: 16px;\n"]))),J=r(184),S=function(e){var n=e.info,r=n.poster_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(n.poster_path):"https://via.placeholder.com/500x1000?text=Movie";return(0,J.jsxs)(b,{children:[(0,J.jsx)(Z,{src:r,alt:""}),(0,J.jsxs)(k,{children:[(0,J.jsx)(y,{children:n.title}),(0,J.jsxs)(z,{children:["Popularity: ",n.popularity,"%"]}),(0,J.jsx)(I,{children:"Overview"}),(0,J.jsx)(U,{children:n.overview}),(0,J.jsx)(I,{children:"Genres"}),(0,J.jsx)(E,{children:n.genres.map((function(e){return e.name})).join(", ")})]})]})},Y=r(714),F=r(128),O=(0,w.Z)(g.rU)(l||(l=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),G=function(e){var n=e.to,r=e.children;return(0,J.jsxs)(O,{to:n,children:[(0,J.jsx)(F.jTe,{size:"24"}),r]})},M=function(){var e,n,r=(0,m.UO)().movieId,t=(0,v.useState)(null),a=(0,f.Z)(t,2),o=a[0],c=a[1],i=(0,m.TH)(),s=(0,v.useRef)(null!==(e=null===(n=i.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,v.useEffect)((function(){var e=function(){var e=(0,h.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Y.gu)(r);case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),o?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(G,{to:s.current,children:"Go back"}),(0,J.jsx)(S,{info:o}),(0,J.jsxs)("ul",{children:[(0,J.jsx)("li",{children:(0,J.jsx)(g.rU,{to:"cast",children:"Cast"})}),(0,J.jsx)("li",{children:(0,J.jsx)(g.rU,{to:"reviews",children:"Reviews"})})]}),(0,J.jsx)(v.Suspense,{fallback:(0,J.jsx)("div",{children:"Loading..."}),children:(0,J.jsx)(m.j3,{})})]}):(0,J.jsx)("div",{children:"Loading..."})}},714:function(e,n,r){r.d(n,{b:function(){return p},gu:function(){return u},tb:function(){return h},yj:function(){return l},z1:function(){return s}});var t=r(861),a=r(687),o=r.n(a),c="https://api.themoviedb.org/3",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODY4YWQ5YTU3MjQwNWQ1M2E0ZWM5ZDgxNjc2ODhkYyIsInN1YiI6IjY0NzI0MmFkZGQ3MzFiMDBkZGYwODJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLy8SYeThyR1frJL8mDfZVKg4zxEpmO8tEYvPLKmkbo")}},s=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(c,"/search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1"),e.prev=1,e.next=4,fetch(r,i);case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch movies");case 7:return e.next=9,t.json();case 9:return a=e.sent,e.abrupt("return",a.results);case 13:return e.prev=13,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),e.prev=1,e.next=4,fetch(r,i);case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch details of movie");case 7:return e.next=9,t.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(o().mark((function e(){var n,r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(c,"/trending/movie/day?language=en-US"),e.prev=1,e.next=4,fetch(n,i);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch movies");case 7:return e.next=9,r.json();case 9:return t=e.sent,e.abrupt("return",t.results);case 13:return e.prev=13,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),e.prev=1,e.next=4,fetch(r,i);case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch cast");case 7:return e.next=9,t.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),e.prev=1,e.next=4,fetch(r,i);case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch reviews");case 7:return e.next=9,t.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=282.bf9b3d2f.chunk.js.map
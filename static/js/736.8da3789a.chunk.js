"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a,c,o,i,u=n(861),s=n(439),p=n(687),f=n.n(p),h=n(791),l=n(689),v=n(714),d=n(168),m=n(686),x=m.Z.ul(r||(r=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),g=m.Z.li(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),w=m.Z.p(c||(c=(0,d.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  margin-left: 5px;\n"]))),b=m.Z.p(o||(o=(0,d.Z)(["\n  font-size: 14px;\n  margin: 0;\n"]))),k=m.Z.img(i||(i=(0,d.Z)(["\n  width: 50px;\n  height: 75px;\n  object-fit: cover;\n  margin-right: 10px;\n"]))),Z=n(184),y=function(){var e=(0,h.useState)([]),t=(0,s.Z)(e,2),n=t[0],r=t[1],a=(0,l.UO)().movieId;return(0,h.useEffect)((function(){var e=function(){var e=(0,u.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.yj)(a);case 3:t=e.sent,r(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,Z.jsx)(x,{children:n.length>0?n.map((function(e){var t=e.profile_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(e.profile_path):"https://via.placeholder.com/500x500?text=Actor";return(0,Z.jsxs)(g,{children:[(0,Z.jsx)(k,{src:t,alt:e.name}),(0,Z.jsxs)(b,{children:[e.name," as"]}),(0,Z.jsx)(w,{children:e.character})]},e.credit_id)})):(0,Z.jsx)("div",{children:"No cast available"})})}},714:function(e,t,n){n.d(t,{b:function(){return p},gu:function(){return s},tb:function(){return h},yj:function(){return f},z1:function(){return u}});var r=n(861),a=n(687),c=n.n(a),o="https://api.themoviedb.org/3",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODY4YWQ5YTU3MjQwNWQ1M2E0ZWM5ZDgxNjc2ODhkYyIsInN1YiI6IjY0NzI0MmFkZGQ3MzFiMDBkZGYwODJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLy8SYeThyR1frJL8mDfZVKg4zxEpmO8tEYvPLKmkbo")}},u=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=").concat(n),e.prev=1,e.next=4,fetch(r,i);case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch movies");case 7:return e.next=9,a.json();case 9:return u=e.sent,e.abrupt("return",u);case 13:return e.prev=13,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),e.prev=1,e.next=4,fetch(n,i);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch details of movie");case 7:return e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/trending/movie/day?language=en-US&"),e.prev=1,e.next=4,fetch(t,i);case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch movies");case 7:return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r.results);case 13:return e.prev=13,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),e.prev=1,e.next=4,fetch(n,i);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch cast");case 7:return e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),e.prev=1,e.next=4,fetch(n,i);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch reviews");case 7:return e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()},861:function(e,t,n){function r(e,t,n,r,a,c,o){try{var i=e[c](o),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function i(e){r(o,a,c,i,u,"next",e)}function u(e){r(o,a,c,i,u,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=736.8da3789a.chunk.js.map
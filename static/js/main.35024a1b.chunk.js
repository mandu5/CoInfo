(this.webpackJsonpcoin=this.webpackJsonpcoin||[]).push([[0],{70:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),i=t(27),o=t.n(i),a=t(8),s=t(7),l=t(18),d=t(4),u=t(14),p=t(28),b=t(16),j=t.n(b),h=t(24),x="https://api.coinpaprika.com/v1";function f(){return m.apply(this,arguments)}function m(){return(m=Object(h.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x,"/coins"));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(){return(O=Object(h.a)(j.a.mark((function n(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x,"/coins/").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){return(g=Object(h.a)(j.a.mark((function n(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x,"/tickers/").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return(v=Object(h.a)(j.a.mark((function n(e){var t,c,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.floor(Date.now()/1e3),c=t-1209600,n.next=4,fetch("".concat(x,"/coins/").concat(e,"/ohlcv/historical?start=").concat(c,"&end=").concat(t));case 4:return r=n.sent,n.next=7,r.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var y,w,k,C,q,L,I,S=t(2),Q=s.c.div(y||(y=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),z=s.c.div(w||(w=Object(a.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),P=s.c.div(k||(k=Object(a.a)([""]))),F=s.c.div(C||(C=Object(a.a)(["\n  background-color: white;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),D=s.c.h1(q||(q=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.textColor})),M=s.c.span(L||(L=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),T=s.c.img(I||(I=Object(a.a)(["\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n"])));var $=function(){var n=Object(u.useQuery)("allcoins",f),e=n.isLoading,t=n.data;return Object(S.jsxs)(Q,{children:[Object(S.jsx)(p.a,{children:Object(S.jsx)("title",{children:"Coins"})}),Object(S.jsx)(z,{children:Object(S.jsx)(D,{children:"Coins"})}),e?Object(S.jsx)(M,{children:"Loading..."}):Object(S.jsx)(P,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(S.jsx)(F,{children:Object(S.jsxs)(l.b,{to:"/".concat(n.id),state:{name:n.name,rank:n.rank},children:[Object(S.jsx)(T,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},_=t(46),A=t.n(_);var B,J,R,E,U,G,H,K,N,V,W,X=function(n){var e=n.coinId,t=Object(u.useQuery)(["ohlcv",e],(function(){return function(n){return v.apply(this,arguments)}(e)}),{refetchInterval:1e4}),c=t.isLoading,r=t.data;return Object(S.jsx)("div",{children:c?"Loading chart...":Object(S.jsx)(A.a,{type:"line",series:[{name:"Price",data:null===r||void 0===r?void 0:r.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["red"],stops:[0,100]}},colors:["blue"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(3))}}}}})})},Y=s.c.div(B||(B=Object(a.a)(["\n  padding: 10px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),Z=s.c.div(J||(J=Object(a.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),nn=s.c.h1(R||(R=Object(a.a)(["\ndisplay: flex;\n  font-size: 25px;\n  color: ",";\n"])),(function(n){return n.theme.textColor})),en=s.c.div(E||(E=Object(a.a)(["\n  width: 30%;\n"]))),tn=s.c.span(U||(U=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),cn=s.c.div(G||(G=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n  align-items: center;\n  justify-content: space-between;\n"]))),rn=s.c.div(H||(H=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),on=s.c.p(K||(K=Object(a.a)(["\n  margin: 20px 0px;\n"]))),an=s.c.div(N||(N=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),sn=s.c.div(V||(V=Object(a.a)(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  background-color: ",";\n  border: 1px solid ",";\n  color: ",";\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  font-weight: 900;\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),ln=s.c.span(W||(W=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var dn=function(){var n=Object(d.h)().coinId,e=Object(d.f)("/:coinId/chart"),t=Object(u.useQuery)(["info",n],(function(){return function(n){return O.apply(this,arguments)}(n)}),{refetchInterval:5e3}),c=t.isLoading,r=t.data,i=Object(u.useQuery)(["tickers",n],(function(){return function(n){return g.apply(this,arguments)}(n)})),o=i.isLoading,a=i.data,s=c||o;return Object(S.jsxs)(Y,{children:[Object(S.jsx)(p.a,{children:Object(S.jsx)("title",{children:(null===r||void 0===r?void 0:r.name)?r.name:s?"Loading...":null===r||void 0===r?void 0:r.name})}),Object(S.jsxs)(Z,{children:[Object(S.jsx)(en,{children:Object(S.jsx)(sn,{children:Object(S.jsx)(l.b,{to:"/",children:"\u2190"})})}),Object(S.jsx)(nn,{children:(null===r||void 0===r?void 0:r.name)?r.name:s?"Loading...":null===r||void 0===r?void 0:r.name}),Object(S.jsx)(en,{})]}),s?Object(S.jsx)(tn,{children:"Loading..."}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(cn,{children:[Object(S.jsxs)(rn,{children:[Object(S.jsx)("span",{children:"Rank:"}),Object(S.jsx)("span",{children:null===r||void 0===r?void 0:r.rank})]}),Object(S.jsxs)(rn,{children:[Object(S.jsx)("span",{children:"Symbol:"}),Object(S.jsxs)("span",{children:["$",null===r||void 0===r?void 0:r.symbol]})]}),Object(S.jsxs)(rn,{children:[Object(S.jsx)("span",{children:"Price:"}),Object(S.jsxs)("span",{children:["$",null===a||void 0===a?void 0:a.quotes.USD.price.toFixed(3)]})]})]}),Object(S.jsx)(on,{children:null===r||void 0===r?void 0:r.description}),Object(S.jsxs)(cn,{children:[Object(S.jsxs)(rn,{children:[Object(S.jsx)("span",{children:"Total Suply:"}),Object(S.jsx)("span",{children:null===a||void 0===a?void 0:a.total_supply})]}),Object(S.jsxs)(rn,{children:[Object(S.jsx)("span",{children:"Max Supply:"}),Object(S.jsx)("span",{children:null===a||void 0===a?void 0:a.max_supply})]})]}),Object(S.jsx)(an,{children:Object(S.jsx)(ln,{isActive:null!==e,children:Object(S.jsx)(l.b,{to:"/".concat(n,"/chart"),children:"Chart"})})}),Object(S.jsx)(d.c,{children:Object(S.jsx)(d.a,{path:"chart",element:Object(S.jsx)(X,{coinId:n})})})]})]})};var un,pn=function(){return Object(S.jsx)(l.a,{children:Object(S.jsxs)(d.c,{children:[Object(S.jsx)(d.a,{path:"/Coinfo/",element:Object(S.jsx)($,{})}),Object(S.jsx)(d.a,{path:"/:coinId/*",element:Object(S.jsx)(dn,{})})]})})},bn=t(47),jn=Object(s.b)(un||(un=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n*[hidden] {\n    display: none;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var hn=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(jn,{}),Object(S.jsx)(pn,{}),Object(S.jsx)(bn.ReactQueryDevtools,{initialIsOpen:!0})]})},xn=new u.QueryClient;o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(u.QueryClientProvider,{client:xn,children:Object(S.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"blanchedalmond"},children:Object(S.jsx)(hn,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.35024a1b.chunk.js.map
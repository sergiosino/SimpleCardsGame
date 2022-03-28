(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{86:function(e,t,i){"use strict";i.r(t);var a,n=i(0),c=i.n(n),r=i(10),s=i.n(r),l=i(54),d=i(15),j=i(128),o=i(131),u=i(137),m=i(130),b=i(127),O=i(126),p=i(135),g=i(139),h=i(129),x=i(138),f=i(122),C=Object(f.a)((function(e){return{cardImage:{maxHeight:"100%",maxWidth:"100%"},app:{flexGrow:1},cardContainer:{padding:e.spacing(1)},titleContainer:{padding:e.spacing(1)},formControl:{margin:e.spacing(1),width:"100%"},alignCenter:{textAlign:"center"},version:{position:"absolute",bottom:0,right:0}}})),v=i(3),y=function(e){var t=e.dialogOpen,i=e.setDialogOpen,a=e.numberCards,n=e.changeNumberCards,c=e.flipTime,r=e.changeFlipTime,s=C();return Object(v.jsxs)(u.a,{fullWidth:!0,maxWidth:"sm",open:t,"aria-labelledby":"max-width-dialog-title",children:[Object(v.jsx)(O.a,{id:"max-width-dialog-title",children:"Optional sizes"}),Object(v.jsx)(b.a,{dividers:!0,children:Object(v.jsxs)(j.a,{container:!0,spacing:3,children:[Object(v.jsx)(j.a,{item:!0,xs:12,lg:6,style:{display:"flex"},children:Object(v.jsxs)(h.a,{variant:"outlined",className:s.formControl,children:[Object(v.jsx)(x.a,{id:"demo-simple-select-outlined-label",children:"Cards number"}),Object(v.jsxs)(p.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:a,onChange:n,label:"Cards number",children:[Object(v.jsx)(g.a,{value:4,children:"8"}),Object(v.jsx)(g.a,{value:6,children:"12"}),Object(v.jsx)(g.a,{value:12,children:"24"})]})]})}),Object(v.jsx)(j.a,{item:!0,xs:12,lg:6,style:{display:"flex"},children:Object(v.jsxs)(h.a,{variant:"outlined",className:s.formControl,children:[Object(v.jsx)(x.a,{id:"demo-simple-select-outlined-label",children:"Card flip time (seconds)"}),Object(v.jsxs)(p.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:c,onChange:r,label:"Card flip time (seconds)",children:[Object(v.jsx)(g.a,{value:1e3,children:"1"}),Object(v.jsx)(g.a,{value:750,children:"0.75"}),Object(v.jsx)(g.a,{value:500,children:"0.5"})]})]})})]})}),Object(v.jsx)(m.a,{children:Object(v.jsx)(o.a,{onClick:function(){return i(!1)},color:"primary",children:"Close"})})]})},N=i(132),S=i(133),k=i(89),w=i(134),I=i(51),D=i.n(I),J=i(63),F=i.n(J),W=Object(f.a)((function(e){return{title:{flexGrow:1}}})),T=function(e){var t=e.setDialogOpen,i=e.resetGame,a=e.showRetry,n=W();return Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(N.a,{position:"static",children:Object(v.jsxs)(S.a,{children:[Object(v.jsx)(k.a,{variant:"h6",className:n.title,children:"Simple card game"}),a&&Object(v.jsx)(w.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){return i()},color:"inherit",children:Object(v.jsx)(D.a,{})}),Object(v.jsx)(w.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){return t(!0)},color:"inherit",children:Object(v.jsx)(F.a,{})})]})}),Object(v.jsx)("div",{style:{height:20}})]})},G=i(88),H=i(64),M=i.n(H),E=i.p+"static/media/gray_back.0afd2efb.png",R=function(e){var t=e.index,i=e.id,a=e.img,n=e.turned,c=e.onClickCard,r=C().cardImage;return Object(v.jsxs)(M.a,{isFlipped:n,flipDirection:"horizontal",children:[Object(v.jsx)("img",{className:r,alt:i,src:E,onClick:c(t,i)}),Object(v.jsx)("img",{className:r,alt:i,src:a})]})},z=function(e){var t=e.allCards,i=e.onClickCard,a=C();return Object(v.jsx)(G.a,{elevation:3,className:a.cardContainer,children:Object(v.jsx)(j.a,{container:!0,spacing:1,justify:"center",children:24===t.length?t.map((function(e,t){return Object(v.jsx)(j.a,{item:!0,xs:2,sm:2,md:2,lg:1,children:Object(v.jsx)(R,{index:t,id:e.id,img:e.img,turned:e.turned,onClickCard:i})},t)})):t.map((function(e,t){return Object(v.jsx)(j.a,{item:!0,xs:3,sm:3,md:2,lg:1,children:Object(v.jsx)(R,{index:t,id:e.id,img:e.img,turned:e.turned,onClickCard:i})},t)}))})})},A=function(e){var t=e.timerFormat,i=(e.attempts,e.gameWon),a=C();return Object(v.jsx)(G.a,{elevation:3,className:a.titleContainer,children:Object(v.jsxs)(j.a,{container:!0,spacing:1,children:[Object(v.jsx)(j.a,{item:!0,xs:6,className:a.alignCenter,children:i?"Well done!":"Look for the pairs!"}),Object(v.jsxs)(j.a,{item:!0,xs:6,className:a.alignCenter,children:["Timer: ",t()]})]})})},B=[{id:1,img:i.p+"static/media/2H.44b256f0.png",turned:!1},{id:2,img:i.p+"static/media/2S.b0efcac0.png",turned:!1},{id:3,img:i.p+"static/media/3C.740490f6.png",turned:!1},{id:4,img:i.p+"static/media/3D.e8d502dd.png",turned:!1},{id:5,img:i.p+"static/media/3H.ec26afbd.png",turned:!1},{id:6,img:i.p+"static/media/3S.9c2eae6c.png",turned:!1},{id:7,img:i.p+"static/media/4C.03a77942.png",turned:!1},{id:8,img:i.p+"static/media/4D.6198dfa5.png",turned:!1},{id:9,img:i.p+"static/media/4H.5c782cf1.png",turned:!1},{id:10,img:i.p+"static/media/4S.8c4d9f8f.png",turned:!1},{id:11,img:i.p+"static/media/5C.558517b0.png",turned:!1},{id:12,img:i.p+"static/media/5D.0eeb59f1.png",turned:!1}],L=function(e){var t=e.dialogOpen,i=e.setDialogOpen,a=e.timerFormat,n=e.attempts,c=e.resetGame,r=C();return Object(v.jsxs)(u.a,{fullWidth:!0,maxWidth:"sm",open:t,"aria-labelledby":"max-width-dialog-title",children:[Object(v.jsx)(O.a,{id:"max-width-dialog-title",children:Object(v.jsx)(k.a,{variant:"h5",children:"Nice one!"})}),Object(v.jsx)(b.a,{dividers:!0,children:Object(v.jsxs)(j.a,{container:!0,spacing:1,children:[Object(v.jsx)(j.a,{item:!0,xs:12,lg:6,className:r.alignCenter,children:Object(v.jsxs)(k.a,{variant:"h6",children:["Timer: ",a()]})}),Object(v.jsx)(j.a,{item:!0,xs:12,lg:6,className:r.alignCenter,children:Object(v.jsxs)(k.a,{variant:"h6",children:["Attemps: ",n]})}),Object(v.jsx)("div",{style:{height:50}}),Object(v.jsx)(j.a,{item:!0,xs:12,lg:12,className:r.alignCenter,children:Object(v.jsx)(o.a,{variant:"contained",color:"primary",className:r.button,onClick:function(){i(!0),c()},startIcon:Object(v.jsx)(D.a,{}),children:"Retry"})})]})}),Object(v.jsx)(m.a,{children:Object(v.jsx)(o.a,{onClick:function(){return i(!1)},color:"primary",children:"Close"})})]})},_=!1,q=function(e){var t=Object(n.useState)([]),i=Object(d.a)(t,2),r=i[0],s=i[1],o=Object(n.useState)([]),u=Object(d.a)(o,2),m=u[0],b=u[1],O=Object(n.useState)(0),p=Object(d.a)(O,2),g=p[0],h=p[1],x=Object(n.useState)(0),f=Object(d.a)(x,2),C=f[0],N=f[1],S=Object(n.useState)(4),k=Object(d.a)(S,2),w=k[0],I=k[1],D=Object(n.useState)(!1),J=Object(d.a)(D,2),F=J[0],W=J[1],G=Object(n.useState)(!1),H=Object(d.a)(G,2),M=H[0],E=H[1],R=Object(n.useState)(!1),q=Object(d.a)(R,2),K=q[0],P=q[1],Q=Object(n.useState)(1e3),U=Object(d.a)(Q,2),V=U[0],X=U[1],Y=Object(n.useState)(!1),Z=Object(d.a)(Y,2),$=Z[0],ee=Z[1],te=function(){ie(),ee(!1),clearInterval(a),b([]),h(0),N(0),P(!1),E(!1)},ie=function(){var e=ne(B.slice(0,w)),t=ae(e);s(t)},ae=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[i],e[i]=a}return JSON.parse(JSON.stringify(e))},ne=function(e){return JSON.parse(JSON.stringify(e.flatMap((function(e){return[e,e]}))))},ce=function(e,t){_=!0,setTimeout((function(){var i;e[t].turned=!1,e[m[m.length-1].index].turned=!1,s(e),b(((i=m).splice(i.length-1,i.length),JSON.parse(JSON.stringify(i)))),N((function(e){return e+1})),_=!1}),V)};Object(n.useEffect)((function(){return te(),function(){clearInterval(a)}}),[w]),Object(n.useEffect)((function(){m.length===r.length&&$&&(clearInterval(a),P(!0),E(!0))}),[m]);var re=function(){var e=~~(g%3600/60),t=~~g%60;return(e<10?"0":"")+e+":"+(t<10?"0":"")+t};return Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(T,{setDialogOpen:W,resetGame:te,showRetry:$}),Object(v.jsx)(j.a,{container:!0,justify:"center",children:Object(v.jsx)(j.a,{item:!0,xs:11,sm:11,children:Object(v.jsxs)(j.a,{container:!0,spacing:3,justify:"center",children:[Object(v.jsx)(j.a,{item:!0,xs:12,children:Object(v.jsx)(A,{timerFormat:re,attempts:C,gameWon:K})}),Object(v.jsx)(j.a,{item:!0,xs:12,children:Object(v.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(v.jsx)(j.a,{item:!0,xs:12,sm:11,children:Object(v.jsx)(z,{allCards:r,onClickCard:function(e,t){return function(){if(!_){var i=JSON.parse(JSON.stringify(r));i[e].turned=!i[e].turned,s(i),r.filter((function(e){return!0===e.turned})).length%2===0?b([].concat(Object(l.a)(m),[{index:e,id:t}])):m[m.length-1].id===t?function(e,t,i){s(e),b([].concat(Object(l.a)(m),[{index:t,id:i}]))}(i,e,t):ce(i,e),$||(ee(!0),a=setInterval((function(){h((function(e){return e+1}))}),1e3))}}}})})})})]})})}),Object(v.jsx)(y,{dialogOpen:F,setDialogOpen:W,changeNumberCards:function(e){te(),I(e.target.value)},numberCards:w,flipTime:V,changeFlipTime:function(e){te(),X(e.target.value)}}),Object(v.jsx)(L,{dialogOpen:M,setDialogOpen:E,timerFormat:re,attempts:C,resetGame:te})]})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(q,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.11417e8e.chunk.js.map
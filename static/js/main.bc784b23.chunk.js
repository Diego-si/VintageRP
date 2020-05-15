(this["webpackJsonpreact-base"]=this["webpackJsonpreact-base"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),l=a.n(c),o=a(21),s=a(18),i=a(63),d=a(55),u=a(28),p=a(15),E=a(64),m=a(56),b=a.n(m),x=a(19),g=a(57),A=a.n(g).a.create({baseURL:"http://localhost:3001"}),S={isLoggedIn:!1,token:!1,user:{},isLoading:!1},R=Object(p.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":var a=Object(x.a)({},e);return a.isLoggedIn=!0,a.token=t.payload.token,a.user=t.payload.user,a.isLoading=!1,a;case"LOGIN_FAILURE":delete A.defaults.headers.Authorization;var n=Object(x.a)({},S);return n;case"LOGIN_REQUEST":var r=Object(x.a)({},e);return r.isLoading=!0,r;case"REGISTER_UPDATE_SUCCESS":var c=Object(x.a)({},e);return c.user.nome=t.payload.nome,c.user.email=t.payload.email,c.isLoading=!1,c;case"REGISTER_CREATED_SUCCESS":var l=Object(x.a)({},e);return l.isLoading=!1,l;case"REGISTER_FAILURE":var o=Object(x.a)({},e);return o.isLoading=!1,o;case"REGISTER_REQUEST":var s=Object(x.a)({},e);return s.isLoading=!0,s;default:return e}}}),h=a(22),O=a.n(h),f=a(12),v=a(29);function C(e){return{type:"LOGIN_SUCCESS",payload:e}}function I(e){return{type:"LOGIN_FAILURE",payload:e}}function y(e){return{type:"REGISTER_FAILURE",payload:e}}function D(e){return{type:"REGISTER_UPDATE_SUCCESS",payload:e}}function k(e){return{type:"REGISTER_CREATED_SUCCESS",payload:e}}var N=a(13),L=Object(N.a)(),T=O.a.mark(w),j=O.a.mark(P);function w(e){var t,a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(f.b)(A.post,"/tokens",t);case 4:return a=n.sent,n.next=7,Object(f.c)(C(Object(x.a)({},a.data)));case 7:s.b.success("Voc\xea fez login"),A.defaults.headers.Authorization="Bearer ".concat(a.data.token),L.push(t.prevPath),n.next=17;break;case 12:return n.prev=12,n.t0=n.catch(1),s.b.error("Usu\xe1rio ou senha inv\xe1lidos"),n.next=17,Object(f.c)(I());case 17:case"end":return n.stop()}}),T,null,[[1,12]])}function P(e){var t,a,n,r,c,l;return O.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.payload,a=t.id,n=t.nome,r=t.email,c=t.password,o.prev=2,!a){o.next=11;break}return o.next=6,Object(f.b)(A.put,"/users",{email:r,nome:n,password:c||void 0});case 6:return s.b.success("Conta alterada com sucesso"),o.next=9,Object(f.c)(D({nome:n,email:r,password:c}));case 9:o.next=17;break;case 11:return o.next=13,Object(f.b)(A.post,"/users",{email:r,nome:n,password:c});case 13:return s.b.success("Conta criada  com sucesso"),o.next=16,Object(f.c)(k({nome:n,email:r,password:c}));case 16:L.push("/login");case 17:o.next=31;break;case 19:if(o.prev=19,o.t0=o.catch(2),l=Object(v.get)(o.t0,"response.data.error",[]),401!==Object(v.get)(o.t0,"response.status",0)){o.next=28;break}return s.b.error("Voc\xea precisa fazer login novamente."),o.next=27,Object(f.c)(I());case 27:return o.abrupt("return",L.push("/login"));case 28:return l.length>0?l.map((function(e){return s.b.error(e)})):s.b.error("Erro desconhecido"),o.next=31,Object(f.c)(y());case 31:case"end":return o.stop()}}),j,null,[[2,19]])}var U=Object(f.a)([Object(f.d)("LOGIN_REQUEST",w),Object(f.d)("persist/REHYDRATE",(function(e){var t=e.payload,a=Object(v.get)(t,"auth.token","");a&&(A.defaults.headers.Authorization="Bearer ".concat(a))})),Object(f.d)("REGISTER_REQUEST",P)]),M=O.a.mark(B);function B(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([U]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),M)}var z,V=Object(E.a)(),_=Object(p.e)((z=R,Object(u.a)({key:"COMSUMO-API",storage:b.a,whitelist:["auth"]},z)),Object(p.a)(V));V.run(B);var F=Object(u.b)(_),G=_,K=a(25),H=a(26);a(96);function Q(){var e=Object(K.a)(["\n  max-width: 80%;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"]);return Q=function(){return e},e}function q(){var e=Object(K.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    outline: none;\n    box-sizing: border-box;\n  }\n  body {\n    background-image: linear-gradient(to top, #2B1480, #4D1181 ,#9F1BD7,#9F1BD7);\n  }\n  html, body, #root {\n    height: 100%;\n  }\n  button {\n    cursor: pointer;\n    background: ",";\n    border: none;\n    color: #fff;\n    padding: 10px 20px;\n    border-radius: 4px;\n    font-weight: 700;\n    transition: all 300ms;\n  }\n\n  button:hover {\n    filter: brightness(85%);\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n  }\n  h1 {\n    font-size: 18px;\n    text-align: grid;\n    color: ",";\n  }\n  p {\n    font-size: 18px;\n    text-align: center;\n    color: ",";\n  }\n  ul {\n    list-style:  none;\n  }\n"]);return q=function(){return e},e}var $=Object(H.a)(q(),"#4D1181","#F1E2F6","#2B1480","#F1E2F6"),J=H.b.section(Q()),Y=a(30),Z=a(62),W=a(24),X=a(109);function ee(){var e=Object(K.a)(["\n  background: #110429;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  a {\n    color: #f1e2f6;\n    margin: 0 3% 0 3%;\n    font-weight: bold;\n  }\n  a:hover {\n    color: #8c66c2;\n  }\n"]);return ee=function(){return e},e}var te=H.b.nav(ee());function ae(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement(X.a,{className:"navbar navbar-expand-lg justify-content-center fixed-top navbar-light ",style:{background:"#110429"}},r.a.createElement("a",{href:"https://discord.gg/pAuv7m9",target:"_blank"},r.a.createElement(Y.a,{size:40})),r.a.createElement(W.a,{to:"/"},r.a.createElement(Y.b,{size:40}))," ",r.a.createElement(W.a,{to:"/Vips"},r.a.createElement(Y.c,{size:40})),r.a.createElement(W.a,{to:"/Nitro"},r.a.createElement(Z.a,{size:40}))))))}var ne=a(66);function re(e){var t=e.component,a=e.isClosed,n=Object(ne.a)(e,["component","isClosed"]);return a?r.a.createElement(o.a,{to:{pathname:"/vips",state:{prevPath:n.location.pathname}}}):r.a.createElement(o.b,Object.assign({},n,{component:t}))}re.defaultProps={isClosed:!1};var ce=a(110),le=a(111),oe=a(112),se=a(113);function ie(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card text-center",style:{background:"#6A14B9"}},r.a.createElement("div",{className:"card-body",style:{background:"#6A14B9"}},r.a.createElement("a",{href:"#",className:"btn btn-primary",style:{background:"#6A14B9",border:"none"}},r.a.createElement(ce.a,{src:"https://image.prntscr.com/image/M7rTqMRMRnKl52LhxPPQew.png",alt:"Card text-center"})))),r.a.createElement(le.a,null,r.a.createElement(oe.a,{style:{margin:"10%"}},r.a.createElement(se.a,{xs:"col-12 col-sm-6 col-sm-2",style:{textAlign:"center",background:"#9f1bd7",width:"300px",height:"100%",borderRadius:"30px",padding:"23px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.25)"}},r.a.createElement("p",null,"VINTAGE ROLEPLAY ",r.a.createElement("br",null),"STAFF ATIVA PING BRASILEIRO SAL\xc1RIO BALANCEADO"," ")),r.a.createElement(se.a,{xs:"col-12 col-sm-6 col-sm-2",style:{textAlign:"center",width:"300px",height:"100%",borderRadius:"30px",background:"linear-gradient(to top, #8c66c2, #ffffff)",boxShadow:"0 0 10px rgba(0, 0, 0, 0.25)"}},r.a.createElement("h1",null,"APROVEITE A PROMO\xc7\xc3O DE INAUGURA\xc7\xc3O, AP\xd3S A INALGURA\xc7\xc3O VIPS VOLTARAM PARA O PRE\xc7O ORIGINAL"),r.a.createElement("p",null,"vips ter\xe3o direito a reservar uma fac\xe7\xe3o com 4 amigos!")))))}var de=a(114),ue=a(115),pe=a(116),Ee=a(117);function me(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card text-center",style:{background:"#6A14B9"}},r.a.createElement("div",{className:"card-body",style:{background:"#6A14B9"}},r.a.createElement("a",{href:"#",className:"btn btn-primary",style:{background:"#6A14B9",border:"none"}},r.a.createElement(ce.a,{src:"https://image.prntscr.com/image/M7rTqMRMRnKl52LhxPPQew.png",alt:"Card text-center"})))),r.a.createElement("div",null,r.a.createElement("div",{className:"row",style:{margin:"10px"}},r.a.createElement(de.a,{body:!0,inverse:!0,class:"col-6 col-md-4",style:{background:"#8C66C2",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",border:"30px",borderRadius:"30px"}},r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"Vip Rei do Baile"),r.a.createElement(pe.a,null,"4 CARROS VIPS",r.a.createElement("br",null),"BONUS DE 10KK ",r.a.createElement("br",null),"SALARIO DE 40K CADA 30 MIN",r.a.createElement("br",null),"CAMINH\xc3O DE 3 TONELADAS",r.a.createElement("br",null),"HELIC\xd3PTERO BUZZARD",r.a.createElement("br",null),"EMPRESSA DE LAVAGEM 1",r.a.createElement("br",null),"CASA NA CIDADE",r.a.createElement("br",null),"DIREITO A /fix E /dv",r.a.createElement("br",null),"DURA\xc7\xc3O DE 1 MES"),r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"R$ 150 REAIS"),r.a.createElement(Ee.a,{href:"https://discord.gg/pAuv7m9",target:"_blank",style:{background:"#5046AF",fontSize:"18px",padding:"15px",height:"50px",textAlign:"center",border:"none",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},"COMPRAR")),r.a.createElement(de.a,{body:!0,inverse:!0,class:"col-6 col-md-4",style:{background:"#8C66C2",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"Vip Camarote"),r.a.createElement(pe.a,null,"3 CARROS VIPS",r.a.createElement("br",null),"BONUS DE 7,5KK",r.a.createElement("br",null),"SALARIO DE 30K CADA 30 MIN",r.a.createElement("br",null),"CAMINH\xc3O DE 2 TONELADAS",r.a.createElement("br",null),"HELIC\xd3PTERO VOLATUS",r.a.createElement("br",null),"EMPRESSA DE LAVAGEM",r.a.createElement("br",null),"1 CASA NA CIDADE",r.a.createElement("br",null),"DIREITO A /fix E /dv",r.a.createElement("br",null),"DURA\xc7\xc3O DE 1 MES"),r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"R$ 100 REAIS"),r.a.createElement(Ee.a,{href:"https://discord.gg/pAuv7m9",target:"_blank",style:{background:"#5046AF",fontSize:"18px",padding:"15px",height:"50px",textAlign:"center",border:"none",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},"COMPRAR")),r.a.createElement(de.a,{body:!0,inverse:!0,class:"col-6 col-md-4",style:{background:"#8C66C2",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"Vip Balada"),r.a.createElement(pe.a,null,"2 CARROS VIPS",r.a.createElement("br",null),"BONUS DE 5KK",r.a.createElement("br",null),"SALARIO DE 30K CADA 30 MIN",r.a.createElement("br",null),"CAMINH\xc3O DE 1 TONELADA",r.a.createElement("br",null),"HELIC\xd3PTERO SUPER VOLITUS",r.a.createElement("br",null),"1 CASA NA CIDADE",r.a.createElement("br",null),"DIREITO A /fix E /dv",r.a.createElement("br",null),"DURA\xc7\xc3O DE 1 MES"),r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"R$ 80 REAIS"),r.a.createElement(Ee.a,{href:"https://discord.gg/pAuv7m9",target:"_blank",style:{background:"#5046AF",fontSize:"18px",padding:"15px",height:"50px",textAlign:"center",border:"none",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},"COMPRAR"))),r.a.createElement("div",{className:"row",style:{margin:"10px"}},r.a.createElement(de.a,{body:!0,inverse:!0,class:"col-6 col-md-4",style:{background:"#8C66C2",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"Vip Ousado"),r.a.createElement(pe.a,null,"1 CARROS VIPS",r.a.createElement("br",null),"BONUS DE 1KK",r.a.createElement("br",null),"SALARIO DE 10K CADA 30 MIN",r.a.createElement("br",null),"1 CASA NA CIDADE",r.a.createElement("br",null),"DIREITO A /dv",r.a.createElement("br",null),"DURA\xc7\xc3O DE 1 MES"),r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"R$ 50 REAIS"),r.a.createElement(Ee.a,{href:"https://discord.gg/pAuv7m9",target:"_blank",style:{background:"#5046AF",fontSize:"18px",padding:"15px",height:"50px",textAlign:"center",border:"none",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},"COMPRAR")),r.a.createElement(de.a,{body:!0,inverse:!0,class:"col-6 col-md-4",style:{background:"#8C66C2",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"Vip Passe Livre"),r.a.createElement(pe.a,null,"1 CARROS CONCESSION\xc1RIA",r.a.createElement("br",null),"BONUS DE 500K",r.a.createElement("br",null),"SALARIO DE 5K CADA 30 MIN",r.a.createElement("br",null),r.a.createElement("br",null),"DURA\xc7\xc3O DE 1 MES"),r.a.createElement(ue.a,{style:{color:" #2C0A54",fontSize:"18px",textAlign:"center"}},"R$ 30 REAIS"),r.a.createElement(Ee.a,{href:"https://discord.gg/pAuv7m9",target:"_blank",style:{backgroundColor:"#5046AF",fontSize:"18px",padding:"15px",height:"50px",textAlign:"center",border:"none",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"30px"}},"COMPRAR")))))}var be=a(38),xe=a(65),ge=a(118),Ae=a(119),Se=a(120),Re=a(121),he=[{src:"https://cdn.discordapp.com/attachments/688723557240668220/710093261448151131/5b697c94f40e022522a125d042ffa449.png",altText:"Slide 1",caption:"Slide 1"},{src:"https://cdn.discordapp.com/attachments/688723557240668220/710091249406705704/d1bfb8-271590_2015-08-14_00017.png",altText:"Slide 2",caption:"Slide 2"},{src:"https://cdn.discordapp.com/attachments/688723557240668220/710092524739362946/4ad977ab603e89414c1cc57b0e081289x.png",altText:"Slide 3",caption:"Slide 3"}],Oe=function(){var e=Object(n.useState)(0),t=Object(be.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(be.a)(l,2),s=o[0],i=o[1],d=function(){if(!s){var e=a===he.length-1?0:a+1;c(e)}},u=function(){if(!s){var e=0===a?he.length-1:a-1;c(e)}},p=he.map((function(e){return r.a.createElement(xe.a,{className:"",onExiting:function(){return i(!0)},onExited:function(){return i(!1)},key:e.src},r.a.createElement("img",{src:e.src,alt:e.altText,style:{marginLeft:"10%",width:"80%",height:"80%"}}),r.a.createElement(ge.a,{captionText:e.caption,captionHeader:e.caption}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card text-center",style:{background:"#6A14B9"}},r.a.createElement("div",{className:"card-body",style:{background:"#6A14B9"}},r.a.createElement("a",{href:"#",className:"btn btn-primary",style:{background:"#6A14B9",border:"none"}},r.a.createElement(ce.a,{src:"https://image.prntscr.com/image/M7rTqMRMRnKl52LhxPPQew.png",alt:"Card text-center"})))),r.a.createElement(le.a,null,r.a.createElement(oe.a,{style:{margin:"10px"}},r.a.createElement(se.a,{xs:"col-12 col-sm-6 col-sm-2",style:{textAlign:"center",background:"#8C66C2",height:"100%",borderRadius:"30px"}},r.a.createElement("p",null,"Extremamente proibido a venda de Ve\xedculos VIP para qualquer outro player, o carro dever\xe1 ser apenas do comprador.")),r.a.createElement(se.a,{xs:"col-12 col-sm-6 col-sm-2",style:{textAlign:"center",background:"#F1E2F6",height:"100%",borderRadius:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.25)",padding:"18px"}}," ",r.a.createElement("h1",null,"SERVER BOOST 1 M\xcaS 1 CARRO VIP B\xd4NUS DE 500K")))),r.a.createElement(Ae.a,{activeIndex:a,next:d,previous:u,className:"fotoVIRAVI"},r.a.createElement(Se.a,{items:he,activeIndex:a,onClickHandler:function(e){s||c(e)}}),p,r.a.createElement(Re.a,{direction:"prev",directionText:"Previous",onClickHandler:u}),r.a.createElement(Re.a,{direction:"next",directionText:"Next",onClickHandler:d})))};function fe(){return r.a.createElement(J,null,r.a.createElement("h1",null,"Essa p\xe1gina n\xe3o existe"))}function ve(){return r.a.createElement(o.d,null,r.a.createElement(re,{exact:!0,path:"/",component:ie,isClosed:!1}),r.a.createElement(re,{exact:!0,path:"/vips/",component:me,isClosed:!1}),r.a.createElement(re,{exact:!0,path:"/nitro/",component:Oe,isClosed:!1}),r.a.createElement(re,{path:"*",component:fe}))}var Ce=function(){return r.a.createElement(i.a,{store:G},r.a.createElement(d.a,{persistor:F},r.a.createElement(o.c,{history:L},r.a.createElement(ae,null),r.a.createElement(ve,null),r.a.createElement($,null),r.a.createElement(s.a,{autoClose:3e3,className:"toast-container"}))))};a(105);l.a.render(r.a.createElement(Ce,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(106)}},[[67,1,2]]]);
//# sourceMappingURL=main.bc784b23.chunk.js.map
import{s as me,b as _e,n as ae,r as be}from"../chunks/scheduler.Bnzw7RF6.js";import{S as ge,i as Ce,e as r,s as p,c as u,a as S,k as x,f as c,d as B,m as H,l as d,g as ve,h as t,o as T,q as he,n as U,r as Le,t as we,b as Ee,p as Be,u as ye}from"../chunks/index.BOwgUwjM.js";import{b as Pe}from"../chunks/paths.CGMkuZ_q.js";function de(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function pe(n,o,i){const f=n.slice();return f[9]=o[i],f}function ce(n){let o,i=n[9].namn+"",f;return{c(){o=r("option"),f=we(i),this.h()},l(m){o=u(m,"OPTION",{});var _=S(o);f=Ee(_,i),_.forEach(B),this.h()},h(){o.__value=n[9].value,T(o,o.__value)},m(m,_){ve(m,o,_),t(o,f)},p:ae,d(m){m&&B(o)}}}function Ie(n){let o,i,f,m="Registrering",_,v,N,e,C,V="Namn:",M,L,j,y,se="giveme email:",q,w,D,P,oe="Password pls😇:",F,E,W,I,ie="What's your favourite color?",z,g,G,J,K,Q,X,R,Y,Z,$,ee,te,k,re=`Har du redan ett konto? <div class="wrapthing svelte-1oni7u4"><a href="${Pe}/login">Logga in</a></div>`,le,ue,A=de(n[4]),h=[];for(let a=0;a<A.length;a+=1)h[a]=ce(pe(n,A,a));return{c(){o=r("main"),i=r("div"),f=r("h1"),f.textContent=m,_=p(),v=r("div"),N=p(),e=r("form"),C=r("label"),C.textContent=V,M=p(),L=r("input"),j=p(),y=r("label"),y.textContent=se,q=p(),w=r("input"),D=p(),P=r("label"),P.textContent=oe,F=p(),E=r("input"),W=p(),I=r("label"),I.textContent=ie,z=p(),g=r("select");for(let a=0;a<h.length;a+=1)h[a].c();G=p(),J=r("br"),K=p(),Q=r("br"),X=p(),R=r("input"),Y=p(),Z=r("br"),$=p(),ee=r("br"),te=p(),k=r("h2"),k.innerHTML=re,this.h()},l(a){o=u(a,"MAIN",{class:!0});var b=S(o);i=u(b,"DIV",{class:!0});var s=S(i);f=u(s,"H1",{"data-svelte-h":!0}),x(f)!=="svelte-1bygy45"&&(f.textContent=m),_=c(s),v=u(s,"DIV",{style:!0});var O=S(v);O.forEach(B),N=c(s),e=u(s,"FORM",{action:!0});var l=S(e);C=u(l,"LABEL",{for:!0,"data-svelte-h":!0}),x(C)!=="svelte-t4ghih"&&(C.textContent=V),M=c(l),L=u(l,"INPUT",{type:!0,id:!0}),j=c(l),y=u(l,"LABEL",{for:!0,"data-svelte-h":!0}),x(y)!=="svelte-1j6l7jd"&&(y.textContent=se),q=c(l),w=u(l,"INPUT",{type:!0,id:!0}),D=c(l),P=u(l,"LABEL",{for:!0,"data-svelte-h":!0}),x(P)!=="svelte-rm0r9d"&&(P.textContent=oe),F=c(l),E=u(l,"INPUT",{type:!0,id:!0}),W=c(l),I=u(l,"LABEL",{for:!0,"data-svelte-h":!0}),x(I)!=="svelte-17ny2vw"&&(I.textContent=ie),z=c(l),g=u(l,"SELECT",{id:!0});var fe=S(g);for(let ne=0;ne<h.length;ne+=1)h[ne].l(fe);fe.forEach(B),G=c(l),J=u(l,"BR",{}),K=c(l),Q=u(l,"BR",{}),X=c(l),R=u(l,"INPUT",{type:!0,class:!0}),Y=c(l),Z=u(l,"BR",{}),$=c(l),ee=u(l,"BR",{}),te=c(l),k=u(l,"H2",{"data-svelte-h":!0}),x(k)!=="svelte-35sywi"&&(k.innerHTML=re),l.forEach(B),s.forEach(B),b.forEach(B),this.h()},h(){H(v,"width","100px"),H(v,"height","100px"),H(v,"border-radius","50%"),H(v,"overflow","hidden"),H(v,"background-color",n[0]),d(C,"for","name"),d(L,"type","text"),d(L,"id","name"),d(y,"for","email"),d(w,"type","email"),d(w,"id","email"),d(P,"for","password"),d(E,"type","password"),d(E,"id","password"),d(I,"for","favoritfärg"),d(g,"id","favoritfärg"),n[0]===void 0&&_e(()=>n[8].call(g)),d(R,"type","submit"),R.value="Register here...",d(R,"class","knapp svelte-1oni7u4"),d(e,"action",""),d(i,"class","container svelte-1oni7u4"),d(o,"class","svelte-1oni7u4")},m(a,b){ve(a,o,b),t(o,i),t(i,f),t(i,_),t(i,v),t(i,N),t(i,e),t(e,C),t(e,M),t(e,L),T(L,n[1]),t(e,j),t(e,y),t(e,q),t(e,w),T(w,n[2]),t(e,D),t(e,P),t(e,F),t(e,E),T(E,n[3]),t(e,W),t(e,I),t(e,z),t(e,g);for(let s=0;s<h.length;s+=1)h[s]&&h[s].m(g,null);he(g,n[0],!0),t(e,G),t(e,J),t(e,K),t(e,Q),t(e,X),t(e,R),t(e,Y),t(e,Z),t(e,$),t(e,ee),t(e,te),t(e,k),le||(ue=[U(L,"input",n[5]),U(w,"input",n[6]),U(E,"input",n[7]),U(g,"change",n[8]),U(e,"submit",Be(Te))],le=!0)},p(a,[b]){if(b&1&&H(v,"background-color",a[0]),b&2&&L.value!==a[1]&&T(L,a[1]),b&4&&w.value!==a[2]&&T(w,a[2]),b&8&&E.value!==a[3]&&T(E,a[3]),b&16){A=de(a[4]);let s;for(s=0;s<A.length;s+=1){const O=pe(a,A,s);h[s]?h[s].p(O,b):(h[s]=ce(O),h[s].c(),h[s].m(g,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=A.length}b&17&&he(g,a[0])},i:ae,o:ae,d(a){a&&B(o),Le(h,a),le=!1,be(ue)}}}function Te(){alert("Välkommen!")}function Ne(n,o,i){let f="black",m,_,v,N=[{namn:"Blå",value:"PowderBlue"},{namn:"Violett",value:"violet"},{namn:"gul",value:"yellow"},{namn:"rosa",value:"Pink"},{namn:"Lax",value:"Salmon"}];function e(){m=this.value,i(1,m)}function C(){_=this.value,i(2,_)}function V(){v=this.value,i(3,v)}function M(){f=ye(this),i(0,f),i(4,N)}return[f,m,_,v,N,e,C,V,M]}class xe extends ge{constructor(o){super(),Ce(this,o,Ne,Ie,me,{})}}export{xe as component};

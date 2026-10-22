const NOMBRE="Ivy";
const FINAL=["Gracias por todos estos momentos, con mucho amor, para ti \u2764\uFE0F"];
const LINES={
start:"Bienvenida. Soy el anfitrión de esta aventura. Hoy no se pierde nadie, solo se recuerda.",
ok:["Ficha ganada.","Guardado en la memoria del circo.","Qué bonito recuerdo."],ok2:["Eso sí que vale una ficha.","Qué bonito lo contaste.","Me gusta cómo lo recuerdas."],
no:["Casi, casi.","Esa era traicionera.","No pasa nada, la respuesta es esta."],
last:"Llegamos al último nivel. Esta pregunta no la escribí yo."
};
const Q=[{"img": null, "t": "¿Cómo empezó todo? ¿Dónde y cómo fue nuestra primera conversación?", "p": "Cuéntalo como lo recuerdas"}, {"img": null, "t": "¿Qué recuerdas de la primera vez que hablamos por llamada o video?", "p": "Lo primero que se te viene"}, {"img": null, "t": "¿Cuál fue el primer juego que jugamos juntos?", "p": "Escribe el nombre"}, {"img": null, "t": "¿Qué canción es nuestra?", "p": "Canción y artista"}, {"img": null, "t": "¿Cuál es nuestro chiste interno? Ese que nadie más entendería.", "p": "Escríbelo aquí"}, {"img": null, "t": "¿Cómo me dices, o cómo te digo, cuando nadie nos escucha?", "p": "Un apodo"}, {"img": null, "t": "¿Qué comida o bebida nos gustaría compartir cuando nos veamos?", "p": "Lo que se te antoje"}, {"img": null, "t": "¿Qué es lo mejor que ha pasado gracias a que estamos lejos pero juntos?", "p": "Lo que se te ocurra"}, {"img": null, "t": "¿Qué palabra o costumbre costeña te tocó aprender?", "p": "Una palabra, un plato, algo"}, {"img": null, "t": "¿Recuerdas la primera vez que te ayudé con tu PC? ¿Qué es algo gracioso que recuerdas?", "p": "¿Qué pasó?"}, {"img": null, "t": "¿Cuál fue ese momento tan emotivo que vivimos y nos hizo llorar de felicidad?", "p": "Ese recuerdo que aún te hace sonreír"}, {"img": null, "t": "¿Qué cosa de mí te da más risa, aunque no lo sepa?", "p": "Sin pena"}, {"img": null, "t": "¿Cuál fue esa pelea o malentendido tonto que ya es anécdota?", "p": "Ya podemos reírnos"}, {"img": null, "t": "¿Qué serie, juego o personaje nos representa como pareja?", "p": "Elige uno"}, {"img": null, "t": "¿Cuál fue el mejor detalle o regalo de este año?", "p": "Puede ser pequeño"}, {"img": null, "t": "¿Qué hago yo que te hace sentir más querida?", "p": "Lo que más sientes"}, {"img": null, "t": "¿Qué frase mía no has podido olvidar?", "p": "Tal cual la recuerdas"}, {"img": null, "t": "¿Qué fue lo más inesperado que hice por ti?", "p": "Lo que te sorprendió"}, {"img": null, "t": "¿A qué hora hablamos más y por qué nos cuesta tanto despedirnos?", "p": "Dime la hora"}, {"img": null, "t": "¿Qué plan tenemos para cuando por fin nos veamos?", "p": "Lo primero que haríamos"}, {"img": null, "t": "¿Cuál fue el momento en que más te reíste conmigo?", "p": "Escríbelo"}, {"img": null, "t": "Última pregunta del año: ¿qué te gustaría que hiciéramos en nuestro próximo 22?", "p": "Sueña en grande"}];
const $=document.getElementById('screen'),B=document.getElementById('bubble'),H=document.querySelector('.host');
const calm=window.matchMedia?matchMedia('(prefers-reduced-motion:reduce)').matches:false;
const pick=a=>a[Math.floor(Math.random()*a.length)];
const decks={};
function draw(g){g=g||'q';let d=decks[g];if(!d||!d.length){d=IMG.map((_,k)=>k).filter(k=>(IMG[k].g||'q')===g);if(!d.length)return draw('q');for(let k=d.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[d[k],d[j]]=[d[j],d[k]]}decks[g]=d}return d.pop()}
let i=0,tok=0,tm,extra=0;const found=new Set();
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function clear(){$.classList.remove('ctr');while($.firstChild)$.removeChild($.firstChild)}
function art(n){const d=el('div','art has'),m=el('img');m.src=IMG[n].s;m.alt=IMG[n].a;d.append(m);return d}
function zoom(k){
const o=el('div','lb');o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label','Dibujo ampliado');
const m=el('img');m.src=IMG[k].s;m.alt=IMG[k].a;const x=el('button','lbx','Cerrar');
const esc=e=>{if(e.key==='Escape')close()};
const close=()=>{o.remove();document.removeEventListener('keydown',esc)};
x.onclick=close;o.onclick=e=>{if(e.target===o)close()};
document.addEventListener('keydown',esc);o.append(m,x);document.body.append(o);x.focus()
}
function say(t){clearInterval(tm);if(calm){B.textContent=t;return}B.textContent='';let n=0;tm=setInterval(()=>{B.textContent=t.slice(0,++n);if(n>=t.length)clearInterval(tm)},24)}
function react(c){H.classList.remove('hop','wob');void H.offsetWidth;H.classList.add(c)}
H.addEventListener('animationend',()=>H.classList.remove('hop','wob'));
function enter(){$.classList.remove('pop');void $.offsetWidth;$.classList.add('pop')}
function hud(label){
const t=el('div','top');t.append(el('span','lbl',label),el('span','tok',tok+' fichas'));$.append(t);
const d=el('div','dots'),f=el('i');f.style.width=Math.round((i+1)/(Q.length+1)*100)+'%';d.append(f);$.append(d)
}
function setMode(m){
if(window.__caineHome)window.__caineHome(true);
const b=document.body,cur=b.classList.contains('play')?'play':b.classList.contains('fin')?'fin':'';
if((m||'')===cur)return;
const els=[H,B],f=els.map(e=>e.getBoundingClientRect());
b.classList.remove('play','fin');if(m)b.classList.add(m);
if(calm||!H.animate)return;
els.forEach((e,k)=>{const t=e.getBoundingClientRect(),dx=f[k].left-t.left,dy=f[k].top-t.top,sc=k===0&&t.width?f[k].width/t.width:1;
e.animate([{transformOrigin:'0 0',transform:'translate('+dx+'px,'+dy+'px) scale('+sc+')'},{transformOrigin:'0 0',transform:'none'}],{duration:800,easing:'cubic-bezier(.25,.8,.3,1)'})})
}
function fly(on){setMode(on?'play':'')}
function start(quiet){
resetFinale();fly(false);clear();enter();$.append(art(draw()),el('h1',null,'Bienvenida'));
$.append(el('p','say','Responde las preguntas, junta fichas y llega hasta el último nivel.'));
const b=el('button','btn go','Entrar');b.onclick=()=>{i=0;tok=extra;fly(true);Snd.play('adv');ask()};$.append(b);
if(quiet)B.textContent='';else say(LINES.start)
}
function ask(){
clear();enter();hud('Aventura '+(i+1)+' de '+Q.length);
const q=Q[i];
$.append(art(q.img!=null?q.img:draw()),el('h2',null,q.t));
const fb=el('p','fb');
const f=el('form','ans'),inp=el('textarea');inp.rows=3;inp.placeholder=q.p;inp.setAttribute('aria-label',q.t);inp.maxLength=500;
const sb=el('button','btn opt send','Responder');sb.type='submit';sb.disabled=true;
inp.oninput=()=>{sb.disabled=!inp.value.trim()};
inp.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();if(!sb.disabled)f.requestSubmit?f.requestSubmit():sb.click()}};
f.onsubmit=e=>{e.preventDefault();if(sb.disabled)return;answer(inp,sb,fb)};
f.append(inp,sb);$.append(f,fb);
say(i===0?'Primera aventura. Con calma.':'Siguiente aventura.')
}
function answer(inp,sb,fb){
inp.disabled=true;sb.disabled=true;sb.hidden=true;
tok++;const t=$.querySelector('.tok');t.textContent=tok+' fichas';t.classList.add('pulse');react('hop');
fb.textContent=pick(LINES.ok);say(pick(LINES.ok2));
const n=el('button','btn go',i<Q.length-1?'Siguiente aventura':'Último nivel');
n.onclick=()=>{i++;i<Q.length?ask():epilogue()};$.append(n);
if(n.scrollIntoView)n.scrollIntoView({block:'nearest',behavior:calm?'auto':'smooth'})
}
function choose(k,bs,fb,q){
bs.forEach(x=>x.disabled=true);
const good=k===q.a;
if(good){bs[k].classList.add('ok');tok++;const t=$.querySelector('.tok');t.textContent=tok+' fichas';t.classList.add('pulse');react('hop')}
else{bs[k].classList.add('no');bs[q.a].classList.add('ok');react('wob')}
fb.textContent=good?q.ok:q.no;say(pick(good?LINES.ok:LINES.no));
const n=el('button','btn go',i<Q.length-1?'Siguiente aventura':'Último nivel');
n.onclick=()=>{i++;i<Q.length?ask():epilogue()};$.append(n);
if(n.scrollIntoView)n.scrollIntoView({block:'nearest',behavior:calm?'auto':'smooth'})
}
const EPI=["Pues parece que nuestra aventura ha concluido. Espero que te haya divertido mucho recordar con mucha ilusión.","Miller te ama, y bastante.","De hecho, hay una aventura más que debemos mirar."];
let eb=null,ep=0,etm=0;
function placeBtn(){}
function epiLine(){
const t=EPI[ep];say(t);react('hop');
eb.disabled=true;eb.textContent=ep<EPI.length-1?'Continuar':'Ver la última aventura';
setTimeout(()=>{if(eb)eb.disabled=false},calm?200:t.length*24+250);
placeBtn()
}
function epilogue(){
Snd.play('fin',1.2);
$.classList.add('gone');
setTimeout(()=>{
setMode('fin');
ep=0;eb=el('button','btn go efin','Continuar');eb.onclick=()=>{ep++;if(ep<EPI.length)epiLine();else finale()};
document.body.append(eb);clearInterval(etm);etm=setInterval(placeBtn,150);
setTimeout(epiLine,calm?0:900)
},calm?0:650)
}
function finale(){
clearInterval(etm);if(eb){eb.remove();eb=null}
say('Un redoble de tambores, por favor.');H.classList.add('drum');
Snd.seq('dr',4.28,'adv');
setTimeout(proposal,4360)
}
function mkColl(){
if(document.getElementById('coll'))return;
const c=el('div','coll');c.id='coll';c.setAttribute('aria-hidden','true');
const W=innerWidth,Hh=innerHeight,ts=Math.max(84,Math.min(170,W/7)),cw=ts*.92,cols=Math.ceil(W/cw)+1,rows=Math.ceil(Hh/cw)+1;
const ord=IMG.map((_,k)=>k).sort(()=>Math.random()-.5);let idx=0;
for(let r=0;r<rows;r++)for(let q=0;q<cols;q++){
const x=q*cw-cw*.3+(Math.random()-.5)*cw*.25,y=r*cw-cw*.3+(Math.random()-.5)*cw*.25;
if(W>900&&x+ts>W/2-310&&x<W/2+310)continue;
const t=el('div','tl'),m=el('img');m.src=IMG[ord[idx++%ord.length]].s;m.alt='';
t.style.cssText='left:'+x+'px;top:'+y+'px;width:'+ts+'px;--r:'+((Math.random()-.5)*16).toFixed(1)+'deg;--d:'+(Math.hypot(x-W/2,y-Hh/2)/Math.hypot(W/2,Hh/2)*1.2).toFixed(2)+'s';
t.append(m);c.append(t)
}
document.body.append(c);document.body.classList.add('grand')
}
function resetFinale(){
clearInterval(etm);if(eb){eb.remove();eb=null}
const c=document.getElementById('coll');if(c)c.remove();
document.body.classList.remove('grand');H.classList.remove('drum');$.classList.remove('gone')
}
function proposal(){
H.classList.remove('drum');mkColl();setMode(innerWidth<700||innerHeight<720?'play':'');$.classList.remove('gone');
clear();enter();hud('Nivel final');
$.append(el('h1','big','¿Te gustaría ser mi novia?'));
const s1=el('button','btn ok','Sí'),s2=el('button','btn ok','Sí (y quiero más fichas) :3'),s3=el('button','btn nono');
s3.type='button';s3.setAttribute('aria-label','No');s3.append(el('span','no2','No'),el('span','si','Sí'));
[s1,s2,s3].forEach(b=>b.onclick=yes);$.append(s1,s2,s3);
$.append(el('p','say','Juntaste '+tok+' fichas, pero hoy eso es lo de menos.'));
say(LINES.last);react('hop');
if(!calm)for(let k=0;k<16;k++){const h=el('span','heart','\u2665\uFE0E');h.style.left=Math.random()*100+'vw';h.style.fontSize=(18+Math.random()*26)+'px';h.style.animationDuration=(3.5+Math.random()*3)+'s';h.style.animationDelay=Math.random()*1.2+'s';document.body.append(h);setTimeout(()=>h.remove(),8000)}
}
function yes(){
Snd.stop(2.5);clear();$.classList.add('ctr');enter();$.append(art(draw('e')),el('h1',null,'Lo logramos'));
FINAL.forEach(t=>$.append(el('p','msg',t)));
const MAXF=Q.length+document.querySelectorAll('.sec').length,full=tok>=MAXF,sc=el('div','score'+(full?' max':''));
sc.append(el('b',null,full?tok+' fichas':tok+' de '+MAXF+' fichas'),el('small',null,full?'¡Máximo de fichas alcanzado!':'Aún quedan fichas escondidas en el fondo'));
$.append(sc);
$.append(el('h2',null,'Dibujos que hice para ti'));
const g=el('div','gal');IMG.forEach((m,k)=>{const b=el('button','thumb');b.setAttribute('aria-label','Ampliar dibujo '+(k+1));const t=el('img');t.src=m.s;t.alt=m.a;b.append(t);b.onclick=()=>zoom(k);g.append(b)});
$.append(g);
$.append(el('p','thx','Gracias por jugar y por este año.'));
const b=el('button','btn go','Volver a jugar');b.onclick=()=>start();$.append(b);
say('Fin del juego. Lo que sigue lo escriben ustedes dos.');react('hop');
if(calm)return;
const c=['#d8232a','#f6c945','#2f6fe0','#2fb35a','#f08ac0'];
for(let k=0;k<60;k++){const s=el('span','conf');s.style.left=Math.random()*100+'vw';s.style.background=c[k%5];s.style.animationDuration=(2+Math.random()*2.5)+'s';s.style.animationDelay=Math.random()*.8+'s';document.body.append(s);setTimeout(()=>s.remove(),6000)}
for(let k=0;k<26;k++){const s=el('span','heart','\u2665\uFE0E');s.style.left=Math.random()*100+'vw';s.style.fontSize=(18+Math.random()*30)+'px';s.style.animationDuration=(4+Math.random()*4)+'s';s.style.animationDelay=Math.random()*2.5+'s';document.body.append(s);setTimeout(()=>s.remove(),10500)}
}
document.addEventListener('keydown',e=>{
if(document.querySelector('.cur'))return;
if(e.key>='1'&&e.key<='9'){const b=$.querySelectorAll('.opt')[+e.key-1];if(b&&!b.disabled)b.click()}
else if(e.key==='Enter'&&document.activeElement.tagName!=='BUTTON'){const g=$.querySelector('.go')||document.querySelector('.efin');if(g&&!g.disabled)g.click()}
});
start(true);

const Snd=(()=>{
const AC=window.AudioContext||window.webkitAudioContext,no=()=>{};
if(!AC)return{play:no,one:no,seq:no,stop:no,toggle:no,resume:no};
const ctx=new AC(),master=ctx.createGain();master.connect(ctx.destination);
const buf={};let cur=null,want=null,muted=false;
const ready=Promise.all(Object.keys(AUD).map(k=>fetch(AUD[k]).then(r=>r.arrayBuffer()).then(b=>new Promise(res=>{try{const p=ctx.decodeAudioData(b,d=>{buf[k]=d;res()},()=>res());if(p&&p.catch)p.catch(()=>res())}catch(_){res()}})).catch(()=>{})));
const resume=()=>{try{const p=ctx.resume();if(p&&p.catch)p.catch(no)}catch(_){}};
function spawn(name,loop,fade,when){
const s=ctx.createBufferSource(),g=ctx.createGain();s.buffer=buf[name];s.loop=loop;s.connect(g);g.connect(master);
const n=when||ctx.currentTime;g.gain.setValueAtTime(fade?0:1,n);if(fade)g.gain.linearRampToValueAtTime(1,n+fade);s.start(when||0);return{s,g,name}
}
function out(h,t){const g=h.g.gain,n=ctx.currentTime;g.cancelScheduledValues(n);g.setValueAtTime(g.value,n);g.linearRampToValueAtTime(0,n+t);try{h.s.stop(n+t+.05)}catch(_){}}
['pointerdown','keydown','touchstart'].forEach(ev=>document.addEventListener(ev,e=>{if(e.target.closest&&e.target.closest('#abrir'))return;resume()},true));
document.addEventListener('visibilitychange',()=>{if(document.hidden){try{ctx.suspend()}catch(_){}}else resume()});
return{
resume,
play(name,fade=.8){want=name;ready.then(()=>{if(want!==name||!buf[name])return;resume();if(cur&&cur.name===name)return;if(cur)out(cur,fade);cur=spawn(name,true,fade)})},
seq(first,at,second){want=second;ready.then(()=>{if(!buf[first]||!buf[second])return;resume();if(cur){out(cur,.4);cur=null}const t=ctx.currentTime+.08;spawn(first,false,0,t);cur=spawn(second,true,0,t+at)})},
one(name){ready.then(()=>{if(!buf[name])return;resume();spawn(name,false,0)})},
stop(t=.6){want=null;if(cur){out(cur,t);cur=null}},
toggle(){muted=!muted;const g=master.gain,n=ctx.currentTime;g.cancelScheduledValues(n);g.setValueAtTime(g.value,n);g.linearRampToValueAtTime(muted?0:1,n+.15);return muted}
}
})();
const sb=document.getElementById('snd');
sb.onclick=()=>{const m=Snd.toggle();sb.classList.toggle('off',m);sb.setAttribute('aria-pressed',m);sb.setAttribute('aria-label',m?'Activar sonido':'Silenciar sonido')};
document.getElementById('empezar').onclick=()=>{
const ini=document.getElementById('ini');Snd.resume();
const t=document.querySelector('.tel');if(t&&getComputedStyle(t).display!=='none')Snd.play('tel',1.2);
ini.classList.add('bye');setTimeout(()=>ini.remove(),700);
document.getElementById('abrir').focus()
};
const ab=document.getElementById('abrir');
ab.onclick=()=>{ab.disabled=true;Snd.resume();Snd.stop(.5);setTimeout(()=>{document.body.classList.add('open');Snd.one('open');setTimeout(()=>say(LINES.start),1500);setTimeout(()=>document.querySelectorAll('.cur,.tel').forEach(c=>c.remove()),3200)},1500)};

(function(){
const sc=document.querySelector('.scene'),M=window.Matter;let z=1,engine=null,acc=0,last=0;
const bodies=new Map(),all=[...sc.querySelectorAll(':scope>.k,:scope>.sky,:scope>svg')],solid=new Set(sc.querySelectorAll(':scope>.k,:scope>svg.fl'));
const ground=()=>innerHeight*.84+4,STEP=1000/60,orig=new Map();
const FLY="assets/img/caine-vuela.webp",HOME=H.src;
const CQ=["¿Sabes? nunca había visto a alguien amar tanto.","Estoy muy feliz por ustedes dos.","A veces las personas nos equivocamos, eso lo entiendo de los humanos.","A veces me gustaría conocer ese sentimiento humano llamado amor...","¡Feliz 22!","¡Bienvenida a esta aventura!","Llevo mucho tiempo en este circo y nunca vi una fecha tan bonita.","Las risas de verdad no se programan. Se sienten.","Hoy no se pierde nadie, solo se recuerda.","Cuida bien este día, ¿sí? Es de los que valen la pena."];
const CG=["¡Oye! ¡Cuidado con el sombrero!","¡Wooa! ¿A dónde me llevas?","¡Suéltame, que me despeino!","¡Esto no estaba en el guion!"];
const CB=["Qué loco estuvo eso.","No había necesidad de moverme.","Responde las preguntas, no pierdas el tiempo conmigo.","Casi se me cae el sombrero.","Prometo no hacer más drama. Por hoy.","Sigamos, que la aventura no se juega sola.","Eso fue más divertido de lo que pensé."];
let cdeck=[];const cq=()=>{if(!cdeck.length)cdeck=CQ.map((_,k)=>k).sort(()=>Math.random()-.5);return CQ[cdeck.pop()]};
let cb=null,cc=null,cheld=false,rest=0,away=0,homeC=null,bt=0,fb=null,bx=0,by=0;
const mo=new MutationObserver(()=>{if(fb)fb.textContent=B.textContent});mo.observe(B,{childList:true,characterData:true,subtree:true});
function mkFb(){
if(fb)return;
const r=B.getBoundingClientRect();bx=r.left+r.width/2;by=r.top;
fb=document.createElement('div');fb.className='fbub';fb.setAttribute('aria-hidden','true');fb.textContent=B.textContent;document.body.appendChild(fb);B.style.visibility='hidden'
}
function rmFb(){if(fb){fb.remove();fb=null}B.style.visibility=''}
function follow(){
const r=H.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,bw=fb.offsetWidth,bh=fb.offsetHeight;
const tx=Math.min(Math.max(cx,bw/2+8),innerWidth-bw/2-8),ty=Math.max(8,Math.min(cy+r.height*.38+16,innerHeight-bh-8));
bx+=(tx-bx)*.2;by+=(ty-by)*.2;
fb.style.left=(bx-bw/2)+'px';fb.style.top=by+'px';
fb.style.setProperty('--ax',Math.min(Math.max(cx-(bx-bw/2),18),bw-18)+'px')
}
function goHome(instant){
if(!cb)return;
clearTimeout(bt);
try{M.Composite.remove(engine.world,cb);if(cc)M.Composite.remove(engine.world,cc)}catch(_){}
cb=null;cc=null;cheld=false;rest=0;away=0;
const fin=()=>{rmFb();H.classList.remove('away','back');H.style.translate='';H.style.rotate='';H.src=HOME;wakeAll()};
if(instant||calm){fin();return}
H.classList.add('back');void H.offsetWidth;H.style.translate='0px 0px';H.style.rotate='0rad';
bt=setTimeout(()=>{fin();say(pick(CB));react('hop')},950)
}
window.__caineHome=goHome;
H.draggable=false;H.addEventListener('dragstart',e=>e.preventDefault());
H.addEventListener('pointerdown',e=>{
if(e.button>0)return;e.preventDefault();
const sx=e.clientX,sy=e.clientY;let started=false;
if(H.setPointerCapture&&e.pointerId!=null)try{H.setPointerCapture(e.pointerId)}catch(_){}
const start=()=>{
started=true;
if(!cb){
clearTimeout(bt);H.classList.remove('back');
const r=H.getBoundingClientRect();homeC={x:r.left+r.width/2,y:r.top+r.height/2};
cb=M.Bodies.rectangle(homeC.x,homeC.y,r.width*.6,r.height*.7,{friction:.5,frictionStatic:.8,frictionAir:.03,restitution:.3,density:.0007,sleepThreshold:60,chamfer:{radius:14}});
orig.set(H,{x:homeC.x,y:homeC.y});M.Composite.add(engine.world,cb);
H.classList.add('away');H.src=FLY;mkFb()
}else{clearTimeout(bt);H.classList.remove('back')}
M.Sleeping.set(cb,false);wakeAll();
cc=M.Constraint.create({pointA:{x:sx,y:sy},bodyB:cb,pointB:{x:sx-cb.position.x,y:sy-cb.position.y},stiffness:.1,damping:.15,length:0});
M.Composite.add(engine.world,cc);cheld=true;say(pick(CG))
};
const mv=ev=>{
if(!started){if(!engine||Math.hypot(ev.clientX-sx,ev.clientY-sy)<6)return;start()}
if(cc){cc.pointA.x=ev.clientX;cc.pointA.y=ev.clientY;if(cb.isSleeping)M.Sleeping.set(cb,false)}
};
const up=()=>{
H.removeEventListener('pointermove',mv);H.removeEventListener('pointerup',up);H.removeEventListener('pointercancel',up);
if(!started){say(cq());react('hop');return}
if(cc){M.Composite.remove(engine.world,cc);cc=null}
cheld=false;rest=0;away=0;wakeAll()
};
H.addEventListener('pointermove',mv);H.addEventListener('pointerup',up);H.addEventListener('pointercancel',up)
});

function setup(){
if(!M)return;
goHome(true);
bodies.forEach((b,o)=>{o.style.translate='';o.style.rotate=''});bodies.clear();
engine=M.Engine.create({enableSleeping:true});engine.gravity.y=.8;engine.positionIterations=8;engine.velocityIterations=6;
const W=innerWidth,H=innerHeight,t=400;
M.Composite.add(engine.world,[
M.Bodies.rectangle(W/2,ground()+t/2,W+600,t,{isStatic:true,friction:.8}),
M.Bodies.rectangle(-t/2-150,H/2,t,H*4,{isStatic:true}),
M.Bodies.rectangle(W+t/2+150,H/2,t,H*4,{isStatic:true}),
M.Bodies.rectangle(W/2,-t/2-900,W+600,t,{isStatic:true})]);
solid.forEach(o=>{
const r=o.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,k=3;
const op={friction:.7,frictionStatic:1,frictionAir:.02,restitution:.12,sleepThreshold:50};
const w=Math.max(8,r.width-k*2),h=Math.max(8,r.height-k*2);
let b;
if(o.tagName==='svg'&&o.style.width==='92px')b=M.Bodies.circle(cx,cy,Math.min(w,h)*.42,op);
else{const rad=Math.min(parseFloat(getComputedStyle(o).borderTopLeftRadius)||0,12);b=M.Bodies.rectangle(cx,cy,w,h,rad>1?Object.assign({chamfer:{radius:rad}},op):op)}
orig.set(o,{x:b.position.x,y:b.position.y});bodies.set(o,b);M.Composite.add(engine.world,b)
});
for(let i=0;i<240;i++)M.Engine.update(engine,STEP);
bodies.forEach((b,o)=>{M.Body.setAngle(b,0);M.Body.setAngularVelocity(b,0);paint(o,b)})
}
function paint(o,b){const g=orig.get(o);o.style.translate=(b.position.x-g.x)+'px '+(b.position.y-g.y)+'px';o.style.rotate=b.angle+'rad'}
function wakeAll(){bodies.forEach(b=>M.Sleeping.set(b,false))}
function frame(t){
requestAnimationFrame(frame);
if(!engine)return;
const fd=Math.min(50,t-(last||t));acc+=fd;last=t;let n=0;
while(acc>=STEP&&n<3){
M.Engine.update(engine,STEP);acc-=STEP;n++;
bodies.forEach(b=>{const v=b.velocity,sp=Math.hypot(v.x,v.y);if(sp>24)M.Body.setVelocity(b,{x:v.x*24/sp,y:v.y*24/sp});if(Math.abs(b.angularVelocity)>.25)M.Body.setAngularVelocity(b,Math.sign(b.angularVelocity)*.25)})
}
if(n)bodies.forEach((b,o)=>{if(!b.isSleeping)paint(o,b)});
if(fb)follow();
if(cb){
const v=cb.velocity,sp=Math.hypot(v.x,v.y);
if(sp>24)M.Body.setVelocity(cb,{x:v.x*24/sp,y:v.y*24/sp});
paint(H,cb);
if(cheld){rest=0;away=0}
else{away+=fd;if(sp+Math.abs(cb.angularVelocity)*20<.5||cb.isSleeping)rest+=fd;else rest=0;if(rest>2500||away>10000)goHome()}
}
if(n===3)acc=0
}
setup();requestAnimationFrame(frame);
let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(setup,250)});
all.forEach(o=>{
o.addEventListener('pointerdown',e=>{
if(e.button>0)return;e.preventDefault();
o.style.zIndex=++z;o.classList.add('held');
if(o.setPointerCapture&&e.pointerId!=null)try{o.setPointerCapture(e.pointerId)}catch(_){}
const b=bodies.get(o);
if(b){
wakeAll();
const c=M.Constraint.create({pointA:{x:e.clientX,y:e.clientY},bodyB:b,pointB:{x:e.clientX-b.position.x,y:e.clientY-b.position.y},stiffness:.1,damping:.15,length:0});
M.Composite.add(engine.world,c);
const mv=ev=>{c.pointA.x=ev.clientX;c.pointA.y=ev.clientY;if(b.isSleeping)wakeAll()};
const up=()=>{M.Composite.remove(engine.world,c);o.classList.remove('held');o.removeEventListener('pointermove',mv);o.removeEventListener('pointerup',up);o.removeEventListener('pointercancel',up);wakeAll()};
o.addEventListener('pointermove',mv);o.addEventListener('pointerup',up);o.addEventListener('pointercancel',up);
return
}
const r=o.getBoundingClientRect(),cs=getComputedStyle(o);
const w=o.offsetWidth||o.clientWidth||parseFloat(cs.width),h=o.offsetHeight||o.clientHeight||parseFloat(cs.height);
const cx=r.left+r.width/2,cy=r.top+r.height/2,ox=e.clientX-cx,oy=e.clientY-cy;
o.style.right='auto';o.style.bottom='auto';o.style.left=(cx-w/2)+'px';o.style.top=(cy-h/2)+'px';
const mv=ev=>{o.style.left=(Math.min(innerWidth,Math.max(0,ev.clientX-ox))-w/2)+'px';o.style.top=(Math.min(innerHeight,Math.max(h/3,ev.clientY-oy))-h/2)+'px'};
const up=()=>{o.classList.remove('held');o.removeEventListener('pointermove',mv);o.removeEventListener('pointerup',up);o.removeEventListener('pointercancel',up)};
o.addEventListener('pointermove',mv);o.addEventListener('pointerup',up);o.addEventListener('pointercancel',up)
})});
function wire(b){const p=()=>pop(b);b.addEventListener('pointerenter',p);b.addEventListener('pointerdown',p)}
function mk(born){const b=document.createElement('div'),d=34+Math.random()*52;b.className='bub'+(born?' born':'');
b.style.cssText='width:'+d+'px;height:'+d+'px;left:'+(4+Math.random()*88)+'%;top:'+(6+Math.random()*68)+'%;animation-delay:'+(-Math.random()*8)+(born?'s,0s':'s');
wire(b);document.body.appendChild(b)}
function pop(b){
if(b.dataset.p)return;b.dataset.p=1;
const r=b.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
if(!calm&&b.animate)for(let k=0;k<9;k++){const d=document.createElement('i'),a=k/9*6.283,l=r.width*.9;d.className='drop';d.style.left=cx+'px';d.style.top=cy+'px';document.body.appendChild(d);
const an=d.animate([{transform:'translate(-50%,-50%)',opacity:1},{transform:'translate(calc(-50% + '+Math.cos(a)*l+'px),calc(-50% + '+Math.sin(a)*l+'px)) scale(.3)',opacity:0}],{duration:450,easing:'ease-out'});an.onfinish=()=>d.remove()}
b.remove();
setTimeout(()=>{mk(true);if(document.querySelectorAll('.bub').length<12)setTimeout(()=>mk(true),1500)},2500+Math.random()*2000)
}
document.querySelectorAll('.bub').forEach(wire);
for(let k=0;k<11;k++)mk(false);
})();

const SND={mc:null,rb:null,alice:null,nina:null,mario:null};
document.querySelectorAll('.sec').forEach(e=>{
e.addEventListener('click',()=>{
const u=SND[e.dataset.k];if(u){try{const a=new Audio(u);a.play().catch(()=>{})}catch(_){}}
const n=document.querySelectorAll('.sec').length,fresh=!found.has(e.dataset.k);
if(fresh){found.add(e.dataset.k);tok++;extra++;const t=document.querySelector('.tok');if(t){t.textContent=tok+' fichas';t.classList.remove('pulse');void t.offsetWidth;t.classList.add('pulse')}}
const o=el('div','lb sx');o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label','Foto secreta');
const m=el('img');m.src=e.querySelector('img').src;m.alt=e.querySelector('img').alt;
const msg=el('p','lbn',fresh?'¡Secreto encontrado! +1 ficha extra ('+found.size+' de '+n+')':'Ya reclamaste la ficha de este secreto');
const x=el('button','lbx','Cerrar');
const esc=ev=>{if(ev.key==='Escape')close()};
const close=()=>{o.remove();document.removeEventListener('keydown',esc)};
x.onclick=close;o.onclick=ev=>{if(ev.target===o)close()};
document.addEventListener('keydown',esc);o.append(m,msg,x);document.body.append(o);x.focus()
});
e.addEventListener('animationend',ev=>{if(ev.animationName==='boing')e.classList.remove('hit')})
});

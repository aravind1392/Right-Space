/* Right Space — interactions */
document.addEventListener('DOMContentLoaded', function(){
  // sticky header
  const header = document.querySelector('.header');
  const onScroll = () => {
    if(!header) return;
    if(window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll); onScroll();

  // mobile nav
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  if(burger) burger.addEventListener('click', ()=> nav.classList.toggle('open'));
  if(nav) nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

  // scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // count-up stats
  const stats = document.querySelectorAll('.num[data-count]');
  const sio = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target; const target = +el.dataset.count; const suffix = el.dataset.suffix||'';
      let cur=0; const step = Math.max(1, Math.floor(target/60));
      const t = setInterval(()=>{ cur+=step; if(cur>=target){cur=target;clearInterval(t);} el.textContent=cur+suffix; },22);
      sio.unobserve(el);
    });
  },{threshold:.5});
  stats.forEach(s=>sio.observe(s));

  // testimonial carousel
  const track = document.querySelector('.testi-track');
  if(track){
    const cards = track.children.length;
    const dotsWrap = document.querySelector('.testi-dots');
    let idx=0;
    for(let i=0;i<cards;i++){ const b=document.createElement('button'); if(i===0)b.classList.add('on'); b.addEventListener('click',()=>go(i)); dotsWrap.appendChild(b);}
    const dots = dotsWrap.children;
    function go(i){ idx=i; track.style.transform=`translateX(-${i*100}%)`; [...dots].forEach((d,j)=>d.classList.toggle('on',j===i)); }
    setInterval(()=>go((idx+1)%cards), 5500);
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click',()=>{
      const item=q.parentElement; const a=item.querySelector('.faq-a');
      const open=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(it=>{it.classList.remove('open');it.querySelector('.faq-a').style.maxHeight=null;});
      if(!open){ item.classList.add('open'); a.style.maxHeight=a.scrollHeight+'px'; }
    });
  });

  // before/after slider
  document.querySelectorAll('.ba').forEach(ba=>{
    const after=ba.querySelector('.after'); const handle=ba.querySelector('.handle');
    let drag=false;
    const move=(x)=>{ const r=ba.getBoundingClientRect(); let p=((x-r.left)/r.width)*100; p=Math.max(2,Math.min(98,p)); after.style.clipPath=`inset(0 0 0 ${p}%)`; handle.style.left=p+'%'; };
    handle.addEventListener('mousedown',()=>drag=true);
    window.addEventListener('mouseup',()=>drag=false);
    window.addEventListener('mousemove',e=>{if(drag)move(e.clientX);});
    ba.addEventListener('touchmove',e=>move(e.touches[0].clientX),{passive:true});
  });

  // project + blog category filter
  const chips=document.querySelectorAll('.chip');
  const noposts=document.getElementById('noposts');
  chips.forEach(c=>c.addEventListener('click',()=>{
    chips.forEach(x=>x.classList.remove('on')); c.classList.add('on');
    const f=c.dataset.filter||'all';
    const items=document.querySelectorAll('.m-item,.post');
    let shown=0;
    items.forEach(it=>{
      const match=(f==='all'||it.dataset.cat===f);
      it.style.display=match?'':'none';
      if(match) shown++;
    });
    if(noposts) noposts.style.display=shown?'none':'block';
  }));
});

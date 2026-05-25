
  // Cursor
  const cur = document.getElementById('cur');
  const ring = document.getElementById('curRing');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cur.style.left=mx+'px'; cur.style.top=my+'px';
  });
  (function animRing(){
    rx+=(mx-rx)*.1; ry+=(my-ry)*.1;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animRing);
  })();

  // Progress bar
  const bar = document.getElementById('progress');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  });

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e,i) => {
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('in'), i*100);
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

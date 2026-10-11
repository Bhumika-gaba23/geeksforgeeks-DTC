// Shared mobile navigation, outside-click handling, logo replacement, reveal motion, and event filters.
const menu=document.querySelector('.menu');
const navLinks=document.querySelector('.nav-links');
const closeMenu=()=>navLinks?.classList.remove('open');
document.querySelectorAll('a[href="#events"],a[href="index.html#events"]').forEach(link=>link.setAttribute('href','events.html'));
document.querySelectorAll('a[href="#join"]').forEach(link=>link.setAttribute('href','login.html'));
document.querySelector('#events')?.remove();
document.querySelector('.achievement-grid')?.closest('section')?.remove();
if(navLinks&&!navLinks.querySelector('.header-login'))navLinks.insertAdjacentHTML('beforeend','<a class="header-login" href="login.html">Sign In ↗</a>');
menu?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('click',event=>{if(navLinks?.classList.contains('open')&&!navLinks.contains(event.target)&&!menu?.contains(event.target))closeMenu()});
document.querySelectorAll('.brand small').forEach(el=>el.remove());
document.querySelectorAll('.brand').forEach(brand=>{brand.innerHTML='<img src="dtc-campus-body-logo.png" alt="DTC Campus Body" class="site-logo">'});
document.querySelectorAll('.resource-link').forEach(link=>{
  link.style.setProperty('background','var(--white)','important');
  link.style.setProperty('color','var(--ink)','important');
});
document.querySelectorAll('footer span').forEach(item=>{
  item.textContent=item.textContent.replace('Delhi Technological Campus','Delhi Technical Campus');
});
// Persistent light / dark theme control for every page.
const themeStyle=document.createElement('style');
themeStyle.textContent=`
  .theme-toggle{width:38px;height:38px;border:1px solid var(--line);border-radius:50%;background:var(--white);color:var(--gfg);display:grid;place-items:center;font-size:1rem;cursor:pointer;transition:transform .25s ease,background .25s ease;flex:0 0 auto}.theme-toggle:hover{transform:rotate(16deg) scale(1.05);background:var(--soft)}
  body.dark-theme{--bg:#101914;--white:#17221b;--ink:#edf7ee;--muted:#b3c2b5;--line:#2d4134;--soft:#1c3324;--dark:#09110d;background:var(--bg)}
  body.dark-theme .nav{background:#142019ed}body.dark-theme .hero,body.dark-theme .page-hero{background:#142019}body.dark-theme .hero:before{background-image:linear-gradient(#36503b 1px,transparent 1px),linear-gradient(90deg,#36503b 1px,transparent 1px)}body.dark-theme .nav-links{color:#c7d5c9}body.dark-theme .terminal{box-shadow:14px 16px 0 #244a2d}body.dark-theme .practice,body.dark-theme .history{background:#1a3021}body.dark-theme .quick{background:#09110d}body.dark-theme .quick a{background:#09110d}body.dark-theme .resource-link{border-color:#315c3a}body.dark-theme .filter-tab{background:var(--white)}
  @media(max-width:800px){.brand{order:1}.theme-toggle{order:2;margin-left:auto;margin-right:12px}.menu{order:3}body.dark-theme .nav-links{background:#142019}}
`;
document.head.appendChild(themeStyle);
const savedTheme=localStorage.getItem('dtc-theme');
if(savedTheme==='dark'){document.body.classList.add('dark-theme');document.documentElement.classList.add('dark')}
const navInner=document.querySelector('.nav-inner');
if(navInner&&!document.querySelector('.theme-toggle')){
  navInner.insertAdjacentHTML('beforeend','<button class="theme-toggle" type="button" aria-label="Switch to dark theme" title="Toggle color theme">☾</button>');
  const themeToggle=document.querySelector('.theme-toggle');
  const updateThemeButton=()=>{const dark=document.body.classList.contains('dark-theme');themeToggle.textContent=dark?'☀':'☾';themeToggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme')};
  updateThemeButton();
  themeToggle.addEventListener('click',()=>{document.body.classList.toggle('dark-theme');document.documentElement.classList.toggle('dark',document.body.classList.contains('dark-theme'));localStorage.setItem('dtc-theme',document.body.classList.contains('dark-theme')?'dark':'light');updateThemeButton()});
}
// Homepage hero polish: clearer hierarchy and a compact proof strip.
const hero=document.querySelector('.hero');
if(hero&&!document.querySelector('.hero-stats')){
  hero.querySelector('.hero-actions')?.insertAdjacentHTML('afterend','<div class="hero-stats"><div><strong>250+</strong><span>active builders</span></div><div><strong>18</strong><span>sessions this year</span></div><div><strong>04</strong><span>learning tracks</span></div></div>');
  const heroStyle=document.createElement('style');
  heroStyle.textContent=`
    .hero{padding:82px 0 76px}.hero h1{font-size:clamp(3.2rem,5vw,5.65rem);max-width:650px;margin-bottom:21px;letter-spacing:-.075em}.hero-copy{font-size:1rem;max-width:500px}.hero-inner{gap:78px}.terminal{transform:rotate(1.25deg);box-shadow:14px 16px 0 #dcecdf;transition:transform .35s ease,box-shadow .35s ease}.terminal:hover{transform:rotate(0) translateY(-5px);box-shadow:18px 22px 0 #c9e5cf}.hero-stats{display:flex;gap:0;margin-top:33px;max-width:485px;border-top:1px solid var(--line);padding-top:17px}.hero-stats div{padding:0 20px;border-right:1px solid var(--line);display:grid;gap:3px}.hero-stats div:first-child{padding-left:0}.hero-stats div:last-child{border:0}.hero-stats strong{font:700 1.3rem 'Space Grotesk',sans-serif;color:var(--gfg)}.hero-stats span{font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.04em}@media(max-width:800px){.hero{padding:62px 0}.hero h1{font-size:clamp(3rem,13vw,4.5rem)}.hero-stats{margin-top:27px}.hero-stats div{padding:0 12px}.hero-stats strong{font-size:1.1rem}.hero-stats span{font-size:.6rem}.terminal{margin-top:5px}}
  `;
  document.head.appendChild(heroStyle);
}
// About-page story treatment with more measured typography and context.
const aboutHero=document.querySelector('.page-hero');
if(document.title.startsWith('About')&&aboutHero&&!document.querySelector('.about-markers')){
  aboutHero.querySelector('.wrap')?.insertAdjacentHTML('beforeend','<div class="about-markers"><span>Founded 2022</span><i></i><span>Student-led at DTC</span><i></i><span>Learn · Build · Belong</span></div>');
  const aboutStyle=document.createElement('style');
  aboutStyle.textContent=`
    .page-hero{position:relative;overflow:hidden;padding:76px 0 67px}.page-hero:before{content:'';position:absolute;width:420px;height:420px;right:-120px;top:-180px;border-radius:50%;border:1px solid #2f8d4630;box-shadow:0 0 0 42px #2f8d4608,0 0 0 84px #2f8d4605}.page-hero .wrap{position:relative}.page-hero h1{font-size:clamp(3.15rem,4.5vw,5.35rem);max-width:760px;margin:13px 0 20px;letter-spacing:-.075em}.page-hero p{font-size:1rem;max-width:600px;border-left:3px solid var(--gfg);padding-left:17px;margin:0}.manifesto{font-size:clamp(1.7rem,2.4vw,2.7rem);line-height:1.18;letter-spacing:-.045em;max-width:610px}.about-markers{display:flex;align-items:center;gap:12px;margin-top:33px;color:var(--muted);font:500 .68rem 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.06em}.about-markers i{display:block;width:4px;height:4px;border-radius:50%;background:var(--gfg)}body.dark-theme .page-hero:before{border-color:#65bd7d45;box-shadow:0 0 0 42px #65bd7d08,0 0 0 84px #65bd7d05}@media(max-width:800px){.page-hero{padding:58px 0}.page-hero h1{font-size:clamp(3rem,12vw,4.4rem)}.manifesto{font-size:1.75rem;line-height:1.23}.about-markers{flex-wrap:wrap;gap:8px;margin-top:27px}.about-markers i{margin:0 3px}.page-hero:before{width:260px;height:260px;right:-130px;top:-100px}}
  `;
  document.head.appendChild(aboutStyle);
}
// Keep the President card current.
const presidentCard=document.querySelector('.person');
if(presidentCard){
  presidentCard.querySelector('.avatar span').textContent='RS';
  presidentCard.querySelector('h3').textContent='Ronit Sharma';
  presidentCard.querySelectorAll('.socials a').forEach(link=>link.setAttribute('aria-label',link.getAttribute('aria-label')?.replace('Aarav','Ronit')||'Ronit Sharma profile'));
}
const technicalLeadCard=[...document.querySelectorAll('.person')].find(card=>card.querySelector('.role')?.textContent.trim()==='Technical Lead');
if(technicalLeadCard){
  technicalLeadCard.querySelector('.avatar span').textContent='B';
  technicalLeadCard.querySelector('h3').textContent='Bhumika';
  technicalLeadCard.querySelector('.role').textContent='Technical Head';
}
const teamGrid=document.querySelector('.team-grid');
if(teamGrid){
  ['Naina Arora','Ved Prakash','Sara Iqbal','Kabir Mehta'].forEach(name=>{
    [...teamGrid.querySelectorAll('.person')].find(card=>card.querySelector('h3')?.textContent===name)?.remove();
  });
}
if(teamGrid&&!document.querySelector('[data-member="vaibhav-solanki"]')){
  teamGrid.insertAdjacentHTML('beforeend','<article class="person" data-member="vaibhav-solanki"><div class="avatar"><span>VS</span></div><div class="person-info"><h3>Vaibhav Solanki</h3><div class="role">Vice President</div><p>“Helping every member turn a good idea into a real build.”</p><div class="socials"><a href="#" aria-label="Vaibhav on LinkedIn">in LinkedIn</a><a href="#" aria-label="Vaibhav on GitHub">GH GitHub</a><a href="#" aria-label="Vaibhav coding profile">LC Profile</a></div></div></article>');
}
if(teamGrid&&!document.querySelector('[data-member="sarthak-kumar"]')){
  teamGrid.insertAdjacentHTML('beforeend','<article class="person" data-member="sarthak-kumar"><div class="avatar"><span>SK</span></div><div class="person-info"><h3>Sarthak Kumar</h3><div class="role">General Secretary</div><p>“Organising the details so great ideas can take centre stage.”</p><div class="socials"><a href="#" aria-label="Sarthak on LinkedIn">in LinkedIn</a><a href="#" aria-label="Sarthak on GitHub">GH GitHub</a><a href="#" aria-label="Sarthak coding profile">LC Profile</a></div></div></article>');
}
if(teamGrid&&!document.querySelector('[data-member="puja"]')){
  teamGrid.insertAdjacentHTML('beforeend','<article class="person" data-member="puja"><div class="avatar"><span>P</span></div><div class="person-info"><h3>Puja</h3><div class="role">General Secretary</div><p>“Building a community where every new member feels welcome.”</p><div class="socials"><a href="#" aria-label="Puja on LinkedIn">in LinkedIn</a><a href="#" aria-label="Puja on GitHub">GH GitHub</a><a href="#" aria-label="Puja coding profile">LC Profile</a></div></div></article>');
}
const additionalTeamMembers=[
  ['abhishek-tiwari','Abhishek Tiwari','Event Management Head','AT','Creating memorable experiences where the community can learn and connect.'],
  ['prince-dhull','Prince Dhull','Event Management Head','PD','Turning every campus event into an opportunity to build together.'],
  ['aarya-jain','Aarya Jain','Social Media Head','AJ','Sharing the stories, energy, and people behind the community.'],
  ['manvi-singhal','Manvi Singhal','Social Media Head','MS','Making every update feel useful, welcoming, and worth sharing.'],
  ['aditi-raj','Aditi Raj','PR & Outreach Head','AR','Building partnerships that bring more opportunities to our members.'],
  ['aaryan-ojha','Aaryan Ojha','PR & Outreach Head','AO','Connecting our campus builders with the wider tech community.'],
  ['ayush-tiwari','Ayush Tiwari','Graphic Designing Head','AT','Designing visuals that make great ideas impossible to scroll past.'],
  ['isha','Isha','Graphic Designing Head','I','Giving every society story a clean, memorable visual language.'],
  ['bhavya-porwal','Bhavya Porwal','Videography & Editor','BP','Capturing the moments, lessons, and people that move the community forward.']
];
additionalTeamMembers.forEach(([id,name,role,initials,bio])=>{
  if(teamGrid&&!document.querySelector(`[data-member="${id}"]`)){
    teamGrid.insertAdjacentHTML('beforeend',`<article class="person" data-member="${id}"><div class="avatar"><span>${initials}</span></div><div class="person-info"><h3>${name}</h3><div class="role">${role}</div><p>“${bio}”</p><div class="socials"><a href="#" aria-label="${name} on LinkedIn">in LinkedIn</a><a href="#" aria-label="${name} on GitHub">GH GitHub</a><a href="#" aria-label="${name} coding profile">LC Profile</a></div></div></article>`);
  }
});
document.querySelectorAll('.socials a').forEach(link=>{
  if(link.textContent.includes('LC Profile')) link.remove();
});
if(teamGrid){
  const priorityNames=['Ronit Sharma','Vaibhav Solanki','Sarthak Kumar','Puja'];
  const cards=[...teamGrid.querySelectorAll('.person')];
  priorityNames.forEach(name=>{
    const card=cards.find(item=>item.querySelector('h3')?.textContent===name);
    if(card) teamGrid.appendChild(card);
  });
  priorityNames.slice().reverse().forEach(name=>{
    const card=[...teamGrid.querySelectorAll('.person')].find(item=>item.querySelector('h3')?.textContent===name);
    if(card) teamGrid.prepend(card);
  });
}
if(document.title.startsWith('Core Team')&&teamGrid){
  const classifyRole=role=>{
    const value=role.toLowerCase();
    if(value.includes('president')||value.includes('secretary'))return 'leadership';
    if(value.includes('technical'))return 'technical';
    if(value.includes('event'))return 'events';
    if(value.includes('social')||value.includes('graphic')||value.includes('video')||value.includes('editor')||value.includes('design'))return 'creative';
    if(value.includes('outreach')||value.includes('pr'))return 'outreach';
    return 'other';
  };
  const teamCards=[...teamGrid.querySelectorAll('.person')];
  teamCards.forEach((card,index)=>{
    card.style.setProperty('--card-index',index);
    card.dataset.department=classifyRole(card.querySelector('.role')?.textContent||'');
    card.querySelector('.avatar')?.insertAdjacentHTML('afterbegin',`<span class="member-number">${String(index+1).padStart(2,'0')}</span><span class="member-status">CORE / 25</span>`);
  });
  teamGrid.insertAdjacentHTML('beforebegin',`<div class="team-filter" aria-label="Filter team by department"><button class="active" data-team-filter="all">All <span>${teamCards.length}</span></button><button data-team-filter="leadership">Leadership</button><button data-team-filter="technical">Technical</button><button data-team-filter="events">Events</button><button data-team-filter="creative">Creative</button><button data-team-filter="outreach">Outreach</button></div>`);
  document.querySelectorAll('[data-team-filter]').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('[data-team-filter]').forEach(item=>item.classList.remove('active'));
    button.classList.add('active');
    const selected=button.dataset.teamFilter;
    teamCards.forEach(card=>card.classList.toggle('team-hidden',selected!=='all'&&card.dataset.department!==selected));
  }));
  const teamStyle=document.createElement('style');
  teamStyle.textContent=`
    body:has(.team-grid) .page-hero{padding:72px 0 62px;background:linear-gradient(135deg,var(--white) 0%,var(--white) 64%,var(--soft) 64%)}body:has(.team-grid) .page-hero h1{font-size:clamp(3.2rem,5vw,5.8rem);max-width:720px;margin:13px 0 18px}body:has(.team-grid) .page-hero p{font-size:1rem;max-width:560px}.team-filter{display:flex;gap:8px;flex-wrap:wrap;margin:-3px 0 28px}.team-filter button{border:1px solid var(--line);background:var(--white);color:var(--muted);padding:10px 14px;border-radius:999px;font:700 .75rem Inter,sans-serif;cursor:pointer;transition:.25s}.team-filter button span{display:inline-grid;place-items:center;margin-left:4px;min-width:20px;height:20px;padding:0 5px;border-radius:99px;background:var(--soft);color:var(--gfg);font-size:.64rem}.team-filter button:hover,.team-filter button.active{background:var(--gfg);border-color:var(--gfg);color:#fff;transform:translateY(-2px)}.team-filter button.active span{background:#fff;color:var(--gfg)}.team-grid{gap:25px;perspective:1400px}.person{position:relative;border:0;border-radius:18px;background:var(--white);box-shadow:0 16px 45px #193d2410;overflow:visible;transform-style:preserve-3d;transition:transform .45s cubic-bezier(.2,.75,.2,1),box-shadow .45s}.person:after{content:"";position:absolute;inset:12px -8px -9px 12px;border-radius:18px;background:var(--gfg);opacity:.13;z-index:-1;transition:.4s}.person:hover{transform:translateY(-10px) rotateX(2deg) rotateY(-2deg);box-shadow:0 25px 55px #193d2424}.person:hover:after{transform:translate(4px,4px);opacity:.23}.avatar{height:230px;border-radius:18px 18px 0 0;background:linear-gradient(145deg,#dff1e3,#f2faf4);overflow:hidden}.avatar:before{width:148px;height:148px;border:1px solid #2f8d4642;box-shadow:0 0 0 24px #2f8d4609,0 0 0 48px #2f8d4605}.avatar>span:not(.member-number):not(.member-status){width:88px;height:88px;background:linear-gradient(145deg,#3aa356,#23783a);box-shadow:0 17px 28px #155a2a38;z-index:2}.member-number,.member-status{position:absolute!important;width:auto!important;height:auto!important;border-radius:0!important;background:none!important;color:var(--gfg-dark)!important;box-shadow:none!important;font:500 .64rem 'DM Mono',monospace!important;letter-spacing:.08em;z-index:3}.member-number{left:19px;top:17px;font-size:.72rem!important}.member-status{right:18px;top:17px}.person-info{padding:25px 26px 23px}.person-info h3{font:600 1.35rem 'Space Grotesk',sans-serif;letter-spacing:-.035em;margin-bottom:7px}.role{display:inline-flex;padding:5px 8px;border-radius:4px;background:var(--soft);font-size:.63rem;letter-spacing:.07em}.person-info p{font-size:.84rem;min-height:49px;margin:15px 0 18px}.socials{gap:8px;padding-top:15px}.socials a{font-size:0;width:36px;height:34px;display:grid;place-items:center;padding:0;border-radius:50%}.socials a:first-child:after{content:"in";font-size:.73rem}.socials a:nth-child(2):after{content:"GH";font-size:.67rem}.team-hidden{display:none!important}body.dark-theme:has(.team-grid) .page-hero{background:linear-gradient(135deg,#142019 0%,#142019 64%,#1a3021 64%)}body.dark-theme .avatar{background:linear-gradient(145deg,#1e3927,#172c1e)}body.dark-theme .member-number,body.dark-theme .member-status{color:#78cf8c!important}@media(max-width:800px){body:has(.team-grid) .page-hero{padding:56px 0}body:has(.team-grid) .page-hero h1{font-size:clamp(3rem,12vw,4.5rem)}.team-filter{gap:6px;overflow-x:auto;flex-wrap:nowrap;padding-bottom:7px}.team-filter button{white-space:nowrap}.team-grid{gap:22px}.avatar{height:215px}}@media(min-width:801px) and (max-width:1080px){.team-grid{grid-template-columns:repeat(2,1fr)}}
  `;
  document.head.appendChild(teamStyle);
}
const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');reveal.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.card,.event,.person,.achievement,.copy,.number-list,.resource-link').forEach(el=>{el.classList.add('reveal');reveal.observe(el)});
const tabs=document.querySelectorAll('.filter-tab');
const events=document.querySelectorAll('.event[data-status]');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(item=>item.classList.remove('active'));tab.classList.add('active');const filter=tab.dataset.filter;events.forEach(event=>event.classList.toggle('hidden',filter!=='all'&&event.dataset.status!==filter))}));

const cleanupStyle=document.createElement('style');
cleanupStyle.textContent=`
  :root{--gfg:#2f8d46!important;--gfg-dark:#2f8d46!important;--green:#2f8d46!important;--green-dark:#2f8d46!important}
  .page-hero p{border-left:0!important;padding-left:0!important}
  .nav{height:78px!important;position:sticky!important;top:0!important;background:rgba(255,255,255,.9)!important;border-bottom:1px solid rgba(15,35,24,.08)!important;backdrop-filter:blur(16px)!important}
  .nav-inner{width:100%!important;max-width:1180px!important;margin:auto!important;padding:0 20px!important;justify-content:flex-start!important}
  .brand{width:auto!important;min-width:0!important;flex:0 0 auto!important}
  .site-logo{width:320px!important;height:60px!important;max-height:none!important;object-fit:cover!important;object-position:center!important}
  .site-logo{filter:brightness(0) saturate(100%) invert(45%) sepia(22%) saturate(1575%) hue-rotate(83deg) brightness(91%) contrast(91%)}
  .nav-links{margin-left:auto!important;gap:28px!important;font-size:14px!important;font-weight:600!important}
  .nav-cta{display:none!important}
  .header-login{padding:10px 15px!important;border-radius:6px!important;background:var(--gfg)!important;color:#fff!important;font-weight:800!important;box-shadow:0 3px 0 var(--gfg-dark)!important}
  .header-login:hover{background:var(--gfg-dark)!important;transform:translateY(-1px)!important}
  .theme-toggle{margin-left:24px!important;width:40px!important;height:40px!important}
  .resource-link:hover{background:var(--white)!important;color:var(--ink)!important;border-color:var(--gfg)!important;box-shadow:0 12px 25px rgba(47,141,70,.14)!important}
  .resource-link:hover span{color:var(--gfg)!important}
  body.dark-theme .nav{background:rgba(17,28,22,.92)!important;border-bottom-color:rgba(255,255,255,.1)!important}
  body.dark-theme{--bg:#000!important;--white:#0b0b0b!important;--ink:#f5f5f5!important;--muted:#b6b6b6!important;--line:#292929!important;--soft:#151515!important;--dark:#000!important;background:#000!important}
  body.dark-theme .nav,body.dark-theme .hero,body.dark-theme .page-hero,body.dark-theme .quick{background:#000!important}
  body.dark-theme .terminal{background:#0b0b0b!important;box-shadow:14px 16px 0 #202020!important}
  body.dark-theme .practice,body.dark-theme .history{background:#111!important}
  @media(max-width:800px){.nav-inner{width:100%!important;max-width:1180px!important;padding:0 20px!important}.brand{order:1!important}.site-logo{width:245px!important;height:52px!important}.theme-toggle{order:2!important;margin-left:auto!important;margin-right:10px!important}.menu{order:3!important}.nav-links{top:78px!important;margin-left:0!important;gap:5px!important}.nav-links a{padding:11px 4px!important}}
`;
document.head.appendChild(cleanupStyle);

const filterButtons=[...document.querySelectorAll('[data-filter]')];
const eventCards=[...document.querySelectorAll('[data-status]')];
document.querySelectorAll('header nav').forEach(nav=>{
  if(nav.querySelector('[href="login.html"]'))return;
  const mobile=nav.id==='mobile-nav';
  nav.insertAdjacentHTML('beforeend',mobile?'<a class="mt-2 block rounded-md bg-gfg px-4 py-3 text-center font-extrabold text-white" href="login.html">Sign In ↗</a>':'<a class="rounded-md bg-gfg px-4 py-2.5 font-extrabold text-white shadow-[0_3px_0_#1c5f31] transition hover:-translate-y-0.5 hover:bg-gfgDark" href="login.html">Sign In ↗</a>');
});
eventCards.forEach(card=>card.querySelectorAll('a').forEach(link=>{
  if(/register|join/i.test(link.textContent))link.href='login.html';
}));

filterButtons.forEach(button=>button.addEventListener('click',()=>{
  filterButtons.forEach(item=>{item.classList.remove('active');item.setAttribute('aria-selected','false')});
  button.classList.add('active');button.setAttribute('aria-selected','true');
  const filter=button.dataset.filter;
  eventCards.forEach(card=>{
    const visible=filter==='all'||card.dataset.status===filter;
    card.classList.toggle('event-hidden',!visible);
    if(visible){card.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:350,easing:'ease-out'})}
  });
}));

const menu=document.querySelector('#menu-button');
const nav=document.querySelector('#mobile-nav');
menu.addEventListener('click',()=>nav.classList.toggle('hidden'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.add('hidden')));

const themeButton=document.querySelector('#theme-button');
if(localStorage.getItem('dtc-theme')==='dark')document.documentElement.classList.add('dark');
const syncTheme=()=>{themeButton.textContent=document.documentElement.classList.contains('dark')?'☀':'☾'};
syncTheme();
themeButton.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');localStorage.setItem('dtc-theme',document.documentElement.classList.contains('dark')?'dark':'light');syncTheme()});

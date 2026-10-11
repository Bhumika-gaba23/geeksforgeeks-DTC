(function(){
  const key='dtc-theme';
  const apply=theme=>{
    const dark=theme==='dark';
    document.documentElement.classList.toggle('dark',dark);
    if(document.body)document.body.classList.toggle('dark-theme',dark);
  };
  apply(localStorage.getItem(key)==='dark'?'dark':'light');
  document.addEventListener('DOMContentLoaded',()=>apply(localStorage.getItem(key)==='dark'?'dark':'light'));
  window.addEventListener('storage',event=>{if(event.key===key)apply(event.newValue==='dark'?'dark':'light')});
})();

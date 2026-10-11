const memberProfiles = {
  'ronit-sharma': {name:'Ronit Sharma',role:'President',initials:'RS',image:'ronit-sharma.png',bio:'Building a community where ambitious ideas feel achievable.',quote:'Lead with curiosity. Ship with courage.',portfolio:'https://sharmaronit.vercel.app',linkedin:'https://www.linkedin.com/in/sharmaronit/',github:'https://github.com/sharmaronit'},
  'vaibhav-solanki': {name:'Vaibhav Solanki',role:'Vice President',initials:'VS',image:'vaibhav-solanki.png',bio:'Helping every member turn a good idea into a real build.',quote:'Small iterations create big outcomes.',portfolio:'https://vaibhav-solanki.vercel.app/',linkedin:'https://www.linkedin.com/in/vaibhav-solanki-b5790b253?utm_source=share_via&utm_content=profile&utm_medium=member_android',github:'https://github.com/Vaibhavsolanki1',instagram:'https://instagram.com/milkywaygalaxy0909?dlrf=djByOXVmOWY2cGNx'},
  'sarthak-kumar': {name:'Sarthak Kumar',role:'General Secretary',initials:'SK',image:'sarthak-kumar.png',bio:'Organising the details so great ideas can take centre stage.',quote:'Clear systems make space for creativity.',linkedin:'https://www.linkedin.com/in/sarthak-kumar-310075367',github:'https://github.com/sarthakkr17',instagram:'https://www.instagram.com/sa_._._._._.sk'},
  'puja-rajput': {name:'Puja Rajput',role:'General Secretary',initials:'PR',image:'puja-rajput.png',bio:'Creating a community where every new member feels welcome.',quote:'The best learning happens together.',linkedin:'https://www.linkedin.com/in/puja-rajput-50b462389/',instagram:'https://instagram.com/pujaa.mov'},
  'bhumika': {name:'Bhumika',role:'Technical Lead',initials:'B',image:'bhumika.png',bio:'Designing reliable systems and mentoring students through real projects.',quote:'Make it work. Then make it elegant.',linkedin:'https://www.linkedin.com/in/bhumika-gaba-05182037a/',github:'https://github.com/Bhumika-gaba23',instagram:'https://instagram.com/bhumikagaba_23'},
  'abhishek-tiwari': {name:'Abhishek Tiwari',role:'Event Management Head',initials:'AT',image:'abhishek-tiwari.png',bio:'Creating memorable experiences where the community learns and connects.',quote:'Every event should spark one new idea.',linkedin:'https://www.linkedin.com/in/abhishek-tiwari-900093381',github:'https://github.com/DarkShadow-codex',instagram:'https://instagram.com/abhishektiwari.08'},
  'prince-dhull': {name:'Prince Dhull',role:'Event Management Head',initials:'PD',bio:'Turning campus events into opportunities to collaborate and build.',quote:'Energy is contagious—design for it.'},
  'aarya': {name:'Aarya',role:'Social Media Head',initials:'A',bio:'Sharing the stories, energy and people behind the community.',quote:'Good stories turn audiences into communities.'},
  'manvi-singhal': {name:'Manvi Singhal',role:'Social Media Head',initials:'MS',image:'manvi-singhal.png',bio:'Making every update useful, welcoming and worth sharing.',quote:'Clarity is the heart of communication.',portfolio:'https://jubilant-champagne-502445.framer.app/',linkedin:'https://www.linkedin.com/in/manvi-singhal-6768ab377/',github:'https://github.com/Manvi977',instagram:'https://instagram.com/_manviieeee'},
  'aditi-raj': {name:'Aditi Raj',role:'PR & Outreach Head',initials:'AR',image:'aditi-raj.png',bio:'Building partnerships that bring more opportunities to members.',quote:'Connections become opportunities.',linkedin:'https://www.linkedin.com/in/aditi-raj-104409399',github:'https://github.com/aditiraj1823-del',instagram:'https://instagram.com/aditii_rr'},
  'aaryan-ojha': {name:'Aaryan Ojha',role:'PR & Outreach Head',initials:'AO',bio:'Connecting campus builders with the wider technology community.',quote:'Start the conversation. Build the bridge.'},
  'ayush-tiwari': {name:'Ayush Tiwari',role:'Graphic Designing Head',initials:'AT',image:'ayush-tiwari.png',bio:'Designing visuals that make strong ideas impossible to overlook.',quote:'Design is how an idea introduces itself.',portfolio:'https://ayush-tiwari-work.netlify.app',linkedin:'https://www.linkedin.com/in/ayush-tiwari-career/',github:'https://github.com/ayush-tiwari-001',instagram:'https://www.instagram.com/ayush_tiwari.43/'},
  'isha': {name:'Isha',role:'Graphic Designing Head',initials:'I',bio:'Giving every society story a clean and memorable visual language.',quote:'Details turn visuals into experiences.'},
  'abhinav-beniwal': {name:'Abhinav Beniwal',role:'Community Manager',initials:'AB',image:'abhinav-beniwal.png',bio:'Keeping members connected, supported and involved across every community initiative.',quote:'Strong communities grow through consistent connection.',portfolio:'https://abhinavs-code.lovable.app',linkedin:'https://www.linkedin.com/in/abhinav-beniwal',github:'https://github.com/beniwalabhinav2007-star',instagram:'https://www.instagram.com/itz_beni_abhi'},
  'bhavya-porwal': {name:'Bhavya Porwal',role:'Videography & Editor',initials:'BP',image:'bhavya-porwal.png',bio:'Capturing the moments, lessons and people moving the community forward.',quote:'Every frame should say something.'},
  'atharva-mendhe': {name:'ATHARVA MENDHE',role:'Photography Head',initials:'AM',image:'atharva-mendhe.png',bio:'Capturing the people, energy and stories that define our community.',quote:'Every moment deserves to be remembered.',github:'https://github.com/Atharvamendhe',linkedin:'https://www.linkedin.com/in/atharva-mendhe',instagram:'https://www.instagram.com/il_atharva',portfolio:'https://portfolio-black-three-46.vercel.app/'}
};

const params=new URLSearchParams(window.location.search);
const member=memberProfiles[params.get('member')];
const root=document.querySelector('#profile-root');
const themeButton=document.querySelector('#theme-button');
const syncThemeButton=()=>{
  const dark=document.documentElement.classList.contains('dark');
  themeButton.textContent=dark?'☀':'☾';
  themeButton.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
};
syncThemeButton();
themeButton.addEventListener('click',()=>{
  const dark=document.documentElement.classList.toggle('dark');
  document.body.classList.toggle('dark-theme',dark);
  localStorage.setItem('dtc-theme',dark?'dark':'light');
  syncThemeButton();
});
const action=(label,url)=>url
  ? `<a class="action available" href="${url}" target="_blank" rel="noopener noreferrer"><span>${label}</span><span aria-hidden="true">↗</span></a>`
  : `<span class="action unavailable" title="Link coming soon"><span>${label}</span><span>Soon</span></span>`;

if(!member){
  document.title='Member not found — GeeksforGeeks DTC';
  root.innerHTML='<section class="not-found"><p class="eyebrow">404 / profile</p><h1 class="name">Member not found.</h1><p><a href="team.html">Return to the core team →</a></p></section>';
}else{
  document.title=`${member.name} — GeeksforGeeks DTC`;
  root.innerHTML=`<article class="profile">
    <div class="portrait">${member.image?`<img src="${member.image}" alt="${member.name}, ${member.role}">`:`<div class="initials">${member.initials}</div>`}</div>
    <div><p class="eyebrow">Core team / 2026—27</p><span class="role">${member.role}</span><h1 class="name">${member.name}</h1><p class="bio">${member.bio}</p><blockquote class="quote">“${member.quote}”</blockquote><div class="links">${action('LinkedIn',member.linkedin)}${action('GitHub',member.github)}${action('Instagram',member.instagram)}${action('Portfolio',member.portfolio)}</div></div>
  </article>`;
}

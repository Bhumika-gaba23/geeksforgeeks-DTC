// Add `portfolio: 'https://...'` to any member below to connect their button.
const members = [
  { name:'Ronit Sharma', role:'President', initials:'RS', image:'ronit-sharma.png', bio:'Building a community where ambitious ideas feel achievable.', quote:'Lead with curiosity. Ship with courage.', portfolio:'https://sharmaronit.vercel.app', linkedin:'https://www.linkedin.com/in/sharmaronit/', github:'https://github.com/sharmaronit' },
  { name:'Vaibhav Solanki', role:'Vice President', initials:'VS', image:'vaibhav-solanki.png', bio:'Helping every member turn a good idea into a real build.', quote:'Small iterations create big outcomes.', portfolio:'https://vaibhav-solanki.vercel.app/', linkedin:'https://www.linkedin.com/in/vaibhav-solanki-b5790b253?utm_source=share_via&utm_content=profile&utm_medium=member_android', github:'https://github.com/Vaibhavsolanki1', instagram:'https://instagram.com/milkywaygalaxy0909?dlrf=djByOXVmOWY2cGNx' },
  { name:'Sarthak Kumar', role:'General Secretary', initials:'SK', image:'sarthak-kumar.png', bio:'Organising the details so great ideas can take centre stage.', quote:'Clear systems make space for creativity.', linkedin:'https://www.linkedin.com/in/sarthak-kumar-310075367', github:'https://github.com/sarthakkr17', instagram:'https://www.instagram.com/sa_._._._._.sk' },
  { name:'Puja Rajput', role:'General Secretary', initials:'PR', image:'puja-rajput.png', bio:'Creating a community where every new member feels welcome.', quote:'The best learning happens together.', linkedin:'https://www.linkedin.com/in/puja-rajput-50b462389/', instagram:'https://instagram.com/pujaa.mov' },
  { name:'Bhumika', role:'Technical Lead', initials:'B', image:'bhumika.png', bio:'Designing reliable systems and mentoring students through real projects.', quote:'Make it work. Then make it elegant.', linkedin:'https://www.linkedin.com/in/bhumika-gaba-05182037a/', github:'https://github.com/Bhumika-gaba23', instagram:'https://instagram.com/bhumikagaba_23' },
  { name:'Abhishek Tiwari', role:'Event Management Head', initials:'AT', image:'abhishek-tiwari.png', bio:'Creating memorable experiences where the community learns and connects.', quote:'Every event should spark one new idea.', linkedin:'https://www.linkedin.com/in/abhishek-tiwari-900093381', github:'https://github.com/DarkShadow-codex', instagram:'https://instagram.com/abhishektiwari.08' },
  { name:'Prince Dhull', role:'Event Management Head', initials:'PD', bio:'Turning campus events into opportunities to collaborate and build.', quote:'Energy is contagious—design for it.' },
  { name:'Aarya', role:'Social Media Head', initials:'A', bio:'Sharing the stories, energy and people behind the community.', quote:'Good stories turn audiences into communities.' },
  { name:'Manvi Singhal', role:'Social Media Head', initials:'MS', image:'manvi-singhal.png', bio:'Making every update useful, welcoming and worth sharing.', quote:'Clarity is the heart of communication.', portfolio:'https://jubilant-champagne-502445.framer.app/', linkedin:'https://www.linkedin.com/in/manvi-singhal-6768ab377/', github:'https://github.com/Manvi977', instagram:'https://instagram.com/_manviieeee' },
  { name:'Aditi Raj', role:'PR & Outreach Head', initials:'AR', image:'aditi-raj.png', bio:'Building partnerships that bring more opportunities to members.', quote:'Connections become opportunities.', linkedin:'https://www.linkedin.com/in/aditi-raj-104409399', github:'https://github.com/aditiraj1823-del', instagram:'https://instagram.com/aditii_rr' },
  { name:'Aaryan Ojha', role:'PR & Outreach Head', initials:'AO', bio:'Connecting campus builders with the wider technology community.', quote:'Start the conversation. Build the bridge.' },
  { name:'Ayush Tiwari', role:'Graphic Designing Head', initials:'AT', image:'ayush-tiwari.png', bio:'Designing visuals that make strong ideas impossible to overlook.', quote:'Design is how an idea introduces itself.', portfolio:'https://ayush-tiwari-work.netlify.app', linkedin:'https://www.linkedin.com/in/ayush-tiwari-career/', github:'https://github.com/ayush-tiwari-001', instagram:'https://www.instagram.com/ayush_tiwari.43/' },
  { name:'Isha', role:'Graphic Designing Head', initials:'I', bio:'Giving every society story a clean and memorable visual language.', quote:'Details turn visuals into experiences.' },
  { name:'Abhinav Beniwal', role:'Community Manager', initials:'AB', image:'abhinav-beniwal.png', bio:'Keeping members connected, supported and involved across every community initiative.', quote:'Strong communities grow through consistent connection.', portfolio:'https://abhinavs-code.lovable.app', linkedin:'https://www.linkedin.com/in/abhinav-beniwal', github:'https://github.com/beniwalabhinav2007-star', instagram:'https://www.instagram.com/itz_beni_abhi' },
  { name:'Bhavya Porwal', role:'Videography & Editor', initials:'BP', image:'bhavya-porwal.png', bio:'Capturing the moments, lessons and people moving the community forward.', quote:'Every frame should say something.' },
  { name:'ATHARVA MENDHE', role:'Photography Head', initials:'AM', image:'atharva-mendhe.png', bio:'Capturing the people, energy and stories that define our community.', quote:'Every moment deserves to be remembered.', github:'https://github.com/Atharvamendhe', linkedin:'https://www.linkedin.com/in/atharva-mendhe', instagram:'https://www.instagram.com/il_atharva', portfolio:'https://portfolio-black-three-46.vercel.app/' }
];

const icon = name => ({
  linkedin:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.2H3.3V21h3.2V8.2ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM21 13.7c0-3.9-2.1-5.7-4.9-5.7-2.3 0-3.3 1.2-3.8 2.1V8.2H9.1V21h3.2v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H20l1-7.3Z"/></svg>',
  github:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5v-2.2c-2.7.6-3.3-1.1-3.3-1.1-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.4-1.1.7-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7.9.7 1.8v3a10 10 0 0 0-2.2-19.8Z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1h.01"/></svg>',
}[name]);

const team = document.querySelector('#team-accordion');
const memberSlug = name => name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
team.innerHTML = members.map((member,index)=>`
  <article class="team-panel" data-index="${index}" data-profile="member.html?member=${memberSlug(member.name)}" role="link" tabindex="0" aria-label="Open ${member.name}'s profile">
    <div class="panel-art">
      <span class="panel-number">${String(index+1).padStart(2,'0')}</span>
      <span class="panel-season">CORE / 25</span>
      ${member.image
        ? `<img class="member-photo" src="${member.image}" alt="${member.name}, ${member.role}" loading="lazy">`
        : `<div class="avatar-orbit"><div class="avatar-core">${member.initials}</div></div>`}
      <span class="profile-reveal">View profile <span aria-hidden="true">↗</span></span>
      <p class="collapsed-name">${member.name}</p>
    </div>
    <div class="panel-copy">
      <span class="role-badge">${member.role}</span>
      <h2>${member.name}</h2>
      <p class="member-bio">${member.bio}</p>
      <blockquote>“${member.quote}”</blockquote>
      <div class="social-list">
        <a href="${member.linkedin || '#'}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} on LinkedIn">${icon('linkedin')}</a>
        <a href="${member.github || '#'}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} on GitHub">${icon('github')}</a>
        <a href="${member.instagram || '#'}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} on Instagram">${icon('instagram')}</a>
      </div>
      <a class="portfolio-link" href="${member.portfolio || '#'}" target="_blank" rel="noopener noreferrer" aria-label="View ${member.name}'s portfolio">
        <span>View portfolio</span><span aria-hidden="true">↗</span>
      </a>
    </div>
  </article>`).join('');

team.querySelectorAll('.team-panel').forEach(card=>{
  const openProfile=()=>window.location.href=card.dataset.profile;
  card.addEventListener('click',event=>{if(!event.target.closest('a'))openProfile()});
  card.addEventListener('keydown',event=>{
    if((event.key==='Enter'||event.key===' ')&&!event.target.closest('a')){
      event.preventDefault();
      openProfile();
    }
  });
});

const menu=document.querySelector('#menu-button');
const nav=document.querySelector('#mobile-nav');
menu.addEventListener('click',()=>nav.classList.toggle('hidden'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.add('hidden')));

const themeButton=document.querySelector('#theme-button');
if(localStorage.getItem('dtc-theme')==='dark')document.documentElement.classList.add('dark');
const syncTheme=()=>{themeButton.textContent=document.documentElement.classList.contains('dark')?'☀':'☾'};
syncTheme();
themeButton.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');localStorage.setItem('dtc-theme',document.documentElement.classList.contains('dark')?'dark':'light');syncTheme()});

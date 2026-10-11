const shell=document.querySelector('#auth-shell');
const modeButtons=[...document.querySelectorAll('[data-mode]')];
const brandTitle=document.querySelector('#brand-title');
const brandCopy=document.querySelector('#brand-copy');

// Add campus-specific fields, password guidance, trust copy, and recovery UI.
const signupEmail=document.querySelector('#signup-email').closest('.field-group');
signupEmail.insertAdjacentHTML('afterend',`<div class="campus-grid mb-3">
  <div class="compact-field field-group"><label for="roll-number">Roll number</label><input id="roll-number" name="rollNumber" placeholder="e.g. 23CSE104" required><p class="error-text mt-1 text-xs text-red-500"></p></div>
  <div class="compact-field field-group"><label for="course">Course</label><select id="course" name="course" required><option value="">Select course</option><option>B.Tech</option><option>BCA</option><option>MCA</option><option>M.Tech</option></select><p class="error-text mt-1 text-xs text-red-500"></p></div>
  <div class="compact-field field-group"><label for="study-year">Year</label><select id="study-year" name="year" required><option value="">Select year</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option></select><p class="error-text mt-1 text-xs text-red-500"></p></div>
  <div class="compact-field field-group"><label for="branch">Branch</label><input id="branch" name="branch" placeholder="CSE / IT / ECE" required><p class="error-text mt-1 text-xs text-red-500"></p></div>
  <div class="compact-field field-group"><label for="phone">Phone <span class="normal-case font-medium">(optional)</span></label><input id="phone" name="phone" type="tel" placeholder="10-digit number" inputmode="numeric"><p class="error-text mt-1 text-xs text-red-500"></p></div>
  <div class="compact-field field-group"><label for="interest">Primary interest</label><select id="interest" name="interest" required><option value="">Choose a track</option><option>DSA & Placements</option><option>Web Development</option><option>App Development</option><option>AI / ML</option><option>Design & Media</option><option>Events & Outreach</option></select><p class="error-text mt-1 text-xs text-red-500"></p></div>
</div>`);

document.querySelector('#signup-password').closest('.field-group').insertAdjacentHTML('beforeend','<div class="strength" data-score="0" aria-label="Password strength"><i></i><i></i><i></i><i></i></div><p class="strength-label">Use 8+ characters with a number and symbol.</p><p class="caps-warning">Caps Lock is on.</p>');
document.querySelector('#signin-password').closest('.field-group').insertAdjacentHTML('beforeend','<p class="caps-warning">Caps Lock is on.</p>');
document.querySelector('.mode-pill').insertAdjacentHTML('beforebegin','<div id="mode-announcement" class="sr-only" aria-live="polite"></div>');
document.querySelector('.auth-stage').insertAdjacentHTML('afterend','<div class="trust-note"><span>⌾</span><span><b>Your privacy matters.</b> Use your college email. Information is intended only for society membership and activities.</span></div><div class="privacy-links"><a href="#">Privacy</a><a href="#">Community guidelines</a><a href="index.html">Back to website</a></div>');
document.body.insertAdjacentHTML('beforeend',`<div id="reset-modal" class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="reset-title"><div class="modal-card relative"><button class="modal-close" type="button" aria-label="Close password reset">×</button><p class="font-mono text-[10px] uppercase tracking-[.1em] text-gfg">Account recovery</p><h2 id="reset-title" class="mt-2 font-display text-3xl font-bold tracking-[-.05em]">Reset your password.</h2><p class="mt-3 text-sm leading-6 text-slate-500">Enter your registered email. A connected backend will send the reset link.</p><form id="reset-form" class="mt-6"><label class="block text-xs font-bold" for="reset-email">College email</label><input id="reset-email" class="mt-2 h-12 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-gfg focus:ring-4 focus:ring-green-600/10" type="email" required><button class="mt-4 w-full rounded-lg bg-gfg py-3 text-sm font-extrabold text-white" type="submit">Request reset link</button></form><span class="backend-badge">Backend connection required</span></div></div>`);

function setMode(mode){
  const signup=mode==='signup';
  shell.classList.toggle('sign-up',signup);
  modeButtons.forEach(button=>{const active=button.dataset.mode===mode;button.setAttribute('aria-selected',String(active));button.classList.toggle('text-gfg',active);button.classList.toggle('text-slate-500',!active)});
  if(brandTitle)brandTitle.innerHTML=signup?'Start your<br><em class="not-italic text-green-200">builder journey.</em>':'Build with<br><em class="not-italic text-green-200">your people.</em>';
  if(brandCopy)brandCopy.textContent=signup?'Join the DTC community to discover events, practice together and turn campus ideas into real projects.':'Sign in to stay close to events, practice rooms, campus projects and the community that makes them happen.';
  document.querySelector('#mode-announcement').textContent=signup?'Sign up form selected':'Sign in form selected';
}
modeButtons.forEach(button=>button.addEventListener('click',()=>setMode(button.dataset.mode)));

document.querySelectorAll('[data-password-toggle]').forEach(button=>button.addEventListener('click',()=>{const input=document.querySelector(`#${button.dataset.passwordToggle}`);const revealing=input.type==='password';input.type=revealing?'text':'password';button.textContent=revealing?'Hide':'Show';button.setAttribute('aria-label',revealing?'Hide password':'Show password')}));

function showError(input,message){input.classList.add('field-error');input.setAttribute('aria-invalid','true');const error=input.closest('.field-group')?.querySelector('.error-text');if(error){if(!error.id)error.id=`${input.id}-error`;input.setAttribute('aria-describedby',error.id);error.textContent=message;error.classList.add('show')}}
function clearError(input){input.classList.remove('field-error');input.removeAttribute('aria-invalid');const error=input.closest('.field-group')?.querySelector('.error-text');if(error){error.classList.remove('show');error.textContent=''}}
document.querySelectorAll('input,select').forEach(input=>input.addEventListener('input',()=>clearError(input)));

const password=document.querySelector('#signup-password');
password.addEventListener('input',()=>{let score=0;const value=password.value;if(value.length>=8)score++;if(/[A-Z]/.test(value)&&/[a-z]/.test(value))score++;if(/\d/.test(value))score++;if(/[^\w\s]/.test(value))score++;const meter=document.querySelector('.strength');meter.dataset.score=score;document.querySelector('.strength-label').textContent=['Use 8+ characters with a number and symbol.','Weak password','Fair password','Good password','Strong password'][score]});
document.querySelectorAll('input[type="password"]').forEach(input=>input.addEventListener('keyup',event=>{input.closest('.field-group').querySelector('.caps-warning')?.classList.toggle('show',event.getModifierState('CapsLock'))}));

function showToast(title,copy){const toast=document.querySelector('#success-toast');toast.querySelector('strong').textContent=title;toast.querySelector('span').textContent=copy;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3800)}
function validate(form){let valid=true;form.querySelectorAll('[required]').forEach(input=>{clearError(input);if((input.type==='checkbox'&&!input.checked)||!input.value.trim()){showError(input,'This field is required.');valid=false}else if(input.type==='email'&&!input.validity.valid){showError(input,'Enter a valid email address.');valid=false}else if(input.type==='password'&&input.value.length<8){showError(input,'Use at least 8 characters.');valid=false}});const confirm=form.querySelector('#signup-confirm');if(confirm&&confirm.value!==password.value){showError(confirm,'Passwords do not match.');valid=false}return valid}

document.querySelectorAll('.auth-form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();if(!validate(form)){form.classList.remove('shake');void form.offsetWidth;form.classList.add('shake');form.querySelector('[aria-invalid="true"]')?.focus();return}const button=form.querySelector('button[type="submit"]');const original=button.innerHTML;button.disabled=true;button.classList.add('is-loading');button.innerHTML='<span class="button-spinner"></span><span class="button-label">Checking details…</span>';setTimeout(()=>{button.disabled=false;button.classList.remove('is-loading');button.innerHTML=original;if(form.id==='signup-form')showToast('Account details validated','Connect Firebase or Supabase to create the account and send verification email.');else showToast('Sign-in details validated','Connect an authentication backend to start a secure session.')},900)}));

const modal=document.querySelector('#reset-modal');
document.querySelector('.forgot').addEventListener('click',event=>{event.preventDefault();modal.classList.add('open');document.querySelector('#reset-email').focus()});
document.querySelector('.modal-close').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',event=>{if(event.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',event=>{if(event.key==='Escape')modal.classList.remove('open')});
document.querySelector('#reset-form').addEventListener('submit',event=>{event.preventDefault();modal.classList.remove('open');showToast('Reset flow ready','Connect your authentication provider to email a secure reset link.')});
const googleButton=[...document.querySelectorAll('button')].find(button=>button.textContent.includes('Continue with Google'));
googleButton?.addEventListener('click',()=>showToast('Google sign-in ready','Add your Google OAuth client credentials to enable this button.'));

setMode('signin');

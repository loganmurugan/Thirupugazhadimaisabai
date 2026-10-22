// Edit these settings when your song, contact email and approved member names are ready.
const SITE_CONFIG = {
  musicSrc: '', // Example: 'audio/murugan-song.mp3' after uploading the actual file.
  recordingTitle: '', // Optional title to display above the player.
  contactEmail: '', // Confirm the receiving address before enabling email enquiries.
  members: [] // Add approved names/roles: { name: '...', role: '...' }
};



  function setLang(lang) {
    document.documentElement.lang = lang;

    if (lang === 'en') {

      document.body.classList.add('en-mode');

      document.getElementById('btn-en').classList.add('active');

      document.getElementById('btn-ta').classList.remove('active');

    } else {

      document.body.classList.remove('en-mode');

      document.getElementById('btn-ta').classList.add('active');

      document.getElementById('btn-en').classList.remove('active');

    }

  }



const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
mobileMenu.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  mobileMenu.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  mobileMenu.setAttribute('aria-expanded', 'false');
}));
// Keep anchor targets below the collapsed sticky header, in either language.
const navigation = document.querySelector('nav');
function updateNavHeight() {
  if (!navLinks.classList.contains('open')) {
    document.documentElement.style.setProperty('--nav-height', navigation.offsetHeight + 'px');
  }
}
new ResizeObserver(updateNavHeight).observe(navigation);
const desktopNavigation = window.matchMedia('(min-width: 1401px)');
desktopNavigation.addEventListener('change', () => {
  navLinks.classList.remove('open');
  mobileMenu.setAttribute('aria-expanded', 'false');
  updateNavHeight();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    mobileMenu.setAttribute('aria-expanded', 'false');
    mobileMenu.focus();
  }
});
// Missing photographs show a placeholder rather than a broken image icon.
document.querySelectorAll('.gallery-photo img').forEach(img => {
  const showFallback = () => { img.hidden = true; img.nextElementSibling.hidden = false; };
  img.addEventListener('error', showFallback);
  if (img.complete && img.naturalWidth === 0) showFallback();
});
// Enter the Sabai's confirmed email address here before using the enquiry form.
const sabaiEmail = SITE_CONFIG.contactEmail;
document.getElementById('joinForm').addEventListener('submit', event => {
  event.preventDefault();
  const status = document.getElementById('joinStatus');
  if (!sabaiEmail) {
    status.textContent = 'Official Sabai email is not configured yet. / சபை மின்னஞ்சல் முகவரி இன்னும் அமைக்கப்படவில்லை.';
    return;
  }
  const f = event.currentTarget;
  const body = [
    'Membership enquiry - Thirupugazhadimaisabai & Arakattalai', '',
    'Name: ' + f.elements.name.value,
    'Email: ' + f.elements.email.value,
    'Phone: ' + f.elements.phone.value,
    'City: ' + f.elements.city.value,
    'Message: ' + f.elements.message.value
  ].join('\n');
  status.textContent = 'Please review and send the email in your email application. / மின்னஞ்சலை சரிபார்த்து அனுப்பவும்.';
  window.location.href = 'mailto:' + sabaiEmail + '?subject=' + encodeURIComponent('Sabai Membership Enquiry') + '&body=' + encodeURIComponent(body);
});

// No autoplay, no opening popup and no request to a missing song when unconfigured.
function configureMusicPlayer(config, player, emptyMessage, status, title) {
  if (!config.musicSrc.trim()) return;
  emptyMessage.hidden = true;
  player.hidden = false;
  if (config.recordingTitle.trim()) title.textContent = config.recordingTitle;
  player.addEventListener('error', () => {
    player.hidden = true;
    status.textContent = 'ஒலிப்பதிவை இயக்க முடியவில்லை. / This recording could not be loaded.';
  });
  player.addEventListener('canplay', () => { status.textContent = ''; });
  player.src = config.musicSrc;
}
configureMusicPlayer(SITE_CONFIG,
  document.getElementById('muruganAudio'), document.getElementById('recordingEmpty'),
  document.getElementById('recordingStatus'), document.getElementById('recordingTitle'));

// Public directory: names and roles only. Keep private member records off this page.
const directory = document.getElementById('memberDirectory');
SITE_CONFIG.members.forEach(member => {
  if (!member.name || !member.name.trim()) return;
  const card = document.createElement('article');
  card.className = 'member-card';
  const name = document.createElement('h3');
  name.textContent = member.name;
  const role = document.createElement('p');
  role.textContent = member.role || '';
  card.append(name, role);
  directory.appendChild(card);
});

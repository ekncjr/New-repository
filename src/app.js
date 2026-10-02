const START_AT = 8; // Ses dosyasında “Dalıyor gözlerim” girişinin başlangıç saniyesi.
const facts = [
  ['Sorumluluk', 'Seni tekrar tekrar anlatmak zorunda bıraktım.', 'Bunun ne kadar yorucu olduğunu artık daha net görüyorum. Sen bir şeyi defalarca anlatmak istemiyorsun. Haklısın. Bir ilişkide karşındaki insanın seni anlayabilmesi için her şeyi tekrar tekrar tarif etmek zorunda kalmaman gerekiyor.'],
  ['Hakkını Teslim Etmek', 'Sen benden bunu beklerken ben yeterince dikkat etmedim.', 'Benim her sıkıntımda yanımda olmaya çalışırken, senin aynı hassasiyeti benden görememen büyük bir haksızlık. İlişkimizin başından beri verdiğin emeği, gösterdiğin sabrı ve beni anlamaya çalışmanı görüyorum.'],
  ['Bahane Yok', 'Ne yaşarsam yaşayayım, seni kırmış olmamın arkasına saklanmayacağım. Bunun sorumluluğu bana ait.', ''],
];
const promises = [
  ['Daha Çok Dinlemek', 'Bir şey söylediğinde hemen cevap vermek, kendimi savunmak veya açıklama yapmak yerine önce gerçekten anlamaya çalışacağım.'],
  ['Detayları Fark Etmek', 'Senin tekrar söylemeni beklemek yerine, daha önce söylediklerini ve seni rahatsız eden şeyleri kendim hatırlamaya ve dikkat etmeye çalışacağım.'],
  ['Davranışla Göstermek', 'Bunu sana uzun mesajlarla kanıtlamaya çalışmayacağım. Çünkü sen zaten kelimelerden çok davranış görmek istediğini söyledin.'],
  ['Savunmaya Geçmemek', 'Bir konuda kırıldığını söylediğinde ilk refleksim kendimi haklı çıkarmak olmayacak. Önce seni neden kırdığımı anlamaya çalışacağım.'],
  ['Aynı Şeyi Tekrar Ettirmemek', 'Bir şeyi sana defalarca anlatmak zorunda bırakmak istemiyorum. Söylediklerini ciddiye alacağım ve aynı dikkatsizliği tekrarlamamaya çalışacağım.'],
];
const checklist = ['Dinle', 'Anlamaya çalış', 'Hatırla', 'Dikkat et', 'Savunmaya geçme', 'Aynı şeyi tekrar ettirme', 'Söylediğini davranışa dönüştür'];
const arrow = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14m-7-7 7 7 7-7"/></svg>';
const heading = (n, title) => `<div class="section-heading"><span>${n}</span><h2>${title}</h2></div>`;

document.querySelector('#app').innerHTML = `
  <div class="progress-indicator"></div>
  <section class="intro"><div class="intro-center"><span class="intro-line"></span><span class="eyebrow intro-date">02.10.2026</span><svg class="intro-heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.1 4.45 12.9A5.03 5.03 0 0 1 11.56 5.8L12 6.25l.44-.45a5.03 5.03 0 0 1 7.11 7.1L12 20.1Z"/></svg><h1 class="intro-title">Bu Kez Senin İçin.</h1><button class="outline-button">Devam Et ${arrow}</button></div><span class="intro-foot">ÖZÜR VE GELECEK PROTOKOLÜ</span></section>
  <main hidden>
    <header class="site-header"><a href="#top" class="brand">02<span> / </span>10<span> / </span>26</a><span>ÖZÜR VE GELECEK PROTOKOLÜ</span><span class="header-index">ÖZEL MEKTUP&nbsp; · &nbsp;01</span></header>
    <section id="top" class="hero section-wrap"><div class="reveal"><p class="eyebrow">BİR MEKTUP</p><h1>Bu kez senden<br />bir şey istemiyorum.</h1><p class="hero-sub">Sadece beni okumadan önce, seni gerçekten dinlediğimi bilmeni istiyorum.</p></div><span class="side-note">AÇIKÇA · SAKİNCE · SAMİMİYETLE</span></section>
    <section class="listening section-wrap"><div class="listening-inner reveal"><p class="eyebrow">SENİ DUYDUM</p><h2>Seni tekrar tekrar<br /><em>anlatmak zorunda bıraktım.</em></h2><div class="listening-copy"><p>Bir şeyleri anlatmaktan yorulduğunu söyledin. Her şeyi tekrar tekrar açıklamanın seni yorduğunu, sinirlendirdiğini söyledin.</p><p>İlişkimizi düzgün ve sağlıklı götürmeye çalışırken bunun karşılığını görememenin seni üzdüğünü söyledin. Ve benden artık daha fazla açıklama değil, fark etmemi ve dikkat etmemi istedin.</p><p class="muted">Bunların hiçbirini savunmayacağım. Söylediklerini duymam gerekiyordu.</p></div></div></section>
    <section class="section-wrap facts-section"><div class="reveal">${heading('01','Gerçeklerin Farkındayım')}</div><div class="fact-grid">${facts.map(([label,title,copy],i)=>`<article class="fact-card reveal"><span class="card-number">0${i+1}</span><p class="eyebrow">${label}</p><h3>${title}</h3><p class="card-copy">${copy}</p></article>`).join('')}</div></section>
    <section class="statement"><div class="reveal"><p>Senden daha fazla<br />açıklama istemiyorum.</p><span>Çünkü bu kez anlaması gereken kişi benim.</span></div></section>
    <section class="section-wrap promise-section"><div class="reveal">${heading('02','Sana Verdiğim Sözler')}</div><div class="promise-list">${promises.map(([title,copy],i)=>`<article class="promise-row reveal"><span class="promise-number">0${i+1}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></section>
    <section id="letter" class="letter-section section-wrap"><article class="letter reveal"><p class="eyebrow">SANA</p><h2>Bu bir açıklama değil.<br /><em>Sana söylemem gerekenler.</em></h2><div class="letter-body"><p>Sana kendimi anlatmaya ya da neden böyle davrandığımı açıklamaya çalışmayacağım. Çünkü artık önemli olan benim ne demek istediğim değil, sana ne hissettirdiğim.</p><p>Sen benim her sıkıntımda yanımda olmaya çalışırken, ben senin aynı özeni görememene sebep oldum. Bunu fark ettim. Seni dinlemem, söylediklerini hatırlamam ve dikkat etmem gerekiyordu.</p><p>Bu yüzden senden şu an hiçbir şeyi hemen düzeltmeni, hemen affetmeni veya bana bir cevap vermeni istemiyorum.</p><p>Sadece şunu bilmeni istiyorum:<br /><strong>Seni duydum. Ne demek istediğini anladım. Ve bundan sonra bunu davranışlarımla göstermem gerektiğini biliyorum.</strong></p><p class="love-line">Bundan sonrasını sözlerle değil, fark ederek ve dikkat ederek göstereceğim.</p></div></article></section>
    <section class="section-wrap protocol-section"><div class="reveal">${heading('03','Gelecek Protokolü')}<p class="section-intro">Büyük sözler değil. Hatırlamam gerekenler.</p></div><div class="checklist">${checklist.map((x,i)=>`<label class="check-row"><span class="check-num">0${i+1}</span><input type="checkbox"><span class="check-box" aria-hidden="true"></span>${x}</label>`).join('')}</div></section>
    <section class="timeline-section section-wrap"><div class="reveal"><p class="eyebrow">BİR BAŞLANGIÇ</p><h2>Zamanla.</h2></div><div class="timeline">${[['Bugün','02.10.2026','Her şeyi bir anda değiştireceğime dair büyük sözler vermiyorum. Ama bugünden itibaren daha dikkatli olmaya başlıyorum.'],['Yarın','','Daha önce söylediklerini hatırlamak.'],['Sonrası','','Bunu bir özür anı olarak bırakmamak.']].map(([title,date,copy])=>`<article class="timeline-item reveal"><span class="timeline-dot"></span><p class="eyebrow">${title}</p>${date?`<span class="timeline-date">${date}</span>`:''}<p>${copy}</p></article>`).join('')}</div></section>
    <section class="final-stage" aria-label="Çiçekli final">
      <img class="final-bouquet" src="/images/bouquet.svg" alt="Koyu kırmızı güllerden oluşan zarif bir buket" />
      <div class="final-copy">
        <h2>Özür dilerim.</h2>
        <p class="final-reason">Seni kırdığım, seni yorduğum ve bazı şeyleri sana tekrar tekrar anlatmak zorunda bıraktığım için.</p>
        <p class="final-listened">Geçmişi değiştiremem.<br />Ama bundan sonrasına daha fazla dikkat edebilirim.</p>
      </div>
      <div class="final-music">
        <button class="final-music-button">Bir şey daha dinle</button>
      </div>
      <span class="final-date">02.10.2026</span>
      <p class="final-last">İyi ki varsın.</p>
      <audio class="final-audio" src="/music/sebebi-yar.mp3" preload="metadata"></audio>
    </section>
  </main>`;

const intro = document.querySelector('.intro');
const main = document.querySelector('main');
document.querySelector('.outline-button').addEventListener('click', () => {
  intro.classList.add('intro-out');
  setTimeout(() => { intro.hidden = true; main.hidden = false; observeReveals(); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 750);
});
function observeReveals() {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
document.querySelectorAll('.check-row input').forEach((input) => input.addEventListener('change', () => input.closest('.check-row').classList.toggle('is-checked', input.checked)));
const audio = document.querySelector('.final-audio');
const playButton = document.querySelector('.final-music-button');
audio.addEventListener('loadedmetadata', () => { audio.currentTime = START_AT; });
audio.addEventListener('error', () => { playButton.textContent = 'Müzik dosyası bulunamadı'; playButton.disabled = true; });
playButton.addEventListener('click', async () => {
  if (audio.currentTime < START_AT) audio.currentTime = START_AT;
  try {
    await audio.play();
    playButton.textContent = 'Şimdi sadece dinle';
    playButton.disabled = true;
    document.querySelector('.final-stage').classList.add('music-on');
    window.setTimeout(() => document.querySelector('.final-stage').classList.add('show-date'), 2200);
    window.setTimeout(() => document.querySelector('.final-stage').classList.add('show-last'), 4700);
    window.setTimeout(() => document.querySelector('.final-stage').classList.add('fade-to-black'), 10000);
  } catch { playButton.textContent = 'Müzik başlatılamadı'; }
});
const finalObserver = new IntersectionObserver((entries, observer) => {
  if (entries.some((entry) => entry.isIntersecting)) {
    document.querySelector('.final-stage').classList.add('final-active');
    observer.disconnect();
  }
}, { threshold: 0.2 });
finalObserver.observe(document.querySelector('.final-stage'));
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector('.progress-indicator').style.transform = `scaleX(${max > 0 ? window.scrollY/max : 0})`;
}, { passive: true });

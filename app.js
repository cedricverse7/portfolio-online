// The page language controls navigation and dynamic captions. Main content stays in HTML.
const isEnglish = document.documentElement.getAttribute('lang') === 'en';
const translations = {
  "Accueil": "Home",
  "Montage vidéo": "Video editing",
  "Graphisme": "Graphic design",
  "Développement web": "Web development",
  "Vidéo à ajouter": "Video to be added",
  "Cedric, accueil": "Cedric, home",
  "Ouvrir le menu": "Open menu",
  "Fermer le menu": "Close menu",
  "Navigation principale": "Main navigation",
  "Montage vidéo · Graphisme · Développement web": "Video editing · Graphic design · Web development",
  "Mes différentes<br> <em>compétences.</em>": "My different<br> <em>skills.</em>",
  "Je travaille sur l'image, la vidéo et le web. Découvrez les trois domaines de mon portfolio et les projets que j'y présenterai.": "I work with images, video and the web. Explore the three areas of my portfolio and the projects I will be showcasing.",
  "Domaines": "Areas of work",
  "Explorer le portfolio": "Explore the portfolio",
  "Montage<br>vidéo": "Video<br>editing",
  "Développement<br>web": "Web<br>development",
  "Un projet en tête ? Écrivez-moi pour en discuter et voir ce qu'on peut créer ensemble.": "Have a project in mind? Get in touch to discuss it and see what we can create together.",
  "Me contacter ↗": "Get in touch ↗",
  "Vidéo storytelling": "Storytelling video",
  "Dans ce type de montage, le but est surtout de faire avancer l'histoire sans perdre le spectateur. Je travaille le rythme, les silences, la musique et les coupes pour mettre en avant les passages importants et donner envie de regarder jusqu'au bout.": "With this type of editing, the main goal is to move the story forward while keeping viewers engaged. I work on pacing, pauses, music and cuts to highlight key moments and make people want to watch until the end.",
  "Montage simple": "Basic editing",
  "Je peux faire des montages plus simples, bien moins coûteux en terme de temps et de coût pour le client": "I can also provide simpler edits that take much less time and cost less for the client.",
  "Publicité complète": "Complete advertisement",
  "Je peux créer une publicité de toutes pièces, (texte, voix, montage)": "I can create an advertisement from scratch, including the script, voice and editing.",
  "Page de boutique": "Shop website",
  "Sillage est un exemple de site internet adapté aux boutiques physiques. Permettant un contact facile et une mise en avant du produit": "Sillage is an example of a website for physical shops, making it easy to get in touch and showcase products.",
  "Page de restaurant": "Restaurant website",
  "Nox. est un exemple de site internet plus adapté aux restaurants (incluant une page \"menu\").": "Nox. is an example of a website for restaurants, including a menu page.",
  "Tycoon Clicker": "Tycoon Clicker",
  "Milk Tycoon est un exemple de site de type \"mini-jeu\", je peux faire un petit jeu basé sur votre marque, tout en mettant en avant vos produits. Maintenir des joueurs dans votre univers est très efficace pour les convertir en clients.": "Milk Tycoon is an example of a mini-game website. I can create a small game based on your brand while showcasing your products. Keeping players engaged with your brand can be an effective way to turn them into customers.",
  "Accéder au site": "Open website",
  "Voir le site ↗": "View website ↗",
  "Visiter le site ↗": "Visit website ↗",
  "01 / Montage vidéo": "01 / Video editing",
  "Montage Vidéo": "Video Editing",
  "Je maîtrise une large gamme de logiciels de montage vidéo et j’adapte mon travail au ton, au format et au public de chaque projet.": "I use a wide range of video editing software and adapt my work to the tone, format and audience of each project.",
  "03 / Développement web": "03 / Web development",
  "Développement Web": "Web Development",
  "Une sélection de projets web. Cliquez sur une image pour ouvrir le site correspondant.": "A selection of web projects. Click an image to open the corresponding website.",
  "Image ou vidéo précédente": "Previous image or video",
  "Image ou vidéo suivante": "Next image or video",
  "02 / Graphisme": "02 / Graphic design",
  "Miniatures, identités visuelles, menus et animations publicitaires : des formats différents, avec la même attention portée à la lisibilité et au détail.": "Thumbnails, visual identities, menus and animated ads: different formats, with the same attention to clarity and detail.",
  "Miniatures": "Thumbnails",
  "Parcourez les visuels avec les flèches.": "Browse the visuals using the arrows.",
  "Un aperçu des identités visuelles réunies sur une même planche.": "A selection of visual identities brought together on one board.",
  "Planche de logos": "Logo board",
  "Menus de restaurants": "Restaurant menus",
  "Deux exemples de menus pensés pour être clairs et faciles à parcourir.": "Two examples of menus designed to be clear and easy to browse.",
  "Premier menu de restaurant": "First restaurant menu",
  "Deuxième menu de restaurant": "Second restaurant menu",
  "Animations publicitaires": "Animated ads",
  "Des animations simples pour votre marque.": "Simple animations for your brand.",
  "Contactez<br><em>moi.</em>": "Get in<br><em>touch.</em>",
  "Pour une vidéo, un visuel ou un site web, vous pouvez me joindre directement par e-mail ou sur Instagram.": "For a video, a graphic or a website, you can contact me directly by email or on Instagram.",
  "Expliquez-moi votre idée,<br>votre format et vos délais.": "Tell me about your idea,<br>your format and your timeline.",
  "E-mail": "Email",
  "Miniature 01": "Thumbnail 01",
  "Miniature 02": "Thumbnail 02",
  "Miniature 03": "Thumbnail 03",
  "Animation publicitaire 01": "Animated ad 01",
  "Animation publicitaire 02": "Animated ad 02",
  "Image à ajouter": "Image to be added",
  "Mes différentes": "My different",
  "compétences.": "skills.",
  "Montage": "Video",
  "vidéo": "editing",
  "Développement": "Web",
  "web": "development",
  "Contactez": "Get in",
  "moi.": "touch.",
  "Expliquez-moi votre idée,": "Tell me about your idea,",
  "votre format et vos délais.": "your format and your timeline.",
  "Je peux faire des montages plus simples, bien moins coûteux en terme de temps et de coût pour le client.": "I can also provide simpler edits that take much less time and cost less for the client.",
  "Pour une vidéo, un visuel ou un site web, vous pouvez me joindre directement par e-mail ou sur Instagram. Les prix peuvent varier en fonction des projets et des budgets des entreprises/particuliers.": "For a video, a graphic or a website, you can contact me directly by email or on Instagram. Prices may vary depending on the project and the budget of the business or individual.",
  "Cédric WRT, accueil": "Cédric WRT, home",
  "Ouvrir Page de boutique dans un nouvel onglet": "Open shop website in a new tab",
  "Ouvrir Page de restaurant dans un nouvel onglet": "Open restaurant website in a new tab",
  "Ouvrir Tycoon Clicker dans un nouvel onglet": "Open Tycoon Clicker in a new tab"
};
const t = text => isEnglish ? (translations[text] ?? text) : text;
const englishFiles = {'index.html': 'index - en.html', 'montage-video.html': 'video editing - en.html', 'graphisme.html': 'graphisme - en.html', 'developpement-web.html': 'webdev - en.html', 'contact.html': 'contact - en.html'};
const localUrl = url => isEnglish ? (englishFiles[url] || url) : url;
function languageSwitcher() {
 const file = routes.find(([key]) => key === page)?.[2] || 'index.html';
 return `<span class="language-switcher" role="group" aria-label="${isEnglish ? 'Language' : 'Langue'}"><a href="${file}" lang="fr" hreflang="fr" aria-label="${isEnglish ? 'View this page in French' : 'Voir cette page en français'}" ${!isEnglish ? 'aria-current="page"' : ''}>FR</a><span aria-hidden="true"> / </span><a href="${englishFiles[file] || file}" lang="en" hreflang="en" aria-label="${isEnglish ? 'View this page in English' : 'Voir cette page en anglais'}" ${isEnglish ? 'aria-current="page"' : ''}>EN</a></span>`;
}
const page = document.body.dataset.page || 'accueil';

const routes = [
  ['accueil',t("Accueil"),'index.html'],
  ['video',t("Montage vidéo"),'montage-video.html'],
  ['graphisme',t("Graphisme"),'graphisme.html'],
  ['web',t("Développement web"),'developpement-web.html'],
  ['contact','Contact','contact.html']
];

const assets = path => path;

function header(){
  return `<header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="${localUrl('index.html')}" aria-label="${t("Cédric WRT, accueil")}">
        CÉDRIC<span>.</span>WRT
      </a>

      <button
        class="menu-toggle"
        type="button"
        aria-label="${t("Ouvrir le menu")}"
        aria-expanded="false"
        aria-controls="main-nav">
        Menu
      </button>

      <nav class="nav" id="main-nav" aria-label="${t("Navigation principale")}">
        ${routes.map(([key,title,url]) =>
          `<a href="${localUrl(url)}" ${page===key?'aria-current="page"':''}>${title}</a>`
        ).join('')}${languageSwitcher()}
      </nav>
    </div>
  </header>`;
}

function footer(){
  return `<footer class="footer">
    <div class="shell footer-inner">
      <div>
        <a class="brand" href="${localUrl('index.html')}">
          CÉDRIC<span>.</span>WRT
        </a>
        <p>${t("Montage vidéo · Graphisme · Développement web")}</p>
      </div>

      <div class="footer-links">
        <a href="mailto:cedric.procontact@proton.me">
          cedric.procontact@proton.me
        </a>

        <a
          href="https://www.instagram.com/cedric.wrt/"
          target="_blank"
          rel="noopener noreferrer">
          Instagram ↗
        </a>
      </div>
    </div>
  </footer>`;
}

/* Menu */

const app = document.getElementById('app');

if (app && !app.querySelector('.site-header')) {
  const existingContent = app.innerHTML;

  app.innerHTML = header() + existingContent + footer();
}

const menu = document.querySelector('.menu-toggle');

if (menu) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';

    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute(
      'aria-label',
      open ? t("Fermer le menu") : t("Ouvrir le menu")
    );

    document.querySelector('.nav').classList.toggle('open', open);
  });
}

/* Médias */

function activateMedia(root){
  root.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth) {
      img.classList.add('loaded');
    } else {
      img.addEventListener(
        'load',
        () => img.classList.add('loaded'),
        {once:true}
      );
    }
  });

  root.querySelectorAll('video').forEach(v =>
    v.addEventListener(
      'loadedmetadata',
      () => v.classList.add('loaded'),
      {once:true}
    )
  );
}

activateMedia(document);

/* Galeries */

const slideSets = {
  ads: [
    ['animation-publicitaire-01.mp4', t('Animation publicitaire 01')],
    ['animation-publicitaire-02.mp4', t('Animation publicitaire 02')]
  ],
  thumbnails: [
    ['miniature-01.jpg',t("Miniature 01")],
    ['miniature-02.jpg',t("Miniature 02")],
    ['miniature-03.jpg',t("Miniature 03")]
  ]
};

document.querySelectorAll('[data-gallery]').forEach(galleryEl => {
  const slides = slideSets[galleryEl.dataset.gallery];
  const kind = galleryEl.dataset.kind;

  if (!slides) return;

  let current = 0;

  function render(){
    const [file, caption] = slides[current];
    const frame = galleryEl.querySelector('.slide-visual');

    frame.querySelector('video')?.pause();

    frame.innerHTML =
      kind === 'video'
        ? `
          <video
            src="${assets(file)}"
            preload="metadata"
            controls
            playsinline
            aria-label="${caption}">
          </video>

          <div class="placeholder" aria-hidden="true">
            <span class="symbol">▶</span>
            ${t("Vidéo à ajouter")}
            <small>${file}</small>
          </div>
        `
        : `
          <img
            src="${assets(file)}"
            alt="${caption}">

          <div class="placeholder" aria-hidden="true">
            <span class="symbol">▧</span>
            ${t("Image à ajouter")}
            <small>${file}</small>
          </div>
        `;

    activateMedia(frame);

    galleryEl.querySelector('.slide-caption').textContent = caption;

    galleryEl.querySelector('.counter').textContent =
      `${String(current + 1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  }

  galleryEl.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    render();
  });

  galleryEl.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    render();
  });

  galleryEl.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();

      current =
        (current +
          (event.key === 'ArrowRight' ? 1 : -1) +
          slides.length) %
        slides.length;

      render();
    }
  });

  render();
});
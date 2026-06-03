/* ============================================
   PrimeInfinity — Product Data & Catalog
   ============================================ */

const PRODUCTS = [
  {
    id: 1,
    name: { fr: "Huile Précieuse Visage", de: "Kostbares Gesichtsöl", en: "Precious Face Oil", tr: "Değerli Yüz Yağı" },
    price: 22.99,
    category: "beauty",
    images: [
      "images/prod_1.jpg",
      "images/new_creme.jpg",
      "images/new_parfum.jpg",
      "images/prod_2.jpg"
    ],
    description: {
      fr: "Huile de soin visage enrichie en actifs naturels précieux. Nourrit, répare et illumine le teint en profondeur. Texture légère non grasse, absorbe rapidement pour une peau douce et radieuse.",
      de: "Gesichtspflegeöl angereichert mit wertvollen natürlichen Wirkstoffen. Nährt, repariert und strahlt den Teint tief auf. Leichte, nicht fettige Textur.",
      en: "Face care oil enriched with precious natural actives. Nourishes, repairs and deeply illuminates the complexion. Lightweight non-greasy texture.",
      tr: "Değerli doğal aktiflerle zenginleştirilmiş yüz bakım yağı. Cildi besler, onarır ve derinlemesine parlaklık kazandırır."
    },
    rating: 4.6,
    reviews: 89
  },
  {
    id: 2,
    name: { fr: "Sérum Éclat Intense", de: "Intensives Aufhellungsserum", en: "Intense Radiance Serum", tr: "Yoğun Parlaklık Serumu" },
    price: 24.99,
    category: "beauty",
    images: [
      "images/prod_2.jpg",
      "images/prod_1.jpg",
      "images/new_parfum.jpg",
      "images/new_creme.jpg"
    ],
    description: {
      fr: "Sérum concentré à action éclat pour unifier le teint et atténuer les taches. Formule légère à base d'actifs lumineux qui lissent et perfectionnent la peau dès les premières semaines.",
      de: "Konzentriertes Aufhellungsserum zum Vereinheitlichen des Hauttons. Leichte Formel mit leuchtenden Wirkstoffen.",
      en: "Concentrated radiance serum to unify skin tone and reduce dark spots. Lightweight formula with brightening actives.",
      tr: "Cilt tonunu eşitleyen ve leke görünümünü azaltan yoğun parlaklık serumu."
    },
    rating: 4.8,
    reviews: 163
  },
  {
    id: 3,
    name: { fr: "Lotion Tonifiante Purifiante", de: "Reinigende Toniklotion", en: "Purifying Toning Lotion", tr: "Arındırıcı Tonik Losyon" },
    price: 18.99,
    category: "beauty",
    images: [
      "images/prod_3.jpg",
      "images/prod_4.jpg",
      "images/new_parfum.jpg",
      "images/prod_1.jpg"
    ],
    description: {
      fr: "Lotion tonifiante purifiante qui resserre les pores et équilibre le film hydrolipidique. Formule douce sans alcool, convient à tous types de peaux.",
      de: "Reinigende Toniklotion, die die Poren verfeinert. Sanfte alkoholfreie Formel für alle Hauttypen.",
      en: "Purifying toning lotion that tightens pores and balances the hydrolipidic film. Gentle alcohol-free formula for all skin types.",
      tr: "Gözenekleri sıkılaştıran arındırıcı tonik losyon. Tüm cilt tiplerine uygun alkol içermeyen formül."
    },
    rating: 4.4,
    reviews: 97
  },
  {
    id: 4,
    name: { fr: "Coffret Soin Complet", de: "Komplettes Pflegeset", en: "Complete Skincare Set", tr: "Tam Bakım Seti" },
    price: 34.99,
    category: "beauty",
    images: [
      "images/prod_4.jpg",
      "images/prod_3.jpg",
      "images/new_creme.jpg",
      "images/new_parfum.jpg"
    ],
    description: {
      fr: "Coffret soin complet comprenant sérum, huile, lotion et crème pour une routine beauté totale. Formules douces adaptées à tous types de peaux.",
      de: "Komplettes Pflegeset mit Serum, Öl, Lotion und Creme. Sanfte Formeln für alle Hauttypen.",
      en: "Complete skincare set including serum, oil, lotion and cream for a full beauty routine. Gentle formulas for all skin types.",
      tr: "Tam bir güzellik rutini için serum, yağ, losyon ve krem içeren eksiksiz bakım seti."
    },
    rating: 4.7,
    reviews: 201
  },
  {
    id: 5,
    name: { fr: "Crème Hydratante Visage", de: "Feuchtigkeitscreme Gesicht", en: "Moisturizing Face Cream", tr: "Nemlendirici Yüz Kremi" },
    price: 21.99,
    category: "beauty",
    images: [
      "images/new_creme.jpg",
      "images/prod_1.jpg",
      "images/prod_2.jpg",
      "images/new_parfum.jpg"
    ],
    description: {
      fr: "Crème hydratante visage à texture veloutée qui nourrit et protège la peau toute la journée. Enrichie en beurre de karité et actifs botaniques pour une hydratation longue durée.",
      de: "Feuchtigkeitscreme mit samtig-weicher Textur, die die Haut den ganzen Tag pflegt. Angereichert mit Sheabutter und pflanzlichen Wirkstoffen.",
      en: "Velvety moisturizing face cream that nourishes and protects skin all day. Enriched with shea butter and botanical actives for long-lasting hydration.",
      tr: "Cildi gün boyu besleyen ve koruyan kadifemsi dokulu nemlendirici yüz kremi. Shea yağı ve botanik aktiflerle zenginleştirilmiş."
    },
    rating: 4.5,
    reviews: 142
  },
  {
    id: 6,
    name: { fr: "Eau de Parfum Précieuse", de: "Kostbares Eau de Parfum", en: "Precious Eau de Parfum", tr: "Değerli Eau de Parfum" },
    price: 29.99,
    category: "beauty",
    images: [
      "images/new_parfum.jpg",
      "images/new_creme.jpg",
      "images/prod_1.jpg",
      "images/sec_skin4.jpg"
    ],
    description: {
      fr: "Eau de parfum à la composition florale et boisée, délicatement équilibrée. Notes de tête fraîches, cœur floral et fond musqué chaleureux. Longue tenue pour une présence subtile toute la journée.",
      de: "Eau de Parfum mit blumig-holziger Komposition. Frische Kopfnoten, florales Herz und warmer Moschus-Fond. Lange Haltbarkeit.",
      en: "Floral and woody eau de parfum, delicately balanced. Fresh top notes, floral heart and warm musky base. Long-lasting for subtle all-day presence.",
      tr: "Çiçeksi ve odunsu notaların zarif dengesiyle oluşturulmuş eau de parfum. Taze üst nota, çiçeksi kalp ve sıcak misk dibi. Gün boyu hafif ve uzun kalıcı."
    },
    rating: 4.9,
    reviews: 178
  }
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function formatPrice(price) {
  return '€' + price.toFixed(2).replace('.', ',');
}

function getProductName(product, lang) {
  return product.name[lang] || product.name['en'];
}

function getProductDesc(product, lang) {
  return product.description[lang] || product.description['en'];
}

function renderProductCards(lang) {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((product, index) => `
    <div class="product-card animate-on-scroll" data-delay="${0.1 + index * 0.1}">
      <a href="urun.html?id=${product.id}" style="text-decoration:none;display:block;">
        <div class="product-image">
          <img src="${product.images[0]}" alt="${getProductName(product, lang)}" loading="lazy">
        </div>
      </a>
      <div class="product-info">
        <h3>${getProductName(product, lang)}</h3>
        <div class="product-price">${formatPrice(product.price)}</div>
        <div class="product-stars">
          ${renderStars(product.rating)}
          <span class="product-reviews">(${product.reviews})</span>
        </div>
        <div class="product-actions">
          <a href="urun.html?id=${product.id}" class="btn-primary btn-sm">${translations[lang]?.buy_now || 'Acheter Maintenant'}</a>
          <button class="btn-outline btn-sm" onclick="Cart.addItem({id:${product.id},name:'${getProductName(product, lang).replace(/'/g, "\\'")}',price:${product.price},image:'${product.images[0]}'})">${translations[lang]?.add_to_cart || 'Ajouter au Panier'}</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) {
    html += `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  }
  if (half) {
    html += `<svg fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  }
  return html;
}

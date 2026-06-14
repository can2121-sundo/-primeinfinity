/* ============================================
   PrimeInfinity — Product Data & Catalog
   Top 20 — Swedish Nutra RSL EU (Mart 2026)
   Fiyatlar: tedarikçi RRP · Stok: 1 koli başlangıç
   ============================================ */

const PRODUCTS_ARCHIVE = [
  {
    id: 1, sku: 1210,
    name: { fr: "Collagène Marin Liquide 10 000 mg", de: "Flüssiges Marines Kollagen 10 000 mg", en: "Liquid Marine Collagen 10 000 mg", tr: "Sıvı Deniz Kolajeni 10 000 mg" },
    price: 35.95, category: "collagen",
    images: ["images/products/1210.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Collagène marin hydrolysé 10 000 mg en format liquide 500 ml, sans sucre, enrichi en acide hyaluronique et sélénium. Goût fruits rouges, dose journalière pratique.",
      de: "Hydrolysiertes marines Kollagen 10 000 mg als 500-ml-Liquid, zuckerfrei, mit Hyaluronsäure und Selen. Beerengeschmack, praktische Tagesdosis.",
      en: "Hydrolysed marine collagen 10 000 mg in a 500 ml liquid format, sugar free, with hyaluronic acid and selenium. Berry flavour, convenient daily dose.",
      tr: "500 ml sıvı formda 10 000 mg hidrolize deniz kolajeni; şekersiz, hyaluronik asit ve selenyum ilaveli. Orman meyveli, pratik günlük doz."
    },
    rating: 4.8, reviews: 0
  },
  {
    id: 2, sku: 2697,
    name: { fr: "Collagène Marin 12 500 mg", de: "Marines Kollagen 12 500 mg", en: "Marine Collagen 12 500 mg", tr: "Deniz Kolajeni 12 500 mg" },
    price: 40.50, category: "collagen",
    images: ["images/products/2697.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Formule haute dose : 12 500 mg de collagène marin hydrolysé par dose, sans sucre, en bouteille de 500 ml.",
      de: "Hochdosierte Formel: 12 500 mg hydrolysiertes marines Kollagen pro Portion, zuckerfrei, 500-ml-Flasche.",
      en: "High-dose formula: 12 500 mg hydrolysed marine collagen per serving, sugar free, 500 ml bottle.",
      tr: "Yüksek dozlu formül: porsiyon başına 12 500 mg hidrolize deniz kolajeni, şekersiz, 500 ml şişe."
    },
    rating: 4.8, reviews: 0
  },
  {
    id: 3, sku: 2594,
    name: { fr: "Collagène Marin 15 000 mg", de: "Marines Kollagen 15 000 mg", en: "Marine Collagen 15 000 mg", tr: "Deniz Kolajeni 15 000 mg" },
    price: 49.95, category: "collagen",
    images: ["images/products/2594.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Notre dose la plus élevée : 15 000 mg de collagène marin par portion. Format liquide 500 ml sans sucre pour une routine beauté premium.",
      de: "Unsere höchste Dosierung: 15 000 mg marines Kollagen pro Portion. Zuckerfreies 500-ml-Liquid für die Premium-Beautyroutine.",
      en: "Our highest dose: 15 000 mg marine collagen per serving. Sugar-free 500 ml liquid for a premium beauty routine.",
      tr: "En yüksek dozumuz: porsiyon başına 15 000 mg deniz kolajeni. Premium güzellik rutini için şekersiz 500 ml sıvı format."
    },
    rating: 4.9, reviews: 0
  },
  {
    id: 4, sku: 2534,
    name: { fr: "Collagène Marin Gold Retinol 12 500 mg", de: "Marines Kollagen Gold Retinol 12 500 mg", en: "Marine Collagen Gold Retinol 12 500 mg", tr: "Deniz Kolajeni Gold Retinol 12 500 mg" },
    price: 40.50, category: "collagen",
    images: ["images/products/2534.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Collagène marin 12 500 mg associé au rétinol : le duo beauté par excellence en format liquide 500 ml sans sucre.",
      de: "Marines Kollagen 12 500 mg kombiniert mit Retinol: das Beauty-Duo schlechthin, zuckerfreies 500-ml-Liquid.",
      en: "Marine collagen 12 500 mg combined with retinol: the ultimate beauty duo in a sugar-free 500 ml liquid.",
      tr: "Retinol ile birleştirilmiş 12 500 mg deniz kolajeni: şekersiz 500 ml sıvı formda güçlü güzellik ikilisi."
    },
    rating: 4.7, reviews: 0
  },
  {
    id: 5, sku: 2634,
    name: { fr: "Collagène Marin Menoplus", de: "Marines Kollagen Menoplus", en: "Marine Collagen Menoplus", tr: "Deniz Kolajeni Menoplus" },
    price: 37.80, category: "collagen",
    images: ["images/products/2634.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Collagène marin formulé pour accompagner les femmes pendant la ménopause. Liquide 500 ml sans sucre.",
      de: "Marines Kollagen, formuliert zur Begleitung von Frauen in den Wechseljahren. Zuckerfreies 500-ml-Liquid.",
      en: "Marine collagen formulated to support women through menopause. Sugar-free 500 ml liquid.",
      tr: "Menopoz dönemindeki kadınlar için formüle edilmiş deniz kolajeni. Şekersiz 500 ml sıvı."
    },
    rating: 4.7, reviews: 0
  },
  {
    id: 6, sku: 2482,
    name: { fr: "Joint Support Max — Articulations", de: "Joint Support Max — Gelenke", en: "Joint Support Max", tr: "Joint Support Max — Eklem Desteği" },
    price: 31.95, category: "collagen",
    images: ["images/products/2482.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Formule liquide complète pour le confort articulaire, sans sucre, en bouteille de 500 ml.",
      de: "Komplette flüssige Formel für den Gelenkkomfort, zuckerfrei, in der 500-ml-Flasche.",
      en: "Complete liquid formula for joint comfort, sugar free, in a 500 ml bottle.",
      tr: "Eklem konforu için eksiksiz sıvı formül; şekersiz, 500 ml şişede."
    },
    rating: 4.6, reviews: 0
  },
  {
    id: 7, sku: 2633,
    name: { fr: "Magnésium Bisglycinate Liquide", de: "Magnesiumbisglycinat Flüssig", en: "Liquid Magnesium Bisglycinate", tr: "Sıvı Magnezyum Bisglisinat" },
    price: 24.95, category: "vitamins",
    images: ["images/products/2633.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Magnésium sous forme bisglycinate hautement assimilable, en format liquide 500 ml facile à doser.",
      de: "Magnesium in gut verwertbarer Bisglycinat-Form, als leicht dosierbares 500-ml-Liquid.",
      en: "Magnesium in highly absorbable bisglycinate form, in an easy-to-dose 500 ml liquid.",
      tr: "Yüksek emilimli bisglisinat formunda magnezyum; kolay dozlanan 500 ml sıvı format."
    },
    rating: 4.7, reviews: 0
  },
  {
    id: 8, sku: 2718,
    name: { fr: "Multivitamines Max Strength Ultra+", de: "Multivitamin Max Strength Ultra+", en: "Max Strength Ultra+ Multivitamin", tr: "Max Strength Ultra+ Multivitamin" },
    price: 29.95, category: "vitamins",
    images: ["images/products/2718.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Multivitamines liquides tout-en-un à haute concentration. Une seule dose quotidienne, sans comprimés à avaler.",
      de: "Hochkonzentriertes All-in-One-Flüssigmultivitamin. Eine Tagesdosis, ohne Tablettenschlucken.",
      en: "High-strength all-in-one liquid multivitamin. One daily dose, no pills to swallow.",
      tr: "Yüksek konsantrasyonlu hepsi-bir-arada sıvı multivitamin. Hap yutmadan tek günlük doz."
    },
    rating: 4.6, reviews: 0
  },
  {
    id: 9, sku: 2715,
    name: { fr: "Multivitamines Homme + Testostérone", de: "Männer-Multivitamin + Testosteron", en: "Man Multivitamin + Testosterone Support", tr: "Erkek Multivitamin + Testosteron Desteği" },
    price: 29.95, category: "vitamins",
    images: ["images/products/2715.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Multivitamines liquides conçues pour les hommes, avec des actifs ciblés pour la vitalité masculine. 500 ml.",
      de: "Flüssiges Multivitamin für Männer mit gezielten Wirkstoffen für die männliche Vitalität. 500 ml.",
      en: "Liquid multivitamin designed for men, with targeted actives for male vitality. 500 ml.",
      tr: "Erkekler için tasarlanmış sıvı multivitamin; erkek vitalitesine yönelik hedefli aktifler. 500 ml."
    },
    rating: 4.6, reviews: 0
  },
  {
    id: 10, sku: 2714,
    name: { fr: "Multivitamines Femme + Cheveux", de: "Frauen-Multivitamin + Haar", en: "Woman Multivitamin + Hair Support", tr: "Kadın Multivitamin + Saç Desteği" },
    price: 29.95, category: "vitamins",
    images: ["images/products/2714.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Multivitamines liquides pour femmes enrichies d'actifs dédiés à la beauté des cheveux. 500 ml.",
      de: "Flüssiges Multivitamin für Frauen, angereichert mit Wirkstoffen für schönes Haar. 500 ml.",
      en: "Liquid multivitamin for women enriched with actives dedicated to hair beauty. 500 ml.",
      tr: "Saç güzelliğine özel aktiflerle zenginleştirilmiş kadınlara özel sıvı multivitamin. 500 ml."
    },
    rating: 4.7, reviews: 0
  },
  {
    id: 11, sku: 2719,
    name: { fr: "Hair Skin & Nails Luxe", de: "Hair Skin & Nails Luxe", en: "Hair Skin & Nails Luxe", tr: "Hair Skin & Nails Luxe — Saç Cilt Tırnak" },
    price: 24.95, category: "vitamins",
    images: ["images/products/2719.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Le classique beauté en version liquide : formule dédiée aux cheveux, à la peau et aux ongles. 500 ml.",
      de: "Der Beauty-Klassiker als Liquid: Formel für Haare, Haut und Nägel. 500 ml.",
      en: "The beauty classic in liquid form: a formula dedicated to hair, skin and nails. 500 ml.",
      tr: "Güzellik klasiği sıvı formda: saç, cilt ve tırnaklara özel formül. 500 ml."
    },
    rating: 4.6, reviews: 0
  },
  {
    id: 12, sku: 2720,
    name: { fr: "Acide Hyaluronique Luxe", de: "Hyaluronsäure Luxe", en: "Hyaluronic Acid Luxe", tr: "Hyaluronik Asit Luxe" },
    price: 24.95, category: "vitamins",
    images: ["images/products/2720.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Acide hyaluronique en format liquide 500 ml — l'hydratation de l'intérieur pour une routine beauté complète.",
      de: "Hyaluronsäure als 500-ml-Liquid — Feuchtigkeit von innen für die komplette Beautyroutine.",
      en: "Hyaluronic acid in a 500 ml liquid format — hydration from within for a complete beauty routine.",
      tr: "500 ml sıvı formda hyaluronik asit — içten dışa nem desteğiyle eksiksiz güzellik rutini."
    },
    rating: 4.6, reviews: 0
  },
  {
    id: 13, sku: 2721,
    name: { fr: "Probiotiques Encapsulés Max", de: "Verkapselte Probiotika Max", en: "Encapsulated Probiotics Max", tr: "Kapsüllenmiş Probiyotik Max" },
    price: 24.95, category: "vitamins",
    images: ["images/products/2721.png"],
    inStock: true, stock: 16,
    description: {
      fr: "Probiotiques encapsulés en suspension liquide : une approche moderne du bien-être digestif. 500 ml.",
      de: "Verkapselte Probiotika in flüssiger Suspension: ein moderner Ansatz für das Verdauungswohl. 500 ml.",
      en: "Encapsulated probiotics in liquid suspension: a modern approach to digestive wellbeing. 500 ml.",
      tr: "Sıvı süspansiyonda kapsüllenmiş probiyotikler: sindirim konforuna modern yaklaşım. 500 ml."
    },
    rating: 4.5, reviews: 0
  },
  {
    id: 14, sku: 1150,
    name: { fr: "Collagène Marin en Poudre 300 g", de: "Marines Kollagenpulver 300 g", en: "Marine Collagen Powder 300 g", tr: "Toz Deniz Kolajeni 300 g" },
    price: 32.95, category: "collagen",
    images: ["images/products/1150.png"],
    inStock: true, stock: 18,
    description: {
      fr: "Collagène marin en poudre neutre, à mélanger dans café, smoothie ou eau. Pot de 300 g, environ 30 jours.",
      de: "Neutrales marines Kollagenpulver zum Einrühren in Kaffee, Smoothie oder Wasser. 300-g-Dose, ca. 30 Tage.",
      en: "Neutral marine collagen powder to mix into coffee, smoothies or water. 300 g jar, approx. 30-day supply.",
      tr: "Kahveye, smoothie'ye veya suya karıştırılan nötr tatlı toz deniz kolajeni. 300 g kavanoz, yaklaşık 30 günlük."
    },
    rating: 4.7, reviews: 0
  },
  {
    id: 15, sku: 2478,
    name: { fr: "Shots Collagène Marin 10 000 mg (30x25 ml)", de: "Marine Kollagen Shots 10 000 mg (30x25 ml)", en: "Marine Collagen Shots 10 000 mg (30x25 ml)", tr: "Deniz Kolajeni Shot 10 000 mg (30x25 ml)" },
    price: 63.80, category: "shots",
    images: ["images/products/2478.png"],
    inStock: true, stock: 6,
    description: {
      fr: "Cure d'un mois : 30 shots de 25 ml dosés à 10 000 mg de collagène marin. Pratique, nomade, prêt à boire.",
      de: "Monatskur: 30 Shots à 25 ml mit je 10 000 mg marinem Kollagen. Praktisch, unterwegs, trinkfertig.",
      en: "One-month course: 30 x 25 ml shots with 10 000 mg marine collagen each. Convenient, on-the-go, ready to drink.",
      tr: "Bir aylık kür: her biri 10 000 mg deniz kolajeni içeren 30 adet 25 ml shot. Pratik, taşınabilir, içime hazır."
    },
    rating: 4.8, reviews: 0
  },
  {
    id: 16, sku: 2601,
    name: { fr: "Shots Collagène Marin 12 500 mg (30x25 ml)", de: "Marine Kollagen Shots 12 500 mg (30x25 ml)", en: "Marine Collagen Shots 12 500 mg (30x25 ml)", tr: "Deniz Kolajeni Shot 12 500 mg (30x25 ml)" },
    price: 71.82, category: "shots",
    images: ["images/products/2601.png"],
    inStock: true, stock: 6,
    description: {
      fr: "Cure premium d'un mois : 30 shots dosés à 12 500 mg de collagène marin hydrolysé.",
      de: "Premium-Monatskur: 30 Shots mit je 12 500 mg hydrolysiertem marinem Kollagen.",
      en: "Premium one-month course: 30 shots with 12 500 mg hydrolysed marine collagen each.",
      tr: "Premium aylık kür: her biri 12 500 mg hidrolize deniz kolajeni içeren 30 shot."
    },
    rating: 4.8, reviews: 0
  },
  {
    id: 17, sku: 2603,
    name: { fr: "Shots Collagène Marin 15 000 mg (30x25 ml)", de: "Marine Kollagen Shots 15 000 mg (30x25 ml)", en: "Marine Collagen Shots 15 000 mg (30x25 ml)", tr: "Deniz Kolajeni Shot 15 000 mg (30x25 ml)" },
    price: 95.80, category: "shots",
    images: ["images/products/2603.png"],
    inStock: true, stock: 6,
    description: {
      fr: "Notre cure la plus puissante : 30 shots de 15 000 mg de collagène marin avec rétinol et élastine. L'excellence en coffret doré.",
      de: "Unsere stärkste Kur: 30 Shots mit 15 000 mg marinem Kollagen, Retinol und Elastin. Exzellenz in der Goldbox.",
      en: "Our most powerful course: 30 shots of 15 000 mg marine collagen with retinol and elastin. Excellence in a golden box.",
      tr: "En güçlü kürümüz: retinol ve elastin ilaveli 15 000 mg deniz kolajeni içeren 30 shot. Altın kutuda mükemmellik."
    },
    rating: 4.9, reviews: 0
  },
  {
    id: 18, sku: 2453,
    name: { fr: "Collagen Deluxe Shots (30x25 ml)", de: "Collagen Deluxe Shots (30x25 ml)", en: "Collagen Deluxe Shots (30x25 ml)", tr: "Collagen Deluxe Shot (30x25 ml)" },
    price: 89.99, category: "shots",
    images: ["images/products/2453.png"],
    inStock: true, stock: 6,
    description: {
      fr: "La cure Deluxe signée Swedish Collagen : 30 shots de collagène marin dans un écrin rose poudré, pensée pour la beauté féminine.",
      de: "Die Deluxe-Kur von Swedish Collagen: 30 marine Kollagen-Shots in zartrosa Verpackung, für die weibliche Schönheit.",
      en: "The Deluxe course by Swedish Collagen: 30 marine collagen shots in a soft-pink box, designed for feminine beauty.",
      tr: "Swedish Collagen imzalı Deluxe kür: pudra pembesi kutuda 30 deniz kolajeni shotu, kadın güzelliği için tasarlandı."
    },
    rating: 4.8, reviews: 0
  },
  {
    id: 19, sku: 2606,
    name: { fr: "Collagen Retinol Shots (30x25 ml)", de: "Collagen Retinol Shots (30x25 ml)", en: "Collagen Retinol Shots (30x25 ml)", tr: "Collagen Retinol Shot (30x25 ml)" },
    price: 99.99, category: "shots",
    images: ["images/products/2606.png"],
    inStock: true, stock: 6,
    description: {
      fr: "Cure de luxe d'un mois associant collagène marin et rétinol : le rituel beauté ultime signé Swedish Collagen.",
      de: "Luxus-Monatskur mit marinem Kollagen und Retinol: das ultimative Beauty-Ritual von Swedish Collagen.",
      en: "Luxury one-month course combining marine collagen and retinol: the ultimate beauty ritual by Swedish Collagen.",
      tr: "Deniz kolajeni ile retinolü birleştiren lüks aylık kür: Swedish Collagen imzalı nihai güzellik ritüeli."
    },
    rating: 4.9, reviews: 0
  },
  {
    id: 20, sku: 2523,
    name: { fr: "Crème de Jour au Rétinol 50 ml", de: "Retinol-Tagescreme 50 ml", en: "Retinol Day Cream 50 ml", tr: "Retinol Gündüz Kremi 50 ml" },
    price: 29.95, category: "cosmetics",
    images: ["images/products/2523.png"],
    inStock: true, stock: 20,
    description: {
      fr: "Crème de jour au rétinol pour lisser le grain de peau et illuminer le teint. Pot de 50 ml, étiquette multilingue.",
      de: "Retinol-Tagescreme für ein glatteres Hautbild und einen strahlenden Teint. 50-ml-Tiegel.",
      en: "Retinol day cream to smooth skin texture and brighten the complexion. 50 ml jar.",
      tr: "Cilt dokusunu pürüzsüzleştiren ve teni aydınlatan retinollü gündüz kremi. 50 ml kavanoz."
    },
    rating: 4.6, reviews: 0
  }
];


/* Mağaza/Boutique'te 10 farklı ürün gösteriliyor (değişik türler).
   Tüm 20 ürün için:  const PRODUCTS = PRODUCTS_ARCHIVE;  yap. */
const PRODUCTS = PRODUCTS_ARCHIVE.filter(function (p) {
  return [1, 3, 7, 8, 11, 12, 13, 14, 17, 20].indexOf(p.id) !== -1;
});

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
        ${product.inStock !== false && (product.stock === undefined || product.stock > 0) ? `<div class="product-stock"><span class="stock-dot"></span>${translations[lang]?.in_stock || 'En stock'}${typeof product.stock === 'number' ? ' · ' + product.stock : ''}</div>` : `<div class="product-stock" style="color:#ff4444;">${translations[lang]?.out_of_stock || 'Rupture de stock'}</div>`}
        ${product.reviews > 0 ? `<div class="product-stars">${renderStars(product.rating)}<span class="product-reviews">(${product.reviews})</span></div>` : ''}
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

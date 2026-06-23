/* ============================================
   PrimeInfinity — Product Data & Catalog
   Sipariş Verilen Ürünler (Swedish Nutra)
   ============================================ */

const PRODUCTS_ARCHIVE = [
  {
    id: 2428, sku: 2428,
    name: {
      fr: "Swedish Nutra - Collagène 10 000 (Marin) Sans Sucre 2.2 - 500 ml",
      en: "Swedish Nutra - Collagen 10 000 (Marine) Sugar Free 2.2 - 500 ml",
      de: "Swedish Nutra - Kollagen 10 000 (Marin) Zuckerfrei 2.2 - 500 ml",
      it: "Swedish Nutra - Collagene 10 000 (Marino) Senza Zucchero 2.2 - 500 ml",
      tr: "Swedish Nutra - Kollajen 10 000 (Deniz) Şekersiz 2.2 - 500 ml"
    },
    price: 35.95, category: "collagen",
    images: [
      "images/products/2428_01.webp",
      "images/products/2428_02.webp",
      "images/products/2428_03.webp",
      "images/products/2428_04.webp"
    ],
    inStock: true, stock: 16,
    description: {
      fr: "Supplément de collagène marin liquide de type I & III pour soutenir la peau, les cheveux, les ongles et les articulations. Formulation à haute absorption et faible poids moléculaire, idéale pour votre routine de beauté quotidienne.",
      en: "Liquid marine collagen supplement Type I & III to support skin, hair, nails, and joints. High absorption and low molecular weight formula, ideal for your daily beauty and care routine.",
      de: "Flüssiges marines Kollagen-Nahrungsergänzungsmittel Typ I & III zur Unterstützung von Haut, Haaren, Nägeln und Gelenken. Hohe Absorption und niedriges Molekulargewicht, ideal für Ihre tägliche Routine.",
      it: "Integratore di collagene marino liquido Tipo I & III per sostenere pelle, capelli, unghie e articolazioni. Formula ad alto assorbimento e basso peso molecolare, ideale per la tua routine quotidiana.",
      tr: "Sıvı formda deniz kolajeni takviyesidir. Tip I & III kolajen desteğiyle cilt, saç, tırnak ve eklem yapısını desteklemeye yöneliktir. Düşük molekül ağırlığı ve yüksek emilimli formülüyle günlük bakım rutini için idealdir."
    },
    rating: 4.8, reviews: 0
  },
  {
    id: 2697, sku: 2697,
    name: {
      fr: "Swedish Nutra - Collagène Marin 12 500 mg Sans Sucre - 500 ml",
      en: "Swedish Nutra - Marine Collagen 12 500 mg Sugar Free - 500 ml",
      de: "Swedish Nutra - Marines Kollagen 12 500 mg Zuckerfrei - 500 ml",
      it: "Swedish Nutra - Collagene Marino 12 500 mg Senza Zucchero - 500 ml",
      tr: "Swedish Nutra - Deniz Kolajeni 12 500 mg Şekersiz - 500 ml"
    },
    price: 40.50, category: "collagen",
    images: [
      "images/products/2697_01.webp",
      "images/products/2697_02.webp",
      "images/products/2697_03.webp",
      "images/products/2697_04.webp"
    ],
    inStock: true, stock: 16,
    description: {
      fr: "Formule premium de collagène marin hautement dosée à 12 500 mg, enrichie en élastine, astaxanthine, vitamine K2 et D3 pour le bien-être général, l'élasticité de la peau et le soutien des cheveux.",
      en: "Premium marine collagen formula with a high dose of 12,500 mg, enriched with elastin, astaxanthin, vitamin K2, and D3 for general wellness, skin elasticity, and hair support.",
      de: "Premium-Formel mit 12.500 mg marinem Kollagen, angereichert mit Elastin, Astaxanthin, Vitamin K2 und D3 für Hautelastizität, Haare und allgemeines Wohlbefinden.",
      it: "Formula premium di collagene marino ad alto dosaggio di 12.500 mg, arricchita con elastina, astaxantina, vitamina K2 e D3 per l'elasticità della pelle, i capelli e il benessere generale.",
      tr: "Premium deniz kolajeni ailesinden 12.500 mg hidrolize deniz kolajeni takviyesidir. Elastin, astaksantin, vitamin K2 ve D3 gibi destekleyici aktiflerle zenginleştirilmiş formülüyle cilt esnekliğini ve saçları destekler."
    },
    rating: 4.8, reviews: 0
  },
  {
    id: 2719, sku: 2719,
    name: {
      fr: "Swedish Nutra - Hair, Skin and Nails Luxe - 500 ml",
      en: "Swedish Nutra - Hair, Skin and Nails Luxe - 500 ml",
      de: "Swedish Nutra - Hair, Skin and Nails Luxe - 500 ml",
      it: "Swedish Nutra - Hair, Skin and Nails Luxe - 500 ml",
      tr: "Swedish Nutra - Hair, Skin and Nails Luxe - 500 ml"
    },
    price: 24.95, category: "vitamins",
    images: [
      "images/products/2719_01.webp",
      "images/products/2719_02.webp",
      "images/products/2719_03.webp",
      "images/products/2719_04.webp"
    ],
    inStock: true, stock: 16,
    description: {
      fr: "Formule liquide 6-en-1 premium contenant 10 000 mcg de biotine et 2 500 mg de collagène marin hydrolysé, enrichie en acide hyaluronique, coenzyme Q10 et vitamines pour sublimer les cheveux, la peau et les ongles. Saveur fruits tropicaux.",
      en: "Premium 6-in-1 liquid formula containing 10,000 mcg biotin and 2,500 mg hydrolysed marine collagen, enriched with hyaluronic acid, coenzyme Q10, and vitamins for hair, skin, and nails. Tropical fruit flavour.",
      de: "Premium 6-in-1 flüssige Formel mit 10.000 mcg Biotin und 2.500 mg hydrolysiertem marinem Kollagen, angereichert mit Hyaluronsäure, CoQ10 und Vitaminen für Haare, Haut und Nägel. Tropischer Fruchtgeschmack.",
      it: "Formula liquida premium 6-in-1 contenente 10.000 mcg di biotina e 2.500 mg di collagene marino idrolizzato, arricchita con acido ialuronico, CoQ10 e vitamine per capelli, pelle e unghie. Gusto frutti tropicali.",
      tr: "Saç, cilt ve tırnak desteği için premium 6'sı 1 arada sıvı takviyedir. 10.000 mcg biotin ve 2.500 mg hidrolize deniz kolajeninin yanı sıra hyaluronik asit, CoQ10 ve B vitaminleri ile saç köklerini, cilt nemini ve tırnak gücünü destekler."
    },
    rating: 4.6, reviews: 0
  },
  {
    id: 2594, sku: 2594,
    name: {
      fr: "Swedish Nutra - Collagène Marin 15 000 mg Sans Sucre - 500 ml",
      en: "Swedish Nutra - Marine Collagen 15 000 mg Sugar Free - 500 ml",
      de: "Swedish Nutra - Marines Kollagen 15 000 mg Zuckerfrei - 500 ml",
      it: "Swedish Nutra - Collagene Marino 15 000 mg Senza Zucchero - 500 ml",
      tr: "Swedish Nutra - Deniz Kolajeni 15 000 mg Şekersiz - 500 ml"
    },
    price: 49.95, category: "collagen",
    images: [
      "images/products/2594_01.webp",
      "images/products/2594_02.webp",
      "images/products/2594_03.webp",
      "images/products/2594_04.webp"
    ],
    inStock: true, stock: 16,
    description: {
      fr: "Notre collagène marin liquide le plus puissant dosé à 15 000 mg par portion. Formule d'élite conçue pour un soutien intensif de la fermeté de la peau, de la brillance des cheveux et de la solidité des articulations. Saveur pomme.",
      en: "Our most powerful liquid marine collagen with 15,000 mg per serving. Elite formula designed for intensive support of skin firmness, hair shine, and joint strength. Delicious apple flavour.",
      de: "Unser stärkstes flüssiges marines Kollagen mit 15.000 mg pro Portion. Elite-Formel für die intensive Unterstützung von Hautstraffung, Haarglanz und Gelenkstärke. Apfelgeschmack.",
      it: "Il nostro collagene marino liquido più potente con 15.000 mg per porzione. Formula d'élite progettata per il supporto intensivo di compattezza della pelle, lucentezza dei capelli e articolazioni. Gusto mela.",
      tr: "Deniz kolajeni ailesinin en yüksek dozlu 15.000 mg ürünüdür. Cilt, saç ve tırnak desteğinin yanında daha yoğun kolajen rutini ve eklem desteği isteyenler için tasarlanmış amiral gemisi üründür. Yeşil elma aromalıdır."
    },
    rating: 4.9, reviews: 0
  },
  {
    id: 2718, sku: 2718,
    name: {
      fr: "Swedish Nutra - Multivitamines Max Strength Ultra+ - 500 ml",
      en: "Swedish Nutra - Max Strength Ultra+ Multivitamin - 500 ml",
      de: "Swedish Nutra - Max Strength Ultra+ Multivitamin - 500 ml",
      it: "Swedish Nutra - Multivitaminico Max Strength Ultra+ - 500 ml",
      tr: "Swedish Nutra - Max Strength Ultra+ Multivitamin - 500 ml"
    },
    price: 29.95, category: "vitamins",
    images: [
      "images/products/2718_01.webp",
      "images/products/2718_02.webp",
      "images/products/2718_03.webp",
      "images/products/2718_04.webp"
    ],
    inStock: true, stock: 16,
    description: {
      fr: "Formule multivitaminée liquide ultra-concentrée avec 126 ingrédients actifs, incluant du ginseng, des acides aminés et des superaliments. Soutient l'énergie, l'immunité, la concentration et la santé globale. Saveur orange.",
      en: "Ultra-concentrated liquid multivitamin formula with 126 active ingredients, including ginseng, amino acids, and organic superfoods. Supports energy, immunity, mental focus, and cardiovascular health. Orange flavour.",
      de: "Hochkonzentrierte flüssige Multivitaminformel mit 126 Wirkstoffen, einschließlich Ginseng, Aminosäuren und Superfoods. Unterstützt Energie, Immunität, Fokus und allgemeine Gesundheit. Orangengeschmack.",
      it: "Formula multivitaminica liquida ultra-concentrata con 126 ingredienti attivi, tra cui ginseng, aminoacidi e superalimenti. Sostiene energia, difese immunitarie, concentrazione e salute cardiovascolare. Gusto arancia.",
      tr: "Ultra zengin içerikli sıvı multivitamin formülüdür. 126 aktif içerik, ginseng, amino asitler ve organik süper gıda karışımları içerir. Enerji, bağışıklık, kas-eklem ve kalp sağlığı alanlarını desteklemek üzere tasarlanmıştır. Portakal aromalıdır."
    },
    rating: 4.6, reviews: 0
  },
  {
    id: 2633, sku: 2633,
    name: {
      fr: "Swedish Nutra - Bisglycinate de Magnésium - 500 ml",
      en: "Swedish Nutra - Magnesium Bisglycinate - 500 ml",
      de: "Swedish Nutra - Magnesiumbisglycinat - 500 ml",
      it: "Swedish Nutra - Bisglicinato di Magnesio - 500 ml",
      tr: "Swedish Nutra - Magnezyum Bisglisinat - 500 ml"
    },
    price: 24.95, category: "vitamins",
    images: [
      "images/products/2633_01.webp",
      "images/products/2633_02.webp",
      "images/products/2633_03.webp",
      "images/products/2633_04.webp"
    ],
    inStock: true, stock: 16,
    description: {
      fr: "Bisglycinate de magnésium liquide hautement assimilable (400 mg par dose), enrichi en L-théanine, L-tryptophane, vitamines C et D3. Favorise la relaxation musculaire, réduit la fatigue et améliore la qualité du sommeil. Formule vegan saveur orange.",
      en: "Highly absorbable liquid magnesium bisglycinate (400 mg per serving), enriched with L-theanine, L-tryptophan, vitamin C, and D3. Helps reduce fatigue, supports muscle function, relaxation, and sleep. Vegan, orange flavour.",
      de: "Gut absorbierbares flüssiges Magnesiumbisglycinat (400 mg pro Portion), angereichert mit L-Theanin, L-Tryptophan, Vitamin C und D3. Unterstützt Muskeln, Nervensystem, Entspannung und Schlafqualität. Vegan, Orangengeschmack.",
      it: "Bisglicinato di magnesio liquido ad alta assimilabilità (400 mg per porzione), arricchito con L-teanina, L-tryptophan, vitamine C e D3. Aiuta a ridurre la stanchezza, sostiene i muscoli, il rilassamento e il sonno. Vegano, gusto arancia.",
      tr: "Yüksek emilim odaklı sıvı magnezyum bisglisinat takviyesidir. 400 mg elemental magnezyumun yanı sıra L-theanine, L-tyrosine, L-tryptophan, vitamin C ve D3 içerir. Kas fonksiyonları, sinir sistemi, rahatlama ve uyku rutini desteği için idealdir. Vegan formdadır, portakal aromalıdır."
    },
    rating: 4.7, reviews: 0
  }
];

const PRODUCTS = PRODUCTS_ARCHIVE;

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

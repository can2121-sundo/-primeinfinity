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
      fr: "Complément alimentaire liquide de collagène marin hydrolysé premium (Type I & III, 10 000 mg par dose quotidienne de 25 ml), sans sucre. Enrichi en acide hyaluronique, biotine (5 000 mcg), vitamines C, B5, B6, B12, D3, silice et sélénium. Une bouteille de 500 ml offre 20 doses journalières de 25 ml (gobelet doseur inclus sur le bouchon). Agiter avant utilisation.",
      en: "Premium liquid hydrolysed marine collagen food supplement (Type I & III, 10,000 mg per 25 ml daily dose), sugar-free. Enriched with hyaluronic acid, biotin (5,000 mcg), vitamins C, B5, B6, B12, D3, silica, and selenium. One 500 ml bottle provides 20 daily servings of 25 ml (measuring cup included on the cap). Shake well before use.",
      de: "Premium flüssiges hydrolysiertes marines Kollagen-Nahrungsergänzungsmittel (Typ I & III, 10.000 mg pro 25 ml Tagesdosis), zuckerfrei. Angereichert mit Hyaluronsäure, Biotin (5.000 mcg), Vitaminen C, B5, B6, B12, D3, Kieselgel und Selen. Eine 500-ml-Flasche enthält 20 Tagesdosen von 25 ml (Messbecher auf dem Verschluss enthalten). Vor Gebrauch gut schütteln.",
      it: "Integratore alimentare liquido di collagene marino idrolizzato premium (Tipo I & III, 10.000 mg per dose giornaliera di 25 ml), senza zucchero. Arricchito con acido ialuronico, biotina (5.000 mcg), vitamine C, B5, B6, B12, D3, silice e selenio. Una bottiglia da 500 ml fornisce 20 dosi giornaliere da 25 ml (misurino incluso sul tappo). Agitare bene prima dell'uso.",
      tr: "Sıvı formda premium hidrolize deniz kolajeni (Tip I & III, 25 ml'lik günlük doz başına 10.000 mg) takviyesidir, şekersizdir. Hyaluronik asit, biotin (5.000 mcg), C, B5, B6, B12, D3 vitaminleri, silis ve selenyum ile zenginleştirilmiştir. 500 ml'lik şişe, 25 ml'lik tam 1 ölçek üzerinden 20 günlük kullanım sunar (ölçek kabı kapak üzerindedir). Kullanmadan önce çalkalayınız."
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
      fr: "Formule liquide hautement dosée à 12 500 mg de collagène marin hydrolysé par dose de 25 ml, sans sucre. Enrichie en élastine, astaxanthine, acide hyaluronique, biotine (5 000 mcg), vitamines C, D3, K2, silice et sélénium pour la fermeté de la peau et la beauté des cheveux. Une bouteille de 500 ml offre 20 doses de 25 ml (gobelet doseur inclus sur le bouchon). Agiter avant utilisation.",
      en: "Highly dosed liquid formula with 12,500 mg of hydrolysed marine collagen per 25 ml dose, sugar-free. Enriched with elastin, astaxanthin, hyaluronic acid, biotin (5,000 mcg), vitamins C, D3, K2, silica, and selenium for skin firmness and hair beauty. One 500 ml bottle provides 20 servings of 25 ml (measuring cup included on the cap). Shake well before use.",
      de: "Hochdosierte flüssige Formel mit 12.500 mg hydrolysiertem marinem Kollagen pro 25 ml Dosis, zuckerfrei. Angereichert mit Elastin, Astaxanthin, Hyaluronsäure, Biotin (5.000 mcg), Vitaminen C, D3, K2, Kieselgel und Selen für Hautstraffung und Haarschönheit. Eine 500-ml-Flasche bietet 20 Portionen à 25 ml (Messbecher auf dem Verschluss enthalten). Vor Gebrauch gut schütteln.",
      it: "Formula liquida ad alto dosaggio con 12.500 mg di collagene marino idrolizzato per dose da 25 ml, senza zucchero. Arricchita con elastina, astaxantina, acido ialuronico, biotina (5.000 mcg), vitamine C, D3, K2, silice e selenio per l'elasticità cutanea e la bellezza dei capelli. Una bottiglia da 500 ml fornisce 20 dosi da 25 ml (misurino incluso sul tappo). Agitare bene prima dell'uso.",
      tr: "25 ml'lik tek bir dozda 12.500 mg hidrolize deniz kolajeni içeren yüksek dozlu sıvı takviyedir, şekersizdir. Elastin, astaksantin, hyaluronik asit, biotin (5.000 mcg), C, D3, K2 vitaminleri, silis ve selenyum ile cilt esnekliği ve saç sağlığı için özel olarak formüle edilmiştir. 500 ml'lik şişe, 25 ml'lik tam 1 ölçek üzerinden 20 günlük kullanım sunar (ölçek kabı kapak üzerindedir). Kullanmadan önce çalkalayınız."
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
      fr: "Formule beauté liquide premium 6-en-1 pour la vitalité des cheveux, de la peau et des ongles. Contient 10 000 mcg de biotine, 2 500 mg de collagène marin hydrolysé, acide hyaluronique, coenzyme Q10, MSM, silice et vitamines du groupe B. Une bouteille de 500 ml offre 20 doses de 25 ml (gobelet doseur inclus sur le bouchon). Saveur fruits tropicaux. Agiter avant utilisation.",
      en: "Premium 6-in-1 liquid beauty formula for hair, skin, and nail vitality. Contains 10,000 mcg biotin, 2,500 mg hydrolysed marine collagen, hyaluronic acid, CoQ10, MSM, silica, and B-complex vitamins. One 500 ml bottle provides 20 servings of 25 ml (measuring cup included on the cap). Tropical fruit flavour. Shake well before use.",
      de: "Premium 6-in-1 flüssige Schönheitsformel für Haare, Haut und Nägel. Enthält 10.000 mcg Biotin, 2.500 mg hydrolysiertes marines Kollagen, Hyaluronsäure, CoQ10, MSM, Kieselgel und B-Vitamine. Eine 500-ml-Flasche bietet 20 Portionen à 25 ml (Messbecher auf dem Verschluss enthalten). Tropischer Fruchtgeschmack. Vor Gebrauch gut schütteln.",
      it: "Formula di bellezza liquida premium 6-in-1 per la vitalità di capelli, pelle e unghie. Contiene 10.000 mcg di biotina, 2.500 mg di collagene marino idrolizzato, acido ialuronico, CoQ10, MSM, silice e vitamine B. Una bottiglia da 500 ml fornisce 20 dosi da 25 ml (misurino incluso sul tappo). Gusto frutti tropicali. Agitare bene prima dell'uso.",
      tr: "Saç, cilt ve tırnak canlılığı için geliştirilmiş 6'sı 1 arada sıvı premium güzellik formülüdür. 10.000 mcg biotin, 2.500 mg hidrolize deniz kolajeni, hyaluronik asit, CoQ10, MSM, silis ve B grubu vitaminleri içerir. 500 ml'lik şişe, 25 ml'lik tam 1 ölçek üzerinden 20 günlük kullanım sunar (ölçek kabı kapak üzerindedir). Tropikal meyve aromalıdır. Kullanmadan önce çalkalayınız."
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
      fr: "Notre collagène marin hydrolysé liquide le plus puissant et concentré, dosé à 15 000 mg par dose de 25 ml, sans sucre. Formule d'élite enrichie en acide hyaluronique, biotine (5 000 mcg), vitamines C, B5, B6, B12, D3, silice et sélénium pour un soutien intensif cutané et articulaire. Une bouteille de 500 ml offre 20 doses de 25 ml (gobelet doseur inclus sur le bouchon). Saveur pomme verte. Agiter avant utilisation.",
      en: "Our most powerful and concentrated liquid hydrolysed marine collagen, with 15,000 mg per 25 ml serving, sugar-free. Elite formula enriched with hyaluronic acid, biotin (5,000 mcg), vitamins C, B5, B6, B12, D3, silica, and selenium for intensive skin and joint support. One 500 ml bottle provides 20 doses of 25 ml (measuring cup included on the cap). Green apple flavour. Shake well before use.",
      de: "Unser stärkstes und am höchsten konzentriertes flüssiges hydrolysiertes marines Kollagen mit 15.000 mg pro 25 ml Portion, zuckerfrei. Elite-Formel angereichert mit Hyaluronsäure, Biotin (5.000 mcg), Vitaminen C, B5, B6, B12, D3, Kieselgel und Selen für intensive Haut- und Gelenkunterstützung. Eine 500-ml-Flasche bietet 20 Portionen à 25 ml (Messbecher auf dem Verschluss enthalten). Grüner Apfelgeschmack. Vor Gebrauch gut schütteln.",
      it: "Il nostro collagene marino idrolizzato liquido più potente e concentrato, con 15.000 mg per dose da 25 ml, senza zucchero. Formula d'élite arricchita con acido ialuronico, biotina (5.000 mcg), vitamine C, B5, B6, B12, D3, silice e selenio per un supporto intensivo di pelle e articolazioni. Una bottiglia da 500 ml fornisce 20 dosi da 25 ml (misurino incluso sul tappo). Gusto mela verde. Agitare bene prima dell'uso.",
      tr: "En yüksek konsantrasyona sahip amiral gemisi sıvı hidrolize deniz kolajenimizdir. 25 ml'lik tek bir dozda 15.000 mg deniz kolajeni içerir, şekersizdir. Yoğun cilt, saç ve eklem desteği için hyaluronik asit, biotin (5.000 mcg), C, B5, B6, B12, D3 vitaminleri, silis ve selenyum ile güçlendirilmiştir. 500 ml'lik şişe, 25 ml'lik tam 1 ölçek üzerinden 20 günlük kullanım sunar (ölçek kabı kapak üzerindedir). Yeşil elma aromalıdır. Kullanmadan önce çalkalayınız."
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
      fr: "Formule multivitaminée liquide ultra-concentrée haute performance. Contient 126 ingrédients actifs : vitamines essentielles, minéraux, acides aminés, ginseng et un mélange breveté de superaliments bio pour booster l'énergie, l'immunité et la vitalité globale. Une bouteille de 500 ml offre 33 doses de 15 ml (gobelet doseur inclus sur le bouchon). Saveur orange. Agiter avant utilisation.",
      en: "High-performance, ultra-concentrated liquid multivitamin formula. Features 126 active ingredients including essential vitamins, minerals, amino acids, ginseng, and an organic superfood blend to support energy, immunity, and overall vitality. One 500 ml bottle provides 33 daily doses of 15 ml (measuring cup included on the cap). Orange flavour. Shake well before use.",
      de: "Ultra-konzentrierte, leistungsstarke flüssige Multivitaminformel. Enthält 126 Wirkstoffe: essentielle Vitamine, Mineralien, Aminosäuren, Ginseng und eine Bio-Superfood-Mischung zur Unterstützung von Energie, Immunität und allgemeiner Vitalität. Eine 500-ml-Flasche enthält 33 Dosen à 15 ml (Messbecher auf dem Verschluss enthalten). Orangengeschmack. Vor Gebrauch gut schütteln.",
      it: "Formula multivitaminica liquida ultra-concentrata ad alte prestazioni. Contiene 126 ingredienti attivi: vitamine essenziali, minerali, aminoacidi, ginseng e una miscela biologica di superfood per supportare energia, sistema immunitario e vitalità generale. Una bottiglia da 500 ml fornisce 33 dosi da 15 ml (misurino incluso sul tappo). Gusto arancia. Agitare bene prima dell'uso.",
      tr: "Günlük yaşam kalitenizi artırmak için tasarlanmış yüksek performanslı sıvı multivitamin formülüdür. Vücut direnci, enerji ve genel sağlık desteği için 126 aktif bileşen (temel vitaminler, mineraller, amino asitler, ginseng ve organik süper gıda karışımı) içerir. 500 ml'lik şişe, 15 ml'lik tam 1 ölçek üzerinden 33 günlük kullanım sunar (ölçek kabı kapak üzerindedir). Portakal aromalıdır. Kullanmadan önce çalkalayınız."
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
      fr: "Bisglycinate de magnésium liquide hautement assimilable fournissant 400 mg de magnésium élémentaire par dose de 15 ml. Enrichi en vitamine C, D3, L-théanine, L-tryptophane et L-tyrosine pour favoriser la relaxation musculaire, réduire la fatigue et améliorer le sommeil. Formule 100% vegan. Une bouteille de 500 ml offre 33 doses de 15 ml (gobelet doseur inclus sur le bouchon). Saveur orange. Agiter avant utilisation.",
      en: "Highly bioavailable liquid magnesium bisglycinate providing 400 mg elemental magnesium per 15 ml dose. Enriched with vitamin C, D3, L-theanine, L-tryptophan, and L-tyrosine to support muscle relaxation, reduce fatigue, and promote deep sleep. 100% vegan formula. One 500 ml bottle provides 33 daily servings of 15 ml (measuring cup included on the cap). Orange flavour. Shake well before use.",
      de: "Hoch bioverfügbares flüssiges Magnesiumbisglycinat mit 400 mg elementarem Magnesium pro 15 ml Dosis. Angereichert mit Vitamin C, D3, L-Theanin, L-Tryptophan und L-Tyrosin zur Förderung der Muskelentspannung, Verringerung von Müdigkeit und Verbesserung des Schlafs. 100% vegane Formel. Eine 500-ml-Flasche bietet 33 Portionen à 15 ml (Messbecher auf dem Verschluss enthalten). Orangengeschmack. Vor Gebrauch gut schütteln.",
      it: "Bisglicinato di magnesio liquido ad alta biodisponibilità che fornisce 400 mg di magnesio elementare per dose da 15 ml. Arricchito con vitamina C, D3, L-teanina, L-triptofano e L-tirosina per favorire il rilassamento muscolare, ridurre l'affaticamento e migliorare il sonno. Formula 100% vegana. Una bottiglia da 500 ml fornisce 33 dosi da 15 ml (misurino incluso sul tappo). Gusto arancia. Agitare bene prima dell'uso.",
      tr: "Yüksek emilim odaklı sıvı magnezyum bisglisinat takviyesidir. 15 ml'lik tek bir ölçekte 400 mg elemental magnezyum ile birlikte rahatlama, kas gevşemesi ve derin uyku kalitesini destekleyen L-theanine, L-tryptophan, L-tyrosine, vitamin C ve D3 içerir. %100 vegan formdadır. 500 ml'lik şişe, 15 ml'lik tam 1 ölçek üzerinden 33 günlük kullanım sunar (ölçek kabı kapak üzerindedir). Portakal aromalıdır. Kullanmadan önce çalkalayınız."
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
        ${product.inStock !== false && (product.stock === undefined || product.stock > 0) ? `<div class="product-stock"><span class="stock-dot"></span>${translations[lang]?.in_stock || 'En stock'}</div>` : `<div class="product-stock" style="color:#ff4444;">${translations[lang]?.out_of_stock || 'Rupture de stock'}</div>`}
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

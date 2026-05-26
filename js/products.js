/* ============================================
   PrimeInfinity — Product Data & Catalog
   ============================================ */

const PRODUCTS = [
  {
    id: 1,
    name: { fr: "Casque Sans Fil", de: "Kabellose Kopfhörer", en: "Wireless Headphones", tr: "Kablosuz Kulaklık" },
    price: 49.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    ],
    description: {
      fr: "Casque sans fil avec réduction de bruit active, autonomie de 30 heures et son haute fidélité. Confortable pour une utilisation prolongée.",
      de: "Kabellose Kopfhörer mit aktiver Geräuschunterdrückung, 30 Stunden Akkulaufzeit und Hi-Fi-Sound. Bequem für den Langzeitgebrauch.",
      en: "Wireless headphones with active noise cancellation, 30-hour battery life, and hi-fi sound. Comfortable for extended use.",
      tr: "Aktif gürültü engelleme teknolojisi, 30 saat pil ömrü ve yüksek kaliteli ses deneyimiyle öne çıkan kablosuz kulaklık. Uzun süreli kullanım için ergonomik tasarım."
    },
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    name: { fr: "Bracelet Connecté", de: "Smart Fitness Armband", en: "Smart Fitness Band", tr: "Akıllı Fitness Bandı" },
    price: 89.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80"
    ],
    description: {
      fr: "Bracelet connecté avec suivi de la fréquence cardiaque, du sommeil et de l'activité physique. Écran couleur tactile et autonomie de 14 jours.",
      de: "Smartes Fitness-Armband mit Herzfrequenz-, Schlaf- und Aktivitätstracking. Farb-Touchscreen und 14 Tage Akkulaufzeit.",
      en: "Smart fitness band with heart rate, sleep, and activity tracking. Color touchscreen and 14-day battery life.",
      tr: "Kalp atış hızı, uyku ve aktivite takibi yapan akıllı fitness bandı. Renkli dokunmatik ekran ve 14 günlük pil ömrü."
    },
    rating: 4.6,
    reviews: 96
  },
  {
    id: 3,
    name: { fr: "Enceinte Portable", de: "Tragbarer Lautsprecher", en: "Portable Speaker" },
    price: 39.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=800&q=80",
      "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?w=800&q=80"
    ],
    description: {
      fr: "Enceinte portable Bluetooth 5.0 avec son 360° immersif. Étanche IPX7, autonomie de 20 heures, parfaite pour l'extérieur.",
      de: "Tragbarer Bluetooth 5.0 Lautsprecher mit immersivem 360°-Sound. IPX7 wasserdicht, 20 Stunden Akkulaufzeit, perfekt für draußen.",
      en: "Portable Bluetooth 5.0 speaker with immersive 360° sound. IPX7 waterproof, 20-hour battery, perfect for outdoors."
    },
    rating: 4.7,
    reviews: 75
  },
  {
    id: 4,
    name: { fr: "Station de Charge Sans Fil", de: "Kabellose Ladestation", en: "Wireless Charging Station" },
    price: 29.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80"
    ],
    description: {
      fr: "Station de charge sans fil rapide 15W compatible avec tous les appareils Qi. Design minimaliste en aluminium avec LED de charge.",
      de: "Schnelle 15W kabellose Ladestation, kompatibel mit allen Qi-Geräten. Minimalistisches Aluminiumdesign mit Lade-LED.",
      en: "Fast 15W wireless charging station compatible with all Qi devices. Minimalist aluminum design with charging LED."
    },
    rating: 4.5,
    reviews: 112
  },
  {
    id: 5,
    name: { fr: "Lampe LED Ambiance", de: "LED Stimmungslampe", en: "LED Mood Lamp" },
    price: 24.99,
    category: "home",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a35f2ee38?w=800&q=80",
      "https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?w=800&q=80"
    ],
    description: {
      fr: "Lampe LED à ambiance chaleureuse avec 16 couleurs réglables et télécommande. Idéale pour créer une atmosphère cosy dans votre intérieur.",
      de: "Stimmungslampe mit 16 einstellbaren Farben und Fernbedienung. Ideal für eine gemütliche Atmosphäre in Ihrem Zuhause.",
      en: "Mood LED lamp with 16 adjustable colors and remote control. Perfect for creating a cozy atmosphere in your home."
    },
    rating: 4.0,
    reviews: 43,
    inStock: false
  },
  {
    id: 6,
    name: { fr: "Coussin Décoratif Velours", de: "Samt Dekokissen", en: "Velvet Decorative Cushion" },
    price: 19.99,
    category: "home",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80"
    ],
    description: {
      fr: "Coussin décoratif en velours doux au toucher, disponible en plusieurs coloris tendance. Apportez une touche d'élégance à votre canapé ou lit.",
      de: "Dekoratives Samtkissen in mehreren trendigen Farben. Verleihen Sie Ihrem Sofa oder Bett einen Hauch von Eleganz.",
      en: "Soft velvet decorative cushion available in several trendy colors. Add a touch of elegance to your sofa or bed."
    },
    rating: 4.0,
    reviews: 31,
    inStock: false
  },
  {
    id: 7,
    name: { fr: "Sérum Visage Hydratant", de: "Feuchtigkeitsserum", en: "Hydrating Face Serum" },
    price: 34.99,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80"
    ],
    description: {
      fr: "Sérum hydratant concentré à l'acide hyaluronique et vitamines C & E. Hydrate en profondeur, lisse et illumine le teint dès les premières applications.",
      de: "Konzentriertes Feuchtigkeitsserum mit Hyaluronsäure und Vitaminen C & E. Feuchtigkeitsspendend, glättend und aufhellend ab der ersten Anwendung.",
      en: "Concentrated hydrating serum with hyaluronic acid and vitamins C & E. Deeply moisturizes, smooths and brightens skin from the first applications."
    },
    rating: 4.0,
    reviews: 57,
    inStock: false
  },
  {
    id: 8,
    name: { fr: "Brosse à Maquillage Pro", de: "Professioneller Make-up Pinsel", en: "Pro Makeup Brush" },
    price: 14.99,
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1631214524020-3c69b8e0d8b7?w=800&q=80"
    ],
    description: {
      fr: "Brosse à maquillage professionnelle aux poils ultra-doux et synthétiques. Application parfaite du fond de teint, blush et fards à paupières.",
      de: "Professioneller Make-up Pinsel mit ultraweichen, synthetischen Borsten. Perfekte Applikation von Foundation, Rouge und Lidschatten.",
      en: "Professional makeup brush with ultra-soft synthetic bristles. Perfect application of foundation, blush and eyeshadow."
    },
    rating: 4.0,
    reviews: 28,
    inStock: false
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

// Render product cards on index.html
function renderProductCards(lang) {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;
  
  grid.innerHTML = PRODUCTS.map((product, index) => `
    <div class="product-card animate-on-scroll" data-delay="${0.1 + index * 0.1}">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${getProductName(product, lang)}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${getProductName(product, lang)}</h3>
        <div class="product-price">${formatPrice(product.price)}</div>
        <div style="color:#ff4444;font-size:0.75rem;font-weight:600;margin-bottom:4px;">${translations[lang]?.out_of_stock || '⚠️ Out of Stock'}</div>
        <div class="product-stars">
          ${renderStars(product.rating)}
          <span class="product-reviews">(${product.reviews})</span>
        </div>
        <div class="product-actions">
          <a href="urun.html?id=${product.id}" class="btn-primary btn-sm">${translations[lang]?.buy_now || 'Buy Now'}</a>
          <button class="btn-outline btn-sm" onclick="Cart.addItem({id:${product.id},name:'${getProductName(product, lang).replace(/'/g, "\\'")}',price:${product.price},image:'${product.images[0]}'})">${translations[lang]?.add_to_cart || 'Add to Cart'}</button>
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

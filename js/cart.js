/* ============================================
   PrimeInfinity — Shopping Cart (localStorage)
   ============================================ */

const CART_KEY = 'primeinfinity-cart';
let cartChangeCallback = null;

const Cart = {
  getItems() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    this.updateBadge();
    this.updateMiniCart();
    if (cartChangeCallback) cartChangeCallback();
  },

  onChange(callback) {
    cartChangeCallback = callback;
  },

  addItem(product) {
    const items = this.getItems();
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
    }
    this.saveItems(items);
    this.showToast(product.name);
  },

  removeItem(id) {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
  },

  updateQuantity(id, qty) {
    const items = this.getItems();
    const item = items.find(i => i.id === id);
    if (item) {
      if (qty <= 0) {
        this.removeItem(id);
      } else {
        item.qty = qty;
        this.saveItems(items);
      }
    }
  },

  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.qty, 0);
  },

  clear() {
    localStorage.removeItem(CART_KEY);
    this.updateBadge();
    this.updateMiniCart();
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  updateMiniCart() {
    const miniCart = document.querySelector('.mini-cart-items');
    if (!miniCart) return;
    const items = this.getItems();
    if (items.length === 0) {
      const t = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined' && translations[currentLang]) ? translations[currentLang] : {};
      miniCart.innerHTML = `<p class="mini-cart-empty">${t.cart_empty_title || 'Votre panier est vide'}</p>`;
      return;
    }
    miniCart.innerHTML = items.map(item => `
      <div class="mini-cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="mini-cart-info">
          <span class="mini-cart-name">${item.name}</span>
          <span class="mini-cart-qty">${item.qty} x €${item.price.toFixed(2)}</span>
        </div>
        <button class="mini-cart-remove" onclick="Cart.removeItem(${item.id})" aria-label="Retirer">×</button>
      </div>
    `).join('');
    const totalEl = document.querySelector('.mini-cart-total');
    if (totalEl) totalEl.textContent = 'Total: €' + this.getTotal().toFixed(2);
  },

  showToast(productName) {
    let toast = document.querySelector('.cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'cart-toast';
      document.body.appendChild(toast);
    }
    const t = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined' && translations[currentLang]) ? translations[currentLang] : {};
    toast.textContent = `"${productName}" ${t.toast_added || 'ajouté au panier'}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
};

// Init badge on page load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
});

/* ============================================
   PrimeInfinity — Auth (localStorage)
   ============================================ */

const AUTH_KEY = 'primeinfinity-user';
const ORDERS_KEY = 'primeinfinity-orders';

const Auth = {
  register(userData) {
    const users = this._getUsers();
    if (users.find(u => u.email === userData.email)) {
      return { success: false, message: 'Cet email est déjà utilisé' };
    }
    users.push(userData);
    localStorage.setItem('primeinfinity-users', JSON.stringify(users));
    this.login(userData.email, userData.password);
    return { success: true };
  },

  login(email, password) {
    const users = this._getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return { success: false, message: 'Email ou mot de passe incorrect' };
    }
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return { success: true, user };
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.reload();
  },

  isLoggedIn() {
    return !!localStorage.getItem(AUTH_KEY);
  },

  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(AUTH_KEY));
    } catch {
      return null;
    }
  },

  requireAuth(redirectUrl) {
    if (!this.isLoggedIn()) {
      sessionStorage.setItem('redirectAfterLogin', redirectUrl || window.location.href);
      window.location.href = 'inscription.html';
      return false;
    }
    return true;
  },

  saveOrder(order) {
    const orders = this.getOrders();
    order.id = 'ORD-' + Date.now();
    order.date = new Date().toISOString();
    orders.push(order);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    return order.id;
  },

  getOrders() {
    try {
      return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
    } catch {
      return [];
    }
  },

  _getUsers() {
    try {
      return JSON.parse(localStorage.getItem('primeinfinity-users')) || [];
    } catch {
      return [];
    }
  }
};

// Handle redirect after registration/login
document.addEventListener('DOMContentLoaded', () => {
  const redirect = sessionStorage.getItem('redirectAfterLogin');
  if (redirect && Auth.isLoggedIn()) {
    sessionStorage.removeItem('redirectAfterLogin');
    window.location.href = redirect;
  }
});

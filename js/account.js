/* ============================================
   PrimeInfinity — Account Dropdown
   ============================================ */

function initAccountDropdown() {
  const accountBtn = document.querySelector('a[aria-label="Account"]');
  if (!accountBtn) return;

  // Prevent default link behavior
  accountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleAccountDropdown();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.account-dropdown');
    if (dropdown && !dropdown.contains(e.target) && !accountBtn.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
}

function toggleAccountDropdown() {
  let dropdown = document.querySelector('.account-dropdown');
  if (!dropdown) {
    dropdown = createAccountDropdown();
    const navRight = document.querySelector('.nav-right');
    if (navRight) navRight.appendChild(dropdown);
  }
  dropdown.classList.toggle('open');
}

function createAccountDropdown() {
  const dropdown = document.createElement('div');
  dropdown.className = 'account-dropdown';

  const user = Auth.getCurrentUser();
  const lang = currentLang || 'fr';

  if (user) {
    dropdown.innerHTML = `
      <div class="account-dropdown-header">
        <span class="account-name">${user.firstName || user.email}</span>
        <span class="account-email">${user.email}</span>
      </div>
      <div class="account-dropdown-links">
        <a href="hesabim.html" class="account-dropdown-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span data-i18n="my_account">Mon Compte</span>
        </a>
        <a href="hesabim.html#orders" class="account-dropdown-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span data-i18n="my_orders">Mes Commandes</span>
        </a>
        <button class="account-dropdown-link" onclick="Auth.logout()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          <span data-i18n="logout">Déconnexion</span>
        </button>
      </div>
    `;
  } else {
    dropdown.innerHTML = `
      <div class="account-dropdown-links">
        <a href="inscription.html" class="account-dropdown-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          <span data-i18n="nav_register">Inscription</span>
        </a>
      </div>
    `;
  }

  return dropdown;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initAccountDropdown);

# PrimeInfinity — 2D Luxury Website

A static luxury brand website for **PrimeInfinity** (primeinfinity.fr), built with pure HTML5, CSS3, and vanilla JavaScript. No backend, no e-commerce functionality.

---

## Project Structure

```
C:\Users\can\Desktop\emin2\2d\
├── index.html          # Homepage
├── a-propos.html       # About Us page
├── contact.html        # Contact page
├── css\
│   ├── style.css       # Base styles, layout, components
│   └── animations.css  # Keyframes, orbs, scroll animations
├── js\
│   └── main.js         # Mobile menu, scroll effects, forms, etc.
└── README.md           # This file
```

---

## How to View Locally

1. Navigate to:
   ```
   C:\Users\can\Desktop\emin2\2d\
   ```
2. Double-click `index.html` to open in your browser.

---

## How to Deploy to GitHub Pages

1. Create a new GitHub repository (e.g., `primeinfinity-website`).
2. Upload all files from the `2d` folder to the repository root.
3. Go to **Settings > Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`.
5. Your site will be live at `https://yourusername.github.io/primeinfinity-website/`.

---

## IONOS DNS Configuration

| Type  | Host  | Value                    | TTL  |
|-------|-------|--------------------------|------|
| A     | @     | 185.199.108.153          | 3600 |
| A     | @     | 185.199.109.153          | 3600 |
| A     | @     | 185.199.110.153          | 3600 |
| A     | @     | 185.199.111.153          | 3600 |
| CNAME | www   | yourusername.github.io   | 3600 |

> Keep existing MX records for email.

---

## Browser Compatibility

- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Mobile: iOS Safari, Chrome Android

---

## Notes

- **No backend required** — all client-side.
- **No e-commerce** — brand/preview site only.
- **French language** — all user-facing text is in French.
- **Responsive** — mobile-first with breakpoints at 1024px, 768px, and 480px.

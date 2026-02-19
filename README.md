# Poojith Chowdary Manne — Portfolio (GitHub Pages)

This is a **single-page**, matte-translucent “glass” portfolio built with plain **HTML + CSS + JS**.
It is ready to deploy for free on **GitHub Pages**.

## ✨ Theme
- Matte translucent / glass panels
- Black + white base
- Accent toggle: **Purple** ↔ **Matrix Green** (saved in the browser)

---

## ✅ Quick start (local preview)
Just open `index.html` in your browser.

> Optional: use VS Code “Live Server” extension for a nicer preview.

---

## 🚀 Deploy for FREE with GitHub Pages

### Option A — User site (recommended)
Your site will be: `https://<your-username>.github.io`

1. Create a repository named: **`<your-username>.github.io`**
2. Upload/commit these files to that repository.
3. GitHub Pages will serve the `main` branch automatically (or you can configure it in Settings → Pages).

### Option B — Project site
Your site will be: `https://<your-username>.github.io/<repo-name>/`

1. Create any repository name (example: `portfolio`)
2. Commit/push this code
3. Go to **Settings → Pages**
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Save — GitHub will publish the site.

---

## 🛠 Customize
### 1) Change the default accent
In `index.html`, change:

```html
<html lang="en" data-accent="purple">
```

to:

```html
<html lang="en" data-accent="matrix">
```

### 2) Add a profile photo
1. Put your image here: `assets/img/profile.jpg`
2. Add an `<img>` inside the hero section (or replace the Highlights card with an image).

### 3) Update content
Edit `index.html`:
- Projects
- Skills
- About
- Contact links

---

## 🌐 Optional: Custom domain
You can point a domain you own (like `poojith.dev`) to GitHub Pages.

- Add the domain in **Settings → Pages**
- Add DNS records at your domain provider (usually a **CNAME**)

---

## 📁 Files
- `index.html` — main page
- `404.html` — fallback page for GitHub Pages
- `assets/css/styles.css` — all styling
- `assets/js/main.js` — small interactions (toggle, copy, reveal, scroll spy)
- `assets/Poojith_Chowdary_Resume.pdf` — resume download

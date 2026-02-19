/* =========================================================
   Minimal JS (no frameworks)
   - accent toggle (purple / matrix)
   - mobile nav toggle
   - scroll spy
   - reveal on scroll
   - copy to clipboard helpers
   ========================================================= */

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Year
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Accent theme (persisted)
  const html = document.documentElement;
  const accentToggle = $("#accentToggle");
  const savedAccent = localStorage.getItem("accent");
  if (savedAccent === "matrix" || savedAccent === "purple") {
    html.setAttribute("data-accent", savedAccent);
  }

  function cycleAccent() {
    const current = html.getAttribute("data-accent") || "purple";
    const next = current === "purple" ? "matrix" : "purple";
    html.setAttribute("data-accent", next);
    localStorage.setItem("accent", next);
    toast(`Accent: ${next === "matrix" ? "Matrix Green" : "Purple"}`);
  }

  if (accentToggle) {
    accentToggle.addEventListener("click", cycleAccent);
  }

  // Mobile nav
  const navToggle = $("#navToggle");
  const siteNav = $("#siteNav");

  function setNavOpen(open) {
    document.body.classList.toggle("nav-open", open);
    if (navToggle) navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const open = !document.body.classList.contains("nav-open");
      setNavOpen(open);
    });
  }

  // Close nav when clicking a link (mobile)
  if (siteNav) {
    siteNav.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      setNavOpen(false);
    });
  }

  // Copy helpers
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback for older browsers
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        return true;
      } catch {
        return false;
      }
    }
  }

  const copyEmail = $("#copyEmail");
  if (copyEmail) {
    copyEmail.addEventListener("click", async () => {
      const text = copyEmail.getAttribute("data-copy") || "";
      if (!text) return;
      const ok = await copyText(text);
      toast(ok ? "Email copied" : "Copy failed");
    });
  }

  const copyAll = $("#copyAll");
  if (copyAll) {
    copyAll.addEventListener("click", async () => {
      const payload = [
        "Poojith Chowdary Manne",
        "Email: poojithchowdary5500@gmail.com",
        "Phone: +1 347 317 8454",
        "LinkedIn: https://www.linkedin.com/in/manne-poojith-chowdary-a99440234/",
        "GitHub: https://github.com/Poojith-Chowdary",
      ].join("\n");
      const ok = await copyText(payload);
      toast(ok ? "Contact info copied" : "Copy failed");
    });
  }

  // Scroll spy (highlight active nav link)
  const navLinks = $$("#siteNav .nav__link");
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = navLinks.find((a) => a.getAttribute("href") === "#" + id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((x) => x.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { root: null, threshold: 0.35 }
    );

    sections.forEach((s) => spy.observe(s));
  }

  // Reveal on scroll
  const revealEls = $$("[data-reveal]");
  if (revealEls.length) {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => reveal.observe(el));
  }

  // Toast
  function toast(message) {
    if (!message) return;
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = message;
    document.body.appendChild(t);

    requestAnimationFrame(() => t.classList.add("toast--in"));

    window.setTimeout(() => {
      t.classList.remove("toast--in");
      window.setTimeout(() => t.remove(), 250);
    }, 1500);
  }
})();

// Café Garden · swaps the theme stylesheet. The HTML never changes.
const themes = { classic: "Classic Café", newspaper: "Newspaper", neon: "Neon Night", brutalist: "Brutalist" };
const link = document.getElementById("theme");
const cssLink = document.getElementById("css-link");
const status = document.getElementById("garden-status");
const buttons = document.querySelectorAll("[data-theme]");

// Your own theme (Session 6 challenge): save it as themes/<name>.css and open index.html?theme=<name>.
// Any name of lowercase letters, digits and hyphens works; it is not remembered between visits.
const isOwn = (name) => !themes[name] && /^[a-z0-9-]{1,30}$/.test(name || "");

function setTheme(name, announce) {
  if (!themes[name] && !isOwn(name)) name = "classic";
  const href = `themes/${name}.css`;
  link.href = href;
  cssLink.href = href;
  buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.theme === name)));
  const url = new URL(location.href);
  url.searchParams.set("theme", name);
  history.replaceState(null, "", url);
  if (!isOwn(name)) {
    try { localStorage.setItem("cafe-garden-theme", name); } catch { /* private mode */ }
  }
  if (announce) status.textContent = `Design: ${themes[name] || name}`;
}

buttons.forEach((b) => b.addEventListener("click", () => setTheme(b.dataset.theme, true)));

let start = new URLSearchParams(location.search).get("theme");
if (!start) { try { start = localStorage.getItem("cafe-garden-theme"); } catch { /* ignore */ } }
setTheme(start || "classic", false);

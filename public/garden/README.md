# Café Garden

One semantic HTML page (`index.html`, the Campus Café "This week" page from the SE-501 layout lab) and four completely different stylesheets in `themes/`. The buttons on top swap the stylesheet; **the HTML never changes**. Inspired by [CSS Zen Garden](https://csszengarden.com/) (no designs copied from there).

| Theme | Idea | Layout trick worth showing |
|------|------|------|
| `classic.css` | warm café, cards | `repeat(auto-fill, minmax(min(16rem,100%),1fr))`, aside right from 60rem (= Session 5 lab solution) |
| `newspaper.css` | serif masthead, news columns | two columns with rules, sidebar from 56rem, decorative `::before/::after` with empty alt text |
| `neon.css` | dark, glowing cards | `grid-template-areas: "info" "main"`: the aside moves **above** main |
| `brutalist.css` | black/white, thick borders | aside on the **left** (`"info main"`), CSS counters number the cards |

Direct links: `?theme=classic`, `?theme=newspaper`, `?theme=neon`, `?theme=brutalist`.

Checked: W3C validator 0 errors (HTML and CSS), axe 0 violations in every theme, no horizontal scrolling at 320, 768 and 1280 px, focus visible everywhere.

Lives in `public/garden/`, so Astro copies it unchanged: https://sr-mudt.github.io/campus-cafe-demo/garden/

**Your own theme:** save it as `themes/<name>.css` (lowercase letters, digits, hyphens) and open `index.html?theme=<name>`. Custom themes get no button and are not remembered between visits. Student start file: `cm501-labs/session-06/cafe-garden/themes/mine.css`.

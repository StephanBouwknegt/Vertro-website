# Vertro Website

Personal cabin management — Oslo region.

## File structure

```
vertro/
├── index.html        ← Homepage
├── style.css         ← All shared styles, tokens, components
├── script.js         ← Shared JavaScript (nav, calculator, scroll reveal)
└── README.md
```

As you add pages, the structure grows like this:

```
vertro/
├── index.html
├── about.html
├── services.html
├── how-it-works.html
├── contact.html
├── style.css         ← unchanged, shared by all pages
├── script.js         ← unchanged, shared by all pages
└── README.md
```

## Adding a new page

Each new page starts with this shell — just copy/paste and fill in the sections:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vertro | Page name</title>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- NAVIGATION — copy from index.html, identical on every page -->
  <nav class="nav" id="nav">...</nav>

  <!-- YOUR PAGE CONTENT HERE -->

  <!-- FOOTER — copy from index.html, identical on every page -->
  <footer class="footer">...</footer>

  <script src="script.js"></script>
</body>
</html>
```

## Design tokens

All colours, fonts and spacing are defined as CSS custom properties at the
top of `style.css`. Change a value there and it updates across the whole site.

```css
:root {
  --c-700: #1e3a2f;   /* primary green */
  --c-500: #4a7060;   /* accent text   */
  --a-700: #7a5c35;   /* amber accent  */
  --c-50:  #f0f0ec;   /* page background */
  --serif: 'Lora', Georgia, serif;
  --sans:  'Plus Jakarta Sans', system-ui, sans-serif;
}
```

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch" → main → / (root)
4. Your site is live at `https://yourname.github.io/vertro-website`

For a custom domain (`vertro.no`), add a `CNAME` file containing `vertro.no`
and point your DNS A records to GitHub's servers (documented in GitHub Pages settings).

## Working with Cursor

Open the project folder in Cursor. You can ask it to:
- "Change the hero headline in index.html"
- "Add a new section to services.html matching the style of the feature cards"
- "Update the nav CTA text across all HTML files"

For bigger changes (new pages, design decisions, copy), use Claude at claude.ai.

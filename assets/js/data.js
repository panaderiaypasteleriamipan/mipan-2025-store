* {
  box-sizing: border-box;
}

:root {
  --bg: #fffaf3;
  --panel: #fff;
  --panel-alt: #f9efe5;
  --primary: #8b5a2b;
  --primary-dark: #5d3412;
  --accent: #f0b14a;
  --text: #2f241c;
  --muted: #6f5d52;
  --line: #eadcc8;
  --success: #1d8f5d;
  --shadow: 0 18px 40px rgba(84, 50, 14, 0.1);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select, textarea {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 250, 243, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(139, 90, 43, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}

.brand img {
  width: 42px;
  height: 42px;
}

.brand strong {
  display: block;
  font-size: 1.1rem;
}

.brand span {
  display: block;
  font-size: 0.72rem;
  color: var(--muted);
  font-weight: 600;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-weight: 600;
}

.main-nav a:hover {
  color: var(--primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: var(--shadow);
}

.btn-primary:hover {
  transform: translateY(-1px);
}

.btn-secondary {
  background: var(--panel-alt);
  color: var(--primary-dark);
}

.btn.secondary:hover {
  background: #f3e3d3;
}

.icon-button {
  border: 1px solid var(--line);
  background: var(--panel);
  border-radius: 12px;
  padding: 0.7rem 0.9rem;
  font-weight: 700;
  cursor: pointer;
}

.hero {
  padding: 64px 0 28px;
  background: linear-gradient(180deg, #fffaf3 0%, #fdf2e4 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 0 0 16px;
  font-size: clamp(2.5rem, 5vw, 4.4rem);
  line-height: 1.02;
}

.hero-copy p {
  max-width: 620px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.mini-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 28px 0 0;
}

.mini-stats li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 18px;
  min-width: 110px;
  background: rgba(255, 255, 255, 0.64);
  border: 1px solid var(--line);
  border-radius: 16px;
}

.mini-stats strong {
  font-size: 1.4rem;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-visual {
  display: grid;
  gap: 18px;
  min-height: 420px;
  position: relative;
}

.hero-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  border-radius: 28px;
  border: 1px solid rgba(139, 90, 43, 0.12);
  background: linear-gradient(135deg, rgba(255, 205, 126, 0.9), rgba(255, 225, 180, 0.9));
  box-shadow: var(--shadow);
  overflow: hidden;
}

.hero-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 50%);
}

.hero-card > * {
  position: relative;
  z-index: 1;
}

.hero-card.large {
  min-height: 260px;
}

.hero-card.small {
  width: 80%;
  justify-self: end;
  min-height: 170px;
  background: linear-gradient(135deg, rgba(244, 164, 93, 0.8), rgba(255, 232, 196, 0.9));
}

.hero-card span {
  color: var(--primary-dark);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
}

.hero-card h3 {
  margin: 0.5rem 0;
  font-size: 1.9rem;
}

.hero-card strong {
  font-size: 1.5rem;
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin: 52px 0 26px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.toolbar {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

#searchInput, #categoryFilter,
.product-form input,
.product-form select,
.product-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel);
  padding: 0.78rem 0.9rem;
  color: var(--text);
}

#searchInput {
  min-width: 210px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
}

.product-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(67, 41, 17, 0.04);
}

.product-image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7e4c7, #f8d9ad);
  font-size: 3rem;
}

.product-body {
  padding: 20px;
}

.product-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
}

.product-body h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
}

.product-body p {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.55;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.price {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--primary-dark);
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: #f9eee3;
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.product-actions {
  margin-top: 18px;
  display: flex;
  gap: 10px;
}

.product-actions .btn {
  flex: 1;
  padding: 0.75rem 0.9rem;
}

.info-band {
  margin-top: 54px;
  background: #fff;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  padding: 34px 0;
}

.info-grid article {
  padding: 18px;
  border-radius: 18px;
  background: var(--panel-alt);
}

.info-grid span {
  font-size: 2rem;
}

.story {
  padding: 64px 0;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 24px;
  align-items: center;
}

.story-text p {
  color: var(--muted);
  line-height: 1.75;
}

.story-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.story-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--muted);
  line-height: 2;
}

.cart-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: min(420px, 100%);
  height: 100vh;
  background: #fff;
  border-left: 1px solid var(--line);
  box-shadow: -18px 0 36px rgba(63, 40, 21, 0.08);
  transform: translateX(105%);
  transition: transform 0.25s ease;
  z-index: 40;
  display: flex;
  flex-direction: column;
}

.cart-panel.open {
  transform: translateX(0);
}

.cart-header,
.cart-footer {
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
}

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.close-button {
  border: none;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: var(--muted);
}

.cart-items {
  flex: 1;
  padding: 20px;
  overflow: auto;
  display: grid;
  gap: 14px;
}

.cart-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px;
  background: var(--panel-alt);
}

.cart-item-info h4 {
  margin: 0 0 6px;
  font-size: 1rem;
}

.cart-item-meta {
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.qty-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-controls button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: white;
  cursor: pointer;
}

.total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.05rem;
  margin-bottom: 16px;
}

.full-width {
  width: 100%;
}

.site-footer {
  background: #1f140f;
  color: #f8efe5;
  padding: 40px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
}

.site-footer h3,
.site-footer h4 {
  margin-top: 0;
}

.site-footer a {
  color: #f8efe5;
}

.admin-shell {
  padding: 50px 0 90px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 22px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.section-head.compact {
  margin-top: 0;
}

.product-form {
  display: grid;
  gap: 18px;
  margin-top: 12px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.product-form label {
  display: grid;
  gap: 8px;
  font-weight: 700;
  color: var(--primary-dark);
}

.field-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.admin-list {
  display: grid;
  gap: 12px;
}

.admin-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel-alt);
}

.admin-item h4 {
  margin: 0 0 4px;
}

.admin-item span {
  color: var(--muted);
  font-size: 0.92rem;
}

.delete-btn {
  border: none;
  background: #fbe7e7;
  color: #9c2e2e;
  border-radius: 10px;
  padding: 0.55rem 0.8rem;
  cursor: pointer;
  font-weight: 700;
}

.empty-state {
  padding: 22px;
  border: 1px dashed var(--line);
  border-radius: 14px;
  color: var(--muted);
  text-align: center;
  background: #fffaf5;
}

@media (max-width: 900px) {
  .hero-grid,
  .story,
  .admin-shell,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }
}

@media (max-width: 600px) {
  .section-head,
  .field-row,
  .toolbar,
  .hero-actions,
  .nav-wrap,
  .footer-grid {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: stretch;
  }

  .hero {
    padding-top: 36px;
  }

  .hero-card.small {
    width: 100%;
    justify-self: stretch;
  }

  .btn,
  .icon-button {
    width: 100%;
  }
}

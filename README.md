# Brit Tziyon — Website

Institutional website for Rabbi Gonzalo, a specialist in Brit Milah ceremonies. Built with React + Vite and deployed on Netlify.

**Live site:** https://app.netlify.com/projects/brit-tziyon-website/overview

---

## Tech Stack

- **React 19** with Vite as the bundler
- **Framer Motion** for animations
- **Lucide React** and **React Icons** for icons
- **Modular CSS** per component (no CSS framework)
- **Netlify** for automatic deploys from `main`

---

## Project Structure

```
brit-tziyon-website/
├── public/              # Static assets (images, etc.)
├── src/
│   ├── components/      # Page components
│   │   ├── Navbar            # Navigation bar
│   │   ├── Hero              # Hero / banner section
│   │   ├── About             # About the rabbi
│   │   ├── Preparations      # Ceremony preparation info
│   │   ├── Safety            # Safety information
│   │   ├── Certificates      # Certifications and training
│   │   ├── Gallery           # Photo gallery
│   │   ├── Testimonials      # Family testimonials
│   │   ├── Recommendations   # Recommendations
│   │   ├── Contact           # Contact form / details
│   │   ├── Footer            # Page footer
│   │   └── FloatingWhatsApp  # Floating WhatsApp button
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Development server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview the build
npm run preview
```

---

## Deployment

The project is connected to **Netlify**. Every push to the `main` branch triggers an automatic deploy.

Netlify dashboard: https://app.netlify.com/projects/brit-tziyon-website/overview

---

## Adding Images to the Gallery

Gallery images are loaded automatically from the `public/` folder using a Vite glob import. To add new photos, simply copy the `.webp` file into the `public/` folder and push. No code changes needed.

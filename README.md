# Brit Tziyon — Sitio Web

Sitio web institucional para el rabino Gonzalo, especialista en ceremonias de Brit Milá. Desarrollado con React + Vite y publicado en Netlify.

**Sitio en producción:** https://app.netlify.com/projects/brit-tziyon-website/overview

---

## Stack tecnológico

- **React 19** con Vite como bundler
- **Framer Motion** para animaciones
- **Lucide React** y **React Icons** para íconos
- **CSS modular** por componente (sin framework de estilos)
- **Netlify** para deploy automático desde `main`

---

## Estructura del proyecto

```
brit-tziyon-website/
├── public/              # Assets estáticos (imágenes, etc.)
├── src/
│   ├── components/      # Componentes de la página
│   │   ├── Navbar            # Barra de navegación
│   │   ├── Hero              # Sección principal / banner
│   │   ├── About             # Sobre el rabino
│   │   ├── Preparations      # Preparativos para la ceremonia
│   │   ├── Safety            # Información de seguridad
│   │   ├── Certificates      # Certificados y formación
│   │   ├── Gallery           # Galería de fotos
│   │   ├── Testimonials      # Testimonios de familias
│   │   ├── Recommendations   # Recomendaciones
│   │   ├── Contact           # Formulario / datos de contacto
│   │   ├── Footer            # Pie de página
│   │   └── FloatingWhatsApp  # Botón flotante de WhatsApp
│   ├── App.jsx           # Componente raíz
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Cómo correr el proyecto localmente

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Deploy

El proyecto está conectado a **Netlify**. Cada push a la rama `main` dispara un deploy automático.

Panel de Netlify: https://app.netlify.com/projects/brit-tziyon-website/overview

---

## Agregar imágenes a la galería

Las imágenes de la galería se cargan automáticamente desde `public/` usando un glob de Vite. Para agregar fotos nuevas, simplemente copiá el archivo `.webp` a la carpeta `public/` y hacé push. No hace falta modificar código.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Auto-copy gallery images to simple ASCII names on dev/build start
function copyGalleryPlugin() {
  const copies = [
    // okul öncesi
    ["public/gallery/okul \u00f6ncesi/WhatsApp Image 2026-04-04 at 14.07.27-4.webp", "public/gallery/okul-oncesi-1.webp"],
    ["public/gallery/okul \u00f6ncesi/WhatsApp Image 2026-04-04 at 14.07.30 (1)-8.webp", "public/gallery/okul-oncesi-2.webp"],
    ["public/gallery/okul \u00f6ncesi/WhatsApp Image 2026-04-04 at 14.07.31 (2)-2.webp", "public/gallery/okul-oncesi-3.webp"],
    ["public/gallery/okul \u00f6ncesi/WhatsApp Image 2026-04-04 at 14.07.31-7.webp", "public/gallery/okul-oncesi-4.webp"],
    // ilkokul
    ["public/gallery/ilkokul/Varl\u0131k 5.webp", "public/gallery/ilkokul-1.webp"],
    ["public/gallery/ilkokul/Varl\u0131k 6.webp", "public/gallery/ilkokul-2.webp"],
    ["public/gallery/ilkokul/WhatsApp Image 2026-01-28 at 17.37.08-1.webp", "public/gallery/ilkokul-3.webp"],
    ["public/gallery/ilkokul/WhatsApp Image 2026-01-28 at 17.37.09-9.webp", "public/gallery/ilkokul-4.webp"],
    // ortaokul
    ["public/gallery/ortaokul/WhatsApp Image 2026-01-23 at 16.06.59 (6).webp", "public/gallery/ortaokul-1.webp"],
    ["public/gallery/ortaokul/WhatsApp Image 2026-01-23 at 16.06.59 (7).webp", "public/gallery/ortaokul-2.webp"],
    ["public/gallery/ortaokul/WhatsApp Image 2026-01-28 at 17.37.14 (2)-9.webp", "public/gallery/ortaokul-3.webp"],
    ["public/gallery/ortaokul/WhatsApp Image 2026-01-28 at 17.37.14 (3)-1.webp", "public/gallery/ortaokul-4.webp"],
    // anadolu lisesi
    ["public/gallery/anadolu lisesi/WhatsApp Image 2026-01-23 at 16.06.59 (8).webp", "public/gallery/lise-1.webp"],
    ["public/gallery/anadolu lisesi/WhatsApp Image 2026-01-23 at 16.07.00 (8) - Kopya.webp", "public/gallery/lise-2.webp"],
    ["public/gallery/anadolu lisesi/WhatsApp Image 2026-01-28 at 17.37.16 (1)-7.webp", "public/gallery/lise-3.webp"],
    ["public/gallery/anadolu lisesi/WhatsApp Image 2026-01-28 at 17.37.17 (2)-0.webp", "public/gallery/lise-4.webp"],
  ];
  return {
    name: 'copy-gallery',
    buildStart() {
      copies.forEach(([src, dest]) => {
        try {
          if (!fs.existsSync(dest)) {
            fs.copyFileSync(src, dest);
          }
        } catch {}
      });
    },
    configureServer(server) {
      copies.forEach(([src, dest]) => {
        try {
          if (!fs.existsSync(dest)) {
            fs.copyFileSync(src, dest);
          }
        } catch {}
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyGalleryPlugin()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'framer-motion';
          if (id.includes('react-dom') || id.includes('react-router-dom')) return 'react-vendor';
        },
      },
    },
  },
})

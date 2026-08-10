import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import fs from 'fs'
import path from 'path'

// public/gallery içindeki dosyaları tarayıp src/data/gallery-manifest.js dosyasını
// üretir. Görsel silindiğinde/eklendiğinde elle liste güncellemek gerekmesin diye:
// listeler tek kaynaktan, gerçek dosya sisteminden geliyor. Yalnızca hem tam boy
// hem thumb sürümü olan dosyalar listeye girer — yarım kalanlar kırık görsel üretmez.
function galleryManifestPlugin() {
  const GALLERY_DIR = 'public/gallery'
  const OUT_FILE = 'src/data/gallery-manifest.js'

  const naturalSort = (a, b) =>
    a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' })

  const generate = () => {
    try {
      if (!fs.existsSync(GALLERY_DIR)) return
      const manifest = {}
      for (const dir of fs.readdirSync(GALLERY_DIR).sort(naturalSort)) {
        const dirPath = path.join(GALLERY_DIR, dir)
        if (!fs.statSync(dirPath).isDirectory()) continue
        const thumbDir = path.join(dirPath, 'thumb')
        const hasThumb = (f) => fs.existsSync(path.join(thumbDir, f))
        const files = fs
          .readdirSync(dirPath)
          .filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && hasThumb(f))
          .sort(naturalSort)
        if (files.length) manifest[dir] = files
      }

      const body =
        '// OTOMATİK ÜRETİLİR — elle düzenlemeyin.\n' +
        '// Kaynak: public/gallery/**, üretici: vite.config.js → galleryManifestPlugin\n' +
        '// Görsel eklemek/çıkarmak için dosyayı public/gallery altına koyup thumb/ sürümünü\n' +
        '// de ekleyin; `npm run dev` veya `npm run build` bu listeyi yeniden üretir.\n' +
        'export const GALLERY_MANIFEST = ' +
        JSON.stringify(manifest, null, 2) +
        ';\n'

      fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true })
      if (!fs.existsSync(OUT_FILE) || fs.readFileSync(OUT_FILE, 'utf8') !== body) {
        fs.writeFileSync(OUT_FILE, body)
      }
    } catch (err) {
      console.warn('[gallery-manifest] üretilemedi:', err.message)
    }
  }

  return {
    name: 'gallery-manifest',
    buildStart: generate,
    configureServer: generate,
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    galleryManifestPlugin(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
  build: {
    target: 'es2015',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('react-router-dom')) return 'react-router';
            if (id.includes('leaflet') || id.includes('react-leaflet')) return 'maps';
            if (id.includes('react-pdf') || id.includes('pdfjs-dist')) return 'pdf';
            if (id.includes('lucide-react')) return 'icons';
            return 'vendor';
          }
          if (id.includes('/src/pages/siniflar/')) return 'pages-siniflar';
          if (id.includes('/src/pages/kampus/')) return 'pages-kampus';
          if (id.includes('/src/pages/kayit/')) return 'pages-kayit';
          if (id.includes('/src/pages/birimler/')) return 'pages-birimler';
          if (id.includes('/src/pages/programlar/')) return 'pages-programlar';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})

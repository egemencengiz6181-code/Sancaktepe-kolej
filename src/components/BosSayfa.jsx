import { motion } from 'framer-motion';

import { t } from '../i18n';

/**
 * İçeriği henüz hazır olmayan sayfalar için ortak gövde.
 * Sayfanın başlık bandı yerinde kalır; altına yalnızca kısa bir not gelir.
 */
export default function BosSayfa() {
  return (
    <section style={{ padding: '7rem 0', background: 'var(--off-white)' }}>
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--text-mid)',
            textAlign: 'center',
            lineHeight: 1.85,
            margin: 0,
          }}
        >
          {t('İçerik yakında eklenecektir.')}
        </motion.p>
      </div>
    </section>
  );
}

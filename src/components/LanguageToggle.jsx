import { useLang } from '../i18n';

const LANGS = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
];

/**
 * TR / EN segmented switch. `size="sm"` is used in the mobile bar where space
 * next to the hamburger is tight.
 */
export default function LanguageToggle({ size = 'md', style }) {
  const { lang, setLang } = useLang();
  const sm = size === 'sm';

  return (
    <div
      role="group"
      aria-label="Dil seçimi / Language"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px',
        gap: '2px',
        borderRadius: '999px',
        background: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.22)',
        flexShrink: 0,
        ...style,
      }}
    >
      {LANGS.map(({ code, label }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            lang={code}
            title={code === 'en' ? 'Switch to English' : "Türkçe'ye geç"}
            style={{
              appearance: 'none',
              border: 'none',
              cursor: active ? 'default' : 'pointer',
              borderRadius: '999px',
              padding: sm ? '0.3rem 0.55rem' : '0.34rem 0.7rem',
              fontFamily: 'var(--font-display)',
              fontSize: sm ? '0.62rem' : '0.68rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              lineHeight: 1,
              background: active ? '#fff' : 'transparent',
              color: active ? 'var(--primary)' : 'rgba(255,255,255,0.75)',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

import { createContext, useContext, useState, useEffect, useCallback, Fragment } from 'react';
import { EN } from './en';

const STORAGE_KEY = 'ks-lang';

// Module-level language so `t()` can be imported directly by any component
// without threading a hook through every file. The provider re-mounts the tree
// on change (see LanguageProvider), so every `t()` call is re-evaluated.
let currentLang = 'tr';

export function getLang() {
  return currentLang;
}

/**
 * Translate a Turkish source string. Non-strings pass through untouched, and
 * unknown strings fall back to the original Turkish — nothing ever renders blank.
 */
export function t(value) {
  if (currentLang !== 'en' || typeof value !== 'string' || value === '') return value;

  const direct = EN[value];
  if (direct !== undefined) return direct;

  // JSX text nodes carry surrounding whitespace/newlines; match on the trimmed
  // form and put the original padding back so layout stays identical.
  const trimmed = value.trim();
  if (trimmed !== value) {
    const hit = EN[trimmed];
    if (hit !== undefined) {
      const lead = value.slice(0, value.indexOf(trimmed[0]));
      const tail = value.slice(value.indexOf(trimmed[0]) + trimmed.length);
      return lead + hit + tail;
    }
  }
  return value;
}

const LanguageContext = createContext({ lang: 'tr', setLang: () => {}, t });

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'en' || v === 'tr') return v;
  } catch { /* private mode */ }
  return 'tr';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const initial = readStored();
    currentLang = initial;
    return initial;
  });

  useEffect(() => {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* private mode */ }
  }, [lang]);

  const setLang = useCallback((next) => {
    currentLang = next;          // set before render so `t()` is correct immediately
    setLangState(next);
  }, []);

  const toggle = useCallback(() => setLang(currentLang === 'tr' ? 'en' : 'tr'), [setLang]);

  // Keying on `lang` remounts the subtree, which is what makes a plain imported
  // `t()` work: children reached through props.children would otherwise keep
  // their old element identity and skip re-rendering.
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      <Fragment key={lang}>{children}</Fragment>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

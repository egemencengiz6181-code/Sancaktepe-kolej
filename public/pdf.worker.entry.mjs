// pdf.js worker'ı module worker olarak yükleniyor ve içinde de URL.parse
// kullanıyor (PDF içi bağlantıların çözümlenmesinde). Ana thread'deki
// src/lib/url-parse-polyfill.js worker'a ulaşmadığı için aynı şimi burada da
// uyguluyoruz, sonra gerçek worker'ı yüklüyoruz.
if (typeof URL.parse !== 'function') {
  URL.parse = function parse(url, base) {
    try {
      return base === undefined ? new URL(url) : new URL(url, base);
    } catch {
      return null;
    }
  };
}

if (typeof URL.canParse !== 'function') {
  URL.canParse = function canParse(url, base) {
    return URL.parse(url, base) !== null;
  };
}

await import('/pdf.worker.min.js');

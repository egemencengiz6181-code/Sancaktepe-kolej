// `URL.parse()` çok yeni bir API (Safari 18.4+, Chrome 126+, Firefox 126+).
// pdf.js 5.x bunu dokuz ayrı yerde kullanıyor ve desteklenmeyen tarayıcılarda
// "URL.parse is not a function" fırlatarak TÜM PDF'lerin yüklenmesini bozuyor.
// Spesifikasyona uygun şim: başarısız ayrıştırmada throw etmek yerine null döner.
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

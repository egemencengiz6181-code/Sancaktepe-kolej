export const news = [
  // İçerikler sonradan yüklenecek
];

export const getNewsBySlug = (slug) => news.find((n) => n.slug === slug);
export const getRelatedNews = (ids) => news.filter((n) => ids.includes(n.id));

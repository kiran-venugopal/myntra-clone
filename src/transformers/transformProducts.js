export function transformProductsData(data = {}) {
  let products = data?.products || [];

  let categories = [];
  products.forEach((p) => {
    if (!categories.includes(p.category)) categories.push(p.category);
  });

  let brands = [];
  products.forEach((b) => {
    if (!brands.includes(b.brand)) brands.push(b.brand);
  });

  return { products, brands, categories };
}

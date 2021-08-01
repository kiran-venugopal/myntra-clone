export function transformProductsData(data = {}) {
  let products = data?.products || [];

  let categories = products.map((p) => p.category);

  let brands = products.map((p) => p.brand);

  return { products, brands, categories };
}

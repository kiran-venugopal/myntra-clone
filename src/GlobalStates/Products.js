import { atom, selector } from "recoil";

export const ProductsAtom = atom({
  key: "PRODUCTS",
  default: {
    isLoading: true,
    products: []
  }
});

export const filteredProductsSelector = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const productsData = get(ProductsAtom);
    const products = productsData.products;

    return {
      isLoading: productsData.isLoading,
      products
    };
  }
});

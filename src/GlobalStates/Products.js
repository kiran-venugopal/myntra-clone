import { atom, selector } from "recoil";
import { FiltersAtom } from "./Filters";

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
    const filters = get(FiltersAtom);
    let products = productsData.products;

    Object.entries(filters.selected).forEach(([key, value]) => {
      products = products.filter((p) => {
        if (key === "gender") {
          return p[key] === value;
        }
        return value?.length ? value.includes(p[key]) : true;
      });
    });

    return {
      isLoading: productsData.isLoading,
      products
    };
  }
});

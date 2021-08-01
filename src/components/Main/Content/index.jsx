import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { baseUrl, fetchProductsPath } from "../../../constants";
import { FiltersAtom } from "../../../GlobalStates/Filters";
import {
  filteredProductsSelector,
  ProductsAtom
} from "../../../GlobalStates/Products";
import { transformProductsData } from "../../../transformers/transformProducts";
import ProductGrid from "./ProductGrid";

export default function Content() {
  const setProducts = useSetRecoilState(ProductsAtom);
  const setFilterData = useSetRecoilState(FiltersAtom);
  const [{ products }] = useRecoilState(filteredProductsSelector);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`${baseUrl}${fetchProductsPath}`);
      const data = await res.json();

      let transformed = transformProductsData(data);

      setProducts((prev) => ({
        ...prev,
        isLoading: false,
        products: transformed.products
      }));

      setFilterData((prev) => ({
        ...prev,
        all: {
          ...prev.all,
          categories: transformed.categories,
          brands: transformed.brands
        }
      }));
    };

    fetchProducts();
  }, []);

  return (
    <div className="content">
      {products.slice(50, 60).map((e) => (
        <ProductGrid {...e} key={e.productId} />
      ))}
    </div>
  );
}

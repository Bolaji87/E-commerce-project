import { useProducts } from "../../Hooks/contexts/ProductsContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./product.css";
import { ALLOEWD_CATEGORIES } from "../../route";
import { useEffect } from "react";
import { fetchCategoryProducts, fetchProducts } from "../../utils";
import { useParams } from "react-router-dom";

function Product({ onCartItems }) {
  const { onFilterProducts, products, setAllProducts, setProducts } =
    useProducts();
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      const getProducts = async () => {
        const res = await fetchProducts();
        setProducts(res);
        setAllProducts(res);
      };
      getProducts().catch((e) => console.error("we have an error", e));
    } else {
      const getCategoryProducts = async () => {
        const res = await fetchCategoryProducts(category);
        setProducts(res);
      };
      getCategoryProducts().catch((e) => console.error("we have an error", e));
    }
  }, [category, setAllProducts, setProducts]);

  return (
    <div className="products-cont">
      {!category ? (
        <div className="select-category">
          <span onClick={() => onFilterProducts()}>All</span>
          <span onClick={() => onFilterProducts(ALLOEWD_CATEGORIES.WOMENS)}>
            Women's
          </span>
          <span onClick={() => onFilterProducts(ALLOEWD_CATEGORIES.MENS)}>
            Men's
          </span>
        </div>
      ) : (
        <div className="select-category">
          <span>{category}</span>
        </div>
      )}

      <div className="products">
        <ul>
          {products.length > 0 ? (
            products.map(
              (product) =>
                product.category !== "jewelery" &&
                product.category !== "electronics" && (
                  <ProductCard
                    product={product}
                    key={product.id}
                    onCartItems={onCartItems}
                  />
                )
            )
          ) : (
            <Loading />
          )}
        </ul>
      </div>
    </div>
  );
}

function Loading() {
  return <h1 className="load">Loading products please wait ...</h1>;
}
export default Product;

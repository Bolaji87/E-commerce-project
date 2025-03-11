import { useProducts } from "../../Hooks/contexts/ProductsContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./product.css";
import { ALLOEWD_CATEGORIES } from "../../route";
import { useEffect, useState } from "react";
import { fetchCategoryProducts, fetchProducts } from "../../utils";
import { useParams } from "react-router-dom";

// const [products, setProducts] = useState([]);
// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch(`${BASE_URL}/products`);
//       if (!res.ok)
//         throw new Error("something went wrong with fetching products");

//       const data = await res.json();
//       setProducts(data);
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   fetchProducts();
// }, []);

// function handleCartItems(product) {
//   setCartItems((curProducts) => [...curProducts, product]);
// }

function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  function handleFilterProducts(productCategory = null) {
    if (productCategory) {
      const filterProducts = allProducts.filter(
        (product) => product.category === productCategory
      );
      setProducts(filterProducts);
    } else {
      setProducts(allProducts);
    }
  }

  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      const getProducts = async () => {
        const res = await fetchProducts();

        setProducts(res);
        setAllProducts(res);
      };
      getProducts().catch((e) =>
        console.error(e, "We have an erorr fetching products")
      );
    } else {
      const getCategoryProducts = async () => {
        const res = await fetchCategoryProducts(category);

        setProducts(res);
      };
      getCategoryProducts().catch((e) =>
        console.error(e, "We have an erorr fetching products")
      );
    }
  }, [category, setAllProducts, setProducts]);

  return (
    <div className="products-cont">
      {!category ? (
        <div className="select-category">
          <span onClick={() => handleFilterProducts()}>All</span>
          <span onClick={() => handleFilterProducts(ALLOEWD_CATEGORIES.WOMENS)}>
            Women's
          </span>
          <span onClick={() => handleFilterProducts(ALLOEWD_CATEGORIES.MENS)}>
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
                    category={product.category}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    id={product.id}
                    key={product.id}
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

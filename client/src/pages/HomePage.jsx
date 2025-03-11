import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import productsData from "../data/products";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;

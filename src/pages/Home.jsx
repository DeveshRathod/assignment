import React, { useEffect, useState } from "react";
import SelectSmall from "../components/filter";
import axios from "axios";
import { productsState } from "../store/productState";
import { useRecoilState, useRecoilValue } from "recoil";
import ProductCard from "../components/ProductCard";
import { cartState } from "../store/cartState";
import { searchState } from "../store/searchState";

const Home = () => {
  const [products, setProducts] = useRecoilState(productsState);
  const [cart, setCart] = useRecoilState(cartState);
  const [selected, setSelected] = useState(0);
  const search = useRecoilValue(searchState);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (selected === 0) {
          setProducts(response.data.products);
        } else if (selected === 1) {
          setProducts(
            response.data.products.filter((product) => product.price < 400)
          );
        } else if (selected === 2) {
          setProducts(
            response.data.products.filter(
              (product) => product.price >= 400 && product.price <= 600
            )
          );
        } else if (selected === 3) {
          setProducts(
            response.data.products.filter((product) => product.price > 600)
          );
        }
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setProducts, selected]);

  useEffect(() => {
    if (typeof search === "string" && search.trim() !== "") {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [search, products]);

  return (
    <div className="p-8">
      <div>
        <SelectSmall
          setProducts={setProducts}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <div className=" flex flex-wrap gap-8 mt-2">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://fakestoreapi.com/products";

export const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(API, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setProducts(response.data);
        } else {
          setError("Error al cargar productos");
        }
      } catch (err) {
        setError("Error de conexión");
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error };
};

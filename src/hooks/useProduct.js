import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://fakestoreapi.com/products/";

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("ID del producto requerido");
      setIsLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(`${API}${id}`);

        if (response.status === 200) {
          setProduct(response.data);
        } else {
          setError("Error al cargar el producto");
        }
      } catch (err) {
        setError("Error de conexión");
        console.error("Error fetching product:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, isLoading, error };
};

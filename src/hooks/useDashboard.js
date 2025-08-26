import { useState, useEffect } from "react";
import axios from "axios";
import { usePersitentStorage } from "./usePersitentStorage";

const URL = "http://localhost:3000/products";

export const useDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getItem } = usePersitentStorage();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const token = getItem("token");

        if (!token) {
          setError("No tienes permisos para acceder");
          return;
        }

        const response = await axios.get(URL, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        setProducts(response.data || []);
      } catch (err) {
        setError("Error al cargar productos del dashboard");
        console.error("Dashboard error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error };
};

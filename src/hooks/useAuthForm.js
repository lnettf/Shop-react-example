import { useState } from "react";

export const useAuthForm = (initialValues = { username: "", password: "" }) => {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) {
      setError(null);
    }
  };

  const resetForm = () => {
    setForm(initialValues);
    setError(null);
    setIsLoading(false);
  };

  const setFormError = (errorMessage) => {
    setError(errorMessage);
  };

  const setFormLoading = (loading) => {
    setIsLoading(loading);
  };

  return {
    form,
    error,
    isLoading,
    handleChange,
    resetForm,
    setFormError,
    setFormLoading,
  };
};

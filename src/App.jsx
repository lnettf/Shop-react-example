import {
  PageContainer,
  PageTitle,
  ProductsGrid,
  ProductCard,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  BuyButton,
  LoadingContainer,
  ErrorContainer,
} from "./App.styles";
import { useCartContext } from "./context/CartContext";
import { useProducts } from "./hooks/useProducts";
import { Link } from "react-router";

function App() {
  const { products, isLoading, error } = useProducts();
  const { addProduct: addProductContext } = useCartContext();

  const handleAddProduct = (product) => {
    addProductContext(product);
  };

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingContainer>Cargando productos...</LoadingContainer>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ErrorContainer>{error}</ErrorContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitle>Nuestra Tienda</PageTitle>
      <ProductsGrid>
        {products?.map((product) => (
          <ProductCard key={product.id}>
            <ImageContainer>
              <Link to={`/product/${product.id}`}>
                <ProductImage src={product.image} alt={product.title} />
              </Link>
            </ImageContainer>
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}€</ProductPrice>
              <BuyButton onClick={() => handleAddProduct(product)}>
                Añadir al carrito
              </BuyButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </PageContainer>
  );
}

export default App;

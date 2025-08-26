import { Link, useParams } from "react-router";
import {
  Container,
  Breadcrumb,
  ProductContainer,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductCategory,
  ProductRating,
  Stars,
  ProductDescription,
  DescriptionTitle,
  LoadingContainer,
  ErrorContainer,
} from "./ProductDetail.styles";
import { Button } from "../../../components/Button/Button";
import { useCartContext } from "../../../context/CartContext";
import { useProduct } from "../../../hooks/useProduct";

export const ProductDetail = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addProduct } = useCartContext();

  if (isLoading) {
    return (
      <Container>
        <LoadingContainer>Cargando producto...</LoadingContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorContainer>{error}</ErrorContainer>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <ErrorContainer>Producto no encontrado</ErrorContainer>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addProduct(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }

    if (rating % 1 !== 0) {
      stars.push("☆");
    }

    return stars.join("");
  };

  return (
    <Container>
      <Breadcrumb>
        <Link to="/">Inicio</Link> &gt;
        <span> {product.category}</span> &gt;
        <span> {product.title}</span>
      </Breadcrumb>

      <ProductContainer>
        <ImageContainer>
          <ProductImage src={product.image} alt={product.title} />
        </ImageContainer>

        <ProductInfo>
          <ProductCategory>{product.category}</ProductCategory>

          <ProductTitle>{product.title}</ProductTitle>

          {product.rating && (
            <ProductRating>
              <Stars>{renderStars(product.rating.rate)}</Stars>
              <span>{product.rating.rate}/5</span>
              <span>({product.rating.count} reseñas)</span>
            </ProductRating>
          )}

          <ProductPrice>{product.price}€</ProductPrice>

          <Button onClick={handleAddToCart}>Añadir al carrito</Button>
        </ProductInfo>
      </ProductContainer>

      {product.description && (
        <ProductDescription>
          <DescriptionTitle>Descripción del producto</DescriptionTitle>
          <p>{product.description}</p>
        </ProductDescription>
      )}
    </Container>
  );
};

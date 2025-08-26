import { useCartContext } from "../../context/CartContext";
import {
  CartContainer,
  CartTitle,
  EmptyCart,
  CartItems,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  RemoveButton,
  CartSummary,
  TotalPrice,
  ClearButton,
} from "./Cart.styles";

export const Cart = () => {
  const { products, removeProduct, clear } = useCartContext();

  const getTotalPrice = () => {
    return products
      .reduce((total, product) => total + product.price, 0)
      .toFixed(2);
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  const handleClearCart = () => {
    clear();
  };

  if (products.length === 0) {
    return (
      <CartContainer>
        <CartTitle>Carrito de Compras</CartTitle>
        <EmptyCart>
          <p>Tu carrito está vacío</p>
          <p>¡Añade algunos productos para empezar!</p>
        </EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Carrito de Compras</CartTitle>

      <CartItems>
        {products.map((product, index) => (
          <CartItem key={`${product.id}-${index}`}>
            <ItemImage src={product.image} alt={product.title} />
            <ItemInfo>
              <ItemTitle>{product.title}</ItemTitle>
              <ItemPrice>{product.price}€</ItemPrice>
            </ItemInfo>
            <RemoveButton onClick={() => handleRemoveProduct(product.id)}>
              Eliminar
            </RemoveButton>
          </CartItem>
        ))}
      </CartItems>

      <CartSummary>
        <TotalPrice>Total: {getTotalPrice()}€</TotalPrice>
        <ClearButton onClick={handleClearCart}>Vaciar carrito</ClearButton>
      </CartSummary>
    </CartContainer>
  );
};

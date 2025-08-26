import { Link } from "react-router";
import { useCartContext } from "../../context/CartContext";
import { Button } from "../Button/Button";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  NavLinks,
  CartLink,
  CartBadge,
  CartIcon,
  AuthButtons,
} from "./Header.styles";

export const Header = () => {
  const { products, clear } = useCartContext();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to="/">
            <h1>🛍️ TiendaApp</h1>
          </Link>
        </Logo>

        <Nav>
          <NavLinks>
            <Link to="/">Inicio</Link>
            <Link to="/dashboard">Dashboard</Link>
          </NavLinks>

          <CartLink>
            <Link to="/cart">
              <CartIcon>🛒</CartIcon>
              <span>Carrito</span>
              {products.length > 0 && <CartBadge>{products.length}</CartBadge>}
            </Link>
          </CartLink>

          <AuthButtons>
            <Button
              variant="secondary"
              size="small"
              onClick={clear}
              disabled={products.length === 0}
            >
              Limpiar
            </Button>

            <Link to="/login">
              <Button variant="secondary" size="small">
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button variant="primary" size="small">
                Registro
              </Button>
            </Link>
          </AuthButtons>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

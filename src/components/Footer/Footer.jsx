import { Link } from "react-router";
import {
  FooterContainer,
  FooterContent,
  FooterTop,
  FooterSection,
  FooterTitle,
  FooterLinks,
  FooterLink,
  FooterText,
  SocialLinks,
  SocialLink,
  FooterBottom,
  Copyright,
  FooterBottomLinks,
} from "./Footer.styles";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterTitle>🛍️ TiendaApp</FooterTitle>
            <FooterText>
              Tu tienda online de confianza. Encuentra los mejores productos con
              la mejor calidad y precios competitivos.
            </FooterText>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                📘
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                🐦
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                📷
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                💼
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Navegación</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <Link to="/">Inicio</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/cart">Carrito</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/dashboard">Dashboard</Link>
              </FooterLink>
              <FooterLink>
                <a href="#productos">Productos</a>
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Cuenta</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <Link to="/login">Iniciar Sesión</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/register">Crear Cuenta</Link>
              </FooterLink>
              <FooterLink>
                <a href="#perfil">Mi Perfil</a>
              </FooterLink>
              <FooterLink>
                <a href="#pedidos">Mis Pedidos</a>
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contacto</FooterTitle>
            <FooterText>
              📧 info@tiendaapp.com
              <br />
              📞 +34 900 123 456
              <br />
              📍 Calle Principal 123
              <br />
              Madrid, España
            </FooterText>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {currentYear} TiendaApp. Todos los derechos reservados.
          </Copyright>
          <FooterBottomLinks>
            <a href="#privacidad">Política de Privacidad</a>
            <a href="#terminos">Términos de Uso</a>
            <a href="#cookies">Cookies</a>
          </FooterBottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

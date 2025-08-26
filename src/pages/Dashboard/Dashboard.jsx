import { useDashboard } from "../../hooks/useDashboard";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardTitle,
  ProductsGrid,
  ProductCard,
  ProductName,
  ProductPrice,
  LoadingContainer,
  ErrorContainer,
  EmptyState,
} from "./Dashboard.styles";

export const Dashboard = () => {
  const { products, isLoading, error } = useDashboard();

  if (isLoading) {
    return (
      <DashboardContainer>
        <LoadingContainer>Cargando dashboard...</LoadingContainer>
      </DashboardContainer>
    );
  }

  if (error) {
    return (
      <DashboardContainer>
        <ErrorContainer>{error}</ErrorContainer>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
      </DashboardHeader>

      {products.length === 0 ? (
        <EmptyState>
          <p>No hay productos disponibles</p>
        </EmptyState>
      ) : (
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id || product.name}>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}€</ProductPrice>
            </ProductCard>
          ))}
        </ProductsGrid>
      )}
    </DashboardContainer>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Breadcrumb = styled.div`
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #6b7280;

  a {
    color: #3b82f6;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #2563eb;
      text-decoration: underline;
    }
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.25;
  margin: 0;
`;

export const ProductPrice = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #e11d48;
  margin: 0;
`;

export const ProductCategory = styled.div`
  display: inline-block;
  background: #f3f4f6;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: capitalize;
  width: fit-content;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const Stars = styled.div`
  color: #fbbf24;
`;

export const ProductDescription = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  line-height: 1.6;
  color: #374151;
`;

export const DescriptionTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: #6b7280;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  color: #e11d48;
  font-size: 1.2rem;
  text-align: center;
`;

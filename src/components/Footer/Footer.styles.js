import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #1f2937;
  color: white;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #f9fafb;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterLink = styled.li`
  a {
    color: #d1d5db;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #3b82f6;
    }
  }
`;

export const FooterText = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #374151;
  border-radius: 50%;
  color: #d1d5db;
  text-decoration: none;
  font-size: 1.25rem;
  transition: all 0.2s ease;

  &:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-2px);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: #9ca3af;
  margin: 0;
  font-size: 0.875rem;
`;

export const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;

    &:hover {
      color: #3b82f6;
    }
  }
`;

import styled, { css } from "styled-components";

const sizeVariants = {
  small: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `,
};

const colorVariants = {
  primary: css`
    background: #3b82f6;
    color: white;
    border: 2px solid #3b82f6;

    &:hover:not(:disabled) {
      background: #2563eb;
      border-color: #2563eb;
    }

    &:active {
      background: #1d4ed8;
      border-color: #1d4ed8;
    }
  `,
  secondary: css`
    background: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;

    &:hover:not(:disabled) {
      background: #3b82f6;
      color: white;
    }

    &:active {
      background: #2563eb;
      border-color: #2563eb;
    }
  `,
  danger: css`
    background: #ef4444;
    color: white;
    border: 2px solid #ef4444;

    &:hover:not(:disabled) {
      background: #dc2626;
      border-color: #dc2626;
    }

    &:active {
      background: #b91c1c;
      border-color: #b91c1c;
    }
  `,
};

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;

  ${({ size = "medium" }) => sizeVariants[size]}
  ${({ variant = "primary" }) => colorVariants[variant]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

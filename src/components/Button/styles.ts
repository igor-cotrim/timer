import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

type ButtonContainerProps = {
  variant: ButtonVariant;
};

const ButtonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ variant, theme }) => css`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background: ${theme.green500};
    color: ${theme.white};
  `}
`;

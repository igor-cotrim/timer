import * as S from "./styles";

type ButtonProps = {
  variant?: S.ButtonVariant;
};

const Button = ({ variant = "primary" }: ButtonProps) => {
  return <S.ButtonContainer variant={variant}>Enviar</S.ButtonContainer>;
};

export default Button;

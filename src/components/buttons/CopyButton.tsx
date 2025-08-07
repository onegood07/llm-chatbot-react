import { COPY_BUTTON_TEXT } from "../../constants/buttonText";
import * as S from "./copyButton.style";

interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <S.ButtonContainer onClick={handleCopy}>
      <S.CopyIcon />
      <S.ButtonText>{COPY_BUTTON_TEXT}</S.ButtonText>
    </S.ButtonContainer>
  );
};

export default CopyButton;

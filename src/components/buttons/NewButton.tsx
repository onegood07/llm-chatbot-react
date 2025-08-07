import { NEW_CHAT_BUTTON_TEXT } from "../../constants";
import * as S from "../buttons/newButton.style";

type NewButtonProps = {
  onClick: () => void;
};

const NewButton = ({ onClick }: NewButtonProps) => {
  return (
    <S.ButtonBg onClick={onClick}>
      <S.NewChatIcon />
      <S.NewChatText>{NEW_CHAT_BUTTON_TEXT}</S.NewChatText>
    </S.ButtonBg>
  );
};

export default NewButton;

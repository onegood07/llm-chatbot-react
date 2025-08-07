import { NO_TITLE_TEXT } from "../constants/buttonText";
import * as S from "./conversation.style";

type ConversationProps = {
  text: string | null;
  onClick: () => void;
};

const Conversation = ({ text, onClick }: ConversationProps) => {
  return (
    <S.ChatContainer onClick={onClick}>
      <S.RowWrapper>
        <S.Icon>
          <S.ConversationIcon />
        </S.Icon>
        <S.Text>{text ? text : NO_TITLE_TEXT}</S.Text>
      </S.RowWrapper>
    </S.ChatContainer>
  );
};

export default Conversation;

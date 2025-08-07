import * as S from "components/chats/chat.style";
import CopyButton from "../buttons/CopyButton";

type ChatProps = {
  text: string;
};

const Chat = ({ text }: ChatProps) => {
  return (
    <S.ChatContainer>
      <S.RowWrapper>
        <S.Icon>
          <S.RobotIcon />
        </S.Icon>
        <S.Text>{text}</S.Text>
      </S.RowWrapper>
      <S.FooterRowWrapper>
        <S.IconRowWrapper>
          <CopyButton text={text} />
        </S.IconRowWrapper>
      </S.FooterRowWrapper>
    </S.ChatContainer>
  );
};

export default Chat;

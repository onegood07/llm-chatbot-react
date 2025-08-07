import * as S from "components/chats/userChat.style";

type UserChatProps = {
  text: string;
};

const UserChat = ({ text }: UserChatProps) => {
  return (
    <S.ChatContainer>
      <S.RowWrapper>
        <S.Icon>
          <S.UserIcon />
        </S.Icon>
        <S.Text>{text}</S.Text>
      </S.RowWrapper>
    </S.ChatContainer>
  );
};

export default UserChat;

import * as S from "../components/newChatPart.style";
import { CHATTING_PAGE_MESSAGE, CHATTING_HELPER_TEXT } from "../constants";

const NewChatPart = () => (
  <S.IntroWrapper>
    <S.WelcomeMessage>{CHATTING_PAGE_MESSAGE}</S.WelcomeMessage>
    <S.HelperText>{CHATTING_HELPER_TEXT}</S.HelperText>
  </S.IntroWrapper>
);

export default NewChatPart;

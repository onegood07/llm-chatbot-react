import * as S from "./chattingPage.styles";
import { chattingPageWelcome } from "../utils/messageUtils";
import {
  CHATTING_HELPER_TEXT,
  SAMPLE_SUGGESTED_TEXT,
  CHATTING_PLACEHOLDERS,
  SEND_BUTTON_TEXT,
} from "../constants";
import KeywordButton from "../components/KeywordButton";

const ChattingPage = () => {
  return (
    <S.ChattingPageContainer>
      <S.ChattingPartContainer>
        <S.WelcomeMessage>{chattingPageWelcome("김세종")}</S.WelcomeMessage>
        <S.HelperText>{CHATTING_HELPER_TEXT}</S.HelperText>
        <S.RowWrapper>
          <KeywordButton text="졸업요건" icon="graduationCap" />
          <KeywordButton text="수강편람" icon="book" />
          <KeywordButton text="전공과목" icon="book" />
          <KeywordButton text="동아리" icon="book" />
        </S.RowWrapper>
        <S.ChattingWrapper>
          <S.ChattingInput
            placeholder={CHATTING_PLACEHOLDERS}
          ></S.ChattingInput>
          <S.SendButton>
            <S.paperPlaneIcon />
            {SEND_BUTTON_TEXT}
          </S.SendButton>
        </S.ChattingWrapper>
      </S.ChattingPartContainer>
    </S.ChattingPageContainer>
  );
};

export default ChattingPage;

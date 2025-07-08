import * as S from "./chattingPage.styles";
import { chattingPageWelcome } from "../utils/messageUtils";
import {
  CHATTING_HELPER_TEXT,
  SAMPLE_SUGGESTED_TEXT,
  CHATTING_PLACEHOLDERS,
  SEND_BUTTON_TEXT,
} from "../constants";
import SuggestedQuestion from "../components/SuggestedQuestion";

const ChattingPage = () => {
  return (
    <S.ChattingPageContainer>
      <S.ChattingPartContainer>
        <S.WelcomeMessage>{chattingPageWelcome("고다경")}</S.WelcomeMessage>
        <S.HelperText>{CHATTING_HELPER_TEXT}</S.HelperText>
        <S.RowWrapper>
          <SuggestedQuestion
            icon={"book"}
            text={SAMPLE_SUGGESTED_TEXT["book"]}
          />
          <SuggestedQuestion
            icon={"graduationCap"}
            text={SAMPLE_SUGGESTED_TEXT["graduationCap"]}
          />
          <SuggestedQuestion
            icon={"laptop"}
            text={SAMPLE_SUGGESTED_TEXT["laptop"]}
          />
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

import * as S from "./loginPage.styles";
import {
  LOGIN_BUTTON_TEXT,
  FIND_PASSWORD_BUTTON_TEXT,
  LOGIN_WELCOME_MESSAGE,
  LOGIN_HELPER_TEXT,
  FORGOT_PASSWORD_TEXT,
} from "../constants";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <S.LoginPageContainer>
      <S.LoginPartContainer>
        <S.ColumnWrapper>
          <S.WelcomeMessage>{LOGIN_WELCOME_MESSAGE}</S.WelcomeMessage>
          <S.HelperText>{LOGIN_HELPER_TEXT}</S.HelperText>
        </S.ColumnWrapper>
        <LoginForm inputType="id" />
        <LoginForm inputType="password" />
        <S.LoginButton>{LOGIN_BUTTON_TEXT}</S.LoginButton>
      </S.LoginPartContainer>
      <S.RowWrapper>
        <S.HelperText>{FORGOT_PASSWORD_TEXT}</S.HelperText>
        <S.FindPasswordButton>{FIND_PASSWORD_BUTTON_TEXT}</S.FindPasswordButton>
      </S.RowWrapper>
    </S.LoginPageContainer>
  );
};

export default LoginPage;

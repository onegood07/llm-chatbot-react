import * as S from "../pages/loginPage.styles";
import { LoginFormInputType } from "../types/loginFormTypes";
import { INPUT_LABELS, PLACEHOLDERS } from "../constants";

const icon = {
  id: <S.LoginFormIDIcon />,
  password: <S.LoginFormPWIcon />,
};

type LoginFormProps = {
  inputType: LoginFormInputType;
};

const LoginForm = ({ inputType }: LoginFormProps) => {
  return (
    <S.LoginFormWrapper>
      <S.LoginFormLabel>{INPUT_LABELS[inputType]}</S.LoginFormLabel>
      <S.InputWrapper>
        {icon[inputType]}
        <S.LoginInput placeholder={PLACEHOLDERS[inputType]} />
      </S.InputWrapper>
    </S.LoginFormWrapper>
  );
};

export default LoginForm;

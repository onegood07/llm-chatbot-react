import * as S from "../pages/loginPage.styles";
import { LoginFormInputType } from "../types";
import { LOGIN_INPUT, PLACEHOLDERS } from "../constants";

const icon = {
  id: <S.LoginFormIDIcon />,
  password: <S.LoginFormPWIcon />,
};

type LoginFormProps = {
  inputType: LoginFormInputType;
  value: string;
  onChange: (value: string) => void;
};

const LoginForm = ({ inputType, value, onChange }: LoginFormProps) => {
  return (
    <S.LoginFormWrapper>
      <S.LoginFormLabel>{LOGIN_INPUT[inputType]}</S.LoginFormLabel>
      <S.InputWrapper>
        {icon[inputType]}
        <S.LoginInput
          placeholder={PLACEHOLDERS[inputType]}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={inputType === "password" ? "password" : "text"}
        />
      </S.InputWrapper>
    </S.LoginFormWrapper>
  );
};

export default LoginForm;

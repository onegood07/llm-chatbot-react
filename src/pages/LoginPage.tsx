import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  LOGIN_BUTTON_TEXT,
  FIND_PASSWORD_BUTTON_TEXT,
  LOGIN_WELCOME_MESSAGE,
  LOGIN_HELPER_TEXT,
  FORGOT_PASSWORD_TEXT,
  LOGIN_INPUT_TYPE,
  EMPTY_STRING,
} from "../constants";
import { LoginFormData, LoginFormInputType } from "../types";
import LoginForm from "../components/LoginForm";
import { useUserStore } from "../store/userStore";
import * as S from "./loginPage.styles";

const LoginPage = () => {
  const setIsLogin = useUserStore((state) => state.setIsLogin);
  const setStudentId = useUserStore((state) => state.setStudentId);

  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    id: EMPTY_STRING,
    password: EMPTY_STRING,
  });
  const [message, setMessage] = useState<string>(EMPTY_STRING);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (inputType: LoginFormInputType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [inputType]: value,
    }));
  };

  const handleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const payload: LoginFormData = {
      id: formData.id,
      password: formData.password,
    };

    try {
      const response = await axios.post("/api/login", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        console.log("..", response.data.success);
        setMessage("정상적으로 로그인되었습니다!");
        setIsLogin(true);
        setStudentId(formData.id);
        navigate("/detail");
      } else {
        setMessage("아이디나 비밀번호를 다시 확인해주세요.");
      }
    } catch (err: any) {
      if (err.response) {
        setMessage(`로그인 실패: ${err.response.data.message || err.message}`);
      } else {
        setMessage(`에러 발생: ${err.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.LoginPageContainer>
      <S.LoginPartContainer>
        <S.ColumnWrapper>
          <S.WelcomeMessage>{LOGIN_WELCOME_MESSAGE}</S.WelcomeMessage>
          <S.HelperText>{LOGIN_HELPER_TEXT}</S.HelperText>
        </S.ColumnWrapper>
        <LoginForm
          inputType={LOGIN_INPUT_TYPE.ID}
          value={formData.id}
          onChange={(val) => handleInputChange(LOGIN_INPUT_TYPE.ID, val)}
        />
        <LoginForm
          inputType={LOGIN_INPUT_TYPE.PASSWORD}
          value={formData.password}
          onChange={(val) => handleInputChange(LOGIN_INPUT_TYPE.PASSWORD, val)}
        />
        <S.LoginButton onClick={handleLogin}>{LOGIN_BUTTON_TEXT}</S.LoginButton>
        <S.HelperText>{message}</S.HelperText>
      </S.LoginPartContainer>
      <S.RowWrapper>
        <S.HelperText>{FORGOT_PASSWORD_TEXT}</S.HelperText>
        <S.FindPasswordButton>{FIND_PASSWORD_BUTTON_TEXT}</S.FindPasswordButton>
      </S.RowWrapper>
    </S.LoginPageContainer>
  );
};

export default LoginPage;

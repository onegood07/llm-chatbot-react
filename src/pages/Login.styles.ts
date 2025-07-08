import styled from "styled-components";
import { FaUser, FaLock } from "react-icons/fa";

export const LoginPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.loginPageBg};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginPartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  width: 34rem;
  height: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WelcomeMessage = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.2rem;
  font-weight: bold;
  white-space: pre-line;
  margin: 0;
`;

export const HelperText = styled.p`
  color: ${({ theme }) => theme.colors.captionText};
  font-size: 0.8rem;
  white-space: pre-line;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormLabel = styled.p`
  color: ${({ theme }) => theme.colors.captionText};
  font-size: 0.8rem;
  font-weight: 600;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.strokeGray};
  border-radius: 10px;
  width: 20rem;
  height: 3rem;
  display: flex;
  align-items: center;
`;

export const LoginInput = styled.input`
  border: none;
  outline: none;
  user-select: none;
  margin-left: 0.8rem;
`;

export const LoginFormIDIcon = styled(FaUser as React.ComponentType)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 1rem;
`;

export const LoginFormPWIcon = styled(FaLock as React.ComponentType)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 1rem;
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  width: 60%;
  height: 3rem;
  border: none;
  border-radius: 10px;
  margin-top: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    cursor: pointer;
  }
`;

export const FindPasswordButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  margin-left: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    cursor: pointer;
  }
`;

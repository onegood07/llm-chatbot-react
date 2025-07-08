import styled from "styled-components";
import {
  FaBook,
  FaGraduationCap,
  FaLaptop,
  FaPaperPlane,
} from "react-icons/fa";

export const ChattingPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.chattingPageBg};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ChattingPartContainer = styled.div`
  border-radius: 10px;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const WelcomeMessage = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.6rem;
  font-weight: bold;
  white-space: pre-line;
  margin: 0;
`;

export const HelperText = styled.p`
  color: ${({ theme }) => theme.colors.captionText};
  font-size: 1rem;
  white-space: pre-line;
`;

export const QuestionBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.strokeGray};
  border-radius: 10px;
  width: 40vw;
  height: 16vh;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.6rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const BookIcon = styled(FaBook as React.ComponentType)`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 1.2rem;
`;

export const graduationCapIcon = styled(FaGraduationCap as React.ComponentType)`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 1.4rem;
`;

export const laptopIcon = styled(FaLaptop as React.ComponentType)`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 1.4rem;
`;

export const paperPlaneIcon = styled(FaPaperPlane as React.ComponentType)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
`;

export const ChattingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.strokeGray};
  border-radius: 10px;
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10rem;
`;

export const ChattingInput = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  user-select: none;
  margin-left: 0.8rem;
`;

export const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  width: 8%;
  height: 3rem;
  border: none;
  border-radius: 10px;
  margin-right: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    cursor: pointer;
  }
`;

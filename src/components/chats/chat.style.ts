import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export const ChatContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  width: 96%;
  height: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  font-weight: 400;
  white-space: pre-line;
  margin: 0;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.6rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconRowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  margin-left: 4rem;
  margin-top: 1rem;
`;

export const FooterRowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const SendButton = styled.button<{ $isSending?: boolean }>`
  background-color: ${({ theme, $isSending }) =>
    $isSending ? theme.colors.iconGray : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  margin-right: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme, $isSending }) =>
      $isSending ? theme.colors.iconGray : theme.colors.primaryDark};
    cursor: ${({ $isSending }) => ($isSending ? "default" : "pointer")};
  }
`;

export const PaperPlaneIcon = styled(FaPaperPlane as React.ComponentType)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
`;

export const UserIcon = styled(FaUser as React.ComponentType)`
  color: ${({ theme }) => theme.colors.iconGray};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
`;

export const RobotIcon = styled(FaRobot as React.ComponentType)`
  color: ${({ theme }) => theme.colors.iconGray};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
`;

export const ChatIcon = styled(
  HiOutlineChatBubbleLeftRight as React.ComponentType
)`
  color: ${({ theme }) => theme.colors.iconGray};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
`;

export const Icon = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
`;

import styled from "styled-components";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export const ChatContainer = styled.button`
  background-color: #f8f6f6ea;
  position: relative;
  border: none;
  border-radius: 20px;
  width: auto;
  height: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:hover {
    background-color: ${({ theme }) => theme.colors.iconGray};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.1rem;
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

export const ConversationIcon = styled(
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

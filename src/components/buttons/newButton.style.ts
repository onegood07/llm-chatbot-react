import styled from "styled-components";
import { MdChat } from "react-icons/md";

export const ButtonBg = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.8px solid ${({ theme }) => theme.colors.chatBg};
  font-weight: 700;
  width: 98%;
  height: 4%;
  border-radius: 5%;
  margin-right: 0.6rem;
  display: flex;

  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.keywordButtonBg};
    cursor: pointer;
  }
`;

export const NewChatIcon = styled(MdChat as React.ComponentType)`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 0.9rem;
`;

export const NewChatText = styled.p`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 0.9rem;
`;

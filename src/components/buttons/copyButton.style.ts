import styled from "styled-components";
import { FiClipboard } from "react-icons/fi";

export const CopyIcon = styled(FiClipboard as React.ComponentType)`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 0.9rem;
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 0.8rem;
`;

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.8px solid ${({ theme }) => theme.colors.chatBg};
  font-weight: 700;
  width: 4rem;
  height: 2rem;
  border-radius: 20px;
  margin-right: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.keywordButtonBg};
    cursor: pointer;
  }
`;

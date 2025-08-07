import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const ButtonBg = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.8px solid ${({ theme }) => theme.colors.chatBg};
  font-weight: 700;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
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

export const TabIcon = styled(FaBars as React.ComponentType)`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 0.9rem;
`;

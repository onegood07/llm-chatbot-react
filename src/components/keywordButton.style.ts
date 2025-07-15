import styled from "styled-components";
import { FaBook, FaGraduationCap, FaLaptop } from "react-icons/fa";

export const keywordContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.keywordButtonBg};
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.keywordButtonHoverBg};
  }
`;

export const keywordText = styled.p`
  color: ${({ theme }) => theme.colors.iconGray};
  font-size: 1.2rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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

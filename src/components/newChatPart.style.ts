import styled, { keyframes } from "styled-components";

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const fadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const WelcomeMessage = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.6rem;
  font-weight: bold;
  white-space: pre-line;
  margin: 0;

  opacity: 0;
  animation: ${fadeSlideIn} 0.6s ease-out forwards;
  animation-delay: 0.1s;
`;

export const HelperText = styled.p`
  color: ${({ theme }) => theme.colors.captionText};
  font-size: 1rem;
  white-space: pre-line;

  opacity: 0;
  animation: ${fadeSlideIn} 0.6s ease-out forwards;
  animation-delay: 0.6s;
`;

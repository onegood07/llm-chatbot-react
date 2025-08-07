import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";

export const DetailPageContainer = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const PContainer = styled.div`
  background-color: #fffefe;
  border-radius: 10px;
  flex: 1;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2rem;
`;

export const ChattingPartContainer = styled.div`
  border-radius: 10px;
  flex: 1;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  gap: 2rem;
  box-sizing: border-box;
`;

export const HeadRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const HistoryLabel = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.2rem;
  font-weight: 600;
  white-space: pre-line;
  margin: 0;
`;

export const ChatContainer = styled(ChattingPartContainer)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HistoryContainer = styled(PContainer)`
  flex: 0 0 20%;
`;

export const BottomStickyWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`;

export const ListRowWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChattingWrapper = styled.div`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.strokeGray};
  border-radius: 30px;
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const ChattingInput = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  user-select: none;
  margin-left: 0.8rem;
`;

export const paperPlaneIcon = styled(FaPaperPlane as React.ComponentType)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
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

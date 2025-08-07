import React, { useEffect, useState } from "react";
import axios from "axios";

import { useUserStore } from "../store/userStore";
import { CHATTING_PLACEHOLDERS, CONVERSATION_LABEL } from "../constants";
import type {
  QuestionRequest,
  ConversationType,
  ConversationHistoryType,
} from "../types";

import Conversation from "../components/Conversation";
import NewChatPart from "../components/NewChatPart";
import { Chat, UserChat } from "../components/chats";
import { TapButton, NewButton } from "../components/buttons";

import * as S from "./detailPage.style";

const DetailPage = () => {
  const studentId = useUserStore((state) => state.studentId);

  const [isTabOpen, setIsTabOpen] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [chatInput, setChatInput] = useState<QuestionRequest>({
    question: "",
    studentId: studentId,
    conversationId: null,
  });
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  const [chatHistories, setChatHistories] = useState<ConversationHistoryType[]>(
    []
  );
  const [conversationId, setConversationId] = useState<number | null>(null);

  const handleTapButtonClick = () => {
    setIsTabOpen((pre) => {
      const next = !pre;
      if (next) getHistoryList();
      return next;
    });
  };

  const handleNewButtonClick = () => {
    resetChatting();
  };

  const resetChatting = () => {
    setConversationId(null);
    setChatInput({
      question: "",
      studentId: studentId,
      conversationId: null,
    });

    setChatHistories([]);
    setIsSending(false);
  };

  const handleMessageSendClick = () => {
    if (isSending || inputValue.trim() === "") return;

    const questionText = inputValue;
    setInputValue("");

    const newInput: QuestionRequest = {
      question: questionText,
      studentId,
      conversationId,
    };

    setChatInput(newInput);
    postChatMessage(newInput);
  };

  const handleConversationClick = (id: number) => {
    setChatHistories([]);
    setConversationId(id);
    setChatInput((pre) => ({
      ...pre,
      conversationId: id,
    }));
  };

  const postChatMessage = async (payload: QuestionRequest) => {
    setIsSending(true);

    console.log("➡️ 전송하는 Request", payload);
    // FIXME: chat 주소
    try {
      const response = await axios.post("", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.status) {
        setChatHistories((prev) => [...prev, response.data]);
        setConversationId(response.data.conversationId);
        console.log("대화 성공! 🤖 응답: ", response.data);
      } else {
        console.log("대화 에러 발생");
      }
    } catch (err: any) {
      if (err.response) {
        console.log("에러", err.response.data);
        const errorMessage = [
          err.response.data.question,
          err.response.data.answer,
        ];
        alert(errorMessage.join("\n"));
      } else {
        console.log("에러 발생함");
      }
    } finally {
      setIsSending(false);
      setInputValue("");
    }
  };

  const getHistoryList = async () => {
    // FIXME: conversations 주소
    try {
      const response = await axios.get("", {
        params: {
          studentId: studentId,
        },
        headers: {
          Accept: "application/json",
        },
      });

      if (response.status) {
        console.log("지난 대화 불러오기 ", response.data);
        setConversations(response.data);
      } else {
        console.log("response 에러");
      }
    } catch (err: any) {
      if (err.response) {
        console.log("에러", err);
      } else {
        console.log("에러 발생함");
      }
    }
  };

  const getHistoryLog = async (id: number) => {
    if (!id || isNaN(id)) {
      console.warn("❌ 잘못된 conversationId:", id);
      return;
    }

    try {
      // FIXME: history 주소
      const response = await axios.get("", {
        params: {
          conversationId: id,
        },
        headers: {
          Accept: "application/json",
        },
      });

      if (response.status) {
        setChatHistories(response.data.history);
        console.log("대화 역사 불러옴");
        console.log(response.data.history);
      } else {
        console.log("response 에러");
      }
    } catch (err: any) {
      if (err.response) {
        console.log("에러", err);
      } else {
        console.log("에러 발생함");
      }
    }
  };

  useEffect(() => {
    if (conversationId !== null && conversationId !== undefined) {
      getHistoryLog(conversationId);
    }
  }, [conversationId]);

  useEffect(() => {}, [chatHistories]);

  return (
    <S.DetailPageContainer>
      <S.RowWrapper>
        {isTabOpen && (
          <S.HistoryContainer>
            <S.HeadRowWrapper>
              <S.HistoryLabel>{CONVERSATION_LABEL}</S.HistoryLabel>
              <TapButton onClick={handleTapButtonClick} />
            </S.HeadRowWrapper>
            <NewButton onClick={handleNewButtonClick} />
            <S.ListRowWrapper>
              {conversations.length > 0 &&
                conversations
                  .filter((con) => con.title !== null)
                  .map((con) => (
                    <Conversation
                      key={con.startedAt}
                      text={con.title}
                      onClick={() => {
                        console.log(
                          "클릭된 conversationId:",
                          con.conversationId
                        );
                        handleConversationClick(con.conversationId);
                      }}
                    />
                  ))}
            </S.ListRowWrapper>
          </S.HistoryContainer>
        )}
        {!isTabOpen && <TapButton onClick={handleTapButtonClick} />}
        <S.ChatContainer>
          <S.ListRowWrapper>
            {chatInput.question !== "" && chatHistories.length < 1 && (
              <>
                <UserChat text={chatInput.question} />
                <Chat text="답변 생성 중..." />
              </>
            )}
            {chatHistories.length > 0 &&
              chatHistories.map((his) => (
                <React.Fragment key={`${his.conversationId}-${his.createdAt}`}>
                  <UserChat text={his.question} />
                  <Chat text={his.answer} />
                </React.Fragment>
              ))}
            {chatHistories.length === 0 && conversationId === null && (
              <NewChatPart />
            )}
            <S.BottomStickyWrapper></S.BottomStickyWrapper>
          </S.ListRowWrapper>
          <S.ChattingWrapper>
            <S.ChattingInput
              placeholder={CHATTING_PLACEHOLDERS}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></S.ChattingInput>
            <S.SendButton
              $isSending={isSending}
              disabled={isSending}
              onClick={handleMessageSendClick}
            >
              <S.paperPlaneIcon />
            </S.SendButton>
          </S.ChattingWrapper>
        </S.ChatContainer>
      </S.RowWrapper>
    </S.DetailPageContainer>
  );
};

export default DetailPage;

export interface ConversationType {
  conversationId: number;
  startedAt: string;
  title: string | null;
}

export interface ConversationHistoryType {
  question: string;
  answer: string;
  createdAt: string;
  conversationId: number;
}

import * as S from "../pages/chattingPage.styles";

const icons = {
  book: <S.BookIcon />,
  graduationCap: <S.graduationCapIcon />,
  laptop: <S.laptopIcon />,
};

type SuggestedQuestionProps = {
  icon: "book" | "graduationCap" | "laptop";
  text: string;
};

const SuggestedQuestion = ({ icon, text }: SuggestedQuestionProps) => {
  return (
    <S.QuestionBox>
      <S.ColumnWrapper>
        {icons[icon]}
        <S.HelperText>{text}</S.HelperText>
      </S.ColumnWrapper>
    </S.QuestionBox>
  );
};

export default SuggestedQuestion;

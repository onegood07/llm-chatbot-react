import * as S from "./keywordButton.style";

const icons = {
  book: <S.BookIcon />,
  graduationCap: <S.graduationCapIcon />,
  laptop: <S.laptopIcon />,
};

type keywordProps = {
  text: string;
  icon: "book" | "graduationCap" | "laptop";
};

const KeywordButton = ({ text, icon }: keywordProps) => {
  return (
    <S.keywordContainer>
      <S.RowWrapper>
        {icons[icon]}
        <S.keywordText>{text}</S.keywordText>
      </S.RowWrapper>
    </S.keywordContainer>
  );
};

export default KeywordButton;

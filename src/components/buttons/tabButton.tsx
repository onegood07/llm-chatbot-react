import * as S from "../buttons/tabButton.style";

type TapButtonProps = {
  onClick: () => void;
};

const TapButton = ({ onClick }: TapButtonProps) => {
  return (
    <S.ButtonBg onClick={onClick}>
      <S.TabIcon />
    </S.ButtonBg>
  );
};

export default TapButton;

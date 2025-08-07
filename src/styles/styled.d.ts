import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      chattingPageBg: string;
      loginPageBg: string;
      captionText: string;
      iconGray: string;
      strokeGray: string;
      white: string;
      black: string;
      primaryDark: string;
      keywordButtonBg: string;
      keywordButtonHoverBg: string;
      chatBg: string;
    };
  }
}

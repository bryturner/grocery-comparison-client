import styled, { ThemeProvider } from "styled-components";

/* font-family: 'Comic Neue', cursive;
font-family: 'Delius Swash Caps', cursive;
font-family: 'IBM Plex Sans', sans-serif;
font-family: 'Mali', cursive;
font-family: 'Roboto', sans-serif; */

// ${props => props.theme.}

export const theme = {
  fontSize: {
    sm: "1.2rem",
    smMd: "1.4rem",
    md: "1.5rem",
    mdLg: "1.6rem",
    lg: "2rem",
    hd1: "5rem",
    hd2: "2.8rem",
    hd3: "2.2rem",
  },
  fontFamily: {
    hd1: "'Mali', cursive",
    hd2: "'Delius Swash Caps', cursive",
    hd3: "'IBM Plex Sans', sans-serif",
    hd4: "'Comic Neue', cursive",
  },
  color: {
    red: "#f20707",
    white: "#fff",
    black: "#000",
    lightGray: "#ccc",
    medGray: "#777",
    darkGray: "#222",
    lightBlue: "#edf0fe",
    medBlue: "#6b88fa",
    medDarkBlue: "#3f5fe0",
    darkBlue: "#23357d",
    darkBlueWithOp: "rgba(63, 95, 224, 0.5)",
    lightOrange: "#ffecd2",
    medOrange: "#ffa933",
    darkOrangeWithOp: "rgba(204, 128, 22, 0.5)",
    storeListsBackground: "#f3f4f9",
    userListsBackground: "#fff9ef",
    detailTitle: "rgba(51, 51, 51, 0.75)",
  },
  border: {
    userListStoreTitle: "2px solid rgba(63, 95, 224, 0.75)",
    userListButton: "2px solid #6b88fa",
    listInput: "1px solid #777",
    listInputFocus: "2px solid #3f5fe0",
  },
  padding: {
    listsPadding: "2rem 4.8rem",
  },
};

// #3e1cff
// #1cb7ff
// #ffa933
// #ffd9a4

export const SecondaryButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.1s linear;
  background: ${theme.color.storeListsBackground};
  color: ${theme.color.darkBlue};

  &:hover {
    background: ${theme.color.medBlue};
    color: white;
  }
`;

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;

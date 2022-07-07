import styled, { ThemeProvider } from "styled-components";

export const theme = {
  fontSize: {
    sm: "1.2rem",
    md: "1.4rem",
    lg: "2rem",
    hd2: "2.4rem",
    hd1: "4rem",
  },
  color: {
    white: "#fff",
    black: "#000",
    lightGray: "#ccc",
    medGray: "#999",
    darkGray: "#333",
  },
  buttonColor: {
    primary: "#4c8acc",
    primaryHover: "#56a0ee",
    secondary: "",
    secondaryHover: "#f1f8ff",
    secondaryText: "#034c99",
  },
  buttonBorder: {
    primary: "",
    secondary: "1px solid #4c8acc",
  },
};

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.1s linear;
  background: none;
  border: 2px solid #4c8acc;
  color: ${theme.buttonColor.secondaryText};

  &:hover {
    background: ${theme.buttonColor.secondaryHover};
  }
`;

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;

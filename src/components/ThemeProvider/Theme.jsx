import { ThemeProvider } from "styled-components";

export const theme = {
  fontSize: {
    sm: "1.2rem",
    md: "1.4rem",
    lg: "2rem",
    hd2: "2.4rem",
    hd1: "4rem",
  },
  color: {
    lightGray: "#ccc",
    medGray: "#999",
    primary: "#000",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;

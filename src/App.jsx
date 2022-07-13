import axios from "axios";
import Theme from "./components/ThemeProvider/Theme";
import GlobalStyles from "./constants/GlobalStyles";
import HomePage from "./pages/HomePage";

axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <HomePage />
      </Theme>
    </>
  );
}

export default App;

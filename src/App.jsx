import axios from "axios";
import Theme from "./components/ThemeProvider/Theme";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";

axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <GlobalStyles />
      <Theme>
        {/* <HomePage /> */}
        <HomePage2 />
      </Theme>
    </>
  );
}

export default App;

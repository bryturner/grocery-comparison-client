import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/Router";
import GlobalStyles from "./assets/GlobalStyles";

axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

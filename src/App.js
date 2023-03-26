import Main from "./Pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Users from "./Pages/Users";

const GlobalStyled = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};

export default App;

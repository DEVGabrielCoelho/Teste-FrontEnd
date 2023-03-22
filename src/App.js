import Main from "./Pages/Main";
import { createGlobalStyle } from "styled-components";

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
      <Main />;
    </>
  );
};

export default App;

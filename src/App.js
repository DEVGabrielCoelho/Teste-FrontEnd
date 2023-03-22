import styled from "styled-components";

const Body = styled.div`
  margin: 0;
  padding: 0;
`;
const Text = styled.div`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: 300px 0;
`;

function App() {
  return (
    <Body>
      <Text>Iniciando Projeto</Text>
    </Body>
  );
}

export default App;

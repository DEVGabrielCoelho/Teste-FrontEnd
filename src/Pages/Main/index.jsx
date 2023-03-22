import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Container title="Main" description="Main">
        Conteudo
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
